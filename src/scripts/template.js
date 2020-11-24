import store from "./store";

const startPage = () => {
  return `    <section class='start-page'>
      <h1>Bookmarks</h1>
      <section class = 'bookmarkForm'>
          <button id='addBookmark' type='button'>Add Bookmark</button>
          <label for='minimumRating'></label>
          <select name="minimumRating" id="minimumRating">
              <option value='null'>Filter Ratings</option>
              <option class='minimum' value='1'>1*</option>
              <option class='minimum' value='2'>2*</option>
              <option class='minimum' value='3'>3*</option>
              <option class='minimum' value='4'>4*</option>
              <option class='minimum' value='5'>5*</option>
            </select>
      </section>
      ${generateBookmark(store)}
      </section>`;
};

/*const generateBookmark = (store) => {
    api.getItems().push(store.items);
  };*/
const generateBookmark = (store) => {
  if (store.filtered === false) {
    return store.items
      .map((item, i) => {
        if (item.expanded) {
          return `<section class='bookmark' data-item-id='${item.id}'> <p>${item.title}</p><p>Rating: ${item.rating}</p><p>${item.desc}</p><a href='${item.url}'>Visit Site: ${item.url}</a><button  class='less'>See Less</button><button class='delete'>Delete</button></section>`;
        } else {
          return `<section class='bookmark' data-item-id='${item.id}'><p>${item.title}</p><p>Rating: ${item.rating}</p><button  class='expand'>See More</button></section>`;
        }
      })
      .join("");
  } else {
    return store.filteredItems
      .map((item, i) => {
        if (item.expanded) {
          return `<section class='bookmark' data-item-id='${item.id}'> <p>${item.title}</p><p>Rating: ${item.rating}</p><p>${item.desc}</p><a href='${item.url}'>Visit Site: ${item.url}</a><button  class='less'>See Less</button><button class='delete'>Delete</button></section>`;
        } else {
          return `<section class='bookmark' data-item-id='${item.id}'><p>${item.title}</p><p>Rating: ${item.rating}</p><button  class='expand'>See More</button></section>`;
        }
      })
      .join("");
  }
};

const newBookmarkTemp = () => {
  return `<h1>Bookmarks</h1>
       <div>
          <form id='bookmarkForm'>
             <label for='url'>New Bookmark</label>
             <br>
             <label for='url'>Web Address</label>
             <input type='url' name='url' id ='url' placeholder='https://...' required>
                  <section class='bookmarkName'>
                      <lable for='bookmarkName'>Name</lable>
                      <input type='text' id='bookmarkName' placeholder='Add a name' required>
                  </section>
                  <p>Rating</p>
                  <ul class='rating'>
                      <lable>1</lable>
                      <input class='star' name='rating' id='1' type='radio' value='1'>
                      <lable>2</lable>
                      <input class='star' name='rating' id='2' type='radio' value='2'>
                      <lable>3</lable>
                      <input class='star' name='rating' id='3' type='radio' value='3'>
                      <lable>4</lable>
                      <input class='star' name='rating' id='4' type='radio' value='4'>
                      <lable>5</lable>
                      <input class='star' name='rating' id='5' type='radio' value='5'>
                  </ul>
                      <label for='bookmarkDescription'>Description</label>
                      <input type='text' id='bookmarkDescription' placeholder='Add a description' required>
          <button type='submit' id='submit'>Submit</button>
          <button type='button' id='cancle'>Cancle</button>
          </form>
      </div>`;
};

export default { newBookmarkTemp, generateBookmark, startPage };