

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
        <a v-for="link in links" v-bind:href="link">{{ link.substring(2) }}</a>
    </nav>
    `,

   
}


