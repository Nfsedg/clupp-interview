import { AddCarForm } from "../components/AddCarFrom";
import { useTokenStorage } from "../hooks/useTokenStorage";
import { NavBar } from "../components/NavBar";
import { Navigate } from "react-router-dom";

function AddCar () {
	const { userTokenInfo } = useTokenStorage();

	if(!userTokenInfo) return <Navigate to="/"/>;

	return(
		<div>
			<AddCarForm/>
			<NavBar/>
		</div>
	);
}

export { AddCar };