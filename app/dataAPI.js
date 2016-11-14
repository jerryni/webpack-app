export default {
    getArticleList() {
        return new Promise((resolve, reject) => {
            fetch("/data/articles.json").then(response => {
                response.json().then(result => resolve(result))
            })
        })
    },

    getArticle() {
        return new Promise((resolve, reject) => {
            fetch("/data/content.json").then(response => {
                response.json().then(result => resolve(result))
            })
        })
    },

    getAuthor() {
        return new Promise((resolve, reject) => {
            fetch("/data/author.json").then(response => {
                response.json().then(result => resolve(result))
            })
        })
    }
}