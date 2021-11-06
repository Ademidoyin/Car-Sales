const navbar = () => {

    let nav = document.querySelector('.nav')

    nav.innerHTML =`
    <div class="navbox">
    <p class="logo">Automobile</p>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product" />
            <button class="search-btn">Search</button>
        </div>
        <a href="#"> <i class="far fa-user"></i> </a>
    <a href="#"> <i class="fal fa-shopping-cart"></i> </a>
    </div>
</div>

<ul class="link-container">
    <li class="link-item"><a href="#" class="link">home</a></i>
    <li class="link-item"><a href="#" class="link">bmw</a></i>
    <li class="link-item"><a href="#" class="link">mercedes benz</a></i>
    <li class="link-item"><a href="#" class="link">lambourgini</a></i>
</ul>

    `;
}

navbar()