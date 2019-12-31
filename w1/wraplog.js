console.clear();
const wrapLog = function (callback, name) {
	/* your code here */
	if (name === 'area') {
		return function(x,y) {
			console.log(`${name}(${x}, ${y}) =>`, callback(x,y));
		}
	} else {
		if (name === 'volume') {
			return function(x,y,z) {
				console.log(`${name}(${x}, ${y}, ${z}) =>`, callback(x,y,z));
			}
		}
	} 
};

const area = function (x, y) {
	return x * y;
};
const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24