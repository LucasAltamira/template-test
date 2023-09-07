import { Contacto, contactos } from "./contactos";


const eliminarContacto = ({apellido}:{apellido : string}): Contacto[] => {
    function buscarElNombre(contacto: Contacto){
        return contacto.last_name !== apellido;
    }
    return contactos.filter(buscarElNombre) ;
    
};

const agregarContacto = (contacto: Contacto) =>{
    contactos.push(contacto);
    return contactos
}

export { agregarContacto };
export { eliminarContacto };