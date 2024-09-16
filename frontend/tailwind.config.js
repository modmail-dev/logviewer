/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--background-primary)',
				secondary: 'var(--background-secondary)',
				search: 'var(--background-tertiary)',
				button: 'var(--brand-500)',
				'button-hover': 'var(--brand-560)',
				'button-active': 'var(--brand-600)',
				'button-secondary': 'var(--button-secondary-background)',
				'button-secondary-hover': 'var(--button-secondary-background-hover)',
				'button-secondary-active': 'var(--button-secondary-background-active)',
				input: 'var(--input-background)',
				card: 'var(--deprecated-card-bg)',
				floating: 'var(--background-floating)',
				'floating-hover': 'var(--background-floating-hover)',
				'floating-focus': 'var(--background-floating-focus)'
			},
			textColor: {
				nav: 'var(--channels-default)',
				'nav-interactive': 'var(--interactive-normal)',
				'nav-interactive-hover': 'var(--interactive-hover)',
				'nav-interactive-active': 'var(--interactive-active)',
				normal: 'var(--text-normal)',
				'header-primary': 'var(--header-primary)',
				'header-secondary': 'var(--header-secondary)',
				button: 'var(--white-500)',
				'button-hover': 'var(--white-300)',
				brand: 'var(--brand-500)'
			},
			borderColor: {
				input: 'var(--input-background)',
				subtle: 'var(--border-subtle)'
			}
		}
	},
	plugins: []
};
