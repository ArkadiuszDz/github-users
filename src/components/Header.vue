<template>
  <header>
    <div class="container">
      <div class="logo-wrapper">
        <img src="../assets/logo.png">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
  // data () {
  //   return {
  //     msg: 'Some User'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    font-weight: bold;
    padding: 10px;
    height: 80px;
    width: 100%;
  }
  .logo-wrapper {
      width: 60px;
  }
  .logo-wrapper img {
      width: 100%;
  }
</style>
