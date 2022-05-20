import { Link, Navigate } from "react-router-dom";
import { useTokenStorage } from "../hooks/useTokenStorage";
import { AccountForm } from "../components/AccountForm";
import { useUserInfo } from "../hooks/useUserInfo";
import { createUser } from "../services/usersService";
import { MessageWarn } from "../components/MessageWarn";

function Signup () {
	const { userInfoAuth, setUserInfoAuth, handlerSubmitUser, userErrorMessage } = useUserInfo(createUser);
	const { userTokenInfo } = useTokenStorage();

	if(userTokenInfo) return <Navigate to="/carList"/>;

	return(
		<main>
			{
				userErrorMessage
					? <MessageWarn message="Usuario ya registrado"/>
					: undefined
			}
			<AccountForm 
				typeForm="Crear cuenta" 
				userInfoAuth={userInfoAuth}
				setUserInfoAuth={setUserInfoAuth} 
				handlerSubmitUser={handlerSubmitUser} 
			/>
			<p>
                ¿Ya te has registrado? Inicia sesión 
				{" "}
				<Link to='/'>aquí</Link>
			</p>
		</main>
	);
}

export { Signup };