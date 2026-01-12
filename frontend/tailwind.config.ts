import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0d0df2",
                    hover: "#0000c0",
                    500: "#8b5cf6",
                    dark: "#7c3aed",
                },
                "background-light": "#f5f5f8",
                "background-dark": "#101022",
                "surface-dark": "#1c1c2e",
                "surface-highlight": "#25253a",
                "card-dark": "#1a1a2e",
                "card-hover": "#22223b",
                accent: "#06b6d4",
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                body: ["Noto Sans", "sans-serif"],
                sans: ["Plus Jakarta Sans", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            }
        },
    },
    plugins: [],
};
export default config;
