// import { NextResponse } from 'next/server';

// export async function POST(request) {
// const res = await request.json();
// return Response.json({ res });
// const { supabaseId, email, name, image } = req.body;
// console.log(request);
// console.log(res);

//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' })
//   }

//   try {
//     const { supabaseId, email, name, image } = req.body

//     // Check if user already exists
//     let user = await prisma.user.findUnique({
//       where: { supabaseId },
//     })

//     if (!user) {
//       // Create new user
//       user = await prisma.user.create({
//         data: {
//           supabaseId,
//           email,
//           name,
//           image,
//           emailVerified: new Date(),
//         },
//       })
//     } else {
//       // Update existing user
//       user = await prisma.user.update({
//         where: { supabaseId },
//         data: {
//           name,
//           image,
//           emailVerified: new Date(),
//         },
//       })
//     }

//     res.status(200).json({ user })
//   } catch (error) {
//     console.error('Error syncing user:', error)
//     res.status(500).json({ message: 'Internal server error' })
//   }
// }
