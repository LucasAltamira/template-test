import { eliminarContacto} from "../src/enzo";
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