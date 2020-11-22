const { db, User } = require('./index')

// db.sync({force: true})

async function seed() {
    await db.sync({force: true})
    console.log('seeding user table')
    const testUser = await User.create({username: 'kevintun01@gmail.com', password: 'test'})
    console.log(testUser)
}

async function runSeed() {
    try {
        await seed()
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
    
}

if (module === require.main) {
    runSeed()
}

module.exports = seed;

