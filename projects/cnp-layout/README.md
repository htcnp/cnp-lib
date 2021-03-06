# CnpLayout

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Code scaffolding

Run `ng generate component component-name --project cnp-layout` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project cnp-layout`.
> Note: Don't forget to add `--project cnp-layout` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build cnp-layout` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build cnp-layout`, go to the dist folder `cd dist/cnp-layout` and run `npm publish`.

## Running unit tests

Run `ng test cnp-layout` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Demo

github.com/htcnp/cnp-lib

## I/O menu 
```ts
@Input() item: any; // use MenuItem[]
@Input() root: boolean;
@Input() visible: boolean;
@Output() hideMenu: EventEmitter<any> = new EventEmitter();
```

## I/O topbar 
```ts
@Input() leftMenu: TopBarMenuItem[] = [];
@Input() langMenu: TopBarLangMenu;
@Input() userMenu: TopBarUserMenu;
@Input() username = '';
@Input() isShowMenuButton: boolean;
@Output() doToggleMenu: EventEmitter<any> = new EventEmitter();
```
