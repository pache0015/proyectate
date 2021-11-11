const Movimiento = require("./Movimiento");

class GastoTarjeta extends Movimiento {
    constructor(valor, cuotas) {
        super(valor);
        this._cuotas = cuotas
    }

    get cuotas(){
        return this._cuotas
    }
}

module.exports = GastoTarjeta;