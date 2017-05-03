import {Category} from './enums';
import {Book, DamageLogger} from './interface';

function getAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function logFirstAvailable(books = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}


function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    // console.log('Getting books in category: ' + categoryFilter); // prints the number, not the name of the enum
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function getBookByID(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for ' + customer);
    let booksCheckedOut: string[] = [];
    for (let id of bookIDs) {
        let book = getBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

/* Example of function overloading */
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    } else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (let book of allBooks) {
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function printBook(book: Book): void{
    console.log(book.title + 'by' + book.author);
}

//***************************************************************************

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (r: string) => console.log("Damaged: " + r)
};

//printBook(myBook);

//myBook.markDamaged('Burned');

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log("damage");
logDamage('dog eared and water damaged');

