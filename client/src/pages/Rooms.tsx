import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import roomTopImg from "@assets/s2_1772040085101.jpg";
import roomDetailImg1 from "@assets/freepik__35mm-film-photography-a-photorealistic-view-from-t__3_1772047969541.png";
import roomDetailImg2 from "@assets/freepik__stunning-tall-blonde-woman-from-kazakhstan-approxi___1772040160916.jpeg";
import materialImg from "@assets/Pages_from__Andatel_Hotel_Constructure_Design_Development_1772039663788.jpg";
import { Wifi, Waves, Zap, Check, Maximize, Tv, Coffee, Wind, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ROOM_TYPES = [
  {
    id: "oceanic-deluxe-pool-view",
    name: "Oceanic Deluxe Pool View",
    price: "2,850",
    size: "28 sqm",
    description: "Our newly renovated flagship room. Designed with the 'Oceanic Tranquility' concept, featuring deep blue accents and sustainable walnut finishes. Perfectly optimized for comfort and style.",
    features: ["Private Balcony", "Pool View", "40\" Smart TV", "Walk-in Shower"],
    image: roomDetailImg1
  },
  {
    id: "oceanic-pool-access",
    name: "Oceanic Pool Access",
    price: "4,200",
    size: "28 sqm",
    description: "Experience the ultimate convenience on the ground floor. Step directly from your private terrace into the main pool. Our most sought-after accommodation for water lovers.",
    features: ["Direct Pool Access", "Ground Floor", "Private Terrace", "Premium Mini Bar"],
    image: roomTopImg
  }
];

export default function Rooms() {
  return (
    <Layout>
      <Helmet>
        <title>Luxury Rooms & Suites | Andatel Grande Patong Phuket Hotel</title>
        <meta name="description" content="Explore our 28sqm luxury guestrooms and pool access suites at Andatel Grande Patong Phuket. Designed for 'Oceanic Tranquility'." />
      </Helmet>
      {/* Hero Header */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110 blur-sm">
          <img src={materialImg} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">The Collection</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Redefined <span className="italic">Spaces</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            Our guestrooms have been meticulously reimagined to provide a sanctuary of calm amidst the energy of Phuket.
          </p>
        </div>
      </section>

      {/* Featured Room Large */}
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4">
          {ROOM_TYPES.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center mb-32 last:mb-0`}>
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -inset-4 border border-accent/30 translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700"></div>
                <div className="relative overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-8 right-8 bg-white p-6 shadow-2xl flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-black mb-1">Starting from</span>
                  <p className="text-3xl font-serif text-primary">THB {room.price}</p>
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight">{room.name}</h3>
                <div className="flex space-x-6 text-xs uppercase tracking-[0.2em] font-black text-accent">
                  <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {room.size}</span>
                  <span className="flex items-center"><Waves className="w-4 h-4 mr-2" /> Pool View</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {room.description}
                </p>
                <div className="grid grid-cols-2 gap-y-4 pt-6 border-t border-primary/10">
                  {room.features.map(f => (
                    <div key={f} className="flex items-center text-xs font-black uppercase tracking-widest text-primary">
                      <Check className="w-4 h-4 mr-3 text-accent" /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-primary text-white hover:bg-accent rounded-none py-8 uppercase tracking-widest text-xs font-black transition-colors">
                    Check Availability
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">Every Detail <br/><span className="italic">Considered</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond the aesthetics, our rooms are built for modern living. We've upgraded every touchpoint—from the thread count of our linens to the speed of our fiber-optic internet.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Tv />, title: "Entertainment", desc: "40\" Smart TV with international channels & streaming." },
                  { icon: <Wind />, title: "Climate", desc: "Individually controlled silent air-conditioning." },
                  { icon: <Coffee />, title: "Refreshments", desc: "Premium coffee facilities and well-stocked mini bar." },
                  { icon: <ShieldCheck />, title: "Security", desc: "Digital safe-box for your peace of mind." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-accent">{item.icon}</div>
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <img src={roomDetailImg2} alt="Room detail" className="w-full h-full object-cover shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-video bg-white p-2 shadow-2xl hidden md:block">
                <img src={roomDetailImg1} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section for SEO */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-4">Common Questions</h2>
            <h3 className="text-4xl font-serif text-primary">Room & Booking FAQ</h3>
          </div>
          <div className="space-y-8">
            {[
              { q: "What is the size of the rooms at Andatel Grande?", a: "All our rooms, including Deluxe and Pool Access, are a comfortable 28 square meters, optimized for a luxury boutique experience." },
              { q: "Do you have rooms with direct pool access?", a: "Yes, our Oceanic Pool Access rooms are located on the ground floor and offer direct entry into our signature swimming pool from your private terrace." },
              { q: "Is Wi-Fi included in the room rate?", a: "Absolutely. High-speed fiber-optic Wi-Fi is complimentary for all guests throughout the entire property." },
              { q: "What are the check-in and check-out times?", a: "Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in or late check-out can be requested subject to availability." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-primary/10 shadow-sm">
                <h4 className="text-xl font-serif text-primary mb-3">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Andatel Grande Patong Phuket Hotel",
          "description": "Luxury boutique hotel in Patong Beach featuring 28sqm rooms and pool access suites.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "41/9 Rat-U-Thit 200 Pee Road",
            "addressLocality": "Patong",
            "addressRegion": "Phuket",
            "postalCode": "83150",
            "addressCountry": "TH"
          },
          "numberOfRooms": 122,
          "starRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        })}
      </script>
    </Layout>
  );
}
