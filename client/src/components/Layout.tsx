import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import logo from "@assets/freepik__improve-img1-logo-in-the-style-of-jessica-hische-t__5_1772039525247.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "th", label: "ไทย" },
    { code: "zh", label: "简体中文" },
    { code: "ru", label: "Русский" },
    { code: "ko", label: "한국어" }
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    if (lang.code === "en") {
      window.location.href = "/";
    } else {
      window.location.href = `/${lang.code}`;
    }
  };

  const isThai = location.startsWith("/th");
  const isChinese = location.startsWith("/zh");
  const isRussian = location.startsWith("/ru");
  const isKorean = location.startsWith("/ko");
  
  const prefix = isThai ? "/th" : isChinese ? "/zh" : isRussian ? "/ru" : isKorean ? "/ko" : "";

  const labels = {
    Home: isThai ? "หน้าแรก" : isChinese ? "主页" : isRussian ? "Главная" : isKorean ? "홈" : "Home",
    Rooms: isThai ? "ห้องพัก" : isChinese ? "客房" : isRussian ? "Номера" : isKorean ? "객실" : "Rooms",
    Restaurant: isThai ? "ร้านอาหาร" : isChinese ? "餐厅" : isRussian ? "Ресторан" : isKorean ? "레스토랑" : "Restaurant",
    Gallery: isThai ? "แกลเลอรี" : isChinese ? "画廊" : isRussian ? "Галерея" : isKorean ? "갤러리" : "Gallery",
    About: isThai ? "เกี่ยวกับเรา" : isChinese ? "关于我们" : isRussian ? "О нас" : isKorean ? "호텔 소개" : "About Us",
    Contact: isThai ? "ติดต่อ" : isChinese ? "联系我们" : isRussian ? "Контакты" : isKorean ? "문의" : "Contact",
    BookNow: isThai ? "จองเลย" : isChinese ? "立即预订" : isRussian ? "Забронировать" : isKorean ? "지금 예약" : "Book Now",
    Experience: isThai ? "สัมผัสประสบการณ์ 'Oceanic Tranquility' ใจกลางป่าตอง พื้นที่ที่ออกแบบใหม่ของเราผสมผสานสุนทรียภาพสมัยใหม่เข้ากับสีน้ำเงินเข้มของทะเลและพื้นผิวธรรมชาติที่อบอุ่น" : 
                isChinese ? "在芭东中心体验“海洋宁静”。我们重新设计的空间将现代美学与深海蓝和温暖的自然纹理完美融合。" :
                isRussian ? "Испытайте «Океаническое спокойствие» в самом сердце Патонга. Наши обновленные интерьеры сочетают современную эстетику с глубокими синими тонами и теплыми природными текстурами." :
                isKorean ? "파통 중심부에서 '오셔닉 트란퀼리티'를 경험해 보세요. 새롭게 디자인된 공간은 현대적인 미학과 깊은 바다의 블루, 따뜻한 자연의 질감이 조화를 이룹니다." :
                "Experience \"Oceanic Tranquility\" at the heart of Patong. Our newly redesigned spaces blend modern aesthetics with deep sea blues and warm natural textures."
  };

  const navLinks = [
    { href: `${prefix}/`, label: labels.Home },
    { href: `${prefix}/rooms`, label: labels.Rooms },
    { href: `${prefix}/restaurant`, label: labels.Restaurant },
    { href: `${prefix}/gallery`, label: labels.Gallery },
    { href: `${prefix}/about`, label: labels.About },
    { href: `${prefix}/contact`, label: labels.Contact },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-sans tracking-wider hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2 text-accent" /> +66 76 290 480</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-accent" /> info@andatelhotel.com</span>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-accent" /> Patong Beach, Phuket</span>
          </div>
          <div className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-accent transition-colors cursor-pointer outline-none uppercase font-bold">
                <Globe className="w-3 h-3 mr-2 text-accent" />
                {currentLang.label}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary border-white/10 text-white rounded-none">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className="hover:bg-accent focus:bg-accent cursor-pointer text-xs uppercase tracking-widest p-3"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <img src={logo} alt="Andatel Logo" className="h-12 w-auto mr-3 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-serif text-primary tracking-widest uppercase leading-none">ANDATEL</h1>
                <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-sans mt-1">Hotel Phuket</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`text-xs uppercase tracking-widest font-sans cursor-pointer transition-colors py-2 border-b-2 ${location === link.href ? "text-accent border-accent font-bold" : "text-primary border-transparent hover:text-accent"}`}>
                  {link.label}
                </div>
              </Link>
            ))}
            <Button className="bg-accent text-white hover:bg-accent/90 uppercase tracking-widest text-xs ml-4 rounded-none h-10 px-6">
              {labels.BookNow}
            </Button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className={`text-sm uppercase tracking-widest font-sans py-3 border-b border-border/50 cursor-pointer ${location === link.href ? "text-accent font-bold" : "text-primary"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Button className="bg-accent text-white w-full mt-6 py-6 uppercase tracking-widest rounded-none">
                {labels.BookNow}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Andatel Logo" className="h-10 w-auto mr-3 brightness-0 invert" />
              <h3 className="text-xl font-serif tracking-widest text-white uppercase">Andatel Hotel</h3>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-sans max-w-xs">
              {labels.Experience}
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-sans tracking-[0.3em] uppercase mb-8 font-bold text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link href={`${prefix}/rooms`} className="hover:text-accent transition-colors">{labels.Rooms}</Link></li>
              <li><Link href={`${prefix}/restaurant`} className="hover:text-accent transition-colors">{labels.Restaurant}</Link></li>
              <li><Link href={`${prefix}/gallery`} className="hover:text-accent transition-colors">{labels.Gallery}</Link></li>
              <li><Link href={`${prefix}/about`} className="hover:text-accent transition-colors">{labels.About}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans tracking-[0.3em] uppercase mb-8 font-bold text-accent">Location</h4>
            <ul className="space-y-5 text-sm text-primary-foreground/70">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-accent mt-0.5 flex-shrink-0" />
                <span>41/9 Rat-U-Thit 200 Pee Road, Patong, Phuket 83150 Thailand</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span>+66 76 290 480</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span>info@andatelhotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans tracking-[0.3em] uppercase mb-8 font-bold text-accent">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-6">Join our circle for exclusive seasonal offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 w-full focus:outline-none focus:border-accent text-sm font-sans"
              />
              <button className="bg-accent text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-accent/80 transition-colors font-bold">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-primary-foreground/40 tracking-[0.2em] uppercase font-sans">
          <p>&copy; {new Date().getFullYear()} Andatel Hotel Phuket. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
