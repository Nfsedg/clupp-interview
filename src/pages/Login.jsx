import { Link, Navigate } from "react-router-dom";
import { useTokenStorage } from "../hooks/useTokenStorage";
import { AccountForm } from "../components/AccountForm";
import { loginUser } from "../services/usersService";
import { useUserInfo } from "../hooks/useUserInfo";
import { MessageWarn } from "../components/MessageWarn";

function Login () {
	const { userInfoAuth, setUserInfoAuth, handlerSubmitUser, userErrorMessage } = useUserInfo(loginUser);
	const { userTokenInfo } = useTokenStorage();

	if(userTokenInfo) return <Navigate to="/carList"/>;

	return(
		<main>
			{
				userErrorMessage
					? <MessageWarn message="Usuario o contraseña invalidos"/>
					: undefined
			}
			<AccountForm 
				typeForm="Iniciar sesión"
				userInfoAuth={userInfoAuth}
				setUserInfoAuth={setUserInfoAuth} 
				handlerSubmitUser={handlerSubmitUser} 
			/>
			<p>
                ¿Aún no tienes cuenta? Registrate 
				{" "}
				<Link to='signup'>aquí</Link>
			</p>
		</main>
	);
}

export { Login };