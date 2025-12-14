import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { schools } from "@/data/schools";
import moc from "@/public/moc.mp4";
import moc1 from "@/public/moc1.mp4";
// import { Link } from "react-router-dom";
import { Book, Play, Download, Headphones, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const objectives = [
  {
    title: "Soul Winning",
    description: "Proclaim the Gospel and lead students to Christ",
    icon: "✝️",
  },
  {
    title: "Spiritual Growth",
    description: "Nurture young believers through discipleship and prayer",
    icon: "🙏",
  },
  {
    title: "Moral Transformation",
    description: "Build strong Christian values and godly character",
    icon: "⭐",
  },
  {
    title: "Community Impact",
    description: "Partner with schools and churches to transform lives",
    icon: "🌍",
  },
];

const achievements = [
  {
    title: "Schools Reached",
    number: "50+",
    description: "Institutions visited with the Gospel message",
  },
  {
    title: "Souls Won",
    number: "15,000+",
    description: "Students and staff reached for Christ",
  },
  {
    title: "Discipleship Groups",
    number: "100+",
    description: "Fellowship and Bible study groups established",
  },
  {
    title: "Communities Impacted",
    number: "200+",
    description: "Families and neighborhoods transformed",
  },
];

const MOCWO = () => {
  return (
    <div className="min-h-screen w-full">
      {/* 🎥 Video Background Hero */}
      <div className="relative w-full h-[90vh] flex items-center justify-center text-center text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/moc1.jpg"
        >
          <source src="/moc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Martyrs of Christ World Outreach (MOCWO)
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Reaching out to the reached before they get out of reach
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schools">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground px-8 py-6 text-lg"
              >
                View All Schools
              </Button>
            </Link>
            <Link to="/give/mocwo">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                Support Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-6">About MOCWO</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Martyrs of Christ World Outreach (MOCWO) is a Christ-centered
            evangelical movement with a burning passion for soul-winning and
            discipleship. Our mission is clear: “To reach out to the reached
            before they get out of reach.”
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We are dedicated to carrying the message of Christ’s love and
            salvation into schools, communities, and nations. Through evangelism,
            prayer, and practical outreach, MOCWO seeks to raise a generation of
            believers who are grounded in the Word, filled with the Spirit, and
            committed to living boldly for Christ.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            MOCWO is not just an organization — it is a calling. We believe that
            the Great Commission is urgent and that every soul matters to God.
            With this conviction, we mobilize believers, partner with churches,
            and engage communities to spread the Gospel and impact lives with the
            transforming power of Jesus Christ.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our vision is to see revival break out wherever we go, young people
            strengthened in their faith, and nations influenced by the
            uncompromising truth of the Gospel.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="text-3xl">{objective.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {objective.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Impact & Achievements</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Measuring the difference we're making in schools and communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, idx) => (
              <Card key={idx} className="border-0 shadow-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {ach.number}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">{ach.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {ach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Schools We Have Visited
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schools.map((school) => (
              <Card key={school.id} className="shadow-card">
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-xl font-semibold">{school.name}</h3>
                  <p className="text-muted-foreground">{school.description}</p>
                  <div className="flex gap-2">
                    <Link to={`/media/${school.id}`}>
                      <Button className="bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600/70" size="sm">📸 View Media</Button>
                    </Link>
                    <Link to={`/report/${school.id}`}>
                      <Button size="sm" variant="outline">
                        📖 Read Report
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600/70">
        <div className="container mx-auto px-4 max-w-3xl text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Transforming Lives
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Whether through financial support, volunteering, or partnership,
            you can be part of this life-changing mission to empower the next
            generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg"
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Volunteer Today
            </Button>
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

export default MOCWO;
