<template>
  <div class="modal fade"
       :id="id"
       tabindex="-1"
       role="dialog"
       :aria-labelledby="`${id}Label`">
    <div class="modal-dialog" :class="`modal-${size}`" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4
            class="modal-title"
            :id="`${id}Label`">{{ title }}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <template v-if="footer">
          <slot name="footer">
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                @click="onClose"
                data-dismiss="modal">{{ closeText }}
              </button>
              <button
                type="button"
                @click="onSave"
                class="btn btn-primary">{{ saveText }}
              </button>
            </div>
          </slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XModal",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    },
    saveText: {
      type: String,
      default: 'Save'
    },
    closeText: {
      type: String,
      default: 'Close'
    },
    onClose: {
      type: Function
    },
    onSave: {
      type: Function
    },
    footer: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
