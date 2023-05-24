import filterArrToUniq from "./filterArrToUniq";

const decompositionArrItems = (arr) => {
  // Empty object for borders sorted by type
  let fragments = {};

  // Getting object with unic types of the borders
  const types = arr.map(i => i.type);
  const uniqTypes = filterArrToUniq(types);

  for (const iterator of uniqTypes) {
    fragments[iterator] = [];
  }

  // Decompose borders arrays into the fragments object
  for (const iterator of arr) {
    fragments[iterator.type].push(iterator);
  }

  return fragments;
}

export default decompositionArrItems;