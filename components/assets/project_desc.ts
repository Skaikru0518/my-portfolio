interface Projects {
	title: string;
	description: string;
	tags: string[];
	githubUrl: string;
	liveUrl: string;
	featured: boolean;
}

export const project_desc: Projects[] = [
	{
		title: "ZenTrader",
		description:
			"Full-Stack crypto trading desktop application with Electron and React.",
		tags: ["React", "Electron", "JavScript", "RESTapi", "Bybit"],
		githubUrl: "https://github.com/Skaikru0518/bybit-electron-app",
		liveUrl: "https://github.com/Skaikru0518/bybit-electron-app/releases",
		featured: true,
	},
	{
		title: "Expense Tracker",
		description:
			"Full-Stack app to manage expenses with React + Express + MongoDB",
		tags: ["Vite", "JavaScript", "MongoDB", "RESTapi"],
		githubUrl: "https://github.com/Skaikru0518/expense-tracker",
		liveUrl: "https://expense-tracker-1rww.onrender.com/login",
		featured: true,
	},
	{
		title: "Crypto Position Calculator",
		description:
			"A C# .NET app for quick crypto caluclations for your positions",
		tags: ["C#", ".NET"],
		githubUrl: "https://github.com/Skaikru0518/CryptoCalculator",
		liveUrl:
			"https://github.com/Skaikru0518/CryptoCalculator/releases/tag/v1.0.4",
		featured: true,
	},
	{
		title: "Immonolgy API Backend",
		tags: ["NestJS", "TypeScript"],
		description:
			"A NestJS-based backend application modeling an immunology database.",
		githubUrl: "https://github.com/Skaikru0518/immun-api",
		liveUrl: "https://immun-api.onrender.com/api#/",
		featured: true,
	},
	{
		title: "Project Management",
		tags: ["NextJS", "TypeScript"],
		description:
			"A NextJS-based fullstack application modeling a project managementy system, for companies.",
		githubUrl: "https://github.com/Skaikru0518/project-manager-pub/",
		liveUrl: "https://project-manager-skaikru.vercel.app/",
		featured: true,
	},
];
