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

// LIST DATA Satuan
exports.Satuan = function(req, res){
    connection.query('SELECT * FROM satuan', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Satuan
exports.detSatuan = function(req, res){

    var idsatuan = req.params.idsatuan;

    connection.query('SELECT * FROM satuan where idsatuan = ?', [ idSatuan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA Satuan
exports.tambahSatuan = function(req, res){

    var nama = req.body.nama;
    var keterangan = req.body.keterangan;
    
    connection.query('INSERT INTO satuan (nama, keterangan) VALUES (?, ?);',
    [ nama, keterangan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Satuan anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.editSatuan = function(req, res){

    var idsatuan = req.body.idsatuan;
    var nama = req.body.nama;
    var keterangan = req.body.keterangan;
    
    connection.query('UPDATE satuan SET nama = ?, keterangan = ? WHERE idsatuan = ?',
    [ nama, keterangan, idsatuan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Satuan anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.hapusSatuan = function(req, res){
    
    var idsatuan = req.body.idsatuan;

    connection.query('DELETE FROM satuan where idsatuan = ?',
    [ idsatuan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Satuan berhasil di hapus!", res)
            }
        }
    );
};
