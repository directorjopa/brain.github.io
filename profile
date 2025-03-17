<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профиль пользователя</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .profile {
            text-align: center;
        }
        .brain-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 20px auto;
        }
        .brain-image {
            width: 100%;
            height: 100%;
        }
        .neuron {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #ff6b6b;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .neuron:hover {
            background-color: #ff3b3b;
        }
        .description {
            display: none;
            margin-top: 20px;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="profile">
        <h1 id="username">Иван Иванов</h1>
        <p>Дней в боте: <span id="days">15</span></p>
    </div>
    <div class="brain-container">
        <img src="brain.png" alt="Мозг" class="brain-image">
        <!-- Нейроны -->
        <div class="neuron" style="top: 50px; left: 100px;" data-area="Префронтальная кора" data-description="Отвечает за внимание и принятие решений. Развивайте её с помощью медитации."></div>
        <div class="neuron" style="top: 150px; left: 200px;" data-area="Гиппокамп" data-description="Отвечает за память. Развивайте его с помощью ведения дневника."></div>
        <div class="neuron" style="top: 200px; left: 50px;" data-area="Миндалевидное тело" data-description="Отвечает за эмоции. Развивайте его с помощью дыхательных упражнений."></div>
    </div>
    <div id="description" class="description">
        <h2 id="area-name">Префронтальная кора</h2>
        <p id="area-description">Отвечает за внимание и принятие решений. Развивайте её с помощью медитации.</p>
    </div>
    <script>
        const neurons = document.querySelectorAll('.neuron');
        const description = document.getElementById('description');
        const areaName = document.getElementById('area-name');
        const areaDescription = document.getElementById('area-description');

        neurons.forEach(neuron => {
            neuron.addEventListener('click', () => {
                // Получаем данные из атрибутов нейрона
                const area = neuron.getAttribute('data-area');
                const desc = neuron.getAttribute('data-description');

                // Обновляем описание
                areaName.textContent = area;
                areaDescription.textContent = desc;

                // Показываем блок с описанием
                description.style.display = 'block';
            });
        });
    </script>
</body>
</html>
