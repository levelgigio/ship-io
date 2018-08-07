$(document).ready(function() {
    var horse = new Sprite(horse_json);
    horse.animate("horse_run", true);
    $("#animate-btn").click(function() {
        horse.animate("horse_jump");
    });
});