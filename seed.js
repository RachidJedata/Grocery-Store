import bcrypt from 'bcrypt'

const products = [
    {
        product_name: "Fresh Bananas",
        price: 18.00,
        imageUrl: "images/thumb-bananas.png",
        quantity: 50,
        discount: 30,
        category: "Fruits & Vegetables",
        description: "Sunstar Fresh Melon Juice"
    },
    {
        product_name: "Crunchy Biscuits",
        price: 15.99,
        imageUrl: "images/thumb-biscuits.png",
        quantity: 75,
        discount: 15,
        category: "Snacks",
        description: "Perfect crispy snacks for any time"
    },
    {
        product_name: "Organic Cucumber",
        price: 2.99,
        imageUrl: "images/thumb-cucumber.png",
        quantity: 120,
        discount: 0,
        category: "Vegetables",
        description: "Fresh organic cucumbers"
    },
    {
        product_name: "Fresh Milk",
        price: 4.49,
        imageUrl: "images/thumb-milk.png",
        quantity: 60,
        discount: 10,
        category: "Dairy",
        description: "Whole fresh milk"
    },
    {
        product_name: "Ripe Tomatoes",
        price: 3.99,
        imageUrl: "images/thumb-tomatoes.png",
        quantity: 90,
        discount: 25,
        category: "Vegetables",
        description: "Juicy red tomatoes"
    },
    {
        product_name: "Tomato Ketchup",
        price: 5.99,
        imageUrl: "images/thumb-tomatoketchup.png",
        quantity: 45,
        discount: 15,
        category: "Condiments",
        description: "Classic tomato ketchup"
    },
    {
        product_name: "Orange Juice",
        price: 6.50,
        imageUrl: "images/thumb-orange-juice.png",
        quantity: 35,
        discount: 20,
        category: "Juices",
        description: "100% pure orange juice"
    },
    {
        product_name: "Fresh Raspberries",
        price: 7.99,
        imageUrl: "images/thumb-raspberries.png",
        quantity: 25,
        discount: 0,
        category: "Fruits",
        description: "Organic fresh raspberries"
    }
];

// Corresponding categories from your schema
const categories = [
    { name: "Fruits & Vegetables" },
    { name: "Snacks" },
    { name: "Dairy" },
    { name: "Juices" },
    { name: "Condiments" }
];
const users = [
    { name: "rachid jedata", email: 'me@gmail.com', password: 'rachid', avatar: 'images/reviewer-1.jpg', isVendor: true },
    { name: "malika id lahaj", email: 'idlahaj@gmail.com', password: 'malika', avatar: 'images/reviewer-2.jpg', isVendor: true },
    { name: "rim jedata", email: 'rim.j@hotmail.com', password: 'rim', avatar: 'images/reviewer-3.jpg', isVendor: false }
]

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function seedUsers() {
    // On peut soit retirer le champ avatar s'il n'est pas voulu :
    const hashedUsers = await Promise.all(
      users.map(async (user) => {        
        // Hashage du mot de passe
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      })
    );
  
    await prisma.user.createMany({
      data: hashedUsers, // On fournit ici le tableau d'utilisateurs
    });
  
    console.log("Utilisateurs créés avec succès !");
  }

export async function main() {
    // Seed categories
    const categoryRecords = await Promise.all(
        categories.map(category =>
            prisma.category.upsert({
                where: { name: category.name },
                update: {},
                create: { name: category.name }
            })
        )
    );

    // Seed products
    for (const product of products) {
        await prisma.product.create({
            data: {
                product_name: product.product_name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: product.quantity,
                discount: product.discount,
                category: {
                    connectOrCreate: {
                        where: { name: product.category },
                        create: { name: product.category }
                    }
                },
                nbre_bought: 0,
                dateAdded: new Date()
            }
        });
    }

    //seed Users
    seedUsers();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });