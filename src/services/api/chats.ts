import type { Chat, Message } from "../../types";

export async function getChat(id: string): Promise<Chat> {
  console.log(`GET /api/chats/${id}`);

  const response = await fetch(`/api/chats/${id}`, {
    method: "GET",
  });

  return await response.json();
}

export async function getListOfChats(): Promise<Chat[]> {
  console.log("GET /api/chats");

  const response = await fetch(`/api/chats`, {
    method: "GET",
  });

  return await response.json();
}

export async function sendMessage({
  chatId,
  message,
}: {
  chatId: string;
  message: Omit<Message, "id">;
}) {
  console.log(`POST /api/chats/${chatId}/conversation`);

  const response = await fetch(`/api/chats/${chatId}/conversation`, {
    method: "POST",
    body: JSON.stringify(message),
  });

  return await response.json();
}
