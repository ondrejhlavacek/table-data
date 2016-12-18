// Finds table header for entities
function getTableHeader(entities) {
  return Object.keys(entities[0].data);
}

export default getTableHeader;
