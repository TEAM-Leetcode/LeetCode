var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];
  DFS(image, sr, sc, oldColor, newColor);
  return image;
};

var DFS = (image, x, y, oldColor, newColor) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= image.length ||
    y >= image[x].length ||
    image[x][y] === newColor ||
    image[x][y] !== oldColor
  )
    return;

  image[x][y] = newColor;
  DFS(image, x + 1, y, oldColor, newColor);
  DFS(image, x, y + 1, oldColor, newColor);
  DFS(image, x - 1, y, oldColor, newColor);
  DFS(image, x, y - 1, oldColor, newColor);
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1;
let sc = 1;
let newColor = 2;
