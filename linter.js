// Display the word counts for each overused word
const story = 'The super quick crazy lazy brown fox seriously jumped bigly over the super seriously lazy crazy white rabbit.';

// Split string into array
const storyWords = story.split(' ');
const overusedWords = ['super', 'crazy', 'seriously', 'lazy', 'stupid'];

function countOverusedWords(storyWordsArray, overusedWordsArray) {
    for (let i = 0; i < overusedWordsArray.length; i++) {
        let counter = 0;
        let index = storyWordsArray.indexOf(overusedWordsArray[i]);
        while (index > -1) {
            counter++;
            index = storyWordsArray.indexOf(overusedWordsArray[i], index + 1);
        }
        console.log(`The word '${overusedWordsArray[i]}' occurs ${counter} times.`);
    }
}

countOverusedWords(storyWords, overusedWords);
