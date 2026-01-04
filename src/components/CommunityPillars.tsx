import { BookOpen, Share2, Wrench, Users } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Dive deep into technology with our hands-on workshops, peer-led study groups, and personalized mentorship. Whether you're writing your first line of code or architecting complex systems, there's always something new to discover.",
    color: "bg-accent/10",
    rotate: "1deg",
    image: "/learn.svg",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Your voice has power. Take the stage for lightning talks, publish insightful blog posts, or lead open discussions. We believe that teaching is the best way to master a subject, and your unique perspective enriches us all.",
    color: "bg-warmGlow/20",
    rotate: "1deg",
    image: "/share.svg",
  },
  {
    icon: Wrench,
    title: "Build",
    description: "Stop dreaming and start shipping. Join forces for weekend hackathons, contribute to meaningful open-source projects, and experiment with emerging tech. We provide the platform and community to turn your ideas into reality.",
    color: "bg-sandLight",
    rotate: "-1deg",
    image: "/build.svg",
  },
  {
    icon: Users,
    title: "Belong",
    description: "Find your tribe in a supportive ecosystem. We prioritize inclusivity and psychological safety, creating a space where you are valued for who you are. Here, there are no gatekeepers—only allies in your growth journey.",
    color: "bg-secondary",
    rotate: "1deg",
    image: "/belong.svg",
  },
];

const CommunityPillars = () => {
  return (
    <section id="community" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Our Community
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four pillars of the <span className="text-accent">koodaram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything we do revolves around these core values. They guide how we gather,
            how we grow, and how we lift each other up.
          </p>
        </div>

        {/* Pillars Staggered Layout */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`
                w-full md:w-[85%]
                ${index % 2 === 0 ? 'self-start' : 'self-end'}
                opacity-0 animate-fade-up
              `}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div
                className="group relative rounded-2xl p-6 bg-card soft-shadow hover:shadow-lg transition-all duration-300 border border-border/30 hover:border-accent/30"
                style={{
                  transform: `rotate(${pillar.rotate})`
                }}
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                      <pillar.icon className="text-accent" size={26} />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground text-md max-w-md leading-relaxed">{pillar.description}</p>
                  </div>

                  {/* SVG Illustration */}
                  <div className="w-full md:w-48 flex justify-center shrink-0">
                    <img
                      src={pillar.image}
                      alt={`${pillar.title} illustration`}
                      className="w-56 h-56 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/10 rounded-tr-xl group-hover:border-accent/30 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPillars;
