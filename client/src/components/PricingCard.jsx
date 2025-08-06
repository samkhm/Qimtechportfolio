import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}) {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-2 ${
      isPopular 
        ? 'border-accent shadow-medium bg-gradient-card scale-105' 
        : 'shadow-soft hover:shadow-medium bg-gradient-card'
    }`}>
      {isPopular && (
        <Badge className="absolute top-4 right-4 bg-gradient-accent text-white border-0">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-card-foreground">{price}</span>
          <span className="text-muted-foreground ml-1">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-foreground" />
              </div>
              <span className="text-card-foreground text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button 
          className={`w-full transition-smooth  ${
            isPopular 
              ? 'bg-[rgb(66,153,170)] hover:opacity-90 text-white border-0' 
              : 'bg-gray-300 hover:bg-accent/90 text-accent-foreground hover:border-[2px] border-[rgb(66,153,170)]'
          }`}
          size="lg"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}