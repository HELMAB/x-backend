<template>
  <div class="info-box" :class="bg">
    <span :class="`info-box-icon bg-${bgIcon}`"><i :class="icon"></i></span>

    <div class="info-box-content">
      <span class="info-box-text">{{ title }}</span>
      <span class="info-box-number">{{ number }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XBoxInfo",
  props: {
    bg: {
      type: String,
      default: null
    },
    bgIcon: {
      type: String,
      default: 'aqua'
    },
    icon: {
      type: String,
      default: 'fa fa-envelope-o'
    },
    title: {
      type: String,
      default: 'Message'
    },
    number: {
      type: Number,
      default: 1410
    }
  }
}
</script>

<style scoped>

</style>
