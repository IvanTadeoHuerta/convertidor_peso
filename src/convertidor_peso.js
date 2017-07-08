
	const libra =  2.20462262;
	const kilogramos = 0.453592;
	
	export function kilogramosALibras(param=''){
		let result
		try{
		  if (/^\s*$/.test(param)) throw `Ingresa número`;
          if(isNaN(param)) throw `${param} No es número válido`;
		  result =  `${param} kg. esquivale a  ${Number((param * libra ).toFixed(4))} lb.`
		}catch(err){
		  result = err
		}
		
		return result;
	}

	export function librasAKilogramos(param=''){
		let result
		try{
		  if (/^\s*$/.test(param)) throw `Ingresa número`;
          if(isNaN(param)) throw `${param} No es número válido`;
		   result =  `${param} lb. esquivale a  ${Number((kilogramos * param ).toFixed(4))} kg.`
		}catch(err){
		  result = err
		}
		
		return result;
	}
