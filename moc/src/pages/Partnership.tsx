import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Crown, Star, Sparkles, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import hero1 from "@/assets/hero1.jpeg";
import { Link } from "react-router-dom";
import { Book, Play, Download, Headphones, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { 
  Users, 
  Globe, 
  BookOpen, 
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
  Handshake
} from "lucide-react";

const Partnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    amount: "",
    paymentMethod: "",
    message: ""
  });

  const partnershipLevels = [
    {
      title: "Bronze Partner",
      amount: "$50/month",
      icon: Heart,
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Monthly prayer support",
        "Access to partner events",
        "Digital resources",
        "Ministry updates"
      ]
    },
    {
      title: "Silver Partner",
      amount: "$100/month",
      icon: Star,
      color: "from-gray-400 to-gray-600",
      benefits: [
        "All Bronze benefits",
        "Quarterly ministry calls",
        "Physical resource gifts",
        "Priority prayer requests",
        "Special recognition"
      ]
    },
    {
      title: "Gold Partner",
      amount: "$250/month",
      icon: Sparkles,
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "All Silver benefits",
        "Annual partner retreat",
        "One-on-one prayer sessions",
        "Exclusive content access",
        "Ministry impact reports"
      ]
    },
    {
      title: "Kingdom Partner",
      amount: "$500+/month",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "All Gold benefits",
        "Personal ministry consultation",
        "VIP event access",
        "Direct pastor communication",
        "Legacy project involvement"
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('partnerships')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          level: formData.level,
          amount: parseFloat(formData.amount) || 0,
          payment_method: formData.paymentMethod,
          message: formData.message
        }]);

      if (error) throw error;

      alert("Partnership application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        level: "",
        amount: "",
        paymentMethod: "",
        message: ""
      });
    } catch (error: any) {
      alert("Error submitting application: " + error.message);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kingdom Partnership
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Partner with us in advancing God's kingdom and making a lasting impact in lives around the world
            </p>
          </div>
        </div>
      </section>

      {/* Kingdom Support Image Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Building God's Kingdom Together
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Partnership with Fathers Heart Chapel International  is about being part of something BIGGER than yourself 
                and reaching far beyond your personal sphere of influence, so that you are impacting 
                people all over the world.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through your partnership, we're able to reach millions through our satellite broadcasting, 
                support missionary work, feed the hungry, care for orphans, and build churches that 
                transform communities across the globe.
              </p>
              <Button size="lg" className="bg-gradient-royal text-primary-foreground">
                Become a Partner Today
              </Button>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-divine overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-kingdom flex items-center justify-center">
                    <span className="text-primary-foreground text-lg text-center">
                      <img
    src={hero1}
    alt="Rev. Prince & Mrs. Beatrice Appau Bediako"
    className="object-cover w-full h-full relative z-10"
  />
                      
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Levels</h2>
            <p className="text-xl text-muted-foreground">
              Choose the level of partnership that aligns with your heart and capacity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-divine transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color}`} />
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{level.title}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{level.amount}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      Choose This Level
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Partnership Application</h2>
              <p className="text-xl text-muted-foreground">
                Take the first step in your kingdom partnership journey
              </p>
            </div>
            <Card className="border-0 shadow-divine">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Label htmlFor="level">Partnership Level *</Label>
                    <Select onValueChange={(value) => handleInputChange("level", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bronze">Bronze Partner - $50/month</SelectItem>
                        <SelectItem value="silver">Silver Partner - $100/month</SelectItem>
                        <SelectItem value="gold">Gold Partner - $250/month</SelectItem>
                        <SelectItem value="kingdom">Kingdom Partner - $500+/month</SelectItem>
                        <SelectItem value="custom">Custom Amount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="amount">Monthly Partnership Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <Label htmlFor="paymentMethod">Preferred Payment Method *</Label>
                    <Select onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="mobile-money">Mobile Money</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your heart for partnership..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-royal text-primary-foreground">
                    Submit Partnership Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods Info */}
      {/* <section className="py-20 bg-gradient-kingdom">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-8">Secure Payment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Bank Transfer</h3>
                  <p className="text-muted-foreground text-sm">
                    Direct bank transfers for secure and reliable giving
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Mobile Money</h3>
                  <p className="text-muted-foreground text-sm">
                    Convenient mobile payments for easy giving
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-divine bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Online Payments</h3>
                  <p className="text-muted-foreground text-sm">
                    Secure online payments via card or PayPal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}


      {/* Partnership Benefits */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership Benefits & Recognition
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              As a valued partner, you'll receive exclusive benefits and recognition for your commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Recognition</h3>
              <p className="opacity-90">
                Your partnership will be acknowledged in our annual partner appreciation events
              </p>
            </div>

            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
              <p className="opacity-90">
                Receive early access to new teachings, books, and ministry resources
              </p>
            </div>

            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Prayer Coverage</h3>
              <p className="opacity-90">
                Enjoy personalized prayer support from our dedicated intercession team
              </p>
            </div>

            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="opacity-90">
                Connect with like-minded partners in our exclusive partner network
              </p>
            </div>

            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Impact Reports</h3>
              <p className="opacity-90">
                Receive detailed reports showing the impact of your partnership investment
              </p>
            </div>

            <div className="bg-black/10 rounded-2xl p-8 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Legacy Building</h3>
              <p className="opacity-90">
                Build a lasting legacy through your investment in God's kingdom
              </p>
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

export default Partnership;