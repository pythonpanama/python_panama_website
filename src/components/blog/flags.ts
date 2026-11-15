// Banderas SVG de flag-icons (MIT © Panayiotis Lipiridis).
// Licencia y atribución: LICENCIAS-TERCEROS.md (raíz del repositorio)
// Se importa solo cada SVG que se usa (no la hoja de estilos completa),
// así Vite incluye en el sitio únicamente estas banderas.
import br from "flag-icons/flags/4x3/br.svg";
import cl from "flag-icons/flags/4x3/cl.svg";
import co from "flag-icons/flags/4x3/co.svg";
import cr from "flag-icons/flags/4x3/cr.svg";
import cu from "flag-icons/flags/4x3/cu.svg";
import gt from "flag-icons/flags/4x3/gt.svg";
import inFlag from "flag-icons/flags/4x3/in.svg";
import mx from "flag-icons/flags/4x3/mx.svg";
import ni from "flag-icons/flags/4x3/ni.svg";
import pa from "flag-icons/flags/4x3/pa.svg";
import pe from "flag-icons/flags/4x3/pe.svg";
import ve from "flag-icons/flags/4x3/ve.svg";

// Para agregar un país: importa su SVG (código ISO 3166-1 alfa-2) y súmalo aquí.
export const FLAGS = { br, cl, co, cr, cu, gt, in: inFlag, mx, ni, pa, pe, ve } as const;
export type CountryCode = keyof typeof FLAGS;
