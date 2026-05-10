import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a2e',
          50: '#f4f4f7',
          900: '#1a1a2e',
        },
        surface: {
          light: '#ffffff',
          dark: '#0d1117',
        },
        accent: {
          light: '#0f766e',
          dark: '#58a6ff',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.900'),
            '--tw-prose-headings': theme('colors.ink.900'),
            '--tw-prose-links': theme('colors.accent.light'),
            '--tw-prose-bold': theme('colors.ink.900'),
            '--tw-prose-code': theme('colors.ink.900'),
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'pre code': { all: 'unset' },
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#c9d1d9',
            '--tw-prose-headings': '#f0f6fc',
            '--tw-prose-links': theme('colors.accent.dark'),
            '--tw-prose-bold': '#f0f6fc',
            '--tw-prose-code': '#f0f6fc',
          },
        },
      }),
    },
  },
  plugins: [typography],
};
