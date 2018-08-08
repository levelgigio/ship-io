function Game() {
    this._starting_date = new Date();
    this._reference_24h_date = new Date();
    this._deadline = new Date();
    this._deadline.setDate(this._deadline.getDate() + 365);
    this._months = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    this._range_24h_guess = 200;
    this._range_final_guess = 200;
    this._prize_pot = 0;
    this._random_gas = [];
    this._current_time;
    this._background;
    this._deadline_red_price = 1;
    this._timer_24h;
    this.nave = new Nave(horse_json);
    this.nave.animate("horse_run", true);
    this.pool = new Pool();
    this.pool.set_nave(this.nave);


    var giovanni = new User("giovanni");
    giovanni.set_pool(this.pool);
    
    

    //--------------------------------------------------------
    
    this.set_deadline = function(deadline) {
        this._deadline = deadline;
    }
    
    this.reduce_deadline = function(tempo) {
        this._deadline.setMilliseconds(this._deadline.getMilliseconds()-tempo);
        
        $("#time-deadline").text(this._deadline.getFullYear() + ":" + this._months[this._deadline.getMonth()] + ":" + this._deadline.getDate() + ":" + this._deadline.getHours() + ":" + this._deadline.getMinutes() + ":" + this._deadline.getSeconds())
        
    }
    
    
    //--------------------------------------------------------
    
    this.set_reference_24h_date = function(date) {
        this._reference_24h_date = date;
    }
    
    var obj = this;
    this.countdown_timer = function() {
        now = new Date().getTime();
        distance = 15000 + obj._reference_24h_date.getTime() - now;
        if(distance <= 0){
            obj.pool.reset_pool(); 
            obj.set_reference_24h_date(new Date());
            setTimeout(obj.countdown_timer, 1000);
            return;
        }
            
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#time").text(hours + "h " + minutes + "m " + seconds + "s ");
        setTimeout(obj.countdown_timer, 1000);
    }
    this.countdown_timer();

    //--------------------------------------------------
    
    

    this.generate_gas = function() {

    }


    
    
    
    
    //--------------------------------------------------
    
    var obj = this;
    this.functions = function() {
        $("#add-ip-btn").click(function() {
            giovanni.add_ip(1);
        });

        $("#vote-subir-btn").click(function() {
            giovanni.vote("subir", 1);
        });
        $("#vote-descer-btn").click(function() {
            giovanni.vote("descer", 1);
        });
        
        $("#reduce-deadline-btn").click(function() {
            obj.reduce_deadline(Math.floor(Math.random()*(1000000-950000+1)+950000));
        });
        
        $("#fechar-pool-btn").click(function() {
            obj.pool.reset_pool();
        });
    }
    
    this.functions();
}