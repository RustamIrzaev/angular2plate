1. Do `npm init -f` and do changes in `project.json` file according to your project

2. Do `npm install core-js rxjs zone.js --save`

3. Do `npm install @angular/common @angular/compiler @angular/core @angular/forms
       @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router --save`

4. Do `npm install typescript --save-dev`

5. Do `npm install typings --save-dev`

6. Do `npm install webpack@beta webpack-dev-server --save-dev`

7. Do `npm install ts-loader css-loader extract-text-webpack-plugin@2.0.0-beta.5 node-sass sass-loader raw-loader --save-dev`

8. Init typings in one of two ways:

    a) Create `typings.json` file
    ```
    {
      "globalDependencies": {
        "core-js": "registry:dt/core-js#0.9.7+20161130133742",
        "node": "registry:dt/node#7.0.0+20170123051134"
      }
    }
    ```
    b) Do `node_modules/.bin/typings install`

    **OR** execute commands:

    ```
    node_modules/.bin/typings install dt~core-js --global --save
    node_modules/.bin/typings install dt~node --global --save
    ```

9. Todo

10. To check available version of a package: `npm show <package>@* version`