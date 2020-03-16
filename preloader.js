var assets = document.querySelector('#assets');
var assetsLength = assets.childElementCount;
var loadedAssets = 0;

for (i = 0; i < assetsLength; i++) {


    assets.children[i].addEventListener("load", function () {

        loadedAssets++;


    });



    console.log(loadedAssets);

}
