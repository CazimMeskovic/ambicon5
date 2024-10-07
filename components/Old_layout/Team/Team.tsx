
import { useTranslations } from 'next-intl';
import TeamCard from "../../elements/TeamCard";
import "./Team.css"


export interface TeamItem {
	image: string;
	name: string;
	email: string;
	tel: string;
	position: string;
	socialFb?: string;
	socialTwitter?: string;
	socialLi?: string;
	langs: string[];
}

const TeamMembers = () => {
	const t = useTranslations('AllPage');

	const getJoinUsPhoto = (language: string) => {
		console.log(language);
		switch (language) {
			case "Deutsch":
				return "/imgs/team/joinus-ambicon-de.webp";
			case "English":
				return "/imgs/team/joinus-ambicon-en.webp";
			case "BHS":
				return "/imgs/team/joinus-ambicon-bs.webp";
		}
	};

	const team: TeamItem[] = [
		{
			image: "/imgs/team/suad-ferhatbegovic-ambicon.webp",
            name: "Suad Ferhatbegovic, MA",
			email: "sf@ambicon.at",
			tel: "+43 (1) 908 19 99",
			position: "managing partner",
			socialLi: "https://www.linkedin.com/in/suad-ferhatbegovi%C4%87-71104219/",
			langs: ["de", "en", "bks"],
		},
		{
			image: "/imgs/team/dzevad-ferhatbegovic-ambicon.webp",
			name: "Dzevad Ferhatbegovic, B.A.",
			email: "df@ambicon.at",
			tel: "+43 (1) 908 19 99 12",
			position: "financial reporting team lead",
			socialLi: "https://www.linkedin.com/in/d%C5%BEevad-ferhatbegovi%C4%87-55893a175",
			langs: ["de", "en", "bks"],
		},
		{
			image: "/imgs/team/azemina-dulic-ambicon.webp",
			name: "Azemina Dulic, BSc (WU)",
			email: "azd@ambicon.at",
			tel: "+43 (1) 908 19 99 15",
			socialLi: "https://www.linkedin.com/in/azemina-dulic-bsc-wu-323b00200/",
			position: "payroll team lead",
			langs: ["de", "en", "bks"],
		},
		{
			image: "/imgs/team/edin-dulic-ambicon.webp",
			name: "Dipl. oec. Edin Dulic",
			tel: "+43 (1) 908 19 99 17",
			email: "edd@ambicon.at",
			socialLi: "https://www.linkedin.com/in/edin-dulic-967655253",
			position: "accounting team lead",
			langs: ["de", "en", "bks"],
		},
		{
			image: "/imgs/team/georg-danzinger-ambicon.webp",
			name: "Georg Danzinger, MSc",
			tel: "+43 676 666 50 62",
			email: "finance@ambicon.at",
			socialLi: "",
			position: "corporate-finance- experte",
			langs: ["de", "en"],
		},
		{
			image: "/imgs/team/markus-boehm-ambicon.webp",
			name: "Markus Böhm, MBA CMC",
			tel: "+43 681 816 171 40",
			email: "finance@ambicon.at",
			socialLi: "",
			position: "corporate-finance- experte",
			langs: ["de", "en"],
		},
		{
			image: getJoinUsPhoto(t("current_language")) ?? "",
			name: t("about_us_team_join_us_title"),
			tel: "+43 (1) 908 19 99 47",
			email: "career@ambicon.at",
			position: t("about_us_team_join_us_subtitle"),
			langs: [],
		},
	];

	return (
		<div className="text-[0.88rem] leading-[1.19rem] text-[rgb(102,112,133)] paragraf_text box-swiper">
			<div className="flex flex-wrap ">
				{team.map((member, i) => (
					<div key={i} className="w-full sm:w-[100%] md:w-1/2 lg:w-1/4 px-2 mb-4">
						<TeamCard teamMember={member}></TeamCard>
					</div>
				))}
			</div>
		</div>


	);
};

export default TeamMembers;





