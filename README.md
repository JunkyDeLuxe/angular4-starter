![dependencies](https://david-dm.org/JunkyDeLuxe/angular4-starter.svg)

# Angular v4 with Webpack 2+

Complete starter for Angular 2 using Webpack works with JWT
Including a login, about, 404, commons header and footer components in order to create a generic skeleton

1/
```
# clone the repo
git clone ...

# change directory to your app

# install the dependencies with npm
$ npm install

# start the server
$ npm run start
```

2/
Launch a web browser and go http://localhost:8080

3/
Test End to End with Protractor, Jasmine framework and Selenium for Chrome only.
```
# install Selenium
# From a new term tab, launch chrome webdrivers
./node_modules/protractor/bin/webdriver-manager start

# From an other term tab, launch npm start.

# From an other term tab
npm run e2e
```

4/ Using webpack dev server with a proxy url for your API routes.
Just use /api in order to by pass with the webpack proxy.

5/ CSS
* SASS only.
* Using bootstrap alpha v4.
* Using Angular ng-bootstrap official.
* Using postcss in order to postprocesses css rules with Webpack [postcss-loader](https://github.com/postcss/postcss-loader)


### Components
1. [webpack-v2](https://webpack.js.org/configuration/)
2. [bootstrap-v4](https://github.com/twbs/bootstrap/tree/v4-dev)
3. [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
4. [mixgen-sass-generator](https://github.com/neo9/mixgen)
5. [ng2-slim-loading-bar](https://github.com/akserg/ng2-slim-loading-bar)
6. [ng2-translate](https://github.com/ngx-translate/core)
7. [font-awesome](https://github.com/FortAwesome/Font-Awesome)
8. [JWT](https://github.com/auth0/angular2-jwt)

For each component, you are able to check documentation and example in order to improve your starting project.

### Details
* For [JWT](https://github.com/auth0/angular2-jwt), you can easily remove it if you don't want to use it.
It is used in the **login module**
If you want keep it, you have to get an API with JWT.
[Example with Nodejs](https://github.com/auth0/node-jsonwebtoken)
* Translations: Works with json keys, values and json files, **check ./public/locales/en.json**
* **About page** is protected by AuthGuard from JWT, you can't access it whithout a valid JWT token from the login page. 
If you want to access it anyway, you just have to remove the canActivate argument from **about.module.ts**

```
const routes: Routes = [
	{ path: 'about', component: AboutComponent, canActivate: [ AuthGuard ] }
];
```

### API
Webpack dev server enables a proxy url. Look at webpackconfig.js
```
proxy: {
    "/api": {
        target: "http://localhost:3000", // to be changed by the good api url
        pathRewrite: {"^/api" : ""}
    }
}
```

### Production
To build your application, run:
```
npm run build
```
You can now go to */dist* and deploy that with Nginx for example to your server!

### Preview
For see what it looks like:
[DEMO](http://angular-skeleton.surge.sh)
