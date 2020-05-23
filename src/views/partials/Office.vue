<template>
  <section id="office" class="mt-5 text-center mobile-padding-0-2">
    <h2 class="common-title animated fadeInUp office-title">Our Office</h2>
    <div class="our-office container">
      <div class="row mt-5">
        <div v-for="(item, i) in list" :key="i" class="col-lg-6 col-md-6 col-12 office-items">
          <div class="main-container p-4 animated fadeInUp">
            <img src="../../assets/images/culture/img1.svg" alt="bg" class="w-100">
            <div class="desc-container">
              <h3 class="mt-4">{{item.title}}</h3>
              <p>{{item.address}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'Singapore',
          address: '155B Telok Ayer Street Singapore, 068611'
        },
        {
          title: 'Washington DC',
          address: '1701 Rhode Island Ave NW Washington, DC 20036'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 320px) {
  #office {
    background-size: cover;
  }
}
#office {
  background-image: url(../../assets/images/office/bg1.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  h2 {
    margin-top: 5rem;
  }
  .our-office {
    .main-container {
      cursor: pointer;
      transition: all .3s linear;
      border: 1px solid #E5E5E5;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      text-align: center;
      background-color: #fff;
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
}
</style>
