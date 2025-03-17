// Данные пользователя (будут обновляться через Telegram Web App)
let userData = {
    name: "Иван",
    days_in_bot: 10,
    prefrontal_cortex: 0,
    hippocampus: 0,
    amygdala: 0
};

// Описания зон мозга
const zoneDescriptions = {
    prefrontal_cortex: {
        title: "Префронтальная кора",
        description: "Отвечает за принятие решений, планирование и самоконтроль. Развивайте её через задачи на логику и стратегическое мышление."
    },
    hippocampus: {
        title: "Гиппокамп",
        description: "Отвечает за память и обучение. Развивайте его через изучение нового и повторение информации."
    },
    amygdala: {
        title: "Миндалевидное тело",
        description: "Отвечает за эмоции и реакцию на стресс. Развивайте его через медитацию и управление эмоциями."
    }
};

// Элементы DOM
const userNameElement = document.getElementById("user-name");
const daysInBotElement = document.getElementById("days-in-bot");
const zoneTitleElement = document.getElementById("zone-title");
const zoneDescriptionElement = document.getElementById("zone-description");
const zones = document.querySelectorAll(".zone");

// Функция для обновления данных пользователя
function updateUserData(data) {
    userData = data;
    userNameElement.textContent = userData.name;
    daysInBotElement.textContent = `Дней в боте: ${userData.days_in_bot}`;
}

// Функция для отображения информации о зоне
function showZoneInfo(zone) {
    const zoneData = zoneDescriptions[zone];
    zoneTitleElement.textContent = zoneData.title;
    zoneDescriptionElement.textContent = zoneData.description;
}

// Обработчик клика по зоне
zones.forEach(zone => {
    zone.addEventListener("click", () => {
        // Убираем активный класс у всех зон
        zones.forEach(z => z.classList.remove("active"));
        // Добавляем активный класс к выбранной зоне
        zone.classList.add("active");
        // Показываем информацию о зоне
        const zoneType = zone.getAttribute("data-zone");
        showZoneInfo(zoneType);
    });
});

// Инициализация Mini App
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

// Обработчик получения данных от бота
window.Telegram.WebApp.onEvent("webAppDataReceived", (event) => {
    const data = JSON.parse(event.data);
    if (data.action === "profile_data") {
        updateUserData(data);
    }
});

// Запрос данных у бота при загрузке
window.Telegram.WebApp.sendData(JSON.stringify({ action: "get_profile" }));
