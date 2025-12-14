import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PAPS from "@/assets/PAPS.jpeg";
import hero5 from "@/assets/hero5.jpeg";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${hero5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ✅ Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-800/80 to-cyan-600/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Fathers Heart Chapel International
            </h1>
            <p className="text-xl opacity-90">
              Discover our journey, vision, and the heart behind our ministry
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Rev. Prince & Mrs. Beatrice Appau Bediako
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                An Inspiration To Millions Around The World
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Widely known around the world as the Godfather of the modern-day Prophetic movement, our senior pastor presides over an ever-widening number of Fathers Heart Chapel International branches worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Operating 24 hours, 7 days a week around the globe through books, magazines, charity programmes, conferences, and crusades.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white hover:opacity-90 transition"
              >
                Learn More About Our Ministry
              </Button>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-divine overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-600 opacity-50" />
                    <img
                      src={PAPS}
                      alt="Rev. Prince & Mrs. Beatrice Appau Bediako"
                      className="object-cover w-full h-full relative z-10"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600 opacity-90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a global church that impacts nations through the power of God,
                  raising disciples who will transform their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To preach the Gospel, heal the sick, deliver the oppressed, and
                  equip believers for the work of ministry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do as a church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Faith", description: "Living by faith in God’s power.", emoji: "✨" },
              { title: "Excellence", description: "Giving God our best always.", emoji: "🏆" },
              { title: "Love", description: "Displaying God's love everywhere.", emoji: "❤️" },
              { title: "Integrity", description: "Walking in honesty and truth.", emoji: "⚖️" },
              { title: "Unity", description: "One body in Christ.", emoji: "🤝" },
              { title: "Growth", description: "Spiritual and personal development.", emoji: "🌱" },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-divine transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fathers Heart Chapel</h3>
            <p className="text-muted-foreground">
              Transforming lives through faith, worship, and service.
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
          &copy; {new Date().getFullYear()} Fathers Heart Chapel International. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
