import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: Facebook,
    color: "hover:text-blue-500",
    label: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    color: "hover:text-blue-400",
    label: "Twitter",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:text-blue-600",
    label: "LinkedIn",
  },
  {
    href: "mailto:samuelkimanthi02@gmail.com",
    icon: Mail,
    color: "hover:text-red-400",
    label: "Email",
  },
  {
    href: "https://wa.me/254745801435",
    icon: FaWhatsapp,
    color: "hover:text-[#25D366]",
    label: "WhatsApp",
  },
];

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 return (
  <>
  <div className="max-w-screen">
     {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/254745801435"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>

    {/* Scroll To Top Button */}
    {showScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-6 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )}

    {/* Footer */}
    <footer className="bg-gray-600 text-muted-foreground px-4 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Info */}
        <div>
          <h4 className="text-white text-2xl font-bold mb-2">Qimtech</h4>
          <p className="text-sm text-white/80">
            Building smarter digital experiences.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">
            Subscribe to our newsletter
          </h4>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-muted text-white placeholder:text-gray-400"
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-500">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Links + Socials */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 text-sm">
            {footerLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="hover:underline text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {socialLinks.map(({ href, icon: Icon, color, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} transition-colors`}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/60">
        &copy; {year} Qimtech Solutions. All rights reserved.
      </div>
    </footer>

  </div>
   
  </>
);

}
