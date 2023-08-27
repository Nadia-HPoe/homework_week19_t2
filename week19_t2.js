let container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      for (const key in data) {
        const item = data[key].title;
        const item2 = data[key].body;
        let postTitle = document.createElement("p");
        let postBody = document.createElement("p");
        container.appendChild(postTitle);
        container.appendChild(postBody);
        postTitle.classList.add("title_style");
        postBody.classList.add("body_style");
        postTitle.textContent += `Заголовок: ${item}`;
        postBody.textContent += `Текст: ${item2}`;
      }
    })

    .catch((error) => console.error("Ошибка:", error));
});

//
// }
// postTitle.textContent = `Заголовок: ${data.title}`;
// postBody.textContent = `Текст: ${JSON.stringify(data.body)}`;
