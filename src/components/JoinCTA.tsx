import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Github, Linkedin } from "lucide-react";
import TamilNaduMap from "./TamilNaduMap";

const JoinCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Warm glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-warmGlow/15 rounded-full blur-3xl animate-warm-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to enter the <span className="text-accent">koodaram</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join a community of curious minds from across towns from Sivakasi to Tenkasi.
            No fees, no barriers — just good people sharing good knowledge.
          </p>

          {/* Primary CTA */}
          <Button
            variant="hero"
            size="xl"
            className="mb-12"
            onClick={() => window.open("https://www.linkedin.com/company/techkoodaram/", "_blank")}
          >
            Follow us on LinkedIn
            <Linkedin size={20} className="ml-2" />
          </Button>

          {/* Location Emphasis */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Building a tech ecosystem for
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base md:text-lg font-medium text-foreground/80">
                  <span>Sivakasi</span>
                  <span className="text-accent">•</span>
                  <span>Rajapalayam</span>
                  <span className="text-accent">•</span>
                  <span>Srivilliputhur</span>
                  <span className="text-accent">•</span>
                  <span>Sankarankovil</span>
                  <span className="text-accent">•</span>
                  <span>Kovilpatti</span>
                  <span className="text-accent">•</span>
                  <span>Tenkasi</span>
                </div>
              </div>

              <div className="relative h-[450px] w-full flex items-center justify-center pointer-events-none">
                {/* Map container */}
                <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />
                <TamilNaduMap className="h-full w-auto text-accent drop-shadow-lg opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
