import { FaFacebook, FaInstagram, FaTwitter, FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <section className="grid grid-rows-2 grid-cols-1 h-15 gap-1 lg:grid-rows-1 text-center lg:grid-cols-7 bg-[#BE9CC7] w-full lg:gap-4 lg:p-4">
      <div className="lg:col-span-7 text-center">
      <Link to="/privacy" target="blank" rel="noopener noreferrer" className="md:col-span-2 text-blue-600 hover:underline">politique de confidentialité</Link><br />
      <Link to="/contact" target="blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">contact</Link>
      <p className="flex justify-center text-center text-black"><FaCopyright size={32}/>&nbsp;2024 | Wild Code School</p>
      </div>
      <div className="flex justify-center lg:col-span-7 space-x-4 h-10">
      <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer" className="text-center text-blue-800 "><FaFacebook size={32} /></a> 
      <a href="https://www.twitter.com" target="blank" rel="noopener noreferrer" className="text-blue-500"><FaTwitter size={32} /></a> 
      <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-1 rounded-full"><FaInstagram size={32} /></a> 
      </div>        

      
    </section>
  )
}

export default Footer;
