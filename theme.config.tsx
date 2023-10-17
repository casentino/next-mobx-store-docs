import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Logo from './src/components/Logo';
const config: DocsThemeConfig = {
	logo: Logo,
	project: {
		link: 'https://github.com/casentino/next-mobx-store',
	},
	footer: {
		component: null
	},
	toc: {
		float: false,
		backToTop: true
	},
	feedback: {
		content: null
	},
	editLink: {
		text: null
	}
}

export default config
