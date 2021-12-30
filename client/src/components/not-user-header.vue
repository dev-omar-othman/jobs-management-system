<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/user-profile"
      ><button type="button" class="btn btn-light m-2 p-2">
        LOGO
      </button></router-link
    >
    <form class="form-inline my-2 my-md-0">
      <input class="form-control" type="text" placeholder="Search" />
    </form>
    <div class="collapse navbar-collapse" id="navbarsExample02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">ALL JOBS</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ACCOUNT
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item">
              <router-link to="/signin"> SIGN IN</router-link></a
            >
            <a class="dropdown-item">
              <router-link to="/signup"> SIGN UP</router-link></a
            >
            <a class="dropdown-item">
              <router-link to="/signin"> RECRUITER?</router-link></a
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped></style>
<script>
export default {
  data: function () {
    return {};
  },
  name: "header1",
};
</script>
