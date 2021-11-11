class Tarjeta{

    constructor() {
        this._movimientos =[]
    }

    get movimientos(){
        return this._movimientos
    }

    agregarMovimiento(aMovimiento){
        this._movimientos.push(aMovimiento)
    }
}
module.exports = Tarjeta;