import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function ContactChinese() {
  return (
    <Layout>
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">联系我们</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-sans tracking-wide">我们随时为您提供帮助，确保您的入住完美无瑕。</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-serif text-primary">保持联系</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">地址</h4>
                  <p className="text-muted-foreground font-sans text-sm">41/9 Rat-U-Thit 200 Pee Road<br/>芭东, 普吉岛 83150 泰国</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 border border-primary/10">
              <form className="space-y-4 font-sans" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="名字" className="bg-white border-primary/20 rounded-none" />
                <Input type="email" placeholder="电子邮箱" className="bg-white border-primary/20 rounded-none" />
                <Textarea placeholder="信息" className="bg-white border-primary/20 rounded-none min-h-[150px]" />
                <Button className="w-full bg-primary text-white hover:bg-primary/90 uppercase tracking-widest mt-4 rounded-none">发送信息</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
