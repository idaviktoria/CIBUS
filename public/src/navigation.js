

export default {
    name: 'navigation',
    data() {
        return {
            links: ['#/index', '#/styret', '#/ny-student', '#/fadderuka']
        }
    },
    methods: {},

    template: `
    <nav>
        <div> 
            <a id="nav-img"> <img src="images/cibus-logo.svg" alt=""> </a>     
        </div>

        <div v-for="link in links"> 
            <a v-bind:href="link">{{ link.substring(2) }}</a>
        </div>
    </nav>
    `,   
}


