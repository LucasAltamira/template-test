import { Contacto, contactos } from "./contactos";


const eliminarContacto = (last_name: string): Contacto => {
    function buscarElNombre(contacto: Contacto){
        return contacto.last_name === last_name;
    }
    const encontrados = contactos.filter(buscarElNombre) ;
    encontrados.splice(0)
};

export { eliminarContacto };