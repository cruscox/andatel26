import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/25_1772610343894.jpg";
import yogaImg from "@assets/creation_2473971730_1772610343894.jpg";
import { Star, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

export default function HomeRussian() {
  const faqs = [
    {
      question: "Где находится отель Andatel Grande Patong Phuket?",
      answer: "Мы находимся в самом центре пляжа Патонг, в 5-7 минутах ходьбы от моря, рядом с популярными торговыми центрами и ресторанами."
    },
    {
      question: "На каком этаже находятся номера с выходом к бассейну?",
      answer: "Наши номера Pool Access расположены на первом (цокольном) этаже, что позволяет вам выходить в бассейн прямо с собственной террасы."
    },
    {
      question: "Какова площадь номеров в отеле?",
      answer: "Все категории наших номеров имеют просторную площадь 28 квадратных метров, спроектированную для максимального комфорта."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Andatel Grande Patong Phuket Hotel",
    "description": "Роскошный бутик-отель на Патонге, Пхукет, с номерами Pool Access и премиальным сервисом.",
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
        <title>Andatel Grande Patong Phuket | Роскошный отдых на Патонге</title>
        <meta name="description" content="Откройте для себя отдых премиум-класса в Andatel Grande Patong Phuket. Бутик-отель с выходом к бассейну, в 5 минутах от пляжа Патонг. Бронируйте по лучшей цене." />
        <meta name="keywords" content="отель Патонг, отдых Пхукет, номер с выходом к бассейну, отель рядом с пляжем, Andatel Grande, Patong Hotel, Phuket Resort" />
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
            Andatel <br/><span className="italic text-accent">Grande</span>
          </h1>
          <p className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase mb-12 text-white/90">
            Роскошный бутик-отель в Патонге
          </p>
          <Button className="rounded-none bg-accent text-white hover:bg-white hover:text-primary py-8 px-12 uppercase tracking-widest text-xs font-black transition-all duration-300 shadow-2xl">
            Забронировать
          </Button>
        </div>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={yogaImg} alt="Luxury Lifestyle at Andatel" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
            </div>
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
                Бутик <br/><span className="italic text-accent">Отдых</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Расположенный в самом сердце пляжа Патонг, отель Andatel Grande Patong Phuket предлагает сочетание современного дизайна 'Oceanic Tranquility' и теплого тайского гостеприимства. Наши обновленные номера площадью 28 кв.м созданы для вашего комфорта.
              </p>
              <div className="grid grid-cols-2 gap-6 pb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">5 минут до пляжа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Номера 28 кв.м</span>
                </div>
              </div>
              <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-10 uppercase tracking-widest text-xs font-black">
                Наша история
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Часто задаваемые вопросы</h2>
            <h3 className="text-5xl font-serif italic mb-12">Мы ответим на ваши вопросы</h3>
            
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
