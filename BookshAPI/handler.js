const {nanoid} = require("nanoid");
const {books} = require("./Books");
const saveBookHandler = (request, h) => 
{
    
    const {
        name, year, author,
        summary, publisher, pageCount,
        readPage, reading

    } = request.payload;
    
    let response;
    if(!name) 
    {
        response = h.response({
            "status" : "fail",
            "message" : "Gagal menambahkan buku. Mohon isi nama buku"
        });
        response.code(400);
        return response;
    }
    else if(readPage > pageCount) 
    {
        response = h.response({
            "status" : "fail",
            "message" : "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        id,name,year,
        author, summary, publisher,
        pageCount,readPage,finished,
        reading,insertedAt,updatedAt
    }

    books.push(newBook);
    console.log(books);
    const isSuccess = books.filter((book) => book.id === id).length > 0;
    if(isSuccess) 
    {
        response = h.response({
            "status" : "success",
            "message" : "Buku berhasil ditambahkan",
            "data" : {
                "bookId" : id,
            }
        })
    } 
    
    return response;


}

const getBooks = (request, h) => {
    
    //TODO
    let returnedObject = []
    for(let i =0 ; i <books.length; i++ ) 
    {
        const object = {}
        object["id"] = books[i]["id"];
        console.log(books[i]["id"]);
        object["name"] = books[i]["name"];
        object["publisher"] = books[i]["publisher"]; 

        returnedObject.push(object);
    }
    const response = h.response({
        "status" : "success",
        "data" : {
            "books" : returnedObject
        }
    })

    return response
}

const editBookById = (request, h) => {
    //TODO
    const {id} = request.params;
    let response;
    const {
           name, year, author,
           summary, publisher, pageCount,
            readPage, reading
        } = request.payload;
        
    index =  books.findIndex((book)=> book.id === id);
    if(name === '') 
    {
        response = h.response({
            "status" : "fail",
            "message" : "Gagal memperbarui buku. Mohon isi nama buku"
        })
        response.code(400);
    }
    else if(readPage > pageCount) 
    {
        response = h.response({
            "status" : "fail",
            "message" : "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        });

        response.code(400);
    }
    else if(index != -1) 
    {
        response = h.response({
            "status" : "fail",
            "message": "Gagal memperbarui buku. Id tidak ditemukan"
        });
        response.code(404)
    }
    else 
    {
        books[index] = {
            ...books[index], name, year, author,
            summary, publisher, pageCount,
            readPage, reading,
        }

        response = h.response({
            "status" : "success",
            "message" : "Buku berhasil diperbarui"
        }) 

    }

    return response;
}

const getBookById = (request, h) => {
    //TODO

    const {id} = request.params;
    const indx = books.findIndex((book) => book.id === id);
    if(indx !== -1) 
    {
        const response = h.response({
            "status" : "success",
            "data" : {
                "book" : books[indx]
            }
        })           
        return response;
    }
    const response  = h.response({
        "status" : "fail",
        "message" : "Buku tidak ditemukan"
    });

    response.code(404);
    return response;
}   

const deleteBookById = (request, h) => {
    //TODO


    const response = h.response({
        "status" : "fail",
        "message" : "Buku gagal dihapus. Id tidak ditemukan"
    });
    response.code(404);
    return response
}

module.exports = { 
    saveBookHandler,
    getBooks, 
    getBookById, 
    editBookById,
    deleteBookById
}