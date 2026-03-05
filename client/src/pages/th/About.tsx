import { Layout } from "@/components/Layout";
import exteriorImg from "@assets/25_1772610343894.jpg";
import lobbyImg from "@assets/24_1772610343894.jpg";
import peopleImg from "@assets/creation_2473971730_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutThai() {
  return (
    <Layout>
      <Helmet>
        <title>เกี่ยวกับเรา | เรื่องราวของโรงแรมอันดาเทล แกรนด์ ป่าตอง</title>
        <meta name="description" content="ทำความรู้จักอันดาเทล แกรนด์ ป่าตอง โรงแรมบูติกใจกลางภูเก็ตที่ผสมผสานประเพณีไทยเข้ากับการออกแบบร่วมสมัย ห้องพักกว้างขวาง 28 ตร.ม. ทุกห้อง" />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={exteriorImg} className="w-full h-full object-cover" alt="Exterior" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">มรดกของเรา</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">เรื่องราวของ <span className="italic text-accent">แกรนด์</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            ทศวรรษแห่งการต้อนรับที่ได้รับการจินตนาการใหม่สำหรับนักเดินทางยุคใหม่
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-[1.1]">ความหรูหรา <br/><span className="italic text-accent">เฉพาะตัว</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                โรงแรมอันดาเทล แกรนด์ ป่าตอง ภูเก็ต เกิดจากความปรารถนาที่จะสร้างประสบการณ์สไตล์บูติกที่ให้เกียรติประเพณีไทยไปพร้อมกับการเปิดรับมาตรฐานการออกแบบระดับโลก ห้องพักขนาด 28 ตร.ม. ของเรามอบความหรูหราที่ผ่อนคลายในสไตล์ Oceanic Tranquility
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ตั้งอยู่ห่างจากหาดป่าตองเพียง 5 นาที เราเป็นจุดเริ่มต้นที่สมบูรณ์แบบสำหรับการสำรวจความมหัศจรรย์ของภูเก็ต
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src={lobbyImg} alt="Lobby" className="w-full shadow-xl" />
              <img src={peopleImg} alt="Guests" className="w-full shadow-xl aspect-[3/4] object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
