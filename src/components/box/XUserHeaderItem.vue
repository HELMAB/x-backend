<template>
  <div class="border-right" :class="column">
    <div class="description-block">
      <h5 class="description-header">{{ property.value }}</h5>
      <span class="description-text">{{ property.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XUserHeaderItem",
  props: {
    column: {
      type: String,
      default: 'col-sm-4'
    },
    property: {
      type: Object,
      default() {
        return {
          value: 3200,
          label: 'SALES'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
