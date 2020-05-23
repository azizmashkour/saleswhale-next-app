<template>
  <section id="culture" class="mt-5 container text-center mobile-padding-0-2">
    <h2 class="common-title animated fadeInUp culture-title">Our Culture</h2>
    <div class="about">
      <p class="some-paragraphes our-culture-paragraph">At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.</p>
      <div class="row mt-5">
        <div v-for="(item, i) in list" :key="i" class="col-lg-4 col-md-4 culture-items">
          <div class="main-container animated fadeInUp">
            <div class="image-container culture-img-container">
              <img src="../../assets/images/culture/img1.svg" alt="bg" class="w-100">
            </div>
            <div class="desc-container">
              <h3 class="mt-4">{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <p class="exited some-paragraphes mt-5">If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
        <a class="btn btn-primary mb-5 text-white join-team mt-4" href="#">
          Join the team
        </a>
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
          title: 'Building for the future',
          content: 'We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users.'
        },
        {
          title: 'Promoting trust & transparency',
          content: 'We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.'
        },
        {
          title: 'Achieving our very best',
          content: 'We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 320px) and (max-width: 600px) {
  #culture {
    .about>.some-paragraphes {
      padding-right: 4rem;
    }
    .desc-container h3 {
      line-height: 24px;
    }
  }
}
#culture {
  .culture-img-container {
    background-color: #F4F4F4;
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  p {
    color: #537089;
    font-size: 21px;
  }
  .join-team {
    padding: 0 1.5rem;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 2.5rem;
  }
  .desc-container {
    text-align: left;
    h3 {
      font-size: 21px;
      line-height: 34px;
      font-weight: bold;
      color: #002240;
    }
    p {
      font-size: 18px;
      line-height: 32px;
    }
  }
  .exited {
    text-align: center;
    color: #002240;
    font-size: 21px;
    line-height: 38px;
  }
}
</style>
