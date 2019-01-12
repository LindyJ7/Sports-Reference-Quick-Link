

function setup(){
    noCanvas();

    console.log('shit whatup');

    let bgpage = chrome.extension.getBackgroundPage();
    let playerName = bgpage.name;

    createP(playerName);
    
    let url = 'https://www.basketball-reference.com/search/search.fcgi?search='

    playerName = playerName.replace(' ', '+');

    url += playerName;

    loadJSON(url, gotData);

    function gotData(data){
        createP(data[0].text);
        console.log("yo");
    }
}