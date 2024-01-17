import "./about.css"
import about_img from "../../images/about.jpg"
import { Route } from "react-router-dom"

export default function About(){
    return(
        <div className="about_main" id="about">
            <img src={about_img} className="about_img" />

            <div className="about_text">
                <span className="section">About Me</span>

                <span className="title">
                    A dedicated Junior Developer and Student 💾
                </span>

                <span className="description">
                    I'm constant and proactive in learning new tech and to adapt to new challenges
                    in the scope of software development.  I have experience developing with Java in
                    different projects, but the most recent was a mobile expense management application
                    that has contact with the database and the maps API, for example. Currently I have
                    specialized in ReactJs, NodeJs and soon after I intend to dive into the waters of Typesricpt.
                </span>
            </div>
        </div>
    )
}