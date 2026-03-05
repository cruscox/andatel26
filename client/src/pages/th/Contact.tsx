import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactThai() {
  return (
    <Layout>
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">ติดต่อเรา</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-sans tracking-wide">
            เราพร้อมช่วยเหลือคุณในทุกคำถามหรือความต้องการพิเศษเพื่อให้การเข้าพักของคุณสมบูรณ์แบบ
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-serif text-primary mb-6">พูดคุยกับเรา</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  ไม่ว่าคุณจะต้องการจองห้องพัก จัดงานอีเวนต์ หรือเพียงแค่มีคำถามเกี่ยวกับสิ่งอำนวยความสะดวกของเรา ทีมงานที่ทุ่มเทของเราพร้อมให้บริการตลอด 24 ชั่วโมง
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-1">ที่อยู่</h4>
                    <p className="text-muted-foreground font-sans text-sm">41/9 ถนนราษฎร์อุทิศ 200 ปี<br/>ป่าตอง, กะทู้, ภูเก็ต 83150 ประเทศไทย</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-6">ส่งข้อความ</h3>
              <form className="space-y-4 font-sans" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="ชื่อ" className="bg-white border-primary/20 rounded-none" />
                  <Input placeholder="นามสกุล" className="bg-white border-primary/20 rounded-none" />
                </div>
                <Input type="email" placeholder="อีเมล" className="bg-white border-primary/20 rounded-none" />
                <Textarea placeholder="ข้อความ" className="bg-white border-primary/20 rounded-none min-h-[150px]" />
                <Button className="w-full bg-primary text-white hover:bg-primary/90 uppercase tracking-widest mt-4 rounded-none">
                  ส่งข้อความ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
