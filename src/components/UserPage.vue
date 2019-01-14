<template>
  <div class="user-info-wrapper">
    <div class="user">
        <div class="avatar-img-wrapper">
            <img :src="user_info.avatar_url" alt="avatar"/>
        </div>
        <h1> {{ user_info.login }} </h1>
        <h2> {{ user_info.name }} </h2>
        <p> ID: {{ user_info.id }} </p>
        <div class="repos-wrapper">

        </div>
    </div>
  </div>
</template>
<script>
import getUser from '../assets/scripts/getUser'
import getRepos from '../assets/scripts/getRepos'

export default {
  name: 'UserPage',
  methods: {
    getUser,
    getRepos
  },
  created () {
    getUser(this.$route.params.name).then(response => {
      this.user_info = response
    })
    getRepos(this.$route.params.name).then(response => {
      this.user_repos = [...response]
    })
  },
  data () {
    return {
      user_info: '',
      user_repos: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .avatar-img-wrapper {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .avatar-img-wrapper img {
    width: 100%;
  }
  .user:hover {

  }
  .user-wrapper {

  }
  img {

  }
  span {

  }
</style>
