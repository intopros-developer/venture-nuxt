<template>
    <footer class="bg-[#202A36] pb-7 pt-12">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-10 flex flex-col gap-10 sm:flex-row sm:justify-between xl:mb-[85px]">
                <div>
                    <nuxt-link :to="localePath('/')" aria-label="Venture Plans">
                        <svg xmlns="http://www.w3.org/2000/svg" width="129" height="31" viewBox="0 0 129 31">
                            <g>
                                <g><path fill="#00ADFF" d="M98.717 30.443V.353h29.406z" /></g>
                                <g><path fill="#fff" d="M4.788 12.648L0 .325h3.344l3.152 9.066L9.647.325h3.221l-4.84 12.323z" /></g>
                                <g><path fill="#fff" d="M17.22 2.79v2.446h5.88v2.465h-5.88v2.482h6.708v2.465h-9.841V.325h9.647V2.79z" /></g>
                                <g><path fill="#fff" d="M34.564 12.648l-5.67-7.588v7.588h-2.939V.325h2.764l5.686 7.605V.325h2.923v12.323z" /></g>
                                <g><path fill="#fff" d="M45.5 2.842v9.806h-3.133V2.842h-3.68V.307h10.528v2.535z" /></g>
                                <g><path fill="#fff" d="M61.646 7.473c0 3.256-2.166 5.316-5.616 5.316-3.468 0-5.686-2.06-5.686-5.316V.325h3.133v7.148c0 1.672 1.075 2.693 2.57 2.693 1.48 0 2.483-1.021 2.483-2.693V.325h3.116z" /></g>
                                <g>
                                    <path
                                        fill="#fff"
                                        d="M67.037 6.715V2.79h2.376c1.356 0 2.148.652 2.148 1.937 0 1.303-.792 1.99-2.148 1.99zm4.295 5.933h3.556L72.3 8.58c1.444-.722 2.236-2.078 2.236-3.96 0-2.747-1.866-4.296-5.123-4.296h-5.51v12.323h3.134V9.18h2.465z"
                                    />
                                </g>
                                <g><path fill="#fff" d="M79.786 2.79v2.446h5.88v2.465h-5.88v2.482h6.707v2.465h-9.841V.325h9.647V2.79z" /></g>
                                <g><path fill="#fff" d="M90.217.81v2.84h-.564V.81h-1.056V.304h2.68V.81z" /></g>
                                <g><path fill="#fff" d="M94.777 3.65l-.005-2.5-1.056 2.15h-.368l-1.056-2.15v2.5h-.53V.304h.668l1.105 2.222L94.634.304h.664V3.65z" /></g>
                                <g>
                                    <path
                                        fill="#fff"
                                        d="M29.793 19.313h3.31c2.317 0 3.66.992 3.66 2.942 0 2.005-1.343 3.034-3.66 3.034h-3.31zm-1.471-1.416V30.77h1.47v-4.064h3.366c3.182 0 5.02-1.637 5.02-4.488 0-2.74-1.838-4.321-5.02-4.321z"
                                    />
                                </g>
                                <g><path fill="#fff" d="M47.741 29.373v1.397h-7.117V17.897h1.471v11.476z" /></g>
                                <g><path fill="#fff" d="M57.8 26.099h-5.774l2.87-6.53zm.626 1.416l1.434 3.255h1.6l-5.756-12.873h-1.526L48.403 30.77h1.564l1.434-3.255z" /></g>
                                <g><path fill="#fff" d="M72.679 30.77l-7.724-10.336V30.77h-1.472V17.897h1.527l7.724 10.353V17.897h1.453V30.77z" /></g>
                                <g>
                                    <path
                                        fill="#fff"
                                        d="M86.01 19.037l-.625 1.378a6.655 6.655 0 0 0-3.549-1.084c-1.654 0-2.74.625-2.74 1.71 0 3.31 7.246 1.581 7.228 6.253 0 2.152-1.895 3.531-4.653 3.531-1.876 0-3.715-.81-4.93-1.968l.664-1.324c1.194 1.159 2.831 1.82 4.284 1.82 1.858 0 3.016-.753 3.016-1.985.018-3.385-7.227-1.582-7.227-6.198 0-2.023 1.783-3.329 4.45-3.329 1.49 0 3.016.478 4.083 1.196z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </nuxt-link>
                </div>
                <div class="block sm:hidden">
                    <a href="mailto:info@ventureplans.us" class="flex items-center gap-2 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <p class="text-[15px] font-medium leading-[18px] text-primary">Email Us</p>
                    </a>
                </div>
                <div class="hidden sm:block">
                    <div class="flex items-center justify-start gap-6 sm:justify-end">
                        <a href="mailto:info@ventureplans.us" class="flex items-center gap-2 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p class="text-[15px] font-medium leading-[18px] text-primary">Email Us</p>
                        </a>
                        <a href="https://www.linkedin.com/company/31139649/" aria-label="Linkedin" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#008cc3]">
                            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/VenturePlans" aria-label="Twitter" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#70c6ff]">
                            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/ventureplans" aria-label="Facebook" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#506cba]">
                            <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7S7GWpgiaFLt5nWeOgws4Q" aria-label="Youtube" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#ef574a]">
                            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/ventureplans/" aria-label="Instagram" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#d34c7b]">
                            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:mt-24">
                <div class="mb-[52px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-[60px] xl:gap-[248px]">
                    <div>
                        <p class="leading-6 text-white">
                            In a constantly changing world, remain ahead, join our mailing list <br class="hidden lg:block" />
                            to get access to industry trends and market shifts.
                        </p>
                    </div>
                    <form id="footer-form" action="" @submit.prevent="onSubmit">
                        <div class="flex items-center gap-2">
                            <div class="form-input-group w-full">
                                <input
                                    v-model="$v.params.email.$model"
                                    type="email"
                                    placeholder="Your Email Address"
                                    class="form-input flex-1 rounded-lg py-[15px] lg:max-w-[350px]"
                                    :class="{ error: $v.params.email.$error }"
                                    @input="$v.params.email.$model = $event.target.value.trim()"
                                />
                            </div>
                            <button type="submit" class="btn px-[36px] py-[14px] text-sm font-semibold leading-[19px] lg:leading-[22px]">Submit</button>
                        </div>
                        <div v-if="isSubmitted" class="mt-5 flex items-start gap-3">
                            <icons-check-circle class="h-6 w-6 text-green" />
                            <p class="text-xl font-extrabold leading-[25px] text-white"><span class="border-b-[2px] border-green text-green">Congratulations,</span> you have joined our mailing list.</p>
                        </div>
                    </form>
                    <div class="mt-3 block sm:hidden">
                        <div class="flex items-center justify-center gap-6">
                            <a href="https://www.linkedin.com/company/31139649/" aria-label="Linkedin" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#008cc3]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/VenturePlans" aria-label="Twitter" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#70c6ff]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/ventureplans" aria-label="Facebook" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#506cba]">
                                <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UC7S7GWpgiaFLt5nWeOgws4Q" aria-label="Youtube" target="_blank" class="w-full text-white transition-all duration-300 hover:text-[#ef574a]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/ventureplans/" target="_blank" aria-label="Instagram" class="w-full text-white transition-all duration-300 hover:text-[#d34c7b]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div class="order-2 flex flex-1 items-center justify-start gap-6 lg:order-1">
                    <div class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" class="mx-auto" viewBox="0 0 24 30">
                            <g>
                                <g>
                                    <path
                                        fill="#707070"
                                        d="M10.341 21.087v2.977h2.594v-2.977a2.606 2.606 0 0 0 1.296-2.253c0-1.444-1.162-2.616-2.594-2.616-1.43 0-2.593 1.172-2.593 2.616 0 .965.524 1.8 1.296 2.253zm10.37 4.285c0 .721-.58 1.308-1.295 1.308H3.859a1.303 1.303 0 0 1-1.296-1.308V13.604h18.15v11.768zM5.156 5.758s1.296-2.615 6.482-2.615c5.187 0 6.483 2.615 6.483 2.615v5.23H5.156v-5.23zm15.557 5.23V7.065c0-2.615-2.593-6.538-9.075-6.538-6.48 0-9.074 3.923-9.074 6.538v3.923H-.03v14.384c0 2.163 1.745 3.923 3.89 3.923h15.556c2.144 0 3.889-1.76 3.889-3.923V10.988z"
                                    />
                                </g>
                            </g>
                        </svg>
                        <p class="text-[11px] font-bold leading-[13px] text-primary">Secure</p>
                        <p class="text-[6px] font-normal leading-[13px] text-primary">SSL ENCRYPTION</p>
                    </div>
                    <p class="text-[15px] font-medium leading-[18px] text-white/50">© 2010 - 2023 Venture Plans, Inc.</p>
                </div>
                <div class="order-1 flex-none lg:order-2">
                    <ul class="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium leading-[25px] -tracking-[0.03px] text-white/50 md:text-[14px]">
                        <li><nuxt-link to="/offices" class="transition-all duration-300 hover:text-white">Offices</nuxt-link></li>
                        <li><button aria-label="Cookies Policy" class="transition-all duration-300 hover:text-white">Cookies Policy</button></li>
                        <li><nuxt-link to="/refund-policy" class="transition-all duration-300 hover:text-white">Refund Policy</nuxt-link></li>
                        <li><nuxt-link to="/subscribe" class="transition-all duration-300 hover:text-white">Subscribe</nuxt-link></li>
                        <li><nuxt-link to="/privacy-policy" class="transition-all duration-300 hover:text-white">Privacy</nuxt-link></li>
                        <li>
                            <nuxt-link to="/terms-and-conditions" class="transition-all duration-300 hover:text-white">Terms & Conditions</nuxt-link>
                        </li>
                        <li><nuxt-link to="/contact-us" class="transition-all duration-300 hover:text-white">Contact</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    export default {
        data() {
            return {
                isSubmitted: false,
                params: {
                    email: '',
                },
            };
        },

        validations() {
            return {
                params: {
                    email: { required, email },
                },
            };
        },

        watch: {
            $route(to, from) {
                this.isSubmitted = false;
            },
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
                    email: '',
                };
            },

            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth', easing: 'linear' });
            },
        },
    };
</script>
