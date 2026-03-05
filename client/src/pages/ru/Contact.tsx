import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function ContactRussian() {
  return (
    <Layout>
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Контакты</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-sans tracking-wide">Мы здесь, чтобы помочь вам с любыми вопросами.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-serif text-primary">Связаться с нами</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">Адрес</h4>
                  <p className="text-muted-foreground font-sans text-sm">41/9 Rat-U-Thit 200 Pee Road<br/>Патонг, Пхукет 83150 Таиланд</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 border border-primary/10">
              <form className="space-y-4 font-sans" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Имя" className="bg-white border-primary/20 rounded-none" />
                <Input type="email" placeholder="Email" className="bg-white border-primary/20 rounded-none" />
                <Textarea placeholder="Сообщение" className="bg-white border-primary/20 rounded-none min-h-[150px]" />
                <Button className="w-full bg-primary text-white hover:bg-primary/90 uppercase tracking-widest mt-4 rounded-none">Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
