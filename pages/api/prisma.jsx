const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()



async function main1() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

async function main2() {
    await prisma.schedules.create({
      data: {
        prof:{connect :{id : 1}},
        class:{connect :{id : 1}},
        room:{connect :{id : 1}},
        startTime : "2024-03-11T10:00:00Z",
        endTime :"2024-03-11T11:00:00Z",
      },
    })
  
    const allUsers = await prisma.schedules.findMany();
    console.dir(allUsers, { depth: null })
  }

async function main3(){
  const post = await prisma.post.update({
    where:{id:1},
    data:{published: true},
  })
  console.log(post)
}

async function main4(DB){
  const allUsers = await prisma.DB.findMany()
    console.log(allUsers)
}

async function main5() {
  await prisma.room.create({
    data: {
      name:"room2",
    },
  })
}
async function main6() {
  await prisma.prof.create({
    data: {
      name:"asaeeidi ",
      email:"asdiii@gmial.com",
      room :{
        connect:{
          id:1
        }
      }
    },
  })
}
async function main7(){
  const allUsers = await prisma.prof.findMany({
    where:{
      roomId:1
    }
  });
    console.log(allUsers)
}

main7()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })