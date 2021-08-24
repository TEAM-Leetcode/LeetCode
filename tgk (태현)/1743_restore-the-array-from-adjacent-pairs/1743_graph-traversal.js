/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    // create vertexes set and adjacency edge list
    const vertexes = new Set();
    const adjacencyList = new Map();
    for (const adjacentPair of adjacentPairs) {
        vertexes.add(adjacentPair[0]).add(adjacentPair[1]);

        if (!adjacencyList.has(adjacentPair[0])) {
            adjacencyList.set(adjacentPair[0], []);
        }

        if (!adjacencyList.has(adjacentPair[1])) {
            adjacencyList.set(adjacentPair[1], []);
        }

        adjacencyList.get(adjacentPair[0]).push(adjacentPair[1]);
        adjacencyList.get(adjacentPair[1]).push(adjacentPair[0]);
    }

    // find vertex with only one adjacent number
    let start = 0;
    for (const v of adjacencyList.keys()) {
        if (adjacencyList.get(v).length === 1) {
            start = v;
            break;
        }
    }

    // create stack and visited set for DFS
    // also create ret
    const stack = [start];
    const ret = [start];
    const visited = new Set();
    visited.add(start);

    // DFS
    while (stack.length !== 0) {
        const v = stack.pop();
        for (const w of adjacencyList.get(v)) {
            if (!visited.has(w)) {
                visited.add(w);
                ret.push(w);
                stack.push(w);
            }
        }
    }

    return ret;
};

const adjacentPairs = [
    [4, -2],
    [1, 4],
    [-3, 1],
];

console.log(restoreArray(adjacentPairs));
