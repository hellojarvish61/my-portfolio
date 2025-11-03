import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">

        {/* Profile Image */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border border-primary/30 bg-gradient-to-br from-primary/40 to-transparent backdrop-blur-md p-[3px] hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/mohit.jpeg"
              alt="Mohit Ranjan"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_35px_rgba(120,90,255,0.6)] pointer-events-none"></div>
          </div>
        </div>

        {/* Heading & Intro */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Mohit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ranjan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Developer by passion, problem-solver by mindset, and creator at heart — 
            building meaningful digital experiences with clarity, curiosity, and consistency.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
