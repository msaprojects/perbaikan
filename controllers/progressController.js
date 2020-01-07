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

// LIST DATA Progress
exports.Progress = function(req, res){
    connection.query('SELECT a.*, b.*, c.nomesin, d.nama as site FROM progress a, masalah b, mesin c, site d where a.idmasalah=b.idmasalah and b.idmesin=c.idmesin and c.idsite=d.idsite', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// LIST DATA Progress
exports.cProgress = function(req, res){

    var idmasalah = req.params.idmasalah;

    connection.query('SELECT a.*, b.*, c.nomesin, d.nama as site FROM progress a, masalah b, mesin c, site d where a.idmasalah=b.idmasalah and b.idmesin=c.idmesin and c.idsite=d.idsite and a.idmasalah = ?', 
    [ idmasalah ],
    function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Progress
exports.detProgress = function(req, res){

    var idprogress = req.params.idprogress;

    connection.query('SELECT * FROM progress where idprogress = ?', 
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

// INPUT DATA Progress
exports.tambahProgress = function(req, res){

    var perbaikan = req.body.perbaikan;
    var tanggal = req.body.tanggal;
    var idmasalah = req.body.idmasalah;
    var engginer = req.body.engginer;
    var shift = req.body.shift;
    
    connection.query('INSERT INTO progress (perbaikan, engginer, tanggal, shift, idmasalah) VALUES (?, ?, ?, ?, ?);',
    [ perbaikan, engginer, tanggal, shift, idmasalah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Progress anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Progress
exports.editProgress = function(req, res){

    var perbaikan = req.body.perbaikan;
    var tanggal = req.body.tanggal;
    var idmasalah = req.body.idmasalah;
    var engginer = req.body.engginer;
    var shift = req.body.shift;
    var idprogress = req.body.idprogress;
    
    connection.query('UPDATE progress SET perbaikan = ?, tanggal = ?, shift = ?, engginer = ?, idmasalah = ? WHERE idprogress = ?',
    [ perbaikan, tanggal, shift, engginer, idmasalah, idprogress ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Profil anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Progress
exports.hapusProgress = function(req, res){
    
    var idprogress = req.body.idprogress;

    connection.query('DELETE FROM progress where idprogress = ?',
    [ idprogress ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Progress berhasil di hapus!", res)
            }
        }
    );
};
