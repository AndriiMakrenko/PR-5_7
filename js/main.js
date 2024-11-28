document.addEventListener('DOMContentLoaded', function () {
        const restaurantsData = [
            {
                image: 'img/pizza-plus/preview.jpg',
                name: 'Піца плюс',
                deliveryTime: '50 хвилин',
                rating: 4.5,
                price: 'від 200 ₴',
                category: 'Піца',
                link: 'restaurant.html', 
            },
            {
                image: 'img/tanuki/preview.jpg',
                name: 'Танукі',
                deliveryTime: '60 хвилин',
                rating: 4.5,
                price: 'від 1200 ₴',
                category: 'Суші, роли',
                link: 'restaurant.html', 
            },
            {
                image: 'img/food-band/preview.jpg',
                name: 'FoodBand',
                deliveryTime: '40 хвилин',
                rating: 4.5,
                price: 'від 150 ₴',
                category: 'Піца',
                link: 'restaurant.html', 
            },
            {
                image: 'img/palki-skalki/preview.jpg',
                name: 'Ikigai',
                deliveryTime: '55 хвилин',
                rating: 4.5,
                price: 'від 250 ₴',
                category: 'Піца',
                link: 'restaurant.html', 
            },
            {
                image: 'img/gusi-lebedi/preview.jpg',
                name: 'Пузата хата',
                deliveryTime: '75 хвилин',
                rating: 4.5,
                price: 'від 300 ₴',
                category: 'Українські страви',
                link: 'restaurant.html', 
            },
            {
                image: 'img/pizza-burger/preview.jpg',
                name: 'PizzaBurger',
                deliveryTime: '45 хвилин',
                rating: 4.5,
                price: 'від 700 ₴',
                category: 'Піца',
                link: 'restaurant.html', 
            },
        ];
    
        const menuData = [
            {
                image: 'img/pizza-plus/pizza-vesuvius.jpg',
                title: 'Піца Везувій',
                ingredients: 'Соус томатний, сир «Моцарелла», шинка, пепероні, перець «Халапіння», соус «Тобаско», томати.',
                price: 545,
                link: '#'
            },
            {
                image: 'img/pizza-plus/pizza-girls.jpg',
                title: 'Піца BBQ',
                ingredients: 'Соус томатний, пісне тісто, нежирний сир, кукурудза, цибуля, маслини, гриби, помідори, болгарський перець',
                price: 150,
                link: '#'
            },
            {
                image: 'img/pizza-plus/pizza-oleole.jpg',
                title: 'Піца Оле-Оле',
                ingredients: 'Соус томатний, сир «Моцарелла», черрі, маслини, зелень, майонез',
                price: 440,
                link: '#'
            },
            {
                image: 'img/pizza-plus/pizza-plus.jpg',
                title: 'Піца Плюс',
                ingredients: 'Соус томатний, сир «Моцарелла», сир «Чеддер», томат, пепероні, телятина, гриби, бекон, болгарський перець.',
                price: 405,
                link: '#'
            },
            {
                image: 'img/pizza-plus/pizza-hawaiian.jpg',
                title: 'Піца Гавайська',
                ingredients: 'Соус томатний, сир «Моцарелла», шинка, ананаси',
                price: 340,
                link: '#'
            },
            {
                image: 'img/pizza-plus/pizza-classic.jpg',
                title: 'Піца Класика',
                ingredients: 'Соус томатний, сир «Моцарелла», сир «Пармезан», шинка, салямі, гриби.',
                price: 310,
                link: '#'
            }
        ];
    
        const restaurantsContainer = document.getElementById('restaurantsContainer');
    const menuContainer = document.getElementById('menuContainer');
    const authModal = document.getElementById('authModal');
    const authButton = document.getElementById('authButton');
    const logoutButton = document.getElementById('logoutButton');
    const closeAuthButton = document.getElementById('closeAuth');
    const logInForm = document.getElementById('logInForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginName = document.getElementById('loginName');
    const userLogin = document.getElementById('userLogin');

    function showAuthModal() {
        resetInputFields(); 
        authModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        authModal.style.display = 'none';
        document.body.style.overflow = '';
        resetInputStyles();
        resetInputFields();
    }

    function renderRestaurants() {
        if (!restaurantsContainer) {
            console.error('restaurantsContainer не найден!');
            return;
        }

        restaurantsContainer.innerHTML = '';
        restaurantsData.forEach((restaurant) => {
            const restaurantCard = `
                <div class="card" data-link="${restaurant.link}">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                            <h3 class="card-title">${restaurant.name}</h3>
                        </div>
                        <div class="card-info">
                            <div>${restaurant.deliveryTime}</div>
                            <div>${restaurant.rating} ★</div>
                            <div>${restaurant.price}</div>
                            <div>${restaurant.category}</div>
                        </div>
                    </div>
                </div>`;
            restaurantsContainer.innerHTML += restaurantCard;
        });

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function (event) {
                event.preventDefault();
                if (!localStorage.getItem('username')) {
                    showAuthModal();
                } else {
                    window.location.href = card.dataset.link;
                }
            });
        });
    }

    function renderMenu() {
        if (!menuContainer) {
            console.error('menuContainer не найден!');
            return;
        }

        menuContainer.innerHTML = '';
        menuData.forEach((item) => {
            const menuCard = `
                <div class="card" data-link="${item.link}">
                    <img src="${item.image}" alt="${item.title}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                            <h3 class="card-title">${item.title}</h3>
                        </div>
                        <div class="card-info">
                            <div class="ingredients">${item.ingredients}</div>
                        </div>
                        <div class="card-buttons">
                            <button class="button button-primary button-add-cart">
                                <span class="button-card-text">У кошик</span>
                            </button>
                            <strong class="card-price-bold">${item.price} ₴</strong>
                        </div>
                    </div>
                </div>`;
            menuContainer.innerHTML += menuCard;
        });

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function (event) {
                event.preventDefault();
                if (!localStorage.getItem('username')) {
                    showAuthModal();
                } else {
                    window.location.href = card.dataset.link;
                }
            });
        });
    }

    authButton.addEventListener('click', function () {
        if (!localStorage.getItem('username')) {
            showAuthModal();
        }
    });

    closeAuthButton.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === authModal) {
            closeModal();
        }
    });

    logInForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let hasError = false;

        if (usernameInput.value.length < 4 || usernameInput.value.length > 16) {
            usernameInput.style.borderColor = 'red';
            hasError = true;
        } else {
            usernameInput.style.borderColor = '';
        }

        if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
            passwordInput.style.borderColor = 'red';
            hasError = true;
        } else {
            passwordInput.style.borderColor = '';
        }

        if (hasError) {
            return;
        }

        localStorage.setItem('username', usernameInput.value);

        authButton.style.display = 'none';
        logoutButton.style.display = 'block';
        userLogin.style.display = 'block';
        loginName.textContent = usernameInput.value;

        closeModal();
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('username');
        authButton.style.display = 'block';
        logoutButton.style.display = 'none';
        userLogin.style.display = 'none';
    });

    const username = localStorage.getItem('username');
    if (username) {
        authButton.style.display = 'none';
        logoutButton.style.display = 'block';
        userLogin.style.display = 'block';
        loginName.textContent = username;
    }

    function resetInputStyles() {
        usernameInput.style.borderColor = '';
        passwordInput.style.borderColor = '';
    }

    function resetInputFields() {
        usernameInput.value = '';
        passwordInput.value = '';
    }

    renderRestaurants();
    renderMenu();
});