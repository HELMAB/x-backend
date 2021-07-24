<template>
  <div :class="`alert alert-${variant} alert-dismissible`">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <h4><i class="icon fa fa-info"></i> {{ title }}</h4>
    {{ summary }}
  </div>
</template>

<script>
export default {
  name: "XAlert",
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: 'Alert!'
    },
    summary: {
      type: String,
      default: 'Info alert preview. This alert is dismissable.'
    }
  }
}
</script>

<style scoped>

</style>
