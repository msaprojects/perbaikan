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

// LIST DATA Site
exports.Site = function(req, res){
    connection.query('SELECT * FROM site', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Site
exports.detSite = function(req, res){

    var idsite = req.params.idsite;

    connection.query('SELECT * FROM site where idsite = ?', [ idsite ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA site
exports.tambahSite = function(req, res){

    var nama = req.body.nama;
    var keterangan = req.body.keterangan;
    
    connection.query('INSERT INTO site (nama, keterangan) VALUES (?, ?);',
    [ nama, keterangan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Site anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Site
exports.editSite = function(req, res){

    var idsite = req.body.idsite;
    var nama = req.body.nama;
    var keterangan = req.body.keterangan;
    
    connection.query('UPDATE site SET nama = ?, keterangan = ? WHERE idsite = ?',
    [ nama, keterangan, idsite],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Site anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Site
exports.hapusSite = function(req, res){
    
    var idsite = req.body.idsite;

    connection.query('DELETE FROM site where idsite = ?',
    [ idsite ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data site berhasil di hapus!", res)
            }
        }
    );
};
