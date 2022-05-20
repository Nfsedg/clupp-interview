import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ViewListIcon from "@mui/icons-material/ViewList";
import style from "./styles.module.css";

function NavBar() {
	return(
		<nav className={style.navbarWrapper}>
			<ul className={style.navbarList}>
				<li><Link to="/user"><PersonIcon/></Link></li>
				<li><Link to="/carList"><ViewListIcon/></Link></li>
				<li><Link to="/addCar"><FileUploadIcon/></Link></li>
			</ul>
		</nav>
	);
}

export { NavBar };