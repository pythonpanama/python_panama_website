import { MenuComponent } from "../components/common/MenuComponent";
import { FooterComponent } from "../components/common/FooterComponent";
import { HomePageBodyComponent } from "../components/home/HomePageBodyComponent";
import { ContactPageBodyComponent } from "../components/contact/ContactPageBodyComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import { PythonHistoryBodyComponent } from "../components/blog/PythonHistoryBodyComponent";
import { MeetGuidoVanRossumBodyComponent } from "../components/blog/MeetGuidoVanRossumBodyComponent";
import { FirstStepsInDataScienceBodyComponent } from "../components/blog/FirstStepsInDataScienceBodyComponent";
import { WorthsStudyPythonBodyComponent } from "../components/blog/WorthsStudyPythonBodyComponent";
import { FlaskHasAGoodOptionBodyComponent } from "../components/blog/FlaskHasAGoodOptionBodyComponent";
import { JuliaProgrammingLanguageBodyComponent } from "../components/blog/JuliaProgrammingLanguageBodyComponent";

import "../../public/css/HomePage.css"

export function App() {
    return (
        <>
            <div className="body">
                <MenuComponent/>
                  <Routes>
                            <Route path="/" element={<HomePageBodyComponent/>} />
                            <Route path="/contacto" element={<ContactPageBodyComponent/>} />
                            <Route path="/blog/historia-python" element={<PythonHistoryBodyComponent/>} />
                            <Route path="/blog/conoce-guido-van-rossum" element={<MeetGuidoVanRossumBodyComponent/>} />
                            <Route path="/blog/como-empezar-en-ciencia-de-datos-con-python" element={<FirstStepsInDataScienceBodyComponent/>} />
                            <Route path="/blog/vale-la-pena-estudiar-python" element={<WorthsStudyPythonBodyComponent/>} />
                            <Route path="/blog/usar-flask-aun-es-buena-opcion" element={<FlaskHasAGoodOptionBodyComponent/>} />
                            <Route path="/blog/conoce-el-lenguaje-julia" element={<JuliaProgrammingLanguageBodyComponent/>} />
                            <Route path="/*" element={ <Navigate to="/"/> }/>
                        </Routes>
                <FooterComponent/>
            </div>
        </>
    )
}