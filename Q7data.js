class Book{
    constructor(title,author,publicationYear){
        this.bookTitle = title,
        this.bookAuthor = author,
        this.bookPublicationYear = publicationYear
    }
    displayDetail(){
        return{
            bookTitle : this.bookTitle,
            bookAuthorName : this.bookAuthor,
            bookPublicationYear : this.bookPublicationYear
        }
    }
}
class Ebook extends Book{
    constructor(title,author,publicationYear,bookPrice){
        super(title,author,publicationYear)
        this.priceOfBook = bookPrice
    }
    displayDetail(){
        return{
            TitleOfbook : this.bookTitle,
            AuthorOfBook : this.bookAuthor,
            PublicationYearOfBook: this.bookPublicationYear,
            PriceOfBook : this.priceOfBook
        }
    }
}
export {Book, Ebook}