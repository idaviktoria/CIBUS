

<script>
    export default {
        data(){
            return {
                links: [
                    {name: 'Kalender',      path: '/kalender'},
                    {name: 'Ny student',    path: '/ny-student'},
                    {name: 'Fadderuka',     path: '/fadderuka'},
                    {name: 'Bildegalleri',  path: '/bildegalleri'},
                ],
            }
        }
    }
</script>

<template>
    <nav>
        <div> 
            <router-link to="/index" id="nav-img"> <img src="images/cibus-logo.svg" alt=""> </router-link>     
        </div>

        <div v-for="link in links" :key="link"> 
            <router-link v-bind:to="link.path">{{ link.name }}</router-link>
        </div>
    </nav>
</template>


<style>

nav {  
    display: grid	;
    grid-auto-flow: column;

    padding: 0;
    margin: 0;
}

nav > div{
    display: flex;
    justify-content: center;
    align-items: center;
}

nav > div > a {
    width: auto;
    height: auto;

    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;

    padding: 5px;
    margin: 5px;    
    transition: 0.05s;
}

nav > div > a:hover {
    outline: solid 2px var(--main-color);
}

#nav-img{
    background-color: white;
    color: white;
    width: 60px;
    height: 60px;
}
</style>