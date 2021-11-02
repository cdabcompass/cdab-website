import React from 'react'

import "./sidebar.css";
import SidebarLink from "./SidebarLink";

function Sidebar(){
  return(
    <div className="sidebar">
        <SidebarLink text="Nos produits" href="/nos_produits" />
        <SidebarLink text="Nos realisations" href="/nos_realisations" />
        <SidebarLink text="Nos locaux" href="/nos_locaux" />
    </div>
  );
}

export default Sidebar;