// Given an array of integers, find the minimum number of moves required to make all elements equal,
// where a move is defined as incrementing n - 1 elements by 1, where n is the length of the array.

// For example, given the array [1, 2, 3], the minimum number of moves required is 3,
// since you can increment the first two elements by 1 each and the last element by 2 to make all elements equal to 3.

function minMoves(nums) {
    let minElement = Math.min(...nums);
    let moves = 0;
    for (let num of nums) {
        moves += num - minElement;
    } 
    return moves;
};

minMoves([1,2,3])
// minMoves([1,1,1])