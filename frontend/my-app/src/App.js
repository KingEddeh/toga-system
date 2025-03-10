import { Box, Stack } from "@mui/material"
import SideBar from './components/ui/SideBar';
import Content from "./components/ui/Content";

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
