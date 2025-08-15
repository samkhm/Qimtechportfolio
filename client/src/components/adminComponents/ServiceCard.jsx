import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";


export default function ServiceCard({ service =[], deleteService, updateService }) {
  

  
  return (
    <Card
      className="relative animation-fade"
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {service.title}
        </CardTitle>
      </CardHeader>

        

      <CardFooter className="flex justify-between gap-2 flex-wrap">
     
      </CardFooter>
    </Card>
  );
}
