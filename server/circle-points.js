const mockData = require('./mock-data');

const p = (angle) => {
    const radian = angle * 0.0174532925;
    const x = 2 * Math.cos(2 * Math.PI / radian);
    const y = 2 * Math.sin(2 * Math.PI / radian);
    return {longitude: x, latitude: y};
}

const circlePoints = [];
for (let i = 1; i <= 360; i++) {
    circlePoints.push(p(i));
}

module.exports = circlePoints;
