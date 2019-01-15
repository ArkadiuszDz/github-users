<template>
  <li class="repos-list__item" v-on:click="toggleView">
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
  </li>
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
  .user-wrapper {

  }
  img {

  }
  span {

  }
</style>
