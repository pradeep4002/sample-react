import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
        <section>
            <div>
                Welcome To My Application 
                </div>    
                <button> <Link to={'/Login'}>Get Started</Link>
                </button>
        </section>
        </>
    );
}
