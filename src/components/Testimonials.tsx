import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Homeowner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    content: "IQ CEILINGS transformed our living room completely. The attention to detail and professionalism is outstanding. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Sarah Ali",
    role: "Interior Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "I've worked with many ceiling contractors, but IQ CEILINGS stands out. Their quality and timely delivery make them my go-to choice for all projects.",
    rating: 5
  },
  {
    name: "Hassan Malik",
    role: "Restaurant Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
    content: "They did an amazing job on our restaurant ceiling. The design perfectly complements our ambiance, and the installation was seamless. Worth every penny!",
    rating: 5
  },
  {
    name: "Fatima Noor",
    role: "Hotel Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    content: "Professional service from start to finish. Our hotel lobby ceiling is now the talk of the town. Muhammad Ishaq and his team delivered excellence!",
    rating: 5
  },
  {
    name: "Omar Farooq",
    role: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    content: "Exceptional craftsmanship and attention to detail. The team was punctual, professional, and the results exceeded our expectations. Highly recommended!",
    rating: 5
  }
];

export const Testimonials = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: true,
      stopOnMouseEnter: true 
    })
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-sm font-semibold">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <Carousel
          opts={{ 
            loop: true,
            align: "start"
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="border-border bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full group hover:-translate-y-2"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow text-base">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-primary/10 flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-12 hidden lg:flex" />
          <CarouselNext className="right-0 translate-x-12 hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};
