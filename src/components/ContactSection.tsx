import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Mic, Handshake, HeartHandshake, Copy, Check, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("techkoodaram@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-clayDeep/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for passionate individuals to join our mission.
            Whether you want to speak, collaborate, or just say hi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4  max-w-6xl mx-auto"
        >
          {/* Collaborate - Top Left (Span 2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-start-1 bg-white/60 rounded-3xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl w-fit text-blue-600">
                <Handshake className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Collaborate</h3>
            <p className="text-sm text-muted-foreground">Partner with us for college events and workshops.</p>
          </motion.div>

          {/* Community - Right Column (Span 1, Row 2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-start-3 md:row-start-1 md:row-span-2 bg-white/60 rounded-3xl p-8 shadow-sm border border-border/50 relative overflow-hidden group hover:shadow-md transition-all duration-300 h-full"
          >
            <div className="relative z-10 flex flex-col h-full justify-between items-start">
              <div className="p-3 bg-amber-100 rounded-2xl w-fit text-amber-700">
                <MapPin className="w-6 h-6" />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2 font-sans text-foreground">Community</h3>
                <p className="text-muted-foreground font-lato">
                  Building the tech ecosystem in Kerala, one event at a time.
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(var(--accent),0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 delay-200 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]" />
          </motion.div>

          {/* Give a Talk - Middle Left */}
          <motion.div
            variants={itemVariants}
            className="md:col-start-1 md:row-start-2 bg-white/60 rounded-3xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accent/10 rounded-2xl w-fit text-accent">
                <Mic className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Give a Talk</h3>
            <p className="text-sm text-muted-foreground">Share your knowledge and experience with the community.</p>
          </motion.div>

          {/* Contribute - Middle Center */}
          <motion.div
            variants={itemVariants}
            className="md:col-start-2 md:row-start-2 bg-white/60 rounded-3xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-green-100 rounded-2xl w-fit text-green-600">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Contribute</h3>
            <p className="text-sm text-muted-foreground">Help us build the tech ecosystem in our region.</p>
          </motion.div>

          {/* Email Card - Bottom (Span 3) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 md:row-start-3 bg-white/60 rounded-3xl p-8 shadow-sm border border-border/50 relative overflow-hidden group hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-accent/10 rounded-2xl w-fit text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>

              <div className="mt-8">
                <p className="text-muted-foreground font-medium mb-1">Drop us a line</p>
                <div
                  className="text-2xl md:text-4xl font-bold text-foreground cursor-pointer hover:text-accent transition-colors break-all font-lato"
                  onClick={handleCopyEmail}
                >
                  techkoodaram@gmail.com
                </div>
              </div>
            </div>

            {/* Hover effect gradient */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


