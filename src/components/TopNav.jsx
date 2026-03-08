import Logo from "../assests/logo.png"

export default function TopNav(props){
    return(
        <div className="top-nav">
            <div className="left">
                
                <p>Hello</p>
                <h2>{props.firstName}</h2>
            </div>
            <div className="right">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}