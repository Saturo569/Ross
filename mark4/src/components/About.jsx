import hand from '../assets/hand.png';


const infos = [
    {value: 'BSIT', label: 'COURSE'},
    {value: '2nd Year', label: 'LEVEL'},
    {value: 'CvSU', label: 'SCHOOL'}
]
function About(){
    return(
        <>
            <section className="about" id="about">
                <div className="about-me">
                    <div className="about-top">
                        <img src={hand} alt="Kamay ni Ironman" className="picture"/>

                        <div className="about-text">
                            <h1>Justin Ross Estacio</h1>
                            <p>I'm a 2nd year Information Technology student who loves building things for the web.</p>
                            <p>Right now I'm learning C#, databases, and front-end design, and turning small ideas into projects I can show.</p>
                        </div>
                    </div>

                    <div className="short-info">
                        {infos.map((info) =>(
                            <div className="info" key={info.label}>
                                <strong>{info.value}</strong>
                                <span>{info.label}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="click-here">   
                        <p style={{ fontSize: '20px', color: '#FFC107', fontStyle: 'italic'}}>To learn more about me...</p>
                        <a href="#">Click here</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;