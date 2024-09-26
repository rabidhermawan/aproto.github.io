/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "..index.html",
    "./quiz1.html", 
    "./pages/**/*.html",
    "./quiz1/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        rocksalt: ["Rock Salt"],
        plexmono: ["Courier Prime"],
        playwrigtcl: ["Playwrite CL"],
        vibur: ["Vibur"],
      }
    },
  },
  plugins: [],
}

