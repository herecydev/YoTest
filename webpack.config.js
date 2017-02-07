module.exports = {
 entry: "./src/js/App.tsx",
 output: {
   filename: "dist/bundle.js",
   path: "/"
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: "ts-loader",
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
};