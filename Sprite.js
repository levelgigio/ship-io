function Sprite(json) {
    this.x = 20;
    this.y = 20;
    this.json = jQuery.parseJSON(json);
    this.img_div = document.getElementById(this.json.object_name);
    this.current_frame = 0;
    this.current_animation;
    this.animate = function(animation) {

        if (this.current_animation !== animation) {
            this.current_animation = animation;
            this.current_frame = 0;
        }
        
        console.log(this.json.animations[this.current_animation].frames[this.current_frame].file);
        var object = this;

        var animation_interval = window.setInterval(function() {
            object.img_div.src = object.json.animations[object.current_animation].frames[object.current_frame].file;
            console.log(object.current_frame);
            object.current_frame = (object.current_frame+1)%object.json.animations[object.current_animation].frames.length;
            if(!object.current_frame)
                window.clearInterval(animation_interval);
        }, this.json.animations[this.current_animation].animation_velocity/this.json.animations[this.current_animation].frames.length);
        
    }
}