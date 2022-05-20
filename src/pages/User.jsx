import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useTokenStorage } from "../hooks/useTokenStorage";
import { logout } from "../services/usersService";
import { NavBar } from "../components/NavBar";

function User () {
	const navigate = useNavigate();
	const { userTokenInfo } = useTokenStorage();

	const handleLogout = () => {
		logout()
			.then(() => {
				window.sessionStorage.removeItem("USER_TOKEN_SESSION");
				navigate("/");
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	if(!userTokenInfo) return <Navigate to="/"/>;

	return(
		<div>
			<main>
				<p>Has iniciado sesión con {" "}<span>{userTokenInfo.email}</span></p>
				<Button 
					onClick={handleLogout}
					variant="contained" 
					type="button" 
					sx={{
						width: "12rem",
						marginLeft: "auto",
						marginRight: 0,
						marginTop: "1rem"
					}}
				>
                    Cerrar sesión
				</Button>
			</main>
			<NavBar/>
		</div>
	);
}

export { User };