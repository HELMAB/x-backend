<template>
  <li class="time-label">
    <span :class="`bg-${bg}`">{{ label }}</span>
  </li>
</template>

<script>
export default {
  name: "XTimelineLabel",
  props: {
    bg: {
      type: String,
      default: 'red'
    },
    label: {
      type: String,
      default: '10 Feb. 2014'
    }
  }
}
</script>

<style scoped>

</style>
