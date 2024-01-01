/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      maxWidth: {
        primary: '1920px',
      },
      colors: {
        // we've added our own colour that maps to Payload's css variable so we can re-use the same theme styling!
        error: 'var(--theme-error-400)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
