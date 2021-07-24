<template>
  <label :for="forInput" class="control-label">{{ label }}</label>
</template>

<script>
export default {
  name: "XLabel",
  props: {
    forInput: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
