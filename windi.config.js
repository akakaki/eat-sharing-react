import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	extract: {
		include: ['**/*.{html,scss,jsx,tsx}'],
		exclude: ['node_modules', '.git', 'build']
	}
})
