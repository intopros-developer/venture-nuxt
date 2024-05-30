module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-our-leadership-video-section","2":"components/base-about-page","3":"components/base-contact-us","4":"components/base-divisions","5":"components/base-founders-bio","6":"components/base-google-ad","7":"components/base-our-team","8":"components/base-service-pages","9":"components/base-single-insights","10":"components/business-plan-google-ad-question-form","11":"components/career-banner-tab","12":"components/career-company-overview","13":"components/career-consultant","14":"components/career-join-event","15":"components/career-our-team","16":"components/career-professional-functional","17":"components/career-question","18":"components/common-as-seen-on","19":"components/common-banner-tab","20":"components/common-base-template","21":"components/common-brand-logo","22":"components/common-business-challenge","23":"components/common-business-plan-about","24":"components/common-category-slider","25":"components/common-client-words","26":"components/common-comments","27":"components/common-company-overview","28":"components/common-consultation","29":"components/common-contact-us","30":"components/common-custom-strapi-display","31":"components/common-distinct-qualities","32":"components/common-dynamic-questionnaire","33":"components/common-faq","34":"components/common-featured-services","35":"components/common-interested-service","36":"components/common-modal","37":"components/common-our-team","38":"components/common-our-work","39":"components/common-questionnaire-content","40":"components/common-questions-form","41":"components/common-readytotalk","42":"components/common-share","43":"components/common-tell-more-about-projects","44":"components/common-toggle-content","45":"components/common-venture-plans","46":"components/common-work-at-the-best-place","47":"components/consulting-our-portfolio","48":"components/contact-featured-services","49":"components/contact-private-placement","50":"components/contact-us-heroform","51":"components/contact-us-service-help","52":"components/google-ad-custom-software-development","53":"components/google-ad-heroform","54":"components/google-ad-los-heroform","55":"components/google-ad-project-info-submit","56":"components/home-about-client","57":"components/home-career","58":"components/home-hero-slider","59":"components/home-our-latest-insights","60":"components/home-private-placement","61":"components/home-sector-chart","62":"components/home-sector-excelled","63":"components/home-subscribe","64":"components/icons-aproach","65":"components/icons-arrow-right-thin","66":"components/icons-arrow-up","67":"components/icons-arrow-up-thin","68":"components/icons-attach","69":"components/icons-bachelor-candidate","70":"components/icons-bitcoin","71":"components/icons-brokerage","72":"components/icons-building","73":"components/icons-cannabis","74":"components/icons-centricity","75":"components/icons-clean-tech","76":"components/icons-close","77":"components/icons-close-search","78":"components/icons-close-time","79":"components/icons-consumer","80":"components/icons-domain","81":"components/icons-down-border","82":"components/icons-downarrow","83":"components/icons-eduction","84":"components/icons-facebook","85":"components/icons-finacial","86":"components/icons-google-icon","87":"components/icons-heart-care","88":"components/icons-icon1","89":"components/icons-icon2","90":"components/icons-icon3","91":"components/icons-icon4","92":"components/icons-icon5","93":"components/icons-icon6","94":"components/icons-icon7","95":"components/icons-instagram","96":"components/icons-instagram-color","97":"components/icons-linkedin","98":"components/icons-location","99":"components/icons-manufacturing","100":"components/icons-market","101":"components/icons-mba-candidate","102":"components/icons-md-candidate","103":"components/icons-minus","104":"components/icons-play","105":"components/icons-plus","106":"components/icons-professional","107":"components/icons-residential","108":"components/icons-save","109":"components/icons-selection-arrow","110":"components/icons-share-icon","111":"components/icons-star","112":"components/icons-team","113":"components/icons-tiktok","114":"components/icons-twitter","115":"components/icons-upload","116":"components/icons-white-logo","117":"components/icons-wifi","118":"components/icons-yelp-icon","119":"components/icons-youtube","120":"components/input-filter-checkbox","121":"components/our-sustainability-card-with-image","122":"components/our-sustainability-material-topics","123":"components/software-development-services","124":"components/software-google-ad-why-venture-plans","125":"components/technology-questions-form","126":"pages/_slug/_slug1/_slug2/index","127":"pages/_slug/_slug1/index","128":"pages/_slug/index","129":"pages/book-consult","130":"pages/careers/contact-form","131":"pages/careers/index","132":"pages/cities/index","133":"pages/founder","134":"pages/grant-service","135":"pages/index","136":"pages/industries/index","137":"pages/insights/_slug/index","138":"pages/insights/index","139":"pages/media","140":"pages/media-mentions/_slug/index","141":"pages/media-mentions/index","142":"pages/offices","143":"pages/privacy-policy","144":"pages/refund-policy","145":"pages/reviews","146":"pages/search","147":"pages/sitemap","148":"pages/startup-form","149":"pages/subscribe","150":"pages/technology/software-google-ad","151":"pages/terms-and-conditions","152":"pages/thank-you-for-booking"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Constants; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ nuxtOptions; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ options; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ localeMessages; });

// CONCATENATED MODULE: ./lang/en.js
/* harmony default export */ var en = ({
  reviews: 'Reviews',
  contact: 'Contact',
  subscribe: 'Subscribe',
  industries: 'Industries',
  advanced_manufacturing_and_services: 'Advanced Manufacturing and Services',
  agribusiness: 'Agribusiness',
  artificial_intelligence: 'Artificial Intelligence',
  automotive_and_mobility: 'Automotive and Mobility',
  aviation: 'Aviation',
  big_data_analytics: 'Big Data Analytics',
  chemicals: 'Chemicals',
  cloud_computing: 'Cloud Computing',
  cybersecurity: 'Cybersecurity',
  consumer_products: 'Consumer Products',
  financial_services: 'Financial Services',
  healthcare: 'Healthcare',
  infrastructure_construction_and_building_products: 'Infrastructure, Construction and Building Products',
  machinery_and_equipment: 'Machinery and Equipment',
  media_and_entertainment: 'Media and Entertainment',
  oil_and_gas: 'Oil and Gas',
  private_equity: 'Private Equity',
  retail: 'Retail',
  social_and_public_sectors: 'Social and Public Sectors',
  technology: 'Technology',
  telecommunications: 'Telecommunications',
  trade: 'Trade',
  transportation: 'Transportation',
  utilities_and_renewables: 'Utilities and Renewables',
  offices: 'Offices',
  united_states: 'United States',
  los_angeles: 'Los Angeles',
  new_york: 'New York',
  manhattan: 'Manhattan',
  chicago: 'Chicago',
  boston: 'Boston',
  miami: 'Miami',
  washington_dc: 'Washington DC',
  washington: 'Washington',
  canada: 'Canada',
  vancouver: 'Vancouver',
  toronto: 'Toronto',
  calgary: 'Calgary',
  montreal: 'Montreal',
  germany: 'Germany',
  berlin: 'Berlin',
  hamburg: 'Hamburg',
  munich: 'Munich',
  frankfurt: 'Frankfurt',
  stuttgart: 'Stuttgart',
  china: 'China',
  beijing: 'Beijing',
  shangai: 'Shangai',
  guangzhou: 'Guangzhou',
  shenzhen: 'Shenzhen',
  xian: "Xi'An",
  hong_kong: 'Hong Kong',
  britain_england: 'Britain England',
  london: 'London',
  manchester: 'Manchester',
  birmingham: 'Birmingham',
  liverpool: 'Liverpool',
  oxford: 'Oxford',
  italy: 'Italy',
  milan: 'Milan',
  rome: 'Rome',
  venice: 'Venice',
  spain: 'Spain',
  madrid: 'Madrid',
  barcelona: 'Barcelona',
  russia: 'Russia',
  moscow: 'Moscow',
  st_petersburg: 'St. Petersburg',
  turkey: 'Turkey',
  istanbul: 'Istanbul',
  south_korea: 'South Korea',
  seoul: 'Seoul',
  japan: 'Japan',
  tokyo: 'Tokyo',
  australia: 'Australia',
  language: 'Language',
  languages: 'Languages',
  global: 'Global',
  north_nd_south_america: 'North & South America',
  europe: 'Europe',
  asia_nd_australia: 'Asia & Australia',
  about: 'About',
  what_we_do: 'What We Do',
  our_team: 'Our Team',
  our_leadership: 'Our Leadership',
  client_results: 'Client Results',
  partnerships: 'Partnerships',
  awards_and_recognition: 'Awards and Recognition',
  social_impact: 'Social Impact',
  sustainability: 'Sustainability',
  diversity: 'Diversity',
  consulting: 'Consulting',
  management_consulting: 'Management Consulting',
  restructuring_operations: 'Restructuring Operations',
  digital_marketing: 'Digital Marketing',
  revenue_growth: 'Revenue Growth',
  agile_implementation: 'Agile Implementation',
  transformation_modification_nd_integration: 'Transformation Modification & Integration',
  customer_experience: 'Customer Experience',
  financial_advisory: 'Financial Advisory',
  strategy: 'Strategy',
  human_resources: 'Human Resources',
  cannabis_licensing_and_application_support: 'Cannabis Licensing and Application Support',
  new_start_up_technology: 'New Start-Up Technology',
  business_plans: 'Business Plans',
  Investor_Business_Plans: 'Investor Business Plans',
  immigration_business_plans: 'Immigration Business Plans',
  e_2_business_plans: 'E-2 Business Plans',
  l_1a_l_1b_business_plans: 'L-1A & L-1B Business Plans',
  e_b5_business_plans: 'E-B5 Business Plans',
  e_b1_business_plans: 'E-B1 Business Plans',
  sba_lender_business_plans: 'SBA Lender Business Plans',
  marketing_plan: 'Marketing Plan',
  restructuring_business_plan: 'Restructuring Business Plan',
  franchising_plan: 'Franchising Plan',
  cannabis_business_plan: 'Cannabis Business Plan',
  request_for_proposal: 'Request For Proposal',
  grant_business_plans: 'Grant Business Plans',
  investor_pitch_deck: 'Investor Pitch Deck',
  financial_proforma: 'Financial Proforma',
  prospectus: 'Prospectus',
  white_paper: 'White Paper',
  data_market_reports: 'DATA MARKET REPORTS',
  data_industry_reports: 'Data Industry Reports',
  feasibility_reports: 'Feasibility Reports',
  etf_nd_stock_market_reports: 'ETF & Stock Market Reports',
  covid_19_market_reports: 'COVID-19 Market Reports',
  financing: 'Financing',
  private_placements: 'Private Placements',
  regulation_d: 'Regulation D',
  b_relationship_investors: '506 (B) Relationship Investors',
  c_accredited_investors: '506 (C) Accredited Investors',
  private_placement_memorandum: 'Private Placement Memorandum',
  leveraged_buyout_lbo: 'Leveraged Buyout (LBO)',
  hedge_fund: 'Hedge Fund',
  venture_capital_fund: 'Venture Capital Fund',
  growth_capital: 'Growth Capital',
  real_estate: 'Real Estate',
  infrastructure: 'Infrastructure',
  funds_of_funds: 'Funds of Funds',
  mezzaanine_capital: 'Mezzaanine Capital',
  distressed_private_equity: 'Distressed Private Equity',
  secondary_fund: 'Secondary Fund',
  regulation_s_offshore_offering: 'Regulation S Offshore Offering',
  regulation_a_crowd_funding: 'Regulation A+ Crowd Funding',
  investment_portfolio_management: 'Investment Portfolio Management',
  deal_structuring: 'Deal Structuring',
  mergers_acquisitions: 'Mergers & Acquisitions',
  post_merger_integration: 'Post Merger Integration',
  diviestitures: 'Divestitures',
  due_diligence_certification: 'Due Diligence Certification',
  forensic_accounting: 'Forensic Accounting',
  securitization: 'Securitization',
  real_estate_investment_trust_fund: 'Real Estate Investment Trust Fund',
  agile: 'Agile',
  software_budgeting_and_financials: 'Software Budgeting and Financials',
  prototypes: 'Prototypes',
  backlog_feature_implementation: 'Backlog Feature Implementation',
  functional_specification: 'Functional Specification',
  custom_design_and_build: 'Custom Design and Build',
  data_analytics_implementation: 'Data Analytics Implementation',
  legal_advisory: 'Legal Advisory',
  intellectual_property: 'Intellectual Property',
  utility_patent: 'Utility Patent',
  design_patent: 'Design Patent',
  plant_patent: 'Plant Patent',
  provisional_and_non_provisional: 'Provisional and Non Provisional',
  trademark: 'Trademark',
  copyright: 'Copyright',
  convertible_note_s: 'Convertible Note(s)',
  chapter_bankruptcy: 'Chapter 11 Bankruptcy',
  commodity_nd_futures_contract: 'Commodity & Futures Contract',
  initial_public_offering: 'Initial Public Offering',
  commodity_nd_futures: 'Commodity & Futures',
  securities_arbitration: 'Securities Arbitration',
  offering_memorandum_canada: 'Offering Memorandum (Canada)',
  legal_entity_structuring: 'Legal Entity Structuring',
  legal: 'Legal',
  careers: 'Careers',
  explore_roles: 'Explore Roles ',
  associate_consultant_intern: 'Associate Consultant Intern',
  associate_consultant: 'Associate Consultant',
  summer_associate: 'Summer Associate',
  consultant: 'Consultant',
  advanced_degree_holders: 'Advanced Degree Holders',
  working_professionals: 'Working Professionals',
  analytics_and_customer_insights: 'Analytics and Customer Insights',
  digital_nd_innovation: 'Digital & Innovation',
  business_services: 'Business Services',
  meet_us: 'Meet Us',
  at_an_event: 'At an Event',
  our_people: 'Our People',
  prepare_for_an_interview: 'Prepare for an Interview',
  case_interview: 'Case Interview',
  experience_interview: 'Experience Interview',
  other_interview_formats: 'Other Interview Formats',
  insights: 'Insights',
  schedule_a_consultation: 'Schedule a Consultation',
  phone_1_800_000_0000: '1-800-000-0000',
  popular_searches: 'Popular Searches',
  venture_experts: 'venture Experts',
  product_engineering: 'Product Engineering',
  previous_searches: 'Previous Searches',
  recently_visited_pages: 'Recently Visited Pages',
  grants: 'Grants',
  rfp: 'RFP',
  investor_business_plan: 'Investor Business Plan',
  back: 'Back',
  automation: 'Automation',
  market_reports: 'Market Reports',
  media_center: 'Media Center',
  vector: 'Vector',
  consulting_services: 'Consulting Services',
  faq: 'FAQ',
  custom_application_development: 'Custom Application Development',
  custom_software_development: 'Custom Software Development',
  real_estate_investment_trust_reit: 'Real Estate Investment Trust (REIT)',
  trading: 'Trading',
  regulation_s_offshore_offerings: 'Regulation S (Offshore Offerings)',
  mezzanine_capital: 'Mezzanine Capital',
  real_estate_fund: 'Real Estate Fund',
  divestitures: 'Divestitures',
  regulation_d_506_c_relationship_investors: 'Regulation D 506 (C) Accredited Investors',
  regulation_d_506_b_relationship_investors: 'Regulation D 506 (B) Relationship Investors',
  finance: 'Financial',
  investor_business_plans: 'Investor Business Plan',
  l_1a_l_1b_business_plan_application_support: 'L-1A & L-1B Business Plan & Application Support',
  e_b5_business_plan_application_support: 'E-B5 Business Plan & Application Support',
  e_b1_business_plan_application_support: 'E-B1 Business Plan & Application Support',
  e_2_business_plan_application_support: 'E-2 Business Plan & Application Support',
  covid_19_pandemic_market_report: 'COVID-19 Pandemic Market Report',
  etf_stock_market_reports: 'ETF & Stock Market Reports',
  industry_data_reports: 'Industry Data Reports',
  us: 'Us',
  read_more: 'Read more',
  read_less: 'Read less',
  with_you_in_your_greatest_business_challenges: 'WITH YOU IN YOUR GREATEST BUSINESS CHALLENGES',
  book_a_consultation: 'BOOK A CONSULTATION',
  diverse: 'Diverse',
  environment: 'Environment',
  drive_for: 'Drive for',
  results: 'Results',
  why: 'Why',
  work_at_the_span_br_best_place_span: 'WORK AT THE <span><br/>BEST PLACE</span>',
  ready_to_talk_que: 'Ready to talk?',
  ready_to_talk: 'Ready to talk',
  i_want_to_talk_to_your_experts_in: 'I want to talk to your experts in:',
  experienced_in_capital_markets_a_client_first_culture_and_potent_track_record: 'Experienced in capital markets, a client-first culture, and potent track-record',
  submit: 'Submit',
  span_congratulations_span_your_form_has_been_submitted: '<span>Congratulations,</span> your form has been submitted.',
  your_form_has_been_submitted: 'your form has been submitted.',
  congratulations: 'Congratulations',
  as_seen_on: 'AS SEEN ON',
  our_clients: 'Our Client',
  words: 'Words',
  our_company_span_overview_span: 'OUR COMPANY <span>OVERVIEW</span>',
  our_portfolio: 'OUR <span>PORTFOLIO</span>',
  overview: 'Overview',
  distinct: 'Distinct',
  qualities: 'qualities',
  faqs: 'FAQs',
  do_you_have_any_questions_about_our_career_opportunities: 'Do you have any questions about-us our career opportunities?',
  buy_service: 'BUY SERVICE',
  our: 'OUR',
  team: 'TEAM',
  samples_of: 'SAMPLES OF',
  our_work: 'OUR WORK',
  download_pdf: 'Download (PDF)',
  share_on: 'Share on',
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'Linkedin',
  twitter: 'Twitter',
  venture_plans: 'VENTURE PLANS?',
  thanks_for_your_interest: 'THANKS FOR YOUR INTEREST,',
  select_the_service_you_need_help_with: 'SELECT THE SERVICE YOU NEED HELP WITH',
  san_francisco: 'San Francisco',
  seattle: 'Seattle',
  austin: 'Austin',
  thanks_for_visiting: 'Thanks for visiting.',
  how_can_we_help: 'How can we Help?',
  need_assistance: 'Need Assistance?',
  visit_our_los_angeles_page: 'Visit Our Los Angeles Page',
  your_trusted_partner_in_navigating_through_uncertain_times_let_s_accelerate_your_growth: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
  answer_five_questions_so_we_can_better_help_you_with_your_business_objectives: 'Answer five questions so we can better help you with your Business objectives',
  fill_out_our_contact_form_so_one_of_our_accredited_advisors_can_get_in_touch_with_you_for_your_free_consultation: 'Fill out our contact form so one of our accredited advisors can get in touch with you for your free consultation',
  what_phase_is_your_business_in: 'What phase is your business in?',
  question: 'Question',
  what_was_company_gross_revenue_last_year: 'What was company gross revenue last year?',
  what_was_your_company_gross_revenue_last_year: 'What was your company gross revenue last year?',
  how_much_working_capital_do_you_personally_have_to_invest_in_your_business: 'How much working capital do you personally have to invest in your Business?',
  what_is_your_industry: 'What is your industry?',
  what_service_best_suits_your_needs: 'What service best suits your needs?',
  see_all: 'See All',
  what_is_your_full_name_email_and_phone_number: 'What is your full name, email, and phone number?',
  contact_information: 'Contact Information',
  full_name: 'Full Name',
  phone_number: 'Phone Number',
  your_email_address: 'Your Email Address',
  email: 'Email',
  next: 'Next',
  are_you_ready_to_buy_this_service: 'Are you ready to buy this service?',
  yes_go_to_checkout: 'Yes Go to Checkout',
  book_consultation: 'Book Consultation',
  congratulations_on_purchasing_your_service_now_book_your_consultation_with_one_of_our_business_analysts: 'Congratulations on purchasing your service now book your consultation with one of our business analysts.',
  schedule_call: 'Schedule call',
  congratulations_you_have_br_span_successfully_span_booked_your_consultation: 'Congratulations, you have <br/><span>successfully</span> booked your consultation',
  home_question_success_paragraph_1: 'Remember to invite all appropriate parties, and decision makers to your consultation. If your ready to buy your service, you can click the checkout link below. If you have any questions you can email us at info@ventureplans.us. Thank You',
  we_are_sorry_all_of_our_clients_require_br_span_working_capital_span_in_order_to_qualify: 'We are sorry all of our clients require <br/><span>working capital</span> in order to qualify',
  home_question_success_paragraph_2: 'Starting your business is hard, and it requires long term commitment from founders. We recommend reaching out to grants, friends and family, or the SBA administration for start up capital and come back to us when your ready. We wish you all the best in your journey!',
  go_to_checkout: 'Go to Checkout',
  back_to_home: 'Back To Home',
  start_up: 'Start-up',
  seeking_exit: 'Seeking Exit',
  in_revenue: 'In-Revenue',
  acquisition: 'Acquisition',
  m_nd_a: 'M&A',
  ipo_nd_ico: 'IPO & ICO',
  dollar__5000_50000: '$5,000-$50,000',
  dollar__500000_150000: '$50,0000-$150,000',
  dollar__100000_1000000: '$100,000- $1,000,000',
  dollar__1000000_5000000: '$1,000,000- $5,000,000',
  dollar__5000000_100000000: '$5,000,000- $100,000,000',
  dollar__150000_350000: '$150,000-$350,000',
  dollar__350000_1000000: '$350,000-$1,000,000',
  dollar__1000000_10000000: '$1,000,000-$10,000,000',
  dollar__10000000_100000000: '$10,000,000-$100,000,000 +',
  no_capital: 'No Capital',
  fintechnology: 'Fintechnology',
  fintech: 'Fintech',
  health_care: 'Health Care',
  cannabis: 'Cannabis',
  consumer_goods_nd_manufacturing: 'Consumer Goods & Manufacturing',
  automobile_manufacturing: 'automobile Manufacturing',
  clean_tech: 'Clean Tech',
  education_nd_e_learning: 'Education & E-Learning',
  robotics: 'Robotics',
  advanced_consumer_goods_nd_manufacturing: 'Advanced Consumer Goods & Manufacturing',
  quantum_information_science: 'Quantum Information Science',
  _5g_advanced_wireless_technology: '5-G Advanced Wireless Technology',
  biotechnology: 'biotechnology',
  pharmaceutical: 'Pharmaceutical',
  non_profit_organization: 'Non-Profit Organization',
  virtual_reality: 'Virtual Reality',
  oil_nd_gas: 'Oil & Gas',
  electric_automobile_manufacturing: 'Electric Automobile Manufacturing ',
  _3d_printing: '3-D Printing',
  gaming: 'Gaming',
  biometrics: 'Biometrics',
  cultivation: 'Cultivation',
  block_chain: 'Block Chain',
  aerospace_nd_defense: 'Aerospace & Defense',
  law_financial_consulting_nd_accounting: 'Law, Financial Consulting & Accounting',
  consumer_product_nd_services: 'Consumer Product & Services',
  software_apps_nd_telecommunications: 'Software, Apps, & telecommunications',
  medical_technology_health_nd_fitness: 'Medical Technology, Health & Fitness',
  other: 'Other',
  invest: 'Invest',
  software_and_apps: 'Software and Apps',
  market_data_reports: 'Market Data Reports',
  market_data_plans: 'Market Data Plans',
  investor_relations: 'Investor Relations',
  digital_transformation: 'Digital Transformation',
  marketing: 'Marketing',
  reg_a_crowd_funding: 'Reg A+ Crowd Funding',
  reg_a: 'Reg A+',
  immigration: 'Immigration',
  common_company_overview_paragraph: 'Venture Plans is a global management consulting firm with a sophisticated team of diverse industry-specific consultants with deep expertise in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook.\n\nVenture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.\n\nWith wider industry experience, Venture Plans has helped a wide array of clients thrive in hospitality, real estate, SaaS & technology, professional services, health care, Healthtech, Cybersecurity and many more.',
  featured_span_services_span: 'Featured <span>services</span>',
  what_our_clients_say_span_about_us_span: 'WHAT OUR CLIENTS SAY <span>ABOUT US</span>',
  search: 'Search',
  let_venture_plans_be_your_trusted_partner: 'Let Venture Plans be your trusted partner',
  we_ve_raised_more_than_m_for_our_clients: "We've raised more than $650M for our clients",
  as_featured_in: 'AS FEATURED IN',
  sectors_we_br_excelled_span_in_span: 'SECTORS WE </br>EXCELLED <span>IN</span>',
  client_expertise_in_150_industries_find_out_how_we_can_help_you_adapt_to_a_changing_economy: 'Client expertise in 150+ Industries, find out how we can help you adapt to a changing economy',
  commercial_real_estate: 'Commercial Real Estate',
  software_sl_apps_nd_telecommunications: 'Software/Apps & Telecommunications',
  law_consulting_nd_accounting_brokerage_insurance: 'Law, Consulting & Accounting Brokerage, Insurance',
  medical_technology_biotech_healthcare_nd_fitness: 'Medical Technology, Biotech, Healthcare & Fitness',
  automation_artificial_intelligence: 'Automation, Artificial Intelligence',
  consumer_products_nd_services: 'Consumer Products & Services',
  financial_services_fin_tech_krypto_bitcoin: 'Financial Services, Fin Tech Krypto, Bitcoin',
  residential_real_estate_development: 'Residential Real Estate, Development',
  manufacturing_aerospace_nd_defense: 'Manufacturing, Aerospace & Defense',
  blockchain_nd_digital_transformation: 'Blockchain & Digital Transformation',
  industry_consultants: 'Industry Consultants',
  raised: 'Raised',
  business_plans_written: 'Business Plans Written',
  years_of_experience: 'Years of Experience',
  our_latest_span_insights_span: 'OUR LATEST <span>INSIGHTS</span>',
  see_all_insights: 'SEE ALL INSIGHTS',
  merges_nd_acquisitions: 'Merges & Acquisitions',
  media: 'Media',
  advanced_manufacturing_nd_services: 'Advanced Manufacturing',
  aerospace_defense_nd_government_services: 'Aerospace',
  automotive_nd_mobility: 'Automotive & Mobility',
  air_transportation_nd_services: 'Air Transportation & Service',
  digitalization_in_cpg: 'Digitalization in CPG',
  energy_nd_natural_resources: 'Energy & Natural Resources',
  banking: 'Banking',
  digital_assets_and_blockchain: 'Digital Assets and Blockchain',
  insurance: 'Insurance',
  market_infrastructure: 'Market Infrastructure',
  payments: 'Payments',
  risk_finance_and_regulation: 'Risk, Finance and Regulation',
  wealth_nd_asset_management: 'Wealth & Asset Management',
  forest_products_paper_nd_packaging: 'Forest Products, Paper',
  healthcare_payers: 'Healthcare Payers',
  healthcare_providers_and_services: 'Healthcare Providers a',
  medical_technology: 'Medical Technology',
  pharmaceuticals: 'Pharmaceuticals',
  rare_diseases: 'Rare Diseases',
  infrastructure_construction_nd_building_products: 'Infrastructure, Construction & Building Products',
  machinery_nd_equipment: 'Machinery & Equipment',
  media_nd_entertainment: 'Media & Entertainment',
  metals: 'Metals',
  mining: 'Mining',
  grocery: 'Grocery',
  luxury: 'Luxury',
  restaurants: 'Restaurants',
  social_nd_public_sector: 'Social & Public Sector',
  economic_development: 'Economic Development',
  higher_education: 'Higher Education',
  primary_nd_secondary_education: 'Primary & Secondary Education',
  public_sector_nd_government: 'Public Sector & Government',
  cloud: 'Cloud',
  consumer_technology: 'Consumer Technology',
  hardware: 'Hardware',
  internet_of_things: 'Internet of Things',
  it_services: 'IT Services',
  semiconductors: 'Semiconductors',
  software: 'Software',
  lumi: 'Lumi℠',
  freight_nd_logistics: 'Freight & Logistics',
  public_transit: 'Public Transit',
  utilities_renewables: 'Utilities & Renewables',
  _506_b_relationship_investors: '506 (B) Relationship Investors',
  _506_c_accredited_investors: '506 (C) Accredited Investors',
  mergers_nd_acquisitions: 'Mergers & Acquisitions',
  chapter_11_bankruptcy: 'Chapter 11 Bankruptcy',
  advanced: 'Advanced',
  artificial: 'Artificial',
  automotive: 'Automotive',
  big_data: 'Big Data',
  consumer: 'Consumer',
  financial: 'Financial',
  atlanta: 'Atlanta',
  bogota: 'Bogota',
  buenos_aires: 'Buenos Aires',
  dallas: 'Dallas',
  denver: 'Denver',
  houston: 'Houston',
  mexico_city: 'Mexico City',
  minneapolis: 'Minneapolis',
  monterrey: 'Monterrey',
  rio_de_janeiro: 'Rio de Janeiro',
  santiago: 'Santiago',
  sao_paulo: 'São Paulo',
  silicon_valley: 'Silicon Valley',
  amsterdam: 'Amsterdam',
  athens: 'Athens',
  brussels: 'Brussels',
  copenhagen: 'Copenhagen',
  doha: 'Doha',
  dubai: 'Dubai',
  dusseldorf: 'Dusseldorf',
  helsinki: 'Helsinki',
  johannesburg: 'Johannesburg',
  kyiv: 'Kyiv',
  lagos: 'Lagos',
  lisbon: 'Lisbon',
  oslo: 'Oslo',
  paris: 'Paris',
  riyadh: 'Riyadh',
  stockholm: 'Stockholm',
  vienna: 'Vienna',
  warsaw: 'Warsaw',
  zurich: 'Zurich',
  bangkok: 'Bangkok',
  bengaluru: 'Bengaluru',
  jakarta: 'Jakarta',
  kuala_lumpur: 'Kuala Lumpur',
  manila: 'Manila',
  melbourne: 'Melbourne',
  mumbai: 'Mumbai',
  new_delhi: 'New Delhi',
  perth: 'Perth',
  shanghai: 'Shanghai',
  singapore: 'Singapore',
  sydney: 'Sydney',
  thanks_for_visiting_span_more_details_on_our_services_below_span: 'Thanks for visiting <span>more details on our services below</span>',
  business_consultant: 'Business Consultant',
  social_media_specialist_content_writer: 'Social Media Specialist/Content Writer',
  ux_ui_designer: 'UX/UI Designer',
  web_developer: 'Web Developer',
  administrative_assistant: 'Administrative Assistant',
  sales_representative: 'Sales Representative',
  about_you: 'About you',
  search_available_positions: 'Search Available Positions',
  upload_cover_letter: 'Upload Cover Letter',
  upload_file: 'Upload file',
  upload_diploma: 'Upload Diploma',
  upload_resume: 'Upload Resume',
  connect_your_linkedin: 'Connect Your LinkedIn',
  select_school: 'Select School',
  do_you_have_at_least_years_of_work_experience: 'Do you have at least 5 years of work experience?',
  geographic_flexibility: 'Geographic Flexibility',
  are_you_interested_in_a_internship_program: 'Are you interested in a internship program?',
  harvard: 'Harvard',
  mit: 'MIT',
  yale: 'Yale',
  princeton: 'Princeton',
  berkeley: 'Berkeley',
  columbia: 'Columbia',
  stanford: 'Stanford',
  ucla: 'UCLA',
  usc: 'USC',
  georgia_tech: 'Georgia Tech',
  johns_hopkins_university: 'Johns Hopkins University',
  new_york_university: 'New York University',
  yes: 'Yes',
  no: 'No',
  congratulations_you_have_span_successfully_span_booked_your_interview: 'Congratulations, you have <span>successfully</span> booked your Interview',
  book_interview_in_career_contact_form_paragraph_1: 'Please remember to view our <a href="{link}" target="{target}">interview prep page and FAQ’s</a>. If you have questions email us at careers@ventureplans.us. We are looking forward to speaking with you soon. ',
  bachelor_candidate: 'Bachelor Candidate',
  md_candidate: 'MD Candidate',
  professional: 'Professional',
  mba_candidate: 'MBA Candidate',
  find_roles: 'Find Roles',
  careers_at_venture_plans: 'Careers at Venture Plans',
  professional_nd_functional_positions: 'Professional & Functional Positions',
  our_founder: 'Our Founder',
  fill_out_our_contact_form_so_one_of_our_human_resource_representatives_can_get_in_touch_with_you_for_an_interview: 'Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.',
  answer_our_questions_so_we_can_better_help_you_with_your_job_search: 'Answer our questions so we can better help you with your job search',
  what_is_your_current_position: 'What is your current position?',
  do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations: 'Do you have experience in evaluating and fixing challenges that arise in organizations?',
  have_you_worked_on_multiple_projects_or_single_projects_at_a_time: 'Have you worked on multiple projects, or single projects at a time?',
  have_you_lead_a_team_before: 'Have you lead a team before?',
  what_position_are_you_interested_in: 'What position are you interested in?',
  congratulations_you_have_span_successfully_span_br_answered_all_the_questions: 'Congratulations, you have <span>successfully</span></br> answered all the questions!',
  one_of_our_human_resources_representatives_will_be_in_touch_with_you_soon_thank_you: 'One of our Human Resources representatives will be in touch with you soon. Thank You.',
  masters_non_mba: 'Masters (Non MBA)',
  jd_candidate: 'JD Candidate',
  doctoral_phd: 'Doctoral (PHD)',
  one_project: 'One Project',
  two_three_projects: 'Two-Three Projects',
  five_or_more: 'Five or More',
  product_developer: 'Product Developer',
  registered_rep: 'Registered Rep',
  product_designer: 'Product Designer',
  supply_chain_advisor: 'Supply Chain Advisor',
  ai_consultant: 'Ai Consultant',
  business_analyst: 'Business Analyst',
  marketing_nd_sales: 'Marketing & Sales',
  tech_implementation: 'Tech Implementation',
  public_relations: 'Public Relations',
  product_engineer: 'Product Engineer',
  content_manager: 'Content Manager',
  recruiter: 'Recruiter',
  internship: 'Internship',
  research_analyst: 'Research Analyst',
  data_engineer: 'Data Engineer',
  robotics_engineer: 'Robotics Engineer',
  careers_with_span_venture_plans_span: 'Careers with <span>Venture Plans</span>',
  book_your_interview: 'Book Your Interview',
  a_message_from_our_span_founder_span: 'A Message from our <span>Founder</span>',
  subscribe_here_to_br_join_our_events: 'Subscribe Here To <br /> Join Our Events',
  span_congratulations_span_your_email_has_been_subscribe: '<span>Congratulations,</span> your email has been subscribe.',
  get_it_free: 'GET IT FREE',
  enter_your_email_to_join_events: 'Enter your email to join events',
  enter_your_email_to_join: 'Enter your email to join',
  our_professional_span_functional_positions_span: 'Our Professional & <span>Functional Positions</span>',
  first_name: 'First Name',
  last_name: 'Last name',
  company: 'Company',
  project_description: 'Project Description',
  send_nda: 'Send NDA',
  our_span_leadership_span: 'Our <span>Leadership</span>',
  our_span_team_span: 'Our <span>Team</span>',
  load_more_consultants: 'LOAD MORE CONSULTANTS',
  join_our_team_today: 'Join Our Team Today',
  work_next_to_some_of_the_most_brilliant_and_talented_minds_in_the_world: 'Work next to some of the most brilliant and talented minds in the world',
  span_tell_us_span_more_about_br_your_project: '<span>Tell us</span> more about-us <br />your project',
  years_in_operation: 'Years in Operation',
  capital_raised: 'Capital Raised',
  accredited: 'Accredited',
  finra_cfi_institute_harvard_certified_valuators_and_analysts: ' FINRA, CFI Institute, Harvard, Certified Valuators and Analysts.',
  expedited: 'Expedited',
  custom_business_plans_delivered_as_fast_as_3_days: 'Custom Business Plans Delivered As Fast As 3 Days.',
  we_are_seen_on: 'We are seen on',
  projects_done: 'Projects done',
  buy_your_business_plan_today: 'Buy your business plan today',
  buy_a_business_plan: 'Buy a Business Plan',
  expert_ivy_leage_analysts: 'EXPERT IVY LEAGE ANALYSTS',
  forward_thinking_strategies: 'FORWARD-THINKING STRATEGIES',
  investors_want_to_see_a_return_on_their_investments: 'INVESTORS WANT TO SEE A RETURN ON THEIR INVESTMENTS',
  give_venture_capitalists_and_banking_institutions_the_trust_they_need_to_finance_and_support_your_company: 'Give venture capitalists and banking institutions the trust they need to finance and support your company.',
  leadership: 'Leadership',
  more_details_on: 'More Details On',
  our_services: 'Our Services',
  connect_with_us: 'Connect with Us',
  summer_internship: 'Summer Internship',
  associate_consultant_internship: 'Associate Consultant Internship',
  consultant_jd_phd: 'Consultant (JD, PHD)',
  professional_and_functional: 'Professional and Functional',
  grant_application_support_span_overview: 'Grant Application Support <span>Overview</span>',
  book_a_free_consultation: 'BOOK A FREE CONSULTATION',
  book_free_consultation: 'BOOK FREE CONSULTATION',
  tech_support_overview: 'Tech Support Overview',
  managing_director: 'Managing Director',
  congratulations_on_your_first_step_towards_growth_now_book_your_consultations_with_one_of_our_business_analysts: 'Congratulations on your first step towards growth, now book your consultations with one of our business analysts.',
  answer_a_few_questions_so_we_can_better_help_you_with_fundraising: 'Answer a few questions so we can better help you with fundraising',
  what_industry_are_you_in: 'What industry are you in?',
  research_science: 'Research & Science ',
  police_brutality: 'Police Brutality ',
  woman_owned: 'Woman Owned',
  agriculture_and_environment: 'Agriculture and Environment',
  affordable_housing: 'Affordable Housing',
  answer_three_questions_so_we_can_better_help_you_with_your_business_objectives: 'Answer three questions so we can better help you with your Business objectives ',
  are_you_a_for_profit_or_non_profit_organization: 'Are you a for-profit or non-profit organization?',
  for_profit: 'For-profit',
  non_profit: 'Non-profit',
  are_you_registered_as_a_c: 'Are you registered as a 501 (c) 3?',
  how_much_capital_are_you_looking_to_raise_through_grants: 'How much capital are you looking to raise through grants?',
  i_don_t_know: 'I don’t know',
  in_addition_to_a_proposal_do_you_need_assistance_with_grant_research_and_grant_application_submissions: 'In addition to a proposal do you need assistance with grant research and grant application submissions?',
  no_just_a_proposal: 'No Just a Proposal',
  do_you_want_to_buy_this_service_now: 'Do you want to buy this service now?',
  have_you_found_the_grant_you_re_applying_to: 'Have you found the grant you’re applying to?',
  please_provide_the_following_information_including_the_link_to_your_grant_and_your_contact_details: '     Please provide the following information, including the link to your grant and your contact details.',
  insert_grant_link_here: 'Insert Grant Link Here',
  it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout_the_point_of_using_lorem_ipsum_is_that_it_has_a_more_or_less_normal_distribution_of_letters: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
  answer_six_questions_so_we_can_better_help_you_with_your_business_objectives: 'Answer six questions so we can better help you with your Business objectives ',
  answer_a_few_questions_so_we_can_better_help_you_with_finding_the_right_grants_for_your_entity: 'Answer a few questions so we can better help you with finding the right grants for your entity ',
  fill_out_our_contact_form_so_one_of_our_accredited_advisors_can_get_in_touch_with_you: 'Fill out our contact form so one of our accredited advisors can get in touch with you',
  book_a_consultation_small: 'Book a Consultation',
  i_want_to_apply_for: 'I want to apply for',
  do_you_want_to_book_your_initial_interview_now: 'Do you want to book your initial interview now?',
  not_right_now: 'Not right now',
  book_interview: 'Book Interview',
  congratulations_on_booking_your_consultation: 'Congratulations on booking your consultation.',
  feasibility_study: 'Feasibility Study',
  market_research: 'Market Research ',
  pro_forma: 'Pro Forma',
  pitch_deck: 'Pitch Deck',
  grant_proposal: 'Grant Proposal',
  historic_financials: 'Historic Financials',
  e_2_visa_business_plan: 'E-2 Visa Business Plan',
  real_estate_business_plan: 'Real Estate Business Plan',
  crowd_funding_reg_a: 'Crowd Funding Reg A +',
  e_b5_business_plan: 'E-B5 Business Plan',
  no_book_consultation_first: 'No, Book Consultation First',
  debt_financing: 'Debt Financing',
  pre_ipo: 'Pre IPO',
  special_purpose_entity: 'Special Purpose Entity',
  crowd_funding: 'Crowd Funding'
});
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js

const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  },
  REDIRECT_ON_OPTIONS: {
    "ALL": "all",
    "ROOT": "root",
    "NO_PREFIX": "no prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{
    "code": "en",
    "file": "en.js",
    "name": "English",
    "iso": "en"
  }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_and_default",
  lazy: false,
  langDir: "C:\\Users\\USER\\Documents\\venture-nuxt\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieAge": 365,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  differentDomains: false,
  baseUrl: "",
  vuex: {
    "moduleName": "i18n",
    "syncRouteParams": true
  },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: {
    "default": "en"
  },
  normalizedLocales: [{
    "code": "en",
    "file": "en.js",
    "name": "English",
    "iso": "en"
  }],
  localeCodes: ["en"],
  additionalMessages: []
};
const localeMessages = {
  'en.js': () => Promise.resolve(en)
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseAcceptLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return matchBrowserLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLocaleDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLocalesRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocaleFromRouteGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLocaleCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setLocaleCookie; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions
 * @typedef {Required<import('../../types/').DetectBrowserLanguageOptions>} DetectBrowserLanguageOptions
 */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */
function formatMessage(text) {
  return `[@nuxtjs/i18n] ${text}`;
}

/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */
function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}

/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */
function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = [];

  // Normalise appLocales input
  /** @type {{ code: string, iso: string }[]} */
  const normalizedAppLocales = [];
  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  }

  // First pass: match exact locale.
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  }

  // Second pass: match only locale code part of the browser locale (not including country).
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  }

  // Sort the list by score (0 - lowest, 1 - highest).
  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }
      return localeB.score - localeA.score;
    });
  }
  return matchedLocales.length ? matchedLocales[0].code : undefined;
}

/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */
function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;
  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    }
  }
  return '';
}

/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */
function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`);
}

/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */
function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`);
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */
  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return '';
  };
  return getLocaleFromRoute;
}

/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */
function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;
    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }
    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}

/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {Pick<DetectBrowserLanguageOptions, 'useCookie' | 'cookieAge' | 'cookieDomain' | 'cookieKey' | 'cookieSecure' | 'cookieCrossOrigin'>} options
 */
function setLocaleCookie(locale, res, {
  useCookie,
  cookieAge,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }
  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];
    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    /** @type {import('cookie').CookieSerializeOptions} */
    const cookieOptions = {
      maxAge: cookieAge * 60 * 60 * 24,
      // in seconds
      path: '/',
      sameSite: cookieCrossOrigin ? 'none' : 'lax',
      secure: cookieCrossOrigin || cookieSecure,
      ...(cookieDomain ? {
        domain: cookieDomain
      } : {})
    };
    const redirectCookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"])(cookieKey, locale, cookieOptions);
    headers = headers.filter(header => {
      const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(header);
      return !(cookieKey in cookie);
    });
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)["URLSearchParams"]))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)["URLSearchParams"]))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)["URLSearchParams"]))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
var dist = isHTTPS;
const _location = typeof location !== "undefined" ? location : {
  origin: "",
  pathname: "/"
};
function getURL(req, includePath) {
  if (!req) {
    return _location.origin + (includePath ? _location.pathname : "");
  }
  return encodeURI("http" + (dist(req) ? "s" : "") + "://" + (req.headers["x-forwarded-host"] || req.headers.host) + (includePath ? req.url : ""));
}
module.exports = getURL;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["[{]|^-?\d[\d.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _lval = value.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return Number.NaN;
  }
  if (_lval === "infinity") {
    return Number.POSITIVE_INFINITY;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

module.exports = destr;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ toggleMenuDropdown; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ i18nLangSwitch; });

// UNUSED EXPORTS: scrollView

// CONCATENATED MODULE: ./mixins/toggleMenuDropdown.js
/* harmony default export */ var toggleMenuDropdown = ({
  methods: {
    clickEventListenerTocloseMenu() {
      document.querySelectorAll('.megamenu ul > li > a').forEach(el => {
        el.addEventListener('click', e => {
          this.$store.dispatch('nav/deactiveAllDropdown');
          // if (e.target.offsetParent) {
          //     if (e.target.offsetParent.previousElementSibling.children[1]) {
          //         e.target.offsetParent.previousElementSibling.children[1].children[0].classList.remove('menu-icon-open');
          //     }

          //     e.target.offsetParent.previousElementSibling.classList.remove('submenu-open');
          //     // e.target.offsetParent.classList.toggle('hidden');
          //     this.$store.dispatch('nav/deactiveDropdown', e.target.offsetParent.previousElementSibling.getAttribute('id'));
          //     document.removeEventListener('click', this.detectOutsideClick, false);
          // }
        });
      });

      document.querySelectorAll('.megamenu div > a').forEach(el => {
        el.addEventListener('click', e => {
          this.$store.dispatch('nav/deactiveAllDropdown');
        });
      });
    }

    // detectOutsideClick(e) {
    //     if (e.target === null || e.target.offsetParent === undefined || e.target.offsetParent === null || e.target.classList === null || (!e.target.offsetParent.classList.contains('sub-menu') && !e.target.classList.contains('submenu-open'))) {
    //         if (document.querySelector('.menu .submenu-open')) {
    //             if (document.querySelector('.menu .submenu-open').children[1]) {
    //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
    //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
    //             }

    //             // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
    //             this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
    //             document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
    //             document.removeEventListener('click', this.detectOutsideClick, false);
    //         }
    //     }
    // },

    // toggleMenuDropdown(event) {
    //     if (event.target.classList.contains('submenu-open')) {
    //         if (event.target.children[1]) {
    //             event.target.children[1].children[0].classList.remove('menu-icon-open');
    //             event.target.children[1].children[0].classList.add('menu-icon-close');
    //         }

    //         // event.target.nextElementSibling.classList.toggle('hidden');
    //         this.$store.dispatch('nav/deactiveDropdown', event.target.nextElementSibling.getAttribute('id'));
    //         event.target.classList.remove('submenu-open');

    //         document.removeEventListener('click', this.detectOutsideClick, false);
    //     } else {
    //         if (document.querySelector('.menu .submenu-open')) {
    //             if (document.querySelector('.menu .submenu-open').children[1]) {
    //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
    //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
    //             }

    //             // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
    //             this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
    //             document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
    //         }

    //         if (event.target.children[1]) {
    //             event.target.children[1].children[0].classList.remove('menu-icon-close');
    //             event.target.children[1].children[0].classList.add('menu-icon-open');
    //         }

    //         event.target.classList.add('submenu-open');
    //         // event.target.nextElementSibling.classList.toggle('hidden');
    //         this.$store.dispatch('nav/activeDropdown', event.target.nextElementSibling.getAttribute('id'));

    //         document.addEventListener('click', this.detectOutsideClick);
    //     }
    // },

    // toggleMenuDropdownHover(event) {
    //     if (document.querySelector('.menu .submenu-open')) {
    //         if (document.querySelector('.menu .submenu-open').children[1]) {
    //             document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
    //             document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
    //         }

    //         // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
    //         this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));

    //         document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
    //     }

    //     if (event.target.children[1]) {
    //         event.target.children[1].children[0].classList.remove('menu-icon-close');
    //         event.target.children[1].children[0].classList.add('menu-icon-open');
    //     }

    //     event.target.classList.add('submenu-open');
    //     // event.target.nextElementSibling.classList.toggle('hidden');
    //     this.$store.dispatch('nav/activeDropdown', event.target.nextElementSibling.getAttribute('id'));

    //     document.addEventListener('click', this.detectOutsideClick);
    // },

    // closeMenuDropdown(event) {
    //     const dealyCloseDropdownMenu = setTimeout(() => {
    //         if (event.target.offsetParent === null || event.target.classList === null || (!event.target.offsetParent.classList.contains('sub-menu') && !event.target.classList.contains('submenu-open'))) {
    //             if (document.querySelector('.menu .submenu-open')) {
    //                 if (document.querySelector('.menu .submenu-open').children[1]) {
    //                     document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
    //                     document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
    //                 }

    //                 // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
    //                 this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
    //                 document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
    //                 document.removeEventListener('click', this.detectOutsideClick, false);
    //             }
    //         }
    //     }, 500);

    //     this.$store.dispatch('nav/setDelayCloseDropdownMenu', dealyCloseDropdownMenu);
    // },
  }
});
// CONCATENATED MODULE: ./mixins/scrollView.js
/* harmony default export */ var scrollView = ({
  data() {
    return {
      lastScrollTop: 0,
      scrollPosition: null,
      activeId: ''
    };
  },
  mounted() {
    this.lastScrollTop = 0;
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    checkInView(id) {
      const element = document.getElementById(id);
      if (!element) return false;
      const rect = element.getBoundingClientRect();

      // checking for partial visibility
      if (rect.top < window.innerHeight && rect.bottom >= 350) {
        return true;
      }
    },
    scrollToId(id) {
      this.activeId = id;
      const element = document.getElementById(id);
      if (element) {
        const offset = this.scrollPosition === 'down' ? 200 : 200;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./mixins/i18nLangSwitch.js
/* harmony default export */ var i18nLangSwitch = ({
  computed: {
    currentLocale() {
      const locale = this.$i18n.locales.filter(i => i.code === this.$i18n.locale);
      if (locale.length > 0) {
        return locale[0].name;
      }
      return 'English';
    }
  },
  methods: {
    async switchLang(code) {
      // await this.$i18n.setLocale(code);
    }
  }
});
// CONCATENATED MODULE: ./mixins/index.js





/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === 'object';
} // Base function to apply defaults

function _defu(baseObj, defaults) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var merger = arguments.length > 3 ? arguments[3] : undefined;
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  var obj = Object.assign({}, defaults);
  for (var key in baseObj) {
    if (key === '__proto__' || key === 'constructor') {
      continue;
    }
    var val = baseObj[key];
    if (val === null) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? "".concat(namespace, ".") : '') + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
} // Create defu wrapper with optional merger and multi arg support

function extend(merger) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.reduce(function (p, c) {
      return _defu(p, c, '', merger);
    }, {});
  };
} // Basic version

var defu = extend(); // Custom version with function merge support

defu.fn = extend(function (obj, key, currentValue, _namespace) {
  if (typeof obj[key] !== 'undefined' && typeof currentValue === 'function') {
    obj[key] = currentValue(obj[key]);
    return true;
  }
}); // Custom version with function merge support only for defined arrays

defu.arrayFn = extend(function (obj, key, currentValue, _namespace) {
  if (Array.isArray(obj[key]) && typeof currentValue === 'function') {
    obj[key] = currentValue(obj[key]);
    return true;
  }
}); // Support user extending

defu.extend = extend;
module.exports = defu;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vuelidate/lib/validators");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-right-menu-arrow.vue?vue&type=template&id=72f4b2cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"7","height":"8","viewBox":"0 0 7 8"}},[_vm._ssrNode("<g><g transform=\"rotate(90 3.5 4)\"><path fill=\"currentColor\" d=\"M3.5.5l4 7h-8z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-right-menu-arrow.vue?vue&type=template&id=72f4b2cc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-right-menu-arrow.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62bc0d01"
  
)

/* harmony default export */ var icons_right_menu_arrow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

const { defu, createDefu, defuFn, defuArrayFn } = __webpack_require__(113);

module.exports = defu;

module.exports.defu = defu;
module.exports.default = defu;

module.exports.createDefu = createDefu;
module.exports.defuFn = defuFn;
module.exports.defuArrayFn = defuArrayFn;



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;

module.exports = defu;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0c3385be", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("46ab6bd2", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("23b4166c", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("1c24e4d2", content, true, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("14963e16", content, true, context)
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;

module.exports = defu;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("abort-controller");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("web-streams-polyfill/ponyfill/es2018");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL, URLSearchParams) {/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0__);

/*! MIT License © Sindre Sorhus */

const globals = {};
const getGlobal = property => {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self;
  }

  /* istanbul ignore next */
  if (typeof window !== 'undefined' && window && property in window) {
    return window;
  }
  if (typeof global !== 'undefined' && global && property in global) {
    return global;
  }

  /* istanbul ignore next */
  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis;
  }
};
const globalProperties = ['Headers', 'Request', 'Response', 'ReadableStream', 'fetch', 'AbortController', 'FormData'];
for (const property of globalProperties) {
  Object.defineProperty(globals, property, {
    get() {
      const globalObject = getGlobal(property);
      const value = globalObject && globalObject[property];
      return typeof value === 'function' ? value.bind(globalObject) : value;
    }
  });
}
const isObject = value => value !== null && typeof value === 'object';
const supportsAbortController = typeof globals.AbortController === 'function';
const supportsStreams = typeof globals.ReadableStream === 'function';
const supportsFormData = typeof globals.FormData === 'function';
const mergeHeaders = (source1, source2) => {
  const result = new globals.Headers(source1 || {});
  const isHeadersInstance = source2 instanceof globals.Headers;
  const source = new globals.Headers(source2 || {});
  for (const [key, value] of source) {
    if (isHeadersInstance && value === 'undefined' || value === undefined) {
      result.delete(key);
    } else {
      result.set(key, value);
    }
  }
  return result;
};
const deepMerge = (...sources) => {
  let returnValue = {};
  let headers = {};
  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }
      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }
        returnValue = {
          ...returnValue,
          [key]: value
        };
      }
      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
      }
    }
    returnValue.headers = headers;
  }
  return returnValue;
};
const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const stop = Symbol('stop');
class HTTPError extends Error {
  constructor(response) {
    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    super(response.statusText || String(response.status === 0 || response.status ? response.status : 'Unknown response error'));
    this.name = 'HTTPError';
    this.response = response;
  }
}
class TimeoutError extends Error {
  constructor(request) {
    super('Request timed out');
    this.name = 'TimeoutError';
    this.request = request;
  }
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// `Promise.race()` workaround (#91)
const timeout = (request, abortController, options) => new Promise((resolve, reject) => {
  const timeoutID = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }
    reject(new TimeoutError(request));
  }, options.timeout);

  /* eslint-disable promise/prefer-await-to-then */
  options.fetch(request).then(resolve).catch(reject).then(() => {
    clearTimeout(timeoutID);
  });
  /* eslint-enable promise/prefer-await-to-then */
});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;
const defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes
};
const normalizeRetryOptions = (retry = {}) => {
  if (typeof retry === 'number') {
    return {
      ...defaultRetryOptions,
      limit: retry
    };
  }
  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error('retry.methods must be an array');
  }
  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error('retry.statusCodes must be an array');
  }
  return {
    ...defaultRetryOptions,
    ...retry,
    afterStatusCodes: retryAfterStatusCodes
  };
};

// The maximum value of a 32bit int (see issue #117)
const maxSafeTimeout = 2147483647;
class Ky {
  constructor(input, options = {}) {
    this._retryCount = 0;
    this._input = input;
    this._options = {
      // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      credentials: this._input.credentials || 'same-origin',
      ...options,
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method || this._input.method),
      prefixUrl: String(options.prefixUrl || ''),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
      fetch: options.fetch || globals.fetch
    };
    if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
      throw new TypeError('`input` must be a string, URL, or Request');
    }
    if (this._options.prefixUrl && typeof this._input === 'string') {
      if (this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }
      if (!this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }
      this._input = this._options.prefixUrl + this._input;
    }
    if (supportsAbortController) {
      this.abortController = new globals.AbortController();
      if (this._options.signal) {
        this._options.signal.addEventListener('abort', () => {
          this.abortController.abort();
        });
      }
      this._options.signal = this.abortController.signal;
    }
    this.request = new globals.Request(this._input, this._options);
    if (this._options.searchParams) {
      const searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
      const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);

      // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
      if ((supportsFormData && this._options.body instanceof globals.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
        this.request.headers.delete('content-type');
      }
      this.request = new globals.Request(new globals.Request(url, this.request), this._options);
    }
    if (this._options.json !== undefined) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set('content-type', 'application/json');
      this.request = new globals.Request(this.request, {
        body: this._options.body
      });
    }
    const fn = async () => {
      if (this._options.timeout > maxSafeTimeout) {
        throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
      }
      await delay(1);
      let response = await this._fetch();
      for (const hook of this._options.hooks.afterResponse) {
        // eslint-disable-next-line no-await-in-loop
        const modifiedResponse = await hook(this.request, this._options, this._decorateResponse(response.clone()));
        if (modifiedResponse instanceof globals.Response) {
          response = modifiedResponse;
        }
      }
      this._decorateResponse(response);
      if (!response.ok && this._options.throwHttpErrors) {
        throw new HTTPError(response);
      }

      // If `onDownloadProgress` is passed, it uses the stream API internally
      /* istanbul ignore next */
      if (this._options.onDownloadProgress) {
        if (typeof this._options.onDownloadProgress !== 'function') {
          throw new TypeError('The `onDownloadProgress` option must be a function');
        }
        if (!supportsStreams) {
          throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
        }
        return this._stream(response.clone(), this._options.onDownloadProgress);
      }
      return response;
    };
    const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());
    const result = isRetriableMethod ? this._retry(fn) : fn();
    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);
        const response = (await result).clone();
        if (type === 'json') {
          if (response.status === 204) {
            return '';
          }
          if (options.parseJson) {
            return options.parseJson(await response.text());
          }
        }
        return response[type]();
      };
    }
    return result;
  }
  _calculateRetryDelay(error) {
    this._retryCount++;
    if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!this._options.retry.statusCodes.includes(error.response.status)) {
          return 0;
        }
        const retryAfter = error.response.headers.get('Retry-After');
        if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
          let after = Number(retryAfter);
          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1000;
          }
          if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
            return 0;
          }
          return after;
        }
        if (error.response.status === 413) {
          return 0;
        }
      }
      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1000;
    }
    return 0;
  }
  _decorateResponse(response) {
    if (this._options.parseJson) {
      response.json = async () => {
        return this._options.parseJson(await response.text());
      };
    }
    return response;
  }
  async _retry(fn) {
    try {
      return await fn();
    } catch (error) {
      const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);
        for (const hook of this._options.hooks.beforeRetry) {
          // eslint-disable-next-line no-await-in-loop
          const hookResult = await hook({
            request: this.request,
            options: this._options,
            error,
            retryCount: this._retryCount
          });

          // If `stop` is returned from the hook, the retry process is stopped
          if (hookResult === stop) {
            return;
          }
        }
        return this._retry(fn);
      }
      if (this._options.throwHttpErrors) {
        throw error;
      }
    }
  }
  async _fetch() {
    for (const hook of this._options.hooks.beforeRequest) {
      // eslint-disable-next-line no-await-in-loop
      const result = await hook(this.request, this._options);
      if (result instanceof Request) {
        this.request = result;
        break;
      }
      if (result instanceof Response) {
        return result;
      }
    }
    if (this._options.timeout === false) {
      return this._options.fetch(this.request.clone());
    }
    return timeout(this.request.clone(), this.abortController, this._options);
  }

  /* istanbul ignore next */
  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get('content-length')) || 0;
    let transferredBytes = 0;
    return new globals.Response(new globals.ReadableStream({
      start(controller) {
        const reader = response.body.getReader();
        if (onDownloadProgress) {
          onDownloadProgress({
            percent: 0,
            transferredBytes: 0,
            totalBytes
          }, new Uint8Array());
        }
        async function read() {
          const {
            done,
            value
          } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({
              percent,
              transferredBytes,
              totalBytes
            }, value);
          }
          controller.enqueue(value);
          read();
        }
        read();
      }
    }));
  }
}
const validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }
  return deepMerge({}, ...sources);
};
const createInstance = defaults => {
  const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));
  for (const method of requestMethods) {
    ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {
      method
    }));
  }
  ky.HTTPError = HTTPError;
  ky.TimeoutError = TimeoutError;
  ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));
  ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));
  ky.stop = stop;
  return ky;
};
/* harmony default export */ __webpack_exports__["a"] = (createInstance());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)["URL"], __webpack_require__(12)["URLSearchParams"]))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function mergeHooks(...hooks) {
  const finalHooks = {};
  for (let _hook of hooks) {
    _hook = flatHooks(_hook);
    for (const key in _hook) {
      if (finalHooks[key]) {
        finalHooks[key].push(_hook[key]);
      } else {
        finalHooks[key] = [_hook[key]];
      }
    }
  }
  for (const key in finalHooks) {
    if (finalHooks[key].length > 1) {
      const arr = finalHooks[key];
      finalHooks[key] = (...args) => serial(arr, fn => fn(...args));
    } else {
      finalHooks[key] = finalHooks[key][0];
    }
  }
  return finalHooks;
}
function serial(tasks, fn) {
  return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve(null));
}
class Hookable {
  constructor(logger = console) {
    this._logger = logger;
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {};
    }
    const originalName = name;
    let deprecatedHook;
    while (this._deprecatedHooks[name]) {
      deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHook = {
          to: deprecatedHook
        };
      }
      name = deprecatedHook.to;
    }
    if (deprecatedHook && this._logger) {
      if (!deprecatedHook.message) {
        this._logger.warn(`${originalName} hook has been deprecated` + (deprecatedHook.to ? `, please use ${deprecatedHook.to}` : ""));
      } else {
        this._logger.warn(deprecatedHook.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(key => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach(unreg => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  async callHook(name, ...args) {
    if (!this._hooks[name]) {
      return;
    }
    try {
      await serial(this._hooks[name], fn => fn(...args));
    } catch (err) {
      if (name !== "error") {
        await this.callHook("error", err);
      }
      if (this._logger) {
        if (this._logger.fatal) {
          this._logger.fatal(err);
        } else {
          this._logger.error(err);
        }
      }
    }
  }
}
Hookable.mergeHooks = mergeHooks;
Hookable.prototype.mergeHooks = mergeHooks;
module.exports = Hookable;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/utc");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/timezone");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
module.exports = isHTTPS;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nuxtI18nHead; });
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_meta__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4);

















/**
 * @this {import('vue/types/vue').Vue}
 * @param {import('../../types/vue').NuxtI18nHeadOptions} options
 * @return {import('vue-meta').MetaInfo}
 */
function nuxtI18nHead({
  addDirAttribute = false,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }

  /** @type {import('../../types/vue').NuxtI18nMeta} */
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || _options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "d"].defaultDirection;

  /**
   * Adding Direction Attribute:
   */
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }

  /**
   * Adding SEO Meta:
   */
  if (addSeoAttributes && (
  // @ts-ignore
  vue_meta__WEBPACK_IMPORTED_MODULE_13___default.a.hasMetaInfo ? vue_meta__WEBPACK_IMPORTED_MODULE_13___default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales = /** @type {import('../../types').LocaleObject[]} */this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link, addSeoAttributes);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }

  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */
  function addHreflangLinks(locales, baseUrl, link) {
    if (_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "d"].strategy === _options__WEBPACK_IMPORTED_MODULE_14__[/* Constants */ "a"].STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */
    const localeMap = new Map();
    for (const locale of locales) {
      const localeIso = locale.iso;
      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(Object(_utils_common__WEBPACK_IMPORTED_MODULE_15__[/* formatMessage */ "b"])('Locale ISO code is required to generate alternate link'));
        continue;
      }
      const [language, region] = localeIso.split('-');
      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }
      localeMap.set(localeIso, locale);
    }
    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);
      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }
    if (_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "d"].defaultLocale) {
      const localePath = this.switchLocalePath(_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "d"].defaultLocale);
      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   * @param {NonNullable<import('../../types/vue').NuxtI18nHeadOptions['addSeoAttributes']>} seoAttributesOptions
   */
  function addCanonicalLinks(baseUrl, link, seoAttributesOptions) {
    const currentRoute = this.localeRoute({
      ...this.$route,
      name: this.getRouteBaseName()
    });
    if (currentRoute) {
      let href = toAbsoluteUrl(currentRoute.path, baseUrl);
      const canonicalQueries = typeof seoAttributesOptions !== 'boolean' && seoAttributesOptions.canonicalQueries || [];
      if (canonicalQueries.length) {
        const currentRouteQueryParams = currentRoute.query;
        const params = new URLSearchParams();
        for (const queryParamName of canonicalQueries) {
          if (queryParamName in currentRouteQueryParams) {
            const queryParamValue = currentRouteQueryParams[queryParamName];
            if (Array.isArray(queryParamValue)) {
              queryParamValue.forEach(v => params.append(queryParamName, v || ''));
            } else {
              params.append(queryParamName, queryParamValue || '');
            }
          }
        }
        const queryString = params.toString();
        if (queryString) {
          href = `${href}?${queryString}`;
        }
      }
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href
      });
    }
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */
  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
    if (!hasCurrentLocaleAndIso) {
      return;
    }
    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */
  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });
    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }

  /**
   * @param {string | undefined} str
   * @return {string}
   */
  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }

  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */
  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }
    return baseUrl + urlOrPath;
  }
  return metaObject;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)["URLSearchParams"]))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("vue-the-mask");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("vuelidate");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("vue-multiselect");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("vue-popperjs");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("vue-flatpickr-component");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("vue-scrollactive");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("vue-slide-toggle");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-check-circle.vue?vue&type=template&id=005d6681&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-5 w-5",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor"}},[_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-check-circle.vue?vue&type=template&id=005d6681&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-check-circle.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c122946c"
  
)

/* harmony default export */ var icons_check_circle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-search.vue?vue&type=template&id=3c7b3df0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"21","viewBox":"0 0 20 21"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M1.442 8.277a6.53 6.53 0 0 1 6.524-6.524 6.53 6.53 0 0 1 6.525 6.524 6.523 6.523 0 0 1-6.525 6.525 6.53 6.53 0 0 1-6.524-6.525zm12.364 5.408a7.953 7.953 0 0 0 2.127-5.408c0-4.386-3.569-7.966-7.967-7.966S0 3.89 0 8.277s3.568 7.967 7.966 7.967c1.79 0 3.437-.589 4.77-1.586l5.925 5.924a.712.712 0 0 0 .505.216c.18 0 .372-.072.504-.216a.733.733 0 0 0 0-1.021z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-search.vue?vue&type=template&id=3c7b3df0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-search.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f7b027d"
  
)

/* harmony default export */ var icons_search = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-phone.vue?vue&type=template&id=72a0e53a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"17","height":"16","viewBox":"0 0 17 16"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M1.11.552c.64-.642 2.574-.749 2.589-.41.015.34 1.742 4.103 1.758 4.443.015.34-1.14 1.496-1.477 1.834-.335.335 2.258 3.272 2.307 3.328.055.05 2.985 2.648 3.32 2.312.337-.338 1.492-1.495 1.83-1.48.338.015 4.093 1.747 4.431 1.762.339.015.232 1.954-.408 2.596-.547.548-3.382 2.54-8.31-1.016-.54-.312-1.396-1.027-2.695-2.327a.01.01 0 0 0-.002-.002l-.003-.003-.003-.003a.01.01 0 0 0-.002-.003c-1.297-1.301-2.01-2.16-2.322-2.701C-1.424 3.942.563 1.1 1.11.552z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-phone.vue?vue&type=template&id=72a0e53a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-phone.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b2d4f29"
  
)

/* harmony default export */ var icons_phone = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-calendar.vue?vue&type=template&id=43424600&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"17","height":"19","viewBox":"0 0 17 19"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M2.663 5.886h12.399v10.736H2.663zM14.78 2.213h-.564v-.847c0-.78-.63-1.413-1.408-1.413-.778 0-1.41.633-1.41 1.413v.847H6.327v-.847c0-.78-.63-1.413-1.409-1.413-.777 0-1.408.633-1.408 1.413v.847h-.564A2.26 2.26 0 0 0 .69 4.473V16.34a2.26 2.26 0 0 0 2.254 2.26H14.78a2.26 2.26 0 0 0 2.254-2.26V4.473a2.26 2.26 0 0 0-2.254-2.26\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M7.735 14.362V12.1H9.99v2.26z\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M4.072 10.406v-2.26h2.254v2.26z\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M4.072 14.362V12.1h2.254v2.26z\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M11.399 10.406v-2.26h2.254v2.26z\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M7.735 10.406v-2.26H9.99v2.26z\"></path></g> <g clip-path=\"url(#clip-be16c263-ba42-48d2-9590-6809eefd5935)\"><path fill=\"#fff\" d=\"M11.399 14.362V12.1h2.254v2.26z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-calendar.vue?vue&type=template&id=43424600&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-calendar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f8841d3"
  
)

/* harmony default export */ var icons_calendar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-logo.vue?vue&type=template&id=a46015b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"93","height":"23","viewBox":"0 0 93 23"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M3.89 9.625L.462.798h2.396l2.257 6.494L7.372.798h2.307L6.211 9.625z\"></path></g> <g><path fill=\"currentColor\" d=\"M12.796 2.563v1.753h4.212v1.765h-4.212V7.86H17.6v1.765h-7.05V.798h6.91v1.765z\"></path></g> <g><path fill=\"currentColor\" d=\"M25.22 9.625L21.158 4.19v5.435h-2.106V.798h1.98l4.073 5.448V.798h2.093v8.827z\"></path></g> <g><path fill=\"currentColor\" d=\"M33.053 2.6v7.025h-2.244V2.6h-2.636V.785h7.54V2.6z\"></path></g> <g><path fill=\"currentColor\" d=\"M44.618 5.918c0 2.333-1.551 3.808-4.022 3.808-2.485 0-4.074-1.475-4.074-3.808V.798h2.245v5.12c0 1.198.77 1.93 1.841 1.93 1.06 0 1.778-.732 1.778-1.93V.798h2.232z\"></path></g> <g><path fill=\"currentColor\" d=\"M48.48 5.376V2.563h1.702c.971 0 1.539.467 1.539 1.388 0 .933-.568 1.425-1.54 1.425zm3.076 4.249h2.548L52.25 6.712c1.034-.517 1.601-1.488 1.601-2.837 0-1.967-1.336-3.077-3.67-3.077h-3.946v8.827h2.244V7.141h1.766z\"></path></g> <g><path fill=\"currentColor\" d=\"M57.612 2.563v1.753h4.212v1.765h-4.212V7.86h4.804v1.765h-7.049V.798h6.91v1.765z\"></path></g> <g><path fill=\"currentColor\" d=\"M65.084 1.146v2.033h-.404V1.146h-.757V.783h1.92v.363z\"></path></g> <g><path fill=\"currentColor\" d=\"M68.35 3.18l-.003-1.791-.757 1.54h-.263l-.757-1.54v1.79h-.38V.783h.48l.79 1.592.788-1.592h.476v2.396z\"></path></g> <g><path fill=\"currentColor\" d=\"M21.802 14.4h2.371c1.66 0 2.622.71 2.622 2.107 0 1.436-.962 2.174-2.622 2.174h-2.37zm-1.054-1.015v9.221h1.054v-2.91h2.41c2.28 0 3.597-1.173 3.597-3.215 0-1.963-1.317-3.096-3.596-3.096z\"></path></g> <g><path fill=\"currentColor\" d=\"M34.659 21.606v1H29.56v-9.22h1.054v8.22z\"></path></g> <g><path fill=\"currentColor\" d=\"M41.864 19.26h-4.136l2.055-4.676zm.448 1.015l1.028 2.331h1.145l-4.123-9.22H39.27l-4.136 9.22h1.12l1.027-2.331z\"></path></g> <g><path fill=\"currentColor\" d=\"M52.521 22.606l-5.532-7.403v7.403h-1.054v-9.22h1.093l5.533 7.416v-7.417h1.04v9.221z\"></path></g> <g><path fill=\"currentColor\" d=\"M62.071 14.202l-.448.988a4.768 4.768 0 0 0-2.542-.777c-1.185 0-1.963.448-1.963 1.225 0 2.37 5.19 1.132 5.178 4.479 0 1.54-1.358 2.529-3.334 2.529a5.264 5.264 0 0 1-3.53-1.41l.474-.948c.856.83 2.029 1.304 3.07 1.304 1.33 0 2.16-.54 2.16-1.422.013-2.425-5.177-1.133-5.177-4.44 0-1.45 1.278-2.384 3.188-2.384 1.067 0 2.16.342 2.924.856z\"></path></g> <g><path fill=\"#00ADFF\" d=\"M71.624 22.553V1h21.063z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-logo.vue?vue&type=template&id=a46015b8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13621440"
  
)

/* harmony default export */ var icons_logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(76);
module.exports = __webpack_require__(118);


/***/ }),
/* 75 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("15ba7704", content, true)

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"ProximaNova\";src:url(https://use.typekit.net/af/98e3f6/000000000000000077359562/30/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff2\"),url(https://use.typekit.net/af/98e3f6/000000000000000077359562/30/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff\"),url(https://use.typekit.net/af/98e3f6/000000000000000077359562/30/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"opentype\");font-display:auto;font-style:normal;font-weight:700;font-stretch:normal}@font-face{font-family:\"ProximaNova\";src:url(https://use.typekit.net/af/199a3f/00000000000000007735955e/30/l?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff2\"),url(https://use.typekit.net/af/199a3f/00000000000000007735955e/30/d?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff\"),url(https://use.typekit.net/af/199a3f/00000000000000007735955e/30/a?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"opentype\");font-display:auto;font-style:normal;font-weight:800;font-stretch:normal}@font-face{font-family:\"ProximaNova\";src:url(https://use.typekit.net/af/e4b1a9/000000000000000077359571/30/l?fvd=n6&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff2\"),url(https://use.typekit.net/af/e4b1a9/000000000000000077359571/30/d?fvd=n6&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff\"),url(https://use.typekit.net/af/e4b1a9/000000000000000077359571/30/a?fvd=n6&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"opentype\");font-display:auto;font-style:normal;font-weight:600;font-stretch:normal}@font-face{font-family:\"ProximaNova\";src:url(https://use.typekit.net/af/d45b9a/000000000000000077359577/30/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff2\"),url(https://use.typekit.net/af/d45b9a/000000000000000077359577/30/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff\"),url(https://use.typekit.net/af/d45b9a/000000000000000077359577/30/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"opentype\");font-display:auto;font-style:normal;font-weight:400;font-stretch:normal}@font-face{font-family:\"ProximaNova\";src:url(https://use.typekit.net/af/0758f3/000000000000000077359583/30/l?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff2\"),url(https://use.typekit.net/af/0758f3/000000000000000077359583/30/d?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"woff\"),url(https://use.typekit.net/af/0758f3/000000000000000077359583/30/a?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format(\"opentype\");font-display:auto;font-style:normal;font-weight:500;font-stretch:normal}.scrollbar::-webkit-scrollbar{width:8px;height:8px}.scrollbar::-webkit-scrollbar-track{border-radius:100vh;background:#fff}.scrollbar::-webkit-scrollbar-thumb{background:#d9d9d9;border-radius:100vh;border:5px solid #d9d9d9}.scrollbar::-webkit-scrollbar-thumb:hover{background:#d9d9d9}/*! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1230px){.container{max-width:1230px}}.form-input,.form-textarea,.form-select,.form-multiselect{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000;}.form-input:focus, .form-textarea:focus, .form-select:focus, .form-multiselect:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb}.form-input::-moz-placeholder, .form-textarea::-moz-placeholder{color:#6b7280;opacity:1}.form-input::placeholder,.form-textarea::placeholder{color:#6b7280;opacity:1}.form-input::-webkit-datetime-edit-fields-wrapper{padding:0}.form-input::-webkit-date-and-time-value{min-height:1.5em}.form-input::-webkit-datetime-edit,.form-input::-webkit-datetime-edit-year-field,.form-input::-webkit-datetime-edit-month-field,.form-input::-webkit-datetime-edit-day-field,.form-input::-webkit-datetime-edit-hour-field,.form-input::-webkit-datetime-edit-minute-field,.form-input::-webkit-datetime-edit-second-field,.form-input::-webkit-datetime-edit-millisecond-field,.form-input::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}.form-select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}.form-checkbox,.form-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow:0 0 #0000}.form-checkbox{border-radius:0px}.form-checkbox:focus,.form-radio:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.form-checkbox:checked,.form-radio:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}.form-checkbox:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}.form-checkbox:checked:hover,.form-checkbox:checked:focus,.form-radio:checked:hover,.form-radio:checked:focus{border-color:transparent;background-color:currentColor}.form-checkbox:indeterminate{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}.form-checkbox:indeterminate:hover,.form-checkbox:indeterminate:focus{border-color:transparent;background-color:currentColor}.form-input, .form-multiselect, .form-textarea{width:100%;border-radius:10px;border-width:0px;padding:1rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;line-height:14px;letter-spacing:-0.02px;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.form-input::-moz-placeholder, .form-multiselect::-moz-placeholder, .form-textarea::-moz-placeholder{--tw-text-opacity:1;color:rgb(165 165 165 / var(--tw-text-opacity));color:rgb(165 165 165 / 0.7)}.form-input::placeholder, .form-multiselect::placeholder, .form-textarea::placeholder{--tw-text-opacity:1;color:rgb(165 165 165 / var(--tw-text-opacity));color:rgb(165 165 165 / 0.7)}.form-input:focus, .form-multiselect:focus, .form-textarea:focus{border-width:0px;outline-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.form-input:focus-visible, .form-multiselect:focus-visible, .form-textarea:focus-visible{outline-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}@media (min-width: 1230px){.form-input, .form-multiselect, .form-textarea{padding:18px;font-size:0.875rem;line-height:1.25rem;letter-spacing:-0.03px}}.form-select{display:block;width:100%;max-width:294px;border-radius:0.375rem;border-width:2px;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));background-color:transparent;background-image:url(/assets/img/selection-arrow.svg);background-size:15px 8px;background-position:right 20px center;padding-left:2.5rem;padding-right:2.5rem;padding-top:1.25rem;padding-bottom:1.25rem;text-align:left;font-size:25px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.form-select:focus{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));outline-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}@media (min-width: 1230px){.form-select{max-width:406px;padding-top:2rem;padding-bottom:2rem}}.form-checkbox{height:1.25rem;width:1.25rem;border-radius:1px;border-width:1px;--tw-border-opacity:1;border-color:rgb(216 216 216 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.form-checkbox:focus{--tw-shadow:0 0 #0000 !important;--tw-shadow-colored:0 0 #0000 !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.btn{display:inline-block;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));padding-left:2.75rem;padding-right:2.75rem;padding-top:1rem;padding-bottom:1rem;text-align:center;font-size:13px;font-weight:600;line-height:17px;letter-spacing:-0.02px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.btn:hover{--tw-bg-opacity:1;background-color:rgb(6 133 196 / var(--tw-bg-opacity))}@media (min-width: 1230px){.btn{padding-top:1.25rem;padding-bottom:1.25rem;font-size:1rem;line-height:1rem;letter-spacing:-0.03px}}.outline-btn{display:inline-block;border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));background-color:transparent;padding-left:4rem;padding-right:4rem;padding-top:10px;padding-bottom:10px;font-size:0.875rem;font-weight:600;line-height:1.25rem;letter-spacing:-0.02px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.outline-btn:hover{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 1230px){.outline-btn{border-width:2px;padding-top:1rem;padding-bottom:1rem;font-size:1.125rem;line-height:2rem;letter-spacing:-0.03px}}.b-btn{display:inline-block;width:100%;max-width:20rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));padding-top:1.25rem;padding-bottom:1.25rem;text-align:center;font-size:1rem;font-weight:600;text-transform:uppercase;line-height:1.5rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.b-btn:hover{--tw-bg-opacity:1;background-color:rgb(6 133 196 / var(--tw-bg-opacity))}@media (min-width: 768px){.b-btn{font-size:0.875rem;line-height:1.25rem;font-weight:700;letter-spacing:-0.02px}}@media (min-width: 1230px){.b-btn{max-width:412px;padding-top:1.75rem;padding-bottom:1.75rem;font-size:17px}}.btn:disabled{pointer-events:none;opacity:0.5}.megamenu li .sub-menu{position:absolute;left:0px;top:54px;z-index:-20;width:100%;--tw-shadow:0 14px 6px rgba(0,0,0,0.02);--tw-shadow-colored:0 14px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 1230px){.megamenu li .sub-menu{top:5rem}}.megamenu li .sub-menu h3{display:inline-block;border-bottom-width:3px;--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity));font-size:1rem;font-weight:700;text-transform:uppercase;line-height:1.75rem}.megamenu li .sub-menu ul > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.25rem * var(--tw-space-y-reverse))}.megamenu li .sub-menu ul{font-size:1rem;line-height:1.5rem;font-weight:600;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.megamenu li .sub-menu ul li a{font-size:0.875rem;line-height:1.25rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.megamenu li .sub-menu ul li a:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.megamenu li .sub-menu ul li ul.sub-sub-menu{margin-left:1.5rem;margin-top:0.5rem}.megamenu li .sub-menu ul li ul.sub-sub-menu > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.25rem * var(--tw-space-y-reverse))}.megamenu li .sub-menu ul li ul.sub-sub-menu{font-size:0.875rem;font-weight:400;line-height:1.5rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.megamenu li .sub-menu ul li ul.sub-sub-menu li a{font-size:0.75rem;line-height:1rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.megamenu li .sub-menu ul li ul.sub-sub-menu li a:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.rightmenu-link{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.rightmenu-link:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.home-question{width:100%;cursor:pointer;border-radius:10px;border-width:1px;--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity));background-color:transparent;padding-top:9px;padding-bottom:9px;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:700;line-height:15px;letter-spacing:-0.03px;--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-question:hover{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){.home-question{font-size:15px}}@media (min-width: 768px){.home-question{padding-top:0.875rem;padding-bottom:0.875rem;line-height:14px}}.self-slide{position:relative;z-index:10;white-space:nowrap;font-size:1rem;line-height:1.5rem;font-weight:700;letter-spacing:-0.02px;color:rgb(255 255 255 / 0.6)}.self-slide span{margin-top:1rem;display:block;height:0.25rem !important;width:0px;--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media (min-width: 1230px){.self-slide span{height:5px}}.home-header{background-color:transparent !important;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}@media (min-width: 768px){.home-header:hover{--tw-bg-opacity:1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity)) !important}}@media (min-width: 1230px){.home-header .burger-menu{padding-top:0px}}.home-header .home-header-logo, .home-header .home-header-text, .home-header .home-header-text svg{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-header .home-header-icon, .home-header .home-header-icon-right-first{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-header:hover .home-header-icon, .home-header:hover .home-header-icon-right, .home-header:hover .home-header-icon-right-first{background-color:rgb(0 0 0 / 0.3);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-header .home-header-icon-right-first{--tw-bg-opacity:1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity)) !important}.home-header-icon-right-first, .home-header:hover .home-header-icon-right-first{background-color:rgb(0 0 0 / 0.3) !important}.home-header .home-header-icon-right{background-color:rgb(255 255 255 / 0.3);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-header:hover .home-header-logo, .home-header:hover .home-header-text{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}@media (min-width: 768px){.home-header:hover .home-header-logo, .home-header:hover .home-header-text{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}}.home-header:hover .home-header-text svg{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.home-header .show-separator-border{border-bottom-width:0px}.swiper-slide .swiper-slides-box{position:relative;display:flex;height:100%;justify-content:space-between;gap:1.25rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow:0px 0px 6px rgba(0,0,0,0.16);--tw-shadow-colored:0px 0px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.swiper-slide .swiper-slides-star{margin-bottom:6px;display:flex;align-items:center;gap:9px;--tw-text-opacity:1;color:rgb(252 211 102 / var(--tw-text-opacity))}@media (min-width: 768px){.swiper-slide .swiper-slides-star{margin-bottom:10px}}.swiper-slide .swiper-slides-star svg{width:0.75rem}@media (min-width: 768px){.swiper-slide .swiper-slides-star svg{width:22px}}.hero-slider .swiper-pagination{justify-content:flex-start}@media (min-width: 1230px){.hero-slider .swiper-pagination{justify-content:center}}.hero-slider .swiper-pagination .swiper-pagination-bullet{margin-right:33px !important}@media (min-width: 1230px){.hero-slider .swiper-pagination .swiper-pagination-bullet{margin-right:38px !important}}.error{--tw-border-opacity:1 !important;border-color:rgb(204 75 55 / var(--tw-border-opacity)) !important;--tw-bg-opacity:1 !important;background-color:rgb(249 236 234 / var(--tw-bg-opacity)) !important;--tw-text-opacity:1 !important;color:rgb(204 75 55 / var(--tw-text-opacity)) !important;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.error::-moz-placeholder{color:rgb(204 75 55 / 0.7) !important}.error::placeholder{color:rgb(204 75 55 / 0.7) !important}.error.career-form-custom>.multiselect__tags .multiselect__input{--tw-bg-opacity:1 !important;background-color:rgb(249 236 234 / var(--tw-bg-opacity)) !important;--tw-text-opacity:1 !important;color:rgb(204 75 55 / var(--tw-text-opacity)) !important;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.error.career-form-custom>.multiselect__tags .multiselect__input::-moz-placeholder{color:rgb(204 75 55 / 0.7) !important}.error.career-form-custom>.multiselect__tags .multiselect__input::placeholder{color:rgb(204 75 55 / 0.7) !important}.error.career-form-custom .multiselect__tags>.multiselect__placeholder, .error.career-form-custom>button>svg, .error.custom-multiselect.input-dropdown .multiselect__tags>.multiselect__placeholder{--tw-text-opacity:1 !important;color:rgb(204 75 55 / var(--tw-text-opacity)) !important}.captcha-error{margin-top:0px !important;font-weight:600;--tw-text-opacity:1;color:rgb(204 75 55 / var(--tw-text-opacity));opacity:0.9}.form-input-group{position:relative}.form-input-group p{position:absolute;bottom:-1.75rem;left:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(204 75 55 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.filter-btn{position:relative;bottom:1.5rem;left:0px;margin-top:1.5rem;display:block;width:100%;--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;text-align:center;font-size:1rem;line-height:1.5rem;font-weight:500;text-transform:uppercase;line-height:1.44;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.filter-btn::after{position:absolute;left:-51vw;bottom:0px;top:0px;z-index:-1;margin-left:50%;height:100%;width:100vw;max-width:none;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);content:var(--tw-content);transition-duration:300ms}@media (min-width: 1230px){.filter-btn{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.filter-btn:hover{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.filter-btn:hover::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}}.has-overlay{position:relative}.has-overlay::before{position:absolute;left:-51vw;bottom:0px;top:0px;z-index:5;margin-left:50%;height:100%;width:100vw;max-width:none;content:var(--tw-content);background-color:rgb(255 255 255 / 0.7)}.custom-multiselect.option-position-reletive .multiselect__tags{padding-top:1rem;padding-bottom:1rem}@media (min-width: 1230px){.custom-multiselect.option-position-reletive .multiselect__tags{padding-top:23px;padding-bottom:23px}}.custom_check input[type=checkbox]:checked+label{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.apexchart-tooltip{border-width:0px !important;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.25rem;padding-right:0.25rem;padding-top:0.125rem;padding-bottom:0.125rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.sectors-slider .swiper .swiper-slide.swiper-slide-active a{display:flex;align-items:center;gap:18px;border-radius:9999px;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#ffffff;--tw-gradient-to:rgb(255 255 255 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#fbfbfd;padding-top:1.25rem;padding-bottom:1.25rem;padding-left:1.25rem;opacity:1}.sectors-slider .swiper .swiper-slide.swiper-slide-active a>div{height:2.5rem;width:2.5rem}@media (min-width: 1024px){.sectors-slider .swiper .swiper-slide.swiper-slide-active a>div{height:76px;width:76px}}.sectors-slider .swiper .swiper-slide.swiper-slide-active a>div>svg{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 1024px){.sectors-slider .swiper .swiper-slide.swiper-slide-active a>div>svg{--tw-scale-x:1.75;--tw-scale-y:1.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}.sectors-slider .swiper .swiper-slide.swiper-slide-active a>p{max-width:200px;font-size:1rem;line-height:1.5rem;line-height:18px;letter-spacing:0.03px}.sectors-slider .swiper .swiper-slide>a.inside-1{margin-left:3.5rem}.sectors-slider .swiper .swiper-slide>a.inside-2{margin-left:6rem}.sectors-slider .swiper .swiper-slide>a.inside-3{margin-left:136px}.career-slider-bullet-icon{margin-left:0.125rem;margin-right:0.125rem;height:7px !important;width:7px !important}.career-slider-bullet-icon.swiper-pagination-bullet-active{width:1.25rem !important;border-radius:5px;--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important}.custom-html-data{color:var(--tw-prose-body);max-width:65ch;}.custom-html-data :where(p):not(:where([class~=\"not-prose\"] *)){margin-top:1.25em;margin-bottom:1.25em}.custom-html-data :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.custom-html-data :where(a):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500}.custom-html-data :where(strong):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-bold);font-weight:600}.custom-html-data :where(a strong):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(blockquote strong):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(thead th strong):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(ol):not(:where([class~=\"not-prose\"] *)){list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em}.custom-html-data :where(ol[type=\"A\"]):not(:where([class~=\"not-prose\"] *)){list-style-type:upper-alpha}.custom-html-data :where(ol[type=\"a\"]):not(:where([class~=\"not-prose\"] *)){list-style-type:lower-alpha}.custom-html-data :where(ol[type=\"A\" s]):not(:where([class~=\"not-prose\"] *)){list-style-type:upper-alpha}.custom-html-data :where(ol[type=\"a\" s]):not(:where([class~=\"not-prose\"] *)){list-style-type:lower-alpha}.custom-html-data :where(ol[type=\"I\"]):not(:where([class~=\"not-prose\"] *)){list-style-type:upper-roman}.custom-html-data :where(ol[type=\"i\"]):not(:where([class~=\"not-prose\"] *)){list-style-type:lower-roman}.custom-html-data :where(ol[type=\"I\" s]):not(:where([class~=\"not-prose\"] *)){list-style-type:upper-roman}.custom-html-data :where(ol[type=\"i\" s]):not(:where([class~=\"not-prose\"] *)){list-style-type:lower-roman}.custom-html-data :where(ol[type=\"1\"]):not(:where([class~=\"not-prose\"] *)){list-style-type:decimal}.custom-html-data :where(ul):not(:where([class~=\"not-prose\"] *)){list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em}.custom-html-data :where(ol > li):not(:where([class~=\"not-prose\"] *))::marker{font-weight:400;color:var(--tw-prose-counters)}.custom-html-data :where(ul > li):not(:where([class~=\"not-prose\"] *))::marker{color:var(--tw-prose-bullets)}.custom-html-data :where(hr):not(:where([class~=\"not-prose\"] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.custom-html-data :where(blockquote):not(:where([class~=\"not-prose\"] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:0.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.custom-html-data :where(blockquote p:first-of-type):not(:where([class~=\"not-prose\"] *))::before{content:open-quote}.custom-html-data :where(blockquote p:last-of-type):not(:where([class~=\"not-prose\"] *))::after{content:close-quote}.custom-html-data :where(h1):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}.custom-html-data :where(h1 strong):not(:where([class~=\"not-prose\"] *)){font-weight:900;color:inherit}.custom-html-data :where(h2):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.custom-html-data :where(h2 strong):not(:where([class~=\"not-prose\"] *)){font-weight:800;color:inherit}.custom-html-data :where(h3):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}.custom-html-data :where(h3 strong):not(:where([class~=\"not-prose\"] *)){font-weight:700;color:inherit}.custom-html-data :where(h4):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}.custom-html-data :where(h4 strong):not(:where([class~=\"not-prose\"] *)){font-weight:700;color:inherit}.custom-html-data :where(img):not(:where([class~=\"not-prose\"] *)){margin-top:2em;margin-bottom:2em}.custom-html-data :where(figure > *):not(:where([class~=\"not-prose\"] *)){margin-top:0;margin-bottom:0}.custom-html-data :where(figcaption):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}.custom-html-data :where(code):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-code);font-weight:600;font-size:0.875em}.custom-html-data :where(code):not(:where([class~=\"not-prose\"] *))::before{content:\"`\"}.custom-html-data :where(code):not(:where([class~=\"not-prose\"] *))::after{content:\"`\"}.custom-html-data :where(a code):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(h1 code):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(h2 code):not(:where([class~=\"not-prose\"] *)){color:inherit;font-size:0.875em}.custom-html-data :where(h3 code):not(:where([class~=\"not-prose\"] *)){color:inherit;font-size:0.9em}.custom-html-data :where(h4 code):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(blockquote code):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(thead th code):not(:where([class~=\"not-prose\"] *)){color:inherit}.custom-html-data :where(pre):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}.custom-html-data :where(pre code):not(:where([class~=\"not-prose\"] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.custom-html-data :where(pre code):not(:where([class~=\"not-prose\"] *))::before{content:none}.custom-html-data :where(pre code):not(:where([class~=\"not-prose\"] *))::after{content:none}.custom-html-data :where(table):not(:where([class~=\"not-prose\"] *)){width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}.custom-html-data :where(thead):not(:where([class~=\"not-prose\"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.custom-html-data :where(thead th):not(:where([class~=\"not-prose\"] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.custom-html-data :where(tbody tr):not(:where([class~=\"not-prose\"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.custom-html-data :where(tbody tr:last-child):not(:where([class~=\"not-prose\"] *)){border-bottom-width:0}.custom-html-data :where(tbody td):not(:where([class~=\"not-prose\"] *)){vertical-align:baseline}.custom-html-data :where(tfoot):not(:where([class~=\"not-prose\"] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.custom-html-data :where(tfoot td):not(:where([class~=\"not-prose\"] *)){vertical-align:top}.custom-html-data{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.custom-html-data :where(video):not(:where([class~=\"not-prose\"] *)){margin-top:2em;margin-bottom:2em}.custom-html-data :where(figure):not(:where([class~=\"not-prose\"] *)){margin-top:2em;margin-bottom:2em}.custom-html-data :where(li):not(:where([class~=\"not-prose\"] *)){margin-top:0.5em;margin-bottom:0.5em}.custom-html-data :where(ol > li):not(:where([class~=\"not-prose\"] *)){padding-left:0.375em}.custom-html-data :where(ul > li):not(:where([class~=\"not-prose\"] *)){padding-left:0.375em}.custom-html-data :where(.prose > ul > li p):not(:where([class~=\"not-prose\"] *)){margin-top:0.75em;margin-bottom:0.75em}.custom-html-data :where(.prose > ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)){margin-top:1.25em}.custom-html-data :where(.prose > ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)){margin-bottom:1.25em}.custom-html-data :where(.prose > ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)){margin-top:1.25em}.custom-html-data :where(.prose > ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)){margin-bottom:1.25em}.custom-html-data :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)){margin-top:0.75em;margin-bottom:0.75em}.custom-html-data :where(hr + *):not(:where([class~=\"not-prose\"] *)){margin-top:0}.custom-html-data :where(h2 + *):not(:where([class~=\"not-prose\"] *)){margin-top:0}.custom-html-data :where(h3 + *):not(:where([class~=\"not-prose\"] *)){margin-top:0}.custom-html-data :where(h4 + *):not(:where([class~=\"not-prose\"] *)){margin-top:0}.custom-html-data :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)){padding-left:0}.custom-html-data :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)){padding-right:0}.custom-html-data :where(tbody td, tfoot td):not(:where([class~=\"not-prose\"] *)){padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.custom-html-data :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=\"not-prose\"] *)){padding-left:0}.custom-html-data :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=\"not-prose\"] *)){padding-right:0}.custom-html-data :where(.prose > :first-child):not(:where([class~=\"not-prose\"] *)){margin-top:0}.custom-html-data :where(.prose > :last-child):not(:where([class~=\"not-prose\"] *)){margin-bottom:0}.custom-html-data{max-width:100%;font-family:ProximaNova;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.custom-html-data :is(:where(h1, h2, h3, h4, h5, h6, th):not(:where([class~=\"not-prose\"] *))){font-family:ProximaNova;font-weight:700}.custom-html-data :is(:where(strong):not(:where([class~=\"not-prose\"] *))){font-weight:700}.custom-html-data :is(:where(ol):not(:where([class~=\"not-prose\"] *))){list-style-type:decimal}.custom-html-data :is(:where(ul):not(:where([class~=\"not-prose\"] *))){list-style-type:disc}.custom-html-data p{margin-bottom:25px !important;margin-top:0px !important}.custom-html-data a{font-weight:400;-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-text-decoration-color:#00ADFF;text-decoration-color:#00ADFF}.custom-html-data a:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none !important;text-decoration-line:none !important}.custom-html-data ul *::marker{color:rgb(0 0 0 )}.custom-html-data ul::marker{color:rgb(0 0 0 )}.custom-html-data li{padding-left:0px}.custom-html-data :first-of-type{margin-top:0px !important}.custom-html-data li:before{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.custom-html-data a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.custom-multiselect.career-form-custom:hover{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.custom-multiselect.career-form-custom:hover .multiselect__placeholder, .custom-multiselect.career-form-custom:hover button svg{--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.\\!fixed{position:fixed !important}.absolute{position:absolute}.\\!absolute{position:absolute !important}.relative{position:relative}.sticky{position:sticky}.-inset-5{top:-1.25rem;right:-1.25rem;bottom:-1.25rem;left:-1.25rem}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.inset-x-0{left:0px;right:0px}.left-0{left:0px}.top-0{top:0px}.bottom-0{bottom:0px}.left-2\\.5{left:0.625rem}.top-2\\.5{top:0.625rem}.left-2{left:0.5rem}.top-2{top:0.5rem}.right-0{right:0px}.right-4{right:1rem}.top-4{top:1rem}.-left-1\\/3{left:-33.333333%}.right-2\\.5{right:0.625rem}.right-2{right:0.5rem}.right-\\[20px\\]{right:20px}.-left-4{left:-1rem}.left-\\[-50vw\\]{left:-50vw}.top-\\[55px\\]{top:55px}.top-\\[54px\\]{top:54px}.top-\\[56px\\]{top:56px}.\\!left-0{left:0px !important}.\\!top-11{top:2.75rem !important}.-left-20{left:-5rem}.top-1\\/2{top:50%}.top-\\[2px\\]{top:2px}.top-28{top:7rem}.-left-3{left:-0.75rem}.-top-4{top:-1rem}.-top-20{top:-5rem}.left-10{left:2.5rem}.-top-5{top:-1.25rem}.-right-6{right:-1.5rem}.top-5{top:1.25rem}.right-16{right:4rem}.-top-24{top:-6rem}.-left-8{left:-2rem}.bottom-72{bottom:18rem}.\\!top-\\[55px\\]{top:55px !important}.-left-full{left:-100%}.left-\\[-84\\%\\]{left:-84%}.\\!-left-full{left:-100% !important}.\\!-left-\\[200\\%\\]{left:-200% !important}.left-full{left:100%}.\\!top-\\[33px\\]{top:33px !important}.right-6{right:1.5rem}.-top-\\[5px\\]{top:-5px}.-left-\\[40\\%\\]{left:-40%}.-left-\\[30\\%\\]{left:-30%}.-top-\\[100px\\]{top:-100px}.bottom-10{bottom:2.5rem}.right-20{right:5rem}.\\!top-0{top:0px !important}.\\!-right-1{right:-0.25rem !important}.-top-16{top:-4rem}.-bottom-12{bottom:-3rem}.bottom-5{bottom:1.25rem}.z-20{z-index:20}.z-50{z-index:50}.z-30{z-index:30}.-z-\\[1\\]{z-index:-1}.z-0{z-index:0}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.z-\\[60\\]{z-index:60}.z-\\[10\\]{z-index:10}.-z-0{z-index:0}.z-\\[8\\]{z-index:8}.z-\\[9\\]{z-index:9}.\\!z-30{z-index:30 !important}.-z-10{z-index:-10}.z-40{z-index:40}.order-2{order:2}.\\!order-1{order:1 !important}.\\!order-2{order:2 !important}.order-1{order:1}.col-span-2{grid-column:span 2 / span 2}.col-span-12{grid-column:span 12 / span 12}.col-span-full{grid-column:1 / -1}.col-span-10{grid-column:span 10 / span 10}.col-span-3{grid-column:span 3 / span 3}.col-span-6{grid-column:span 6 / span 6}.col-span-9{grid-column:span 9 / span 9}.float-right{float:right}.float-left{float:left}.float-none{float:none}.clear-both{clear:both}.m-auto{margin:auto}.m-0{margin:0px}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.\\!my-0{margin-top:0px !important;margin-bottom:0px !important}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-20{margin-top:5rem;margin-bottom:5rem}.my-7{margin-top:1.75rem;margin-bottom:1.75rem}.mx-5{margin-left:1.25rem;margin-right:1.25rem}.my-\\[18px\\]{margin-top:18px;margin-bottom:18px}.my-0{margin-top:0px;margin-bottom:0px}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-1\\.5{margin-left:0.375rem;margin-right:0.375rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-16{margin-top:4rem;margin-bottom:4rem}.mt-\\[106px\\]{margin-top:106px}.mt-\\[114px\\]{margin-top:114px}.mt-\\[141px\\]{margin-top:141px}.mt-\\[42px\\]{margin-top:42px}.mb-6{margin-bottom:1.5rem}.mb-3{margin-bottom:0.75rem}.mb-7{margin-bottom:1.75rem}.ml-4{margin-left:1rem}.\\!mt-10{margin-top:2.5rem !important}.mb-\\[10px\\]{margin-bottom:10px}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.mb-\\[71px\\]{margin-bottom:71px}.mb-10{margin-bottom:2.5rem}.mb-\\[19px\\]{margin-bottom:19px}.mb-9{margin-bottom:2.25rem}.mt-10{margin-top:2.5rem}.mt-3{margin-top:0.75rem}.-mr-3{margin-right:-0.75rem}.-ml-3{margin-left:-0.75rem}.mt-\\[71px\\]{margin-top:71px}.mb-\\[59px\\]{margin-bottom:59px}.mt-4{margin-top:1rem}.mt-12{margin-top:3rem}.ml-5{margin-left:1.25rem}.mb-\\[18px\\]{margin-bottom:18px}.mt-8{margin-top:2rem}.mt-20{margin-top:5rem}.mt-6{margin-top:1.5rem}.mb-0{margin-bottom:0px}.mt-0{margin-top:0px}.mb-\\[33px\\]{margin-bottom:33px}.mb-12{margin-bottom:3rem}.mr-10{margin-right:2.5rem}.mb-2{margin-bottom:0.5rem}.mt-2{margin-top:0.5rem}.mb-1\\.5{margin-bottom:0.375rem}.mb-1{margin-bottom:0.25rem}.mr-5{margin-right:1.25rem}.mr-2{margin-right:0.5rem}.mr-1{margin-right:0.25rem}.mb-14{margin-bottom:3.5rem}.mr-4{margin-right:1rem}.mb-3\\.5{margin-bottom:0.875rem}.ml-auto{margin-left:auto}.mb-16{margin-bottom:4rem}.mb-60{margin-bottom:15rem}.mt-24{margin-top:6rem}.mb-2\\.5{margin-bottom:0.625rem}.-mt-\\[42px\\]{margin-top:-42px}.\\!mt-\\[36px\\]{margin-top:36px !important}.mt-auto{margin-top:auto}.mb-\\[17px\\]{margin-bottom:17px}.mt-\\[22px\\]{margin-top:22px}.-mt-\\[3px\\]{margin-top:-3px}.mt-16{margin-top:4rem}.mt-5{margin-top:1.25rem}.mb-24{margin-bottom:6rem}.mb-\\[26px\\]{margin-bottom:26px}.ml-\\[50\\%\\]{margin-left:50%}.mt-\\[5px\\]{margin-top:5px}.mt-\\[3px\\]{margin-top:3px}.mb-\\[5px\\]{margin-bottom:5px}.mt-1{margin-top:0.25rem}.mt-\\[37px\\]{margin-top:37px}.mt-\\[18px\\]{margin-top:18px}.mt-\\[30px\\]{margin-top:30px}.mt-\\[58px\\]{margin-top:58px}.mt-\\[51px\\]{margin-top:51px}.mt-\\[45px\\]{margin-top:45px}.mb-\\[30px\\]{margin-bottom:30px}.mb-\\[31px\\]{margin-bottom:31px}.mt-3\\.5{margin-top:0.875rem}.ml-1{margin-left:0.25rem}.mt-\\[9px\\]{margin-top:9px}.mt-\\[31px\\]{margin-top:31px}.mt-\\[13px\\]{margin-top:13px}.mb-\\[25px\\]{margin-bottom:25px}.mb-\\[52px\\]{margin-bottom:52px}.-mt-24{margin-top:-6rem}.mr-3{margin-right:0.75rem}.mr-1\\.5{margin-right:0.375rem}.ml-6{margin-left:1.5rem}.mb-\\[14px\\]{margin-bottom:14px}.mt-40{margin-top:10rem}.mb-\\[51px\\]{margin-bottom:51px}.mt-\\[25px\\]{margin-top:25px}.mt-\\[23px\\]{margin-top:23px}.mb-\\[47px\\]{margin-bottom:47px}.mt-\\[55px\\]{margin-top:55px}.ml-2{margin-left:0.5rem}.mt-11{margin-top:2.75rem}.mr-11{margin-right:2.75rem}.mr-0{margin-right:0px}.mb-\\[34px\\]{margin-bottom:34px}.mb-\\[53px\\]{margin-bottom:53px}.mt-\\[-10px\\]{margin-top:-10px}.mt-2\\.5{margin-top:0.625rem}.ml-3{margin-left:0.75rem}.mr-\\[3px\\]{margin-right:3px}.\\!mt-0{margin-top:0px !important}.mb-\\[15px\\]{margin-bottom:15px}.\\!ml-0{margin-left:0px !important}.ml-0{margin-left:0px}.\\!mb-0{margin-bottom:0px !important}.mt-\\[230px\\]{margin-top:230px}.-mt-36{margin-top:-9rem}.mb-\\[46px\\]{margin-bottom:46px}.-ml-10{margin-left:-2.5rem}.mb-\\[57px\\]{margin-bottom:57px}.ml-\\[150px\\]{margin-left:150px}.mr-\\[2px\\]{margin-right:2px}.mt-1\\.5{margin-top:0.375rem}.mb-\\[41px\\]{margin-bottom:41px}.mt-7{margin-top:1.75rem}.mt-32{margin-top:8rem}.mb-\\[73px\\]{margin-bottom:73px}.mt-36{margin-top:9rem}.mt-\\[19px\\]{margin-top:19px}.block{display:block}.\\!block{display:block !important}.inline-block{display:inline-block}.flex{display:flex}.\\!flex{display:flex !important}.inline-flex{display:inline-flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.\\!hidden{display:none !important}.h-full{height:100%}.\\!h-6{height:1.5rem !important}.h-\\[62px\\]{height:62px}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-\\[50px\\]{height:50px}.h-\\[400px\\]{height:400px}.h-\\[161px\\]{height:161px}.h-px{height:1px}.h-\\[88px\\]{height:88px}.h-12{height:3rem}.h-48{height:12rem}.h-\\[201px\\]{height:201px}.h-\\[253px\\]{height:253px}.h-\\[199px\\]{height:199px}.h-1{height:0.25rem}.h-screen{height:100vh}.h-auto{height:auto}.h-28{height:7rem}.h-\\[125px\\]{height:125px}.h-\\[calc\\(100\\%-125px\\)\\]{height:calc(100% - 125px)}.h-\\[477px\\]{height:477px}.h-5{height:1.25rem}.h-\\[calc\\(100vh-128px\\)\\]{height:calc(100vh - 128px)}.h-\\[13px\\]{height:13px}.h-\\[150px\\]{height:150px}.h-\\[1px\\]{height:1px}.h-3{height:0.75rem}.h-4{height:1rem}.h-\\[40px\\]{height:40px}.h-\\[25px\\]{height:25px}.h-\\[45px\\]{height:45px}.h-\\[180px\\]{height:180px}.h-8{height:2rem}.h-\\[80vh\\]{height:80vh}.h-\\[95\\%\\]{height:95%}.h-80{height:20rem}.h-24{height:6rem}.h-\\[15px\\]{height:15px}.h-\\[2px\\]{height:2px}.h-\\[236px\\]{height:236px}.h-20{height:5rem}.\\!h-full{height:100% !important}.h-9{height:2.25rem}.h-\\[151px\\]{height:151px}.h-\\[295px\\]{height:295px}.h-\\[167px\\]{height:167px}.h-\\[290px\\]{height:290px}.h-40{height:10rem}.\\!h-auto{height:auto !important}.h-\\[200px\\]{height:200px}.h-3\\.5{height:0.875rem}.\\!h-5{height:1.25rem !important}.h-11{height:2.75rem}.h-\\[250px\\]{height:250px}.h-\\[17px\\]{height:17px}.h-\\[46px\\]{height:46px}.h-32{height:8rem}.h-\\[505px\\]{height:505px}.h-\\[770px\\]{height:770px}.h-16{height:4rem}.h-\\[700px\\]{height:700px}.h-\\[19px\\]{height:19px}.h-\\[52px\\]{height:52px}.h-\\[23px\\]{height:23px}.h-0{height:0px}.h-\\[115px\\]{height:115px}.h-\\[89px\\]{height:89px}.h-\\[calc\\(100\\%-192px\\)\\]{height:calc(100% - 192px)}.h-7{height:1.75rem}.h-72{height:18rem}.h-\\[229px\\]{height:229px}.\\!h-72{height:18rem !important}.h-\\[170px\\]{height:170px}.h-\\[242px\\]{height:242px}.h-\\[24px\\]{height:24px}.max-h-\\[calc\\(100vh-120px\\)\\]{max-height:calc(100vh - 120px)}.max-h-\\[calc\\(100vh-128px\\)\\]{max-height:calc(100vh - 128px)}.max-h-\\[102px\\]{max-height:102px}.max-h-40{max-height:10rem}.max-h-\\[370px\\]{max-height:370px}.\\!max-h-\\[470px\\]{max-height:470px !important}.max-h-\\[72px\\]{max-height:72px}.\\!max-h-full{max-height:100% !important}.min-h-\\[calc\\(100vh-530px\\)\\]{min-height:calc(100vh - 530px)}.min-h-\\[68px\\]{min-height:68px}.min-h-\\[72px\\]{min-height:72px}.min-h-\\[145px\\]{min-height:145px}.min-h-\\[42px\\]{min-height:42px}.min-h-\\[54px\\]{min-height:54px}.\\!min-h-\\[42rem\\]{min-height:42rem !important}.min-h-\\[38rem\\]{min-height:38rem}.min-h-full{min-height:100%}.w-full{width:100%}.\\!w-6{width:1.5rem !important}.w-1\\/2{width:50%}.w-\\[62px\\]{width:62px}.w-10{width:2.5rem}.w-6{width:1.5rem}.w-5{width:1.25rem}.w-4{width:1rem}.w-\\[3px\\]{width:3px}.w-\\[88px\\]{width:88px}.w-12{width:3rem}.w-\\[5px\\]{width:5px}.w-2{width:0.5rem}.w-auto{width:auto}.w-1\\/5{width:20%}.w-7{width:1.75rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-\\[90\\%\\]{width:90%}.w-\\[1px\\]{width:1px}.w-\\[40px\\]{width:40px}.w-\\[25px\\]{width:25px}.w-\\[45px\\]{width:45px}.w-\\[271px\\]{width:271px}.w-44{width:11rem}.w-8{width:2rem}.w-\\[15\\%\\]{width:15%}.w-\\[100vw\\]{width:100vw}.w-24{width:6rem}.w-\\[15px\\]{width:15px}.w-\\[940px\\]{width:940px}.w-\\[295px\\]{width:295px}.w-\\[72px\\]{width:72px}.w-\\[113px\\]{width:113px}.w-20{width:5rem}.w-\\[67px\\]{width:67px}.w-11{width:2.75rem}.w-\\[52px\\]{width:52px}.w-\\[200px\\]{width:200px}.w-36{width:9rem}.w-3\\.5{width:0.875rem}.w-\\[50px\\]{width:50px}.\\!w-5{width:1.25rem !important}.w-\\[53px\\]{width:53px}.w-px{width:1px}.w-\\[167px\\]{width:167px}.w-\\[46px\\]{width:46px}.w-fit{width:-moz-fit-content;width:fit-content}.w-\\[70\\%\\]{width:70%}.\\!w-auto{width:auto !important}.w-16{width:4rem}.w-1\\/3{width:33.333333%}.w-1\\/4{width:25%}.w-\\[17px\\]{width:17px}.w-\\[13px\\]{width:13px}.\\!w-full{width:100% !important}.w-10\\/12{width:83.333333%}.w-\\[93px\\]{width:93px}.w-\\[22px\\]{width:22px}.w-\\[115px\\]{width:115px}.w-3\\/5{width:60%}.w-\\[110px\\]{width:110px}.min-w-\\[300px\\]{min-width:300px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[128px\\]{min-width:128px}.min-w-\\[100px\\]{min-width:100px}.max-w-\\[702px\\]{max-width:702px}.max-w-\\[300px\\]{max-width:300px}.max-w-\\[925px\\]{max-width:925px}.max-w-\\[275px\\]{max-width:275px}.max-w-lg{max-width:32rem}.max-w-\\[510px\\]{max-width:510px}.max-w-\\[90\\%\\]{max-width:90%}.max-w-2xl{max-width:42rem}.max-w-\\[415px\\]{max-width:415px}.max-w-\\[377px\\]{max-width:377px}.max-w-\\[295px\\]{max-width:295px}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[430px\\]{max-width:430px}.max-w-4xl{max-width:56rem}.max-w-\\[990px\\]{max-width:990px}.max-w-\\[320px\\]{max-width:320px}.max-w-\\[250px\\]{max-width:250px}.max-w-full{max-width:100%}.max-w-\\[171px\\]{max-width:171px}.max-w-none{max-width:none}.max-w-\\[445px\\]{max-width:445px}.max-w-\\[180px\\]{max-width:180px}.max-w-\\[637px\\]{max-width:637px}.max-w-\\[498px\\]{max-width:498px}.max-w-\\[800px\\]{max-width:800px}.max-w-\\[1440px\\]{max-width:1440px}.max-w-\\[633px\\]{max-width:633px}.max-w-\\[490px\\]{max-width:490px}.max-w-\\[486px\\]{max-width:486px}.max-w-\\[820px\\]{max-width:820px}.max-w-\\[388px\\]{max-width:388px}.\\!max-w-max{max-width:-moz-max-content !important;max-width:max-content !important}.max-w-\\[332px\\]{max-width:332px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[350px\\]{max-width:350px}.max-w-\\[390px\\]{max-width:390px}.max-w-\\[1198px\\]{max-width:1198px}.\\!max-w-full{max-width:100% !important}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[152px\\]{max-width:152px}.max-w-\\[404px\\]{max-width:404px}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[1236px\\]{max-width:1236px}.\\!max-w-\\[520px\\]{max-width:520px !important}.max-w-\\[780px\\]{max-width:780px}.max-w-\\[950px\\]{max-width:950px}.flex-none{flex:none}.flex-1{flex:1 1 0%}.flex-initial{flex:0 1 auto}.\\!flex-auto{flex:1 1 auto !important}.flex-auto{flex:1 1 auto}.\\!flex-none{flex:none !important}.flex-shrink-0{flex-shrink:0}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.origin-top-right{transform-origin:top right}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[200\\%\\]{--tw-translate-y:200%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate:0deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!rotate-180{--tw-rotate:180deg !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important}.-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate:90deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-150{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!transform-none{transform:none !important}@keyframes bounce{0%, 100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}.animate-bounce{animation:bounce 1s infinite}.cursor-pointer{cursor:pointer}.\\!cursor-pointer{cursor:pointer !important}.cursor-auto{cursor:auto}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.list-none{list-style-type:none}.break-inside-avoid{-moz-column-break-inside:avoid;break-inside:avoid}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr))}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.grid-cols-7{grid-template-columns:repeat(7, minmax(0, 1fr))}.grid-rows-3{grid-template-rows:repeat(3, minmax(0, 1fr))}.grid-rows-5{grid-template-rows:repeat(5, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.content-center{align-content:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-3{gap:0.75rem}.gap-\\[10px\\]{gap:10px}.gap-\\[33px\\]{gap:33px}.gap-4{gap:1rem}.gap-2\\.5{gap:0.625rem}.gap-2{gap:0.5rem}.gap-5{gap:1.25rem}.gap-10{gap:2.5rem}.gap-\\[5px\\]{gap:5px}.gap-6{gap:1.5rem}.gap-\\[17px\\]{gap:17px}.gap-1\\.5{gap:0.375rem}.gap-1{gap:0.25rem}.gap-7{gap:1.75rem}.gap-\\[6px\\]{gap:6px}.gap-\\[15px\\]{gap:15px}.gap-\\[3px\\]{gap:3px}.gap-\\[51px\\]{gap:51px}.gap-3\\.5{gap:0.875rem}.gap-\\[30px\\]{gap:30px}.\\!gap-1{gap:0.25rem !important}.gap-11{gap:2.75rem}.gap-8{gap:2rem}.gap-24{gap:6rem}.gap-y-3{row-gap:0.75rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-y-2{row-gap:0.5rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-y-1{row-gap:0.25rem}.gap-y-6{row-gap:1.5rem}.space-y-\\[15px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(15px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(15px * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-5 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.space-y-8 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.space-y-20 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(5rem * var(--tw-space-y-reverse))}.space-y-\\[29px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(29px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(29px * var(--tw-space-y-reverse))}.space-y-9 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.25rem * var(--tw-space-y-reverse))}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.space-x-\\[8px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-x-\\[9px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(9px * var(--tw-space-x-reverse));margin-left:calc(9px * calc(1 - var(--tw-space-x-reverse)))}.\\!space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0 !important;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse))) !important;margin-bottom:calc(0.75rem * var(--tw-space-y-reverse)) !important}.space-y-\\[19px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(19px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(19px * var(--tw-space-y-reverse))}.divide-y > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-x > :not([hidden]) ~ :not([hidden]){--tw-divide-x-reverse:0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.divide-gray-300 > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(209 213 219 / var(--tw-divide-opacity))}.divide-\\[\\#d5d5d5\\] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(213 213 213 / var(--tw-divide-opacity))}.divide-gray-100 > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.divide-\\[\\#e6e6e6\\] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(230 230 230 / var(--tw-divide-opacity))}.divide-\\[\\#707070\\]\\/20 > :not([hidden]) ~ :not([hidden]){border-color:rgb(112 112 112 / 0.2)}.divide-\\[\\#707070\\]\\/50 > :not([hidden]) ~ :not([hidden]){border-color:rgb(112 112 112 / 0.5)}.divide-\\[\\#E6E6E6\\] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(230 230 230 / var(--tw-divide-opacity))}.self-end{align-self:flex-end}.self-stretch{align-self:stretch}.justify-self-center{justify-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.\\!overflow-hidden{overflow:hidden !important}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.whitespace-normal{white-space:normal}.\\!whitespace-normal{white-space:normal !important}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-line{white-space:pre-line}.rounded-full{border-radius:9999px}.rounded-md{border-radius:0.375rem}.rounded{border-radius:0.25rem}.rounded-\\[5px\\]{border-radius:5px}.rounded-none{border-radius:0px}.rounded-\\[3px\\]{border-radius:3px}.rounded-\\[100px\\]{border-radius:100px}.rounded-\\[42px\\]{border-radius:42px}.rounded-2xl{border-radius:1rem}.rounded-\\[11px\\]{border-radius:11px}.rounded-xl{border-radius:0.75rem}.rounded-lg{border-radius:0.5rem}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[1px\\]{border-radius:1px}.\\!rounded{border-radius:0.25rem !important}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.rounded-b-none{border-bottom-right-radius:0px;border-bottom-left-radius:0px}.rounded-t-none{border-top-left-radius:0px;border-top-right-radius:0px}.rounded-r-none{border-top-right-radius:0px;border-bottom-right-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-t-lg{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.rounded-bl-none{border-bottom-left-radius:0px}.rounded-br-none{border-bottom-right-radius:0px}.border{border-width:1px}.border-2{border-width:2px}.\\!border-0{border-width:0px !important}.border-0{border-width:0px}.\\!border{border-width:1px !important}.border-\\[5px\\]{border-width:5px}.border-l-\\[3px\\]{border-left-width:3px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-b-\\[6px\\]{border-bottom-width:6px}.border-b-\\[3px\\]{border-bottom-width:3px}.border-b-2{border-bottom-width:2px}.border-l-\\[5px\\]{border-left-width:5px}.border-t-2{border-top-width:2px}.border-b-\\[7px\\]{border-bottom-width:7px}.border-b-\\[5px\\]{border-bottom-width:5px}.border-r-\\[5px\\]{border-right-width:5px}.border-b-\\[2px\\]{border-bottom-width:2px}.\\!border-b-0{border-bottom-width:0px !important}.border-r{border-right-width:1px}.border-none{border-style:none}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-primary{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity))}.border-\\[\\#d5d5d5\\]{--tw-border-opacity:1;border-color:rgb(213 213 213 / var(--tw-border-opacity))}.border-\\[\\#000\\]\\/\\[0\\.08\\]{border-color:rgb(0 0 0 / 0.08)}.border-\\[\\#cfcfcf\\]{--tw-border-opacity:1;border-color:rgb(207 207 207 / var(--tw-border-opacity))}.border-\\[\\#cfcfcf\\]\\/60{border-color:rgb(207 207 207 / 0.6)}.border-black\\/10{border-color:rgb(0 0 0 / 0.1)}.\\!border-black\\/20{border-color:rgb(0 0 0 / 0.2) !important}.border-\\[\\#707070\\]\\/50{border-color:rgb(112 112 112 / 0.5)}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-\\[\\#f9ecea\\]{--tw-border-opacity:1;border-color:rgb(249 236 234 / var(--tw-border-opacity))}.border-\\[\\#646464\\]\\/25{border-color:rgb(100 100 100 / 0.25)}.border-\\[\\#ebebeb\\]{--tw-border-opacity:1;border-color:rgb(235 235 235 / var(--tw-border-opacity))}.border-\\[\\#dfdfdf\\]{--tw-border-opacity:1;border-color:rgb(223 223 223 / var(--tw-border-opacity))}.border-\\[\\#e8e8e8\\]{--tw-border-opacity:1;border-color:rgb(232 232 232 / var(--tw-border-opacity))}.border-\\[\\#f4f5f7\\]{--tw-border-opacity:1;border-color:rgb(244 245 247 / var(--tw-border-opacity))}.border-\\[\\#586376\\]{--tw-border-opacity:1;border-color:rgb(88 99 118 / var(--tw-border-opacity))}.border-\\[\\#CFCFCF\\]{--tw-border-opacity:1;border-color:rgb(207 207 207 / var(--tw-border-opacity))}.border-\\[\\#ededed\\]{--tw-border-opacity:1;border-color:rgb(237 237 237 / var(--tw-border-opacity))}.border-\\[\\#f1f1f1\\]{--tw-border-opacity:1;border-color:rgb(241 241 241 / var(--tw-border-opacity))}.border-\\[\\#1a9cea\\]{--tw-border-opacity:1;border-color:rgb(26 156 234 / var(--tw-border-opacity))}.border-\\[\\#bfbfbf\\]{--tw-border-opacity:1;border-color:rgb(191 191 191 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-\\[\\#E6E6E6\\]{--tw-border-opacity:1;border-color:rgb(230 230 230 / var(--tw-border-opacity))}.border-\\[\\#BFBFBF\\]\\/40{border-color:rgb(191 191 191 / 0.4)}.\\!border-primary{--tw-border-opacity:1 !important;border-color:rgb(0 173 255 / var(--tw-border-opacity)) !important}.border-white\\/60{border-color:rgb(255 255 255 / 0.6)}.border-\\[\\#807d7d\\]{--tw-border-opacity:1;border-color:rgb(128 125 125 / var(--tw-border-opacity))}.border-\\[\\#1A9CEA\\]{--tw-border-opacity:1;border-color:rgb(26 156 234 / var(--tw-border-opacity))}.border-\\[\\#e6e6e6\\]{--tw-border-opacity:1;border-color:rgb(230 230 230 / var(--tw-border-opacity))}.border-primary\\/10{border-color:rgb(0 173 255 / 0.1)}.border-green{--tw-border-opacity:1;border-color:rgb(89 205 83 / var(--tw-border-opacity))}.border-\\[\\#ede7e7\\]{--tw-border-opacity:1;border-color:rgb(237 231 231 / var(--tw-border-opacity))}.border-\\[\\#707070\\]\\/20{border-color:rgb(112 112 112 / 0.2)}.border-\\[\\#d8d8d8\\]{--tw-border-opacity:1;border-color:rgb(216 216 216 / var(--tw-border-opacity))}.border-\\[\\#707070\\]\\/10{border-color:rgb(112 112 112 / 0.1)}.border-\\[\\#e2e2e2\\]{--tw-border-opacity:1;border-color:rgb(226 226 226 / var(--tw-border-opacity))}.border-white\\/20{border-color:rgb(255 255 255 / 0.2)}.border-\\[\\#707070\\]{--tw-border-opacity:1;border-color:rgb(112 112 112 / var(--tw-border-opacity))}.\\!border-green{--tw-border-opacity:1 !important;border-color:rgb(89 205 83 / var(--tw-border-opacity)) !important}.border-\\[\\#1eb1fc\\]{--tw-border-opacity:1;border-color:rgb(30 177 252 / var(--tw-border-opacity))}.border-r-transparent{border-right-color:transparent}.bg-\\[\\#FBFBFD\\]{--tw-bg-opacity:1;background-color:rgb(251 251 253 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-black\\/30{background-color:rgb(0 0 0 / 0.3)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.bg-\\[\\#d5d5d5\\]{--tw-bg-opacity:1;background-color:rgb(213 213 213 / var(--tw-bg-opacity))}.bg-\\[\\#fbfbfd\\]{--tw-bg-opacity:1;background-color:rgb(251 251 253 / var(--tw-bg-opacity))}.bg-\\[\\#D5D5D5\\]{--tw-bg-opacity:1;background-color:rgb(213 213 213 / var(--tw-bg-opacity))}.bg-\\[\\#fafafa\\]{--tw-bg-opacity:1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.bg-black\\/10{background-color:rgb(0 0 0 / 0.1)}.bg-primary\\/20{background-color:rgb(0 173 255 / 0.2)}.bg-\\[\\#646464\\]\\/25{background-color:rgb(100 100 100 / 0.25)}.bg-\\[\\#DFDFDF\\]{--tw-bg-opacity:1;background-color:rgb(223 223 223 / var(--tw-bg-opacity))}.bg-\\[\\#F8F8F8\\]{--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))}.bg-\\[\\#ffffff\\]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[\\#f4f5f7\\]{--tw-bg-opacity:1;background-color:rgb(244 245 247 / var(--tw-bg-opacity))}.bg-\\[\\#e8e8e8\\]{--tw-bg-opacity:1;background-color:rgb(232 232 232 / var(--tw-bg-opacity))}.bg-\\[\\#00a1f1\\]{--tw-bg-opacity:1;background-color:rgb(0 161 241 / var(--tw-bg-opacity))}.bg-black\\/50{background-color:rgb(0 0 0 / 0.5)}.bg-\\[\\#FBFBFD\\]\\/50{background-color:rgb(251 251 253 / 0.5)}.bg-\\[\\#F3F3F3\\]{--tw-bg-opacity:1;background-color:rgb(243 243 243 / var(--tw-bg-opacity))}.bg-primary\\/80{background-color:rgb(0 173 255 / 0.8)}.bg-primary-700{--tw-bg-opacity:1;background-color:rgb(6 133 196 / var(--tw-bg-opacity))}.bg-\\[\\#1f3244\\]\\/\\[0\\.41\\]{background-color:rgb(31 50 68 / 0.41)}.bg-primary\\/\\[0\\.71\\]{background-color:rgb(0 173 255 / 0.71)}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-\\[\\#294366\\]\\/\\[0\\.49\\]{background-color:rgb(41 67 102 / 0.49)}.bg-\\[\\#f9ecea\\]{--tw-bg-opacity:1;background-color:rgb(249 236 234 / var(--tw-bg-opacity))}.\\!bg-primary{--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important}.bg-\\[\\#aeaeaf\\]\\/30{background-color:rgb(174 174 175 / 0.3)}.bg-white\\/\\[0\\.27\\]{background-color:rgb(255 255 255 / 0.27)}.bg-\\[\\#f4f4f8\\]{--tw-bg-opacity:1;background-color:rgb(244 244 248 / var(--tw-bg-opacity))}.bg-white\\/30{background-color:rgb(255 255 255 / 0.3)}.bg-black-700{--tw-bg-opacity:1;background-color:rgb(53 53 53 / var(--tw-bg-opacity))}.bg-\\[\\#e7f5ff\\]{--tw-bg-opacity:1;background-color:rgb(231 245 255 / var(--tw-bg-opacity))}.bg-\\[\\#202A36\\]{--tw-bg-opacity:1;background-color:rgb(32 42 54 / var(--tw-bg-opacity))}.bg-green{--tw-bg-opacity:1;background-color:rgb(89 205 83 / var(--tw-bg-opacity))}.bg-green\\/\\[0\\.15\\]{background-color:rgb(89 205 83 / 0.15)}.bg-\\[\\#0288d1\\]{--tw-bg-opacity:1;background-color:rgb(2 136 209 / var(--tw-bg-opacity))}.bg-\\[\\#707070\\]\\/50{background-color:rgb(112 112 112 / 0.5)}.bg-white\\/90{background-color:rgb(255 255 255 / 0.9)}.bg-\\[\\#FBFBFD\\]\\/80{background-color:rgb(251 251 253 / 0.8)}.bg-opacity-20{--tw-bg-opacity:0.2}.bg-\\[url\\(\\/assets\\/img\\/book-consult-girl\\.webp\\)\\]{background-image:url(/assets/img/book-consult-girl.webp)}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.bg-gradient-to-t{background-image:linear-gradient(to top, var(--tw-gradient-stops))}.bg-\\[url\\(\\'\\/assets\\/img\\/refund-policy-top\\.png\\'\\)\\]{background-image:url('/assets/img/refund-policy-top.png')}.bg-\\[url\\(\\'\\/assets\\/img\\/terms-and-conditions-top\\.png\\'\\)\\]{background-image:url('/assets/img/terms-and-conditions-top.png')}.bg-\\[url\\(\\/assets\\/img\\/our_client_bg\\.png\\)\\]{background-image:url(/assets/img/our_client_bg.png)}.bg-\\[url\\(\\/assets\\/img\\/review-video-image\\.webp\\)\\]{background-image:url(/assets/img/review-video-image.webp)}.bg-\\[url\\(\\/assets\\/img\\/software_google_ad_banner\\.webp\\)\\]{background-image:url(/assets/img/software_google_ad_banner.webp)}.bg-\\[url\\(\\/assets\\/img\\/los_angeles_banner\\.jpg\\)\\]{background-image:url(/assets/img/los_angeles_banner.jpg)}.bg-\\[url\\(\\/assets\\/img\\/mobile_image_16\\.jpg\\)\\]{background-image:url(/assets/img/mobile_image_16.jpg)}.bg-\\[url\\(\\/assets\\/img\\/selection-arrow-dark\\.svg\\)\\]{background-image:url(/assets/img/selection-arrow-dark.svg)}.bg-\\[url\\(\\/assets\\/img\\/girl-background-mobile\\.png\\)\\]{background-image:url(/assets/img/girl-background-mobile.png)}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.from-\\[\\#2b3746\\]{--tw-gradient-from:#2b3746;--tw-gradient-to:rgb(43 55 70 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-\\[\\#202a36\\]{--tw-gradient-from:#202a36;--tw-gradient-to:rgb(32 42 54 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-\\[\\#2B3746\\]\\/70{--tw-gradient-from:rgb(43 55 70 / 0.7);--tw-gradient-to:rgb(43 55 70 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-\\[\\#313c4a\\]\\/0{--tw-gradient-from:rgb(49 60 74 / 0);--tw-gradient-to:rgb(49 60 74 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-\\[\\#202A36\\]{--tw-gradient-from:#202A36;--tw-gradient-to:rgb(32 42 54 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.via-transparent{--tw-gradient-to:rgb(0 0 0 / 0);--tw-gradient-stops:var(--tw-gradient-from), transparent, var(--tw-gradient-to)}.via-\\[\\#0b0d11\\]\\/\\[0\\.14\\]{--tw-gradient-to:rgb(11 13 17 / 0);--tw-gradient-stops:var(--tw-gradient-from), rgb(11 13 17 / 0.14), var(--tw-gradient-to)}.to-\\[\\#0a0c0f\\]{--tw-gradient-to:#0a0c0f}.bg-cover{background-size:cover}.bg-right-top{background-position:right top}.bg-\\[right_32\\%_top\\]{background-position:right 32% top}.bg-center{background-position:center}.bg-\\[right_48\\%_top\\]{background-position:right 48% top}.bg-\\[top_36\\%_center\\]{background-position:top 36% center}.bg-\\[right_20\\%_top\\]{background-position:right 20% top}.bg-\\[32\\%_top\\]{background-position:32% top}.bg-\\[center_top_25\\%\\]{background-position:center top 25%}.bg-\\[top_8\\%_center\\]{background-position:top 8% center}.bg-\\[80\\%_center\\]{background-position:80% center}.bg-\\[position\\:-410px_-10px\\]{background-position:-410px -10px}.bg-\\[position\\:center\\]{background-position:center}.bg-\\[position\\:-500px_0px\\]{background-position:-500px 0px}.bg-no-repeat{background-repeat:no-repeat}.fill-current{fill:currentColor}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-1{padding:0.25rem}.p-8{padding:2rem}.p-5{padding:1.25rem}.p-4{padding:1rem}.p-\\[7px\\]{padding:7px}.p-3{padding:0.75rem}.p-\\[18px\\]{padding:18px}.p-px{padding:1px}.p-7{padding:1.75rem}.p-6{padding:1.5rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-\\[14px\\]{padding:14px}.p-0{padding:0px}.p-0\\.5{padding:0.125rem}.py-20{padding-top:5rem;padding-bottom:5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[20px\\]{padding-top:20px;padding-bottom:20px}.py-\\[60px\\]{padding-top:60px;padding-bottom:60px}.px-\\[17px\\]{padding-left:17px;padding-right:17px}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-24{padding-top:6rem;padding-bottom:6rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-16{padding-top:4rem;padding-bottom:4rem}.px-\\[11px\\]{padding-left:11px;padding-right:11px}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.\\!px-10{padding-left:2.5rem !important;padding-right:2.5rem !important}.px-\\[30px\\]{padding-left:30px;padding-right:30px}.px-11{padding-left:2.75rem;padding-right:2.75rem}.py-\\[18px\\]{padding-top:18px;padding-bottom:18px}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-\\[92px\\]{padding-top:92px;padding-bottom:92px}.px-8{padding-left:2rem;padding-right:2rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-\\[14px\\]{padding-top:14px;padding-bottom:14px}.px-\\[34px\\]{padding-left:34px;padding-right:34px}.py-\\[35px\\]{padding-top:35px;padding-bottom:35px}.py-\\[17px\\]{padding-top:17px;padding-bottom:17px}.px-\\[23px\\]{padding-left:23px;padding-right:23px}.px-\\[13px\\]{padding-left:13px;padding-right:13px}.py-\\[15px\\]{padding-top:15px;padding-bottom:15px}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.px-4{padding-left:1rem;padding-right:1rem}.py-\\[0\\.9rem\\]{padding-top:0.9rem;padding-bottom:0.9rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-\\[31px\\]{padding-top:31px;padding-bottom:31px}.py-\\[22px\\]{padding-top:22px;padding-bottom:22px}.px-14{padding-left:3.5rem;padding-right:3.5rem}.py-9{padding-top:2.25rem;padding-bottom:2.25rem}.py-14{padding-top:3.5rem;padding-bottom:3.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-0{padding-left:0px;padding-right:0px}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.py-\\[80px\\]{padding-top:80px;padding-bottom:80px}.py-\\[19px\\]{padding-top:19px;padding-bottom:19px}.px-12{padding-left:3rem;padding-right:3rem}.px-16{padding-left:4rem;padding-right:4rem}.py-\\[48px\\]{padding-top:48px;padding-bottom:48px}.py-\\[65px\\]{padding-top:65px;padding-bottom:65px}.px-\\[14px\\]{padding-left:14px;padding-right:14px}.\\!py-3{padding-top:0.75rem !important;padding-bottom:0.75rem !important}.px-\\[9px\\]{padding-left:9px;padding-right:9px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.\\!px-5{padding-left:1.25rem !important;padding-right:1.25rem !important}.px-\\[22px\\]{padding-left:22px;padding-right:22px}.py-\\[3px\\]{padding-top:3px;padding-bottom:3px}.py-\\[23px\\]{padding-top:23px;padding-bottom:23px}.px-\\[91px\\]{padding-left:91px;padding-right:91px}.py-\\[34px\\]{padding-top:34px;padding-bottom:34px}.px-\\[61px\\]{padding-left:61px;padding-right:61px}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-\\[50px\\]{padding-top:50px;padding-bottom:50px}.px-\\[36px\\]{padding-left:36px;padding-right:36px}.py-\\[30px\\]{padding-top:30px;padding-bottom:30px}.px-3\\.5{padding-left:0.875rem;padding-right:0.875rem}.px-\\[31px\\]{padding-left:31px;padding-right:31px}.py-\\[2px\\]{padding-top:2px;padding-bottom:2px}.px-\\[25px\\]{padding-left:25px;padding-right:25px}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.pt-\\[50px\\]{padding-top:50px}.pt-6{padding-top:1.5rem}.pt-4{padding-top:1rem}.pb-6{padding-bottom:1.5rem}.pb-12{padding-bottom:3rem}.pb-20{padding-bottom:5rem}.pt-20{padding-top:5rem}.pb-\\[43px\\]{padding-bottom:43px}.pb-10{padding-bottom:2.5rem}.pt-\\[166px\\]{padding-top:166px}.pt-10{padding-top:2.5rem}.pt-\\[27px\\]{padding-top:27px}.pb-9{padding-bottom:2.25rem}.pt-\\[287px\\]{padding-top:287px}.pl-2\\.5{padding-left:0.625rem}.pl-2{padding-left:0.5rem}.pt-14{padding-top:3.5rem}.pt-\\[91px\\]{padding-top:91px}.pt-11{padding-top:2.75rem}.pt-3{padding-top:0.75rem}.pt-\\[30px\\]{padding-top:30px}.pt-2\\.5{padding-top:0.625rem}.pt-2{padding-top:0.5rem}.pt-\\[67px\\]{padding-top:67px}.pt-1{padding-top:0.25rem}.pt-7{padding-top:1.75rem}.pt-24{padding-top:6rem}.pl-3{padding-left:0.75rem}.pt-\\[207px\\]{padding-top:207px}.pt-\\[164px\\]{padding-top:164px}.pb-24{padding-bottom:6rem}.pt-\\[289px\\]{padding-top:289px}.pl-5{padding-left:1.25rem}.pb-5{padding-bottom:1.25rem}.pb-4{padding-bottom:1rem}.pr-2{padding-right:0.5rem}.pb-\\[84px\\]{padding-bottom:84px}.pt-\\[24px\\]{padding-top:24px}.pt-0\\.5{padding-top:0.125rem}.pt-0{padding-top:0px}.pr-10{padding-right:2.5rem}.pb-2{padding-bottom:0.5rem}.pb-8{padding-bottom:2rem}.pt-\\[250px\\]{padding-top:250px}.pb-1{padding-bottom:0.25rem}.pb-\\[11px\\]{padding-bottom:11px}.pt-\\[29px\\]{padding-top:29px}.pb-\\[34px\\]{padding-bottom:34px}.pt-\\[22px\\]{padding-top:22px}.pb-\\[146px\\]{padding-bottom:146px}.pt-\\[65px\\]{padding-top:65px}.pl-1\\.5{padding-left:0.375rem}.pl-1{padding-left:0.25rem}.pt-8{padding-top:2rem}.pt-\\[18px\\]{padding-top:18px}.pb-\\[9px\\]{padding-bottom:9px}.pt-\\[5px\\]{padding-top:5px}.pt-\\[76px\\]{padding-top:76px}.pt-\\[100px\\]{padding-top:100px}.\\!pb-0{padding-bottom:0px !important}.pb-\\[108px\\]{padding-bottom:108px}.pt-\\[94px\\]{padding-top:94px}.pb-\\[46px\\]{padding-bottom:46px}.pb-\\[90px\\]{padding-bottom:90px}.pt-\\[53px\\]{padding-top:53px}.pb-\\[5px\\]{padding-bottom:5px}.pt-\\[35px\\]{padding-top:35px}.pb-\\[45px\\]{padding-bottom:45px}.pt-\\[66px\\]{padding-top:66px}.pb-\\[35px\\]{padding-bottom:35px}.pb-\\[206px\\]{padding-bottom:206px}.pt-\\[83px\\]{padding-top:83px}.pb-\\[95px\\]{padding-bottom:95px}.pt-\\[58px\\]{padding-top:58px}.pb-0\\.5{padding-bottom:0.125rem}.pb-0{padding-bottom:0px}.pt-5{padding-top:1.25rem}.pt-\\[21px\\]{padding-top:21px}.pt-\\[26px\\]{padding-top:26px}.pt-\\[10px\\]{padding-top:10px}.pb-32{padding-bottom:8rem}.pb-\\[50px\\]{padding-bottom:50px}.pb-3{padding-bottom:0.75rem}.pt-\\[15px\\]{padding-top:15px}.pb-\\[72px\\]{padding-bottom:72px}.pt-\\[112px\\]{padding-top:112px}.pl-16{padding-left:4rem}.pt-96{padding-top:24rem}.pl-0{padding-left:0px}.pr-5{padding-right:1.25rem}.pb-28{padding-bottom:7rem}.pb-\\[19px\\]{padding-bottom:19px}.pl-14{padding-left:3.5rem}.pt-\\[17px\\]{padding-top:17px}.pr-7{padding-right:1.75rem}.pr-12{padding-right:3rem}.pt-\\[43px\\]{padding-top:43px}.pt-\\[28px\\]{padding-top:28px}.pt-3\\.5{padding-top:0.875rem}.pt-\\[13px\\]{padding-top:13px}.pr-4{padding-right:1rem}.pb-\\[27px\\]{padding-bottom:27px}.pt-\\[68px\\]{padding-top:68px}.pb-\\[25px\\]{padding-bottom:25px}.pt-\\[40px\\]{padding-top:40px}.pt-36{padding-top:9rem}.\\!pt-0{padding-top:0px !important}.\\!pr-0{padding-right:0px !important}.pl-10{padding-left:2.5rem}.\\!pr-10{padding-right:2.5rem !important}.pb-7{padding-bottom:1.75rem}.pt-12{padding-top:3rem}.pb-\\[63px\\]{padding-bottom:63px}.pt-\\[42px\\]{padding-top:42px}.pb-\\[130px\\]{padding-bottom:130px}.pb-\\[42px\\]{padding-bottom:42px}.pt-\\[59px\\]{padding-top:59px}.pt-\\[19px\\]{padding-top:19px}.pt-\\[92px\\]{padding-top:92px}.pb-\\[119px\\]{padding-bottom:119px}.pt-\\[87px\\]{padding-top:87px}.pb-\\[74px\\]{padding-bottom:74px}.\\!pb-10{padding-bottom:2.5rem !important}.pl-7{padding-left:1.75rem}.\\!text-left{text-align:left !important}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.align-middle{vertical-align:middle}.font-proximanova{font-family:ProximaNova}.text-base{font-size:1rem;line-height:1.5rem}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-\\[38px\\]{font-size:38px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-\\[15px\\]{font-size:15px}.text-xs{font-size:0.75rem;line-height:1rem}.text-\\[23px\\]{font-size:23px}.text-\\[26px\\]{font-size:26px}.text-\\[28px\\]{font-size:28px}.text-\\[21px\\]{font-size:21px}.text-\\[13px\\]{font-size:13px}.text-\\[2\\.5rem\\]{font-size:2.5rem}.text-\\[22px\\]{font-size:22px}.text-\\[30px\\]{font-size:30px}.\\!text-base{font-size:1rem !important;line-height:1.5rem !important}.text-\\[25px\\]{font-size:25px}.text-\\[40px\\]{font-size:40px}.text-\\[17px\\]{font-size:17px}.text-\\[19px\\]{font-size:19px}.text-\\[50px\\]{font-size:50px}.text-\\[14px\\]{font-size:14px}.text-\\[20px\\]{font-size:20px}.text-\\[18px\\]{font-size:18px}.text-\\[16px\\]{font-size:16px}.text-\\[11px\\]{font-size:11px}.text-\\[10px\\]{font-size:10px}.text-\\[0\\.85rem\\]{font-size:0.85rem}.text-\\[32px\\]{font-size:32px}.text-\\[1\\.1rem\\]{font-size:1.1rem}.text-\\[9px\\]{font-size:9px}.text-\\[6px\\]{font-size:6px}.text-\\[12px\\]{font-size:12px}.text-\\[24px\\]{font-size:24px}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-normal{font-weight:400}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-light{font-weight:300}.font-thin{font-weight:100}.font-extrabold{font-weight:800}.\\!font-bold{font-weight:700 !important}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.normal-case{text-transform:none}.italic{font-style:italic}.leading-\\[32px\\]{line-height:32px}.leading-\\[25px\\]{line-height:25px}.leading-6{line-height:1.5rem}.leading-\\[42px\\]{line-height:42px}.leading-\\[48px\\]{line-height:48px}.leading-4{line-height:1rem}.leading-\\[36px\\]{line-height:36px}.leading-9{line-height:2.25rem}.leading-7{line-height:1.75rem}.leading-3{line-height:.75rem}.leading-8{line-height:2rem}.leading-5{line-height:1.25rem}.leading-\\[60px\\]{line-height:60px}.leading-\\[14px\\]{line-height:14px}.leading-10{line-height:2.5rem}.leading-\\[47px\\]{line-height:47px}.leading-\\[28px\\]{line-height:28px}.leading-\\[19px\\]{line-height:19px}.leading-\\[13px\\]{line-height:13px}.leading-\\[15px\\]{line-height:15px}.leading-none{line-height:1}.leading-\\[21px\\]{line-height:21px}.leading-\\[30px\\]{line-height:30px}.leading-\\[22px\\]{line-height:22px}.leading-\\[27px\\]{line-height:27px}.leading-\\[18px\\]{line-height:18px}.leading-\\[44px\\]{line-height:44px}.leading-\\[26px\\]{line-height:26px}.leading-\\[45px\\]{line-height:45px}.leading-\\[23px\\]{line-height:23px}.leading-\\[9px\\]{line-height:9px}.leading-\\[50px\\]{line-height:50px}.leading-\\[38px\\]{line-height:38px}.leading-\\[31px\\]{line-height:31px}.\\!leading-normal{line-height:1.5 !important}.leading-\\[11px\\]{line-height:11px}.leading-\\[17px\\]{line-height:17px}.\\!leading-5{line-height:1.25rem !important}.leading-normal{line-height:1.5}.leading-\\[39px\\]{line-height:39px}.-tracking-\\[0\\.04px\\]{letter-spacing:-0.04px}.-tracking-\\[0\\.03\\]{letter-spacing:-0.03}.-tracking-\\[0\\.03px\\]{letter-spacing:-0.03px}.tracking-\\[1\\.2px\\]{letter-spacing:1.2px}.-tracking-\\[0\\.05px\\]{letter-spacing:-0.05px}.tracking-\\[0\\.31px\\]{letter-spacing:0.31px}.-tracking-\\[0\\.02px\\]{letter-spacing:-0.02px}.-tracking-\\[-0\\.02px\\]{letter-spacing:0.02px}.-tracking-\\[-0\\.06px\\]{letter-spacing:0.06px}.tracking-\\[0\\.42px\\]{letter-spacing:0.42px}.-tracking-\\[0\\.09px\\]{letter-spacing:-0.09px}.-tracking-\\[-0\\.04px\\]{letter-spacing:0.04px}.-tracking-\\[-0\\.03px\\]{letter-spacing:0.03px}.tracking-normal{letter-spacing:0em}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-black\\/70{color:rgb(0 0 0 / 0.7)}.text-primary{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-\\[\\#f7f4f4\\]{--tw-text-opacity:1;color:rgb(247 244 244 / var(--tw-text-opacity))}.text-\\[\\#353535\\]{--tw-text-opacity:1;color:rgb(53 53 53 / var(--tw-text-opacity))}.text-green{--tw-text-opacity:1;color:rgb(89 205 83 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-\\[\\#FBFBFD\\]{--tw-text-opacity:1;color:rgb(251 251 253 / var(--tw-text-opacity))}.text-\\[\\#fbfbfd\\]{--tw-text-opacity:1;color:rgb(251 251 253 / var(--tw-text-opacity))}.text-\\[\\#0B3A02\\]{--tw-text-opacity:1;color:rgb(11 58 2 / var(--tw-text-opacity))}.text-black-700{--tw-text-opacity:1;color:rgb(53 53 53 / var(--tw-text-opacity))}.text-\\[\\#030303\\]{--tw-text-opacity:1;color:rgb(3 3 3 / var(--tw-text-opacity))}.text-\\[\\#707070\\]{--tw-text-opacity:1;color:rgb(112 112 112 / var(--tw-text-opacity))}.\\!text-primary{--tw-text-opacity:1 !important;color:rgb(0 173 255 / var(--tw-text-opacity)) !important}.text-\\[\\#202a36\\]{--tw-text-opacity:1;color:rgb(32 42 54 / var(--tw-text-opacity))}.text-\\[\\#6c6c6c\\]{--tw-text-opacity:1;color:rgb(108 108 108 / var(--tw-text-opacity))}.text-\\[\\#00ADFF\\]{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.text-\\[\\#00a1f1\\]{--tw-text-opacity:1;color:rgb(0 161 241 / var(--tw-text-opacity))}.text-\\[\\#646464\\]{--tw-text-opacity:1;color:rgb(100 100 100 / var(--tw-text-opacity))}.text-\\[\\#202A36\\]{--tw-text-opacity:1;color:rgb(32 42 54 / var(--tw-text-opacity))}.text-\\[\\#0f69b5\\]{--tw-text-opacity:1;color:rgb(15 105 181 / var(--tw-text-opacity))}.text-\\[\\#000\\]{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-grey-500{--tw-text-opacity:1;color:rgb(99 99 99 / var(--tw-text-opacity))}.text-\\[\\#5f5f5f\\]{--tw-text-opacity:1;color:rgb(95 95 95 / var(--tw-text-opacity))}.\\!text-black{--tw-text-opacity:1 !important;color:rgb(0 0 0 / var(--tw-text-opacity)) !important}.text-\\[\\#646464\\]\\/80{color:rgb(100 100 100 / 0.8)}.text-danger{--tw-text-opacity:1;color:rgb(204 75 55 / var(--tw-text-opacity))}.text-\\[\\#586376\\]{--tw-text-opacity:1;color:rgb(88 99 118 / var(--tw-text-opacity))}.text-\\[\\#d5d5d5\\]{--tw-text-opacity:1;color:rgb(213 213 213 / var(--tw-text-opacity))}.text-\\[\\#008cc3\\]{--tw-text-opacity:1;color:rgb(0 140 195 / var(--tw-text-opacity))}.text-\\[\\#70c6ff\\]{--tw-text-opacity:1;color:rgb(112 198 255 / var(--tw-text-opacity))}.text-\\[\\#506cba\\]{--tw-text-opacity:1;color:rgb(80 108 186 / var(--tw-text-opacity))}.text-\\[\\#ef574a\\]{--tw-text-opacity:1;color:rgb(239 87 74 / var(--tw-text-opacity))}.text-\\[\\#d34c7b\\]{--tw-text-opacity:1;color:rgb(211 76 123 / var(--tw-text-opacity))}.text-\\[\\#919191\\]{--tw-text-opacity:1;color:rgb(145 145 145 / var(--tw-text-opacity))}.text-\\[\\#F7F4F4\\]{--tw-text-opacity:1;color:rgb(247 244 244 / var(--tw-text-opacity))}.text-\\[\\#fdfeff\\]{--tw-text-opacity:1;color:rgb(253 254 255 / var(--tw-text-opacity))}.text-\\[\\#767677\\]{--tw-text-opacity:1;color:rgb(118 118 119 / var(--tw-text-opacity))}.text-\\[\\#1a9cea\\]{--tw-text-opacity:1;color:rgb(26 156 234 / var(--tw-text-opacity))}.text-\\[\\#2F2F2F\\]{--tw-text-opacity:1;color:rgb(47 47 47 / var(--tw-text-opacity))}.text-\\[\\#4d4d4d\\]{--tw-text-opacity:1;color:rgb(77 77 77 / var(--tw-text-opacity))}.text-\\[\\#0da1f1\\]{--tw-text-opacity:1;color:rgb(13 161 241 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-lightgrey{--tw-text-opacity:1;color:rgb(88 99 118 / var(--tw-text-opacity))}.text-\\[\\#566378\\]{--tw-text-opacity:1;color:rgb(86 99 120 / var(--tw-text-opacity))}.text-\\[\\#1A9CEA\\]{--tw-text-opacity:1;color:rgb(26 156 234 / var(--tw-text-opacity))}.text-\\[\\#4D4D4D\\]{--tw-text-opacity:1;color:rgb(77 77 77 / var(--tw-text-opacity))}.text-\\[\\#0DA1F1\\]{--tw-text-opacity:1;color:rgb(13 161 241 / var(--tw-text-opacity))}.text-\\[\\#14c8f6\\]{--tw-text-opacity:1;color:rgb(20 200 246 / var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))}.text-\\[\\#83888e\\]{--tw-text-opacity:1;color:rgb(131 136 142 / var(--tw-text-opacity))}.text-white\\/\\[0\\.64\\]{color:rgb(255 255 255 / 0.64)}.\\!text-white{--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.text-\\[\\#5f5f60\\]{--tw-text-opacity:1;color:rgb(95 95 96 / var(--tw-text-opacity))}.text-\\[\\#b4b4b4\\]{--tw-text-opacity:1;color:rgb(180 180 180 / var(--tw-text-opacity))}.text-\\[\\#a2a2a2\\]{--tw-text-opacity:1;color:rgb(162 162 162 / var(--tw-text-opacity))}.text-\\[\\#989898\\]{--tw-text-opacity:1;color:rgb(152 152 152 / var(--tw-text-opacity))}.text-\\[\\#A5A5A5\\]{--tw-text-opacity:1;color:rgb(165 165 165 / var(--tw-text-opacity))}.text-\\[\\#909090\\]{--tw-text-opacity:1;color:rgb(144 144 144 / var(--tw-text-opacity))}.text-\\[\\#767676\\]{--tw-text-opacity:1;color:rgb(118 118 118 / var(--tw-text-opacity))}.text-\\[\\#BFBFBF\\]{--tw-text-opacity:1;color:rgb(191 191 191 / var(--tw-text-opacity))}.text-\\[\\#d1d1d1\\]{--tw-text-opacity:1;color:rgb(209 209 209 / var(--tw-text-opacity))}.text-\\[\\#6c7d88\\]{--tw-text-opacity:1;color:rgb(108 125 136 / var(--tw-text-opacity))}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51 / var(--tw-text-opacity))}.text-\\[\\#5CAFCE\\]{--tw-text-opacity:1;color:rgb(92 175 206 / var(--tw-text-opacity))}.text-\\[\\#707070\\]\\/70{color:rgb(112 112 112 / 0.7)}.text-white\\/50{color:rgb(255 255 255 / 0.5)}.text-blue-100{--tw-text-opacity:1;color:rgb(219 234 254 / var(--tw-text-opacity))}.text-\\[\\#0b0b0b\\]\\/70{color:rgb(11 11 11 / 0.7)}.text-\\[\\#0b0b0b\\]{--tw-text-opacity:1;color:rgb(11 11 11 / var(--tw-text-opacity))}.\\!text-green{--tw-text-opacity:1 !important;color:rgb(89 205 83 / var(--tw-text-opacity)) !important}.\\!text-danger{--tw-text-opacity:1 !important;color:rgb(204 75 55 / var(--tw-text-opacity)) !important}.text-\\[\\#3c434e\\]{--tw-text-opacity:1;color:rgb(60 67 78 / var(--tw-text-opacity))}.text-black\\/30{color:rgb(0 0 0 / 0.3)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.\\!no-underline{-webkit-text-decoration-line:none !important;text-decoration-line:none !important}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.opacity-5{opacity:0.05}.opacity-0{opacity:0}.opacity-90{opacity:0.9}.opacity-30{opacity:0.3}.opacity-100{opacity:1}.opacity-20{opacity:0.2}.opacity-25{opacity:0.25}.shadow-\\[0px_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.2\\)\\]{--tw-shadow:0px 1px 8px rgba(0,0,0,0.2);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)\\]{--tw-shadow:0 3px 6px rgba(0,0,0,0.16);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.44\\)\\]{--tw-shadow:0 3px 6px rgba(0,0,0,0.44);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\]{--tw-shadow:0px 3px 6px rgba(0,0,0,0.6);--tw-shadow-colored:0px 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.\\!shadow-none{--tw-shadow:0 0 #0000 !important;--tw-shadow-colored:0 0 #0000 !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.shadow-\\[0px_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\]{--tw-shadow:0px 1px 8px rgba(0,0,0,0.12);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)\\]{--tw-shadow:0px 3px 6px rgba(0,0,0,0.16);--tw-shadow-colored:0px 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.36\\)\\]{--tw-shadow:0px 3px 6px rgba(0,0,0,0.36);--tw-shadow-colored:0px 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_3px_6px_rgba\\(175\\2c 175\\2c 175\\2c 0\\.30\\)\\]{--tw-shadow:0px 3px 6px rgba(175,175,175,0.30);--tw-shadow-colored:0px 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.06\\)\\]{--tw-shadow:0 1px 8px rgba(0,0,0,0.06);--tw-shadow-colored:0 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.\\!shadow-\\[0_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)\\]{--tw-shadow:0 3px 6px rgba(0,0,0,0.16) !important;--tw-shadow-colored:0 3px 6px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.shadow-\\[0_3px_6px_rgba\\(180\\2c 180\\2c 180\\2c 0\\.44\\)\\]{--tw-shadow:0 3px 6px rgba(180,180,180,0.44);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.48\\)\\]{--tw-shadow:0 3px 6px rgba(0,0,0,0.48);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)\\]{--tw-shadow:0 3px 6px 0 rgba(0,0,0,0.16);--tw-shadow-colored:0 3px 6px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]{--tw-shadow:0px 1px 8px rgba(0,0,0,0.1);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.75\\)\\]{--tw-shadow:0 3px 6px rgba(0,0,0,0.75);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\]{--tw-shadow:0 1px 8px rgba(0,0,0,0.12);--tw-shadow-colored:0 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_1px_8px_rgba\\(0\\2c 161\\2c 241\\2c 0\\.12\\)\\]{--tw-shadow:0px 1px 8px rgba(0,161,241,0.12);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0px_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.08\\)\\]{--tw-shadow:0px 1px 8px rgba(0,0,0,0.08);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]{--tw-shadow:0 1px 8px rgba(0,0,0,0.1);--tw-shadow-colored:0 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_3px_6px_rgba\\(239\\2c 239\\2c 239\\)\\]{--tw-shadow:0 3px 6px rgba(239,239,239);--tw-shadow-colored:0 3px 6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_1px_8px_rgba\\(0\\2c 161\\2c 241\\2c 0\\.08\\)\\]{--tw-shadow:0 1px 8px rgba(0,161,241,0.08);--tw-shadow-colored:0 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.\\!outline-none{outline:2px solid transparent !important;outline-offset:2px !important}.outline{outline-style:solid}.blur-2xl{--tw-blur:blur(40px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.delay-200{transition-delay:200ms}.duration-300{transition-duration:300ms}.duration-150{transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-700{transition-duration:700ms}.duration-500{transition-duration:500ms}.ease-linear{transition-timing-function:linear}.\\[perspective\\:1000px\\]{perspective:1000px}.\\[transform-style\\:preserve-3d\\]{transform-style:preserve-3d}.\\[backface-visibility\\:hidden\\]{-webkit-backface-visibility:hidden;backface-visibility:hidden}.\\[transform\\:rotateY\\(180deg\\)\\]{transform:rotateY(180deg)}.sidebar-left-overlay{transition:background .6s}.hero-slider .swiper-slide-duplicate img.slider-img,.hero-slider .swiper-slide img.slider-img{transform:scale(1);width:100%;transition:all 5s linear}.hero-slider .swiper-slide-active img.slider-img,.hero-slider .swiper-slide-duplicate-active img.slider-img{transform:scale(1.1);animation:all 5s linear}.hero-slider .swiper-slide-duplicate-next img.slider-img,.hero-slider .swiper-slide-duplicate-prev img.slider-img,.hero-slider .swiper-slide-next img.slider-img,.hero-slider .swiper-slide-prev img.slider-img{transform:scale(1);animation:all 5s linear}.hero-slider .swiper-slide-active .hero__slide-nav-progress{visibility:visible;width:calc(100% - 1.5rem)}.hero-slider .swiper-slide .hero__slide-nav-progress{transition-duration:0s;width:0;transition:all linear}.hero-slider .swiper-pagination-bullet-active{color:#fff}@keyframes animate{0%{transform:scale(1) translate(0)}to{transform:scale(1.1) translate(0)}}.underlined-heading{overflow:hidden;text-align:center}.underlined-heading:after,.underlined-heading:before{background-color:#e6e6e6;content:\"\";display:inline-block;height:2px;position:relative;vertical-align:middle;width:50%}.underlined-heading:before{right:.5em;margin-left:-50%}.underlined-heading:after{left:.5em;margin-right:-50%}@media (max-width:1024px){.underlined-heading:after,.underlined-heading:before{content:none!important}}.toasted-container .toasted{display:block!important;min-height:0!important;padding:8px 20px 10px!important;line-height:1.5!important;text-align:center}@media (min-width:601px){.toasted-container .toasted{border-radius:.25rem!important}}.toasted-container.top-center{top:0!important}.toasted-container a[href]{color:inherit;text-decoration:underline;margin:0 5px;font-weight:700}.toasted-container a[href]:hover{text-decoration:none}.toasted .primary.error, .toasted.toasted-primary.error{--tw-bg-opacity:1 !important;background-color:rgb(255 0 0 / var(--tw-bg-opacity)) !important;font-weight:400 !important;--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.toasted .primary.success, .toasted.toasted-primary.success{--tw-bg-opacity:1 !important;background-color:rgb(0 128 0 / var(--tw-bg-opacity)) !important}.menu-icon-close{transform:rotate(0deg)}.menu-icon-open{transform:rotate(180deg)}.custom-multiselect.multiselect{display:block;position:relative;width:100%;min-height:20px;text-align:left;color:#35495e;box-sizing:content-box}.contact-form-search .custom-multiselect .multiselect__tags{display:none!important}.contact-form-search .custom-multiselect .multiselect__content-wrapper{margin-top:-15px!important}.custom-multiselect .multiselect__tags{padding-right:60px;padding-top:3px;padding-left:25px}.career-form-custom .multiselect__tags>.multiselect__placeholder,.custom-multiselect.input-dropdown .multiselect__tags>.multiselect__placeholder{color:#a5a5a5!important;width:100%!important;display:block!important}.career-form-custom.multiselect--active>button>svg{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.custom-multiselect.input-dropdown .multiselect__tags>.multiselect__single{font-size:14px;color:#000;font-weight:500}.career-form-custom .multiselect__tags>.multiselect__single{font-size:0.875rem;font-weight:500;letter-spacing:-0.02px;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.custom-multiselect.input-dropdown.error .multiselect__tags>input{background:#f9ecea}.custom-multiselect.input-dropdown.error .multiselect__tags>.multiselect__placeholder{color:rgba(204,75,55,.7000000000000001)!important}.custom-multiselect .multiselect__input{outline:none!important}.custom-multiselect .multiselect__option.multiselect__option--highlight{background:#00adff!important;color:#fff!important}.custom-multiselect .multiselect__element{display:block;border-bottom:1px solid #f1f1f1}.custom-multiselect .multiselect__element:first-of-type{border-top:1px solid #f1f1f1}.custom-multiselect .multiselect__element:nth-last-of-type(3){border-bottom:none}.custom-multiselect .multiselect__option{padding:21px 25px;display:block;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;position:relative;font-weight:300;cursor:pointer;white-space:nowrap;color:#030303;font-size:13px}.custom-multiselect .multiselect__content-wrapper{margin-top:21px;position:absolute;display:block;background:#fff;width:100%;overflow:auto;box-shadow:0 8px 8px rgba(0,0,0,.1);border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:3;-webkit-overflow-scrolling:touch}.custom-multiselect .multiselect__content,.default-open-multiselect .multiselect__content-wrapper{display:block!important}.custom-multiselect .multiselect__content-wrapper::-webkit-scrollbar{width:3px;height:8px}.custom-multiselect .multiselect__content-wrapper::-webkit-scrollbar-track{border-radius:100vh;background:#fff}.custom-multiselect .multiselect__content-wrapper::-webkit-scrollbar-thumb{background:#d9d9d9;border-radius:100vh;border:5px solid #d9d9d9}.custom-multiselect .multiselect__content-wrapper::-webkit-scrollbar-thumb:hover{background:#d9d9d9}.contact-heroform .custom-multiselect .multiselect__option{padding:15px 25px;white-space:normal}.contact-heroform .custom-multiselect .multiselect__content-wrapper{margin-top:12px}.custom-multiselect.option-position-reletive .multiselect__content-wrapper{margin-top:0;position:relative;display:block}.career-form-custom{width:100%!important;border-radius:10px;border-width:0;padding:1rem;font-size:.875rem;line-height:1.25rem;font-weight:500;line-height:14px;letter-spacing:-.02px;--tw-text-opacity:1;color:#000;color:rgb(0 0 0/var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;max-width:100%!important}.career-form-custom .multiselect__option{padding:12px 25px;font-size:.857rem}.career-form-custom.multiselect--active{border-bottom-right-radius:0px !important;border-bottom-left-radius:0px !important}.career-form-custom .multiselect__content-wrapper{margin-top:12px;margin-left:-16px}.popper__arrow{display:none!important}@media only screen and (min-device-width:320px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.contact-popper{top:-20px!important}}@media (min-width:1921px){.responsive-search-slide-video{scale:1.5!important;margin-top:280px!important}}@media (max-width:1920px){.responsive-search-slide-video{scale:1!important;margin-top:0!important}}@media (max-width:1620px){.responsive-search-slide-video{scale:1.1!important;margin-top:60px!important}}@media (max-width:1440px){.responsive-search-slide-video{scale:1.3!important;margin-top:108px!important}}@media (max-width:1120px){.responsive-search-slide-video{scale:1.1!important;margin-top:60px!important}}@media (max-width:920px){.responsive-search-slide-video{scale:1.3!important;margin-top:100px!important}}@media (max-width:767px){.responsive-search-slide-video{scale:3.3!important;margin-top:245px!important}}.flatpickr-day.today{border-color:transparent !important}.flatpickr-day.selected{--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important}.flatpickr-day.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day.nextMonthDay:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.today.inRange, .flatpickr-day:focus, .flatpickr-day:hover{border-color:rgb(0 173 255 / 0.7) !important;--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important;--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg{fill:#00ADFF !important}@media only screen and (min-width:1230px) and (max-width:1500px){.img-slider-six-responsive{background-position:center 0!important}}@media only screen and (min-width:1920px) and (max-width:3000px){.contact-heroform{background-position:center -120px!important}}.popper{font-family:ProximaNova}.last-line-blur:after{content:\"\";display:block;position:absolute;right:0;bottom:0;left:0;height:calc(100% + 24px);transform:translateY(calc(100% - 24px));background:#fbfbfd;opacity:.8}.placeholder\\:text-\\[\\#bfbfbf\\]::-moz-placeholder{--tw-text-opacity:1;color:rgb(191 191 191 / var(--tw-text-opacity))}.placeholder\\:text-\\[\\#bfbfbf\\]::placeholder{--tw-text-opacity:1;color:rgb(191 191 191 / var(--tw-text-opacity))}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:-bottom-\\[2px\\]::before{content:var(--tw-content);bottom:-2px}.before\\:left-0::before{content:var(--tw-content);left:0px}.before\\:inline-block::before{content:var(--tw-content);display:inline-block}.before\\:h-\\[3px\\]::before{content:var(--tw-content);height:3px}.before\\:h-full::before{content:var(--tw-content);height:100%}.before\\:w-full::before{content:var(--tw-content);width:100%}.before\\:bg-primary::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.before\\:align-middle::before{content:var(--tw-content);vertical-align:middle}.hover\\:\\!border-primary:hover{--tw-border-opacity:1 !important;border-color:rgb(0 173 255 / var(--tw-border-opacity)) !important}.hover\\:border-primary:hover{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity))}.hover\\:border-\\[\\#1eb1fc\\]:hover{--tw-border-opacity:1;border-color:rgb(30 177 252 / var(--tw-border-opacity))}.hover\\:bg-primary-700:hover{--tw-bg-opacity:1;background-color:rgb(6 133 196 / var(--tw-bg-opacity))}.hover\\:bg-\\[\\#eaf7ff\\]:hover{--tw-bg-opacity:1;background-color:rgb(234 247 255 / var(--tw-bg-opacity))}.hover\\:bg-primary:hover{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:\\!bg-primary:hover{--tw-bg-opacity:1 !important;background-color:rgb(0 173 255 / var(--tw-bg-opacity)) !important}.hover\\:font-bold:hover{font-weight:700}.hover\\:text-primary:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:text-\\[\\#353535\\]:hover{--tw-text-opacity:1;color:rgb(53 53 53 / var(--tw-text-opacity))}.hover\\:text-primary-700:hover{--tw-text-opacity:1;color:rgb(6 133 196 / var(--tw-text-opacity))}.hover\\:text-\\[\\#1A9CEA\\]:hover{--tw-text-opacity:1;color:rgb(26 156 234 / var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.hover\\:\\!text-white:hover{--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.hover\\:\\!text-primary:hover{--tw-text-opacity:1 !important;color:rgb(0 173 255 / var(--tw-text-opacity)) !important}.hover\\:text-\\[\\#008cc3\\]:hover{--tw-text-opacity:1;color:rgb(0 140 195 / var(--tw-text-opacity))}.hover\\:text-\\[\\#70c6ff\\]:hover{--tw-text-opacity:1;color:rgb(112 198 255 / var(--tw-text-opacity))}.hover\\:text-\\[\\#506cba\\]:hover{--tw-text-opacity:1;color:rgb(80 108 186 / var(--tw-text-opacity))}.hover\\:text-\\[\\#ef574a\\]:hover{--tw-text-opacity:1;color:rgb(239 87 74 / var(--tw-text-opacity))}.hover\\:text-\\[\\#d34c7b\\]:hover{--tw-text-opacity:1;color:rgb(211 76 123 / var(--tw-text-opacity))}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.hover\\:opacity-70:hover{opacity:0.7}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-none:hover{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\\:shadow-\\[0px_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\]:hover{--tw-shadow:0px 1px 8px rgba(0,0,0,0.12);--tw-shadow-colored:0px 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:border-b-\\[3px\\]:focus{border-bottom-width:3px}.focus\\:border-primary:focus{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity))}.focus\\:bg-primary:focus{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.focus\\:\\!shadow-none:focus{--tw-shadow:0 0 #0000 !important;--tw-shadow-colored:0 0 #0000 !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\\:\\!ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.focus\\:ring-gray-50:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(249 250 251 / var(--tw-ring-opacity))}.focus\\:ring-transparent:focus{--tw-ring-color:transparent}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px}.group:hover .group-hover\\:left-2{left:0.5rem}.group:hover .group-hover\\:mb-\\[10px\\]{margin-bottom:10px}.group:hover .group-hover\\:mt-\\[-10px\\]{margin-top:-10px}.group:hover .group-hover\\:inline-block{display:inline-block}.group:hover .group-hover\\:translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:scale-150{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:rounded-b-none{border-bottom-right-radius:0px;border-bottom-left-radius:0px}.group:hover .group-hover\\:border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))}.group:hover .group-hover\\:border-primary{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity))}.group:hover .group-hover\\:bg-primary{--tw-bg-opacity:1;background-color:rgb(0 173 255 / var(--tw-bg-opacity))}.group:hover .group-hover\\:text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-danger{--tw-text-opacity:1;color:rgb(204 75 55 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-primary{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.group:hover .group-hover\\:\\!text-white{--tw-text-opacity:1 !important;color:rgb(255 255 255 / var(--tw-text-opacity)) !important}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.group:hover .group-hover\\:opacity-0{opacity:0}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:\\[transform\\:rotateY\\(180deg\\)\\]{transform:rotateY(180deg)}@media (prefers-color-scheme: dark){.dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(75 85 99 / var(--tw-divide-opacity))}.dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.dark\\:text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:focus\\:ring-gray-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(75 85 99 / var(--tw-ring-opacity))}}@media (min-width: 640px){.sm\\:top-24{top:6rem}.sm\\:left-3{left:0.75rem}.sm\\:top-0{top:0px}.sm\\:left-20{left:5rem}.sm\\:-right-8{right:-2rem}.sm\\:top-16{top:4rem}.sm\\:-top-7{top:-1.75rem}.sm\\:left-16{left:4rem}.sm\\:-left-8{left:-2rem}.sm\\:bottom-56{bottom:14rem}.sm\\:mx-0{margin-left:0px;margin-right:0px}.sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.sm\\:mt-auto{margin-top:auto}.sm\\:mt-40{margin-top:10rem}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-8{height:2rem}.sm\\:h-\\[188px\\]{height:188px}.sm\\:h-20{height:5rem}.sm\\:h-\\[280px\\]{height:280px}.sm\\:h-\\[57px\\]{height:57px}.sm\\:h-auto{height:auto}.sm\\:h-\\[365px\\]{height:365px}.sm\\:min-h-full{min-height:100%}.sm\\:w-auto{width:auto}.sm\\:w-full{width:100%}.sm\\:w-\\[188px\\]{width:188px}.sm\\:w-\\[57px\\]{width:57px}.sm\\:w-56{width:14rem}.sm\\:w-1\\/2{width:50%}.sm\\:max-w-\\[377px\\]{max-width:377px}.sm\\:max-w-none{max-width:none}.sm\\:max-w-\\[420px\\]{max-width:420px}.sm\\:max-w-\\[485px\\]{max-width:485px}.sm\\:max-w-xs{max-width:20rem}.sm\\:max-w-\\[342px\\]{max-width:342px}.sm\\:max-w-\\[365px\\]{max-width:365px}.sm\\:max-w-\\[430px\\]{max-width:430px}.sm\\:shrink-0{flex-shrink:0}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:justify-end{justify-content:flex-end}.sm\\:justify-center{justify-content:center}.sm\\:justify-between{justify-content:space-between}.sm\\:gap-5{gap:1.25rem}.sm\\:gap-2{gap:0.5rem}.sm\\:gap-\\[33px\\]{gap:33px}.sm\\:gap-6{gap:1.5rem}.sm\\:gap-\\[30px\\]{gap:30px}.sm\\:gap-4{gap:1rem}.sm\\:gap-14{gap:3.5rem}.sm\\:gap-\\[22px\\]{gap:22px}.sm\\:divide-x > :not([hidden]) ~ :not([hidden]){--tw-divide-x-reverse:0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.sm\\:whitespace-nowrap{white-space:nowrap}.sm\\:whitespace-pre{white-space:pre}.sm\\:border-0{border-width:0px}.sm\\:border-r{border-right-width:1px}.sm\\:border-t-0{border-top-width:0px}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.sm\\:px-3{padding-left:0.75rem;padding-right:0.75rem}.sm\\:pb-4{padding-bottom:1rem}.sm\\:pt-0{padding-top:0px}.sm\\:text-left{text-align:left}.sm\\:text-\\[32px\\]{font-size:32px}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-\\[36px\\]{font-size:36px}.sm\\:text-\\[38px\\]{font-size:38px}.sm\\:text-\\[28px\\]{font-size:28px}.sm\\:text-sm{font-size:0.875rem;line-height:1.25rem}.sm\\:leading-\\[52px\\]{line-height:52px}.sm\\:opacity-30{opacity:0.3}}@media (min-width: 768px){.md\\:absolute{position:absolute}.md\\:right-8{right:2rem}.md\\:top-8{top:2rem}.md\\:-left-\\[40\\%\\]{left:-40%}.md\\:left-\\[calc\\(50\\%\\+2\\.5rem\\)\\]{left:calc(50% + 2.5rem)}.md\\:top-\\[57px\\]{top:57px}.md\\:top-\\[58px\\]{top:58px}.md\\:left-\\[-360px\\]{left:-360px}.md\\:-left-\\[20\\%\\]{left:-20%}.md\\:-left-\\[10\\%\\]{left:-10%}.md\\:\\!order-1{order:1 !important}.md\\:\\!order-2{order:2 !important}.md\\:order-1{order:1}.md\\:order-2{order:2}.md\\:col-span-6{grid-column:span 6 / span 6}.md\\:my-10{margin-top:2.5rem;margin-bottom:2.5rem}.md\\:my-16{margin-top:4rem;margin-bottom:4rem}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:my-20{margin-top:5rem;margin-bottom:5rem}.md\\:mt-\\[57px\\]{margin-top:57px}.md\\:mb-\\[68px\\]{margin-bottom:68px}.md\\:mb-5{margin-bottom:1.25rem}.md\\:mb-16{margin-bottom:4rem}.md\\:mb-\\[50px\\]{margin-bottom:50px}.md\\:mb-9{margin-bottom:2.25rem}.md\\:mb-\\[67px\\]{margin-bottom:67px}.md\\:mt-\\[70px\\]{margin-top:70px}.md\\:mb-0{margin-bottom:0px}.md\\:mb-\\[48px\\]{margin-bottom:48px}.md\\:mb-4{margin-bottom:1rem}.md\\:mb-8{margin-bottom:2rem}.md\\:mb-\\[75px\\]{margin-bottom:75px}.md\\:mb-\\[72px\\]{margin-bottom:72px}.md\\:mt-24{margin-top:6rem}.md\\:mb-\\[52px\\]{margin-bottom:52px}.md\\:mt-0{margin-top:0px}.md\\:mt-\\[110px\\]{margin-top:110px}.md\\:ml-0{margin-left:0px}.md\\:mt-16{margin-top:4rem}.md\\:mt-\\[58px\\]{margin-top:58px}.md\\:mb-20{margin-bottom:5rem}.md\\:mb-\\[123px\\]{margin-bottom:123px}.md\\:mb-\\[55px\\]{margin-bottom:55px}.md\\:mb-11{margin-bottom:2.75rem}.md\\:mb-\\[100px\\]{margin-bottom:100px}.md\\:mb-\\[63px\\]{margin-bottom:63px}.md\\:mb-\\[122px\\]{margin-bottom:122px}.md\\:mb-32{margin-bottom:8rem}.md\\:mt-28{margin-top:7rem}.md\\:mb-\\[65px\\]{margin-bottom:65px}.md\\:-mt-32{margin-top:-8rem}.md\\:mt-\\[52px\\]{margin-top:52px}.md\\:block{display:block}.md\\:inline-block{display:inline-block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-32{height:8rem}.md\\:h-full{height:100%}.md\\:h-\\[228px\\]{height:228px}.md\\:h-\\[65px\\]{height:65px}.md\\:h-\\[400px\\]{height:400px}.md\\:h-\\[730px\\]{height:730px}.md\\:max-h-fit{max-height:-moz-fit-content;max-height:fit-content}.md\\:min-h-\\[152px\\]{min-height:152px}.md\\:min-h-\\[120px\\]{min-height:120px}.md\\:min-h-\\[325px\\]{min-height:325px}.md\\:min-h-\\[178px\\]{min-height:178px}.md\\:min-h-\\[170px\\]{min-height:170px}.md\\:min-h-\\[40rem\\]{min-height:40rem}.md\\:min-h-\\[56px\\]{min-height:56px}.md\\:w-\\[1px\\]{width:1px}.md\\:w-\\[90\\%\\]{width:90%}.md\\:w-auto{width:auto}.md\\:w-\\[calc\\(50vw-2\\.5rem\\)\\]{width:calc(50vw - 2.5rem)}.md\\:w-\\[323px\\]{width:323px}.md\\:w-96{width:24rem}.md\\:w-\\[65px\\]{width:65px}.md\\:w-56{width:14rem}.md\\:w-\\[360px\\]{width:360px}.md\\:w-\\[55\\%\\]{width:55%}.md\\:w-\\[65\\%\\]{width:65%}.md\\:w-full{width:100%}.md\\:w-2\\/3{width:66.666667%}.md\\:w-1\\/3{width:33.333333%}.md\\:w-\\[calc\\(100\\%-56px\\)\\]{width:calc(100% - 56px)}.md\\:min-w-\\[600px\\]{min-width:600px}.md\\:max-w-none{max-width:none}.md\\:max-w-\\[350px\\]{max-width:350px}.md\\:max-w-\\[481px\\]{max-width:481px}.md\\:max-w-\\[458px\\]{max-width:458px}.md\\:max-w-\\[275px\\]{max-width:275px}.md\\:max-w-\\[491px\\]{max-width:491px}.md\\:max-w-\\[360px\\]{max-width:360px}.md\\:max-w-\\[420px\\]{max-width:420px}.md\\:max-w-\\[330px\\]{max-width:330px}.md\\:max-w-\\[390px\\]{max-width:390px}.md\\:max-w-\\[455px\\]{max-width:455px}.md\\:max-w-sm{max-width:24rem}.md\\:max-w-\\[396px\\]{max-width:396px}.md\\:max-w-\\[498px\\]{max-width:498px}.md\\:flex-1{flex:1 1 0%}.md\\:flex-none{flex:none}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:items-end{align-items:flex-end}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:justify-center{justify-content:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-1{gap:0.25rem}.md\\:gap-6{gap:1.5rem}.md\\:gap-8{gap:2rem}.md\\:gap-16{gap:4rem}.md\\:gap-5{gap:1.25rem}.md\\:gap-9{gap:2.25rem}.md\\:gap-3{gap:0.75rem}.md\\:gap-\\[10px\\]{gap:10px}.md\\:gap-\\[59px\\]{gap:59px}.md\\:gap-2{gap:0.5rem}.md\\:gap-\\[30px\\]{gap:30px}.md\\:gap-10{gap:2.5rem}.md\\:gap-\\[66px\\]{gap:66px}.md\\:gap-14{gap:3.5rem}.md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.md\\:space-y-14 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(3.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(3.5rem * var(--tw-space-y-reverse))}.md\\:space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.md\\:space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.md\\:space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.md\\:space-y-\\[42px\\] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(42px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(42px * var(--tw-space-y-reverse))}.md\\:divide-y-0 > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(0px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(0px * var(--tw-divide-y-reverse))}.md\\:overflow-y-visible{overflow-y:visible}.md\\:whitespace-nowrap{white-space:nowrap}.md\\:whitespace-pre{white-space:pre}.md\\:whitespace-pre-line{white-space:pre-line}.md\\:border-l{border-left-width:1px}.md\\:border-b-0{border-bottom-width:0px}.md\\:border-r{border-right-width:1px}.md\\:bg-\\[url\\(\\/assets\\/img\\/image_16\\.jpg\\)\\]{background-image:url(/assets/img/image_16.jpg)}.md\\:bg-\\[url\\(\\/assets\\/img\\/girl-background\\.webp\\)\\]{background-image:url(/assets/img/girl-background.webp)}.md\\:bg-\\[center_top_8\\%\\]{background-position:center top 8%}.md\\:bg-left{background-position:left}.md\\:bg-\\[center_top_25\\%\\]{background-position:center top 25%}.md\\:bg-top{background-position:top}.md\\:bg-\\[position\\:center_70px\\]{background-position:center 70px}.md\\:p-8{padding:2rem}.md\\:p-7{padding:1.75rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:px-7{padding-left:1.75rem;padding-right:1.75rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:py-20{padding-top:5rem;padding-bottom:5rem}.md\\:px-11{padding-left:2.75rem;padding-right:2.75rem}.md\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.md\\:py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.md\\:py-2{padding-top:0.5rem;padding-bottom:0.5rem}.md\\:py-\\[100px\\]{padding-top:100px;padding-bottom:100px}.md\\:py-24{padding-top:6rem;padding-bottom:6rem}.md\\:py-\\[97px\\]{padding-top:97px;padding-bottom:97px}.md\\:py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.md\\:py-14{padding-top:3.5rem;padding-bottom:3.5rem}.md\\:pt-28{padding-top:7rem}.md\\:pb-\\[101px\\]{padding-bottom:101px}.md\\:pt-20{padding-top:5rem}.md\\:\\!pb-0{padding-bottom:0px !important}.md\\:pb-0{padding-bottom:0px}.md\\:pb-32{padding-bottom:8rem}.md\\:pt-\\[166px\\]{padding-top:166px}.md\\:pt-16{padding-top:4rem}.md\\:pb-4{padding-bottom:1rem}.md\\:pr-10{padding-right:2.5rem}.md\\:pb-\\[69px\\]{padding-bottom:69px}.md\\:pb-16{padding-bottom:4rem}.md\\:pb-20{padding-bottom:5rem}.md\\:pt-\\[78px\\]{padding-top:78px}.md\\:pb-\\[110px\\]{padding-bottom:110px}.md\\:pt-10{padding-top:2.5rem}.md\\:pt-\\[136px\\]{padding-top:136px}.md\\:pt-36{padding-top:9rem}.md\\:pt-8{padding-top:2rem}.md\\:pt-\\[140px\\]{padding-top:140px}.md\\:pb-10{padding-bottom:2.5rem}.md\\:pr-2{padding-right:0.5rem}.md\\:pb-6{padding-bottom:1.5rem}.md\\:pt-\\[29px\\]{padding-top:29px}.md\\:pb-\\[57px\\]{padding-bottom:57px}.md\\:pb-28{padding-bottom:7rem}.md\\:pb-\\[100px\\]{padding-bottom:100px}.md\\:pt-0{padding-top:0px}.md\\:pt-2{padding-top:0.5rem}.md\\:pl-\\[35\\.79px\\]{padding-left:35.79px}.md\\:pr-\\[35\\.8px\\]{padding-right:35.8px}.md\\:pl-4{padding-left:1rem}.md\\:pr-0{padding-right:0px}.md\\:\\!pr-4{padding-right:1rem !important}.md\\:pt-\\[110px\\]{padding-top:110px}.md\\:pt-\\[202px\\]{padding-top:202px}.md\\:pb-\\[134px\\]{padding-bottom:134px}.md\\:pl-9{padding-left:2.25rem}.md\\:pr-7{padding-right:1.75rem}.md\\:pl-7{padding-left:1.75rem}.md\\:text-left{text-align:left}.md\\:text-\\[45px\\]{font-size:45px}.md\\:text-\\[31px\\]{font-size:31px}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-\\[40px\\]{font-size:40px}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-\\[26px\\]{font-size:26px}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-xs{font-size:0.75rem;line-height:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.md\\:text-\\[22px\\]{font-size:22px}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-\\[19px\\]{font-size:19px}.md\\:text-\\[13px\\]{font-size:13px}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-\\[14px\\]{font-size:14px}.md\\:leading-\\[55px\\]{line-height:55px}.md\\:leading-6{line-height:1.5rem}.md\\:leading-4{line-height:1rem}.md\\:leading-\\[53px\\]{line-height:53px}.md\\:leading-\\[26px\\]{line-height:26px}.md\\:leading-\\[43px\\]{line-height:43px}.md\\:leading-\\[39px\\]{line-height:39px}.md\\:leading-5{line-height:1.25rem}.md\\:leading-\\[50px\\]{line-height:50px}.md\\:leading-8{line-height:2rem}.md\\:leading-10{line-height:2.5rem}.md\\:leading-\\[17px\\]{line-height:17px}.md\\:leading-9{line-height:2.25rem}.md\\:leading-\\[20px\\]{line-height:20px}.md\\:-tracking-\\[0\\.04px\\]{letter-spacing:-0.04px}.md\\:text-\\[\\#707070\\]{--tw-text-opacity:1;color:rgb(112 112 112 / var(--tw-text-opacity))}.md\\:shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.md\\:before\\:\\!w-0::before{content:var(--tw-content);width:0px !important}.md\\:first\\:border-r:first-child{border-right-width:1px}.md\\:hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.md\\:hover\\:text-primary:hover{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.group:hover .group-hover\\:md\\:\\!inline-block{display:inline-block !important}.group:hover .md\\:group-hover\\:text-primary{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}}@media (min-width: 1024px){.lg\\:container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){.lg\\:container{max-width:640px}}@media (min-width: 768px){.lg\\:container{max-width:768px}}@media (min-width: 1024px){.lg\\:container{max-width:1024px}}@media (min-width: 1230px){.lg\\:container{max-width:1230px}}.lg\\:fixed{position:fixed}.lg\\:absolute{position:absolute}.lg\\:left-3{left:0.75rem}.lg\\:top-3{top:0.75rem}.lg\\:top-\\[47px\\]{top:47px}.lg\\:top-\\[55px\\]{top:55px}.lg\\:\\!left-11{left:2.75rem !important}.lg\\:\\!top-\\[1px\\]{top:1px !important}.lg\\:right-2\\.5{right:0.625rem}.lg\\:right-2{right:0.5rem}.lg\\:\\!-left-16{left:-4rem !important}.lg\\:top-0{top:0px}.lg\\:-top-\\[60px\\]{top:-60px}.lg\\:-bottom-16{bottom:-4rem}.lg\\:order-1{order:1}.lg\\:order-2{order:2}.lg\\:col-span-2{grid-column:span 2 / span 2}.lg\\:col-span-4{grid-column:span 4 / span 4}.lg\\:col-span-3{grid-column:span 3 / span 3}.lg\\:-mx-7{margin-left:-1.75rem;margin-right:-1.75rem}.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:-mx-2{margin-left:-0.5rem;margin-right:-0.5rem}.lg\\:mt-\\[114px\\]{margin-top:114px}.lg\\:ml-\\[40\\%\\]{margin-left:40%}.lg\\:mb-\\[54px\\]{margin-bottom:54px}.lg\\:mt-\\[204px\\]{margin-top:204px}.lg\\:mb-\\[102px\\]{margin-bottom:102px}.lg\\:mr-0{margin-right:0px}.lg\\:mb-10{margin-bottom:2.5rem}.lg\\:mb-\\[27px\\]{margin-bottom:27px}.lg\\:mb-\\[67px\\]{margin-bottom:67px}.lg\\:mb-\\[26px\\]{margin-bottom:26px}.lg\\:-mt-\\[128px\\]{margin-top:-128px}.lg\\:mb-\\[85px\\]{margin-bottom:85px}.lg\\:mb-\\[106px\\]{margin-bottom:106px}.lg\\:mt-\\[31px\\]{margin-top:31px}.lg\\:ml-12{margin-left:3rem}.lg\\:mt-3{margin-top:0.75rem}.lg\\:mt-\\[152px\\]{margin-top:152px}.lg\\:mt-40{margin-top:10rem}.lg\\:mt-24{margin-top:6rem}.lg\\:mb-\\[34px\\]{margin-bottom:34px}.lg\\:mt-7{margin-top:1.75rem}.lg\\:mt-\\[58px\\]{margin-top:58px}.lg\\:mb-20{margin-bottom:5rem}.lg\\:mb-16{margin-bottom:4rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-\\[100vh\\]{height:100vh}.lg\\:h-\\[30px\\]{height:30px}.lg\\:h-full{height:100%}.lg\\:h-\\[800px\\]{height:800px}.lg\\:h-48{height:12rem}.lg\\:h-\\[571px\\]{height:571px}.lg\\:h-\\[380px\\]{height:380px}.lg\\:h-\\[38px\\]{height:38px}.lg\\:h-12{height:3rem}.lg\\:h-5{height:1.25rem}.lg\\:h-\\[20px\\]{height:20px}.lg\\:h-\\[25px\\]{height:25px}.lg\\:h-\\[22px\\]{height:22px}.lg\\:h-\\[23px\\]{height:23px}.lg\\:h-auto{height:auto}.lg\\:h-\\[277px\\]{height:277px}.lg\\:max-h-\\[106px\\]{max-height:106px}.lg\\:\\!max-h-\\[610px\\]{max-height:610px !important}.lg\\:min-h-\\[192px\\]{min-height:192px}.lg\\:min-h-\\[120px\\]{min-height:120px}.lg\\:w-2\\/5{width:40%}.lg\\:w-\\[30px\\]{width:30px}.lg\\:w-3\\/5{width:60%}.lg\\:w-\\[95\\%\\]{width:95%}.lg\\:w-1\\/3{width:33.333333%}.lg\\:w-\\[66px\\]{width:66px}.lg\\:w-\\[38px\\]{width:38px}.lg\\:w-12{width:3rem}.lg\\:w-\\[25px\\]{width:25px}.lg\\:w-\\[34px\\]{width:34px}.lg\\:w-\\[22px\\]{width:22px}.lg\\:w-\\[29px\\]{width:29px}.lg\\:w-5\\/6{width:83.333333%}.lg\\:\\!min-w-\\[294px\\]{min-width:294px !important}.lg\\:max-w-\\[322px\\]{max-width:322px}.lg\\:max-w-\\[527px\\]{max-width:527px}.lg\\:max-w-sm{max-width:24rem}.lg\\:max-w-\\[500px\\]{max-width:500px}.lg\\:max-w-\\[470px\\]{max-width:470px}.lg\\:max-w-\\[450px\\]{max-width:450px}.lg\\:max-w-\\[333px\\]{max-width:333px}.lg\\:max-w-\\[332px\\]{max-width:332px}.lg\\:max-w-\\[490px\\]{max-width:490px}.lg\\:max-w-\\[1114px\\]{max-width:1114px}.lg\\:max-w-\\[455px\\]{max-width:455px}.lg\\:max-w-\\[510px\\]{max-width:510px}.lg\\:max-w-\\[950px\\]{max-width:950px}.lg\\:max-w-\\[422px\\]{max-width:422px}.lg\\:max-w-\\[350px\\]{max-width:350px}.lg\\:max-w-\\[250px\\]{max-width:250px}.lg\\:max-w-\\[670px\\]{max-width:670px}.lg\\:shrink-0{flex-shrink:0}.lg\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\\:grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.lg\\:grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:gap-\\[50px\\]{gap:50px}.lg\\:gap-24{gap:6rem}.lg\\:gap-20{gap:5rem}.lg\\:gap-5{gap:1.25rem}.lg\\:gap-\\[70px\\]{gap:70px}.lg\\:gap-16{gap:4rem}.lg\\:gap-4{gap:1rem}.lg\\:gap-10{gap:2.5rem}.lg\\:gap-\\[60px\\]{gap:60px}.lg\\:gap-\\[103px\\]{gap:103px}.lg\\:gap-y-14{row-gap:3.5rem}.lg\\:gap-y-28{row-gap:7rem}.lg\\:gap-y-\\[76px\\]{row-gap:76px}.lg\\:gap-y-\\[40px\\]{row-gap:40px}.lg\\:space-y-0 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.lg\\:divide-x > :not([hidden]) ~ :not([hidden]){--tw-divide-x-reverse:0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.lg\\:divide-y-0 > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(0px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(0px * var(--tw-divide-y-reverse))}.lg\\:overflow-visible{overflow:visible}.lg\\:whitespace-nowrap{white-space:nowrap}.lg\\:rounded-xl{border-radius:0.75rem}.lg\\:border-0{border-width:0px}.lg\\:border-r{border-right-width:1px}.lg\\:border-t{border-top-width:1px}.lg\\:border-l{border-left-width:1px}.lg\\:border-\\[\\#1A9CEA\\]{--tw-border-opacity:1;border-color:rgb(26 156 234 / var(--tw-border-opacity))}.lg\\:bg-center{background-position:center}.lg\\:bg-\\[center_top_25\\%\\]{background-position:center top 25%}.lg\\:bg-left-top{background-position:left top}.lg\\:p-8{padding:2rem}.lg\\:p-10{padding:2.5rem}.lg\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.lg\\:px-\\[97px\\]{padding-left:97px;padding-right:97px}.lg\\:px-\\[30px\\]{padding-left:30px;padding-right:30px}.lg\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.lg\\:py-20{padding-top:5rem;padding-bottom:5rem}.lg\\:py-\\[80px\\]{padding-top:80px;padding-bottom:80px}.lg\\:py-\\[44px\\]{padding-top:44px;padding-bottom:44px}.lg\\:px-4{padding-left:1rem;padding-right:1rem}.lg\\:py-\\[30px\\]{padding-top:30px;padding-bottom:30px}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.lg\\:py-16{padding-top:4rem;padding-bottom:4rem}.lg\\:py-\\[25px\\]{padding-top:25px;padding-bottom:25px}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:px-7{padding-left:1.75rem;padding-right:1.75rem}.lg\\:py-0{padding-top:0px;padding-bottom:0px}.lg\\:py-\\[50px\\]{padding-top:50px;padding-bottom:50px}.lg\\:pt-5{padding-top:1.25rem}.lg\\:pt-0{padding-top:0px}.lg\\:pt-\\[102px\\]{padding-top:102px}.lg\\:pt-24{padding-top:6rem}.lg\\:pb-\\[198px\\]{padding-bottom:198px}.lg\\:pt-\\[93px\\]{padding-top:93px}.lg\\:pb-\\[219px\\]{padding-bottom:219px}.lg\\:pb-\\[150px\\]{padding-bottom:150px}.lg\\:pb-0{padding-bottom:0px}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-\\[116px\\]{padding-top:116px}.lg\\:pb-\\[97px\\]{padding-bottom:97px}.lg\\:pb-\\[240px\\]{padding-bottom:240px}.lg\\:pb-\\[74px\\]{padding-bottom:74px}.lg\\:pt-\\[222px\\]{padding-top:222px}.lg\\:pb-\\[120px\\]{padding-bottom:120px}.lg\\:pt-\\[166px\\]{padding-top:166px}.lg\\:pb-\\[90px\\]{padding-bottom:90px}.lg\\:pt-20{padding-top:5rem}.lg\\:pt-\\[29px\\]{padding-top:29px}.lg\\:pt-\\[114px\\]{padding-top:114px}.lg\\:pb-\\[175px\\]{padding-bottom:175px}.lg\\:pt-\\[280px\\]{padding-top:280px}.lg\\:pb-16{padding-bottom:4rem}.lg\\:pt-40{padding-top:10rem}.lg\\:pr-2{padding-right:0.5rem}.lg\\:pt-\\[30px\\]{padding-top:30px}.lg\\:pt-\\[128px\\]{padding-top:128px}.lg\\:pt-8{padding-top:2rem}.lg\\:pb-\\[43px\\]{padding-bottom:43px}.lg\\:pl-\\[39\\.55px\\]{padding-left:39.55px}.lg\\:pr-\\[39\\.55px\\]{padding-right:39.55px}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pl-\\[90px\\]{padding-left:90px}.lg\\:pl-\\[97px\\]{padding-left:97px}.lg\\:\\!pr-\\[97px\\]{padding-right:97px !important}.lg\\:pt-\\[168px\\]{padding-top:168px}.lg\\:pt-\\[169px\\]{padding-top:169px}.lg\\:pt-\\[78px\\]{padding-top:78px}.lg\\:pt-\\[104px\\]{padding-top:104px}.lg\\:pb-\\[44px\\]{padding-bottom:44px}.lg\\:pt-\\[50px\\]{padding-top:50px}.lg\\:pb-\\[113px\\]{padding-bottom:113px}.lg\\:pb-\\[87px\\]{padding-bottom:87px}.lg\\:pt-\\[92px\\]{padding-top:92px}.lg\\:pb-\\[54px\\]{padding-bottom:54px}.lg\\:pt-\\[87px\\]{padding-top:87px}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.lg\\:text-\\[25px\\]{font-size:25px}.lg\\:text-base{font-size:1rem;line-height:1.5rem}.lg\\:text-sm{font-size:0.875rem;line-height:1.25rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-\\[23px\\]{font-size:23px}.lg\\:text-\\[22px\\]{font-size:22px}.lg\\:text-\\[21px\\]{font-size:21px}.lg\\:text-\\[32px\\]{font-size:32px}.lg\\:text-\\[41px\\]{font-size:41px}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}.lg\\:text-\\[40px\\]{font-size:40px}.lg\\:text-\\[30px\\]{font-size:30px}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:leading-\\[43px\\]{line-height:43px}.lg\\:leading-8{line-height:2rem}.lg\\:leading-9{line-height:2.25rem}.lg\\:leading-\\[31px\\]{line-height:31px}.lg\\:leading-\\[54px\\]{line-height:54px}.lg\\:leading-\\[30px\\]{line-height:30px}.lg\\:leading-\\[56px\\]{line-height:56px}.lg\\:leading-\\[38px\\]{line-height:38px}.lg\\:leading-\\[22px\\]{line-height:22px}.lg\\:leading-\\[35px\\]{line-height:35px}.lg\\:leading-7{line-height:1.75rem}.lg\\:shadow-\\[0_1px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.06\\)\\]{--tw-shadow:0 1px 8px rgba(0,0,0,0.06);--tw-shadow-colored:0 1px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.lg\\:hover\\:border-\\[\\#1A9CEA\\]:hover{--tw-border-opacity:1;border-color:rgb(26 156 234 / var(--tw-border-opacity))}}@media (min-width: 1230px){.xl\\:\\!absolute{position:absolute !important}.xl\\:left-7{left:1.75rem}.xl\\:top-7{top:1.75rem}.xl\\:\\!top-\\[68px\\]{top:68px !important}.xl\\:top-\\[106px\\]{top:106px}.xl\\:top-\\[54px\\]{top:54px}.xl\\:top-\\[114px\\]{top:114px}.xl\\:left-5{left:1.25rem}.xl\\:left-28{left:7rem}.xl\\:right-6{right:1.5rem}.xl\\:top-32{top:8rem}.xl\\:top-5{top:1.25rem}.xl\\:z-30{z-index:30}.xl\\:col-span-2{grid-column:span 2 / span 2}.xl\\:my-6{margin-top:1.5rem;margin-bottom:1.5rem}.xl\\:my-28{margin-top:7rem;margin-bottom:7rem}.xl\\:mt-\\[114px\\]{margin-top:114px}.xl\\:mb-\\[26px\\]{margin-bottom:26px}.xl\\:mb-6{margin-bottom:1.5rem}.xl\\:mb-\\[68px\\]{margin-bottom:68px}.xl\\:mb-4{margin-bottom:1rem}.xl\\:mb-0{margin-bottom:0px}.xl\\:mt-\\[18px\\]{margin-top:18px}.xl\\:mb-16{margin-bottom:4rem}.xl\\:mb-20{margin-bottom:5rem}.xl\\:mb-\\[46px\\]{margin-bottom:46px}.xl\\:mb-\\[30px\\]{margin-bottom:30px}.xl\\:mt-\\[110px\\]{margin-top:110px}.xl\\:mb-9{margin-bottom:2.25rem}.xl\\:mb-\\[55px\\]{margin-bottom:55px}.xl\\:mb-3{margin-bottom:0.75rem}.xl\\:mb-\\[25px\\]{margin-bottom:25px}.xl\\:mb-5{margin-bottom:1.25rem}.xl\\:-mt-\\[10\\%\\]{margin-top:-10%}.xl\\:mb-\\[154px\\]{margin-bottom:154px}.xl\\:mb-\\[19px\\]{margin-bottom:19px}.xl\\:mr-\\[60px\\]{margin-right:60px}.xl\\:mt-7{margin-top:1.75rem}.xl\\:mt-3{margin-top:0.75rem}.xl\\:ml-\\[13\\%\\]{margin-left:13%}.xl\\:mt-\\[13px\\]{margin-top:13px}.xl\\:mb-\\[45px\\]{margin-bottom:45px}.xl\\:mt-\\[106px\\]{margin-top:106px}.xl\\:mb-\\[85px\\]{margin-bottom:85px}.xl\\:block{display:block}.xl\\:inline-block{display:inline-block}.xl\\:flex{display:flex}.xl\\:hidden{display:none}.xl\\:h-\\[500px\\]{height:500px}.xl\\:h-\\[126px\\]{height:126px}.xl\\:h-\\[214px\\]{height:214px}.xl\\:h-10{height:2.5rem}.xl\\:h-\\[54px\\]{height:54px}.xl\\:h-\\[6px\\]{height:6px}.xl\\:h-\\[127px\\]{height:127px}.xl\\:h-\\[173px\\]{height:173px}.xl\\:h-\\[calc\\(100\\%-173px\\)\\]{height:calc(100% - 173px)}.xl\\:h-\\[246px\\]{height:246px}.xl\\:h-auto{height:auto}.xl\\:h-4{height:1rem}.xl\\:h-\\[307px\\]{height:307px}.xl\\:h-0{height:0px}.xl\\:h-\\[364px\\]{height:364px}.xl\\:h-\\[276px\\]{height:276px}.xl\\:h-28{height:7rem}.xl\\:h-\\[138px\\]{height:138px}.xl\\:h-\\[340px\\]{height:340px}.xl\\:h-\\[65px\\]{height:65px}.xl\\:h-\\[75px\\]{height:75px}.xl\\:h-\\[835px\\]{height:835px}.xl\\:h-\\[474px\\]{height:474px}.xl\\:h-\\[438px\\]{height:438px}.xl\\:\\!h-\\[100vh\\]{height:100vh !important}.xl\\:h-\\[calc\\(100\\%-276px\\)\\]{height:calc(100% - 276px)}.xl\\:h-\\[calc\\(100\\%-340px\\)\\]{height:calc(100% - 340px)}.xl\\:min-h-\\[144px\\]{min-height:144px}.xl\\:min-h-\\[420px\\]{min-height:420px}.xl\\:min-h-\\[220px\\]{min-height:220px}.xl\\:min-h-screen{min-height:100vh}.xl\\:w-\\[17px\\]{width:17px}.xl\\:w-\\[126px\\]{width:126px}.xl\\:w-\\[54px\\]{width:54px}.xl\\:w-\\[11px\\]{width:11px}.xl\\:w-\\[127px\\]{width:127px}.xl\\:w-4{width:1rem}.xl\\:w-72{width:18rem}.xl\\:w-56{width:14rem}.xl\\:w-\\[497px\\]{width:497px}.xl\\:w-\\[276px\\]{width:276px}.xl\\:w-\\[105px\\]{width:105px}.xl\\:w-\\[150px\\]{width:150px}.xl\\:w-\\[138px\\]{width:138px}.xl\\:w-\\[96px\\]{width:96px}.xl\\:w-\\[128px\\]{width:128px}.xl\\:w-\\[107px\\]{width:107px}.xl\\:w-\\[70px\\]{width:70px}.xl\\:w-\\[80px\\]{width:80px}.xl\\:w-\\[340px\\]{width:340px}.xl\\:w-\\[65px\\]{width:65px}.xl\\:w-\\[75px\\]{width:75px}.xl\\:w-80{width:20rem}.xl\\:w-5{width:1.25rem}.xl\\:w-\\[93px\\]{width:93px}.xl\\:w-\\[87\\%\\]{width:87%}.xl\\:w-auto{width:auto}.xl\\:max-w-\\[732px\\]{max-width:732px}.xl\\:max-w-\\[570px\\]{max-width:570px}.xl\\:max-w-\\[490px\\]{max-width:490px}.xl\\:max-w-\\[766px\\]{max-width:766px}.xl\\:max-w-\\[425px\\]{max-width:425px}.xl\\:max-w-\\[624px\\]{max-width:624px}.xl\\:max-w-\\[410px\\]{max-width:410px}.xl\\:max-w-\\[608px\\]{max-width:608px}.xl\\:max-w-\\[535px\\]{max-width:535px}.xl\\:max-w-\\[462px\\]{max-width:462px}.xl\\:max-w-\\[438px\\]{max-width:438px}.xl\\:max-w-\\[406px\\]{max-width:406px}.xl\\:max-w-\\[605px\\]{max-width:605px}.xl\\:max-w-\\[845px\\]{max-width:845px}.xl\\:max-w-\\[700px\\]{max-width:700px}.xl\\:max-w-\\[626px\\]{max-width:626px}.xl\\:max-w-\\[590px\\]{max-width:590px}.xl\\:max-w-\\[660px\\]{max-width:660px}.xl\\:max-w-\\[463px\\]{max-width:463px}.xl\\:max-w-\\[529px\\]{max-width:529px}.xl\\:flex-grow{flex-grow:1}.xl\\:\\!rotate-180{--tw-rotate:180deg !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important}.xl\\:rotate-0{--tw-rotate:0deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.xl\\:columns-3{-moz-columns:3;columns:3}.xl\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.xl\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.xl\\:grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.xl\\:flex-row{flex-direction:row}.xl\\:flex-nowrap{flex-wrap:nowrap}.xl\\:items-center{align-items:center}.xl\\:justify-start{justify-content:flex-start}.xl\\:\\!justify-center{justify-content:center !important}.xl\\:justify-between{justify-content:space-between}.xl\\:gap-20{gap:5rem}.xl\\:gap-7{gap:1.75rem}.xl\\:gap-36{gap:9rem}.xl\\:gap-\\[45px\\]{gap:45px}.xl\\:gap-\\[52px\\]{gap:52px}.xl\\:gap-4{gap:1rem}.xl\\:gap-10{gap:2.5rem}.xl\\:gap-32{gap:8rem}.xl\\:gap-52{gap:13rem}.xl\\:gap-8{gap:2rem}.xl\\:gap-24{gap:6rem}.xl\\:gap-\\[98px\\]{gap:98px}.xl\\:gap-5{gap:1.25rem}.xl\\:gap-\\[107px\\]{gap:107px}.xl\\:gap-40{gap:10rem}.xl\\:gap-\\[100px\\]{gap:100px}.xl\\:gap-\\[140px\\]{gap:140px}.xl\\:gap-\\[34px\\]{gap:34px}.xl\\:gap-\\[248px\\]{gap:248px}.xl\\:gap-\\[15px\\]{gap:15px}.xl\\:gap-\\[83px\\]{gap:83px}.xl\\:space-y-28 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(7rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(7rem * var(--tw-space-y-reverse))}.xl\\:space-y-9 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.25rem * var(--tw-space-y-reverse))}.xl\\:space-y-8 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.xl\\:overflow-visible{overflow:visible}.xl\\:border-b{border-bottom-width:1px}.xl\\:border-t{border-top-width:1px}.xl\\:border-b-0{border-bottom-width:0px}.xl\\:border-b-\\[9px\\]{border-bottom-width:9px}.xl\\:border-b-8{border-bottom-width:8px}.xl\\:bg-\\[center_top_12\\%\\]{background-position:center top 12%}.xl\\:p-14{padding:3.5rem}.xl\\:p-8{padding:2rem}.xl\\:p-\\[60px\\]{padding:60px}.xl\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem}.xl\\:px-4{padding-left:1rem;padding-right:1rem}.xl\\:px-\\[93px\\]{padding-left:93px;padding-right:93px}.xl\\:py-\\[34px\\]{padding-top:34px;padding-bottom:34px}.xl\\:py-20{padding-top:5rem;padding-bottom:5rem}.xl\\:py-\\[15px\\]{padding-top:15px;padding-bottom:15px}.xl\\:py-32{padding-top:8rem;padding-bottom:8rem}.xl\\:px-12{padding-left:3rem;padding-right:3rem}.xl\\:px-\\[26px\\]{padding-left:26px;padding-right:26px}.xl\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.xl\\:px-\\[30px\\]{padding-left:30px;padding-right:30px}.xl\\:py-16{padding-top:4rem;padding-bottom:4rem}.xl\\:px-\\[67px\\]{padding-left:67px;padding-right:67px}.xl\\:py-\\[114px\\]{padding-top:114px;padding-bottom:114px}.xl\\:py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.xl\\:px-20{padding-left:5rem;padding-right:5rem}.xl\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.xl\\:py-\\[100px\\]{padding-top:100px;padding-bottom:100px}.xl\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.xl\\:py-0{padding-top:0px;padding-bottom:0px}.xl\\:px-16{padding-left:4rem;padding-right:4rem}.xl\\:py-\\[22px\\]{padding-top:22px;padding-bottom:22px}.xl\\:px-0{padding-left:0px;padding-right:0px}.xl\\:py-24{padding-top:6rem;padding-bottom:6rem}.xl\\:py-4{padding-top:1rem;padding-bottom:1rem}.xl\\:pl-\\[65px\\]{padding-left:65px}.xl\\:pt-0{padding-top:0px}.xl\\:pb-\\[67px\\]{padding-bottom:67px}.xl\\:pl-20{padding-left:5rem}.xl\\:pb-20{padding-bottom:5rem}.xl\\:pt-\\[185px\\]{padding-top:185px}.xl\\:pt-\\[92px\\]{padding-top:92px}.xl\\:pt-\\[164px\\]{padding-top:164px}.xl\\:pb-0{padding-bottom:0px}.xl\\:pt-\\[243px\\]{padding-top:243px}.xl\\:pb-\\[176px\\]{padding-bottom:176px}.xl\\:pt-\\[108px\\]{padding-top:108px}.xl\\:pt-14{padding-top:3.5rem}.xl\\:pt-\\[291px\\]{padding-top:291px}.xl\\:pb-\\[75px\\]{padding-bottom:75px}.xl\\:pl-0{padding-left:0px}.xl\\:pt-6{padding-top:1.5rem}.xl\\:pb-4{padding-bottom:1rem}.xl\\:pb-\\[97px\\]{padding-bottom:97px}.xl\\:pl-\\[72px\\]{padding-left:72px}.xl\\:pr-11{padding-right:2.75rem}.xl\\:pb-\\[70px\\]{padding-bottom:70px}.xl\\:pt-28{padding-top:7rem}.xl\\:pb-\\[87px\\]{padding-bottom:87px}.xl\\:pt-\\[102px\\]{padding-top:102px}.xl\\:pb-\\[211px\\]{padding-bottom:211px}.xl\\:pt-\\[232px\\]{padding-top:232px}.xl\\:pb-\\[100px\\]{padding-bottom:100px}.xl\\:pt-\\[76px\\]{padding-top:76px}.xl\\:pt-\\[100px\\]{padding-top:100px}.xl\\:pb-\\[85px\\]{padding-bottom:85px}.xl\\:pt-12{padding-top:3rem}.xl\\:pt-\\[117px\\]{padding-top:117px}.xl\\:pt-20{padding-top:5rem}.xl\\:pb-14{padding-bottom:3.5rem}.xl\\:pt-\\[114px\\]{padding-top:114px}.xl\\:pt-\\[162px\\]{padding-top:162px}.xl\\:pb-\\[115px\\]{padding-bottom:115px}.xl\\:pt-\\[116px\\]{padding-top:116px}.xl\\:pt-\\[250px\\]{padding-top:250px}.xl\\:pb-\\[83px\\]{padding-bottom:83px}.xl\\:pt-\\[106px\\]{padding-top:106px}.xl\\:pt-\\[71px\\]{padding-top:71px}.xl\\:pb-10{padding-bottom:2.5rem}.xl\\:pt-\\[86px\\]{padding-top:86px}.xl\\:pt-\\[150px\\]{padding-top:150px}.xl\\:pl-10{padding-left:2.5rem}.xl\\:pt-5{padding-top:1.25rem}.xl\\:pt-\\[169px\\]{padding-top:169px}.xl\\:pb-\\[25px\\]{padding-bottom:25px}.xl\\:\\!pr-0{padding-right:0px !important}.xl\\:pl-4{padding-left:1rem}.xl\\:pb-\\[95px\\]{padding-bottom:95px}.xl\\:pt-\\[166px\\]{padding-top:166px}.xl\\:pb-\\[120px\\]{padding-bottom:120px}.xl\\:pt-\\[158px\\]{padding-top:158px}.xl\\:pb-\\[101px\\]{padding-bottom:101px}.xl\\:pt-\\[99px\\]{padding-top:99px}.xl\\:pt-\\[136px\\]{padding-top:136px}.xl\\:text-\\[19px\\]{font-size:19px}.xl\\:text-\\[28px\\]{font-size:28px}.xl\\:text-\\[18px\\]{font-size:18px}.xl\\:text-\\[60px\\]{font-size:60px}.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.xl\\:text-\\[26px\\]{font-size:26px}.xl\\:text-\\[40px\\]{font-size:40px}.xl\\:text-base{font-size:1rem;line-height:1.5rem}.xl\\:text-\\[21px\\]{font-size:21px}.xl\\:text-lg{font-size:1.125rem;line-height:1.75rem}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}.xl\\:text-\\[45px\\]{font-size:45px}.xl\\:text-sm{font-size:0.875rem;line-height:1.25rem}.xl\\:text-\\[25px\\]{font-size:25px}.xl\\:text-xs{font-size:0.75rem;line-height:1rem}.xl\\:text-\\[1\\.2rem\\]{font-size:1.2rem}.xl\\:text-\\[36px\\]{font-size:36px}.xl\\:text-\\[31px\\]{font-size:31px}.xl\\:text-\\[22px\\]{font-size:22px}.xl\\:text-\\[23px\\]{font-size:23px}.xl\\:text-\\[15px\\]{font-size:15px}.xl\\:text-\\[13px\\]{font-size:13px}.xl\\:text-\\[24px\\]{font-size:24px}.xl\\:text-\\[17px\\]{font-size:17px}.xl\\:text-\\[30px\\]{font-size:30px}.xl\\:text-\\[11px\\]{font-size:11px}.xl\\:text-\\[32px\\]{font-size:32px}.xl\\:text-6xl{font-size:3.75rem;line-height:1}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:text-\\[55px\\]{font-size:55px}.xl\\:text-\\[50px\\]{font-size:50px}.xl\\:text-\\[46px\\]{font-size:46px}.xl\\:text-\\[20px\\]{font-size:20px}.xl\\:font-normal{font-weight:400}.xl\\:font-semibold{font-weight:600}.xl\\:leading-\\[36px\\]{line-height:36px}.xl\\:leading-\\[53px\\]{line-height:53px}.xl\\:leading-6{line-height:1.5rem}.xl\\:leading-9{line-height:2.25rem}.xl\\:leading-\\[54px\\]{line-height:54px}.xl\\:leading-\\[23px\\]{line-height:23px}.xl\\:leading-7{line-height:1.75rem}.xl\\:leading-\\[21px\\]{line-height:21px}.xl\\:leading-\\[24px\\]{line-height:24px}.xl\\:leading-4{line-height:1rem}.xl\\:leading-\\[27px\\]{line-height:27px}.xl\\:leading-\\[32px\\]{line-height:32px}.xl\\:leading-\\[39px\\]{line-height:39px}.xl\\:leading-5{line-height:1.25rem}.xl\\:leading-8{line-height:2rem}.xl\\:leading-\\[34px\\]{line-height:34px}.xl\\:leading-\\[22px\\]{line-height:22px}.xl\\:leading-\\[60px\\]{line-height:60px}.xl\\:leading-\\[30px\\]{line-height:30px}.xl\\:leading-\\[65px\\]{line-height:65px}.xl\\:leading-3{line-height:.75rem}.xl\\:leading-\\[48px\\]{line-height:48px}.xl\\:leading-10{line-height:2.5rem}.xl\\:leading-\\[50px\\]{line-height:50px}.xl\\:leading-\\[18px\\]{line-height:18px}.xl\\:leading-\\[55px\\]{line-height:55px}.xl\\:leading-\\[56px\\]{line-height:56px}.xl\\:-tracking-\\[0\\.04px\\]{letter-spacing:-0.04px}.xl\\:-tracking-\\[0\\.03px\\]{letter-spacing:-0.03px}.xl\\:-tracking-\\[0\\.05px\\]{letter-spacing:-0.05px}.xl\\:-tracking-\\[-0\\.03px\\]{letter-spacing:0.03px}.xl\\:-tracking-\\[0\\.06px\\]{letter-spacing:-0.06px}.xl\\:-tracking-\\[0\\.07px\\]{letter-spacing:-0.07px}}.\\[\\&\\>br\\]\\:block>br{display:block}.\\[\\&\\>br\\]\\:inline-block>br{display:inline-block}.\\[\\&\\>br\\]\\:hidden>br{display:none}@media (min-width: 640px){.\\[\\&\\>br\\]\\:sm\\:hidden>br{display:none}.sm\\:\\[\\&\\>br\\]\\:hidden>br{display:none}}@media (min-width: 768px){.md\\:\\[\\&\\>br\\]\\:block>br{display:block}.\\[\\&\\>br\\]\\:md\\:inline-block>br{display:inline-block}.\\[\\&\\>br\\]\\:md\\:hidden>br{display:none}}.\\[\\&\\>span\\]\\:border-b-\\[5px\\]>span{border-bottom-width:5px}.\\[\\&\\>span\\]\\:border-b-\\[2px\\]>span{border-bottom-width:2px}.\\[\\&\\>span\\]\\:border-primary>span{--tw-border-opacity:1;border-color:rgb(0 173 255 / var(--tw-border-opacity))}.\\[\\&\\>span\\]\\:border-green>span{--tw-border-opacity:1;border-color:rgb(89 205 83 / var(--tw-border-opacity))}.\\[\\&\\>span\\]\\:text-primary>span{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.\\[\\&\\>span\\]\\:text-green>span{--tw-text-opacity:1;color:rgb(89 205 83 / var(--tw-text-opacity))}.\\[\\&\\>span\\]\\:text-black\\/30>span{color:rgb(0 0 0 / 0.3)}.group:hover .\\[\\&\\>span\\]\\:group-hover\\:text-primary>span{--tw-text-opacity:1;color:rgb(0 173 255 / var(--tw-text-opacity))}.\\[\\&\\>span\\>br\\]\\:block>span>br{display:block}@media (min-width: 768px){.\\[\\&\\>span\\>br\\]\\:md\\:hidden>span>br{display:none}}.\\[\\&\\>a\\]\\:cursor-pointer>a{cursor:pointer}.\\[\\&\\>a\\]\\:underline>a{-webkit-text-decoration-line:underline;text-decoration-line:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_menu_bar_vue_vue_type_style_index_0_id_0ad7d989_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_menu_bar_vue_vue_type_style_index_0_id_0ad7d989_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_menu_bar_vue_vue_type_style_index_0_id_0ad7d989_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_menu_bar_vue_vue_type_style_index_0_id_0ad7d989_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_menu_bar_vue_vue_type_style_index_0_id_0ad7d989_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-left-to-right-enter-active[data-v-0ad7d989],.slide-left-to-right-enter-to[data-v-0ad7d989],.slide-left-to-right-leave-active[data-v-0ad7d989]{left:0;transition-property:left,opacity;transition-duration:.5s;transition-timing-function:linear}.slide-left-to-right-enter-to[data-v-0ad7d989]{opacity:1}.slide-left-to-right-enter[data-v-0ad7d989]{left:100%!important}.slide-left-to-right-leave-to[data-v-0ad7d989]{opacity:1;transition-delay:.3s!important;left:100%!important;transition:all .5s linear,opacity .5s;transition-property:left,opacity}.is-expanded[data-v-0ad7d989]{transition-delay:0s;transform:scaleY(1);transition:transform .25s .25s;transform-origin:0 0}.is-not-expanded[data-v-0ad7d989]{transform:scaleY(0);transition:all .25s linear;transform-origin:0 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".left-right-animation{transition:left .4s}.left-side-megamenu{transition:left .6s ease-in-out;transform:translateZ(0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_offices_vue_vue_type_style_index_0_id_10d95ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_offices_vue_vue_type_style_index_0_id_10d95ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_offices_vue_vue_type_style_index_0_id_10d95ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_offices_vue_vue_type_style_index_0_id_10d95ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_offices_vue_vue_type_style_index_0_id_10d95ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-left-to-right-enter-active[data-v-10d95ab2],.slide-left-to-right-leave-active[data-v-10d95ab2]{transition:.5s}.slide-left-to-right-enter[data-v-10d95ab2],.slide-left-to-right-leave-to[data-v-10d95ab2]{transform:translateX(360px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_language_english_vue_vue_type_style_index_0_id_444f20be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_language_english_vue_vue_type_style_index_0_id_444f20be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_language_english_vue_vue_type_style_index_0_id_444f20be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_language_english_vue_vue_type_style_index_0_id_444f20be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_header_right_side_bar_menu_language_english_vue_vue_type_style_index_0_id_444f20be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-left-to-right-enter-active[data-v-444f20be],.slide-left-to-right-leave-active[data-v-444f20be]{transition:.5s}.slide-left-to-right-enter[data-v-444f20be],.slide-left-to-right-leave-to[data-v-444f20be]{transform:translateX(360px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 89 */
/***/ (function(module, exports) {



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  open: false,
  isDropdownOpen: false,
  menubarSearch: false,
  isMenuBarSearchExpanded: false,
  isLevel1Open: false,
  isLevel2Open: false,
  dropdown: {
    about: false,
    consulting: false,
    financing: false,
    technology: false,
    legal: false,
    careers: false,
    search: false,
    industries: false,
    offices: false,
    language: false
  },
  searchModeOn: false,
  desktopNavbar: [{
    name: 'About',
    url: '/about-us',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'About',
      url: '/about-us',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-3',
      navChildItems: [[{
        name: 'What We Do',
        url: '/about-us/what-we-do',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Our Team',
        url: '/about-us/our-team',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Our Leadership',
        url: '/about-us/our-leadership',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Founder’s Bio',
        url: '/about-us/founders-bio',
        isOpened: false,
        strapiId: ''
      }]
      /*
      [
          {
              name: 'Client Results',
              url: '/about-us/client-results',
              isOpened: false,
              strapiId: '',
          },
            {
              name: 'Partnerships',
              url: '/about-us/partnerships',
              isOpened: false,
              strapiId: '',
          },
            {
              name: 'Awards and Recognition',
              url: '/about-us/awards-and-recognition',
              isOpened: false,
              strapiId: '',
          },
      ],
      [
          {
              name: 'Social Impact',
              url: '/about-us/social-impact',
              isOpened: false,
              strapiId: '',
          },
            {
              name: 'Sustainability',
              url: '/about-us/sustainability',
              isOpened: false,
              strapiId: '',
          },
            {
              name: 'Diversity',
              url: '/about-us/diversity',
              isOpened: false,
              strapiId: '',
          },
      ],
      */]
    }]
  }, {
    name: 'Consulting',
    url: '/consulting',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Consulting',
      url: '/consulting',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-5',
      childClass: '',
      navChildItems: [[{
        name: 'Management Consulting',
        url: '/consulting/management-consulting',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Restructuring Operations',
        url: '/consulting/restructuring-operations',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Digital Marketing',
        url: '/consulting/digital-marketing',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Revenue Growth',
        url: '/consulting/revenue-growth',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Agile Implementation',
        url: '/consulting/agile-implementation',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Transformation Modification & Integration',
        url: '/consulting/transformation-modification-and-integration',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Customer Experience',
        url: '/consulting/customer-experience',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Financial Advisory',
        url: '/consulting/financial-advisory',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Strategy',
        url: '/consulting/strategy',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Human Resources',
        url: '/consulting/human-resources',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Industries',
        url: '/consulting/industries',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Cannabis Licensing and Application Support',
        url: '/consulting/cannabis-licensing-and-application-support',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'New Start-Up Technology',
        url: '/consulting/new-start-up-technology',
        isOpened: false,
        strapiId: ''
      }]]
    }, {
      name: 'Business Plans',
      url: '/consulting/business-plans',
      isOpened: false,
      class: 'col-6',
      strapiId: '',
      mainClass: 'col-span-9',
      subClass: 'grid grid-cols-4',
      childClass: 'w-1/4',
      navChildItems: [[{
        name: 'Investor Business Plans',
        url: '/consulting/business-plans/investor-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Immigration Business Plans',
        url: '/consulting/business-plans/immigration-business-plans',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'E-2 Business Plans',
          url: '/consulting/business-plans/e-2-business-plans',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'E-B1 Business Plans',
          url: '/consulting/business-plans/e-b1-business-plans',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'E-B5 Business Plans',
          url: '/consulting/business-plans/e-b5-business-plans',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'L-1A & L-1B Business Plans',
          url: '/consulting/business-plans/l-1a-and-l-1b-business-plans',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'SBA Lender Business Plans',
        url: '/consulting/business-plans/sba-lender-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Marketing Plan',
        url: '/consulting/business-plans/marketing-plan',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Restructuring Business Plan',
        url: '/consulting/business-plans/restructuring-business-plan',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Franchising Plan',
        url: '/consulting/business-plans/franchising-plan',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Cannabis Business Plan',
        url: '/consulting/business-plans/cannabis-business-plan',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Request For Proposal',
        url: '/consulting/business-plans/request-for-proposal',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Grant Business Plans',
        url: '/consulting/business-plans/grant-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Investor Pitch Deck',
        url: '/consulting/business-plans/investor-pitch-deck',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Financial Proforma',
        url: '/consulting/business-plans/financial-performa',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'White Paper',
        url: '/consulting/business-plans/white-papers',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Prospectus',
        url: '/consulting/business-plans/prospectus',
        isOpened: false,
        strapiId: ''
      }]]
    }, {
      name: 'Market Data Reports',
      url: '/market-data-plans',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-3',
      subClass: 'grid grid-cols-1',
      childClass: 'w-1/4',
      navChildItems: [[{
        name: 'Data Industry Reports',
        url: '/consulting/market-data-plans/data-industry-reports',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Feasibility Reports',
        url: '/consulting/market-data-plans/feasibility-reports',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'ETF & Stock Market Reports',
        url: '/consulting/market-data-plans/etf-and-stock-market-reports',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'COVID-19 Market Reports',
        url: '/consulting/market-data-plans/covid-19-market-reports',
        isOpened: false,
        strapiId: ''
      }]]
    }]
  }, {
    name: 'Financing',
    url: '/financing',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Financing',
      url: '/financing',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-3',
      childClass: 'w-1/4',
      navChildItems: [[{
        name: 'Private Placements',
        url: '/financing/private-placements',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Debt Financing',
        url: '/financing/debt-financing',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Initial Public Offering',
        url: '/financing/initial-public-offering',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Pre IPO',
        url: '/financing/pre-ipo',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Special Purpose Entity',
        url: '/financing/special-purpose-entity',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Crowdfunding',
        url: '/financing/crowdfunding',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Invest',
        url: '/financing/invest',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Regulation D',
        url: '/financing/regulation-d',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Reg A+',
          url: '/financing/regulation-d/reg-a+',
          isOpened: false,
          strapiId: ''
        }, {
          name: '506 (B) Relationship Investors',
          url: '/financing/regulation-d/506-b-relationship-investors',
          isOpened: false,
          strapiId: ''
        }, {
          name: '506 (C) Accredited Investors',
          url: '/financing/regulation-d/506-c-accredited-investors',
          isOpened: false,
          strapiId: ''
        }]
      }, {
        name: 'Private Placement Memorandum',
        url: '/financing/private-placement-memorandum',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Private Equity',
        url: '/financing/private-equity',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Leveraged Buyout (LBO)',
          url: '/financing/private-equity/leverage-buyout',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Hedge Fund',
          url: '/financing/private-equity/hedge-fund',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Venture Capital Fund',
          url: '/financing/private-equity/venture-capital-fund',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Growth Capital',
          url: '/financing/private-equity/growth-capital',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Real Estate',
          url: '/financing/private-equity/real-estate',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Infrastructure',
          url: '/financing/private-equity/infrastructure',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Funds of Funds',
          url: '/financing/private-equity/funds-of-funds',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Mezzanine Capital',
          url: '/financing/private-equity/mezzanine-capital',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Distressed Private Equity',
          url: '/financing/private-equity/distressed-private-equity',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Secondary Fund',
          url: '/financing/private-equity/seconday-fund',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'Mergers & Acquisitions',
        url: '/financing/mergers-and-acquisitions',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Post Merger Integration',
          url: '/financing/mergers-and-acquisitions/post-merger-inegration',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Divestitures',
          url: '/financing/mergers-and-acquisitions/divestitures',
          isOpened: false,
          strapiId: ''
        }]
      }, {
        name: 'Mergers & Acquisitions',
        url: '/financing/mergers-and-acquisitions',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Post Merger Integration',
          url: '/financing/mergers-and-acquisitions/post-merger-inegration',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Divestitures',
          url: '/financing/mergers-and-acquisitions/divestitures',
          isOpened: false,
          strapiId: ''
        }]
      }, {
        name: 'Due Diligence Certification',
        url: '/financing/due-diligence-certification',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Regulation S Offshore Offering',
        url: '/financing/regulation-s-offshore-offering',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Investment Portfolio Management',
        url: '/financing/investment-portfolio-management',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Forensic Accounting',
        url: '/financing/forensic-accounting',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Real Estate Investment Trust Fund',
        url: 'financing/real-estate-investment-trust-fund',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Securitization',
        url: '/financing/securitization',
        isOpened: false,
        strapiId: ''
      }]]
    }]
  }, {
    name: 'Technology',
    url: '/technology',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Technology',
      url: '/technology',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-2',
      childClass: '',
      navChildItems: [[{
        name: 'Agile',
        url: '/technology/agile',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Software Budgeting and Financials',
          url: '/technology/agile/software-budgeting-and-financials',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Prototypes',
          url: '/technology/agile/prototypes',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Backlog Feature Implementation',
          url: '/technology/agile/backlog-feature-implementation',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Functional Specification',
          url: '/technology/agile/functional-specification',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'Custom Design and Build',
        url: '/technology/custom-design-and-build',
        isOpened: false,
        class: 'row-span-full',
        strapiId: ''
      }, {
        name: 'Agile Implementation',
        url: '/technology/agile-implementation',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Data Analytics Implementation',
        url: '/technology/data-analytics-implementation',
        isOpened: false,
        strapiId: ''
      }]]
    }]
  }, {
    name: 'Legal',
    url: '/legal-advisory',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Legal',
      url: '/legal-advisory',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-4',
      childClass: 'w-1/4',
      navChildItems: [[{
        name: 'Intellectual Property',
        url: '/legal-advisory/intellectual-property',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Utility Patent',
          url: '/legal-advisory/intellectual-property/utility-patent',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Design Patent',
          url: '/legal-advisory/intellectual-property/design-patent',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Plant Patent',
          url: '/legal-advisory/intellectual-property/plant-patent',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Provisional and Non Provisional',
          url: '/legal-advisory/intellectual-property/provisional-and-non-provisional',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'Trademark',
        url: '/legal-advisory/trademark',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Copyright',
        url: '/legal-advisory/copyright',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Convertible Note(s)',
        url: '/legal-advisory/convertible-notes',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Chapter 11 Bankruptcy',
        url: '/legal-advisory/chapter-11-bankruptcy',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Commodity & Futures Contract',
        url: '/legal-advisory/commodity-and-futures-contract',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Initial Public Offering',
        url: '/legal-advisory/initial-public-offering',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Private Placement Memorandum',
        url: '/legal-advisory/private-place-memorandum',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Mergers & Acquisitions',
        url: '/legal-advisory/mergers-and-acquisitions',
        isOpened: false,
        strapiId: ''
      }], [{
        name: 'Securities Arbitration',
        url: '/legal-advisory/securities-arbitration',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Offering Memorandum (Canada)',
        url: '/legal-advisory/offering-memorandum-canada',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Legal Entity Structuring',
        url: '/legal-advisory/legal-entity-structuring',
        isOpened: false,
        strapiId: ''
      }]]
    }]
  }, {
    name: 'Careers',
    url: '/careers',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Careers',
      url: '/careers',
      isOpened: false,
      strapiId: '',
      mainClass: 'col-span-full',
      subClass: 'grid grid-cols-3',
      childClass: 'w-1/3',
      navChildItems: [[{
        name: 'Explore Roles',
        url: '/careers/explore-roles',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Associate Consultant Intern',
          url: '/careers/explore-roles/associate-consultant-intern',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Associate Consultant',
          url: '/careers/explore-roles/associate-consultant',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Summer Associate',
          url: '/careers/explore-roles/summer-associate',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Consultant',
          url: '/careers/explore-roles/consultant',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Advanced Degree Holders',
          url: '/careers/explore-roles/advanced-degree-holders',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Working Professionals',
          url: '/careers/explore-roles/working-professionals',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Analytics and Customer Insights',
          url: '/careers/explore-roles/analytics-and-customer-insights',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Digital & Innovation',
          url: '/careers/explore-roles/digital-and-innovation',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Business Services',
          url: '/careers/explore-roles/business-services',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'Meet Us',
        url: '/careers/meet-us',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'At an Event',
          url: '/careers/meet-us/at-an-event',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Our People',
          url: '/careers/meet-us/our-people',
          isOpened: false,
          strapiId: ''
        }]
      }], [{
        name: 'Prepare for an Interview',
        url: '/careers/prepare-for-an-interview',
        isOpened: false,
        strapiId: '',
        navChildItems: [{
          name: 'Case Interview',
          url: '/careers/prepare-for-an-interview/case-interview',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Experience Interview',
          url: '/careers/prepare-for-an-interview/experience-interview',
          isOpened: false,
          strapiId: ''
        }, {
          name: 'Other Interview Formats',
          url: '/careers/prepare-for-an-interview/other-interview-formats',
          isOpened: false,
          strapiId: ''
        }]
      }]]
    }]
  }],
  mobileNavbar: [{
    name: 'About',
    url: '/about-us',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'What We Do',
      url: '/about-us/what-we-do',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Our Team',
      url: '/about-us/our-team',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Our Leadership',
      url: '/about-us/our-leadership',
      isOpened: false,
      strapiId: ''
    }, {
      name: "Founder's Bio",
      url: '/about-us/founders-bio',
      isOpened: false,
      strapiId: ''
    }
    /*
    {
        name: 'Partnerships',
        url: '/about-us/partnerships',
        isOpened: false,
        strapiId: '',
    },
      {
        name: 'Awards and Recognition',
        url: '/about-us/awards-and-recognition',
        isOpened: false,
        strapiId: '',
    },
      {
        name: 'Social Impact',
        url: '/about-us/social-impact',
        isOpened: false,
        strapiId: '',
    },
      {
        name: 'Sustainability',
        url: '/about-us/sustainability',
        isOpened: false,
        strapiId: '',
    },
      {
        name: 'Diversity',
        url: '/about-us/diversity',
        isOpened: false,
        strapiId: '',
    },
    */]
  }, {
    name: 'Consulting',
    url: '/consulting',
    isOpened: false,
    strapiId: '',
    class: 'col-12',
    navChildItems: [{
      name: 'Management Consulting',
      url: '/consulting/management-consulting',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Restructuring Operations',
      url: '/consulting/restructuring-operations',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Digital Marketing',
      url: '/consulting/digital-marketing',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Revenue Growth',
      url: '/consulting/revenue-growth',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Agile Implementation',
      url: '/consulting/agile-implementation',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Transformation Modification & Integration',
      url: '/consulting/transformation-modification-and-integration',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Customer Experience',
      url: '/consulting/customer-experience',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Financial Advisory',
      url: '/consulting/financial-advisory',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Strategy',
      url: '/consulting/strategy',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Human Resources',
      url: '/consulting/human-resources',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Industries',
      url: '/consulting/industries',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Cannabis Licensing and Application Support',
      url: '/consulting/cannabis-licensing-and-application-support',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'New Start-Up Technology',
      url: '/consulting/new-start-up-technology',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Business Plans',
    url: '/consulting/business-plans',
    isOpened: false,
    class: 'col-6',
    strapiId: '',
    navChildItems: [{
      name: 'Investor Business Plans',
      url: '/consulting/business-plans/investor-business-plans',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Immigration Business Plans',
      url: '/consulting/business-plans/immigration-business-plans',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'E-2 Business Plans',
        url: '/consulting/business-plans/e-2-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'E-B1 Business Plans',
        url: '/consulting/business-plans/e-b1-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'E-B5 Business Plans',
        url: '/consulting/business-plans/e-b5-business-plans',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'L-1A & L-1B Business Plans',
        url: '/consulting/business-plans/l-1a-and-l-1b-business-plans',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'SBA Lender Business Plans',
      url: '/consulting/business-plans/sba-lender-business-plans',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Marketing Plan',
      url: '/consulting/business-plans/marketing-plan',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Restructuring Business Plan',
      url: '/consulting/business-plans/restructuring-business-plan',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Franchising Plan',
      url: '/consulting/business-plans/franchising-plan',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Cannabis Business Plan',
      url: '/consulting/business-plans/cannabis-business-plan',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Request For Proposal',
      url: '/consulting/business-plans/request-for-proposal',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Grant Business Plans',
      url: '/consulting/business-plans/grant-business-plans',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Investor Pitch Deck',
      url: '/consulting/business-plans/investor-pitch-deck',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Financial Proforma',
      url: '/consulting/business-plans/financial-performa',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Prospectus',
      url: '/consulting/business-plans/prospectus',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'White Paper',
      url: '/consulting/business-plans/white-papers',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Financing',
    url: '/financing',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Private Placements',
      url: '/financing/private-placements',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Due Diligence Certification',
      url: '/financing/due-diligence-certification',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Debt Financing',
      url: '/financing/debt-financing',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Initial Public Offering',
      url: '/financing/initial-public-offering',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Pre IPO',
      url: '/financing/pre-ipo',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Special Purpose Entity',
      url: '/financing/special-purpose-entity',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Crowdfunding',
      url: '/financing/crowdfunding',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Invest',
      url: '/financing/invest',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Regulation D',
      url: '/financing/regulation-d',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Reg A+',
        url: '/financing/regulation-d/reg-a+',
        isOpened: false,
        strapiId: ''
      }, {
        name: '506 (B) Relationship Investors',
        url: '/financing/regulation-d/506-b-relationship-investors',
        isOpened: false,
        strapiId: ''
      }, {
        name: '506 (C) Accredited Investors',
        url: '/financing/regulation-d/506-c-accredited-investors',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Private Placement Memorandum',
      url: '/financing/private-placement-memorandum',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Private Equity',
      url: '/financing/private-equity',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Leveraged Buyout (LBO)',
        url: '/financing/private-equity/leverage-buyout',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Hedge Fund',
        url: '/financing/private-equity/hedge-fund',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Venture Capital Fund',
        url: '/financing/private-equity/venture-capital-fund',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Growth Capital',
        url: '/financing/private-equity/growth-capital',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Real Estate',
        url: '/financing/private-equity/real-estate',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Infrastructure',
        url: '/financing/private-equity/infrastructure',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Funds of Funds',
        url: '/financing/private-equity/funds-of-funds',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Mezzanine Capital',
        url: '/financing/private-equity/mezzanine-capital',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Distressed Private Equity',
        url: '/financing/private-equity/distressed-private-equity',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Secondary Fund',
        url: '/financing/private-equity/seconday-fund',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Mergers & Acquisitions',
      url: '/financing/mergers-and-acquisitions',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Post Merger Integration',
        url: '/financing/mergers-and-acquisitions/post-merger-inegration',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Divestitures',
        url: '/financing/mergers-and-acquisitions/Divestitures',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Due Diligence Certification',
      url: '/financing/due-diligence-certification',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Regulation S Offshore Offering',
      url: '/financing/regulation-s-offshore-offering',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Investment Portfolio Management',
      url: '/financing/investment-portfolio-management',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Forensic Accounting',
      url: '/financing/forensic-accounting',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Real Estate Investment Trust Fund',
      url: '/financing/real-estate-investment-trust-fund',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Securitization',
      url: '/financing/securitization',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Legal',
    url: '/legal-advisory',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Intellectual Property',
      url: '/legal-advisory/intellectual-property',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Utility Patent',
        url: '/legal-advisory/intellectual-property/utility-patent',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Design Patent',
        url: '/legal-advisory/intellectual-property/design-patent',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Plant Patent',
        url: '/legal-advisory/intellectual-property/plant-patent',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Provisional and Non Provisional',
        url: '/legal-advisory/intellectual-property/provisional-and-non-provisional',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Trademark',
      url: '/legal-advisory/trademark',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Copyright',
      url: '/legal-advisory/copyright',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Convertible Note(s)',
      url: '/legal-advisory/convertible-notes',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Chapter 11 Bankruptcy',
      url: '/legal-advisory/chapter-11-bankruptcy',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Commodity & Futures Contract',
      url: '/legal-advisory/commodity-and-futures-contract',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Initial Public Offering',
      url: '/legal-advisory/initial-public-offering',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Private Placement Memorandum',
      url: '/legal-advisory/private-place-memorandum',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Mergers & Acquisitions',
      url: '/legal-advisory/mergers-and-acquisitions',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Securities Arbitration',
      url: '/legal-advisory/securities-arbitration',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Offering Memorandum (Canada)',
      url: '/legal-advisory/offering-memorandum-canada',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Legal Entity Structuring',
      url: '/legal-advisory/legal-entity-structuring',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Technology',
    url: '/technology',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Agile',
      url: '/technology/agile',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Software Budgeting and Financials',
        url: '/technology/agile/software-budgeting-and-financials',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Prototypes',
        url: '/technology/agile/prototypes',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Backlog Feature Implementation',
        url: '/technology/agile/backlog-feature-implementation',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Functional Specification',
        url: '/technology/agile/functional-specification',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Custom Design and Build',
      url: '/technology/custom-design-and-build',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Agile Implementation',
      url: '/technology/agile-implementation',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Data Analytics Implementation',
      url: '/technology/data-analytics-implementation',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Industries',
    url: '/insights',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Advanced Manufacturing and Services',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Agribusiness',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Artificial Intelligence',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Automotive and Mobility',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Aviation',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Big Data Analytics',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Chemicals',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Cloud Computing',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Cybersecurity',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Consumer Products',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Financial Services',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Healthcare',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Infrastructure, Construction and Building Products',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Machinery and Equipment',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Media and Entertainment',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Oil and Gas',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Private Equity',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Retail',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Social and Public Sectors',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Technology',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Telecommunications',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Trade',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Transportation',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Utilities and Renewables',
      url: '/insights',
      isOpened: false,
      strapiId: ''
    }]
  }, {
    name: 'Careers',
    url: '/careers',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Explore Roles',
      url: '/careers/explore-roles',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Associate Consultant Intern',
        url: '/careers/explore-roles/associate-consultant-intern',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Associate Consultant',
        url: '/careers/explore-roles/associate-consultant',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Summer Associate',
        url: '/careers/explore-roles/summer-associate',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Consultant',
        url: '/careers/explore-roles/consultant',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Advanced Degree Holders',
        url: '/careers/explore-roles/advanced-degree-holders',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Working Professionals',
        url: '/careers/explore-roles/working-professionals',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Analytics and Customer Insights',
        url: '/careers/explore-roles/analytics-and-customer-insights',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Digital & Innovation',
        url: '/careers/explore-roles/digital-and-innovation',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Business Services',
        url: '/careers/explore-roles/business-services',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Meet Us',
      url: '/careers/meet-us',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'At an Event',
        url: '/careers/meet-us/at-an-event',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Our People',
        url: '/careers/meet-us/our-people',
        isOpened: false,
        strapiId: ''
      }]
    }, {
      name: 'Prepare for an Interview',
      url: '/careers/prepare-for-an-interview',
      isOpened: false,
      strapiId: '',
      navChildItems: [{
        name: 'Case Interview',
        url: '/careers/prepare-for-an-interview/case-interview',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Experience Interview',
        url: '/careers/prepare-for-an-interview/experience-interview',
        isOpened: false,
        strapiId: ''
      }, {
        name: 'Other Interview Formats',
        url: '/careers/prepare-for-an-interview/other-interview-formats',
        isOpened: false,
        strapiId: ''
      }]
    }]
  }, {
    name: 'Market Data Plans',
    url: '/consulting/market-data-plans',
    class: 'col-6',
    isOpened: false,
    strapiId: '',
    navChildItems: [{
      name: 'Data Industry Reports',
      url: '/consulting/market-data-plans/data-industry-reports',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'Feasibility Reports',
      url: '/consulting/market-data-plans/feasibility-reports',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'ETF & Stock Market Reports',
      url: '/consulting/market-data-plans/etf-and-stock-market-reports',
      isOpened: false,
      strapiId: ''
    }, {
      name: 'COVID-19 Market Reports',
      url: '/consulting/market-data-plans/covid-19-market-reports',
      isOpened: false,
      strapiId: ''
    }]
  }],
  industries: [{
    id: 7,
    attributes: {
      createdAt: '2023-08-18T15:40:11.142Z',
      updatedAt: '2023-08-18T15:40:21.604Z',
      publishedAt: '2023-08-18T15:40:21.600Z',
      name: 'about-first-col',
      collections: {
        data: [{
          id: 12,
          attributes: {
            createdAt: '2023-08-18T15:36:47.756Z',
            updatedAt: '2023-08-18T15:36:56.918Z',
            publishedAt: '2023-08-18T15:36:56.909Z',
            name: 'What-We-Do',
            base_url: {
              data: {
                id: 17,
                attributes: {
                  name: 'What We Do',
                  url: '/about-us/what-we-do',
                  isOpened: false,
                  slug: 'default-team-page',
                  searchId: 'what-we-do',
                  createdAt: '2023-08-14T04:22:44.681Z',
                  updatedAt: '2023-08-14T04:23:45.669Z',
                  publishedAt: '2023-08-14T04:22:57.177Z',
                  template: {
                    data: {
                      id: 5,
                      attributes: {
                        name: 'Our Team',
                        identifier: 'our-team',
                        createdAt: '2023-07-19T04:53:32.241Z',
                        updatedAt: '2023-07-19T04:53:40.824Z',
                        publishedAt: '2023-07-19T04:53:40.820Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }, {
          id: 13,
          attributes: {
            createdAt: '2023-08-18T15:37:21.964Z',
            updatedAt: '2023-08-18T15:37:32.058Z',
            publishedAt: '2023-08-18T15:37:32.020Z',
            name: 'Our-Team',
            base_url: {
              data: {
                id: 19,
                attributes: {
                  name: 'Our Team',
                  url: '/about-us/our-team',
                  isOpened: false,
                  slug: 'default-team-page',
                  searchId: 'our-team',
                  createdAt: '2023-08-14T04:24:15.832Z',
                  updatedAt: '2023-08-14T04:24:30.050Z',
                  publishedAt: '2023-08-14T04:24:30.007Z',
                  template: {
                    data: {
                      id: 5,
                      attributes: {
                        name: 'Our Team',
                        identifier: 'our-team',
                        createdAt: '2023-07-19T04:53:32.241Z',
                        updatedAt: '2023-07-19T04:53:40.824Z',
                        publishedAt: '2023-07-19T04:53:40.820Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }, {
          id: 14,
          attributes: {
            createdAt: '2023-08-18T15:37:54.973Z',
            updatedAt: '2023-08-18T15:38:03.956Z',
            publishedAt: '2023-08-18T15:38:03.951Z',
            name: 'Our-Leadership',
            base_url: {
              data: {
                id: 20,
                attributes: {
                  name: 'Our Leadership',
                  url: '/about-us/our-leadership',
                  isOpened: false,
                  slug: 'default-about-page',
                  searchId: 'Our-Leadership',
                  createdAt: '2023-08-14T04:25:16.038Z',
                  updatedAt: '2023-08-14T04:25:24.418Z',
                  publishedAt: '2023-08-14T04:25:24.381Z',
                  template: {
                    data: {
                      id: 5,
                      attributes: {
                        name: 'Our Team',
                        identifier: 'our-team',
                        createdAt: '2023-07-19T04:53:32.241Z',
                        updatedAt: '2023-07-19T04:53:40.824Z',
                        publishedAt: '2023-07-19T04:53:40.820Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }, {
          id: 11,
          attributes: {
            createdAt: '2023-08-10T04:40:28.047Z',
            updatedAt: '2023-08-10T04:40:37.122Z',
            publishedAt: '2023-08-10T04:40:37.117Z',
            name: 'Founders-bio',
            base_url: {
              data: {
                id: 6,
                attributes: {
                  name: "Founder's Bio",
                  url: '/about-us/founders-bio',
                  isOpened: false,
                  slug: 'founders-page-main',
                  searchId: 'founders-bio-page',
                  createdAt: '2023-08-08T03:54:05.729Z',
                  updatedAt: '2023-08-14T04:27:13.365Z',
                  publishedAt: '2023-08-08T03:54:12.740Z',
                  template: {
                    data: {
                      id: 7,
                      attributes: {
                        name: 'Founders Bio',
                        identifier: 'founders-bio',
                        createdAt: '2023-07-19T04:55:37.867Z',
                        updatedAt: '2023-07-19T04:55:44.042Z',
                        publishedAt: '2023-07-19T04:55:44.038Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }]
      }
    }
  }, {
    id: 6,
    attributes: {
      createdAt: '2023-08-10T04:03:58.430Z',
      updatedAt: '2023-08-19T02:50:51.223Z',
      publishedAt: '2023-08-10T04:04:05.787Z',
      name: 'consulting-fifth-col',
      collections: {
        data: [{
          id: 10,
          attributes: {
            createdAt: '2023-08-10T03:56:47.224Z',
            updatedAt: '2023-08-10T03:56:56.395Z',
            publishedAt: '2023-08-10T03:56:56.391Z',
            name: 'Cannabis-Licensing',
            base_url: {
              data: {
                id: 14,
                attributes: {
                  name: 'Cannabis Licensing and Application Support',
                  url: '/consulting/cannabis-licensing-and-application-support',
                  isOpened: false,
                  slug: 'test-consulting',
                  searchId: 'Cannabis-Licensing',
                  createdAt: '2023-08-10T03:51:07.216Z',
                  updatedAt: '2023-08-10T03:51:15.694Z',
                  publishedAt: '2023-08-10T03:51:15.689Z',
                  template: {
                    data: {
                      id: 2,
                      attributes: {
                        name: 'Divisions',
                        identifier: 'divisions',
                        createdAt: '2023-07-19T04:49:28.428Z',
                        updatedAt: '2023-07-19T04:49:38.778Z',
                        publishedAt: '2023-07-19T04:49:38.774Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }, {
          id: 20,
          attributes: {
            createdAt: '2023-08-19T02:39:25.535Z',
            updatedAt: '2023-08-19T02:39:34.340Z',
            publishedAt: '2023-08-19T02:39:34.336Z',
            name: 'New-Start-Up-Technology',
            base_url: {
              data: {
                id: 25,
                attributes: {
                  name: 'New Start-Up Technology',
                  url: '/consulting/new-start-up-technology',
                  isOpened: false,
                  slug: 'default-service-page',
                  searchId: 'New-Start-Up-Technology',
                  createdAt: '2023-08-14T04:33:48.662Z',
                  updatedAt: '2023-08-14T04:33:56.346Z',
                  publishedAt: '2023-08-14T04:33:56.304Z',
                  template: {
                    data: {
                      id: 3,
                      attributes: {
                        name: 'Service Pages',
                        identifier: 'service-pages',
                        createdAt: '2023-07-19T04:50:55.764Z',
                        updatedAt: '2023-07-19T04:51:00.497Z',
                        publishedAt: '2023-07-19T04:51:00.493Z'
                      }
                    }
                  }
                }
              }
            },
            navChildItems: {
              data: []
            }
          }
        }]
      }
    }
  }],
  currentMobileLevel1URL: '',
  currentMobileLevel2URL: '',
  delayCloseDropdownMenu: null,
  forceUpdateVideo: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
});
const mutations = {
  RETRIEVE_NAVIGATION(state) {
    return state.desktopNav;
  },
  TOGGLE(state) {
    state.open = !state.open;
    state.isLevel1Open = false;
    state.isLevel2Open = false;
  },
  TOGGLE_MENUBAR_SEARCH(state) {
    state.menubarSearch = !state.menubarSearch;
  },
  ACTIVE_DROPDOWN(state, payload) {
    clearTimeout(state.delayCloseDropdownMenu);
    // state.dropdown[payload] = !state.dropdown[payload];
    state.dropdown[payload] = true;
    const dropdown = {
      about: false,
      consulting: false,
      financing: false,
      technology: false,
      legal: false,
      careers: false,
      search: false,
      industries: false,
      offices: false,
      language: false
    };
    delete dropdown[payload];
    Object.assign(state.dropdown, dropdown);
    if (state.dropdown[payload]) {
      state.isDropdownOpen = true;
    } else {
      state.isDropdownOpen = false;
    }
  },
  ACTIVE_DESKTOP_DROPDOWN(state, payload) {
    payload.isOpened = true;
    /*
    for(let nav=0;nav<state.desktopNavbar.length;nav++) {
        if(state.desktopNavbar[nav].url === payload) {
            state.desktopNavbar[nav].isOpened = false
        }
    }
       */
  },

  DEACTIVE_DESKTOP_DROPDOWN(state, payload) {
    payload.isOpened = false;
    /*
    for(let nav=0;nav<state.desktopNavbar.length;nav++) {
        if(state.desktopNavbar[nav].url === payload) {
            state.desktopNavbar[nav].isOpened = false
        }
    }
       */
  },

  ACTIVE_MOBILE_DROPDOWN(state, payload) {
    payload.isOpened = true;
    state.isLevel1Open = true;
    state.isLevel2Open = false;
  },
  DEACTIVE_MOBILE_DROPDOWN(state, payload) {
    payload.isOpened = false;
    state.isLevel1Open = false;
    state.isLevel2Open = false;
  },
  DEACTIVE_DROPDOWN(state, payload) {
    state.dropdown[payload] = false;
    state.isDropdownOpen = false;
  },
  DEACTIVE_ALL_DROPDOWN(state) {
    state.dropdown = {
      about: false,
      consulting: false,
      financing: false,
      technology: false,
      legal: false,
      careers: false,
      search: false,
      industries: false,
      offices: false,
      language: false
    };
    state.isDropdownOpen = false;
  },
  IS_MENU_BAR_SEARCH_EXPANDED(state, payload) {
    state.isMenuBarSearchExpanded = payload;
  },
  FORCE_UPDATE_VIDEO(state, payload) {
    state.forceUpdateVideo = payload;
  },
  OPEN_LEVEL_1_SIDEBAR(state, payload) {
    state.isLevel1Open = true;
    state.isLevel2Open = false;
  },
  OPEN_LEVEL_2_SIDEBAR(state, payload) {
    state.isLevel1Open = false;
    state.isLevel2Open = true;
  },
  CLOSE_ALL_SIDEBAR_LEVEL(state, payload) {
    state.isLevel1Open = false;
    state.isLevel2Open = false;
  },
  DISABLE_ALL_DESKTOP_MENU(state) {
    for (const mainMenu of state.desktopNavbar) {
      if (mainMenu.isOpened) {
        mainMenu.isOpened = false;
      }
    }
  },
  CHANGE_DESKTOP_NAV(state, payload) {
    state.desktopNavbar.splice(0);
    payload.forEach(load => {
      state.desktopNavbar.push(load);
    });
  },
  CHANGE_INDUSTRIES_NAV(state, payload) {
    state.industries.splice(0);
    payload.forEach(load => {
      state.industries.push(load);
    });
  },
  CHANGE_MOBILE_NAV(state, payload) {
    state.mobileNavbar.splice(0);
    payload.forEach(load => {
      state.mobileNavbar.push(load);
    });
    state.isLevel1Open = false;
    state.isLevel2Open = false;
  },
  RESET_ALL_MENU(state) {
    for (const mainMenu of state.mobileNavbar) {
      if (mainMenu.isOpened) {
        mainMenu.isOpened = false;
      }
      if (!state.mobileNavbar.navChildItems) {
        continue;
      }
      for (const subMenu of mainMenu.navChildItems) {
        if (subMenu.isOpened) {
          subMenu.isOpened = false;
        }
        if (!subMenu.navChildItems) {
          continue;
        }
        for (const childMenu of subMenu.navChildItems) {
          if (childMenu.isOpened) {
            subMenu.isOpened = false;
          }
        }
      }
    }
    state.isLevel2Open = false;
    state.isLevel1Open = false;
  }
};
const actions = {
  openLevelNavbar({
    state,
    commit
  }, type) {
    if (type === 'level1') {
      commit('OPEN_LEVEL_1_SIDEBAR');
    } else if (type === 'level2') {
      commit('OPEN_LEVEL_2_SIDEBAR');
    } else {
      commit('CLOSE_ALL_SIDEBAR_LEVEL');
    }
  },
  resetAllMenu({
    commit
  }) {
    commit('RESET_ALL_MENU');
  },
  resetAllDesktopMenu({
    commit
  }) {
    commit('DISABLE_ALL_DESKTOP_MENU');
  },
  findBaseURL({
    state,
    commit
  }, url) {
    // console.log(url);
    // console.log(state.desktopNav);
  },
  toggle({
    commit
  }) {
    commit('TOGGLE');
    commit('RESET_ALL_MENU');
  },
  toggleMenubarSearch({
    commit
  }) {
    commit('TOGGLE_MENUBAR_SEARCH');
  },
  activeMobileDropdown({
    state,
    commit
  }, dropdown) {
    commit('ACTIVE_DESKTOP_DROPDOWN', dropdown);
  },
  formatMobileNavigation({
    state,
    commit
  }, navigations) {
    const mobileNav = [];
    for (let l0 = 0; l0 < navigations.length; l0++) {
      var _navigations$l, _navigations$l$attrib, _navigations$l$attrib2, _navigations$l$attrib3, _navigations$l2, _navigations$l2$attri, _navigations$l2$attri2, _navigations$l2$attri3, _navigations$l3, _navigations$l3$attri, _navigations$l3$attri2, _navigations$l4, _navigations$l4$attri, _navigations$l4$attri2;
      let l0Push = {};
      if (!((_navigations$l = navigations[l0]) !== null && _navigations$l !== void 0 && (_navigations$l$attrib = _navigations$l.attributes) !== null && _navigations$l$attrib !== void 0 && (_navigations$l$attrib2 = _navigations$l$attrib.base_url) !== null && _navigations$l$attrib2 !== void 0 && (_navigations$l$attrib3 = _navigations$l$attrib2.data) !== null && _navigations$l$attrib3 !== void 0 && _navigations$l$attrib3.attributes)) {
        continue;
      }
      l0Push = (_navigations$l2 = navigations[l0]) === null || _navigations$l2 === void 0 ? void 0 : (_navigations$l2$attri = _navigations$l2.attributes) === null || _navigations$l2$attri === void 0 ? void 0 : (_navigations$l2$attri2 = _navigations$l2$attri.base_url) === null || _navigations$l2$attri2 === void 0 ? void 0 : (_navigations$l2$attri3 = _navigations$l2$attri2.data) === null || _navigations$l2$attri3 === void 0 ? void 0 : _navigations$l2$attri3.attributes;
      if (!((_navigations$l3 = navigations[l0]) !== null && _navigations$l3 !== void 0 && (_navigations$l3$attri = _navigations$l3.attributes) !== null && _navigations$l3$attri !== void 0 && (_navigations$l3$attri2 = _navigations$l3$attri.navChildItems) !== null && _navigations$l3$attri2 !== void 0 && _navigations$l3$attri2.data && ((_navigations$l4 = navigations[l0]) === null || _navigations$l4 === void 0 ? void 0 : (_navigations$l4$attri = _navigations$l4.attributes) === null || _navigations$l4$attri === void 0 ? void 0 : (_navigations$l4$attri2 = _navigations$l4$attri.navChildItems) === null || _navigations$l4$attri2 === void 0 ? void 0 : _navigations$l4$attri2.data.length) > 0)) {
        continue;
      }
      const l0NavItems = [];
      for (const l1Obj of (_navigations$l5 = navigations[l0]) === null || _navigations$l5 === void 0 ? void 0 : (_navigations$l5$attri = _navigations$l5.attributes) === null || _navigations$l5$attri === void 0 ? void 0 : (_navigations$l5$attri2 = _navigations$l5$attri.navChildItems) === null || _navigations$l5$attri2 === void 0 ? void 0 : _navigations$l5$attri2.data) {
        var _navigations$l5, _navigations$l5$attri, _navigations$l5$attri2, _l1Obj$attributes, _l1Obj$attributes$bas, _l1Obj$attributes$bas2, _l1Obj$attributes2, _l1Obj$attributes2$ba, _l1Obj$attributes2$ba2, _l1Obj$attributes3, _l1Obj$attributes3$na, _l1Obj$attributes4, _l1Obj$attributes4$na;
        let l1Push = {};
        if (!(l1Obj !== null && l1Obj !== void 0 && (_l1Obj$attributes = l1Obj.attributes) !== null && _l1Obj$attributes !== void 0 && (_l1Obj$attributes$bas = _l1Obj$attributes.base_url) !== null && _l1Obj$attributes$bas !== void 0 && (_l1Obj$attributes$bas2 = _l1Obj$attributes$bas.data) !== null && _l1Obj$attributes$bas2 !== void 0 && _l1Obj$attributes$bas2.attributes)) {
          continue;
        }
        l1Push = l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes2 = l1Obj.attributes) === null || _l1Obj$attributes2 === void 0 ? void 0 : (_l1Obj$attributes2$ba = _l1Obj$attributes2.base_url) === null || _l1Obj$attributes2$ba === void 0 ? void 0 : (_l1Obj$attributes2$ba2 = _l1Obj$attributes2$ba.data) === null || _l1Obj$attributes2$ba2 === void 0 ? void 0 : _l1Obj$attributes2$ba2.attributes;
        const l1NavItems = [];
        if (l1Obj !== null && l1Obj !== void 0 && (_l1Obj$attributes3 = l1Obj.attributes) !== null && _l1Obj$attributes3 !== void 0 && (_l1Obj$attributes3$na = _l1Obj$attributes3.navChildItems) !== null && _l1Obj$attributes3$na !== void 0 && _l1Obj$attributes3$na.data && (l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes4 = l1Obj.attributes) === null || _l1Obj$attributes4 === void 0 ? void 0 : (_l1Obj$attributes4$na = _l1Obj$attributes4.navChildItems) === null || _l1Obj$attributes4$na === void 0 ? void 0 : _l1Obj$attributes4$na.data.length) > 0) {
          for (const l2ArrObj of l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes5 = l1Obj.attributes) === null || _l1Obj$attributes5 === void 0 ? void 0 : (_l1Obj$attributes5$na = _l1Obj$attributes5.navChildItems) === null || _l1Obj$attributes5$na === void 0 ? void 0 : _l1Obj$attributes5$na.data) {
            var _l1Obj$attributes5, _l1Obj$attributes5$na, _l2ArrObj$attributes, _l2ArrObj$attributes$, _l2ArrObj$attributes$2;
            l1NavItems.push(l2ArrObj === null || l2ArrObj === void 0 ? void 0 : (_l2ArrObj$attributes = l2ArrObj.attributes) === null || _l2ArrObj$attributes === void 0 ? void 0 : (_l2ArrObj$attributes$ = _l2ArrObj$attributes.base_url) === null || _l2ArrObj$attributes$ === void 0 ? void 0 : (_l2ArrObj$attributes$2 = _l2ArrObj$attributes$.data) === null || _l2ArrObj$attributes$2 === void 0 ? void 0 : _l2ArrObj$attributes$2.attributes);
          }
        }
        l1Push.navChildItems = l1NavItems;
        l0NavItems.push(l1Push);
      }
      l0Push.navChildItems = l0NavItems;
      mobileNav.push(l0Push);
    }
    commit('CHANGE_MOBILE_NAV', mobileNav);
  },
  formatIndustriesNavigation({
    state,
    commit
  }, navigations) {
    commit('CHANGE_INDUSTRIES_NAV', navigations);
  },
  formatDesktopNavigation({
    state,
    commit
  }, navigations) {
    const desktopNav = [];
    for (let l0 = 0; l0 < navigations.length; l0++) {
      var _navigations$l6, _navigations$l6$attri, _navigations$l6$attri2, _navigations$l6$attri3, _navigations$l7, _navigations$l7$attri, _navigations$l7$attri2, _navigations$l7$attri3, _navigations$l8, _navigations$l8$attri, _navigations$l8$attri2, _navigations$l9, _navigations$l9$attri, _navigations$l9$attri2;
      let l0Push = {};
      if (!((_navigations$l6 = navigations[l0]) !== null && _navigations$l6 !== void 0 && (_navigations$l6$attri = _navigations$l6.attributes) !== null && _navigations$l6$attri !== void 0 && (_navigations$l6$attri2 = _navigations$l6$attri.base_url) !== null && _navigations$l6$attri2 !== void 0 && (_navigations$l6$attri3 = _navigations$l6$attri2.data) !== null && _navigations$l6$attri3 !== void 0 && _navigations$l6$attri3.attributes)) {
        continue;
      }
      l0Push = (_navigations$l7 = navigations[l0]) === null || _navigations$l7 === void 0 ? void 0 : (_navigations$l7$attri = _navigations$l7.attributes) === null || _navigations$l7$attri === void 0 ? void 0 : (_navigations$l7$attri2 = _navigations$l7$attri.base_url) === null || _navigations$l7$attri2 === void 0 ? void 0 : (_navigations$l7$attri3 = _navigations$l7$attri2.data) === null || _navigations$l7$attri3 === void 0 ? void 0 : _navigations$l7$attri3.attributes;
      if (!((_navigations$l8 = navigations[l0]) !== null && _navigations$l8 !== void 0 && (_navigations$l8$attri = _navigations$l8.attributes) !== null && _navigations$l8$attri !== void 0 && (_navigations$l8$attri2 = _navigations$l8$attri.navChildItems) !== null && _navigations$l8$attri2 !== void 0 && _navigations$l8$attri2.data && ((_navigations$l9 = navigations[l0]) === null || _navigations$l9 === void 0 ? void 0 : (_navigations$l9$attri = _navigations$l9.attributes) === null || _navigations$l9$attri === void 0 ? void 0 : (_navigations$l9$attri2 = _navigations$l9$attri.navChildItems) === null || _navigations$l9$attri2 === void 0 ? void 0 : _navigations$l9$attri2.data.length) > 0)) {
        continue;
      }
      const l0NavItems = [];
      for (const l1Obj of (_navigations$l10 = navigations[l0]) === null || _navigations$l10 === void 0 ? void 0 : (_navigations$l10$attr = _navigations$l10.attributes) === null || _navigations$l10$attr === void 0 ? void 0 : (_navigations$l10$attr2 = _navigations$l10$attr.navChildItems) === null || _navigations$l10$attr2 === void 0 ? void 0 : _navigations$l10$attr2.data) {
        var _navigations$l10, _navigations$l10$attr, _navigations$l10$attr2, _l1Obj$attributes6, _l1Obj$attributes6$ba, _l1Obj$attributes6$ba2, _l1Obj$attributes7, _l1Obj$attributes7$ba, _l1Obj$attributes7$ba2, _l1Obj$attributes8, _l1Obj$attributes9, _l1Obj$attributes10, _l1Obj$attributes10$n, _l1Obj$attributes11, _l1Obj$attributes11$n;
        let l1Push = {};
        if (!(l1Obj !== null && l1Obj !== void 0 && (_l1Obj$attributes6 = l1Obj.attributes) !== null && _l1Obj$attributes6 !== void 0 && (_l1Obj$attributes6$ba = _l1Obj$attributes6.base_url) !== null && _l1Obj$attributes6$ba !== void 0 && (_l1Obj$attributes6$ba2 = _l1Obj$attributes6$ba.data) !== null && _l1Obj$attributes6$ba2 !== void 0 && _l1Obj$attributes6$ba2.attributes)) {
          continue;
        }
        l1Push = l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes7 = l1Obj.attributes) === null || _l1Obj$attributes7 === void 0 ? void 0 : (_l1Obj$attributes7$ba = _l1Obj$attributes7.base_url) === null || _l1Obj$attributes7$ba === void 0 ? void 0 : (_l1Obj$attributes7$ba2 = _l1Obj$attributes7$ba.data) === null || _l1Obj$attributes7$ba2 === void 0 ? void 0 : _l1Obj$attributes7$ba2.attributes;
        l1Push.mainClass = l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes8 = l1Obj.attributes) === null || _l1Obj$attributes8 === void 0 ? void 0 : _l1Obj$attributes8.mainClass;
        l1Push.subClass = l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes9 = l1Obj.attributes) === null || _l1Obj$attributes9 === void 0 ? void 0 : _l1Obj$attributes9.subClass;
        if (!(l1Obj !== null && l1Obj !== void 0 && (_l1Obj$attributes10 = l1Obj.attributes) !== null && _l1Obj$attributes10 !== void 0 && (_l1Obj$attributes10$n = _l1Obj$attributes10.navChildItems) !== null && _l1Obj$attributes10$n !== void 0 && _l1Obj$attributes10$n.data && (l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes11 = l1Obj.attributes) === null || _l1Obj$attributes11 === void 0 ? void 0 : (_l1Obj$attributes11$n = _l1Obj$attributes11.navChildItems) === null || _l1Obj$attributes11$n === void 0 ? void 0 : _l1Obj$attributes11$n.data.length) > 0)) {
          continue;
        }
        const l1NavItems = [];
        for (const l2ArrObj of l1Obj === null || l1Obj === void 0 ? void 0 : (_l1Obj$attributes12 = l1Obj.attributes) === null || _l1Obj$attributes12 === void 0 ? void 0 : (_l1Obj$attributes12$n = _l1Obj$attributes12.navChildItems) === null || _l1Obj$attributes12$n === void 0 ? void 0 : _l1Obj$attributes12$n.data) {
          var _l1Obj$attributes12, _l1Obj$attributes12$n, _l2ArrObj$attributes2, _l2ArrObj$attributes3, _l2ArrObj$attributes4, _l2ArrObj$attributes5;
          if (!(l2ArrObj !== null && l2ArrObj !== void 0 && (_l2ArrObj$attributes2 = l2ArrObj.attributes) !== null && _l2ArrObj$attributes2 !== void 0 && (_l2ArrObj$attributes3 = _l2ArrObj$attributes2.collections) !== null && _l2ArrObj$attributes3 !== void 0 && _l2ArrObj$attributes3.data) && (l2ArrObj === null || l2ArrObj === void 0 ? void 0 : (_l2ArrObj$attributes4 = l2ArrObj.attributes) === null || _l2ArrObj$attributes4 === void 0 ? void 0 : (_l2ArrObj$attributes5 = _l2ArrObj$attributes4.collections) === null || _l2ArrObj$attributes5 === void 0 ? void 0 : _l2ArrObj$attributes5.data.length) > 0) {
            continue;
          }
          const eachCol = [];
          for (const l2Obj of l2ArrObj === null || l2ArrObj === void 0 ? void 0 : (_l2ArrObj$attributes6 = l2ArrObj.attributes) === null || _l2ArrObj$attributes6 === void 0 ? void 0 : (_l2ArrObj$attributes7 = _l2ArrObj$attributes6.collections) === null || _l2ArrObj$attributes7 === void 0 ? void 0 : _l2ArrObj$attributes7.data) {
            var _l2ArrObj$attributes6, _l2ArrObj$attributes7, _l2Obj$attributes, _l2Obj$attributes$bas, _l2Obj$attributes$bas2, _l2Obj$attributes2, _l2Obj$attributes2$ba, _l2Obj$attributes2$ba2, _l2Obj$attributes3, _l2Obj$attributes3$na, _l2Obj$attributes4, _l2Obj$attributes4$na;
            let l2Push = {};
            if (!(l2Obj !== null && l2Obj !== void 0 && (_l2Obj$attributes = l2Obj.attributes) !== null && _l2Obj$attributes !== void 0 && (_l2Obj$attributes$bas = _l2Obj$attributes.base_url) !== null && _l2Obj$attributes$bas !== void 0 && (_l2Obj$attributes$bas2 = _l2Obj$attributes$bas.data) !== null && _l2Obj$attributes$bas2 !== void 0 && _l2Obj$attributes$bas2.attributes)) {
              continue;
            }
            l2Push = l2Obj === null || l2Obj === void 0 ? void 0 : (_l2Obj$attributes2 = l2Obj.attributes) === null || _l2Obj$attributes2 === void 0 ? void 0 : (_l2Obj$attributes2$ba = _l2Obj$attributes2.base_url) === null || _l2Obj$attributes2$ba === void 0 ? void 0 : (_l2Obj$attributes2$ba2 = _l2Obj$attributes2$ba.data) === null || _l2Obj$attributes2$ba2 === void 0 ? void 0 : _l2Obj$attributes2$ba2.attributes;
            if (l2Obj !== null && l2Obj !== void 0 && (_l2Obj$attributes3 = l2Obj.attributes) !== null && _l2Obj$attributes3 !== void 0 && (_l2Obj$attributes3$na = _l2Obj$attributes3.navChildItems) !== null && _l2Obj$attributes3$na !== void 0 && _l2Obj$attributes3$na.data && (l2Obj === null || l2Obj === void 0 ? void 0 : (_l2Obj$attributes4 = l2Obj.attributes) === null || _l2Obj$attributes4 === void 0 ? void 0 : (_l2Obj$attributes4$na = _l2Obj$attributes4.navChildItems) === null || _l2Obj$attributes4$na === void 0 ? void 0 : _l2Obj$attributes4$na.data.length) > 0) {
              const l3Col = [];
              for (const l3Obj of l2Obj === null || l2Obj === void 0 ? void 0 : (_l2Obj$attributes5 = l2Obj.attributes) === null || _l2Obj$attributes5 === void 0 ? void 0 : (_l2Obj$attributes5$na = _l2Obj$attributes5.navChildItems) === null || _l2Obj$attributes5$na === void 0 ? void 0 : _l2Obj$attributes5$na.data) {
                var _l2Obj$attributes5, _l2Obj$attributes5$na, _l3Obj$attributes, _l3Obj$attributes$bas, _l3Obj$attributes$bas2;
                l3Col.push(l3Obj === null || l3Obj === void 0 ? void 0 : (_l3Obj$attributes = l3Obj.attributes) === null || _l3Obj$attributes === void 0 ? void 0 : (_l3Obj$attributes$bas = _l3Obj$attributes.base_url) === null || _l3Obj$attributes$bas === void 0 ? void 0 : (_l3Obj$attributes$bas2 = _l3Obj$attributes$bas.data) === null || _l3Obj$attributes$bas2 === void 0 ? void 0 : _l3Obj$attributes$bas2.attributes);
              }
              l2Push.navChildItems = l3Col;
            }
            eachCol.push(l2Push);
          }
          l1NavItems.push(eachCol);
        }
        l1Push.navChildItems = l1NavItems;
        l0NavItems.push(l1Push);
      }
      l0Push.navChildItems = l0NavItems;
      desktopNav.push(l0Push);
    }
    commit('CHANGE_DESKTOP_NAV', desktopNav);
  },
  activeDropdown({
    state,
    commit
  }, dropdown) {
    if (dropdown.isOpened) {
      commit('DEACTIVE_DESKTOP_DROPDOWN', dropdown);
    } else {
      commit('ACTIVE_DESKTOP_DROPDOWN', dropdown);
    }
    /*
    if (state.dropdown[dropdown]) {
        commit('DEACTIVE_DROPDOWN', dropdown);
    } else {
        commit('ACTIVE_DROPDOWN', dropdown);
    }
       */
  },

  deactiveDropdown({
    commit
  }, dropdown) {
    state.delayCloseDropdownMenu = setTimeout(() => {
      commit('DEACTIVE_DESKTOP_DROPDOWN', dropdown);
    }, 100);
    /*
    state.delayCloseDropdownMenu = setTimeout(() => {
        commit('DEACTIVE_DROPDOWN', dropdown);
    }, 100);
       */
  },

  activeLegacyDropdown({
    state,
    commit
  }, dropdown) {
    if (state.dropdown[dropdown]) {
      commit('DEACTIVE_DROPDOWN', dropdown);
    } else {
      commit('ACTIVE_DROPDOWN', dropdown);
    }
  },
  deactiveLegacyDropdown({
    commit
  }, dropdown) {
    state.delayCloseDropdownMenu = setTimeout(() => {
      commit('DEACTIVE_DROPDOWN', dropdown);
    }, 100);
  },
  deactiveAllDropdown({
    commit
  }) {
    commit('DEACTIVE_ALL_DROPDOWN');
  },
  setIsMenuBarSearchExpanded({
    commit
  }, payload) {
    commit('IS_MENU_BAR_SEARCH_EXPANDED', payload);
  },
  forceUpdateVideo({
    commit
  }, payload) {
    commit('FORCE_UPDATE_VIDEO', payload);
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.weak-map.delete-all.js");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.set.js");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/en");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const defuArrayFn = createDefu((object, key, currentValue) => {
  if (Array.isArray(object[key]) && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

exports.createDefu = createDefu;
exports.default = defu;
exports.defu = defu;
exports.defuArrayFn = defuArrayFn;
exports.defuFn = defuFn;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("f3b6272c", content, true)

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"swiper-icons\";src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);letter-spacing:0;text-transform:none;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-radius:50%;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("942ea66e", content, true)

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none!important;box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\"\";height:0;width:0;left:22px}.flatpickr-calendar.arrowRight:after,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar.arrowCenter:after,.flatpickr-calendar.arrowCenter:before{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;line-height:1;text-align:center;position:relative;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-month,.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9);height:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;padding:10px;z-index:3}.flatpickr-months .flatpickr-next-month.flatpickr-disabled,.flatpickr-months .flatpickr-prev-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-next-month i,.flatpickr-months .flatpickr-prev-month i{position:relative}.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-next-month.flatpickr-next-month,.flatpickr-months .flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover{color:#959ea9}.flatpickr-months .flatpickr-next-month:hover svg,.flatpickr-months .flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-next-month svg,.flatpickr-months .flatpickr-prev-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-next-month svg path,.flatpickr-months .flatpickr-prev-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-inner-spin-button,.numInputWrapper input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:active,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays,.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-weekdays .flatpickr-weekdaycontainer,span.flatpickr-weekday{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(57,57,57,.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.flatpickr-innerContainer,.flatpickr-rContainer{-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-rContainer{display:inline-block;padding:0}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time input:hover{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "CareerBannerTab", function() { return CareerBannerTab; });
__webpack_require__.d(components_namespaceObject, "CareerCompanyOverview", function() { return CareerCompanyOverview; });
__webpack_require__.d(components_namespaceObject, "CareerConsultant", function() { return CareerConsultant; });
__webpack_require__.d(components_namespaceObject, "CareerJoinEvent", function() { return CareerJoinEvent; });
__webpack_require__.d(components_namespaceObject, "CareerOurTeam", function() { return CareerOurTeam; });
__webpack_require__.d(components_namespaceObject, "CareerProfessionalFunctional", function() { return CareerProfessionalFunctional; });
__webpack_require__.d(components_namespaceObject, "CareerQuestion", function() { return CareerQuestion; });
__webpack_require__.d(components_namespaceObject, "BusinessPlanGoogleAdQuestionForm", function() { return BusinessPlanGoogleAdQuestionForm; });
__webpack_require__.d(components_namespaceObject, "BaseAboutPage", function() { return BaseAboutPage; });
__webpack_require__.d(components_namespaceObject, "BaseContactUs", function() { return BaseContactUs; });
__webpack_require__.d(components_namespaceObject, "BaseDivisions", function() { return BaseDivisions; });
__webpack_require__.d(components_namespaceObject, "BaseFoundersBio", function() { return BaseFoundersBio; });
__webpack_require__.d(components_namespaceObject, "BaseGoogleAd", function() { return BaseGoogleAd; });
__webpack_require__.d(components_namespaceObject, "BaseOurTeam", function() { return BaseOurTeam; });
__webpack_require__.d(components_namespaceObject, "BaseServicePages", function() { return BaseServicePages; });
__webpack_require__.d(components_namespaceObject, "BaseSingleInsights", function() { return BaseSingleInsights; });
__webpack_require__.d(components_namespaceObject, "CommonAsSeenOn", function() { return CommonAsSeenOn; });
__webpack_require__.d(components_namespaceObject, "CommonBannerTab", function() { return CommonBannerTab; });
__webpack_require__.d(components_namespaceObject, "CommonBaseTemplate", function() { return CommonBaseTemplate; });
__webpack_require__.d(components_namespaceObject, "CommonBrandLogo", function() { return CommonBrandLogo; });
__webpack_require__.d(components_namespaceObject, "CommonBusinessChallenge", function() { return CommonBusinessChallenge; });
__webpack_require__.d(components_namespaceObject, "CommonCategorySlider", function() { return CommonCategorySlider; });
__webpack_require__.d(components_namespaceObject, "CommonClientWords", function() { return CommonClientWords; });
__webpack_require__.d(components_namespaceObject, "CommonComments", function() { return CommonComments; });
__webpack_require__.d(components_namespaceObject, "CommonCompanyOverview", function() { return CommonCompanyOverview; });
__webpack_require__.d(components_namespaceObject, "CommonConsultation", function() { return CommonConsultation; });
__webpack_require__.d(components_namespaceObject, "CommonContactUs", function() { return CommonContactUs; });
__webpack_require__.d(components_namespaceObject, "CommonCustomStrapiDisplay", function() { return CommonCustomStrapiDisplay; });
__webpack_require__.d(components_namespaceObject, "CommonDistinctQualities", function() { return CommonDistinctQualities; });
__webpack_require__.d(components_namespaceObject, "CommonDynamicQuestionnaire", function() { return CommonDynamicQuestionnaire; });
__webpack_require__.d(components_namespaceObject, "CommonFaq", function() { return CommonFaq; });
__webpack_require__.d(components_namespaceObject, "CommonFeaturedServices", function() { return CommonFeaturedServices; });
__webpack_require__.d(components_namespaceObject, "CommonInterestedService", function() { return CommonInterestedService; });
__webpack_require__.d(components_namespaceObject, "CommonModal", function() { return CommonModal; });
__webpack_require__.d(components_namespaceObject, "CommonOurTeam", function() { return CommonOurTeam; });
__webpack_require__.d(components_namespaceObject, "CommonOurWork", function() { return CommonOurWork; });
__webpack_require__.d(components_namespaceObject, "CommonQuestionnaireContent", function() { return CommonQuestionnaireContent; });
__webpack_require__.d(components_namespaceObject, "CommonQuestionsForm", function() { return CommonQuestionsForm; });
__webpack_require__.d(components_namespaceObject, "CommonReadytotalk", function() { return CommonReadytotalk; });
__webpack_require__.d(components_namespaceObject, "CommonShare", function() { return CommonShare; });
__webpack_require__.d(components_namespaceObject, "CommonTellMoreAboutProjects", function() { return CommonTellMoreAboutProjects; });
__webpack_require__.d(components_namespaceObject, "CommonToggleContent", function() { return CommonToggleContent; });
__webpack_require__.d(components_namespaceObject, "CommonVenturePlans", function() { return CommonVenturePlans; });
__webpack_require__.d(components_namespaceObject, "CommonWorkAtTheBestPlace", function() { return CommonWorkAtTheBestPlace; });
__webpack_require__.d(components_namespaceObject, "ConsultingOurPortfolio", function() { return ConsultingOurPortfolio; });
__webpack_require__.d(components_namespaceObject, "ContactFeaturedServices", function() { return ContactFeaturedServices; });
__webpack_require__.d(components_namespaceObject, "ContactPrivatePlacement", function() { return ContactPrivatePlacement; });
__webpack_require__.d(components_namespaceObject, "ContactUsHeroform", function() { return ContactUsHeroform; });
__webpack_require__.d(components_namespaceObject, "ContactUsServiceHelp", function() { return ContactUsServiceHelp; });
__webpack_require__.d(components_namespaceObject, "GoogleAdCustomSoftwareDevelopment", function() { return GoogleAdCustomSoftwareDevelopment; });
__webpack_require__.d(components_namespaceObject, "GoogleAdHeroform", function() { return GoogleAdHeroform; });
__webpack_require__.d(components_namespaceObject, "GoogleAdLosHeroform", function() { return GoogleAdLosHeroform; });
__webpack_require__.d(components_namespaceObject, "GoogleAdProjectInfoSubmit", function() { return GoogleAdProjectInfoSubmit; });
__webpack_require__.d(components_namespaceObject, "HeaderMenuBar", function() { return HeaderMenuBar; });
__webpack_require__.d(components_namespaceObject, "HeaderRightSideBar", function() { return HeaderRightSideBar; });
__webpack_require__.d(components_namespaceObject, "HeaderTopBar", function() { return HeaderTopBar; });
__webpack_require__.d(components_namespaceObject, "HomeAboutClient", function() { return HomeAboutClient; });
__webpack_require__.d(components_namespaceObject, "HomeCareer", function() { return HomeCareer; });
__webpack_require__.d(components_namespaceObject, "HomeHeroSlider", function() { return HomeHeroSlider; });
__webpack_require__.d(components_namespaceObject, "HomeOurLatestInsights", function() { return HomeOurLatestInsights; });
__webpack_require__.d(components_namespaceObject, "HomePrivatePlacement", function() { return HomePrivatePlacement; });
__webpack_require__.d(components_namespaceObject, "HomeSectorChart", function() { return HomeSectorChart; });
__webpack_require__.d(components_namespaceObject, "HomeSectorExcelled", function() { return HomeSectorExcelled; });
__webpack_require__.d(components_namespaceObject, "HomeSubscribe", function() { return HomeSubscribe; });
__webpack_require__.d(components_namespaceObject, "IconsAproach", function() { return IconsAproach; });
__webpack_require__.d(components_namespaceObject, "IconsArrowRightThin", function() { return IconsArrowRightThin; });
__webpack_require__.d(components_namespaceObject, "IconsArrowUpThin", function() { return IconsArrowUpThin; });
__webpack_require__.d(components_namespaceObject, "IconsArrowUp", function() { return IconsArrowUp; });
__webpack_require__.d(components_namespaceObject, "IconsAttach", function() { return IconsAttach; });
__webpack_require__.d(components_namespaceObject, "IconsBachelorCandidate", function() { return IconsBachelorCandidate; });
__webpack_require__.d(components_namespaceObject, "IconsBitcoin", function() { return IconsBitcoin; });
__webpack_require__.d(components_namespaceObject, "IconsBrokerage", function() { return IconsBrokerage; });
__webpack_require__.d(components_namespaceObject, "IconsBuilding", function() { return IconsBuilding; });
__webpack_require__.d(components_namespaceObject, "IconsCalendar", function() { return IconsCalendar; });
__webpack_require__.d(components_namespaceObject, "IconsCannabis", function() { return IconsCannabis; });
__webpack_require__.d(components_namespaceObject, "IconsCentricity", function() { return IconsCentricity; });
__webpack_require__.d(components_namespaceObject, "IconsCheckCircle", function() { return IconsCheckCircle; });
__webpack_require__.d(components_namespaceObject, "IconsCleanTech", function() { return IconsCleanTech; });
__webpack_require__.d(components_namespaceObject, "IconsCloseMenu", function() { return IconsCloseMenu; });
__webpack_require__.d(components_namespaceObject, "IconsCloseSearch", function() { return IconsCloseSearch; });
__webpack_require__.d(components_namespaceObject, "IconsCloseTime", function() { return IconsCloseTime; });
__webpack_require__.d(components_namespaceObject, "IconsClose", function() { return IconsClose; });
__webpack_require__.d(components_namespaceObject, "IconsConsumer", function() { return IconsConsumer; });
__webpack_require__.d(components_namespaceObject, "IconsDomain", function() { return IconsDomain; });
__webpack_require__.d(components_namespaceObject, "IconsDownBorder", function() { return IconsDownBorder; });
__webpack_require__.d(components_namespaceObject, "IconsDownarrow", function() { return IconsDownarrow; });
__webpack_require__.d(components_namespaceObject, "IconsEduction", function() { return IconsEduction; });
__webpack_require__.d(components_namespaceObject, "IconsFacebook", function() { return IconsFacebook; });
__webpack_require__.d(components_namespaceObject, "IconsFinacial", function() { return IconsFinacial; });
__webpack_require__.d(components_namespaceObject, "IconsGoogleIcon", function() { return IconsGoogleIcon; });
__webpack_require__.d(components_namespaceObject, "IconsHamburger", function() { return IconsHamburger; });
__webpack_require__.d(components_namespaceObject, "IconsHeartCare", function() { return IconsHeartCare; });
__webpack_require__.d(components_namespaceObject, "IconsIcon1", function() { return IconsIcon1; });
__webpack_require__.d(components_namespaceObject, "IconsIcon2", function() { return IconsIcon2; });
__webpack_require__.d(components_namespaceObject, "IconsIcon3", function() { return IconsIcon3; });
__webpack_require__.d(components_namespaceObject, "IconsIcon4", function() { return IconsIcon4; });
__webpack_require__.d(components_namespaceObject, "IconsIcon5", function() { return IconsIcon5; });
__webpack_require__.d(components_namespaceObject, "IconsIcon6", function() { return IconsIcon6; });
__webpack_require__.d(components_namespaceObject, "IconsIcon7", function() { return IconsIcon7; });
__webpack_require__.d(components_namespaceObject, "IconsInstagramColor", function() { return IconsInstagramColor; });
__webpack_require__.d(components_namespaceObject, "IconsInstagram", function() { return IconsInstagram; });
__webpack_require__.d(components_namespaceObject, "IconsLinkedin", function() { return IconsLinkedin; });
__webpack_require__.d(components_namespaceObject, "IconsLocation", function() { return IconsLocation; });
__webpack_require__.d(components_namespaceObject, "IconsLogo", function() { return IconsLogo; });
__webpack_require__.d(components_namespaceObject, "IconsManufacturing", function() { return IconsManufacturing; });
__webpack_require__.d(components_namespaceObject, "IconsMarket", function() { return IconsMarket; });
__webpack_require__.d(components_namespaceObject, "IconsMbaCandidate", function() { return IconsMbaCandidate; });
__webpack_require__.d(components_namespaceObject, "IconsMdCandidate", function() { return IconsMdCandidate; });
__webpack_require__.d(components_namespaceObject, "IconsMinus", function() { return IconsMinus; });
__webpack_require__.d(components_namespaceObject, "IconsPhone", function() { return IconsPhone; });
__webpack_require__.d(components_namespaceObject, "IconsPlay", function() { return IconsPlay; });
__webpack_require__.d(components_namespaceObject, "IconsPlus", function() { return IconsPlus; });
__webpack_require__.d(components_namespaceObject, "IconsProfessional", function() { return IconsProfessional; });
__webpack_require__.d(components_namespaceObject, "IconsResidential", function() { return IconsResidential; });
__webpack_require__.d(components_namespaceObject, "IconsRightMenuArrow", function() { return IconsRightMenuArrow; });
__webpack_require__.d(components_namespaceObject, "IconsSave", function() { return IconsSave; });
__webpack_require__.d(components_namespaceObject, "IconsSearch", function() { return IconsSearch; });
__webpack_require__.d(components_namespaceObject, "IconsSelectionArrow", function() { return IconsSelectionArrow; });
__webpack_require__.d(components_namespaceObject, "IconsShareIcon", function() { return IconsShareIcon; });
__webpack_require__.d(components_namespaceObject, "IconsStar", function() { return IconsStar; });
__webpack_require__.d(components_namespaceObject, "IconsTeam", function() { return IconsTeam; });
__webpack_require__.d(components_namespaceObject, "IconsTiktok", function() { return IconsTiktok; });
__webpack_require__.d(components_namespaceObject, "IconsTopmenuarrow", function() { return IconsTopmenuarrow; });
__webpack_require__.d(components_namespaceObject, "IconsTwitter", function() { return IconsTwitter; });
__webpack_require__.d(components_namespaceObject, "IconsUpload", function() { return IconsUpload; });
__webpack_require__.d(components_namespaceObject, "IconsWhiteLogo", function() { return IconsWhiteLogo; });
__webpack_require__.d(components_namespaceObject, "IconsWifi", function() { return IconsWifi; });
__webpack_require__.d(components_namespaceObject, "IconsYelpIcon", function() { return IconsYelpIcon; });
__webpack_require__.d(components_namespaceObject, "IconsYoutube", function() { return IconsYoutube; });
__webpack_require__.d(components_namespaceObject, "InputFilterCheckbox", function() { return InputFilterCheckbox; });
__webpack_require__.d(components_namespaceObject, "OurSustainabilityCardWithImage", function() { return OurSustainabilityCardWithImage; });
__webpack_require__.d(components_namespaceObject, "OurSustainabilityMaterialTopics", function() { return OurSustainabilityMaterialTopics; });
__webpack_require__.d(components_namespaceObject, "LayoutFooter", function() { return LayoutFooter; });
__webpack_require__.d(components_namespaceObject, "LayoutHeader", function() { return LayoutHeader; });
__webpack_require__.d(components_namespaceObject, "SoftwareDevelopmentServices", function() { return SoftwareDevelopmentServices; });
__webpack_require__.d(components_namespaceObject, "SoftwareGoogleAdWhyVenturePlans", function() { return SoftwareGoogleAdWhyVenturePlans; });
__webpack_require__.d(components_namespaceObject, "TechnologyQuestionsForm", function() { return TechnologyQuestionsForm; });
__webpack_require__.d(components_namespaceObject, "AboutOurLeadershipVideoSection", function() { return AboutOurLeadershipVideoSection; });
__webpack_require__.d(components_namespaceObject, "CommonBusinessPlanAbout", function() { return CommonBusinessPlanAbout; });
__webpack_require__.d(components_namespaceObject, "HeaderRightSideBarMenuLanguageEnglish", function() { return HeaderRightSideBarMenuLanguageEnglish; });
__webpack_require__.d(components_namespaceObject, "HeaderRightSideBarMenuOffices", function() { return HeaderRightSideBarMenuOffices; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js
var ipx_namespaceObject = {};
__webpack_require__.r(ipx_namespaceObject);
__webpack_require__.d(ipx_namespaceObject, "getImage", function() { return ipx_getImage; });
__webpack_require__.d(ipx_namespaceObject, "validateDomains", function() { return validateDomains; });
__webpack_require__.d(ipx_namespaceObject, "supportsAlias", function() { return supportsAlias; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/strapi.js
var providers_strapi_namespaceObject = {};
__webpack_require__.r(providers_strapi_namespaceObject);
__webpack_require__.d(providers_strapi_namespaceObject, "getImage", function() { return strapi_getImage; });
__webpack_require__.d(providers_strapi_namespaceObject, "validateDomains", function() { return strapi_validateDomains; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.cjs
var dist = __webpack_require__(5);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(9);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "CTF_SPACE_ID": "koyrlvjc3wvc",
        "CTF_CDA_ACCESS_TOKEN": "VXFcV4MwUkS4ExdJ1QiDa9Pd6U6OSEmrvmvEnThd-eQ",
        "CTF_ENVIRONMENT": "Development",
        "APP_URL": "http://localhost:3000",
        "strapiReadOnlyToken": "efa9034762f7be85984acf4643252ab6bf538955c059eb00b0c615f416fc2d5f96660f7e25d7601adf79a60c75042957e3de14e9af075898ff699de0258635eb4c9db7f75dad67be56ef8efde560a964ae15c07d8778dbcaa9bf0b72cb28e55d7fe3efbf52a9f12b88cc109d0f8dcfb9ecb17412d7d765a0a5fdedd409e072c1",
        "strapiURL": "https://strapi-stg.ventureplans.us",
        "meiliSearchURL": "https://search.ventureplans.us",
        "baseUrl": "https://seveti.vercel.app"
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(15);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(16);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(26);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(22);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(27);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _1752bff5 = () => interopDefault(__webpack_require__.e(/* import() | pages/book-consult */ 129).then(__webpack_require__.bind(null, 272)));
const _74c5fa2a = () => interopDefault(__webpack_require__.e(/* import() | pages/careers/index */ 131).then(__webpack_require__.bind(null, 273)));
const _32762368 = () => interopDefault(__webpack_require__.e(/* import() | pages/cities/index */ 132).then(__webpack_require__.bind(null, 271)));
const _473e1096 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 135).then(__webpack_require__.bind(null, 274)));
const _3898bd52 = () => interopDefault(__webpack_require__.e(/* import() | pages/founder */ 133).then(__webpack_require__.bind(null, 275)));
const _254f79e7 = () => interopDefault(__webpack_require__.e(/* import() | pages/grant-service */ 134).then(__webpack_require__.bind(null, 276)));
const _5155bb39 = () => interopDefault(__webpack_require__.e(/* import() | pages/industries/index */ 136).then(__webpack_require__.bind(null, 277)));
const _8d9c488c = () => interopDefault(__webpack_require__.e(/* import() | pages/insights/index */ 138).then(__webpack_require__.bind(null, 278)));
const _e7d13472 = () => interopDefault(__webpack_require__.e(/* import() | pages/media */ 139).then(__webpack_require__.bind(null, 279)));
const _a29bf93a = () => interopDefault(__webpack_require__.e(/* import() | pages/media-mentions/index */ 141).then(__webpack_require__.bind(null, 280)));
const _1c64f24c = () => interopDefault(__webpack_require__.e(/* import() | pages/offices */ 142).then(__webpack_require__.bind(null, 281)));
const _1eaebd78 = () => interopDefault(__webpack_require__.e(/* import() | pages/privacy-policy */ 143).then(__webpack_require__.bind(null, 282)));
const _24c57a8a = () => interopDefault(__webpack_require__.e(/* import() | pages/refund-policy */ 144).then(__webpack_require__.bind(null, 283)));
const _ee066084 = () => interopDefault(__webpack_require__.e(/* import() | pages/reviews */ 145).then(__webpack_require__.bind(null, 284)));
const _5b7cd855 = () => interopDefault(__webpack_require__.e(/* import() | pages/search */ 146).then(__webpack_require__.bind(null, 285)));
const _af12a950 = () => interopDefault(__webpack_require__.e(/* import() | pages/sitemap */ 147).then(__webpack_require__.bind(null, 286)));
const _6e082b01 = () => interopDefault(__webpack_require__.e(/* import() | pages/startup-form */ 148).then(__webpack_require__.bind(null, 287)));
const _b335daa6 = () => interopDefault(__webpack_require__.e(/* import() | pages/subscribe */ 149).then(__webpack_require__.bind(null, 288)));
const _347f1561 = () => interopDefault(__webpack_require__.e(/* import() | pages/terms-and-conditions */ 151).then(__webpack_require__.bind(null, 289)));
const _0082b1a7 = () => interopDefault(__webpack_require__.e(/* import() | pages/thank-you-for-booking */ 152).then(__webpack_require__.bind(null, 290)));
const _080ab0a9 = () => interopDefault(__webpack_require__.e(/* import() | pages/careers/contact-form */ 130).then(__webpack_require__.bind(null, 291)));
const _9097596c = () => interopDefault(__webpack_require__.e(/* import() | pages/technology/software-google-ad */ 150).then(__webpack_require__.bind(null, 292)));
const _40e7d5d0 = () => interopDefault(__webpack_require__.e(/* import() | pages/insights/_slug/index */ 137).then(__webpack_require__.bind(null, 293)));
const _063723f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/media-mentions/_slug/index */ 140).then(__webpack_require__.bind(null, 294)));
const _d7494d16 = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug/index */ 128).then(__webpack_require__.bind(null, 295)));
const _5bf04eae = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug/_slug1/index */ 127).then(__webpack_require__.bind(null, 296)));
const _4ea2bf74 = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug/_slug1/_slug2/index */ 126).then(__webpack_require__.bind(null, 297)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/book-consult",
    component: _1752bff5,
    name: "book-consult___en___default"
  }, {
    path: "/careers",
    component: _74c5fa2a,
    name: "careers___en___default"
  }, {
    path: "/cities",
    component: _32762368,
    name: "cities___en___default"
  }, {
    path: "/en",
    component: _473e1096,
    name: "index___en"
  }, {
    path: "/founder",
    component: _3898bd52,
    name: "founder___en___default"
  }, {
    path: "/grant-service",
    component: _254f79e7,
    name: "grant-service___en___default"
  }, {
    path: "/industries",
    component: _5155bb39,
    name: "industries___en___default"
  }, {
    path: "/insights",
    component: _8d9c488c,
    name: "insights___en___default"
  }, {
    path: "/media",
    component: _e7d13472,
    name: "media___en___default"
  }, {
    path: "/media-mentions",
    component: _a29bf93a,
    name: "media-mentions___en___default"
  }, {
    path: "/offices",
    component: _1c64f24c,
    name: "offices___en___default"
  }, {
    path: "/privacy-policy",
    component: _1eaebd78,
    name: "privacy-policy___en___default"
  }, {
    path: "/refund-policy",
    component: _24c57a8a,
    name: "refund-policy___en___default"
  }, {
    path: "/reviews",
    component: _ee066084,
    name: "reviews___en___default"
  }, {
    path: "/search",
    component: _5b7cd855,
    name: "search___en___default"
  }, {
    path: "/sitemap",
    component: _af12a950,
    name: "sitemap___en___default"
  }, {
    path: "/startup-form",
    component: _6e082b01,
    name: "startup-form___en___default"
  }, {
    path: "/subscribe",
    component: _b335daa6,
    name: "subscribe___en___default"
  }, {
    path: "/terms-and-conditions",
    component: _347f1561,
    name: "terms-and-conditions___en___default"
  }, {
    path: "/thank-you-for-booking",
    component: _0082b1a7,
    name: "thank-you-for-booking___en___default"
  }, {
    path: "/careers/contact-form",
    component: _080ab0a9,
    name: "careers-contact-form___en___default"
  }, {
    path: "/en/book-consult",
    component: _1752bff5,
    name: "book-consult___en"
  }, {
    path: "/en/careers",
    component: _74c5fa2a,
    name: "careers___en"
  }, {
    path: "/en/cities",
    component: _32762368,
    name: "cities___en"
  }, {
    path: "/en/founder",
    component: _3898bd52,
    name: "founder___en"
  }, {
    path: "/en/grant-service",
    component: _254f79e7,
    name: "grant-service___en"
  }, {
    path: "/en/industries",
    component: _5155bb39,
    name: "industries___en"
  }, {
    path: "/en/insights",
    component: _8d9c488c,
    name: "insights___en"
  }, {
    path: "/en/media",
    component: _e7d13472,
    name: "media___en"
  }, {
    path: "/en/media-mentions",
    component: _a29bf93a,
    name: "media-mentions___en"
  }, {
    path: "/en/offices",
    component: _1c64f24c,
    name: "offices___en"
  }, {
    path: "/en/privacy-policy",
    component: _1eaebd78,
    name: "privacy-policy___en"
  }, {
    path: "/en/refund-policy",
    component: _24c57a8a,
    name: "refund-policy___en"
  }, {
    path: "/en/reviews",
    component: _ee066084,
    name: "reviews___en"
  }, {
    path: "/en/search",
    component: _5b7cd855,
    name: "search___en"
  }, {
    path: "/en/sitemap",
    component: _af12a950,
    name: "sitemap___en"
  }, {
    path: "/en/startup-form",
    component: _6e082b01,
    name: "startup-form___en"
  }, {
    path: "/en/subscribe",
    component: _b335daa6,
    name: "subscribe___en"
  }, {
    path: "/en/terms-and-conditions",
    component: _347f1561,
    name: "terms-and-conditions___en"
  }, {
    path: "/en/thank-you-for-booking",
    component: _0082b1a7,
    name: "thank-you-for-booking___en"
  }, {
    path: "/technology/software-google-ad",
    component: _9097596c,
    name: "technology-software-google-ad___en___default"
  }, {
    path: "/en/careers/contact-form",
    component: _080ab0a9,
    name: "careers-contact-form___en"
  }, {
    path: "/en/technology/software-google-ad",
    component: _9097596c,
    name: "technology-software-google-ad___en"
  }, {
    path: "/en/insights/:slug",
    component: _40e7d5d0,
    name: "insights-slug___en"
  }, {
    path: "/en/media-mentions/:slug",
    component: _063723f2,
    name: "media-mentions-slug___en"
  }, {
    path: "/en/:slug",
    component: _d7494d16,
    name: "slug___en"
  }, {
    path: "/insights/:slug",
    component: _40e7d5d0,
    name: "insights-slug___en___default"
  }, {
    path: "/media-mentions/:slug",
    component: _063723f2,
    name: "media-mentions-slug___en___default"
  }, {
    path: "/en/:slug/:slug1",
    component: _5bf04eae,
    name: "slug-slug1___en"
  }, {
    path: "/en/:slug/:slug1/:slug2",
    component: _4ea2bf74,
    name: "slug-slug1-slug2___en"
  }, {
    path: "/",
    component: _473e1096,
    name: "index___en___default"
  }, {
    path: "/:slug",
    component: _d7494d16,
    name: "slug___en___default"
  }, {
    path: "/:slug/:slug1",
    component: _5bf04eae,
    name: "slug-slug1___en___default"
  }, {
    path: "/:slug/:slug1/:slug2",
    component: _4ea2bf74,
    name: "slug-slug1-slug2___en___default"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/error.vue?vue&type=template&id=75446c3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nuxt-error"},[_vm._ssrNode("<section class=\"item-center flex min-h-[calc(100vh-530px)] flex-col justify-center\">","</section>",[_vm._ssrNode("<div class=\"container py-20 text-center\">","</div>",[_vm._ssrNode("<h1 class=\"text-8xl font-bold text-black/70\">404</h1> <p class=\"my-5\">An error occurred</p> "),_c('nuxt-link',{staticClass:"text-primary hover:underline",attrs:{"to":_vm.localePath('/')}},[_vm._v("Home page")])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=75446c3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    return {
      title: '404 | Page not found',
      meta: [{
        name: 'robots',
        content: 'noindex'
      }]
    };
  },
  mounted() {
    document.querySelector('html').classList.add('overflow-x-hidden');
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a2fc96a2"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "b007af9a"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/tailwind.css
var tailwind = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/blank.vue?vue&type=template&id=14e714f0&
var blankvue_type_template_id_14e714f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[#FBFBFD] font-proximanova text-base font-normal text-black antialiased"},[_c('nuxt')],1)}
var blankvue_type_template_id_14e714f0_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/blank.vue?vue&type=template&id=14e714f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/blank.vue?vue&type=script&lang=js&
//
//
//
//
//
//

// import AOS from 'aos';
// import 'aos/dist/aos.css';
/* harmony default export */ var blankvue_type_script_lang_js_ = ({
  name: 'Blank',
  mounted() {
    // AOS.init();

    document.querySelector('html').classList.add('overflow-x-hidden');
  }
});
// CONCATENATED MODULE: ./layouts/blank.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_blankvue_type_script_lang_js_ = (blankvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/blank.vue





/* normalize component */

var blank_component = Object(componentNormalizer["a" /* default */])(
  layouts_blankvue_type_script_lang_js_,
  blankvue_type_template_id_14e714f0_render,
  blankvue_type_template_id_14e714f0_staticRenderFns,
  false,
  null,
  null,
  "05e8240a"
  
)

/* harmony default export */ var blank = (blank_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/default.vue?vue&type=template&id=383159d6&
var defaultvue_type_template_id_383159d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[#FBFBFD] font-proximanova text-base font-normal text-black antialiased"},[_vm._ssrNode(((_vm.$store.state.nav.isDropdownOpen)?("<div class=\"fixed left-0 top-0 z-20 h-full w-full bg-transparent\"></div>"):"<!---->")+" <div class=\"sidebar-left-overlay fixed left-0 top-0 z-50 h-full w-full cursor-pointer bg-black/30 transition-all duration-300\""+(_vm._ssrStyle(null,null, { display: (_vm.$store.state.nav.open) ? '' : 'none' }))+"></div> <div class=\"sidebar-left-overlay fixed left-0 top-0 z-30 h-full w-full cursor-pointer bg-black/30\""+(_vm._ssrStyle(null,null, { display: (_vm.$store.state.nav.isMenuBarSearchExpanded) ? '' : 'none' }))+"></div> "),_c('layout-header',{on:{"changeScrollPosition":_vm.changeScrollPosition}}),_vm._ssrNode(" "),_c('header-right-side-bar'),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("mt-[106px] md:mt-[57px] xl:mt-[114px]",{ 'mt-[114px]': _vm.isIndexPage }))+">","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('layout-footer')],2)}
var defaultvue_type_template_id_383159d6_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=383159d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import AOS from 'aos';
// import 'aos/dist/aos.css';
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'Default',
  // middleware(context) {
  //     const token = context.$cookies.get('strapi_jwt');
  //     if (!token) {
  //         context.$strapi.setToken(context.$config.strapiReadOnlyToken);
  //     }
  // },

  data() {
    return {
      isIndexPage: false,
      scrollPosition: null
    };
  },
  head() {
    // const currentPath = this.$route.path;
    const canonicalUrl = ( true ? "https://seveti.vercel.app" : undefined) + this.$route.path;
    return {
      link: [{
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }]
    };
  },
  mounted() {
    document.querySelector('html').classList.add('overflow-x-hidden');
    // AOS.init();

    const wistiaScript = document.createElement('script');
    wistiaScript.setAttribute('src', 'https://fast.wistia.net/assets/external/iframe-api-v1.js');
    document.head.appendChild(wistiaScript);
    this.visiblity();
    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === 'undefined' || this.hidden === undefined) {} else {
      // Handle page visibility change
      document.addEventListener(this.visibilityChange, this.handleVisibilityChange, false);
    }
  },
  methods: {
    changeScrollPosition(position, isIndexPage) {
      this.scrollPosition = position;
      this.isIndexPage = isIndexPage;
    },
    visiblity() {
      if (typeof document.hidden !== 'undefined') {
        this.hidden = 'hidden';
        this.visibilityChange = 'visibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        this.hidden = 'msHidden';
        this.visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        this.hidden = undefined;
        this.visibilityChange = undefined;
      }
    },
    handleVisibilityChange() {
      this.visiblity();
      if (!document[this.hidden]) {
        // this.$store.dispatch('nav/forceUpdateVideo', this.$helper.UUID());
        document.querySelectorAll('.force-video-reload').forEach(element => {
          element.load();
          element.play();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_383159d6_render,
  defaultvue_type_template_id_383159d6_staticRenderFns,
  false,
  null,
  null,
  "7f052ca8"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {LayoutHeader: __webpack_require__(119).default,HeaderRightSideBar: __webpack_require__(122).default,LayoutFooter: __webpack_require__(125).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_blank": sanitizeComponent(blank),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error.options || layouts_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(89), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(90), 'nav.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const CareerBannerTab = () => __webpack_require__.e(/* import() | components/career-banner-tab */ 11).then(__webpack_require__.bind(null, 246)).then(c => wrapFunctional(c.default || c));
const CareerCompanyOverview = () => __webpack_require__.e(/* import() | components/career-company-overview */ 12).then(__webpack_require__.bind(null, 299)).then(c => wrapFunctional(c.default || c));
const CareerConsultant = () => __webpack_require__.e(/* import() | components/career-consultant */ 13).then(__webpack_require__.bind(null, 300)).then(c => wrapFunctional(c.default || c));
const CareerJoinEvent = () => __webpack_require__.e(/* import() | components/career-join-event */ 14).then(__webpack_require__.bind(null, 248)).then(c => wrapFunctional(c.default || c));
const CareerOurTeam = () => __webpack_require__.e(/* import() | components/career-our-team */ 15).then(__webpack_require__.bind(null, 319)).then(c => wrapFunctional(c.default || c));
const CareerProfessionalFunctional = () => __webpack_require__.e(/* import() | components/career-professional-functional */ 16).then(__webpack_require__.bind(null, 249)).then(c => wrapFunctional(c.default || c));
const CareerQuestion = () => __webpack_require__.e(/* import() | components/career-question */ 17).then(__webpack_require__.bind(null, 301)).then(c => wrapFunctional(c.default || c));
const BusinessPlanGoogleAdQuestionForm = () => __webpack_require__.e(/* import() | components/business-plan-google-ad-question-form */ 10).then(__webpack_require__.bind(null, 302)).then(c => wrapFunctional(c.default || c));
const BaseAboutPage = () => __webpack_require__.e(/* import() | components/base-about-page */ 2).then(__webpack_require__.bind(null, 217)).then(c => wrapFunctional(c.default || c));
const BaseContactUs = () => __webpack_require__.e(/* import() | components/base-contact-us */ 3).then(__webpack_require__.bind(null, 225)).then(c => wrapFunctional(c.default || c));
const BaseDivisions = () => __webpack_require__.e(/* import() | components/base-divisions */ 4).then(__webpack_require__.bind(null, 226)).then(c => wrapFunctional(c.default || c));
const BaseFoundersBio = () => __webpack_require__.e(/* import() | components/base-founders-bio */ 5).then(__webpack_require__.bind(null, 228)).then(c => wrapFunctional(c.default || c));
const BaseGoogleAd = () => __webpack_require__.e(/* import() | components/base-google-ad */ 6).then(__webpack_require__.bind(null, 227)).then(c => wrapFunctional(c.default || c));
const BaseOurTeam = () => __webpack_require__.e(/* import() | components/base-our-team */ 7).then(__webpack_require__.bind(null, 229)).then(c => wrapFunctional(c.default || c));
const BaseServicePages = () => __webpack_require__.e(/* import() | components/base-service-pages */ 8).then(__webpack_require__.bind(null, 230)).then(c => wrapFunctional(c.default || c));
const BaseSingleInsights = () => __webpack_require__.e(/* import() | components/base-single-insights */ 9).then(__webpack_require__.bind(null, 231)).then(c => wrapFunctional(c.default || c));
const CommonAsSeenOn = () => __webpack_require__.e(/* import() | components/common-as-seen-on */ 18).then(__webpack_require__.bind(null, 320)).then(c => wrapFunctional(c.default || c));
const CommonBannerTab = () => __webpack_require__.e(/* import() | components/common-banner-tab */ 19).then(__webpack_require__.bind(null, 161)).then(c => wrapFunctional(c.default || c));
const CommonBaseTemplate = () => __webpack_require__.e(/* import() | components/common-base-template */ 20).then(__webpack_require__.bind(null, 303)).then(c => wrapFunctional(c.default || c));
const CommonBrandLogo = () => __webpack_require__.e(/* import() | components/common-brand-logo */ 21).then(__webpack_require__.bind(null, 164)).then(c => wrapFunctional(c.default || c));
const CommonBusinessChallenge = () => __webpack_require__.e(/* import() | components/common-business-challenge */ 22).then(__webpack_require__.bind(null, 186)).then(c => wrapFunctional(c.default || c));
const CommonCategorySlider = () => __webpack_require__.e(/* import() | components/common-category-slider */ 24).then(__webpack_require__.bind(null, 188)).then(c => wrapFunctional(c.default || c));
const CommonClientWords = () => __webpack_require__.e(/* import() | components/common-client-words */ 25).then(__webpack_require__.bind(null, 169)).then(c => wrapFunctional(c.default || c));
const CommonComments = () => __webpack_require__.e(/* import() | components/common-comments */ 26).then(__webpack_require__.bind(null, 258)).then(c => wrapFunctional(c.default || c));
const CommonCompanyOverview = () => __webpack_require__.e(/* import() | components/common-company-overview */ 27).then(__webpack_require__.bind(null, 199)).then(c => wrapFunctional(c.default || c));
const CommonConsultation = () => __webpack_require__.e(/* import() | components/common-consultation */ 28).then(__webpack_require__.bind(null, 304)).then(c => wrapFunctional(c.default || c));
const CommonContactUs = () => __webpack_require__.e(/* import() | components/common-contact-us */ 29).then(__webpack_require__.bind(null, 139)).then(c => wrapFunctional(c.default || c));
const CommonCustomStrapiDisplay = () => __webpack_require__.e(/* import() | components/common-custom-strapi-display */ 30).then(__webpack_require__.bind(null, 150)).then(c => wrapFunctional(c.default || c));
const CommonDistinctQualities = () => __webpack_require__.e(/* import() | components/common-distinct-qualities */ 31).then(__webpack_require__.bind(null, 305)).then(c => wrapFunctional(c.default || c));
const CommonDynamicQuestionnaire = () => __webpack_require__.e(/* import() | components/common-dynamic-questionnaire */ 32).then(__webpack_require__.bind(null, 187)).then(c => wrapFunctional(c.default || c));
const CommonFaq = () => __webpack_require__.e(/* import() | components/common-faq */ 33).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const CommonFeaturedServices = () => __webpack_require__.e(/* import() | components/common-featured-services */ 34).then(__webpack_require__.bind(null, 172)).then(c => wrapFunctional(c.default || c));
const CommonInterestedService = () => __webpack_require__.e(/* import() | components/common-interested-service */ 35).then(__webpack_require__.bind(null, 145)).then(c => wrapFunctional(c.default || c));
const CommonModal = () => __webpack_require__.e(/* import() | components/common-modal */ 36).then(__webpack_require__.bind(null, 189)).then(c => wrapFunctional(c.default || c));
const CommonOurTeam = () => __webpack_require__.e(/* import() | components/common-our-team */ 37).then(__webpack_require__.bind(null, 174)).then(c => wrapFunctional(c.default || c));
const CommonOurWork = () => __webpack_require__.e(/* import() | components/common-our-work */ 38).then(__webpack_require__.bind(null, 306)).then(c => wrapFunctional(c.default || c));
const CommonQuestionnaireContent = () => __webpack_require__.e(/* import() | components/common-questionnaire-content */ 39).then(__webpack_require__.bind(null, 247)).then(c => wrapFunctional(c.default || c));
const CommonQuestionsForm = () => __webpack_require__.e(/* import() | components/common-questions-form */ 40).then(__webpack_require__.bind(null, 251)).then(c => wrapFunctional(c.default || c));
const CommonReadytotalk = () => __webpack_require__.e(/* import() | components/common-readytotalk */ 41).then(__webpack_require__.bind(null, 140)).then(c => wrapFunctional(c.default || c));
const CommonShare = () => __webpack_require__.e(/* import() | components/common-share */ 42).then(__webpack_require__.bind(null, 143)).then(c => wrapFunctional(c.default || c));
const CommonTellMoreAboutProjects = () => __webpack_require__.e(/* import() | components/common-tell-more-about-projects */ 43).then(__webpack_require__.bind(null, 177)).then(c => wrapFunctional(c.default || c));
const CommonToggleContent = () => __webpack_require__.e(/* import() | components/common-toggle-content */ 44).then(__webpack_require__.bind(null, 149)).then(c => wrapFunctional(c.default || c));
const CommonVenturePlans = () => __webpack_require__.e(/* import() | components/common-venture-plans */ 45).then(__webpack_require__.bind(null, 200)).then(c => wrapFunctional(c.default || c));
const CommonWorkAtTheBestPlace = () => __webpack_require__.e(/* import() | components/common-work-at-the-best-place */ 46).then(__webpack_require__.bind(null, 182)).then(c => wrapFunctional(c.default || c));
const ConsultingOurPortfolio = () => __webpack_require__.e(/* import() | components/consulting-our-portfolio */ 47).then(__webpack_require__.bind(null, 307)).then(c => wrapFunctional(c.default || c));
const ContactFeaturedServices = () => __webpack_require__.e(/* import() | components/contact-featured-services */ 48).then(__webpack_require__.bind(null, 308)).then(c => wrapFunctional(c.default || c));
const ContactPrivatePlacement = () => __webpack_require__.e(/* import() | components/contact-private-placement */ 49).then(__webpack_require__.bind(null, 198)).then(c => wrapFunctional(c.default || c));
const ContactUsHeroform = () => __webpack_require__.e(/* import() | components/contact-us-heroform */ 50).then(__webpack_require__.bind(null, 197)).then(c => wrapFunctional(c.default || c));
const ContactUsServiceHelp = () => __webpack_require__.e(/* import() | components/contact-us-service-help */ 51).then(__webpack_require__.bind(null, 309)).then(c => wrapFunctional(c.default || c));
const GoogleAdCustomSoftwareDevelopment = () => __webpack_require__.e(/* import() | components/google-ad-custom-software-development */ 52).then(__webpack_require__.bind(null, 256)).then(c => wrapFunctional(c.default || c));
const GoogleAdHeroform = () => __webpack_require__.e(/* import() | components/google-ad-heroform */ 53).then(__webpack_require__.bind(null, 254)).then(c => wrapFunctional(c.default || c));
const GoogleAdLosHeroform = () => __webpack_require__.e(/* import() | components/google-ad-los-heroform */ 54).then(__webpack_require__.bind(null, 310)).then(c => wrapFunctional(c.default || c));
const GoogleAdProjectInfoSubmit = () => __webpack_require__.e(/* import() | components/google-ad-project-info-submit */ 55).then(__webpack_require__.bind(null, 257)).then(c => wrapFunctional(c.default || c));
const HeaderMenuBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c));
const HeaderRightSideBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c));
const HeaderTopBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c));
const HomeAboutClient = () => __webpack_require__.e(/* import() | components/home-about-client */ 56).then(__webpack_require__.bind(null, 252)).then(c => wrapFunctional(c.default || c));
const HomeCareer = () => __webpack_require__.e(/* import() | components/home-career */ 57).then(__webpack_require__.bind(null, 311)).then(c => wrapFunctional(c.default || c));
const HomeHeroSlider = () => __webpack_require__.e(/* import() | components/home-hero-slider */ 58).then(__webpack_require__.bind(null, 250)).then(c => wrapFunctional(c.default || c));
const HomeOurLatestInsights = () => __webpack_require__.e(/* import() | components/home-our-latest-insights */ 59).then(__webpack_require__.bind(null, 312)).then(c => wrapFunctional(c.default || c));
const HomePrivatePlacement = () => __webpack_require__.e(/* import() | components/home-private-placement */ 60).then(__webpack_require__.bind(null, 180)).then(c => wrapFunctional(c.default || c));
const HomeSectorChart = () => __webpack_require__.e(/* import() | components/home-sector-chart */ 61).then(__webpack_require__.bind(null, 201)).then(c => wrapFunctional(c.default || c));
const HomeSectorExcelled = () => __webpack_require__.e(/* import() | components/home-sector-excelled */ 62).then(__webpack_require__.bind(null, 218)).then(c => wrapFunctional(c.default || c));
const HomeSubscribe = () => __webpack_require__.e(/* import() | components/home-subscribe */ 63).then(__webpack_require__.bind(null, 313)).then(c => wrapFunctional(c.default || c));
const IconsAproach = () => __webpack_require__.e(/* import() | components/icons-aproach */ 64).then(__webpack_require__.bind(null, 321)).then(c => wrapFunctional(c.default || c));
const IconsArrowRightThin = () => __webpack_require__.e(/* import() | components/icons-arrow-right-thin */ 65).then(__webpack_require__.bind(null, 190)).then(c => wrapFunctional(c.default || c));
const IconsArrowUpThin = () => __webpack_require__.e(/* import() | components/icons-arrow-up-thin */ 67).then(__webpack_require__.bind(null, 322)).then(c => wrapFunctional(c.default || c));
const IconsArrowUp = () => __webpack_require__.e(/* import() | components/icons-arrow-up */ 66).then(__webpack_require__.bind(null, 204)).then(c => wrapFunctional(c.default || c));
const IconsAttach = () => __webpack_require__.e(/* import() | components/icons-attach */ 68).then(__webpack_require__.bind(null, 178)).then(c => wrapFunctional(c.default || c));
const IconsBachelorCandidate = () => __webpack_require__.e(/* import() | components/icons-bachelor-candidate */ 69).then(__webpack_require__.bind(null, 323)).then(c => wrapFunctional(c.default || c));
const IconsBitcoin = () => __webpack_require__.e(/* import() | components/icons-bitcoin */ 70).then(__webpack_require__.bind(null, 216)).then(c => wrapFunctional(c.default || c));
const IconsBrokerage = () => __webpack_require__.e(/* import() | components/icons-brokerage */ 71).then(__webpack_require__.bind(null, 210)).then(c => wrapFunctional(c.default || c));
const IconsBuilding = () => __webpack_require__.e(/* import() | components/icons-building */ 72).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c));
const IconsCalendar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c));
const IconsCannabis = () => __webpack_require__.e(/* import() | components/icons-cannabis */ 73).then(__webpack_require__.bind(null, 208)).then(c => wrapFunctional(c.default || c));
const IconsCentricity = () => __webpack_require__.e(/* import() | components/icons-centricity */ 74).then(__webpack_require__.bind(null, 324)).then(c => wrapFunctional(c.default || c));
const IconsCheckCircle = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c));
const IconsCleanTech = () => __webpack_require__.e(/* import() | components/icons-clean-tech */ 75).then(__webpack_require__.bind(null, 211)).then(c => wrapFunctional(c.default || c));
const IconsCloseMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 127)).then(c => wrapFunctional(c.default || c));
const IconsCloseSearch = () => __webpack_require__.e(/* import() | components/icons-close-search */ 77).then(__webpack_require__.bind(null, 156)).then(c => wrapFunctional(c.default || c));
const IconsCloseTime = () => __webpack_require__.e(/* import() | components/icons-close-time */ 78).then(__webpack_require__.bind(null, 181)).then(c => wrapFunctional(c.default || c));
const IconsClose = () => __webpack_require__.e(/* import() | components/icons-close */ 76).then(__webpack_require__.bind(null, 219)).then(c => wrapFunctional(c.default || c));
const IconsConsumer = () => __webpack_require__.e(/* import() | components/icons-consumer */ 79).then(__webpack_require__.bind(null, 214)).then(c => wrapFunctional(c.default || c));
const IconsDomain = () => __webpack_require__.e(/* import() | components/icons-domain */ 80).then(__webpack_require__.bind(null, 325)).then(c => wrapFunctional(c.default || c));
const IconsDownBorder = () => __webpack_require__.e(/* import() | components/icons-down-border */ 81).then(__webpack_require__.bind(null, 236)).then(c => wrapFunctional(c.default || c));
const IconsDownarrow = () => __webpack_require__.e(/* import() | components/icons-downarrow */ 82).then(__webpack_require__.bind(null, 154)).then(c => wrapFunctional(c.default || c));
const IconsEduction = () => __webpack_require__.e(/* import() | components/icons-eduction */ 83).then(__webpack_require__.bind(null, 206)).then(c => wrapFunctional(c.default || c));
const IconsFacebook = () => __webpack_require__.e(/* import() | components/icons-facebook */ 84).then(__webpack_require__.bind(null, 152)).then(c => wrapFunctional(c.default || c));
const IconsFinacial = () => __webpack_require__.e(/* import() | components/icons-finacial */ 85).then(__webpack_require__.bind(null, 209)).then(c => wrapFunctional(c.default || c));
const IconsGoogleIcon = () => __webpack_require__.e(/* import() | components/icons-google-icon */ 86).then(__webpack_require__.bind(null, 235)).then(c => wrapFunctional(c.default || c));
const IconsHamburger = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 128)).then(c => wrapFunctional(c.default || c));
const IconsHeartCare = () => __webpack_require__.e(/* import() | components/icons-heart-care */ 87).then(__webpack_require__.bind(null, 212)).then(c => wrapFunctional(c.default || c));
const IconsIcon1 = () => __webpack_require__.e(/* import() | components/icons-icon1 */ 88).then(__webpack_require__.bind(null, 326)).then(c => wrapFunctional(c.default || c));
const IconsIcon2 = () => __webpack_require__.e(/* import() | components/icons-icon2 */ 89).then(__webpack_require__.bind(null, 327)).then(c => wrapFunctional(c.default || c));
const IconsIcon3 = () => __webpack_require__.e(/* import() | components/icons-icon3 */ 90).then(__webpack_require__.bind(null, 328)).then(c => wrapFunctional(c.default || c));
const IconsIcon4 = () => __webpack_require__.e(/* import() | components/icons-icon4 */ 91).then(__webpack_require__.bind(null, 329)).then(c => wrapFunctional(c.default || c));
const IconsIcon5 = () => __webpack_require__.e(/* import() | components/icons-icon5 */ 92).then(__webpack_require__.bind(null, 330)).then(c => wrapFunctional(c.default || c));
const IconsIcon6 = () => __webpack_require__.e(/* import() | components/icons-icon6 */ 93).then(__webpack_require__.bind(null, 331)).then(c => wrapFunctional(c.default || c));
const IconsIcon7 = () => __webpack_require__.e(/* import() | components/icons-icon7 */ 94).then(__webpack_require__.bind(null, 332)).then(c => wrapFunctional(c.default || c));
const IconsInstagramColor = () => __webpack_require__.e(/* import() | components/icons-instagram-color */ 96).then(__webpack_require__.bind(null, 333)).then(c => wrapFunctional(c.default || c));
const IconsInstagram = () => __webpack_require__.e(/* import() | components/icons-instagram */ 95).then(__webpack_require__.bind(null, 203)).then(c => wrapFunctional(c.default || c));
const IconsLinkedin = () => __webpack_require__.e(/* import() | components/icons-linkedin */ 97).then(__webpack_require__.bind(null, 144)).then(c => wrapFunctional(c.default || c));
const IconsLocation = () => __webpack_require__.e(/* import() | components/icons-location */ 98).then(__webpack_require__.bind(null, 202)).then(c => wrapFunctional(c.default || c));
const IconsLogo = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const IconsManufacturing = () => __webpack_require__.e(/* import() | components/icons-manufacturing */ 99).then(__webpack_require__.bind(null, 215)).then(c => wrapFunctional(c.default || c));
const IconsMarket = () => __webpack_require__.e(/* import() | components/icons-market */ 100).then(__webpack_require__.bind(null, 334)).then(c => wrapFunctional(c.default || c));
const IconsMbaCandidate = () => __webpack_require__.e(/* import() | components/icons-mba-candidate */ 101).then(__webpack_require__.bind(null, 335)).then(c => wrapFunctional(c.default || c));
const IconsMdCandidate = () => __webpack_require__.e(/* import() | components/icons-md-candidate */ 102).then(__webpack_require__.bind(null, 336)).then(c => wrapFunctional(c.default || c));
const IconsMinus = () => __webpack_require__.e(/* import() | components/icons-minus */ 103).then(__webpack_require__.bind(null, 159)).then(c => wrapFunctional(c.default || c));
const IconsPhone = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c));
const IconsPlay = () => __webpack_require__.e(/* import() | components/icons-play */ 104).then(__webpack_require__.bind(null, 141)).then(c => wrapFunctional(c.default || c));
const IconsPlus = () => __webpack_require__.e(/* import() | components/icons-plus */ 105).then(__webpack_require__.bind(null, 160)).then(c => wrapFunctional(c.default || c));
const IconsProfessional = () => __webpack_require__.e(/* import() | components/icons-professional */ 106).then(__webpack_require__.bind(null, 337)).then(c => wrapFunctional(c.default || c));
const IconsResidential = () => __webpack_require__.e(/* import() | components/icons-residential */ 107).then(__webpack_require__.bind(null, 213)).then(c => wrapFunctional(c.default || c));
const IconsRightMenuArrow = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c));
const IconsSave = () => __webpack_require__.e(/* import() | components/icons-save */ 108).then(__webpack_require__.bind(null, 260)).then(c => wrapFunctional(c.default || c));
const IconsSearch = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 70)).then(c => wrapFunctional(c.default || c));
const IconsSelectionArrow = () => __webpack_require__.e(/* import() | components/icons-selection-arrow */ 109).then(__webpack_require__.bind(null, 138)).then(c => wrapFunctional(c.default || c));
const IconsShareIcon = () => __webpack_require__.e(/* import() | components/icons-share-icon */ 110).then(__webpack_require__.bind(null, 338)).then(c => wrapFunctional(c.default || c));
const IconsStar = () => __webpack_require__.e(/* import() | components/icons-star */ 111).then(__webpack_require__.bind(null, 234)).then(c => wrapFunctional(c.default || c));
const IconsTeam = () => __webpack_require__.e(/* import() | components/icons-team */ 112).then(__webpack_require__.bind(null, 339)).then(c => wrapFunctional(c.default || c));
const IconsTiktok = () => __webpack_require__.e(/* import() | components/icons-tiktok */ 113).then(__webpack_require__.bind(null, 340)).then(c => wrapFunctional(c.default || c));
const IconsTopmenuarrow = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 126)).then(c => wrapFunctional(c.default || c));
const IconsTwitter = () => __webpack_require__.e(/* import() | components/icons-twitter */ 114).then(__webpack_require__.bind(null, 153)).then(c => wrapFunctional(c.default || c));
const IconsUpload = () => __webpack_require__.e(/* import() | components/icons-upload */ 115).then(__webpack_require__.bind(null, 259)).then(c => wrapFunctional(c.default || c));
const IconsWhiteLogo = () => __webpack_require__.e(/* import() | components/icons-white-logo */ 116).then(__webpack_require__.bind(null, 341)).then(c => wrapFunctional(c.default || c));
const IconsWifi = () => __webpack_require__.e(/* import() | components/icons-wifi */ 117).then(__webpack_require__.bind(null, 207)).then(c => wrapFunctional(c.default || c));
const IconsYelpIcon = () => __webpack_require__.e(/* import() | components/icons-yelp-icon */ 118).then(__webpack_require__.bind(null, 342)).then(c => wrapFunctional(c.default || c));
const IconsYoutube = () => __webpack_require__.e(/* import() | components/icons-youtube */ 119).then(__webpack_require__.bind(null, 343)).then(c => wrapFunctional(c.default || c));
const InputFilterCheckbox = () => __webpack_require__.e(/* import() | components/input-filter-checkbox */ 120).then(__webpack_require__.bind(null, 224)).then(c => wrapFunctional(c.default || c));
const OurSustainabilityCardWithImage = () => __webpack_require__.e(/* import() | components/our-sustainability-card-with-image */ 121).then(__webpack_require__.bind(null, 314)).then(c => wrapFunctional(c.default || c));
const OurSustainabilityMaterialTopics = () => __webpack_require__.e(/* import() | components/our-sustainability-material-topics */ 122).then(__webpack_require__.bind(null, 315)).then(c => wrapFunctional(c.default || c));
const LayoutFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125)).then(c => wrapFunctional(c.default || c));
const LayoutHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c));
const SoftwareDevelopmentServices = () => __webpack_require__.e(/* import() | components/software-development-services */ 123).then(__webpack_require__.bind(null, 255)).then(c => wrapFunctional(c.default || c));
const SoftwareGoogleAdWhyVenturePlans = () => __webpack_require__.e(/* import() | components/software-google-ad-why-venture-plans */ 124).then(__webpack_require__.bind(null, 253)).then(c => wrapFunctional(c.default || c));
const TechnologyQuestionsForm = () => __webpack_require__.e(/* import() | components/technology-questions-form */ 125).then(__webpack_require__.bind(null, 316)).then(c => wrapFunctional(c.default || c));
const AboutOurLeadershipVideoSection = () => __webpack_require__.e(/* import() | components/about-our-leadership-video-section */ 1).then(__webpack_require__.bind(null, 317)).then(c => wrapFunctional(c.default || c));
const CommonBusinessPlanAbout = () => __webpack_require__.e(/* import() | components/common-business-plan-about */ 23).then(__webpack_require__.bind(null, 318)).then(c => wrapFunctional(c.default || c));
const HeaderRightSideBarMenuLanguageEnglish = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124)).then(c => wrapFunctional(c.default || c));
const HeaderRightSideBarMenuOffices = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 123)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "core-js/modules/esnext.weak-map.delete-all.js"
var esnext_weak_map_delete_all_js_ = __webpack_require__(91);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/composition-api/globals.mjs
const isFullStatic = false;
const staticPath = "C:/Users/USER/Documents/venture-nuxt/.nuxt/static-json";
const publicPath = "/";
const globalContext = "__NUXT__";
const globalNuxt = "$nuxt";
// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(50);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs




































function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/dist/babel-plugin' to your Babel plugins.");
  }
}
function getCurrentInstance() {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) return;
  return vm.proxy;
}
function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}
let globalRefs = {};
function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}
const useServerData = () => {
  const vm = getCurrentInstance();
  const type = vm ? "ssrRefs" : "globalRefs";
  let ssrRefs;
  if (vm && true) {
    const ssrContext = (vm[globalNuxt] || vm.$options).context.ssrContext;
    ssrRefs = ssrContext.nuxt.ssrRefs = ssrContext.nuxt.ssrRefs || {};
  }
  const setData = (key, val) => {
    const refs = ssrRefs || globalRefs;
    refs[key] = sanitise(val);
  };
  return {
    type,
    setData
  };
};
const isProxyable = val => !!val && typeof val === "object";
const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;
const ssrValue = (value, key, type = "globalRefs") => {
  var _a, _b, _c, _d;
  if (false) {}
  return getValue(value);
};
const ssrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  let val = ssrValue(value, key, type);
  if (false) {}
  if (value instanceof Function) setData(key, val);
  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      const value2 = Reflect.get(target, prop);
      return typeof value2 === "function" ? value2.bind(target) : value2;
    },
    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      setData(key, val);
      trigger();
      return result;
    }
  });
  const proxy = Object(composition_api_["customRef"])((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      setData(key, v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};
const shallowSsrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  if (false) {}
  const _val = getValue(value);
  if (value instanceof Function) {
    setData(key, _val);
  }
  return Object(composition_api_["customRef"])((track, trigger) => ({
    get() {
      track();
      return _val;
    },
    set(newValue) {
      setData(key, newValue);
      value = newValue;
      trigger();
    }
  }));
};
const ssrPromise = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  const val = ssrValue(value, key, type);
  if (false) {}
  Object(composition_api_["onServerPrefetch"])(async () => {
    setData(key, await val);
  });
  return val;
};
const useAsync = (cb, key) => {
  var _a;
  validateKey(key);
  const _ref = Object(composition_api_["isRef"])(key) ? key : ssrRef(null, key);
  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());
    if (true) {
      Object(composition_api_["onServerPrefetch"])(async () => {
        _ref.value = await p;
      });
    } else {}
  }
  return _ref;
};
function createEmptyMeta() {
  return {
    titleTemplate: null,
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: void 0,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: void 0,
    afterNavigation: void 0
  };
}
const getHeadOptions = options => {
  const head = function () {
    const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
    if (!this._computedHead) return optionHead;
    const computedHead = this._computedHead.map(h => {
      if (Object(composition_api_["isReactive"])(h)) return Object(composition_api_["toRaw"])(h);
      if (Object(composition_api_["isRef"])(h)) return h.value;
      return h;
    });
    return defu_default()({}, ...computedHead.reverse(), optionHead);
  };
  return {
    head
  };
};
const useMeta = init => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("useMeta must be called within a component.");
  if (!("head" in vm.$options)) throw new Error("In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.");
  const refreshMeta = () => vm.$meta().refresh();
  if (!vm._computedHead) {
    const metaRefs = Object(composition_api_["reactive"])(createEmptyMeta());
    vm._computedHead = [metaRefs];
    vm._metaRefs = Object(composition_api_["toRefs"])(metaRefs);
    if (false) {}
  }
  if (init) {
    const initRef = init instanceof Function ? Object(composition_api_["computed"])(init) : Object(composition_api_["ref"])(init);
    vm._computedHead.push(initRef);
    if (false) {}
  }
  return vm._metaRefs;
};
const defineComponent = options => {
  if (!("head" in options)) return options;
  return {
    ...options,
    ...getHeadOptions(options)
  };
};
const withContext = callback => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  callback((vm[globalNuxt] || vm.$options).context);
};
const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  return {
    ...(vm[globalNuxt] || vm.$options).context,
    route: Object(composition_api_["computed"])(() => vm.$route),
    query: Object(composition_api_["computed"])(() => vm.$route.query),
    from: Object(composition_api_["computed"])(() => (vm[globalNuxt] || vm.$options).context.from),
    params: Object(composition_api_["computed"])(() => vm.$route.params)
  };
};
const defineNuxtPlugin = plugin => plugin;
const defineNuxtMiddleware = middleware => middleware;
const runtime_nuxtState =  false && false;
function runtime_normalizeError(err) {
  let message;
  if (!(err.message || typeof err === "string")) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
function runtime_createGetCounter(counterObject, defaultKey = "") {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
const fetches = new WeakMap();
const fetchPromises = new Map();
const isSsrHydration = vm => {
  var _a, _b, _c;
  return (_c = (_b = (_a = vm.$vnode) == null ? void 0 : _a.elm) == null ? void 0 : _b.dataset) == null ? void 0 : _c.fetchKey;
};
function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}
async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();
  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    if (false) {}
    error = runtime_normalizeError(err);
  }
  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);
  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }
  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}
const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || Object(composition_api_["reactive"])({
    error: null,
    pending: false,
    timestamp: 0
  });
};
const mergeDataOnMount = data => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  Object(composition_api_["onBeforeMount"])(() => {
    for (const key in data) {
      try {
        if (key in vm) {
          const _key = key;
          if (vm[_key] === data[key]) continue;
          if (typeof vm[_key] === "function") continue;
          if (Object(composition_api_["isReactive"])(vm[_key])) {
            for (const k in vm[_key]) {
              if (!(k in data[key])) {
                delete vm[_key][k];
              }
            }
            Object.assign(vm[_key], data[key]);
            continue;
          }
        }
        Object(composition_api_["set"])(vm, key, data[key]);
      } catch (e) {
        if (false) {}
      }
    }
  });
};
const loadFullStatic = vm => {
  vm._fetchKey = getKey(vm);
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === "function" ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm[globalNuxt];
  if (!fetchedOnServer || (nuxt == null ? void 0 : nuxt.isPreview) || !(nuxt == null ? void 0 : nuxt._pagePayload)) {
    return;
  }
  vm._hydrated = true;
  const data = nuxt._pagePayload.fetch[vm._fetchKey];
  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  }
  mergeDataOnMount(data);
};
async function runtime_serverPrefetch(vm) {
  if (!vm._fetchOnServer) return;
  setFetchState(vm);
  try {
    await callFetches.call(vm);
  } catch (err) {
    if (false) {}
    vm.$fetchState.error = runtime_normalizeError(err);
  }
  vm.$fetchState.pending = false;
  vm._fetchKey = "push" in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters[""]++;
  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs["data-fetch-key"] = vm._fetchKey;
  const data = {
    ...vm._data
  };
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise) return;
    data[key] = Object(composition_api_["isRef"])(val) ? val.value : val;
  });
  const content = vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data));
  if ("push" in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}
function getKey(vm) {
  const nuxtState2 = vm[globalNuxt];
  if ( true && "push" in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  } else if (false) {}
  const defaultKey = vm.$options._scopeId || vm.$options.name || "";
  const getCounter = runtime_createGetCounter( true ? vm.$ssrContext.fetchCounters : undefined, defaultKey);
  const options = vm.$options;
  if (typeof options.fetchKey === "function") {
    return options.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options.fetchKey === "string" ? options.fetchKey : defaultKey;
    return key ? key + ":" + getCounter(key) : String(getCounter(key));
  }
}
const useFetch = callback => {
  var _a;
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  registerCallback(vm, callback);
  if (typeof vm.$options.fetchOnServer === "function") {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }
  if (true) {
    vm._fetchKey = getKey(vm);
  }
  setFetchState(vm);
  Object(composition_api_["onServerPrefetch"])(() => runtime_serverPrefetch(vm));
  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }
  vm._fetchDelay = typeof vm.$options.fetchDelay === "number" ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  Object(composition_api_["onBeforeMount"])(() => !vm._hydrated && callFetches.call(vm));
  if (true) {
    if (false) {}
    return result();
  }
  vm._hydrated = true;
  vm._fetchKey = ((_a = vm.$vnode.elm) == null ? void 0 : _a.dataset.fetchKey) || getKey(vm);
  const data = runtime_nuxtState.fetch[vm._fetchKey];
  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }
  mergeDataOnMount(data);
  return result();
};
const reqRefs = new Set();
const reqRef = initialValue => {
  const _ref = Object(composition_api_["ref"])(initialValue);
  if (true) reqRefs.add(() => _ref.value = initialValue);
  return _ref;
};
const reqSsrRef = (initialValue, key) => {
  const _ref = ssrRef(initialValue, key);
  if (true) reqRefs.add(() => {
    _ref.value = initialValue instanceof Function ? sanitise(initialValue()) : initialValue;
  });
  return _ref;
};
let globalSetup;
const onGlobalSetup = fn => {
  globalSetup.add(fn);
};
const setMetaPlugin = context => {
  const {
    head
  } = context.app;
  Object.assign(context.app, getHeadOptions({
    head
  }));
};
const globalPlugin = context => {
  if (true) {
    reqRefs.forEach(reset => reset());
    setSSRContext(context.app);
  }
  const {
    setup
  } = context.app;
  globalSetup = new Set();
  context.app.setup = function (...args) {
    let result = {};
    if (setup instanceof Function) {
      result = setup(...args) || {};
    }
    for (const fn of globalSetup) {
      result = {
        ...result,
        ...(fn.call(this, ...args) || {})
      };
    }
    return result;
  };
};
const staticCache = {};
function writeFile(key, value) {
  if (true) return;
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(108);
  const {
    join
  } =  false ? undefined : __webpack_require__(109);
  try {
    writeFileSync(join(staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}
const useStatic = (factory, param = Object(composition_api_["ref"])(""), keyBase) => {
  var _a, _b;
  const key = Object(composition_api_["computed"])(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;
  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }
    Object(composition_api_["onServerPrefetch"])(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }
  return result;
};
const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm) throw new Error("This must be called within a setup function.");
    return makeComputed !== false ? Object(composition_api_["computed"])(() => vm[property]) : vm[property];
  };
};
const useRouter = wrapProperty("$router", false);
const useRoute = wrapProperty("$route");
const useStore = key => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  return vm.$store;
};
if (false) {}

// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.mjs

/* harmony default export */ var composition_api_plugin = (globalPlugin);
// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(51);

// CONCATENATED MODULE: ./.nuxt/recaptcha.js


const API_URL = 'https://www.recaptcha.net/recaptcha/api.js';
class recaptcha_ReCaptcha {
  constructor({
    hideBadge,
    language,
    mode,
    siteKey,
    version,
    size
  }) {
    if (!siteKey) {
      throw new Error('ReCaptcha error: No key provided');
    }
    if (!version) {
      throw new Error('ReCaptcha error: No version provided');
    }
    this._elements = {};
    this._grecaptcha = null;
    this._eventBus = null;
    this._ready = false;
    this.hideBadge = hideBadge;
    this.language = language;
    this.siteKey = siteKey;
    this.version = version;
    this.size = size;
    this.mode = mode;
  }
  destroy() {
    if (this._ready) {
      this._ready = false;
      const {
        head
      } = document;
      const {
        style
      } = this._elements;
      const scripts = [...document.head.querySelectorAll('script')].filter(script => script.src.includes('recaptcha'));
      if (scripts.length) {
        scripts.forEach(script => head.removeChild(script));
      }
      if (head.contains(style)) {
        head.removeChild(style);
      }
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        badge.remove();
      }
    }
  }
  async execute(action) {
    try {
      await this.init();
      if ('grecaptcha' in window) {
        return this._grecaptcha.execute(this.siteKey, {
          action
        });
      }
    } catch (error) {
      throw new Error(`ReCaptcha error: Failed to execute ${error}`);
    }
  }
  getResponse(widgetId) {
    return new Promise((resolve, reject) => {
      if ('grecaptcha' in window) {
        if (this.size == 'invisible') {
          this._grecaptcha.execute(widgetId);
          window.recaptchaSuccessCallback = token => {
            this._eventBus.emit('recaptcha-success', token);
            resolve(token);
          };
          window.recaptchaErrorCallback = error => {
            this._eventBus.emit('recaptcha-error', error);
            reject(error);
          };
        } else {
          const response = this._grecaptcha.getResponse(widgetId);
          if (response) {
            this._eventBus.emit('recaptcha-success', response);
            resolve(response);
          } else {
            const errorMessage = 'Failed to execute';
            this._eventBus.emit('recaptcha-error', errorMessage);
            reject(errorMessage);
          }
        }
      }
    });
  }
  init() {
    if (this._ready) {
      // make sure caller waits until recaptcha get ready
      return this._ready;
    }
    this._eventBus = new external_events_["EventEmitter"]();
    this._elements = {
      script: document.createElement('script'),
      style: document.createElement('style')
    };
    const {
      script,
      style
    } = this._elements;
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    const params = [];
    if (this.version === 3) {
      params.push('render=' + this.siteKey);
    }
    if (this.language) {
      params.push('hl=' + this.language);
    }
    let scriptUrl = API_URL;
    if (this.mode === 'enterprise') {
      scriptUrl = scriptUrl.replace('api.js', 'enterprise.js');
      params.push('render=' + this.siteKey);
    }
    script.setAttribute('src', scriptUrl + '?' + params.join('&'));
    window.recaptchaSuccessCallback = token => this._eventBus.emit('recaptcha-success', token);
    window.recaptchaExpiredCallback = () => this._eventBus.emit('recaptcha-expired');
    window.recaptchaErrorCallback = () => this._eventBus.emit('recaptcha-error', 'Failed to execute');
    this._ready = new Promise((resolve, reject) => {
      script.addEventListener('load', () => {
        if (this.version === 3 && this.hideBadge) {
          style.innerHTML = '.grecaptcha-badge { display: none }';
          document.head.appendChild(style);
        } else if (this.version === 2 && this.hideBadge) {
          // display: none DISABLES the spam checking!
          // ref: https://stackoverflow.com/questions/44543157/how-to-hide-the-google-invisible-recaptcha-badge
          style.innerHTML = '.grecaptcha-badge { visibility: hidden; }';
          document.head.appendChild(style);
        }
        this._grecaptcha = window.grecaptcha.enterprise || window.grecaptcha;
        this._grecaptcha.ready(resolve);
      });
      script.addEventListener('error', () => {
        document.head.removeChild(script);
        reject('ReCaptcha error: Failed to load script');
        this._ready = null;
      });
      document.head.appendChild(script);
    });
    return this._ready;
  }
  on(event, callback) {
    return this._eventBus.on(event, callback);
  }
  reset(widgetId) {
    if (this.version === 2 || typeof widgetId !== 'undefined') {
      this._grecaptcha.reset(widgetId);
    }
  }
  render(reference, {
    sitekey,
    theme
  }) {
    return this._grecaptcha.render(reference.$el || reference, {
      sitekey,
      theme
    });
  }
}
/* harmony default export */ var _nuxt_recaptcha = (function (_, inject) {
  const {
    recaptcha = {}
  } = _.$config || {};
  const options = {
    ...{
      "siteKey": "6LeOh1EpAAAAAHvF8Sa9kwfPok7Q-k_L6biNhhxG",
      "version": 2
    },
    ...recaptcha
  };
  external_vue_default.a.component('Recaptcha', () => __webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(null, 298)));
  inject('recaptcha', new recaptcha_ReCaptcha(options));
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(52);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "abort-controller"
var external_abort_controller_ = __webpack_require__(53);

// EXTERNAL MODULE: external "web-streams-polyfill/ponyfill/es2018"
var es2018_ = __webpack_require__(54);

// CONCATENATED MODULE: ./.nuxt/http.server.js



const TEN_MEGABYTES = 1000 * 1000 * 10;
if (!global.fetch) {
  global.fetch = (url, options) => external_node_fetch_default()(url, {
    highWaterMark: TEN_MEGABYTES,
    ...options
  });
}
if (!global.Headers) {
  global.Headers = external_node_fetch_default.a.Headers;
}
if (!global.Request) {
  global.Request = external_node_fetch_default.a.Request;
}
if (!global.Response) {
  global.Response = external_node_fetch_default.a.Response;
}
if (!global.AbortController) {
  global.AbortController = external_abort_controller_["AbortController"];
}
if (!global.ReadableStream) {
  try {
    global.ReadableStream = es2018_["ReadableStream"];
  } catch (_) {}
}
// EXTERNAL MODULE: ./node_modules/defu/dist/defu.js
var dist_defu = __webpack_require__(21);
var dist_defu_default = /*#__PURE__*/__webpack_require__.n(dist_defu);

// EXTERNAL MODULE: ./node_modules/destr/dist/index.cjs
var destr_dist = __webpack_require__(17);
var destr_dist_default = /*#__PURE__*/__webpack_require__.n(destr_dist);

// EXTERNAL MODULE: ./node_modules/ky/index.js
var node_modules_ky = __webpack_require__(55);

// CONCATENATED MODULE: ./.nuxt/http.js



class http_HTTP {
  constructor(defaults, ky = node_modules_ky["a" /* default */]) {
    this._defaults = {
      hooks: {},
      ...defaults
    };
    this._ky = ky;
  }
  getBaseURL() {
    return this._defaults.prefixUrl;
  }
  setBaseURL(baseURL) {
    this._defaults.prefixUrl = baseURL;
  }
  setHeader(name, value) {
    if (!value) {
      delete this._defaults.headers[name];
    } else {
      this._defaults.headers[name] = value;
    }
  }
  setToken(token, type) {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value);
  }
  _hook(name, fn) {
    if (!this._defaults.hooks[name]) {
      this._defaults.hooks[name] = [];
    }
    this._defaults.hooks[name].push(fn);
  }
  onRequest(fn) {
    this._hook('beforeRequest', fn);
  }
  onRetry(fn) {
    this._hook('beforeRetry', fn);
  }
  onResponse(fn) {
    this._hook('afterResponse', fn);
  }
  onError(fn) {
    this._hook('onError', fn);
  }
  create(options) {
    const {
      retry,
      timeout,
      prefixUrl,
      headers
    } = this._defaults;
    return createHttpInstance(dist_defu_default()(options, {
      retry,
      timeout,
      prefixUrl,
      headers
    }));
  }
}
for (let method of ['get', 'head', 'delete', 'post', 'put', 'patch']) {
  const hasBody = ['post', 'put', 'patch'].includes(method);
  http_HTTP.prototype[method] = async function (url, arg1, arg2) {
    let options;
    if (!hasBody) {
      options = arg1;
    } else {
      options = arg2 || {};
      if (arg1 !== undefined) {
        if (arg1.constructor === Object || Array.isArray(arg1)) {
          options.json = arg1;
        } else {
          options.body = arg1;
        }
      }
    }
    const _options = {
      ...this._defaults,
      ...options
    };
    if (/^https?/.test(url)) {
      delete _options.prefixUrl;
    } else if (_options.prefixUrl && typeof url === 'string' && url.startsWith('/')) {
      // Prevents `ky` from throwing "`input` must not begin with a slash when using `prefixUrl`"
      url = url.substr(1);
    }
    try {
      const response = await this._ky[method](url, _options);
      return response;
    } catch (error) {
      // Try to fill error with useful data
      if (error.response) {
        error.statusCode = error.response.status;
        try {
          const text = await error.response.text();
          error.response.text = () => Promise.resolve(text);
          const json = destr_dist_default()(text);
          error.response.json = () => Promise.resolve(json);
          error.response.data = json;
        } catch (_) {}
      }

      // Call onError hook
      if (_options.hooks.onError) {
        for (const fn of _options.hooks.onError) {
          const res = fn(error);
          if (res !== undefined) {
            return res;
          }
        }
      }

      // Throw error
      throw error;
    }
  };
  http_HTTP.prototype['$' + method] = function (url, arg1, arg2) {
    return this[method](url, arg1, arg2).then(response => response && response.text ? response.text() : response).then(body => destr_dist_default()(body));
  };
}
const createHttpInstance = options => {
  // Create new HTTP instance
  const http = new http_HTTP(options);

  // Setup interceptors

  return http;
};
/* harmony default export */ var http = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.http || {};

  // prefixUrl
  const prefixUrl =  false ? undefined : runtimeConfig.baseURL || process.env._HTTP_BASE_URL_ || 'http://localhost:3000/';
  const headers = {};

  // Defaults
  const defaults = {
    retry: 0,
    timeout:  true ? false : undefined,
    prefixUrl,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }
    defaults.headers = {
      ...reqHeaders,
      ...defaults.headers
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    defaults.headers['accept-encoding'] = 'gzip, deflate';
  }
  const http = createHttpInstance(defaults);

  // Inject http to the context as $http
  ctx.$http = http;
  inject('http', http);
});
// EXTERNAL MODULE: ./node_modules/hookable/dist/hookable.js
var hookable = __webpack_require__(56);
var hookable_default = /*#__PURE__*/__webpack_require__.n(hookable);

// EXTERNAL MODULE: ./node_modules/requrl/dist/requrl.js
var requrl = __webpack_require__(13);
var requrl_default = /*#__PURE__*/__webpack_require__.n(requrl);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/strapi/lib/runtime/utils.js
function getExpirationDate(ms) {
  return new Date(Date.now() + ms);
}
function isExpired(expires) {
  if (!expires) {
    return false;
  }
  return new Date(expires) <= new Date();
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/strapi/lib/runtime/strapi.js






class strapi_Strapi extends hookable_default.a {
  constructor(ctx, options) {
    super();
    ctx.$config = ctx.$config || {};
    const runtimeConfig = ctx.$config.strapi || {};
    this.$cookies = ctx.app.$cookies;
    this.$http = ctx.$http.create({});
    this.options = options;
    this.state = external_vue_default.a.observable({user: null});
    this.syncToken();
    const url = runtimeConfig.url || this.options.url;
    if ( true && ctx.req && url.startsWith("/")) {
      this.$http.setBaseURL(Object(dist["joinURL"])(requrl_default()(ctx.req), url));
    } else {
      this.$http.setBaseURL(url);
    }
    this.$http.onError((err) => {
      if (!err.response) {
        this.callHook("error", err);
        return;
      }
      const {response: {data: {message: msg}}} = err;
      let message;
      if (Array.isArray(msg)) {
        message = msg[0].messages[0].message;
      } else if (typeof msg === "object" && msg !== null) {
        message = msg.message;
      } else {
        message = msg;
      }
      err.message = message;
      err.original = err.response.data;
      this.callHook("error", err);
    });
  }
  get user() {
    return this.state.user;
  }
  set user(user) {
    external_vue_default.a.set(this.state, "user", user);
  }
  async register(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/local/register", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  async login(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/local", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  forgotPassword(data) {
    this.clearToken();
    return this.$http.$post("/auth/forgot-password", data);
  }
  async resetPassword(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/reset-password", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  sendEmailConfirmation(data) {
    return this.$http.$post("/auth/send-email-confirmation", data);
  }
  async logout() {
    await this.setUser(null);
    this.clearToken();
  }
  async fetchUser() {
    const jwt = this.syncToken();
    if (!jwt) {
      return null;
    }
    try {
      const user = await this.findOne("users", "me");
      await this.setUser(user);
    } catch (e) {
      this.clearToken();
    }
    return this.user;
  }
  async setUser(user) {
    this.user = user;
    await this.callHook("userUpdated", user);
  }
  find(entity, searchParams) {
    return this.$http.$get(`/${entity}`, {searchParams});
  }
  count(entity, searchParams) {
    return this.$http.$get(`/${entity}/count`, {searchParams});
  }
  findOne(entity, id, searchParams) {
    return this.$http.$get(`/${entity}/${id}`, {searchParams});
  }
  create(entity, data) {
    return this.$http.$post(`/${entity}`, data);
  }
  update(entity, id, data) {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [entity, id].filter(Boolean).join("/");
    return this.$http.$put(`/${path}`, data);
  }
  delete(entity, id) {
    const path = [entity, id].filter(Boolean).join("/");
    return this.$http.$delete(`/${path}`);
  }
  graphql(query) {
    return this.$http.$post("/graphql", query).then((res) => res.data);
  }
  getClientStorage() {
    const storageType = this.options.expires === "session" ? "sessionStorage" : "localStorage";
    if (false) {}
    return null;
  }
  getToken() {
    let token;
    const clientStorage = this.getClientStorage();
    if (clientStorage) {
      const session = destr_dist_default()(clientStorage.getItem(this.options.key));
      if (session && !isExpired(session.expires)) {
        token = session.token;
      }
    }
    if (!token) {
      token = this.$cookies.get(this.options.key);
    }
    return token;
  }
  setToken(token) {
    const expires = this.options.expires === "session" ? void 0 : getExpirationDate(this.options.expires);
    const clientStorage = this.getClientStorage();
    clientStorage && clientStorage.setItem(this.options.key, JSON.stringify({token, expires}));
    this.$cookies.set(this.options.key, token, {
      ...this.options.cookie,
      expires
    });
    this.$http.setToken(token, "Bearer");
  }
  clearToken() {
    this.$http.setToken(false);
    const clientStorage = this.getClientStorage();
    clientStorage && clientStorage.removeItem(this.options.key);
    this.$cookies.remove(this.options.key);
  }
  syncToken(jwt) {
    if (!jwt) {
      jwt = this.getToken();
    }
    if (jwt) {
      this.setToken(jwt);
    } else {
      this.clearToken();
    }
    return jwt;
  }
}

// CONCATENATED MODULE: ./.nuxt/strapi.js


const strapi_options = {
  "url": "https://strapi-stg.ventureplans.us",
  "entities": [],
  "key": "strapi_jwt",
  "expires": "session",
  "cookie": {},
  "meiliSearchURL": "https://search.ventureplans.us"
};
strapi_options.entities.forEach(entity => {
  let key;
  let type = 'collection';
  if (typeof entity === 'object') {
    key = `$${entity.name}`;
    type = entity.type || 'collection';
    entity = entity.name;
  } else {
    key = `$${entity}`;
  }
  if (strapi_Strapi.prototype.hasOwnProperty(key)) {
    return;
  }
  Object.defineProperty(strapi_Strapi.prototype, key, {
    get() {
      const that = this;
      return {
        single: {
          find(...args) {
            return that.find(entity, ...args);
          },
          update(...args) {
            return that.update(entity, ...args);
          },
          delete(...args) {
            return that.delete(entity, ...args);
          }
        },
        collection: {
          find(...args) {
            return that.find(entity, ...args);
          },
          findOne(...args) {
            return that.findOne(entity, ...args);
          },
          count(...args) {
            return that.count(entity, ...args);
          },
          create(...args) {
            return that.create(entity, ...args);
          },
          update(...args) {
            return that.update(entity, ...args);
          },
          delete(...args) {
            return that.delete(entity, ...args);
          }
        }
      }[type];
    }
  });
});
/* harmony default export */ var _nuxt_strapi = (async function (ctx, inject) {
  const strapi = new strapi_Strapi(ctx, strapi_options);
  if (true) {
    // Check if jwt to get user
    await strapi.fetchUser();
    ctx.beforeNuxtRender(({
      nuxtState
    }) => {
      nuxtState.strapi = strapi.state;
    });
  }
  const {
    nuxtState = {}
  } = ctx || {};
  // Client-side hydration
  if (false) {}

  // SPA mode or fallback
  if (false) {}
  inject('strapi', strapi);
  ctx.$strapi = strapi;
});
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(14);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/en"
var en_ = __webpack_require__(111);

// EXTERNAL MODULE: external "dayjs/plugin/utc"
var utc_ = __webpack_require__(57);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc_);

// EXTERNAL MODULE: external "dayjs/plugin/timezone"
var timezone_ = __webpack_require__(58);
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone_);

// CONCATENATED MODULE: ./.nuxt/dayjs-plugin.js




external_dayjs_default.a.extend(utc_default.a);
external_dayjs_default.a.extend(timezone_default.a);
external_dayjs_default.a.locale('en');
/* harmony default export */ var dayjs_plugin = ((context, inject) => {
  context.$dayjs = external_dayjs_default.a;
  inject('dayjs', external_dayjs_default.a);
});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var is_https_dist = __webpack_require__(59);
var is_https_dist_default = /*#__PURE__*/__webpack_require__.n(is_https_dist);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/i18n/node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(10);

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js + 1 modules
var nuxt_i18n_options = __webpack_require__(0);

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/utils-common.js
var utils_common = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js





/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */
async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;
  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }
  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = nuxt_i18n_options["d" /* options */].normalizedLocales.find(l => l.code === locale);
    if (localeObject) {
      const {
        file
      } = localeObject;
      if (file) {
        /*  */
        /** @type {import('vue-i18n').LocaleMessageObject | undefined} */
        let messages;
        if (false) {}
        if (!messages) {
          try {
            // @ts-ignore
            const getter = await nuxt_i18n_options["b" /* localeMessages */][file]().then(m => m.default || m);
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(Object(utils_common["b" /* formatMessage */])(`Failed loading async locale export: ${/** @type {Error} */error.message}`));
          }
        }
        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          mergeAdditionalMessages(i18n, nuxt_i18n_options["d" /* options */].additionalMessages, nuxt_i18n_options["d" /* options */].localeCodes, [locale]);
          i18n.loadedLanguages.push(locale);
        }
        /*  */
      } else {
        console.warn(Object(utils_common["b" /* formatMessage */])(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(Object(utils_common["b" /* formatMessage */])(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}

/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */
function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }
  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });
    if (domain) {
      return domain;
    }
  }
  return baseUrl;
}

/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */
function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);
  if (lang && lang.domain) {
    if (Object(ufo_dist["hasProtocol"])(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    if (true) {
      protocol = req && is_https_dist_default()(req) ? 'https' : 'http';
    } else {}
    return `${protocol}://${lang.domain}`;
  }

  // eslint-disable-next-line no-console
  console.warn(Object(utils_common["b" /* formatMessage */])(`Could not find domain name for locale ${localeCode}`));
}

/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */
function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: {
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}
          commit('setRouteParams', params);
        }
      } : {})
    },
    mutations: {
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }
      } : {})
    },
    getters: {
      ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};
          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}

/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */
function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(Object(utils_common["b" /* formatMessage */])('Route params should be an object'));
    return;
  }
  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(Object(utils_common["b" /* formatMessage */])(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(Object(utils_common["b" /* formatMessage */])(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}

/**
 * Merge external additional messages
 *
 * @param {import('../../types').NuxtI18nInstance} i18n
 * @param {ResolvedOptions['additionalMessages']} additionalMessages
 * @param {ResolvedOptions['localeCodes']} localeCodes
 * @param {string[] | null} [onlyLocales=null]
 * @return {void}
 */
function mergeAdditionalMessages(i18n, additionalMessages, localeCodes, onlyLocales) {
  const locales = onlyLocales || localeCodes;
  for (const additionalEntry of additionalMessages) {
    for (const locale of locales) {
      const existingMessages = i18n.getLocaleMessage(locale);
      i18n.mergeLocaleMessage(locale, additionalEntry[locale]);
      i18n.mergeLocaleMessage(locale, existingMessages);
    }
  }
}

/**
 * @param {any} value
 * @return {boolean}
 */
function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore


/** @type {import('@nuxt/types').Middleware} */
const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;
  if (isHMR) {
    return;
  }
  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);
  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js






/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.redirectedFrom || localizedRoute.route.fullPath : '';
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */
function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }
  const {
    i18n
  } = this;
  locale = locale || i18n.locale;
  if (!locale) {
    return;
  }

  // If route parameter is a string, check if it's a path or name of route.
  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }
  let localizedRoute = Object.assign({}, route);
  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);
    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === nuxt_i18n_options["d" /* options */].defaultLocale;
      // if route has a path defined but no name, resolve full route using the path
      const isPrefixed =
      // don't prefix default locale
      !(isDefaultLocale && [nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["d" /* options */].strategy)) &&
      // no prefix for any language
      !(nuxt_i18n_options["d" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) &&
      // no prefix for different domains
      !i18n.differentDomains;
      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }
      localizedRoute.path = nuxt_i18n_options["c" /* nuxtOptions */].trailingSlash ? Object(ufo_dist["withTrailingSlash"])(localizedRoute.path, true) : Object(ufo_dist["withoutTrailingSlash"])(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;
    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }
  const resolvedRoute = this.router.resolve(localizedRoute);
  if (resolvedRoute.route.name) {
    return resolvedRoute;
  }
  // If didn't resolve to an existing route then just return resolved route based on original input.
  return this.router.resolve(route);
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */
function switchLocalePath(locale) {
  const name = this.getRouteBaseName();
  if (!name) {
    return '';
  }
  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};
  if (nuxt_i18n_options["d" /* options */].vuex && nuxt_i18n_options["d" /* options */].vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["d" /* options */].vuex.moduleName}/localeRouteParams`](locale);
  }
  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: {
      ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale);

  // Handle different domains
  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: nuxt_i18n_options["d" /* options */].normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);
    if (domain) {
      path = domain + path;
    }
  }
  return path;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */
function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;
  if (!route || !route.name) {
    return;
  }
  return route.name.split(nuxt_i18n_options["d" /* options */].routesNameSeparator)[0];
}

/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */
function getLocaleRouteName(routeName, locale) {
  let name = routeName + (nuxt_i18n_options["d" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX ? '' : nuxt_i18n_options["d" /* options */].routesNameSeparator + locale);
  if (locale === nuxt_i18n_options["d" /* options */].defaultLocale && nuxt_i18n_options["d" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT) {
    name += nuxt_i18n_options["d" /* options */].routesNameSeparator + nuxt_i18n_options["d" /* options */].defaultLocaleRouteNameSuffix;
  }
  return name;
}

/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */
const VueInstanceProxy = function (targetFunction) {
  return function () {
    var _this$$root$context, _this$$ssrContext;
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      // @ts-ignore
      req:  true ? ((_this$$root$context = this.$root.context) === null || _this$$root$context === void 0 ? void 0 : _this$$root$context.req) || ((_this$$ssrContext = this.$ssrContext) === null || _this$$ssrContext === void 0 ? void 0 : _this$$ssrContext.req) : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};

/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */
const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};

/** @type {import('vue').PluginObject<void>} */
const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }
};

/** @type {import('@nuxt/types').Plugin} */
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(28);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/head-meta.js
var head_meta = __webpack_require__(60);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js








external_vue_default.a.use(external_vue_i18n_default.a);

/** @type {import('@nuxt/types').Plugin} */
/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;
  if (nuxt_i18n_options["d" /* options */].vuex && store) {
    registerStore(store, nuxt_i18n_options["d" /* options */].vuex, nuxt_i18n_options["d" /* options */].localeCodes);
  }
  const {
    lazy
  } = nuxt_i18n_options["d" /* options */];
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);
  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 134, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;
      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];
        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {
            // Ignore - client-side will load the chunk asynchronously.
          }
        }
      }
      nuxtState.__i18n = {
        langs
      };
    });
  }
  const {
    alwaysRedirect,
    fallbackLocale,
    redirectOn,
    useCookie,
    cookieAge,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */nuxt_i18n_options["d" /* options */].detectBrowserLanguage;
  const getLocaleFromRoute = Object(utils_common["a" /* createLocaleFromRouteGetter */])(nuxt_i18n_options["d" /* options */].localeCodes, {
    routesNameSeparator: nuxt_i18n_options["d" /* options */].routesNameSeparator,
    defaultLocaleRouteNameSuffix: nuxt_i18n_options["d" /* options */].defaultLocaleRouteNameSuffix
  });

  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */
  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    }

    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }
    const oldLocale = app.i18n.locale;
    if (newLocale === oldLocale) {
      return;
    }
    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);
    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }
      newLocale = localeOverride;
    }
    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }
    if (nuxt_i18n_options["d" /* options */].langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;
      if (nuxt_i18n_options["d" /* options */].lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];
          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }
          await Promise.all(localesToLoadPromises);
        }
        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(nuxt_i18n_options["d" /* options */].localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    } else {
      mergeAdditionalMessages(app.i18n, nuxt_i18n_options["d" /* options */].additionalMessages, nuxt_i18n_options["d" /* options */].localeCodes);
    }
    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */
    const newLocaleProperties = nuxt_i18n_options["d" /* options */].normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    };
    // In case certain locale has more properties than another, reset all the properties.
    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    }
    // Copy properties of the new locale
    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    }

    // Must retrieve from context as it might have changed since plugin initialization.
    const {
      route
    } = context;
    let redirectPath = '';
    const isStaticGenerate =  false && false;
    // Decide whether we should redirect to a different route.
    if (!isStaticGenerate && !app.i18n.differentDomains && nuxt_i18n_options["d" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX && (
    // Skip if already on the new locale unless the strategy is "prefix_and_default" and this is the default
    // locale, in which case we might still redirect as we prefer unprefixed route in this case.
    getLocaleFromRoute(route) !== newLocale || nuxt_i18n_options["d" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT && newLocale === nuxt_i18n_options["d" /* options */].defaultLocale)) {
      // The current route could be 404 in which case attempt to find matching route using the full path since
      // "switchLocalePath" can only find routes if the current route exists.
      const routePath = app.switchLocalePath(newLocale) || app.localePath(route.fullPath, newLocale);
      if (routePath && !Object(ufo_dist["isEqual"])(routePath, route.fullPath) && !routePath.startsWith('//')) {
        redirectPath = routePath;
      }
    }
    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);
      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */
  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["d" /* options */].rootRedirect) {
      let statusCode = 302;
      let path = nuxt_i18n_options["d" /* options */].rootRedirect;
      if (typeof nuxt_i18n_options["d" /* options */].rootRedirect !== 'string') {
        statusCode = nuxt_i18n_options["d" /* options */].rootRedirect.statusCode;
        path = nuxt_i18n_options["d" /* options */].rootRedirect.path;
      }
      return [statusCode, `/${path}`, /* preserve query */true];
    }
    const storedRedirect = app.i18n.__redirect;
    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }
    const resolveBaseUrlOptions = {
      differentDomains: nuxt_i18n_options["d" /* options */].differentDomains,
      normalizedLocales: nuxt_i18n_options["d" /* options */].normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["d" /* options */].baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = nuxt_i18n_options["d" /* options */].detectBrowserLanguage && doDetectBrowserLanguage(route) || !nuxt_i18n_options["d" /* options */].differentDomains && nuxt_i18n_options["d" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX && getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    if (nuxt_i18n_options["d" /* options */].skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }
    return [null, null];
  };
  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }
    await app.i18n.setLocale(app.i18n.__pendingLocale);
    app.i18n.__resolvePendingLocalePromise('');
    app.i18n.__pendingLocale = null;
  };
  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };
  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return Object(utils_common["f" /* matchBrowserLocale */])(nuxt_i18n_options["d" /* options */].normalizedLocales, Object(utils_common["g" /* parseAcceptLanguage */])(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };

  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */
  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}
    if (nuxt_i18n_options["d" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) {
      if (redirectOn === nuxt_i18n_options["a" /* Constants */].REDIRECT_ON_OPTIONS.ROOT) {
        if (route.path !== '/') {
          return '';
        }
      } else if (redirectOn === nuxt_i18n_options["a" /* Constants */].REDIRECT_ON_OPTIONS.NO_PREFIX) {
        if (!alwaysRedirect && route.path.match(Object(utils_common["e" /* getLocalesRegex */])(nuxt_i18n_options["d" /* options */].localeCodes))) {
          return '';
        }
      }
    }
    let matchedLocale;
    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {
      // Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }
    const finalLocale = matchedLocale || fallbackLocale;

    // Handle cookie option to prevent multiple redirections
    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }
    return '';
  };

  /**
   * Extends the newly created vue-i18n instance with @nuxtjs/i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */
  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(nuxt_i18n_options["d" /* options */].locales);
    i18n.localeCodes = klona(nuxt_i18n_options["d" /* options */].localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(nuxt_i18n_options["d" /* options */].normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = nuxt_i18n_options["d" /* options */].defaultLocale;
    i18n.differentDomains = nuxt_i18n_options["d" /* options */].differentDomains;
    i18n.onBeforeLanguageSwitch = nuxt_i18n_options["d" /* options */].onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = nuxt_i18n_options["d" /* options */].onLanguageSwitched;
    i18n.setLocaleCookie = locale => Object(utils_common["h" /* setLocaleCookie */])(locale, res, {
      useCookie,
      cookieAge,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });
    i18n.getLocaleCookie = () => Object(utils_common["c" /* getLocaleCookie */])(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["d" /* options */].localeCodes
    });
    i18n.setLocale = locale => loadAndSetLocale(locale);
    i18n.getBrowserLocale = () => getBrowserLocale();
    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  };

  // Set instance options
  const vueI18nOptions = typeof nuxt_i18n_options["d" /* options */].vueI18n === 'function' ? await nuxt_i18n_options["d" /* options */].vueI18n(context) : klona(nuxt_i18n_options["d" /* options */].vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  // @ts-ignore
  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions);
  // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey
  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;
    if (store.state.localeDomains) {
      for (const [index, locale] of nuxt_i18n_options["d" /* options */].normalizedLocales.entries()) {
        const domain = store.state.localeDomains[locale.code];
        if (domain) {
          locale.domain = domain;
          const optionsLocale = nuxt_i18n_options["d" /* options */].locales[index];
          if (typeof optionsLocale !== 'string') {
            optionsLocale.domain = domain;
          }
        }
      }
    }
  }
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: nuxt_i18n_options["d" /* options */].differentDomains,
    normalizedLocales: nuxt_i18n_options["d" /* options */].normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["d" /* options */].baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nHead = head_meta["a" /* nuxtI18nHead */];

  /** @type {string | undefined} */
  let finalLocale = nuxt_i18n_options["d" /* options */].detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';
  if (!finalLocale) {
    if (app.i18n.differentDomains) {
      const domainLocale = Object(utils_common["d" /* getLocaleDomain */])(nuxt_i18n_options["d" /* options */].normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["d" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }
  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }
  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }
  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });
  if (false) {}
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/defu/lib/defu.cjs
var lib_defu = __webpack_require__(29);
var lib_defu_default = /*#__PURE__*/__webpack_require__.n(lib_defu);

// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/ufo/dist/index.cjs
var node_modules_ufo_dist = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}
async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 135, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };
    img.onerror = err => reject(err);
    img.src = url;
  });
}
function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }
  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }
  if (typeof x === "string") {
    return parseInt(x, 10);
  }
  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;
  if (!contents) {
    return html;
  }
  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };
  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);
    if (image.isStatic) {
      handleStaticImage(image, input);
    }
    return image;
  };
  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, {
      ...options,
      modifiers: lib_defu_default()(modifiers, options.modifiers || {})
    }).url;
  };
  function handleStaticImage(image, input) {
    if (false) { var _ssrState$data, _ssrContext$image; } else if (true) {
      image.url = input;
    }
  }
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, {
      ...globalOptions.presets[presetName],
      ...options
    });
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, {
    ...options
  });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(node_modules_ufo_dist["hasProtocol"])(input) ? input : Object(node_modules_ufo_dist["withLeadingSlash"])(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(node_modules_ufo_dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && Object(node_modules_ufo_dist["hasProtocol"])(input)) {
    const inputHost = Object(node_modules_ufo_dist["parseURL"])(input).host;
    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = lib_defu_default()(options, preset, defaults);
  _options.modifiers = {
    ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;
  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;
  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, {
        ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=c7e9dc06&
var nuxt_imgvue_type_template_id_c7e9dc06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._g(_vm._b({key:_vm.nSrc,ref:"img",attrs:{"src":_vm.nSrc}},'img',_vm.nAttrs,false),_vm.$listeners),[])}
var nuxt_imgvue_type_template_id_c7e9dc06_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js

const defineMixin = opts => opts;
const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return {
        ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
//
//
//
//



const nuxt_imgvue_type_script_lang_js_defineComponent = opts => opts;
/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  props: {
    placeholder: {
      type: [Boolean, String, Number, Array],
      default: void 0
    }
  },
  head() {
    if (this.preload === true) {
      const isResponsive = Object.values(this.nSizes).every(v => v);
      return {
        link: [{
          rel: "preload",
          as: "image",
          ...(!isResponsive ? {
            href: this.nSrc
          } : {
            href: this.nSizes.src,
            imagesizes: this.nSizes.sizes,
            imagesrcset: this.nSizes.srcset
          })
        }]
      };
    }
    return {};
  },
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nMainSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, {
        ...this.nOptions,
        sizes: this.sizes,
        modifiers: {
          ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    },
    nSrc() {
      return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
    },
    nPlaceholder() {
      let placeholder = this.placeholder;
      if (placeholder === "") {
        placeholder = true;
      }
      if (!placeholder || this.placeholderLoaded) {
        return false;
      }
      if (typeof placeholder === "string") {
        return placeholder;
      }
      const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
      return this.$img(this.src, {
        ...this.nModifiers,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, this.nOptions);
    }
  },
  mounted() {
    if (this.nPlaceholder) {
      const img = new Image();
      img.src = this.nMainSrc;
      img.onload = () => {
        this.$refs.img.src = this.nMainSrc;
        this.placeholderLoaded = true;
      };
    }
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_c7e9dc06_render,
  nuxt_imgvue_type_template_id_c7e9dc06_staticRenderFns,
  false,
  null,
  null,
  "42cfca97"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=310bdcc2&
var nuxt_picturevue_type_template_id_310bdcc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',{key:_vm.nSources[0].src},[_vm._ssrNode(((_vm.nSources[1])?("<source"+(_vm._ssrAttr("type",_vm.nSources[1].type))+(_vm._ssrAttr("srcset",_vm.nSources[1].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[1].sizes))+">"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.nSources[0].src))+(_vm._ssrAttr("srcset",_vm.nSources[0].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[0].sizes))+(_vm._ssrAttrs(Object.assign({}, _vm.nImgAttrs, _vm.imgAttrs)))+">")])}
var nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;
/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },
  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };
      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }
      return {
        link: [link]
      };
    }
    return {};
  },
  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },
    originalFormat() {
      return getFileExtension(this.src);
    },
    nFormat() {
      if (this.format) {
        return this.format;
      }
      if (this.originalFormat === "svg") {
        return "svg";
      }
      return "webp";
    },
    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }
      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },
    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }
      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, {
          ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: {
            ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }
  },
  created() {
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_310bdcc2_render,
  nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns,
  false,
  null,
  null,
  "f04f875c"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(node_modules_ufo_dist["encodeParam"])(key) + "_" + Object(node_modules_ufo_dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL
} = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    var _ctx$nuxtContext;
    baseURL = Object(node_modules_ufo_dist["joinURL"])(((_ctx$nuxtContext = ctx.nuxtContext) === null || _ctx$nuxtContext === void 0 ? void 0 : _ctx$nuxtContext.base) || "/", "/_ipx");
  }
  return {
    url: Object(node_modules_ufo_dist["joinURL"])(baseURL, params, Object(node_modules_ufo_dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({
  ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/strapi.js

const strapi_getImage = (src, {
  modifiers,
  baseURL = "http://localhost:1337/uploads"
} = {}) => {
  var _modifiers$breakpoint;
  const breakpoint = (_modifiers$breakpoint = modifiers === null || modifiers === void 0 ? void 0 : modifiers.breakpoint) !== null && _modifiers$breakpoint !== void 0 ? _modifiers$breakpoint : "";
  if (!breakpoint) {
    return {
      url: Object(node_modules_ufo_dist["withBase"])(src, baseURL)
    };
  }
  return {
    url: Object(node_modules_ufo_dist["withBase"])(`${breakpoint}_${Object(node_modules_ufo_dist["withoutLeadingSlash"])(src)}`, baseURL)
  };
};
const strapi_validateDomains = true;
// CONCATENATED MODULE: ./.nuxt/image.js







const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": ["fs1.hubspotusercontent-na1.net"],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  },
  ['strapi']: {
    provider: providers_strapi_namespaceObject,
    defaults: {
      "baseURL": "/static/assets/img"
    }
  },
  ['ipx']: {
    provider: ipx_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);
  if (false) {}
  inject('img', $img);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(19);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(dist_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://strapi-stg.ventureplans.us';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/axios.js
/* harmony default export */ var plugins_axios = (function ({
  $axios,
  $toast,
  $config
}, inject) {
  $axios.onError(error => {
    if (error.response.status !== 401 && error.response.data.errors) {
      const obj = error.response.data.errors;
      if (obj.length) {
        $toast.error(obj[0].message);
      }
    }
    if (error.response.data.error) {
      $toast.error(error.response.data.error);
    }
    if (error.response.status !== 401 && error.response.data.message) {
      $toast.error(error.response.data.message);
    }
  });
  $axios.onResponse(response => {
    if (response.data) {
      if (response.data.success) {
        $toast.success(response.data.success);
      }
      if (response.data.error) {
        $toast.error(response.data.error);
      }
    }
  });

  // Laravel axios instance
  const strapiInstance = $axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer ' + $config.strapiReadOnlyToken
    },
    credentials: true
  });
  strapiInstance.setBaseURL(process.env.STRAPI_URL);
  inject('strapiInstance', strapiInstance);
  strapiInstance.onError(error => {
    if (error.response.data && error.response.data.data && error.response.data.data.length && error.response.data.data[0].message) $toast.error(error.response.data.data[0].message);
    // WP Error Handeler
    else if (error.response.data.errors) {
      // strapi Error Handeler
      const obj = error.response.data.errors;
      $toast.error(obj[Object.keys(obj)[0]][0]);
    }
  });
  strapiInstance.onResponse(response => {
    if (response.data && response.data.success && response.data.data && response.data.data.success) $toast.success(response.data.data.success);
  });
});
// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(61);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(114);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js



external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: external "vue-the-mask"
var external_vue_the_mask_ = __webpack_require__(62);
var external_vue_the_mask_default = /*#__PURE__*/__webpack_require__.n(external_vue_the_mask_);

// CONCATENATED MODULE: ./plugins/vue-the-mask.js


external_vue_default.a.use(external_vue_the_mask_default.a);
// EXTERNAL MODULE: external "vuelidate"
var external_vuelidate_ = __webpack_require__(63);
var external_vuelidate_default = /*#__PURE__*/__webpack_require__.n(external_vuelidate_);

// CONCATENATED MODULE: ./plugins/vue-vuelidate.js


external_vue_default.a.use(external_vuelidate_default.a);
// CONCATENATED MODULE: ./factory/helper.js
/* harmony default export */ var helper = (context => ({
  validateDateTime(dateTime) {
    return context.$dayjs(dateTime).isValid();
  },
  formatInsightPublishDate(date) {
    return this.validateDateTime(date) ? context.$dayjs.utc(date).format('MMMM DD, YYYY') : date;
  },
  isInternalUrl(url) {
    if (typeof url !== 'string') return false;else if (url.slice(0, 1) === '/') return true;else return false;
  },
  // getDayJsLocale() {

  // },
  // convertDateTimeToUTC(dateTime) {
  //     return context.$dayjs(dateTime).utc().format('YYYY-MM-DD HH:mm:ss');
  // },

  // convertDateTimeToLocal(dateTime) {
  //     return context.$dayjs.utc(dateTime).local().format('YYYY-MM-DD HH:mm:ss');
  // },

  // convertDateToLocal(dateTime) {
  //     return context.$dayjs.utc(dateTime).local().format('DD MM.YYYY');
  // },

  // displayDateTimeInLocal(dateTime) {
  //     return context.$dayjs.utc(dateTime).local().format('DD MM.YYYY hh:mm A');
  // },

  // getTimezoneOffset() {
  //     const dateArr = new Date().toString().split('GMT');
  //     const timezone = dateArr[1].split(' ')[0];
  //     return timezone.substring(0, 3) + ':' + timezone.substring(3, 5);
  // },

  // formatDateTime(value) {
  //     return this.validateDateTime(value) ? context.$dayjs.utc(value).format('YYYY-MM-DD HH:mm:ss') : '';
  // },

  // formatCustomDateTime(value, format = 'DD MMM YYYY @ hh:mmA ([GMT] Z)') {
  //     return this.validateDateTime(value) ? context.$dayjs.utc(value).local().format(format) : '';
  // },

  isEmpty(value) {
    // test results
    // ---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    if (value === undefined || value === null || value === '') return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === 'object' && Object.keys(value).length === 0) return true;
    if (typeof value === 'string' && value.trim().length === 0) return true;
    if (typeof value === 'number' && value === 0) return true;
    return false;
  },
  formatUSCurreny(value) {
    return '$' + Intl.NumberFormat('en-US').format(value);
  },
  formatUSNumber(value) {
    return value < 0 ? value : Intl.NumberFormat('en-US').format(value);
  },
  formatSpaceNumber(value) {
    return value < 0 ? value : value.toLocaleString().replace(/,/g, '  ');
  },
  toCapitalize(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  },
  isDevMode() {
    // eslint-disable-next-line no-unneeded-ternary
    return context.$config.isDevMode === true || context.$config.isDevMode === 'true' ? true : false;
  },
  requiredMessage(field) {
    return `${field} is required`;
  },
  emailMessage() {
    return `This is not a valid email`;
  },
  alphaNumSpaceMessage(field) {
    return `${field} can only contain alphanumeric characters`;
  },
  getLocalStorage(key) {
    return window.localStorage.getItem(key);
  },
  setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
  },
  toSnakeCase(str = '') {
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join('_');
  },
  getContentFullLangCode() {
    const array = {
      en: 'en',
      pt_br: 'pt-BR',
      es_ar: 'es-AR',
      es_cl: 'es-CL',
      es_co: 'es-CO',
      fr: 'fr',
      de_ch: 'de-CH',
      it: 'it',
      es: 'es',
      ru: 'ru',
      zh: 'zh',
      ko: 'ko',
      ja: 'ja',
      zh_tw: 'zh-TW',
      zh_hk: 'zh-HK'
    };
    return array[context.i18n.locale.replaceAll('-', '_')];
  },
  filterMap(sections, sectionName) {
    return sections.filter(s => s.fields.sectionName === sectionName).map(s => {
      return s.fields;
    });
  },
  UUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  },
  isDeviceIphone() {
    return navigator.userAgent.includes('iPhone');
  },
  parseData(value) {
    var _value$data;
    if (Array.isArray(value === null || value === void 0 ? void 0 : value.data)) {
      return value === null || value === void 0 ? void 0 : value.data.map(data => {
        return {
          ...(data === null || data === void 0 ? void 0 : data.attributes)
        };
      });
    } else if (typeof (value === null || value === void 0 ? void 0 : (_value$data = value.data) === null || _value$data === void 0 ? void 0 : _value$data.attributes) === 'object') {
      var _value$data2;
      return {
        ...(value === null || value === void 0 ? void 0 : (_value$data2 = value.data) === null || _value$data2 === void 0 ? void 0 : _value$data2.attributes)
      };
    } else if (typeof (value === null || value === void 0 ? void 0 : value.attributes) === 'object') {
      return {
        ...(value === null || value === void 0 ? void 0 : value.attributes)
      };
    } else if (typeof (value === null || value === void 0 ? void 0 : value.data) === 'object') {
      return {
        ...(value === null || value === void 0 ? void 0 : value.data)
      };
    } else {
      return {
        ...value
      };
    }
  }
}));
// CONCATENATED MODULE: ./factory/mask.js
/* harmony default export */ var mask = ({
  phoneMask: '(###) ###-####'
});
// CONCATENATED MODULE: ./factory/hubspot.js
/* harmony default export */ var hubspot = (context => ({
  async subscribePageForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotSubscribePageFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }, {
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.full_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'relationship_to_ventureplans',
          value: params.relationship_to_ventureplans
        }, {
          objectTypeId: '0-1',
          name: 'jobtitle',
          value: params.jobtitle
        }, {
          objectTypeId: '0-1',
          name: 'city',
          value: params.city
        }, {
          objectTypeId: '0-1',
          name: 'company',
          value: params.company
        }, {
          objectTypeId: '0-1',
          name: 'industry',
          value: params.industry
        }, {
          objectTypeId: '0-1',
          name: 'company_country',
          value: params.company_country
        }, {
          objectTypeId: '0-1',
          name: 'subscribe_to_newsletters',
          value: params.subscribe_to_newsletters
        }, {
          objectTypeId: '0-1',
          name: 'industry_topics',
          value: params.industry_topics
        }, {
          objectTypeId: '0-1',
          name: 'business_topics',
          value: params.business_topics
        }],
        pageName: context.route.name,
        pageUri: context.route.path
      });
      return data;
    } catch (error) {
      return false;
    }
  },
  async subscribeForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotSubscribeFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async eBookSubscribeForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotEBookSubscribeFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async joinEventForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotJoinEventFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async careersSubmitForm(params) {
    try {
      const file = [];
      if (params.cover_letter) {
        file.push({
          name: 'cover_letter',
          content: params.cover_letter
        });
      }
      if (params.diploma) {
        file.push({
          name: 'diploma_document',
          content: params.diploma
        });
      }
      if (params.resume) {
        file.push({
          name: 'resume_document',
          content: params.resume
        });
      }
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.careersSubmitFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.full_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }, {
          objectTypeId: '0-1',
          name: 'what_position_are_you_interested_in',
          value: params.position
        }, {
          objectTypeId: '0-1',
          name: 'school',
          value: params.school
        }, {
          objectTypeId: '0-1',
          name: 'do_you_have_at_least_5_years_of_work_experience_',
          value: params.do_you_have_at_least_years_of_experience
        }, {
          objectTypeId: '0-1',
          name: 'geographical_flexibility',
          value: params.geographic_flexibility
        }, {
          objectTypeId: '0-1',
          name: 'intrested_in_a_internship_program_',
          value: params.are_you_interested_in_a_internship_program
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async readyToTalkForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotReadyToTalkFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.fullname
        }, {
          objectTypeId: '0-1',
          name: 'service',
          value: params.service
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      sessionStorage.setItem('ready-to-talk-submitted', 'true');
      return data;
    } catch (error) {
      return false;
    }
  },
  async tellUsMoreAboutYourProjectForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.tellUsMoreAboutYourProjectFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'firstname',
          value: params.first_name
        }, {
          objectTypeId: '0-1',
          name: 'lastname',
          value: params.last_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }, {
          objectTypeId: '0-1',
          name: 'company',
          value: params.company
        }, {
          objectTypeId: '0-1',
          name: 'project_description',
          value: params.project_description
        }, {
          objectTypeId: '0-1',
          name: 'file',
          value: ''
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async questionForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotQuestionFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-2',
          name: 'what_phase_is_your_business_in',
          value: params.what_phase_is_your_business_in
        }, {
          objectTypeId: '0-2',
          name: 'what_was_company_gross_revenue_last_year',
          value: context.$helper.isEmpty(params.what_was_company_gross_revenue_last_year) ? '' : params.what_was_company_gross_revenue_last_year
        }, {
          objectTypeId: '0-2',
          name: 'how_much_working_capital_do_you_personally_have_to_invest_in_your_business',
          value: context.$helper.isEmpty(params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business) ? '' : params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business
        }, {
          objectTypeId: '0-2',
          name: 'what_is_your_industry',
          value: params.what_is_your_industry
        }, {
          objectTypeId: '0-2',
          name: 'what_service_best_suits_your_needs',
          value: params.what_service_best_suits_your_needs
        }, {
          objectTypeId: '0-2',
          name: 'what_is_your_full_name',
          value: params.what_is_your_full_name
        }, {
          objectTypeId: '0-2',
          name: 'what_is_your_phone_number',
          value: params.what_is_your_phone_number
        }, {
          objectTypeId: '0-2',
          name: 'what_is_your_email',
          value: params.what_is_your_email
        }, {
          objectTypeId: '0-2',
          name: 'are_you_ready_to_buy_this_service',
          value: params.are_you_ready_to_buy_this_service
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.what_is_your_email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async careerQuestionsForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotCareerQuestionsFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-2',
          name: 'what_is_your_current_position',
          value: params.what_is_your_current_position
        }, {
          objectTypeId: '0-2',
          name: 'do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations',
          value: params.do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations
        }, {
          objectTypeId: '0-2',
          name: 'have_you_worked_on_multiple_projects___or_single_projects_at_a_time',
          value: params.have_you_worked_on_multiple_projects_or_single_projects_at_a_time
        }, {
          objectTypeId: '0-2',
          name: 'have_you_lead_a_team_before',
          value: params.have_you_lead_a_team_before
        }, {
          objectTypeId: '0-2',
          name: 'what_position_are_you_interested_in',
          value: params.what_position_are_you_interested_in
        }, {
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.full_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }, {
          objectTypeId: '0-2',
          name: 'do_you_want_to_book_your_initial_interview_now',
          value: params.do_you_want_to_book_your_initial_interview_now
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async contactUsBannerForm(params) {
    try {
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.contactUsBannerFormId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-2',
          name: 'reason_for_enquiry',
          value: params.inquiry_reason
        }, {
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.full_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      return data;
    } catch (error) {
      return false;
    }
  },
  async submitQuestionnaire(params) {
    try {
      if (params.formId) {
        const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${params.formId}`, {
          submittedAt: new Date().getTime(),
          fields: [{
            objectTypeId: '0-1',
            name: 'q___a',
            value: params.qAndA
          }, {
            objectTypeId: '0-1',
            name: 'grant_link',
            value: params.grant_link
          }, {
            objectTypeId: '0-1',
            name: 'full_name',
            value: params.full_name
          }, {
            objectTypeId: '0-1',
            name: 'phone',
            value: params.phone
          }, {
            objectTypeId: '0-1',
            name: 'email',
            value: params.email
          }],
          pageName: context.route.name,
          pageUri: context.route.path
        });
        sessionStorage.setItem('ready-to-talk-submitted', 'true');
        sessionStorage.setItem('full_name', params.full_name);
        sessionStorage.setItem('phone', params.phone);
        sessionStorage.setItem('email', params.email);
        return data;
      }
      let formId = context.$config.homepageQuestionsFormId;
      if (window.location.href.includes('/grant-service')) formId = context.$config.grantServiceQuestionsFormId;
      if (window.location.href.includes('/careers')) formId = context.$config.carrersQuestionsFormId;
      if (window.location.href.includes('/consulting/business-plans')) formId = context.$config.googleAdQuestionsFormId;
      const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${formId}`, {
        submittedAt: new Date().getTime(),
        fields: [{
          objectTypeId: '0-1',
          name: 'q___a',
          value: params.qAndA
        }, {
          objectTypeId: '0-1',
          name: 'grant_link',
          value: params.grant_link
        }, {
          objectTypeId: '0-1',
          name: 'full_name',
          value: params.full_name
        }, {
          objectTypeId: '0-1',
          name: 'phone',
          value: params.phone
        }, {
          objectTypeId: '0-1',
          name: 'email',
          value: params.email
        }],
        pageName: context.route.name,
        pageUri: context.route.path
        // ipAddress: get ip http://api.ipify.org/?format=json
      });

      sessionStorage.setItem('ready-to-talk-submitted', 'true');
      sessionStorage.setItem('full_name', params.full_name);
      sessionStorage.setItem('phone', params.phone);
      sessionStorage.setItem('email', params.email);
      return data;
    } catch (error) {
      return false;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/factory.js


// import client from '~/factory/contentful';

/* harmony default export */ var plugins_factory = ((ctx, inject) => {
  inject('helper', helper(ctx));
  inject('mask', mask);
  // inject('contentful', client.createClient());
  // inject('contentfulManagement', client.managementCreateClient());
  inject('hubspot', hubspot(ctx));
});
// EXTERNAL MODULE: external "vue-multiselect"
var external_vue_multiselect_ = __webpack_require__(64);
var external_vue_multiselect_default = /*#__PURE__*/__webpack_require__.n(external_vue_multiselect_);

// CONCATENATED MODULE: ./plugins/vue-multiselect.js


// import 'vue-multiselect/dist/vue-multiselect.min.css';
external_vue_default.a.component('Multiselect', external_vue_multiselect_default.a);
// EXTERNAL MODULE: external "vue-popperjs"
var external_vue_popperjs_ = __webpack_require__(65);
var external_vue_popperjs_default = /*#__PURE__*/__webpack_require__.n(external_vue_popperjs_);

// CONCATENATED MODULE: ./plugins/popper.js


// import 'vue-popperjs/dist/vue-popper.css';

external_vue_default.a.component('Popper', external_vue_popperjs_default.a);
// EXTERNAL MODULE: external "vue-flatpickr-component"
var external_vue_flatpickr_component_ = __webpack_require__(66);
var external_vue_flatpickr_component_default = /*#__PURE__*/__webpack_require__.n(external_vue_flatpickr_component_);

// EXTERNAL MODULE: ./node_modules/flatpickr/dist/flatpickr.css
var flatpickr = __webpack_require__(116);

// CONCATENATED MODULE: ./plugins/vue-flatpickr.js



external_vue_default.a.use(external_vue_flatpickr_component_default.a);
// EXTERNAL MODULE: external "vue-scrollactive"
var external_vue_scrollactive_ = __webpack_require__(67);
var external_vue_scrollactive_default = /*#__PURE__*/__webpack_require__.n(external_vue_scrollactive_);

// CONCATENATED MODULE: ./plugins/vue-scroll-active.js


external_vue_default.a.use(external_vue_scrollactive_default.a);
// EXTERNAL MODULE: external "vue-slide-toggle"
var external_vue_slide_toggle_ = __webpack_require__(68);
var external_vue_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_vue_slide_toggle_);

// CONCATENATED MODULE: ./plugins/vue-slide-toggle.js


external_vue_default.a.use(external_vue_slide_toggle_default.a);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(11);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/auth-next/node_modules/defu/dist/defu.cjs
var defu_dist_defu = __webpack_require__(30);
var defu_dist_defu_default = /*#__PURE__*/__webpack_require__.n(defu_dist_defu);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(20);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/runtime.mjs






const isUnset = (o) => typeof o === "undefined" || o === null;
const isSet = (o) => !isUnset(o);
const isSameURL = (ctx, a, b) => normalizePath(a, ctx) === normalizePath(b, ctx);
function isRelativeURL(u) {
  return u && u.length && new RegExp([
    "^\\/([a-zA-Z0-9@\\-%_~.:]",
    "[/a-zA-Z0-9@\\-%_~.:]*)?",
    "([?][^#]*)?(#[^#]*)?$"
  ].join("")).test(u);
}
function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
function encodeQuery(queryObject) {
  return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
}
function routeOption(route, key, value) {
  return route.matched.some((m) => {
    if (false) {} else {
      return Object.values(m.components).some((component) => Object.values(component._Ctor).some((ctor) => ctor.options && ctor.options[key] === value));
    }
  });
}
function runtime_getMatchedComponents(route, matches = []) {
  return [].concat(...[], ...route.matched.map(function(m, index) {
    return Object.keys(m.components).map(function(key) {
      matches.push(index);
      return m.components[key];
    });
  }));
}
function normalizePath(path = "", ctx) {
  let result = path.split("?")[0];
  if (ctx && ctx.base) {
    result = result.replace(ctx.base, "/");
  }
  if (result.charAt(result.length - 1) === "/") {
    result = result.slice(0, -1);
  }
  result = result.replace(/\/+/g, "/");
  return result;
}
function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }
  return JSON.stringify(val);
}
function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
    }
  }
  return val;
}
function getProp(holder, propName) {
  if (!propName || !holder || typeof holder !== "object") {
    return holder;
  }
  if (propName in holder) {
    return holder[propName];
  }
  const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
  let result = holder;
  while (propParts.length && result) {
    result = result[propParts.shift()];
  }
  return result;
}
function addTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string" || token.startsWith(tokenType)) {
    return token;
  }
  return tokenType + " " + token;
}
function removeTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string") {
    return token;
  }
  return token.replace(tokenType + " ", "");
}
function runtime_urlJoin(...args) {
  return args.join("/").replace(/[/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class runtime_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this._initState();
  }
  setUniversal(key, value) {
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    this.setCookie(key, value);
    this.setLocalStorage(key, value);
    this.setState(key, value);
    return value;
  }
  getUniversal(key) {
    let value;
    if (true) {
      value = this.getState(key);
    }
    if (isUnset(value)) {
      value = this.getCookie(key);
    }
    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }
    if (isUnset(value)) {
      value = this.getState(key);
    }
    return value;
  }
  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);
    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }
    if (isSet(value)) {
      this.setUniversal(key, value);
    }
    return value;
  }
  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }
  _initState() {
    external_vue_default.a.set(this, "_state", {});
    this._useVuex = this.options.vuex && !!this.ctx.store;
    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }
        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, "state", {});
      console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store");
    }
  }
  setState(key, value) {
    if (key[0] === "_") {
      external_vue_default.a.set(this._state, key, value);
    } else if (this._useVuex) {
      this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
        key,
        value
      });
    } else {
      external_vue_default.a.set(this.state, key, value);
    }
    return value;
  }
  getState(key) {
    if (key[0] !== "_") {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }
  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch((state) => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }
  removeState(key) {
    this.setState(key, void 0);
  }
  setLocalStorage(key, value) {
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }
  getLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }
  removeLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    localStorage.removeItem(_key);
  }
  getCookies() {
    if (!this.isCookiesEnabled()) {
      return;
    }
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return external_cookie_default.a.parse(cookieStr || "") || {};
  }
  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _prefix = options.prefix !== void 0 ? options.prefix : this.options.cookie.prefix;
    const _key = _prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);
    if (isUnset(value)) {
      _options.maxAge = -1;
    }
    if (typeof _options.expires === "number") {
      _options.expires = new Date(Date.now() + _options.expires * 864e5);
    }
    const serializedCookie = external_cookie_default.a.serialize(_key, _value, _options);
    if (false) {} else if ( true && this.ctx.res) {
      let cookies = this.ctx.res.getHeader("Set-Cookie") || [];
      if (!Array.isArray(cookies))
        cookies = [cookies];
      cookies.unshift(serializedCookie);
      this.ctx.res.setHeader("Set-Cookie", cookies.filter((v, i, arr) => arr.findIndex((val) => val.startsWith(v.substr(0, v.indexOf("=")))) === i));
    }
    return value;
  }
  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _key = this.options.cookie.prefix + key;
    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : void 0;
    return decodeValue(value);
  }
  removeCookie(key, options) {
    this.setCookie(key, void 0, options);
  }
  getPrefix() {
    if (!this.options.localStorage) {
      throw new Error("Cannot get prefix; localStorage is off");
    }
    return this.options.localStorage.prefix;
  }
  isLocalStorageEnabled() {
    if (!this.options.localStorage) {
      return false;
    }
    if (true) {
      return false;
    }
    const test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        console.warn("[AUTH] Local storage is enabled in config, but browser doesn't support it");
      }
      return false;
    }
  }
  isCookiesEnabled() {
    if (!this.options.cookie) {
      return false;
    }
    if (true) {
      return true;
    }
    if (window.navigator.cookieEnabled) {
      return true;
    } else {
      console.warn("[AUTH] Cookies is enabled in config, but browser doesn't support it");
      return false;
    }
  }
}

class runtime_Auth {
  constructor(ctx, options) {
    this.strategies = {};
    this._errorListeners = [];
    this._redirectListeners = [];
    this.ctx = ctx;
    this.options = options;
    const initialState = { user: null, loggedIn: false };
    const storage = new runtime_Storage(ctx, { ...options, ...{ initialState } });
    this.$storage = storage;
    this.$state = storage.state;
  }
  get state() {
    if (!this._stateWarnShown) {
      this._stateWarnShown = true;
      console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn");
    }
    return this.$state;
  }
  get strategy() {
    return this.getStrategy();
  }
  getStrategy(throwException = true) {
    if (throwException) {
      if (!this.$state.strategy) {
        throw new Error("No strategy is set!");
      }
      if (!this.strategies[this.$state.strategy]) {
        throw new Error("Strategy not supported: " + this.$state.strategy);
      }
    }
    return this.strategies[this.$state.strategy];
  }
  get user() {
    return this.$state.user;
  }
  get loggedIn() {
    return this.$state.loggedIn;
  }
  get busy() {
    return this.$storage.getState("busy");
  }
  async init() {
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== "function" || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    }
    this.$storage.syncUniversal("strategy", this.options.defaultStrategy);
    if (!this.getStrategy(false)) {
      this.$storage.setUniversal("strategy", this.options.defaultStrategy);
      if (!this.getStrategy(false)) {
        return Promise.resolve();
      }
    }
    try {
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      if (false) {}
    }
  }
  getState(key) {
    if (!this._getStateWarnShown) {
      this._getStateWarnShown = true;
      console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn");
    }
    return this.$storage.getState(key);
  }
  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }
  setStrategy(name) {
    if (name === this.$storage.getUniversal("strategy")) {
      return Promise.resolve();
    }
    if (!this.strategies[name]) {
      throw new Error(`Strategy ${name} is not defined!`);
    }
    this.reset();
    this.$storage.setUniversal("strategy", name);
    return this.mounted();
  }
  mounted(...args) {
    if (!this.getStrategy().mounted) {
      return this.fetchUserOnce();
    }
    return Promise.resolve(this.getStrategy().mounted(...args)).catch((error) => {
      this.callOnError(error, { method: "mounted" });
      return Promise.reject(error);
    });
  }
  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }
  login(...args) {
    if (!this.getStrategy().login) {
      return Promise.resolve();
    }
    return this.wrapLogin(this.getStrategy().login(...args)).catch((error) => {
      this.callOnError(error, { method: "login" });
      return Promise.reject(error);
    });
  }
  fetchUser(...args) {
    if (!this.getStrategy().fetchUser) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().fetchUser(...args)).catch((error) => {
      this.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  logout(...args) {
    if (!this.getStrategy().logout) {
      this.reset();
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().logout(...args)).catch((error) => {
      this.callOnError(error, { method: "logout" });
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    if (!this.getStrategy().setUserToken) {
      this.getStrategy().token.set(token);
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().setUserToken(token, refreshToken)).catch((error) => {
      this.callOnError(error, { method: "setUserToken" });
      return Promise.reject(error);
    });
  }
  reset(...args) {
    if (!this.getStrategy().reset) {
      this.setUser(false);
      this.getStrategy().token.reset();
      this.getStrategy().refreshToken.reset();
    }
    return this.getStrategy().reset(...args);
  }
  refreshTokens() {
    if (!this.getStrategy().refreshController) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((error) => {
      this.callOnError(error, { method: "refreshTokens" });
      return Promise.reject(error);
    });
  }
  check(...args) {
    if (!this.getStrategy().check) {
      return { valid: true };
    }
    return this.getStrategy().check(...args);
  }
  fetchUserOnce(...args) {
    if (!this.$state.user) {
      return this.fetchUser(...args);
    }
    return Promise.resolve();
  }
  setUser(user) {
    this.$storage.setState("user", user);
    let check = { valid: Boolean(user) };
    if (check.valid) {
      check = this.check();
    }
    this.$storage.setState("loggedIn", check.valid);
  }
  request(endpoint, defaults = {}) {
    const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
    if (_endpoint.baseURL === "") {
      _endpoint.baseURL = requrl_default()(this.ctx.req);
    }
    if (!this.ctx.app.$axios) {
      console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
      return;
    }
    return this.ctx.app.$axios.request(_endpoint).catch((error) => {
      this.callOnError(error, { method: "request" });
      return Promise.reject(error);
    });
  }
  requestWith(strategy, endpoint, defaults) {
    const token = this.getStrategy().token.get();
    const _endpoint = Object.assign({}, defaults, endpoint);
    const tokenName = this.strategies[strategy].options.token.name || "Authorization";
    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }
    if (!_endpoint.headers[tokenName] && isSet(token) && token && typeof token === "string") {
      _endpoint.headers[tokenName] = token;
    }
    return this.request(_endpoint);
  }
  wrapLogin(promise) {
    this.$storage.setState("busy", true);
    this.error = null;
    return Promise.resolve(promise).then((response) => {
      this.$storage.setState("busy", false);
      return response;
    }).catch((error) => {
      this.$storage.setState("busy", false);
      return Promise.reject(error);
    });
  }
  onError(listener) {
    this._errorListeners.push(listener);
  }
  callOnError(error, payload = {}) {
    this.error = error;
    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }
  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }
    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];
    if (!to) {
      return;
    }
    if (this.options.rewriteRedirects) {
      if (name === "login" && isRelativeURL(from) && !isSameURL(this.ctx, to, from)) {
        this.$storage.setUniversal("redirect", from);
      }
      if (name === "home") {
        const redirect = this.$storage.getUniversal("redirect");
        this.$storage.setUniversal("redirect", null);
        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    }
    to = this.callOnRedirect(to, from) || to;
    if (isSameURL(this.ctx, to, from)) {
      return;
    }
    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }
  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }
  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }
    return to;
  }
  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
    if (!userScopes) {
      return false;
    }
    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }
    return Boolean(getProp(userScopes, scope));
  }
}

const authMiddleware = async (ctx) => {
  if (routeOption(ctx.route, "auth", false)) {
    return;
  }
  const matches = [];
  const Components = runtime_getMatchedComponents(ctx.route, matches);
  if (!Components.length) {
    return;
  }
  const { login, callback } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, "auth", "guest");
  const insidePage = (page) => normalizePath(ctx.route.path, ctx) === normalizePath(page, ctx);
  if (ctx.$auth.$state.loggedIn) {
    const { tokenExpired, refreshTokenExpired, isRefreshable } = ctx.$auth.check(true);
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect("home");
    }
    if (refreshTokenExpired) {
      ctx.$auth.reset();
    } else if (tokenExpired) {
      if (isRefreshable) {
        try {
          await ctx.$auth.refreshTokens();
        } catch (error) {
          ctx.$auth.reset();
        }
      } else {
        ctx.$auth.reset();
      }
    }
  } else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
    ctx.$auth.redirect("login");
  }
};

class ConfigurationDocumentRequestError extends Error {
  constructor() {
    super("Error loading OpenIDConnect configuration document");
    this.name = "ConfigurationDocumentRequestError";
  }
}

const ConfigurationDocumentWarning = (message) => console.warn(`[AUTH] [OPENID CONNECT] Invalid configuration. ${message}`);
class runtime_ConfigurationDocument {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
    this.key = "_configuration_document." + this.scheme.name;
  }
  _set(value) {
    return this.$storage.setState(this.key, value);
  }
  get() {
    return this.$storage.getState(this.key);
  }
  set(value) {
    this._set(value);
    return value;
  }
  async request() {
    var _a, _b, _c, _d;
    const serverDoc = (_d = (_c = (_b = (_a = this.scheme.$auth.ctx) == null ? void 0 : _a.nuxtState) == null ? void 0 : _b.$auth) == null ? void 0 : _c.openIDConnect) == null ? void 0 : _d.configurationDocument;
    if (false) {}
    if (!this.get()) {
      const configurationDocument = await this.scheme.requestHandler.axios.$get(this.scheme.options.endpoints.configuration).catch((e) => Promise.reject(e));
      if (true) {
        this.scheme.$auth.ctx.beforeNuxtRender(({ nuxtState }) => {
          nuxtState.$auth = {
            oidc: {
              configurationDocument
            }
          };
        });
      }
      this.set(configurationDocument);
    }
  }
  validate() {
    const mapping = {
      responseType: "response_type_supported",
      scope: "scopes_supported",
      grantType: "grant_types_supported",
      acrValues: "acr_values_supported"
    };
    Object.keys(mapping).forEach((optionsKey) => {
      const configDocument = this.get();
      const configDocumentKey = mapping[optionsKey];
      const configDocumentValues = configDocument[configDocumentKey];
      const optionsValues = this.scheme.options[optionsKey];
      if (typeof configDocumentValues !== "undefined") {
        if (Array.isArray(optionsValues) && Array.isArray(configDocumentValues)) {
          optionsValues.forEach((optionsValue) => {
            if (!configDocumentValues.includes(optionsValue)) {
              ConfigurationDocumentWarning(`A value of scheme options ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
            }
          });
        }
        if (!Array.isArray(optionsValues) && Array.isArray(configDocumentValues) && !configDocumentValues.includes(optionsValues)) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
        if (!Array.isArray(optionsValues) && !Array.isArray(configDocumentValues) && configDocumentValues !== optionsValues) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
      }
    });
  }
  async init() {
    await this.request().catch(() => {
      throw new ConfigurationDocumentRequestError();
    });
    this.validate();
    this.setSchemeEndpoints();
  }
  setSchemeEndpoints() {
    const configurationDocument = this.get();
    this.scheme.options.endpoints = defu_dist_defu_default()(this.scheme.options.endpoints, {
      authorization: configurationDocument.authorization_endpoint,
      token: configurationDocument.token_endpoint,
      userInfo: configurationDocument.userinfo_endpoint,
      logout: configurationDocument.end_session_endpoint
    });
  }
  reset() {
    this._set(false);
  }
}

class ExpiredAuthSessionError extends Error {
  constructor() {
    super("Both token and refresh token have expired. Your request was aborted.");
    this.name = "ExpiredAuthSessionError";
  }
}

class RefreshController {
  constructor(scheme) {
    this.scheme = scheme;
    this._refreshPromise = null;
    this.$auth = scheme.$auth;
  }
  handleRefresh() {
    if (this._refreshPromise) {
      return this._refreshPromise;
    }
    return this._doRefresh();
  }
  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme.refreshTokens().then((response) => {
        this._refreshPromise = null;
        resolve(response);
      }).catch((error) => {
        this._refreshPromise = null;
        reject(error);
      });
    });
    return this._refreshPromise;
  }
}

var TokenStatusEnum;
(function(TokenStatusEnum2) {
  TokenStatusEnum2["UNKNOWN"] = "UNKNOWN";
  TokenStatusEnum2["VALID"] = "VALID";
  TokenStatusEnum2["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
  constructor(token, tokenExpiresAt) {
    this._status = this._calculate(token, tokenExpiresAt);
  }
  unknown() {
    return TokenStatusEnum.UNKNOWN === this._status;
  }
  valid() {
    return TokenStatusEnum.VALID === this._status;
  }
  expired() {
    return TokenStatusEnum.EXPIRED === this._status;
  }
  _calculate(token, tokenExpiresAt) {
    const now = Date.now();
    try {
      if (!token || !tokenExpiresAt) {
        return TokenStatusEnum.UNKNOWN;
      }
    } catch (error) {
      return TokenStatusEnum.UNKNOWN;
    }
    const timeSlackMillis = 500;
    tokenExpiresAt -= timeSlackMillis;
    if (now < tokenExpiresAt) {
      return TokenStatusEnum.VALID;
    }
    return TokenStatusEnum.EXPIRED;
  }
}

class runtime_RefreshToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const refreshToken = addTokenPrefix(tokenValue, this.scheme.options.refreshToken.type);
    this._setToken(refreshToken);
    this._updateExpiration(refreshToken);
    return refreshToken;
  }
  sync() {
    const refreshToken = this._syncToken();
    this._syncExpiration();
    return refreshToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(refreshToken) {
    let refreshTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.refreshToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      refreshTokenExpiration = external_jwt_decode_default()(refreshToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      refreshTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(refreshTokenExpiration || false);
  }
  _setToken(refreshToken) {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, refreshToken);
  }
  _syncToken() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class RequestHandler {
  constructor(scheme, axios) {
    this.scheme = scheme;
    this.axios = axios;
    this.interceptor = null;
  }
  setHeader(token) {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, token);
    }
  }
  clearHeader() {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, false);
    }
  }
  initializeRequestInterceptor(refreshEndpoint) {
    this.interceptor = this.axios.interceptors.request.use(async (config) => {
      if (!this._needToken(config) || config.url === refreshEndpoint) {
        return config;
      }
      const { valid, tokenExpired, refreshTokenExpired, isRefreshable } = this.scheme.check(true);
      let isValid = valid;
      if (refreshTokenExpired) {
        this.scheme.reset();
        throw new ExpiredAuthSessionError();
      }
      if (tokenExpired) {
        if (!isRefreshable) {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        }
        isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        });
      }
      const token = this.scheme.token.get();
      if (!isValid) {
        if (!token && this._requestHasAuthorizationHeader(config)) {
          throw new ExpiredAuthSessionError();
        }
        return config;
      }
      return this._getUpdatedRequestConfig(config, token);
    });
  }
  reset() {
    this.axios.interceptors.request.eject(this.interceptor);
    this.interceptor = null;
  }
  _needToken(config) {
    const options = this.scheme.options;
    return options.token.global || Object.values(options.endpoints).some((endpoint) => typeof endpoint === "object" ? endpoint.url === config.url : endpoint === config.url);
  }
  _getUpdatedRequestConfig(config, token) {
    if (typeof token === "string") {
      config.headers[this.scheme.options.token.name] = token;
    }
    return config;
  }
  _requestHasAuthorizationHeader(config) {
    return !!config.headers.common[this.scheme.options.token.name];
  }
}

class runtime_Token {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
    this._setToken(token);
    this._updateExpiration(token);
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  sync() {
    const token = this._syncToken();
    this._syncExpiration();
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  reset() {
    this.scheme.requestHandler.clearHeader();
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(token) {
    let tokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      tokenExpiration = external_jwt_decode_default()(token + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      tokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(tokenExpiration || false);
  }
  _setToken(token) {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, token);
  }
  _syncToken() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class runtime_IdToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const idToken = addTokenPrefix(tokenValue, this.scheme.options.idToken.type);
    this._setToken(idToken);
    this._updateExpiration(idToken);
    return idToken;
  }
  sync() {
    const idToken = this._syncToken();
    this._syncExpiration();
    return idToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(idToken) {
    let idTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.idToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      idTokenExpiration = external_jwt_decode_default()(idToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      idTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(idTokenExpiration || false);
  }
  _setToken(idToken) {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, idToken);
  }
  _syncToken() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  userInfo() {
    const idToken = this.get();
    if (typeof idToken === "string") {
      return external_jwt_decode_default()(idToken);
    }
  }
}

class runtime_BaseScheme {
  constructor($auth, ...options) {
    this.$auth = $auth;
    this.options = options.reduce((p, c) => defu_dist_defu_default()(p, c), {});
  }
  get name() {
    return this.options.name;
  }
}

const DEFAULTS$4 = {
  name: "local",
  endpoints: {
    login: {
      url: "/api/auth/login",
      method: "post"
    },
    logout: {
      url: "/api/auth/logout",
      method: "post"
    },
    user: {
      url: "/api/auth/user",
      method: "get"
    }
  },
  token: {
    property: "token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    required: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  user: {
    property: "user",
    autoFetch: true
  },
  clientId: false,
  grantType: false,
  scope: false
};
class LocalScheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$4);
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false
    };
    const token = this.token.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted({
    tokenCallback = () => this.$auth.reset(),
    refreshTokenCallback = void 0
  } = {}) {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired && typeof refreshTokenCallback === "function") {
      refreshTokenCallback();
    } else if (tokenExpired && typeof tokenCallback === "function") {
      tokenCallback();
    }
    this.initializeRequestInterceptor();
    return this.$auth.fetchUserOnce();
  }
  async login(endpoint, { reset = true } = {}) {
    if (!this.options.endpoints.login) {
      return;
    }
    if (reset) {
      this.$auth.reset({ resetInterceptor: false });
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType;
    }
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope;
    }
    const response = await this.$auth.request(endpoint, this.options.endpoints.login);
    this.updateTokens(response);
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }
    if (this.options.user.autoFetch) {
      await this.fetchUser();
    }
    return response;
  }
  setUserToken(token) {
    this.token.set(token);
    return this.fetchUser();
  }
  fetchUser(endpoint) {
    if (!this.check().valid) {
      return Promise.resolve();
    }
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return Promise.resolve();
    }
    return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
      const userData = getProp(response.data, this.options.user.property);
      if (!userData) {
        const error = new Error(`User Data response does not contain field ${this.options.user.property}`);
        return Promise.reject(error);
      }
      this.$auth.setUser(userData);
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  async logout(endpoint = {}) {
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {
      });
    }
    return this.$auth.reset();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    this.token.set(token);
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor();
  }
}

const DEFAULTS$3 = {
  name: "cookie",
  cookie: {
    name: null
  },
  token: {
    type: "",
    property: "",
    maxAge: false,
    global: false,
    required: false
  },
  endpoints: {
    csrf: null
  }
};
class CookieScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$3);
  }
  mounted() {
    if (true) {
      this.$auth.ctx.$axios.setHeader("referer", this.$auth.ctx.req.headers.host);
    }
    return super.mounted();
  }
  check() {
    const response = { valid: false };
    if (!super.check().valid) {
      return response;
    }
    if (this.options.cookie.name) {
      const cookies = this.$auth.$storage.getCookies();
      response.valid = Boolean(cookies[this.options.cookie.name]);
      return response;
    }
    response.valid = true;
    return response;
  }
  async login(endpoint) {
    this.$auth.reset();
    if (this.options.endpoints.csrf) {
      await this.$auth.request(this.options.endpoints.csrf, {
        maxRedirects: 0
      });
    }
    return super.login(endpoint, { reset: false });
  }
  reset() {
    if (this.options.cookie.name) {
      this.$auth.$storage.setCookie(this.options.cookie.name, null, {
        prefix: ""
      });
    }
    return super.reset();
  }
}

const DEFAULTS$2 = {
  name: "oauth2",
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: null,
    authorization: null,
    token: null,
    userInfo: null
  },
  scope: [],
  token: {
    property: "access_token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  refreshToken: {
    property: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  user: {
    property: false
  },
  responseType: "token",
  codeChallengeMethod: "implicit"
};
class runtime_Oauth2Scheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$2);
    this.req = $auth.ctx.req;
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  get scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope;
  }
  get redirectURI() {
    const basePath = this.$auth.ctx.base || "";
    const path = normalizePath(basePath + "/" + this.$auth.options.redirect.callback);
    return this.options.redirectUri || runtime_urlJoin(requrl_default()(this.req), path);
  }
  get logoutRedirectURI() {
    return this.options.logoutRedirectUri || runtime_urlJoin(requrl_default()(this.req), this.$auth.options.redirect.logout);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
  }
  async login(_opts = {}) {
    const opts = {
      protocol: "oauth2",
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this.redirectURI,
      scope: this.scope,
      state: _opts.state || randomString(10),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params
    };
    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    if (opts.response_type.includes("token") || opts.response_type.includes("id_token")) {
      opts.nonce = _opts.nonce || randomString(10);
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case "plain":
        case "S256":
          {
            const state = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_state", state);
            const codeVerifier = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", codeVerifier);
            const codeChallenge = await this.pkceChallengeFromVerifier(codeVerifier, opts.code_challenge_method === "S256");
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.$auth.$storage.setUniversal(this.name + ".state", opts.state);
    const url = this.options.endpoints.authorization + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId + "",
        logout_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(getProp(response.data, this.options.user.property));
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path, this.$auth.ctx) !== normalizePath(this.$auth.options.redirect.callback, this.$auth.ctx)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId + "",
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (this.$auth.options.watchLoggedIn) {
      this.$auth.redirect("home", true);
      return true;
    }
  }
  async refreshTokens() {
    const refreshToken = this.refreshToken.get();
    if (!refreshToken) {
      return;
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    this.requestHandler.clearHeader();
    const response = await this.$auth.request({
      method: "post",
      url: this.options.endpoints.token,
      baseURL: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: encodeQuery({
        refresh_token: removeTokenPrefix(refreshToken, this.options.token.type),
        scopes: this.scope,
        client_id: this.options.clientId + "",
        grant_type: "refresh_token"
      })
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    });
    this.updateTokens(response);
    return response;
  }
  updateTokens(response) {
    const token = getProp(response.data, this.options.token.property);
    const refreshToken = getProp(response.data, this.options.refreshToken.property);
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
  }
  async pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v;
  }
  generateRandomString() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join("");
  }
  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }
  _base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}

const DEFAULTS$1 = {
  name: "openIDConnect",
  responseType: "code",
  grantType: "authorization_code",
  scope: ["openid", "profile", "offline_access"],
  idToken: {
    property: "id_token",
    maxAge: 1800,
    prefix: "_id_token.",
    expirationPrefix: "_id_token_expiration."
  },
  codeChallengeMethod: "S256"
};
class OpenIDConnectScheme extends runtime_Oauth2Scheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$1);
    this.idToken = new runtime_IdToken(this, this.$auth.$storage);
    this.configurationDocument = new runtime_ConfigurationDocument(this, this.$auth.$storage);
  }
  updateTokens(response) {
    super.updateTokens(response);
    const idToken = getProp(response.data, this.options.idToken.property);
    if (idToken) {
      this.idToken.set(idToken);
    }
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      idTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    this.idToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    const idTokenStatus = this.idToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    if (idTokenStatus.expired()) {
      response.idTokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    await this.configurationDocument.init();
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.idToken.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
    this.configurationDocument.reset();
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        id_token_hint: this.idToken.get(),
        post_logout_redirect_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (this.idToken.get()) {
      const data2 = this.idToken.userInfo();
      this.$auth.setUser(data2);
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const { data } = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(data);
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path) !== normalizePath(this.$auth.options.redirect.callback)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    let idToken = parsedQuery[this.options.idToken.property];
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId,
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
      idToken = getProp(response.data, this.options.idToken.property) || idToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (idToken && idToken.length) {
      this.idToken.set(idToken);
    }
    this.$auth.redirect("home", true);
    return true;
  }
}

const DEFAULTS = {
  name: "refresh",
  endpoints: {
    refresh: {
      url: "/api/auth/refresh",
      method: "post"
    }
  },
  refreshToken: {
    property: "refresh_token",
    data: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    required: true,
    tokenRequired: false,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  autoLogout: false
};
class RefreshScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    const refreshToken = this.refreshToken.sync();
    if (!token || !refreshToken) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted() {
    return super.mounted({
      tokenCallback: () => {
        if (this.options.autoLogout) {
          this.$auth.reset();
        }
      },
      refreshTokenCallback: () => {
        this.$auth.reset();
      }
    });
  }
  refreshTokens() {
    if (!this.options.endpoints.refresh) {
      return Promise.resolve();
    }
    if (!this.check().valid) {
      return Promise.resolve();
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader();
    }
    const endpoint = {
      data: {
        client_id: void 0,
        grant_type: void 0
      }
    };
    if (this.options.refreshToken.required && this.options.refreshToken.data) {
      endpoint.data[this.options.refreshToken.data] = this.refreshToken.get();
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = "refresh_token";
    }
    cleanObj(endpoint.data);
    return this.$auth.request(endpoint, this.options.endpoints.refresh).then((response) => {
      this.updateTokens(response, { isRefreshing: true });
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
    return this.fetchUser();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response, { isRefreshing = false, updateOnRefresh = true } = {}) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    const refreshToken = this.options.refreshToken.required ? getProp(response.data, this.options.refreshToken.property) : true;
    this.token.set(token);
    if (refreshToken && (!isRefreshing || isRefreshing && updateOnRefresh)) {
      this.refreshToken.set(refreshToken);
    }
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.refresh.url);
  }
}

class Auth0Scheme extends runtime_Oauth2Scheme {
  logout() {
    this.$auth.reset();
    const opts = {
      client_id: this.options.clientId + "",
      returnTo: this.logoutRedirectURI
    };
    const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
}

class LaravelJWTScheme extends RefreshScheme {
  updateTokens(response, { isRefreshing = false, updateOnRefresh = false } = {}) {
    super.updateTokens(response, { isRefreshing, updateOnRefresh });
  }
}



// CONCATENATED MODULE: ./.nuxt/auth.js



// Active schemes

_nuxt_middleware.auth = authMiddleware;
/* harmony default export */ var auth = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "ignoreExceptions": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/login",
      "home": "/",
      "callback": "/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/",
        "maxAge": 31536000,
        "secure": "false"
      }
    },
    "localStorage": false,
    "defaultStrategy": "local"
  };

  // Create a new Auth instance
  const $auth = new runtime_Auth(ctx, options);

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
    "token": {
      "property": "token",
      "maxAge": 31536000
    },
    "user": {
      "property": "data"
    },
    "endpoints": {
      "login": {
        "url": "/auth/login",
        "method": "post"
      },
      "logout": {
        "url": "/auth/logout",
        "method": "post"
      },
      "user": {
        "url": "/auth/user",
        "method": "get"
      }
    },
    "name": "local"
  }));

  // Inject it to nuxt context as $auth
  inject('auth', $auth);
  ctx.$auth = $auth;

  // Initialize auth
  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/composition-api/meta.mjs

/* harmony default export */ var meta = (setMetaPlugin);
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\composition-api\\plugin.mjs (mode: 'all')
 // Source: .\\recaptcha.js (mode: 'all')
 // Source: .\\cookie-universal-nuxt.js (mode: 'all')
 // Source: .\\http.server.js (mode: 'server')
 // Source: .\\http.js (mode: 'all')
 // Source: .\\strapi.js (mode: 'all')
 // Source: .\\dayjs-plugin.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
 // Source: .\\toast.js (mode: 'client')
 // Source: .\\image.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: ..\\plugins\\axios.js (mode: 'all')
 // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
 // Source: ..\\plugins\\vue-the-mask (mode: 'all')
 // Source: ..\\plugins\\vue-vuelidate.js (mode: 'all')
 // Source: ..\\plugins\\factory.js (mode: 'all')
 // Source: ..\\plugins\\vue-multiselect.js (mode: 'all')
 // Source: ..\\plugins\\popper.js (mode: 'all')
 // Source: ..\\plugins\\vue-flatpickr.js (mode: 'all')
 // Source: ..\\plugins\\vue-scroll-active.js (mode: 'all')
 // Source: ..\\plugins\\vue-apexcharts.js (mode: 'client')
 // Source: ..\\plugins\\vue-slide-toggle.js (mode: 'all')
 // Source: .\\auth.js (mode: 'all')
 // Source: .\\composition-api\\meta.mjs (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Venture Plans",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "hid": "language",
        "name": "language",
        "content": "English"
      }, {
        "hid": "og:title",
        "property": "og:title",
        "content": "Venture Plans"
      }, {
        "hid": "description",
        "property": "description",
        "content": "Venture Plans is a global management consulting firm with a sophisticated team of diverse industry-specific consultants with deep expertise in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook."
      }, {
        "hid": "keywords",
        "property": "keywords",
        "content": "Venturefund"
      }, {
        "hid": "og:description",
        "property": "og:description",
        "content": "Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes."
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      }, {
        "hid": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og:site_name",
        "property": "og:site_name",
        "content": "Venture Plans"
      }, {
        "hid": "og:url",
        "property": "og:url",
        "content": "https:\u002F\u002Fseveti.vercel.app"
      }, {
        "hid": "og:image",
        "property": "og:image",
        "content": "https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"
      }, {
        "hid": "og:image:secure_url",
        "property": "og:image:secure_url",
        "content": "https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"
      }, {
        "hid": "og:image:width",
        "property": "og:image:width",
        "content": "1200"
      }, {
        "hid": "og:image:height",
        "property": "og:image:height",
        "content": "630"
      }, {
        "hid": "twitter:card",
        "name": "twitter:card",
        "content": "summary_large_image"
      }, {
        "hid": "twitter:title",
        "name": "twitter:title",
        "content": "Venture Plans"
      }, {
        "hid": "twitter:description",
        "name": "twitter:description",
        "content": "Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes."
      }, {
        "hid": "twitter:image",
        "name": "twitter:image",
        "content": "https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.googleapis.com"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.gstatic.com",
        "crossorigin": true
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@400;500;600&display=swap"
      }],
      "script": [{
        "type": "text\u002Fjavascript",
        "src": "https:\u002F\u002Fwww.recaptcha.net\u002Frecaptcha\u002Fapi.js?render=onloadcallback",
        "async": true,
        "defer": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }
  if (typeof _nuxt_recaptcha === 'function') {
    await _nuxt_recaptcha(app.context, inject);
  }
  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }
  if ( true && typeof /* Cannot get final name for export "default" in "./.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof http === 'function') {
    await http(app.context, inject);
  }
  if (typeof _nuxt_strapi === 'function') {
    await _nuxt_strapi(app.context, inject);
  }
  if (typeof dayjs_plugin === 'function') {
    await dayjs_plugin(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams mergeAdditionalMessages, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams mergeAdditionalMessages, known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }
  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }
  if (false) {}
  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-the-mask.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-the-mask.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-vuelidate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-vuelidate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof plugins_factory === 'function') {
    await plugins_factory(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-multiselect.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-multiselect.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/popper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/popper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-flatpickr.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-flatpickr.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-scroll-active.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-scroll-active.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-slide-toggle.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-slide-toggle.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }
  if (typeof meta === 'function') {
    await meta(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/layout/layout-header.vue?vue&type=template&id=9881eef2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"absolute top-0 z-40 w-full border-b border-white/20 bg-white shadow-[0px_1px_8px_rgba(0,0,0,0.08)] transition-all duration-700",class:{ 'home-header': _vm.isIndexPage && !_vm.$store.state.nav.isDropdownOpen && _vm.scrollPosition == null && !_vm.$store.state.nav.isMenuBarSearchExpanded, '!fixed !shadow-none': _vm.scrollPosition !== null }},[_c('header-top-bar',{directives:[{name:"show",rawName:"v-show",value:(_vm.scrollPosition !== 'down'),expression:"scrollPosition !== 'down'"}]}),_vm._ssrNode(" "),_c('header-menu-bar',{attrs:{"scroll-position":_vm.scrollPosition}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/layout-header.vue?vue&type=template&id=9881eef2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/layout/layout-header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var layout_headervue_type_script_lang_js_ = ({
  name: 'Header',
  data() {
    return {
      lastScrollTop: 0,
      scrollPosition: null
    };
  },
  mounted() {
    this.lastScrollTop = 0;
    document.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
      window.Userback = window.Userback || {};
      Userback.access_token = '38243|75407|MC4B6gLHdzd608E1fRlAxMhf1';
      (function (d) {
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://static.userback.io/widget/v1.js';
        (d.head || d.body).appendChild(s);
      })(document);
    });
  },
  computed: {
    isIndexPage() {
      var _this$$route$name;
      return ((_this$$route$name = this.$route.name) === null || _this$$route$name === void 0 ? void 0 : _this$$route$name.split('___')[0]) == 'index';
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll(), false);
  },
  methods: {
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.scrollPosition = 'down';
      } else {
        this.scrollPosition = 'up';
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
      if (window.innerWidth < 768 && this.lastScrollTop <= 100 || window.innerWidth > 767 && this.lastScrollTop <= 20) {
        this.scrollPosition = null;
      }
      this.$emit('changeScrollPosition', this.scrollPosition, this.isIndexPage);
    }
  }
});
// CONCATENATED MODULE: ./components/layout/layout-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_layout_headervue_type_script_lang_js_ = (layout_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/layout/layout-header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_layout_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4635441e"
  
)

/* harmony default export */ var layout_header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderTopBar: __webpack_require__(120).default,HeaderMenuBar: __webpack_require__(121).default})


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-top-bar.vue?vue&type=template&id=3920934a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-[60] hidden pt-[17px] transition-all duration-300 xl:block"},[_vm._ssrNode("<div class=\"container lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex justify-between pr-7\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"megamenu flex space-x-[8px] text-xs font-semibold leading-[13px] text-black lg:pl-[90px] xl:text-[13px] xl:leading-4\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"home-header-text transition-all duration-300 hover:!text-primary",attrs:{"to":"/reviews"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(_vm.$t('reviews')))])],1),_vm._ssrNode(" <li class=\"home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4\"></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"home-header-text transition-all duration-300 hover:!text-primary",attrs:{"to":_vm.localePath('/contact-us')},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(_vm.$t('contact')))])],1),_vm._ssrNode(" <li class=\"home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4\"></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"home-header-text transition-all duration-300 hover:!text-primary",attrs:{"to":"/subscribe"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(_vm.$t('subscribe')))])],1),_vm._ssrNode(" <li class=\"home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4\"></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"home-header-text transition-all duration-300 hover:!text-primary",attrs:{"to":"/media"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(_vm.$t('media')))])],1),_vm._ssrNode(" <li class=\"home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4\"></li> "),_vm._ssrNode("<li class=\"menu group cursor-auto\">","</li>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('industries')))+" class=\"home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary\">","</button>",[_vm._ssrNode("<p>"+_vm._ssrEscape(_vm._s(_vm.$t('industries')))+"</p> "),_vm._ssrNode("<div class=\"!text-primary\">","</div>",[_c('icons-topmenuarrow',{staticClass:"!text-primary",class:{ 'rotate-180': _vm.$store.state.nav.dropdown.industries }})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"industries\" class=\"sub-menu !top-[33px] !z-30 bg-white\""+(_vm._ssrStyle(null,null, { display: (_vm.$store.state.nav.dropdown.industries) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"absolute right-6 top-5\">","</div>",[_vm._ssrNode("<button>","</button>",[_c('icons-close-menu',{staticClass:"text-[#d1d1d1] hover:text-primary"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container bg-white px-10 py-6\">","</div>",[_vm._ssrNode("<div class=\"mb-6 uppercase\"><p class=\"cursor-pointer !border-b-0 !leading-5 duration-150 hover:text-primary\">"+_vm._ssrEscape(_vm._s(_vm.$t('industries')))+"</p></div> "),_vm._ssrNode("<div class=\"grid grid-cols-4 divide-x divide-[#707070]/20\">","</div>",_vm._l((_vm.$store.state.nav.industries),function(mainIndNav,mInd){return _vm._ssrNode("<ul"+(_vm._ssrClass("self-stretch pr-12",{ 'self-stretch px-12': mInd > 0 }))+">","</ul>",_vm._l((mainIndNav.attributes.collections.data),function(subIndNav,sInd){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":subIndNav.attributes.base_url.data.attributes.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(subIndNav.attributes.base_url.data.attributes.name))])],1)}),0)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-4 pt-[43px]\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary",attrs:{"to":_vm.localePath('/industries')}},[_vm._v("View All Industries")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"px-12 text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary",attrs:{"to":_vm.localePath('/industries')}},[_vm._v("Buy Industry Market Reports")])],1)],2)],2)],2)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"megamenu flex space-x-[9px] text-xs font-semibold leading-[13px] text-black xl:text-[13px] xl:leading-4\">","</ul>",[_vm._ssrNode("<li class=\"menu group cursor-auto\">","</li>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('offices')))+" class=\"home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary\">","</button>",[_vm._ssrNode("<p class=\"pointer-events-none\">"+_vm._ssrEscape(_vm._s(_vm.$t('offices')))+"</p> "),_vm._ssrNode("<div class=\"!text-primary\">","</div>",[_c('icons-topmenuarrow',{staticClass:"!text-primary",class:{ 'rotate-180': _vm.$store.state.nav.dropdown.offices }})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"offices\" class=\"sub-menu !top-[33px] !z-30 bg-white\""+(_vm._ssrStyle(null,null, { display: (_vm.$store.state.nav.dropdown.offices) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"absolute right-6 top-5\">","</div>",[_vm._ssrNode("<button>","</button>",[_c('icons-close-menu',{staticClass:"text-[#d1d1d1] hover:text-primary"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container bg-white px-10 py-6\">","</div>",[_vm._ssrNode("<div class=\"mb-6 uppercase\"><p class=\"!border-b-0 text-[10px] !leading-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('offices')))+"</p></div> "),_vm._ssrNode("<div class=\"grid grid-cols-7 gap-4\">","</div>",_vm._l((_vm.usOffices),function(off){return _vm._ssrNode("<ul class=\"menu-drop-top\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-sm font-semibold",attrs:{"to":off.link}},[_vm._v(_vm._s(off.name))]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-sub-menu\">","</ul>",_vm._l((off.subLinks),function(subOff){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":subOff.link},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v(_vm._s(subOff.name))])],1)}),0)],2)])}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-4 grid grid-cols-1\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary",attrs:{"to":"/offices"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/deactiveAllDropdown')}}},[_vm._v("See All Offices")])],1)])],2)],2)],2),_vm._ssrNode(" <li class=\"home-header-icon-right-first h-[13px] w-[1px] bg-white/30 xl:h-4\"></li> <li><button"+(_vm._ssrAttr("aria-label",_vm.$t('language')))+" class=\"home-header-text transition-all duration-300 hover:text-primary\">"+_vm._ssrEscape(_vm._s(_vm.$t('language')))+"</button></li> <li class=\"home-header-icon-right h-[13px] w-[1px] bg-black/30 xl:h-4\"></li> "),_vm._ssrNode("<li class=\"menu group\">","</li>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.currentLocale))+" class=\"home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary\">","</button>",[_vm._ssrNode("<p class=\"pointer-events-none capitalize\">"+_vm._ssrEscape(_vm._s(_vm.currentLocale))+"</p> "),_vm._ssrNode("<div class=\"text-primary\">","</div>",[_c('icons-topmenuarrow',{staticClass:"!text-primary",class:{ 'rotate-180': _vm.$store.state.nav.dropdown.language }})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"language\" class=\"sub-menu !top-[33px] !z-30 bg-white\""+(_vm._ssrStyle(null,null, { display: (_vm.$store.state.nav.dropdown.language) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"absolute right-6 top-5\">","</div>",[_vm._ssrNode("<button>","</button>",[_c('icons-close-menu',{staticClass:"text-[#d1d1d1] hover:text-primary"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container bg-white px-10 py-6\">","</div>",[_vm._ssrNode("<div class=\"mb-6 uppercase\"><p class=\"!border-b-0 text-[10px] !leading-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('languages')))+"</p></div> "),_vm._ssrNode("<div class=\"flex items-start justify-between divide-x divide-[#707070]/20\">","</div>",[_vm._ssrNode("<ul class=\"pr-12\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<p class=\"text-sm font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.$t('global')))+"</p> "),_vm._ssrNode("<ul class=\"sub-sub-menu !space-y-3\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"English\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-global.png","width":"22","height":"15","alt":"English","loading":"lazy"}}),_vm._ssrNode(" <p>English</p>")],2)])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"px-12\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<p class=\"text-sm font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.$t('north_nd_south_america')))+"</p> "),_vm._ssrNode("<ul class=\"sub-sub-menu !space-y-3\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Brazil (Português)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-brazil.png","width":"22","height":"15","alt":"Brazil (Português)","loading":"lazy"}}),_vm._ssrNode(" <p>Brazil (Português)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Argentina (Español)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-argentina.png","width":"22","height":"15","alt":"Argentina (Español)","loading":"lazy"}}),_vm._ssrNode(" <p>Argentina (Español)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button arial-label=\"Chile (Español)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-chile.png","width":"22","height":"15","alt":"Chile (Español)","loading":"lazy"}}),_vm._ssrNode(" <p>Chile (Español)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Colombia (Español)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-colombia.png","width":"22","height":"15","alt":"Colombia (Español)","loading":"lazy"}}),_vm._ssrNode(" <p>Colombia (Español)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Canada\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/canada.jpg","width":"22","height":"15","alt":"Canada","loading":"lazy"}}),_vm._ssrNode(" <p>Canada</p>")],2)])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"px-12\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<p class=\"text-sm font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.$t('europe')))+"</p> "),_vm._ssrNode("<ul class=\"sub-sub-menu !space-y-3\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"France(Français)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-france.png","width":"22","height":"15","alt":"France (Français)","loading":"lazy"}}),_vm._ssrNode(" <p>France (Français)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Germany / Switzerland (Deutsch)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-germany.png","width":"22","height":"15","alt":"Germany","loading":"lazy"}}),_vm._ssrNode(" <p>Germany / Switzerland (Deutsch)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Italy (Italiano)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-italy.png","width":"22","height":"15","alt":"Italy","loading":"lazy"}}),_vm._ssrNode(" <p>Italy (Italiano)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Spain (Español)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-spain.png","width":"22","height":"15","alt":"Spain (Español)","loading":"lazy"}}),_vm._ssrNode(" <p>Spain (Español)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Russia (Русский)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-russia.png","width":"22","height":"15","alt":"Russia (Русский)","loading":"lazy"}}),_vm._ssrNode(" <p>Russia (Русский)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"England\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/uk.jpg","width":"22","height":"15","alt":"England","loading":"lazy"}}),_vm._ssrNode(" <p>England</p>")],2)])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"px-12\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<p class=\"text-sm font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.$t('asia_nd_australia')))+"</p> "),_vm._ssrNode("<ul class=\"sub-sub-menu !space-y-3\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"China (中文版)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-chaina.png","width":"22","height":"15","alt":"China (中文版)","loading":"lazy"}}),_vm._ssrNode(" <p>China (中文版)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Korea (한국어)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-korea.png","width":"22","height":"15","alt":"Korea (한국어)","loading":"lazy"}}),_vm._ssrNode(" <p>Korea (한국어)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Japan (日本語)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-japan.png","width":"22","height":"15","alt":"Japan (日本語)","loading":"lazy"}}),_vm._ssrNode(" <p>Japan (日本語)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Taiwan (日本語)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-taiwan.png","width":"22","height":"15","alt":"Taiwan (日本語)","loading":"lazy"}}),_vm._ssrNode(" <p>Taiwan (日本語)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Hong Kong (日本語)\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-hongkong.png","width":"22","height":"15","alt":"Hong Kong (日本語)","loading":"lazy"}}),_vm._ssrNode(" <p>Hong Kong (日本語)</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Australia\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/australia.png","width":"22","height":"15","alt":"Australia","loading":"lazy"}}),_vm._ssrNode(" <p>Australia</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button aria-label=\"Iran\" class=\"flex items-center gap-2\">","</button>",[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/iran.png","width":"22","height":"15","alt":"Iran","loading":"lazy"}}),_vm._ssrNode(" <p>Iran</p>")],2)])],2)],2)])],2)],2)],2)],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header-top-bar.vue?vue&type=template&id=3920934a&

// EXTERNAL MODULE: ./mixins/index.js + 3 modules
var mixins = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-top-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var header_top_barvue_type_script_lang_js_ = ({
  name: 'TopBarMenu',
  mixins: [mixins["b" /* toggleMenuDropdown */], mixins["a" /* i18nLangSwitch */]],
  data() {
    return {
      usOffices: [{
        name: 'Califonia',
        link: '/cities/califonia',
        subLinks: [{
          name: 'Los Angeles',
          link: '/cities/los-angeles'
        }, {
          name: 'West Hollywood',
          link: '/cities/west-hollywood'
        }, {
          name: 'Beverly Hills',
          link: '/cities/beverly-hills'
        }, {
          name: 'San Francisco',
          link: '/cities/san-francisco'
        }, {
          name: 'Berkely',
          link: '/cities/berkely'
        }, {
          name: 'San Diego',
          link: '/cities/san-diego'
        }, {
          name: 'Cupertino',
          link: '/cities/cupertino'
        }, {
          name: 'San Jose',
          link: '/cities/san-jose'
        }],
        id: 'califonia'
      }, {
        name: 'Texas',
        link: '/cities/texas',
        subLinks: [{
          name: 'Austin',
          link: '/cities/austin'
        }, {
          name: 'Dallas',
          link: '/cities/dallas'
        }, {
          name: 'Houston',
          link: '/cities/houston'
        }, {
          name: 'San Antonio',
          link: '/cities/san-antonio'
        }],
        id: 'texas'
      }, {
        name: 'New York',
        link: '/cities/new-york',
        subLinks: [{
          name: 'Manhattan',
          link: '/cities/manhattan'
        }, {
          name: 'Buffalo',
          link: '/cities/buffalo'
        }, {
          name: 'Rochester',
          link: '/cities/rochester'
        }],
        id: 'new_york'
      }, {
        name: 'Ohio',
        link: '/cities/ohio',
        subLinks: [{
          name: 'Columbus',
          link: '/cities/columbus'
        }, {
          name: 'Cincinnati',
          link: '/cities/cincinnati'
        }, {
          name: 'Cleveland',
          link: '/cities/cleveland'
        }],
        id: 'ohio'
      }, {
        name: 'Louisiana',
        link: '/cities/louisiana',
        subLinks: [{
          name: 'New Orleans',
          link: '/cities/new-orleans'
        }, {
          name: 'Cincinnati',
          link: '/cities/cincinnati'
        }, {
          name: 'Cleveland',
          link: '/cities/cleveland'
        }],
        id: 'louisiana'
      }, {
        name: 'Florida',
        link: '/cities/florida',
        subLinks: [{
          name: 'Miami',
          link: '/cities/miami'
        }, {
          name: 'Tampa Bay',
          link: '/cities/tampa-bay'
        }],
        id: 'florida'
      }, {
        name: 'Washington',
        link: '/cities/washington',
        subLinks: [{
          name: 'Seattle',
          link: '/cities/seattle'
        }, {
          name: 'Tacoma',
          link: '/cities/tacoma'
        }],
        id: 'washington'
      }, {
        name: 'Maryland',
        link: '/cities/maryland',
        subLinks: [{
          name: 'Washington',
          link: '/cities/washington'
        }, {
          name: 'Baltimore',
          link: '/cities/baltimore'
        }],
        id: 'maryland'
      }, {
        name: 'North Carolina',
        link: '/cities/north-carolina',
        subLinks: [{
          name: 'Raleigh',
          link: '/cities/raleigh'
        }, {
          name: 'Charlotte',
          link: '/cities/charlotte'
        }],
        id: 'north_carolina'
      }, {
        name: 'Tennessee',
        link: '/cities/tennessee',
        subLinks: [{
          name: 'Nashville',
          link: '/cities/nashville'
        }],
        id: 'tennessee'
      }, {
        name: 'Nevada',
        link: '/cities/nevada',
        subLinks: [{
          name: 'Las Vegas',
          link: '/cities/las-vegas'
        }],
        id: 'nevada'
      }, {
        name: 'Massachusetts',
        link: '/cities/massachusetts',
        subLinks: [{
          name: 'Boston',
          link: '/cities/boston'
        }],
        id: 'massachusetts'
      }, {
        name: 'Pennsylvania',
        link: '/cities/pennsylvania',
        subLinks: [{
          name: 'Philadelphia',
          link: '/cities/philadelphia'
        }],
        id: 'pennsylvania'
      }, {
        name: 'Illinois',
        link: '/cities/illinois',
        subLinks: [{
          name: 'Chicago',
          link: '/cities/chicago'
        }],
        id: 'illinois'
      }, {
        name: 'Indiana',
        link: '/cities/indiana',
        subLinks: [{
          name: 'Indianapolis',
          link: '/cities/indianapolis'
        }],
        id: 'indiana'
      }, {
        name: 'Georgia',
        link: '/cities/georgia',
        subLinks: [{
          name: 'Atlanta',
          link: '/cities/atlanta'
        }],
        id: 'georgia'
      }, {
        name: 'Arizona',
        link: '/cities/arizona',
        subLinks: [{
          name: 'Phoenix',
          link: '/cities/phoenix'
        }],
        id: 'arizona'
      }, {
        name: 'Michigan',
        link: '/cities/michigan',
        subLinks: [{
          name: 'Detroit',
          link: '/cities/detroit'
        }],
        id: 'michigan'
      }, {
        name: 'Colorado',
        link: '/cities/colorado',
        subLinks: [{
          name: 'Denver',
          link: '/cities/denver'
        }],
        id: 'colorado'
      }, {
        name: 'Oregon',
        link: '/cities/oregon',
        subLinks: [{
          name: 'Portland',
          link: '/cities/portland'
        }],
        id: 'oregon'
      }]
    };
  },
  mounted() {
    this.clickEventListenerTocloseMenu();
  }
});
// CONCATENATED MODULE: ./components/header/header-top-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_header_top_barvue_type_script_lang_js_ = (header_top_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header/header-top-bar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_header_top_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a03e8fa"
  
)

/* harmony default export */ var header_top_bar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsTopmenuarrow: __webpack_require__(126).default,IconsCloseMenu: __webpack_require__(127).default})


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-menu-bar.vue?vue&type=template&id=0ad7d989&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"col-span-10 col-span-3 col-span-6 col-span-9 col-span-full flex hidden w-1/3 w-1/4 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-rows-3 grid-rows-5 flex-col flex-wrap gap-x-2 gap-y-1\" data-v-0ad7d989>\n        Sample Business Data push\n    </div> "),_vm._ssrNode("<div class=\"show-separator-border relative border-b border-[#ede7e7] md:border-b-0 xl:px-4\" data-v-0ad7d989>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("px-4 lg:container",{ relative: _vm.scrollPosition !== 'down' }))+" data-v-0ad7d989>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("flex items-center justify-between py-3 xl:py-0",{ '!py-3': _vm.scrollPosition == 'down' }))+" data-v-0ad7d989>","</div>",[_vm._ssrNode("<button aria-label=\"Hamburger Icon\""+(_vm._ssrClass("home-header-text inline-block flex-none p-2 pl-0 text-primary md:pt-0",{ 'md:pt-2': _vm.scrollPosition == 'down' }))+" data-v-0ad7d989>","</button>",[_c('icons-hamburger',{staticClass:"w-[17px] !text-primary xl:w-5"})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"ml-3 mr-[3px] flex flex-1 items-center justify-center gap-[17px] md:flex-none md:justify-start\" data-v-0ad7d989>","</div>",[_vm._ssrNode("<div class=\"home-header-logo flex-none text-black\" data-v-0ad7d989>","</div>",[_c('nuxt-link',{attrs:{"to":_vm.localePath('/'),"aria-label":"Venture Plans"}},[_c('icons-logo',{staticClass:"w-28 lg:w-[66px] xl:w-[93px]",class:{ 'w-28': _vm.scrollPosition == 'down' }})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("flex flex-none items-center justify-end gap-[10px] md:flex-1 xl:justify-between",{ '!flex-none': _vm.scrollPosition == 'down' }))+" data-v-0ad7d989>","</div>",[_vm._ssrNode("<ul"+(_vm._ssrClass("megamenu hidden items-center text-xs font-semibold leading-[13px] text-black xl:flex xl:text-[13px] xl:leading-4",{ 'opacity-0 duration-300': _vm.$store.state.nav.dropdown.search }))+(_vm._ssrStyle(null,null, { display: (_vm.scrollPosition !== 'down') ? '' : 'none' }))+" data-v-0ad7d989>","</ul>",[_vm._l((_vm.$store.state.nav.desktopNavbar),function(mainNav,mainId){return _vm._ssrNode("<li class=\"menu group cursor-auto\" data-v-0ad7d989>","</li>",[_c('nuxt-link',{staticClass:"home-header-text inline-block px-[9px] py-8 transition-all duration-300 hover:text-primary group-hover:text-primary",attrs:{"to":mainNav.url,"aria-label":mainNav.name},nativeOn:{"mouseenter":function($event){return _vm.$store.dispatch('nav/activeDropdown', mainNav)},"click":function($event){return _vm.$store.dispatch('nav/deactiveDropdown', mainNav)}}},[_vm._v("\n                                "+_vm._s(mainNav.name)+"\n                            ")]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sub-menu right-0 mx-auto grid max-w-[1198px] grid-cols-12\""+(_vm._ssrStyle(null,null, { display: (mainNav.isOpened) ? '' : 'none' }))+" data-v-0ad7d989>","</div>",[(mainNav.navChildItems)?_vm._l((mainNav.navChildItems),function(subNav,subId){return _vm._ssrNode("<div"+(_vm._ssrClass("bg-white px-10 py-6",subNav.mainClass ? subNav.mainClass : ''))+" data-v-0ad7d989>","</div>",[_vm._ssrNode("<div class=\"mb-6\" data-v-0ad7d989>","</div>",[_c('nuxt-link',{staticClass:"uppercase transition-all duration-300 hover:text-primary",attrs:{"to":subNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/resetAllDesktopMenu', mainNav)}}},[_vm._v(_vm._s(subNav.name))])],1),_vm._ssrNode(" "),(subNav.navChildItems && Array.isArray(subNav.navChildItems) && subNav.navChildItems.length > 0 && Array.isArray(subNav.navChildItems[0]))?_vm._ssrNode("<div"+(_vm._ssrClass("mb-2 gap-2",subNav.subClass ? subNav.subClass : 'grid grid-cols-5'))+" data-v-0ad7d989>","</div>",_vm._l((subNav.navChildItems),function(navItems,nvK){return _vm._ssrNode("<ul class=\"mb-2\" data-v-0ad7d989>","</ul>",_vm._l((navItems),function(childNav,childId){return _vm._ssrNode("<li data-v-0ad7d989>","</li>",[_c('nuxt-link',{attrs:{"to":childNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/resetAllDesktopMenu', mainNav)}}},[_vm._v(_vm._s(childNav.name))]),_vm._ssrNode(" "),(childNav.navChildItems)?_vm._ssrNode("<ul class=\"sub-sub-menu\" data-v-0ad7d989>","</ul>",_vm._l((childNav.navChildItems),function(subChildNav,subChildId){return _vm._ssrNode("<li data-v-0ad7d989>","</li>",[_c('nuxt-link',{attrs:{"to":subChildNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/resetAllDesktopMenu', mainNav)}}},[_vm._v(_vm._s(subChildNav.name))])],1)}),0):_vm._e()],2)}),0)}),0):_vm._e()],2)}):_vm._e()],2)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu group cursor-auto\" data-v-0ad7d989>","</li>",[_c('nuxt-link',{staticClass:"home-header-text inline-block px-[9px] py-8 transition-all duration-300 hover:text-primary group-hover:text-primary",attrs:{"to":"/insights"}},[_vm._v(_vm._s(_vm.$t('insights')))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-none items-center gap-[10px]\" data-v-0ad7d989>","</div>",[(_vm.$helper.isInternalUrl(_vm.navigationButtons.navigationButton1Link))?_c('nuxt-link',{directives:[{name:"show",rawName:"v-show",value:(_vm.scrollPosition !== 'down'),expression:"scrollPosition !== 'down'"}],staticClass:"hidden items-center gap-3 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex xl:py-3 xl:text-xs xl:leading-4",attrs:{"to":_vm.navigationButtons.navigationButton1Link}},[_c('icons-calendar',{staticClass:"w-3 xl:w-[17px]"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.navigationButtons.navigationButton1Text))])],1):_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.scrollPosition !== 'down'),expression:"scrollPosition !== 'down'"}],staticClass:"hidden items-center gap-3 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex xl:py-3 xl:text-xs xl:leading-4",attrs:{"href":_vm.navigationButtons.navigationButton1Link,"target":"_blank"}},[_c('icons-calendar',{staticClass:"w-3 xl:w-[17px]"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.navigationButtons.navigationButton1Text))])],1),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.navigationButtons.NavigationButton2Link))+" class=\"hidden items-center gap-2 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex md:pl-[35.79px] md:pr-[35.8px] lg:pl-[39.55px] lg:pr-[39.55px] xl:py-3 xl:text-xs xl:leading-4\""+(_vm._ssrStyle(null,null, { display: (_vm.scrollPosition !== 'down') ? '' : 'none' }))+" data-v-0ad7d989>","</a>",[_c('icons-phone',{staticClass:"h-[19px] w-3 xl:w-[17px]"}),_vm._ssrNode(" <p data-v-0ad7d989>"+_vm._ssrEscape(_vm._s(_vm.navigationButtons.navigationButton2Text))+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<button aria-label=\"Search\" class=\"home-header-text !text-primary\" data-v-0ad7d989>","</button>",[_c('icons-search',{staticClass:"w-5",attrs:{"id":"search-show"}})],1),_vm._ssrNode(" "),_c('Transition',{attrs:{"duration":{ enter: 500, leave: 800 },"name":"slide-left-to-right"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.$store.state.nav.dropdown.search),expression:"$store.state.nav.dropdown.search"}],staticClass:"absolute right-0 top-0 z-[60] mr-0 h-full w-full bg-white xl:ml-[13%] xl:w-[87%]",class:_vm.searchExpand},[_c('div',{staticClass:"relative ml-auto mt-0 flex w-full items-center justify-end gap-2 xl:mt-[13px] xl:max-w-[845px]",class:{ '!mt-0 !max-w-full': _vm.scrollPosition == 'down' }},[_c('div',{staticClass:"pl-5"},[_c('icons-search',{staticClass:"w-5 text-primary"})],1),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.params.search),expression:"params.search"}],ref:"search",staticClass:"form-input p-[14px] text-base text-black placeholder:text-[#bfbfbf]",attrs:{"type":"search","placeholder":"Search insights, services, and experts","name":""},domProps:{"value":(_vm.params.search)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onSearch()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.params, "search", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"text-[#909090] hover:text-primary",class:{ 'pr-5': _vm.scrollPosition == 'down' },on:{"click":function($event){$event.stopPropagation();return _vm.$store.dispatch('nav/deactiveLegacyDropdown', 'search')}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"50","height":"50","viewBox":"0 0 57 56"}},[_c('g',[_c('g',[_c('g',[_c('path',{attrs:{"fill":"none","stroke":"currentColor","stroke-miterlimit":"20","stroke-width":"2","d":"M20.416 36.038L36.454 20"}})]),_vm._v(" "),_c('g',{attrs:{"transform":"rotate(90 28.5 28)"}},[_c('path',{attrs:{"fill":"none","stroke":"currentColor","stroke-miterlimit":"20","stroke-width":"2","d":"M20.416 36.038L36.454 20"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"megamenu absolute left-0 top-[55px] flex max-h-[370px] w-full flex-wrap overflow-y-auto border-t border-[#d5d5d5] bg-white px-6 pb-9 pt-4 md:max-h-fit md:overflow-y-visible",class:[_vm.isExapndSearchDetails ? 'is-expanded' : 'is-not-expanded', _vm.scrollPosition === 'down' ? '!top-[55px]' : 'xl:!top-[68px]']},[_c('div',{staticClass:"w-full pb-4 sm:w-1/2"},[_c('p',{staticClass:"mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]"},[_vm._v(_vm._s(_vm.$t('popular_searches')))]),_vm._v(" "),_c('ul',{staticClass:"space-y-4 text-[15px] text-[#030303]"},[_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=venture Experts"}},[_vm._v(_vm._s(_vm.$t('venture_experts')))])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=artificial intelligence"}},[_vm._v(_vm._s(_vm.$t('artificial_intelligence')))])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=Product Engineering"}},[_vm._v(_vm._s(_vm.$t('product_engineering')))])],1)])]),_vm._v(" "),_c('div',{staticClass:"w-full border-t border-[#d5d5d5] pt-4 sm:w-1/2 sm:border-t-0 sm:pb-4 sm:pt-0"},[_c('p',{staticClass:"mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]"},[_vm._v(_vm._s(_vm.$t('previous_searches')))]),_vm._v(" "),_c('ul',{staticClass:"space-y-4 text-[15px] text-[#030303]"},[_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=New start up technology"}},[_vm._v(_vm._s(_vm.$t('new_start_up_technology')))])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=New York"}},[_vm._v(_vm._s(_vm.$t('new_york')))])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"hover:text-primary",attrs:{"to":"/search?search=Agile"}},[_vm._v(_vm._s(_vm.$t('agile')))])],1)])]),_vm._v(" "),_c('div',{staticClass:"hidden w-full border-t border-[#d5d5d5] pt-4 sm:block"},[_c('p',{staticClass:"mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]"},[_vm._v(_vm._s(_vm.$t('recently_visited_pages')))]),_vm._v(" "),_c('div',{staticClass:"grid grid-cols-1 gap-3 sm:grid-cols-3"},[_c('nuxt-link',{staticClass:"flex items-center gap-4 text-[15px] font-semibold text-[#030303]",attrs:{"to":"/search?search=grant service"}},[_c('div',{staticClass:"h-16 w-16 flex-none overflow-hidden rounded-md"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":"/assets/img/hero-slider/slide-3.jpg","alt":"Grant Service","loading":"lazy"}})],1),_vm._v(" "),_c('p',[_vm._v("Grant Service")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"flex items-center gap-4 text-[15px] font-semibold text-[#030303]",attrs:{"to":"/search?search=media"}},[_c('div',{staticClass:"h-16 w-16 flex-none overflow-hidden rounded-md"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":"/assets/img/hero-slider/slide-3.jpg","alt":"Media","loading":"lazy"}})],1),_vm._v(" "),_c('p',[_vm._v("Media")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"flex items-center gap-4 text-[15px] font-semibold text-[#030303]",attrs:{"to":"/search?search=careers"}},[_c('div',{staticClass:"h-16 w-16 flex-none overflow-hidden rounded-md"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":"/assets/img/hero-slider/slide-3.jpg","alt":"Careers","loading":"lazy"}})],1),_vm._v(" "),_c('p',[_vm._v("Careers")])])],1)])])])])])],2)],2)],2)])]),_vm._ssrNode(" "),(_vm.scrollPosition === null)?_vm._ssrNode("<div class=\"flex items-center justify-center gap-1 py-2 md:hidden\" data-v-0ad7d989>","</div>",[(_vm.$helper.isInternalUrl(_vm.navigationButtons.navigationButton1Link))?_c('nuxt-link',{staticClass:"flex w-[167px] items-center justify-center gap-3 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700",attrs:{"to":_vm.navigationButtons.navigationButton1Link}},[_c('icons-calendar',{staticClass:"h-[19px] w-3 xl:w-[17px]"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.navigationButtons.navigationButton1Text))])],1):_c('a',{staticClass:"flex w-[167px] items-center justify-center gap-3 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700",attrs:{"target":"_blank","href":_vm.navigationButtons.navigationButton1Link}},[_c('icons-calendar',{staticClass:"h-[19px] w-[17px]"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.navigationButtons.navigationButton1Text))])],1),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.navigationButtons.NavigationButton2Link))+" class=\"flex w-[167px] items-center justify-center gap-2 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700\" data-v-0ad7d989>","</a>",[_c('icons-phone',{staticClass:"h-[19px] w-[13px]"}),_vm._ssrNode(" <p data-v-0ad7d989>"+_vm._ssrEscape(_vm._s(_vm.navigationButtons.navigationButton2Text))+"</p>")],2)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header-menu-bar.vue?vue&type=template&id=0ad7d989&scoped=true&

// EXTERNAL MODULE: ./mixins/index.js + 3 modules
var mixins = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-menu-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var header_menu_barvue_type_script_lang_js_ = ({
  name: 'MenuBar',
  mixins: [mixins["b" /* toggleMenuDropdown */]],
  props: {
    scrollPosition: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      params: {
        search: ''
      },
      isExapndSearchDetails: false,
      navigationButtons: {}
    };
  },
  computed: {
    searchExpand() {
      let classes = '';
      if (this.scrollPosition === 'down') {
        classes += ' !w-full !ml-0';
      }

      // if (this.$store.state.nav.isMenuBarSearchExpanded) {
      //     classes += ' is-expanded-search';
      // } else {
      //     classes += classes + ' is-not-expanded-search';
      // }
      return classes;
    }
  },
  watch: {
    '$store.state.nav.dropdown.search'(val) {
      if (val) {
        this.$store.dispatch('nav/setIsMenuBarSearchExpanded', true);
        setTimeout(() => {
          this.$refs.search.focus();
        }, 700);
        setTimeout(() => {
          this.isExapndSearchDetails = true;
        }, 700);
      } else {
        this.isExapndSearchDetails = false;
        setTimeout(() => {
          this.$store.dispatch('nav/setIsMenuBarSearchExpanded', false);
        }, 700);
      }
    }
  },
  mounted() {
    this.clickEventListenerTocloseMenu();
    const fetchNavigationButtons = async () => {
      try {
        var _data$data$;
        const data = await fetch(`${"https://strapi-stg.ventureplans.us"}/api/navigation-bars?populate=deep`, {
          headers: {
            authorization: `Bearer ${"efa9034762f7be85984acf4643252ab6bf538955c059eb00b0c615f416fc2d5f96660f7e25d7601adf79a60c75042957e3de14e9af075898ff699de0258635eb4c9db7f75dad67be56ef8efde560a964ae15c07d8778dbcaa9bf0b72cb28e55d7fe3efbf52a9f12b88cc109d0f8dcfb9ecb17412d7d765a0a5fdedd409e072c1"}`
          }
        }).then(res => res.json());
        this.navigationButtons = (data === null || data === void 0 ? void 0 : (_data$data$ = data.data[0]) === null || _data$data$ === void 0 ? void 0 : _data$data$.attributes) || {};
      } catch (err) {}
    };
    const fetchNavigationURLs = async () => {
      try {
        const data = await fetch(`${"https://strapi-stg.ventureplans.us"}/api/desktop-navigation-main?populate=deep,100`, {
          headers: {
            authorization: `Bearer ${"efa9034762f7be85984acf4643252ab6bf538955c059eb00b0c615f416fc2d5f96660f7e25d7601adf79a60c75042957e3de14e9af075898ff699de0258635eb4c9db7f75dad67be56ef8efde560a964ae15c07d8778dbcaa9bf0b72cb28e55d7fe3efbf52a9f12b88cc109d0f8dcfb9ecb17412d7d765a0a5fdedd409e072c1"}`
          }
        }).then(res => res.json());
        this.$store.dispatch('nav/formatDesktopNavigation', data.data.attributes.navigations.data);
        this.$store.dispatch('nav/formatIndustriesNavigation', data.data.attributes.industries.data);
      } catch (err) {}
    };
    fetchNavigationURLs();
    fetchNavigationButtons();
  },
  methods: {
    onSearch() {
      this.$router.push(`/search?search=${this.params.search}`);
      this.params.search = '';
      this.$store.dispatch('nav/deactiveLegacyDropdown', 'search');
    }
  }
});
// CONCATENATED MODULE: ./components/header/header-menu-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_header_menu_barvue_type_script_lang_js_ = (header_menu_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header/header-menu-bar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_header_menu_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ad7d989",
  "343e2356"
  
)

/* harmony default export */ var header_menu_bar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsHamburger: __webpack_require__(128).default,IconsLogo: __webpack_require__(73).default,IconsCalendar: __webpack_require__(72).default,IconsPhone: __webpack_require__(71).default,IconsSearch: __webpack_require__(70).default})


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar.vue?vue&type=template&id=dee311a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("left-side-megamenu transition-left fixed -left-full bottom-0 left-[-84%] top-0 z-[60] h-screen w-10/12 bg-white md:left-[-360px] md:w-[360px]",{ '!left-0 !block': _vm.$store.state.nav.open }))+">","</div>",[_vm._ssrNode("<div class=\"absolute right-0 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center bg-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x text-white\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line> <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg></div> "),_vm._ssrNode("<div id=\"menu-scroll-top\" class=\"h-full overflow-y-auto overflow-x-hidden pb-12\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("left-right-animation relative left-0 h-auto",{ '!-left-full': _vm.$store.state.nav.isLevel1Open, '!-left-[200%]': _vm.$store.state.nav.isLevel2Open }))+">","</nav>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"ml-0\">","</div>",[_c('nuxt-link',{staticClass:"block w-full cursor-pointer px-5 py-4",attrs:{"to":_vm.localePath('/')},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"h-[23px] w-[93px]",attrs:{"format":"webp","src":"/assets/img/logo-black.svg","alt":"Logo","loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"m-0 mb-4 list-none p-0 pt-5 text-[13px] font-semibold leading-4 text-black\">","</ul>",_vm._l((_vm.$store.state.nav.mobileNavbar),function(mainNav,mainInd){return _vm._ssrNode("<li>","</li>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",mainNav.name))+" class=\"rightmenu-link flex items-center justify-start gap-3 px-6 py-2\">","</button>",[_vm._ssrNode("<p>"+_vm._ssrEscape(_vm._s(mainNav.name))+"</p> "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],2),_vm._ssrNode(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(mainNav.isOpened),expression:"mainNav.isOpened"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col pb-28 lg:pb-10"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":_vm.$t('back')},on:{"click":function($event){return _vm.hideMobileMenu(mainNav, 'main')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v(_vm._s(_vm.$t('back')))])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('nuxt-link',{attrs:{"to":mainNav.url}},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black",on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(mainNav.name))])]),_vm._v(" "),(mainNav.navChildItems)?_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},_vm._l((mainNav.navChildItems),function(subNav,subInd){return _c('li',{key:subNav.url + subInd},[(subNav.navChildItems && subNav.navChildItems.length > 0)?_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px]",attrs:{"aria-label":subNav.name},on:{"click":function($event){return _vm.showMobileMenu(subNav, 'level1', mainNav)}}},[_c('p',[_vm._v(_vm._s(subNav.name))]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1):_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-[10px]",attrs:{"to":subNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('p',[_vm._v(_vm._s(subNav.name))])]),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(subNav.isOpened),expression:"subNav.isOpened"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col pb-28 lg:pb-10"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":_vm.$t('back'),"to":"/business-plan-'immigration_business_plans'google-ad"},on:{"click":function($event){return _vm.hideMobileMenu(subNav, 'level1', mainNav)}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v(_vm._s(_vm.$t('back')))])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('nuxt-link',{staticClass:"block px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black",attrs:{"to":subNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v("\n                                                                        "+_vm._s(subNav.name))]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},_vm._l((subNav.navChildItems),function(childNav,childInd){return _c('li',{key:childNav.url + childInd},[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-[10px]",attrs:{"to":childNav.url},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(childNav.name))])],1)}),0)],1)])])])],1)}),0):_vm._e()],1)])])])],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"m-0 list-none border-t border-[#d8d8d8] p-0 pt-4 text-[13px] font-semibold leading-4 text-[#707070]\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/insights"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('insights')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/media"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('media')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/reviews"},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('reviews')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/subscribe"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('subscribe')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('faq')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-2 text-center",attrs:{"to":_vm.localePath('/contact-us'),"native":""},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(_vm.$t('contact')))])],1),_vm._ssrNode(" "),_c('header-right-side-bar-menu-offices',{attrs:{"dropdowns":_vm.dropdowns},on:{"showMenu":_vm.showMenu,"closeMenu":_vm.closeMenu}}),_vm._ssrNode(" "),_c('header-right-side-bar-menu-language-english',{attrs:{"dropdowns":_vm.dropdowns},on:{"showMenu":_vm.showMenu,"closeMenu":_vm.closeMenu}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (_vm.dropdowns.search) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('back')))+" class=\"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary\">","</button>",[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._ssrNode(" <p class=\"text-[#BFBFBF]\">"+_vm._ssrEscape(_vm._s(_vm.$t('back')))+"</p>")],2),_vm._ssrNode(" <div class=\"relative mx-auto mb-[14px]\"><input type=\"search\" name=\"search\" placeholder=\"Search\" class=\"h-[52px] w-full border-b border-[#707070]/10 bg-white px-5 pl-14 text-sm leading-[17px] text-[#BFBFBF] focus:outline-none\"> <button type=\"submit\" class=\"absolute left-0 top-0 ml-4 mt-4\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 56.966 56.966\" xml:space=\"preserve\" width=\"512px\" height=\"512px\" class=\"h-5 w-5 fill-current text-primary\" style=\"enable-background: new 0 0 56.966 56.966\"><path d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"></path></svg></button></div> "),_vm._ssrNode("<ul class=\"mb-2 border-b border-[#707070]/20 pb-2 text-[13px] font-semibold leading-4 text-black\">","</ul>",[_vm._ssrNode("<li class=\"px-6 py-2 text-sm leading-[17px] text-[#707070]\">"+_vm._ssrEscape(_vm._s(_vm.$t('popular_searches')))+"</li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('venture_experts')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('artificial_intelligence')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('product_engineering')))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mb-2 pb-2 text-[13px] font-semibold leading-4 text-black\">","</ul>",[_vm._ssrNode("<li class=\"px-6 py-2 text-sm leading-[17px] text-[#707070]\">"+_vm._ssrEscape(_vm._s(_vm.$t('recently_visited_pages')))+"</li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('venture_experts')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('artificial_intelligence')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('product_engineering')))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"m-0 mb-4 list-none p-0 text-[13px] font-semibold leading-4 text-black\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('industries')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/consulting"}},[_vm._v(_vm._s(_vm.$t('consulting_services')))])],1),_vm._ssrNode(" <li><button"+(_vm._ssrAttr("aria-label",_vm.$t('vector')))+" class=\"flex items-center justify-start px-6 py-2 text-center\">"+_vm._ssrEscape(_vm._s(_vm.$t('vector')))+"</button></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/insights"}},[_vm._v(_vm._s(_vm.$t('insights')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/about"}},[_vm._v(_vm._s(_vm.$t('about')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/careers"}},[_vm._v(_vm._s(_vm.$t('careers')))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"m-0 list-none border-t border-[#d8d8d8] p-0 pt-4 text-[13px] font-semibold leading-4 text-[#707070]\">","</ul>",[_c('header-right-side-bar-menu-offices',{attrs:{"dropdowns":_vm.dropdowns},on:{"showMenu":_vm.showMenu,"closeMenu":_vm.closeMenu}}),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/media"}},[_vm._v(_vm._s(_vm.$t('media')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/subscribe"}},[_vm._v(_vm._s(_vm.$t('subscribe')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-start px-6 py-2 text-center",attrs:{"to":"/contact-us"}},[_vm._v(_vm._s(_vm.$t('contact')))])],1),_vm._ssrNode(" "),_c('header-right-side-bar-menu-language-english',{attrs:{"dropdowns":_vm.dropdowns},on:{"showMenu":_vm.showMenu,"closeMenu":_vm.closeMenu}})],2)],2)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header-right-side-bar.vue?vue&type=template&id=dee311a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var header_right_side_barvue_type_script_lang_js_ = ({
  name: 'RightSideBar',
  data() {
    return {
      isShowConsulting: false,
      isShowSearch: false,
      isLeftLevel1: false,
      isLeftLevel2: false,
      dropdowns: {
        search: false,
        about: false,
        consulting: false,
        consulting_sub_menu: {
          market_reports: false
        },
        bussiness_plans: false,
        bussiness_plans_sub_menu: {
          immigration_business_plans: false
        },
        financing: false,
        financing_sub_menu: {
          regulation_d: false,
          mergers_acquisitions: false,
          private_equity: false
        },
        legal_advisory: false,
        legal_advisory_sub_menu: {
          intellectual_property: false
        },
        technology: false,
        technology_sub_menu: {
          agile: false
        },
        industries: false,
        careers: false,
        careers_sub_menu: {
          explore_roles: false,
          meet_us: false,
          prepare_for_an_interview: false
        },
        market_data_reports: false,
        offices: false,
        offices_sub_menu: {
          califonia: false,
          texas: false,
          new_york: false,
          ohio: false,
          louisinia: false,
          florida: false,
          washington: false,
          marryland: false,
          north_carolina: false,
          tennessee: false,
          neveda: false,
          massachusetts: false,
          pennsylvania: false,
          illinois: false,
          indiana: false,
          georgia: false,
          arizona: false,
          michigan: false,
          colorado: false,
          oregon: false
        },
        language_english: false,
        language_english_sub_menu: {
          global: false,
          north_south_america: false,
          europe_middle_east_africa: false,
          asis_australia: false
        }
      },
      mainMenu: ['search', 'about', 'consulting', 'bussiness_plans', 'financing', 'legal_advisory', 'technology', 'industries', 'careers', 'market_data_reports', 'offices', 'language_english'],
      consultingSubmenu: ['market_reports'],
      bussinessPlansSubmenu: ['immigration_business_plans'],
      financingSubmenu: ['regulation_d', 'mergers_acquisitions', 'private_equity'],
      legalAdvisorySubmenu: ['intellectual_property'],
      technologySubmenu: ['agile'],
      officesSubmenu: ['califonia', 'texas', 'new_york', 'ohio', 'louisiana', 'florida', 'washington', 'maryland', 'north_carolina', 'tennessee', 'nevada', 'massachusetts', 'pennsylvania', 'illinois', 'indiana', 'georgia', 'arizona', 'michigan', 'colorado', 'oregon'],
      languageEnglishSubmenu: ['global', 'north_south_america', 'europe_middle_east_africa', 'asis_australia'],
      careersSubMenu: ['explore_roles', 'meet_us', 'prepare_for_an_interview']
    };
  },
  watch: {
    '$store.state.nav.open'(val) {
      if (val) {
        document.querySelector('html').classList.add('overflow-hidden');
      } else {
        document.querySelector('html').classList.remove('overflow-hidden');
      }
    }
  },
  mounted() {
    const fetchNavigationURLs = async () => {
      try {
        const data = await fetch(`${"https://strapi-stg.ventureplans.us"}/api/mobile-navigation-main?populate=deep,100`, {
          headers: {
            authorization: `Bearer ${"efa9034762f7be85984acf4643252ab6bf538955c059eb00b0c615f416fc2d5f96660f7e25d7601adf79a60c75042957e3de14e9af075898ff699de0258635eb4c9db7f75dad67be56ef8efde560a964ae15c07d8778dbcaa9bf0b72cb28e55d7fe3efbf52a9f12b88cc109d0f8dcfb9ecb17412d7d765a0a5fdedd409e072c1"}`
          }
        }).then(res => res.json());
        this.$store.dispatch('nav/formatMobileNavigation', data.data.attributes.navigations.data);
      } catch (err) {}
    };
    fetchNavigationURLs();
  },
  methods: {
    showMobileMenu(data, type, sub) {
      this.$store.dispatch('nav/resetAllMenu').then(() => {
        if (type === 'main') {
          this.$store.dispatch('nav/activeMobileDropdown', data);
          if (sub) {
            this.$store.dispatch('nav/activeMobileDropdown', sub);
          }
          this.$store.dispatch('nav/openLevelNavbar', 'level1');
        } else {
          this.$store.dispatch('nav/activeMobileDropdown', data);
          if (sub) {
            this.$store.dispatch('nav/activeMobileDropdown', sub);
          }
          this.$store.dispatch('nav/openLevelNavbar', 'level2');
        }
      });
    },
    hideMobileMenu(data, type, sub) {
      this.$store.dispatch('nav/resetAllMenu').then(() => {
        if (type === 'main') {
          this.$store.dispatch('nav/deactiveDropdown', data);
          this.$store.dispatch('nav/openLevelNavbar', 'all');
        } else {
          this.$store.dispatch('nav/deactiveDropdown', data);
          if (sub) {
            this.$store.dispatch('nav/activeMobileDropdown', sub);
          }
          this.$store.dispatch('nav/openLevelNavbar', 'level1');
        }
      });
    },
    showMenu(menu) {
      if (this.mainMenu.includes(menu)) {
        this.dropdowns[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.consultingSubmenu.includes(menu)) {
        this.dropdowns.consulting_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.bussinessPlansSubmenu.includes(menu)) {
        this.dropdowns.bussiness_plans_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.financingSubmenu.includes(menu)) {
        this.dropdowns.financing_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.legalAdvisorySubmenu.includes(menu)) {
        this.dropdowns.legal_advisory_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.technologySubmenu.includes(menu)) {
        this.dropdowns.technology_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.officesSubmenu.includes(menu)) {
        this.dropdowns.offices_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.languageEnglishSubmenu.includes(menu)) {
        this.dropdowns.language_english_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      } else if (this.careersSubMenu.includes(menu)) {
        this.dropdowns.careers_sub_menu[menu] = true;
        this.$store.dispatch('nav/openLevelNavbar', 'level2');
      }
      const element = document.querySelector('#menu-scroll-top');
      element.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    closeMenu(menu) {
      if (this.mainMenu.includes(menu)) {
        this.dropdowns[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'all');
      } else if (this.consultingSubmenu.includes(menu)) {
        this.dropdowns.consulting_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.bussinessPlansSubmenu.includes(menu)) {
        this.dropdowns.bussiness_plans_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.financingSubmenu.includes(menu)) {
        this.dropdowns.financing_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.legalAdvisorySubmenu.includes(menu)) {
        this.dropdowns.legal_advisory_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.technologySubmenu.includes(menu)) {
        this.dropdowns.technology_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.officesSubmenu.includes(menu)) {
        this.dropdowns.offices_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.languageEnglishSubmenu.includes(menu)) {
        this.dropdowns.language_english_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      } else if (this.careersSubMenu.includes(menu)) {
        this.dropdowns.careers_sub_menu[menu] = false;
        this.$store.dispatch('nav/openLevelNavbar', 'level1');
      }
      const element = document.querySelector('#menu-scroll-top');
      element.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/header/header-right-side-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_header_right_side_barvue_type_script_lang_js_ = (header_right_side_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header/header-right-side-bar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_header_right_side_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "42338c9f"
  
)

/* harmony default export */ var header_right_side_bar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsRightMenuArrow: __webpack_require__(24).default,HeaderRightSideBarMenuOffices: __webpack_require__(123).default,HeaderRightSideBarMenuLanguageEnglish: __webpack_require__(124).default})


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar-menu/header-right-side-bar-menu-offices.vue?vue&type=template&id=10d95ab2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_vm._ssrNode("<button aria-label=\"Offices\" class=\"rightmenu-link flex items-center justify-start gap-3 px-6 py-2 text-center\" data-v-10d95ab2>","</button>",[_vm._ssrNode("<p data-v-10d95ab2>Offices</p> "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],2),_vm._ssrNode(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.offices),expression:"dropdowns.offices"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('offices')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('nuxt-link',{staticClass:"px-6 text-[13px] font-semibold leading-4 text-black",attrs:{"to":"/cities"}},[_vm._v("Offices")]),_vm._v(" "),_c('ul',{staticClass:"mt-[19px] text-[13px] font-normal leading-4 text-black"},[_vm._l((_vm.usOffices),function(mainOff){return _c('li',{key:mainOff.id},[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"aria-label":mainOff.name},on:{"click":function($event){return _vm.showMenu(mainOff.id)}}},[_c('p',[_vm._v(_vm._s(mainOff.name))]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.offices_sub_menu[mainOff.id]),expression:"dropdowns.offices_sub_menu[mainOff.id]"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu(mainOff.id)}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v(_vm._s(mainOff.name))]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},_vm._l((mainOff.subLinks),function(subOff){return _c('li',{key:subOff.link},[_c('nuxt-link',{staticClass:"rightmenu-link flex items-center justify-start px-6 py-[10px] text-center",attrs:{"to":subOff.link},nativeOn:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_vm._v(_vm._s(subOff.name))])],1)}),0)])])])])],1)}),_vm._v(" "),_c('li',[_c('a',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"href":"/offices"}},[_c('p',[_vm._v("Show All Offices")])])])],2)],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-offices.vue?vue&type=template&id=10d95ab2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar-menu/header-right-side-bar-menu-offices.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var header_right_side_bar_menu_officesvue_type_script_lang_js_ = ({
  props: {
    dropdowns: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      usOffices: [{
        name: 'Califonia',
        link: '/cities/califonia',
        subLinks: [{
          name: 'Los Angeles',
          link: '/cities/los-angeles'
        }, {
          name: 'West Hollywood',
          link: '/cities/west-hollywood'
        }, {
          name: 'Beverly Hills',
          link: '/cities/beverly-hills'
        }, {
          name: 'San Francisco',
          link: '/cities/san-francisco'
        }, {
          name: 'Berkely',
          link: '/cities/berkely'
        }, {
          name: 'San Diego',
          link: '/cities/san-diego'
        }, {
          name: 'Cupertino',
          link: '/cities/cupertino'
        }, {
          name: 'San Jose',
          link: '/cities/san-jose'
        }],
        id: 'califonia'
      }, {
        name: 'Texas',
        link: '/cities/texas',
        subLinks: [{
          name: 'Austin',
          link: '/cities/austin'
        }, {
          name: 'Dallas',
          link: '/cities/dallas'
        }, {
          name: 'Houston',
          link: '/cities/houston'
        }, {
          name: 'San Antonio',
          link: '/cities/san-antonio'
        }],
        id: 'texas'
      }, {
        name: 'New York',
        link: '/cities/new-york',
        subLinks: [{
          name: 'Manhattan',
          link: '/cities/manhattan'
        }, {
          name: 'Buffalo',
          link: '/cities/buffalo'
        }, {
          name: 'Rochester',
          link: '/cities/rochester'
        }],
        id: 'new_york'
      }, {
        name: 'Ohio',
        link: '/cities/ohio',
        subLinks: [{
          name: 'Columbus',
          link: '/cities/columbus'
        }, {
          name: 'Cincinnati',
          link: '/cities/cincinnati'
        }, {
          name: 'Cleveland',
          link: '/cities/cleveland'
        }],
        id: 'ohio'
      }, {
        name: 'Louisiana',
        link: '/cities/louisiana',
        subLinks: [{
          name: 'New Orleans',
          link: '/cities/new-orleans'
        }, {
          name: 'Cincinnati',
          link: '/cities/cincinnati'
        }, {
          name: 'Cleveland',
          link: '/cities/cleveland'
        }],
        id: 'louisiana'
      }, {
        name: 'Florida',
        link: '/cities/florida',
        subLinks: [{
          name: 'Miami',
          link: '/cities/miami'
        }, {
          name: 'Tampa Bay',
          link: '/cities/tampa-bay'
        }],
        id: 'florida'
      }, {
        name: 'Washington',
        link: '/cities/washington',
        subLinks: [{
          name: 'Seattle',
          link: '/cities/seattle'
        }, {
          name: 'Tacoma',
          link: '/cities/tacoma'
        }],
        id: 'washington'
      }, {
        name: 'Maryland',
        link: '/cities/maryland',
        subLinks: [{
          name: 'Washington',
          link: '/cities/washington'
        }, {
          name: 'Baltimore',
          link: '/cities/baltimore'
        }],
        id: 'maryland'
      }, {
        name: 'North Carolina',
        link: '/cities/north-carolina',
        subLinks: [{
          name: 'Raleigh',
          link: '/cities/raleigh'
        }, {
          name: 'Charlotte',
          link: '/cities/charlotte'
        }],
        id: 'north_carolina'
      }, {
        name: 'Tennessee',
        link: '/cities/tennessee',
        subLinks: [{
          name: 'Nashville',
          link: '/cities/nashville'
        }],
        id: 'tennessee'
      }, {
        name: 'Nevada',
        link: '/cities/nevada',
        subLinks: [{
          name: 'Las Vegas',
          link: '/cities/las-vegas'
        }],
        id: 'nevada'
      }, {
        name: 'Massachusetts',
        link: '/cities/massachusetts',
        subLinks: [{
          name: 'Boston',
          link: '/cities/boston'
        }],
        id: 'massachusetts'
      }, {
        name: 'Pennsylvania',
        link: '/cities/pennsylvania',
        subLinks: [{
          name: 'Philadelphia',
          link: '/cities/philadelphia'
        }],
        id: 'pennsylvania'
      }, {
        name: 'Illinois',
        link: '/cities/illinois',
        subLinks: [{
          name: 'Chicago',
          link: '/cities/chicago'
        }],
        id: 'illinois'
      }, {
        name: 'Indiana',
        link: '/cities/indiana',
        subLinks: [{
          name: 'Indianapolis',
          link: '/cities/indianapolis'
        }],
        id: 'indiana'
      }, {
        name: 'Georgia',
        link: '/cities/georgia',
        subLinks: [{
          name: 'Atlanta',
          link: '/cities/atlanta'
        }],
        id: 'georgia'
      }, {
        name: 'Arizona',
        link: '/cities/arizona',
        subLinks: [{
          name: 'Phoenix',
          link: '/cities/phoenix'
        }],
        id: 'arizona'
      }, {
        name: 'Michigan',
        link: '/cities/michigan',
        subLinks: [{
          name: 'Detroit',
          link: '/cities/detroit'
        }],
        id: 'michigan'
      }, {
        name: 'Colorado',
        link: '/cities/colorado',
        subLinks: [{
          name: 'Denver',
          link: '/cities/denver'
        }],
        id: 'colorado'
      }, {
        name: 'Oregon',
        link: '/cities/oregon',
        subLinks: [{
          name: 'Portland',
          link: '/cities/portland'
        }],
        id: 'oregon'
      }]
    };
  },
  methods: {
    showMenu(menu) {
      this.$emit('showMenu', menu);
    },
    closeMenu(menu) {
      this.$emit('closeMenu', menu);
    }
  }
});
// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-offices.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_right_side_bar_menu_header_right_side_bar_menu_officesvue_type_script_lang_js_ = (header_right_side_bar_menu_officesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-offices.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_right_side_bar_menu_header_right_side_bar_menu_officesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10d95ab2",
  "60e50437"
  
)

/* harmony default export */ var header_right_side_bar_menu_offices = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsRightMenuArrow: __webpack_require__(24).default})


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar-menu/header-right-side-bar-menu-language-english.vue?vue&type=template&id=444f20be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_vm._ssrNode("<button aria-label=\"Language | English\" class=\"rightmenu-link group flex items-center justify-start gap-3 px-6 py-2 text-center text-black\" data-v-444f20be>","</button>",[_vm._ssrNode("<p class=\"[&>span]:text-black/30 [&>span]:group-hover:text-primary\" data-v-444f20be>Language <span data-v-444f20be>|</span> English</p> "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],2),_vm._ssrNode(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.language_english),expression:"dropdowns.language_english"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('language_english')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v("Select your region and language")]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},[_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"aria-label":"Global"},on:{"click":function($event){return _vm.showMenu('global')}}},[_c('p',[_vm._v("Global")]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.language_english_sub_menu.global),expression:"dropdowns.language_english_sub_menu.global"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('global')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v("Global")]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},[_c('li',{on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Global (English)"}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-global.png","alt":"Global (English)","loading":"lazy","width":"22","height":"15"}}),_vm._v(" "),_c('p',[_vm._v("Global (English)")])],1)])])])])])])],1),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"aria-label":"North & South America"},on:{"click":function($event){return _vm.showMenu('north_south_america')}}},[_c('p',[_vm._v("North & South America")]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.language_english_sub_menu.north_south_america),expression:"dropdowns.language_english_sub_menu.north_south_america"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('north_south_america')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v("North & South America")]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},[_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Brazil (Português)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/flag-brazil.png","alt":"Brazil (Português)","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("Brazil (Português)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Argentina (Español)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/flag-argentina.png","alt":"Argentina (Español)","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("Argentina (Español)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Chile (Español)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/flag-chile.png","alt":"Chile (Español)","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("Chile (Español)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Colombia (Español)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/flag-colombia.png","alt":"Colombia (Español)","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("Colombia (Español)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Canada"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/canada.jpg","alt":"Canada","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("Canada")])],1)])])])])])])],1),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"aria-label":"Europe, Middle East & Africa"},on:{"click":function($event){return _vm.showMenu('europe_middle_east_africa')}}},[_c('p',[_vm._v("Europe, Middle East & Africa")]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.language_english_sub_menu.europe_middle_east_africa),expression:"dropdowns.language_english_sub_menu.europe_middle_east_africa"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('europe_middle_east_africa')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v("Europe, Middle East & Africa")]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},[_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"France (Français)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/flag-france.png","alt":"France (Français)","loading":"lazy","width":"22","height":"15","quality":"100"}}),_vm._v(" "),_c('p',[_vm._v("France (Français)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Germany / Switzerland (Deutsch)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-germany.png","width":"22","height":"15","alt":"Germany","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Germany / Switzerland (Deutsch)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Italy (Italiano)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-italy.png","width":"22","height":"15","alt":"Italy","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Italy (Italiano)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Spain (Español)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-spain.png","width":"22","height":"15","alt":"Spain (Español)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Spain (Español)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Russia (Русский)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-russia.png","width":"22","height":"15","alt":"Russia (Русский)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Russia (Русский)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"England"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/uk.jpg","width":"22","height":"15","alt":"England","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("England")])],1)])])])])])])],1),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center",attrs:{"aria-label":"Asia & Australia"},on:{"click":function($event){return _vm.showMenu('asis_australia')}}},[_c('p',[_vm._v("Asia & Australia")]),_vm._v(" "),_c('icons-right-menu-arrow',{staticClass:"text-primary"})],1),_vm._v(" "),_c('Transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdowns.language_english_sub_menu.asis_australia),expression:"dropdowns.language_english_sub_menu.asis_australia"}],staticClass:"left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white"},[_c('div',{staticClass:"flex flex-col"},[_c('button',{staticClass:"text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary",attrs:{"aria-label":"Back"},on:{"click":function($event){return _vm.closeMenu('asis_australia')}}},[_c('icons-right-menu-arrow',{staticClass:"rotate-180"}),_vm._v(" "),_c('p',{staticClass:"text-[#BFBFBF]"},[_vm._v("Back")])],1),_vm._v(" "),_c('div',{staticClass:"mt-[22px]"},[_c('p',{staticClass:"px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black"},[_vm._v("Asia & Australia")]),_vm._v(" "),_c('ul',{staticClass:"text-[13px] font-normal leading-4 text-black"},[_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"China (中文版)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-chaina.png","width":"22","height":"15","alt":"China (中文版)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("China (中文版)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Korea (한국어)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-korea.png","width":"22","height":"15","alt":"Korea (한국어)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Korea (한국어)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Japan (日本語)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-japan.png","width":"22","height":"15","alt":"Japan (日本語)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Japan (日本語)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Taiwan (日本語)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-taiwan.png","width":"22","height":"15","alt":"Taiwan (日本語)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Taiwan (日本語)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Hong Kong (日本語)"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/flag-hongkong.png","width":"22","height":"15","alt":"Hong Kong (日本語)","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Hong Kong (日本語)")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Australia"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/australia.png","width":"22","height":"15","alt":"Australia","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Australia")])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center",attrs:{"aria-label":"Iran"},on:{"click":function($event){return _vm.$store.dispatch('nav/toggle')}}},[_c('nuxt-img',{staticClass:"w-[22px]",attrs:{"format":"webp","src":"/assets/img/iran.png","width":"22","height":"15","alt":"Iran","loading":"lazy"}}),_vm._v(" "),_c('p',[_vm._v("Iran")])],1)])])])])])])],1)])])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-language-english.vue?vue&type=template&id=444f20be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/header/header-right-side-bar-menu/header-right-side-bar-menu-language-english.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var header_right_side_bar_menu_language_englishvue_type_script_lang_js_ = ({
  props: {
    dropdowns: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    showMenu(menu) {
      this.$emit('showMenu', menu);
    },
    closeMenu(menu) {
      this.$emit('closeMenu', menu);
    }
  }
});
// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-language-english.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_right_side_bar_menu_header_right_side_bar_menu_language_englishvue_type_script_lang_js_ = (header_right_side_bar_menu_language_englishvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header/header-right-side-bar-menu/header-right-side-bar-menu-language-english.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_right_side_bar_menu_header_right_side_bar_menu_language_englishvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "444f20be",
  "6482af2b"
  
)

/* harmony default export */ var header_right_side_bar_menu_language_english = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsRightMenuArrow: __webpack_require__(24).default})


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/layout/layout-footer.vue?vue&type=template&id=76cf4568&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"bg-[#202A36] pb-7 pt-12"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-10 flex flex-col gap-10 sm:flex-row sm:justify-between xl:mb-[85px]\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":_vm.localePath('/')}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"129","height":"31","viewBox":"0 0 129 31"}},[_c('g',[_c('g',[_c('path',{attrs:{"fill":"#00ADFF","d":"M98.717 30.443V.353h29.406z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M4.788 12.648L0 .325h3.344l3.152 9.066L9.647.325h3.221l-4.84 12.323z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M17.22 2.79v2.446h5.88v2.465h-5.88v2.482h6.708v2.465h-9.841V.325h9.647V2.79z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M34.564 12.648l-5.67-7.588v7.588h-2.939V.325h2.764l5.686 7.605V.325h2.923v12.323z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M45.5 2.842v9.806h-3.133V2.842h-3.68V.307h10.528v2.535z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M61.646 7.473c0 3.256-2.166 5.316-5.616 5.316-3.468 0-5.686-2.06-5.686-5.316V.325h3.133v7.148c0 1.672 1.075 2.693 2.57 2.693 1.48 0 2.483-1.021 2.483-2.693V.325h3.116z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M67.037 6.715V2.79h2.376c1.356 0 2.148.652 2.148 1.937 0 1.303-.792 1.99-2.148 1.99zm4.295 5.933h3.556L72.3 8.58c1.444-.722 2.236-2.078 2.236-3.96 0-2.747-1.866-4.296-5.123-4.296h-5.51v12.323h3.134V9.18h2.465z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M79.786 2.79v2.446h5.88v2.465h-5.88v2.482h6.707v2.465h-9.841V.325h9.647V2.79z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M90.217.81v2.84h-.564V.81h-1.056V.304h2.68V.81z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M94.777 3.65l-.005-2.5-1.056 2.15h-.368l-1.056-2.15v2.5h-.53V.304h.668l1.105 2.222L94.634.304h.664V3.65z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M29.793 19.313h3.31c2.317 0 3.66.992 3.66 2.942 0 2.005-1.343 3.034-3.66 3.034h-3.31zm-1.471-1.416V30.77h1.47v-4.064h3.366c3.182 0 5.02-1.637 5.02-4.488 0-2.74-1.838-4.321-5.02-4.321z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M47.741 29.373v1.397h-7.117V17.897h1.471v11.476z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M57.8 26.099h-5.774l2.87-6.53zm.626 1.416l1.434 3.255h1.6l-5.756-12.873h-1.526L48.403 30.77h1.564l1.434-3.255z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M72.679 30.77l-7.724-10.336V30.77h-1.472V17.897h1.527l7.724 10.353V17.897h1.453V30.77z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"fill":"#fff","d":"M86.01 19.037l-.625 1.378a6.655 6.655 0 0 0-3.549-1.084c-1.654 0-2.74.625-2.74 1.71 0 3.31 7.246 1.581 7.228 6.253 0 2.152-1.895 3.531-4.653 3.531-1.876 0-3.715-.81-4.93-1.968l.664-1.324c1.194 1.159 2.831 1.82 4.284 1.82 1.858 0 3.016-.753 3.016-1.985.018-3.385-7.227-1.582-7.227-6.198 0-2.023 1.783-3.329 4.45-3.329 1.49 0 3.016.478 4.083 1.196z"}})])])])])],1),_vm._ssrNode(" <div class=\"block sm:hidden\"><a href=\"mailto:info@ventureplans.us\" class=\"flex items-center gap-2 text-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path> <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg> <p class=\"text-[15px] font-medium leading-[18px] text-primary\">Email Us</p></a></div> <div class=\"hidden sm:block\"><div class=\"flex items-center justify-start gap-6 sm:justify-end\"><a href=\"mailto:info@ventureplans.us\" class=\"flex items-center gap-2 text-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path> <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg> <p class=\"text-[15px] font-medium leading-[18px] text-primary\">Email Us</p></a> <a href=\"https://www.linkedin.com/company/31139649/\" aria-label=\"Linkedin\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#008cc3]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg></a> <a href=\"https://twitter.com/VenturePlans\" aria-label=\"Twitter\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#70c6ff]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg></a> <a href=\"https://www.facebook.com/ventureplans\" aria-label=\"Facebook\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#506cba]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-fa-i2svg class=\"w-3\"><path fill=\"currentColor\" d=\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\"></path></svg></a> <a href=\"https://www.youtube.com/channel/UC7S7GWpgiaFLt5nWeOgws4Q\" aria-label=\"Youtube\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#ef574a]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg></a> <a href=\"https://www.instagram.com/ventureplans/\" aria-label=\"Instagram\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#d34c7b]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg></a></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"lg:mt-24\">","</div>",[_vm._ssrNode("<div class=\"mb-[52px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-[60px] xl:gap-[248px]\">","</div>",[_vm._ssrNode("<div><p class=\"leading-6 text-white\">\n                        In a constantly changing world, remain ahead, join our mailing list <br class=\"hidden lg:block\">\n                        to get access to industry trends and market shifts.\n                    </p></div> "),_vm._ssrNode("<form id=\"footer-form\" action>","</form>",[_vm._ssrNode("<div class=\"flex items-center gap-2\"><div class=\"form-input-group w-full\"><input type=\"email\" placeholder=\"Your Email Address\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input flex-1 rounded-lg py-[15px] lg:max-w-[350px]",{ error: _vm.$v.params.email.$error }))+"></div> <button type=\"submit\" class=\"btn px-[36px] py-[14px] text-sm font-semibold leading-[19px] lg:leading-[22px]\">Submit</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex items-start gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[25px] text-white\"><span class=\"border-b-[2px] border-green text-green\">Congratulations,</span> you have joined our mailing list.</p>")],2):_vm._e()],2),_vm._ssrNode(" <div class=\"mt-3 block sm:hidden\"><div class=\"flex items-center justify-center gap-6\"><a href=\"https://www.linkedin.com/company/31139649/\" aria-label=\"Linkedin\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#008cc3]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg></a> <a href=\"https://twitter.com/VenturePlans\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#70c6ff]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg></a> <a href=\"https://www.facebook.com/ventureplans\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#506cba]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-fa-i2svg class=\"w-3\"><path fill=\"currentColor\" d=\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\"></path></svg></a> <a href=\"https://www.youtube.com/channel/UC7S7GWpgiaFLt5nWeOgws4Q\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#ef574a]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg></a> <a href=\"https://www.instagram.com/ventureplans/\" target=\"_blank\" class=\"w-full text-white transition-all duration-300 hover:text-[#d34c7b]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg class=\"w-5\"><path fill=\"currentColor\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg></a></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-10 lg:flex-row\">","</div>",[_vm._ssrNode("<div class=\"order-2 flex flex-1 items-center justify-start gap-6 lg:order-1\"><div class=\"text-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"30\" viewBox=\"0 0 24 30\" class=\"mx-auto\"><g><g><path fill=\"#707070\" d=\"M10.341 21.087v2.977h2.594v-2.977a2.606 2.606 0 0 0 1.296-2.253c0-1.444-1.162-2.616-2.594-2.616-1.43 0-2.593 1.172-2.593 2.616 0 .965.524 1.8 1.296 2.253zm10.37 4.285c0 .721-.58 1.308-1.295 1.308H3.859a1.303 1.303 0 0 1-1.296-1.308V13.604h18.15v11.768zM5.156 5.758s1.296-2.615 6.482-2.615c5.187 0 6.483 2.615 6.483 2.615v5.23H5.156v-5.23zm15.557 5.23V7.065c0-2.615-2.593-6.538-9.075-6.538-6.48 0-9.074 3.923-9.074 6.538v3.923H-.03v14.384c0 2.163 1.745 3.923 3.89 3.923h15.556c2.144 0 3.889-1.76 3.889-3.923V10.988z\"></path></g></g></svg> <p class=\"text-[11px] font-bold leading-[13px] text-primary\">Secure</p> <p class=\"text-[6px] font-normal leading-[13px] text-primary\">SSL ENCRYPTION</p></div> <p class=\"text-[15px] font-medium leading-[18px] text-white/50\">© 2010 - 2023 Venture Plans, Inc.</p></div> "),_vm._ssrNode("<div class=\"order-1 flex-none lg:order-2\">","</div>",[_vm._ssrNode("<ul class=\"flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium leading-[25px] -tracking-[0.03px] text-white/50 md:text-[14px]\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/offices"}},[_vm._v("Offices")])],1),_vm._ssrNode(" <li><button aria-label=\"Cookies Policy\" class=\"transition-all duration-300 hover:text-white\">Cookies Policy</button></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/refund-policy"}},[_vm._v("Refund Policy")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/subscribe"}},[_vm._v("Subscribe")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/privacy-policy"}},[_vm._v("Privacy")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/terms-and-conditions"}},[_vm._v("Terms & Conditions")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":"/contact-us"}},[_vm._v("Contact")])],1)],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/layout-footer.vue?vue&type=template&id=76cf4568&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/layout/layout-footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var layout_footervue_type_script_lang_js_ = ({
  data() {
    return {
      isSubmitted: false,
      params: {
        email: ''
      }
    };
  },
  validations() {
    return {
      params: {
        email: {
          required: validators_["required"],
          email: validators_["email"]
        }
      }
    };
  },
  watch: {
    $route(to, from) {
      this.isSubmitted = false;
    }
  },
  methods: {
    async onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      const data = await this.$hubspot.subscribeForm(this.params);
      if (!data) {
        return false;
      }
      this.isSubmitted = true;
      this.$v.params.$reset();
      this.params = {
        email: ''
      };
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        easing: 'linear'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/layout/layout-footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_layout_footervue_type_script_lang_js_ = (layout_footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/layout/layout-footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_layout_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2502e02c"
  
)

/* harmony default export */ var layout_footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsCheckCircle: __webpack_require__(69).default})


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-topmenuarrow.vue?vue&type=template&id=c1dc6c32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"8","height":"7","viewBox":"0 0 8 7"}},[_vm._ssrNode("<g><g transform=\"rotate(-180 4 3.5)\"><path fill=\"currentColor\" d=\"M4.176.469L7.53 6.341H.82z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-topmenuarrow.vue?vue&type=template&id=c1dc6c32&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-topmenuarrow.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f4becea"
  
)

/* harmony default export */ var icons_topmenuarrow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-close-menu.vue?vue&type=template&id=0c2e4001&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"10","height":"10","viewBox":"0 0 10 10"}},[_vm._ssrNode("<g><g><g><path fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"20\" stroke-width=\"2\" d=\"M.982 9.011L8.79 1.204\"></path></g> <g transform=\"rotate(90 5 5)\"><path fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"20\" stroke-width=\"2\" d=\"M.982 9.01L8.79 1.205\"></path></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-close-menu.vue?vue&type=template&id=0c2e4001&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-close-menu.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44537469"
  
)

/* harmony default export */ var icons_close_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-hamburger.vue?vue&type=template&id=007ce7b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"14","viewBox":"0 0 20 14"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M.836 2.519h17.835c.46 0 .836-.567.836-1.26C19.507.568 19.13 0 18.67 0H.836C.376 0 0 .567 0 1.26c0 .692.376 1.259.836 1.259z\"></path></g> <g><path fill=\"currentColor\" d=\"M.836 8.148h17.835c.46 0 .836-.567.836-1.26 0-.692-.377-1.259-.836-1.259H.836C.376 5.63 0 6.196 0 6.89c0 .692.376 1.259.836 1.259z\"></path></g> <g><path fill=\"currentColor\" d=\"M.836 13.776h17.835c.46 0 .836-.566.836-1.259 0-.692-.377-1.26-.836-1.26H.836c-.46 0-.836.568-.836 1.26 0 .693.376 1.26.836 1.26z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-hamburger.vue?vue&type=template&id=007ce7b6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-hamburger.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4dca3a78"
  
)

/* harmony default export */ var icons_hamburger = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("vue-click-outside");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map