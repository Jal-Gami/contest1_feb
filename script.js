/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr2 = [
    { id: 10, name: "roman", age: "28", marks: 90},
    { id: 11, name: "brock", age: "25", marks: 95},
    { id: 12, name: "amy", age: "23", marks: 75}
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
      arr.map((student) => {
        if (student.marks > 50) {
          console.log(student);
        }
      });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
      arr.forEach(function(ele){
        if(ele.marks>=50){
            console.log(ele);
        }
    })
}

function addData() {
  //Write your code here, just console.log
      let add = {id:4,name:"susan",age:"20",marks: 45};
      arr.push(add);
      console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
      for(let i=0;i<arr.length;i++){
        if(arr[i].marks<50){
            arr.pop(arr[i]);
        }
      }
      console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
      let concatearray = arr.concat(arr2);
      console.log(concatearray);
}
