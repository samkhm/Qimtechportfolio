import Home from "./Home";
import Users from "./Users";
import Projects from "../components/adminComponents/Projects";
import Services from "../components/adminComponents/Service";
import Skills from "../components/adminComponents/Skills";
import Hobby from "../components/adminComponents/Hobby";
import Testimony from "../components/adminComponents/Testimony";
export default function MainContent({users, activeSection, createProject, project, deleteProject, updateProject, toggleCompleted, query, setQuery, 
    service, createService, serviceQuery, setServiceQuery, deleteService, updateService,
skill, skillQuery, setSkillQuery, deleteSkill, createSkill, updateSkill,
hobby, hobbyQuery, setHobbyQuery, deleteHobby, createHobby, updateHobby, testy }){
    let content;
    switch(activeSection){
        case 'home':
            content = <div className="dark:bg-gray-300"> <Home /> </div>
            break;
        case 'users':
            content = <div className="bg-gray-700 p-2 flex flex-wrap man-w-full overflow-x-scroll"> <Users users={users}/></div>
            break;
        case 'projects':
            content = <div className="dark:bg-gray-300"> <Projects createProject={createProject} deleteProject={deleteProject} updateProject={updateProject}
            query={query} setQuery={setQuery} toggleCompleted={toggleCompleted}
            project={project}/> </div>
            break;
        case 'services':
            content = <div className="dark:bg-gray-300"> <Services service = {service} createService={createService} serviceQuery={serviceQuery} setServiceQuery={setServiceQuery} deleteService={deleteService} updateService={updateService}/> </div>
            break;
        case 'skills':
            content = <div className="dark:bg-gray-300"> <Skills skill = {skill} createSkill={createSkill} skillQuery={skillQuery} setSkillQuery={setSkillQuery} deleteSkill={deleteSkill} updateSkill={updateSkill}/> </div>
            break;
        case 'hobbies':
            content = <div className="dark:bg-gray-300"> <Hobby hobby = {hobby} createHobby={createHobby} hobbyQuery={hobbyQuery} setHobbyQuery={setHobbyQuery} deleteHobby={deleteHobby} updateHobby={updateHobby}/> </div>
            break;
        case 'testimonials':
            content = <div className="dark:bg-gray-300"> <Testimony testy = {testy}/> </div>
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