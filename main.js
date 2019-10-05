// add element in the end of array
function push(arr,num) {
  arr[arr.length] = num;
  return arr.length;
}
// delete last element in the end of array
function pop(arr) {
    var temp = arr[arr.length-1];
    arr.length = arr.length -1;
    return temp;
}
//delete firest element in array and return delete element
function shift(arr) {
  var temp = arr[0];
  for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr.length--;
  return temp;
}
// add elements at the beginning of the array
function unshiift(arr) {
 var newarr = [];
    for(var i =0, k=1;k<arguments.length; i++,k++){
      newarr[i] = arguments[k];
    }
    for(var i = 0, m=newarr.length; i<arr.length; i++,m++){
      newarr[m] = arr[i];
    }
    for(var i = 0; i<newarr.length; i++){
        arr[i] = newarr[i];
    }
    return arr.length;
}
// array object selected from begin to end return new array
function slice(arr,index1,index2) {
  var newarr = [];
  if(arr.length < index2){
    index2 = arr.length;
  }
  if(index1 < index2){
      for(var i =0,k=index1; k<index2; i++,k++){
         newarr[i] = arr[k];
      }
  }
  if(index2 == undefined){
    for(var i =0,k=index1; k<arr.length; i++,k++){
       newarr[i] = arr[k];
    }
  }
    return newarr;
}
// change array first element became last last element became first return original array
function reverse(arr) {
        for(var i =0, k=arr.length-1; i<arr.length /2; i++, k--){
          var temp = arr[i];
          arr[i] = arr[k];
          arr[k] = temp;
        }
        return arr
}
// changes the contents of an array by removing or replacing existing elements and/or adding new elements return original array
function splice(arr,start,deletecount) {
  var addelem = [];
  var lastsidearr = []
  var resarr = [];
  for(var i =0, k=3;k<arguments.length; i++,k++){
    addelem[i] = arguments[k];
  }
  for(var i =0,k=0; i<arr.length; i++){
    if(i < start){
    resarr[i] = arr[i];
    }
    if(i > start && i > start+deletecount){
    lastsidearr[k] = arr[i];
    k++;
    }
  }
  for(var i = 0, k = resarr.length; i<addelem.length; i++, k++){
    resarr[k] = addelem[i];
  }
  for(var i = 0, k = resarr.length; i<lastsidearr.length; i++,k++){
    resarr[k] = lastsidearr[i];
  }
  for(var i = 0; i < resarr.length; i++){
    arr[i] = resarr[i];
  }
  return arr;
}
// method creates and returns a new string by concatenating all of the elements in an array
function join(arr,simvol) {
  var res = '';
  for(var i = 0; i < arr.length; i++){
    res += arr[i] + simvol;
  }
   res = res.substring(0, res.length - 1);
   return res;
}
// method sorts the elements of an array return original array
function sort(arr) {
  for(var i = 0; i<arr.length; i++){
      for(var j = 0; j<arr.length-1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
  }
  return arr;
}
var arr = [3,5,7,'fyuhsdgw','4','t6fy','z','a',68];
console.log(sort(arr));
console.log(arr);
