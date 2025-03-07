import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initData } from '../../Redux/dataSlice';
import { removeBorder, removeDevice, removeBackground } from '../../Redux/orderSlice';
import Borders from '../../Containers/Borders';
import Backgrounds from '../../Containers/Backgrounds';
import Devices from '../../Containers/Devices';
import Preloader from '../Preloader/Preloader';

const NavItems = ({activeTab}) => {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const order = useSelector((state) => state.order);

  const isActive = {
    borders: activeTab === 'borders',
    devices: activeTab === 'devices',
    backgrouns: activeTab === 'backgrouns',
    compositions: activeTab === 'compositions',
  }

  const isLoaded = data.borders
    || data.devices
    || data.backgrouns;

  useEffect((state) => {

    let thereIsBorderInRequest = false;
    let thereIsDeviceInRequest = false;
    let thereIsBackInRequest = false;

    const fetchData = async () => {
      // const response = await fetch('constructor-data.json');
      const response = await fetch('local.json');
      const data = await response.json();

      if (order.border) {
        data.borders.map((border) => {
          border.key = border.id + '-' + Math.random(); // встречаются товары с дублями
          if (border.id === order.border.id) {
            border.active = true;
            thereIsBorderInRequest = true;
          }
          return border;
        });
      }

      if (order.device) {
        data.devices.map((device) => {
          device.key = device.id + '-' + Math.random(); // встречаются товары с дублями
          if (device.id === order.device.id) {
            device.active = true;
            thereIsDeviceInRequest = true;
          }
          return device;
        });
      }

      if (order.background) {
        data.backgrounds.map((background) => {
          if (background.id === order.background.id) {
            background.active = true;
            thereIsBackInRequest = true;
          }
          return background;
        });
      }

      if (!thereIsBorderInRequest) {
        dispatch(removeBorder());
      }

      if (!thereIsDeviceInRequest) {
        dispatch(removeDevice());
      }

      if (!thereIsBackInRequest) {
        dispatch(removeBackground());
      }

      dispatch(initData(data));
    }

    fetchData().catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className="constructor__drops">
      {
        isLoaded.length === 0
          ? <Preloader />
          : <>
              <Borders isActive={isActive.borders}
                arrBorders={data.borders} />

              <Devices isActive={isActive.devices}
                arrDevices={data.devices} />

              <Backgrounds isActive={isActive.backgrouns}
                arrBackgrounds={data.backgrounds} />
            </>
      }
    </div>
  );
}

export default NavItems;