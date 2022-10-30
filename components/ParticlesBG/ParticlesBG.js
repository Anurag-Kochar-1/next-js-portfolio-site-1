import React,{ useCallback } from 'react'
import Particles from "react-tsparticles"
import {particlesConfig, particlesConfig2} from './config/particles-config'
import { loadFull } from "tsparticles";

const ParticlesBG = () => {

    const particlesInit = useCallback(async (engine) => {

        console.log(engine);
        
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={particlesConfig}
    />
  );
};

export default ParticlesBG