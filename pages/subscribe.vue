<template>
    <div v-if="content">
        <section class="pb-6 pt-10">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <h1 class="text-[25px] font-bold uppercase">{{ content.title1 }}</h1>
                <p class="pt-[24px] text-xs font-light leading-[14px]">{{ content.description1 }}</p>
            </div>
        </section>

        <form action="" @submit.prevent="onSubmit">
            <div class="h-[1px] w-full bg-[#646464]/25"></div>
            <section class="py-12">
                <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                    <h3 class="text-xl font-bold">1. Tell us more about you</h3>
                    <p class="pt-0.5 text-xs font-light leading-[14px] -tracking-[0.02px]">Fill out the form below so we can book your consultation with one of our accredited advisors</p>
                </div>
                <div class="container px-10 pt-11 md:px-4 lg:px-[97px] xl:px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <p class="mb-4 text-sm font-medium -tracking-[0.03px]">About you</p>
                        </div>
                        <div>
                            <div class="space-y-[29px]">
                                <div>
                                    <input v-model="$v.params.full_name.$model" :class="{ error: $v.params.full_name.$error }" type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="Full Name" />
                                </div>
                                <div>
                                    <input v-model="$v.params.phone.$model" v-mask="$mask.phoneMask" :class="{ error: $v.params.phone.$error }" type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="Phone" />
                                </div>
                                <div>
                                    <input v-model="$v.params.email.$model" :class="{ error: $v.params.email.$error }" type="email" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="Email" />
                                </div>

                                <div v-click-outside="closeRelationshipToVentureplansDropdown" class="group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea] text-danger': $v.params.relationship_to_ventureplans.$error, 'rounded-b-none': showRelationshipToVenturePlansDropdownOptions }"
                                                @click="openRelationshipToVentureplansDropdown()"
                                            >
                                                {{ relationshipToVenturePlansDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showRelationshipToVenturePlansDropdownOptions, 'text-danger': $v.params.relationship_to_ventureplans.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="showRelationshipToVenturePlansDropdownOptions"
                                                    ref="multiselect"
                                                    v-model="params.relationship_to_ventureplans"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="relationshipToVentureplanOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Search"
                                                    class="custom-multiselect default-open-multiselect z-100 !absolute w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    :search="false"
                                                    @select="closeRelationshipToVentureplansDropdown"
                                                >
                                                    <template slot="caret">
                                                        <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                            <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                        </button>
                                                    </template>
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>

                                <div :class="{ 'opacity-5': showRelationshipToVenturePlansDropdownOptions }">
                                    <input v-model="$v.params.jobtitle.$model" :class="{ error: $v.params.jobtitle.$error }" type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="Job title" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="h-[1px] w-full bg-[#646464]/25"></div>
            <section class="pb-12">
                <div class="container px-10 pt-11 md:px-4 lg:px-[97px] xl:px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <p class="mb-4 text-sm font-medium -tracking-[0.03px]">About your business</p>
                        </div>
                        <div>
                            <div class="space-y-[29px]">
                                <div>
                                    <input v-model="$v.params.company.$model" :class="{ error: $v.params.company.$error }" type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="Company Name" />
                                </div>

                                <div>
                                    <input v-model="$v.params.city.$model" :class="{ error: $v.params.city.$error }" type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" placeholder="City" />
                                </div>

                                <div v-click-outside="closeIndustryDropdown" class="group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea] text-danger': $v.params.industry.$error, 'rounded-b-none': showIndustryDropdownOptions }"
                                                @click="openIndustryDropdown()"
                                            >
                                                {{ industryDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showIndustryDropdownOptions, 'text-danger': $v.params.industry.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="showIndustryDropdownOptions"
                                                    ref="multiselect"
                                                    v-model="params.industry"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="industryOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Search"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    :search="false"
                                                    @select="closeIndustryDropdown"
                                                >
                                                    <template slot="caret">
                                                        <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                            <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                        </button>
                                                    </template>
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>

                                <div v-click-outside="closeCountryDropdown" :class="{ 'opacity-0': showIndustryDropdownOptions }" class="group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea] text-danger': $v.params.company_country.$error, 'rounded-b-none': showCountryDropdownOptions }"
                                                @click="openCountryDropdown()"
                                            >
                                                {{ countryDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showCountryDropdownOptions, 'text-danger': $v.params.company_country.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="showCountryDropdownOptions"
                                                    ref="multiselect"
                                                    v-model="params.company_country"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="countryOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Search"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @select="closeCountryDropdown"
                                                >
                                                    <template slot="caret">
                                                        <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                            <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                        </button>
                                                    </template>
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div>
                                <input type="text" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    placeholder="Job title" />
                            </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 2 -->
            <div class="h-[1px] w-full bg-[#646464]/25"></div>
            <section v-for="(component, index) in [content.components.data[0]]" :key="index" class="py-12">
                <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                    <h3 class="text-xl font-bold">2. Choose the newsletters and alerts you would like to receive.</h3>
                    <p class="my-5 text-xl font-medium">{{ component.attributes.title }}</p>
                    <div class="flex justify-between">
                        <div class="flex-1">
                            <p class="mb-3.5 text-lg font-semibold">{{ component.attributes.subTitle }}</p>
                            <p class="mb-4 max-w-[430px]">{{ component.attributes.description }}</p>
                        </div>
                        <div>
                            <div class="custom_check relative cursor-pointer">
                                <input id="custom_check1" v-model="params.subscribe_to_newsletters" :checked="params.subscribe_to_newsletters" type="checkbox" name="custom_check" class="absolute opacity-0" />
                                <label for="custom_check1" class="cursor-pointer rounded-md border-2 border-[#d5d5d5] p-px px-2 text-xs text-[#d5d5d5]">Subscribe</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- topic alerts -->
            <div class="h-[1px] w-full bg-[#646464]/25"></div>
            <section v-for="(component, index) in [content.components.data[1]]" :key="index" class="py-12">
                <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                    <h3 class="text-xl font-medium">{{ component.attributes.title }}</h3>
                    <p class="mb-5 max-w-[430px]">{{ component.attributes.subTitle }}.</p>
                    <!-- industry topic -->
                    <div v-for="(sub_component, jdx) in [component.attributes.subComponent.data[0]]" :key="jdx">
                        <p class="mb-3.5 text-lg font-semibold">{{ sub_component.attributes.title }}</p>
                        <div class="mb-5 grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <div v-for="topic in sub_component.attributes.items.data.slice(0, 12)" :key="topic.attributes.title" class="flex items-center justify-between border-b border-[#646464]/25 py-3">
                                    <div class="flex-1">
                                        <p>{{ topic.attributes.title }}</p>
                                    </div>
                                    <div class="custom_check relative ml-auto md:pr-10">
                                        <input :id="topic" type="checkbox" name="custom_check" class="absolute opacity-0" />
                                        <label
                                            :for="topic.attributes.title"
                                            :class="selectedIndustryTopics.includes(topic.attributes.title) ? 'bg-primary' : 'border-2 border-[#d5d5d5] '"
                                            class="cursor-pointer rounded-md p-px px-2 text-xs text-[#d5d5d5]"
                                            @click="toggleIndustryTopic(topic.attributes.title)"
                                        >
                                            Subscribe
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-for="topic in sub_component.attributes.items.data.slice(12)" :key="topic.attributes.title" class="flex items-center justify-between border-b border-[#646464]/25 py-3">
                                    <div class="flex-1">
                                        <p>{{ topic.attributes.title }}</p>
                                    </div>
                                    <div class="custom_check relative ml-auto md:pr-10">
                                        <input :id="topic" type="checkbox" name="custom_check" class="absolute opacity-0" />
                                        <label
                                            :for="topic.attributes.title"
                                            :class="selectedIndustryTopics.includes(topic.attributes.title) ? 'bg-primary' : 'border-2 border-[#d5d5d5] '"
                                            class="cursor-pointer rounded-md p-px px-2 text-xs text-[#d5d5d5]"
                                            @click="toggleIndustryTopic(topic.attributes.title)"
                                            >Subscribe</label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- business topic -->
                    <div v-for="(sub_component, jdx) in [component.attributes.subComponent.data[1]]" :key="jdx">
                        <h3 class="mb-3.5 text-lg font-semibold">{{ sub_component.attributes.title }}</h3>
                        <div class="mb-5 grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <div v-for="topic in sub_component.attributes.items.data.slice(0, 8)" :key="topic.attributes.title" class="flex items-center justify-between border-b border-[#646464]/25 py-3">
                                    <div class="flex-1">
                                        <p>{{ topic.attributes.title }}</p>
                                    </div>
                                    <div class="custom_check relative ml-auto md:pr-10">
                                        <input :id="topic" type="checkbox" name="custom_check" class="absolute opacity-0" />
                                        <label
                                            :for="topic.attributes.title"
                                            :class="selectedBusinessTopics.includes(topic.attributes.title) ? 'bg-primary' : 'border-2 border-[#d5d5d5] '"
                                            class="cursor-pointer rounded-md p-px px-2 text-xs text-[#d5d5d5]"
                                            @click="toggleBusinessTopic(topic.attributes.title)"
                                            >Subscribe</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-for="topic in sub_component.attributes.items.data.slice(8)" :key="topic.attributes.title" class="flex items-center justify-between border-b border-[#646464]/25 py-3">
                                    <div class="flex-1">
                                        <p>{{ topic.attributes.title }}</p>
                                    </div>
                                    <div class="custom_check relative ml-auto md:pr-10">
                                        <input :id="topic" type="checkbox" name="custom_check" class="absolute opacity-0" />
                                        <label
                                            :for="topic.attributes.title"
                                            :class="selectedBusinessTopics.includes(topic.attributes.title) ? 'bg-primary' : 'border-2 border-[#d5d5d5] '"
                                            class="cursor-pointer rounded-md p-px px-2 text-xs text-[#d5d5d5]"
                                            @click="toggleBusinessTopic(topic.attributes.title)"
                                            >Subscribe</label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- privacy policy -->
                    <div class="mb-16 flex flex-col gap-2">
                        <div>
                            <input id="privacy_checkbox" v-model="params.termsAccepted" type="checkbox" name="privacy_checkbox" class="h-4 w-4 rounded-none" />
                            <label :class="{ error: $v.params.termsAccepted.$error }" for="privacy_checkbox" class="leading-none">I have read the Privacy Policy and agree to its terms.</label>
                        </div>

                        <div class="mt-2">
                            <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                            <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="home-question mx-auto w-auto rounded-[3px] px-5 uppercase">Save changes</button>
                    </div>
                    <p v-if="isSubmitted" class="text-danger">Changes saved successfully!</p>
                </div>
            </section>
        </form>
    </div>
</template>

<script>
    import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
    import ClickOutside from 'vue-click-outside';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        directives: {
            ClickOutside,
        },

        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/subscribe-page?populate=deep`);
                const content = context.$helper.parseData(data.data);
                return {
                    content,
                };
            } catch {}
        },

        data() {
            return {
                isSubmitted: false,
                industryTopics: [
                    'Advanced Manufacturing and Services',
                    'Agribusiness',
                    'Artificial Intelligence',
                    'Automotive and Mobility',
                    'Aviation',
                    'Big Data Analytics',
                    'Chemicals',
                    'Cloud Computing',
                    'Cybersecurity',
                    'Consumer Products',
                    'Financial Services',
                    'Healthcare',
                    'Infrastructure, Construction and Building Products',
                    'Machinery and Equipment',
                    'Media and Entertainment',
                    'Oil and Gas',
                    'Private Equity',
                    'Retail',
                    'Social and Public Sectors',
                    'Technology',
                    'Telecommunications',
                    'Trade',
                    'Transportation',
                    'Utilities and Renewables',
                ],
                businessTopics: [
                    'Advanced Analytics',
                    'Agile',
                    'Change Management',
                    'Customer Experience',
                    'Digital Transformation',
                    'Diversity, Equity & Inclusion',
                    'Enterprise Technology',
                    'Full Potential Transformation',
                    'Merger & Acquisitions',
                    'Operations',
                    'People and Organization',
                    'Sales & Marketing',
                    'Strategy',
                    'Supply Chain',
                    'Sustainability',
                ],
                industryOptions: [
                    'Advanced Manufacturing and Services',
                    'Agribusiness',
                    'Artificial Intelligence',
                    'Automotive and Mobility',
                    'Aviation',
                    'Big Data Analytics',
                    'Chemicals',
                    'Cloud Computing',
                    'Cybersecurity',
                    'Consumer Products',
                    'Financial Services',
                    'Healthcare',
                    'Infrastructure, Construction and Building Products',
                    'Machinery and Equipment',
                    'Media and Entertainment',
                    'Oil and Gas',
                    'Private Equity',
                    'Retail',
                    'Social and Public Sectors',
                    'Technology',
                    'Telecommunications',
                    'Trade',
                    'Transportation',
                    'Utilities and Renewables',
                ],
                countryOptions: [
                    'Afghanistan',
                    'Aland Islands',
                    'Albania',
                    'Algeria',
                    'American Samoa',
                    'Andorra',
                    'Angola',
                    'Anguilla',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bermuda',
                    'Bhutan',
                    'Bolivia',
                    'Bonaire, Sint Eustatious and Saba',
                    'Bosnia and Herzegovina',
                    'Botswana',
                    'Brazil',
                    'British Indian Ocean Territory',
                    'Brunei',
                    'Bulgaria',
                    'Burkina Faso',
                    'Burundi',
                    'Cabo Verde',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Cayman Islands',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Christmas Island',
                    'Cocos (Keeling) Islands',
                    'Colombia',
                    'Comoros',
                    'Congo',
                    'Congo, the Democratic Republic of the',
                    'Cook Islands',
                    'Costa Rica',
                    "Cote D'Ivoire",
                    'Croatia',
                    'Cuba',
                    'Curaçao',
                    'Cyprus',
                    'Czech Republic',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Eswatini',
                    'Ethiopia',
                    'Faeroe Islands',
                    'Falkland Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'French Guiana',
                    'French Polynesia',
                    'French Southern and Antarctic Lands',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Gibraltar',
                    'Greece',
                    'Greenland',
                    'Grenada',
                    'Guadeloupe',
                    'Guam',
                    'Guatemala',
                    'Guernsey',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Honduras',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran',
                    'Iraq',
                    'Ireland',
                    'Isle of Man',
                    'Israel',
                    'Italy',
                    'Jamaica',
                    'Japan',
                    'Jersey',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    'Kuwait',
                    'Kyrgyzstan',
                    'Laos',
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Martinique',
                    'Mauritania',
                    'Mauritius',
                    'Mayotte',
                    'Mexico',
                    'Micronesia',
                    'Moldova',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'New Caledonia',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'Norfolk Island',
                    'North Korea',
                    'North Macedonia',
                    'Northern Mariana Islands',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Palestine',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Pitcairn',
                    'Poland',
                    'Portugal',
                    'Puerto Rico',
                    'Qatar',
                    'Réunion',
                    'Romania',
                    'Russia',
                    'Rwanda',
                    'Saint Barthelemy',
                    'Saint Helena',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Martin',
                    'Saint Pierre and Miquelon',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Sint Maarten',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Georgia and the South Sandwich Islands',
                    'South Korea',
                    'South Sudan',
                    'Spain',
                    'Sri Lanka',
                    'Sudan',
                    'Suriname',
                    'Sweden',
                    'Switzerland',
                    'Syria',
                    'Taiwan',
                    'Tajikistan',
                    'Tanzania',
                    'Thailand',
                    'Timor-Leste',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Turks and Caicos Islands',
                    'Tuvalu',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom',
                    'United States',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Vatican City',
                    'Venezuela',
                    'Vietnam',
                    'Virgin Islands, British',
                    'Virgin Islands, U.S.',
                    'Wallis and Futuna',
                    'Western Sahara',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                ],
                relationshipToVentureplanOptions: ['Customer', 'Partner', 'Vendor', 'Potential Candidate'],
                selectedIndustryTopics: [],
                selectedBusinessTopics: [],
                params: {
                    email: '',
                    full_name: '',
                    phone: '',
                    relationship_to_ventureplans: '',
                    jobtitle: '',
                    city: '',
                    company: '',
                    subscribe_to_newsletters: false,
                    topics: [],
                    industry: '',
                    company_country: '',
                    termsAccepted: false,
                },
                showIndustryDropdownOptions: false,
                showCountryDropdownOptions: false,
                showRelationshipToVenturePlansDropdownOptions: false,
                captchaError: false,
            };
        },

        validations() {
            return {
                params: {
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    relationship_to_ventureplans: { required },
                    jobtitle: { required },
                    company: { required },
                    city: { required },
                    industry: { required },
                    company_country: { required },
                    termsAccepted: {
                        sameAs: sameAs(() => true),
                    },
                },
            };
        },

        head() {
            return {
                title: 'Subscribe | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                ],
            };
        },

        computed: {
            industryDropdownTitle() {
                return !this.$helper.isEmpty(this.params.industry) ? this.params.industry : 'Industry';
            },
            countryDropdownTitle() {
                return !this.$helper.isEmpty(this.params.company_country) ? this.params.company_country : `Company's Country/Region`;
            },
            relationshipToVenturePlansDropdownTitle() {
                return !this.$helper.isEmpty(this.params.relationship_to_ventureplans) ? this.params.relationship_to_ventureplans : `Your relationship to Venture Plans`;
            },
        },

        methods: {
            openIndustryDropdown() {
                this.showIndustryDropdownOptions = !this.showIndustryDropdownOptions;
            },
            closeIndustryDropdown() {
                this.showIndustryDropdownOptions = false;
            },
            openCountryDropdown() {
                this.showCountryDropdownOptions = !this.showCountryDropdownOptions;
            },
            closeCountryDropdown() {
                this.showCountryDropdownOptions = false;
            },
            openRelationshipToVentureplansDropdown() {
                this.showRelationshipToVenturePlansDropdownOptions = !this.showRelationshipToVenturePlansDropdownOptions;
            },
            closeRelationshipToVentureplansDropdown() {
                this.showRelationshipToVenturePlansDropdownOptions = false;
            },

            toggleIndustryTopic(topic) {
                if (this.selectedIndustryTopics.includes(topic)) {
                    this.selectedIndustryTopics = this.selectedIndustryTopics.filter((i) => i !== topic);
                } else {
                    this.selectedIndustryTopics = [...this.selectedIndustryTopics, topic];
                }
            },

            toggleBusinessTopic(topic) {
                if (this.selectedBusinessTopics.includes(topic)) {
                    this.selectedBusinessTopics = this.selectedBusinessTopics.filter((i) => i !== topic);
                } else {
                    this.selectedBusinessTopics = [...this.selectedBusinessTopics, topic];
                }
            },

            async onSubmit() {
                try {
                    this.captchaError = false;
                    const token = this.widgetId ? await this.$recaptcha.getResponse(this.widgetId) : await this.$recaptcha.getResponse();
                    if (!token) {
                        this.captchaError = true;
                    }
                    this.$v.params.$touch();
                    if (this.$v.params.$invalid || this.$v.params.$error) {
                        return false;
                    }
                    if (!this.captchaError) {
                        const data = await this.$hubspot.subscribePageForm({
                            ...this.params,
                            subscribe_to_newsletters: this.params.subscribe_to_newsletters ? 'Yes' : 'No',
                            industry_topics: this.selectedIndustryTopics.join(','),
                            business_topics: this.selectedBusinessTopics.join(','),
                        });
                        if (!data) {
                            return false;
                        }

                        this.$v.params.$reset();
                        this.params = {
                            email: '',
                            full_name: '',
                            phone: '',
                            relationship_to_ventureplans: '',
                            jobtitle: '',
                            company: '',
                            subscribe_to_newsletters: '',
                            topics: '',
                            industry: '',
                            city: '',
                            company_country: '',
                        };

                        this.selectedBusinessTopics = [];
                        this.selectedIndustryTopics = [];
                        this.isSubmitted = true;
                        // uncheck all the checkboxes
                        const checkboxes = document.querySelectorAll('input');
                        checkboxes.forEach((checkbox) => {
                            checkbox.checked = false;
                        });
                        setTimeout(() => {
                            this.isSubmitted = false;
                        }, 3000);
                    }
                } catch (error) {
                    this.captchaError = true;
                    console.log(error);
                }
            },
        },
    };
</script>

<style>
    .custom-multiselect .multiselect__content-wrapper {
        margin-top: 10px !important;
    }
</style>
