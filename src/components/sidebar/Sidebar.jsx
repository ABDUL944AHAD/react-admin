import Logo from "../../images/logo.png";
import "./sidebar.css";
import { UilEstate } from "@iconscout/react-unicons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useState } from "react";

function Sidebar() {

  const[selected , setSelected] = useState(0)

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active' : 'menuItem'}
            key={index}
            onClick={()=> setSelected(index)}
            >
              {/*  in the below item.icon place them if necessary className='menu-icon' size='2rem' */}
              <item.icon size="2rem" />
              <span> {item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt size="2rem" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
