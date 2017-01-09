$(document).ready(function() {

  var quote = '';

  getQuote();

  $('.button').click(function() {
      getQuote();
    });

// twitter section

/* $(".twitter").click(function() {
   var tweet = "https://twitter.com/intent/tweet?text=" + getQuote + " - authur";
   window.open(tweet, "twitter");
   return false;
*/ });

function getQuote() {

  var myQuotes = [
              'I was adored once too, William Shakepeare',
              'Belief creates the actual fact, William James',
              'To fail to love is not to exist at all, Mark Van Doren',
              'There cannot be a crisis next week, My schedule is already full., Henry Kissinger',
              'Life is but tought, Sara Teasdale',
              'Innovation distinguishes between a leader and a follower, Steve Jobs',
              'My favorite things in life dont cost any money Its really clear that the most precious resources we all have is time, Steve Jobs',
              'I may be drunk, Miss, but in the morning I will be sober and you will still be ugly., Winston Churchill',
              'Happiness is having a large, loving, caring, close-knit family in another city, George Burns',
              'Behind every great man is a woman rolling her eyes, Jim Carrey',
              'No man has a good enough memory to be a successful liar, Abraham Lincoln',
              'In the end, its not the years in your life that count. its the life in your years., Abraham Lincoln',
              'Nearly all men can stand adversity, but if you want to test a mans character, give him power., Abraham Lincoln',
              'Better to remain silient and be thought a fool than to speak out and remove all doubt, Abraham Lincoln',
              'Service to others is the rent you pay for your room here on earth, Muhammad Ali',
              'The man who has no imagination has no wings, Muhammad Ali',
              'Age is whatever ou think it is. You are as old as you think you are., Muhammad Ali',
              'We need to internalize this idea of excellene. Not many folks spend a lot of time trying to be excellent. Barack Obama',
              'The wisest use of American strength is to advance freedom., George W. Bush',
              'Some folks look at me and see a certain swagger, which in Texas is called walking., George W. Bush',
              'I have written a book.  This will come as quite a shock to some. They didnt think I could read, much less write, George W. Bush',
              'As we look ahead into the next century, leaders will be those who empower others, Bill Gates',
              'Everybody wants to go to Heaven, but no one wants to die to get there!, B.B. King',
              'Be at war with your vices, at peace with your neighbors, and let every new year find you a better man., Benjamin Franklin',
              'Lost time is never found again., Benjamin Franklin',
              'Wine is constant proof that God loves us and loves to see us happy., Benjamin Franklin',
              'We are all born ignorant, but one must work hard to remain stupid., Benjamin Franklin',
              'We are what we believe we are., C.S. Lewis',
              'Today you are you! That is truer than true! There is no one alive who is you-er than you!, Dr. Seuss'
              'I like nonsense; it wakes up the brain cells., Dr. Seuss',
              'The more you read, the more things you will know. The more that you learn, the more places youll go., Dr. Seuss',
              'Cock you hat - angles are attitudes., Frank Sinatra'
              'ALcohol may be a mans worst enemy, but the Bible says love your enemy., Frank Sinatra',
              'Progress is impossible without change, and those who cannot change their minds cannot change anything., George Bernard Shaw',
              'Just do what must be done. This may not be happiness, but it is greatness., George Bernard Shaw',
              'Success does not consist in neer aking mistakes but in never making the same one a second time., George Bernard Shaw',
              'Marriage is an alliance entered into by a man who can\'t sleep with the window shut, and a woman who can\'t sleep with the window open., George Bernard Shaw',
              'Silence is a source of great stregth., Lao Tzu',
              'When you arise in the morning, think of what a precious privilege it is to be alive -to breathe, to think, to enjoy, to love., Marcus Aurelius',
              'The weak can never forgive. Forgiveness is the attribute of the strong., Mahatma Gandhi',
              'You must be the change you wish to see in the world., Mahatma Gandhi',
              'The secret of getting ahead is getting started., Mark Twain',
              'Get your facts first, then you can distort them as you please., Mark Twain',
              'Don\'t let schooling interfere with your education., Mark Twain']
              'Whenever you find yourself on the side of the majority, it is time to pause and reflect., Mark Twain',
              'A nickel ain\'t worth a dime anymore., Yogi Berra',
              'Little League baseball is a very good thing becuase it keeps the parents off the streets., Yogi Berra'
            ];

            quote = getQuotes[Math.floor(Math.random() * myQuotes.length)];

        }

      });

