// Week 10 – Day 5: Assignment
// (Maximum marks - 15)
// AttainU Id: #75
// https://leetcode.com/problems/reverse-string/
// https://leetcode.com/problems/fibonacci-number/
// Marks distribution:
// Question 1,2 carry 15 marks

// reverse-string

var reverseString = function(s) {
    let temp ;
    let j = 0;
    let i = s.length-1;
   while(j<i)
   {
    temp = s[j];
    s[j]= s[i];
    s[i] = temp;
    j++;
    i--;
   }
   return s;
};
console.log(reverseString(
    ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]));


// fibonacci-number

var fib = function(n) {
     if (n == 0 || n == 1) {
        return n
    }
     return result = fib(n-1) + fib(n-2)
};
   
console.log(fib(3));



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

