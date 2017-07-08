const expect = require('chai').expect
const kilogramosALibras = require('..').kilogramosALibras
const librasAKilogramos = require('..').librasAKilogramos

describe('#kilogramosALibras', function () {

  it('Si el número que se introduce es igual a "" o null', function () {
    const translation = kilogramosALibras('')
    expect(translation).to.equal("Ingresa número")
  })

  it('Si el valor que se introduce es un número correcto', function () {
    const translation = kilogramosALibras(10)
    expect(translation).to.equal("10 kg. esquivale a  22.0462 lb.")
  })

})

describe('#librasAKilogramos', function () {

  it('Si el número que se introduce es igual a "" o null', function () {
    const translation = librasAKilogramos('')
    expect(translation).to.equal("Ingresa número")
  })

  it('Si el valor que se introduce es un número correcto', function () {
    const translation = librasAKilogramos(205)
    expect(translation).to.equal("205 lb. esquivale a  92.9864 kg.")
  })

})