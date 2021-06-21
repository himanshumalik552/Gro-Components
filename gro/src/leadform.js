const FORM_KEYS = {
  name: 'contact_name',
  firstName: 'contact_first_name',
  lastName: 'contact_last_name',
  email: 'contact_email',
  phone: 'contact_phone',
  companyName: 'contact_company',
  jobTitle: 'contact_title',
  country: 'contact_country',
  AGREEMENT: 'agreement',
};

export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.form) {
    blocks.basetheme_form_1 &&
      bm.add('basetheme_form_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/contactBlock.png' />",
        category: labels.categoryform,
        content: `
      <section class="grp-wrapper grp-font-weight-400">
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-6 grp-col-md-12 grp-text-align-center">
              <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/image%203.png">
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-display-flex grp-justify-content-center">
              <form method="POST" class="grp-my-auto grp-mx-auto grp-width-lg-70 grp-width-md-90 grp-width-sm-100 grp-width-xs-100 grp-px-32 grp-py-32">
                <h3 class="grp-h3">
                  Let’s Join Us by Filling This Form
                </h3>
                <p class="grp-p grp-text-color-gray3">
                  Lorem ipsum dolor sit amet consect adipisicing elit.
                </p>
                <div class="grp-form-group">
                    <input type="text" name="${
                      FORM_KEYS.name
                    }" class="grp-form-input-control-blue2 grp-font-weight-400"  placeholder="Name" required>
                </div>
                <div class="grp-form-group">
                    <input type="email" name="${
                      FORM_KEYS.email
                    }" class="grp-form-input-control-blue2 grp-font-weight-400" placeholder="Enter email" required>
                </div>
                <div class="grp-form-group">
                    <input type="tel" name="${
                      FORM_KEYS.phone
                    }" class="grp-form-input-control-blue2 grp-font-weight-400"  placeholder="Phone Number">
                </div>
              <button type="submit" class="grp-button-primary-blue2 grp-border grp-border-color-blue2 grp-width-100 grp-px-32 grp-py-12 grp-font-weight-500">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `,
      });
      blocks.basetheme_form_2 &&
      bm.add('basetheme_form_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/contactBlock.png' />",
        category: labels.categoryform,
        content: `
        <section class="grp-wrapper grp-font-weight-400">
        <div class="grp-container-xxl  grp-background-color-blue7 grp-mx-auto">
          <div class="grp-row">

            <div class="grp-col-lg-12 grp-col-md-12 grp-py-64 grp-border grp-border-radius-14  grp-display-flex grp-justify-content-center" id="if1d">
              <form method="POST" idf="66398067451531944" formstate="normal" class="grp-my-auto grp-border grp-border-radius-10 grp-background-color-white grp-mx-auto  grp-width-lg-40 grp-width-md-50 grp-width-sm-60 grp-width-xs-90 grp-px-32 grp-py-32">
                <h3 class="grp-h3 grp-text-align-center">
                  Let’s Join Us by Filling This Form
                </h3>
                <p class="grp-p grp-text-color-gray3">
                
                </p>
                <div class="grp-form-group">
                  <input type="text" name="contact_name" placeholder="Name" required class="grp-form-input-control-blue2 grp-font-weight-400"/>
                </div>
                <div class="grp-form-group">
                  <input type="email" name="email" placeholder="Email" required class="grp-form-input-control-blue2 grp-font-weight-400"/>
                </div>
                <div class="grp-form-group">
                  <input type="password" name="password" placeholder="Password" class="grp-form-input-control-blue2 grp-font-weight-400"/>
                </div>
                <button role="button" type="submit" class="grp-button-primary-blue2 grp-border grp-border-color-blue2 grp-width-100 grp-px-32 grp-py-12 grp-font-weight-500">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `,
      });
  }
}
