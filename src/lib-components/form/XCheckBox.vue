<template>
  <div class="form-group"
       :class="`${validations[name] ? 'has-error' : ''} ${horizontal['row']}`">
    <template v-if="multiple">
      <div :class="`${horizontal['inputClass']}`">
        <x-label :for-input="label.toLocaleLowerCase()" :label="label"/>
        <div :key="key" v-for="(option, key) in options">
          <label :for="option.value">
            <input type="checkbox"
                   :name="name"
                   :id="option.value"
                   :value="option.value"
                   :checked="checked.includes(option.value)"
                   @click="onCheck($event, option)"
            /> {{ option.label }}
          </label>
        </div>
        <template v-if="validations[name]">
          <span class="help-block">{{ validations[name][0] }}</span>
        </template>
      </div>
    </template>
    <template v-else>
      <div :class="`${horizontal['inputClass']}`">
        <label :for="label.toLocaleLowerCase()">
          <input type="checkbox"
                 :id="label.toLocaleLowerCase()"
                 :value="value"
                 :name="name"
                 :checked="value"
                 @change="$emit('input', $event.target.checked)"/> {{ label }}
          <template v-if="validations[name]">
            <span class="help-block">{{ validations[name][0] }}</span>
          </template>
        </label>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "XCheckBox",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    checked: {
      type: Array,
      default () {
        return []
      }
    },
    label: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: false
    },
    value: {
      type: [Boolean, Array],
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
    }
  },
  methods: {
    onCheck($event, option) {
      if ($event.target.checked) {
        this.checked.push(option.value)
      } else {
        this.checked.splice(this.checked.indexOf(option.value), 1)
      }
      this.$emit('input', this.checked)
    }
  }
}
</script>

<style scoped>

</style>
