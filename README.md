![dependencies](https://david-dm.org/JunkyDeLuxe/angular4-starter.svg)

### Browsers supports
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/vivaldi.png" alt="Vivaldi" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| - | -

# Angular v4 with Webpack

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
* Using bootstrap beta-4. (last one)
* Using Angular ng-bootstrap official.
* Using postcss in order to postprocesses css rules with Webpack [postcss-loader](https://github.com/postcss/postcss-loader)

### Components
1. [webpack](https://webpack.js.org/configuration/)
2. [bootstrap-v4](https://github.com/twbs/bootstrap/tree/v4-dev)
3. [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
4. [mixgen-sass-generator](https://github.com/neo9/mixgen)
5. [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
6. [ng2-translate](https://github.com/ngx-translate/core)
7. [font-awesome](https://github.com/FortAwesome/Font-Awesome)
8. [JWT](https://github.com/auth0/angular2-jwt)
9. [Lodash](https://lodash.com/docs/4.17.4) 

- When you want use lodash in components, you have to import each function you wanna use:
```
import { isEmpty } from 'lodash';
# After that u can just call isEmpty fnc
if (isEmpty(your_variable)) { ... }
```
- For each component, you are able to check documentation and example in order to improve your starting project.

### Details
If you want keep it, you have to get an API with JWT.
[Example with Nodejs](https://github.com/auth0/node-jsonwebtoken)
* Translations: Works with json keys, values and json files, **check ./public/locales/en.json**
* **About page** you can protect access of this page with JWT AuthGuard. 

```
const routes: Routes = [
	{ path: 'about', component: AboutComponent, canActivate: [ AuthGuard ] } # add AuthGuard to your route.
];
```

### JWT
* For [JWT](https://github.com/auth0/angular2-jwt), you can easily remove it if you don't want to use it.
It is used in the **login module**
* U can find a very good implementation for a custom ECRM with NodeJs for your JWT *login and logout components*. Go to [ecrm-skeleton](https://github.com/underscorenico/skeleton-ecrm-nodejs).
- Install MongoDb, launch it, create a user profile with postman for example. After that u can:

```
git clone the repo.
# from a term tab, do:
npm install
npm start
```
The ECRM will be available and you will be able to login and logout to the web app.

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
Propulsed with [Surge.sh](http://surge.sh/)\
For see what it looks like:
[DEMO](http://angular-skeleton.surge.sh)

