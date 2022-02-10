import { renderBlock } from './lib.js';
import { IPost } from './types/IPost';

export const renderPosts = (posts: IPost[]): void => {
  let html = posts.reduce<string>((prev, cur): string => {
    return (
      prev +
      `  <div class='posts'>
                <div class='post'>
                  <span class='post__id'>id: ${cur.id} | </span>
                  <span class='post__title'>title: ${cur.title} | </span>
                  <span class='post__userId'>userId: ${cur.userId} | </span>
                </div>
              </div>`
    );
  }, '');

  renderBlock('posts-results-block', html);
};
