import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Contact = () => {
  const whatsappNumber = "923458783923";
  
  const handleWhatsApp = (message?: string) => {
    const defaultMessage = "Hello IQ Ceilings! I'm interested in your services.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const quickMessages = [
    { title: "Get a Quote", message: "Hi! I'd like to get a quote for ceiling installation." },
    { title: "Basic Design", message: "Hello! I'm interested in your Basic Design package (80 PKR)." },
    { title: "Medium Design", message: "Hi! I want to know more about the Medium Design (90 PKR)." },
    { title: "High Design", message: "Hello! I'd like details on the High Design package (110 PKR)." },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+92 345 8783923",
      action: () => window.open("tel:+923458783923", "_self"),
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "aliishaqsandho@gmail.com",
      action: () => window.open("mailto:aliishaqsandho@gmail.com", "_self"),
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Pakistan",
      action: null,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 8:00 PM",
      action: null,
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  const features = [
    "Instant WhatsApp Response",
    "Free Consultation",
    "25+ Years Experience",
    "Quality Guaranteed"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
              <span className="text-primary text-sm font-medium">Let's Connect on WhatsApp</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Get In Touch With <span className="text-primary">IQ CEILINGS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Chat with Muhammad Ishaq instantly on WhatsApp.<br />Quick responses guaranteed!
            </p>

            {/* Main WhatsApp CTA */}
            <Button 
              size="lg"
              onClick={() => handleWhatsApp()}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                Chat on WhatsApp Now
              </span>
            </Button>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Message Templates */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quick Start a Conversation
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose a template or start your own message
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {quickMessages.map((msg, index) => (
                <Card 
                  key={index}
                  onClick={() => handleWhatsApp(msg.message)}
                  className="group cursor-pointer border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {msg.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {msg.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We're available through multiple channels
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`group border-border bg-gradient-to-br ${info.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${info.action ? 'cursor-pointer' : ''}`}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                        <p className="text-foreground/80">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Muhammad Ishaq and his team of 25+ years experience are ready to help
            </p>
            <Button 
              size="lg"
              onClick={() => handleWhatsApp()}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10 flex items-center gap-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                Start Your Project Today
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
