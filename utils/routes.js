'use strict';

module.exports = function(app){
    var RouteToPengguna = require('../controllers/penggunaController');
    var RouteToMesin = require('../controllers/mesinController');
    var RouteToMasalah = require('../controllers/masalahController');
    var RouteToSite = require('../controllers/siteController');
    var RouteToProgress = require('../controllers/progressController');
    var RouteToBarang = require('../controllers/barangController');
    var RouteToSatuan = require('../controllers/satuanController');
    var RouteToPenyelesaian = require('../controllers/penyelesaianController');
    var RouteToCheckout = require('../controllers/checkoutController');
    var RouteToDashboard = require('../controllers/dashboardController');
    var RouteToKomponen = require('../controllers/komponenController');

    // DASHBOARD
    app.route('/dashboard').get(RouteToDashboard.Dashboard);
    app.route('/timeline/:idmasalah').get(RouteToDashboard.Timeline);
    app.route('/reminder').get(RouteToDashboard.Reminder);

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
    app.route('/masalah/:idmasalah').get(RouteToMasalah.detMasalah);
    app.route('/masalah').post(RouteToMasalah.tambahMasalah);
    app.route('/masalah').put(RouteToMasalah.editMasalah);
    app.route('/masalah').delete(RouteToMasalah.hapusMasalah);

    // SITE
    app.route('/site').get(RouteToSite.Site);
    app.route('/site/:idsite').get(RouteToSite.detSite);
    app.route('/site').post(RouteToSite.tambahSite);
    app.route('/site').put(RouteToSite.editSite);
    app.route('/site').delete(RouteToSite.hapusSite);

    // PROGRESS
    app.route('/progress').get(RouteToProgress.Progress);
    app.route('/progress/:idprogress').get(RouteToProgress.detProgress);
    app.route('/progress').post(RouteToProgress.tambahProgress);
    app.route('/progress').put(RouteToProgress.editProgress);
    app.route('/progress').delete(RouteToProgress.hapusProgress);
    app.route('/progress1/:idmasalah').get(RouteToProgress.cProgress);

    //BARANG
    app.route('/barang').get(RouteToBarang.Barang);
    app.route('/barang/:idbarang').get(RouteToBarang.detBarang);
    app.route('/barang').post(RouteToBarang.tambahBarang);
    app.route('/barang').put(RouteToBarang.editBarang);
    app.route('/hapusBarang/:idbarang/:idmasalah').get(RouteToBarang.hapusBarang);

    //CHECKOUT
    app.route('/checkout').get(RouteToCheckout.Checkout);
    app.route('/checkout/:idmasalah').get(RouteToCheckout.detCheckout);
    app.route('/checkout').post(RouteToCheckout.tambahCheckout);
    app.route('/checkout').put(RouteToCheckout.editCheckout);
    app.route('/checkout').delete(RouteToCheckout.hapusCheckout);
    app.route('/hapusCheckout/:idcheckout').get(RouteToCheckout.hapusBarangCheckout);

    //PENYELESAIAN
    app.route('/penyelesaian').get(RouteToPenyelesaian.Penyelesaian);
    app.route('/penyelesaian/:idpenyelesaian').get(RouteToPenyelesaian.detPenyelesaian);
    app.route('/penyelesaian').post(RouteToPenyelesaian.tambahPenyelesaian);
    app.route('/penyelesaian').put(RouteToPenyelesaian.editPenyelesaian);
    app.route('/penyelesaian').delete(RouteToPenyelesaian.hapusPenyelesaian);
    app.route('/hapuspenyelesaian/:idmasalah').get(RouteToPenyelesaian.hapusPenyelesaiandanCheckout);

    //KOMPONEN
    app.route('/komponen').get(RouteToKomponen.Komponen);
    app.route('/komponen/:idmesin').get(RouteToKomponen.detKomponen);
    app.route('/komponen/').post(RouteToKomponen.tambahKomponen);
    app.route('/hapuskomponen/:idkomponen').get(RouteToKomponen.hapusKomponen);

}