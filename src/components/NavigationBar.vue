<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/tables">Tables</router-link></li>
        <li><router-link to="/transfers">Transfers</router-link></li>
      </ul>
    </nav>
  </template>

  <script>
  export default {
    name: 'NavigationBar'
  }
  </script>

  <style>
  nav {
    background-color: #333;
    color: white;
    padding: 1em;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1em;
  }
  li {
    cursor: pointer;
  }
  </style>