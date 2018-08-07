function Sprite(json) {
    this.x = 20;
    this.y = 20;
    this.json = jQuery.parseJSON(json);
    this.img_div = document.getElementById(this.json.object_name);
    this.continuous = false;
    this.current_frame = 0;
    this.current_animation;
    this.previous_animation;
    this.animation_interval;
    
    //------------------------------------------------ //
    
    this.animate = function(animation) {

        if (this.current_animation !== animation) {
            this.previous_animation = this.current_animation;
            this.current_animation = animation;
            this.current_frame = 0;
            clearInterval(this.animation_interval);
        }

        var object = this;
        
        this.animation_interval = setInterval(function() {
            object.img_div.src = object.json.animations[object.current_animation].frames[object.current_frame].file;
            console.log(object.current_frame);
            object.current_frame = (object.current_frame+1)%object.json.animations[object.current_animation].frames.length;
            if(!object.current_frame) {
                clearInterval(object.animation_interval);
                if(object.continuous)
                    object.continuous_animate(object.previous_animation);
            }
        }, this.json.animations[this.current_animation].animation_velocity/this.json.animations[this.current_animation].frames.length);
        
    }
    
    //------------------------------------------------ //
    
    this.continuous_animate = function(animation) {
        
        this.continuous = true;
        
        if (this.current_animation !== animation) {
            this.current_animation = animation;
            this.current_frame = 0;
            clearInterval(this.animation_interval);
        }

        var object = this;
        
        this.animation_interval = setInterval(function() {
            object.img_div.src = object.json.animations[object.current_animation].frames[object.current_frame].file;
            object.current_frame = (object.current_frame+1)%object.json.animations[object.current_animation].frames.length;
        }, this.json.animations[this.current_animation].animation_velocity/this.json.animations[this.current_animation].frames.length);
        
    }
    
    //------------------------------------------------ //
    
}