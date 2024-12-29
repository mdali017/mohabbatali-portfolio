import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

// Sample project data
const ProjectData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Replace this with project image URL
    name: "Restro Queen",
    description:
      "Restro Queen is an innovative MERN-based project designed to revolutionize the restaurant industry's digital landscape.",
    liveLink: "https://restro-queen-45b4c.web.app",
    clientCode: "https://github.com/mdali017/restro-queen-client",
    serverCode: "https://github.com/mdali017/restro-queen-server",
    userCred: "info@gmail.com / 123456",
    adminCred: "info10@gmail.com / 123456",
  },
];

export default function ProjectDrawer({ state, setState, selectedProject }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100vw" }} // Full width for the content inside the drawer
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Close Button */}
      <Box display="flex" justifyContent="flex-end" p={2}>
        <button
          onClick={toggleDrawer(anchor, false)}
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 shadow-md flex items-center justify-center"
        >
          x
        </button>
      </Box>

      <List>
        {ProjectData.map((project) => (
          <ListItem key={project.id} disablePadding>
            <Box className="p-4 w-full">
              <img
                src={selectedProject.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <Divider className="my-4" />

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Live Link:</span>{" "}
                  <a
                    href={project.liveLink}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveLink}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Client Code:</span>{" "}
                  <a
                    href={project.clientCode}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.clientCode}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Server Code:</span>{" "}
                  <a
                    href={project.serverCode}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.serverCode}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">User Credentials:</span>{" "}
                  {project.userCred}
                </p>
                <p>
                  <span className="font-semibold">Admin Credentials:</span>{" "}
                  {project.adminCred}
                </p>
              </div>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Only open the drawer from the right side */}
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>Open Right Drawer</Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: {
              width: "100vw", // Full width for the drawer itself
            },
          }}
          transitionDuration={{ enter: 1000, exit: 700 }} // Smooth and slower transition
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
