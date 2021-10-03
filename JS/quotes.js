const quotes = [
    {
        quotes: 'Feel the fear and do it anyway.',
        author: 'Susan Jeffers'
    },
    {
        quotes: 'To love and be loved is to feel the sun from both sides.',
        author: 'David Viscott'
    },
    {
        quotes: 'Passion makes the world go round. Love just makes it a safer place.',
        author: 'Ice T'
    },
    {
        quotes: 'Love the moment, and the energy of that moment will spread beyond all boundaries.',
        author: 'Corita Kent'
    },
    {
        quotes: 'Success is the ability to go from one failure to another with no loss of enthusiasm.',
        author: 'Sir Winston Churchill'
    },
    {
        quotes: 'Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.',
        author: 'William Jennings Bryan'
    },
    {
        quotes: 'Time is an illusion. Lunchtime doubly so.',
        author: 'Douglas Adams'
    },
    {
        quotes: 'Weakness of attitude becomes weakness of character.',
        author: 'Albert Einstein'
    },
    {
        quotes: 'He that lives upon hope will die fasting.',
        author: 'Benjamin Franklin'
    },
    {
        quotes: 'The worst is not So long as we can say, "This is the worst."',
        author: 'William Shakespeare'
    },
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todayQuotes = quotes[Math.floor(Math.random() * 10)];

quote.innerText = todayQuotes.quotes;
author.innerText = todayQuotes.author