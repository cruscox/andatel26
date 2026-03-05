import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import restaurantImg from "@assets/24_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function RestaurantKorean() {
  return (
    <Layout>
      <Helmet>
        <title>다이닝 | 안다텔 그란데 파통 푸켓 레드 칠리 레스토랑</title>
        <meta name="description" content="안다텔 그란데 파통의 레드 칠리 레스토랑에서 정통 태국 요리와 세계 각국의 미식을 즐겨보세요. 매일 신선한 해산물을 제공합니다." />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">미식 경험</h2>
        <h1 className="text-6xl font-serif mb-8">Red <span className="italic text-accent">Chilli</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">태국 본연의 맛과 세계적인 요리 예술이 만나는 곳</p>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={restaurantImg} alt="Red Chilli Restaurant" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl font-serif text-primary">정통 <br/><span className="italic text-accent">태국 풍미</span></h3>
              <p className="text-muted-foreground text-lg">레드 칠리(Red Chilli)는 안다텔 그란데의 요리 중심지입니다. 저희 셰프들은 신선한 현지 해산물과 허브를 엄선하여 푸켓의 진정한 맛을 전해드립니다.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5 shadow-sm">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">운영 시간</h4>
                    <p className="text-muted-foreground text-sm uppercase">매일 06:30 — 22:30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">룸서비스 이용 가능</span>
                </div>
              </div>

              <Button className="bg-primary text-white py-8 px-12 uppercase tracking-widest text-xs font-black rounded-none hover:bg-accent transition-colors">
                메뉴 다운로드 (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
