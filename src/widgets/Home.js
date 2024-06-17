import TitleBar from './TitleBar';
import NavBar from './NavBar';
import Impact from './Impact';

function Home(){
    return(
            <div className='homeContainer'>
                {/* <TitleBar /> */}
            <div className='navBackgroundCombo' sx={{ position: "relative" }}>
                <NavBar />
                <Impact />
            </div>
            
        </div>
    );
}

export default Home;