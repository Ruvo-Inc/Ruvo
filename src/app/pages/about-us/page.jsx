import BannerImage from "../../assets/images/banner.png";
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import Heading from '../../components/UI/Heading/Heading';
import Hero from "../../components/UI/Hero/Hero";


function AboutUs() {
    return (
        <Hero img={BannerImage}>
          <Heading headingStyle='h1' className='text-center text-white'>  About Us</Heading>
      </Hero>
    );
}

export default AboutUs;
