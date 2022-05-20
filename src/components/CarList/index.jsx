import PropTypes from "prop-types";
import { CarCard } from  "../../components/CarCard";
import styles from "./styles.module.css";


function CarList({searchInput, carList}) {

	return(
		<section className={styles.listWrapper}>
			{
				carList.length === 0
					? <div/>
					: carList.map((item) => {
						const searchParameter = (parameter) => {
							return parameter.toLowerCase().includes(searchInput.toLowerCase());
						};
						if(item.carInfoItem.deleted === false) {
							if(searchParameter(item.carInfoItem.brand) || searchParameter(item.carInfoItem.model) || searchParameter(item.carInfoItem.year.toString())) {
								return (
									<CarCard 
										key={item.id}
										id={item.id}
										img={item.carInfoItem.frontPictureURL} 
										brand={item.carInfoItem.brand} 
										model={item.carInfoItem.model} 
										year={item.carInfoItem.year} 
									/>
								);
							}
						}
					})
			}
		</section>
	);
}

export { CarList };

CarList.propTypes = {
	searchInput: PropTypes.string.isRequired,
	carList: PropTypes.array
};