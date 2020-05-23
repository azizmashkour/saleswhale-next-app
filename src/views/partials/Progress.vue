<template>
  <section id="progress" class="mt-5 container mb-5 px-0 px-sm-2">
    <h2 class="common-title text-center mb-5 animated fadeInUp responsive-text-center progress-title">Our Progress</h2>
    <div class="our-progress px-sm-5">
      <table class="table-year">
        <tr v-for="(item, i) in list" :key="i" class="progress-items">
          <td><div class="align-center year-container">{{item.year}}</div></td>
          <td class="mid-col"><img src="../../assets/images/progress/msg.svg" alt="bg" class="msg"></td>
          <td><span class="align-center short-desc">{{item.step}}</span></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          year: '2015',
          step: 'Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong'
        },
        {
          year: '2016',
          step: 'Accepted into Y Combinator (S16) and moved to San Francisco'
        },
        {
          year: '2017',
          step: 'Raised US$1.2M in seed funding and hired core engineers'
        },
        {
          year: '2018',
          step: 'Raised US$5.3M in Series A and expanded team size'
        },
        {
          year: '2019',
          step: 'Raised US$5.3M in Series A and expanded team size'
        },
        {
          year: '2020',
          step: 'Opened US office in Washington, DC and hired US sales team'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#progress {
  .our-progress {
    background-color: #EFF8FF;
    border-radius: 5px;
  }

  .table-year {
    img.msg {
      height: 60px;
      width: 60px;
      position: relative;
      margin: 40px auto;
      display: block;
    }
    .mid-col {
      min-width: 180px;
      position: relative;
      &:before {
        display: block;
        position: absolute;
        top: 0;
        left: calc(50% - 2px);
        content: '';
        width: 3px;
        height: 100%;
        background-color: #0688FA;
        z-index: 0;
      }
    }
    .year-container {
      color: #0688FA;
      font-size: 26px;
      line-height: 34px;
      font-weight: bold;
      vertical-align: middle;
    }
    .short-desc {
      font-weight: 600;
      font-size: 26px;
      line-height: 34px;
      color: #002240;
    }
  }
}
</style>
