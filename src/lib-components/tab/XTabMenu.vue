<template>
  <div class="box box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">{{ title }}</h3>

      <div class="box-tools">
        <button
          type="button"
          class="btn btn-box-tool"
          data-widget="collapse">
          <i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
    <div class="box-body no-padding">
      <ul class="nav nav-pills nav-stacked"
          v-if="activeTab">
        <li :class="{active : activeTab.value === item.value}"
            :key="key"
            @click="switchTab(item)"
            v-for="(item, key) in menu">
          <a href="javascript:void(0)">
            <i class="fa fa-inbox"></i> {{ item.label }}
          <span class="label pull-right"
                v-if="item.badge"
                :class="`label-${item.labelVariant}`">{{ item.badge }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "XTabMenu",
  props: {
    title: {
      type: String,
      default: 'Folder'
    },
    menu: {
      type: Array,
      default() {
        return [
          {value: 'inbox', icon: 'fa fa-inbox', label: 'Inbox', badge: null, labelVariant: null},
          {value: 'sent', icon: 'fa fa-envelope-o', label: 'Sent', badge: 12, labelVariant: 'primary'},
          {value: 'drafts', icon: 'fa fa-file-text-o', label: 'Drafts', badge: null, labelVariant: null},
          {value: 'junk', icon: 'fa fa-filter', label: 'Junk', badge: 65, labelVariant: 'warning'},
          {value: 'trash', icon: 'fa fa-trash-o', label: 'Trash', badge: 65, labelVariant: null},
        ]
      }
    }
  },
  data () {
    return {
      activeTab: null
    }
  },
  methods: {
    switchTab(item) {
      this.$emit('change', item)
      this.activeTab = item
    }
  },
  mounted() {
    if (this.menu) {
      this.activeTab = this.menu[0]
      this.$emit('change', this.activeTab)
    }
  }
}
</script>

<style scoped>

</style>
