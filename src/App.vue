<template>
<TheHeader/>
<TheNavigation/>
<TheContent/>
<TheFooter/>
<TheHistory/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import TheContent from '@/components/TheContent.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHistory from '@/components/TheHistory.vue';

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheContent,
    TheFooter,
    TheHistory
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
