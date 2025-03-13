import { Navigate, Route, Routes } from "react-router-dom";
import { MenuComponent } from "../components/common/MenuComponent";
import { FooterComponent } from "../components/common/FooterComponent";
import { HomePageBodyComponent } from "../components/home/HomePageBodyComponent";
import { CodigoConductaComponent} from "../components/code-conduct/CodigoConductaComponent";
import { ContactPageBodyComponent } from "../components/contact/ContactPageBodyComponent";
import { BlogComponent } from "../components/common/BlogComponent";
import { PythonHistoryBodyComponent } from "../components/blog/PythonHistoryBodyComponent";
import { MeetGuidoVanRossumBodyComponent } from "../components/blog/MeetGuidoVanRossumBodyComponent";
import { FirstStepsInDataScienceBodyComponent } from "../components/blog/FirstStepsInDataScienceBodyComponent";
import { WorthsStudyPythonBodyComponent } from "../components/blog/WorthsStudyPythonBodyComponent";
import { FlaskHasAGoodOptionBodyComponent } from "../components/blog/FlaskHasAGoodOptionBodyComponent";
import { PythonPanama2024 } from "../components/blog/PythonPanama2024";
import { PythonPanama2024_ENG } from "../components/blog/PythonPanama2024_ENG";

import "../../public/css/HomePage.css"

export function App() {
    return (
        <>
            <div className="body">
                <MenuComponent/>
                  <Routes>
                            <Route path="/" element={<HomePageBodyComponent/>} />
                            <Route path="/codigo-de-conducta" element={<CodigoConductaComponent/>} />
                            <Route path="/contacto" element={<ContactPageBodyComponent/>} />
                            <Route path="/blog" element={<BlogComponent/>} />
                            <Route path="/blog/historia-python" element={<PythonHistoryBodyComponent/>} />
                            <Route path="/blog/conoce-guido-van-rossum" element={<MeetGuidoVanRossumBodyComponent/>} />
                            <Route path="/blog/como-empezar-en-ciencia-de-datos-con-python" element={<FirstStepsInDataScienceBodyComponent/>} />
                            <Route path="/blog/vale-la-pena-estudiar-python" element={<WorthsStudyPythonBodyComponent/>} />
                            <Route path="/blog/usar-flask-aun-es-buena-opcion" element={<FlaskHasAGoodOptionBodyComponent/>} />
                            <Route path="/blog/python-panama-2024" element={<PythonPanama2024/>} />
                            <Route path="/blog/python-panama-2024-eng" element={<PythonPanama2024_ENG/>} />
                            <Route path="/*" element={ <Navigate to="/"/> }/>
                        </Routes>
                <FooterComponent/>
            </div>
        </>
    )
}