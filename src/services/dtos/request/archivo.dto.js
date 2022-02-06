import validator from "validator";

export function archivoDto({productoId, contentType, ext, filename}){

    

    if(!validator.isNumeric(productoId.toString())){
        throw Error("El productoID debe ser numerico");
    }

    if(
        contentType != 'image/png' && 
        contentType != 'image/jpg' && 
        contentType != 'image/jpeg'){
        throw Error("El contentType solo puede ser: image/png, image(jpeg, image/jpg");
    }

    if(
        !validator.equals(ext, "jpg") &&
        !validator.equals(ext, "png") &&
        !validator.equals(ext, "jpeg")
    ){
        throw Error("La ext solo puede ser: png, jpg, jpeg");
    }

    return {productoId, contentType, ext, filename}
}