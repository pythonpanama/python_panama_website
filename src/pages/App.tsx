import { Navigate, Route, Routes } from "react-router-dom";
import { MenuComponent } from "../components/common/MenuComponent";
import { FooterComponent } from "../components/common/FooterComponent";
import { SeoMetadata } from "../components/common/SeoMetadata";
import { HomePageBodyComponent } from "../components/home/HomePageBodyComponent";
import { CodigoConductaComponent } from "../components/about-us/CodigoConductaComponent";
import { HistoriaComponent } from "../components/about-us/HistoriaComponent";
import { CompanyCollaborationsComponent, PlacesComponent } from "../components/about-us/CommunityFootprintComponent";
import { ContactPageBodyComponent } from "../components/about-us/ContactPageBodyComponent";
import { SponsorCategoryComponent, SponsorsComponent } from "../components/about-us/SponsorsComponent";
import { VolunteerComponent } from "../components/about-us/VolunteerComponent";
import { MerchComponent } from "../components/about-us/MerchComponent";
import { BlogComponent } from "../components/common/BlogComponent";
import { PythonHistoryBodyComponent } from "../components/blog/PythonHistoryBodyComponent";
import { FirstStepsInDataScienceBodyComponent } from "../components/blog/FirstStepsInDataScienceBodyComponent";
import { PythonPanama2024 } from "../components/blog/PythonPanama2024";
import { PythonPanama2024_ENG } from "../components/blog/PythonPanama2024_ENG";
import { PythonRoute } from "../components/events/PythonRoute";
import { FormacionComponent } from "../components/learning/FormacionComponent";
import { Hacktoberfest } from "../components/events/Hacktoberfest";
import { PythonRouteCodeOfConductComponent } from "../components/python-route/PythonRouteCodeOfConductComponent";
import { PythonRouteAgendaComponent } from "../components/python-route/PythonRouteAgendaComponent";
import { PythonRoutePatrocinioComponent } from "../components/python-route/PythonRoutePatrocinioComponent";
import { NotFoundComponent } from "../components/common/NotFoundComponent";


export function App() {
    return (
        <>
            <div className="body">
                <SeoMetadata />
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomePageBodyComponent />} />
                    <Route
                        path="/codigo-de-conducta"
                        element={<CodigoConductaComponent />}
                    />
                    <Route path="/historia" element={<HistoriaComponent />} />
                    <Route path="/lugares" element={<PlacesComponent />} />
                    <Route path="/empresas-colaboradoras" element={<CompanyCollaborationsComponent />} />
                    <Route path="/formacion" element={<FormacionComponent />} />
                    <Route path="/contacto" element={<ContactPageBodyComponent />} />
                    <Route path="/patrocinadores" element={<SponsorsComponent />} />
                    <Route path="/patrocinadores/comunidad" element={<SponsorCategoryComponent category="comunidad" />} />
                    <Route path="/patrocinadores/formacion" element={<SponsorCategoryComponent category="formacion" />} />
                    <Route path="/patrocinadores/conferencia" element={<SponsorCategoryComponent category="conferencia" />} />
                    <Route path="/quiero-ayudar" element={<VolunteerComponent />} />
                    <Route path="/formulario-voluntario" element={<Navigate to="/quiero-ayudar" replace />} />
                    <Route path="/merch" element={<MerchComponent />} />
                    <Route path="/blog" element={<BlogComponent />} />
                    <Route
                        path="/blog/historia-python"
                        element={<PythonHistoryBodyComponent />}
                    />
                    <Route
                        path="/blog/como-empezar-en-ciencia-de-datos-con-python"
                        element={<FirstStepsInDataScienceBodyComponent />}
                    />
                    <Route
                        path="/blog/python-panama-2024"
                        element={<PythonPanama2024 />}
                    />
                    <Route
                        path="/blog/python-panama-2024-eng"
                        element={<PythonPanama2024_ENG />}
                    />
                    <Route
                        path="/python-route"
                        element={<PythonRoute />}
                    />
                    <Route path="/hacktoberfest" element={<Hacktoberfest />} />
                    <Route
                        path="/python-route/agenda"
                        element={<PythonRouteAgendaComponent />}
                    />
                    <Route
                        path="/python-route/patrocinio"
                        element={<PythonRoutePatrocinioComponent />}
                    />
                    <Route
                        path="/python-route/code-of-conduct"
                        element={<PythonRouteCodeOfConductComponent />}
                    />
                    <Route
                        path="/formulario-python-route"
                        element={<Navigate to="/python-route" replace />}
                    />
                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
                <FooterComponent />
            </div>
        </>
    );
}
