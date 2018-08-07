function Pool() {
    this._subir = 0;
    this._descer = 0;
    this._nave;
    
    this.show = function() {
        $("#descer-display").text(this._descer);
        $("#subir-display").text(this._subir);
    }
    
    this.increaveVote = function(movem, quant) {
        if(movem === "subir")
            this._subir += quant;
        else if(movem === "descer")
            this._descer += quant;
        
        console.log("pool status:::: subir - " + this._subir + ":::: descer - " + this._descer);
        
        this.show();
    }
    
    this.reset_pool = function() {
        if(this._descer > this._subir)
            this._nave.descer();
        else if(this._descer < this._subir)
            this._nave.subir();
        else
            return; //aumenta o deadline de 24h    

        this._descer = 0;
        this._subir = 0;
        
        this.show();
    }
    
    this.set_nave = function(nave) {
        this._nave = nave;
    }
    
    this.show();
}