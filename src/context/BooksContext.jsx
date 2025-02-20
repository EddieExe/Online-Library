import { createContext, useState, useEffect } from "react";

// Default book list
const defaultBooks = [
  // Fiction
  { id: 1, title: "The Great Gatsby", category: "Fiction", author: "F. Scott Fitzgerald", image: "https://m.media-amazon.com/images/I/81h1O7qV4xL._AC_UY327_FMwebp_QL65_.jpg", description: "Set in the 1920s, The Great Gatsby explores the themes of decadence, class, and the American Dream. It is narrated by Nick Carraway, a young man who moves to Long Island and becomes acquainted with Jay Gatsby, a mysterious millionaire known for his extravagant parties. Through Nick’s eyes, readers discover Gatsby’s obsession with Daisy Buchanan, Nick's cousin, and the tragic consequences of this pursuit. The novel critiques the idea of the American Dream and explores themes of love, materialism, and the illusions of social mobility." },
  
  { id: 2, title: "To Kill a Mockingbird", category: "Fiction", author: "Harper Lee", image: "https://m.media-amazon.com/images/I/916YjOp3uyL._AC_UY327_FMwebp_QL65_.jpg", description: "Set in the 1930s in the racially segregated Southern United States, this novel follows Scout Finch, a young girl whose father, Atticus Finch, is a lawyer defending an African-American man, Tom Robinson, falsely accused of raping a white woman. The book explores themes of racial injustice, the loss of innocence, and moral growth as Scout and her brother Jem grapple with prejudice and the legal system in their hometown of Maycomb, Alabama." },

  // Self-Help
  { id: 3, title: "Atomic Habits", category: "Self-Help", author: "James Clear", image: "https://m.media-amazon.com/images/I/51U+wsHHOVL._AC_UY327_FMwebp_QL65_.jpg", description: "Atomic Habits focuses on the power of small habits and incremental improvements. James Clear emphasizes how tiny, consistent actions compound over time to produce remarkable results. The book breaks down the science of habit formation and provides practical strategies for building good habits, breaking bad ones, and making changes that last. It’s a guide for achieving personal growth and success through a focus on everyday actions." },

  { id: 4, title: "The 5 AM Club", category: "Self-Help", author: "Robin Sharma", image: "https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UF1000,1000_QL80_.jpg", description: "In The 5 AM Club, Robin Sharma argues that waking up at 5 AM and structuring the first few hours of the day around specific rituals can significantly improve productivity, focus, and overall well-being. The book follows the fictional journey of a struggling artist and a distracted entrepreneur, both mentored by a billionaire who teaches them how to rise early and transform their lives through dedicated personal development routines." },

  // Finance
  { id: 5, title: "Rich Dad Poor Dad", category: "Finance", author: "Robert Kiyosaki", image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", description: "Rich Dad Poor Dad contrasts the financial mindsets of two father figures in Robert Kiyosaki's life: his biological father (poor dad) and the father of his best friend (rich dad). The book emphasizes the importance of financial education, investment, and entrepreneurship. Kiyosaki teaches readers how to think about money, assets, liabilities, and wealth creation, advocating for financial independence over traditional paths like working a 9-5 job." },

  { id: 6, title: "The Psychology of Money", category: "Finance", author: "Morgan Housel", image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UY327_FMwebp_QL65_.jpg", description: "The Psychology of Money explores how emotions and behaviors influence financial decisions. Morgan Housel delves into how people’s experiences, biases, and perceptions of risk shape their approach to wealth. Rather than focusing on the technicalities of investing, the book discusses psychological factors like fear, greed, patience, and luck that often dictate financial success or failure." },

  // Sci-Fi
  { id: 7, title: "Dune", category: "Sci-Fi", author: "Frank Herbert", image: "https://m.media-amazon.com/images/I/81haS5b+9dL._AC_UY327_FMwebp_QL65_.jpg", description: "Dune is a science fiction epic set in a distant future on the desert planet of Arrakis, where a valuable resource known as spice is mined. The story follows Paul Atreides, the young heir to the House Atreides, who becomes entangled in political intrigue, rebellion, and the mystical prophecies that surround his destiny. Themes of power, ecology, religion, and human evolution are explored in this complex, multi-layered narrative." },

  { id: 8, title: "The Martian", category: "Sci-Fi", author: "Andy Weir", image: "https://m.media-amazon.com/images/I/A1isSVy2pdL._AC_UY327_FMwebp_QL65_.jpg", description: "The Martian tells the story of astronaut Mark Watney, who is stranded on Mars after a botched mission. With limited resources, Watney must rely on his ingenuity, humor, and scientific knowledge to survive and communicate with NASA. The book is a gripping survival story that combines science, humor, and resilience, illustrating human determination in the face of overwhelming odds." },

  // Thriller
  { id: 9, title: "Gone Girl", category: "Thriller", author: "Gillian Flynn", image: "https://m.media-amazon.com/images/I/61Sx28fdUoL._AC_UY327_FMwebp_QL65_.jpg", description: "Gone Girl is a psychological thriller about the mysterious disappearance of Amy Dunne and the subsequent media frenzy and police investigation. The book alternates between the perspectives of Amy and her husband, Nick, revealing dark secrets, unreliable narratives, and psychological manipulation. It explores themes of marriage, deception, and the media’s role in shaping public perception." },

  { id: 10, title: "The Silent Patient", category: "Thriller", author: "Alex Michaelides", image: "https://m.media-amazon.com/images/I/71YpeymFrcL._AC_UY327_FMwebp_QL65_.jpg", description: "The Silent Patient follows Alicia Berenson, a celebrated artist who is accused of murdering her husband and then goes mute, refusing to speak ever again. Theo Faber, a forensic psychologist, becomes obsessed with her case and tries to uncover the truth behind her silence. The novel is a psychological thriller with twists and turns, ultimately examining trauma, obsession, and the complexity of the human mind." },

  // Business
  { id: 11, title: "The Lean Startup", category: "Business", author: "Eric Ries", image: "https://m.media-amazon.com/images/I/51-ruwztvEL._AC_UY327_FMwebp_QL65_.jpg", description: "The Lean Startup presents a methodology for building startups that focuses on efficiency, innovation, and adaptability. Eric Ries introduces the concepts of validated learning, rapid experimentation, and pivoting in business. The book aims to reduce waste and increase the chances of success by encouraging entrepreneurs to test hypotheses quickly and learn from customers in real time." },

  { id: 12, title: "Zero to One", category: "Business", author: "Peter Thiel", image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UF1000,1000_QL80_.jpg", description: "Zero to One focuses on creating innovative businesses that move beyond incremental improvements and instead aim for breakthrough innovation. Peter Thiel, co-founder of PayPal, argues that true progress happens when companies create something entirely new and valuable (going from zero to one), rather than copying existing models. The book encourages entrepreneurs to focus on monopolies, technology, and long-term vision." },

  // Philosophy
  { id: 13, title: "Meditations", category: "Philosophy", author: "Marcus Aurelius", image: "https://m.media-amazon.com/images/I/717Y82GZwWL._AC_UY327_FMwebp_QL65_.jpg", description: "Meditations is a series of personal writings by Marcus Aurelius, the Roman Emperor, reflecting his thoughts on philosophy, ethics, and leadership. The book is a guide to Stoic philosophy, emphasizing self-discipline, rational thought, and acceptance of the things beyond our control. It’s a timeless exploration of how to live a virtuous life, stay grounded, and find peace in difficult circumstances." },

  { id: 14, title: "The Subtle Art of Not Giving a F*ck", category: "Philosophy", author: "Mark Manson", image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg", description: "The Subtle Art of Not Giving a F*ck challenges the traditional self-help narrative of always striving for happiness and success. Mark Manson argues that focusing on what truly matters in life — and letting go of superficial desires and societal expectations — leads to more meaningful fulfillment. The book emphasizes accepting life’s challenges, embracing flaws, and not wasting energy on things that don’t matter." },

  // Fantasy
  { id: 15, title: "Harry Potter and the Sorcerer’s Stone", category: "Fantasy", author: "J.K. Rowling", image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg", description: "Harry Potter and the Sorcerer’s Stone introduces readers to Harry Potter, a young boy who discovers he is a wizard on his 11th birthday. He attends Hogwarts School of Witchcraft and Wizardry, where he makes friends, faces challenges, and uncovers dark secrets about his past. The book is a magical adventure about friendship, bravery, and the battle between good and evil." },

  { id: 16, title: "The Hobbit", category: "Fantasy", author: "J.R.R. Tolkien", image: "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg", description: "The Hobbit follows the journey of Bilbo Baggins, a hobbit who is unexpectedly swept into an adventure with a group of dwarves. Their quest is to reclaim a stolen treasure from the fearsome dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and a mysterious ring that will play a pivotal role in Tolkien’s later work, The Lord of the Rings. The book is a classic fantasy story of courage, adventure, and self-discovery." },

  // History
  { id: 17, title: "Sapiens: A Brief History of Humankind", category: "History", author: "Yuval Noah Harari", image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg", description: "Sapiens explores the history of humanity from the emergence of Homo sapiens to modern-day civilization. Harari examines how humans evolved biologically and culturally, focusing on key developments like the Agricultural Revolution, the rise of empires, and the scientific revolution. The book also discusses the impact of capitalism, technology, and human behavior on the world we live in today." },

  { id: 18, title: "A People's History of the United States", category: "History", author: "Howard Zinn", image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UF1000,1000_QL80_.jpg", description: " A People’s History of the United States presents American history from the perspective of marginalized groups, including indigenous people, African Americans, women, and laborers. Howard Zinn challenges traditional historical narratives, highlighting the struggles and contributions of these groups and the injustices they faced. The book offers a critical view of American history and its social, economic, and political systems." },

  // Technology
  { id: 19, title: "The Innovators", category: "Technology", author: "Walter Isaacson", image: "https://m.media-amazon.com/images/I/71LOesgcrUL._AC_UY327_FMwebp_QL65_.jpg", description: "The Innovators traces the history of the digital revolution, focusing on the people who made it happen — from early pioneers like Ada Lovelace and Alan Turing to more recent figures like Steve Jobs and Bill Gates. Walter Isaacson explores how collaboration, creativity, and innovation led to the development of computers, software, and the internet, shaping the modern world." },

  { id: 20, title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", category: "Technology", author: "Ashlee Vance", image: "https://m.media-amazon.com/images/I/81KAg5fnOhL._AC_UY327_FMwebp_QL65_.jpg", description: "This biography of Elon Musk examines the life and career of the visionary entrepreneur behind companies like Tesla, SpaceX, and SolarCity. Ashlee Vance explores Musk's ambitious goals, personal challenges, and relentless drive to push the boundaries of technology, from revolutionizing electric cars to planning human colonization of Mars. The book provides an in-depth look at Musk’s genius, eccentricities, and the future he envisions." }
];


// Create context
export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  // Load books from localStorage or use default books
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : defaultBooks;
  });

  // Sync with localStorage when books change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Function to add a new book
  const addBook = (newBook) => {
    const updatedBooks = [...books, { id: books.length + 1, ...newBook }];
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
