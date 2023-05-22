async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=c2b6a7c7-e0df-4433-bb3b-681829136d26&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;
      
      if (!matchesList) return [];
      //add your api key from cricketdata.org
      const relevantData = matchesList.filter(iplMatchOnly => iplMatchOnly.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map((match) => `${match.name}, ${match.status}`);
      console.log({ relevantData });
      document.getElementById("IPLmatches").innerHTML = relevantData.map(matchDetails => `<li>${matchDetails}</li>`).join('');
    
    })
  .catch(e => console.log(e));
}

getMatchData();
