import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { wordpressAPI } from "@/lib/wordpress-api";

const PricingDetail = () => {
  const { id } = useParams();
  const [galleryImages, setGalleryImages] = useState<Array<{ src: string; alt: string }>>([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const galleries = await wordpressAPI.getGalleries();
        if (galleries && galleries.length > 0) {
          const gallery = galleries[0];
          if (gallery.acf?.team_working) {
            // Filter only images (not videos)
            const images = gallery.acf.team_working
              .filter((item) => !item.url.endsWith('.mp4'))
              .map((item) => ({
                src: item.sizes.large || item.url,
                alt: item.title || "Ceiling Design"
              }));
            setGalleryImages(images);
          }
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchGalleryImages();
  }, []);

  const pricingData: Record<string, any> = {
    basic: {
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
      gradient: "from-secondary/20 to-muted/20",
      accentColor: "text-secondary-foreground"
    },
    medium: {
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
      gradient: "from-primary/20 to-accent/20",
      accentColor: "text-primary"
    },
    high: {
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
      gradient: "from-accent/20 to-primary/10",
      accentColor: "text-accent-foreground"
    }
  };

  const tier = pricingData[id as string];

  if (!tier) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link to="/pricing">
            <Button>Back to Pricing</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${tier.name} package (${tier.price} PKR/sq ft). Can you provide more details?`;
    window.open(`https://wa.me/923458783923?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${tier.gradient}`}>
        <div className="container mx-auto px-4">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>
          
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {tier.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {tier.description}
            </p>
            
            <div className="flex items-end justify-center gap-2 mb-8">
              <span className={`text-6xl font-bold ${tier.accentColor}`}>
                {tier.price}
              </span>
              <span className="text-2xl text-muted-foreground mb-2">
                PKR/sq ft
              </span>
            </div>

            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
              Get This Package
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              What's Included
            </h2>
            
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {tier.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-4 h-4 ${tier.accentColor}`} />
                      </div>
                      <span className="text-foreground/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Design Gallery
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.length > 0 ? (
                galleryImages.map((image: any, index: number) => (
                  <div 
                    key={index}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-muted-foreground py-8">
                  Loading gallery images...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${tier.gradient}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Contact Muhammad Ishaq now and transform your space with IQ CEILINGS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
              <Link to="/pricing">
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg rounded-xl border-2"
                >
                  Compare Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingDetail;
