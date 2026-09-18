export class FormValidationError extends Error {}

export function validateText(value: string, label: string, max: number, required = false) {
    const text = value.trim();
    if (required && !text) {
        throw new FormValidationError(`Completa el campo ${label}.`);
    }
    if (text.length > max) {
        throw new FormValidationError(`${label} admite un máximo de ${max} caracteres.`);
    }
    return text;
}

export function validateEmail(value: string) {
    const email = validateText(value, "correo electrónico", 254, true);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new FormValidationError("Introduce un correo electrónico válido.");
    }
    return email;
}

export function validateAge(value: string) {
    if (!/^\d+$/.test(value) || Number(value) < 5 || Number(value) > 120) {
        throw new FormValidationError("La edad debe ser un número entero entre 5 y 120.");
    }
    return Number(value);
}

export function publicFormError(error: unknown) {
    return error instanceof FormValidationError
        ? error.message
        : "No pudimos guardar tu registro. Inténtalo de nuevo más tarde.";
}
