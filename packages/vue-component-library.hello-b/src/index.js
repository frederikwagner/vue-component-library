// THIS FILE IS AUTOMATICALLY GENERATED IN:
//
//   build-utils/update-index-file.js
//
// YOU SHOULD NEVER UPDATE THIS FILE DIRECTLY

import HelloA from './HelloA.vue'
import HelloB from './HelloB.vue'

// Export components individually
export { HelloA, HelloB }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('HelloA', HelloA)
  Vue.component('HelloB', HelloB)
}

// Export the library as a plugin
export default { install: install }