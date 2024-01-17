import projectData from "../../projectData"
import ProjectCard from "./ProjectCard"
import "./portfolio.css"

export default function Portfolio(){
    let id = 0
    let projectCards = projectData.map(function(project){
        id++
        return(
            <ProjectCard
                key={id}
                id={"project_picture"+id}
                name={project.name}
                date={project.date}
                picture={project.picture}
                description={project.description}
                tech={project.tech}
                github_link={project.github_link}
                demo_link={project.demo_link}
            />
        )
    })

    return(
        <>
            <div className="portfolio_main" id="portfolio">
                <div className="portfolio_header">
                    <span className="section">Portfolio</span>
                    <span className="title">
                        Each project is a chance to improve 🗻
                    </span>
                </div>

                {projectCards}
            </div>
        </>
    )
}