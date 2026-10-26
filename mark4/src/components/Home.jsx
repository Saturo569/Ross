import hand from '../assets/hand.png';

function Home(){
    return(
        <>
        <section className="home" id="home">
       <div className="intro">
            <h1 className="justin">Justin Ross</h1>
       </div>

       <img src={hand} alt="hand.png"/>
    </section>
        </>
    );
}

export default Home;