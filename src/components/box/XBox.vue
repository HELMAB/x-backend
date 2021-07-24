<template>
  <div :class="`box box-${variant}`">
    <div class="box-header with-border">
      <h3 class="box-title">{{ title }}</h3>
      <template v-if="tool">
        <div class="box-tools pull-right">
          <slot name="box-tools"></slot>
        </div>
      </template>
    </div>
    <div class="box-body">
      <slot>{{ title }}</slot>
    </div>
    <template v-if="footer">
      <div class="box-footer">
        <slot name="box-footer"></slot>
      </div>
    </template>
    <slot name="loading"></slot>
  </div>
</template>

<script>
export default {
  name: "XBox",
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    withBorder: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: false
    },
    tool: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'Box header'
    }
  }
}
</script>

<style scoped>

</style>
