import Navigation from "./navigation.js";

export default {
    name: 'index',
    components:{
        Navigation
    },
    

    data() {
        return {}
    },
    methods: {},

    template: `
    <div>
        <navigation></navigation>

        <div>
            <h1>Cibus linjeforening</h1>
            <p>Velkommen til nettsiden for linjeforening for matvitenskap, teknologi og bærekraft ved NTNU Trondheim! Nettsiden er et pågående arbeid og det bes være oppmerksom på mangler. Den er forhåpentligvis nærmere ferdigstilt i august 2021.</p>
            <img src="images/cibus-logo.svg" alt="">
        </div>

    </div>
    `,
}


