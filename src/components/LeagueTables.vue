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
            <h1 style="color: black;">KLUBOVI</h1>
            <p style="font-size: 22px;">U ligi se natječe 20 klubova, igraju se po dvije utakmice svako sa svakim (38 kola). Na kraju sezone, najbolje četiri ekipe osiguravaju plasman u grupnu fazu Lige prvaka. Ekipe koje završe na petom i šestom mjestu ostvaruju plasman u Evropsku ligu, a ona na sedmom mjestu ostvaruje plasman u Konferencijsku ligu.

                Tri posljednjeplasirana kluba na kraju ispadaju u niži rang, Championship.</p>
        </div>
        <div class="image">
            <img src="../assets/WhatsApp Image 2024-06-12 at 11.13.23.jpeg" alt="Description of the image">
        </div>
    </div>

    


    <!-- Added a class for the main content to apply the top margin -->
    <div class="container main-content">
        <div class="text">
            <h1 style="color: black;">SVI KLUBOVI U PREMIER LIGI</h1>
            <p style="font-size: 22px;">Arsenal,
                Aston Villa,
                Bournemouth,
                Brentford,
                Brighton & Hove Albion,
                Burnley,
                Chelsea,
                Crystal Palace,
                Everton,
                Fulham,
                Liverpool,
                Luton Town,
                Manchester City,
                Manchester United,
                Newcastle United,
                Nottingham Forest,
                Sheffield United,
                Tottenham Hotspur,
                West Ham United,
                Wolverhampton Wanderers.</p>
        </div>
        <div class="image">
            <img src="../assets/skysports-premier-league-football_6188162 (1).jpg" alt="Description of the image">
        </div>
    </div>
    





    

    <!-- Added a class to the second container -->
    <div class="container main-content second-container">
        <div class="text">
            <h1 style="color: black;">PL NASLOVI PRVAKA</h1>
            <p style="font-size: 22px;">Naslov prvaka:<br>
                Manchester United - 20 naslova prvaka<br>
                Liverpool - 19 naslova prvaka<br>
                Arsenal - 14 naslova prvaka<br>
                Everton - 9 naslova prvaka<br>
                Aston Villa - 7 naslova prvaka<br>
                Sunderland - 6 naslova prvaka<br>
                Chelsea - 6 naslova prvaka<br>
                Manchester City - 6 naslova prvaka<br>
                Newcastle United - 4 naslova prvaka<br>
                Sheffield Wednesday - 4 naslova prvaka<br>
                Huddersfield Town - 3 naslova prvaka<br>
                Leeds United - 3 naslova prvaka<br>
                Wolverhampton Wanderers - 3 naslova prvaka<br>
                Blackburn Rovers - 3 naslova prvaka<br>
                Tottenham Hotspur - 2 naslova prvaka<br>
            </p>
        </div>
        <div class="image">
            <img src="../assets/klubovi naslovi prvaka.jpg" alt="Description of the image">
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
  name: 'LeagueTables'
}
</script>

<style scoped>
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

header {
    background-color: #37003c;
    padding: 200 25px;
    height: 85px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

header h1 {
    color: white;
    margin: 0;
    padding: 0;
    line-height: 50px;
}

nav {
    background-color: #3d5a80;
    width: 100%;
    margin-top: 85px;
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
    max-width: 600px;
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


body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.container {
    max-width: 950px;
    margin: auto;
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.footer {
    background-color: #37003c;
    padding: 30px 20px;
}

.footer-col {
    flex: 1;
    min-width: 200px;
    padding: 0 15px;
    margin-bottom: 30px;
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 20px;
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

.footer-col ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
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
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}

.main-content {
    margin-top: 75px;
}

.container {
    margin-bottom: 75px;
}

body, html {
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
</style>