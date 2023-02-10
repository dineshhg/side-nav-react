import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";

function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        breakPoint="sm"
        transitionDuration={200}
        backgroundColor="rgb(256, 256, 256)"
        rtl={false}
        style={{ height: "100vh" }}
      >
        {/* {!broken && ( */}
        <Menu>
          <MenuItem
            onClick={() => {
              toggle();
            }}
            icon={<MenuOutlinedIcon />}
          >
            RESOURCE TYPES
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Project Types</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Projects</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Frameworks</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Robots</MenuItem>
        </Menu>
        {/* )} */}
      </Sidebar>
      <main>
        <h1
          style={{ color: "white", marginLeft: "2rem"}}
        >
          Dinesh's Pro Slider
        </h1>
      </main>
    </div>
  );
}

export default App;
