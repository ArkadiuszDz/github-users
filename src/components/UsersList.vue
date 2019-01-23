<template>
  <div class="users-list">
    <h1>{{ msg }}</h1>
    <div class="users-list-content">
      <User v-for="user in users" :key="user.login" :user="user"/>
    </div>
  </div>
</template>
<script>
import User from '@/components/User'

export default {
  name: 'UsersList',
  props: ['users'],
  components: {
    User
  },
  data () {
    return {
      msg: 'Github Users'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .users-list-content {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }
</style>
