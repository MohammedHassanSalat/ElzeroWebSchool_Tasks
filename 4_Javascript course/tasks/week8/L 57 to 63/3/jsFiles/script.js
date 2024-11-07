function ageInTime(theAge) {
    theAge > 100 || theAge < 10 ? console.log("Age Out Of Range") : 
    console.log(`
${theAge} years
${theAge*12} Months
${theAge*52} weeks
${theAge*365} days
${theAge*365*24} hours
${theAge*365*24*60} minutes
${theAge*365*24*60*60} seconds
    `);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
