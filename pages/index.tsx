// pages/index.tsx
import dynamic from "next/dynamic";

// Dynamically import the A-Frame component to avoid SSR issues
const AFrameScene = dynamic(() => import("../components/AFrameScene"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div>
      {/* <h1>A-Frame Virtual Tour</h1> */}
      <AFrameScene />
    </div>
  );
};

export default Home;
