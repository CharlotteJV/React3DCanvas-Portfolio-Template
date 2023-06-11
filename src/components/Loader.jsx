import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {


  const { progress } = useProgress();


  return (
    // hiệu ứng quá trình tải
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

      {/* hiệu ứng canvas-loader */}
      <span className='canvas-loader'></span>
      {/* phần tử con */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >

        {progress.toFixed(2)}%
      </p>

    </Html>
  );
};

export default CanvasLoader;