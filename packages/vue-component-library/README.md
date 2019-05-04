# [vue-component-library](https://www.vuecomponentlibrary.com/components/vue-component-library.html)

Go to the [official documentation page](https://www.vuecomponentlibrary.com/components/vue-component-library.html) for more instructions and usage guidelines.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-component-library
```

Then import the component:

```js
import VueComponentLibrary from 'vue-component-library'
```

And either globally register it for use in all components:

```js
Vue.component(VueComponentLibrary, 'vue-component-library')
```

or locally register it for use in an individual component:

```js
export default {
components: { VueComponentLibrary }
}
```

## Usage

```html
undefined
```
