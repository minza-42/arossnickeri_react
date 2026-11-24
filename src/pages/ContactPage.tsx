import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

import phoneIcon from "../assets/icon/phone.svg";
import mailIcon from "../assets/icon/mail.svg";
import mapPinIcon from "../assets/icon/map-pin-black.svg";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = {
  type: "success" | "error";
  message: string;
};

type ApiResponse = {
  message?: string;
};

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitStatus(null);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    const maxFiles = 5;
    const maxFileSize = 10 * 1024 * 1024;

    setFileError("");
    setSubmitStatus(null);

    if (selectedFiles.length > maxFiles) {
      setFileError("Du kan ladda upp högst 5 filer.");
      event.target.value = "";
      setFiles([]);
      return;
    }

    const tooLarge = selectedFiles.some((file) => file.size > maxFileSize);

    if (tooLarge) {
      setFileError("Varje fil får vara högst 10 MB.");
      event.target.value = "";
      setFiles([]);
      return;
    }

    const invalidFile = selectedFiles.some(
      (file) =>
        !file.type.startsWith("image/") && file.type !== "application/pdf",
    );

    if (invalidFile) {
      setFileError("Du kan endast bifoga bilder eller PDF-filer.");
      event.target.value = "";
      setFiles([]);
      return;
    }

    setFiles(selectedFiles);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    if (fileError) {
      setSubmitStatus({
        type: "error",
        message: "Kontrollera dina bifogade filer innan du skickar.",
      });
      return;
    }

    setIsSending(true);
    setSubmitStatus(null);

    try {
      const data = new FormData();

      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("message", formData.message.trim());

      files.forEach((file) => {
        data.append("files[]", file);
      });

      const response = await fetch("/api/send-mail.php", {
        method: "POST",
        body: data,
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(result.message || "Kunde inte skicka meddelandet.");
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Tack! Ditt meddelande har skickats. Vi återkommer så snart vi kan.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setFiles([]);
      setFileError("");

      event.currentTarget.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Något gick fel. Försök igen senare.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-page__container">
        {/* Page header */}
        <header className="contact-page__header">
          <h1>Kontakta oss</h1>

          <p>
            Har du frågor eller funderingar kring ett projekt? Hör gärna av dig
            så hjälper vi dig vidare.
          </p>
        </header>

        {/* Main content */}
        <div className="contact-page__content">
          {/* Contact information */}
          <section className="contact-info">
            <div className="contact-info__intro">
              <h2>Vi finns här för dig</h2>

              <p>
                Vi hjälper dig gärna med frågor, idéer och förfrågningar om våra
                snickeritjänster.
              </p>
            </div>

            {/* Contact details */}
            <div className="contact-info__details">
              {/* Phone */}
              <div className="contact-info__item">
                <img src={phoneIcon} alt="" />

                <div>
                  <h3>Telefon</h3>
                  <a href="tel:018100180">018-100 180</a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info__item">
                <img src={mailIcon} alt="" />

                <div>
                  <h3>E-post</h3>
                  <a href="mailto:info@arossnickeri.se">info@arossnickeri.se</a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info__item">
                <img src={mapPinIcon} alt="" />

                <div>
                  <h3>Besöksadress</h3>
                  <p>Anna Fabris gata 12A, 754 54 Uppsala</p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="contact-social">
              <h3>Följ oss</h3>

              <div className="contact-social__links">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arossnickeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social__link"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>

                  <span>Instagram</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/aros-snickeri-ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social__link"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>

                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Google Maps */}
              <div className="contact-page__map-section">
                <iframe
                  className="contact-page__map"
                  src="https://maps.google.com/maps?q=59.849209,17.712969&z=16&output=embed"
                  title="Hitta till Aros Snickeri"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Contact form */}
          <section className="contact-form">
            <div className="contact-form__header">
              <h2>Skicka ett meddelande</h2>

              <p>Fyll i formuläret så återkommer vi så snart vi kan.</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="contact-form__field">
                <label htmlFor="contact-name">
                  Namn <span className="contact-form__required">*</span>
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ditt namn"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email */}
              <div className="contact-form__field">
                <label htmlFor="contact-email">
                  E-post <span className="contact-form__required">*</span>
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="din@email.se"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="contact-form__field">
                <label htmlFor="contact-phone">Telefon</label>

                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ditt telefonnummer"
                  autoComplete="tel"
                />
              </div>

              {/* Message */}
              <div className="contact-form__field">
                <label htmlFor="contact-message">
                  Meddelande <span className="contact-form__required">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Berätta gärna om ditt projekt..."
                  rows={6}
                  required
                />
              </div>

              {/* File upload */}
              <div className="contact-form__field">
                <label htmlFor="contact-files">Bifoga bilder eller filer</label>

                <input
                  type="file"
                  id="contact-files"
                  name="files"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />

                <small>Max 5 filer. Varje fil får vara högst 10 MB.</small>

                {fileError && (
                  <p className="contact-form__error" role="alert">
                    {fileError}
                  </p>
                )}

                {files.length > 0 && (
                  <ul className="contact-form__file-list">
                    {files.map((file) => (
                      <li key={`${file.name}-${file.size}`}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Required fields */}
              <p className="contact-form__required">* Obligatoriska fält</p>

              {/* Submit */}
              <button
                type="submit"
                className="contact-form__submit"
                disabled={isSending}
              >
                {isSending ? "Skickar..." : "Skicka meddelande"}
              </button>

              {/* Submission status */}
              {submitStatus && (
                <p
                  className={`contact-form__status contact-form__status--${submitStatus.type}`}
                  role="status"
                >
                  {submitStatus.message}
                </p>
              )}

              {/* Privacy information */}
              <p className="contact-form__privacy">
                Vi behandlar dina kontaktuppgifter för att kunna besvara din
                förfrågan. Läs mer i vår{" "}
                <Link to="/integritetspolicy">integritetspolicy</Link>.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
