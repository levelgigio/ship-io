$(document).ready(function() {
    var horse = new Sprite(horse_json);
    horse.continuous_animate("horse_run");
    $("#animate-btn").click(function() {
        horse.animate("horse_jump");
    });
});