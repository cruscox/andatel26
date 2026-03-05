import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import HomeThai from "@/pages/th/Home";
import RoomsThai from "@/pages/th/Rooms";
import RestaurantThai from "@/pages/th/Restaurant";
import AboutThai from "@/pages/th/About";
import GalleryThai from "@/pages/th/Gallery";
import ContactThai from "@/pages/th/Contact";
import HomeChinese from "@/pages/zh/Home";
import RoomsChinese from "@/pages/zh/Rooms";
import RestaurantChinese from "@/pages/zh/Restaurant";
import AboutChinese from "@/pages/zh/About";
import GalleryChinese from "@/pages/zh/Gallery";
import ContactChinese from "@/pages/zh/Contact";
import HomeRussian from "@/pages/ru/Home";
import RoomsRussian from "@/pages/ru/Rooms";
import RestaurantRussian from "@/pages/ru/Restaurant";
import AboutRussian from "@/pages/ru/About";
import GalleryRussian from "@/pages/ru/Gallery";
import ContactRussian from "@/pages/ru/Contact";
import HomeKorean from "@/pages/ko/Home";
import RoomsKorean from "@/pages/ko/Rooms";
import RestaurantKorean from "@/pages/ko/Restaurant";
import AboutKorean from "@/pages/ko/About";
import GalleryKorean from "@/pages/ko/Gallery";
import ContactKorean from "@/pages/ko/Contact";
import Rooms from "@/pages/Rooms";
// import RoomDetail from "@/pages/RoomDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Restaurant from "@/pages/Restaurant";
import Gallery from "@/pages/Gallery";
// import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/th" component={HomeThai} />
      <Route path="/th/rooms" component={RoomsThai} />
      <Route path="/th/restaurant" component={RestaurantThai} />
      <Route path="/th/about" component={AboutThai} />
      <Route path="/th/gallery" component={GalleryThai} />
      <Route path="/th/contact" component={ContactThai} />
      <Route path="/zh" component={HomeChinese} />
      <Route path="/zh/rooms" component={RoomsChinese} />
      <Route path="/zh/restaurant" component={RestaurantChinese} />
      <Route path="/zh/about" component={AboutChinese} />
      <Route path="/zh/gallery" component={GalleryChinese} />
      <Route path="/zh/contact" component={ContactChinese} />
      <Route path="/ru" component={HomeRussian} />
      <Route path="/ru/rooms" component={RoomsRussian} />
      <Route path="/ru/restaurant" component={RestaurantRussian} />
      <Route path="/ru/about" component={AboutRussian} />
      <Route path="/ru/gallery" component={GalleryRussian} />
      <Route path="/ru/contact" component={ContactRussian} />
      <Route path="/ko" component={HomeKorean} />
      <Route path="/ko/rooms" component={RoomsKorean} />
      <Route path="/ko/restaurant" component={RestaurantKorean} />
      <Route path="/ko/about" component={AboutKorean} />
      <Route path="/ko/gallery" component={GalleryKorean} />
      <Route path="/ko/contact" component={ContactKorean} />
      <Route path="/rooms" component={Rooms} />
      {/* <Route path="/rooms/:id" component={RoomDetail} /> */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/gallery" component={Gallery} />
      {/* <Route path="/blog" component={Blog} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
