import { NextResponse } from "next/server";

type LeadInput = {
  need?: string;
  goal?: string;
  stage?: string;

  channels?: string[];
  current_url?: string;
  problems?: string[];
  revenue?: string;
  platform?: string;
  page_for?: string;
  ad_spend?: string;
  page_count?: string;

  budget?: string;
  timeline?: string;

  company?: string;
  notes?: string;

  name?: string;
  fullName?: string;

  phone?: string;
  email?: string;

  website?: string;
};

const jsonHeaders = {
  "Content-Type": "application/json",
};

function scoreLead(data: {
  need: string;
  goal: string;
  stage: string;
  channels: string[];
  problems: string[];
  revenue: string;
  platform: string;
  pageFor: string;
  adSpend: string;
  pageCount: string;
  budget: string;
  timeline: string;
}) {
  const scoreMap: Record<string, number> = {
    // -------------------------
    // NEED
    // -------------------------
    "A new website": 2,
    "A redesign": 2,
    "A landing page": 3,

    // -------------------------
    // NEW WEBSITE
    // -------------------------
    "Sell products directly": 3,
    "Generate leads and enquiries": 3,
    "Both": 3,
    "Mostly credibility, we sell offline": 0,

    "₹25L+ a month": 4,
    "₹5L to ₹25L a month": 3,
    "Under ₹5L a month": 1,
    "Nothing yet, we're launching": 0,

    // -------------------------
    // TRAFFIC
    // -------------------------
    "Meta ads": 3,
    "Google ads": 3,
    "SEO and organic search": 2,
    "Instagram and word of mouth": 0,
    "Marketplaces like Amazon or Nykaa": 0,
    "Not sure yet": 0,

    // -------------------------
    // REDESIGN
    // -------------------------
    "Traffic comes but doesn't convert": 3,
    "Looks dated, hurts credibility": 0,
    "Too slow": 0,
    "Can't update it without a developer": 0,
    "Doesn't work properly on mobile": 0,

    "₹1Cr+": 4,
    "₹25L to ₹1Cr": 4,
    "₹5L to ₹25L": 3,
    "Under ₹5L": 1,
    "Not selling online yet": 0,

    "Shopify": 0,
    "WordPress": 0,
    "Wix, Squarespace or similar": 0,
    "Custom build": 0,

    // -------------------------
    // LANDING PAGE
    // -------------------------
    "A paid campaign, cold traffic": 3,
    "A product launch": 2,
    "Webinar or event registration": 2,
    "Lead generation for a service": 3,

    "₹20L+": 4,
    "₹5L to ₹20L": 4,
    "₹1L to ₹5L": 2,
    "Under ₹1L": 0,
    "Not running ads yet": 0,

    "Just one": 0,
    "Two to three variants for testing": 2,
    "Five or more": 2,

    // -------------------------
    // BUDGET
    // -------------------------
    "₹5,00,000+": 4,
    "₹2,50,000 to ₹5,00,000": 3,
    "₹1,00,000 to ₹2,50,000": 2,
    "Under ₹1,00,000": -20,
    "Not sure, I want a recommendation": 1,

    // -------------------------
    // TIMELINE
    // -------------------------
    "This week": 3,
    "Within two weeks": 3,
    "Within a month": 2,
    "Just exploring": 0,
  };

  let score = 0;

  const values = [
    data.need,
    data.goal,
    data.stage,
    ...data.channels,
    ...data.problems,
    data.revenue,
    data.platform,
    data.pageFor,
    data.adSpend,
    data.pageCount,
    data.budget,
    data.timeline,
  ];

  values.forEach((value) => {
    score += scoreMap[value] ?? 0;
  });

  const declined =
    data.budget === "Under ₹1,00,000";

  const band = declined
    ? "Decline"
    : score >= 10
      ? "Hot"
      : score >= 6
        ? "Warm"
        : "Nurture";

  return {
    score,
    band,
  };
}

function clean(value: unknown, max = 2000) {
  return typeof value === "string"
    ? value.trim().slice(0, max)
    : "";
}

function cleanArray(value: unknown) {
  if (!Array.isArray(value)) return [];

  return value
    .filter(
      (item): item is string =>
        typeof item === "string"
    )
    .map((item) => item.trim().slice(0, 500))
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char] ?? char
  );
}

