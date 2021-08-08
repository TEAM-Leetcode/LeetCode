var shiftGrid = function(grid, k) {
    const len = grid[0].length
    const arr = grid.flat()
    const res = []

    while (k-- > 0) 
        arr.unshift(arr.pop())
    for (let idx = 0; idx < arr.length; idx += len) {
        res.push(arr.slice(idx, idx + len))
    }

    return res
};