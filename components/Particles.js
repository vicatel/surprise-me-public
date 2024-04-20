// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import pConfig from "../app/particlesConfig";
// import { useCallback } from "react";



// const ParticlesComponent = () => {


//     const customInit = useCallback( async (engine) => {
//         // this adds the bundle to tsParticles
//         loadFull(engine);
//       });

//     return <Particles init={customInit} options={pConfig}/>;
// }
 
// export default ParticlesComponent;

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import pConfig, { otherConfig, thirdConfig } from '../app/particlesConfig'

const App = () => {

    
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(() => {
    return {}
  },
    [],
  );

  if (init) {
    return (
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={pConfig}
      />      
    );
  }

  return <></>;
};

export default App;