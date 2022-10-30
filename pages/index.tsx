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
import { useEffect, useState } from 'react';

const Home:React.FC = () => {



  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true)
    console.log(`setHydrated is set to true from index.tsx`);
    
  },[])


  if(!hydrated) return null
  return (
    <Layout>

      <Section grid>
        <Hero />

        {/* <ParticlesBG /> */}
        {/* <BgAnimation /> */}


      </Section>
      
      <Technologies />
      <Projects />
      {/* <Timeline /> */}
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;