<template>
  <div class="form-group"
       :class="`${validations[name] ? 'has-error' : ''} ${horizontal['row']}`">
    <x-label :for="forInput"
             :label="label"
             :class="`${horizontal['labelClass']} ${required ? 'required' : ''}`"/>
    <div :class="`${horizontal['inputClass']}`">
      <select class="form-control"
              :name="name"
              :id="forInput"
              @change="$emit('input', $event.target.value)">
        <option disabled selected>{{ placeholder }}</option>
        <template v-for="(option, key) in options">
          <option :value="option.value"
                  :key="key"
                  :selected="option.value === value">{{ option.label }}
          </option>
        </template>
      </select>
      <template v-if="validations[name]">
        <span class="help-block">{{ validations[name][0] }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "XSelect",
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
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
