# [vue-component-library.base-input](https://www.vuecomponentlibrary.com/components/base-input.html)

Go to the [official documentation page](https://www.vuecomponentlibrary.com/components/base-input.html) for more instructions and usage guidelines.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library.base-input"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-component-library.base-input
```

Then import the component:

```js
import BaseInput from 'vue-component-library.base-input'
```

And either globally register it for use in all components:

```js
Vue.component(BaseInput, 'vue-component-library.base-input')
```

or locally register it for use in an individual component:

```js
export default {
components: { BaseInput }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<base-input></base-input>
```
