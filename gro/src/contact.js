const FORM_KEYS = {
    name: 'contact_name',
    firstName: 'contact_first_name',
    lastName: 'contact_last_name',
    email: 'contact_email',
    phone: 'contact_phone',
    subject: 'subject',
    companyName: 'contact_company',
    jobTitle: 'contact_title',
    country: 'contact_country',
    message:'contact-message',
    AGREEMENT: 'agreement',
  };

export default function(editor, opt = {}) {
    const c = opt;
    const bm = editor.BlockManager;
    const cats = c.blockCategories;
    const { blocks } = c;
    const { labels } = c;
    if (cats.contact) {
      blocks.basetheme_contact_1 &&
        bm.add('basetheme_contact_1', {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/basetheme/formsBlocks.png' />",
          category: labels.categorycontact,
          content: `
          <section class="grp-wrapper grp-font-weight-400">
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-5 grp-px-32 grp-py-48 grp-background-color-blue6 grp-text-color-black grp-col-md-12 grp-display-flex grp-justify-content-center grp-flex-column">
              <h3 class="grp-h3">Get in touch</h3>
              <p>Find answers to some frequently asked questions about our products & services</p>
              <div class="">
                <div class=" grp-py-16 ">
                    <i class="fa fa-phone grp-text-color-blue2 grp-transform-90 grp-fontSize-20" aria-hidden="true"></i> <span class="grp-ml-16">+180-00024647</span>
                </div>
                <div class=" grp-py-16">
                    <i class="fa fa-phone grp-text-color-blue2 grp-transform-90 grp-fontSize-20" aria-hidden="true"></i> <span class="grp-ml-16">example@gmail.com</span>
                </div>
                <div class=" grp-py-16">
                    <i class="fa fa-phone grp-text-color-blue2 grp-transform-90 grp-fontSize-20" aria-hidden="true"></i> <span class="grp-ml-16">Delhi, India</span>
                </div>
              </div>
              <div class="grp-py-16">
                <p>Looking for carriers?<strong class=""><a href="#" class="grp-text-color-blue2"> View all job opening</a></strong></p>
              </div>
            </div>
            <div class="grp-col-lg-7 grp-col-md-12 grp-display-flex grp-justify-content-center grp-py-32">
              <form method="POST" class="grp-my-auto grp-mx-auto grp-width-lg-70 grp-width-xs-100 grp-px-32 grp-py-32">
                <div class="grp-form-group">
                    <input type="text" name="${
                      FORM_KEYS.name
                    }" class="grp-form-input-control-blue2 grp-font-weight-400" placeholder="Name" required>
                </div>
                <div class="grp-form-group">
                    <input type="email" name="${
                      FORM_KEYS.email
                    }" class="grp-form-input-control-blue2 grp-font-weight-400" placeholder="email" required>
                </div>
                <div class="grp-form-group">
                    <input type="text" name="${
                      FORM_KEYS.phone
                    }" class="grp-form-input-control-blue2 grp-font-weight-400" placeholder="Phone" required>
                </div>
                <div class="grp-form-group">
                    <textarea type="text" name="${
                      FORM_KEYS.message
                    }" class="grp-form-input-control-blue2 grp-font-weight-400"  placeholder="Phone Number" rows="5"></textarea>
                </div>
                <div class="grp-text-align-start">
                    <button type="submit" class="grp-button-primary-blue2 grp-border grp-border-color-blue2 grp-px-32 grp-font-weight-500 grp-py-12">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        `,
        });
    }
  }