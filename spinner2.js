let count = 100
let spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']

for(let i = 0; i <spinner.length; i++){
    setTimeout(() =>{
    process.stdout.write(spinner[i]) 
  }, count)
  count += 200

}
