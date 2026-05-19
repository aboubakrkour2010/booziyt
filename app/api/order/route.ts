import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "1mzYFvwEw-BUIQD8grO5J6w12vZojTNBtH3p8dx6yjmE",
  serviceAccountAuth
);
export async function POST(req: Request) {
  try {
    const body = await req.json();

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      date: new Date().toLocaleString("fr-FR"),

      city: body.city,

      address: body.address,

      payment: body.paymentMethod,

      total: body.total,

      products: JSON.stringify(body.cartItems),

      confirmation: "جديد",
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}
