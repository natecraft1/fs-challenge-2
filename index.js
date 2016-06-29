var a =  (function() { var a = []; for (var i = 0; i < 35; i++) { a.push(i) }; return a; }())
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]

Array.prototype.rotate = function(n) {
  var a = this.concat(this.splice(0, n))
  return a
}

a.rotate(12)
// [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function findI(arr, i) {
  if (arr.length == 2) { return i+1 }
  var k = (arr.length/2).floor(), i = i || 0
  if (arr[0] > arr[k]) { 
    return findI(arr.slice(0, k+1), i)
  } else {
    return findI(arr.slice(k), k+i)
  }

}

// SQL

Given :

State
  state_id
  state_name
City
  city_id
  state_id
  city_name
  population

Write a query that gives the 2 most populated cities in each state.