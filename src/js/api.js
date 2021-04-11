import data from './data';

export const getAllChats = (callback = () => {}) => {
  const response = data.chats;
  callback(response);
  return response;
}

export const getAllStep = (callback = () => {}) => {
  const response = data.steps;
  callback(response);
  return response;
}

export const getAllFaq = (callback = () => {}) => {
  const response = data.faqs;
  callback(response);
  return response;
}