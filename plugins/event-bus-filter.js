import Vue from 'vue'

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$busFilter = new Vue()
}

Vue.use(eventBus)