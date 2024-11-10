// idk how this is going to work but I'm going to plan it out at least

// gets rows/columns from data stored on the cloud
// should be able to display any of these as an axis or do a calculation like
    // get "the number of these opens that are in Mexico" so that can be input into this zone of the heatmap, etc.
// should plan out exactly which graphs that we want to be displayable


// BAR
    // opens/ location
    // opens/ time
    // opens/ browser
            // all/ all (bc why not)

// LINE
    // opens/ time

// PIE
    // opens/ location
    // opens/ time
    // opens/ browser
            // all/ all (bc why not)

// GAUGE
    // % opens/ non-opens
        // % opens in a location

// WORLD
    // num opens
    // most popular browser
    // avg popular time



    // (async () => {
    //     const information = await fetch('https://backend.ichenglin.net/email_tracking/test').then(response => response.json());
    //     console.log(information);

    //     let array = information.foo;
    //     console.log(array);
    // }
    // )();

    
    // LINE, PIE, BAR are all set up to "receive data"
    // Gauge & World can't

    // need a hard coded value of how many emails were sent out



    // if we have a dataset, we can get every array needed like this

    let numOpens = 3; // number of entries in the dataset
    let numTotal = 30; // total number of emails sent out
    let numUnopened = numTotal - numOpens;

    let countryLoc = ["US", "Mexico", "France"];
    let cityLoc = ["Madison", "Mexico City", "Paris"];
    let browsers = ["Chrome", "Chrome", "Firefox"];
    let times = ["1 AM", "2 PM", "4 PM"];
    let numberOpensPerAcc = [1, 1, 2];

    // EX: Gauge: %
    let barA = numOpens;
    let barB = numUnopened;

