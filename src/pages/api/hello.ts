export async function GET() {
  let data = [
    { name: "J", age: 7 },
    { name: "V", age: 17 },
    { name: "VK", age: 27 },
  ];

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 5 seconds!");
    }, 5000);
  });

  return Response.json({ data });
}
