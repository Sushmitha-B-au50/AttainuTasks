// Week 8 – Day 1: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #37
// Q-1) Take an integer array(length >10) as input from the user, and use reduce function to find the
// average of the whole array.
// Marks distribution:
// Question 1 carry 15 marks



const prompt = require('prompt-sync')();

let createArray = () =>
{ 
   Arr=[];   
   var lengthOfArray = parseInt(prompt("Enter a length of Array greater than 10: ")); // getting the length of array from user to interate
   if(lengthOfArray>10)
   {
      console.log("please give the " + lengthOfArray + " Elements Of Array");
      for(i=0; i<lengthOfArray; i++)
      {
         Arr.push(prompt("Enter a number " +((i+1)) +" : "  ));   
      }
       Arr = Arr.map(Number);  
      reducedArray=Arr.reduce((acc,item) => (acc + item));
      console.log("Average of array " + (reducedArray/lengthOfArray));
      console.log("Average of array rounded off value  " + Math.round(reducedArray/lengthOfArray)); // nearest value
   }
   else
   {
      console.log("please give the  Elements Of Array greater than 10");
   }
}
   
createArray();



// / / /####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */

//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */

//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */