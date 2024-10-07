import { FC } from "react";
import styles from "./BookingOption.module.scss";

const BookingOptionListItemIcon = () => {
	return (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.9999 0C4.93461 0 0 4.9345 0 10.9999C0 17.0654 4.93461 22 10.9999 22C17.0653 22 21.9999 17.0654 21.9999 10.9999C21.9999 4.9345 17.0654 0 10.9999 0ZM17.3163 9.14196L10.4056 16.0527C10.1118 16.3465 9.72115 16.5082 9.30564 16.5082C8.89013 16.5082 8.49952 16.3465 8.20568 16.0527L4.68358 12.5306C4.38974 12.2367 4.2279 11.8461 4.2279 11.4306C4.2279 11.015 4.38974 10.6244 4.68358 10.3305C4.97731 10.0367 5.36791 9.87485 5.78354 9.87485C6.19905 9.87485 6.58977 10.0367 6.8835 10.3306L9.30552 12.7526L15.1162 6.94193C15.41 6.64808 15.8006 6.48635 16.2161 6.48635C16.6316 6.48635 17.0222 6.64808 17.3161 6.94193C17.9228 7.54867 17.9228 8.53545 17.3163 9.14196Z"
				fill="#006D77"
			/>
		</svg>
	);
};

const BookingOptionListItem: FC<{ text: string }> = ({ text }) => {
	return (
		<div className={styles.listItem}>
			<BookingOptionListItemIcon />
			<span>{text}</span>
		</div>
	);
};

export const BookingOption: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.price}>300€</div>
			<div className={styles.headline}>Standard</div>
			<div className={styles.subheadline}>All the basics for businesses that are just getting started.</div>
			<div className={styles.divider}></div>
			<div className={styles.list}>
				<BookingOptionListItem text={"Unlimited updates"} />
				<BookingOptionListItem text={"Unlimited updates"} />
				<BookingOptionListItem text={"Unlimited updates"} />
			</div>

			<div className={styles.button}>Button</div>
		</div>
	);
};
