module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix = matrix.map((item, index) =>
        index % 2 === 1 ? item.reverse() : item
    );
    return matrix.reduce((acc, item) => acc.concat(item), []);
};
