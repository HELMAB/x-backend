<template>
  <div class="box box-widget widget-user">
    <div
      :class="`widget-user-header ${bg}`"
      :style="`background: url(${bgImage})`">
      <h3 class="widget-user-username">{{ name }}</h3>
      <h5 class="widget-user-desc">{{ position }}</h5>
    </div>
    <div class="widget-user-image">
      <img class="img-circle" :src="avatar" alt="User Avatar">
    </div>
    <div class="box-footer">
      <div class="row">
        <x-user-header-item
          v-for="(property, key) in properties"
          :key="key"
          :property="property"
          :column="subItemColumn"/>
      </div>
    </div>
  </div>
</template>

<script>
import XUserHeaderItem from "./XUserHeaderItem"

export default {
  name: "XUserHeader",
  components: {XUserHeaderItem},
  props: {
    name: {
      type: String,
      default: 'Alexander Pierce',
    },
    position: {
      type: String,
      default: 'Founder & CEO',
    },
    avatar: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      default: 'bg-aqua-active'
    },
    properties: {
      type: Array,
      default() {
        return [
          {value: 3200, label: 'SALES'},
          {value: 1300, label: 'FOLLOWERS'},
          {value: 35, label: 'PRODUCTS'}
        ]
      }
    },
    subItemColumn: {
      type: String,
      default: 'col-sm-4'
    },
    bgImage: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
