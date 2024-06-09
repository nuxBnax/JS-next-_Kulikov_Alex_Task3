// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.


document.addEventListener('DOMContentLoaded', () => {
    console.log('----------------------------Задание 1----------------------------');
    console.log('все теги прогрузились');
})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = () => {
    console.log('----------------------------Задание 2----------------------------');
    console.log('Страница загрузилась')
}
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
console.log('----------------------------Задание 3----------------------------');
const bodyEl = document.body.children;

for (let i = 0; i < bodyEl.length; i++) {
    let item = bodyEl[i];
    item.addEventListener('click', (e) => {
        let tar = e.target;
        if (tar.classList.contains('super_element')) {
            cconsole.log(`В элементе ${tar.tagName.toLowerCase()} присутствует класс super_element`)
        } else {
            console.log(`В элементе ${tar.tagName.toLowerCase()} НЕТ класса super_element`)
        }
    })
}

document.addEventListener('click', (e) => {
    let tar = e.target;

    if (tar.classList.contains('super_element')) {
        console.log(`В элементе ${tar.tagName.toLowerCase()} присутствует класс super_element`)
    } else {
        console.log(`В элементе ${tar.tagName.toLowerCase()} НЕТ класса super_element`)
    }
})

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
console.log('----------------------------Задание 4----------------------------');

const textareaEl = document.querySelector('textarea');
textareaEl.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
})
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, 
// который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего
//  выводить не нужно. Необходимо использовать делегирование.
console.log('----------------------------Задание 5----------------------------');

const ulEl = document.querySelector('ul');
const liEl = document.querySelector('li');

ulEl.addEventListener('click', (e) => {
    let tar = e.target;
    if (tar.tagName.toLowerCase() === 'button') {
        console.log(tar.textContent);
    }
})

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания,
//  если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

 // Буду честен, как умею. НЕ могу сказать что я понял почему именно так. Говорят что тут дело в обратчике и что мол в button он срабатывает раньше, но я сделал 2мя способами и результат разный. Я по позже на семинаре спрошу почему так.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
console.log('----------------------------Задание 7----------------------------');

const liEls = ulEl.children;
for (let i = 1; i < liEls.length; i += 2) {
    liEls[i].style.background = 'red';
}