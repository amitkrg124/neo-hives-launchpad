import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918076458459";
  
  const messages = [
    { text: "Website Package ₹15,000", query: "Hi Neo Hives! I'm interested in your ₹15,000 website package. Please share more details." },
    { text: "Google Business Setup", query: "Hi Neo Hives! I want to set up my Google Business Profile. Can you help?" },
    { text: "SEO Services", query: "Hi Neo Hives! I'm looking for SEO services for my business website." },
    { text: "Custom Quote", query: "Hi Neo Hives! I need a custom quote for my project. Please get in touch." },
  ];

  const handleClick = (query: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Chat options popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-card rounded-2xl shadow-large border border-border overflow-hidden mb-2 animate-fade-in">
          <div className="bg-[#25D366] p-4 text-white">
            <h3 className="font-bold text-base">Chat with Neo Hives</h3>
            <p className="text-sm text-white/80">Typically replies instantly</p>
          </div>
          <div className="p-3 space-y-2 max-h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleClick(msg.query)}
                className="w-full text-left p-3 rounded-xl bg-muted hover:bg-accent transition-colors text-sm font-medium text-foreground"
              >
                {msg.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white pl-3 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <div className="relative">
              <MessageCircle className="w-6 h-6 fill-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>
              </span>
            </div>
            <span className="font-semibold text-sm">Chat with us</span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
