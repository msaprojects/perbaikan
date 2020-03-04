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
exports.Dashboard = function(req, res){
    connection.query('select count(m.idmasalah)as jml_masalah, count(p.idpenyelesaian) as jml_selesai from masalah m, penyelesaian p;',
     function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

exports.Timeline = function(req, res){
    var idmasalah = req.params.idmasalah;
    connection.query("select 1 as tipe, m.jam, m.tanggal, m.masalah, m.shift, '-' as perbaikan, '-' as engginer, '-' as tanggalprog, '-' as shiftprog, '-' as tanggalselesai,'-' as keteranganselesai, '-' as kode, '-' as barang, '-' as satuan, '-' as qty, '-' as keterangancheckout from masalah m where m.idmasalah= ? union select 2 as tipe, '-' as kosong1,'-' as kosong2,'-' as kosong3,'-' as kosong4, ps.perbaikan, ps.engginer, ps.tanggal, ps.shift, '-' as kosong5, '-' as kosong6, '-' as kosong11, '-' as kosong12, '-' as kosong13, '-' as kosong14, '-' as kosong15 from progress ps where ps.idmasalah= ?  union select 3 as tipe, '-' as kosong1,'-' as kosong2,'-' as kosong3,'-' as kosong4, '-' as kosong5, '-' as kosong6, '-' as kosong7, '-' as kosong8, p.tanggal, p.keterangan, '-' as kosong11, '-' as kosong12, '-' as kosong13, '-' as kosong14, '-' as kosong15 from penyelesaian p where p.idmasalah= ? union select 4 as tipe, '-' as kosong1, '-' as kosong2, '-' as kosong3, '-' as kosong4, '-' as kosong5, '-' as kosong6, '-' as kosong7, '-' as kosong8, '-' as kosong9, '-' as kosong10, b.kode, b.nama, s.nama, c.qty, c.keterangan from checkout c, barang b, satuan s where c.idbarang=b.idbarang and c.idsatuan=s.idsatuan and c.idmasalah=?;",
    [ idmasalah, idmasalah, idmasalah, idmasalah ],
     function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

exports.Reminder = function(req, res){
    connection.query("select msn.idmesin, msn.nomesin, k.idkomponen, k.nama as komponen  from mesin msn, masalah m, bb b, checkout c, penyelesaian p, komponen k where msn.idmesin=k.idmesin and msn.idmesin=m.idmesin and m.idmasalah=c.idmasalah and c.idbarang=b.BB_ID and p.idmasalah=m.idmasalah and date_add(p.tanggal, interval b.umur-7 day) between date(now()) and date_add(now(), interval 7 day);",
     function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};