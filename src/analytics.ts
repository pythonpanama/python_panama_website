// Google Analytics 4 solo se carga si el build define VITE_GA_MEASUREMENT_ID.
// La medición mejorada de GA4 registra por sí sola los cambios de ruta de la
// SPA, el scroll y los clics salientes, así que no hace falta más código aquí.
declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

export function loadAnalytics() {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
    // Mismo patrón que scripts/env.mjs, que hace fallar el build si el ID es inválido.
    if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return;

    window.dataLayer = window.dataLayer || [];
    // gtag.js exige recibir el objeto `arguments`, no un arreglo.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-rest-params
    function gtag(..._args: unknown[]) { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
}
