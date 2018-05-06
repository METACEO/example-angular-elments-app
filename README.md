# ExampleAngularElmentsApp

This Angular application provides two buttons that load two different [Angular Elements](https://angular.io/guide/elements):

- [example-angular-elements-components-box](https://github.com/METACEO/example-angular-elments-component-box) - a box containing a timestamp
- [example-angular-elements-components-button](https://github.com/METACEO/example-angular-elments-component-button) - a button and a timestamp

The output of these two projects can be found in the [src/assets/elements](https://github.com/METACEO/example-angular-elments-app/tree/master/src/assets/elements) folder. While Angular 6 and the `@angular/elements` pacakge was used (following the recommended [Firebase video](https://www.youtube.com/watch?v=4u9_kdkvTsc)) to generate each of these, an error occurs when loading both together:

```
example-angular-elements-component-button.js:4 ERROR DOMException: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
    at ze.define (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:1:12582)
    at ze.value (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:3:33689)
    at ze.define (http://localhost:4200/assets/elements/example-angular-elements-component-box.js:1:12582)
    at ze.value (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:3:33689)
    at e.ngDoBootstrap (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:4:121892)
    at e._moduleDoBootstrap (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:4:37688)
    at http://localhost:4200/assets/elements/example-angular-elements-component-button.js:4:36842
    at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:4200/polyfills.js:2704:26)
    at Object.onInvoke (http://localhost:4200/assets/elements/example-angular-elements-component-button.js:4:30158)
    at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:4200/polyfills.js:2703:32)
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
