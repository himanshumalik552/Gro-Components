import grapesjs from 'grapesjs';
import loadclients from './clients';
import loadlogo from './logo';
import loadcta from './cta';
import loadfeatures from './features';
import loadfaq from './faq';
import loadfooter from './footer';
import loadintroduction from './introduction';
import loadleadform from './leadform';
import loadpricings from './pricings';
import loadteams from './teams';
import loadtestimonials from './testimonials';
import loadtextcontent from './textcontent';
import loadNavigation from './navbar';
import loadAboutus from './aboutus';
import loadContact from './contact';
import loadStats from './stats';

export default grapesjs.plugins.add('grorapid-base-theme', (editor, opts = {}) => {

  window.editor = editor;
  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];

  const default_blocks = {
    basetheme_header_1:true,
    basetheme_header_2:true,
    basetheme_header_3:true,
    basetheme_clients_1:true,
    basetheme_clients_2:true,
    basetheme_clients_3:true,
    basetheme_logo_1:true,
    basetheme_cta_1:true,
    basetheme_cta_2:true,
    basetheme_cta_3:true,
    basetheme_cta_4:true,
    basetheme_faq_1:true,
    basetheme_faq_2:true,
    basetheme_faq_3:true,
    basetheme_faq_4:true,
    basetheme_footer_1:true,
    basetheme_footer_2:true,
    basetheme_footer_3:true,
    basetheme_features_1:true,
    basetheme_features_2:true,
    basetheme_features_3:true,
    basetheme_features_4:true,
    basetheme_features_5:true,
    basetheme_banner_1:true,
    basetheme_banner_2:true,
    basetheme_banner_3:true,
    basetheme_banner_4:true,
    basetheme_banner_5:true,
    basetheme_banner_6:true,
    basetheme_banner_7:true,
    basetheme_banner_8:true,
    basetheme_form_1: true,
    basetheme_form_2: true,
    basetheme_form_3: true,
    basetheme_form_4: true,
    basetheme_form_5: true,
    basetheme_form_6: true,
    basetheme_pricings_1:true,
    basetheme_pricings_2:true,
    basetheme_pricings_3:true,
    basetheme_teams_1:true,
    basetheme_teams_2:true,
    basetheme_teams_3:true,
    basetheme_testimonials_1:true,
    basetheme_testimonials_2:true,
    basetheme_testimonials_3:true,
    basetheme_testimonials_4:true,
    basetheme_textcontent_1:true,
    basetheme_textcontent_2:true,
    basetheme_textcontent_3:true,
    basetheme_textcontent_4:true,
    basetheme_aboutus_1:true,
    basetheme_aboutus_2:true,
    basetheme_contact_1:true,
    basetheme_stats_1:true,
    basetheme_stats_2:true,

  };
  // labels
  const default_labels = {
    categoryHeader: 'Header',
    categoryclients: 'Clients',
    categorylogo: 'Logo',
    categorycta:'Call to Actions',
    categoryfeatures:'Feature',
    categoryfaq:'FAQ',
    categoryfooter:'Footer',
    categoryBanner:'Banner',
    categoryform: 'Form',
    categorypricings: 'Pricing',
    categoryteams:'Teams',
    categorytestimonials:'Teastimonials',
    categorytextcontent:'Text Content',
    categoryaboutus:'About Us',
    categorycontact:'Contact',
    categorystats:'Stats',
  };
  //  add block categories
  const default_categories = {
    'header':true,
    'clients':true,
    'logo':true,
    'cta':true,
    'features':true,
    'faq':true,
    'footer':true,
    'banner':true,
    'form': true,
    'pricings':true,
    'teams':true,
    'testimonials':true,
    'textcontent':true,
    'about_us':true,
    'contact':true,
    'stats':true,
  };

  let options = { ...{
    blocks: Object.assign(default_blocks, opts_blocks),
    labels: Object.assign(default_labels, opts_labels),
    blockCategories: Object.assign(default_categories, opts_categories),
    optionsStringSeparator: '::',
    gridDevices: true,
    gridDevicesPanel: false,
    classNavigation: 'nav',
    classTabPanes: 'tab-content',
    classTabPane: 'tab-pane',
    classTab: 'nav-item',
  },  ...opts };

  // Add components
  loadNavigation(editor,options);
  loadintroduction(editor,options);
  loadfeatures(editor,options);
  loadclients(editor,options);
  loadleadform(editor,options);
  loadcta(editor,options);
  loadtextcontent(editor,options);
  loadlogo(editor,options);
  loadpricings(editor,options);
  loadteams(editor,options);
  loadfaq(editor,options);
  loadtestimonials(editor,options);
  loadfooter(editor,options);
  loadAboutus(editor,options);
  loadContact(editor,options);
  loadStats(editor,options);
});
