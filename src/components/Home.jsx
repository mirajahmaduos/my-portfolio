import '../styles/Home.css';

function Home (){
    return(
        <div className="home">
            <section className="bio">
                <h2>My Name is Miraj Ahmad!</h2>
                <p>I am Backend engineer and also working in reactjs application</p>
                <img src="./images/miraj.jpg"  alt="profile-pic" />
            </section>
            <section className="about-me">
                <p>I am graduated in Computer Science in 2015. I have on done my final year project in ASP.NET Web Forms, html, css, js. <br />
                My final year project was management system i.e vehicle registration system. In 2016 i worked in csharp.net windows form.
                In 2020 & 2021 i revised html,css,bootstrap,js,php,asp.net mvc. In 2022 i started nodejs and reactjs. In nodejs 
                i completed two projects Healthe (mobile app which store user medical data) and pasteur pharma (medicine manufacturing compnay)
                which track their employees sales based on their visits to doctors. In ReactJs i completed a dashboard for 
                the pasteur pharma.
                </p>
            </section>
        </div>
    );
}
export default Home;