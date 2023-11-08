var today = new Date(); 
    let threeDaysAgo = new Date();

    threeDaysAgo.setDate(today.getDate() - 45);
    var dateInWords = threeDaysAgo.toDateString();

    document.getElementById("disDate").innerHTML = dateInWords;



