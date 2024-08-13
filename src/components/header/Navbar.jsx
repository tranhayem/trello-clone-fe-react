import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ModeSwitch from "../modeSwitch/ModeSwitch";
import Notification from "../notification/Notification";
import SearchComponent from "../search/SearchComponent";
import WorkspacesComponent from "../workspaces/WorkspacesComponent";
import AccountProfiles from "./menus/AccountProfiles";
import Recently from "./menus/Recently";
import Starred from "./menus/Starred";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Task Board
        </Typography>
        <WorkspacesComponent />
        <Recently />
        <Starred />

        <Box sx={{ flex: 1 }} />

        <Box sx={{ mx: 1 }}>
          <SearchComponent />
        </Box>
        <Box>
          <ModeSwitch />
        </Box>
        <Box sx={{ mx: 1 }}>
          <Notification />
        </Box>
        <Box>
          <AccountProfiles />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
