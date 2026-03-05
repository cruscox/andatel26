import { Layout } from "@/components/Layout";
import heroImg from "@assets/25_1772610343894.jpg";
import poolImg1 from "@assets/24_1772610343894.jpg";
import roomImg1 from "@assets/pool_access_room1_1772610343894.jpg";
import lifestyleImg1 from "@assets/creation_2473971730_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function GalleryRussian() {
  const images = [
    { src: heroImg, alt: "Andatel Grande Exterior", category: "Экстерьер" },
    { src: poolImg1, alt: "Swimming Pool Experience", category: "Бассейн" },
    { src: roomImg1, alt: "Pool Access Room Interior", category: "Номера" },
    { src: lifestyleImg1, alt: "Lifestyle at Andatel", category: "Стиль жизни" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Фотогалерея | Andatel Grande Patong Phuket</title>
        <meta name="description" content="Откройте для себя изысканный дизайн Andatel Grande через нашу фотогалерею. Фотографии номеров, бассейна и жизни на Патонге." />
      </Helmet>
      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Визуальное путешествие</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Галерея</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">Откройте для себя изысканный дизайн и яркую жизнь Andatel Grande.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white text-xs font-black uppercase tracking-[0.3em] border border-white/40 px-6 py-3 backdrop-blur-sm">{img.category}</span>
                </div>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
