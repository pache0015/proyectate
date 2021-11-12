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

    totalAPagar(){
        let total = this._movimientos.forEach(m => total = total + m.valor)
        return total
    }
}
module.exports = Tarjeta;