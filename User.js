function User(name) {
    this._id;
    this._name = name;
    this._influence_points = 0;
    this._spent_ip = 0;
    this._final_guess_lower = 10290; 
    this._final_guess_lowerguess_24h_lower = 222;
    this._destination_pool;
    
    this.add_ip = function(quant) {
        this._influence_points += quant;
        console.log(this._name + " recebeu " + quant + " ip, tendo um total de " + this._influence_points);
    }
    this.vote = function(movem, quant) {
        if(this._influence_points >= quant) {
            this._destination_pool.increaveVote(movem, quant);
            this._spent_ip += quant;
            this._influence_points -= quant;
        } else
            console.log("no ip suficient");
    }
    
    this.set_pool = function(pool) {
        this._destination_pool = pool;
    }
}