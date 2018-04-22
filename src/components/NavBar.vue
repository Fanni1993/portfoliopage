<template>
  <div class ="navbar">
    <md-tabs md-sync-route class="md-transparent md-accent" md-alignment="fixed">
    <md-tab id="tab-Home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-About" md-label="About" to="/About"></md-tab>
      <md-tab id="tab-Knowledge" md-label="Knowledge" to="/Knowledge"></md-tab>
      <md-tab id="tab-MyWorks" md-label="My Works" to="/MyWorks"></md-tab>
      <md-tab id="ContactMe" md-label="Contact Me" to="/ContactMe"></md-tab>
     
    </md-tabs>
  </div>
</template>

<script>
export default {

  name: 'NavBar',
  
      
    
  
}
</script>
<style scoped>
md-tab{
  font-size: 32px;
}
</style>