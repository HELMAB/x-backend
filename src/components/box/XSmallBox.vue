<template>
  <div :class="`small-box bg-${bg}`">
    <div class="inner">
      <h3>{{ number }}</h3>

      <p>{{ title }}</p>
    </div>
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XSmallBox",
  props: {
    number: {
      type: String,
      default: '150'
    },
    title: {
      type: String,
      default: 'New Orders'
    },
    icon: {
      type: String,
      default: 'fa fa-shopping-cart'
    },
    bg: {
      type: String,
      default: 'aqua'
    },
  }
}
</script>

<style scoped>

</style>
