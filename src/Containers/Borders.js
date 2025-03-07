import { useSelector, useDispatch } from 'react-redux';
import { activeBorder } from '../Redux/dataSlice';
import { setBorder } from '../Redux/orderSlice';
import decompositionArrItems from "../Helpers/decompositionArrItems";
import SectionList from "../Components/SectionList";
import BordersItem from "../Components/BordersItem";

const handleClick = (dispatch, borders, id) => {
  const border = borders
    .filter(border => border.id === id);

  if (border.length) {
    dispatch(setBorder(border[0]));
    dispatch(activeBorder({id}));
  }
}

const Borders = ({isActive, arrBorders}) => {
  const data = useSelector((state) => state.data.borders);
  const dispatch = useDispatch();

  let fragments = decompositionArrItems(arrBorders);
  let bordersLists = [];

  for (const key in fragments) {
    const items = fragments[key]
      .map(item => <BordersItem key={item.key} item={item}
        handleClick={() => handleClick(dispatch, data, item.id)} />);

    bordersLists.push(<SectionList key={key} title={key} items={items}/>);
  }

  const clazz = isActive
    ? 'constructor__content active'
    : 'constructor__content';

  return(
    <div className={clazz}>
      {bordersLists}
    </div>
  );
}

export default Borders;