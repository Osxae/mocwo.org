import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PAPS from "@/assets/PAPS.jpeg";
import hero5 from "@/assets/hero5.jpeg";
import { Link } from "react-router-dom";
import { Book,  Download, Headphones, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

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
  {/* Wine overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-purple-900/70 to-fuchsia-700/70 opacity-100 pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center text-primary-foreground">
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
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                An Inspiration To Millions Around The World
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Widely known around the world as the Godfather of the modern-day Prophetic movement, our senior pastor presides over an ever-widening number of Fathers Heart Chapel International branches worldwide. Through satellite-broadcasting channels, television networks, and digital platforms, our ministry has touched the lives of millions through remarkable healing, prophetic, and revelatory teaching ministry.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Operating 24 hours, 7 days a week around the globe through books, magazines, charity programmes, conferences, and crusades, our ministry continues to impact lives across continents with the message of hope, healing, and transformation.
              </p>
              <Button
              size="lg"
                className="bg-gradient-to-r from-rose-900 via-purple-900 to-fuchsia-700 text-primary-foreground hover:opacity-90 transition">
                  Learn More About Our Ministry
                  </Button>

            </div>
            <div className="relative">
              <Card className="border-0 shadow-divine overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden">
  {/* Soft Wine Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-rose-900 via-purple-900 to-fuchsia-700 opacity-50" />

  {/* Image */}
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
  {/* Wine gradient background */}
  <div className="absolute inset-0 bg-gradient-to-r from-rose-900 via-purple-900 to-fuchsia-700 opacity-90 pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To be a global church that impacts nations through the power of God,
            raising disciples who will transform their communities and advance
            the Kingdom of Heaven on earth.
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To preach the Gospel, heal the sick, deliver the oppressed, and
            equip believers for the work of ministry while demonstrating God's
            love through practical service to our communities.
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
              {
                title: "Faith",
                description:
                  "We believe in the supernatural power of God and live by faith, not by sight.",
                emoji: "✨",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, giving our best for God's glory.",
                emoji: "🏆",
              },
              {
                title: "Love",
                description:
                  "We demonstrate God's love through our actions, words, and service to others.",
                emoji: "❤️",
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty and transparency in all our dealings.",
                emoji: "⚖️",
              },
              {
                title: "Unity",
                description:
                  "We embrace diversity and work together as one body with many parts.",
                emoji: "🤝",
              },
              {
                title: "Growth",
                description:
                  "We are committed to continuous spiritual and personal development.",
                emoji: "🌱",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-divine transition-all duration-300 hover:scale-105"
              >
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

      {/* History Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    The Beginning
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fathers Heart Chapel International was founded with a simple yet powerful vision: to create a place where people could encounter God's love, experience genuine community, and be equipped to make a difference in the world.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    Global Expansion
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, Fathers Heart Chapel International has grown into a global ministry with congregations and partners worldwide, touching millions of lives through various media platforms, outreach programs, and church planting initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:scale-105 hover:underline transition-transform duration-300"
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
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
