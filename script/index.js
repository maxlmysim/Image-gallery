function sleeper(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getImage(query) {
    const link = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${query}%3E&client_id=amxu9UtVq4TovucYrdkOMQ3EZcz7--LvUzFTYABY96Q`;
    const res = await fetch(link);
    const data = await res.json();
    let img = [];
    img = data.results.map((item) => item.urls.regular);
    document.querySelectorAll('.link-img').forEach((item) => item.remove());
    createimg(img);
}

function createimg(img) {

    img.forEach((link) => {
        let img = document.createElement('div');
        let a = document.createElement('a');

        a.href = link;
        a.target = '_blank';
        a.className = 'link-img';
        img.className = 'img';
        img.style.backgroundImage = `url("${link}")`;

        document.querySelector('.container').append(a);
        a.append(img);
    });

}

let query = document.querySelector('.search-text');

getImage('girl');

query.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        getImage(query.value);
    }
});