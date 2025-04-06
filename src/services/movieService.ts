// Mock movie data service since we don't have a real API
// In a real application, this would fetch from a movie database API

export interface Movie {
  id: string;
  title: string;
  year: number;
  poster: string;
  genre: string[];
  rating: number;
  industry: 'Hollywood' | 'Bollywood';
  description: string;
}

// Sample movie database
const movieDatabase: Movie[] = [
  {
    id: "1",
    title: "The Hangover",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.7,
    industry: "Hollywood",
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
  },
  {
    id: "2",
    title: "Superbad",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.6,
    industry: "Hollywood",
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."
  },
  {
    id: "3",
    title: "3 Idiots",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Comedy", "Drama"],
    rating: 8.4,
    industry: "Bollywood",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'."
  },
  {
    id: "4",
    title: "The Dark Knight",
    year: 2008,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    industry: "Hollywood",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: "5",
    title: "Inception",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    industry: "Hollywood",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: "6",
    title: "Hera Pheri",
    year: 2000,
    poster: "https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWE0MGQtODY2NjY2MjE1MTE5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Comedy"],
    rating: 8.2,
    industry: "Bollywood",
    description: "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However, things do not go as planned."
  },
  {
    id: "7",
    title: "The Shawshank Redemption",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    genre: ["Drama"],
    rating: 9.3,
    industry: "Hollywood",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
  },
  {
    id: "8",
    title: "Andaz Apna Apna",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOWRlNzAtOGYwYi00ZTFmLTllZDgtNmUxNGU3ODA5MmNjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg",
    genre: ["Comedy", "Romance"],
    rating: 8.1,
    industry: "Bollywood",
    description: "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal."
  },
  {
    id: "9",
    title: "Lagaan",
    year: 2001,
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Drama", "Sport"],
    rating: 8.1,
    industry: "Bollywood",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers."
  },
  {
    id: "10",
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BNTdjM2NmYTgtOGQyNy00NmI3LTk3ZjktZmIyZjY4MmU5N2FkXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 8.1,
    industry: "Bollywood",
    description: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt."
  },
  {
    id: "11",
    title: "The Notebook",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    industry: "Hollywood",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
  },
  {
    id: "12",
    title: "Pride & Prejudice",
    year: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDEzMzQ3MDI@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    industry: "Hollywood",
    description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class."
  },
  {
    id: "13",
    title: "Jab We Met",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzUzMzgxNA@@._V1_.jpg",
    genre: ["Romance", "Comedy"],
    rating: 7.9,
    industry: "Bollywood",
    description: "A depressed businessman finds solace in the company of a free-spirited girl after they meet on a train and she changes his perspective on life."
  },
  {
    id: "14",
    title: "Yeh Jawaani Hai Deewani",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg",
    genre: ["Romance", "Comedy", "Drama"],
    rating: 7.2,
    industry: "Bollywood",
    description: "A love story between an introvert girl who finds happiness in small things and an extrovert boy who wants to travel the world and discover his passion."
  },
  {
    id: "15",
    title: "Rocky",
    year: 1976,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect."
  },
  {
    id: "16",
    title: "Chak De! India",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmODM5OTk2ZGVjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 8.2,
    industry: "Bollywood",
    description: "A disgraced former hockey player coaches the Indian women's national team to victory against all odds."
  },
  {
    id: "17",
    title: "Remember the Titans",
    year: 2000,
    poster: "https://m.media-amazon.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genre: ["Sport", "Drama", "Biography"],
    rating: 7.8,
    industry: "Hollywood",
    description: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit."
  },
  {
    id: "18",
    title: "Bhaag Milkha Bhaag",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 8.2,
    industry: "Bollywood",
    description: "The story of the Indian athlete Milkha Singh, who overcame the massacre of his family and the trauma of displacement during the India-Pakistan partition to become one of India's most iconic athletes."
  },
  {
    id: "19",
    title: "MS Dhoni: The Untold Story",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 7.9,
    industry: "Bollywood",
    description: "The untold story of Mahendra Singh Dhoni's journey from ticket collector to legendary cricket captain of India."
  },
  {
    id: "20",
    title: "Dangal",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 8.4,
    industry: "Bollywood",
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers."
  },
  {
    id: "21",
    title: "Bridesmaids",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_.jpg",
    genre: ["Comedy"],
    rating: 6.8,
    industry: "Hollywood",
    description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef."
  },
  {
    id: "22",
    title: "21 Jump Street",
    year: 2012,
    poster: "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Comedy", "Action"],
    rating: 7.2,
    industry: "Hollywood",
    description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring."
  },
  {
    id: "23",
    title: "Dhamaal",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BNGUyNTk0YmYtNjU2YS00NWQ1LTllZGQtYjk5YjU4YzYwZjk3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.3,
    industry: "Bollywood",
    description: "Four slackers compete with a police officer to find hidden treasure worth Rs. 10 crores."
  },
  {
    id: "24",
    title: "Golmaal: Fun Unlimited",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BYmE1NzI0YjQtZTJkZi00ZmYzLWJkNWEtN2RhNmQ2OTE5YTc0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.4,
    industry: "Bollywood",
    description: "Four friends try to make easy money by claiming to be the grandchildren of a wealthy woman."
  },
  {
    id: "25",
    title: "Munna Bhai M.B.B.S.",
    year: 2003,
    poster: "https://m.media-amazon.com/images/M/MV5BYmQxZmFhNDMtNWYxNS00MDc0LWJjMjctYzFhZDhhNjE5NDhmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Comedy", "Drama"],
    rating: 8.1,
    industry: "Bollywood",
    description: "A gangster sets out to fulfill his father's dream of becoming a doctor."
  },
  {
    id: "26",
    title: "The Grand Budapest Hotel",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    genre: ["Comedy", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
  },
  {
    id: "27",
    title: "John Wick",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    genre: ["Action", "Crime", "Thriller"],
    rating: 7.4,
    industry: "Hollywood",
    description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car."
  },
  {
    id: "28",
    title: "Die Hard",
    year: 1988,
    poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: ["Action", "Thriller"],
    rating: 8.2,
    industry: "Hollywood",
    description: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
  },
  {
    id: "29",
    title: "Mad Max: Fury Road",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.1,
    industry: "Hollywood",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max."
  },
  {
    id: "30",
    title: "Dhoom 2",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BNTIwNzMxNzg5OF5BMl5BanBnXkFtZTcwNDg5ODIzMQ@@._V1_.jpg",
    genre: ["Action", "Thriller"],
    rating: 6.5,
    industry: "Bollywood",
    description: "A cop and his partner team up with a master thief to catch a tech-savvy international thief who is always one step ahead."
  },
  {
    id: "31",
    title: "Don 2",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_.jpg",
    genre: ["Action", "Crime", "Thriller"],
    rating: 7.1,
    industry: "Bollywood",
    description: "After eluding the cops, Don decides to take down a European drug cartel with an elaborate plan involving switching identities."
  },
  {
    id: "32",
    title: "Baby Driver",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_.jpg",
    genre: ["Action", "Crime", "Music"],
    rating: 7.6,
    industry: "Hollywood",
    description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail."
  },
  {
    id: "33",
    title: "La La Land",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    genre: ["Romance", "Drama", "Music"],
    rating: 8.0,
    industry: "Hollywood",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
  },
  {
    id: "34",
    title: "Before Sunrise",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together."
  },
  {
    id: "35",
    title: "Aashiqui 2",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMjEzNzczNTg2M15BMl5BanBnXkFtZTgwMjUyNzE5MDE@._V1_.jpg",
    genre: ["Romance", "Drama", "Music"],
    rating: 7.0,
    industry: "Bollywood",
    description: "A troubled alcoholic singer helps a girl become a famous singer as he falls in love with her."
  },
  {
    id: "36",
    title: "Veer-Zaara",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BY2VlOTc4ZjctMzEyYS00OTJlLTgxNDYtZDg4Y2NiZTg5ZGRlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    industry: "Bollywood",
    description: "A tale of love, separation, courage and sacrifice. A tale of a love that transcends barriers, boundaries and borders."
  },
  {
    id: "37",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
    genre: ["Romance", "Drama", "Sci-Fi"],
    rating: 8.3,
    industry: "Hollywood",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories."
  },
  {
    id: "38",
    title: "About Time",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg",
    genre: ["Romance", "Comedy", "Drama"],
    rating: 7.8,
    industry: "Hollywood",
    description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think."
  },
  {
    id: "39",
    title: "Forrest Gump",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genre: ["Drama", "Comedy"],
    rating: 8.8,
    industry: "Hollywood",
    description: "The life story of a man with a low IQ who accomplished great things in his life and was involved in several defining historical events."
  },
  {
    id: "40",
    title: "Schindler's List",
    year: 1993,
    poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Drama", "History", "Biography"],
    rating: 8.9,
    industry: "Hollywood",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },
  {
    id: "41",
    title: "The Pursuit of Happyness",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    genre: ["Drama", "Biography"],
    rating: 8.0,
    industry: "Hollywood",
    description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career."
  },
  {
    id: "42",
    title: "Taare Zameen Par",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: ["Drama", "Family"],
    rating: 8.4,
    industry: "Bollywood",
    description: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school."
  },
  {
    id: "43",
    title: "Black",
    year: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BNGY3NWYwNzctNWU5Yi00ZjljLTgyNDgtZjNhZjRhNmI5MDY2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Drama"],
    rating: 8.2,
    industry: "Bollywood",
    description: "The story of a blind and deaf girl and her relationship with her teacher who himself later develops Alzheimer's disease."
  },
  {
    id: "44",
    title: "Udaan",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTgwMDc2MjkwMjE@._V1_.jpg",
    genre: ["Drama"],
    rating: 8.1,
    industry: "Bollywood",
    description: "A teen forced to rejoin his father and step-brother after being expelled from boarding school tries to pursue his dream of becoming a writer despite opposition."
  },
  {
    id: "45",
    title: "Million Dollar Baby",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "A determined woman works with a hardened boxing trainer to become a professional."
  },
  {
    id: "46",
    title: "Moneyball",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_.jpg",
    genre: ["Sport", "Drama", "Biography"],
    rating: 7.6,
    industry: "Hollywood",
    description: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players."
  },
  {
    id: "47",
    title: "Coach Carter",
    year: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BMTIwMTc0ODk0MV5BMl5BanBnXkFtZTcwMzY1MTAzMQ@@._V1_.jpg",
    genre: ["Sport", "Drama", "Biography"],
    rating: 7.4,
    industry: "Hollywood",
    description: "Controversy surrounds high school basketball coach Ken Carter after he benches his entire team for breaking their academic contract with him."
  },
  {
    id: "48",
    title: "Sultan",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BNDcyNzk3YjUtZGNkMi00YjZjLTgyZmItNzUwMzMzZGY1ODA3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Sport", "Drama", "Action"],
    rating: 7.0,
    industry: "Bollywood",
    description: "Sultan is a classic wrestling drama that depicts the journey of a wrestler who faces a difficult time getting back into the ring."
  },
  {
    id: "49",
    title: "Jo Jeeta Wohi Sikandar",
    year: 1992,
    poster: "https://m.media-amazon.com/images/M/MV5BNDZlM2JlZDktNGE5Ni00MzVlLTgxNGYtYTYyZTQzNmNkY2RlXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
    genre: ["Sport", "Drama", "Romance"],
    rating: 7.9,
    industry: "Bollywood",
    description: "Two college friends compete for the prestigious Inter-college Championship, one driven by love and the other by sibling rivalry."
  },
  {
    id: "50",
    title: "Toofan",
    year: 2021,
    poster: "https://m.media-amazon.com/images/M/MV5BZWZkZDJjYWItZTBkZC00YjBkLTk0ZjYtMGJhNmYyMGFkN2JiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 6.8,
    industry: "Bollywood",
    description: "The story of a goon-turned-boxer's journey to redemption and glory in the world of professional boxing."
  },
  {
    id: "51",
    title: "The Blind Side",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_.jpg",
    genre: ["Sport", "Drama", "Biography"],
    rating: 7.6,
    industry: "Hollywood",
    description: "The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family."
  },
  {
    id: "52",
    title: "Gone Girl",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
    genre: ["Thriller", "Mystery", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
  },
  {
    id: "53",
    title: "Se7en",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Thriller", "Crime", "Mystery"],
    rating: 8.6,
    industry: "Hollywood",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
    id: "54",
    title: "Drishyam",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LTg0ZGMtNWFkYWVkNTA1YTNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Thriller", "Crime", "Mystery"],
    rating: 8.2,
    industry: "Bollywood",
    description: "A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime."
  },
  {
    id: "55",
    title: "Kahaani",
    year: 2012,
    poster: "https://m.media-amazon.com/images/M/MV5BNGY3NWYwNzctNWU5Yi00ZjljLTgyNDgtZjNhZjRhNmI5MDY2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Thriller", "Mystery"],
    rating: 8.1,
    industry: "Bollywood",
    description: "A pregnant woman's search for her missing husband takes her from London to Kolkata, but everyone she questions denies having ever met him."
  },
  {
    id: "56",
    title: "Andhadhun",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
    genre: ["Thriller", "Crime", "Mystery"],
    rating: 8.2,
    industry: "Bollywood",
    description: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he never actually witnessed."
  },
  {
    id: "57",
    title: "Prisoners",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg",
    genre: ["Thriller", "Crime", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads."
  },
  {
    id: "58",
    title: "The Shining",
    year: 1980,
    poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genre: ["Horror", "Drama"],
    rating: 8.4,
    industry: "Hollywood",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence."
  },
  {
    id: "59",
    title: "Hereditary",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
    genre: ["Horror", "Mystery", "Drama"],
    rating: 7.3,
    industry: "Hollywood",
    description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother."
  },
  {
    id: "60",
    title: "Tumbbad",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BYmQxNDlhODgtMGMzOC00ZDkwLWI2NDMtZjM3MjI3YTM4YjVmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Horror", "Fantasy", "Thriller"],
    rating: 8.3,
    industry: "Bollywood",
    description: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
  },
  {
    id: "61",
    title: "Bulbbul",
    year: 2020,
    poster: "https://m.media-amazon.com/images/M/MV5BZGY3M2IwY2YtYTdiZS00ZGFmLTliN2QtODZmYWU2M2Y0NWZkXkEyXkFqcGdeQXVyMTAyMDkwMw@@._V1_.jpg",
    genre: ["Horror", "Drama", "Mystery"],
    rating: 6.6,
    industry: "Bollywood",
    description: "A man returns home after years to find his brother's child bride now grown up and abandoned, and his ancestral village plagued by mysterious deaths."
  },
  {
    id: "62",
    title: "Stree",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODhkZi00ZTY4LThkNWMtYjI3YzA2M2QwOGY4XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
    genre: ["Horror", "Comedy"],
    rating: 7.6,
    industry: "Bollywood",
    description: "In the small town of Chanderi, the menfolk live in fear of an evil spirit named 'Stree' who abducts men in the night."
  },
  {
    id: "63",
    title: "The Conjuring",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    genre: ["Horror", "Thriller", "Mystery"],
    rating: 7.5,
    industry: "Hollywood",
    description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
  },
  {
    id: "64",
    title: "Get Out",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.8,
    industry: "Hollywood",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
  },
  {
    id: "65",
    title: "Interstellar",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    rating: 8.6,
    industry: "Hollywood",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: "66",
    title: "Blade Runner 2049",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    genre: ["Sci-Fi", "Drama", "Mystery"],
    rating: 8.0,
    industry: "Hollywood",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
  },
  {
    id: "67",
    title: "The Matrix",
    year: 1999,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    industry: "Hollywood",
    description: "When a computer hacker named Neo is forced to choose between his own survival and the survival of the human race, he discovers that his destiny is intertwined with that of the machines."
  },
  {
    id: "68",
    title: "Krrish",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BMTM2MjgyNDE5Nl5BMl5BanBnXkFtZTcwMjc0ODI3MQ@@._V1_.jpg",
    genre: ["Sci-Fi", "Action", "Adventure"],
    rating: 6.4,
    industry: "Bollywood",
    description: "Krishna is forced by circumstances to use his superpowers and become a superhero, but in the process, he has to face a powerful evil that threatens humanity."
  },
  {
    id: "69",
    title: "Mr. India",
    year: 1987,
    poster: "https://m.media-amazon.com/images/M/MV5BNWE2NmRkNzctNWQ5MC00Y2U4LTkxZmUtMzY3NDUyYjg2ODUyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Sci-Fi", "Action", "Adventure"],
    rating: 7.7,
    industry: "Bollywood",
    description: "A poor but big-hearted man takes orphans into his home. After discovering his scientist father's invisibility device, he rises to the occasion and fights to save his children and all of India from the clutches of a megalomaniac."
  },
  {
    id: "70",
    title: "PK",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    genre: ["Sci-Fi", "Comedy", "Drama"],
    rating: 8.1,
    industry: "Bollywood",
    description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people."
  },
  {
    id: "71",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    genre: ["Adventure", "Fantasy", "Action"],
    rating: 8.8,
    industry: "Hollywood",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    id: "72",
    title: "Raiders of the Lost Ark",
    year: 1981,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_.jpg",
    genre: ["Adventure", "Action"],
    rating: 8.4,
    industry: "Hollywood",
    description: "Archaeology professor Indiana Jones ventures to seize a biblical artifact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis."
  }
];

// Function to search movies
export const searchMovies = (query: string): Movie[] => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return movieDatabase.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.genre.some(g => g.toLowerCase().includes(lowercaseQuery)) ||
    movie.industry.toLowerCase().includes(lowercaseQuery) ||
    movie.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to filter movies by genre
export const getMoviesByGenre = (genre: string): Movie[] => {
  if (!genre) return [];
  
  const lowercaseGenre = genre.toLowerCase();
  return movieDatabase.filter(movie => 
    movie.genre.some(g => g.toLowerCase().includes(lowercaseGenre))
  );
};

// Function to filter movies by industry (Hollywood/Bollywood)
export const getMoviesByIndustry = (industry: 'Hollywood' | 'Bollywood'): Movie[] => {
  return movieDatabase.filter(movie => movie.industry === industry);
};

// Get all available genres
export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  
  movieDatabase.forEach(movie => {
    movie.genre.forEach(genre => {
      genres.add(genre);
    });
  });
  
  return Array.from(genres);
};
