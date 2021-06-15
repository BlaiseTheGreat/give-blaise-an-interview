export function getBubbleSortAnimations(array) {
    const animations = [];
//     if(array.length <= 1) return array;
    
//     let len = array.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len-1; i++) {
//             animations.push([i, i+1]);
//             if (array[i] > array[i + 1]) {
//                 let tmp = array[i];
//                 array[i] = array[i + 1];
//                 array[i + 1] = tmp;
//                 swapped = true;
//                 animations.push([array[i], array[i+1]]);
//             } else {
//                 animations.push([null, null]);
//             }
//             animations.push([i, i+1]);
//         }
//     } while (swapped);
//     return animations;
// }


    var didSwap;
    for (var i = 0; i < array.length; i++) {
        didSwap = false;
        for (var j = 0; j < array.length - i - 1; j++) {
            animations.push([j, j+1]);
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                didSwap = true;
                animations.push([array[j], array[j+1]]);
            } else {
                animations.push([null, null]);
            }
            animations.push([j, j+1]);
        }
        if (!didSwap) break;
    }
    return animations;
}