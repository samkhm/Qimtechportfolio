import AdminNavbar from "@/components/AdminNavbar";
import Sidebar from "@/components/Sidebar";
import AdminMainContent from "@/components/AdminMainContent";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import API from "@/services/api";

export default function AdminDashboard(){
    const [activeSection, setActiveSection] = useState('home');
    const [project, setProject] = useState([]);
    const [service, setService] = useState([]);
    const [query, setQuery] = useState("");
    const [serviceQuery, setServiceQuery] = useState("");
    
    // creating of projects
    const loadProjects = async () =>{
        try {
            const res = await API.get(`/admin_operations/project?search=${encodeURIComponent(query)}`);
            setProject(res.data);
            
        } catch (error) {
            console.log("Fetching project error", error);
            
        }
    }   

        const createProject = async (payload) => {
        try {
            const res = await API.post("/admin_operations/project", payload);
            setProject(prev => [res.data, ...prev]);

            const message = res?.data?.message || "Project Created";
            toast.success(message);

        } catch (error) {
            console.log("Error is", error);
            const message = error?.response?.data?.message || "Project Failed!";
            toast.error(message);
        }
        };

        const deleteProject = async (id) =>{
            try {
                await API.delete(`/admin_operations/project/${id}`);
                setProject(prev => prev.filter(p => p._id !== id));
                toast("Project deleted");
                
            } catch (error) {
                console.log("Project deleting error", error);
                
            }
        }
            const updateProject = async (id, payload) => {
            try {
                const res = await API.put(`/admin_operations/project/${id}`, payload);
                setProject(prev => prev.map(p => p._id === id ? res.data : p));
                toast.success(res?.data?.message ?? "Project Updated");
            } catch (error) {
                console.error(error);
                toast.error(error?.response?.data?.message ?? "Failed to update project");
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

        useEffect(() =>{
        loadProjects();
        loadServices();
         }, []);

    return(
        <div>
            <AdminNavbar  />
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] h-screen">
                <Sidebar activeSection = {activeSection} setActiveSection = {setActiveSection}/>
                <AdminMainContent activeSection = {activeSection} createProject = {createProject} 
                query={query} setQuery={setQuery} project={project} deleteProject={deleteProject} updateProject={updateProject}
                service ={service} createService={createService} serviceQuery={serviceQuery} setServiceQuery={setServiceQuery}/>
            </div>
        </div>
    )
}