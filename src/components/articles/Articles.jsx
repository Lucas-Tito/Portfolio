import "./articles.css"
import arrow_icon from "../../images/arrow.svg"

export default function Articles(){
    return(
        <>
            <div className="articles_main">
                <div className="text">
                    <span className="title">I write, sometimes</span>
                    <span className="description">
                        Currently I'm working on an article about software transparency and it will be further developed on my college final paper
                    </span>
                </div>
                
                <div className="btn" onClick={()=>window.alert("Coming Soon")}>
                    Read my Articles
                    <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow"><path fill="none" stroke="#2D2E32" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                </div>
            </div>
        </>
    )
}