export default function Card({ title, price }) {
  return (
    
    <div class="col-md-3">
      <div class="product">
        <div class="image">
          <img src="http://placehold.it/300x400" alt="" />
        </div>

        <div class="info">
          <h3>{title}</h3>
          <ul class="rating">
            <li>
              <ion-icon name="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star"></ion-icon>
            </li>
            <li>
              <ion-icon name="star-half-outline"></ion-icon>
            </li>
          </ul>
          <div class="info-price">
            <span class="price">
              {price}
              <small>₽</small>
            </span>
            <button class="add-to-favourites">
              <ion-icon name="heart-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
