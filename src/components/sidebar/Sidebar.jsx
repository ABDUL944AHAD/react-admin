import Logo from "../../images/logo.png";
import "./sidebar.css";
import { UilEstate } from "@iconscout/react-unicons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt , UilBars } from "@iconscout/react-unicons";
import { useState } from "react";

function Sidebar() {

  const[selected , setSelected] = useState(0)
  const[expanded , setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
      // transition: {
      //   type: 'spring',
      //   stiffness: 500,
      //   damping: 30,
      // },
    },
    false:{
      left:'-60%',
    }
  }

  return (
    <>
      <div  className="bars" style={expanded ? { left: '60%' } : { left: '5%' }}
      onClick={() => setExpanded(!expanded)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    <motion.div className="Sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth <= 768 ? `${expanded}` : '' }
    >
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
    </motion.div>
    </>
  );
}

export default Sidebar;
