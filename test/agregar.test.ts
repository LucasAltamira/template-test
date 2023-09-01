import { agregarContacto } from "../src/agregar";
import { Contacto, contactos } from "../src/contactos";

describe("agregarContacto", () => {
  test("Al agregar un contacto la lista deberia tener un elemento mas", () => {
    const longitudInicial = contactos.length
    let c = {
      id: 1,
      first_name: ,
      last_name: ,
      email: "malderwick0@google.es",
      gender: "Male",
      ip_address: "129.91.139.60",
    };  
    const contactosDespuesDeAgregar: Contacto[] = agregarContacto(c);
    expect(contactosDespuesDeAgregar.length).toBe(longitudInicial +1);
  });

  test("tras eliminar un contcto que no existe, la lista deberia tener la misma longitud", () => {
    const longitudInicial = contactos.length
    const contactosDespuesDeEliminar: Contacto[] = eliminarContacto({apellido: "messi"});
    expect(contactosDespuesDeEliminar.length).toBe(longitudInicial);
  });
});