# Notifications Center

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Frontend Components
This project follows the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for developing a modular frontend.

Below the `app/components` directory there are 4 directories called Base, Atoms, Molecules, and Organisms to which you can add all the Atomic Elements.

###base
In the `base` directory, you will find all stylesheets related to colors, fonts, typography and media queries.
Those has to be imported first in your main `style` file.

###Atoms
Atoms are the basic building blocks of matter.

Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

Your stylesheet of each atom must be added inside of `_style.scss` of the `atoms` directory.

###Molecules
Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.

A molecule might be an input that includes a form label and the input error display. They are generally not too useful by themselves, but combine them together as a form and now we have something!

Your stylesheet of each molecule must be added inside of `_style.scss` of the `molecules` directory.

###Organisms
Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

For example, a hero is an organism.

Your stylesheet of each organism must be added inside of `_style.scss` of the `organisms` directory.
