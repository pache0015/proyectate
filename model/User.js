class User {
    constructor() {
        this._saldo = 0;
        this._movimientos = []
    }
    get saldo() {
        return this._saldo;
    }
    get movimientos() {
        return this._movimientos
    }

    gasto(aGasto){
        this._saldo = this._saldo - aGasto.valor
        this._movimientos.push(aGasto)
    }
    acreditar(aSaldo){
        this._saldo = this._saldo + aSaldo.valor
        this._movimientos.push(aSaldo)
    }
}

module.exports = User;