'use strict';

var response = require('../utils/reqcode');
var connection = require('../utils/connection');

// Controller Structure
// + controller
// |- List Data
// |- Detail Data
// |- Insert Data
// |- Update Data
// |- Hapus Data
// |- Custom Data

// LIST DATA Pengguna
exports.Pengguna = function(req, res){
    connection.query('SELECT * FROM pengguna', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Pengguna
exports.detPengguna = function(req, res){

    var idpengguna = req.params.idpengguna;

    connection.query('SELECT * FROM pengguna where idpengguna = ?', [ idpengguna ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA Pengguna
exports.tambahPengguna = function(req, res){

    var nama = req.body.nama;
    var token = req.body.token;
    var uuid = req.body.uuid;
    
    connection.query('INSERT INTO pengguna (nama, token, uuid) VALUES (?, ?, ?);',
    [ nama, token, uuid ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Pengguna anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Pengguna
exports.editPengguna = function(req, res){

    var idpengguna = req.body.idpengguna;
    var nama = req.body.nama;
    var token = req.body.token;
    var uuid = req.body.uuid;
    
    connection.query('UPDATE pengguna SET nama = ?, token = ?, uuid = ? WHERE idpengguna = ?',
    [ nama, token, uuid, idpengguna ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Pengguna anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Pengguna
exports.hapusPengguna = function(req, res){
    
    var idpengguna = req.body.idpengguna;

    connection.query('DELETE FROM pengguna where idpengguna = ?',
    [ idpengguna ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Pengguna berhasil di hapus!", res)
            }
        }
    );
};
