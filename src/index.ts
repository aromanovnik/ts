import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getFavoritesAmount, getUserData, renderUserBlock } from './user.js';
import { renderToast, Storage } from './lib.js';
import { IUser } from './types/IUser';

window.addEventListener('DOMContentLoaded', () => {
  Storage.set(
    'user',
    JSON.stringify({ userName: 'User name', avatarUrl: './img/avatar.png' } as IUser),
  );
  Storage.set('favoritesAmount', 1);

  // ...
  const userData = getUserData();
  const favoritesAmount = getFavoritesAmount();
  userData && renderUserBlock(userData, favoritesAmount ?? undefined);
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    },
  );
});
