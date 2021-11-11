const { suite, test, assert } = require('@pmoo/testy');
const User = require("../model/User");
const Ingreso = require("../model/Ingreso")
const Gasto = require("../model/Gasto")
const Tarjeta = require("../model/Tarjeta");
const GastoTarjeta = require("../model/GastoTarjeta");



suite('Usuario', () => {
    const usuario = new User();
    const aGasto = new Gasto(10)
    const aIngreso = new Ingreso(100)

    usuario.acreditar(aIngreso);

    test('usuario con saldo', () => {
        assert.that(usuario.saldo).isEqualTo(100);
    });
    test('Un usuario tiene un gasto', () => {
        usuario.gasto(aGasto)
        assert.that(usuario.saldo).isEqualTo(90);
    });
    test('Un usuario tiene listado de movimientos', () => {
        assert.that(usuario.movimientos.length).isEqualTo(2);
    });
});
suite('Tarjeta', () => {
    const aTarjeta = new Tarjeta();
    const aGastoTarjeta = new GastoTarjeta(100,0)

    test('Una tarjeta nueva no tiene movimientos', () => {
        assert.that(aTarjeta.movimientos.length).isEqualTo(0);
    });

    test('Una tarjeta tiene movimientos', () => {
        aTarjeta.agregarMovimiento(aGastoTarjeta)
        assert.that(aTarjeta.movimientos.length).isEqualTo(1);
    });
});
//npx testy model_test.js