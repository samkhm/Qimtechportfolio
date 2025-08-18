import HobbyCard from "./HobbyCard";
import HobbyDialog from "./HobbyDialog";
import { getUserRole } from "@/utils/auth";
import { Input } from "@/components/ui/input";


export default function Hobby({ hobby, deleteHobby, createHobby, updateHobby, hobbyQuery, setHobbyQuery }) {
  
  const userRole = getUserRole();
  const isAdmin = userRole === "admin";

  let filtered = [ ...hobby];

  const filteredHobbys = hobbyQuery.trim()
    ? filtered.filter(p => p.title?.toLowerCase().includes(hobbyQuery.toLowerCase()))
    : filtered;



  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-wrap bg-gray-100 rounded gap-5 mb-5">
        {isAdmin && (
          <Input
            className="bg-gray-200 max-w-100 border-1 border-solid border-gray-700"
            placeholder="Search..."
            value={hobbyQuery}
            onChange={e => setHobbyQuery(e.target.value)}
          />
        )}
        {isAdmin && <HobbyDialog onSubmit={createHobby} />}
       
      </div>

      {filteredHobbys.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredHobbys.map(hb => (
            <HobbyCard
              key = {hb._id}
              hobby = {hb}
              deleteHobby = {deleteHobby}
              updateHobby = {updateHobby}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Hobbys found</p>
        </div>
      )}
    </div>
  );
}

