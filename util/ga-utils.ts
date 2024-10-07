import ReactGA from "react-ga4";

export const pageView = (url: string) => {
	ReactGA.send({ hitType: "pageview", page: url });
};

export const initGA = (id: string, production: boolean, url: string) => {
	if (production) {
		ReactGA.initialize(id);
		pageView(url);
	}
};
