import { useRef, useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import { addCar } from "../../services/carInfoService";
import noImage from "../../assets/no-photo.png";
import styles from "./styles.module.css";

const INTIAL_STATE_CAR = {
	brand: "",
	model: "",
	year: ""
};

function AddCarForm () {
	const [uploadingData, setUploadingData] = useState(false);
	const [ carInfoInput, setCarInfoInput ] = useState(INTIAL_STATE_CAR);
	const [carImage, setcarImage] = useState(noImage);
	const inputImage = useRef(null);

	const readUrlImage = (e) => {
		if (inputImage && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				inputImage.current.setAttribute("src", e.target.result);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const addCarSubmit = async (e) => {
		e.preventDefault();
		setUploadingData(true);
		if(inputImage !== noImage && inputImage !== undefined) {
			const newCarInfo = {
				brand: carInfoInput.brand,
				model: carInfoInput.model,
				year: Number(carInfoInput.year),
				timestamp: new Date().getTime(),
				deleted: false
			};
			addCar(newCarInfo, carImage)
				.then(() => {
					setUploadingData(false);
					setCarInfoInput(INTIAL_STATE_CAR);
					setcarImage(noImage);
				})
				.catch((e) => {
					setUploadingData(false);
					console.warn(e);
				});
		}
	};

	const onChangeInputHandler = (e) => {
		setCarInfoInput({
			...carInfoInput,
			[e.target.name]: e.target.value
		});
	};

	return(
		<main>
			<div className={styles.addCarWrapper}>
				<h1 className={styles.title}>Añadir un vehículo</h1>
				<form className={styles.carFrom} onSubmit={addCarSubmit}>
					<figure className={styles.previewCar}>
						<input
							className={styles.addImageInput}							
							type="file"
							name="carImg"
							id="carImg"
							accept="image/*"
							onChange={e => {
								setcarImage(e.target.files[0]);
								readUrlImage(e);
							}}
						/>
						<label htmlFor="carImg">Agregar imagen</label>
						<img src={carImage ? carImage : noImage} ref={inputImage} alt="car preview" />
					</figure>
					<div className={styles.fromInputs}>
						<FormControl variant="standard">
							<InputLabel htmlFor='brandCar'>Marca</InputLabel>
							<Input 
								type="text" 
								id="brandCar" 
								name="brand"
								aria-describedby='brand-helper'
								value={carInfoInput.brand}
								onChange={onChangeInputHandler}
							/>
						</FormControl>
						<FormControl variant="standard">
							<InputLabel htmlFor='modelCar'>Modelo</InputLabel>
							<Input 
								type="text" 
								id="modelCar" 
								name="model"
								aria-describedby='model-helper'
								value={carInfoInput.model}
								onChange={onChangeInputHandler}
							/>
						</FormControl>
						<FormControl variant="standard">
							<InputLabel htmlFor='yearCar'>Año</InputLabel>
							<Input 
								type="number" 
								id="yearCar" 
								name="year"
								aria-describedby='year-helper'
								value={carInfoInput.year}
								onChange={onChangeInputHandler}
							/>
						</FormControl>
					</div>
					<div className={styles.addCarButton}>
						<Button 
							disabled={uploadingData} 
							variant="contained" 
							type="submit" 
							sx={{
								width: "12rem",
								marginLeft: "auto",
								marginRight: 0,
								marginTop: "1rem"
							}}>
							Agregar vehículo
						</Button>
					</div>
				</form>
			</div>
		</main>
	);
}

export { AddCarForm };