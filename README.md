# Convertidor De Peso

Convertidor De Peso es un modulo que en esta version trabaja unicamente con kilogramos y libras. 

## Descripción

- Si el número que se introduce es igual a "" o null, pide al usuario ingresar un número  
- Si el valor que se introduce es un alfanumerico, muestra el mensaje "Número no válido"
- Si el valor que se introduce es un número correcto, muestra su equivalente

## Instalación

```
npm install convertidor_peso
```

## Uso

```
import {kilogramosALibras} from 'convertidor_peso'
import {librasAKilogramos} from 'convertidor_peso'

kilogramosALibras() // Ingresa número
kilogramosALibras(10) // 10 kg. esquivale a 22.0462 lb.

librasAKilogramos("1A") // 1A No es número válido
librasAKilogramos(205) // 205 lb. esquivale a  92.9864 kg.

```

## Créditos
- [Ivan Tadeo Huerta](https://www.facebook.com/profile.php?id=100011351931295)

## Licencia

[MIT](https://opensource.org/licenses/MIT)

