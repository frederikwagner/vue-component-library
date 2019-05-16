# Using the component library

The component library comes with different package builds allowing you to import the library in a variety of ways.

## Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <base-button></base-button>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <base-button></base-button>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library/BaseButton"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

## In a module system

Install the library with NPM:

```bash
npm install vue-component-library
```

You can choose to import the library globally, which will make all of the components available across your project (but will also increase the bundle size of your application), or you can import individual components locally.

### Register the library globally

Register the library as a plugin to globally install all components:

```js
import VueComponentLibrary from 'vue-component-library'

Vue.use(VueComponentLibrary)
```

### Import components locally

Or, import components individually for local registration:

```js
import { BaseButton, BaseInput } from 'vue-component-library'

export default {
  components: { BaseButton, BaseInput }
}
```
