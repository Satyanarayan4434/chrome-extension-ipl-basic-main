document.getElementById("heading1").setAttribute("style","font-family: 'Ysabeau', sans-serif;font-size: 1.5rem;text-align: center;color: whitesmoke;background-color: rgba(0, 0, 0, 0.315);border-radius: 25px;");
document.getElementById("IPLmatches").setAttribute("style","color:white; font-size: 1rem;  font-family: 'Prompt', sans-serif;");
document.getElementById("insideHeadingSpan").setAttribute("style","background: linear-gradient(to right, #e76a9a 0%, #d4c4e7 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");
async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=67fd01a2-3540-4369-b0a0-4f4d1c079e90&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;
      const matchesList = data.data;     
      if (!matchesList) return [];
      //add your api key from cricketdata.org
      const relevantData = matchesList.filter(iplMatchOnly => iplMatchOnly.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map((match) => `${match.name}, ${match.status}`);
      document.getElementById("IPLmatches").innerHTML = relevantData.map(matchDetails => `<li>${matchDetails}.</li>`).join('');
    })
  .catch(e => console.log(e));
}

getMatchData();
