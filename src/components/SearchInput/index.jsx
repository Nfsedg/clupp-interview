import { FormControl, InputLabel, Input } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function SearchInput({ searchInputValue, setSearchInput }) {
	const onChangeHandler = (e) => {
		setSearchInput(e.target.value);
	};

	return(
		<div className={styles.searchInputWrapper}>
			<FormControl 
				variant="standard" 
				sx={{
					width: "100%"
				}}>
				<InputLabel htmlFor='searchInput'>Búsqueda</InputLabel>
				<Input 
					type="text" 
					id="searchInput" 
					name="search"
					aria-describedby='search-helper'
					value={searchInputValue}
					onChange={onChangeHandler}
					placeholder="Ingresa la marca, modelo o año"
				/>
			</FormControl>
		</div>
	);
}

export { SearchInput };

SearchInput.propTypes = {
	searchInputValue: PropTypes.string.isRequired,
	setSearchInput: PropTypes.func.isRequired
};