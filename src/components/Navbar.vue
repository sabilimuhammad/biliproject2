<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar--dark">
    <a href="#" class="logo navbar-brand">
      <img src="assets/images/logo.png" alt class="img-fluid" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">MODELS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BRAND</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">OWNERSHIP</a>
        </li>
        <li class="nav-item">
          <a class="nav-lin k" href="#">EXPERIENCE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MOTORSPORT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">STORE</a>
        </li>
      </ul>
    </div>
    <!-- <div class="nav--icon">
          <ul class="d-flex">
    <li class="nav-item">-->

    <!-- Trigger modal -->
    <span class="navbar-toggler-icon"></span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="buttons-alpha">
        <ul class="buttons-beta">
          <li>
            <a id="modalSettingsButton" href="#" class="text-light">
              <span>
                <i class="fas fa-cog"></i>
              </span>
            </a>
          </li>
          <li>
            <a id="modalShareButton" href="#" class="text-light">
              <span>
                <i class="fas fa-share-alt"></i>
              </span>
            </a>
          </li>
          <li>
            <a id="modalSearchButton" href="#" class="text-light">
              <span>
                <i class="fas fa-search"></i>
              </span>
            </a>
          </li>
          <li>
            <a id="modalLangButton" href="#" class="text-light">
              <span>
                <i class="fas fa-language"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Dropdown menu -->
    <div class="dropdown--menu d-none">
      <div class="menu--links">
        <ul class="dropdown-models">
          <li>
            <a href="#">Urus</a>
          </li>
          <li>
            <a href="#">Huracan</a>
          </li>
          <li>
            <a href="#">Aventador</a>
          </li>
          <li>
            <a href="#">Few Off</a>
          </li>
          <li>
            <a href="#">Concept</a>
          </li>
          <li>
            <a href="#">Ad Personam</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // message : 'who is this?',
      // name : 'bili',
      image1: "https://www.carlogos.org/logo/Ferrari-logo-2560x1440.png",
      car: {
        // type: 'huracan',
        // color: 'black',
      },
      imageUrl: "https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png",
      alt: "alt",
      nameList: [
        {
          name: "Laferrari"
        },
        {
          name: "Aventador"
        }
      ]
    };
  },
  methods: {
    changeimg() {
      this.image1 = this.changeimg;
    }
  }
};
</script>

<style>
</style>