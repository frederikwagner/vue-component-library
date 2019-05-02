# vue-component-library.base-button

> A component that...

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library.base-button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-component-library.base-button
```

Then import the component:

```js
import BaseButton from 'vue-component-library.base-button'
```

And either globally register it for use in all components:

```js
Vue.component(BaseButton, 'vue-component-library.base-button')
```

or locally register it for use in an individual component:

```js
export default {
components: { BaseButton }
}
```

## Usage

```html
<base-button></base-button>
```
