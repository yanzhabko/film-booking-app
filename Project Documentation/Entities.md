
# Сайт задумкою
## Опис Основних Сутностей Системи Запису на Перегляд Фільмів

### Користувач
Користувач — це особа, яка може записуватися на перегляд фільмів, відміняти запис, а також переглядати фільми, на які він вже записувався.

**Атрибути:**
- Ідентифікатор (ID): Унікальний ідентифікатор користувача.
- Ім'я користувача: Унікальне ім’я для входу в систему.
- Пароль: Пароль користувача (зберігається безпечно).
- Електронна пошта: Контактний email користувача.
- Записані фільми: Список фільмів, на які користувач записався.

### Фільм
Фільм — це запис про кінофільм, який доступний для перегляду користувачами.

**Атрибути:**
- Ідентифікатор (ID): Унікальний ідентифікатор фільму.
- Назва: Назва фільму.
- Опис: Короткий опис сюжету фільму.
- Тривалість: Тривалість фільму в хвилинах.
- Дата прем'єри: Дата виходу фільму.
- Жанр: Жанр фільму (наприклад, драма, комедія, наукова фантастика).
- Доступні сеанси: Список сеансів фільму, на які можна записатися.

### Сеанс
Сеанс — це конкретний час, коли фільм буде демонструватися в кінотеатрі.

**Атрибути:**
- Ідентифікатор (ID): Унікальний ідентифікатор сеансу.
- Дата та час: Коли відбудеться сеанс.
- Фільм: Ідентифікатор фільму, до якого цей сеанс належить.
- Місце проведення: Назва або адреса кінотеатру.
- Кількість місць: Кількість доступних місць на сеансі.

### Запис
Запис — це факт того, що користувач записався на перегляд конкретного фільму.

**Атрибути:**
- Ідентифікатор (ID): Унікальний ідентифікатор запису.
- Користувач: Ідентифікатор користувача, який зробив запис.
- Сеанс: Ідентифікатор сеансу, на який користувач записався.
- Дата та час запису: Коли був здійснений запис.

### Адміністратор
Адміністратор — це користувач, який може створювати нові фільми, редагувати існуючі та керувати сеансами.

**Атрибути:**
- Ідентифікатор (ID): Унікальний ідентифікатор адміністратора.
- Ім'я користувача: Унікальне ім'я для входу в систему.
- Пароль: Пароль адміністратора (зберігається безпечно).
- Роль: Адміністратор.

## Основні Сценарії Використання

### Реєстрація та вхід користувача
**Кроки:**
1. Користувач заходить на сайт і реєструється, заповнивши форму з ім'ям, паролем та електронною поштою.
2. Після реєстрації користувач може увійти в систему, використовуючи свій логін та пароль.

### Запис на перегляд фільму
**Кроки:**
1. Користувач переглядає доступні фільми та вибирає сеанс, на який хоче записатися.
2. Користувач натискає кнопку "Записатися" на вибраному сеансі.
3. Система перевіряє, чи є вільні місця на сеансі, і, якщо так, записує користувача на сеанс.

### Відміна запису
**Кроки:**
1. Користувач заходить до свого профілю, де відображається список його записів.
2. Користувач вибирає записаний сеанс і натискає кнопку "Відмінити запис".
3. Система видаляє запис користувача з бази даних.

### Перегляд записаних фільмів
**Кроки:**
1. Користувач входить до свого профілю і переглядає список фільмів, на які він записався.
2. Користувач може побачити деталі сеансу та відмінити запис, якщо це необхідно.

### Створення фільмів та сеансів адміністратором
**Кроки:**
1. Адміністратор входить у систему і вибирає опцію створення нового фільму.
2. Він заповнює інформацію про фільм (назва, опис, тривалість, жанр).
3. Потім адміністратор створює доступні сеанси для цього фільму, визначаючи дату, час і кількість місць.

## Можливі Етапи Реалізації Проєкту

### Проєктування системи
1. Збір та аналіз вимог.
2. Розробка архітектури системи.
3. Створення моделі даних та структури бази даних.

### Розробка основної функціональності
1. Реалізація реєстрації та авторизації користувачів.
2. Розробка CRUD-операцій для фільмів, сеансів і записів.
3. Створення інтерфейсу користувача для управління записами на сеанси.

### Адміністративні функції
1. Реалізація можливості для адміністраторів створювати та редагувати фільми та сеанси.
2. Впровадження управління ролями та доступом для адміністраторів.

### Тестування та безпека
1. Проведення модульного та інтеграційного тестування.
2. Реалізація валідації вводу, захисту від помилок та забезпечення безпеки даних.

### Розгортання та підтримка
1. Розгортання додатку на обраному сервері.
2. Надання користувачам доступу до системи та технічної підтримки.

## Додаткова Інформація
Всі дані користувачів, зокрема їхні записані сеанси, повинні зберігатися з дотриманням стандартів конфіденційності та безпеки. В системі має бути забезпечена надійна автентифікація користувачів і адміністраторів, а також захист від несанкціонованого доступу.