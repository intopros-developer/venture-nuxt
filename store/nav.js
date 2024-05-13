export const state = () => ({
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
        language: false,
    },
    searchModeOn: false,
    desktopNavbar: [
        {
            name: 'About',
            url: '/about-us',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'About',
                    url: '/about-us',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-3',
                    navChildItems: [
                        [
                            {
                                name: 'What We Do',
                                url: '/about-us/what-we-do',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Our Team',
                                url: '/about-us/our-team',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Our Leadership',
                                url: '/about-us/our-leadership',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Founder’s Bio',
                                url: '/about-us/founders-bio',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
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
                        */
                    ],
                },
            ],
        },
        {
            name: 'Consulting',
            url: '/consulting',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Consulting',
                    url: '/consulting',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-5',
                    childClass: '',
                    navChildItems: [
                        [
                            {
                                name: 'Management Consulting',
                                url: '/consulting/management-consulting',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Restructuring Operations',
                                url: '/consulting/restructuring-operations',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Digital Marketing',
                                url: '/consulting/digital-marketing',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Revenue Growth',
                                url: '/consulting/revenue-growth',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Agile Implementation',
                                url: '/consulting/agile-implementation',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Transformation Modification & Integration',
                                url: '/consulting/transformation-modification-and-integration',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Customer Experience',
                                url: '/consulting/customer-experience',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Financial Advisory',
                                url: '/consulting/financial-advisory',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Strategy',
                                url: '/consulting/strategy',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Human Resources',
                                url: '/consulting/human-resources',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Industries',
                                url: '/consulting/industries',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Cannabis Licensing and Application Support',
                                url: '/consulting/cannabis-licensing-and-application-support',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'New Start-Up Technology',
                                url: '/consulting/new-start-up-technology',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
                {
                    name: 'Business Plans',
                    url: '/consulting/business-plans',
                    isOpened: false,
                    class: 'col-6',
                    strapiId: '',
                    mainClass: 'col-span-9',
                    subClass: 'grid grid-cols-4',
                    childClass: 'w-1/4',
                    navChildItems: [
                        [
                            {
                                name: 'Investor Business Plans',
                                url: '/consulting/business-plans/investor-business-plans',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Immigration Business Plans',
                                url: '/consulting/business-plans/immigration-business-plans',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'E-2 Business Plans',
                                        url: '/consulting/business-plans/e-2-business-plans',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'E-B1 Business Plans',
                                        url: '/consulting/business-plans/e-b1-business-plans',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'E-B5 Business Plans',
                                        url: '/consulting/business-plans/e-b5-business-plans',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'L-1A & L-1B Business Plans',
                                        url: '/consulting/business-plans/l-1a-and-l-1b-business-plans',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'SBA Lender Business Plans',
                                url: '/consulting/business-plans/sba-lender-business-plans',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Marketing Plan',
                                url: '/consulting/business-plans/marketing-plan',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Restructuring Business Plan',
                                url: '/consulting/business-plans/restructuring-business-plan',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Franchising Plan',
                                url: '/consulting/business-plans/franchising-plan',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Cannabis Business Plan',
                                url: '/consulting/business-plans/cannabis-business-plan',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Request For Proposal',
                                url: '/consulting/business-plans/request-for-proposal',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Grant Business Plans',
                                url: '/consulting/business-plans/grant-business-plans',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Investor Pitch Deck',
                                url: '/consulting/business-plans/investor-pitch-deck',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Financial Proforma',
                                url: '/consulting/business-plans/financial-performa',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'White Paper',
                                url: '/consulting/business-plans/white-papers',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Prospectus',
                                url: '/consulting/business-plans/prospectus',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
                {
                    name: 'Market Data Reports',
                    url: '/market-data-plans',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-3',
                    subClass: 'grid grid-cols-1',
                    childClass: 'w-1/4',
                    navChildItems: [
                        [
                            {
                                name: 'Data Industry Reports',
                                url: '/consulting/market-data-plans/data-industry-reports',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Feasibility Reports',
                                url: '/consulting/market-data-plans/feasibility-reports',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'ETF & Stock Market Reports',
                                url: '/consulting/market-data-plans/etf-and-stock-market-reports',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'COVID-19 Market Reports',
                                url: '/consulting/market-data-plans/covid-19-market-reports',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: 'Financing',
            url: '/financing',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Financing',
                    url: '/financing',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-3',
                    childClass: 'w-1/4',
                    navChildItems: [
                        [
                            {
                                name: 'Private Placements',
                                url: '/financing/private-placements',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Debt Financing',
                                url: '/financing/debt-financing',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Initial Public Offering',
                                url: '/financing/initial-public-offering',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Pre IPO',
                                url: '/financing/pre-ipo',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Special Purpose Entity',
                                url: '/financing/special-purpose-entity',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Crowdfunding',
                                url: '/financing/crowdfunding',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Invest',
                                url: '/financing/invest',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Regulation D',
                                url: '/financing/regulation-d',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Reg A+',
                                        url: '/financing/regulation-d/reg-a+',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: '506 (B) Relationship Investors',
                                        url: '/financing/regulation-d/506-b-relationship-investors',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: '506 (C) Accredited Investors',
                                        url: '/financing/regulation-d/506-c-accredited-investors',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                            {
                                name: 'Private Placement Memorandum',
                                url: '/financing/private-placement-memorandum',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Private Equity',
                                url: '/financing/private-equity',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Leveraged Buyout (LBO)',
                                        url: '/financing/private-equity/leverage-buyout',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Hedge Fund',
                                        url: '/financing/private-equity/hedge-fund',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Venture Capital Fund',
                                        url: '/financing/private-equity/venture-capital-fund',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Growth Capital',
                                        url: '/financing/private-equity/growth-capital',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Real Estate',
                                        url: '/financing/private-equity/real-estate',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Infrastructure',
                                        url: '/financing/private-equity/infrastructure',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Funds of Funds',
                                        url: '/financing/private-equity/funds-of-funds',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Mezzanine Capital',
                                        url: '/financing/private-equity/mezzanine-capital',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Distressed Private Equity',
                                        url: '/financing/private-equity/distressed-private-equity',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Secondary Fund',
                                        url: '/financing/private-equity/seconday-fund',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'Mergers & Acquisitions',
                                url: '/financing/mergers-and-acquisitions',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Post Merger Integration',
                                        url: '/financing/mergers-and-acquisitions/post-merger-inegration',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Divestitures',
                                        url: '/financing/mergers-and-acquisitions/divestitures',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                            {
                                name: 'Mergers & Acquisitions',
                                url: '/financing/mergers-and-acquisitions',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Post Merger Integration',
                                        url: '/financing/mergers-and-acquisitions/post-merger-inegration',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Divestitures',
                                        url: '/financing/mergers-and-acquisitions/divestitures',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                            {
                                name: 'Due Diligence Certification',
                                url: '/financing/due-diligence-certification',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Regulation S Offshore Offering',
                                url: '/financing/regulation-s-offshore-offering',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Investment Portfolio Management',
                                url: '/financing/investment-portfolio-management',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Forensic Accounting',
                                url: '/financing/forensic-accounting',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Real Estate Investment Trust Fund',
                                url: 'financing/real-estate-investment-trust-fund',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Securitization',
                                url: '/financing/securitization',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: 'Technology',
            url: '/technology',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Technology',
                    url: '/technology',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-2',
                    childClass: '',
                    navChildItems: [
                        [
                            {
                                name: 'Agile',
                                url: '/technology/agile',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Software Budgeting and Financials',
                                        url: '/technology/agile/software-budgeting-and-financials',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Prototypes',
                                        url: '/technology/agile/prototypes',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Backlog Feature Implementation',
                                        url: '/technology/agile/backlog-feature-implementation',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Functional Specification',
                                        url: '/technology/agile/functional-specification',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'Custom Design and Build',
                                url: '/technology/custom-design-and-build',
                                isOpened: false,
                                class: 'row-span-full',
                                strapiId: '',
                            },
                            {
                                name: 'Agile Implementation',
                                url: '/technology/agile-implementation',
                                isOpened: false,
                                strapiId: '',
                            },
                            {
                                name: 'Data Analytics Implementation',
                                url: '/technology/data-analytics-implementation',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: 'Legal',
            url: '/legal-advisory',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Legal',
                    url: '/legal-advisory',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-4',
                    childClass: 'w-1/4',
                    navChildItems: [
                        [
                            {
                                name: 'Intellectual Property',
                                url: '/legal-advisory/intellectual-property',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Utility Patent',
                                        url: '/legal-advisory/intellectual-property/utility-patent',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Design Patent',
                                        url: '/legal-advisory/intellectual-property/design-patent',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Plant Patent',
                                        url: '/legal-advisory/intellectual-property/plant-patent',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Provisional and Non Provisional',
                                        url: '/legal-advisory/intellectual-property/provisional-and-non-provisional',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'Trademark',
                                url: '/legal-advisory/trademark',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Copyright',
                                url: '/legal-advisory/copyright',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Convertible Note(s)',
                                url: '/legal-advisory/convertible-notes',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Chapter 11 Bankruptcy',
                                url: '/legal-advisory/chapter-11-bankruptcy',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Commodity & Futures Contract',
                                url: '/legal-advisory/commodity-and-futures-contract',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Initial Public Offering',
                                url: '/legal-advisory/initial-public-offering',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Private Placement Memorandum',
                                url: '/legal-advisory/private-place-memorandum',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Mergers & Acquisitions',
                                url: '/legal-advisory/mergers-and-acquisitions',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                        [
                            {
                                name: 'Securities Arbitration',
                                url: '/legal-advisory/securities-arbitration',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Offering Memorandum (Canada)',
                                url: '/legal-advisory/offering-memorandum-canada',
                                isOpened: false,
                                strapiId: '',
                            },

                            {
                                name: 'Legal Entity Structuring',
                                url: '/legal-advisory/legal-entity-structuring',
                                isOpened: false,
                                strapiId: '',
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: 'Careers',
            url: '/careers',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Careers',
                    url: '/careers',
                    isOpened: false,
                    strapiId: '',
                    mainClass: 'col-span-full',
                    subClass: 'grid grid-cols-3',
                    childClass: 'w-1/3',
                    navChildItems: [
                        [
                            {
                                name: 'Explore Roles',
                                url: '/careers/explore-roles',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Associate Consultant Intern',
                                        url: '/careers/explore-roles/associate-consultant-intern',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Associate Consultant',
                                        url: '/careers/explore-roles/associate-consultant',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Summer Associate',
                                        url: '/careers/explore-roles/summer-associate',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Consultant',
                                        url: '/careers/explore-roles/consultant',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Advanced Degree Holders',
                                        url: '/careers/explore-roles/advanced-degree-holders',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Working Professionals',
                                        url: '/careers/explore-roles/working-professionals',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Analytics and Customer Insights',
                                        url: '/careers/explore-roles/analytics-and-customer-insights',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Digital & Innovation',
                                        url: '/careers/explore-roles/digital-and-innovation',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Business Services',
                                        url: '/careers/explore-roles/business-services',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'Meet Us',
                                url: '/careers/meet-us',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'At an Event',
                                        url: '/careers/meet-us/at-an-event',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Our People',
                                        url: '/careers/meet-us/our-people',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                        [
                            {
                                name: 'Prepare for an Interview',
                                url: '/careers/prepare-for-an-interview',
                                isOpened: false,
                                strapiId: '',
                                navChildItems: [
                                    {
                                        name: 'Case Interview',
                                        url: '/careers/prepare-for-an-interview/case-interview',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Experience Interview',
                                        url: '/careers/prepare-for-an-interview/experience-interview',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                    {
                                        name: 'Other Interview Formats',
                                        url: '/careers/prepare-for-an-interview/other-interview-formats',
                                        isOpened: false,
                                        strapiId: '',
                                    },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
    ],

    mobileNavbar: [
        {
            name: 'About',
            url: '/about-us',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'What We Do',
                    url: '/about-us/what-we-do',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Our Team',
                    url: '/about-us/our-team',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Our Leadership',
                    url: '/about-us/our-leadership',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: "Founder's Bio",
                    url: '/about-us/founders-bio',
                    isOpened: false,
                    strapiId: '',
                },
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
                */
            ],
        },
        {
            name: 'Consulting',
            url: '/consulting',
            isOpened: false,
            strapiId: '',
            class: 'col-12',
            navChildItems: [
                {
                    name: 'Management Consulting',
                    url: '/consulting/management-consulting',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Restructuring Operations',
                    url: '/consulting/restructuring-operations',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Digital Marketing',
                    url: '/consulting/digital-marketing',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Revenue Growth',
                    url: '/consulting/revenue-growth',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Agile Implementation',
                    url: '/consulting/agile-implementation',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Transformation Modification & Integration',
                    url: '/consulting/transformation-modification-and-integration',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Customer Experience',
                    url: '/consulting/customer-experience',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Financial Advisory',
                    url: '/consulting/financial-advisory',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Strategy',
                    url: '/consulting/strategy',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Human Resources',
                    url: '/consulting/human-resources',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Industries',
                    url: '/consulting/industries',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Cannabis Licensing and Application Support',
                    url: '/consulting/cannabis-licensing-and-application-support',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'New Start-Up Technology',
                    url: '/consulting/new-start-up-technology',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Business Plans',
            url: '/consulting/business-plans',
            isOpened: false,
            class: 'col-6',
            strapiId: '',
            navChildItems: [
                {
                    name: 'Investor Business Plans',
                    url: '/consulting/business-plans/investor-business-plans',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Immigration Business Plans',
                    url: '/consulting/business-plans/immigration-business-plans',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'E-2 Business Plans',
                            url: '/consulting/business-plans/e-2-business-plans',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'E-B1 Business Plans',
                            url: '/consulting/business-plans/e-b1-business-plans',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'E-B5 Business Plans',
                            url: '/consulting/business-plans/e-b5-business-plans',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'L-1A & L-1B Business Plans',
                            url: '/consulting/business-plans/l-1a-and-l-1b-business-plans',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'SBA Lender Business Plans',
                    url: '/consulting/business-plans/sba-lender-business-plans',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Marketing Plan',
                    url: '/consulting/business-plans/marketing-plan',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Restructuring Business Plan',
                    url: '/consulting/business-plans/restructuring-business-plan',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Franchising Plan',
                    url: '/consulting/business-plans/franchising-plan',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Cannabis Business Plan',
                    url: '/consulting/business-plans/cannabis-business-plan',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Request For Proposal',
                    url: '/consulting/business-plans/request-for-proposal',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Grant Business Plans',
                    url: '/consulting/business-plans/grant-business-plans',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Investor Pitch Deck',
                    url: '/consulting/business-plans/investor-pitch-deck',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Financial Proforma',
                    url: '/consulting/business-plans/financial-performa',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Prospectus',
                    url: '/consulting/business-plans/prospectus',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'White Paper',
                    url: '/consulting/business-plans/white-papers',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Financing',
            url: '/financing',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Private Placements',
                    url: '/financing/private-placements',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Due Diligence Certification',
                    url: '/financing/due-diligence-certification',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Debt Financing',
                    url: '/financing/debt-financing',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Initial Public Offering',
                    url: '/financing/initial-public-offering',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Pre IPO',
                    url: '/financing/pre-ipo',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Special Purpose Entity',
                    url: '/financing/special-purpose-entity',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Crowdfunding',
                    url: '/financing/crowdfunding',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Invest',
                    url: '/financing/invest',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Regulation D',
                    url: '/financing/regulation-d',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Reg A+',
                            url: '/financing/regulation-d/reg-a+',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: '506 (B) Relationship Investors',
                            url: '/financing/regulation-d/506-b-relationship-investors',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: '506 (C) Accredited Investors',
                            url: '/financing/regulation-d/506-c-accredited-investors',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Private Placement Memorandum',
                    url: '/financing/private-placement-memorandum',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Private Equity',
                    url: '/financing/private-equity',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Leveraged Buyout (LBO)',
                            url: '/financing/private-equity/leverage-buyout',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Hedge Fund',
                            url: '/financing/private-equity/hedge-fund',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Venture Capital Fund',
                            url: '/financing/private-equity/venture-capital-fund',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Growth Capital',
                            url: '/financing/private-equity/growth-capital',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Real Estate',
                            url: '/financing/private-equity/real-estate',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Infrastructure',
                            url: '/financing/private-equity/infrastructure',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Funds of Funds',
                            url: '/financing/private-equity/funds-of-funds',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Mezzanine Capital',
                            url: '/financing/private-equity/mezzanine-capital',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Distressed Private Equity',
                            url: '/financing/private-equity/distressed-private-equity',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Secondary Fund',
                            url: '/financing/private-equity/seconday-fund',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Mergers & Acquisitions',
                    url: '/financing/mergers-and-acquisitions',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Post Merger Integration',
                            url: '/financing/mergers-and-acquisitions/post-merger-inegration',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Divestitures',
                            url: '/financing/mergers-and-acquisitions/Divestitures',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Due Diligence Certification',
                    url: '/financing/due-diligence-certification',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Regulation S Offshore Offering',
                    url: '/financing/regulation-s-offshore-offering',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Investment Portfolio Management',
                    url: '/financing/investment-portfolio-management',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Forensic Accounting',
                    url: '/financing/forensic-accounting',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Real Estate Investment Trust Fund',
                    url: '/financing/real-estate-investment-trust-fund',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Securitization',
                    url: '/financing/securitization',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Legal',
            url: '/legal-advisory',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Intellectual Property',
                    url: '/legal-advisory/intellectual-property',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Utility Patent',
                            url: '/legal-advisory/intellectual-property/utility-patent',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Design Patent',
                            url: '/legal-advisory/intellectual-property/design-patent',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Plant Patent',
                            url: '/legal-advisory/intellectual-property/plant-patent',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Provisional and Non Provisional',
                            url: '/legal-advisory/intellectual-property/provisional-and-non-provisional',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Trademark',
                    url: '/legal-advisory/trademark',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Copyright',
                    url: '/legal-advisory/copyright',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Convertible Note(s)',
                    url: '/legal-advisory/convertible-notes',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Chapter 11 Bankruptcy',
                    url: '/legal-advisory/chapter-11-bankruptcy',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Commodity & Futures Contract',
                    url: '/legal-advisory/commodity-and-futures-contract',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Initial Public Offering',
                    url: '/legal-advisory/initial-public-offering',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Private Placement Memorandum',
                    url: '/legal-advisory/private-place-memorandum',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Mergers & Acquisitions',
                    url: '/legal-advisory/mergers-and-acquisitions',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Securities Arbitration',
                    url: '/legal-advisory/securities-arbitration',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Offering Memorandum (Canada)',
                    url: '/legal-advisory/offering-memorandum-canada',
                    isOpened: false,
                    strapiId: '',
                },

                {
                    name: 'Legal Entity Structuring',
                    url: '/legal-advisory/legal-entity-structuring',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Technology',
            url: '/technology',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Agile',
                    url: '/technology/agile',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Software Budgeting and Financials',
                            url: '/technology/agile/software-budgeting-and-financials',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Prototypes',
                            url: '/technology/agile/prototypes',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Backlog Feature Implementation',
                            url: '/technology/agile/backlog-feature-implementation',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Functional Specification',
                            url: '/technology/agile/functional-specification',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Custom Design and Build',
                    url: '/technology/custom-design-and-build',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Agile Implementation',
                    url: '/technology/agile-implementation',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Data Analytics Implementation',
                    url: '/technology/data-analytics-implementation',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Industries',
            url: '/insights',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Advanced Manufacturing and Services',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Agribusiness',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Artificial Intelligence',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Automotive and Mobility',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Aviation',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Big Data Analytics',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Chemicals',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Cloud Computing',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Cybersecurity',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Consumer Products',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Financial Services',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Healthcare',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Infrastructure, Construction and Building Products',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Machinery and Equipment',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Media and Entertainment',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Oil and Gas',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Private Equity',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Retail',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Social and Public Sectors',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Technology',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Telecommunications',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Trade',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Transportation',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Utilities and Renewables',
                    url: '/insights',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
        {
            name: 'Careers',
            url: '/careers',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Explore Roles',
                    url: '/careers/explore-roles',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Associate Consultant Intern',
                            url: '/careers/explore-roles/associate-consultant-intern',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Associate Consultant',
                            url: '/careers/explore-roles/associate-consultant',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Summer Associate',
                            url: '/careers/explore-roles/summer-associate',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Consultant',
                            url: '/careers/explore-roles/consultant',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Advanced Degree Holders',
                            url: '/careers/explore-roles/advanced-degree-holders',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Working Professionals',
                            url: '/careers/explore-roles/working-professionals',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Analytics and Customer Insights',
                            url: '/careers/explore-roles/analytics-and-customer-insights',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Digital & Innovation',
                            url: '/careers/explore-roles/digital-and-innovation',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Business Services',
                            url: '/careers/explore-roles/business-services',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Meet Us',
                    url: '/careers/meet-us',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'At an Event',
                            url: '/careers/meet-us/at-an-event',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Our People',
                            url: '/careers/meet-us/our-people',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
                {
                    name: 'Prepare for an Interview',
                    url: '/careers/prepare-for-an-interview',
                    isOpened: false,
                    strapiId: '',
                    navChildItems: [
                        {
                            name: 'Case Interview',
                            url: '/careers/prepare-for-an-interview/case-interview',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Experience Interview',
                            url: '/careers/prepare-for-an-interview/experience-interview',
                            isOpened: false,
                            strapiId: '',
                        },
                        {
                            name: 'Other Interview Formats',
                            url: '/careers/prepare-for-an-interview/other-interview-formats',
                            isOpened: false,
                            strapiId: '',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Market Data Plans',
            url: '/consulting/market-data-plans',
            class: 'col-6',
            isOpened: false,
            strapiId: '',
            navChildItems: [
                {
                    name: 'Data Industry Reports',
                    url: '/consulting/market-data-plans/data-industry-reports',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'Feasibility Reports',
                    url: '/consulting/market-data-plans/feasibility-reports',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'ETF & Stock Market Reports',
                    url: '/consulting/market-data-plans/etf-and-stock-market-reports',
                    isOpened: false,
                    strapiId: '',
                },
                {
                    name: 'COVID-19 Market Reports',
                    url: '/consulting/market-data-plans/covid-19-market-reports',
                    isOpened: false,
                    strapiId: '',
                },
            ],
        },
    ],
    industries: [
        {
            id: 7,
            attributes: {
                createdAt: '2023-08-18T15:40:11.142Z',
                updatedAt: '2023-08-18T15:40:21.604Z',
                publishedAt: '2023-08-18T15:40:21.600Z',
                name: 'about-first-col',
                collections: {
                    data: [
                        {
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
                                                        publishedAt: '2023-07-19T04:53:40.820Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                        {
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
                                                        publishedAt: '2023-07-19T04:53:40.820Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                        {
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
                                                        publishedAt: '2023-07-19T04:53:40.820Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                        {
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
                                                        publishedAt: '2023-07-19T04:55:44.038Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                    ],
                },
            },
        },
        {
            id: 6,
            attributes: {
                createdAt: '2023-08-10T04:03:58.430Z',
                updatedAt: '2023-08-19T02:50:51.223Z',
                publishedAt: '2023-08-10T04:04:05.787Z',
                name: 'consulting-fifth-col',
                collections: {
                    data: [
                        {
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
                                                        publishedAt: '2023-07-19T04:49:38.774Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                        {
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
                                                        publishedAt: '2023-07-19T04:51:00.493Z',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                navChildItems: {
                                    data: [],
                                },
                            },
                        },
                    ],
                },
            },
        },
    ],
    currentMobileLevel1URL: '',
    currentMobileLevel2URL: '',
    delayCloseDropdownMenu: null,
    forceUpdateVideo: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
});

export const mutations = {
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
            language: false,
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
            language: false,
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
        payload.forEach((load) => {
            state.desktopNavbar.push(load);
        });
    },
    CHANGE_INDUSTRIES_NAV(state, payload) {
        state.industries.splice(0);
        payload.forEach((load) => {
            state.industries.push(load);
        });
    },
    CHANGE_MOBILE_NAV(state, payload) {
        state.mobileNavbar.splice(0);
        payload.forEach((load) => {
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
    },
};

export const actions = {
    openLevelNavbar({ state, commit }, type) {
        if (type === 'level1') {
            commit('OPEN_LEVEL_1_SIDEBAR');
        } else if (type === 'level2') {
            commit('OPEN_LEVEL_2_SIDEBAR');
        } else {
            commit('CLOSE_ALL_SIDEBAR_LEVEL');
        }
    },

    resetAllMenu({ commit }) {
        commit('RESET_ALL_MENU');
    },
    resetAllDesktopMenu({ commit }) {
        commit('DISABLE_ALL_DESKTOP_MENU');
    },

    findBaseURL({ state, commit }, url) {
        // console.log(url);
        // console.log(state.desktopNav);
    },

    toggle({ commit }) {
        commit('TOGGLE');
        commit('RESET_ALL_MENU');
    },

    toggleMenubarSearch({ commit }) {
        commit('TOGGLE_MENUBAR_SEARCH');
    },

    activeMobileDropdown({ state, commit }, dropdown) {
        commit('ACTIVE_DESKTOP_DROPDOWN', dropdown);
    },

    formatMobileNavigation({ state, commit }, navigations) {
        const mobileNav = [];
        for (let l0 = 0; l0 < navigations.length; l0++) {
            let l0Push = {};
            if (!navigations[l0]?.attributes?.base_url?.data?.attributes) {
                continue;
            }
            l0Push = navigations[l0]?.attributes?.base_url?.data?.attributes;
            if (!(navigations[l0]?.attributes?.navChildItems?.data && navigations[l0]?.attributes?.navChildItems?.data.length > 0)) {
                continue;
            }
            let l0NavItems = [];
            for (let l1Obj of navigations[l0]?.attributes?.navChildItems?.data) {
                let l1Push = {};
                if (!l1Obj?.attributes?.base_url?.data?.attributes) {
                    continue;
                }
                l1Push = l1Obj?.attributes?.base_url?.data?.attributes;
                let l1NavItems = [];
                if (l1Obj?.attributes?.navChildItems?.data && l1Obj?.attributes?.navChildItems?.data.length > 0) {
                    for (let l2ArrObj of l1Obj?.attributes?.navChildItems?.data) {
                        l1NavItems.push(l2ArrObj?.attributes?.base_url?.data?.attributes);
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

    formatIndustriesNavigation({ state, commit }, navigations) {
        commit('CHANGE_INDUSTRIES_NAV', navigations);
    },

    formatDesktopNavigation({ state, commit }, navigations) {
        const desktopNav = [];
        for (let l0 = 0; l0 < navigations.length; l0++) {
            let l0Push = {};
            if (!navigations[l0]?.attributes?.base_url?.data?.attributes) {
                continue;
            }
            l0Push = navigations[l0]?.attributes?.base_url?.data?.attributes;
            if (!(navigations[l0]?.attributes?.navChildItems?.data && navigations[l0]?.attributes?.navChildItems?.data.length > 0)) {
                continue;
            }
            let l0NavItems = [];
            for (let l1Obj of navigations[l0]?.attributes?.navChildItems?.data) {
                let l1Push = {};
                if (!l1Obj?.attributes?.base_url?.data?.attributes) {
                    continue;
                }
                l1Push = l1Obj?.attributes?.base_url?.data?.attributes;
                l1Push.mainClass = l1Obj?.attributes?.mainClass;
                l1Push.subClass = l1Obj?.attributes?.subClass;
                if (!(l1Obj?.attributes?.navChildItems?.data && l1Obj?.attributes?.navChildItems?.data.length > 0)) {
                    continue;
                }
                let l1NavItems = [];
                for (let l2ArrObj of l1Obj?.attributes?.navChildItems?.data) {
                    if (!l2ArrObj?.attributes?.collections?.data && l2ArrObj?.attributes?.collections?.data.length > 0) {
                        continue;
                    }
                    let eachCol = [];
                    for (let l2Obj of l2ArrObj?.attributes?.collections?.data) {
                        let l2Push = {};
                        if (!l2Obj?.attributes?.base_url?.data?.attributes) {
                            continue;
                        }
                        l2Push = l2Obj?.attributes?.base_url?.data?.attributes;
                        if (l2Obj?.attributes?.navChildItems?.data && l2Obj?.attributes?.navChildItems?.data.length > 0) {
                            let l3Col = [];
                            for (let l3Obj of l2Obj?.attributes?.navChildItems?.data) {
                                l3Col.push(l3Obj?.attributes?.base_url?.data?.attributes);
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

    activeDropdown({ state, commit }, dropdown) {
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

    deactiveDropdown({ commit }, dropdown) {
        state.delayCloseDropdownMenu = setTimeout(() => {
            commit('DEACTIVE_DESKTOP_DROPDOWN', dropdown);
        }, 100);
        /*
        state.delayCloseDropdownMenu = setTimeout(() => {
            commit('DEACTIVE_DROPDOWN', dropdown);
        }, 100);

         */
    },

    activeLegacyDropdown({ state, commit }, dropdown) {
        if (state.dropdown[dropdown]) {
            commit('DEACTIVE_DROPDOWN', dropdown);
        } else {
            commit('ACTIVE_DROPDOWN', dropdown);
        }
    },

    deactiveLegacyDropdown({ commit }, dropdown) {
        state.delayCloseDropdownMenu = setTimeout(() => {
            commit('DEACTIVE_DROPDOWN', dropdown);
        }, 100);
    },

    deactiveAllDropdown({ commit }) {
        commit('DEACTIVE_ALL_DROPDOWN');
    },

    setIsMenuBarSearchExpanded({ commit }, payload) {
        commit('IS_MENU_BAR_SEARCH_EXPANDED', payload);
    },

    forceUpdateVideo({ commit }, payload) {
        commit('FORCE_UPDATE_VIDEO', payload);
    },
};
