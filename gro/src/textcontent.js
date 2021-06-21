export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.textcontent) {
    blocks.profilepages_textcontent_1 &&
      bm.add('profilepages_textcontent_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Text+1.png' />",
        category: labels.categorytextcontent,
        content: `<section class="gr-wrapper gr-py-100">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
        <div class="row">
            <div class="col-md-6 gr-py-16">
                <p class="gr-font-medium gr-text-color-gray4">LABEL</p>
                <h2 class="gr-text-color-primary gr-h3">Contents Title</h2>
                <p class="gr-text-color-gray2 gr-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                <a type="submit" class="gr-button-primary gr-width-40 gr-text-align-center">See More</a>
            </div>
            <div class="col-md-6 gr-py-16">
                <p class="gr-text-color-gray2 gr-p">Proident id eu adipisicing est. Dolore mollit ut non dolore ea incididunt anim dolore sit labore exercitation in. Irure ullamco laboris mollit consequat veniam excepteur in duis excepteur minim amet voluptate dolore elit. Nisi dolore quis sunt sint dolore occaecat ad qui cupidatat nostrud. Minim in minim dolore elit incididunt velit officia.</p>
                <p class="gr-text-color-gray2 gr-p">Aute fugiat culpa culpa laborum Lorem eiusmod adipisicing. Exercitation sint mollit consequat dolore mollit dolore velit ut sint proident est duis et. Nisi dolore quis sunt sint dolore occaecat ad qui cupidatat nostrud. Minim in minim dolore elit incididunt velit officia.</p>
            </div>
        </div>
        </div>
     </section>`,
      });
    // blocks.profilepages_textcontent_2 &&
    //   bm.add("profilepages_textcontent_2", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Text+2.png' />",
    //     category: labels.categorytextcontent,
    //     content:
    //       '<section class="container-fluid profilepages_textcontent_2">Call to action 2</section>',
    //   });
    // blocks.profilepages_textcontent_3 &&
    //   bm.add("profilepages_textcontent_3", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Text+3.png' />",
    //     category: labels.categorytextcontent,
    //     content:
    //       '<section class="container-fluid profilepages_textcontent_3">Call to action 3</section>',
    //   });
    // blocks.profilepages_textcontent_4 &&
    //   bm.add("profilepages_textcontent_4", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Text+4.png' />",
    //     category: labels.categorytextcontent,
    //     content:
    //       '<section class="container-fluid profilepages_textcontent_4">Call to action 4</section>',
    //   });
  }
}
