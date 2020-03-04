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
exports.Komponen = function(req, res){
    connection.query('SELECT * from komponen', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
//INSERT DATA
exports.tambahKomponen = function(req, res){

    var nama = req.body.nama;
    var jumlah = req.body.jumlah;
    var idmesin = req.body.idmesin;
    
    connection.query('INSERT INTO komponen (nama, jumlah, idmesin) VALUES (?, ?, ?);',
    [ nama, jumlah, idmesin ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Komponen anda berhasil di tambahkan!", res)
            }
        }
    );
};
// DETAIL DATA Mesin
exports.detKomponen = function(req, res){

    var idmesin = req.params.idmesin;

    connection.query('SELECT * FROM komponen where idmesin = ?', [ idmesin ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};
// HAPUS DATA MESIN
exports.hapusKomponen = function(req, res){
    
    var idkomponen = req.params.idkomponen;

    connection.query('DELETE FROM komponen where idkomponen = ?',
    [ idkomponen ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Komponen Mesin berhasil di hapus!", res)
            }
        }
    );
};
