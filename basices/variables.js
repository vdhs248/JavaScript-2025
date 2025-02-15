const accountId = 12458745
let accountEmail = "kumarvinod248@gmail.com"
var accountPassword = "245811"
acountCity = "Delhi"

// change the value
accountEmail = "vinod@gmail.com"
accountPassword = "1233456";
acountCity = "mumbai";
let accountState;
// accountId = 254; not allowed
/*

perfer not to use var 
because of issue in block scpe and functional scope

*/
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, acountCity, accountState]);