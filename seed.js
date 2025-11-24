const db = require('./config/db');

async function seed() {
  try {
    // Check existing count
    const [rows] = await db.query('SELECT COUNT(*) as cnt FROM tasks');
    if (rows[0].cnt >= 15) {
      console.log('Already seeded (>= 15 tasks). Exiting.');
      process.exit(0);
    }

    const tasks = [];
    for (let i = 1; i <= 15; i++) {
      tasks.push([
        `Sample Task ${i}`,
        `Description for task ${i}`,
        i % 3 === 0 ? 'completed' : (i % 3 === 1 ? 'pending' : 'in-progress')
      ]);
    }

    for (const t of tasks) {
      await db.query(
        'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
        t
      );
    }

    console.log('Seeded 15 tasks.');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
