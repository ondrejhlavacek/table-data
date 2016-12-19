function findNestedDataNode(nodes, findKey, findValue) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].data[findKey] === findValue) {
      return nodes[i];
    }
    const kidsNodesKeys = Object.keys(nodes[i].kids);
    if (kidsNodesKeys.length > 0) {
      for (var j = 0; j < kidsNodesKeys.length; j++) {
        const kidNode = findNestedDataNode(nodes[i].kids[kidsNodesKeys[j]].records, findKey, findValue);
        if (kidNode !== false) {
          return kidNode;
        }
      }
    }
  }
  return false;
}

export default findNestedDataNode;
