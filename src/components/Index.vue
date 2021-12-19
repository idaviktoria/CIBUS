



<template>
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

            <router-link class="index-card" to="/styret">
                <div>
                    <h1>Styret</h1>
                    <p>Styret består av medlemmer i Cibus som ønsker å engasjere seg litt ekstra for å sørge for at linjeforneingens medlemmer har en fantastisk studietid!</p>
                </div>
            </router-link>
        </section>
    </div>
</template>

<style>
    

#index-main-section{
    display: grid;
    grid-template-columns: 3fr 2fr;
}

#index-main-information{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--main-color);

    padding: 50px;
}

#index-main-information > h1{
    font-weight: 700;
    font-size: 46px;
}


#index-main-information > p{
    font-size: 20px;
}

#index-main-img{
    width:  420px;
    height: 100%;
    background-color: white;
}

#index-card-section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    
    margin-top: 20px;
}

.index-card {
    background-color:lightgray;
    padding: 25px;
    padding-bottom: 80px;
    border-bottom: 5px solid var(--main-color);
    transition: 0.2s;
    text-decoration: none;
}

.index-card:hover{
    transform: scale(1.05);
}

.index-card > div {
    text-decoration: none;

}

.index-card > div > h1 {
    font-size: 28px;
    color: var(--main-color);
}

.index-card > div > p {
    font-size: 18px;
    color: black;
}

</style>



