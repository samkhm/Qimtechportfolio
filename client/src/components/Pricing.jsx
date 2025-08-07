import PricingCard from "./PricingCard";
import { Crown } from "lucide-react";

const pricingPlans = [
  {
    
    title: (
        <div className="flex items-center justify-center gap-2">
            <Crown className="w-5 h-5 text-accent" />
            <span>Basic</span>
        </div>
    ),
    price: "$200",
    period: "project",
    description: "Perfect for small businesses and personal websites",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month free support",
      "Mobile-friendly design",
      "Fast loading speed"
    ],
    buttonText: "Start Basic"
  },
  {
    title: (
        <div className="flex items-center justify-center gap-2">
            <Crown className="w-5 h-5 text-accent" />
            <Crown className="w-5 h-5 text-accent" />
            <span>Medium</span>
        </div>
    ),
    price: "$350",
    period: "project",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Content management system",
      "3 months free support",
      "E-commerce integration",
      "Analytics setup",
      "Social media integration",
      "Blog functionality"
    ],
    isPopular: true,
    buttonText: "Choose Medium"
  },
  {
    title: (
        <div className="flex items-center justify-center gap-2">
            <Crown className="w-5 h-5 text-accent" />
            <Crown className="w-5 h-5 text-accent" />
            <Crown className="w-5 h-5 text-accent" />
            <span>Advanced</span>
        </div>
    ),
    price: "$500",
    period: "project",
    description: "Complete solution for established businesses",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "Full SEO & marketing suite",
      "Advanced CMS with training",
      "6 months free support",
      "Full e-commerce solution",
      "Custom integrations",
      "Performance optimization",
      "Security hardening",
      "Backup & maintenance",
      "Priority support"
    ],
    buttonText: "Go Advanced"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 ml-10 mr-10" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-muted-foreground mb-2">Pricing Table</h4>
          <h2 style={{ color: "rgb(66, 153, 170)" }} className="text-4xl md:text-5xl font-bold text-accent mb-4">
            I Offer Great Affordable Prices
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Professionally evolve web-enabled resources and error-free user experiences. 
            Interactively provide access to unique architectures rather than customized functionalities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          
          <a href="https://wa.me/254745801435" className="text-accent font-semibold hover:underline transition-smooth">
          Contact me for custom pricing → 
          </a>
        </div>
      </div>
    </div>
  );
}