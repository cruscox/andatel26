import { Layout } from "@/components/Layout";
import exteriorImg from "@assets/25_1772610343894.jpg";
import lobbyImg from "@assets/24_1772610343894.jpg";
import peopleImg from "@assets/creation_2473971730_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutChinese() {
  return (
    <Layout>
      <Helmet>
        <title>关于我们 | 普吉岛安达泰尔大酒店的传承</title>
        <meta name="description" content="了解安达泰尔大酒店的故事。位于芭东海滩中心的精品酒店，融合泰国传统与现代设计。所有客房均提供 28 平方米的舒适空间。" />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={exteriorImg} className="w-full h-full object-cover" alt="Exterior" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">我们的传承</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">格蘭德 <span className="italic text-accent">故事</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            数十年的待客之道，为现代旅行者重新定义。
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-[1.1]">个性化 <br/><span className="italic text-accent">奢华</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                安达泰尔大酒店诞生于对泰国传统的致敬，同时拥抱全球设计标准。我们 28 平方米的客房采用 'Oceanic Tranquility' 设计理念，为您提供宁静且具质感的休憩之所。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                酒店坐落于芭东海滩中心，距离海滩仅 5 分钟路程，是您探索普吉岛魅力的理想据点。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src={lobbyImg} alt="Hotel Interior" className="w-full shadow-xl" />
              <img src={peopleImg} alt="Guest Experience" className="w-full shadow-xl aspect-[3/4] object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
