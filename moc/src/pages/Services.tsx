import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Book,  Download, Headphones, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";


const Services = () => {
  const weeklyServices = [
    {
      title: "Sunday Service",
      time: "8AM | 10AM",
      description: "Our main worship service with powerful praise, worship, and the Word",
      image: "🎵",
      details: "Join us for an uplifting time of worship, fellowship, and life-changing messages",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Monday TikTok Live",
      time: "9PM",
      description: "A moment of prayer and prophetic encouragement",
      image: "🌅",
      details: "Experience God's presence through prayer, prophecy, and spiritual breakthrough",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Wednesday Midweek Service",
      time: "7PM",
      description: "Midweek spiritual refreshing and Bible study",
      image: "📖",
      details: "Dive deeper into God's Word with interactive Bible study and prayer",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Thursday TikTok Live",
      time: "9PM",
      description: "A moment of prayer and prophetic encouragement",
      image: "🙏",
      details: "Early morning power session to command your week with God's authority",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Friday Prayer Encounter",
      time: "7PM",
      description: "Intensive prayer and Prophetic session",
      image: "⛪",
      details: "Join us for powerful prayer sessions and spiritual warfare",
      color: "from-red-500 to-red-600"
    },
  ];

  const liveStreamOptions = [
    {
      platform: "Main Live Stream",
      description: "HD quality stream with multiple camera angles",
      viewers: "10K+ viewers",
      quality: "1080p HD"
    },
    {
      platform: "Mobile Stream",
      description: "Optimized for mobile devices and slower connections",
      viewers: "5K+ viewers",
      quality: "720p HD"
    },
    {
      platform: "Audio Only",
      description: "Audio-only stream for those with limited bandwidth",
      viewers: "2K+ listeners",
      quality: "High Quality Audio"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Weekly Services
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Join us for life-transforming worship experiences throughout the week
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg mr-4">
              Join Live Service
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Weekly Service Schedule</h2>
            <p className="text-xl text-muted-foreground">
              Multiple opportunities throughout the week to encounter God's presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-divine transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${service.color}`} />
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{service.image}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.time}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-muted-foreground mb-6">{service.details}</p>
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Live
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Streaming Section */}
      <section className="py-20 bg-gradient-kingdom">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Join Our Live Services
            </h2>
            <p className="text-xl text-primary-foreground opacity-90 mb-8">
              Experience the power of worship from anywhere in the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Live Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg">Sunday Service - Live</p>
                      <p className="text-sm opacity-75">Click to join 8,543 viewers</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {liveStreamOptions.map((option, index) => (
                      <Button key={index} variant="outline" className="w-full justify-between">
                        <span>{option.platform}</span>
                        <span className="text-sm text-muted-foreground">{option.quality}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    <h3 className="text-xl font-semibold">Live Chat Community</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Connect with fellow believers from around the world during our live services. 
                    Share prayer requests, testimonies, and encourage one another.
                  </p>
                  <Button className="w-full">Join Live Chat</Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 mr-3 text-primary" />
                    <h3 className="text-xl font-semibold">Upcoming Streams</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Wednesday Service</span>
                      <span className="text-sm text-muted-foreground">7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Thursday Prayer</span>
                      <span className="text-sm text-muted-foreground">10:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Friday Encounter</span>
                      <span className="text-sm text-muted-foreground">7:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What to Expect</h2>
              <p className="text-xl text-muted-foreground">
                Every service is designed to help you encounter God and grow in your faith
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">In-Person Services</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Arrive 15 minutes early for fellowship and preparation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Dress comfortably - we welcome all styles of worship attire
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Bring your Bible or use our provided study materials
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Children's ministry available during all services
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Online Services</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Stream starts 5 minutes before service time
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Interactive chat available for prayer and fellowship
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Multiple quality options for all internet speeds
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                      Replays available for 48 hours after service
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">
              Don't Miss Out on God's Presence
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Whether you join us in person or online, prepare your heart for an encounter 
              with the living God that will transform your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/live">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg">
                  Join Live Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg">
                Get Service Reminders
              </Button>
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

export default Services;