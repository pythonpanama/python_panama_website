import { useState } from "react";
import { supabase } from "../../utils/supabase";

type PythonRouteFormData = {
    email: string;
    name: string;
    phone: string;
    age: string;
    province: string;
    exact_location: string;
    group_type: string;
    workshop_interest: string;
    programming_experience: string;
    newsletter_consent: boolean;
    data_protection_accepted: boolean;
    additional_comments: string;
};

const provinces = [
    "Bocas del Toro",
    "Chiriquí",
    "Coclé",
    "Colón",
    "Darién",
    "Herrera",
    "Los Santos",
    "Panamá",
    "Panamá Oeste",
    "Veraguas",
];

const groupTypes = [
    "Estudiante de secundaria",
    "Estudiante universitario",
    "Docente",
    "Mujer interesada en tecnología",
    "Profesional emergente",
    "Comunidad con acceso limitado a formación tecnológica",
    "Otro (especificar)",
];

const programmingExperiences = [
    "Sí, he usado Python y otros lenguajes",
    "Básica",
    "Muy poca",
    "Soy un libro en blanco, ¡pero listo y comprometido para escribir una historia épica en código!",
];

const workshopInterestOptions = [
    "Taller de introducción a Python",
    "Taller de robótica con Python",
    "Taller de análisis de datos con Python",
    "Taller de desarrollo web con Python",
    "Charla de Python en la comunidad",
    "Otro",
];

