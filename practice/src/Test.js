// import e from "express";
// import React,{Component} from "react";
import React from "react";
// import  "./test.css";
// const Test = () =>{
//     return(
//         <div>
//             <h1>Hello, I am Shubham</h1>
//         </div>
//     )
// }
//  class Test extends Component {
    // render() {
    //     return(
    //         <div>
    //          <h1 id="testId" style={{
    //             color : "red",
    //             backgroundColor : "yellow",
    //          }}>Hello, I am Shubham</h1>
    //     </div>
    //     )
        
    // }
    
//      isLoggedIn= false;
    

//     render(){
//         return(
            
//             <div>
//                 {!this.isLoggedIn ? (<h1>You are not Logged in!</h1>)
//                 :(
//                 <h1>Congratulation, you are logged in!</h1>
//                 )}
//                 <button onClick={(e)=> this.setState({ isLoggedIn:true})}>
//                     Login!
//                 </button>
//             </div>
            
//         );
//     }

//  }

 const Test = ({name = "", setName}) =>{
    return (
        <>

        <h1>The name is: {name}</h1>
        <input type="text"  value={name} onChange = {(e) => setName(e.target.value)}/>
        </>
        
    )
    
    
}
export default Test;