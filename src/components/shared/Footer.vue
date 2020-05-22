<!-- app foooter component -->
<template>
  <div class="pt-4" id="footer">
    <div class="mx-5 pb-5">
      <div class="row">
        <div class="ml-5 col-12 col-lg-3 mb-3 mb-lg-0 col-md-3 mobile-ml-1">
          <ul class="list-unstyled list-spaced">
            <div class="row no-gutters">
              <div class="col-lg-9">
                <img src="../../assets/images/logo.svg" alt="Logo" class="img-responsive">
              </div>
            </div>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-4 ml-auto">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5>Why Saleswhale?</h5>
            </li>
            <li class="py-1">
              <a href="#">Collaborative Intelligence</a>
            </li>
            <li class="py-1">
              <a href="#">AI Assistant Capabilities</a>
            </li>
            <li class="py-1">
              <a href="#">Customer Stories</a>
            </li>
            <li class="py-1">
              <a href="#">Use Case - Technology</a>
            </li>
            <li class="py-1">
              <a href="#">Use Case - Education</a>
            </li>
            <li class="py-1">
              <a href="#">Use Case - Events</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-3">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5>Product</h5>
            </li>
            <div class="row no-gutters">
              <div class="col-lg-12">
                <li class="py-1">
                  <a href="#">Product</a>
                </li>
                <li class="py-1">
                  <a href="#">AI Conversations</a>
                </li>
                <li class="py-1">
                  <a href="#">Lead Enrichment</a>
                </li>
                <li class="py-1">
                  <a href="#">Deal Intelligence</a>
                </li>
                <li class="py-1">
                  <a href="#">Workflow Integration</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-4 ml-auto desk-ml-auto">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5>Company</h5>
            </li>
            <li class="py-1">
              <a href="#">Company</a>
            </li>
            <li class="py-1">
              <a href="#">About us</a>
            </li>
            <li class="py-1">
              <a href="#">Blog</a>
            </li>
            <li class="py-1">
              <a href="#">Resources</a>
            </li>
            <li class="py-1">
              <a href="#">Careers</a>
            </li>
            <li class="py-1">
              <a href="#">Help Centre</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-3">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5>Contact</h5>
            </li>
            <li class="py-1">
              <a href="#">hello@saleswhale.com</a>
            </li>
            <li class="pt-2">
              <a href="#" class="font-weight-bold">US Office</a>
            </li>
            <li class="">
              <a href="#">1701 Rhode Island Ave NW
              Washington, DC 20036</a>
            </li>
            <li class="pt-3">
              <a href="#" class="font-weight-bold">Singapore Office</a>
            </li>
            <li class="">
              <a href="#">155B Telok Ayer Street Singapore, 068611</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center copy-rights pt-5">
      <div class="row mx-5">
        <div class="col-lg-3 ml-auto mobile-only">
          <a href="#" class=""><img src="../../assets/images/footer/fb.svg" alt="Logo" class="socials"></a>
          <a href="#" class="mx-3"><img src="../../assets/images/footer/tw.svg" alt="Logo" class="socials"></a>
          <a href="#" class=""><img src="../../assets/images/footer/lk.svg" alt="Logo" class="socials"></a> <br><br>
          <a href="#" class="font-weight-bold font-16">Privacy Policy</a> <br> <br>
          <a href="#" class="font-weight-bold font-16">Terms of use</a>
          <p class="mt-3 font-16">&#169; 2020 SalesWhale, Inc. All rights reserved. </p>
        </div>
        <div class="col-lg-6 text-left desktop-only">
          <a href="#" class="pr-3 font-weight-bold font-16">Privacy Policy</a>
          <a href="#" class="font-weight-bold font-16">Terms of use</a>
          <p class="mt-3 font-16">&#169; 2020 SalesWhale, Inc. All rights reserved. </p>
        </div>
        <div class="col-lg-3 ml-auto desktop-only">
          <a href="#" class=""><img src="../../assets/images/footer/fb.svg" alt="Logo" class="socials"></a>
          <a href="#" class="mx-3"><img src="../../assets/images/footer/tw.svg" alt="Logo" class="socials"></a>
          <a href="#" class=""><img src="../../assets/images/footer/lk.svg" alt="Logo" class="socials"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// footer media query properties for (min-width: 320px) and (max-width: 600px) screens
@media (min-width: 320px) and (max-width: 600px) {
  #footer {
    .mx-5 {
      margin-left: 1rem!important;
      margin-right: 1rem!important;
    }
    .ml-5 {
      margin-left: 0!important;
    }
    li {
      h5 {
        font-size: 16px!important;
      }
      a {
        font-size: 14px!important;
      }
    }
    .copy-rights {
      background-image: url(../../assets/images/footer/mobile-bg.svg)!important;
      height: 17rem!important;
      background-size: contain;
    }
    .text-center {
      text-align: center!important;
    }
  }
  .font-16 {
    font-size: 14px!important;
  }
}
#footer,
.copy-rights {
  font-size: 12px;
  line-height: 17px;

  a {
    color: #212529;
  }
}

// footer media query properties for web or large screens
#footer {
  .copy-rights {
    background-color: #F4F4F4;
    background-image: url(../../assets/images/footer/bg.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    height: 15rem;
  }
  .list-spaced {
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #212529;
    }
    li > h5 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      color: #212529;
    }
    li > a {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #002240;
    }
  }
  .font-weight-bold {
    font-weight: bold;
  }
  .font-16 {
    font-size: 16px;
  }
}
</style>
