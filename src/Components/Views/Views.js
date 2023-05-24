import { useDispatch } from 'react-redux';
import { removeBorder, removeDevice } from '../../Redux/orderSlice';
import { inactiveBorder, inactiveDevice } from '../../Redux/dataSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ConstructorPic from '../ConstructorPic';
import PlaceholderImg from '../PlaceholderImg';

const alertOrder = (e) => {
  e.preventDefault();
  const persist = JSON.parse(localStorage.getItem('persist:root'));
  const order = JSON.parse(persist.order);
  alert(JSON.stringify(order, null, 4));
}

const handleDeleteBorder = (dispatch, id) => {   
  if (id) {
    dispatch(removeBorder());
    dispatch(inactiveBorder({id}));
  }
}

const handleDeleteDevice = (dispatch, id) => {
  if (id) {
    dispatch(removeDevice());
    dispatch(inactiveDevice({id}));
  }
}

const Views = ({ order }) => {
  const { background, border, device } = order;

  const dispatch = useDispatch();

  const hasOrderData = order.background.image
    || order.border.image || order.device.image;

  return(
    <>
      {
        hasOrderData 
          ? <ConstructorPic background={background} 
              border={border} device={device} /> 
          : <PlaceholderImg />
      }
      <div className="constructor__sign">
        
        <div className="constructor__sign-wrap">
          <h3>Рамка</h3>
          {
            Object.keys(border).length !== 0
              ? <div className="constructor__sign-body">
                  <div className="constructor__sign-desc">
                    <div className="constructor__sign-pic">
                      <a href={border.url} target='_blank' rel="noreferrer">
                        <LazyLoadImage src={border.image} alt="" />
                      </a>
                    </div>
                    <a href={border.url} target='_blank' rel="noreferrer">
                        { border.collection ? <span><b>{border.collection}</b> </span> : null }
                        { border.name ? <span>{border.name} </span> : null }
                        { border.code ? <span>{border.code} </span> : null }
                        <mark>Цена: {border.price} ₽ {border.sale && <del>{border.old_price} ₽</del>}</mark>
                    </a>
                  </div>
                  <div className="constructor__sign-btns">
                      <span onClick={() => handleDeleteBorder(dispatch, border.id)}></span>
                      <form method="post" className="ms2_form" onSubmit={alertOrder}>
                          <button type="submit" 
                            className="btn btn-success btn-xl addtocart-button msec-to-cart"
                            title="Добавить в корзину"
                            name="ms2_action" 
                            value="cart/add"
                            data-productid=""
                            data-productimage={border.image}
                            data-productprice={border.price}
                            data-msec-quantity={`quantity-${border.id}`}>В корзину</button>
                        <input type="hidden" name="id" value={border.id} />
                        <input type="hidden" name="count" value="1" id={`quantity-${border.id}`} />
                      </form>
                  </div>
                </div>
              : <p className="constructor__sign-placeholder">Выберите рамку</p>
          }
        </div> 
          
        <div className="constructor__sign-wrap">
          <h3>Механизм</h3>
          {
            Object.keys(device).length !== 0
              ? <div className="constructor__sign-body">
                  <div className="constructor__sign-desc">
                    <div className="constructor__sign-pic">
                      <a href={device.url} target='_blank' rel="noreferrer">
                        <LazyLoadImage src={device.preview} alt="" />
                      </a>
                    </div>                    
                    <a href={device.url} target='_blank' rel="noreferrer">
                      { device.collection ? <span><b>{device.collection}</b> </span> : null }
                      { device.name ? <span>{device.name} </span> : null }
                      { device.code ? <span>{device.code} </span> : null }
                      <mark>Цена: {device.price} ₽ {device.sale && <del>{device.old_price} ₽</del>}</mark>
                    </a>
                  </div>
                  <div className="constructor__sign-btns">
                      <span onClick={() => handleDeleteDevice(dispatch, device.id)}></span>
                      <form method="post" className="ms2_form" onSubmit={alertOrder}>
                          <button type="submit" 
                            className="btn btn-success btn-xl addtocart-button msec-to-cart"
                            title="Добавить в корзину"
                            name="ms2_action" value="cart/add"
                            data-productid=""
                            data-productimage={device.image}
                            data-productprice={device.price}
                            data-msec-quantity={`quantity-${device.id}`}>В корзину</button>
                        <input type="hidden" name="id" value={device.id} />
                        <input type="hidden" name="count" value="1" id={`quantity-${device.id}`} />
                      </form>
                  </div>
                </div>
              : <p className="constructor__sign-placeholder">Выберите механизм</p>
          }
        </div>

      </div>
    </>
  );
}

export default Views;