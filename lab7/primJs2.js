document.write(`  <ul>
<li id="gifts">Подарунки</li>
<li id="furniture">Меблі</li>
<li id="dishes">Посуд</li>
</ul>`)

document.querySelector("#gifts").addEventListener("click", () => {
    location.href = "http://127.0.0.1:5555/gifts.html"
})

document.querySelector("#furniture").addEventListener("click", () => {
    location.href = "http://127.0.0.1:5555/furniture.html"
})

document.querySelector("#dishes").addEventListener("click", () => {
    location.href = "http://127.0.0.1:5555/dishes.html"
})

