addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // List of Magic 8 Ball responses
  const responses = [
    "Yes",
    "No",
    "Ask again later",
    "Definitely",
    "Outlook not so good",
    "Yes, in due time",
    "Absolutely",
    "Don't count on it",
    "Yes, but don't hold your breath",
    "Very unlikely",
    "It is certain",
    "My sources say no",
    "Yes, definitely",
    "You may rely on it",
    "No way!",
    "Concentrate and ask again"
  ];

  // Get a random response
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  // Create the response JSON
  const jsonResponse = {
    answer: randomResponse
  };

  // Return the JSON response
  return new Response(JSON.stringify(jsonResponse), {
    headers: { 'Content-Type': 'application/json' }
  });
}
