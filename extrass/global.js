//Global object is the topmost object instead of window

//console.log(global);

global.setTimeout(() => {
    console.log(`i'm here stupid`);
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log(`lissen little shit`)
}, 1000);

console.log(__dirname)
console.log(__filename)

console.log(document.querySelector);