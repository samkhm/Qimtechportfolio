import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "This service completely transformed our business operations. The team was professional, efficient, and delivered beyond our expectations."
  },
  {
    name: "Michael Chen",
    text: "Outstanding quality and attention to detail. I couldn't be happier with the results. Highly recommend to anyone looking for excellence."
  },
  {
    name: "Emily Rodriguez",
    text: "The level of customer service is unmatched. They went above and beyond to ensure everything was perfect. Truly exceptional work."
  },
  {
    name: "David Thompson",
    text: "Professional, reliable, and incredibly talented. The entire process was smooth from start to finish. Will definitely work with them again."
  },
  {
    name: "Lisa Wang",
    text: "Exceeded all my expectations! The attention to detail and commitment to quality is remarkable. Best decision I've made for my business."
  },
  {
    name: "James Miller",
    text: "Innovative solutions and exceptional execution. The team really understands their craft and delivers results that make a real difference."
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-screen" id="testimonials">
      <div className="py-16 bg-background overflow-hidden flex items-center justify-center dark:text-white" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up bg-gray-100 p-2">
          <h3 className="text-lg font-semibold text-testimonial-accent mb-2 uppercase tracking-wide">
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-testimonial-text" style={{ color: "rgb(66, 153, 170)" }}>
            What Clients Say
          </h2>
        </div>

<div className="overflow-hidden relative">
  {/* Gradient overlays */}
  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

  {/* Scrolling container */}
  <div
    className="testimonial-scroll"
    aria-label="Client Testimonials"
  >
    <div className="flex">
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <Card
          key={`${testimonial.name}-${index}`}
          className="flex-shrink-0 w-80 mx-4 bg-card border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <blockquote className="text-testimonial-text leading-relaxed mb-4 text-sm font-medium">
              “{testimonial.text}”
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-testimonial-accent rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-testimonial-text">
                  {testimonial.name}
                </h4>
                <p className="text-testimonial-muted text-sm">
                  Verified Client
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>

    </div>
    
  );
}
