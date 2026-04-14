async function seed() {
  console.log('🌱 Seeding...');
  console.time(`🌱 Database has been seeded`);
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
