import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import roomTopImg from "@assets/pool_access_room1_1772610343894.jpg";
import roomDetailImg1 from "@assets/24_1772610343894.jpg";
import { Maximize, Check, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function RoomsChinese() {
  const ROOM_TYPES = [
    {
      id: "oceanic-deluxe-pool-view",
      name: "海洋豪华池景房",
      price: "2,850",
      size: "28 平方米",
      description: "全新装修的旗舰客房。采用'海洋宁静'设计理念，客房面积 28 平方米，为您提供宁静舒适的入住体验。",
      features: ["私人阳台", "40英寸智能电视", "迷你吧和冰箱", "品牌咖啡机"],
      image: roomDetailImg1
    },
    {
      id: "oceanic-pool-access",
      name: "海洋直通泳池房",
      price: "4,200",
      size: "28 平方米",
      description: "位于一楼的极致便利。从您的私人露台直接步入主泳池，享受 28 平方米的宽敞舒适空间。",
      features: ["直接通往泳池", "位于一楼 (Ground Floor)", "私人露台", "高级迷你吧"],
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
        <title>客房与泳池直通房 | 普吉岛安达泰尔大酒店</title>
        <meta name="description" content="探索安达泰尔大酒店的精品客房。所有客房面积均为 28 平方米，更有位于一楼的直通泳池房可选。" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">客房系列</h2>
        <h1 className="text-6xl font-serif mb-8">重新定义的 <span className="italic text-accent">空间</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">在“海洋宁静”氛围中放松身心</p>
      </section>
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4">
          {ROOM_TYPES.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center mb-32`}>
              <div className="w-full lg:w-3/5 aspect-[4/3] overflow-hidden shadow-2xl relative group">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-primary text-white px-6 py-2 text-xs font-black tracking-widest uppercase">
                  起价 {room.price} 泰铢 / 晚
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-4xl font-serif text-primary">{room.name}</h3>
                <div className="flex space-x-6 text-xs font-black text-accent uppercase tracking-widest">
                  <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {room.size}</span>
                  <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> 全新装修</span>
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
                  查看房价与预订
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
