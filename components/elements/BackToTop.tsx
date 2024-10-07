import { useEffect, useState } from "react";


function BackToTop() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const onScroll = () => {
		if (window.scrollY > 100 && !hasScrolled) {
			setHasScrolled(true);
		} else if (window.scrollY < 100 && hasScrolled) {
			setHasScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});


	return (
		<>
			{hasScrolled && (

				<a
					id="scrollUp"
					href="#top"
					style={{ position: "fixed", zIndex: "100 !important" }}
					className="fixed bottom-5 right-5 bg-[#006d77] w-10 h-10 rounded-full flex items-center justify-center"
				>
					<span className="font-semibold text-white">⇧</span>
				</a>

			)}
		</>
	);
}
export default BackToTop;

