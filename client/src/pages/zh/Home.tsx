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

export default function HomeChinese() {
  const faqs = [
    {
      question: "普吉岛安达泰尔大酒店位于哪里？",
      answer: "我们位于芭东海滩中心，步行 5-7 分钟即可到达海滩，靠近热门购物区和餐厅。"
    },
    {
      question: "泳池直通房 (Pool Access) 在哪一层？",
      answer: "我们的泳池直通房位于一楼（地面层），您可以从私人露台直接进入游泳池。"
    },
    {
      question: "酒店房间的面积是多少？",
      answer: "我们所有类型的客房面积均为 28 平方米，旨在为您提供最大的舒适度。"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Andatel Grande Patong Phuket Hotel",
    "description": "位于普吉岛芭东的豪华精品酒店，提供泳池直通房和优质服务。",
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
        <title>普吉岛安达泰尔大酒店 | 芭东海滩豪华住宿</title>
        <meta name="description" content="在普吉岛安达泰尔大酒店体验顶级度假。精品酒店，设有泳池直通房，步行 5 分钟即可到达芭东海滩。立即预订最低价格。" />
        <meta name="keywords" content="芭东酒店, 普吉岛住宿, 泳池直通房, 靠近海滩的酒店, 安达泰尔大酒店, Patong Hotel, Phuket Resort" />
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
            安达泰尔 <br/><span className="italic text-accent">大酒店</span>
          </h1>
          <p className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase mb-12 text-white/90">
            芭东豪华精品酒店
          </p>
          <Button className="rounded-none bg-accent text-white hover:bg-white hover:text-primary py-8 px-12 uppercase tracking-widest text-xs font-black transition-all duration-300 shadow-2xl">
            立即预订
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
                精品 <br/><span className="italic text-accent">度假体验</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                普吉岛安达泰尔大酒店位于芭东海滩中心，融合了“海洋宁静”的现代设计与温暖的泰式款待。我们 28 平方米的客房经过全新设计，为您提供触手可及的奢华。
              </p>
              <div className="grid grid-cols-2 gap-6 pb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">距离海滩 5 分钟</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">28 平方米客房</span>
                </div>
              </div>
              <Button className="rounded-none bg-primary text-white hover:bg-accent py-8 px-10 uppercase tracking-widest text-xs font-black">
                关于我们
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">常见问题</h2>
            <h3 className="text-5xl font-serif italic mb-12">为您解答疑问</h3>
            
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
