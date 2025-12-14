import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  sender: "ai" | "user";
  content: React.ReactNode;
};

export default function PrayerAI() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [prayer, setPrayer] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      content: (
        <>
          👋 Hello, welcome to <strong>FHC Prayer Support</strong>.<br />
          My name is <strong>Grace</strong>. I’m here to pray with you and
          connect you to our ministry leaders.
        </>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addUserMessage = (content: React.ReactNode) =>
    setMessages((m) => [...m, { sender: "user", content }]);

  const addAIMessage = (content: React.ReactNode) =>
    setMessages((m) => [...m, { sender: "ai", content }]);

  const next = () => setStep((s) => s + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex justify-center items-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 py-3 font-semibold">
          🤍 Prayer Assistant — Grace
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {/* Step-based Inputs */}
          {step === 0 && (
            <div className="space-y-2">
              <Input
                placeholder="What is your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => {
                  addUserMessage(name);
                  addAIMessage(
                    <>Nice to meet you, <strong>{name}</strong>. 🙏</>
                  );
                  addAIMessage("Please share your phone number.");
                  next();
                }}
                disabled={!name}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-2">
              <Input
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => {
                  addUserMessage(phone);
                  addAIMessage("Thank you. Where are you located?");
                  next();
                }}
                disabled={!phone}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <Input
                placeholder="City / Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => {
                  addUserMessage(location);
                  addAIMessage(
                    "Please tell me your prayer request. I am listening."
                  );
                  next();
                }}
                disabled={!location}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2">
              <Input
                placeholder="Your prayer request"
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => {
                  addUserMessage(prayer);
                  addAIMessage(
                    <>
                      🙏 Thank you for sharing. I am praying for you now.
                      <br />
                      <br />
                      <em>
                        “The Lord bless you and keep you; the Lord make His face
                        shine upon you.” — Numbers 6:24–26
                      </em>
                    </>
                  );
                  addAIMessage(
                    <>
                      📖 <strong>Scripture for you:</strong>
                      <br />
                      Isaiah 41:10 — “Fear not, for I am with you.”
                    </>
                  );
                  addAIMessage(
                    <>
                      📞 <strong>FHC Prayer Leaders:</strong>
                      <br />
                      • Rev. Prince Appau — +233 56 002 5086
                      <br />
                      • Prayer Desk — +233 24 123 4567
                    </>
                  );
                  next();
                }}
                disabled={!prayer}
              >
                Submit Prayer
              </Button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
