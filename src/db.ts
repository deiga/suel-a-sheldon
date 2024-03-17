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

export async function initDb() {
  const file = await checkDbFile();
  return file;
}
