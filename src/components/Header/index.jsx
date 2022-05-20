import cluppLogo from "../../assets/logo-clupp1.png";
import styles from "./styles.module.css";

function Header () {
	return(
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<img src={cluppLogo} alt="clupp logo" />
			</div>
		</header>
	);
}

export { Header };