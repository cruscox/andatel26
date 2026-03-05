import { Layout } from "@/components/Layout";
import heroImg from "@assets/creation_1728438168_1772088133998.jpeg";
import poolImg1 from "@assets/creation_1728464208_1772088133995.jpeg";
import poolImg2 from "@assets/creation_1729049368_1772088133995.jpeg";
import poolImg3 from "@assets/creation_1729217776_1772088133995.jpeg";
import poolImg4 from "@assets/creation_1729218141_1772088133996.jpeg";
import poolImg5 from "@assets/creation_1729242552_1772088133996.jpeg";
import poolImg6 from "@assets/creation_1729257209_1772088133997.jpeg";
import roomImg1 from "@assets/freepik__35mm-film-photography-same-image-img1-realistic-ph__3_1772047969542.png";
import roomImg2 from "@assets/freepik__stunning-tall-blonde-woman-from-kazakhstan-approxi___1772040160916.jpeg";
import lifestyleImg1 from "@assets/3_girl_center_swimmingpool_1772040160916.jpg";
import lifestyleImg2 from "@assets/freepik__group-of-45-young-adults-laughing-while-sitting-on___1772040160915.jpeg";
import { Helmet } from "react-helmet-async";

export default function Gallery() {
  const images = [
    { src: heroImg, alt: "Andatel Grande Night View", category: "Exterior" },
    { src: poolImg4, alt: "Swimming Pool Sunset", category: "Pool" },
    { src: roomImg1, alt: "Luxury Room Interior", category: "Rooms" },
    { src: poolImg6, alt: "Pool Bird Eye View", category: "Pool" },
    { src: roomImg2, alt: "Guest Experience", category: "Lifestyle" },
    { src: poolImg3, alt: "Pool Twilight", category: "Pool" },
    { src: lifestyleImg1, alt: "Friends at Pool", category: "Lifestyle" },
    { src: poolImg1, alt: "Morning Pool", category: "Pool" },
    { src: lifestyleImg2, alt: "Social Moments", category: "Lifestyle" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Photo Gallery | Andatel Grande Patong Phuket Hotel</title>
        <meta name="description" content="Take a visual journey through Andatel Grande Patong Phuket. View our luxury rooms, signature pool, and 'Oceanic Tranquility' design." />
      </Helmet>
      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Visual Journey</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Gallery</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            Explore the sophisticated design and vibrant lifestyle of Andatel Grande.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white text-xs font-black uppercase tracking-[0.3em] border border-white/40 px-6 py-3 backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
