/*
Изменеиние размера шрифта
*/

defineSizeFromCookies()

function defineSizeFromCookies() {
    // Если есть куки, устанавливаем стили
    let lead = document.getElementsByClassName('lead');
    let cook = get_cookie("CookieFs");
    if (cook) {
        for (let i = 0; i < lead.length; ++i)
            lead[i].style.fontSize = cook;
    }
}