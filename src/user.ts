import { renderBlock, Storage } from './lib.js';
import { IUser } from './types/IUser';

const USER_KEY = 'user';

export const getFavoritesAmount = (): number | null => {
  return Storage.get<number | null>('favoritesAmount');
};
export const getUserData = (): IUser | null => {
  return Storage.get<IUser | null>('user');
};

export function renderUserBlock(user: IUser, favoriteItemsAmount?: number): void {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = !!favoriteItemsAmount;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user.userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `,
  );
}
