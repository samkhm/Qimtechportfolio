import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DotBackground } from "@/components/lightswind/grid-dot-background";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { toast } from "sonner";
import API from "@/services/api";


export default function TestimoniesPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const mainColor = "rgb(66, 153, 170)";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const nameRegex = /^[A-Za-z]+$/;
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedMessage = message.trim();
  
    // 🔹 Validate inputs
    if (!trimmedFirstName || !trimmedLastName || !trimmedMessage) {
      toast.error("All fields are required!");
      return;
    }
  
    if (!nameRegex.test(trimmedFirstName)) {
      toast.error("First name must contain only letters.");
      return;
    }
  
    if (!nameRegex.test(trimmedLastName)) {
      toast.error("Last name must contain only letters.");
      return;
    }
  
    setLoading(true);
  
    try {
      const res = await API.post("/user/testimony", {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        message: trimmedMessage,
        rating,
      });
  
      if (!res?.data) {
        toast.error("Failed to send testimony.");
        return;
      }
  
      toast.success("✅ Thank you for your testimonial!");
      setFirstName("");
      setLastName("");
      setMessage("");
      setRating(0);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Submission failed. Please try again later.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* CONTENT AREA */}
      <div>
                <DotBackground
            dotSize={1}
            dotColor="#cbd5e1"
            darkDotColor="#64748b"
            spacing={22}
            showFade={true}
            fadeIntensity={20}
            className="w-full"   // ✅ add bottom space
            style={{
                background: `linear-gradient(to bottom right, rgba(66,153,170,0.1), rgba(66,153,170,0.25))`,
            }}
            >

          {/* Hero */}
          <section className="w-full flex flex-col items-center text-center px-6 py-20">
            <h1
              className="text-4xl md:text-5xl font-extrabold drop-shadow-sm"
              style={{ color: mainColor }}
            >
              Your Experience Matters to Us
            </h1>

            <p className="max-w-2xl text-gray-700 text-lg mt-4">
              We’re committed to delivering exceptional service.
              Your testimonial helps others feel confident choosing us.
            </p>

            <Button
              size="lg"
              className="mt-6 text-white shadow-lg"
              style={{ backgroundColor: mainColor }}
              onClick={() => {
                const formSection = document.getElementById("testimonial-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Leave a Testimonial
            </Button>
          </section>

          {/* Form */}
          <section id="testimonial-form" className="py-1 px-6 flex justify-center">
            <Card
              className="
                w-full max-w-lg 
                bg-white/95 backdrop-blur-xl
                border border-gray-200 
                rounded-2xl
                shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] 
                hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.18)]
                transition-all duration-300
                translate-y-0 hover:-translate-y-1
              "

            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Submit Your Testimonial
                </CardTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Your feedback helps us grow and improve.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label>Last Name</Label>
                      <Input
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Your Testimonial</Label>
                    <Textarea
                      placeholder="Describe your experience with our services..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <Label>Rating</Label>
                    <div className="flex gap-2 mt-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Star
                          key={num}
                          className={`w-7 h-7 cursor-pointer transition-transform hover:scale-110 ${
                            num <= rating ? "text-yellow-500 drop-shadow" : "text-gray-400"
                          }`}
                          onClick={() => setRating(num)}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full text-lg font-medium text-white shadow-lg"
                    style={{ backgroundColor: mainColor }}
                  >
                    {loading ? "Submitting..." : "Send Testimonial"}
                  </Button>

                  {loading && <Progress value={100} className="w-full animate-pulse" />}
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Thank you for helping us grow.
                </p>
              </CardContent>
            </Card>
          </section>
        </DotBackground>
      </div>

    </div>
  );
}
