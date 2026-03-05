import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import restaurantImg from "@assets/24_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function RestaurantRussian() {
  return (
    <Layout>
      <Helmet>
        <title>Ресторан и Питание | Red Chilli в Andatel Grande Patong</title>
        <meta name="description" content="Насладитесь аутентичной тайской кухней и международными блюдами в ресторане Red Chilli в отеле Andatel Grande Patong. Свежие морепродукты ежедневно." />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Гастрономия</h2>
        <h1 className="text-6xl font-serif mb-8">Red <span className="italic text-accent">Chilli</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">Праздник тайских специй и международного кулинарного мастерства</p>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={restaurantImg} alt="Red Chilli Restaurant" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl font-serif text-primary">Аутентичные <br/><span className="italic text-accent">Вкусы</span></h3>
              <p className="text-muted-foreground text-lg">Ресторан Red Chilli — это кулинарное сердце Andatel Grande. Наши повара используют самые свежие местные морепродукты и травы, чтобы подарить вам истинный вкус Пхукета.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5 shadow-sm">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">Часы работы</h4>
                    <p className="text-muted-foreground text-sm uppercase">06:30 — 22:30 Ежедневно</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Доступно обслуживание в номерах</span>
                </div>
              </div>

              <Button className="bg-primary text-white py-8 px-12 uppercase tracking-widest text-xs font-black rounded-none hover:bg-accent transition-colors">
                Скачать меню (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
