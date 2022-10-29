/* eslint react/no-unescaped-entities */

import Acomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import ParticlesBG from "../components/ParticlesBG/ParticlesBG"

const Home:React.FC = () => {
  return (
    <Layout>

      <ParticlesBG />
      <Section grid>
        <Hero />

        {/* <BgAnimation /> */}


      </Section>
      <Projects />
      <Technologies />
      {/* <Timeline /> */}
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;