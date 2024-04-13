function fibs(n) {
  let arr = [0, 1];
  if (n < 2) {
    return arr.slice(0, n);
  } else {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
}

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1].slice(0, n);
  } else {
    let fibsArray = fibsRec(n - 1);
    fibsArray.push(fibsArray[n - 2] + fibsArray[n - 3]);
    return fibsArray;
  }
}
