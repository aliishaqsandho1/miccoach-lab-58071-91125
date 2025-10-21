import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  const pricingTiers = [
    {
      id: "basic",
      name: "Basic Design",
      price: "80",
      description: "Perfect for simple spaces with elegant touch",
      features: [
        "Clean and minimal design",
        "Standard materials",
        "Basic lighting integration",
        "1 year warranty",
        "Free consultation"
      ],
      popular: false,
      gradient: "from-secondary/20 to-muted/20",
      border: "border-border",
      buttonColor: "from-secondary to-muted"
    },
    {
      id: "medium",
      name: "Medium Design",
      price: "90",
      description: "Enhanced designs for modern living",
      features: [
        "Contemporary styling",
        "Premium materials",
        "Advanced lighting options",
        "2 year warranty",
        "Free consultation & design mock-up",
        "Priority support"
      ],
      popular: true,
      gradient: "from-primary/20 to-accent/20",
      border: "border-primary/40",
      buttonColor: "from-primary to-accent"
    },
    {
      id: "high",
      name: "High Design",
      price: "110",
      description: "Luxury designs for premium spaces",
      features: [
        "Custom luxury designs",
        "Highest quality materials",
        "Designer lighting systems",
        "3 year warranty",
        "Free consultation & 3D visualization",
        "Priority support & maintenance",
        "Exclusive finishing options"
      ],
      popular: false,
      gradient: "from-accent/20 to-primary/10",
      border: "border-accent/30",
      buttonColor: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Transparent Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Clear <span className="text-primary">Pricing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the perfect package for your ceiling transformation.<br />
              All prices are per square foot.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={tier.id}
                  className={`relative group border-2 ${tier.border} bg-gradient-to-br ${tier.gradient} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                    tier.popular ? 'md:scale-105 shadow-2xl shadow-primary/20' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {tier.description}
                      </p>
                      
                      <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-5xl font-bold text-primary">
                          {tier.price}
                        </span>
                        <span className="text-lg text-muted-foreground mb-2">
                          PKR/sq ft
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/pricing/${tier.id}`} className="block">
                      <Button 
                        className={`w-full group/btn relative overflow-hidden bg-gradient-to-r ${tier.buttonColor} text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View Design Gallery
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>

            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="text-2xl font-bold mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact Muhammad Ishaq for a free consultation and personalized recommendation
              </p>
              <Button 
                size="lg"
                onClick={() => window.open("https://wa.me/923458783923?text=Hi!%20I%20need%20help%20choosing%20the%20right%20package.", "_blank")}
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
