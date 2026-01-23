import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-info text-secondary pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <div className="flex justify-start items-center">
            <h2 className="text-lg lg:text-2xl font-bold text-secondary">FLWR</h2>
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/daisy.png"
              alt=""
            />
          </div>
            </Link>
            <p className="mt-4 text-sm text-neutral-content/70">
              Delicately wrapped and beautifully composed, each bouquet carries warmth, intention, and a quiet kind of magic meant to be felt, not spoken.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Quick Links</h3>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Collections</a>
            <a className="link link-hover">Donate Clothes</a>
            <a className="link link-hover">Contact Us</a>
          </div>

          {/* Company */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Company</h3>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Story</a>
            <a className="link link-hover">Collaborate</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>

          {/* Social */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="cursor-pointer hover:text-primary transition" />
              <FaInstagram className="cursor-pointer hover:text-primary transition" />
              <FaTwitter className="cursor-pointer hover:text-primary transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-primary transition" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-content/20 py-6 text-center text-sm text-neutral-content/70">
          © {new Date().getFullYear()} FLWR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;