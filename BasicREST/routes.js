const { addNoteHandler,
        getNotesHandler, 
        getNotesByIdHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method : 'GET',
    path : '/notes',
    handler : getNotesHandler,
  },
  {
    method : 'GET',
    path : '/notes/{id}',
    handler : getNotesByIdHandler,
  },
];

module.exports = routes;
