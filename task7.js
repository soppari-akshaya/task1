//SWAPPING
let a=5;
let b=6;
console.log("Before swapping:a="+a);
console.log("Before swapping:b="+b);
a=a+b;
b=a-b;
a=a-b;

console.log("After swapping:a="+a);
console.log("After swapping:b="+b);

//Reversing a number
let number=123;
let n=0;
let reverse=0;
while(number>0)
{
    n=number%10;
    reverse=reverse*10+n;
    number=Math.floor(number/10);
}
 
console.log(reverse);

//Prime number
let h=20;
for(let i=2;i<=h;i++)
{
    let count=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
            count++;
    }
    if(count==2)
    {
        console.log(i);
    }
}
 


