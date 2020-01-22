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
exports.Barang = function(req, res){
    connection.query('SELECT b.*, s.nama as satuan FROM barang b, satuan s where b.idsatuan=s.idsatuan', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA Satuan
exports.detBarang = function(req, res){

    var idbarang = req.params.idbarang;

    connection.query('SELECT * FROM barang where idbarang = ?',
    [ idbarang ],
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
exports.tambahBarang = function(req, res){

    var kode = req.body.kode;
    var nama = req.body.nama;
    var umur_pakai = req.body.umur_pakai;
    var keterangan = req.body.keterangan;
    var idsatuan = req.body.idsatuan;
    
    connection.query('INSERT INTO barang (kode, nama, umur_pakai, keterangan, idsatuan) VALUES (?, ?, ?, ?, ?);',
    [ kode, nama, umur_pakai, keterangan, idsatuan ],
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
exports.editBarang = function(req, res){

    var kode = req.body.kode;
    var nama = req.body.nama;
    var umur_pakai = req.body.umur_pakai;
    var keterangan = req.body.keterangan;
    var idsatuan = req.body.idsatuan;
    var idbarang = req.body.idbarang;

    connection.query('UPDATE barang SET kode = ?, nama = ?, umur_pakai = ?, keterangan = ?, idsatuan = ? WHERE idbarang = ?',
    [ kode, nama, umur_pakai, keterangan, idsatuan, idbarang ],
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
exports.hapusBarang = function(req, res){
    
    var idbarang = req.body.idbarang;

    connection.query('DELETE FROM barang where idbarang = ?',
    [ idbarang ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Barang berhasil di hapus!", res)
            }
        }
    );
};
