import { Navigate, Route, Routes } from "react-router-dom";
import { MenuComponent } from "../components/common/MenuComponent";
import { FooterComponent } from "../components/common/FooterComponent";
import { SeoMetadata } from "../components/common/SeoMetadata";
import { HomePageBodyComponent } from "../components/home/HomePageBodyComponent";
import { CodigoConductaComponent } from "../components/about-us/CodigoConductaComponent";
import { ContactPageBodyComponent } from "../components/about-us/ContactPageBodyComponent";
import { SponsorsComponent } from "../components/about-us/SponsorsComponent";
import { VolunteerComponent } from "../components/about-us/VolunteerComponent";
import { MerchComponent } from "../components/about-us/MerchComponent";
import { BlogComponent } from "../components/common/BlogComponent";
import { PythonHistoryBodyComponent } from "../components/blog/PythonHistoryBodyComponent";
import { FirstStepsInDataScienceBodyComponent } from "../components/blog/FirstStepsInDataScienceBodyComponent";
import { PythonPanama2024 } from "../components/blog/PythonPanama2024";
import { PythonPanama2024_ENG } from "../components/blog/PythonPanama2024_ENG";
import { PythonRoute } from "../components/events/PythonRoute";

import "../../public/css/HomePage.css";

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
                    <Route path="/contacto" element={<ContactPageBodyComponent />} />
                    <Route path="/patrocinadores" element={<SponsorsComponent />} />
                    <Route path="/quiero-ayudar" element={<VolunteerComponent />} />
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
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
                <FooterComponent />
            </div>
        </>
    );
}
