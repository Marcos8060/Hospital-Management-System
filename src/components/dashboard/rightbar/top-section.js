import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const TopSection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Anchor the menu to the current target (the image)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="flex items-center gap-4 sticky top-0 bg-white md:bg-opacity-30 md:backdrop-filter md:backdrop-blur-lg p-2">
        <div className="flex items-center gap-3 border-r-2 border-black">
          <AiOutlineSearch className="text-2xl cursor-pointer" />
          <RiMessage2Fill className="text-2xl cursor-pointer" />
          <IoMdNotifications className="text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-3">
          <div>
            <img
              onClick={handleClick}
              className="h-8 w-8 rounded-full cursor-pointer"
              src="/images/doc.jpg"
              alt=""
            />
          </div>
          <div className="text-xs">
            <p className="font-semibold">Dr. Patrick</p>
            <p>Surgeon</p>
          </div>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </section>
    </>
  );
};

export default TopSection;
