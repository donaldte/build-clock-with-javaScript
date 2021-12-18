setInterval(setClock, 1000);

function setClock(){
    const currentDate = new Date();
    const RatioSecond = currentDate.getSeconds()/60;
    const RationMinute = (RatioSecond + currentDate.getMinutes())/60;
    const RationHour = ( RationMinute + currentDate.getHours())/12;
    setRotation(heure, RationHour);
    setRotation(minute, RationMinute);
    setRotation(second, RatioSecond);

}

const heure = document.querySelector("[data-hour]");
const minute = document.querySelector("[data-minute]");
const second = document.querySelector("[data-second]");


function setRotation( element, ratioRatation){
    element.style.setProperty('--rotation', ratioRatation*360);
}

setClock();