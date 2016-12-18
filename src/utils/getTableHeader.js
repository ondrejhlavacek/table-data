// Finds table header for entities
function getTableHeader(entities) {
  if (entities.length === 0) {
    return [];
  }
  return Object.keys(entities[0].data);
}

export default getTableHeader;
