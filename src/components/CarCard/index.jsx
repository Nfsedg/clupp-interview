import { PropTypes } from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateCarInfo } from "../../services/carInfoService";
import style from "./styles.module.css";

function CarCard({id, img, brand, model, year }) {
	const handleDeleteImage = () => {
		updateCarInfo(id, true)
			.then(() => {
				window.location.reload();
			})
			.catch(e => {
				console.warn(e);
			});
	};

	return(
		<article className={style.carCardWrapper}>
			<figure className={style.carCardImage}>
				<div 
					className={style.deleteIconWrapper}
					onClick={handleDeleteImage}
				>
					<DeleteIcon/>
				</div>
				<img src={img} alt={`${brand} ${model} image`} />
			</figure>
			<h2 className={style.carCardName}>{`${brand} ${model} ${year}`}</h2>
		</article>
	);
}

export { CarCard };

CarCard.propTypes = {
	id: PropTypes.string,
	img: PropTypes.string,
	brand: PropTypes.string, 
	model: PropTypes.string, 
	year: PropTypes.number
};