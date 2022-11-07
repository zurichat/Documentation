const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "Zuri Chat",
		tagline: "Developer docs and guides",
		url: "https://docs.zuri.chat",
		baseUrl: "/",
		onBrokenLinks: "ignore",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/zurichatlogo.svg",
		organizationName: "zurichat/", // Usually your GitHub org/user name.
		projectName: "documention", // Usually your repo name.

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						routeBasePath: "/",
						sidebarPath: require.resolve("./sidebars.js"),
						// Please change this to your repo.
						editUrl: "https://github.com/zurichat/documention/",
					},
					blog: {
						showReadingTime: true,
						// Please change this to your repo.
						editUrl:
							"https://github.com/zurichat/documention/tree/main/blog/",
					},
					theme: {
						customCss: require.resolve("./src/css/custom.css"),
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				navbar: {
					title: "Zuri Chat",
					logo: {
						alt: "Zuri Chat Logo",
						src: "img/zurichatlogo.svg",
					},
					items: [
						{
							type: "doc",
							docId: "intro",
							position: "left",
							label: "Docs",
						},
						{
							href: "https://github.com/zurichat/documention",
							label: "GitHub",
							position: "right",
						},
					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Docs",
							items: [
								{
									label: "Documentation",
									to: "/docs/intro",
								},
							],
						},
						{
							title: "Community",
							items: [
								{
									label: "Stack Overflow",
									href: "https://stackoverflow.com/questions/tagged/docusaurus",
								},
								{
									label: "Discord",
									href: "https://discordapp.com/invite/docusaurus",
								},
								{
									label: "Twitter",
									href: "https://twitter.com/hngi",
								},
							],
						},
						{
							title: "More",
							items: [
								{
									label: "GitHub",
									href: "https://github.com/facebook/docusaurus",
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} Zuri Chat, Inc. Built with Docusaurus.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);
