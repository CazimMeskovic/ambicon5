
import Link from "next/link";

interface JobCardProps {
	id: number;
	name: string;
	description: string;
	url?: string;
	callBack?: () => void;
	buttonText?: string;
}

const JobCard = ({ id, name, description, url, buttonText, callBack }: JobCardProps) => {
	console.log({ id, name, description, url, buttonText, callBack });

	const data = (
		<div
			className="mt-10 container border-bottom border-b  border-gray-300 cursor-pointer"
			onClick={callBack}
		>
			<div className="flex flex-wrap justify-center pb-5">
				<div className="md:w-2/3 w-full">
					<div className="mt-10 transition-transform hover-up">
						<h4 className="font-Tittle font-bold text-[#101828] text-[1.3rem] lg:text-[1.76rem] leading-[1.65rem] lg:leading-[2rem]">{name}</h4>
						<div
							className=" font-[400] text-[#475467] text-[16px] leading-[28px] mt-4"
							dangerouslySetInnerHTML={{ __html: description ?? "" }}
						/>
					</div>
				</div>
				<div className="md:w-1/3 mb-5 w-full mt-5 md:mt-0 flex md:justify-end justify-start items-center">
					<div className="list-icons hover-up pt-5">
						{url ? (
							<Link href={url} key={id}
								className="btn btn-black orenge_button orenge_button_1 pl-10 pr-12  mb-5 py-4 lg:py-6">
								{buttonText ? buttonText : "Mehr lesen"}

							</Link>
						) : (
							<button
								onClick={callBack}
								className="btn btn-black orenge_button orenge_button_1 pl-10 pr-12 mb-5 py-4 lg:py-6"
							>
								{buttonText ? buttonText : "Mehr lesen"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);

	if (url) {
		return <Link href={url}>{data}</Link>;
	} else {
		return data;
	}
};

export default JobCard;
