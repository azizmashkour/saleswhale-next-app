<template>
  <section id="investors" class="text-center">
    <h2 class="common-title animated fadeInUp">Our Investors</h2>
    <div class="our-investors container">
      <div class="row mt-5">
        <div class="col-lg-6">
          <div class="main-container p-5">
            <img src="../../assets/images/investors/ycombinator.svg" alt="bg" class="w-100">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-container p-5">
            <img src="../../assets/images/investors/monk.svg" alt="bg" class="w-100">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-container p-5 mt-4">
            <img src="../../assets/images/investors/strive.svg" alt="bg" class="w-100">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-container p-5 mt-4">
            <img src="../../assets/images/investors/wavemaker.svg" alt="bg" class="w-100">
          </div>
        </div>
      </div>
    </div>
    <div class="the-future bg-primary m-5">
      <h3 class="mb-4 title animated fadeInUp">See the future</h3>
      <a class="btn bg-white future-btn px-5 get-demo" href="#">Get a Demo</a>
      <a class="btn btn-outline ml-3 text-white future-btn border-white px-5" href="#">Read use cases</a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
#investors {
  background-image: url(../../assets/images/investors/bg1.svg);
  background-repeat: no-repeat;
  background-position: top;
  padding-top: 5rem;
  .our-investors {
    .main-container {
      border: 1px solid #E5E5E5;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      text-align: center;
      background-color: #fff;
      padding: 5rem 0 !important;
      cursor: pointer;
      transition: all .3s linear;
      img {
        height: 80px;
      }
      h3 {
        font-weight: bold;
        font-size: 32px;
        line-height: 34px;
        color: #002240;
      }
      p {
        color: #002240;
        padding: 0 5rem;
      }
    }
    .main-container:hover {
      box-shadow: 0 30px 60px 0 rgba(38,59,94,.1);
    }
  }
  .the-future {
    color: #fff;
    border-radius: 5px;
    padding: 5rem !important;
    margin-top: 7rem!important;
    .title {
      font-weight: bold;
      font-size: 48px;
      line-height: 120%;
    }
    .get-demo {
      color: #002240!important;
    }
    .future-btn {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
      font-weight: bold;
    }
  }
}
</style>
