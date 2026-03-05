import { Layout } from "@/components/Layout";
import exteriorImg from "@assets/25_1772610343894.jpg";
import lobbyImg from "@assets/24_1772610343894.jpg";
import peopleImg from "@assets/creation_2473971730_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutKorean() {
  return (
    <Layout>
      <Helmet>
        <title>호텔 소개 | 안다텔 그란데 파통 푸켓의 유산</title>
        <meta name="description" content="안다텔 그란데 파통의 이야기를 확인하세요. 파통 해변 중심에 위치한 부티크 호텔로 태국 전통과 현대적 디자인이 조화를 이룹니다. 전 객실 28sqm 크기입니다." />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={exteriorImg} className="w-full h-full object-cover" alt="Exterior" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">우리의 유산</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">그란데 <span className="italic text-accent">이야기</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            현대적인 여행자를 위해 재해석된 수십 년의 환대 정신.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-[1.1]">개별 맞춤 <br/><span className="italic text-accent">럭셔리</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                안다텔 그란데는 태국 전통을 존중하면서도 세계적인 디자인 기준을 수용하는 부티크 경험을 제공합니다. 28sqm 크기의 전 객실은 'Oceanic Tranquility' 컨셉으로 완성되었습니다.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                세계적으로 유명한 파통 해변에서 불과 5분 거리에 위치한 저희 호텔은 푸켓의 매력을 탐험하기 위한 완벽한 시작점입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src={lobbyImg} alt="Hotel lobby" className="w-full shadow-xl" />
              <img src={peopleImg} alt="Happy guests" className="w-full shadow-xl aspect-[3/4] object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
