const orm = require("../config/orm.js");



/////////////////////////////////////////////// /*Model*/ //////////////////////////////////////////////////////////

const burger = {

  selectAll : (callback) => {

   orm.selectAll((results)=>{ callback(results) 
   });

  },

  // The variables cols and vals are arrays.
  insertOne : ( vals, callback) => {

    // Execute orm Function to Post Data into Database
    orm.insertOne( vals, (result)=>{
      console.log("Executing Insert One Model");
      callback(result);
    });

  },

  updateOne : ( vals, condition, callback) =>{


    console.log("Executing Update One Model");

    orm.updateOne( condition, (result)=>{
      console.log("Executing Second Declared CallBack");
      callback(result);
    });

  }




}; // End of Burger Object



/////////////////////////////////////////////// /*Exports*/ //////////////////////////////////////////////////////////
module.exports = burger;
