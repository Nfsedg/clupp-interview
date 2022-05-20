import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
	email: "",
	password: ""
};

const useUserInfo = (userMethod) => {
	const navigate = useNavigate();
	const [userErrorMessage, useUserErrorMessage] = useState(false);
	const [userInfoAuth, setUserInfoAuth] = useState(INITIAL_STATE);

	const handlerSubmitUser = (e) => {
		e.preventDefault();
		userMethod(userInfoAuth.email, userInfoAuth.password)
			.then(() => {
				navigate("/");
			})
			.catch(() => {
				useUserErrorMessage(true);
			});
		setUserInfoAuth(INITIAL_STATE);
	};


	return ({
		userInfoAuth,
		setUserInfoAuth,
		handlerSubmitUser,
		userErrorMessage
	});
};

export { useUserInfo };