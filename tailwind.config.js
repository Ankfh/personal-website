module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '200px',
            },
      'md': {
             'min': '800px' ,
            },

    },
   
    extend: {

      borderWidth: {
        
        6: '6px'
      },
    },
  },
  plugins: [],
}
