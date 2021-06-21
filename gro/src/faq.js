export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.faq) {
    blocks.basetheme_faq_1 &&
      bm.add('basetheme_faq_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/faqblock.png' />",
        category: labels.categoryfaq,
        content: `
        <section class="grp-wrapper grp-font-weight-400 grp-px-32 grp-py-48 grp-background-color-blue2 grp-text-color-white" id="faq">
        <div class="grp-container-xxl grp-mx-auto">
        <div class="grp-row grp-py-8">
            <div class="grp-col-lg-10 grp-col-md-12 grp-py-8">
                <h3 class="grp-h3">Got Questions?</h3>
                <h3 class="grp-h3">We’ve Got Answers</h3>
            </div>
        </div>
        <div class="grp-row grp-border-top grp-border-color-blue7 grp-py-16"></div>
        <div class="grp-row grp-py-8">
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-lg-48">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-32">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-lg-48">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-32">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-lg-48">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-py-8 grp-pr-32">
                <h4 class="grp-h4-med">Competitive exchange rates</h4>
                <p class="grp-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
            </div>
        </div>
        </div>
    </section>
    `,
      });
      blocks.basetheme_faq_2 &&
      bm.add('basetheme_faq_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/faqblock.png' />",
        category: labels.categoryfaq,
        content: `
        <section class="grp-wrapper grp-font-weight-400 grp-py-32" id="izph">
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row ">
            <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-text-align-center grp-mx-auto">
              <h3 class="grp-h3">Frequently Asked Questions
              </h3>
              <h3 class="grp-h3">(FAQ)
            </h3>
              <p class="grp-p grp-text-color-gray3 grp-font-weight-500">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
          <div class="grp-row grp-justify-content-evenly">
            <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32" id="iin9x">

              <h5 class="grp-h5 grp-font-weight-600 grp-mt-16 grp-text-color-blue7">Competitive exchange rates
              </h5>
              <p class="grp-p grp-text-color-gray3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
            </div>

            <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32" id="iin9x">

                <h5 class="grp-h5 grp-font-weight-600 grp-mt-16 grp-text-color-blue7">Competitive exchange rates
                </h5>
                <p class="grp-p grp-text-color-gray3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
              </div>
              <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32" id="iin9x">

                <h5 class="grp-h5 grp-font-weight-600 grp-mt-16 grp-text-color-blue7">Competitive exchange rates
                </h5>
                <p class="grp-p grp-text-color-gray3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
              </div>
              <div class="grp-col-lg-5 grp-col-md-10 grp-col-xs-12 grp-px-32 grp-py-32" id="iin9x">

                <h5 class="grp-h5 grp-font-weight-600 grp-mt-16 grp-text-color-blue7">Competitive exchange rates
                </h5>
                <p class="grp-p grp-text-color-gray3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
              </div>
          </div>
        </div>
      </section>
    `,
      });
  }
}
