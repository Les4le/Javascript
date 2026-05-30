const newsArchive = [
  {
    title: "Новина: Прорив у штучному інтелекті",
    text: "Дослідники представили нову модель, що здатна навчатися без вчителя з неймовірною швидкістю.",
  },
  {
    title: "Новина: Кліматичні зміни 2026",
    text: "Глобальні ініціативи показують перші позитивні результати у сфері використання зеленої енергії.",
  },
  {
    title: "Новина: Космічний туризм стає ближчим",
    text: "Черговий успішний запуск приватного шатлу відкриває двері для комерційних польотів на орбіту.",
  },
  {
    title: "Новина: Нові тренди веб-розробки",
    text: "Завдяки нативним API робота з DOM стає ще швидшою, а фреймворки оптимізують рендеринг.",
  },
];

const newsList = document.getElementById("news-list");
const loading = document.getElementById("loading");

function appendNews() {
  if (newsArchive.length === 0) {
    loading.textContent = "Це всі новини на сьогодні.";
    return;
  }

  const news = newsArchive.shift();

  const newsItem = document.createElement("div");
  newsItem.className = "news-item";

  const title = document.createElement("h3");
  title.textContent = news.title;

  const text = document.createElement("p");
  text.textContent = news.text;

  newsItem.appendChild(title);
  newsItem.appendChild(text);
  newsList.appendChild(newsItem);
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 10
  ) {
    setTimeout(() => {
      appendNews();
    }, 300);
  }
});
