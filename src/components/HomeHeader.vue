<template>
<header class="large-header push" style="background: url('../static/img/headers/header.png') no-repeat scroll center center/cover border-box">
    <div class="nav-container">
        <nav class="primary-nav light">
            <a href="products.html">Products</a>
            <a href="categories.html">Collections</a>
        </nav>
        <div class="logo">
            <a href="/" class="logo-link">
                <span class="hide-content">I love lamp</span>
                <img class="big-logo" src="../static/img/logo/ill-white.svg" alt="I love lamp logo" aria-hidden="true"/>
                <img class="small-logo" src="../static/img/logo/ill-short-white.svg" alt="I love lamp logo" aria-hidden="true"/>
            </a>
        </div>
        <nav class="secondary-nav light">
            <a href="cart.html" class="cart"><span class="cart-name">Cart(</span><span class="cart-count">0</span><span class="cart-name">)</span></a>
        </nav>
    </div>
    <div class="header-container">
        <div class="content">
            <h1>I love carpet. I love desk.</h1>
            <a class="btn" href="#">I love lamp</a>
        </div>
    </div>
    <div class="down-arrow"><span class="hide-content"></span><object data="img/headers/down-arrow.svg" type="image/svg+xml" aria-hidden="true"></object></div>
</header>
</template>

<script>

export default {
  name: 'home header',
}

</script>
