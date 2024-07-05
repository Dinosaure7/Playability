import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectTimeOut, setRedirectimeOut] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
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
          className="flex flex-col justify-center gap-4 p-8 w-full max-w-7xl bg-[var(--white-color)] shadow-md rounded-md border-x-2 text-[var(--secondary-color)]"
        >
          <h2
            id="contactFormTitle"
            className="text-xl font-bold mb-4 text-center"
          >
            Contact form
          </h2>

          <label htmlFor="firstName" className="text-lg">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="p-2 border rounded-md"
            aria-required="true"
            aria-label="First Name"
            required
          />

          <label htmlFor="lastName" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="p-2 border rounded-md"
            aria-required="true"
            aria-label="Last Name"
            required
          />

          <label htmlFor="email" className="text-lg">
            Email
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
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="p-2 border rounded-md"
            aria-label="Phone Number"
          />

          <label htmlFor="request" className="text-lg">
            Comments
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
            onClick={handleSubmit}
            className="p-2 mt-4 bg-[var(--nuance1-secondary)] text-white rounded-md hover:bg-blue-700"
            aria-label="Submit"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="p-8 bg-white shadow-md rounded-md w-full max-w-7xl text-center">
          <h2 className="text-2xl text-[var(--secondary-color)] font-bold mb-4">
            Merci pour votre message!
          </h2>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
