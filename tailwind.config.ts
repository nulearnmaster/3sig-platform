import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sig-green': '#10B981',
        'sig-dark': '#0A0A0A',
        'sig-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
export default config