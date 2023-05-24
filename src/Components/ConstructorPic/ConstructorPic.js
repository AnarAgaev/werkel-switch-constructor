const ConstructorPic = ({background, border, device}) => {
  return (
    <div className="constructor__pic">
      {
        background.image
          ? <div className="constructor__pic-background">
              <img src={background.image} alt="" />
            </div>
          : null
      }
      {
        border.image
          ? <div className="constructor__pic-border">
              {
                background.image
                  ? <span className="constructor__pic-shadow"></span>
                  : null
              }
              <img src={border.image} alt="" />
            </div>
          : null
      }
      {
        device.image
          ? <div className="constructor__pic-device">
              <img src={device.image} alt="" />
            </div>
          : null
      }
    </div>
  );
}

export default ConstructorPic;