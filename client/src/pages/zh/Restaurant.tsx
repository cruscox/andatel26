import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import restaurantImg from "@assets/24_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function RestaurantChinese() {
  return (
    <Layout>
      <Helmet>
        <title>美食餐饮 | 普吉岛安达泰尔大酒店 Red Chilli 餐厅</title>
        <meta name="description" content="在普吉岛安达泰尔大酒店的 Red Chilli 餐厅享用正宗泰国美食和国际佳肴。每日供应新鲜海鲜与当地特色菜。" />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">餐饮体验</h2>
        <h1 className="text-6xl font-serif mb-8">Red <span className="italic text-accent">Chilli</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">盛情款待的正宗泰式香料与国际美食艺术</p>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={restaurantImg} alt="Red Chilli Restaurant" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl font-serif text-primary">正宗 <br/><span className="italic text-accent">泰式风味</span></h3>
              <p className="text-muted-foreground text-lg">Red Chilli 餐厅是安达泰尔大酒店的美食核心。我们的主厨精选当地新鲜海鲜和香料，为您呈现最地道的普吉岛风味，营造极致的感官盛宴。</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5 shadow-sm">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">营业时间</h4>
                    <p className="text-muted-foreground text-sm uppercase">每日 06:30 — 22:30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">提供客房送餐服务</span>
                </div>
              </div>

              <Button className="bg-primary text-white py-8 px-12 uppercase tracking-widest text-xs font-black rounded-none hover:bg-accent transition-colors">
                下载菜单 (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
