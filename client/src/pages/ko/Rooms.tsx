import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import roomTopImg from "@assets/pool_access_room1_1772610343894.jpg";
import roomDetailImg1 from "@assets/24_1772610343894.jpg";
import { Maximize, Check, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function RoomsKorean() {
  const ROOM_TYPES = [
    {
      id: "oceanic-deluxe-pool-view",
      name: "오셔닉 디럭스 풀 뷰",
      price: "2,850",
      size: "28 sqm",
      description: "완전히 리노베이션된 플래그십 객실입니다. 28sqm의 공간에 'Oceanic Tranquility' 컨셉을 적용하여 세련된 디자인과 편안함을 동시에 제공합니다.",
      features: ["개별 발코니", "40인치 스마트 TV", "미니바 및 냉장고", "브랜드 커피 머신"],
      image: roomDetailImg1
    },
    {
      id: "oceanic-pool-access",
      name: "오셔닉 풀 액세스",
      price: "4,200",
      size: "28 sqm",
      description: "1층(그라운드 층)에서 누리는 최고의 편리함. 28sqm 객실 전용 테라스에서 수영장으로 바로 연결되어 물놀이를 즐기기에 최적입니다.",
      features: ["수영장 직접 연결", "1층 위치 (Ground Floor)", "전용 테라스", "프리미엄 미니바"],
      image: roomTopImg
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": ROOM_TYPES.map((room, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "HotelRoom",
        "name": room.name,
        "description": room.description,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": "28",
          "unitCode": "MTK"
        }
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>객실 및 풀 액세스 | 안다텔 그란데 파통 푸켓</title>
        <meta name="description" content="안다텔 그란데 파통의 부티크 객실을 확인하세요. 모든 객실은 28sqm 크기이며 1층 풀 액세스 룸 옵션이 준비되어 있습니다." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">객실 컬렉션</h2>
        <h1 className="text-6xl font-serif mb-8">재정의된 <span className="italic text-accent">휴식 공간</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">'Oceanic Tranquility' 분위기 속에서 즐기는 완벽한 휴가</p>
      </section>
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4">
          {ROOM_TYPES.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center mb-32`}>
              <div className="w-full lg:w-3/5 aspect-[4/3] overflow-hidden shadow-2xl relative group">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-primary text-white px-6 py-2 text-xs font-black tracking-widest uppercase">
                  1박 {room.price} THB부터
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-4xl font-serif text-primary">{room.name}</h3>
                <div className="flex space-x-6 text-xs font-black text-accent uppercase tracking-widest">
                  <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {room.size}</span>
                  <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> 리노베이션 완료</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{room.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/10">
                  {room.features.map(f => (
                    <div key={f} className="flex items-center text-xs font-black uppercase text-primary">
                      <Check className="w-4 h-4 mr-3 text-accent" /> {f}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white py-8 uppercase tracking-widest text-xs font-black rounded-none hover:bg-accent transition-colors">
                  객실 예약 및 가격 확인
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
