import { eliminarContacto} from "../src/enzo";
import { Contacto, contactos } from "../src/contactos";

describe("eliminarContacto", () => {
  test("deberia eliminar el contacto de la primer posición de la lista", () => {
    const contacto: Contacto[] = eliminarContacto("");
    expect(contactos).toBe(9);
  });
});