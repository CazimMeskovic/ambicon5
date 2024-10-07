import Link from "next/link";
import { FC } from "react";
import { TeamItem } from "../Old_layout/Team/Team";
import Image from "next/image";
import "./TeamCard.css"

interface Props {
	teamMember: TeamItem;
}

const TeamCard: FC<Props> = ({ teamMember }) => {
	return (
		<div className="card-grid-style-5 move-up ">
			<span className="text-gray-500">
				<div className="mb-4">
					<Image
						src={teamMember.image}
						alt={teamMember.name}
						className=" "
						width={400} 
						height={128}
						objectFit="cover"
					/>
				</div>
				<span className="text-orange-900">[</span> {teamMember.position} <span className="text-orange-900">]</span>
			</span>
			<h3 className=" font-bold text-start text-[1.388rem] leading-[1.5rem] text-[rgb(16,24,40)] Tittle_text my-2">{teamMember.name}</h3>
			<Link href={"tel:" + teamMember.tel}>
				<span className="text-gray-600">
					<span className="text-orange-900">[</span> t <span className="text-orange-900">]</span> {teamMember.tel}
				</span>
			</Link>
			<br />
			<Link href={"mailto:" + teamMember.email}>
				<span className="text-gray-600">
					<span className="text-orange-900">[</span> e <span className="text-orange-900">]</span> {teamMember.email}
				</span>
			</Link>

			<div className="flex items-center mt-4">
				{teamMember.langs.map((lang, i) => (
					<div
						key={i}
						className="h-7 w-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm mr-2"
					>
						{lang.toUpperCase()}
					</div>
				))}

				{teamMember.langs.length > 0 && (teamMember.socialFb || teamMember.socialLi || teamMember.socialTwitter) && (
					<div className="mx-2 w-px h-6 bg-gray-300"></div>
				)}

				{teamMember.socialFb && (
					<Link href={teamMember.socialFb}>
						<span className="icon-socials icon-facebook text-blue-600"></span>
					</Link>
				)}
				{teamMember.socialTwitter && (
					<Link href={teamMember.socialTwitter}>
						<span className="icon-socials icon-twitter text-blue-400"></span>
					</Link>
				)}
				{teamMember.socialLi && (
				<div className="mt-[-1.3em] ml-[-0.6em] social-bottom">
				<Link href="https://www.linkedin.com/in/suad-ferhatbegovi%C4%87-71104219/"
					 className="icon-socials icon-linkedin" target="_blank" rel="noopener noreferrer">
				</Link>
			</div>
					
				
				)}
			</div>
		</div>
	);
};

export default TeamCard;
