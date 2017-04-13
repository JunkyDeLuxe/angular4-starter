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
```
SASS only.
Using bootstrap alpha v4.
Using ng-bootstrap official using bootstrap v4.
Using postcss in order to postprocesses css rules.
Modals component example from home page using ng-bootstrap modules. 
```

# Production
To build your application, run:

npm run build
You can now go to /dist and deploy that to your server!
