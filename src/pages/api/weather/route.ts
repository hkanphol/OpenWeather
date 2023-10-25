export async function GET(req: Request) {
    //get lat and lon from URL / body / header
    const lat = "17.802223";
    const lon = "102.747401";
    const APIKEY = process.env.OPENWEATHER_API_KEY;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      return new Response(JSON.stringify(await result.json()));
    }
    return new Response(JSON.stringify(null));
  }
  