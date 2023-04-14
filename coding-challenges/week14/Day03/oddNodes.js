// Week 14 – Day 3: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #142
// Write a program to print nodes in a BST having odd values
// Marks distribution:
// Question 1 carry 15 marks




class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let node1 = new Node(2);
let node2 = new Node(1);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node2.left = node7;
node1.left = node2;
node5.right = node6;
node3.left = node5;
node3.right = node4;
node1.right = node3;
let root = node1;
//     2
//   1    3
// 7    5   4
//       6
function preOrder(root){
    if(root !=null) {
    if (root.val%2 !=0) console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
    }
}
preOrder(root);


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



