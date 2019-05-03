// THIS FILE IS AUTOMATICALLY GENERATED IN:
//
//   build-utils/update-index-file.js
//
// YOU SHOULD NEVER UPDATE THIS FILE DIRECTLY

import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

// Export components individually
export { BaseButton, BaseInput }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('BaseButton', BaseButton)
  Vue.component('BaseInput', BaseInput)
}

// Export the library as a plugin
export default { install: install }
