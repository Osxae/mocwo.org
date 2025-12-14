import { useState } from "react";
import { Menu, X, Play, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";
import hero5 from "@/assets/hero5.jpeg";
import logo from  "@/assets/logo.jpg";
import PAPS from "@/assets/PAPS.jpeg";
// import hero6 from "@/assets/hero6.jpeg";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Globe, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Fhc() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { title: "3 Years with Photosensitivity Healed", image: hero5 },
    { title: "Grace & Favor Works", image: hero3 },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center font-bold text-lg">✧</div>
            <span className="font-bold text-lg hidden sm:inline">FATHERS HEART CHAPEL</span>
            {/* <img src={logo} alt=""></img> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="/" className="hover:text-amber-400 transition">HOME</a>
            <a href="/resources" className="hover:text-amber-400 transition">RESOURCES</a>
            <a href="/events" className="hover:text-amber-400 transition">UPCOMING EVENTS</a>
            <a href="/give/offering" className="hover:text-amber-400 transition">OFFERING</a>
            <a href="/give/partner" className="hover:text-amber-400 transition">PARTNERSHIP</a>
            <a href="/about" className="hover:text-amber-400 transition">ABOUT</a>
            {/* <a href="/prayer" className="hover:text-amber-400 transition">PRAYER</a> */}

          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-2">
            <a href="/" className="block py-2 hover:text-amber-400">HOME</a>
            <a href="/resources" className="block py-2 hover:text-amber-400">RESOURCES</a>
            <a href="/events" className="block py-2 hover:text-amber-400">UPCOMING EVENTS</a>
            <a href="/give/offering" className="block py-2 hover:text-amber-400">OFFERING</a>
            <a href="/give/partner" className="block py-2 hover:text-amber-400">PARTNERSHIP</a>
            <a href="/about" className="block py-2 hover:text-amber-400">ABOUT</a>
            <a href="/prayer" className="block py-2 hover:text-amber-400">PRAYER</a>
            <Link to="/prayer-ai">Prayer</Link>
          </div>
        )}
      </header>

      {/* Action Buttons */}
      <div className="bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/give/offering" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-full transition inline-block text-center">
  OFFERING
</a>

<a href="/give/seed" className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 rounded-full transition inline-block text-center">
  SEED
</a>

<a href="/give/tithe" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-full transition inline-block text-center">
  TITHE
</a>

<a href="/give/partner" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-full transition inline-block text-center">
  PARTNER NOW
</a>

{/* <a href="/register" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded text-center inline-block">
  REGISTER
</a> */}

{/* <a href="/broadcast/gntv" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded text-center inline-block">
  GNTV
</a>

<a href="/broadcast/ymtv" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded text-center inline-block">
  YMTV
</a> */}

        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-500 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-amber-400 font-semibold mb-2 uppercase tracking-wide">The Global Evangelist</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Rev. Prince Appau Bediako</h1>
            <p className="text-gray-200 text-lg">Join us for an incredible spiritual journey</p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img src={hero2} alt="Hero Banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Prayer For You</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Prayer For You</h3>
              <p className="text-gray-600 text-sm mb-4">Rev. Prince Appau Bediako</p>
              <div className="bg-white rounded p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">0:00</span>
                  <div className="flex-1 mx-4 h-1 bg-gray-300 rounded"></div>
                  <span className="text-xs text-gray-500">11:06</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-600 hover:text-slate-900"><ChevronLeft size={20} /></button>
                    <button className="bg-slate-900 text-white p-2 rounded hover:bg-slate-800"><Play size={20} /></button>
                    <button className="text-gray-600 hover:text-slate-900"><ChevronRight size={20} /></button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-600 hover:text-slate-900">🔊</button>
                    <button className="text-gray-600 hover:text-slate-900">☰</button>
                  </div>
                </div>
                 {/* <a href="/give/offering" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-full transition inline-block text-center">
  OFFERING
</a> */}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-slate-900 flex items-start gap-3">
              <button className="bg-slate-900 text-white p-2 rounded flex-shrink-0"><Play size={16} /></button>
              <div>
                <p className="font-bold text-slate-900">Prayer For You</p>
                <p className="text-xs text-gray-600">Rev. Prince Appau Bediako</p>
                <p className="text-xs text-gray-500 mt-1">11:06</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
              <img src={hero3} alt="Baro" className="w-12 h-12 rounded" />
              <div>
                <p className="font-bold text-slate-900">Baro</p>
                <p className="text-xs text-gray-600">Rev.Prince Appau Bediako</p>
                <p className="text-xs text-gray-500 mt-1">5:23</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rev. Prince & Prophetess Beatrice Appau Bediako</h2>
            <p className="text-gray-600 mb-4 font-semibold">An Inspiration To Millions Around The World</p>
            <p className="text-gray-700 leading-relaxed">
              Widely known around the world as the strong fathers in schools outreach and campus evangelistic movement...
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img src={PAPS} alt="Uebert & BeBe Angel" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-slate-900 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img src={hero5} alt="Partnership" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Partnership</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Partnership with the FHC Global Network is about being part of something BIGGER than yourself...
            </p>
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Become a FHC World Partner!</h3>
            <a href="/give/partner" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-full transition inline-block text-center">
  LEARN MORE
</a>
          </div>
        </div>
      </section>

      {/* Broadcast Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Broadcast</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Watch Rev. Prince's Teachings Online 24/7</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/broadcast/gntv" className="bg-slate-900 hover:bg-slate-800 text-white font-bold"/>
              <a href="/broadcast/ymtv" className="bg-slate-900 hover:bg-slate-800 text-white font-bold"/>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img src={hero3} alt="Broadcast" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Testimonies</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className={`relative h-64 rounded-lg overflow-hidden transition-opacity duration-300 ${idx === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"}`}>
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg md:text-2xl">{t.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-full transition"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-full transition"><ChevronRight size={24} /></button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <input type="email" placeholder="Email: support@fhcmail.com" className="w-full px-4 py-3 rounded mb-4 text-slate-900" />
          <a href="/register" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold">REGISTER</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Martyrs Of Christ World Outreach</h3>
            <p className="text-muted-foreground">
              Transforming lives through faith, worship, and service. Join our vibrant community and grow in your spiritual journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[ 
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about" },
                { name: "Partnership", link: "/partnership" },
                { name: "Giving", link: "/give/offering" },
                { name: "Contact", link: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 hover:underline transition-transform duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 123 Church Street, Accra, Ghana</li>
              <li className="flex items-center gap-2"><Phone className="w-5 h-5" /> +233 56 002 5086</li>
              <li className="flex items-center gap-2"><Mail className="w-5 h-5" /> info@fathersheart.org</li>
            </ul>

            <div className="flex gap-4 mt-4">
              {[ 
                { icon: <Facebook className="w-5 h-5 text-white" />, link: "#" },
                { icon: <Instagram className="w-5 h-5 text-white" />, link: "#" },
                { icon: <Youtube className="w-5 h-5 text-white" />, link: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Martyrs Of Christ World Outreach. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
