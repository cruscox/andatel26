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

export default function HomeKorean() {
  const faqs = [
    {
      question: "안다텔 그란데 파통 푸켓 호텔의 위치는 어디인가요?",
      answer: "파통 해변 중심부에 위치하고 있으며, 해변까지 도보로 5-7분 거리입니다. 인기 있는 쇼핑몰과 레스토랑이 인접해 있습니다."
    },
    {
      question: "풀 액세스(Pool Access) 객실은 몇 층에 있나요?",
      answer: "풀 액세스 객실은 1층(그라운드 층)에 위치하고 있어, 전용 테라스를 통해 수영장으로 바로 연결됩니다."
    },
    {
      question: "호텔 객실의 크기는 어떻게 되나요?",
      answer: "모든 객실 유형은 28평방미터의 넉넉한 공간을 갖추고 있으며, 최고의 편안함을 제공하도록 설계되었습니다."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Andatel Grande Patong Phuket Hotel",
    "description": "푸켓 파통에 위치한 럭셔리 부티크 호텔로, 풀 액세스 객실과 프리미엄 서비스를 제공합니다.",
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
        <title>안다텔 그란데 파통 푸켓 호텔 | 파통 해변 럭셔리 숙소</title>
        <meta name="description" content="안다텔 그란데 파통 푸켓에서 최상의 휴식을 경험하세요. 풀 액세스 객실을 갖춘 부티크 호텔로 파통 해변까지 도보 5분 거리입니다. 오늘 최저가로 예약하세요." />
        <meta name="keywords" content="파통 호텔, 푸켓 숙소, 풀 액세스 룸, 해변 근처 호텔, 안다텔 그란데, Patong Hotel, Phuket Resort" />
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
            안다텔 <br/><span className="italic text-accent">그란데</span>
          </h1>
          <p className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase mb-12 text-white/90">
            파통의 럭셔리 부티크 호텔
          </p>
          <Button className="rounded-none bg-accent text-white hover:bg-white hover:text-primary py-8 px-12 uppercase tracking-widest text-xs font-black transition-all duration-300 shadow-2xl">
            지금 예약하기
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
                부티크 <br/><span className="italic text-accent">휴식의 공간</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                파통 해변 중심에 위치한 안다텔 그란데 파통 푸켓 호텔은 'Oceanic Tranquility'의 현대적 디자인과 따뜻한 태국식 환대가 어우러진 공간입니다. 새롭게 디자인된 28sqm 객실에서 진정한 럭셔리를 경험하세요.
              </p>
              <div className="grid grid-cols-2 gap-6 pb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">해변까지 5분</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">28sqm 넓은 객실</span>
                </div>
              </div>
              <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-10 uppercase tracking-widest text-xs font-black">
                호텔 이야기
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">자주 묻는 질문</h2>
            <h3 className="text-5xl font-serif italic mb-12">궁금한 점을 해결해 드립니다</h3>
            
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
