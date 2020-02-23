// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/notes.html"));
    //res.send('/notes')
  });

  app.get("/addnote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/AddNote.html"));
    //res.send('/addnote')
  });

  // If no matching route is found default to home
  app.get("/*", function(req, res) {   
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};
