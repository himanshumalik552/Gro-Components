export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.pricings) {
    blocks.basetheme_pricings_1 &&
      bm.add("basetheme_pricings_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/pricingblock.png' />",
        category: labels.categorypricings,
        content:`<section class="grp-wrapper grp-py-48 grp-font-weight-400">
        <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row">
                <div class="grp-col-lg-8 grp-mx-auto grp-col-md-8 grp-text-align-center ">
                    <h2 class="grp-h3 grp-text-color-black grp-text-align-center">Pricing Plans</h2>
                    <p class="grp-text-align-center grp-p grp-text-color-gray2">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Diam dolor semper
                        ipsum
                        adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                        cursus. Mauris rutrum faucibus cursus egestas.
                    </p>
                    <div class="grp-display-flex grp-background-color-gray6 grp-py-4 grp-px-4 grp-width-fit-content grp-width-md-80 grp-mx-auto">
                        <div class="grp-border-color-white grp-background-color-white  grp-px-32 grp-py-12 grp-font-weight-500">Monthly billing</div>
                        <div class="grp-border-color-gray6 grp-background-color-gray6  grp-px-32 grp-py-12 grp-font-weight-500">Yearly billing</div>
                    </div>
                </div>
            </div>
            <div class="grp-row grp-py-32 grp-px-16">
                <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-py-16 grp-border-radius-4 grp-px-16">
                    <div class="grp-box-shadow-3 grp-border-radius-4 grp-py-32 grp-px-16 grp-border grp-border-color-gray6 ">
                        <h4 class="grp-h4 grp-text-color-black">Basic Plan</h4>
                        <p class="grp-p grp-text-color-gray3">All the basic for starting a new businesss</p>
                        <div class="grp-border-top grp-border-bottom grp-border-color-gray4 grp-py-20">
                            <h3 class="grp-h3 grp-text-color-primary">$19.9<span class="grp-p grp-font-weight-500">/month</span></h3>
                            <div class="grp-py-16 grp-display-flex">
                                <a href="#"
                                class="grp-button-primary-gray1 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12 grp-width-100">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="grp-py-16 grp-text-color-gray3">
                            <p class="grp-p grp-text-color-gray1 grp-font-weight-500 grp-py-8">What’s included</p>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">Unlimited contacts</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Emails</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Email list cleaning</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-py-16 grp-border-radius-4 grp-px-16">
                    <div class="grp-box-shadow-3 grp-border-radius-4 grp-py-32 grp-px-16 grp-border grp-border-color-gray6 ">
                        <h4 class="grp-h4 grp-text-color-black">Basic Plan</h4>
                        <p class="grp-p grp-text-color-gray3">All the basic for starting a new businesss</p>
                        <div class="grp-border-top grp-border-bottom grp-border-color-gray4 grp-py-20">
                            <h3 class="grp-h3 grp-text-color-primary">$19.9<span class="grp-p grp-font-weight-500">/month</span></h3>
                            <div class="grp-py-16 grp-display-flex">
                                <a href="#"
                                class="grp-button-primary-gray1 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12 grp-width-100">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="grp-py-16 grp-text-color-gray3">
                            <p class="grp-p grp-text-color-gray1 grp-font-weight-500 grp-py-8">What’s included</p>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">Unlimited contacts</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Emails</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Email list cleaning</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-py-16 grp-border-radius-4 grp-px-16">
                    <div class="grp-box-shadow-3 grp-border-radius-4 grp-py-32 grp-px-16 grp-border grp-border-color-gray6 ">
                        <h4 class="grp-h4 grp-text-color-black">Basic Plan</h4>
                        <p class="grp-p grp-text-color-gray3">All the basic for starting a new businesss</p>
                        <div class="grp-border-top grp-border-bottom grp-border-color-gray4 grp-py-20">
                            <h3 class="grp-h3 grp-text-color-primary">$19.9<span class="grp-p grp-font-weight-500">/month</span></h3>
                            <div class="grp-py-16 grp-display-flex">
                                <a href="#"
                                class="grp-button-primary-gray1 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12 grp-width-100">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="grp-py-16 grp-text-color-gray3">
                            <p class="grp-p grp-text-color-gray1 grp-font-weight-500 grp-py-8">What’s included</p>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">Unlimited contacts</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Emails</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Email list cleaning</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-py-16 grp-border-radius-4 grp-px-16">
                    <div class="grp-box-shadow-3 grp-border-radius-4 grp-py-32 grp-px-16 grp-border grp-border-color-gray6 ">
                        <h4 class="grp-h4 grp-text-color-black">Basic Plan</h4>
                        <p class="grp-p grp-text-color-gray3">All the basic for starting a new businesss</p>
                        <div class="grp-border-top grp-border-bottom grp-border-color-gray4 grp-py-20">
                            <h3 class="grp-h3 grp-text-color-primary">$19.9<span class="grp-p grp-font-weight-500">/month</span></h3>
                            <div class="grp-py-16 grp-display-flex">
                                <a href="#"
                                class="grp-button-primary-gray1 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12 grp-width-100">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="grp-py-16 grp-text-color-gray3">
                            <p class="grp-p grp-text-color-gray1 grp-font-weight-500 grp-py-8">What’s included</p>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">Unlimited contacts</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Emails</span>
                            </div>
                            <div class=" grp-py-8">
                                <i class="fa fa-check grp-text-color-lightGreen_2" aria-hidden="true"></i>
                                <span class="grp-pl-4">1000 Email list cleaning</span>
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
