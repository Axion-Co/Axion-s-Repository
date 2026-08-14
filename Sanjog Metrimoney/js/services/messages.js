const conversations = [];
export const messageService = {
  async getConversations() { return [...conversations]; },
  async getMessages() { return []; },
  async sendMessage(message) { return { id: crypto.randomUUID(), ...message, createdAt: new Date().toISOString() }; }
};
// Future adapter point: connect to the messaging API/WebSocket layer.
