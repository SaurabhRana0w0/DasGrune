const ServicesSection = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "User Interface & User Experience Design"
    },
    {
      title: "Web Design", 
      description: "Responsive & Modern Web Solutions"
    },
    {
      title: "Brand Design",
      description: "Complete Brand Identity & Visual Systems"
    },
    {
      title: "Graphic Design",
      description: "Visual Communication & Print Design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6">
            OUR SERVICES
            <span className="text-lime">.</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            Explore the world of our specialties and unearth
            a new understanding.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Design</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Development</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Brand Marketing</span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">Art</span>
          </div>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group border-b border-border pb-8 hover:border-lime transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-lime transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-lime group-hover:bg-lime transition-all">
                  <svg className="w-5 h-5 text-foreground group-hover:text-lime-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;