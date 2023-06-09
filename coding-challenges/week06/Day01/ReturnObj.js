// Week 6 – Day 1: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #31
// Q-1) Write a function to create an object, that calculates the number of times each element occurs in
// the following array.
// Input: ['Orange','Orange','banana','apple','apple','banana','apple','apple',
// 'apple','apple','Orange','Orange','Orange','Orange','banana']
// Output: { Orange:6 apple:5 banana:3 }
// Marks distribution:
// Question 1 carry 15 marks

let arr = ['Orange','Orange','banana','apple','apple','banana','apple','apple',
'apple','apple','Orange','Orange','Orange','Orange','banana'];

let createobj = (arr) =>
{
fruitObj ={};            //created empty object
   for(i=0;i<arr.length;i++)
   {  
         let count = 1;
         if((fruitObj.hasOwnProperty(arr[i])))  //checking if arr[i] that is the element is already in  obj 
         {
            
            fruitObj[arr[i]]++;  
         }
         else                                  //here if not then adding the value(count as 1) for that property 
         {
            fruitObj[arr[i]] = count;
         }
   }
   return fruitObj;
}
console.log(createobj(arr));

// / /####################################################
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