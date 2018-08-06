function Sprite(json) {
    this.x = 20;
    this.y = 20;
    this.json = jQuery.parseJSON(json);
    this.img_div = document.getElementById(this.json.object_name);
    this.current_frame = 0;
    this.current_animation;
    this.animate = function(animation) {
        if(this.current_animation === animation) {
            this.img_div.src = this.json.animations[this.current_animation].frames[this.current_frame].file;
            console.log(this.current_frame);
            this.current_frame = (this.current_frame+1)%this.json.animations[this.current_animation].frames.length;
        } else {
            this.current_animation = animation;
            this.current_frame = 0;
        }
    }
}
