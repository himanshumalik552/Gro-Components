export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.footer) {
    blocks.basetheme_footer_1 &&
      bm.add("basetheme_footer_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/footerBlock.png' />",
        category: labels.categoryfooter,
        content:
        `<section class="grp-wrapper grp-font-weight-400 grp-background-color-blue2 grp-px-32 grp-py-48">
            <div class="grp-container-xxl grp-mx-auto">
            <footer>
                <div class="grp-row grp-text-color-white">
                    <div class="grp-col-lg-10 grp-col-md-12">
                        <h3 class="grp-h3">Digiency</h3>
                        <div class="grp-row">
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Download Now </a>
                            </div>
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">License </a>
                            </div>
                        </div>
                        <div class="grp-row">
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Sign Up </a>
                            </div>
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Terms </a>
                            </div>
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Privacy </a>
                            </div>
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Contact Us </a>
                            </div>
                            <div class="grp-col-lg-2 grp-col-md-12 grp-py-16">
                                <a href="#" class="grp-p grp-text-color-white grp-link-hover-white ">Documents </a>
                            </div>
                        </div>
                        <div class="grp-pt-32">
                            <p class="grp-body1">© Copyright 2020 - Grorapid. All rights reserved</p>
                        </div>
                    </div>
                    <div class="grp-col-lg-2 grp-col-md-12">
                        <p class="grp-p">Get The App</p>
                        <div class="grp-py-16">
                            <img class="img-fluid" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/Footer-google.png">
                        </div>
                        <div class="grp-py-16">
                            <img class="img-fluid" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/Footer-apple.png">
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </section>
        `,
      });
      blocks.basetheme_footer_2 &&
      bm.add("basetheme_footer_2", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/footerBlock.png' />",
        category: labels.categoryfooter,
        content:
        `    <section class="grp-wrapper grp-font-weight-400  grp-px-32 grp-py-48">
        <div class="grp-container-xxl  grp-mx-auto">
          <footer>
            <div class="grp-row grp-justify-content-center  grp-align-items-center grp-text-color-white">
             <div class="grp-col-lg-4 grp-mt-xs-24 grp-col-xs-12 grp-text-align-center  ">
                <p class="grp-body1  grp-text-color-black">© Copyright 2020 - Grorapid. All rights reserved
                </p>
             </div>
             <div class="grp-col-lg-4 grp-col-xs-12 grp-mt-xs-24  ">
                <h3 class="grp-h3 grp-text-color-black grp-text-align-center"><span class="grp-text-color-blue7">Digi</span>ency</h3>
             </div>
             <div class="grp-col-lg-4 grp-pl-xs-32  grp-mt-xs-32 grp-col-xs-12 ">
                 <i aria-hidden="true" class="fa fa-phone grp-pl-xs-18 grp-px-xs-18 grp-px-sm-2 grp-px-md-4 grp-px-lg-16 grp-mx-10 grp-text-color-gray0 grp-transform-90 grp-fontSize-20" id="ipf9b">
            </i>
            <i aria-hidden="true" class="fa fa-phone grp-px-xs-18 grp-px-sm-2 grp-px-md-4 grp-px-lg-16 grp-mx-10 grp-text-color-gray0 grp-transform-90 grp-fontSize-20" id="ipf9b">
                </i>
                <i aria-hidden="true" class="fa fa-phone grp-px-xs-18 grp-px-sm-2 grp-px-md-4 grp-px-lg-16 grp-mx-10 grp-text-color-gray0 grp-transform-90 grp-fontSize-20" id="ipf9b">
                </i>
                <i aria-hidden="true" class="fa fa-phone grp-px-xs-18 grp-px-sm-2 grp-px-md-4 grp-px-lg-16 grp-mx-10  grp-text-color-gray0 grp-transform-90 grp-fontSize-20" id="ipf9b">
                </i>
             </div>
            </div>
          </footer>
        </div>
      </section>
        `,
      });
  }
}
