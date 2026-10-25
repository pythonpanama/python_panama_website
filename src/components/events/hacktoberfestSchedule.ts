// El evento termina el 31 de octubre a las 3:00 p. m. en Panamá (UTC−5).
// El destacado de portada permanece una semana más.
export const HACKTOBERFEST_BANNER_END = Date.parse("2026-11-07T15:00:00-05:00");

export function isHacktoberfestBannerActive(now: number): boolean {
    return now < HACKTOBERFEST_BANNER_END;
}
