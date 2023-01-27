class ListNode {
    val;
    next;
  
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class TestClass {
    head;
  
    constructor(head = null) {
      this.head = head;
    }
  
    hasLast() {
      return this.head !== null;
    }
  
    getLast() {
      if (!this.hasLast()) {
        return null;
      }
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      let finalValue = current.val;
  
      current = this.head;
      while (current.next != null && current.next.next !== null) {
        // 1 2 3 4 5
        current = current.next;
      }
      if (current.next === null) {
        this.head = null;
      }
      current.next = null;
      return finalValue;
    }
  }
  
  let myVariable = new TestClass(new ListNode(1, new ListNode(2))); //[1,2,3,4,5]
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());

  //promises
  // constructor (function)
let num1 = 10;
let num2 = 5;

let myPromise = new promise((fulfilled, notFulfilled)=>{
    let sum = num1+num2;
    if (sum > 24) {
        fulfilled();
    } else {
        notFulfilled();
    }
});

//myPromise.then().catch().finally();
myPromise 
    .then(()=> {
        console.log("Promise was fulfilled");
    })
    .catch(()=> {
       console.log("Promise was not fulfilled"); 
    })


function addTwoNumbers(num1, num2) {
    return new Promise((fulfilled) => {
      setTimeout(() => {
        console.log("Inside setTimeout");
        fulfilled(() => {
          console.log(`The sum is ${num1 + num2}`);
        });
      }, 5000);
      console.log("Outside setTimeout");
    });
  }
  
  addTwoNumbers(10, 5)
    .then((foundFunction) => {
      foundFunction();
    })
    .catch((error) => {
      console.log("Promise was not fulfilled");
    })
    .finally(() => {
      console.log("Inside finally");
    });
  
  function getAllUsersFromDatabase() {
    return new Promise((fulfilled, rejected) => {
      let allUsers = [1, 2, 3, 4, 5];
      fulfilled(allUsers);
    });
  }
  
  let allUsers = [];
  getAllUsersFromDatabase()
    .then((foundUsers) => {
      allUsers = [...foundUsers];
    })
    .catch();