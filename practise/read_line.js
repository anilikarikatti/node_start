let readLine = require('readline')
readLine =  readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*
readLine.question("enter two number1 ",(a)=>{
  
  readLine.question("enter two number2 ",(b)=>{
  // let arr = a.split(' ');

  // // console.log(arr);
  // let ans =0;
  //   for(let i of a){
  //     i=Number(i)
  //     ans+=i;
  //   }
    // console.log(ans);
    // console.log(a,b)
    console.log(Number(a)+Number(b));
 readLine.close();
  })
})

// readLine.question("what is your name ",name=>{
//     console.log(`hi ${name}`);
//     readLine.close();
// })

console.log("anilkumar");
*/

function readline(){
  return new Promise((resolve, reject) => {
    readLine.question(`enter number${question_num} `,(a)=>{
      resolve(a);
      question_num++;
      process.exit(1);
    });
  })

}

let question_num =1;
async function call(){
  
  let a =await readline();
  let b= await readline();
  readLine.close();

  a = Number(a);
  b=Number(b);
  console.log(a+b);

}
call();

// console.log("anil kun,lsjha");