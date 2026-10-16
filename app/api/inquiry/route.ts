import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      teamName,
      email,
      phone,
      country,
      category,
      quantity,
      notes,
      customization,
    } = body;

    if (!fullName || !email || !country) {
      return NextResponse.json(
        { error: 'Please provide full name, email, and country.' },
        { status: 400 }
      );
    }

    const inquiryId = `WVX-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    // Log the inquiry for server-side processing
    console.log(`[WOLVEX INQUIRY ${inquiryId}] Received from ${fullName} (${teamName || 'Individual'}) - ${country}`);
    console.log(`Items: ${category || 'Unspecified'} | Qty: ${quantity || 'Flexible'}`);
    console.log(`Contact: ${email} | ${phone || 'N/A'}`);
    if (notes) console.log(`Notes: ${notes}`);

    // Pre-format WhatsApp message for quick client fallback if desired
    const summaryText = encodeURIComponent(
      `*New Inquiry (${inquiryId}) - WOLVEX Sportswear*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Team/Brand:* ${teamName || 'N/A'}\n` +
      `*Email:* ${email}\n` +
      `*Phone/WA:* ${phone || 'N/A'}\n` +
      `*Country:* ${country}\n` +
      `*Category:* ${category || 'Custom Gear'}\n` +
      `*Estimated Qty:* ${quantity || '10-25'}\n` +
      (customization && Array.isArray(customization) && customization.length > 0
        ? `*Options:* ${customization.join(', ')}\n`
        : '') +
      (notes ? `*Requirements:* ${notes}` : '')
    );

    const whatsappUrl = `https://wa.me/923252785376?text=${summaryText}`;

    return NextResponse.json({
      success: true,
      inquiryId,
      timestamp,
      whatsappUrl,
      message: 'Inquiry received. Our production team in Lahore will review your specifications and provide a digital mockup and quote within 24 hours.',
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try contacting us directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
