import { Layout } from "@/components/Layout";
import restaurantImg from "@assets/creation_1729218141_1772088133996.jpeg";
import { Utensils, Clock, MapPin, Wine, Fish, Beef } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Restaurant() {
  return (
    <Layout>
      <Helmet>
        <title>Red Chilli Restaurant | Andatel Grande Patong Phuket</title>
        <meta name="description" content="Dine at Red Chilli Restaurant in Patong. Authentic Thai flavors and international cuisine at Andatel Grande Patong Phuket Hotel." />
      </Helmet>
      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={restaurantImg} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Dining</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Red <span className="italic">Chilli</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            A celebration of authentic Thai spices and international culinary expertise.
          </p>
        </div>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-accent/20 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
              <img src={restaurantImg} alt="Restaurant interior" className="relative z-10 w-full shadow-2xl" />
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-tight">Authentic <br/>Flavors</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Red Chilli Restaurant is more than just a place to eat—it's the culinary heart of Andatel Grande. Our chefs source the freshest local seafood and herbs to bring you the true taste of Phuket.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">Service Hours</h4>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">06:30 AM — 10:30 PM Daily</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5">
                  <MapPin className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">Location</h4>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">Lobby Level, Andatel Grande</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Utensils className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-4">The Menu</h2>
            <h3 className="text-5xl font-serif text-primary">Chef's Selection</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Fish />, title: "Local Seafood", desc: "Fresh Andaman catch prepared with lemongrass and local chili." },
              { icon: <Beef />, title: "Premium Cuts", desc: "Imported Australian beef grilled to perfection over open flame." },
              { icon: <Wine />, title: "Global Cellar", desc: "Handpicked selection of Old and New World wines." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6 p-10 border border-primary/5 hover:border-accent transition-colors">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif text-primary">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-12 uppercase tracking-widest text-xs font-black">
              Download Full Menu
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
