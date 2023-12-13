export async function getChat(id: string) {
  console.log("GET /api/chats");

  const response = await fetch(`/api/chats/${id}`, {
    method: "GET",
  });

  return await response.json();
}
