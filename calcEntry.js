// Takes the data & converts it into the form I need it to be in for each graph


// BAR
    // opens/ browser
    // opens/ emailCampaign
        // opens/ device ?

// LINE
    // opens/ time w/ emailCampaign

// PIE
    // opens/ location
    // opens/ browser
        // opens/ device ?

// GAUGE
    // % opens/ non-opens
        // % opens for a group


        (async () => {

            const information = await fetch('https://backend.ichenglin.net/email_tracking/user/emails', {
                headers: {
                    "Authorization": `Bearer ${"1".repeat(500)}`
                }
            }).then(response => response.json());
            //console.log(information);
    

            function getUniqueStrings(arr) {
                return [...new Set(arr)];
            }

            const allLoc = information.result.map(entry => entry.location_country)
            const uniqueLocations = getUniqueStrings(allLoc);
            console.log(uniqueLocations); 

            const allBrowsers = information.result.map(entry => entry.browser_name)
            const uniqueBrowsers = getUniqueStrings(allBrowsers);
            console.log(uniqueBrowsers);

            const allGroups = information.result.map(entry => entry.request_group)
            const uniqueGroups = getUniqueStrings(allGroups);
            console.log(uniqueGroups);
            
            const allTimes = information.result.map(entry => entry.request_date)
            const uniqueTimes = getUniqueStrings(allTimes);
            console.log(uniqueTimes);

            const allOpens = information.result.map(entry => entry.request_count)



            let bCounts = []; // Now count number of entries with browsers[i] && opens > 1
            let gCounts = []; // count number of entries with groups[i] && opens > 1
            let locCounts = []; // same with location
            let timeCounts = []; // count number of entries times[i] && opens > 1

            let gUCounts = []; // count every groups[i] && opens < 2


            for (let i = 0; i < uniqueLocations.length; i++){
                locCounts.push(0);
                for (let j = 0; j < allLoc.length; j++){
                    if(uniqueLocations[i] == allLoc[j] && allOpens[j] > 1){
                        locCounts[i]++;
                    }

                }
            }
            console.log(locCounts);


            for (let i = 0; i < uniqueBrowsers.length; i++){
                bCounts.push(0);
                for (let j = 0; j < allBrowsers.length; j++){
                    if(uniqueBrowsers[i] == allBrowsers[j] && allOpens[j] > 1){
                        bCounts[i]++;
                    }

                }
            }
            console.log(bCounts);


            for (let i = 0; i < uniqueGroups.length; i++){
                gCounts.push(0);
                for (let j = 0; j < allGroups.length; j++){
                    if(uniqueGroups[i] == allGroups[j] && allOpens[j] > 1){
                        gCounts[i]++;
                    }

                }
            }
            console.log(gCounts);


            for (let i = 0; i < uniqueTimes.length; i++){
                timeCounts.push(0);
                for (let j = 0; j < allTimes.length; j++){
                    if(uniqueTimes[i] == allTimes[j] && allOpens[j] > 1){
                        timeCounts[i]++;
                    }

                }
            }
            console.log(timeCounts);


            for (let i = 0; i < uniqueGroups.length; i++){
                gUCounts.push(0);
                for (let j = 0; j < allGroups.length; j++){
                    if(uniqueGroups[i] == allGroups[j] && allOpens[j] < 2){
                        gUCounts[i]++;
                    }

                }
            }
            console.log(gUCounts);

        }
        )();

