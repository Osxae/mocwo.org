import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Book,  Download, Headphones, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    location: ""
  });

  const locations = [
    {
      name: "Main Branch - Kumasi",
      address: "Sawaba, Off Sofoline Rd",
      phone: "+233 243 527 174",
      email: "fathersheart@gmail.com",
      hours: "Office: Mon-Fri 8AM-5PM | Services: Sun 8AM & 12AM",
      isMain: true
    },
    {
      name: "Accra Branch - Legon",
      address: "Legon",
      phone: "+233 243 527 174",
      email: "fathersheart@gmail.com",
      hours: "Office: Mon-Fri 8AM-5PM | Services: Sun 8AM & 12AM",
      isMain: false
    },
    {
      name: "US Branch",
      address: "Texas",
      phone: "+233 243 527 174",
      email: "fathersheart@gmail.com",
      hours: "Office: Mon-Fri 8AM-5PM | Services: Sun 8AM & 12AM",
      isMain: false
    },
    {
      name: "Canada Branch",
      address: "Canada",
      phone: "+233 243 527 174",
      email: "fathersheart@gmail.com",
      hours: "Office: Mon-Fri 8AM-5PM | Services: Sun 8AM & 12AM",
      isMain: false
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "+233 243 527 174",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      details: "info@fathersheart.org",
      action: "Send Email"
    },
    {
      icon: Globe,
      title: "Live Chat",
      description: "Chat with us online during services",
      details: "Available during live streams",
      action: "Start Chat"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl opacity-90">
              We'd love to hear from you. Reach out to us for prayer, questions, or to learn more about our ministry.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-divine transition-all duration-300 hover:scale-105 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-royal flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-primary font-semibold mb-4">{method.details}</p>
                    <Button className="w-full">{method.action}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-divine">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Preferred Location</Label>
                      <Select onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location, index) => (
                            <SelectItem key={index} value={location.name}>
                              {location.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prayer">Prayer Request</SelectItem>
                          <SelectItem value="visit">Plan a Visit</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="mocwo">MOCWO Programs</SelectItem>
                          <SelectItem value="media">Media & Resources</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="testimony">Share Testimony</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please share your message, prayer request, or question..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-royal text-primary-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Locations */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
              {locations.map((location, index) => (
                <Card key={index} className={`border-0 shadow-card ${location.isMain ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{location.name}</h3>
                      {location.isMain && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          Main Campus
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{location.phone}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{location.email}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{location.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        Get Directions
                      </Button>
                      <Button size="sm" className="flex-1">
                        Call Location
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className="py-20 bg-gradient-kingdom">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">
              Need Prayer?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our prayer team is standing by to pray for your needs. Submit your prayer request 
              and join thousands who have experienced God's miraculous intervention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🙏</div>
                  <h3 className="font-semibold text-foreground mb-2">24/7 Prayer</h3>
                  <p className="text-sm text-muted-foreground">Our team prays around the clock</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="font-semibold text-foreground mb-2">Confidential</h3>
                  <p className="text-sm text-muted-foreground">Your requests are kept private</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="font-semibold text-foreground mb-2">Miraculous</h3>
                  <p className="text-sm text-muted-foreground">Testimonies of answered prayers</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg">
              Submit Prayer Request
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Emergency or Urgent Prayer Need?</h3>
              <p className="text-muted-foreground mb-6">
                If you have an urgent prayer need or emergency, please call our 24-hour prayer hotline 
                or reach out through WhatsApp for immediate support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  📞 Emergency Prayer Line
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  💬 WhatsApp Prayer Support
                </Button>
              </div>
            </CardContent>
          </Card>
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

export default Contact;