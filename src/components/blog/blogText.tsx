// Utilidades de texto compartidas por las entradas de resumen del blog.

import { Fragment, type ReactNode } from "react";

export const external = { target: "_blank", rel: "noopener noreferrer" };

// Convierte **negrita** y `código` del contenido en elementos de React.
export function rich(text: string): ReactNode {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
        return <Fragment key={i}>{part}</Fragment>;
    });
}
