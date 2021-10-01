

export default {
    data() {
        return {
            links: ['index', 'styret', 'ny-student', 'fadderuka']
        }
    },
    name: 'navigation',
    methods: {
       

        
    },

    template: `
        <nav>
            <a v-for="link in links" href="link">{{ link }}</a>
        </nav>
    `,

   
}


