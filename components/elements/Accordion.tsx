

import { FC, useState } from "react";
import "../../src/app/[locale]/personalverrechnung/Accordion.css"

interface Props {
	data: { title: string; content: string; listData: string[] }[];
}

const Accordion: FC<Props> = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="  accordion" id="accordionFAQ">
			{data?.map((item, index) => (
				<div className={` accordion-item  ${activeIndex === index ? " active " : ""}`} key={index}>
					<h2 className="font-[300] text-[35px] leading-[42px] sm:text-[50px] sm:leading-[62px] lg:text-[64px] lg:leading-[72px] font-Tittle  text-[#667085] accordion-header" onClick={() => handleToggle(index)}>
						<button
							className={` accordion-button ${activeIndex === index ? "active" : ""}`}
						>
							{item.title}
						</button>
						<span className={` accordion-icon ${activeIndex === index ? "rotate" : ""}`}></span>
					</h2>
					<div className={` accordion-body ${activeIndex === index ? " show" : ""}`}>
						<div>{item.content}</div>
						<ul style={{ listStyle: "inside", paddingTop: 12 }}>
							{item.listData?.map((liItem, subindex) => (
								<li key={subindex}>{liItem}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
