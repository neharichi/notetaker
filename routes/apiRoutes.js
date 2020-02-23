
//DataSource
var tableData = require("../db/db");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
  //  console.log(tableData);
    res.json(tableData);
  });
 
  app.post("/api/notes", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
     // console.log(req.body);
      res.json(true);
    }
    else {   
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0; 

    res.json({ ok: true });
  });

  app.delete("/api/notes/:id", function(req, res) {
    // Remove specific id
    //tableData.splice(req.params.id,1)
    Object.keys(tableData).forEach(function(key){
      if(tableData[key].id==req.params.id)
        delete tableData[key];
    });    
    tableData = tableData.filter(function(x) { return x !== null }); 
  
  //  console.log("deleting="+ req.params.id);
    res.json({ ok: true });
  });
};
