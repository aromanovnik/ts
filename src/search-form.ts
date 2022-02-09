import { formatDate, renderBlock } from './lib.js';
import { ISearchFormData } from './types/ISearchFormData';

export function renderSearchFormBlock(checkIn?: Date, checkOut?: Date): void {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const _checkIn = formatDate(
    checkIn || new Date(today.getFullYear(), today.getMonth() - 1, today.getDate() + 1),
  );
  const _checkOut = formatDate(
    checkOut || new Date(today.getFullYear(), today.getMonth() - 1, today.getDate() + 2),
  );
  const percent = 50;

  const search = (data: ISearchFormData, callback?: (arg: [] | Error) => [] | Error): void => {
    console.log('[renderSearchFormBlock] search => ', data);

    // callback
    if (callback) {
      setTimeout(() => {
          callback(Math.random() < (percent / 100) ? [] : {
            name: 'ERROR',
            message: 'Error message',
          })
      }, 1000)


    }

  };

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input name="city" id="city" type="text" disabled value="Санкт-Петербург" />
            <input name="geolocation" type="hidden" disabled value="59.9386,30.3141" />
          </div>
<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${_checkIn}" min="${today}" max="${lastDayOfMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${_checkOut}" min="${today}" max="${lastDayOfMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `,
  );

  const formElement: HTMLFormElement | null = document.querySelector('#search-form-block form');
  if (formElement) {
    formElement.onsubmit = (event) => {
      if (!event.target) {
        return;
      }

      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      let data: ISearchFormData = {
        city: '',
        geolocation: '',
        checkin: '',
        checkout: '',
        price: '',
      };
      formData.forEach((value, key) => {
        console.log(key, value);
        if (key in data) {
          // @ts-ignore
          data[key] = value as string;
        }
      });

      search(data);
    };
  }
}
