// Finds table header for entities
function getRowValues(values) {
  return Object.keys(values).map(function (key) {
    return values[key];
  });
}

export default getRowValues;
