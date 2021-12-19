
<script>
    export default {
        name: 'footer-section'
    }
</script>

<template>
    <footer>

        <section id="logo-section">
            <img src="images/cibus-logo.svg" alt="">
        </section>

        <section id="contact-info-section">
            <a href="https://use.mazemap.com/#v=1&zlevel=2&center=10.387566,63.428190&zoom=18&campusid=21&sharepoitype=poi&sharepoi=680362" target="_blank">Kontor: G258 i Akrinn vest</a>
            <a href="mailto:cibus.mattek@gmail.com">Email: cibus.mattek@gmail.com</a>
            <a href="tel:735-266-66">Telefon: 735 266 66</a>
            <a href="https://torst.ddns.net/#/" target="_blank">Tørst?</a>
        </section>

        <section id="social-media-section">
            <a target="_blank" href="https://www.facebook.com/cibusmattek/">  <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.instagram.com/cibus.mattek/"><i class="fa fa-instagram  fa-2x" aria-hidden="true">     </i></a>
            <a target="_blank" href="https://www.ntnu.no/studier/mtmat">      <i class="fa fa-graduation-cap  fa-2x" aria-hidden="true"></i></a>
        </section>

    </footer>
</template>


<style>

footer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    background-color: var(--main-color);

    margin: -50px;
    margin-top: 40px;
}

footer > section {
    display: flex;
    justify-content: center;
}

#logo-section > img{
    width:  250px;
    height: 250px;
}

#contact-info-section{
    display: flex;
    flex-direction: column;   
    text-align: left;
}

#contact-info-section > a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin: 5px;

    margin-right: auto;
}

#contact-info-section > a:hover {
    text-decoration: underline;
}


#social-media-section{
    display: flex;
    flex-direction: column;
    text-align: left;
}

#social-media-section > a{
    color: black;
    margin: 5px;
    margin-right: auto;
}
</style>

