import { IUser } from './types/IUser';
import { Storage } from './Storage.js';

export function renderBlock(elementId: string, html: string): void {
  const element: HTMLElement | null = document.getElementById(elementId);
  if (element) {
    element.innerHTML = html;
  }
}

export function renderToast(
  message: { type: string; text: string } | null,
  action?: { name: string; handler?: () => void },
): void {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null);
    };
  }
}

export function formatDate(date: Date): string {
  return date?.toLocaleDateString('en-GB').split('/').reverse().join('-');
}

export const getFavoritesAmount = (): number | null => {
  return Storage.get<number | null>('favoritesAmount');
};
export const getUserData = (): IUser | null => {
  return Storage.get<IUser | null>('user');
};

export const getPosts = <T>(url: string): Promise<T> => {
  return new Promise<T>((resolve) => {
    fetch(url)
      .then<T>((response) => response.json())
      .then<void>((json) => resolve(json));
  });
};

export const getTodosByCount = <T>(count: number): Promise<T> => {
  const url = `https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=${count}`;
  return getPosts(url);
};
