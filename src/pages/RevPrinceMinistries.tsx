import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

// Replace with actual images
import hero2 from "@/assets/hero2.jpeg";
import hero4 from "@/assets/hero4.jpeg";
import hero5 from "@/assets/hero5.jpeg";

export default function RevPrinceMinistries() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">

      {/* Hero Section */}
      <section className="relative h-[65vh] bg-black">
        <img
          src={hero2}
          alt="Rev Prince Ministries"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-cyan-600/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Rev. Prince Ministries</h1>
          <p className="max-w-2xl mt-4">
            A global teaching, prophetic, and healing ministry transforming lives through the Word and the power of the Spirit.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">About the Ministry</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Rev. Prince Ministries is a global outreach mandate focused on raising Kingdom giants, bringing healing,
            restoring destinies, and teaching the undiluted Word of God to empower believers worldwide.
            The ministry carries a strong prophetic, teaching, and healing grace with a mandate to bring
            revival and transformation to nations.
          </p>
        </div>
      </section>

      {/* Sub-Ministries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">
            Sub-Ministries & Departments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Prophetic & Healing Ministry</h3>
                <p className="text-sm text-muted-foreground">
                  Deliverance, healing, and prophetic direction through the power of the Holy Spirit.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Teaching & Discipleship Mandate</h3>
                <p className="text-sm text-muted-foreground">
                  Transformative teachings, mentorship, and spiritual development for believers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Outreach & Missions</h3>
                <p className="text-sm text-muted-foreground">
                  Evangelistic crusades, rural missions, charity programs, and international ministry tours.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Media / Global Broadcast</h3>
                <p className="text-sm text-muted-foreground">
                  Online services, TV broadcasts, podcasts, and digital evangelism.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Leadership & Ministers Network</h3>
                <p className="text-sm text-muted-foreground">
                  Training and empowering pastors, leaders, and ministers globally.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Youth & Impact Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Youth revival gatherings, capacity building, talent development, and empowerment initiatives.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Image + Media Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">
            Ministry in Motion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={hero4} alt="Ministry 1" className="rounded-lg object-cover h-64 w-full" />
            <img src={hero5} alt="Ministry 2" className="rounded-lg object-cover h-64 w-full" />
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link
                to="/media"
                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg"
              >
                View More Media
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Invitation & Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Invite Rev. Prince</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
            For conferences, crusades, church programs, leadership training, and international ministry events —
            invite Rev. Prince for a life-transforming encounter filled with power and revelation.
          </p>

          <Button asChild>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-xl text-lg"
            >
              Make an Invitation Request
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact / Visit */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin className="w-6 h-6" /> Accra, Ghana</li>
              <li className="flex items-center gap-3"><Phone className="w-6 h-6" /> +233 56 002 5086</li>
              <li className="flex items-center gap-3"><Mail className="w-6 h-6" /> revprince@ministries.org</li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg"
                >
                  Send A Message
                </Link>
              </Button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-bold mb-4">Rev Prince Ministries</h3>
            <p className="text-muted-foreground">
              A global mandate bringing transformation, healing, empowerment, and prophetic direction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "FHC", link: "/fhc" },
                { name: "Events", link: "/events" },
                { name: "Media", link: "/media" },
                { name: "Partnership", link: "/partnership" },
                { name: "Contact", link: "/contact" },
              ].map((i) => (
                <li key={i.link}>
                  <Link
                    to={i.link}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:underline hover:scale-105 transition-all"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Accra, Ghana</li>
              <li className="flex items-center gap-2"><Phone className="w-5 h-5" /> +233 56 002 5086</li>
              <li className="flex items-center gap-2"><Mail className="w-5 h-5" /> revprince@ministries.org</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rev. Prince Ministries. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
