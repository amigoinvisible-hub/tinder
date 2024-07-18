document.addEventListener('DOMContentLoaded', () => {
    const profiles = [
        {img: 'profile1.jpg', name: 'Ayelen', desc: 'Me gusta bailar, cocino muy rico y soy muy divertida'},
        {img: 'profile2.jpg', name: 'Camila', desc: 'El perreo hasta el piso y el clonazepam hasta el fondo, estoy obsesionada con mi gato'},
        {img: 'profile3.jpg', name: 'Denisse', desc: 'Escabio como albañil pero nunca dejo de parecer una princesa'},
        {img: 'profile4.jpg', name: 'Diego', desc: 'Delegado Sindical, Radiologo y Tesorero al mismo tiempo. Para que no digan que los hombres no podemos hacer mas de una cosa a la vez'},
        {img: 'profile5.jpg', name: 'Eric', desc: 'Si hay bebidas alcoholicas soy el primero en llegar y el ultimo en irse. No hay boliche en el pais al que no haya ido'},
        {img: 'profile6.jpg', name: 'Irene', desc: 'Fanatica obsesionada con coldplay. Tengo tatuada la cara de Chris Martin en la espalda. Me peleo con administradores de consorcio tres veces al dia'},
        {img: 'profile7.jpg', name: 'Valeria', desc: 'Vegana. Hago yoga 40 veces a la semana. Me gusta salir a comer. Vegana. Era fanatica de Cerati hasta que lo conocí en persona. Vegana'},
        {img: 'profile8.jpg', name: 'Martin', desc: 'Fachero. Me encanta la joda aunque no me dejen salir. Atractivo. Inteligente. Apuesto. Socio vitalicio de Mc Donalds y River Plate'}
    ];

    let currentIndex = 0;

    const startButton = document.getElementById('startButton');
    const profileCard = document.querySelector('.profile-card');
    const endScreen = document.querySelector('.end-screen');
    const profileImg = document.getElementById('profileImg');
    const profileName = document.getElementById('profileName');
    const profileDesc = document.getElementById('profileDesc');
    const likeButton = document.querySelector('.like');
    const dislikeButton = document.querySelector('.dislike');
    const reloadButton = document.getElementById('reloadButton');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showProfile(index) {
        if (index < profiles.length) {
            profileImg.src = profiles[index].img;
            profileName.textContent = profiles[index].name;
            profileDesc.textContent = profiles[index].desc;
        } else {
            profileCard.classList.add('hidden');
            endScreen.classList.remove('hidden');
        }
    }

    function nextProfile() {
        currentIndex++;
        showProfile(currentIndex);
    }

    function addAnimation(className) {
        profileCard.classList.add(className);
        setTimeout(() => {
            profileCard.classList.remove(className);
            nextProfile();
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        document.querySelector('.start-screen').classList.add('hidden');
        profileCard.classList.remove('hidden');
        shuffle(profiles);
        showProfile(currentIndex);
    });

    likeButton.addEventListener('click', () => {
        addAnimation('match-animation');
    });

    dislikeButton.addEventListener('click', () => {
        addAnimation('dislike-animation');
    });

    reloadButton.addEventListener('click', () => {
        location.reload();
    });
});
