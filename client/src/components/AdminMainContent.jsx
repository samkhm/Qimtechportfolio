import Home from "./Home";
import Users from "./Users";
import Projects from "../components/adminComponents/Projects";
import Services from "../components/adminComponents/Service";
export default function MainContent({ activeSection, createProject, project, deleteProject, updateProject, query, setQuery, 
    service, createService, serviceQuery, setServiceQuery }){
    let content;
    switch(activeSection){
        case 'home':
            content = <div className="dark:bg-gray-300"> <Home /> </div>
            break;
        case 'users':
            content = <div className="bg-gray-700 p-2 flex flex-wrap man-w-full overflow-x-scroll"> <Users /></div>
            break;
        case 'projects':
            content = <div className="dark:bg-gray-300"> <Projects createProject={createProject} deleteProject={deleteProject} updateProject={updateProject}
            query={query} setQuery={setQuery}
            project={project}/> </div>
            break;
        case 'services':
            content = <div className="dark:bg-gray-300"> <Services service = {service} createService={createService} serviceQuery={serviceQuery} setServiceQuery={setServiceQuery}/> </div>
            break;
        case 'skills':
            content = <div className="dark:bg-gray-300"> 4 </div>
            break;
        case 'hobbies':
            content = <div className="dark:bg-gray-300"> 4 </div>
            break;
        case 'testimonials':
            content = <div className="dark:bg-gray-300"> 4 </div>
            break;
        
        default:
            content = <div>Select a section from the side bar</div>
    }

    return(
        <div className="p-6 bg-gray-100 w-full">
            <h1 className="text-xl font-semibold mb-4 capitalize dark:text-black">{activeSection}</h1>
            <div>{content}</div>
        </div>
    );
};