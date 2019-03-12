# Indicators
SPA восьми индикаторов силосных башен. 
Проект создан с помощью [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## API
В качестве API используется [Angular in-memory-web-api](https://github.com/angular/in-memory-web-api). Модель индикатора:

```class Indicator {
     public id: string;
     public title: string;
     public value: number;
     public minValue: number;
     public maxValue: number;
}
```
Приложение каждые 10 секунд отправляет GET-запрос (подписка на события `TimerObservable`).

## Структура проекта
В папке `api` содержится сервис, эмулирующий работу сервера. Клиентская часть приложения разбита на три компонента: в `app.component` производится вызов метода сервиса `indicator.service`, делающего запрос к "базе данных", `indicator.component` и `progress-bar.component` отвечают за оформление индикатора.

## Верстка, оформление
Для верстки макета с восьмью колонками применяются flexbox. Страница выглядит адекватно при изменении ширины экрана и при уменьшении количества индикаторов.

Для изображения индикатора-башни используется SVG (взят из присланного макета, адаптирован за счет переиспользования повторяющихся элементов с помощью `<use>`).

Статусная строка и индикатор реагируют изменением цвета на красный при достижении значений 0% и 100%. Все используемые цвета вынесены в CSS-переменные в корневой элемент дерева документа (может быть полезным при изменении цветовой палитры приложения).

Поскольку заранее неизвестно, какой длины заголовок придет с сервера, title длиной более 70 символов обрезается с многоточием, чтобы не ломать верстку. Для форматирования заголовка и числовых значений используются pipes; также подключена русская локаль для корректного отображения десятичных разделителей и разделителей групп разрядов.


## Обработка ошибок
Внештатные ситуации - отключенный Javascript в браузере, отсутствие связи с сервером, серверные ошибки, некорректные данные, пустое тело ответа сервера - перехватываются обработчиком ошибок;выводится соответствующее сообщение на страницу.


