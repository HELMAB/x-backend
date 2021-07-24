<template>
  <div class="form-group"
       :class="`${validations[name] ? 'has-error' : ''} ${horizontal['row']}`">
    <x-label :for-input="forInput"
             :label="label"
             :class="`${horizontal['labelClass']} ${required ? 'required' : ''}`"/>
    <div :class="`${horizontal['inputClass']}`">
      <textarea
        class="form-control"
        :placeholder="placeholder"
        :id="forInput"
        :name="name"
        :rows="rows"
        @input="$emit('input', $event.target.value)"
        :value="value"></textarea>
      <template v-if="validations[name]">
        <span class="help-block">{{ validations[name][0] }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "XTextarea",
  props: {
    value: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: 5
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    validations: {
      type: Object,
      default() {
        return {}
      }
    },
    horizontal: {
      type: Object,
      default() {
        return {}
      }
    },
    required: {
      type: Boolean,
      default: false
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
