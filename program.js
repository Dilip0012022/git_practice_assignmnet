// To check prime number or not


let n=5;
for(let i=2;i<n;i++){
  if(n%i==0){
     count++;
  }
}
if(count==1){
  console.log(n,"Prime Number");  
}else{
  console.log(n,"Not a Prime Number");        
}