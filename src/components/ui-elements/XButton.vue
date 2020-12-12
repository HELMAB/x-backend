<template>
  <button
    type="button"
    :class="`btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''} ${flat ? 'btn-flat' : ''}`">
    <slot></slot> {{ label }}
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    label: {
      type: String,
      default: 'Save'
    },
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'sm'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
