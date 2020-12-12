<template>
  <div :class="`callout callout-${variant}`">
    <h4>{{ title }}</h4>

    <p>{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: "XCallout",
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: 'I am an info callout!'
    },
    summary: {
      type: String,
      default: 'Follow the steps to continue to payment.'
    }
  }
}
</script>

<style scoped>

</style>
