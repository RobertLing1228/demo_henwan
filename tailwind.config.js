module.exports = {
	darkMode: "class",
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},
	content: [],
	theme: {
		extend: {
			fontFamily: {
				'body': [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
					'Open Sans'
				],
				'sans': [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				]
			},
			colors: {
				primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
			},
			animation: {
				"spin-slow": "spin 10s linear infinite",
				"pulse-slow": "pulse 5s linear infinite",
				"ping-slow": "ping 2s linear infinite",
				"wiggle-short": 'wiggle 1s ease-in-out',
			},
			variants: {
				extend: {
					backgroundColor: ["checked"],
					borderColor: ["checked"],
					inset: ["checked"],
					zIndex: ["hover", "active"],
				},
			},
			backgroundImage: (theme) => ({
				check: "url('/icons/check.svg')",
				landscape: "url('/images/landscape/2.jpg')",
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
	future: {
		purgeLayersByDefault: true,
	},
};
