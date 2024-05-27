import TitleBar from './TitleBar';
import NavBar from './NavBar';
import Impact from './Impact';

function Home(){
    return(
        <div className='homeContainer'>
            <TitleBar />
            <NavBar />
            <Impact />
        </div>
    );
}

export default Home;