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
              <h5 class="sales-title">Why Saleswhale?</h5>
            </li>
            <li v-for="(item, i) in salesMenuItems" :key="i" class="py-1">
              <a href="#" class="sales-items">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-3">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="product-title">Product</h5>
            </li>
            <div class="row no-gutters">
              <div class="col-lg-12">
                <li v-for="(item, i) in productMenuItems" :key="i" class="py-1">
                  <a href="#" class="product-items">{{item.title}}</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-4 ml-auto desk-ml-auto">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="company-title">Company</h5>
            </li>
            <li v-for="(item, i) in companyMenuItems" :key="i" class="py-1">
              <a href="#" class="company-items">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 mb-lg-0 col-md-3">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="contact-title">Contact</h5>
            </li>
            <li v-for="(item, i) in contactMenuItems" :key="i" :class="item.subtitled ? 'pt-3' : ''">
              <a href="#" :class="item.subtitled ? 'font-weight-bold' : 'f'" class="contact-items">{{item.title}}</a>
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
          <a href="#" class="pr-3 font-weight-bold font-16 privacy-policy">Privacy Policy</a>
          <a href="#" class="font-weight-bold font-16 terms-of-use">Terms of use</a>
          <p class="mt-3 font-16 copyright">&#169; 2020 SalesWhale, Inc. All rights reserved.</p>
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
export default {
  data () {
    return {
      salesMenuItems: [
        { title: 'Collaborative Intelligence' },
        { title: 'AI Assistant Capabilities' },
        { title: 'Customer Stories' },
        { title: 'Use Case - Technology' },
        { title: 'Use Case - Education' },
        { title: 'Use Case - Events' }
      ],
      productMenuItems: [
        { title: 'Product' },
        { title: 'AI Conversations' },
        { title: 'Lead Enrichment' },
        { title: 'Deal Intelligence' },
        { title: 'Workflow Integration' }
      ],
      companyMenuItems: [
        { title: 'Company' },
        { title: 'About us' },
        { title: 'Blog' },
        { title: 'Ressources' },
        { title: 'Careers' },
        { title: 'Help Centre' }
      ],
      contactMenuItems: [
        { title: 'hello@saleswhale.com', subtitled: false },
        { title: 'US Office', subtitled: true },
        { title: '1701 Rhode Island Ave NW Washington, DC 20036', subtitled: false },
        { title: 'Singapore Office', subtitled: true },
        { title: '155B Telok Ayer Street Singapore, 068611', subtitled: false }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
