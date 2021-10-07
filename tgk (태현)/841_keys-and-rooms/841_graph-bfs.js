/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    // prepare bfs
    const notVisited = new Set();
    for (let i = 1; i < rooms.length; i++) {
        notVisited.add(i);
    }
    const stack = [0];

    // bfs
    while (stack.length > 0) {
        const room = stack.shift();
        for (const adjacentRoom of rooms[room]) {
            if (notVisited.has(adjacentRoom)) {
                notVisited.delete(adjacentRoom);
                stack.unshift(adjacentRoom);
            }
        }
    }

    return notVisited.size === 0;
};

const rooms = [[1, 3], [3, 0, 1], [2], [0]];

console.log(canVisitAllRooms(rooms));
