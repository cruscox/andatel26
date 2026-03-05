import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Andatel Grande Patong Phuket Hotel</title>
        <meta name="description" content="Get in touch with Andatel Grande Patong Phuket Hotel. We're available 24/7 for bookings and inquiries. Located in the heart of Patong Beach." />
      </Helmet>
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-sans tracking-wide">
            We're here to assist you with any inquiries or special requests to make your stay perfect.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-serif text-primary mb-6">Get in Touch</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Whether you're looking to book a room, host an event, or simply have a question about our amenities, our dedicated team is available 24/7.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground font-sans text-sm">41/9 Rat-U-Thit 200 Pee Road<br/>Patong, Kathu, Phuket 83150 Thailand</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground font-sans text-sm">+66 76 290 480<br/>+66 76 290 481</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground font-sans text-sm">info@andatelhotel.com<br/>reservations@andatelhotel.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary/5 p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-6">Send a Message</h3>
              <form className="space-y-4 font-sans" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary tracking-wide">First Name</label>
                    <Input className="bg-white border-primary/20 rounded-none focus-visible:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary tracking-wide">Last Name</label>
                    <Input className="bg-white border-primary/20 rounded-none focus-visible:ring-secondary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary tracking-wide">Email</label>
                  <Input type="email" className="bg-white border-primary/20 rounded-none focus-visible:ring-secondary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary tracking-wide">Subject</label>
                  <Input className="bg-white border-primary/20 rounded-none focus-visible:ring-secondary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary tracking-wide">Message</label>
                  <Textarea className="bg-white border-primary/20 rounded-none min-h-[150px] focus-visible:ring-secondary" />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 uppercase tracking-widest mt-4 rounded-none">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
