<template>
  <nav class="navbar navbar-primary bg-primary fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        style="color: #f8f8f8; letter-spacing: 1px"
        href="#"
        >Название проекта....</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLightNavbar"
        aria-controls="offcanvasLightNavbar"
        aria-label="Toggle navigation"
        style="color: #f8f8f8; background-color: #fff"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasLightNavbar"
        aria-labelledby="offcanvasLightNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Основное меню
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  <hr style="margin-top: 2px" />
  >
</template>
<script>
export default {
  name: 'hdr',
};
</script>

<style></style>
