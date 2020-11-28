import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";

const ax = axios.create({
  baseURL,
  timeout: 5000,
});

const api = {
  getMessage: (id) => {
    return ax({
      method: "GET",
      url: `${baseURL}/messages/${id}`,
    });
  },

  getMessages: (conversationId) => {
    return ax({
      method: "GET",
      url: `${baseURL}/messages?conversation=${conversationId}&asc=1`,
    });
  },
  createMessage: (author, message, attachments, conversation) => {
    const data = {
      author,
      message,
      attachments,
      conversation,
    };

    return ax({
      method: "POST",
      url: `${baseURL}/messages`,
      data,
    });
  },
  getConversationsByUser: (userId) => {
    return ax({
      method: "GET",
      url: `${baseURL}/conversations?user=${userId}`,
    });
  },
};

export default api;
