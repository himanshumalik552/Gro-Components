export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.logo) {
    blocks.basetheme_logo_1 &&
      bm.add('basetheme_logo_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/bransBlock.png' />",
        category: labels.categorylogo,
        content: `
        <section class="grp-wrapper grp-py-48 grp-px-48 grp-background-color-blue6">
          <div class="grp-container-xxl grp-mx-auto ">
            <div class="grp-row grp-py-8">
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Airbnb%20Logo.png">
              </div>
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Hubspot%20Logo.png">
              </div>
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Google%20Logo.png">
              </div>
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Microsoft%20Logo.png">
              </div>
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/Walmart%20Logo.png">
              </div>
              <div class="grp-col-lg-2 grp-col-md-4 grp-col-xs-6 grp-display-flex grp-align-items-center grp-py-32 grp-px-32">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/FedEx%20Logo.png">
              </div>
            </div>
          </div>
     </section>
     `,
      });
  }
}
