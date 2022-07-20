import Hero from '../components/hero';
import Howto from '../components/Howto';
import Slider from '../components/Slider';
import Team from '../components/Team';
import Welcome from '../components/welcome';

const HomePage = () => {
    return ( 
        <>
            <Hero />
            <Welcome />
            <Slider />
            <Howto/>
            <Team />
        </>
     );
}
 
export default HomePage;