// ===============================================================================
// DATA
// Below data will hold all of the notes.
// Initially we just set it equal to a "dummy" note.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {"id":"1","title":"Test Note","text":"Test text"},
    {"id":"2","title":"finish work","text":"I need to finish my homework"}
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;
  