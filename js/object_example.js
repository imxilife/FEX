
function f1(){
  var n = 999;
  nAdd = function () {
    n = n+1;
    console.log(n);
  };
  function f2(){
    console.log(n);
  }
  return f2;
}

f1();
nAdd();