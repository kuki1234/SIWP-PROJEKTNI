<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>


<script>
export default {
    data() {
        return {
            title: "Premier League"
        }
    }
}
</script>


<style scoped>
    header {
        background-color: #37003c;
        padding: 20px;
        height: 50px;
        text-align: center;
        color: white;
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        
    }

</style>
