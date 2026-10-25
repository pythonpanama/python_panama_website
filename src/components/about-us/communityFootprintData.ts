import arpiaLogo from "../../assets/img/community/arpia.png";
import itseLogo from "../../assets/img/community/itse.png";
import laSalleLogo from "../../assets/img/community/la-salle.png";
import myOfficeLogo from "../../assets/img/community/myoffice.svg";
import rootstackLogo from "../../assets/img/community/rootstack.webp";
import udiLogo from "../../assets/img/community/udi.svg";
import uipLogo from "../../assets/img/community/uip.png";
import upLogo from "../../assets/img/community/up.png";
import utpLogo from "../../assets/img/community/utp.jpg";
import jetbrainsLogo from "../../assets/img/sponsors/jb_beam.png";

// Las fuentes públicas se enlazan cuando existen. La visita a La Salle fue
// confirmada por el equipo, sin fecha ni actividad específica documentada.
export type Place = {
    name: string;
    kind: string;
    group: "Universidades e institutos" | "Colegios" | "Espacios empresariales";
    location: string;
    logo: string;
    year?: string;
    event?: string;
    source?: string;
};

export const placeGroups: Place["group"][] = ["Universidades e institutos", "Colegios", "Espacios empresariales"];

export const places: Place[] = [
    { name: "Instituto Técnico Superior Especializado (ITSE)", kind: "Instituto", group: "Universidades e institutos", location: "Ciudad de Panamá", logo: itseLogo, year: "2024", event: "PyCon Panamá 2024 · día 1", source: "https://pycon.pa/2024/" },
    { name: "Universidad Tecnológica de Panamá · Panamá Oeste", kind: "Universidad", group: "Universidades e institutos", location: "Panamá Oeste", logo: utpLogo, year: "2024", event: "PyCon Panamá 2024 · día 2", source: "https://pycon.pa/2024/" },
    { name: "Universidad Interamericana de Panamá (UIP)", kind: "Universidad", group: "Universidades e institutos", location: "Ciudad de Panamá", logo: uipLogo, year: "2024", event: "Semana de Ingeniería", source: "https://es.linkedin.com/posts/pythonpanama_participaci%C3%B3n-de-python-panam%C3%A1-en-la-semana-activity-7222720060274946048-vmRO" },
    { name: "Universidad de Panamá · Cine Universitario", kind: "Universidad", group: "Universidades e institutos", location: "Ciudad de Panamá", logo: upLogo, year: "2025", event: "PyCon Panamá 2025 · jornada presencial", source: "https://pycon.pa/2025/agenda.html" },
    { name: "Universidad del Istmo · Sede Panamá", kind: "Universidad", group: "Universidades e institutos", location: "Ciudad de Panamá", logo: udiLogo, year: "2026", event: "PyCon Panamá 2026 · día 1", source: "https://pycon.pa/2026/informacion-practica" },
    { name: "Universidad del Istmo · Sede Metromall", kind: "Universidad", group: "Universidades e institutos", location: "San Miguelito", logo: udiLogo, year: "2026", event: "PyCon Panamá 2026 · día 2", source: "https://pycon.pa/2026/informacion-practica" },
    { name: "Colegio La Salle Panamá", kind: "Colegio", group: "Colegios", location: "Ciudad de Panamá", logo: laSalleLogo, event: "Visita de Python Panamá" },
    { name: "MyOffice", kind: "Espacio empresarial", group: "Espacios empresariales", location: "Ciudad de Panamá", logo: myOfficeLogo, year: "2024", event: "PyCon Panamá 2024 · día 3", source: "https://pycon.pa/2024/" },
    { name: "Rootstack · Hato Pintado", kind: "Espacio empresarial", group: "Espacios empresariales", location: "Ciudad de Panamá", logo: rootstackLogo, year: "2026", event: "Python Meetup Vol. 48", source: "https://www.meetup.com/python-panama/events/313936727/" },
];

export type CompanyCollaboration = {
    name: string;
    logo: string;
    website: string;
    role: string;
    event?: string;
    detail: string;
    source?: string;
};

export const companyCollaborations: CompanyCollaboration[] = [
    { name: "Rootstack", logo: rootstackLogo, website: "https://rootstack.com/", role: "Sede y apoyo", event: "Python Meetup Vol. 48 · 2026", detail: "Acogió un encuentro de la comunidad en Hato Pintado.", source: "https://www.meetup.com/python-panama/events/313936727/" },
    { name: "Arp IA", logo: arpiaLogo, website: "https://www.arpia.ai/es", role: "Patrocinador", event: "PyCon Panamá 2025", detail: "Participó en el espacio de patrocinadores de la agenda oficial.", source: "https://pycon.pa/2025/agenda.html" },
    { name: "JetBrains", logo: jetbrainsLogo, website: "https://www.jetbrains.com/", role: "Patrocinador", event: "PyCon Panamá 2024", detail: "Apoyó la edición 2024 de la conferencia.", source: "https://es.linkedin.com/posts/pythonpanama_jetbrains-developwithjetbrains-pyconpanam%C3%A12024-activity-7254571356938194945-GUZA" },
    { name: "MyOffice", logo: myOfficeLogo, website: "https://myoffice.com.pa/", role: "Sede empresarial", event: "PyCon Panamá 2024 · día 3", detail: "Recibió la tercera jornada de la conferencia.", source: "https://pycon.pa/2024/" },
];
