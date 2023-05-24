import {useSelector, useDispatch } from 'react-redux';
import { activeDevice,  } from '../Redux/dataSlice';
import { setDevice } from '../Redux/orderSlice';
import decompositionArrItems from "../Helpers/decompositionArrItems";
import SectionList from "../Components/SectionList";
import DevicesItem from "../Components/DevicesItem";

const handleClick = (dispatch, devices, id) => {

  const device = devices
    .filter(device => device.id === id);

  if (device.length) {
    dispatch(setDevice(device[0]));
    dispatch(activeDevice({id}));
  }
}

const Devices = ({isActive, arrDevices}) => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.devices)

  let fragments = decompositionArrItems(arrDevices);
  let devicesLists = []; 

  for (const key in fragments) {
    const items = fragments[key]
      .map(item => <DevicesItem key={item.key} item={item} 
        handleClick={(id) => handleClick(dispatch, data, item.id)} />);
      
    devicesLists.push(<SectionList key={key} title={key} items={items} />);
  }

  const clazz = isActive 
    ? 'constructor__content active' 
    : 'constructor__content';

  return(
    <div className={clazz}>
      {devicesLists}
    </div>
  );
}

export default Devices;
