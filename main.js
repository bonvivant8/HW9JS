
const myArr=[];
let volume=prompt("Enter the size of your array");
while (volume===null || volume.trim() === '')
{
    alert('Cancellation');
    volume=prompt('Enter the size of your array');
}


for (let i=0;i<volume;i++){
    myArr[i]=prompt('Enter the element of your array');
    while (myArr[i]===null || myArr[i].trim() === '' ){
        alert('Cancellation')
        myArr[i]=prompt('Enter the element of your array');
    }

}
console.log(myArr)
alert('Your array is '+myArr);
const myNewArr=myArr.sort((a,b )=>a-b)
console.log(myNewArr)
alert('Your new array is'+myNewArr);
alert('Deleted elements in your new array are:'+ (myArr.splice(1,3))) ;




