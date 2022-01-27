## Full-Stack Project
1.Live Website Link- https://admiring-lewin-e1f4cc.netlify.app/
2.Github Client Site Link- https://github.com/rahmancoder/Mustafiz-travel-agency-endGame-client
3.Github Server Site Link- https://github.com/rahmancoder/server-mustafiz-travel-agency-endgame

## Tailwind Setup Instruction with React
* Setps
1. npx create-react-app my-project
     cd my-project 

2. npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

3. npm install @craco/craco

4. Include this on package.json file and replace these -
    
    "start": "craco start",
     "build": "craco build",
     "test": "craco test",


5. Create craco.config.js file in root directory--
     Paste these Command--
     // craco.config.js

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}


6. npx tailwindcss-cli@latest init

7. replace this (will removed Unused Css)-

     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

8. ./src/index.css add these lines of codes-
  
   /* ./src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   

9. Optional jsut check index.css is called/imported in index.js file or not. bydefault it will be there. 
     
     import './index.css';