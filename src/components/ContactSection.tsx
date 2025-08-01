import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-lime text-lime-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl lg:text-8xl font-black mb-12">
          LET'S DISCUSS
          <br />
          YOUR IDEAS
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-lime-foreground text-lime hover:bg-lime-foreground/90 px-8 py-6 text-lg font-semibold rounded-full"
          >
            TALK TO NOW
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border-lime-foreground text-lime-foreground hover:bg-lime-foreground hover:text-lime px-8 py-6 text-lg font-semibold rounded-full"
          >
            FOLLOW US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;