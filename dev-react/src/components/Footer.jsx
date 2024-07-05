import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCopyright,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="grid grid-rows-2 grid-cols-1 h-15 gap-1 md:grid-rows-1 text-center md:grid-cols-7 bg-[#1E1E23] w-full md:gap-4 md:p-4">
      <div className="md:col-span-7 text-center">
        <Link
          to="/privacy"
          className="md:col-span-2 text-[var(--primary-color)] underline hover:text-[var(--primary-hover-color)]"
        >
          Privacy policy
        </Link>
        <br />
        <a
          href="mailto:fakeemail@example.com"
          className="text-[var(--primary-color)] underline hover:text-[var(--primary-hover-color)]"
        >
          Contact
        </a>
        <p className="flex justify-center text-center text-[var(--nuance3-secondary)]">
          <FaCopyright size={32} />
          &nbsp;2024 | Wild Code School
        </p>
      </div>
      <div className="flex justify-center md:col-span-7 space-x-4 h-10">
        <a
          href="https://www.facebook.com/"
          target="blank"
          rel="noopener noreferrer"
          className="text-center text-[var(--nuance3-secondary)]"
          aria-label="Facebook page link"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://www.twitter.com"
          target="blank"
          rel="noopener noreferrer"
          className="text-[var(--nuance3-secondary)]"
          aria-label="Twitter page link"
        >
          <FaTwitter size={32} />
        </a>
        <a
          href="https://www.instagram.com"
          target="blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[var(--nuance3-secondary)] via-[var(--nuance3-secondary)] to-[var(--nuance3-secondary)] p-1 rounded-full"
          aria-label="Instagram page link"
        >
          <FaInstagram size={32} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
