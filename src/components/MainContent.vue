<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <UsersList :users="github_users"/>
  </div>
</template>
<script>
import UsersList from '@/components/UsersList'
import getUsers from '../assets/scripts/getUsers'

export default {
  name: 'MainContent',
  components: {
    UsersList
  },
  methods: {
    getUsers
  },
  created () {
    getUsers().then(response => {
      this.github_users = [...response]
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      github_users: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
