module.exports = {
    LOGIN: {
        SIGNUP: 'INSERT INTO User(`username`, `passwd`, `createdDate`) VALUES(?, ?, ?);',
        SIGNIN: 'SELECT * FROM User WHERE username = ?;',
        RETRIEVE_USER: 'SELECT * FROM User WHERE username = ?;',
        UPDATE_USER: 'UPDATE User SET lastLogin = ?, nbLogin = nbLogin + 1 WHERE idUser = ?;',
    },
    DOC: {
        GET: {
            DOCS_USERID: 'SELECT D.title, D.description, D.modified, D.created, D.path, C.name ' +
            'FROM Docs D ' +
            'INNER JOIN User U ON U.idUser = D.idUser' +
            'INNER JOIN catDoc CT ON CT.idDoc = D.idDoc ' +
            'INNER JOIN Categories C ON C.idCat = CT.idCat ' +
            'WHERE U.idUser = ?' +
            'GROUP BY D.title, D.description, D.modified, D.created, D.path, C.name;',

            DOCSID: 'SELECT * FROM Docs WHERE idDoc = ?;',

            ALL_DOCS: 'SELECT D.title, D.description, D.modified, D.created, D.path, C.name ' +
            'FROM Docs D ' +
            'INNER JOIN User U ON U.idUser = D.idUser' +
            'INNER JOIN catDoc CT ON CT.idDoc = D.idDoc ' +
            'INNER JOIN Categories C ON C.idCat = CT.idCat ' +
            'GROUP BY D.title, D.description, D.modified, D.created, D.path, C.name;',

            DOCS_CATID: 'SELECT D.title, D.description, D.modified, D.created, D.path ' +
            'FROM Docs D ' +
            'INNER JOIN catDoc CT ON CT.idDoc = D.idDoc ' +
            'INNER JOIN Categories C ON C.idCat = CT.idCat ' +
            'WHERE C.idCat = ? ' +
            'GROUP BY D.title, D.description, D.modified, D.created, D.path;',
        },
        POST: {
            NEW_DOC: 'INSERT INTO Docs(`title`, `path`, `description`, `modified`, `created`, `idUser`) VALUES (?, ?, ?, ?, ?, ?)',

        },
        PUT: {

        },
        DELETE: {

        }
    },
    CAT: {
        GET: {
            ALL: 'SELECT * FROM Categories;',
            CATID: 'SELECT * FROM Categories WHERE `idCat` = ?'
        },
        POST: {
            DOCS_CAT: 'INSERT INTO catDoc (`idDoc`, `idCat`) VALUES(?, ?);'
        },
        PUT: {

        },
        DELETE: {

        }
    }
}