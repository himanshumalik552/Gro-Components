export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.clients) {
    blocks.profilepages_clients_1 &&
      bm.add('profilepages_clients_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Clients+1.png' />",
        category: labels.categoryclients,
        content: `<div class="gr-wrapper gr-py-72">
        <div class="gr-container-xl gr-mx-auto gr-px-32">
            <div class="row">
                <div class="col-md-4">
                    <div>
                        <h2 class="gr-h1-med gr-text-color-primary">86%</h2>
                        <h3 class="gr-text-color-secondary gr-h4">Increased Conversion</h3>
                        <p class="gr-text-color-gray2 gr-font-medium gr-pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <h2 class="gr-h1-med gr-text-color-primary">95%</h2>
                        <h3 class="gr-text-color-secondary gr-h4">Customer Satisfaction</h3>
                        <p class="gr-text-color-gray2 gr-font-medium gr-pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <h2 class="gr-h1-med gr-text-color-primary">78%</h2>
                        <h3 class="gr-text-color-secondary gr-h4">Sales Increased </h3>
                        <p class="gr-text-color-gray2 gr-font-medium gr-pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
      });
    blocks.profilepages_clients_2 &&
      bm.add('profilepages_clients_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Clients+2.png' />",
        category: labels.categoryclients,
        content: `<section class="gr-container-full gr-wrapper gr-pt-50  gr-pb-50 profilepages-clients-3">
            <div class='gr-container-xl gr-mx-auto d-flex justify-content-center flex-column gr-px-48'>
              <div class='gr-px-48 gr-py-48'>
                <h1 class='gr-text-color-primary text-center gr-px-2'>Our Partners</h1>
              </div>
              <div class='row d-flex justify-content-center align-items-center'>
                <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%205.png' />
                </div>
                <div class='align-items-center  gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%202.png' class='gr-width-16'/>
                </div>
                <div class='align-items-center  gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%203.png' class='gr-width-16'/>
                </div>
                <div class='align-items-center  gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%204.png' class='gr-width-16'/>
                </div>
                <div class='align-items-center  gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%202.png' class='gr-width-16'/>
                </div>
                <div class='align-items-center  gr-width-16 gr-py-24 gr-px-24'>
                  <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%205.png' class='gr-width-16'/>
                </div>
              </div>
            </div>
    </section>`,
      });
    blocks.profilepages_clients_3 &&
      bm.add('profilepages_clients_3', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Clients+3.png' />",
        category: labels.categoryclients,
        content: `<section class="gr-container-full gr-wrapper gr-pt-50  gr-pb-50 profilepages-clients-3">
        <div class='gr-container-xl gr-mx-auto d-flex justify-content-center flex-column gr-px-48 gr-pb-24'>
          <div class='gr-px-48 gr-py-48'>
            <h1 class='gr-text-color-primary text-center gr-px-8'>Our Partners</h1>
          </div>
          <div class='row d-flex justify-content-center align-items-center default-card-shadow-radius'>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%205.png' class='gr-width-16'/>
            </div>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%202.png'  class='gr-width-16'/>
            </div>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%203.png' class='gr-width-16'/>
            </div>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%204.png' class='gr-width-16'/>
            </div>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%202.png' class='gr-width-16'/>
            </div>
            <div class='align-items-center gr-width-16 gr-py-24 gr-px-24'>
              <img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/image%205.png' class='gr-width-16'/>
            </div>
          </div>
      </div>
    </section>`,
      });
  }
}
