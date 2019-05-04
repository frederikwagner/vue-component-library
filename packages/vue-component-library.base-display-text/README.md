# [vue-component-library.base-display-text](https://www.vuecomponentlibrary.com/components/base-display-text.html)

Go to the [official documentation page](https://www.vuecomponentlibrary.com/components/base-display-text.html) for more instructions and usage guidelines.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-component-library.base-display-text"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-component-library.base-display-text
```

Then import the component:

```js
import BaseDisplayText from 'vue-component-library.base-display-text'
```

And either globally register it for use in all components:

```js
Vue.component(BaseDisplayText, 'vue-component-library.base-display-text')
```

or locally register it for use in an individual component:

```js
export default {
components: { BaseDisplayText }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<base-display-text></base-display-text>
```
