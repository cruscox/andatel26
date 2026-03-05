import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/25_1772610343894.jpg";
import yogaImg from "@assets/creation_2473971730_1772610343894.jpg";
import roomImg from "@assets/pool_access_room1_1772610343894.jpg";
import poolExperienceImg from "@assets/24_1772610343894.jpg";
import { Star, Wifi, MapPin, Waves, Utensils, ChevronDown, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

export default function HomeThai() {
  const faqs = [
    {
      question: "โรงแรมอันดาเทล แกรนด์ ป่าตอง ตั้งอยู่ที่ไหน?",
      answer: "เราตั้งอยู่ใจกลางหาดป่าตอง เดินเพียง 5-7 นาทีถึงชายหาด และใกล้กับแหล่งช้อปปิ้งและร้านอาหารยอดนิยม"
    },
    {
      question: "ห้องพักแบบพูลแอคเซส (Pool Access) อยู่ชั้นไหน?",
      answer: "ห้องพักพูลแอคเซสของเราตั้งอยู่ที่ชั้นกราวด์ (ชั้นล่าง) ให้คุณสามารถเดินลงสระว่ายน้ำได้โดยตรงจากระเบียงส่วนตัว"
    },
    {
      question: "ขนาดห้องพักของโรงแรมเป็นอย่างไร?",
      answer: "ห้องพักทุกประเภทของเรามีขนาดพื้นที่กว้างขวาง 28 ตารางเมตร ออกแบบมาเพื่อความสะดวกสบายสูงสุด"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Andatel Grande Patong Phuket Hotel",
    "description": "โรงแรมบูติกสุดหรูในป่าตอง ภูเก็ต พร้อมห้องพักพูลแอคเซสและบริการระดับพรีเมียม",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "41/9 Rat-U-Thit 200 Pee Road",
      "addressLocality": "Patong",
      "addressRegion": "Phuket",
      "postalCode": "83150",
      "addressCountry": "TH"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>โรงแรมอันดาเทล แกรนด์ ป่าตอง ภูเก็ต | ที่พักหรูใกล้หาดป่าตอง</title>
        <meta name="description" content="สัมผัสประสบการณ์การพักผ่อนเหนือระดับที่อันดาเทล แกรนด์ ป่าตอง ภูเก็ต โรงแรมบูติกพร้อมห้องพักพูลแอคเซส เดินเพียง 5 นาทีถึงหาดป่าตอง จองราคาดีที่สุดวันนี้" />
        <meta name="keywords" content="โรงแรมป่าตอง, ที่พักภูเก็ต, ห้องพักพูลแอคเซส, โรงแรมใกล้หาดป่าตอง, อันดาเทล แกรนด์, Patong Hotel, Phuket Resort" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6 space-x-1 text-accent">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-none tracking-tight">
            อันดาเทล <br/><span className="italic text-accent">แกรนด์</span>
          </h1>
          <p className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase mb-12 text-white/90">
            โรงแรมบูติกสุดหรูในป่าตอง
          </p>
          <Button className="rounded-none bg-accent text-white hover:bg-white hover:text-primary py-8 px-12 uppercase tracking-widest text-xs font-black transition-all duration-300 shadow-2xl">
            จองตอนนี้
          </Button>
        </div>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={yogaImg} alt="Luxury Lifestyle at Andatel" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-xl hidden lg:block border border-primary/5">
                <p className="text-primary font-serif text-2xl italic">ความสงบแห่งมหาสมุทร</p>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
                ที่พักผ่อน <br/><span className="italic text-accent">สไตล์บูติก</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ตั้งอยู่ใจกลางหาดป่าตอง โรงแรมอันดาเทล แกรนด์ ป่าตอง ภูเก็ต นำเสนอการผสมผสานระหว่างการออกแบบร่วมสมัย 'Oceanic Tranquility' และการต้อนรับแบบไทยที่อบอุ่น ห้องพักขนาด 28 ตร.ม. ของเราได้รับการออกแบบใหม่ทั้งหมดเพื่อมอบความหรูหราที่สัมผัสได้
              </p>
              <div className="grid grid-cols-2 gap-6 pb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">ห่างจากหาด 5 นาที</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">ห้องพักขนาด 28 ตร.ม.</span>
                </div>
              </div>
              <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-10 uppercase tracking-widest text-xs font-black">
                เรื่องราวของเรา
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">คำถามที่พบบ่อย</h2>
            <h3 className="text-5xl font-serif italic mb-12">เราพร้อมตอบข้อสงสัย</h3>
            
            <Accordion type="single" collapsible className="w-full text-left space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-6 bg-white/5">
                  <AccordionTrigger className="text-xl font-serif hover:text-accent py-6 no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-lg leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
