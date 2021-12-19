

/*
Verv
    - Leder
    - Nestleder
    - PR-ansvarlig
    - Sosialansvarlig
    - Faddersjef
    - Økonomiansvarlig
    - Webansvarlig
    - Sekretær
    - Bedriftsansvarlig
*/

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
    },
    methods: {},

    template: `
    <section>
        <section id="medlem-section">
            <div class="styremedlem-card" v-for="medlem in medlemmer">
                <h1>{{ medlem.navn }}</h1>
                <img v-bind:src="medlem.img || 'images/cibus-logo.svg'" alt="">
                <p>{{ medlem.verv }}</p>
                <p>{{ medlem.email }}</p>
            </div>
        </section>
    </section>
    `,
}


