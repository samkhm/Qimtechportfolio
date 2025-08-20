import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TrashIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export default function TestimonyCard({ testy, approveTest, deleteTest }) {
  return (
    <Card className="relative animation-fade">
      <CardContent>
        <p>{testy.message}</p>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 flex-wrap">
        <Button onClick={() => deleteTest(testy._id)}>
          <TrashIcon className="w-5 h-5" />
        </Button>

        <Button onClick={() => approveTest(testy._id)}>
          <BookmarkIcon className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
