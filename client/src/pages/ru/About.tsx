import { Layout } from "@/components/Layout";
import exteriorImg from "@assets/25_1772610343894.jpg";
import lobbyImg from "@assets/24_1772610343894.jpg";
import peopleImg from "@assets/creation_2473971730_1772610343894.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutRussian() {
  return (
    <Layout>
      <Helmet>
        <title>О нас | Наследие Andatel Grande Patong Phuket</title>
        <meta name="description" content="Узнайте историю Andatel Grande. Бутик-отель в центре Патонга, сочетающий тайские традиции и современный дизайн. Все номера площадью 28 кв.м." />
      </Helmet>

      <section className="bg-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={exteriorImg} className="w-full h-full object-cover" alt="Exterior" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xs font-sans tracking-[0.5em] text-accent uppercase font-black mb-8">Наше наследие</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">История <span className="italic text-accent">Grande</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            Десятилетия гостеприимства, переосмысленные для современного путешественника.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-serif text-primary leading-[1.1]">Персональная <br/><span className="italic text-accent">Роскошь</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Отель Andatel Grande родился из желания создать бутик-отель, который чтит тайские традиции и соответствует мировым стандартам дизайна. Наши номера площадью 28 кв.м выполнены в концепции 'Oceanic Tranquility'.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Расположенный всего в 5 минутах от всемирно известного пляжа Патонг, наш отель является идеальной отправной точкой для знакомства с островом Пхукет.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src={lobbyImg} alt="Lobby interior" className="w-full shadow-xl" />
              <img src={peopleImg} alt="Guest happiness" className="w-full shadow-xl aspect-[3/4] object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
