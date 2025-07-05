const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 5, mood: "focused", caffeineIntake: 1, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 6, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Wednesday", sleepHours: 8, screenTime: 8, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Thursday", sleepHours: 6, screenTime: 4, mood: "distracted", caffeineIntake: 3, focusLevel: 5 },
  { day: "Friday", sleepHours: 7.5, screenTime: 7, mood: "happy", caffeineIntake: 1, focusLevel: 8 },
  { day: "Saturday", sleepHours: 9, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 7 },
  { day: "Sunday", sleepHours: 8.5, screenTime: 2, mood: "lazy", caffeineIntake: 0, focusLevel: 6 },
];

//Prediction:
/* 
Prediction: I predict that Wednesday will have the most screen time because I usually binge shows then
Prediction: I think the best focuss day will be Wednesday because I sleep and work well then
Prediction: I predict that more caffeine might not improve focus and I think I do better with less caffeine
*/

//function1
function findHighestScreenTime(data) {
  let maxday = data[0];
  for (let day of data) {
    if (day.screenTime > maxday.screenTime) {
      maxday = day;
    }
  }
  console.log(`Most screen time is ${maxday.day} (${maxday.screenTime} hrs)`);
  return maxday.day;
}

//function2
function averageSleep(data) {
  let total = 0;
  for (let day of data) {
    total = total + day.sleepHours;
  }
  let avg = total / data.length;
  console.log(`Average sleep time is ${avg.toFixed(1)} hrs`);
  return avg;
}

//function3
function mostFrequentMood(data) {
  const moodcounts = {};
  for (let day of data) {
    if (!moodcounts[day.mood]) {
      moodcounts[day.mood] = 1;
    } else {
      moodcounts[day.mood]++;
    }
  }
  let maxmood = null;
  let maxCount = 0;
  for (let mood in moodcounts) {
    if (moodcounts[mood] > maxCount) {
      maxmood = mood;
      maxCount = moodcounts[mood];
    }
  }
  console.log(`Most frequent mood is "${maxmood}"`);
  return maxmood;
}

//function4
function correlateCaffeineToFocus(data) {
  let highcaffeinefocus = [];
  let lowcaffeineFocus = [];
  for (let day of data) {
    if (day.caffeineIntake >= 2) {
      highcaffeinefocus.push(day.focusLevel);
    } else {
      lowcaffeineFocus.push(day.focusLevel);
    }
  }
  const avgHigh = highcaffeinefocus.reduce((a, b) => a + b, 0) / highcaffeinefocus.length || 0;
  const avgLow = lowcaffeineFocus.reduce((a, b) => a + b, 0) / lowcaffeineFocus.length || 0;

  const result = avgHigh > avgLow ? "Yep" : "Nah";
  console.log(`Does more caffeine mean better focus? = ${result}`);
  return result;
}

//fnally we can call the functions here:
console.log("My data journal: \n");
findHighestScreenTime(weekData);
averageSleep(weekData);
mostFrequentMood(weekData);
correlateCaffeineToFocus(weekData);





