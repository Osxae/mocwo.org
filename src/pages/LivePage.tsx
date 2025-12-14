import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Users, MessageSquare, Heart, Settings, Maximize, Volume2, Share } from "lucide-react";

const LivePage = () => {
  const [isLive, setIsLive] = useState(true);
  const [viewerCount, setViewerCount] = useState(8543);
  const [chatMessage, setChatMessage] = useState("");
  const [showChat, setShowChat] = useState(true);

  const chatMessages = [
    {
      user: "Grace M.",
      message: "Praise God! This message is exactly what I needed to hear today 🙏",
      time: "2 min ago",
      isHighlighted: false
    },
    {
      user: "John K.",
      message: "Praying for everyone watching from Kenya. God bless!",
      time: "3 min ago",
      isHighlighted: false
    },
    {
      user: "Pastor Assistant",
      message: "Welcome everyone! Please share your prayer requests in the chat",
      time: "5 min ago",
      isHighlighted: true
    },
    {
      user: "Sarah L.",
      message: "Thank you Pastor for this powerful word! Lives are being changed",
      time: "7 min ago",
      isHighlighted: false
    },
    {
      user: "Michael R.",
      message: "Watching from South Africa. The presence of God is so strong! 🔥",
      time: "10 min ago",
      isHighlighted: false
    }
  ];

  const upcomingServices = [
    {
      title: "Wednesday Midweek Service",
      time: "Tonight at 7:00 PM",
      description: "Bible study and prayer",
      isNext: true
    },
    {
      title: "Thursday Dominion Hour",
      time: "Tomorrow at 10:00 AM",
      description: "Prayer and prophetic ministry",
      isNext: false
    },
    {
      title: "Friday Prayer Encounter",
      time: "Friday at 7:00 PM",
      description: "Intensive prayer session",
      isNext: false
    }
  ];

  const streamQualities = [
    { quality: "1080p HD", viewers: "5.2K", bandwidth: "High" },
    { quality: "720p HD", viewers: "2.8K", bandwidth: "Medium" },
    { quality: "480p", viewers: "1.1K", bandwidth: "Low" },
    { quality: "Audio Only", viewers: "892", bandwidth: "Minimal" }
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      console.log("Sending message:", chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 min-h-[calc(100vh-8rem)]">
          {/* Main Video Player */}
          <div className="lg:col-span-3 order-1">
            <Card className="border-0 shadow-divine bg-black overflow-hidden">
              <div className="relative">
                {/* Video Player Area */}
                <div className="aspect-video bg-black flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-kingdom opacity-50" />
                  <div className="relative z-10 text-center text-primary-foreground">
                    <Play className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <h2 className="text-2xl font-bold mb-2">Sunday Service - Live</h2>
                    <p className="text-lg opacity-90">
                      "The Power of Faith in Uncertain Times"
                    </p>
                  </div>
                  
                  {/* Live Indicator */}
                  {isLive && (
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <Badge className="bg-red-600 text-white animate-divine-pulse">
                        ⚫ LIVE
                      </Badge>
                      <Badge variant="secondary" className="bg-background/80">
                        <Users className="w-4 h-4 mr-1" />
                        {viewerCount.toLocaleString()}
                      </Badge>
                    </div>
                  )}

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button size="sm" variant="secondary" className="bg-background/80">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-background/80">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <span className="text-primary-foreground text-sm">1:23:45</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="secondary" className="bg-background/80">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-background/80">
                        <Share className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-background/80">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Stream Quality Options */}
                <div className="p-4 bg-background">
                  <h3 className="font-semibold mb-3">Stream Quality</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {streamQualities.map((stream, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="flex flex-col items-center p-3 h-auto"
                      >
                        <span className="font-semibold">{stream.quality}</span>
                        <span className="text-xs text-muted-foreground">{stream.viewers} viewers</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-none">
            {/* Live Chat */}
            <Card className="border-0 shadow-divine h-80 lg:h-96">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Live Chat
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowChat(!showChat)}
                  >
                    {showChat ? "Hide" : "Show"}
                  </Button>
                </div>
              </CardHeader>
              {showChat && (
                <CardContent className="flex flex-col h-full pb-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded-lg text-sm ${
                          msg.isHighlighted
                            ? "bg-primary/10 border border-primary/20"
                            : "bg-muted/50"
                        }`}
                      >
                        <div className="font-semibold text-primary">{msg.user}</div>
                        <div className="text-foreground">{msg.message}</div>
                        <div className="text-xs text-muted-foreground mt-1">{msg.time}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Input */}
                  <div className="flex space-x-2 pb-4">
                    <Input
                      placeholder="Type your message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button size="sm" onClick={handleSendMessage}>
                      Send
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-card">
              <CardContent className="p-4 space-y-3">
                <Button className="w-full bg-gradient-royal text-primary-foreground">
                  <Heart className="w-4 h-4 mr-2" />
                  Give Offering
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Prayer Request
                </Button>
                <Button variant="outline" className="w-full">
                  <Share className="w-4 h-4 mr-2" />
                  Share Stream
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Services */}
            <Card className="border-0 shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Upcoming Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingServices.map((service, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      service.isNext
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-primary text-sm">{service.time}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View Full Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePage;