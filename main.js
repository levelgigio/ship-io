$(document).ready(function() {
    var horse = new Sprite(horse_json);
    $("#animate-btn").click(function() {
        horse.animate("horse_jump");
    });
});