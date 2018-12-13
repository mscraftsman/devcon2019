<template>
  <section class="map full-section-container" id="map">
    <div class="logo-container">
      <div class="logo-wrapper">
        <div class="text-wrapper">
          <h1 class="title">Where are we?</h1>
        </div>
        <div class="date-wrapper">
          Mauritius - Indian Ocean
        </div>
      </div>
      <div class="section-description-wrapper">
        <p>Mauritius is an island nation in the Indian Ocean about 2,000 kilometres (1,200 mi) off
	  the southeast coast of the African continent. The country includes the island of Mauritius,
	  Rodrigues [560 kilometres (350 mi) east], and the outer islands (Agaléga, St. Brandon and
	  two disputed territories). The islands of Mauritius and Rodrigues form part of the
	  Mascarene Islands, along with nearby Réunion, a French overseas department. The area of the
	  country is 2,040 km2. The capital and largest city is Port Louis. <i>(Source: Wikipedia)</i>
          </p>
        <p>The Developers Conference will be held at the Mall of Mauritius, Bagatelle, Moka.
	  It is easy accessible via Motorway M1 and there are plenty of parkings.
	  Several bus lines from and to various directions pass by Bagatelle.</p>
      </div>
    </div>
  </section>
</template>
<script>

</script>
<style lang="scss" scoped>
  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];
  }

  * {
    box-sizing: border-box;
  }

  @keyframes home {
    0% {
      background-position: 0% 50%, center center;
    }
    50% {
      background-position: 100% 50%, center center;
    }
    100% {
      background-position: 0% 50%, center center;
    }
  }

  .map {
    background: linear-gradient(135deg, rgba(49,232,183, 0.9) 0%, rgba(40,71,217, 0.4) 50%), url(~/static/images/venues/world-map-outline.png);
    background-size: 100%, cover;
    background-position: center center;
    height: 100vh;

    .logo-container {
      grid-column: container;
      display: grid;
      grid-auto-rows: auto;
      height: calc( 60vh - 80px);
      margin-top: 80px;
      padding: calc(var(--gutter) / 2);

      .logo-wrapper {
        text-align: left;
        align-self: end;
        display: flex;
        align-items: center;
        margin-bottom: calc(var(--gutter) * 2);
        flex-wrap: wrap;

        .date-wrapper {
          width: 100%;
          font-family: var(--font-shentox);
          text-transform: uppercase;
          color: var(--color-white);
          font-size: 35px;
          line-height: 50px;
          font-weight: 500;
          text-shadow: 0 10px 50px rgba(0, 0, 0, 0.05);
        }

        .text-wrapper {
          width: 100%;
          text-align: left;
          align-self: end;
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .title {
            font-family: var(--font-shentox);
            text-transform: uppercase;
            color: var(--color-white);
            font-size: 40px;
            line-height: 60px;
            font-weight: 700;
            margin: 0;
            text-shadow: 0 10px 50px rgba(0, 0, 0, 0.05);
            margin-right: calc(var(--gutter) / 1);
          }

          .year-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-shentox);
            text-transform: uppercase;
            color: var(--color-white);
            font-size: 50px;
            padding: calc(var(--gutter) / 1.5);
            height: 70px;
            font-weight: 700;
            background: linear-gradient(135deg, rgba(49,232,183, 1) 0%, rgba(40,71,217, 1) 100%);
            border-radius: 5px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);

            span {
              height: 50px;
            }
          }
        }
      }

      .description-wrapper {
        color: var(--color-white);
        font-size: 100px;
        font-family: var(--font-glacial);
        text-transform: uppercase;
      }

      .section-description-wrapper {
        p {
          font-family: var(--font-glacial);
          color: var(--color-white);
          font-weight: 300;
          font-size: 19px;
          line-height: 28px;
          margin-bottom: var(--gutter);
          color: rgba(255, 255, 255, 1);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.99);

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .footer-text-wrapper {
        align-self: end;
        text-align: center;
        padding-bottom: calc(var(--gutter) + 10px);

        h3 {
          color: var(--color-white);
          font-family: var(--font-shentox);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 1500px) {
    .main {
      .logo-container {
        .logo-wrapper {

          .date-wrapper {
            font-size: 30px;
          }

          .text-wrapper {
            .title {
              font-size: 30px;
            }
            .year-wrapper {
              font-size: 40px;
              height: 60px;

              span {
                height: 40px;
              }
            }
          }
        }
        .description-wrapper {
          font-size: 80px;
          letter-spacing: -1px;
        }
      }
    }
  }

  @media (max-width: $tablet) {
    .main {
      .logo-container {
        .logo-wrapper {
          justify-content: center;

          .date-wrapper {
            text-align: center;
          }

          .text-wrapper {
            justify-content: center;
          }
        }
        .description-wrapper {
          font-size: 80px;
          text-align: center;
        }

        .timer-wrapper {
          .register a {
            font-size: 24px;
          }
        }

        .footer-text-wrapper {
          h3 {
            font-size: 24px;
          }
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .main {
      .logo-container {
        .description-wrapper {
          font-size: 60px;
        }

        .timer-wrapper {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;

          .timer {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            justify-self: center;
          }

          .register {
            grid-row: 2 / 3;
            grid-column: 1 / 2;

            a {
              font-size: 24px;
              width: 100%;
            }

          }
        }

        .footer-text-wrapper {
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }


  @media (max-width: $mobile) {
    .main {
      .logo-container {

        .logo-wrapper {
          flex-direction: column;
          margin-bottom: calc(var(--gutter) / 2);

          .date-wrapper {
            font-size: 25px;
            line-height: 40px;
          }

          .text-wrapper {
            flex-direction: column;
            margin-bottom: var(--gutter);

            .title {
              font-size: 25px;
              line-height: 50px;
              margin-right: 0;
            }

            .year-wrapper {
              font-size: 30px;
              height: 50px;

              span {
                height: 30px;
              }
            }
          }
        }

        .description-wrapper {
          font-size: 36px;
        }

        .timer-wrapper {
          .register {
            a {
              font-size: 24px;
            }
          }
        }

        .footer-text-wrapper {
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 320px) {
    .main {
      .logo-container {

        .logo-wrapper {
          margin-bottom: 20px;

          .date-wrapper {
            line-height: 25px;
          }
        }

        .description-wrapper {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .timer-wrapper {
          .register {
            margin-bottom: var(--gutter);
            a {
              height: 50px;
            }
          }
        }
      }
    }
  }
</style>
