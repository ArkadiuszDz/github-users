<template>
  <div class="user-wrapper">
    <router-link :to="{ name: 'UserPage', params: { login: user.login }}">
      <div class="user">
        <img :src="user.avatar_url" />
        <span>{{ user.login }}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'User',
  props: ['user']
  // data () {
  //   return {
  //     msg: 'Some User'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user {
    border: 1px solid black;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .user:hover {
    background-color: rgba(240,240,240,0.9);
  }
  .user-wrapper {
      width: 25%;
      padding: 5px;
  }
  img {
    width: 50px;
  }
  span {
    font-weight: bold;
    padding: 10px;
  }
  .user-wrapper a {
    text-decoration: none;
  }
</style>
