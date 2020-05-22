<template>
  <section id="header">
    <div class="contact-us">
      <a href="#">OUR COVID-19 RESPONSE</a>
    </div>
    <div class="container px-0">
      <nav class="navbar navbar-expand-lg navbar-light px-0 py-3">
        <a class="navbar-brand" href="#">
          <img src="../../assets/images/logo.svg" alt="Logo" class="img-responsive">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Why Saleswhale?
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Company</a>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-mobile">
            <li class="nav-item">
              <a class="nav-link nav-link-w-100 btn btn-outline-primary" href="#">
                Login
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link nav-link-w-100 btn btn-primary ml-3 text-white mobile-margin-0" href="#">
                Get a Demo
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="row mt-5 mobile-padding-0-2 mobile-mt-5">
        <div class="col-lg-12">
          <img src="../../assets/images/banner-version.svg" alt="Header bg" class="w-100 desktop-only">
          <img src="../../assets/images/mobile-banner-version.svg" alt="Header bg" class="w-100 mobile-only">
        </div>
        <div class="col-12 col-md-6 col-lg-6 mt-5 mobile-mt-4">
          <h1 class="wow-h1 animated fadeInUp">A future where AI and humans work hand in hand</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-6 mt-5 px-0 mobile-mt-4">
          <p class="wow-p animated fadeInUp">At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.</p>
          <p class="wow-p animated fadeInUp">AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.</p>
          <p class="wow-p animated fadeInUp">Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.</p>
          <p class="wow-p animated fadeInUp">The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) and (max-width: 600px) {
  .navbar-expand-lg {
    margin-left: 15px;
    margin-right: 15px;
  }
  .mobile-margin-0 {
    margin-left: 0!important;
    margin-top: 1rem!important;
  }
  .navbar-nav-mobile {
    display: inline;
    margin-left: 1.5rem;
    li {
      display: inline-block;
    }
    li.active {
      margin-left: .5rem;
    }
  }
}
#header {
  .navbar-brand {
    img {
      height: auto;
      width: 100%;
      max-width: 180px;
    }
  }
  .contact-us {
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 13px;
    padding: 0.5rem 0;
    font-weight: 100;
    a {
      color: #fff;
      text-decoration: underline;
      padding-left: 0.7rem;
    }
  }
  .wow-h1 {
    font-size: 58px;
    line-height: 62px;
    font-weight: bold;
    color: #002240;
    width: 498px;
  }
  .wow-p {
    font-size: 18px;
    color: #002240;
  }
  .navbar-collapse {
    .nav-link-w-100 {
      font-weight: 400 !important;
    }
    .nav-link {
      padding: 0 1.5rem;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 2.5rem;
      color: #002240;
      i {
        font-size: 1.4rem;
      }
    }
    .header-search {
      border: 1px solid #ebebeb;
      border-radius: 2px;
    }
  }
}
</style>
