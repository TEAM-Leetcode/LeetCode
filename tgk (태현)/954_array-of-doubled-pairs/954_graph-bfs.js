/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    const graph = buildGraph(arr);
    if (graph.has(0)) {
        if (graph.get(0).cnt % 2 === 0) {
            graph.delete(0);
        } else {
            return false;
        }
    }

    bfs(graph);
    for (const node of graph) {
        console.table(node);
    }
    return (
        graph.size === 0 || [...graph.values()].every((node) => node.cnt === 0)
    );
};

/**
 * Creates graph with the given array
 * key: number (vertex)
 * value: { cnt: number(number of key in graph), edges: number[](adjacency list) }
 * @param {number[]} arr
 * @returns {Map}
 */
var buildGraph = function (arr) {
    const valCntMap = arr.reduce(
        (map, val) => map.set(val, (map.get(val) ?? 0) + 1),
        new Map()
    );

    const graph = [...valCntMap].reduce((map, [val, cnt]) => {
        edges = [val * 2, val / 2].filter((v) => valCntMap.has(v));
        return map.set(val, { cnt, edges });
    }, new Map());

    return graph;
};

/**
 * Decreases cnt of vertexes while do bfs
 * @param {Map} graph
 */
var bfs = function (graph) {
    const queue = [
        [...graph]
            .filter(([val, node]) => node.edges.length < 2)
            .map(([val, node]) => val)[0],
    ];

    while (queue.length > 0) {
        const val = queue.shift();
        const node = graph.get(val);

        for (const val2 of graph.get(val).edges) {
            const node2 = graph.get(val2);
            if (node.cnt > node2.cnt) {
                return false;
            }

            node2.cnt -= node.cnt;
            node.cnt = 0;

            node2.edges = node2.edges.filter((v) => v !== val);
            queue.push(val2);
        }
    }
};

// console.log(canReorderDoubled([1, 2, 4, 2, 4, 8]));
console.log(canReorderDoubled([3, 1, 3, 6]));
