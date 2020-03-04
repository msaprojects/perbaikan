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
exports.Checkout = function(req, res){
    connection.query('SELECT c.*, b.BB_NAMA as barang, b.BB_SATUAN as satuan, m.masalah  From checkout c, masalah m, bb b where c.idmasalah=m.idmasalah and c.idbarang=b.BB_ID',
     function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Satuan
exports.detCheckout = function(req, res){

    var idmasalah = req.params.idmasalah;

    connection.query('SELECT c.*, b.nama as barang,b.kode as kode, s.nama as satuan, m.masalah  From checkout c, masalah m, barang b, satuan s where c.idmasalah=m.idmasalah and c.idbarang=b.idbarang and c.idsatuan=s.idsatuan and c.idmasalah = ?',
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

// INPUT DATA Satuan
exports.tambahCheckout = function(req, res){

    var idmasalah = req.body.idmasalah;
    var idbarang = req.body.idbarang;
    var idsatuan = req.body.idsatuan;
    var tanggal = req.body.tanggal;
    var keterangan = req.body.keterangan;
    var qty = req.body.qty;
    
    connection.query('INSERT INTO checkout (idmasalah, idbarang, idsatuan, tanggal, keterangan, qty) VALUES (?, ?, ?, ?, ?, ?);',
    [ idmasalah, idbarang, idsatuan, tanggal, keterangan, qty ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Barang anda berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.editCheckout = function(req, res){

    var idmasalah = req.body.idmasalah;
    var idbarang = req.body.idbarang;
    var idsatuan = req.body.idsatuan;
    var tanggal = req.body.tanggal;
    var keterangan = req.body.keterangan;
    var qty = req.body.qty;
    var idcheckout = req.body.idcheckout;

    connection.query('UPDATE checkout SET idmasalah = ?, idbarang = ?, idsatuan = ?, tanggal = ?, keterangan = ?, qty = ? WHERE idcheckout = ?',
    [ idmasalah, idbarang, idsatuan, tanggal, keterangan, qty, idcheckout ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Barang anda berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.hapusCheckout = function(req, res){
    
    var idcheckout = req.body.idcheckout;

    connection.query('DELETE FROM checkout where idcheckout = ?',
    [ idcheckout ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Checkout berhasil di hapus!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.hapusBarangCheckout = function(req, res){
    
    var idcheckout = req.params.idcheckout;

    connection.query('DELETE FROM checkout where idcheckout = ?',
    [ idcheckout ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Barang berhasil di hapus!", res)
            }
        }
    );
};
