<template>
  <div class="container">
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
    getUsers,
    scrollHandler () {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
        // this.addNewUsers() dodać zmienną, która spowoduje wywołanie metody raz
      }
    },
    addNewUsers () {
      getUsers(this.github_users[this.github_users.length - 1].id).then(response => {
        this.github_users = this.github_users.concat([...response])
      })
    }
  },
  created () {
    getUsers().then(response => {
      this.github_users = [...response]
      this.addNewUsers()
    })
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroy () {
    window.removeEventListener('scroll', this.scrollHandler)
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
