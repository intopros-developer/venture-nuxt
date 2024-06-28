const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1230px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            proximanova: ['ProximaNova'],
        },
        font: {
            bold: 600,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                DEFAULT: '#000000',
                700: '#353535',
            },
            grey: {
                DEFAULT: '#707070',
                500: '#636363',
            },
            lightgrey: {
                DEFAULT: '#586376',
            },
            white: '#ffffff',
            primary: {
                DEFAULT: '#00ADFF',
                700: '#0685C4',
            },
            green: '#59cd53',
            danger: '#cc4b37',
            blue: colors.blue,
            gray: colors.gray,
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
    ],
};
