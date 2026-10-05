import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "1ZjN8hbaRaiV3PNJhOhcYCGy7RKNrSMS7ZsLeGgouy18",
  serviceAccountAuth
);

export async function POST(req: Request) {
  console.log("🔥 OLIVE API CALLED");

  try {
    const body = await req.json();

    console.log("📦 BODY:", body);

    await doc.loadInfo();

    console.log("📊 SHEETS:", doc.sheetCount);

    const sheet = doc.sheetsByTitle["زيت الزيتون"];

    if (!sheet) {
      throw new Error("Sheet زيت الزيتون غير موجودة");
    }

    console.log("✅ SHEET FOUND:", sheet.title);

    await sheet.addRow({
      date: new Date().toLocaleString("fr-FR"),
      name: body.name,
      phone: body.phone,
      city: body.city,
      address: body.address,
      quantity: body.quantity,
      delivery: body.delivery,
      payment: body.payment,
      total: body.total,
      confirmation: "جديد",
      batch: "17",
    });

    console.log("✅ ROW ADDED");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("❌ OLIVE API ERROR:", error);

    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}
