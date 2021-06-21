export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.testimonials) {
    blocks.basetheme_testimonials_1 &&
      bm.add("basetheme_testimonials_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/tetimonials.png' />",
        category: labels.categorytestimonials,
        content: `
        <section class="grp-wrapper grp-font-weight-400 grp-py-72" id="basetheme_testimonial_1">
            <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                <div class="grp-col-lg-4 grp-col-md-6 grp-col-xs-12 grp-text-align-center">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/healthNfitness/Rectangle_6.png" class="img-fluid">
                </div>
                <div class="grp-col-lg-8 grp-py-32 grp-col-md-6 grp-col-xs-12 grp-text-color-white grp-display-flex grp-justify-content-center grp-align-items-center">
                  <div class="grp-px-32 grp-background-color-blue2">
                    <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/%E2%80%9C.png" class="grp-width-px-100">
                    <p class="grp-p grp-font-weight-400 grp-fontSize-24 grp-py-16">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean.
                    </p>
                    <h4 class="grp-h4">Alex Johnson</h4>
                    <p class="grp-body1">CEO, ABC Corporation</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    `,
      });
      blocks.basetheme_testimonials_2 &&
      bm.add("basetheme_testimonials_2", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/tetimonials.png' />",
        category: labels.categorytestimonials,
        content: `
        <section class="grp-wrapper grp-py-32 grp-font-size-32  grp-background-color-blue7">
        <div class="grp-container-xxl  grp-mx-auto ">
            <div class="grp-row grp-justify-content-center grp-flex-column grp-align-items-center ">
                <div class="grp-text-align-center grp-row  grp-justify-content-center
                     grp-py-xs-10 grp-col-xs-12 grp-py-lg-100 ">

                    <div class="grp-col-lg-12">
                        <h1 class=" grp-h1  grp-font-family-Lexend grp-text-color-white">Ready to dive in?

                        </h1>
                    </div>
                    <div class="grp-col-12">
                        <h1 class=" grp-h1 grp-mb-12 grp-font-family-Lexend grp-text-color-white">
                            Start your free trial today.
                        </h1>
                    </div>
                    <div class="grp-row grp-justify-content-center grp-col-lg-12 grp-mt-32">
                        <div class="grp-col-lg-6 grp-col-sm-8 grp-col-xs-12 "> <p class="grp-font-family-Lexend grp-text-color-white grp-fontSize-32  ">
                            Lorem ipsum dolor sit amet consect adipisicing elit. cupiditate veritatis in accusamus
                            quisquam.
                        </p>
                        </div>

                    </div>
                    <div class="grp-col-12 grp-mt-24 grp-py-32 grp-font-size-36">
                        <a class="grp-button-secondary-blue7  grp-px-xs-16 grp-py-xs-10 grp-px-sm-24 grp-py-sm-16 grp-px-lg-56 grp-py-lg-24  grp-border-color-black "
                            href="#"><span class="grp-font-size-20">Sign up for free</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
      });
      blocks.basetheme_testimonials_3 &&
      bm.add("basetheme_testimonials_3", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/tetimonials.png' />",
        category: labels.categorytestimonials,
        content: `
        <section class="grp-wrapper grp-font-weight-400 ">
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row grp-py-32 grp-px-32  grp-flex-lg-row">
            <div class="grp-col-lg-10 grp-col-md-12 grp-col-xs-12 grp-py-md-32 grp-py-xs-32 gr-py-lg-0 grp-my-0 grp-pr-lg-100 grp-px-xs-32 grp-display-flex grp-justify-content-center grp-flex-column">
              <h1 class="grp-h3 grp-text-color-black grp-mt-8">Wants product news and updates?
              </h1>
              <h1 class="grp-h3 grp-text-color-black  grp-text-color-blue7"> Sign up to our newsletter.</h1>
              <div class="grp-row grp-pt-32 ">
              <div class="grp-form-group grp-col-xs-12  grp-width-lg-40  grp-width-md-50 grp-width-xs-90  ">
                <input type="email" name="contact_email" placeholder="Enter email" required class="grp-form-input-control-blue2 grp-font-weight-400"/>
              </div>
              <div class="grp-col-xs-12">
              <button role="button" type="submit" class="grp-button-primary-blue2 grp-border grp-border-color-blue2 grp-ml-lg-24  grp-ml-md-24  grp-px-40 grp-py-14 grp-font-weight-500">Notify me</button>
          </div>
        </div>
    </div>
        </div>
      </section>
    `,
      });
      blocks.basetheme_testimonials_4 &&
      bm.add("basetheme_testimonials_4", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/tetimonials.png' />",
        category: labels.categorytestimonials,
        content: `
        <section class="grp-wrapper grp-py-56 grp-background-color-blue2">
        <div class="grp-container-xl grp-mx-auto grp-px-16">
            <div class="row">
                <div class="col-md-3 grp-px-32"><img
                        src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/“.png" alt=""
                        class="img-fluid grp-object-fit-cover grp-width-60 grp-mx-auto" /></div>
                <div class="col-md-6 grp-px-40 grp-py-32 grp-display-flex grp-justify-content-center align-items-center">
                    <h2 class="grp-text-color-white grp-h3 grp-text-align-center">What Our Clients Are Saying About Us</h2>
                </div>
            </div>
            <div class="row grp-display-flex grp-justify-content-evenly">
                <div class="col-md-5 grp-py-32 grp-px-32">
                    <div class="grp-px-48 grp-py-48 grp-background-color-white grp-border-rounded">
                        <p class="grp-text-color-gray3 grp-text-align-start grp-mx-auto grp-fontSize-24 grp-fontWeight-500">
                            “All the features you need and none you don’t. The simplicity of the tool, helped us become
                            more productive and our customer satisfaction rates skyrocketed” </p>
                    </div>
                    <div class="grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center align-items-center">
                        <div class="grp-px-8 grp-py-8"><img
                                src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/Ellipse%2046.png"
                                alt="" class="img-fluid grp-object-fit-cover grp-border-circle grp-width-100" /></div>
                        <div class="grp-text-align-start"><strong class="grp-text-color-white grp-font-weight-500">Alex
                                Johnson</strong>
                            <p class="grp-text-color-white grp-body1">CEO, ABC Corporation</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 grp-py-32 grp-px-32">
                    <div class="grp-px-48 grp-py-48 grp-background-color-white grp-border-rounded">
                        <p class="grp-text-color-gray3 grp-text-align-start grp-mx-auto grp-fontSize-24 grp-fontWeight-500">
                            “All the features you need and none you don’t. The simplicity of the tool, helped us become
                            more productive and our customer satisfaction rates skyrocketed” </p>
                    </div>
                    <div class="grp-px-16 grp-py-16 grp-display-flex grp-justify-content-center align-items-center">
                        <div class="grp-px-8 grp-py-8"><img
                                src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/Ellipse%2046.png"
                                alt="" class="img-fluid grp-object-fit-cover grp-border-circle grp-width-100" /></div>
                        <div class="grp-text-align-start"><strong class="grp-text-color-white grp-font-weight-500">Alex
                                Johnson</strong>
                            <p class="grp-text-color-white grp-body1">CEO, ABC Corporation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 grp-py-16 grp-mx-auto grp-display-flex grp-justify-content-center">
                    <div class="grp-border grp-border-color-white grp-border-circle grp-px-4 grp-py-4 grp-mx-8"></div>
                    <div
                        class="grp-border grp-border-color-white grp-border-circle grp-px-4 grp-py-4 grp-background-color-white grp-mx-8">
                    </div>
                    <div class="grp-border grp-border-color-white grp-border-circle grp-px-4 grp-py-4 grp-mx-8"></div>
                </div>
            </div>
        </div>
    </section>
    `,
      });
  }
}
