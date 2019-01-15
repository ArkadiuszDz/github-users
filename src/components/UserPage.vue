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
          <ul class="repos-list">
            <Repo v-for="repo in user_repos" :key="repo.name" :language="repo.language" :forks="repo.forks" :watchers="repo.watchers" :name="repo.name" :clone="repo.clone_url" :created="repo.created_at" :updated="repo.updated_at" :pushed="repo.pushed_at"/>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import getUser from '../assets/scripts/getUser'
import getRepos from '../assets/scripts/getRepos'
import Repo from '@/components/Repo'

export default {
  name: 'UserPage',
  methods: {
    getUser,
    getRepos,
    toggleView () {
      console.log(this)
      this.visible = !this.visible
    }
  },
  components: {
    Repo
  },
  created () {
    getUser(this.$route.params.name).then(response => {
      this.user_info = response
    })
    getRepos(this.$route.params.name).then(response => {
      this.user_repos = [...response]
      console.log(this.user_repos)
    })
  },
  data () {
    return {
      user_info: '',
      user_repos: [],
      visible: false
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
  .repos-list {
    padding: 10px;
  }
  .user-wrapper {

  }
  img {

  }
  span {

  }
</style>
