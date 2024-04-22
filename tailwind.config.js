/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      keyframes: {
        spin2: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        spin2: 'spin 30s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{    
        'max-4xl': {'max':'1896px'},
        'max-4xlsm': {'max':'1736px'},
        'max-3xlsm': {'max':'1660px'},
        'max-3xl': {'max':'1536px'},
        'max-2xl': {'max':'1440px'},
        'max-xl': {'max':'1280px'},
        'max-tab':{'max':'1024px'},
        'max-lg': {'max':'1024px'},
        'max-smlg': {'max':'990px'},     
        'max-md': {'max':'768px'},   
        'max-sm': {'max':'640px'},     
        'max-xs': {'max':'374px'} 
      },
      colors:{
        "c-green-600":"#155C27",
        "c-green-200":"#E6F8C4",
        "c-gray-500":"#494C4B",
        "c-gray-600":"#1F2120",
        'c-salmon-100':"#FBF7F6",
        'c-salmon-500':"#E56655",
        'c-purple-100':"#FEFCFF",
        'c-gray-400':"#959A99",
        'c-teal-600':"#045B50",    
        'c-teal-500':"#009A75"    
        
      },
      fontFamily:{
        'mulish':['Mulish','sans-serif']
      }
    },
  },
  plugins: [],
};
