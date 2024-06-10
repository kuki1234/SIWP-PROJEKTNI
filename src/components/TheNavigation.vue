<template>
    <nav>
      <!-- Navigation content goes here -->
      <ul>
        <li><a href="my-vue-project\src\components\TheNavigation.vue" target="_self">History</a></li>
        <li><a href="#">Clubs</a></li>
        <li><a href="#">Winners</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Transfers</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TheNavigation'
  };
  </script>
  
  <style scoped>
  /* Scoped styles for the navigation component */

  nav {
    background-color: #37003c;
    color: white;
    padding: 20px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav li {
    display: inline;
    margin-right: 10px;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  </style>
  