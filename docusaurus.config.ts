import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "アークナイツ×エモクロアTRPG サイド・オリパシー",
	tagline: "エモクロアTRPG追加ルール",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://bi9dri.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/emoklore-arknights-side-oripathy/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "bi9dri", // Usually your GitHub org/user name.
	projectName: "emoklore-arknights-side-oripathy", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "ja",
		locales: ["ja"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
				gtag: {
					trackingID: "G-YT5ST8BYXJ",
					anonymizeIP: true,
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "アークナイツ×エモクロアTRPG サイド・オリパシー",
			// logo: {
			//   alt: 'My Site Logo',
			//   src: 'img/logo.svg',
			// },
			items: [
				{
					type: "docSidebar",
					sidebarId: "rulesSidebar",
					position: "left",
					label: "ルール",
				},
				{
					href: "/converter",
					position: "left",
					label: "コンバーター",
				},
				{
					href: "https://github.com/bi9dri/emoklore-arknights-side-oripathy",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			// links: [
			//   {
			//     // title: 'Docs',
			//     items: [
			//       {
			//         label: 'ルール',
			//         to: '/docs/intro',
			//       },
			//     ],
			//   },
			//   {
			//     // title: 'More',
			//     items: [
			//       {
			//         label: 'GitHub',
			//         href: 'https://github.com/bi9dri/emoklore-arknights-side-oripathy',
			//       },
			//     ],
			//   },
			// ],
			copyright: `Copyright © ${new Date().getFullYear()} びどり. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
