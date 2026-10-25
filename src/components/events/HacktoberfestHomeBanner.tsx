import { useEffect, useState } from "react";
import {
    HACKTOBERFEST_BANNER_END,
    isHacktoberfestBannerActive,
} from "./hacktoberfestSchedule";

export function HacktoberfestHomeBanner() {
    // Igual que el HTML prerenderizado durante la hidratación.
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (!isHacktoberfestBannerActive(Date.now())) {
            setIsActive(false);
            return;
        }

        const timeout = window.setTimeout(
            () => setIsActive(false),
            HACKTOBERFEST_BANNER_END - Date.now(),
        );
        return () => window.clearTimeout(timeout);
    }, []);

    if (!isActive) return null;

    return (
        <section className="home-event-feature" aria-labelledby="home-event-title">
            <div className="container home-event-feature-inner">
                <div>
                    <span>Evento de la comunidad · 31 de octubre de 2026</span>
                    <h2 id="home-event-title">Hacktoberfest Hack Day Panama City</h2>
                    <p>Aprende y contribuye al código abierto con Python Panamá en Ciudad de las Artes.</p>
                </div>
                <a className="btn btn-primary" href="/hacktoberfest">Conocer el evento</a>
            </div>
        </section>
    );
}
