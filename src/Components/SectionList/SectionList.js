const SectionList = ({title, items}) => {
  return(
    <div className="constructor__section">
      <h3>{title}</h3>
      {items}
    </div>
  );
}

export default SectionList;