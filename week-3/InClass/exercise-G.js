// let ages=[2009, 2004, 2014, 1994];
// let newages=ages.filter((newfun)=>{return (2020-newfun)>17 });
// console.log(newages);

const years = ( 1964, 2008, 1999, 2005, 1978, 1985, 1919 );
function canDrive(year) {
    const age = 2020 - year;
    if (age >= 17) {
        return true;
    } else {
        return false;
    }
}
let result=years.filter(canDrive);
console.log(result);
// const result = years.filter((year)=> {
//     const age = 2020 - year;
//     if (age >= 17) {
//         return true
//     } else {
//         return false
//     }
// });
//console.log(canDrive(years));