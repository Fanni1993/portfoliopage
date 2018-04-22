<template>
  <div class="flexbox-container">
    <div class="row">
      <div><img src='../assets/student.png' alt="python"> </div>
    
    <div> {{education.text1}}</div>
    </div>
    <div class="row">
    <div> <img src='../assets/008-computer.png' alt="python"></div>

    <div> {{education.text2}}</div>
  </div>
    <div class="row">
    <div><img src='../assets/009-book.png' alt="python"> </div>
    <div> {{education.text3}}</div>
  </div>
  <div class="row">
    <div><img src='../assets/001-screen.png' alt="python"> </div>
    <div> {{education.text4}}</div>
  </div>
   <div class="row">
    <div><img src='../assets/011-collaboration.png' alt="python"> </div>
    <div> {{education.text5}}</div>
  </div>

   </div>
  
    
</template>
<script>
export default {
  name: 'Knowledge',
  data () {
    return {
      education: {
        text1: "I wrote my first lines of code in Python. My first program was a Rock-Paper-Sciccors game. Later I decided to learn web development. I dived into HTML,CSS and JavaScript languages.",
        text2: "My next task was to get a deeper knowledge about how the Internet works excatly. I learned about HTTP and IP protocols, Networking,APIs,browsers and servers. ",
        text3: "Later I deciced to learn more about programming itself. I read online articles and books about Object-Oriented Programming, Design Patterns, Basic Algoritmhs, Networking,etc. I also kept practicing coding.",
        text5: " I made new friends at meetups and bootcamps whom study or work as a web developer. I get many helps from them during my journey. I like to participate in meetups and coding workshops because these events inspire me to keep learning more.",
        text4: "After I learnt the basic concepts of programming I started to learn about frameworks like Vue.js, Bootstrap, Node.js, Django. I also started to practice with other tools like npm,webpack,etc. I couldn't decide between frontend and backend development both of them are very interesting for me."
        
      }
      
    }
  }
}
</script>
<style scoped>
template{
 
}

.flexbox-container{
  max-width: 700px;
  max-height: 500px;
  
  color: ;

  }
.row {
 
  display: flex;
  
}

.row > div {
display: block;
padding: 50px 50px 50px 50px;
color: #0277bd;
}
img{
  min-width: 64px;
}



</style>
