import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './pages/**/*.vue'
  ],

  theme: {
    extend: {
      colors: {
        custom: {
          50: 'rgb(var(--custom-primary) / <alpha-value>)',
          100: 'rgb(var(--custom-primary) / <alpha-value>)',
          200: 'rgb(var(--custom-primary) / <alpha-value>)',
          300: 'rgb(var(--custom-primary) / <alpha-value>)',
          400: 'rgb(var(--custom-primary) / <alpha-value>)',
          500: 'rgb(var(--custom-primary) / <alpha-value>)',
          600: 'rgb(var(--custom-primary) / <alpha-value>)',
          700: 'rgb(var(--custom-primary) / <alpha-value>)',
          800: 'rgb(var(--custom-primary) / <alpha-value>)',
          900: 'rgb(var(--custom-primary) / <alpha-value>)',
          950: 'rgb(var(--custom-primary) / <alpha-value>)',
        },
      }
    }
  }
}