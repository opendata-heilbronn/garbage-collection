var sys = require('sys')
var exec = require('child_process').exec;
var child;


var baseUrl = "http://www.landkreis-heilbronn.de/sixcms/media.php/103/";
var pdfNames = ["Abstatt%5B1%5D.pdf",
    "Bad%20Friedrichshall-Duttenberg%2C%20-Hagenbach%2C%20-Jagstfeld%2C%20-Untergriesheim2015neu.pdf",
    "Bad_Friedrichshall-Kochendorf%2C_-Plattenwald%5B1%5D.pdf",
    "Bad%20Rappenau-Babst_Bonf_Fuerf_Gromb_Obergi_Tresch.pdf",
    "Bad_Rappenau-Stadt_Heinsh_Wollenb_Zimmerh_neu%5B1%5D.pdf",
    "Bad_Wimpfen%5B1%5D.pdf",
    "Beilstein%5B1%5D.pdf",
    "Brackenheim-Botenheim_Duerrenzimmern.pdf",
    "Brackenheim-Stadt%2C_-Haberschlacht%2C_-Hausen%2C_-Meimsheim%2C_-Neipperg%2C_-Stockheim%5B1%5D.pdf",
    "Cleebronn%5B1%5D.pdf",
    "Eberstadt%5B1%5D.pdf",
    "Ellhofen%5B1%5D.pdf",
    "Eppingen_Muehlbach.pdf",
    "Eppingen2015_Stadt_Suedl_neu.pdf",
    "Eppingen_Stadt_Noerdl_neu.pdf",
    "Eppingen_Adelshofen_neu.pdf",
    "Eppingen-Kleingartach%2C_-Rohrbach%5B1%5D.pdf",
    "Erlenbach%5B1%5D.pdf",
    "Gemmingen-Stebbach%5B1%5D.pdf",
    "Gemmingen-Hauptort%5B1%5D.pdf",
    "Gundelsheim%5B1%5D.pdf",
    "Gueglingen.37101.pdf",
    "Ilsfeld-Schozach%5B1%5D.pdf",
    "Ilsfeld_Hauptort_Abstetter%20Hof_Auenstein_Helfenberg_Wuestenhausen.pdf",
    "Hardthausen%5B1%5D.pdf",
    "Ittlingen%5B1%5D.pdf",
    "Jagsthausen%5B1%5D.pdf",
    "Kirchardt%5B1%5D.pdf",
    "Langenbrettach%5B1%5D.pdf",
    "Lauffen%5B1%5D.pdf",
    "Lehrensteinsfeld%5B1%5D.pdf",
    "Leingarten%5B1%5D.pdf",
    "Loewenstein.pdf",
    "Massenbachhausen%5B1%5D.pdf",
    "Moeckmuehl_Zuettlingen.pdf",
    "Moeckmuehl_Stadt_Bittelbronn_Korb_Ruchsen.pdf",
    "Neckarsulm-Amorbach%5B1%5D.pdf",
    "Neckarsulm_Stadt_Dahenfeld%5B1%5D.pdf",
    "Neckarsulm-Obereisesheim%5B1%5D.pdf",
    "Neckarwestheim%5B1%5D.pdf",
    "Neudenau%5B1%5D.pdf",
    "Neuenstadt_am_Kocher%5B1%5D.pdf",
    "Wuestenrot.pdf",
    "Zaberfeld-Leonbronn%2C_-Ochsenburg%5B1%5D.pdf",
    "Zaberfeld-Hauptort%2C_-Michelbach%5B1%5D.pdf",
    "Widdern%5B1%5D.pdf",
    "Weinsberg_Stadt_Gellmersbach_Weissenhof_Wimmental.pdf",
    "Weinsberg-Grantschen%5B1%5D.pdf",
    "Untereisesheim%5B1%5D.pdf",
    "Untergruppenbach%5B1%5D.pdf",
    "Talheim%5B1%5D.pdf",
    "Siegelsbach%5B1%5D.pdf",
    "Schwaigern-Niederhofen%5B1%5D.pdf",
    "Schwaigern-Massenbach%5B1%5D.pdf",
    "Schwaigern-Stadt%2C_-Stetten%5B1%5D.pdf",
    "Roigheim%5B1%5D.pdf",
    "Pfaffenhofen%5B1%5D.pdf",
    "Offenau%5B1%5D.pdf",
    "Oedheim%5B1%5D.pdf",
    "Obersulm-Eichelberg%2C_-Friedrichshof%2C_-Weiler%2C_-Willsbach%5B1%5D.pdf",
    "Obersulm_Affaltrach_Eschenau_Suelzbach_Wieslensdorf.pdf",
    "Nordheim%5B1%5D.pdf"];



pdfNames.forEach(function(pdfName) {
    var pdfUrl = baseUrl + pdfName;
    var wgetCommand = 'wget "'+pdfUrl+'"';

    child = exec(wgetCommand, function (error, stdout, stderr) {
        sys.print('stdout: ' + stdout);
        sys.print('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
});