export async function POST(request: Request) {

  const resendKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL;
const fromEmail = process.env.FROM_EMAIL;


  try {
    const body = (await request.json()) as LeadInput;

    // --------------------------------
    // NORMALIZE DATA
    // --------------------------------

    const data = {
      need: clean(body.need),
      goal: clean(body.goal),
      stage: clean(body.stage),

      channels: cleanArray(body.channels),
      currentUrl: clean(body.current_url, 500),
      problems: cleanArray(body.problems),

      revenue: clean(body.revenue),
      platform: clean(body.platform),
      pageFor: clean(body.page_for),
      adSpend: clean(body.ad_spend),
      pageCount: clean(body.page_count),

      budget: clean(body.budget),
      timeline: clean(body.timeline),

      company: clean(body.company, 160),

      fullName: clean(
        body.fullName ?? body.name,
        120
      ),

      phone: clean(body.phone, 40),

      email: clean(
        body.email,
        160
      ).toLowerCase(),

      notes: clean(
        body.notes,
        3000
      ),
    };

    // --------------------------------
    // REQUIRED FIELDS
    // --------------------------------

    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.need ||
      !data.budget ||
      !data.timeline
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
          headers: jsonHeaders,
        }
      );
    }

    // --------------------------------
    // EMAIL VALIDATION
    // --------------------------------

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        data.email
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
          headers: jsonHeaders,
        }
      );
    }

    // --------------------------------
    // PHONE VALIDATION
    // --------------------------------

    const cleanPhone = data.phone
      .replace(/\D/g, "")
      .slice(-10);

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid Indian mobile number.",
        },
        {
          status: 400,
          headers: jsonHeaders,
        }
      );
    }

    // --------------------------------
    // SCORE
    // --------------------------------

    const { score, band } = scoreLead({
      need: data.need,
      goal: data.goal,
      stage: data.stage,
      channels: data.channels,
      problems: data.problems,
      revenue: data.revenue,
      platform: data.platform,
      pageFor: data.pageFor,
      adSpend: data.adSpend,
      pageCount: data.pageCount,
      budget: data.budget,
      timeline: data.timeline,
    });

    // --------------------------------
    // SUPABASE SERVER CREDENTIALS
    // --------------------------------

    const supabaseUrl =
      process.env.SUPABASE_URL;

    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (
      !supabaseUrl ||
      !serviceRoleKey
    ) {
      console.error(
        "Missing Supabase server environment variables."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Server configuration is incomplete.",
        },
        {
          status: 500,
          headers: jsonHeaders,
        }
      );
    }

    // --------------------------------
    // DATABASE ROW
    // --------------------------------

    const leadRow = {
      need: data.need,
      goal: data.goal,
      stage: data.stage,

      budget: data.budget,
      timeline: data.timeline,

      full_name: data.fullName,

      email: data.email,
      phone: cleanPhone,

      company:
        data.company || null,

      website:
        data.currentUrl || null,

      message:
        data.notes || null,

      score,
      band,

      source:
        "bluvo.studio/get-started",

      page_path:
        "/get-started",
    };

    // --------------------------------
    // SAVE TO SUPABASE
    // --------------------------------

    const dbResponse = await fetch(
      `${supabaseUrl}/rest/v1/website_leads`,
      {
        method: "POST",

        headers: {
          apikey: serviceRoleKey,
          Authorization:
            `Bearer ${serviceRoleKey}`,
          "Content-Type":
            "application/json",
          Prefer:
            "return=representation",
        },

        body: JSON.stringify(leadRow),

        cache: "no-store",
      }
    );

    if (!dbResponse.ok) {
      const detail =
        await dbResponse.text();

      console.error(
        "Supabase insert failed:",
        detail
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Could not save the lead.",
        },
        {
          status: 500,
          headers: jsonHeaders,
        }
      );
    }

    const savedRows =
      await dbResponse.json();

    const leadId =
      savedRows?.[0]?.id ?? "";

    // --------------------------------
    // RESEND CONFIG
    // --------------------------------
if (!resendKey) {
  console.error("❌ RESEND_API_KEY is missing");
}

if (!notificationEmail) {
  console.error("❌ NOTIFICATION_EMAIL is missing");
}

if (!fromEmail) {
  console.error("❌ FROM_EMAIL is missing");
}

