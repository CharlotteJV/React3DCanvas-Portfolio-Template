import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computer = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // thiết lập ánh sánsg
    <mesh>


      <hemisphereLight intensity={1} groundColor={'black'} />


      <spotLight

        position={[-20, 50, 10]}

        angle={0.12}

        penumbra={1}

        intensity={1}

        castShadow

        shadow-mapSize={1024}

      />


      <pointLight

        intensity={1}

      />


      <primitive

        object={computer.scene}

        scale={isMobile ? 0.7 : 0.75}

        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}

        rotation={[-0.01, -0.01, 0]}

      />


    </mesh>
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {


    // thêm sự kiện lắng nghe cho sự thay đổi kích thước màn hình
    const mediaQuery = window.matchMedia("(max-width: 500px)");


    // thiết lập giá trị của ismMobile
    setIsMobile(mediaQuery.matches);


    // thực hiện thao tác gọi hàm để xử lí các thay đổi
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }


    // đăng kí sự kiện cho sự thay đổi
    mediaQuery.addEventListener("change", handleMediaQueryChange);


    // hủy sự kiện cho sự thay đổi
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      frameloop="demand"


      shadows

      // dpr là mật độ sắc nét trên các thiết bị khác nhau
      dpr={[1, 2]}


      // góc nhìn 
      camera={{ position: [20, 3, 2], fov: 25 }}


      // lưu trữ bộ đệm vẽ
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>


        <OrbitControls

          enableZoom={false} // tắt zoom
          maxPolarAngle={Math.PI / 2} // góc nhìn tối đa 90*
          minPolarAngle={Math.PI / 2} // góc nhìn hẹp nhất 90*

        />

        {/* truyền giá trị */}
        <Computer isMobile={isMobile} />


      </Suspense>


      <Preload all />


    </Canvas>
  );
};
export default ComputersCanvas;