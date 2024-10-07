import { FC } from "react";
import Modal from "react-modal";
import { BookingOption } from "../../../elements/booking-options/BookingOption";
import styles from "./BookingDialog.module.scss";
interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const BookingDialog: FC<Props> = ({ isOpen, setIsOpen }) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			zIndex: "1000",
			border: "unset",
			padding: "unset",
			backgroundColor: "transparent",
		},
		overlay: {
			zIndex: 10,
		},
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<Modal
				ariaHideApp={false}
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className={styles.bookingContainer}>
					<BookingOption />
					<div className={styles.bookingDivider}></div>
					<BookingOption />
				</div>
			</Modal>
		</div>
	);  
};

