import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import roomTopImg from "@assets/pool_access_room1_1772610343894.jpg";
import roomDetailImg1 from "@assets/24_1772610343894.jpg";
import { Maximize, Check, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function RoomsRussian() {
  const ROOM_TYPES = [
    {
      id: "oceanic-deluxe-pool-view",
      name: "Oceanic Deluxe Pool View",
      price: "2,850",
      size: "28 кв.м.",
      description: "Наш полностью обновленный флагманский номер. Дизайн в концепции 'Oceanic Tranquility' площадью 28 кв.м. обеспечивает идеальный баланс стиля и комфорта.",
      features: ["Частный балкон", "Smart TV 40\"", "Мини-бар и холодильник", "Кофемашина"],
      image: roomDetailImg1
    },
    {
      id: "oceanic-pool-access",
      name: "Oceanic Pool Access",
      price: "4,200",
      size: "28 кв.м.",
      description: "Максимальный комфорт на первом этаже. Прямой выход в бассейн с вашей террасы в номере площадью 28 кв.м. Самый популярный выбор наших гостей.",
      features: ["Прямой выход в бассейн", "Первый этаж (Ground Floor)", "Частная терраса", "Премиум мини-бар"],
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
        <title>Номера и Pool Access | Andatel Grande Patong</title>
        <meta name="description" content="Исследуйте бутик-номера в Andatel Grande Patong. Все номера площадью 28 кв.м. с возможностью выхода к бассейну на первом этаже." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section className="bg-primary text-white py-32 text-center">
        <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Коллекция номеров</h2>
        <h1 className="text-6xl font-serif mb-8">Пространство <span className="italic text-accent">Комфорта</span></h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl">Расслабьтесь в атмосфере Oceanic Tranquility</p>
      </section>
      <section className="py-32 luxury-pattern">
        <div className="container mx-auto px-4">
          {ROOM_TYPES.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center mb-32`}>
              <div className="w-full lg:w-3/5 aspect-[4/3] overflow-hidden shadow-2xl relative group">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-primary text-white px-6 py-2 text-xs font-black tracking-widest uppercase">
                  От {room.price} THB / Ночь
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-4xl font-serif text-primary">{room.name}</h3>
                <div className="flex space-x-6 text-xs font-black text-accent uppercase tracking-widest">
                  <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {room.size}</span>
                  <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Обновлен</span>
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
                  Проверить цены и бронировать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
