//It is a normal javascript function that returns an action object

export default function selectBook(book) {
    console.log(book.title);
    return ({
        type : 'BOOK_SELECTED',
        payload : book
    });
};