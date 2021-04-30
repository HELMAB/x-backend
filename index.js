import * as components from './src/components'

const xbackend = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const parents = components.default
    for (const parent in parents) {
      const children = parents[parent].default
      for(const slug in children) {
        const component = children[slug]
        Vue.component(component.name, component)
      }
    }
  }
}

export default xbackend
