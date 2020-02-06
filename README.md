# typscript
typescriptstudy
setting
1.npm init => check make package.json

2.yarn global add global typescript 

3.npm install add -g typescript

4.npm install add -g ts-node

5.package.json have to add  "dependencies": {
    "typescript": "^3.7.5"
  }

6.tsc --init => setting tsconfig.json
"compilerOptions": {
    "target": "ES2015",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }, "include": ["./src/**/*"],
  "exclude": ["node_modules"] 
 * this src = write typescript dir name outDir = write out.js dir name

7.yarn add tsc-watch --dev => package.json have to add   
"devDependencies": {
    "tsc-watch": "^4.1.0"
}

8.package.json write  
"scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\""
},

9.write yarn start check dist index.js & index.js.map

10.if you change ts code it will be auto compiler and run