/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if (element.profession === 'developer'){
            console.log(element);
        }       
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.profession === 'developer'){
          console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let addNewData = {id: 4, name:"susan", age:"20", profession: "intern"};
    arr.push(addNewData);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(function(element){
       if(element.profession !== "admin"){
          console.log(element);
      }
  })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployee = [
    { id: 5, name: "saurabh", age: "25", profession: "manager" },
    { id: 6, name: "rahul", age: "28", profession: "supervisor" },
    { id: 7, name: "rohit", age: "26", profession: "developer" }
    ]
    
    let newAddEmployee = [...arr , ...newEmployee]
    console.log(newAddEmployee);
  }
