<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/AdminLTE.min.css";
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
  methods: {
    onClick () {
      alert('clicked')
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <x-alert />
          <x-callout/>
          <x-box/>
          <x-user-header user-avatar="https://ui-avatars.com/api/?name=Hel Mab"/>
          <x-small-box/>
          <x-small-box/>
          <x-small-box/>
          <x-small-box/>
        </div>
      </div>
    </div>
  </div>
</template>
