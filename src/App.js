import Box from "./components/Box";
import { Canvas, ambientLight, spotLight, pointLight } from "react-three-fiber";
import { Sky } from "@react-three/drei";

import * as THREE from "three";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
        <Sky
          distance={40} // Camera distance (default=450000)
          sunPosition={[0, 1, 0]} // Sun position normal (default=[0, 1, 0])
        />
      </Canvas>
    </div>
  );
}

export default App;
