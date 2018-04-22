<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Contacts</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-subheader>Phone</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>+36307501013</span>
            <span>Mobile</span>
          </div>
        </md-list-item>

       

  
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>fanni1492@gmail.com</span>
            <span>Personal</span>
          </div>
        </md-list-item>

      
      </md-list>
    </div>


   
     
  </div>
</template>

<script>
  export default {
    name: 'ContactMe'
  }
</script>

<style scoped>
  .viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }
</style>
