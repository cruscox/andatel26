import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import restaurantImg from "@assets/24_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function RestaurantThai() {
  return (
    <Layout>
      <Helmet>
        <title>การรับประทานอาหาร | เรด ชิลลี่ โรงแรมอันดาเทล แกรนด์ ป่าตอง</title>
        <meta name="description" content="ลิ้มรสอาหารไทยแท้และอาหารนานาชาติที่ห้องอาหารเรด ชิลลี่ โรงแรมอันดาเทล แกรนด์ ป่าตอง ภูเก็ต บริการอาหารทะเลสดใหม่ทุกวัน" />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">การรับประทานอาหาร</h2>
        <h1 className="text-6xl font-serif mb-8">เรด <span className="italic text-accent">ชิลลี่</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">การเฉลิมฉลองเครื่องเทศไทยแท้และความเชี่ยวชาญด้านอาหารระดับนานาชาติ</p>
      </section>

      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={restaurantImg} alt="Red Chilli Restaurant" className="shadow-2xl grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" />
            </div>
            <div className="space-y-10">
              <h3 className="text-4xl font-serif text-primary">รสชาติ <br/><span className="italic text-accent">แบบไทยแท้</span></h3>
              <p className="text-muted-foreground text-lg">ห้องอาหารเรด ชิลลี่ เป็นหัวใจสำคัญด้านอาหารของอันดาเทล แกรนด์ เชฟของเราคัดสรรอาหารทะเลและสมุนไพรสดใหม่ในท้องถิ่นเพื่อให้คุณได้สัมผัสรสชาติที่แท้จริงของภูเก็ต</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white border border-primary/5 shadow-sm">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-serif text-primary text-xl">เวลาทำการ</h4>
                    <p className="text-muted-foreground text-sm uppercase">06:30 น. — 22:30 น. ทุกวัน</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">มีบริการรูมเซอร์วิส</span>
                </div>
              </div>

              <Button className="bg-primary text-white py-8 px-12 uppercase tracking-widest text-xs font-black rounded-none hover:bg-accent transition-colors">
                ดาวน์โหลดเมนู (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
