const button = document.querySelector('.btn')
const header = document.querySelector('h1')
const movieList = [
    'Первый',
    'Второй',
    'Восьмой'
]
const count = movieList.length

button.addEventListener('click', () => {
    header.innerHTML = movieList[getRandom(count)]
})

function getRandom(max) {
    return Math.floor(Math.random() * max)
}