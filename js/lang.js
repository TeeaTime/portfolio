const langArr = {
    "title": {
        "eng": "Denis <br> Novik",
        "ru": "Денис <br> Новик"
    },
    "home-menu": {
        "eng": "Home",
        "ru": "Главная"
    },
    "about-menu": {
        "eng": 'About',
        "ru": 'О себе'
    },
    "skills-menu": {
        "eng": 'Skills',
        "ru": 'Навыки'
    },
    "portfolio-menu": {
        "eng": 'Portfolio',
        "ru": 'Портфолио'
    },
    "contacts-menu": {
        "eng": 'Contacts',
        "ru": 'Контакты'
    },
    "description": {
        "eng": 'UX | UI designer <br> 24 years old, Minsk',
        "ru": 'UX | UI дизайне <br> 24 года, Минск'
    },
    "about-title": {
        "eng": 'About',
        "ru": 'О себе'
    },
    "about-text-1": {
        "eng": "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
        "ru": 'Привет, я Денис - UX/UI дизайнер из Минска. Я интересуюсь дизайном и всем что с ним связано.'
    },
    "about-text-2": {
        "eng": "I'm studying at courses " + '"Web and mobile design interfaces"' + "in IT-Academy.",
        "ru": 'Я учусь на курсах "Веб и мобильный дизайн интерфейсы" в IT-Академии.'
    },
    "about-text-3": {
        "eng": 'Ready to implement excellent projects with wonderful people.',
        "ru": 'Готов реализовать отличные проекты с замечательными людьми.'
    },
    "skills-title": {
        "eng": 'Skills',
        "ru": 'Навыки'
    },
    "skills-subtitle": {
        "eng": 'I work in such programs as',
        "ru": 'Я работаю с такими программами как'
    },
    "portfolio-title": {
        "eng": 'Portfolio',
        "ru": 'Портфолио'
    },
    "contacts-title": {
        "eng": 'Contacts',
        "ru": 'Контакты'
    },
    "contacts-subtitle": {
        "eng": 'Want to know more or just chat? You are welcome!',
        "ru": 'Хотите узнать больше или просто пообщаться? Добро пожаловать!'
    },
    "contacts-message": {
        "eng": 'Send message',
        "ru": 'Отправте сообщение'
    },
    "contacts-text": {
        "eng": 'Like me on LinkedIn, Instagram, Behance, Dribble',
        "ru": 'Найи меня можно в LinkedIn, Instagram, Behance, Dribble'
    }

}

const lngButtonRu = document.querySelector('.ru-lng')
const lngButtonEng = document.querySelector('.eng-lng')
const lngButtonRuMobile = document.querySelector('.ru-lng-mobile')
const lngButtonEngMobile = document.querySelector('.eng-lng-mobile')

const allLangs = [
    'eng', 'ru'
]

const lngButtons = document.querySelectorAll('.lng-button')

for (let i = 0; i < lngButtons.length; i++) {
    let button = lngButtons[i]
    button.addEventListener("click", function () {
        let lang = button.getAttribute('data-lang')
        location.href = window.location.pathname + '#' + lang
        location.reload()
    })
}

function changeLng() {
    let hash = window.location.hash
    hash = hash.substring(1)
    console.log(hash)
    if (!allLangs.includes(hash)) {
        hash = location.href = window.location.pathname + '#eng'
        location.reload()
    }
    if (window.location.hash === '#ru') {
        lngButtonRu.classList.add('lng-on')
        lngButtonRuMobile.classList.add('lng-on')
    } else {
        lngButtonEng.classList.add('lng-on')
        lngButtonEngMobile.classList.add('lng-on')
    }
    // document.querySelector('title').textContent = (langArr["title"][hash])
    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash]
    }
}

changeLng()
