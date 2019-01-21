<template>
  <div class="repos-list__item" v-on:click="toggleView">
    <div class="repo-list-content">
      <p><strong>{{ name }}</strong></p>
      <p>Language: {{ language }}</p>
      <p>Forks: {{ forks }}</p>
      <p>Watchers: {{ watchers }}</p>
      <div class="repo-details" v-if="visible">
        <p>Created at: {{ created }}</p>
        <p>Updated at: {{ updated }}</p>
        <p>Pushed at: {{ pushed }}</p>
        <p>Clone url: <a :href="clone" target="_blank">{{ clone }}</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Repo',
  props: ['language', 'forks', 'watchers', 'name', 'created', 'updated', 'pushed', 'clone'],
  methods: {
    toggleView () {
      console.log(this)
      this.visible = !this.visible
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .repos-list__item {
    padding: 10px;
    width: 100%;
  }
  .repo-list-content {
    padding: 10px;
    border: 1px solid black;
    width: 100%;
    cursor: pointer;
  }
</style>
