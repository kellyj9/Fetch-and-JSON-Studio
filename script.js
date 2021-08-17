window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) { 
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            const div = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li id="active${i}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                    `;
                if (json[i].active === true) {
                    document.getElementById(`active${i}`).style.color="green";
                }
            } 
            div.innerHTML += `<div>Astronaut Count: ${json.length}</div>`;
        });
    });
});