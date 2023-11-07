import TopNavbar1 from "./components/TopNavbar1";
import "./App.css";
import TopNavbar2 from "./components/topNavbar2";
import HorizontalComp2 from "./components/HorizontalComp2";
import HorizontalComp1 from "./components/HorizontalComp1";
import HorizontalLast from "./components/HorizontalLast";
import TopNavbar3 from "./components/TopNavbar3";
import VerticalLong from "./components/VerticalLong";
import VerticalSmall from "./components/verticalSmall";
import HorizontalComp from "./components/HorizontalComp";
import VerticalmidComp from "./components/VerticalmidComp";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <TopNavbar1 />
      <Box sx={{ display: "flex" }}>
        <HorizontalComp1 />
        <TopNavbar2 />
      </Box>
      <TopNavbar3 />
      <Box sx={{ display: "flex" }}>
        <HorizontalComp2 />
        <VerticalSmall />
        <VerticalLong />
        <Box>
          <VerticalmidComp />
          <HorizontalComp />
          <HorizontalLast />
        </Box>
      </Box>
    </div>
  );
}

export default App;
