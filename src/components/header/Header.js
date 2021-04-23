//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaRegHeart } from "react-icons/fa";
import { 
  FiCode, 
  FiGithub, 
  FiArrowLeftCircle, 
  FiArrowRightCircle, 
  FiLinkedin, 
  FiHome,
  FiKey 
} from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const menuItemClick = (data) => {
    if(data !== activeMenu) setActiveMenu(data);
  }

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Momo" : "Mohammed Elsayed"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={activeMenu === 'home' ? true : false} icon={<FiHome />} onClick={() => menuItemClick('home')}>
                Home
                <Link to='/' />
              </MenuItem>
              <MenuItem active={activeMenu === 'about' ? true : false} icon={<FiKey />} onClick={() => menuItemClick('about')}>
                About Me
                <Link to='/about' />
              </MenuItem>
              <MenuItem active={activeMenu === 'projects' ? true : false} icon={<FiCode />} onClick={() => menuItemClick('projects')}>
                Projects
                <Link to='/projects' />
              </MenuItem>
              <MenuItem active={activeMenu === 'hobby' ? true : false} icon={<FaRegHeart />} onClick={() => menuItemClick('hobby')}>
                Hobbies
                <Link to='/hobbies' />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiGithub />}>
                GitHub
                <a href='https://github.com/Momopeach1' />
              </MenuItem>
              <MenuItem icon={<FiLinkedin />}>
                LinkedIn
                <a href='https://www.linkedin.com/in/mohammed-elsayed-26a5aa182/' />
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;