(function () {
    "use strict";
    let books = ["2666",
        "all_about_love",
        "desert_solitaire",
        "disgrace",
        "geek_love",
        "gilead",
        "giovanni_room",
        "a_good_man_is_hard_to_find_and_other_stories",
        "the_handmaid_tale",
        "the_hitchhiker_guide_to_the_galaxy"];
    let imgObj = {
        2666: "https://upload.wikimedia.org/wikipedia/commons/8/8e/2666.jpg",
        all_about_love: "https://images.gr-assets.com/books/1394343540l/21317498.jpg",
        desert_solitaire: "https://images.gr-assets.com/books/1312008341l/242268.jpg",
        disgrace: "https://images-na.ssl-images-amazon.com/images/I/516xcYMIjOL._SX324_BO1,204,203,200_.jpg",
        geek_love: "https://images.gr-assets.com/books/1366699063l/13872.jpg",
        gilead: "https://images-na.ssl-images-amazon.com/images/I/510CJT7RRNL._SX316_BO1,204,203,200_.jpg",
        giovanni_room: "https://images-na.ssl-images-amazon.com/images/I/818pjsZPHXL.jpg",
        a_good_man_is_hard_to_find_and_other_stories: "https://images.booksense.com/images/652/364/9780156364652.jpg",
        the_handmaid_tale: "http://is3.mzstatic.com/image/thumb/Music127/v4/37/89/74/37897422-4ccf-4129-610b-3844a609babc/source/1200x630bb.jpg",
        the_hitchhiker_guide_to_the_galaxy: "https://images-na.ssl-images-amazon.com/images/I/51SZyBVNjtL._SX340_BO1,204,203,200_.jpg"
    };
    let booksInf = {
        2666: {
            title: "2666",
            language: "Spanish",
            author: "Roberto Bolaño"
        },
        all_about_love: {
            title: "All about Love",
            language: "English",
            author: "bell hooks"
        },
        desert_solitaire: {
            title: "Desert Solitaire",
            language: "English",
            author: "Edward Abbey"
        },
        disgrace: {
            title: "Disgrace",
            language: "Australia",
            author: "J. M. Coetzee"
        },
        geek_love: {
            title: "geek love",
            language: "English",
            author: "Katherine Dunn"
        },
        gilead: {
            title: "gilead",
            language: "English",
            author: "Marilynne Robinson"
        },
        giovanni_room: {
            title: "Giovanni Room",
            language: "English",
            author: "James Baldwin"
        },
        a_good_man_is_hard_to_find_and_other_stories: {
            title: "A Good Man Is Hard to Find and Other Stories",
            language: "English",
            author: "Flannery O'Connor"
        },
        the_handmaid_tale: {
            title: "The Handmaid's Tale",
            language: "English",
            author: "Margaret Atwood"
        },
        the_hitchhiker_guide_to_the_galaxy: {
            title: "The Hitchhiker's Guide to the Galaxy",
            language: "English",
            author: "Douglas Adams"
        }
    };
    const root = document.getElementById('root');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const myFavBooks = document.createElement('h1');
    myFavBooks.innerHTML = 'My Favorite Books';
    header.appendChild(myFavBooks);
    root.appendChild(header);
    const ul = document.createElement('ul');
    ul.innerHTML = '';
    root.appendChild(ul);

    function renderBooks() {
        for (let i = 0; i < books.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('id', books[i]);
            const h1 = document.createElement('h1');
            h1.innerHTML = booksInf[books[i]].title;
            const h3 = document.createElement('h3');
            h3.innerHTML ='the author: ' + booksInf[books[i]].author;
            const p = document.createElement('p');
            p.innerHTML ='the language: ' + booksInf[books[i]].language;
            const img = document.createElement('img');
            img.setAttribute('src', imgObj[books[i]]);
            img.setAttribute('width', '250 %');
            li.appendChild(h1);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
    renderBooks();
})();