import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useTokenStorage } from "../hooks/useTokenStorage";
import { SearchInput } from "../components/SearchInput";
import { getCar } from "../services/carInfoService";
import { NavBar } from "../components/NavBar";
import { CarList } from "../components/CarList";
import { Loader } from "../components/Loader";

function AvailableCar() {
	const [searchInput, setSearchInput] = useState("");
	const [carList, setCarList] = useState([]);
	const [loadData, setLoadData] = useState(true);
	const { userTokenInfo } = useTokenStorage();
	
	const getCarData = async () => {
		const snapShot = await getCar();
		const carList = [];
		snapShot.forEach(doc => {
			carList.push({
				id: doc.id,
				carInfoItem: doc.data()
			});
		});
		setCarList(carList);
	};

	useEffect(() => {
		getCarData()
			.then(() => {
				setLoadData(false);
			})
			.catch((e) => {
				console.warn(e);
				setLoadData(false);
			});
	}, []);


	if(!userTokenInfo) return <Navigate to="/"/>;

	return(
		<div>
			<main>
				<SearchInput searchInputValue={searchInput} setSearchInput={setSearchInput} />
				{
					loadData
						? <Loader/>
						: <CarList searchInput={searchInput} carList={carList} />
				}
			</main>
			<NavBar/>
		</div>
	);
}

export { AvailableCar };