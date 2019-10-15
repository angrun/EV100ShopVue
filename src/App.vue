<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>
<style lang="less">
  @import 'components/style/styles_less';
</style>
<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Exo');
</style>

<script>
  import Navigation from './components/helpingComps/Navigation'
  export default {
    name: 'App',
    components: {
      'Navigation': Navigation
    }
  }
</script>
