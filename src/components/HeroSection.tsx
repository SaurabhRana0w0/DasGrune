import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-lime text-lime-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight">
                DIGITIZE
                <br />
                IDEAS
              </h1>
              <p className="text-lg text-lime-foreground/80 max-w-md">
                The art of visual communication, creatively
                inspiring the world around us—where good
                design is a form, design lets you present a
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="bg-transparent border-lime-foreground text-lime-foreground hover:bg-lime-foreground hover:text-lime"
              >
                3D Real Agency
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-lime-foreground text-lime-foreground hover:bg-lime-foreground hover:text-lime"
              >
                World Class Agency
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Abstract 3D shapes" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-lime-foreground rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Scrolling Text */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-pulse">
            <span className="text-2xl font-bold text-lime-foreground whitespace-nowrap">
              DISCUSS YOUR IDEAS + DISCUSS YOUR IDEAS + DISCUSS YOUR IDEAS +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;