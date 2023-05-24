import { useSelector, useDispatch } from 'react-redux';
import { setBackground } from '../Redux/orderSlice';
import { activeBackground, inactiveBackground } from '../Redux/dataSlice';
import BackgroundsItem from '../Components/BackgroundsItem';

const handleClick = (dispatch, backgrounds, id, selectedBackground) => {
  const background = backgrounds
    .filter(background => background.id === id);

  if (background.length) {
    dispatch(setBackground(background[0]));

    if (selectedBackground.id === id) {
      dispatch(inactiveBackground({id}))
    } else {
      dispatch(activeBackground({id}));
    }
  }
}

const Backgrounds = ({isActive, arrBackgrounds}) => {

  const backgrounds = useSelector((state) => state.data.backgrounds);
  const selectedBackground = useSelector((state) => state.order.background);
  const dispatch = useDispatch();

  const items = arrBackgrounds.map((item) => <BackgroundsItem key={item.id} item={item} 
    handleClick={() => handleClick(dispatch, backgrounds, item.id, selectedBackground)} />);

  const clazz = isActive 
    ? 'constructor__content constructor__content_background active' 
    : 'constructor__content constructor__content_background';

  return(
    <div className={clazz}>
      <div className="constructor__section">
        {items}
      </div>
    </div>
  );
}

export default Backgrounds;
