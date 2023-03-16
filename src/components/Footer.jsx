import '../styles/Footer.css';

function Footer (){
    let date = new Date().now;
    return(
        <div className="footer">
            <div className="footer-content">
                <p>&copy; copyright MacroTech  {date}</p>
            </div>
        </div>
    );
}
export default Footer;