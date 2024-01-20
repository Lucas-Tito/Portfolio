import "./articles.css"
import arrow_icon from "../../images/arrow.svg"

export default function Articles(){
    return(
        <>
            <div className="articles_main">
                <span className="title">I write, sometimes</span>
                <span className="description">Currently I'm working on an article about software transparency and it will be further developed on my college final paper</span>
                
                <div className="btn" onClick={window.alert("Coming Soon")}>
                    Read my Articles
                    <img src={arrow_icon} />
                </div>
            </div>
        </>
    )
}