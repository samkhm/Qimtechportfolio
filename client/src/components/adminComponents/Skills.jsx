import SkillCard from "./SkillCard";
import SkillDialog from "./SkillDialog";
import { getUserRole } from "@/utils/auth";
import { Input } from "@/components/ui/input";


export default function Skills({ skill = [], deleteSkill, createSkill, skillQuery = " ", setSkillQuery }) {
  
  const userRole = getUserRole();
  const isAdmin = userRole === "admin";

  let filtered = [ ...skill];

  const filteredSkills = skillQuery.trim()
    ? filtered.filter(p => p.title?.toLowerCase().includes(skillQuery.toLowerCase()))
    : filtered;



  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-wrap bg-gray-100 rounded gap-5 mb-5">
        {isAdmin && (
          <Input
            className="bg-gray-200 max-w-100 border-1 border-solid border-gray-700"
            placeholder="Search..."
            value={skillQuery}
            onChange={e => setSkillQuery(e.target.value)}
          />
        )}
        {isAdmin && <SkillDialog onSubmit={createSkill} />}
       
      </div>

      {filteredSkills.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map(sk => (
            <SkillCard
              key={sk._id}
              skill={sk}
              deleteSkill={deleteSkill}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Skills found</p>
        </div>
      )}
    </div>
  );
}

