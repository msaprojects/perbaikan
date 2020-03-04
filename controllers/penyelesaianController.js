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
exports.Penyelesaian = function(req, res){
    connection.query('SELECT * FROM penyelesaian', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Pengguna
exports.detPenyelesaian = function(req, res){

    var idpenyelesaian = req.params.idpenyelesaian;

    connection.query('SELECT * FROM penyelesaian where idpenyelesaian = ?',
    [ idpenyelesaian ],
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
exports.tambahPenyelesaian = function(req, res){

    var tanggal = req.body.tanggal;
    var keterangan = req.body.keterangan;
    var idmasalah = req.body.idmasalah;
    
    connection.query('INSERT INTO penyelesaian (tanggal, keterangan, idmasalah) VALUES (?, ?, ?);',
    [ tanggal, keterangan, idmasalah ],
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
exports.editPenyelesaian = function(req, res){

    var idpenyelesaian = req.body.idpenyelesaian;
    var tanggal = req.body.tanggal;
    var keterangan = req.body.keterangan;
    var idmasalah = req.body.idmasalah;
    
    connection.query('UPDATE penyelesaian SET tanggal = ?, keterangan = ?, idmasalah WHERE idpenyelesaian = ?',
    [ tanggal, keterangan, idmasalah, idpenyelesaian ],
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
exports.hapusPenyelesaian = function(req, res){
    
    var idpenyelesaian = req.body.idpenyelesaian;

    connection.query('DELETE FROM penyelesaian where idpenyelesaian = ?',
    [ idpenyelesaian ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Pengguna berhasil di hapus!", res)
            }
        }
    );
};
// HAPUS DATA Pengguna
exports.hapusPenyelesaiandanCheckout = function(req, res){
    
    var idmasalah = req.params.idmasalah;

    connection.query('Delete from checkout where idmasalah=?;',
    [ idmasalah ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                connection.query('DELETE FROM penyelesaian where idmasalah = ?;',
                [ idmasalah ],
                    function(error, rows, fields){
                        if(error){
                            response.forbidden(console.log(error), res)
                        }else{
                            response.ok("Data Pengguna berhasil di hapus2!", res)
                        }
                    }
                );
            }
        }
    );
    
};