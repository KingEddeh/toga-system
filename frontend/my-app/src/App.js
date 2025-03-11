import { Box, Stack } from "@mui/material"
import SideBar from './components/SideBar';
import Content from "./components/Content";

function App() {
  return (
    <Box>
      <Stack direction='row' spacing={2}>
        <SideBar />
        <Content />
      </Stack>
    </Box>
  );
}

export default App;
