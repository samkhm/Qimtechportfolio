import { getUserRole, getUserFromToken } from "@/utils/auth";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ClipLoader } from "react-spinners";


export default function Home() {
  const user = getUserFromToken();
  const userRole = getUserRole();
 

  const capitalizedFirstName =
    user?.first_name?.charAt(0).toUpperCase() + user?.first_name?.slice(1);

  const currentHour = new Date().getHours();
  let timeOfDay = "day";
  if (currentHour < 12) timeOfDay = "morning";
  else if (currentHour < 18) timeOfDay = "afternoon";
  else timeOfDay = "evening";

  const adminCardContents = [
    {
      key: "user",
      title: "users",
      content: <ClipLoader color="green"/>,
    },
    {
      key: "hobbies",
      title: "hobbies",
      content: <ClipLoader color="green"/>,
    },
    {
      key: "services",
      title: "services",
      content: <ClipLoader color="green"/>,
    },
    {
      key: "skills",
      title: "skills",
      content:  <ClipLoader color="green"/>,
    },
    ,
    {
      key: "projects",
      title: "projects",
      content:  <ClipLoader color="green"/>,
    },
    ,
    {
      key: "testimonies",
      title: "testimonials",
      content:  <ClipLoader color="green"/>,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mb-3 p-3 flex flex-wrap gap-4 justify-center">
        {userRole === "admin" &&
          adminCardContents.map((c) => (
            <Card
              key={c.key}
              className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 w-fit flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {c.title.toUpperCase()}
                </CardTitle>
                <CardContent className="p-0 text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {c.content}
                </CardContent>
              </div>
            </Card>
          ))}

       
      </div>

      <div className="p-5 bg-green-100">
        <p className="text-xl font-semibold dark:text-black">
          {`Good ${timeOfDay}, ${capitalizedFirstName}. Welcome!`}
        </p>
      </div>

      <main className="max-w-5xl mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg dark:text-black">
            {userRole === "admin"
              ? "Create something for you project."
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
}
