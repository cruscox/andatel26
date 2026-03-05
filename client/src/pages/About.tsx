import { Layout } from "@/components/Layout";
import lobbyImg from "@assets/creation_1728438165_1772088133997.jpeg";
import exteriorImg from "@assets/creation_1728438168_1772088133998.jpeg";
import peopleImg from "@assets/freepik__group-of-45-young-adults-laughing-while-sitting-on___1772040160915.jpeg";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Andatel Grande Patong Phuket Hotel</title>
        <meta name="description" content="Learn about the heritage and 'Oceanic Tranquility' philosophy of Andatel Grande Patong Phuket Hotel, your boutique sanctuary in Patong." />
      </Helmet>
      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={exteriorImg} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Our Heritage</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">The <span className="italic">Grande</span> Story</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            Decades of hospitality, reimagined for the modern traveler.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-[1.1]">Luxury <br/><span className="italic text-accent">Personalized</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Andatel Grande Patong Phuket Hotel was born from a desire to create a boutique experience that honors Thai traditions while embracing global design standards. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located just 3 minutes from the world-famous Patong Beach, our hotel serves as a gateway to Phuket's island wonders. Whether you're here for the nightlife of Bangla Road or the serenity of our poolside, we ensure your stay is unforgettable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src={lobbyImg} alt="Lobby" className="w-full shadow-xl" />
                <div className="bg-accent p-8 text-white">
                  <p className="text-4xl font-serif font-bold">120+</p>
                  <p className="text-xs uppercase tracking-widest font-black mt-2">Bespoke Guestrooms</p>
                </div>
              </div>
              <div className="pt-12">
                <img src={peopleImg} alt="Guests laughing" className="w-full shadow-xl aspect-[3/4] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 luxury-pattern text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-20 h-px bg-accent mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-5xl font-serif text-primary mb-12 italic leading-relaxed">
            "We don't just provide rooms; we craft environments that inspire connection and provide true oceanic tranquility."
          </h3>
          <p className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black">Our Philosophy</p>
        </div>
      </section>
      {/* FAQ Section for SEO */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-left">
          <div className="text-center mb-16">
            <h2 className="text-xs font-sans tracking-[0.4em] text-accent uppercase font-black mb-4">Discovery</h2>
            <h3 className="text-4xl font-serif text-primary">About Andatel Grande</h3>
          </div>
          <div className="space-y-8">
            {[
              { q: "What does 'Andatel' mean?", a: "Andatel is a blend of Thai hospitality and modern boutique elegance, specifically designed to offer a 'Grande' experience in the heart of Patong." },
              { q: "When was the hotel last renovated?", a: "We recently completed our 'Oceanic Tranquility' renovation, completely reimagining our guestrooms, lobby, and pool areas with a sophisticated blue color palette." },
              { q: "Is the hotel suitable for families?", a: "Yes, our 28sqm rooms are designed to accommodate couples and small families, and our large signature pool is a favorite for guests of all ages." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-primary/10 shadow-sm">
                <h4 className="text-xl font-serif text-primary mb-3">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Andatel Grande Patong Phuket Hotel",
            "url": "https://andatelhotel.com",
            "logo": "https://andatelhotel.com/logo.png",
            "description": "A premier luxury boutique hotel in Patong Beach, Phuket, featuring modern design and authentic Thai hospitality."
          }
        })}
      </script>
    </Layout>
  );
}
