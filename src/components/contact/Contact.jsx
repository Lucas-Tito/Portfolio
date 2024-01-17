import "./contact.css"
import mail_icon from "../../images/mail_icon.svg"

export default function Contact(){
    return(
        <>
            <div className="contact_main" id="contact">
                <span className="section">Contact</span>

                <span className="title">
                    Feel free to contact me! 👇
                </span>

                <div className="contact_card">
                    <div className="contact_picture">
                        <img src={mail_icon}/>
                    </div>
                    <div className="contact_info">
                        <span className="contact_title">Mail</span>
                        <span>lucastito.contato@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}