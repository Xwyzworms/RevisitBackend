const { nanoid } = require('nanoid');
const { notes } = require('./data/noteModel');

const addNoteHandler = (request, h) => {

    const { title, tags, body } = request.payload;

    const id = nanoid(16);

    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };
    console.log(notes);
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },

        });

        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'error',
        message: 'Catatan gagal ditambahkan',
    });

    response.code(500);
    return response;
};

const getNotesHandler = (request, h) => {

    const obj =h.response( {
        status: "success",
        message : "Data berhasil didapatkan",
        data: {
            notes,
        },
    });
    obj.code(200);
    return obj;
}

const getNotesByIdHandler = (request, h) => {

    const {id} = request.params;
    let note;
    for(let i = 0 ; i < notes.length; i++) 
    {
        if(notes[i]['id'] == id) 
        {
            note = notes[i];
        }
    }

    if(note !== undefined) 
    {
        // Siapin return Success
        return h.response({
            status : "success",
            message : "Successfully getting the data",
            data : {
                note,
            }
        })
    }
    
    const response =  h.response({
        status : 'failed',
        message : "Catatan tidak ditemukan"
    });
    response.code(404);
    return response;
}

module.exports = {
    addNoteHandler,
    getNotesHandler,
    getNotesByIdHandler,
};
