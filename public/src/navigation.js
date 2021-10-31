


export default {
    name: 'navigation',
    data() {
        return {
            links: [
                {name: 'Index',      path: '#/index'},
                {name: 'Kalender',   path: '#/kalender'},
                {name: 'Ny student', path: '#/ny-student'},
                {name: 'Fadderuka',  path: '#/fadderuka'},
            ],
        }
    },
    methods: {},

    template: `
    <nav>
        <div> 
            <a id="nav-img"> <img src="images/cibus-logo.svg" alt=""> </a>     
        </div>

        <div v-for="link in links"> 
            <a v-bind:href="link.path">{{ link.name }}</a>
        </div>
    </nav>
    `,   
}


