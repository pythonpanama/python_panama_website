import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./pages/App";

// Lo usa scripts/prerender.mjs para generar el HTML estático de cada ruta.
// eslint-disable-next-line react-refresh/only-export-components -- entrada del build, sin HMR
export { canonicalUrl, getSeo, routeHeadTags, routeSeo, DEFAULT_IMAGE, SITE_URL } from "./seo/siteSeo";

// eslint-disable-next-line react-refresh/only-export-components -- entrada del build, sin HMR
export function render(url: string) {
    return renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
}