export function PythonRouteFormComponent() {
    const [formData, setFormData] = useState<PythonRouteFormData>({
        email: "",
        name: "",
        phone: "",
        age: "",
        province: "",
        exact_location: "",
        group_type: "",
        workshop_interest: "",
        programming_experience: "",
        newsletter_consent: false,
        data_protection_accepted: false,
        additional_comments: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Validar campos requeridos
            if (
                !formData.email ||
                !formData.name ||
                !formData.age ||
                !formData.province ||
                !formData.group_type ||
                !formData.workshop_interest ||
                !formData.programming_experience
            ) {
                throw new Error(
                    "Por favor completa todos los campos requeridos (marcados con *)."
                );
            }

            if (!formData.data_protection_accepted) {
                throw new Error(
                    "Debes aceptar la protección de datos personales para continuar."
                );
            }

            // Insertar datos en Supabase
            const { error: supabaseError } = await supabase
                .from("python_route_registrations")
                .insert([
                    {
                        email: formData.email,
                        name: formData.name,
                        phone: formData.phone || null,
                        age: formData.age ? parseInt(formData.age) : null,
                        province: formData.province,
                        exact_location: formData.exact_location || null,
                        group_type: formData.group_type,
                        workshop_interest: formData.workshop_interest,
                        programming_experience: formData.programming_experience,
                        newsletter_consent: formData.newsletter_consent,
                        data_protection_accepted: formData.data_protection_accepted,
                        additional_comments: formData.additional_comments || null,
                    },
                ]);

            if (supabaseError) {
                throw new Error(
                    `Error al guardar los datos: ${supabaseError.message}`
                );
            }

            setSubmitted(true);

            // Limpiar formulario después de 3 segundos
            setTimeout(() => {
                setFormData({
                    email: "",
                    name: "",
                    phone: "",
                    age: "",
                    province: "",
                    exact_location: "",
                    group_type: "",
                    workshop_interest: "",
                    programming_experience: "",
                    newsletter_consent: false,
                    data_protection_accepted: false,
                    additional_comments: "",
                });
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error("Error submitting form:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Ocurrió un error inesperado. Por favor intenta de nuevo."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div role="main" className="main">
            <section className="volunteer-form-hero">
                <div className="container">
                    <div className="volunteer-form-hero-content">
                        <span className="volunteer-kicker">Inscripción</span>
                        <h1>Python Route 2025</h1>
                        <p>
                            ¡Gracias por tu interés en Python Route! Este proyecto busca acercar
                            la tecnología y la programación a todos los rincones de Panamá. Por
                            favor completa el siguiente formulario para reservar tu espacio en uno
                            de nuestros talleres o visitas educativas. ¡Nos emociona contar contigo!
                        </p>
                    </div>
                </div>
            </section>

            <section className="volunteer-form-section">
                <div className="container">
                    <div className="volunteer-form-container">
                        {submitted && (
                            <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                            >
                                <i className="fas fa-check-circle me-2"></i>
                                <strong>¡Gracias por tu interés!</strong> Tu inscripción ha sido
                                guardada correctamente. Nos comunicaremos contigo próximamente con
                                más detalles sobre el taller que seleccionaste.
                            </div>
                        )}

                        {error && (
                            <div
                                className="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                <i className="fas fa-exclamation-triangle me-2"></i>
                                <strong>Error:</strong> {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="volunteer-form">
                            {/* Información de Contacto */}
                            <div className="form-section">
                                <h3>Información de Contacto</h3>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Correo electrónico <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="tu.email@ejemplo.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Nombre completo <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">
                                        Número de teléfono (opcional)
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Ejemplo: +507 6123 4567"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="age" className="form-label">
                                                Edad <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="age"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                required
                                                min="5"
                                                max="120"
                                                placeholder="Tu edad"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="province" className="form-label">
                                                Provincia en Panamá{" "}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                id="province"
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">-- Selecciona provincia --</option>
                                                {provinces.map((province) => (
                                                    <option key={province} value={province}>
                                                        {province}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exact_location" className="form-label">
                                        Ubicación exacta
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exact_location"
                                        name="exact_location"
                                        value={formData.exact_location}
                                        onChange={handleInputChange}
                                        placeholder="Ejemplo: Centro, Colón (opcional)"
                                    />
                                </div>
                            </div>

                            {/* Información del Taller */}
                            <div className="form-section">
                                <h3>Información del Taller</h3>

                                <div className="form-group">
                                    <label htmlFor="group_type" className="form-label">
                                        ¿A qué grupo perteneces?{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="group_type"
                                        name="group_type"
                                        value={formData.group_type}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Selecciona un grupo --</option>
                                        {groupTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="workshop_interest" className="form-label">
                                        ¿En qué taller te interesa participar?{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="workshop_interest"
                                        name="workshop_interest"
                                        value={formData.workshop_interest}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Selecciona un taller --</option>
                                        {workshopInterestOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="programming_experience" className="form-label">
                                        ¿Tienes alguna experiencia previa con programación?{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="programming_experience"
                                        name="programming_experience"
                                        value={formData.programming_experience}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">
                                            -- Selecciona tu experiencia --
                                        </option>
                                        {programmingExperiences.map((exp) => (
                                            <option key={exp} value={exp}>
                                                {exp}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Preferencias */}
                            <div className="form-section">
                                <h3>Preferencias</h3>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="newsletter_consent"
                                        name="newsletter_consent"
                                        checked={formData.newsletter_consent}
                                        onChange={handleInputChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="newsletter_consent"
                                    >
                                        ¿Deseas recibir noticias sobre próximos eventos de Python
                                        Panamá?
                                    </label>
                                </div>
                            </div>

                            {/* Comentarios Adicionales */}
                            <div className="form-section">
                                <h3>Comentarios Adicionales</h3>

                                <div className="form-group">
                                    <label htmlFor="additional_comments" className="form-label">
                                        ¿Hay algo más que quieras compartir con nosotros?
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="additional_comments"
                                        name="additional_comments"
                                        value={formData.additional_comments}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Cuéntanos lo que consideres relevante..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Protección de Datos */}
                            <div className="form-section">
                                <h3>🔒 Protección de Datos Personales</h3>
                                <div className="data-protection-box">
                                    <p>
                                        De conformidad con la <strong>Ley 81 de 2019</strong> sobre
                                        Protección de Datos Personales en Panamá, te informamos que
                                        los datos recolectados en este formulario serán utilizados
                                        <strong> exclusivamente para fines organizativos y
                                        estadísticos</strong> del proyecto "Python Route". No serán
                                        compartidos con terceros ni utilizados con fines comerciales.
                                    </p>
                                    <p>
                                        Al completar este formulario, aceptas el tratamiento
                                        responsable y seguro de tus datos personales.
                                    </p>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="data_protection_accepted"
                                        name="data_protection_accepted"
                                        checked={formData.data_protection_accepted}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="data_protection_accepted"
                                    >
                                        <strong>Acepto</strong> el tratamiento de mis datos
                                        personales de conformidad con la Ley 81 de 2019{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                            </div>

                            {/* Botones de Acción */}
                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    disabled={loading || submitted}
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin me-2"></i>
                                            Enviando...
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <i className="fas fa-check me-2"></i>
                                            ¡Enviado!
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Enviar Inscripción
                                        </>
                                    )}
                                </button>
                                <a href="/" className="btn btn-outline-primary btn-lg">
                                    <i className="fas fa-arrow-left me-2"></i>
                                    Volver al Inicio
                                </a>
                            </div>
                        </form>

                        <div className="form-info-box">
                            <i className="fas fa-info-circle"></i>
                            <p>
                                <strong>¿Preguntas?</strong> No dudes en escribirnos directamente a{" "}
                                <a href="mailto:pythonpanama4@gmail.com">nuestro correo</a> o
                                conectate con nosotros en nuestras{" "}
                                <a href="/contacto">redes sociales</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
