
export default {
    name: 'index',
    
    data() {
        return {}
    },
    methods: {},

    template: `
    <div id="index-container">
        <section id="index-main-section">
            <div id="index-main-information">
                <h1>Cibus linjeforening</h1>
                <p>Velkommen til nettsiden for linjeforening for matvitenskap, teknologi og bærekraft ved NTNU Trondheim! Nettsiden er et pågående arbeid og det bes være oppmerksom på mangler. Den er forhåpentligvis nærmere ferdigstilt i august 2021.</p>
            </div>
            <div>
                <img id="index-main-img" src="images/Forsidebilde-mindre.jpg" alt="">
            </div>
        </section>
        <section id="index-card-section">
            <a class="index-card" target="_blank" href="https://www.facebook.com/cibusmattek/">
                <div>
                    <h1>Facebook</h1>
                    <p>Kom og besøk cibus sin facebook side! Her finner du informasjon som legges ut fortløpende</p>
                </div>
            </a>

            <a class="index-card"  target="_blank" href="https://use.mazemap.com/#v=1&zlevel=2&center=10.387566,63.428190&zoom=18&campusid=21&sharepoitype=poi&sharepoi=680362">
                <div>
                    <h1>Kontoret</h1>
                    <p>Trykk her for å se hvor kontoret ligger på MazeMap</p>
                </div>
            </a>
            
            <a class="index-card" href="#">
                <div>
                    <h1>EmulgatKOR</h1>
                    <p>EmulgatKOR er Cibus sitt eget blandakor! Her er det rom for alle som vil bli med</p>
                </div>
            </a>

            <a class="index-card" href="/#/styret">
                <div>
                    <h1>Styret</h1>
                    <p>Styret består av medlemmer i Cibus som ønsker å engasjere seg litt ekstra for å sørge for at linjeforneingens medlemmer har en fantastisk studietid!</p>
                </div>
            </a>
        </section>
    </div>
    `,
}


