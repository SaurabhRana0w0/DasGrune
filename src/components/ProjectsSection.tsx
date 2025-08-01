import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg"; 
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6">
              BEST PROJECT
              <span className="text-lime">.</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Creative is the heart, Graphic is the designer,
              we the brand that never stops exploring as the
              ever in the world do.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Design</span>
              <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Development</span>
              <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Brand Marketing</span>
              <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Art</span>
            </div>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="aspect-square bg-card rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src={project1} 
              alt="Project 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square bg-card rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src={project2} 
              alt="Project 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square bg-card rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src={project3} 
              alt="Project 3" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square bg-card rounded-2xl overflow-hidden group cursor-pointer relative">
            <img 
              src={project4} 
              alt="Project 4" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-lime rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Project Name */}
        <div className="mt-8 text-right">
          <h3 className="text-2xl font-bold text-foreground">
            Gerados
            <br />
            Haus
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;