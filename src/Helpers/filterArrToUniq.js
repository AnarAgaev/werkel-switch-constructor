const filterArrToUniq = (arr) => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
}

export default filterArrToUniq;