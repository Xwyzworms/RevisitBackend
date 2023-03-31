const routes = [
    {
        method : "GET",
        path : "/",
        handler : (request, h) => 
        {
            return "Homepage";            
        }

    },
    {
        method : "GET",
        path : "/about",
        handler : (request, h) => 
        {
            return "About page";
        }
    },
    {
        method : "POST",
        path : "/about",
        handler : (request, h) => 
        {
            return `About method ${method}`
        }
    },
    {
        method : "GET",
        path : "/rose",
        handler : (request, h) => 
        {
            return "Rose page";
        }
    }, 
    {
        method : "*",
        path : "/",
        handler : (request, h) => 
        {
            return "Halaman tidak dapat diakses dengan method tersebut";
        }
    },
    {
        method : "*",
        path : "/{any*}",
        handler  : (request, h )=> 
        {
            return "Halaman tidak ditemukan ";
        }
    },
    // PATH
    {
        method : "GET",
        path : "/users/{username?}",
        handler : (request, h) => 
        {
            const {username = 'stranger'} = request.params;
            const {lang, rank} = request.query;
            console.log(request.query);
            if(lang == 'id') 
            {
               return `Hello ${username} rank ${rank}`;
            }
            return `Hello ${username}`;
        }
    },

    // Query

]


module.exports = routes