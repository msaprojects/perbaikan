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

// LIST DATA Masalah
exports.Masalah = function(req, res){
    connection.query('SELECT a.*, b.nomesin, c.nama as site FROM masalah a, mesin b, site c where a.idmesin=b.idmesin and b.idsite=c.idsite ', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Masalah
exports.detMasalah = function(req, res){

    var idmasalah = req.params.idmasalah;

    connection.query('SELECT * FROM masalah where idmasalah = ?', 
    [ idmasalah ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA Masalah
exports.tambahMasalah = function(req, res){

    var keterangan = req.body.keterangan;
    var tanggal = req.body.tanggal;
    var jam = req.body.jam;
    var engginer = req.body.engginer;
    var shift = req.body.shift;
    var idmesin = req.body.idmesin;
    var idpengguna = req.body.idpengguna;
    
    connection.query('INSERT INTO masalah (keterangan, engginer, shift, idmesin, tanggal, jam) VALUES (?, ?, ?, ?, CURDATE(), CURTIME());',
    [ keterangan, engginer, shift, idmesin ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Masalah anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Masalah
exports.editMasalah = function(req, res){

    var keterangan = req.body.keterangan;
    var tanggal = req.body.tanggal;
    var jam = req.body.jam;
    var engginer = req.body.engginer;
    var shift = req.body.shift;
    var idmesin = req.body.idmesin;
    var idpengguna = req.body.idpengguna;
    var idmasalah = req.body.idmasalah;
    
    connection.query('UPDATE masalah SET keterangan = ?, tanggal = ?, jam = ?, engginer = ?, shift = ?, idMasalah = ?, idpengguna = ? WHERE idmasalah = ?',
    [ keterangan, tanggal, jam, engginer, shift, idmesin, idpengguna, idmasalah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Profil anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Masalah
exports.hapusMasalah = function(req, res){
    
    var idmasalah = req.body.idmasalah;

    connection.query('DELETE FROM masalah where idmasalah = ?',
    [ idmasalah ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Masalah berhasil di hapus!", res)
            }
        }
    );
};
