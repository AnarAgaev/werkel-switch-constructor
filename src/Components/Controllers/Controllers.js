import { useState } from "react";

import NavTabs from "../NavTabs";
import NavItems from "../NavItems";

const Controllers = () => {
  const [activeTab, setActiveTab] = useState('borders'); // borders, devices, backgrouns

  return(
    <div className="constructor__column constructor__column_controllers">
      <div className="constructor__controllers">
        <NavTabs activeTab={activeTab} 
          handleTabClick={setActiveTab} />
        <NavItems activeTab={activeTab} />        
      </div>
    </div>
  );
}

export default Controllers;