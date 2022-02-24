import validator from 'validator';


export function productoDto ({nombre, precio, tipo, estado}){

    if (validator.isEmpty(nombre)){
        throw Error("el nombre no puede ser vacio");
    }

    if (!validator.isDecimal(precio.toString()) && +precio < 0){
        throw Error("el precio no puede ser negativo");
    }

    if (tipo !== "ABARROTES" && tipo !== "HIGIENE PERSONAL" && tipo !=="OTROS"){
        throw Error("El tipo debe ser ABARROTES, HIGIENE PERSONAL, OTROS");
    }

    if (estado && !validator.isBoolean(estado)){
        throw Error("El estado debe ser true o false");
    }

    return {nombre, precio, tipo, estado};

}