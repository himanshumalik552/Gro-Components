export default function(editor, opt = {}) {
    const c = opt;
    const bm = editor.BlockManager;
    const cats = c.blockCategories;
    const { blocks } = c;
    const { labels } = c;
    if (cats.about_us) {
      blocks.basetheme_aboutus_1 &&
        bm.add('basetheme_aboutus_1', {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/aboutUsBlock.png' />",
          category: labels.categoryaboutus,
          content: `
          <section class="grp-wrapper  grp-background-color-gray0 grp-py-100 grp-font-weight-400">
          <div class="grp-container-xxl grp-mx-auto">
           <div class="grp-row">
              <div class="grp-col-lg-6 grp-px-32 grp-col-md-12 grp-col-xs-12 grp-display-flex grp-justify-content-center grp-flex-column ">
                 <h3 class="grp-h3 grp-text-color-white grp-mt-8 grp-py-16">We Have Completed <span class="grp-text-color-blue2">150+
                 Projects</span> Succesfully </h3>
                 <p class="grp-p  grp-text-color-gray6 grp-py-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.

                 Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.</p>
                 <p class="grp-p  grp-text-color-gray6 grp-py-16">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                 <div class="grp-py-16">
                  <a href='#' class="grp-button-primary-blue2 grp-px-32 grp-font-weight-500 grp-py-12">Contact Us</a>
                 </div>
              </div>
              <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-px-32">
              <div class="grp-row grp-justify-content-center">
                <div class="grp-col-lg-5 grp-col-xs-12 grp-text-color-white">
                    <div class="grp-col-lg-12 grp-col-xs-12 grp-py-64 grp-mt-16 grp-background-color-gray2 grp-text-align-center">
                        <h3 class="grp-h3">250+</h3>
                        <p class="grp-p grp-text-color-gray3">Global Customer</p>
                    </div>
                    <div class="grp-col-lg-12 grp-col-xs-12 grp-py-64 grp-mt-16 grp-background-color-gray2 grp-text-align-center">
                        <h3 class="grp-h3">250+</h3>
                        <p class="grp-p grp-text-color-gray3">Global Customer</p>
                    </div>
                </div>
                <div class="grp-col-lg-5 grp-col-xs-12 grp-text-color-white grp-mx-md-16 grp-my-md-16">
                    <div class="grp-col-lg-12 grp-col-xs-12 grp-py-64 grp-mt-16 grp-background-color-gray2 grp-text-align-center">
                        <h3 class="grp-h3">250+</h3>
                        <p class="grp-p grp-text-color-gray3">Global Customer</p>
                    </div>
                    <div class="grp-col-lg-12 grp-col-xs-12 grp-py-64 grp-mt-16 grp-background-color-gray2 grp-text-align-center">
                        <h3 class="grp-h3">250+</h3>
                        <p class="grp-p grp-text-color-gray3">Global Customer</p>
                    </div>
                </div>
              </div>
              </div>
           </div>
          </div>
       </section>
        `,
        });
        blocks.basetheme_aboutus_2 &&
        bm.add('basetheme_aboutus_2', {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/aboutUsBlock.png' />",
          category: labels.categoryaboutus,
          content: `
          <section class="grp-wrapper grp-font-weight-400 grp-background-color-blue6">
          <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row grp-py-32 grp-flex-xs-column-reverse grp-flex-lg-row">
              <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-py-md-32 grp-py-xs-32 gr-py-lg-0 grp-my-0 grp-pr-lg-100 grp-px-xs-32 grp-display-flex grp-justify-content-center grp-flex-column">
                <h1 class="grp-h3 grp-text-color-black grp-mt-8 grp-py-16">Grow Your Business With
                  Our Agency
                </h1>
                <p class="grp-p grp-py-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id
                  ultrices augue. Sit rhoncus .
                </p>
                <div class="grp-py-16">
                  <h5 class="grp-h5 grp-text-color-gray0 grp-my-12">
                    <div class=" grp-py-2 grp-mr-16 grp-border grp-border-circle grp-background-color-blue7 grp-px-4 grp-display-inline-block ">
                      <i aria-hidden="true" class=" fa fa-check grp-text-color-white">
                      </i>
                    </div>Innovative website design
                  </h5>
                  <h5 class="grp-h5  grp-text-color-gray0 grp-my-12">
                    <div class=" grp-py-2 grp-mr-16 grp-border grp-border-circle grp-background-color-blue7 grp-px-4 grp-display-inline-block ">
                      <i aria-hidden="true" class=" fa fa-check grp-text-color-white">
                      </i>
                    </div>
                    UI/UX design with global trends
                  </h5>
                  <h5 class="grp-h5 grp-text-color-gray0 grp-my-12">
                    <div class=" grp-py-2 grp-mr-16 grp-border grp-border-circle grp-background-color-blue7 grp-px-4 grp-display-inline-block ">
                      <i aria-hidden="true" class=" fa fa-check grp-text-color-white">
                      </i>
                    </div>
                    Web and email hosting service
                  </h5>
                </div>
              </div>
              <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-text-align-center" id="ivygv">
                <img src="https://dummyimage.com/700x400/381038/e6e7f2.png" class="img-fluid grp-py-48 grp-px-16" id="icvbt"/>
              </div>
            </div>
          </div>
        </section>
        `,
        });
    }
  }
