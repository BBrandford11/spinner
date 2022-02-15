process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() =>{
  process.stdout.write('\r|   ')
}, 100)

setTimeout(()=> {
  process.stdout.write('\r/   ')
},500)

setTimeout(() => {
  process.stdout.write('\r-   ')
},1000)

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 1500)
setTimeout(()=> {
  process.stdout.write('\r|   ')
},2000)

setTimeout(() => {
  process.stdout.write('\r/   ')
},2500)

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 3000)
setTimeout(()=> {
  process.stdout.write('\r\\   ')
},3500)

setTimeout(() => {
  process.stdout.write('\r|   ')
},4000)

