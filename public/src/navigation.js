


export default {
    name: 'navigation',
    data() {
        return {
            links: [
                {name: 'Kalender',      path: '#/kalender'},
                {name: 'Ny student',    path: '#/ny-student'},
                {name: 'Fadderuka',     path: '#/fadderuka'},
                {name: 'Bildegalleri',  path: '#/bildegalleri'},
            ],
        }
    },
    methods: {},

    template: `
    <nav>
        <div> 
            <a href="#/index" id="nav-img"> <img src="images/cibus-logo.svg" alt=""> </a>     
        </div>

        <div v-for="link in links"> 
            <a v-bind:href="link.path">{{ link.name }}</a>
        </div>
    </nav>
    `,   
}