if (resendKey && notificationEmail && fromEmail) {
  const html = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;color:#111;">
        <div style="max-width:700px;margin:30px auto;background:#ffffff;padding:30px;border-radius:12px;">

          <h2 style="margin-top:0;">
            New Bluvo Studio Lead
          </h2>

          <p>
            <strong>Lead ID:</strong>
            ${escapeHtml(String(leadId))}
          </p>

          <p>
            <strong>Lead Score:</strong>
            ${score}
          </p>

          <p>
            <strong>Lead Band:</strong>
            ${escapeHtml(band)}
          </p>

          <hr />

          <h3>Contact Details</h3>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(data.fullName)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(data.email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(`+91${cleanPhone}`)}
          </p>

          <p>
            <strong>Company:</strong>
            ${escapeHtml(data.company || "—")}
          </p>

          <hr />

          <h3>Project Details</h3>

          <p>
            <strong>What they need:</strong>
            ${escapeHtml(data.need || "—")}
          </p>

          <p>
            <strong>Goal:</strong>
            ${escapeHtml(data.goal || "—")}
          </p>

          <p>
            <strong>Business Stage:</strong>
            ${escapeHtml(data.stage || "—")}
          </p>

          <p>
            <strong>Budget:</strong>
            ${escapeHtml(data.budget || "—")}
          </p>

          <p>
            <strong>Timeline:</strong>
            ${escapeHtml(data.timeline || "—")}
          </p>

          <p>
            <strong>Traffic Sources:</strong>
            ${escapeHtml(data.channels.join(", ") || "—")}
          </p>

          <p>
            <strong>Current Website:</strong>
            ${escapeHtml(data.currentUrl || "—")}
          </p>

          <p>
            <strong>Problems:</strong>
            ${escapeHtml(data.problems.join(", ") || "—")}
          </p>

          <p>
            <strong>Revenue:</strong>
            ${escapeHtml(data.revenue || "—")}
          </p>

          <p>
            <strong>Platform:</strong>
            ${escapeHtml(data.platform || "—")}
          </p>

          <p>
            <strong>Page Purpose:</strong>
            ${escapeHtml(data.pageFor || "—")}
          </p>

          <p>
            <strong>Ad Spend:</strong>
            ${escapeHtml(data.adSpend || "—")}
          </p>

          <p>
            <strong>Page Count:</strong>
            ${escapeHtml(data.pageCount || "—")}
          </p>

          <hr />

          <h3>Notes</h3>

          <div style="
            background:#f5f5f5;
            padding:16px;
            border-radius:8px;
            white-space:pre-wrap;
          ">
            ${escapeHtml(data.notes || "No notes provided.")}
          </div>

          <hr />

          <p style="font-size:12px;color:#777;">
            Source: bluvo.studio/get-started
          </p>

        </div>
      </body>
    </html>
  `;

  try {
    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from: fromEmail,
          to: [notificationEmail],
          reply_to: data.email,
          subject: `[Bluvo] ${band} Lead — ${data.fullName}`,
          html,
        }),
      }
    );

    const emailResult = await emailResponse.text();

    console.log("📧 Resend status:", emailResponse.status);
    console.log("📧 Resend response:", emailResult);

    if (!emailResponse.ok) {
      console.error("❌ Resend email failed:", emailResult);

      return NextResponse.json(
        {
          success: true,
          leadId,
          score,
          band,
          emailSent: false,
          message: "Lead saved, but notification email failed.",
        },
        {
          status: 201,
          headers: jsonHeaders,
        }
      );
    }

    console.log("✅ Notification email sent successfully");

  } catch (emailError) {
    console.error("❌ Resend request error:", emailError);

    return NextResponse.json(
      {
        success: true,
        leadId,
        score,
        band,
        emailSent: false,
        message: "Lead saved, but notification email failed.",
      },
      {
        status: 201,
        headers: jsonHeaders,
      }
    );
  }
}

    // --------------------------------
    // SUCCESS
    // --------------------------------

    return NextResponse.json(
      {
        success: true,
        leadId,
        score,
        band,
        emailSent: true,
      },
      {
        status: 201,
        headers: jsonHeaders,
      }
    );

  } catch (error) {
    console.error(
      "Lead API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your request.",
      },
      {
        status: 500,
        headers: jsonHeaders,
      }
    );
  }
}