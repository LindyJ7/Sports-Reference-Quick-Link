
function setup(){
    noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    let playerName = bgpage.name;

    let url = 'https://www.basketball-reference.com/search/search.fcgi?search='

    playerName = playerName.replace(' ', '+');

    url += playerName;

    createP(url);

    window.open(url);

    loadJSON(url, gotData);

    function gotData(data){
        createP(data[0].text);

    }
}