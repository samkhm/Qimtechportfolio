import AdminNavbar from "@/components/AdminNavbar";
import Sidebar from "@/components/Sidebar";
import AdminMainContent from "@/components/AdminMainContent";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import API from "@/services/api";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { id } from "zod/v4/locales";
import { TestTubes } from "lucide-react";

export default function AdminDashboard(){
    const [activeSection, setActiveSection] = useState('home');
    const [project, setProject] = useState([]);
    const [service, setService] = useState([]);
    const [query, setQuery] = useState("");
    const [serviceQuery, setServiceQuery] = useState("");
    const [users, setUser] = useState([]);
    const [skill, setSkill] = useState([]);
    const [skillQuery, setSkillQuery] = useState("");
    const [hobby, setHobby] = useState([]);
    const [hobbyQuery, setHobbyQuery] = useState("");
    const [testy, setTesty] = useState([]);
    

    //loading users
    const loadUser = async () =>{
        try {
            const res = await API.get("/auth/users");
            setUser(res.data);
            
            
        } catch (error) {
            console.log("Fetching users error", error);
            
        }
    }
    
    // creating of projects
const loadProjects = async () => {
    
  try {
    const res = await API.get(
      `/admin_operations/project?search=${encodeURIComponent(query)}`
    );
console.log("Projects are", res.data);
    // access res.data.projects instead of res.data
    setProject(res.data.projects || []);
    console.log("projects:", res.data.projects);
  } catch (error) {
    console.error("Fetching project error:", error);
  }
};
  

const createProject = async (newProject) => {
  try {
    // Convert to FormData
    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("githubLink", newProject.githubLink);
    formData.append("liveLink", newProject.liveLink);

    // Must match backend field name "file"
    if (newProject.imageFile) {
      formData.append("file", newProject.imageFile);
    }

    // Send POST request
    const res = await API.post("/admin_operations/project", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Prepend the newly created project to state
    setProject((prev) => [res.data.project, ...prev]);

    toast.success(res?.data?.message || "Project Created");
  } catch (error) {
    console.error("Error creating project:", error);
    toast.error(error?.response?.data?.message || "Project Failed!");
  }
};

 const deleteProject = async (id) => {
  try {
    await API.delete(`/admin_operations/project/${id}`);
    setProject(prev => prev.filter(p => p._id !== id));
    toast.success("Project deleted");
  } catch (error) {
    console.log("Project deleting error", error);
    toast.error("Failed to delete project");
  }
};

        
const updateProject = async (id, payload) => {
  try {
    let res;

    if (payload instanceof FormData) {
      res = await API.put(`/admin_operations/project/${id}`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      res = await API.put(`/admin_operations/project/${id}`, payload);
    }

    const updatedProject = res.data; // ✅ directly the project object

    setProject((prev) =>
      prev.map((p) => (p._id === id ? { ...p, ...updatedProject } : p))
    );

    toast.success("Project updated!");
  } catch (error) {
    console.error("Update Project Error:", error);
    toast.error(error?.response?.data?.message || "Failed to update project");
  }
};







            const toggleCompleted = async (id, e) => {
                console.log("Toggle id", id);
                                
                const newCompleted = e.target.checked;
                try {
                    const res = await API.put(`/admin_operations/project_complete/${id}`, {
                    completed: newCompleted,
                    });
                    setProject(prev => prev.map(p => p._id === id ? res.data.project : p));
                } catch (err) {
                    
                    console.log("Completion error", err)
                }
                };


          


        //  creating of services

        const createService = async (payload) => {
        try {
            const res = await API.post("/admin_operations/services", payload);
            setService(prev => [res.data, ...prev]);

            const message = res?.data?.message || "Service Created";
            toast.success(message);

        } catch (error) {
            console.log("Error is", error);
            const message = error?.response?.data?.message || "Service Failed!";
            toast.error(message);
        }
        };

           const loadServices = async () =>{
        try {
            const res = await API.get(`/admin_operations/services?search=${encodeURIComponent(serviceQuery)}`);
            setService(res.data);
            
        } catch (error) {
            console.log("Fetching services error", error);
            
        }
    }

    const updateService = async (id, payload) =>{
        try {
            const res = await API.put(`/admin_operations/services/${id}`, payload);
            setService(prev => prev.map(s => s._id === id ? res.data : s));
            toast.success(res?.data?.message || "Service updated");
            
        } catch (error) {
            console.log("Error is", error);
            const message = error?.response?.data?.message || "Service Failed to update!";
            toast.error(message);

            
        }

    }
    const deleteService = async (id) =>{
        try {
          const res =  await API.delete(`/admin_operations/services/${id}`);
            setService(prev => prev.filter(s => s._id !== id));
            toast.success(res?.data?.message || "Service deleted");
        } catch (error) {
             console.log("Error is", error);
            const message = error?.response?.data?.message || "Service Failed to delete!";
            toast.error(message);
            
        }
    }

    //creating skills

    const createSkill = async (payload) =>{
        try {
            const res = await API.post("/admin_operations/skills", payload);
            setSkill(prev => [res.data, ...prev]);
            toast.success(res?.data?.message || "Skill added");
            
        } catch (error) {
            const message = error?.response?.data?.message || "Skill addition failed";
            toast.error(message);
            
        }
    }

    const deleteSkill = async (id) =>{
        try {
         const res = await API.delete(`/admin_operations/skills/${id}`);
            setSkill(prev => prev.filter(s => s._id !== id));
            const message = res?.data?.message || "Skil deleted";
            toast.success(message)
            
        } catch (error) {
            const message = error?.response?.data?.message || "Failed to delete";
            toast.error(message);
            
        }
    }

    const loadSkills = async () =>{
        try {
            const res = await API.get(`/admin_operations/skills?search=${encodeURIComponent(skillQuery)}`);
            setSkill(res.data);
                                    
        } catch (error) {
            console.log("Skill fetch error : ",error)
            
        }
    }


    const updateSkill = async (id, payload) =>{
        try {
            const res = await API.put(`/admin_operations/skills/${id}`, payload);
            setSkill(prev => prev.map(s => s._id === id ? res.data : s));
            const message = res?.data?.message || "Skill updated";
            toast.success(message);
            
        } catch (error) {

            const message = error?.response?.data?.message || "Failed to update skill";
            toast.error(message);
            
        }
    }

    //Hobbies
    const createHobby = async (payload) =>{
        try {
            const res = await API.post("/admin_operations/hobby", payload);
            setHobby(prev => [res.data, ...prev]);
            const message = res?.data?.message || "Hobby created";            
        } catch (error) {
            const message = error?.response?.data?.message || "Hobby failed to be added";
            toast.error(message);
            
        }
    }
    const loadHobby = async () =>{
        try {
            const res = await API.get(`/admin_operations/hobby?search=${encodeURIComponent(hobbyQuery)}`);
            setHobby(res.data);
           
            
        } catch (error) {
            console.log("Error fetching hobbies", error);
            
        }
    }
    const updateHobby = async (id, payload) =>{
        try {
            const res = await API.put(`admin_operations/hobby/${id}`, payload);
            setHobby(prev => prev.map(h => h._id === id ? res.data : h));
            const message = res?.data?.message || "Hobby updated";
            toast.success(message);
            
        } catch (error) {
            const message = error?.data?.response?.message || "Failed to update hobby";
            toast.error(message);
            
        }
    }
    const deleteHobby = async (id) =>{
        try {
            const res = await API.delete(`/admin_operations/hobby/${id}`);
            setHobby(prev => prev.filter(h => h._id !== id));
            const message = res?.data?.message || "Hobby deleted";
            toast.success(message);
            
        } catch (error) {
            const message = error?.data?.response?.message || "Failed to delete hobby";
            toast.error(message);
            
        }
    }

    //load messages
            const loadTestimony = async () =>{
        try {
            const res = await API.get("/admin_operations/testimony");
            setTesty(res.data);
           
            
        } catch (error) {
            console.log("Fetching Testimny error", error);
            
        }
    }

    const approveTest = async (id, approved) => {
        try {
            const res = await API.put(`/admin_operations/testimony/${id}`, {
                approved : !approved
            });
            setTesty(prev => prev.map(test => test._id === id ? res.data : test));
            
        } catch (error) {
            console.log("Aprroving Testy error", error);
            
        }
        
    }

    const deleteTest = async (id) =>{
        try {
            const res = await API.delete(`admin_operations/testimony/${id}`);
            setTesty(prev => prev.filter(test => test._id !== id));
            const message = res?.data?.message || "Message deleted";
            toast.success(message);
            
        } catch (error) {
            const message = error?.data?.response?.message || "Failed to delete";
            toast.error(message);
            
        }
    }
        useEffect(() =>{
        loadUser();
        loadProjects();
        loadServices();
        loadSkills();
        loadHobby();
        loadTestimony();
         }, []);

    return(
        <div>
            <AdminNavbar  />
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] h-screen">
                <Sidebar activeSection = {activeSection} setActiveSection = {setActiveSection}/>
                <AdminMainContent activeSection = {activeSection} createProject = {createProject} 
                users = {users}
                query={query} setQuery={setQuery} project={project} deleteProject={deleteProject} updateProject={updateProject} toggleCompleted={toggleCompleted} 
                service ={service} createService={createService} updateService={updateService} deleteService={deleteService} serviceQuery={serviceQuery} setServiceQuery={setServiceQuery}
                skill={skill} createSkill={createSkill} updateSkill={updateSkill} deleteSkill={deleteSkill} skillQuery={skillQuery} setSkillQuery={setSkillQuery}
                hobby={hobby} createHobby={createHobby} updateHobby={updateHobby} deleteHobby={deleteHobby} hobbyQuery={hobbyQuery} setHobbyQuery={setHobbyQuery}
                testy={testy} approveTest={approveTest} deleteTest={deleteTest}/>
            </div>
        </div>
    )
}