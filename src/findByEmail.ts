import { Contacto, contactos } from "./contactos";

const findByEmail = (email: string): Contacto[] => {
  if (email == "") {
    return contactos;
  }
  return contactos.filter((contacto) => contacto.email.includes(email));
};

export { findByEmail };
