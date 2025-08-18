import ServiceCard from "./ServiceCard";
import ProjectDialog from "./ServiceDialog";
import { getUserRole } from "@/utils/auth";
import { Input } from "@/components/ui/input";


export default function Service({ service =[], deleteService, createService, updateService, serviceQuery, setServiceQuery }) {
  
  const userRole = getUserRole();
  const isAdmin = userRole === "admin";

  let filtered = [...service];

  const filteredProjects = serviceQuery.trim()
    ? filtered.filter(p => p.title?.toLowerCase().includes(serviceQuery.toLowerCase()))
    : filtered;



  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-wrap bg-gray-100 rounded gap-5 mb-5">
        {isAdmin && (
          <Input
            className="bg-gray-200 max-w-100 border-1 border-solid border-gray-700"
            placeholder="Search..."
            value={serviceQuery}
            onChange={e => setServiceQuery(e.target.value)}
          />
        )}
        {isAdmin && <ProjectDialog onSubmit={createService} />}
       
      </div>

      {filteredProjects.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map(serv => (
            <ServiceCard
              key={serv._id}
              service={serv}
              deleteService={deleteService}
              updateService={updateService}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Services found</p>
        </div>
      )}
    </div>
  );
}

