import PropTypes from "prop-types";
import { Alert } from "@mui/material";

function MessageWarn ({message}) {
	return(
		<div style={{
			width: "80%",
			maxWidth: "17rem",
			margin: "0 auto",
			marginTop: "2rem"
		}}>
			<Alert severity="error">{message}</Alert>
		</div>
	);
}

export { MessageWarn };

MessageWarn.propTypes = {
	message: PropTypes.string.isRequired
};