import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectTimeOut, setRedirectimeOut] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérification des champs avant de soumettre
    const firstName = event.target.firstName.value.trim();
    const lastName = event.target.lastName.value.trim();
    const email = event.target.email.value.trim();

    if (!firstName || !lastName || !email) {
      alert("Please fill out all required fields.");
      return;
    }

    // Vérification du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitted(true);
  };

  useEffect(() => {
    let redirectTimeOut;
    if (isSubmitted) {
      redirectTimeOut = setTimeout(() => {
        navigate("/");
      }, 5000);
    }
    return () => {
      clearTimeout(redirectTimeOut);
    };
  }, [isSubmitted, navigate]);

  return (
    <section className="flex items-center justify-center min-h-screen">
      {!isSubmitted ? (
        <form
          aria-labelledby="Formulaire de contact"
          className="flex flex-col justify-center gap-4 p-8 w-full max-w-7xl bg-[var(--white-color)] shadow-md rounded-md border-x-2 text-[var(--secondary-color)] max-md:m-3 m-5"
          onSubmit={handleSubmit} // Ajout de la fonction handleSubmit au formulaire
        >
          <h2 id="contactFormTitle" className="text-xl font-bold mb-4 text-center">
            Contact form
          </h2>

          <label htmlFor="firstName" className="text-lg">
            First name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="p-2 border rounded-md"
            aria-required="true"
            aria-label="First Name"
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ '-]+"
            title="Only letters, spaces, and hyphens are allowed"
            required
          />

          <label htmlFor="lastName" className="text-lg">
            Last name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="p-2 border rounded-md"
            aria-required="true"
            aria-label="Last Name"
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ '-]+"
            title="Only letters, spaces, and hyphens are allowed"
            required
          />

          <label htmlFor="email" className="text-lg">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded-md"
            aria-required="true"
            aria-label="Email"
            required
          />

          <label htmlFor="phone" className="text-lg">
            Phone number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="p-2 border rounded-md"
            aria-label="Phone Number"
          />

          <label htmlFor="request" className="text-lg">
            Comments *
          </label>
          <textarea
            id="request"
            name="request"
            className="p-2 border rounded-md"
            rows="4"
            aria-label="Write Your Request"
            required
          ></textarea>

          <button
            type="submit"
            className="p-2 mt-4 bg-[var(--nuance1-secondary)] text-white rounded-md hover:bg-blue-700"
            aria-label="Submit"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="p-8 bg-white shadow-md rounded-md w-full max-w-7xl text-center">
          <h2 className="text-2xl text-[var(--secondary-color)] font-bold mb-4">
            Thank you for your message!
          </h2>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
