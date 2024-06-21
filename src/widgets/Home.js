import NavBar from "./NavBar";
import Impact from "./Impact";
import OurMission from "./OurMission";
import OurCompass from "./OurCompass";
import { Box } from "@mui/material";
import Achievements from "./Achievements";

function Home() {
  return (
    <Box className="homeContainer">
      <Box className="navBackgroundCombo" sx={{ position: "relative" }}>
        <NavBar />
        <Impact />
        <OurMission />
        <OurCompass />
        <Achievements />
      </Box>
    </Box>
  );
}

export default Home;
