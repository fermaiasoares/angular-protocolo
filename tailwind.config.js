/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        "./src/**/*.{html,ts}",
        "./src/**/**/**/**/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                //'galaxy': "url('https://source.unsplash.com/0o_GEzyargo')"
                'galaxy': "url('https://source.unsplash.com/1600x1200/?planet')"
            },
            keyframes: {
                'appear-from-left': {
                    from: { transform: 'translateX(-50px)', opacity: 0 },
                    to: { transform: 'translateX(0)', opacity: 1 }
                },
                'appear-from-right': {
                    from: { transform: 'translateX(50px)', opacity: 0 },
                    to: { transform: 'translateX(0)', opacity: 1 }
                }
            },
            animation: {
                'appear-from-left': 'appear-from-left 1s',
                'appear-from-right': 'appear-from-right 1s',
            }
        },
    },
    plugins: [],
}
