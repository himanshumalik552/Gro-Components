export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.features) {
    blocks.basetheme_features_1 &&
      bm.add('basetheme_features_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/FeatureBlock.png' />",
        category: labels.categoryfeatures,
        content: `
        <section class="grp-wrapper grp-font-weight-400 grp-py-64">
            <div class="grp-container-xxl grp-mx-auto">
                <div class="grp-row">
                    <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-text-align-center grp-mx-auto">
                        <h3 class="grp-h3-med">A better way to send money</h3>
                        <p class="grp-p">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                </div>
                <div class="grp-row grp-justify-content-evenly">
                    <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32">
                        <div class="grp-border-circle grp-border grp-border-color-blue2 grp-height-px-48 grp-width-px-48 grp-background-color-blue2 grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center ">
                            <img class="" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png"
                                alt="">
                        </div>
                        <h3 class="grp-h5-med grp-mt-16">A better way to send money</h3>
                        <p class="grp-p">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                    <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32">
                        <div class="grp-border-circle grp-border grp-border-color-blue2 grp-height-px-48 grp-width-px-48 grp-background-color-blue2 grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center ">
                            <img class="" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png"
                                alt="">
                        </div>
                        <h3 class="grp-h5-med grp-mt-16">A better way to send money</h3>
                        <p class="grp-p">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                    <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32">
                        <div class="grp-border-circle grp-border grp-border-color-blue2 grp-height-px-48 grp-width-px-48 grp-background-color-blue2 grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center ">
                            <img class="" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png"
                                alt="">
                        </div>
                        <h3 class="grp-h5-med grp-mt-16">A better way to send money</h3>
                        <p class="grp-p">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                    <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32">
                        <div class="grp-border-circle grp-border grp-border-color-blue2 grp-height-px-48 grp-width-px-48 grp-background-color-blue2 grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center ">
                            <img class="" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png"
                                alt="">
                        </div>
                        <h3 class="grp-h5-med grp-mt-16">A better way to send money</h3>
                        <p class="grp-p">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
      });
      blocks.basetheme_features_2 &&
      bm.add('basetheme_features_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/FeatureBlock.png' />",
        category: labels.categoryfeatures,
        content: `
        <section class="grp-wrapper grp-background-color-blue6 grp-font-weight-400 grp-py-64">
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-text-align-center grp-mx-auto">
              <h3 class="grp-h3  ">What We Do
              </h3>

            </div>
          </div>
          <div class="grp-row grp-mt-24 grp-justify-content-evenly">
            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24 ">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">01</h1>
              <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">UX Design
              </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>



            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24 ">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">02</h1>
               <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">Game Design
            </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>

            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">03</h1>
              <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">Graphic Design
              </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>

            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24 ">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">04</h1>
              <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">Web Design
              </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>

            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24 ">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">05</h1>
              <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">App Development
              </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>

            <div class="grp-col-lg-4 grp-col-md-5 grp-col-xs-8 grp-px-lg-36 grp-py-lg-36 grp-px-xs-16 grp-py-xs-16 grp-px-sm-24 grp-py-sm-24 ">
                <div class="grp-border grp-background-color-white grp-px-18 grp-py-16 grp-border-radius-10 grp-border-color-gray5">
               <h1 class="grp-h1 grp-text-color-blue7">06</h1>
              <h3 class="grp-h5 grp-font-weight-600 grp-mt-16">Digital Marketing
              </h3>
              <p class="grp-text-color-gray2 grp-font-weight-300">Mobile App, Website</p>
              <p class="grp-p grp-text-color-gray4">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    `,
      });
  }
}
