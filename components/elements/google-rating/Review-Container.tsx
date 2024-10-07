import React, { useEffect, useState } from "react";
import GoogleRating from "./GoogleRating";

const RatingsContainer = () => {
	const [ratingData, setRatingData] = useState({
		rating: 0,
		reviewCount: 0,
	});

	useEffect(() => {
		const fetchRatingData = async () => {
			const res = await fetch("/api/reviews");
			const data = await res.json();
			if (data) {
				setRatingData({
					rating: data.averageRating,
					reviewCount: data.totalReviewCount,
				});
			}
		};

		fetchRatingData();
	}, []);

	return <GoogleRating rating={ratingData.rating} reviewCount={ratingData.reviewCount} url={""} />;
};

export default RatingsContainer;
