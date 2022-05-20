import PropTypes from "prop-types";
import { useState } from "react";
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./styles.module.css";

function AccountForm ({ typeForm, setUserInfoAuth, handlerSubmitUser, userInfoAuth }) {
	const [showPassword, setShowPassword] = useState(false);
	const materialQuery = useMediaQuery("(min-width:1300px)");

	const onChangeHandler = (e) => {
		const onChageData = {
			...userInfoAuth,
			[e.target.name]: e.target.value
		};
		setUserInfoAuth(onChageData);
	};
	const togglePassword = () => {
		setShowPassword(prev => !prev);
	};

	return(
		<section>
			<div className={styles.fromWrapper}>
				<h1>{typeForm}</h1>
				<form className={styles.form} onSubmit={handlerSubmitUser}>
					<FormControl variant="standard">
						<InputLabel htmlFor='emailInput'>Email</InputLabel>
						<Input 
							type="email" 
							id="emailInput" 
							name="email"
							aria-describedby='email-helper'
							onChange={onChangeHandler}
							value={userInfoAuth.email}
						/>
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor='passwordInput'>Password</InputLabel>
						<Input  
							type={showPassword ? "text" : "password"}
							id="passwordInput" 
							name="password"
							aria-describedby='password-helper'
							value={userInfoAuth.password}
							onChange={onChangeHandler}
							endAdornment={
								<InputAdornment position="end">
									<IconButton 
										aria-label="toggle password visibility"
										onClick={togglePassword}
									>
										{
											showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>
										}
									</IconButton>
								</InputAdornment>
							}/>
					</FormControl>
					<Button variant="contained" type="submit" sx={materialQuery 
						? {
							width: "15rem",
							margin: "0 auto",
							marginTop: "1rem"
						}
						: {
							width: "10rem",
							marginLeft: "auto",
							marginRight: 0,
							marginTop: "1rem"
						}
					}>
						{typeForm}
					</Button>
				</form>
			</div>
		</section>
	);
}

export { AccountForm };

AccountForm.propTypes = {
	typeForm: PropTypes.string.isRequired,
	setUserInfoAuth: PropTypes.func.isRequired,
	userInfoAuth: PropTypes.exact({
		email: PropTypes.string,
		password: PropTypes.string
	}),
	handlerSubmitUser: PropTypes.func.isRequired
};