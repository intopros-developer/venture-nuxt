export default (context) => ({
    async subscribePageForm(params) {
        try {
            const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.hubspotSubscribePageFormId}`, {
                submittedAt: new Date().getTime(),
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.full_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'relationship_to_ventureplans',
                        value: params.relationship_to_ventureplans,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'jobtitle',
                        value: params.jobtitle,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'city',
                        value: params.city,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'company',
                        value: params.company,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'industry',
                        value: params.industry,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'company_country',
                        value: params.company_country,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'subscribe_to_newsletters',
                        value: params.subscribe_to_newsletters,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'industry_topics',
                        value: params.industry_topics,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'business_topics',
                        value: params.business_topics,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                    content: params.cover_letter,
                });
            }
            if (params.diploma) {
                file.push({
                    name: 'diploma_document',
                    content: params.diploma,
                });
            }
            if (params.resume) {
                file.push({
                    name: 'resume_document',
                    content: params.resume,
                });
            }
            const data = await context.$axios.post(`${context.$config.hubspotApiURL}/${context.$config.hubspotPortalId}/${context.$config.careersSubmitFormId}`, {
                submittedAt: new Date().getTime(),
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.full_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'what_position_are_you_interested_in',
                        value: params.position,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'school',
                        value: params.school,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'do_you_have_at_least_5_years_of_work_experience_',
                        value: params.do_you_have_at_least_years_of_experience,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'geographical_flexibility',
                        value: params.geographic_flexibility,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'intrested_in_a_internship_program_',
                        value: params.are_you_interested_in_a_internship_program,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.fullname,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'service',
                        value: params.service,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'firstname',
                        value: params.first_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'lastname',
                        value: params.last_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'company',
                        value: params.company,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'project_description',
                        value: params.project_description,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'file',
                        value: '',
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-2',
                        name: 'what_phase_is_your_business_in',
                        value: params.what_phase_is_your_business_in,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_was_company_gross_revenue_last_year',
                        value: context.$helper.isEmpty(params.what_was_company_gross_revenue_last_year) ? '' : params.what_was_company_gross_revenue_last_year,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'how_much_working_capital_do_you_personally_have_to_invest_in_your_business',
                        value: context.$helper.isEmpty(params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business) ? '' : params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_is_your_industry',
                        value: params.what_is_your_industry,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_service_best_suits_your_needs',
                        value: params.what_service_best_suits_your_needs,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_is_your_full_name',
                        value: params.what_is_your_full_name,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_is_your_phone_number',
                        value: params.what_is_your_phone_number,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_is_your_email',
                        value: params.what_is_your_email,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'are_you_ready_to_buy_this_service',
                        value: params.are_you_ready_to_buy_this_service,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.what_is_your_email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-2',
                        name: 'what_is_your_current_position',
                        value: params.what_is_your_current_position,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations',
                        value: params.do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'have_you_worked_on_multiple_projects___or_single_projects_at_a_time',
                        value: params.have_you_worked_on_multiple_projects_or_single_projects_at_a_time,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'have_you_lead_a_team_before',
                        value: params.have_you_lead_a_team_before,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'what_position_are_you_interested_in',
                        value: params.what_position_are_you_interested_in,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.full_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                    {
                        objectTypeId: '0-2',
                        name: 'do_you_want_to_book_your_initial_interview_now',
                        value: params.do_you_want_to_book_your_initial_interview_now,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-2',
                        name: 'reason_for_enquiry',
                        value: params.inquiry_reason,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.full_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
                    fields: [
                        {
                            objectTypeId: '0-1',
                            name: 'q___a',
                            value: params.qAndA,
                        },
                        {
                            objectTypeId: '0-1',
                            name: 'grant_link',
                            value: params.grant_link,
                        },
                        {
                            objectTypeId: '0-1',
                            name: 'full_name',
                            value: params.full_name,
                        },
                        {
                            objectTypeId: '0-1',
                            name: 'phone',
                            value: params.phone,
                        },
                        {
                            objectTypeId: '0-1',
                            name: 'email',
                            value: params.email,
                        },
                    ],
                    pageName: context.route.name,
                    pageUri: context.route.path,
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
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'q___a',
                        value: params.qAndA,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'grant_link',
                        value: params.grant_link,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'full_name',
                        value: params.full_name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'phone',
                        value: params.phone,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: params.email,
                    },
                ],
                pageName: context.route.name,
                pageUri: context.route.path,
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
    },
});
