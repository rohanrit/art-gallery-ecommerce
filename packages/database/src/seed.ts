import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const categories = await Promise.all([
    prisma.category.create({
      data: { name: 'Dresses', slug: 'dresses', image: null },
    }),
    prisma.category.create({
      data: { name: 'Shoes', slug: 'shoes', image: null },
    }),
    prisma.category.create({
      data: { name: 'Vintage', slug: 'vintage', image: null },
    }),
    prisma.category.create({
      data: { name: 'Accessories', slug: 'accessories', image: null },
    }),
    prisma.category.create({
      data: { name: 'New Arrivals', slug: 'new-arrivals', image: null },
    }),
    prisma.category.create({
      data: { name: 'Sale', slug: 'sale', image: null },
    }),
  ]);

  console.log(`Created ${categories.length} categories`);

  const products = [
    { name: 'Floral Meadow Dress', slug: 'floral-meadow-dress', price: 189.00, compareAt: 249.00, categoryId: categories[0].id, isNew: true, inventory: 15 },
    { name: 'Wool Cashmere Blend Coat', slug: 'wool-cashmere-coat', price: 395.00, categoryId: categories[0].id, inventory: 8 },
    { name: 'Leather Ankle Boots', slug: 'leather-ankle-boots', price: 275.00, categoryId: categories[1].id, isNew: true, inventory: 20 },
    { name: 'Silk Scarf Collection', slug: 'silk-scarf', price: 85.00, compareAt: 120.00, categoryId: categories[3].id, inventory: 30 },
    { name: 'Linen Wide Leg Pants', slug: 'linen-wide-leg-pants', price: 165.00, categoryId: categories[0].id, inventory: 12 },
    { name: 'Handcrafted Leather Bag', slug: 'leather-bag', price: 320.00, categoryId: categories[3].id, isNew: true, inventory: 5 },
    { name: 'Cashmere Turtleneck', slug: 'cashmere-turtleneck', price: 210.00, categoryId: categories[2].id, inventory: 18 },
    { name: 'Gold Hoop Earrings', slug: 'gold-hoop-earrings', price: 65.00, categoryId: categories[3].id, inventory: 45 },
    { name: 'Vintage Denim Jacket', slug: 'vintage-denim-jacket', price: 145.00, categoryId: categories[2].id, isNew: true, inventory: 10 },
    { name: 'Embroidered Linen Blouse', slug: 'embroidered-linen-blouse', price: 125.00, categoryId: categories[0].id, inventory: 22 },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log(`Created ${products.length} products`);
  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
