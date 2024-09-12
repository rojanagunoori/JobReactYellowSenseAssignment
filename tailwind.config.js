// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        lightMaroon: '#A52A2A',
        darkMaroon: '#5C0000',
        lighterMaroon: '#C04040',
        darkestMaroon: '#3D0000',
        maroon: '#800000',
        lightMaroon: '#A52A2A',
        darkMaroon: '#5C0000',
        lighterMaroon: '#C04040',
        darkestMaroon: '#3D0000',
        bodyBg: '#F4F4F4',
        containerBg: '#FFFFFF',
        subContainerBg: '#F9F9F9',
        mainHeadingBg: '#F0E5E5',
        subParaColor: '#333333',
      },
      boxShadow: {
        '3d': '0 10px 20px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'hover-3d': '0 15px 30px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        rotate360: 'rotate-360 1s linear infinite',
        bounceIn: 'bounceIn 0.8s ease-out',
        pulse: 'pulse 1.5s infinite',
        shimmer: 'shimmer 1.5s infinite',
        scaleUp: 'scaleUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
