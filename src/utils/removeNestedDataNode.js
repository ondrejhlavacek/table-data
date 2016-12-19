function removeNestedDataNode(nodes, findKey, findValue) {
  return nodes.filter(function(node) {
    if (node.data[findKey] == findValue) {
      return false;
    }
    return true;
  }).map(function(node) {
    const kidsNodesKeys = Object.keys(node.kids);
    if (kidsNodesKeys.length > 0) {
      for (let j = 0; j < kidsNodesKeys.length; j++) {
        node.kids[kidsNodesKeys[j]].records = removeNestedDataNode(node.kids[kidsNodesKeys[j]].records, findKey, findValue);
        if (node.kids[kidsNodesKeys[j]].records.length === 0) {
          delete node.kids[kidsNodesKeys[j]];
        }
      }

    }
    return node;
  });
}

export default removeNestedDataNode;
