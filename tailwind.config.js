// tailwind.config.js
module.exports = {
    content: ['./src/*.{html,js}'], 
    darkMode: 'class', // Enable dark mode using class strategy
    theme: {
        extend: {
            animation: {
                'gradient-move': 'gradient-move 8s ease infinite',
            },
            keyframes: {
                'gradient-move': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
        },
    },
    plugins: [],
};