import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Allroutes from "./routes/Allroutes.routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Box fontFamily={"cursive"}>
      <Navbar />
      <Allroutes />
      <Footer />
    </Box>
  );
}

export default App;
