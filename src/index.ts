import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast, getFavoritesAmount, getUserData } from './lib.js';
import { Storage } from './Storage.js';
import { IUser } from './types/IUser';

window.addEventListener('DOMContentLoaded', () => {
  // For test
  Storage.set(
    'user',
    JSON.stringify({ userName: 'User name', avatarUrl: './img/avatar.png' } as IUser),
  );
  Storage.set('favoritesAmount', 1);
  // END For test

  // ...
  const userData = getUserData();
  const favoritesAmount = getFavoritesAmount();
  userData && renderUserBlock(userData, favoritesAmount ?? undefined);
  renderSearchFormBlock();
  renderSearchStubBlock();
  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   {
  //     name: 'Понял',
  //     handler: () => {
  //       console.log('Уведомление закрыто');
  //     },
  //   },
  // );
});
