const CreateFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `

    <div class="footer">
                <p>Automobiles</p>
                <div class="footer-ul">
                    
                    <ul class="category">
                        <li class="category-title">sports</li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                    </ul>

                    <ul class="category">
                        <li class="category-title">sports</li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                        <li><a href="#" class="footer-link">trucks</a></li>
                    </ul>
                </div>
            </div>

                <p class="ftitle">About us</p>
                <p class="infous">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue orci, commodo id diam nec, luctus facilisis nisl.
                 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam mattis mollis sem, 
                 sit amet tincidunt lectus feugiat eget. Nunc suscipit, lorem sed condimentum ullamcorper, nulla felis bibendum elit, 
                 et dictum lacus neque vitae arcu. Nullam pellentesque faucibus hendrerit. Quisque ullamcorper ullamcorper risus,
                 malesuada venenatis erat cursus ac. Vestibulum auctor sapien tincidunt arcu auctor, et consequat lorem elementum.</p>

                <p class="infous">support emails -help@wired.com,
                customersupport@wired.com</p>
                <p class="infous">telephone - 081 6945 9784
                </p>

                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link">terms & services</a>
                        <a href="#" class="social-link">terms & services</a>
                    </div>

                    <div>
                        <a href="#" class="social-link">instagram</a>
                        <a href="#" class="social-link">facebook</a>
                        <a href="#" class="social-link">twitter</a>
                    </div>
                
                
                </div>
    
    `;
}

CreateFooter();