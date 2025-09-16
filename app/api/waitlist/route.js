export async function POST(req) {
  try {
    // Parse the request body to get the email
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Email Octopus API details
    const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
    const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID; // Single list ID

    if (!API_KEY || !LIST_ID) {
      console.error("Missing API key or List ID for EmailOctopus");
      return new Response(JSON.stringify({ error: "Waiting List service is not configured properly" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Make a direct API call to EmailOctopus
    const apiUrl = `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email_address: email,
        status: "SUBSCRIBED",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // EmailOctopus returned an error
      // Check for specific error codes from EmailOctopus
      if (data.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return new Response(JSON.stringify({ error: "You are already subscribed to our waitlist" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      } else if (data.error?.code === "INVALID_PARAMETERS") {
        return new Response(JSON.stringify({ error: "Please provide a valid email address" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({
          error: data.error?.message || "Failed to subscribe to the waitlist",
        }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ message: "Successfully subscribed to the waitlist" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Waitlist POST error:", error);
    return new Response(JSON.stringify({ error: "Waitlist subscription failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
