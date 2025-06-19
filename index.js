//console.log(`hello`);
//window.alert(`this is an alert`)
//window.alert(`this is also an alert`)
//comment

//Name Variables
let PlayerName = "";
let CharacterName = "";

document.getElementById("playerTextSubmit").onclick = function(){
    PlayerName = document.getElementById("playerText").value;
    console.log(PlayerName);
}
document.getElementById("characterTextSubmit").onclick = function(){
    CharacterName = document.getElementById("characterText").value;
    console.log(CharacterName);
}
document.getElementById("characterText");

//Stat variables
let StartingSTATPointPool = 6;
let CurrentSTATPointPool = StartingSTATPointPool;
let BODY = 0;
let AGILITY = 0;
let MIND = 0;
let INSTINCT = 0;

document.getElementById("bodyNumber").innerHTML = BODY;
document.getElementById("agilityNumber").innerHTML = AGILITY;
document.getElementById("mindNumber").innerHTML = MIND;
document.getElementById("instinctNumber").innerHTML = INSTINCT;
document.getElementById("statPointPoolNumber").innerHTML = CurrentSTATPointPool;

function updateBody(x)
{
    console.log(`updateBody ${x}`)

    //check current statpool and update it if its a valid change, if not return false
    let retVal = updateRemainingSTATPointPool(x);
    if(retVal)
    {
        BODY += x;
        document.getElementById("bodyNumber").innerHTML = BODY;
    }
    console.log(BODY);
}
function updateAgility(x)
{
    console.log(`updateAgility ${x}`)

    //check current statpool and update it if its a valid change, if not return false
    let retVal = updateRemainingSTATPointPool(x);
    if(retVal)
    {
        AGILITY += x;
        document.getElementById("agilityNumber").innerHTML = AGILITY;
    }
}
function updateMind(x)
{
    console.log(`updateMind ${x}`)

    //check current statpool and update it if its a valid change, if not return false
    let retVal = updateRemainingSTATPointPool(x);
    if(retVal)
    {
        MIND += x;
        document.getElementById("mindNumber").innerHTML = MIND;
    }
}
function updateInstinct(x)
{
    console.log(`updateInstinct ${x}`)

    //check current statpool and update it if its a valid change, if not return false
    let retVal = updateRemainingSTATPointPool(x);
    if(retVal)
    {
        INSTINCT += x;
        document.getElementById("instinctNumber").innerHTML = INSTINCT;
    }
}
//make sure we are not out of bounds and then update the Total amount of Stat points. Parameter
// x can be +1 or -1
function updateRemainingSTATPointPool(x)
{
    //the stat is increaseing, pool is decreasing
    if(x >0)
    {
        //x is +1 so we decrement current pool
        let newSTAT = CurrentSTATPointPool - x;
        if(newSTAT >= 0)
        {
            CurrentSTATPointPool = newSTAT;
            document.getElementById("statPointPoolNumber").innerHTML = CurrentSTATPointPool;
            return true;
        }
    }//the stat is decreasing, pook is increasing
    else{
        //x is -1, the pool is increasing, so we might do a double negative to get an addition
        let newSTAT = CurrentSTATPointPool -(x);
        if(newSTAT <= StartingSTATPointPool)
        {
            CurrentSTATPointPool = newSTAT;
            document.getElementById("statPointPoolNumber").innerHTML = CurrentSTATPointPool;
            return true;
        }
    }
    return false;
}
//function that will make a windows alert before prompting the user to submit their data to local storage
function finishAndStore()
{
    if(CurrentSTATPointPool != 0)
    {
        window.alert("Error: adjust STATs until all points are spent");
        return;
    }
    if (confirm("Are you sure you want to Finish Creating your Character?")) {
        saveToLocal();
        ProceedToCharacterDisplay();
    } else {
        //cancel and return
    } 
}
function saveToLocal()
{
    localStorage.setItem('LS_playerName', PlayerName);
    localStorage.setItem('LS_characterName', CharacterName);
    localStorage.setItem('LS_body', BODY);
    localStorage.setItem('LS_agility', AGILITY);
    localStorage.setItem('LS_mind', MIND);
    localStorage.setItem('LS_instinct', INSTINCT);
}
function ProceedToCharacterDisplay()
{
    window.location.href = 'CharacterDisplay.html';
    return false;
}
function UpdateCharacterDisplay()
{
    document.getElementById("playerText").innerHTML = LS_playerName;
    document.getElementById("characterText").innerHTML = LS_characterName;
    document.getElementById("bodyNumber").innerHTML = LS_body;
    document.getElementById("agilityNumber").innerHTML = LS_agility;
    document.getElementById("mindNumber").innerHTML = LS_mind;
    document.getElementById("instinctNumber").innerHTML = LS_instinct;
}