
function Projects (){
    return(
        <div className="Projects">
            <div className="project-item">
                <h2>Pasteur Pharma</h2>
                <p>A mobile application which track records of employee visits to doctors in medicine manufacturing company.<br />
                A user submit visit with a doctor and fare reports is generated based on his/her completed visits
                </p>
                <img src="./images/heart.png" width="100px" height="50px" alt="medicalimage" />
            </div>
            <div className="project-item">
                <h2>Pasteur Dashboard</h2>
                <p>Dashboard for medicine company to add users, posts, stations and generate their monthly fares report. 
                    <br />Upon submitting a visits by a user with  doctors. fares are calculated w.r.t user and doctor stations and user post
                </p>
                <img src="./images/joint.png" width="100px" height="50px" alt="medicalimage" />
            </div>
            <div className="project-item">
                <h2>Healthe</h2>
                <p>this is mobile application which store a user medical information about their prescription, doctors visits and test. 
                    <br />A User save his/her data when he/she visit a doctor for some medical condition then add the data to the system and 
                    <br />later a user can view its own medical data. it can be refers to another doctor by making some comments<br />
                    or changing the treatment. a user can submit their data to any doctor available in particular department and doctors submit 
                    their suggestion or treatment.
                </p>
                <img src="./images/stomach.png" width="100px" height="50px" alt="medicalimage" />
            </div>
            <div className="project-item">
                <h2>Vehicle Management System</h2>
                <p>I am graduated in Computer Science in 2015. I have on done my final year project in ASP.NET Web Forms, html, css, js. <br />
                My final year project was management system i.e vehicle registration system. the system used to track info of a <br />
                car including plate/registration number, chasis, engine number, previous, current owners and transfer of ownership<br />
                Car registration number/ plate number was used as identification number throught out history. i.e when were the car <br />
                belong to which user and current status. 
                </p>
            </div>
        </div>
    );
}
export default Projects;