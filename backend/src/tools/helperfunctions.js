
function getBeirutDate() {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*3));


    const beirutDate = nd.toLocaleString(); // 8/12/2020, 3:26:35 AM

    const unformattedDate = beirutDate.split(',')[0].split('/'); // ['8', '12', '20']

    const yyyy = unformattedDate[2];
    const mm = unformattedDate[0] - 1;
    const dd = unformattedDate[1];

    const formattedDate = new Date(yyyy, mm, dd, 0, 0, 0, 0); // 2020-08-12T07:00:00.000Z
    formattedDate.setUTCHours(0,0,0,0); // 2020-08-12T00:00:00.000Z

    return formattedDate; // Find a better solution
}

async function formatPosts(allActivePosts) {

    var stringifyPosts = await JSON.stringify(allActivePosts);
    var formattedPosts = await JSON.parse(stringifyPosts);

    // Format Date: 2020-08-12T00:00:00.000Z -> TODAY.
    const beirutDate = getBeirutDate();
    const oneDay = 24 * 60 * 60 * 1000;

    for (var i = 0; i < formattedPosts.length; i++) {
        const eventDate = allActivePosts[i].eventDate;
        const difference = Math.round(Math.abs((beirutDate - eventDate) / oneDay));

        if (difference === 0) {
            formattedPosts[i].eventDate = "TODAY | اليوم"
        } else if (difference === 1) {
            formattedPosts[i].eventDate = "TOMORROW | غدا"
        } else {
            formattedPosts[i].eventDate = String(difference) + " DAYS";
        }
    }

    return formattedPosts;
}

module.exports = {
    getBeirutDate: getBeirutDate,
    formatPosts: formatPosts
}
