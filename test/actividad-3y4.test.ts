import { eliminarContacto, agregarContacto} from "../src/actividad-3y4";
import { Contacto, contactos } from "../src/contactos";

describe("eliminarContacto", () => {
  test("tras eliminar un contcto la longitud de la lista se reduce en uno", () => {
    const longitudInicial = contactos.length
    const contactosDespuesDeEliminar: Contacto[] = eliminarContacto({apellido: "Alderwick"});
    expect(contactosDespuesDeEliminar.length).toBe(longitudInicial -1);
  });

  test("tras eliminar un contcto que no existe, la lista deberia tener la misma longitud", () => {
    const longitudInicial = contactos.length
    const contactosDespuesDeEliminar: Contacto[] = eliminarContacto({apellido: "messi"});
    expect(contactosDespuesDeEliminar.length).toBe(longitudInicial);
  });
});

describe("agregarContacto", () => {
  test("Al agregar un contacto la lista deberia tener un elemento mas", () => {
    const longitudInicial = contactos.length
    let c = {
      id: 18,
      first_name: "Jenni",
      last_name: "Borelli",
      email: "malderwick0@google.es",
      gender: "Male",
      ip_address: "129.91.139.60",
    };  
    const contactosDespuesDeAgregar: Contacto[] = agregarContacto(c);
    expect(contactosDespuesDeAgregar.length).toBe(longitudInicial +1);
  });

  test("Verificar que la informacion del contacto se guardo correctamente", () => {
    let c = {
      id: 180,
      first_name: "Jenni",
      last_name: "Borelli",
      email: "malderwick0@google.es",
      gender: "Male",
      ip_address: "129.91.139.60",
    };  
    const contactosDespuesDeAgregar: Contacto[] =  agregarContacto(c);
    const contactoNuevo = contactosDespuesDeAgregar[contactosDespuesDeAgregar.length -1];
    expect(contactoNuevo.id ).toBe(180);
  });
});