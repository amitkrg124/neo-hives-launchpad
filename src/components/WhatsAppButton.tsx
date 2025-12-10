import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918076458459";
  const message = encodeURIComponent(
    "Hi Neo Hives! I'm interested in your website development services. I'd like to know more about the ₹15,000 website package."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-semibold hidden sm:inline-block">Chat with us</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/30"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
