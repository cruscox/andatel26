import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/freepik__highend-resort-complex-during-blue-hour-twilight-p___1772088133999.jpeg";
import roomImg from "@assets/freepik__35mm-film-photography-same-image-img1-realistic-ph__3_1772047969542.png";
import poolExperienceImg from "@assets/creation_1729218141_1772088133996.jpeg";
import yogaImg from "@assets/freepik__single-woman-in-flowing-white-yoga-attire-performi___1772040160915.jpeg";
import { Link } from "wouter";
import { Star, Wifi, Coffee, MapPin, Waves, Utensils, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Andatel Grande Patong Phuket Hotel | Luxury Boutique Stay</title>
        <meta name="description" content="Experience 'Oceanic Tranquility' at Andatel Grande Patong Phuket Hotel. Luxury boutique accommodation steps from Patong Beach. Book your stay today." />
        <meta property="og:title" content="Andatel Grande Patong Phuket Hotel | Luxury Boutique Stay" />
        <meta property="og:description" content="Experience 'Oceanic Tranquility' at Andatel Grande Patong Phuket Hotel. Luxury boutique accommodation steps from Patong Beach." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-100 animate-in fade-in duration-1000"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6 space-x-1 text-accent animate-in fade-in slide-in-from-bottom-4 duration-700">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-none tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Andatel <br/><span className="italic text-accent">Grande</span>
          </h1>
          <p className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase mb-12 text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Luxury Boutique Hotel in Patong
          </p>
          
          <div className="bg-white/10 backdrop-blur-2xl p-3 max-w-4xl mx-auto flex flex-col lg:flex-row gap-3 border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-left p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <label className="block text-[10px] uppercase tracking-widest text-accent mb-2 font-black">Arrival</label>
                <input type="date" className="bg-transparent text-white w-full focus:outline-none text-sm font-sans [color-scheme:dark]" />
              </div>
              <div className="text-left p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <label className="block text-[10px] uppercase tracking-widest text-accent mb-2 font-black">Departure</label>
                <input type="date" className="bg-transparent text-white w-full focus:outline-none text-sm font-sans [color-scheme:dark]" />
              </div>
              <div className="text-left p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <label className="block text-[10px] uppercase tracking-widest text-accent mb-2 font-black">Guests</label>
                <select 
                  className="bg-transparent text-white w-full focus:outline-none text-sm font-sans cursor-pointer"
                  defaultValue="2"
                >
                  <option value="1" className="bg-primary">1 Guest</option>
                  <option value="2" className="bg-primary">2 Guests</option>
                  <option value="3" className="bg-primary">3 Guests</option>
                  <option value="4" className="bg-primary">Family</option>
                </select>
              </div>
            </div>
            <Button className="bg-accent text-white hover:bg-white hover:text-accent h-auto uppercase tracking-[0.2em] px-12 py-6 text-xs font-black rounded-none transition-all duration-300">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-accent/20 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
              <img src={yogaImg} alt="Yoga by the pool" className="relative z-10 w-full shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black">Welcome to Paradise</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
                A Boutique <br/><span className="italic">Sanctuary</span>
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                Located in the vibrant heart of Patong, Andatel Grande Patong Phuket Hotel offers a sophisticated blend of contemporary design and warm Thai hospitality. Our recently unveiled "Oceanic Tranquility" series redefines the boutique experience.
              </p>
              <div className="grid grid-cols-2 gap-10 py-6 border-y border-primary/10">
                <div className="space-y-2">
                  <h4 className="text-primary font-bold font-serif text-xl">Top Rated</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">On TripAdvisor & Booking</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary font-bold font-serif text-xl">Prime Location</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Steps from Patong Beach</p>
                </div>
              </div>
              <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-10 uppercase tracking-widest text-xs font-black transition-colors duration-500">
                Our Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h3 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-6">Redefined Living</h3>
              <h2 className="text-5xl md:text-7xl font-serif text-primary">The New Guestrooms</h2>
            </div>
            <Link href="/rooms">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 uppercase tracking-widest text-xs font-black transition-all">
                View Collection
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative group">
              <img src={roomImg} alt="Deluxe Room" className="w-full shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]" />
              <div className="absolute top-10 left-10 bg-accent text-white p-6 shadow-2xl animate-pulse">
                <p className="text-xs uppercase tracking-[0.3em] font-black">Newly Opened</p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-4xl font-serif text-primary">Oceanic Deluxe Pool View</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Immerse yourself in our "Oceanic Tranquility" series. These rooms feature a 40-inch Smart TV, high-speed Wi-Fi, and custom-designed furniture that mirrors the calming rhythms of the Andaman Sea.
              </p>
              <ul className="space-y-4">
                {[
                  "Rain shower with premium amenities",
                  "Private balcony with pool views",
                  "Signature king-size bedding",
                  "Bespoke oceanic artwork"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-primary font-bold text-sm">
                    <Zap className="w-4 h-4 text-accent fill-accent" />
                    <span className="uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-none bg-accent text-white py-8 uppercase tracking-widest text-xs font-black">
                Book This Room
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section className="py-32 bg-primary relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Waves className="w-12 h-12 text-accent mx-auto mb-8" />
            <h2 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-6">Aquatic Luxury</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-8">The Social <span className="italic">Pulse</span></h3>
            <p className="text-white/60 text-lg leading-relaxed font-sans">
              Our expansive swimming pool isn't just for cooling off—it's the heart of the Andatel experience. From morning yoga to evening cocktails, it's where memories are made.
            </p>
          </div>
          <div className="relative aspect-[21/9] overflow-hidden shadow-2xl group">
            <img src={poolExperienceImg} alt="Pool experience" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="text-white">
                <h4 className="text-3xl font-serif mb-2">Signature Pool Access</h4>
                <p className="text-accent uppercase tracking-widest text-xs font-black">Available for select suites</p>
              </div>
              <Button className="bg-white text-primary hover:bg-accent hover:text-white rounded-none uppercase tracking-widest text-xs font-black px-10 py-6">
                Explore The Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Utensils />, title: "Red Chilli", desc: "Authentic Thai & International dining with a modern twist." },
              { icon: <Wifi />, title: "Ultra Fast", desc: "Dedicated high-speed fiber throughout the entire property." },
              { icon: <MapPin />, title: "Patong Heart", desc: "Walking distance to Bangla Road and Patong Beach." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 border border-primary/5 hover:border-accent/50 transition-colors group">
                <div className="w-16 h-16 bg-muted flex items-center justify-center text-primary mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif text-primary mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section for SEO */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-4">Guest Information</h2>
            <h3 className="text-4xl font-serif text-primary">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            {[
              { q: "Where is Andatel Grande located?", a: "We are perfectly situated in the heart of Patong, just a short 3-minute walk to the beach and 5 minutes to the vibrant Bangla Road." },
              { q: "Does the hotel have a swimming pool?", a: "Yes, we feature a large signature swimming pool which is the centerpiece of our hotel, including ground-floor rooms with direct pool access." },
              { q: "Is breakfast included?", a: "We offer various rates including room-only and bed-and-breakfast options at our Red Chilli restaurant." },
              { q: "How far is the hotel from Phuket International Airport?", a: "The hotel is approximately 45-60 minutes by car from the airport, depending on traffic conditions." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-primary/10 shadow-sm">
                <h4 className="text-lg font-serif text-primary mb-2 font-bold">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Andatel Grande located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are perfectly situated in the heart of Patong, just a short 3-minute walk to the beach and 5 minutes to the vibrant Bangla Road."
              }
            },
            {
              "@type": "Question",
              "name": "Does the hotel have a swimming pool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we feature a large signature swimming pool which is the centerpiece of our hotel, including ground-floor rooms with direct pool access."
              }
            }
          ]
        })}
      </script>
    </Layout>
  );
}
