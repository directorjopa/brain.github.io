// Элементы DOM
const userNameElement = document.getElementById("user-name");
const daysInBotElement = document.getElementById("days-in-bot");
const zoneTitleElement = document.getElementById("zone-title");
const zoneDescriptionElement = document.getElementById("zone-description");
const zones = document.querySelectorAll(".zone");

// Функция для обновления данных пользователя
function updateUserData(data) {
    // Обновляем имя пользователя
    userNameElement.textContent = data.name || "Имя пользователя";
    
    // Обновляем количество дней в боте
    daysInBotElement.textContent = `Дней в боте: ${data.days_in_bot || 0}`;
    
    // Обновляем прогресс зон мозга (если нужно)
    // Например, можно добавить визуализацию прогресса
}

// Функция для отображения информации о зоне
function showZoneInfo(zone) {
    const zoneData = {
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
    }[zone];

    if (zoneData) {
        zoneTitleElement.textContent = zoneData.title;
        zoneDescriptionElement.textContent = zoneData.description;
    }
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
    try {
        const data = JSON.parse(event.data);
        if (data.action === "profile_data") {
            updateUserData(data);
        }
    } catch (error) {
        console.error("Ошибка при обработке данных:", error);
    }
});

// Запрос данных у бота при загрузке Mini App
window.Telegram.WebApp.sendData(JSON.stringify({ action: "get_profile" }));
    }
});

// Запрос данных у бота при загрузке
window.Telegram.WebApp.sendData(JSON.stringify({ action: "get_profile" }));
