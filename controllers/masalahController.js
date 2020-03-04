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
    connection.query("select m.*, ms.nomesin, s.nama as site, ifnull(p.idpenyelesaian,'-') as idpenyelesaian, if(p.idpenyelesaian is null, 0, 1) as status from masalah m left join penyelesaian p on m.idmasalah=p.idmasalah inner join mesin ms on m.idmesin=ms.idmesin inner join site s on ms.idsite=s.idsite;", function(error, rows, fields){
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

    var masalah = req.body.masalah;
    var tanggal = req.body.tanggal;
    var jam = req.body.jam;
    var idmesin = req.body.idmesin;
    var shift = req.body.shift;
    var idpengguna = req.body.idpengguna;
    
    connection.query('INSERT INTO masalah (masalah, idmesin, tanggal, jam, shift, timestamp) VALUES (?, ?, ?, ?, ?, now());',
    [ masalah, idmesin, tanggal, jam, shift ],
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

    var masalah = req.body.masalah;
    var tanggal = req.body.tanggal;
    var jam = req.body.jam;
    var shift = req.body.shift;
    var idmesin = req.body.idmesin;
    var idpengguna = req.body.idpengguna;
    var idmasalah = req.body.idmasalah;
    
    connection.query('UPDATE masalah SET masalah = ?, tanggal = ?, jam = ?, idmesin = ?, shift = ? WHERE idmasalah = ?',
    [ masalah, tanggal, jam, idmesin, shift, idmasalah ],
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
