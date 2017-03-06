// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
// function uniqueChar(s) {
//   const e = {};
//   const c = s.split('');
//   let r = true;
//
//   c.forEach(function(l){
//     if(e[l]) {
//       r = false;
//       return;
//     } else {
//       e[l]= true;
//     }
//   })
//
//   return r;
//
// };

function uniqueChar(s) {
  for(let i = 0; i < s.length; i++) {
    let c = s[i];

    let sub = s.substring(i + 1);
    console.log(sub, c,sub.indexOf(c));
    if(sub.indexOf(c) > -1) return false;
  }
  return true;
}


uniqueChar('aysegul');
uniqueChar('aysegulss');
