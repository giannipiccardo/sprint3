import "./Footer.css"

function Footer(theme) {
    return (
        <div className={`footer-container ${theme === "dark" ? "dark-mode footer-dark-mode" : "light-mode footer-light-mode "}`}>
            <span>Full Stack Developer Bootcamp</span><br />
            <span>Coded by Gianni Piccardo</span>
        </div>
    );
}

export default Footer;