const { nanoid } = require("nanoid");
const { books } = require("./Books");
const saveBookHandler = (request, h) => {

    const {
        name, year, author,
        summary, publisher, pageCount,
        readPage, reading

    } = request.payload;

    let response;
    if (!name) {
        response = h.response({
            "status": "fail",
            "message": "Gagal menambahkan buku. Mohon isi nama buku"
        });
        response.code(400);
        return response;
    }
    else if (readPage > pageCount) {
        response = h.response({
            "status": "fail",
            "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        id, name, year,
        author, summary, publisher,
        pageCount, readPage, finished,
        reading, insertedAt, updatedAt
    }

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
        response = h.response({
            "status": "success",
            "message": "Buku berhasil ditambahkan",
            "data": {
                "bookId": id,
            }
        })
    }
    response.code(201);
    return response;


}

const getBooks = (request, h) => {

    const { name, reading, finished } = request.query;
    let filteredBooks = books;
    if (name !== undefined) {
        filteredBooks = filteredBooks.filter((book) => book
            .name.toLowerCase().includes(name.toLowerCase()));
    }

    if (reading !== undefined) {
        filteredBooks = filteredBooks.filter((book) => book.reading === !!Number(reading));
    }

    if (finished !== undefined) {
        filteredBooks = filteredBooks.filter((book) => book.finished === !!Number(finished));
    }

    const response = h.response({
        status: "success",
        data: {
            books: filteredBooks.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });
    response.code(200);
    return response
}

const editBookById = (request, h) => {
    //TODO
    const { id } = request.params;
    let response;
    const {
        name, year, author,
        summary, publisher, pageCount,
        readPage, reading
    } = request.payload;

    index = books.findIndex((book) => book.id === id);
    if (!name) {
        response = h.response({
            "status": "fail",
            "message": "Gagal memperbarui buku. Mohon isi nama buku"
        })
        response.code(400);
    }
    else if (readPage > pageCount) {
        response = h.response({
            "status": "fail",
            "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        });

        response.code(400);
    }
    else if (index === -1) {
        response = h.response({
            "status": "fail",
            "message": "Gagal memperbarui buku. Id tidak ditemukan"
        });
        response.code(404);
    }
    else if (index !== -1) {
        books[index] = {
            ...books[index], name, year, author,
            summary, publisher, pageCount,
            readPage, reading,
        }

        response = h.response({
            "status": "success",
            "message": "Buku berhasil diperbarui"
        })

        response.code(200);
    }
    return response;
}

const getBookById = (request, h) => {
    //TODO

    const { id } = request.params;
    const indx = books.findIndex((book) => book.id === id);
    if (indx !== -1) {
        const response = h.response({
            "status": "success",
            "data": {
                "book": books[indx]
            }
        })
        return response;
    }
    const response = h.response({
        "status": "fail",
        "message": "Buku tidak ditemukan"
    });

    response.code(404);
    return response;
}

const deleteBookById = (request, h) => {
    //TODO
    const { id } = request.params;
    const indx = books.findIndex((book) => book.id === id);
    let response;
    if (indx !== -1) {

        books.splice(indx, 1);
        response = h.response({
            "status": "success",
            "message": "Buku berhasil dihapus"
        });
        response.code(200);

    }
    else {
        response = h.response({
            "status": "fail",
            "message": "Buku gagal dihapus. Id tidak ditemukan"
        });
        response.code(404);
    }
    return response
}

module.exports = {
    saveBookHandler,
    getBooks,
    getBookById,
    editBookById,
    deleteBookById
}