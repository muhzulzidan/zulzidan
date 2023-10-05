/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/templates/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Poppins', ...defaultTheme.fontFamily.sans],
                body: ['Questrial', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.amber,
                gray: colors.neutral,
            },
        },
    },
    plugins: [
    require('@tailwindcss/typography'),
],
}