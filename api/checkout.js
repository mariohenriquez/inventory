// import axios from 'axios'
import { NextResponse } from "next/server";
let data = [
    {
        email: ""
    }
]

// export async function POST(req) {
//   try {

//     const email = req.body.email
//     const product = {
//         email: email
//     }
//     data.push(product)

//     return NextResponse.json(product, {
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to get admins" },
//       {
//         status: 500,
//       }
//     );
//   }
// }


export default function checkout(req, res) {
  if (req.method === 'POST') {
      const email = req.body.email
      console.log("HEY THE EMAIL", email)
      const product = {
          email: email
      }
      data.push(product)
      res.status(201).json(product)
  }
}

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const email = req.body
//       const response = await axios.post('https://api.example.com/endpoint', data);

//       res.status(200).json({ message: 'Post good', response: response.data })

      // const email = req.body.email
      // console.log("HEY THE EMAIL", email)
      // const product = {
      //     email: email
      // }
      // data.push(product)
      // res.status(201).json(product)
//     }
//   }
// }