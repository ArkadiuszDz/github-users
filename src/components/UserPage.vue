<template>
  <div class="user-info-wrapper">
    <div class="user">
        <div class="avatar-img-wrapper">
          <img :src="user_info.avatar_url" alt="avatar"/>
        </div>
        <h1> {{ user_info.login }} </h1>
        <h2> {{ user_info.name }} </h2>
        <p> ID: {{ user_info.id }} </p>
        <p> Public repos: {{ user_info.public_repos }} </p>
        <div class="repos-wrapper">
          <div class="repos-list-content column1">
            <Repo v-for="repo in col1" :key="repo.name" :language="repo.language" :forks="repo.forks" :watchers="repo.watchers" :name="repo.name" :clone="repo.clone_url" :created="repo.created_at" :updated="repo.updated_at" :pushed="repo.pushed_at"/>
          </div>
          <div class="repos-list-content column2">
            <Repo v-for="repo in col2" :key="repo.name" :language="repo.language" :forks="repo.forks" :watchers="repo.watchers" :name="repo.name" :clone="repo.clone_url" :created="repo.created_at" :updated="repo.updated_at" :pushed="repo.pushed_at"/>
          </div>
          <div class="repos-list-content column3">
            <Repo v-for="repo in col3" :key="repo.name" :language="repo.language" :forks="repo.forks" :watchers="repo.watchers" :name="repo.name" :clone="repo.clone_url" :created="repo.created_at" :updated="repo.updated_at" :pushed="repo.pushed_at"/>
          </div>
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
      this.visible = !this.visible
    },
    addMoreRepos () {
      getRepos(this.$route.params.login, this.page).then(response => {
        this.user_repos = this.user_repos.concat([...response])
        this.page++
        this.addRepos = true
      })
    },
    scrollHandler () {
      if ((window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) && (Math.ceil(this.user_info.public_repos / 100) >= 2) && this.addRepos) {
        this.addMoreRepos()
        this.addRepos = false
      }
    }
  },
  components: {
    Repo
  },
  computed: {
    col1 () {
      let array = []
      this.user_repos.forEach((e, i) => {
        if ((i + 0) % 3 === 0) {
          array.push(e)
        }
      })
      return array
    },
    col2 () {
      let array = []
      this.user_repos.forEach((e, i) => {
        if ((i + 1) % 3 === 0) {
          array.push(e)
        }
      })
      return array
    },
    col3 () {
      let array = []
      this.user_repos.forEach((e, i) => {
        if ((i + 2) % 3 === 0) {
          array.push(e)
        }
      })
      return array
    }
  },
  created () {
    getUser(this.$route.params.login).then(response => {
      this.user_info = response
    })
    getRepos(this.$route.params.login).then(response => {
      this.user_repos = [...response]
    })
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  data () {
    return {
      user_info: '',
      user_repos: [],
      visible: false,
      addRepos: true,
      page: 2
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
  .repos-list-content {
    padding: 10px;
    width: 30%;
  }
  .repos-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
</style>
