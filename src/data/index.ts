import weatherly from "@/images/weatherly.png";
import littleLemon from "@/images/little-lemon.png";

export interface Project {
	id: number;
	featured: boolean;
	tag: string;
	title: string;
	desc: string;
	stack: string[];
	imageSrc: string;
	live: string;
	repo: string;
}

export interface GhostCard {
	ghost: true;
	label: string;
}

export type ProjectItem = Project | GhostCard;

export interface Illustration {
	id: number;
	caption: string;
	// placeholder color shown until you have real artwork
	color: string;
	aspectRatio: string;
}

export interface GhostIllustration {
	ghost: true;
	label: string;
}

export type IllustrationItem = Illustration | GhostIllustration;

export const projects: ProjectItem[] = [
	{
		id: 1,
		featured: true,
		tag: "Featured . 2026",
		title: "Weatherly",
		desc: "A responsive weather app with live forecasts, hourly scrolling, and dynamic city photography pulled straight from Wikipedia.",
		stack: ["React", "Javascript", "CSS", "REST APIs", "Wikipedia API", "Git"],
		imageSrc: weatherly,
		live: "https://demi-sokoya.github.io/weather-app/",
		repo: "https://github.com/demi-sokoya/weather-app",
	},

	{
		id: 2,
		featured: false,
		tag: "2026",
		title: "Little Lemon",
		desc: "A responsive React SPA featuring client-side routing, form validation, reusable components, and a Jest test suite.",
		stack: [
			"React",
			"JavaScript",
			"React Router",
			"Jest",
			"React Testing Library",
			"Git",
			"CSS",
		],
		imageSrc: littleLemon,
		live: "http://demi-sokoya.github.io/little-lemon-restaurant",
		repo: "http://github.com/demi-sokoya/little-lemon-restaurant",
	},
	{ ghost: true, label: "In progress" },
];

export const illustrations: IllustrationItem[] = [
	{
		id: 1,
		caption: "Orbit I — digital, 2024",
		color: "#2D1B4E",
		aspectRatio: "4/3",
	},
	{
		id: 2,
		caption: "Still Life No. 3 — mixed media, 2024",
		color: "#F0EAD6",
		aspectRatio: "5/4",
	},
	{
		id: 3,
		caption: "Night City — digital, 2023",
		color: "#1C2B3A",
		aspectRatio: "4/3",
	},
	{ ghost: true, label: "More coming" },
];

export const skills: string[] = [
	"React",
	"TypeScript",
	"JavaScript (ES6+)",
	"HTML & CSS",
	"Node.js",
	"Git & GitHub",
	"Figma",
	"Adobe Illustrator",
	"Responsive design",
	"Accessibility",
	"Performance optimization",
];
