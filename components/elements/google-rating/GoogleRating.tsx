import React from "react";
import Link from "next/link";
import styles from "./GoogleRating.module.css"
import Image from "next/image";
import picture from "../../../public/imgs/google-logo.png"

const GoogleRating = ({ rating, reviewCount, url }: { rating: number; reviewCount: number; url: string }) => {
	const fullStars = "★".repeat(Math.floor(rating));
	const halfStars = rating % 1 >= 0.5 ? "★" : "";
	const emptyStars = "☆".repeat(5 - Math.floor(rating) - (rating % 1 >= 0.5 ? 1 : 0));

	return (

		<Link href={url}
			target="_blank" rel="noopener noreferrer">
		
			<div className={styles.widgetContainer}>
				<div className=" w-12 mr-3 ">
					<Image
						className={styles.logo} src={picture} alt="Google" /> </div>
				<div className={styles.ratingContainer}>
					<div className=" text-nowrap mb-[-5px]">
						<div className={styles.title}>Google-Bewertungen</div>
					</div>
					<div className=" mb-[-5px] mt-[-5px] ">
						<div className={styles.ratingAndStars}>
							<div className={styles.ratingValue}>{rating.toFixed(1)}</div>
							<div className={styles.starsAndReviewCount}>
								<div className={styles.stars}>
									{fullStars}
									{halfStars}
									{emptyStars}
								</div>
								<div className={styles.reviewCount}>{reviewCount} Rezensionen</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Link>

	);
};

export default GoogleRating;
