<!-- progress view component -->
<template>
  <section id="progress" class="mt-5 container mb-5">
    <h2 class="common-title text-center mb-5 animated fadeInUp">Our Progress</h2>
    <div class="our-progress px-5">
      <ul class="list-unstyled mb-0">
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container"></div>
            <span class="align-center short-desc"></span>
          </div>
        </li>
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container">2015</div>
            <img src="../../assets/images/progress/msg.svg" alt="bg" class="mx-4 msg">
            <span class="align-center short-desc">Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong</span>
          </div>
        </li>
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container">2016</div>
            <img src="../../assets/images/progress/msg.svg" alt="bg" class="mx-4 msg">
            <span class="align-center short-desc">Accepted into Y Combinator (S16) and moved to San Francisco</span>
          </div>
        </li>
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container">2017</div>
            <img src="../../assets/images/progress/msg.svg" alt="bg" class="mx-4 msg">
            <span class="align-center short-desc">Raised US$1.2M in seed funding and hired core engineers</span>
          </div>
        </li>
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container">2019</div>
            <img src="../../assets/images/progress/msg.svg" alt="bg" class="mx-4 msg">
            <span class="align-center short-desc">Raised US$5.3M in Series A and expanded team size</span>
          </div>
        </li>
        <li>
          <div class="d-inline-block">
            <div class="align-center year-container">2020</div>
            <img src="../../assets/images/progress/msg.svg" alt="bg" class="mx-4 msg">
            <span class="align-center short-desc">Opened US office in Washington, DC and hired US sales team</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
// progress view media query properties for web or large screens
#progress {
  .our-progress {
    background-color: #EFF8FF;
    border-radius: 5px;
  }
  img.msg {
    height: 80px;
    width: 80px;
    position: relative;
    margin-left: 0 !important;
    left: -2.2rem;
  }
  .year-container {
    color: #0688FA;
    font-size: 26px;
    line-height: 34px;
    font-weight: bold;
    border-right: 3px solid;
    height: 8rem;
    display: inherit;
    width: 8rem;
  }
  .short-desc {
    font-weight: 600;
    font-size: 26px;
    line-height: 34px;
    color: #002240;
  }
}
</style>
