class CatalogItem {
    constructor(title,series){
        this.title = title;
        this.series = series
    }

    getInfo(){
        if(this.series) {
            return `${this.title} (${this.series})`
        } else {
            return this.title;
        }
    }
}

class Book extends CatalogItem {
    constructor(title,series, author){
        super(title,series);
        this.author = author;
    }
    getInfo() {
        let result = super.getInfo();

        if(this.series){
            result += `(${this.series}) by ${this.author}`
        } else {
            result += ` by ${this.author}`
        }

        return result;
    }
}

class Movie extends CatalogItem {
    constructor(title,series, director){
        super(title,series);
        this.director = director
    }
    getInfo(){
        let result = super.getInfo()
        if(this.director){
            result += `[directed by ${this.director}]`
        }
        return result
    }
}

module.exports = {
    Book,
    Movie
}