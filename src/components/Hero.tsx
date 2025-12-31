import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gathering.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community gathering under a warm tent"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Warm glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-warmGlow/20 rounded-full blur-3xl animate-warm-pulse" />

      <div className="container relative z-10 mx-auto py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">



          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to <span className="text-accent">techKoodaram</span>
          </h1>


          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Learn.Build.Share.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://chat.whatsapp.com/JnWLnxuQAZm9pIZNUWk9Nk", "_blank")}
            >
              Join via WhatsApp
              <ArrowRight size={20} />
            </Button>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Hero;
