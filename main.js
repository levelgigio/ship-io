$(document).ready(function() {
    var horse = new Sprite(horse_json);
    var intervalo = setInterval(function() {
        horse.animate("horse_run");
    }, 100);
});