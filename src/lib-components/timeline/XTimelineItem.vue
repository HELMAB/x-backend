<template>
  <li>
    <i :class="`${badgeIcon} bg-${badgeBg}`"></i>
    <div class="timeline-item">
      <template v-if="time">
        <span class="time"><i :class="time.icon"></i> {{ time.label }}</span>
      </template>
      <template v-if="header">
        <h3 class="timeline-header">
          <slot name="header"></slot>
        </h3>
      </template>
      <div class="timeline-body">
        <slot></slot>
      </div>
      <template v-if="footer">
        <div class="timeline-footer">
          <slot name="footer"></slot>
        </div>
      </template>
    </div>
  </li>
</template>

<script>
export default {
  name: "XTimelineItem",
  props: {
    badgeIcon: {
      type: String,
      default: 'fa fa-envelope'
    },
    badgeBg: {
      type: String,
      default: 'blue'
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: false
    },
    time: {
      type: Object,
      default() {
        return {
          icon: 'fa fa-clock-o',
          label: '12:05'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
