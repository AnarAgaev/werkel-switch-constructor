import { useSelector } from "react-redux";
import Views from "../Components/Views";

const OrderView = () => {
  const order = useSelector((state) => state.order);

  return(
    <div className="constructor__column constructor__column_view">
      <div className="constructor__sticky">
        <h1 className="constructor__title">Конструктор рамок и механизмов</h1>
        <div className="constructor__view">
          <Views order={order} />
        </div>
      </div>            
    </div>    
  );
}

export default OrderView;