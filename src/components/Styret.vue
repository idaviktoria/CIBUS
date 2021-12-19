

<script>

        
    export default {
        name: 'styret',
        
        data() {
            return {
                medlemmer: [
                    {verv: 'Leder',     navn:'Sigurd Hallvig', mail: null, img: null},
                    {verv: 'Nestleder', navn:'Ida Øverlid',    mail: null, img: 'images/portrett-ida.jpg'},
                    {verv: 'Bedriftsansvarlig', navn:'Haakon Yoo Ruland',    mail: null, img: 'images/portrett-haakon.jpg'},
                    {verv: 'Webansvarlig', navn:'Sigrid "Pus" Dobbertin',    mail: null, img: null},
                ]
            }
        }
    }

</script>

<template>
    <section>
        <section id="medlem-section">
            <div class="styremedlem-card" v-for="medlem in medlemmer" :key="medlem">
                <h1>{{ medlem.navn }}</h1>
                <img v-bind:src="medlem.img || 'images/cibus-logo.svg'" alt="">
                <p>{{ medlem.verv }}</p>
                <p>{{ medlem.email }}</p>
            </div>
        </section>
    </section>
</template>


<style>

#medlem-section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.styremedlem-card {
    border: 1px solid black;

}

.styremedlem-card > img {
    width: 200px;
    height: 200px;
}
</style>

