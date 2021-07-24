<template>
  <div class="form-group"
       :class="`${validations[name] ? 'has-error' : ''} ${horizontal['row']}`">
    <x-label :for-input="forInput"
             :label="label"
             :class="`${horizontal['labelClass']} ${required ? 'required' : ''}`"/>
    <div :class="`${horizontal['inputClass']}`">
      <input :type="type"
             :id="forInput"
             class="form-control"
             :value="value"
             :name="name"
             @input="$emit('input', $event.target.value)"
             :placeholder="placeholder"/>
      <template v-if="validations[name]">
        <span class="help-block">{{ validations[name][0] }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "XInput",
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    validations: {
      type: Object,
      default () {
        return {}
      }
    },
    horizontal: {
      type: Object,
      default () {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    forInput() {
      if (this.label) {
        return this.label
          .toLocaleLowerCase()
          .split(' ')
          .join('_')
      }
      return Math.random().toString()
    }
  }
}
</script>

<style scoped>

</style>
