import { promisify } from 'node:util';
import { parse } from 'csv';
import type { Options, Parser } from 'csv-parse';
import { Database } from 'bun:sqlite';

const parsePromise: (
  input: string | Buffer,
  options?: Options,
) => Promise<Parser> = promisify(parse);

type Book = {
  bookName: string;
  author: string;
  isbn: string;
};

const db = new Database(':memory:');
db.query(
  'CREATE TABLE IF NOT EXISTS books (bookName TEXT, author TEXT, isbn TEXT)',
).run();
const insertBookQuery = db.prepare(
  'INSERT INTO books (bookName, author, isbn) VALUES ($bookName, $author, $isbn)',
);

const insertBooks = db.transaction((books: Book[]) => {
  for (const book of books) {
    insertBookQuery.run({
      $bookName: book.bookName,
      $author: book.author,
      $isbn: book.isbn,
    });
  }
});

const TxtDb = {
  init: initDb,
  list,
  isInitialized: false,
};

function list() {
  const query = db.query('SELECT * FROM books');
  console.log(query.all());
}

async function checkDbFile() {
  const dbFileName = Bun.argv[2];
  if (!dbFileName) {
    console.log('Usage: bun <db-file>');
    process.exit(1);
  }
  const file = Bun.file(dbFileName);

  if (!(await file.exists())) {
    console.log(
      `Database file does not exist, please provide correct path. Input was '${dbFileName}'`,
    );
    process.exit(1);
  }
  return file;
}

async function initDb() {
  const file = await checkDbFile();

  const data = await parsePromise(await file.text(), {
    columns: ['bookName', 'author', 'isbn'],
  });
  insertBooks(data);
  TxtDb.isInitialized = true;
}

export default TxtDb;
