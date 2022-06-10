btn.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
});

const CATTOS_URL = 'https://api.thecatapi.com/v1/images/search';
const catImg = document.getElementById('catto-img')
const button = document.getElementById('change-catto');

const getCattos = async() => {
    try {
        const data = await fetch(CATTOS_URL,{ params: { limit:1, size:"full" } });
        const json = await data.json();
        return json;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    let json = await getCattos();
    catImg.src = json[0].url
}

loadImg();

button.addEventListener('click', loadImg);