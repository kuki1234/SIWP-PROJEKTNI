<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premier League</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="../assets/premier league logo (1).png" class="logo" alt="Premier League Logo">
        <h1>Premier League</h1>
    </header>





    

    <!-- Added a class for the main content to apply the top margin -->
    <div class="container main-content">
        <div class="text">
            <h1 style="color: black;">ANFIELD</h1>
            <p style="font-size: 22px;">Anfield je nogometni stadion koji se nalazi u Liverpoolu, Engleska. Na njemu domaće utakmice igra nogometni klub Liverpool. Kapacitet stadiona je 53,394 sjedecih mjesta.

 Stadion se sastoji od četiri tribine: Spion Kop, Main Stand, Centenary Stand i Anfield Road. </p>
        </div>
        <div class="image">
            <img src="../assets/Anfield_stadium_(Liverpool)_panorama_view_from_main_stand.jpg" alt="Description of the image">
        </div>
    </div>



    




    <!-- Added a class for the main content to apply the top margin -->
    <div class="container main-content">
        <div class="text">
            <h1 style="color: black;">EMIRATES</h1>
            <p style="font-size: 22px;">Emirates Stadium je moderan dom Arsenala, smješten u sjevernom Londonu. Stadion je poznat po svojoj impresivnoj arhitekturi i vrhunskim sadržajima. Otvoren 2006. godine, zamijenio je legendarni Highbury kao Arsenalov dom. Emirates pruža odlične uvjete za gledatelje i nudi sjajan pogled na teren sa svakog sjedala.</p>
        </div>
        <div class="image">
            <img src="../assets/emirates.jpg" alt="Description of the image">
        </div>
    </div>










    <!-- Added a class for the main content to apply the top margin -->
    <div class="container main-content">
        <div class="text">
            <h1 style="color: black;">OLD TRAFFORD</h1>
            <p style="font-size: 22px;">Old Trafford je stadion u Manchesteru na kojem igra nogometni klub Manchester United. Sa 76.000 sjedećih mjesta, drugi je najveći engleski stadion, nakon Wembleya. Nadimak stadiona je Kazalište snova, kako ga je prozvao legendarni igrač Uniteda, Sir Bobby Charlton.</p>
        </div>
        <div class="image">
            <img src="../assets/1200px-Stretford_End,_Old_Trafford.jpg" alt="Description of the image">
        </div>
    </div>



    

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Premier League</h4>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/tables">Klubovi</router-link></li>
                        <li><router-link to="/transfers">Transferi</router-link></li>
                        <li><router-link to="/prizes">Nagrade</router-link></li>
                        <li><router-link to="/stadiums">Stadioni</router-link></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Fantasy</h4>
                    <ul>
                        <li><a href="#">FPL Home</a></li>
                        <li><a href="#">My Team</a></li>
                        <li><a href="#">FPL Transfers</a></li>
                        <li><a href="#">Leagues</a></li>
                        <li><a href="#">Statistics</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Football&Community</h4>
                    <ul>
                        <li><a href="#">Wider Football</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Youth Development</a></li>
                        <li><a href="#">Mental Health</a></li>
                        <li><a href="#">Charity</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Legal</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Stats</h4>
                    <ul>
                        <li><a href="#">Records</a></li>
                        <li><a href="#">Player Stats</a></li>
                        <li><a href="#">Club Stats</a></li>
                        <li><a href="#">Milestones</a></li>
                        <li><a href="#">Awards</a></li>
                    </ul>

                </div>
                <div class="footer-col">
                    <h4>More</h4>
                    <ul>
                        <li><a href="#">Referees</a></li>
                        <li><a href="#">Managers</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">ePremier League</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Follow us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/premierleague"><i class="fa fa-facebook"></i></a>
                        <a href="https://x.com/premierleague"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/premierleague/"><i class="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@premierleague"><i class="fa fa-youtube"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</body>
</html>
</template>

<script>
export default {
  name: 'TheStadiums'
}
</script>

<style>
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

h1 {
    color: white;
    margin: 0;
    padding: 0;
    line-height: 50px; /* Adjust this to vertically center the text in the header */
}

header {
    background-color: #37003c;
    padding: 0 25px; /* Horizontal padding only */
    height: 85px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center; /* Vertically centers the content in the header */
    justify-content: center;
}

nav {
    background-color: #3d5a80;
    width: 100%;
    margin-top: 85px; /* Push nav down to avoid overlap with fixed header */
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    padding: 14px 20px;
    display: block;
}

nav ul li a:hover {
    background-color: #577999;
    border-radius: 5px;
}

.logo {
    position: fixed;
    height: auto;
    left: 0px;
    width: 95px;
    height: 95px;
}

.container {
    display: flex;
    border: 2px solid #000;
    padding: 10px;
    max-width: 900px; /* Increased the max-width */
    margin: 40px auto 0;
}

.text {
    flex: 1;
    padding: 10px;
}

.image {
    flex: 1;
    padding: 10px;
    display: flex; /* Add flex display */
    align-items: center; /* Vertically center the image */
    justify-content: center; /* Horizontally center the image */
}

.image img {
    max-width: 100%;
    max-height: 100%; /* Adjusted to maintain aspect ratio */
    border: 1px solid #000;
}

.footer {
    background-color: #37003c;
    padding: 30px 20px; /* Reduced padding to reduce blank space */
}

.footer .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px; /* Increased the max-width */
    margin: auto;
}

.footer-col {
    flex: 1 1 16%; /* Adjusted flex basis to fit 6 columns */
    padding: 0 15px;
    margin-bottom: 20px; /* Added margin-bottom for spacing */
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 20px; /* Reduced margin-bottom */
    font-weight: 500;
    position: relative;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #bbbbbb;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 10px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255,255,255,0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}

@media(max-width: 767px) {
    .footer-col {
        flex: 1 1 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        flex: 1 1 100%;
    }
}

/* Added margin to create space between the navigation and the content */
.main-content {
    margin-top: 75px;
}

/* Added margin to create space between the content and the footer */
.container {
    margin-bottom: 75px;
}

</style>