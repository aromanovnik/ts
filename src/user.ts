import { renderBlock } from './lib.js';
import { IUser } from './types/IUser';

export function renderUserBlock(user: IUser): void {
  const favoritesCaption = user.favoriteItemsAmount ? user.favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = !!user.favoriteItemsAmount;

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
