export default function(editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const cats = c.blockCategories;
  const { blocks } = c;
  const { labels } = c;
  if (cats.banner) {
    blocks.basetheme_banner_1 &&
      bm.add('basetheme_banner_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/BannerBlock.png' />",
        category: labels.categoryBanner,
        content: `
        <section class="grp-wrapper grp-font-weight-400  grp-background-color-blue6" >
        <div class="grp-container-xxl grp-mx-auto">
         <div class="grp-row grp-flex-xs-column-reverse grp-flex-lg-row">
            <div class="grp-col-lg-7 grp-col-md-12 grp-col-xs-12 grp-py-md-32 grp-py-xs-32 gr-py-lg-0 grp-my-0 grp-pr-lg-100 grp-px-xs-32 grp-display-flex grp-justify-content-center grp-flex-column ">
               <h1 class="grp-h1 grp-text-color-black grp-mt-8 grp-py-16">Data to enrich your <span class="grp-text-color-blue2">online business</span></h1>
               <p class="grp-p  grp-text-color-gray3 grp-py-16">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
               <div class="grp-py-16">
                <a href='#' class="grp-button-primary-blue2 grp-font-weight-500 grp-px-32 grp-py-12 grp-border-color-blue2 grp-border">Get started</a>
                <a href='#' class=" grp-ml-16 grp-button-secondary-blue2 grp-font-weight-500 grp-border-color-blue2 grp-border grp-px-32 grp-py-12">Live view</a>
               </div>
            </div>
            <div class="grp-col-lg-5 grp-col-md-12 grp-col-xs-12 grp-text-align-center">
               <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/docusign-BbSBf5uv50A-unsplash%201%20(1).png" class="img-fluid">
            </div>
         </div>
        </div>
     </section>
      `,
      });
  }
}
