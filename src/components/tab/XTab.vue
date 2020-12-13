<template>
  <div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
      <template v-for="(tab, key) in tabs">
        <li :class="{active : key === 0}" :key="key">
          <a :href="`#${tab.target}`" data-toggle="tab" aria-expanded="false">{{ tab.label }}</a>
        </li>
      </template>
      <template v-if="tool">
        <li class="pull-right">
          <slot name="tool"></slot>
        </li>
      </template>
    </ul>
    <div class="tab-content">
      <template v-for="(tab, index) in tabs">
        <div class="tab-pane"
             :class="{active : index === 0}"
             :key="index"
             :id="tab.target">
          <slot :name="tab.target">{{ tab.label }}</slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "XTab",
  props: {
    tabs: {
      type: Array,
      default () {
        return [
          { target: 'tab1', label: 'Tab 1'},
          { target: 'tab2', label: 'Tab 2'},
          { target: 'tab3', label: 'Tab 3'}
        ]
      }
    },
    tool: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
