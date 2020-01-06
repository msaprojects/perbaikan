'use strict';

module.exports = function(app){
    var RouteToPengguna = require('../controllers/penggunaController');
    var RouteToMesin = require('../controllers/mesinController');
    var RouteToMasalah = require('../controllers/masalahController');

    // PENGGUNA
    app.route('/pengguna').get(RouteToPengguna.Pengguna);
    app.route('/pengguna/:idpengguna').get(RouteToPengguna.detPengguna);
    app.route('/pengguna').post(RouteToPengguna.tambahPengguna);
    app.route('/pengguna').put(RouteToPengguna.editPengguna);
    app.route('/pengguna').delete(RouteToPengguna.hapusPengguna);
    
    // MESIN
    app.route('/mesin').get(RouteToMesin.Mesin);
    app.route('/mesin/:idmesin').get(RouteToMesin.detMesin);
    app.route('/mesin').post(RouteToMesin.tambahMesin);
    app.route('/mesin').put(RouteToMesin.editMesin);
    app.route('/mesin').delete(RouteToMesin.hapusMesin);
    
    // MASALAH
    app.route('/masalah').get(RouteToMasalah.Masalah);
    app.route('/pengguna/:idpengguna').get(RouteToMasalah.detMasalah);
    app.route('/pengguna').post(RouteToMasalah.tambahMasalah);
    app.route('/pengguna').put(RouteToMasalah.editMasalah);
    app.route('/pengguna').delete(RouteToMasalah.hapusMasalah);

}