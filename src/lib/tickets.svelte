<script>





</script>

<main>

    <div class="lp-img-container">
        <img src="/Tickets/Polygon/polygon2.png" alt="Ticket">
        <img src="/Tickets/BNB/bnb2.png" alt="Ticket">
        <img src="/Tickets/Polygon/polygon4.png" alt="Ticket">
        <img src="/Tickets/BNB/bnb4.png" alt="Ticket">
        <img src="/Tickets/Polygon/polygon6.png" alt="Ticket">
        <img src="/Tickets/BNB/bnb6.png" alt="Ticket">
        <div class="star-container">
            <img style="height: 400px; width: 500px; margin: 0px 0px 0px -340px;" src="/img/stars.png" alt="Stars">
        </div>
    </div>

</main>

<style>

@media (max-width: 1520px) {
    main {
        display: none;
    }
}

/* main {
    display: grid;
    justify-items: center;
    align-items: center;
} */

.lp-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    /* margin-left: 300%; */
    animation: slide-in 0.5s linear 0s 1 normal forwards;
}

.star-container {
    opacity: 0.2;
    animation: blink 1s linear infinite;
}

@keyframes blink {
  0% {opacity: 0.2;}
  50% {opacity: 1;}
  100% {opacity: 0.2;}
}

@keyframes slide-in {
  from {margin-left: 300%;}
  to {margin-left: 250%;}
}

@keyframes appear {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes rotate1 {
    0% {transform: rotate(-10deg);}
    100% {transform: rotate(-60deg);}
}

@keyframes rotate2 {
    0% {transform: rotate(-10deg);}
    100% {transform: rotate(-50deg);}
}

@keyframes rotate3 {
    0% {transform: rotate(-10deg);}
    100% {transform: rotate(-40deg);}
}

@keyframes rotate4 {
    0% {transform: rotate(-10deg);}
    100% {transform: rotate(-30deg);}
}

@keyframes rotate5 {
    0% {transform: rotate(-10deg);}
    100% {transform: rotate(-20deg);}
}

.lp-img-container > img {
    opacity: 0;
    /* animation: appear 2s linear 0s 1 normal forwards; */
}

.lp-img-container > img:nth-child(1) {
    animation: appear 1.5s linear 0s 1 normal forwards, rotate1 1s linear 1.5s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -100px;
    transform: rotate(-10deg);
    z-index: 1;
}

.lp-img-container > img:nth-child(2) {
    animation: appear 1.5s linear 0s 1 normal forwards, rotate2 1s linear 1.5s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -190px;
    transform: rotate(-10deg);
    z-index: 2;
}

.lp-img-container > img:nth-child(3) {
    animation: appear 1.5s linear 0s 1 normal forwards, rotate3 1s linear 1.5s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -190px;
    transform: rotate(-10deg);
    z-index: 3;
}

.lp-img-container > img:nth-child(4) {
    animation: appear 1.5s linear 0s 1 normal forwards, rotate4 1s linear 1.5s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -190px;
    transform: rotate(-10deg);
    z-index: 4;
}

.lp-img-container > img:nth-child(5) {
    animation: appear 1.5s linear 0s 1 normal forwards, rotate5 1s linear 1.5s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -190px;
    transform: rotate(-10deg);
    z-index: 5;
}

.lp-img-container > img:nth-child(6) {
    animation: appear 1.5s linear 0s 1 normal forwards;
    width: 190px;
    height: 300px;
    margin: 0px 0px 0px -190px;
    transform: rotate(-10deg);
    z-index: 6;
}

</style>