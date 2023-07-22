/*
loop in js are as follow
*/

const arrayNumber=[1,2,3,4,5,6,7,8,9,10]
const arrayName=["T","A","P","E","N","D","R","A"]
console.log(arrayNumber.toString())
console.log(arrayName.toString())

// for loop
for (var i=0; i<arrayName.length; i++){
    console.log(i)
    console.log(arrayName[i])
}


for (var i=0; i<arrayNumber.length; i++){
    console.log(i)
    console.log(arrayNumber[i])
}

// in loop
for ( var index in arrayName){
    console.log(index)
    console.log(arrayName[index])
}

for ( var index in arrayNumber){
    console.log(index)
    console.log(arrayNumber[index])
}

// foreach
arrayName.forEach((value,index,array)=>{
    console.log(index)
    console.log(value)
})
arrayNumber.forEach((value,index,array)=>{
    console.log(index)
    console.log(value)
})

// loop of 
for ( var index of arrayName){
    console.log(index)
    
}

for ( var index of arrayNumber){
    console.log(index)
   
}

// while loop
var i=0
var j=0
while( i<arrayNumber.length){
console.log(arrayNumber[i])
i++
}

while( j<arrayName.length){
    console.log(arrayName[j])
   j++
    }

    // do while
var number =199
do{
console.log("Number are equal  ")
break
}while(number==199)