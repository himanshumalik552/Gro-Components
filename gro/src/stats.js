export default function(editor, opt = {}) {
    const c = opt;
    let bm = editor.BlockManager;
    const cats = c.blockCategories;
    const blocks = c.blocks;
    const labels = c.labels;
    if (cats.stats) {
      blocks.basetheme_stats_1 &&
        bm.add('basetheme_stats_1', {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/StatsBlock.png' />",
          category: labels.categorystats,
          content: `
          <section class="grp-wrapper grp-px-32 grp-py-48 grp-font-weight-400" id="basetheme_stats_1">
            <div class="grp-container-xxl grp-mx-auto">
                <div class="grp-row grp-py-16 grp-text-color-white">
                    <div class="grp-col-lg-6 grp-col-md-8 grp-col-xs-12">
                        <h2 class="grp-h2">
                        We Have Completed
                        <span class="grp-text-color-blue2">150+ Projects </span>Succesfully
                        </h2>
                        <p class="grp-p grp-font-weight-400 grp-py-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
                        </p>
                        <div class="grp-row">
                            <div class="grp-col-lg-4">
                                <h3 class="grp-h2">100%</<h3>
                                <p class="grp-p grp-font-weight-400">Pepperoni</p>
                            </div>
                            <div class="grp-col-lg-4">
                                <h3 class="grp-h2">27/7</<h3>
                                <p class="grp-p grp-font-weight-400">Delivery</p>
                            </div>
                            <div class="grp-col-lg-4">
                                <h3 class="grp-h2">100k</<h3>
                                <p class="grp-p grp-font-weight-400">Calories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `,
        });
        blocks.basetheme_stats_2 &&
        bm.add('basetheme_stats_2', {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/StatsBlock.png' />",
          category: labels.categorystats,
          content: `
          <section class="grp-wrapper grp-font-weight-500 grp-background-color-blue6   grp-pt-56  ">
    <div class="grp-container-xxl grp-mx-auto">
      <div class=" grp-row grp-justify-content-center  grp-align-items-center grp-flex-column">
        <div class="grp-col-lg-12 grp-text-align-center  grp-col-xs-11 ">
          <h2 class="h2 grp-font-weight-700 grp-text-color-gray0"> Trusted bu developers form over 80 planets</h2>
        </div>
        <div class="grp-col-lg-12 grp-pb-lg-72  grp-pb-sm-152 grp-pb-xs-152 grp-text-align-center grp-py-24 grp-position-relative grp-col-xs-11 ">
          <h6 class="grp-h6 grp-text-color-gray3 ">Lorem ipsum dolor sit amet consect adipisicing elit. cupiditate veritatis</h6>
        </div>

        <div class="grp-mt-lg-24 grp-mt-md-32 grp-mt-xs-100  grp-col-lg-6 grp-col-xs-10  grp-col-sm-5 grp-col-md-8 grp-position-absolute grp-py-10 grp-top-152 grp-background-color-white  grp-border grp-border-color-gray5 grp-border-radius-4 grp-border-color-white  ">
        <div class=" grp-row grp-justify-content-center  grp-align-items-center ">

          <div
            class="grp-col-sm-3  grp-col-md-12 grp-col-xs-12 grp-display-flex  grp-justify-content-center  grp-align-items-center   ">
            <div class="grp-text-align-center">
              <h3 class="grp-h3 grp-mt-lg-16 grp-mt-md-32 grp-text-color-blue7 grp-font-weight-600">100%</h3>
              <p class="grp-p grp-text-color-gray3">Pepperoni</p>
            </div>
          </div>
          <div
            class="grp-col-sm-3 grp-col-md-12 grp-col-xs-12  grp-display-flex grp-justify-content-center  grp-align-items-center   ">
            <div class="grp-text-align-center">
              <h3 class="grp-h3 grp-mt-16 grp-text-color-blue7 grp-font-weight-600">24/7</h3>
              <p class="grp-p grp-text-color-gray3">Delivery</p>
            </div>
          </div>
          <div
            class="grp-col-sm-3 grp-col-md-12 grp-col-xs-12  grp-display-flex grp-justify-content-center  grp-align-items-center   ">
            <div class="grp-text-align-center">
              <h3 class="grp-h3 grp-mt-16 grp-text-color-blue7 grp-font-weight-600">100k</h3>
              <p class="grp-p grp-text-color-gray3 ">Calories</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
    </div>
  </section>
      `,
        });
    }
  }
