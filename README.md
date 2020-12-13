x-adminlte
----------
![Alt](./src/assets/img/x-backend.png)
> A simple x-component for Adminlte template with Vuejs

## Installation

```cmd
npm install x-backend --save
```

Import the package into `main.js` file
```js
import Vue from 'vue'
import XBackend from 'x-backend'

Vue.use(XBackend)
```

## Usage

`Example.vue`
```vue
<template>
  <x-box title="x-backend">
    <x-alert/>
  </x-box>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
```

> Available components

- [Widget](#Widget)
  - [XTimeline](#XTimeline)
  - [XBox](#XBox)
  - [XPanel](#XPanel)
  - [XBoxInfo](#XBoxInfo)
  - [XBoxSmallInfo](#XBoxSmallInfo)
  - [XUserHeader](#XUserHeader)
  - [XUserHeaderItem](#XUserHeaderItem)
- [UI Elements](#ui-elements)
  - [XAlert](#XAlert)
  - [XButton](#XButton)
  - [XButtonGroup](#XButtonGroup)
  - [XCallout](#XCallout)
  - [XLoading](#XLoading)
  - [XMoal](#XMoal)
  
### Widget

### UI Elements
#### XAlert

| props        | type           | default  |
| :------------- |:-------------:| :-----|
| variant      | string | info |
| title      | string      |   Alert! |
| summary | string      |    Info alert preview. This alert is dismissable. |

#### XButton

| props        | type           | default  |
| :------------- |:-------------:| :-----|
| variant      | string | primary |
| label      | string      |   Save |
| size | string      |    sm |
| disabled | boolean      |    false |
| flat | boolean      |    false |
