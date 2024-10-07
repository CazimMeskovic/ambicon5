
import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1200px',
        '2xl': '1444px',
      },
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      colors: {
        /* All pages */
        homBG: '#ffffff',
        bigDawnCardBG: '#bee1e6',
        buttonBG: '#ee7100',
        firstCard: '#5ca1a8',
        thirtCard: '#fff3ea',
      },
      fontFamily: {
        /* All pages */
        Tittle: ['Chivo', 'sans-serif'],
        Paragra: ["Noto Sans", 'sans-serif'],
        Tittle1:['Chivo'],
        chivo: ['Chivo', 'sans-serif'],
       
       
      },
      fontWeight: {
        chivoT: '300',
        thin: '100',
      },
      /* footer start */
      row: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '-0.75rem',
        marginRight: '-0.75rem',
      },
      spacing: {
        '100': '25rem', 
        '50': '12.5rem', 
      },


      /* footer end */
    },
  },
  plugins: [],
};
export default config;