## Flow of Project
1. Create a new project
```
npm create vite@latest ./ -- --template react
```

2. Install packages
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```


### Old Packages
* @react-three/fiber - react based threejs library, allows for code 3js code in a react fashion
* @react-three/drei - react based threejs library, allows for code 3js code in a react fashion
* maath - math utility funtion, geometry etc
* react-tilt - cool animation
* react-vertical-timeline-component - similar experience on Linkedin
* @emailjs/browser - 
* framer-motion - 
* react-router-dom - 

## deployment on Github Pages
1. Install gh-pages
```
npm install gh-pages --save-dev
```

2. Add the following scripts in your package.json
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

3. In the vite.config.js file add this line before plugins: [react()],
```
base: "/YOUR_REPOSITORY_NAME",
```

4. Deploy
```
npm run deploy
```

* https://www.youtube.com/watch?v=XhoWXhyuW_I


## How to get 3D models
1. Go to https://sketchfab.com/
2. Google Search for 3D models

## Note for Deployment

* set base as your repository name
* also react app root should be the same as your repository name
* ie., /portfolio should be the root of your react app

``` vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio'
})
```

