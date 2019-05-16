# Component types

Components are divided up into different types and prefixed in a way that makes it easy for the reader to understand the purpose of each component. The component files follow the official [Vue style guide](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended) recommendations for naming components:

- [Component files](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended)
- [Single-file component filename casing](https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended)
- [Base component names](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended)
- [Single-instance component names](https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended)
- [Tightly coupled component names](https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended)

## Base components

The Vue style guide defines base components as presentational, dumb, or pure components that apply app-specific styling and conventions should all begin with a specific prefix.

```html
<!-- Example of a base component -->
<base-button></base-button>
```

## Single-instance components

The Vue style guide defines single-instance components as only ever having a single active instance. They should begin with the "The" prefix, to denote that there can be only one.

This does not mean the component is only used in a single page, but it will only be used once per page. This project deviates from the Vue style guide by allowing props in single-instance components, to allow for more dynamic layouts and use-cases.

```html
<!-- Example of a single-instance component -->
<the-header></the-header>
```
