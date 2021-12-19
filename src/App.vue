<script setup>

        import Footer from '/src/components/Footer.vue';
        import Navigation from '/src/components/Navigation.vue';

</script>

<template>
    <section>
        <Navigation></Navigation>
        <router-view></router-view>
        <Footer></Footer>
    </section>
</template>

<style>

:root {
    --main-color: #2E7A4B;
}

body{
    /*font-family: GT Walsheim,Helvetica,sans-serif;*/
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
    text-align: center;
    padding: 0;
    margin: 50px;
    margin-top: 20px;
}
</style>
