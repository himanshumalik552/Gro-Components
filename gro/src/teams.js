export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.teams) {
    blocks.basetheme_teams_1 &&
      bm.add("basetheme_teams_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/TeamBlock.png' />",
        category: labels.categoryteams,
        content:
          `<section class="grp-wrapper grp-font-weight-400 grp-background-color-gray0 grp-py-48 grp-text-color-white">
            <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-px-16 grp-py-16">
                <div class="grp-col-lg-12 grp-text-align-center grp-px-16 grp-py-16">
                  <h3 class="grp-h3">Our Amazing Team</h3>
                  <p class="grp-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.
                  </p>
                </div>
              </div>
              <div class="grp-row">
                <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-px-16 grp-py-16">
                  <div class=" grp-row grp-border-radius-4 grp-justify-content-between grp-align-items-center grp-px-16 grp-py-16 grp-background-color-gray2">
                    <div class="grp-col-lg-5 grp-col-xs-12 grp-text-align-center">
                      <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Rectangle%20638.png" class="img-fluid">
                    </div>
                    <div class="grp-col-lg-7 grp-col-xs-12 grp-px-32 grp-py-32">
                      <h4 class="grp-h4">Dustin Williamson</h4>
                      <p class="grp-p grp-text-color-blue2 grp-font-weight-500">Product Manager</p>
                      <p class="grp-p grp-pt-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-px-16 grp-py-16">
                  <div class=" grp-row grp-border-radius-4 grp-justify-content-between grp-align-items-center grp-px-16 grp-py-16 grp-background-color-gray2">
                    <div class="grp-col-lg-5 grp-col-xs-12 grp-text-align-center">
                      <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Rectangle%20640.png" class="img-fluid">
                    </div>
                    <div class="grp-col-lg-7 grp-col-xs-12 grp-px-32 grp-py-32">
                      <h4 class="grp-h4">Dustin Williamson</h4>
                      <p class="grp-p grp-text-color-blue2 grp-font-weight-500">Product Manager</p>
                      <p class="grp-p grp-pt-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-px-16 grp-py-16">
                  <div class=" grp-row grp-border-radius-4 grp-justify-content-between grp-align-items-center grp-px-16 grp-py-16 grp-background-color-gray2">
                    <div class="grp-col-lg-5 grp-col-xs-12 grp-text-align-center">
                      <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Rectangle%20643.png" class="img-fluid">
                    </div>
                    <div class="grp-col-lg-7 grp-col-xs-12 grp-px-32 grp-py-32">
                      <h4 class="grp-h4">Dustin Williamson</h4>
                      <p class="grp-p grp-text-color-blue2 grp-font-weight-500">Product Manager</p>
                      <p class="grp-p grp-pt-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-px-16 grp-py-16">
                  <div class=" grp-row grp-border-radius-4 grp-justify-content-between grp-align-items-center grp-px-16 grp-py-16 grp-background-color-gray2">
                    <div class="grp-col-lg-5 grp-col-xs-12 grp-text-align-center">
                      <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Rectangle%20644.png" class="img-fluid">
                    </div>
                    <div class="grp-col-lg-7 grp-col-xs-12 grp-px-32 grp-py-32">
                      <h4 class="grp-h4">Dustin Williamson</h4>
                      <p class="grp-p grp-text-color-blue2 grp-font-weight-500">Product Manager</p>
                      <p class="grp-p grp-pt-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>`,
      });
      blocks.basetheme_teams_2 &&
      bm.add("basetheme_teams_2", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/TeamBlock.png' />",
        category: labels.categoryteams,
        content:
          ` <section class="grp-wrapper grp-font-weight-400 grp-py-48 grp-text-color-white">
          <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row grp-px-16 grp-py-32">
              <div class="grp-col-lg-6 grp-col-md-9 grp-col-xs-12   grp-px-18 ">
                <h3 class="grp-h3 grp-text-color-black">Our Amazing Team
                </h3>
                <p class="grp-p  grp-text-color-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.
                </p>
              </div>
            </div>
            <div class="grp-row">
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-px-16 grp-py-16">
                <div class="grp-row  grp-justify-content-between grp-align-items-center ">
                  <div class="grp-col-lg-12 grp-col-xs-12 grp-text-align-center">
                    <img src="https://dummyimage.com/270x250/381038/e6e7f2.png" class="img-fluid"/>
                  </div>
                  <div class="grp-col-lg-12 grp-text-align-center grp-col-xs-12 grp-px-32 grp-py-24">
                    <h5 class="grp-h5 grp-text-color-blue2 grp-font-weight-700">Arlene Howard
                    </h5>
                    <p class="grp-p grp-text-color-gray3  grp-font-weight-500">Product Manager
                    </p>
                  </div>
                </div>
              </div>

              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-px-16 grp-py-16">
                <div class="grp-row  grp-justify-content-between grp-align-items-center ">
                  <div class="grp-col-lg-12 grp-col-xs-12 grp-text-align-center">
                    <img src="https://dummyimage.com/270x250/381038/e6e7f2.png" class="img-fluid"/>
                  </div>
                  <div class="grp-col-lg-12 grp-text-align-center grp-col-xs-12 grp-px-32 grp-py-24">
                    <h5 class="grp-h5 grp-text-color-blue2 grp-font-weight-700">Arlene Howard
                    </h5>
                    <p class="grp-p grp-text-color-gray3  grp-font-weight-500">Product Manager
                    </p>
                  </div>
                </div>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-px-16 grp-py-16">
                <div class="grp-row grp-flex-column  grp-justify-content-between grp-align-items-center ">
                  <div class="grp-col-lg-12 grp-col-xs-12 grp-text-align-center">
                    <img src="https://dummyimage.com/270x250/381038/e6e7f2.png" class="img-fluid"/>
                  </div>
                  <div class="grp-col-lg-12 grp-text-align-center grp-col-xs-12 grp-px-32 grp-py-24">
                    <h5 class="grp-h5 grp-text-color-blue2 grp-font-weight-700">Arlene Howard
                    </h5>
                     <p class="grp-p grp-text-color-gray3  grp-font-weight-500">Product Manager
                    </p>
                  </div>
                </div>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-px-16 grp-py-16">
                <div class="grp-row  grp-justify-content-between grp-align-items-center ">
                  <div class="grp-col-lg-12 grp-col-xs-12  grp-text-align-center">
                    <img src="https://dummyimage.com/270x250/381038/e6e7f2.png"  class="img-fluid "/>
                  </div>
                  <div class="grp-col-lg-12 grp-text-align-center grp-col-xs-12 grp-px-32 grp-py-24">
                    <h5 class="grp-h5 grp-text-color-blue2 grp-font-weight-700">Arlene Howard
                    </h5>
                    <p class="grp-p grp-text-color-gray3  grp-font-weight-500">Product Manager
                    </p>
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
