const NavTabs = ({activeTab, handleTabClick}) => {

  const clazz = {
    borders: activeTab === 'borders' ? 'active' : '',
    devices: activeTab === 'devices' ? 'active' : '',
    backgrouns: activeTab === 'backgrouns' ? 'active' : '',
    compositions: activeTab === 'compositions' ? 'active' : '',
  };

  return(
    <ul className="constructor__tabs">
      <li className={clazz.borders} 
        onClick={() => handleTabClick('borders')}>
        Рамки
      </li>
      
      <li className={clazz.devices} 
        onClick={() => handleTabClick('devices')}>
        Механизмы
      </li>
      
      <li className={clazz.backgrouns} 
        onClick={() => handleTabClick('backgrouns')}>
        Фон</li>
      
      <li style={{display: 'none'}} 
        className={clazz.compositions} 
        onClick={() => handleTabClick('compositions')}>
        Идеальные сочетания
      </li>
    </ul>
  );
}

export default NavTabs;