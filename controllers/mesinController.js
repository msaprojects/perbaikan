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

// LIST DATA Mesin
exports.Mesin = function(req, res){
    connection.query('SELECT a.*, b.nama as site FROM mesin a, site b where a.idsite=b.idsite', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Mesin
exports.detMesin = function(req, res){

    var idmesin = req.params.idmesin;

    connection.query('SELECT * FROM mesin where idmesin = ?', [ idmesin ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA Mesin
exports.tambahMesin = function(req, res){

    var nomesin = req.body.nomesin;
    var keterangan = req.body.keterangan;
    var idsite = req.body.idsite;
    
    connection.query('INSERT INTO perbaikan.mesin (nomesin, keterangan, idsite) VALUES (?, ?, ?, ?);',
    [ nomesin, site, keterangan, idsite ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Mesin anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA MESIN
exports.editMesin = function(req, res){

    var idmesin = req.body.idmesin;
    var nomesin = req.body.nomesin;
    var idsite = req.body.site;
    var keterangan = req.body.keterangan;
    
    connection.query('UPDATE mesin SET nomesin = ?, idsite = ?, keterangan = ? WHERE idmesin = ?',
    [ nomesin, idsite, keterangan, idmesin ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Site anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA MESIN
exports.hapusMesin = function(req, res){
    
    var idmesin = req.body.idmesin;

    connection.query('DELETE FROM mesin where idmesin = ?',
    [ idmesin ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Mesin berhasil di hapus!", res)
            }
        }
    );
};
