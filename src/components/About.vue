<template>
<div class="About">

	<h3 class="title"> {{title}} </h3>
  <div class="container">
  
  <div class="col">
	<img src="../assets/mypic.jpg" alt="my profile picture">
</div>
<div class="row">
	<h4 class = "text"> {{text}} </h4>
  <h4 class = "text"> {{text2}} </h4>
  <h4 class = "text"> {{text3}} </h4>
</div>
</div>
</div>
</div>
</template>

<script>


export default {
  name: 'About',
  data () {
    return {
      title: 'Hello, My name is Fanni Rakosi.',
      text: 'I learn web development by myself. I graduated as a Conductive Education Teacher and I work with children with autism. It was more than a year ago when I started to learn programming and it changed my life. Now I would like to change my career too.',
      text2: 
        'I believe in hard work, and life long learning. I would like to find a place where I face with new challenges to start my career as a web developer.',
      text3:
        'I am a very social person. As a special teacher I always worked as a team member. I think honestly and clear communication is the best way to solve any problem.'
      
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  margin-top: 50px;
  text-align: center;
  font-family: Roboto,sans-serif; 
  font-size: 32px;
  font-weight: bold;
  display: block;
  color: #0277bd;
}
.text{
  margin-top: 50px;
  font-family: Roboto, sans-serif;
  font-stretch: ultra-expanded;
  font-size: 16px;
  margin-left: 100px;
  margin-right: 50px;
  color: #0277bd;
  max-width: 50%;
}
img{
  margin-top: 50px;
      display: block;
    margin-left: auto;
    margin-right: auto;
    min-width: 230px;
    border-radius: 50%;
    border-width: 10px;
    border-color: black;

}
.About{

  max-width: 800px;
  max-height: 500px;
  overflow: hidden;

    
}
.container{
  display: flex;
  overflow: auto;
  align-items: center;
}
.row > div {
display: block;
padding: 50px 150px 50px 150px;

}
</style>
