var teamshowing = false;


function showTeam() {
    if (!teamshowing) {
        $(".team").slideDown(1000);
        teamshowing = true;

    }
    else{
        $(".team").slideUp(1000);
        teamshowing = false;
    }
}


