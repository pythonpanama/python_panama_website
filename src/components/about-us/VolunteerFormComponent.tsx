import { useState } from "react";
import { getSupabase } from "../../utils/supabase";
import { FormValidationError, publicFormError, validateText, validateEmail } from "../../utils/formValidation";

type VolunteerFormData = {
    name: string;
    email: string;
    phone: string;
    city: string;
    experience: string;
    interests: string[];
    availability: string;
    message: string;
};

export function VolunteerFormComponent() {
    const [formData, setFormData] = useState<VolunteerFormData>({
        name: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        interests: [],
        availability: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const interests = [
        { id: "eventos", label: "Organizar eventos" },
        { id: "mentoría", label: "Mentorizar y enseñar" },
        { id: "contenido", label: "Crear contenido" },
        { id: "python-route", label: "Apoyar Python Route" },
        { id: "otro", label: "Otra forma de aportar" },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name as keyof VolunteerFormData;
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError(""); // Limpiar error al cambiar campos
    };

    const handleCheckboxChange = (id: string) => {
        setFormData({
            ...formData,
            interests: formData.interests.includes(id)
                ? formData.interests.filter((i) => i !== id)
                : [...formData.interests, id],
        });
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Validar campos requeridos
            if (!formData.name || !formData.email || !formData.city) {
                throw new FormValidationError("Por favor completa los campos requeridos: nombre, email y ciudad.");
            }

            if (!formData.interests.length) {
                throw new FormValidationError("Selecciona al menos un área de interés.");
            }

            // Insertar datos en Supabase
            const { error: supabaseError } = await getSupabase()
                .from('volunteers')
                .insert([
                    {
                        name: validateText(formData.name, "nombre", 150, true),
                        email: validateEmail(formData.email),
                        phone: validateText(formData.phone, "teléfono", 40) || null,
                        city: validateText(formData.city, "ciudad", 100, true),
                        experience: validateText(formData.experience, "experiencia", 100, true),
                        interests: formData.interests,
                        availability: validateText(formData.availability, "disponibilidad", 100, true),
                        message: validateText(formData.message, "mensaje", 2000, false) || null,
                    }
                ]);

            if (supabaseError) {
                throw supabaseError;
            }

            setSubmitted(true);

            // Limpiar formulario después de 3 segundos
            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    experience: "",
                    interests: [],
                    availability: "",
                    message: "",
                });
                setSubmitted(false);
            }, 3000);

        } catch (err) {
            setError(publicFormError(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div role="main" className="main">
            <section className="volunteer-form-hero">
                <div className="container">
                    <div className="volunteer-form-hero-content">
                        <span className="volunteer-kicker">Formulario de Registro</span>
                        <h1>Únete a nuestro equipo de voluntarios</h1>
                        <p>
                            Completa este formulario para que nuestro equipo pueda conocerte mejor
                            y encontrar la mejor forma de que contribuyas a la comunidad Python Panamá.
                        </p>
                    </div>
                </div>
            </section>

            <section className="volunteer-form-section">
                <div className="container">
                    <div className="volunteer-form-container">
                        {submitted && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <i className="fas fa-check-circle me-2"></i>
                                <strong>¡Gracias por tu interés!</strong> Tu información ha sido guardada correctamente.
                                El equipo de Python Panamá se contactará contigo pronto.
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <i className="fas fa-exclamation-triangle me-2"></i>
                                <strong>Error:</strong> {error}
                            </div>
                        )}

                        <form onSubmit={(event) => { void handleSubmit(event); }} className="volunteer-form">
                            {/* Información Personal */}
                            <div className="form-section">
                                <h3>Información Personal</h3>

                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Nombre completo <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        maxLength={150}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                Email <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                maxLength={254}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="tu.email@ejemplo.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                maxLength={40}
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+507 xxxx-xxxx"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city" className="form-label">
                                        Ciudad <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        maxLength={100}
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="¿De dónde eres?"
                                    />
                                </div>
                            </div>

                            {/* Experiencia y Áreas de Interés */}
                            <div className="form-section">
                                <h3>Experiencia y Áreas de Interés</h3>

                                <div className="form-group">
                                    <label htmlFor="experience" className="form-label">
                                        Experiencia con Python <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Selecciona tu nivel --</option>
                                        <option value="principiante">Soy principiante</option>
                                        <option value="intermedio">Tengo experiencia intermedia</option>
                                        <option value="avanzado">Tengo experiencia avanzada</option>
                                        <option value="no-tecnico">No soy técnico, quiero aportar de otra forma</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        ¿En qué áreas quieres contribuir? <span className="text-danger">*</span>
                                    </label>
                                    <div className="interests-group">
                                        {interests.map((interest) => (
                                            <div key={interest.id} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={interest.id}
                                                    checked={formData.interests.includes(interest.id)}
                                                    onChange={() => handleCheckboxChange(interest.id)}
                                                />
                                                <label className="form-check-label" htmlFor={interest.id}>
                                                    {interest.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="availability" className="form-label">
                                        Disponibilidad <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="availability"
                                        name="availability"
                                        value={formData.availability}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Selecciona tu disponibilidad --</option>
                                        <option value="flexible">Flexible, depende de la actividad</option>
                                        <option value="fines-semana">Fines de semana</option>
                                        <option value="entre-semana">Entre semana</option>
                                        <option value="tiempo-limitado">Tiempo limitado/ocasional</option>
                                    </select>
                                </div>
                            </div>

                            {/* Mensaje Adicional */}
                            <div className="form-section">
                                <h3>Mensaje Adicional</h3>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        ¿Hay algo más que quieras que sepamos sobre ti?
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        maxLength={2000}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder="Cuéntanos más sobre tu motivación, experiencias previas o cualquier otra cosa relevante..."
                                    ></textarea>
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
                                            Enviar mi Registro
                                        </>
                                    )}
                                </button>
                                <a href="/quiero-ayudar" className="btn btn-outline-primary btn-lg">
                                    <i className="fas fa-arrow-left me-2"></i>
                                    Volver a Voluntariado
                                </a>
                            </div>
                        </form>

                        <div className="form-info-box">
                            <i className="fas fa-info-circle"></i>
                            <p>
                                <strong>¿Dudas?</strong> No dudes en escribirnos directamente a{" "}
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
