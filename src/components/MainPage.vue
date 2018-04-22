<template>
  <div class="hello">

    <div class="nav">
      <NavBar></NavBar>
    </div>
    
    <router-view>

   
    <md-content class="md-scrollbar">

      
      <About></About>
      <Knowledge></Knowledge>
      <MyWorks></MyWorks>
      <ContactMe></ContactMe>
    </md-content>
       </router-view>
   
  </div>

</template>

<script>

import About from './About'
import NavBar from './NavBar'
import Knowledge from './Knowledge'
import MyWorks from './MyWorks'
import ContactMe from './ContactMe'
export default {
  components: {
    About,NavBar,Knowledge,MyWorks,ContactMe
  },
  name: 'MainPage'
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  

;
}
.nav{
  margin-top: 0px;
  margin-bottom: 50px;
  position: relative;

}
.md-scrollbar{
  
   max-width: 800px;
    max-height: 800px;

    

}
.hello{
   height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/bbb.jpg');
 background-size: 100%;
 overflow: auto;
 
 
}
.home{
  margin-top: 25px;
}




</style>
