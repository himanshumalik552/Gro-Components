export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.header) {
    blocks.basetheme_header_1 &&
      bm.add('basetheme_header_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Navigation_1.png' />",
        category: labels.categoryHeader,
        content: `
          <section class="grp-wrapper grp-font-weight-400">
            <div class="grp-container-xxl grp-mx-auto">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand grp-text-color-primary" href="/">
                        <h3 class="grp-h3"><span class="grp-text-color-blue2">Digi</span>ency</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon grp-text-color-gray1"><i class="fa fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse grp-py-lg-0 grp-py-xs-16" id="navbarTogglerDemo01">
                        <ul class="navbar-nav grp-display-flex grp-align-items-lg-center grp-align-items-xs-start grp-mx-auto grp-my-8">
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-blue2 grp-font-weight-500" href="#">Home</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">About us</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Products</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Services</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Blog</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Contact</a>
                            </li>
                        </ul>
                        <a class="grp-button-secondary-gray2 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12" href="#">Login</a>
                    </div>
                </nav>
            </div>
          </section>
      `,
      });
      blocks.basetheme_header_2 &&
      bm.add('basetheme_header_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Navigation_1.png' />",
        category: labels.categoryHeader,
        content: `
          <section class="grp-wrapper grp-font-weight-400">
            <div class="grp-container-xxl grp-mx-auto">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand grp-text-color-primary" href="/">
                        <h3 class="grp-h3"><span class="grp-text-color-blue2">Digi</span>ency</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon grp-text-color-gray1"><i class="fa fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse grp-py-lg-0 grp-py-xs-16" id="navbarTogglerDemo01">
                        <ul class="navbar-nav grp-display-flex grp-align-items-lg-center grp-align-items-xs-start grp-mx-auto grp-my-8">
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-blue2 grp-font-weight-500" href="#">Home</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">About us</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Products</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Services</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Blog</a>
                            </li>
                            <li class="nav-item grp-px-lg-8">
                                <a class="nav-link grp-text-color-gray1 grp-font-weight-500" href="#">Contact</a>
                            </li>
                        </ul>
                        <a class="grp-button-secondary-gray2 grp-border grp-font-weight-500 grp-border-color-gray2 grp-px-32 grp-py-12" href="#">Login</a>
                    </div>
                </nav>
            </div>
          </section>
      `,
      });
  }
}
