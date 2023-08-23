export function createGalleryCard(searchResults, listFav) {
  let markap;
  if (searchResults.length) {
    markap = searchResults
      .map(({ preview, title, description, rating, _id }) => {
        const desktop = description.slice(0, 62);
        const mobile = description.slice(0, 97);
        let text = mobile + '...';
        if (window.screen.width >= 768) {
          text = desktop + '...';
        }
        return `<div class="photo-card cart-favorite">
        <div class = "backdrop"></div>
            <img class="img-card" src="${preview}" alt="${title}"/>
            <div class="info">
            <div class="info-text">
            <h3 class="info-item">${title}</h3>
            <p class="info-text">${text}</p>
            </div>
        </div>
        <button type="button" id='${_id}' class="btn-see-recipe">See recipe</button>
        <div class = "rating">
        <div class="rating-value">${rating}</div>
        <div class="rating-body">
        <div class="rating-active"></div>
        <div class="rating-items">
        <input type = "radio" class="rating-item" value="1" name="rating" >
        <input type = "radio" class="rating-item" value="2" name="rating" >
        <input type = "radio" class="rating-item" value="3" name="rating" >
        <input type = "radio" class="rating-item" value="4" name="rating" >
        <input type = "radio" class="rating-item" value="5" name="rating" >
        </div>
        </div>
        </div>
        <div class = "heard">
        <div class="heard-body">
        <div class="heard-active"></div>
        <div class="heard-items">
        <button type="button" class="btn-heard" id='${_id}'>♥</button>
        </div>
        </div>
        </div>
        </div>`;
      })
      .join('');
  } else {
    markap = `
        <div class="block-for-empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="83" viewBox="0 0 97 83" fill="none">
        <path d="M19 33H79V79H19V33Z" fill="#9BB537"/>
        <path d="M43 29.5C43 41.3741 33.3741 51 21.5 51C9.62588 51 0 41.3741 0 29.5C0 17.6259 9.62588 8 21.5 8C33.3741 8 43 17.6259 43 29.5Z" fill="#9BB537"/>
        <path d="M70 21.5C70 33.3741 60.3741 43 48.5 43C36.6259 43 27 33.3741 27 21.5C27 9.62588 36.6259 0 48.5 0C60.3741 0 70 9.62588 70 21.5Z" fill="#9BB537"/>
        <path d="M97 29.5C97 41.3741 87.3741 51 75.5 51C63.6259 51 54 41.3741 54 29.5C54 17.6259 63.6259 8 75.5 8C87.3741 8 97 17.6259 97 29.5Z" fill="#9BB537"/>
        <path d="M19 76H79V81.2807C79 82.2302 78.1605 83 77.125 83H20.875C19.8395 83 19 82.2302 19 81.2807V76Z" fill="#F8F8F8"/>
        <path d="M37 26.8705C37 25.2852 38.1193 24 39.5 24C40.8807 24 42 25.2852 42 26.8705V40.1295C42 41.7148 40.8807 43 39.5 43C38.1193 43 37 41.7148 37 40.1295V26.8705Z" fill="#F8F8F8"/>
        <path d="M45 26.8705C45 25.2852 46.567 24 48.5 24C50.433 24 52 25.2852 52 26.8705V40.1295C52 41.7148 50.433 43 48.5 43C46.567 43 45 41.7148 45 40.1295V26.8705Z" fill="#F8F8F8"/>
        <path d="M55 26.8705C55 25.2852 56.1193 24 57.5 24C58.8807 24 60 25.2852 60 26.8705V40.1295C60 41.7148 58.8807 43 57.5 43C56.1193 43 55 41.7148 55 40.1295V26.8705Z" fill="#F8F8F8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.1035 8.12123C73.8519 8.04342 74.6116 8.00354 75.3806 8.00354C85.0139 8.00354 93.1756 14.2612 95.9703 22.9072C95.2219 22.985 94.4622 23.0248 93.6931 23.0248C84.0599 23.0248 75.8982 16.7672 73.1035 8.12123Z" fill="#050505"/>
        </svg>
      <p class="message-for-empty">
        It appears that you haven't added any recipes to your favorites yet.
        To get started, you can add recipes that you like to your favorites
        for easier access in the future.
      </p>
        </div>`;
  }
  listFav.innerHTML = markap;
}