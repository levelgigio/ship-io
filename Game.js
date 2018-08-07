function Game(deadline) {
    this._deadline = deadline;
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
    
    
    
    

    this.timer_24h = function() {
        var obj = this;
        this._timer_24h = setInterval(function() {
            obj.pool.reset_pool();
        }, 10000);
    }
    this.timer_24h();



    this.generate_gas = function() {

    }

    this.update = function() {

    }
    

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
        
        $("#animate-btn").click(function() {
            obj.nave.animate("horse_bend");
        });
        
        $("#fechar-pool-btn").click(function() {
            obj.pool.reset_pool();
        });
    }
    
    this.functions();
}