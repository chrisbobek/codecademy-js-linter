// Display the word counts for each overused word
const story = 'The super quick crazy lazy brown fox seriously jumped bigly over the super seriously lazy crazy white rabbit.';
const storyWords = story.split(' ');
const overusedWords = ['super', 'crazy', 'seriously', 'lazy', 'stupid'];

function countOverusedWords(storyWordsArray, overusedWordsArray) {
    for (let i = 0; i < overusedWordsArray.length; i++) {
        let counter = 0;
        let index = storyWordsArray.indexOf(overusedWordsArray[i]);
        console.log(`index: ${index}`);
        while (index > -1) {
            counter++;
            index = storyWordsArray.indexOf(overusedWordsArray[i], index);
        }
        console.log(`${overusedWordsArray[i]} occurs ${counter} times.`);
    }

}

countOverusedWords(storyWords, overusedWords);