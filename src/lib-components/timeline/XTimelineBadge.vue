<template>
  <li>
    <i :class="`${icon} bg-${bg}`"></i>
  </li>
</template>

<script>
export default {
  name: "XTimelineBadge",
  props: {
    icon: {
      type: String,
      default: 'fa fa-clock-o'
    },
    bg: {
      type: String,
      default: 'gray'
    }
  }
}
</script>

<style scoped>

</style>
