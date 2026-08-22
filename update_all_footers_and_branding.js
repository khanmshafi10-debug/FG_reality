const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

// 1. Unified English Footer
const unifiedEnglishFooter = `    <div class="footerWrapper">
        <footer class="footer">
            <div class="footer__row2">
                <div class="footer__row2-left flex flex-col gap-3xl">
                    <div class="text-grey-200">
                        <a href="/" aria-label="Prime View Real Estate Home">
                            <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 44px; width: auto; max-width: 220px; display: block;" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <span class="text-grey-600 text-sm font-primary">Founded in Doha, Qatar, Prime View Real Estate (Prime View Real Estate W.L.L.) is a premier licensed luxury real estate brokerage. We provide tailored private client advisory, bespoke property matchmaking, and high-yield investment solutions across Lusail, The Pearl, West Bay, and Qatar's most prestigious locations.</span>
                </div>
                <div class="footer__row2-right footerLinkColumns">
                    <div class="footerLinkColumns__left flex flex-col gap-lg">
                        <span class="text-md text-grey-800">Properties for Sale</span>
                        <div class="flex flex-col gap-sm">
                            <a href="/en/buy/apartments-for-sale.html" class="text-sm text-grey-50 text-decoration-none">Apartments for Sale</a>
                            <a href="/en/buy/villas-for-sale.html" class="text-sm text-grey-50 text-decoration-none">Villas for Sale</a>
                            <a href="/en/buy/offices-for-sale.html" class="text-sm text-grey-50 text-decoration-none">Offices & Commercial</a>
                            <a href="/en/buy/land-for-sale.html" class="text-sm text-grey-50 text-decoration-none">Land Plots</a>
                            <a href="/en/buy/properties-for-sale.html" class="text-sm text-grey-50 text-decoration-none">All Sale Listings</a>
                        </div>
                    </div>
                    <div class="footerLinkColumns__right flex">
                        <div class="flex flex-col flex-1 gap-lg">
                            <span class="text-md text-grey-800">Properties for Rent</span>
                            <div class="flex flex-col gap-sm">
                                <a href="/en/rent/apartments-for-rent.html" class="text-sm text-grey-50 text-decoration-none">Apartments for Rent</a>
                                <a href="/en/rent/villas-for-rent.html" class="text-sm text-grey-50 text-decoration-none">Luxury Villas for Rent</a>
                                <a href="/en/rent/offices-for-rent.html" class="text-sm text-grey-50 text-decoration-none">Offices for Rent</a>
                                <a href="/en/rent/whole-building-for-rent.html" class="text-sm text-grey-50 text-decoration-none">Whole Buildings</a>
                                <a href="/en/rent/properties-for-rent.html" class="text-sm text-grey-50 text-decoration-none">All Rental Listings</a>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 gap-lg">
                            <span class="text-md text-grey-800">Company</span>
                            <div class="flex flex-col gap-sm">
                                <a href="/en/about.html" class="text-sm text-grey-50 text-decoration-none">About Us</a>
                                <a href="/en/developments.html" class="text-sm text-grey-50 text-decoration-none">New Developments</a>
                                <a href="/en/areas.html" class="text-sm text-grey-50 text-decoration-none">Qatar's Areas</a>
                                <a href="/en/contact.html" class="text-sm text-grey-50 text-decoration-none">Contact Us</a>
                                <a href="/en/privacy-policy.html" class="text-sm text-grey-50 text-decoration-none">Privacy Policy</a>
                                <a href="/en/terms-and-conditions.html" class="text-sm text-grey-50 text-decoration-none">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-desktop-row gap-4xl gap-desktop-6xl mt-6xl mt-tablet-7xl">
                <div class="footerSocialMedia">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Facebook">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 0C9.49 0.017003 10.8361 0.383206 12.0382 1.09861C13.2261 1.79973 14.2141 2.79386 14.908 3.98593C15.6191 5.19533 15.9831 6.54957 16 8.04867C15.9578 10.0998 15.3108 11.8516 14.0592 13.3042C12.8075 14.7568 11.2045 15.6555 9.54498 16V10.2493H11.1139L11.4687 7.9894H9.09301V6.50924C9.07982 6.20239 9.17686 5.90094 9.36658 5.65941C9.55657 5.41722 9.89114 5.28993 10.3703 5.27753H11.8049V3.29792C11.7843 3.29129 11.589 3.26511 11.2189 3.21935C10.7992 3.17025 10.3772 3.14402 9.95467 3.14078C8.99835 3.1452 8.24203 3.41496 7.68571 3.95006C7.12937 4.48502 6.84518 5.25899 6.83313 6.27197V7.9894H5.02522V10.2493H6.83313V16C4.79552 15.6555 3.19245 14.7568 1.9408 13.3042C0.689143 11.8516 0.0422341 10.0998 0 8.04867C0.0168975 6.5495 0.380886 5.19526 1.09196 3.98593C1.78584 2.79386 2.77393 1.79973 3.96175 1.09861C5.16387 0.383344 6.50995 0.0171408 7.99999 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="X">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52217 6.77491L15.4785 0H14.0671L8.89516 5.88256L4.76437 0H0L6.24656 8.89547L0 16H1.41155L6.87321 9.78782L11.2356 16H16L9.52183 6.77491H9.52217ZM7.58887 8.97384L6.95596 8.08805L1.92015 1.03974H4.0882L8.15216 6.72795L8.78507 7.61374L14.0677 15.0075H11.8997L7.58887 8.97418V8.97384Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9593 4.70406C15.9218 3.85391 15.7843 3.26945 15.5874 2.763C15.3842 2.22542 15.0715 1.74412 14.662 1.34402C14.2618 0.937686 13.7772 0.621949 13.2458 0.421959C12.7363 0.22502 12.1548 0.0875418 11.3044 0.0500587C10.4478 0.00940127 10.1758 0 8.00311 0C5.83039 0 5.55844 0.00940127 4.70496 0.0468843C3.85465 0.0843673 3.27007 0.221968 2.76365 0.418784C2.22584 0.621949 1.74445 0.934512 1.34427 1.34402C0.937865 1.74412 0.62219 2.22859 0.422039 2.75995C0.225063 3.26945 0.0875585 3.85074 0.0500683 4.70088C0.00940308 5.55738 0 5.82928 0 8.00159C0 10.1739 0.00940308 10.4458 0.0468933 11.2991C0.0843835 12.1493 0.22201 12.7337 0.418986 13.2402C0.62219 13.7778 0.937865 14.2591 1.34427 14.6592C1.74445 15.0655 2.22902 15.3812 2.76047 15.5812C3.27007 15.7782 3.85147 15.9156 4.7019 15.9531C5.55526 15.9907 5.82734 16 8.00006 16C10.1728 16 10.4447 15.9907 11.2982 15.9531C12.1485 15.9156 12.7331 15.7782 13.2395 15.5812C14.315 15.1655 15.1653 14.3153 15.5811 13.2402C15.778 12.7307 15.9156 12.1493 15.9531 11.2991C15.9906 10.4458 16 10.1739 16 8.00159C16 5.82928 15.9968 5.55738 15.9593 4.70406ZM14.5182 11.2366C14.4838 12.018 14.3525 12.44 14.2431 12.7213C13.9742 13.4183 13.4209 13.9715 12.7237 14.2404C12.4423 14.3498 12.0172 14.481 11.2387 14.5153C10.3947 14.5529 10.1415 14.5622 8.00629 14.5622C5.87106 14.5622 5.61473 14.5529 4.77371 14.5153C3.99215 14.481 3.57012 14.3498 3.28876 14.2404C2.94182 14.1122 2.62602 13.909 2.3697 13.6433C2.10397 13.3839 1.90076 13.0713 1.77254 12.7244C1.66312 12.4431 1.53185 12.018 1.49753 11.2398C1.45992 10.3959 1.45064 10.1426 1.45064 8.00782C1.45064 5.87299 1.45992 5.61671 1.49753 4.77597C1.53185 3.99457 1.66312 3.57261 1.77254 3.2913C1.90076 2.94431 2.10397 2.6287 2.37287 2.3723C2.63225 2.10662 2.94487 1.90345 3.29193 1.77538C3.57329 1.66598 3.9985 1.53473 4.77688 1.5003C5.62096 1.46281 5.87423 1.45341 8.00934 1.45341C10.1477 1.45341 10.4009 1.46281 11.2419 1.5003C12.0235 1.53473 12.4455 1.66598 12.7269 1.77538C13.0738 1.90345 13.3896 2.10662 13.6459 2.3723C13.9117 2.63175 14.1149 2.94431 14.2431 3.2913C14.3525 3.57261 14.4838 3.99762 14.5182 4.77597C14.5557 5.61989 14.5651 5.87299 14.5651 8.00782C14.5651 10.1426 14.5557 10.3927 14.5182 11.2366Z" fill="#F2F2F2"/>
                            <path d="M8.00329 3.89111C5.73374 3.89111 3.89233 5.73206 3.89233 8.00131C3.89233 10.2706 5.73374 12.1115 8.00329 12.1115C10.273 12.1115 12.1143 10.2706 12.1143 8.00131C12.1143 5.73206 10.273 3.89111 8.00329 3.89111ZM8.00329 10.6675C6.53093 10.6675 5.33661 9.47353 5.33661 8.00131C5.33661 6.52909 6.53093 5.33513 8.00329 5.33513C9.4758 5.33513 10.67 6.52909 10.67 8.00131C10.67 9.47353 9.4758 10.6675 8.00329 10.6675Z" fill="#F2F2F2"/>
                            <path d="M13.2362 3.72908C13.2362 4.25897 12.8065 4.68861 12.2764 4.68861C11.7464 4.68861 11.3167 4.25897 11.3167 3.72908C11.3167 3.19907 11.7464 2.76953 12.2764 2.76953C12.8065 2.76953 13.2362 3.19907 13.2362 3.72908Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="LinkedIn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9961 16L16.0001 15.9993V10.1313C16.0001 7.26066 15.3821 5.04932 12.0261 5.04932C10.4128 5.04932 9.3301 5.93465 8.8881 6.77399H8.84143V5.31732H5.65942V15.9993H8.97277V10.71C8.97277 9.31733 9.23677 7.97066 10.9614 7.97066C12.6608 7.97066 12.6861 9.56 12.6861 10.7993V16L15.9961 16Z" fill="#F2F2F2"/>
                            <path d="M0.263672 5.31812H3.58101V16.0001H0.263672L0.263672 5.31812Z" fill="#F2F2F2"/>
                            <path d="M1.92134 0C0.860669 0 0 0.860669 0 1.92134C0 2.98201 0.860669 3.86068 1.92134 3.86068C2.98201 3.86068 3.84268 2.98201 3.84268 1.92134C3.84201 0.860669 2.98134 0 1.92134 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="YouTube">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6703 1.87771C15.486 1.14347 14.9455 0.564673 14.2602 0.366965C13.0081 0 7.99982 0 7.99982 0C7.99982 0 2.9917 0 1.73965 0.353052C1.06748 0.550551 0.513868 1.14357 0.329493 1.87771C0 3.21879 0 6 0 6C0 6 0 8.79523 0.329493 10.1223C0.514063 10.8564 1.0543 11.4352 1.73975 11.6329C3.00489 12 8.00001 12 8.00001 12C8.00001 12 13.0081 12 14.2602 11.6469C14.9456 11.4493 15.486 10.8705 15.6705 10.1364C15.9999 8.79523 15.9999 6.01412 15.9999 6.01412C15.9999 6.01412 16.0131 3.21879 15.6703 1.87771ZM6.40529 8.56938V3.43062L10.5699 6L6.40529 8.56938Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                </div>
                <span class="text-xs text-grey-800">Prime View Real Estate - Prime View Real Estate WLL. All Rights Reserved. Prime View Real Estate is a registered trademark of Prime View Real Estate WLL Qatar.</span>
            </div>
            <div class="footer__bottom">
                <div class="footer__copyright">
                    <span class="text-grey-50 text-xs">© 2026 Prime View Real Estate W.L.L. All Rights Reserved.</span>
                </div>
                <div class="footerBoottomLinks">
                    <a href="/en/privacy-policy.html" class="text-xs text-grey-50 text-decoration-none">Privacy Policy</a>
                    <div class="separator"></div>
                    <a href="/en/terms-and-conditions.html" class="text-xs text-grey-50 text-decoration-none">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    </div>`;

// 2. Unified Arabic Footer
const unifiedArabicFooter = `    <div class="footerWrapper">
        <footer class="footer">
            <div class="footer__row2">
                <div class="footer__row2-left flex flex-col gap-3xl">
                    <div class="text-grey-200">
                        <a href="/ar.html" aria-label="الرئيسية - برايم فيو العقارية">
                            <img src="/images/prime-view-logo.png" alt="برايم فيو العقارية" style="height: 44px; width: auto; max-width: 220px; display: block;" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <span class="text-grey-600 text-sm font-primary">تأسست شركة برايم فيو العقارية (Prime View Real Estate W.L.L.) في الدوحة - قطر، وهي شركة وساطة عقارية مرخصة تقدم خدمات استشارية فاخرة تعتمد على أحدث الحلول الرقمية والبيانات السوقية المتقدمة لربط المستثمرين والعملاء بأفضل العقارات السكنية والتجارية في قطر.</span>
                </div>
                <div class="footer__row2-right footerLinkColumns">
                    <div class="footerLinkColumns__left flex flex-col gap-lg">
                        <span class="text-md text-grey-800">عقارات للبيع</span>
                        <div class="flex flex-col gap-sm">
                            <a href="/en/buy/apartments-for-sale.html" class="text-sm text-grey-50 text-decoration-none">شقق للبيع</a>
                            <a href="/en/buy/villas-for-sale.html" class="text-sm text-grey-50 text-decoration-none">فلل للبيع</a>
                            <a href="/en/buy/offices-for-sale.html" class="text-sm text-grey-50 text-decoration-none">مكاتب وعقارات تجارية</a>
                            <a href="/en/buy/land-for-sale.html" class="text-sm text-grey-50 text-decoration-none">أراضي للبيع</a>
                            <a href="/en/buy/properties-for-sale.html" class="text-sm text-grey-50 text-decoration-none">كافة عقارات البيع</a>
                        </div>
                    </div>
                    <div class="footerLinkColumns__right flex">
                        <div class="flex flex-col flex-1 gap-lg">
                            <span class="text-md text-grey-800">عقارات للإيجار</span>
                            <div class="flex flex-col gap-sm">
                                <a href="/en/rent/apartments-for-rent.html" class="text-sm text-grey-50 text-decoration-none">شقق للإيجار</a>
                                <a href="/en/rent/villas-for-rent.html" class="text-sm text-grey-50 text-decoration-none">فلل للإيجار</a>
                                <a href="/en/rent/offices-for-rent.html" class="text-sm text-grey-50 text-decoration-none">مكاتب للإيجار</a>
                                <a href="/en/rent/whole-building-for-rent.html" class="text-sm text-grey-50 text-decoration-none">مبانٍ بالكامل للإيجار</a>
                                <a href="/en/rent/properties-for-rent.html" class="text-sm text-grey-50 text-decoration-none">كافة عقارات الإيجار</a>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 gap-lg">
                            <span class="text-md text-grey-800">الشركة</span>
                            <div class="flex flex-col gap-sm">
                                <a href="/en/about.html" class="text-sm text-grey-50 text-decoration-none">من نحن</a>
                                <a href="/en/developments.html" class="text-sm text-grey-50 text-decoration-none">المشاريع الجديدة</a>
                                <a href="/en/areas.html" class="text-sm text-grey-50 text-decoration-none">مناطق قطر</a>
                                <a href="/en/contact.html" class="text-sm text-grey-50 text-decoration-none">اتصل بنا</a>
                                <a href="/en/privacy-policy.html" class="text-sm text-grey-50 text-decoration-none">سياسة الخصوصية</a>
                                <a href="/en/terms-and-conditions.html" class="text-sm text-grey-50 text-decoration-none">الشروط والأحكام</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-desktop-row gap-4xl gap-desktop-6xl mt-6xl mt-tablet-7xl">
                <div class="footerSocialMedia">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Facebook">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 0C9.49 0.017003 10.8361 0.383206 12.0382 1.09861C13.2261 1.79973 14.2141 2.79386 14.908 3.98593C15.6191 5.19533 15.9831 6.54957 16 8.04867C15.9578 10.0998 15.3108 11.8516 14.0592 13.3042C12.8075 14.7568 11.2045 15.6555 9.54498 16V10.2493H11.1139L11.4687 7.9894H9.09301V6.50924C9.07982 6.20239 9.17686 5.90094 9.36658 5.65941C9.55657 5.41722 9.89114 5.28993 10.3703 5.27753H11.8049V3.29792C11.7843 3.29129 11.589 3.26511 11.2189 3.21935C10.7992 3.17025 10.3772 3.14402 9.95467 3.14078C8.99835 3.1452 8.24203 3.41496 7.68571 3.95006C7.12937 4.48502 6.84518 5.25899 6.83313 6.27197V7.9894H5.02522V10.2493H6.83313V16C4.79552 15.6555 3.19245 14.7568 1.9408 13.3042C0.689143 11.8516 0.0422341 10.0998 0 8.04867C0.0168975 6.5495 0.380886 5.19526 1.09196 3.98593C1.78584 2.79386 2.77393 1.79973 3.96175 1.09861C5.16387 0.383344 6.50995 0.0171408 7.99999 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="X">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52217 6.77491L15.4785 0H14.0671L8.89516 5.88256L4.76437 0H0L6.24656 8.89547L0 16H1.41155L6.87321 9.78782L11.2356 16H16L9.52183 6.77491H9.52217ZM7.58887 8.97384L6.95596 8.08805L1.92015 1.03974H4.0882L8.15216 6.72795L8.78507 7.61374L14.0677 15.0075H11.8997L7.58887 8.97418V8.97384Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9593 4.70406C15.9218 3.85391 15.7843 3.26945 15.5874 2.763C15.3842 2.22542 15.0715 1.74412 14.662 1.34402C14.2618 0.937686 13.7772 0.621949 13.2458 0.421959C12.7363 0.22502 12.1548 0.0875418 11.3044 0.0500587C10.4478 0.00940127 10.1758 0 8.00311 0C5.83039 0 5.55844 0.00940127 4.70496 0.0468843C3.85465 0.0843673 3.27007 0.221968 2.76365 0.418784C2.22584 0.621949 1.74445 0.934512 1.34427 1.34402C0.937865 1.74412 0.62219 2.22859 0.422039 2.75995C0.225063 3.26945 0.0875585 3.85074 0.0500683 4.70088C0.00940308 5.55738 0 5.82928 0 8.00159C0 10.1739 0.00940308 10.4458 0.0468933 11.2991C0.0843835 12.1493 0.22201 12.7337 0.418986 13.2402C0.62219 13.7778 0.937865 14.2591 1.34427 14.6592C1.74445 15.0655 2.22902 15.3812 2.76047 15.5812C3.27007 15.7782 3.85147 15.9156 4.7019 15.9531C5.55526 15.9907 5.82734 16 8.00006 16C10.1728 16 10.4447 15.9907 11.2982 15.9531C12.1485 15.9156 12.7331 15.7782 13.2395 15.5812C14.315 15.1655 15.1653 14.3153 15.5811 13.2402C15.778 12.7307 15.9156 12.1493 15.9531 11.2991C15.9906 10.4458 16 10.1739 16 8.00159C16 5.82928 15.9968 5.55738 15.9593 4.70406ZM14.5182 11.2366C14.4838 12.018 14.3525 12.44 14.2431 12.7213C13.9742 13.4183 13.4209 13.9715 12.7237 14.2404C12.4423 14.3498 12.0172 14.481 11.2387 14.5153C10.3947 14.5529 10.1415 14.5622 8.00629 14.5622C5.87106 14.5622 5.61473 14.5529 4.77371 14.5153C3.99215 14.481 3.57012 14.3498 3.28876 14.2404C2.94182 14.1122 2.62602 13.909 2.3697 13.6433C2.10397 13.3839 1.90076 13.0713 1.77254 12.7244C1.66312 12.4431 1.53185 12.018 1.49753 11.2398C1.45992 10.3959 1.45064 10.1426 1.45064 8.00782C1.45064 5.87299 1.45992 5.61671 1.49753 4.77597C1.53185 3.99457 1.66312 3.57261 1.77254 3.2913C1.90076 2.94431 2.10397 2.6287 2.37287 2.3723C2.63225 2.10662 2.94487 1.90345 3.29193 1.77538C3.57329 1.66598 3.9985 1.53473 4.77688 1.5003C5.62096 1.46281 5.87423 1.45341 8.00934 1.45341C10.1477 1.45341 10.4009 1.46281 11.2419 1.5003C12.0235 1.53473 12.4455 1.66598 12.7269 1.77538C13.0738 1.90345 13.3896 2.10662 13.6459 2.3723C13.9117 2.63175 14.1149 2.94431 14.2431 3.2913C14.3525 3.57261 14.4838 3.99762 14.5182 4.77597C14.5557 5.61989 14.5651 5.87299 14.5651 8.00782C14.5651 10.1426 14.5557 10.3927 14.5182 11.2366Z" fill="#F2F2F2"/>
                            <path d="M8.00329 3.89111C5.73374 3.89111 3.89233 5.73206 3.89233 8.00131C3.89233 10.2706 5.73374 12.1115 8.00329 12.1115C10.273 12.1115 12.1143 10.2706 12.1143 8.00131C12.1143 5.73206 10.273 3.89111 8.00329 3.89111ZM8.00329 10.6675C6.53093 10.6675 5.33661 9.47353 5.33661 8.00131C5.33661 6.52909 6.53093 5.33513 8.00329 5.33513C9.4758 5.33513 10.67 6.52909 10.67 8.00131C10.67 9.47353 9.4758 10.6675 8.00329 10.6675Z" fill="#F2F2F2"/>
                            <path d="M13.2362 3.72908C13.2362 4.25897 12.8065 4.68861 12.2764 4.68861C11.7464 4.68861 11.3167 4.25897 11.3167 3.72908C11.3167 3.19907 11.7464 2.76953 12.2764 2.76953C12.8065 2.76953 13.2362 3.19907 13.2362 3.72908Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="LinkedIn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9961 16L16.0001 15.9993V10.1313C16.0001 7.26066 15.3821 5.04932 12.0261 5.04932C10.4128 5.04932 9.3301 5.93465 8.8881 6.77399H8.84143V5.31732H5.65942V15.9993H8.97277V10.71C8.97277 9.31733 9.23677 7.97066 10.9614 7.97066C12.6608 7.97066 12.6861 9.56 12.6861 10.7993V16L15.9961 16Z" fill="#F2F2F2"/>
                            <path d="M0.263672 5.31812H3.58101V16.0001H0.263672L0.263672 5.31812Z" fill="#F2F2F2"/>
                            <path d="M1.92134 0C0.860669 0 0 0.860669 0 1.92134C0 2.98201 0.860669 3.86068 1.92134 3.86068C2.98201 3.86068 3.84268 2.98201 3.84268 1.92134C3.84201 0.860669 2.98134 0 1.92134 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="YouTube">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6703 1.87771C15.486 1.14347 14.9455 0.564673 14.2602 0.366965C13.0081 0 7.99982 0 7.99982 0C7.99982 0 2.9917 0 1.73965 0.353052C1.06748 0.550551 0.513868 1.14357 0.329493 1.87771C0 3.21879 0 6 0 6C0 6 0 8.79523 0.329493 10.1223C0.514063 10.8564 1.0543 11.4352 1.73975 11.6329C3.00489 12 8.00001 12 8.00001 12C8.00001 12 13.0081 12 14.2602 11.6469C14.9456 11.4493 15.486 10.8705 15.6705 10.1364C15.9999 8.79523 15.9999 6.01412 15.9999 6.01412C15.9999 6.01412 16.0131 3.21879 15.6703 1.87771ZM6.40529 8.56938V3.43062L10.5699 6L6.40529 8.56938Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                </div>
                <span class="text-xs text-grey-800">برايم فيو العقارية - برايم فيو العقارية ذ.م.م. جميع الحقوق محفوظة. علامة تجارية مسجلة لشركة برايم فيو العقارية قطر.</span>
            </div>
            <div class="footer__bottom">
                <div class="footer__copyright">
                    <span class="text-grey-50 text-xs">© 2026 برايم فيو العقارية ذ.م.م. جميع الحقوق محفوظة.</span>
                </div>
                <div class="footerBoottomLinks">
                    <a href="/en/privacy-policy.html" class="text-xs text-grey-50 text-decoration-none">سياسة الخصوصية</a>
                    <div class="separator"></div>
                    <a href="/en/terms-and-conditions.html" class="text-xs text-grey-50 text-decoration-none">الشروط والأحكام</a>
                </div>
            </div>
        </footer>
    </div>`;

function getAllHtml(dir, list = []) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
        const full = path.join(dir, d.name);
        if (d.isDirectory()) getAllHtml(full, list);
        else if (d.name.endsWith('.html')) list.push(full);
    });
    return list;
}

const files = getAllHtml(publicDir);
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const isArabic = path.basename(file) === 'ar.html';
    const chosenFooter = isArabic ? unifiedArabicFooter : unifiedEnglishFooter;
    let modified = false;

    // 1. Remove appBanner div entirely
    const appBannerRegex = /<div class="appBanner"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;
    if (appBannerRegex.test(content)) {
        content = content.replace(appBannerRegex, '');
        modified = true;
    }
    // Also remove any remaining appBanner element variations
    const appBannerAltRegex = /<div class="appBanner" id="appBanner"[\s\S]*?<\/div>\s*<\/div>/gi;
    if (appBannerAltRegex.test(content)) {
        content = content.replace(appBannerAltRegex, '');
        modified = true;
    }

    // 2. Replace footerWrapper
    if (content.includes('<div class="footerWrapper">')) {
        // Replace from <div class="footerWrapper"> to its closing </div>
        const footerWrapperRegex = /<div class="footerWrapper">[\s\S]*?<\/footer>\s*<\/div>/gi;
        if (footerWrapperRegex.test(content)) {
            content = content.replace(footerWrapperRegex, chosenFooter);
            modified = true;
        } else {
            // In case of slight tag mismatch
            const startIdx = content.indexOf('<div class="footerWrapper">');
            const footerEndIdx = content.indexOf('</footer>', startIdx);
            if (startIdx !== -1 && footerEndIdx !== -1) {
                const endDivIdx = content.indexOf('</div>', footerEndIdx);
                if (endDivIdx !== -1) {
                    content = content.substring(0, startIdx) + chosenFooter + content.substring(endDivIdx + 6);
                    modified = true;
                }
            }
        }
    } else if (/<footer class="footer">[\s\S]*?<\/footer>/gi.test(content)) {
        content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/gi, chosenFooter);
        modified = true;
    }

    // 3. Remove all previous fgrealty links and replace with relative or Prime View paths
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/privacy-policy/gi, '/en/privacy-policy.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/terms-and-conditions/gi, '/en/terms-and-conditions.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/cookie-policy/gi, '/en/privacy-policy.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/about-us/gi, '/en/about.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/contact-us/gi, '/en/contact.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/areas/gi, '/en/areas.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/developments/gi, '/en/developments.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/buy\/properties-for-sale/gi, '/en/buy/properties-for-sale.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/buy\/apartments-for-sale/gi, '/en/buy/apartments-for-sale.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/buy\/villas-for-sale/gi, '/en/buy/villas-for-sale.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/buy\/offices-for-sale/gi, '/en/buy/offices-for-sale.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/rent\/properties-for-rent/gi, '/en/rent/properties-for-rent.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/rent\/apartments-for-rent/gi, '/en/rent/apartments-for-rent.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/rent\/villas-for-rent/gi, '/en/rent/villas-for-rent.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/en\/rent\/offices-for-rent/gi, '/en/rent/offices-for-rent.html');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/#website/gi, '/#website');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\/#organization/gi, '/#organization');
    content = content.replace(/https:\/\/www\.fgrealty\.qa\//gi, '/');
    content = content.replace(/https:\/\/www\.fgrealty\.qa/gi, '/');

    // 4. Clean up emails
    content = content.replace(/office@fgrealty\.qa/gi, 'office@primeview.qa');
    content = content.replace(/csr@fgrealty\.qa/gi, 'office@primeview.qa');
    content = content.replace(/commercial@fgrealty\.qa/gi, 'office@primeview.qa');

    // 5. Clean up old company names
    content = content.replace(/Find Great Realty W\.L\.L\./gi, 'Prime View Real Estate W.L.L.');
    content = content.replace(/Find Great Realty WLL/gi, 'Prime View Real Estate WLL');
    content = content.replace(/Find Great Realty/gi, 'Prime View Real Estate');

    // 6. Clean up old social links
    content = content.replace(/https:\/\/www\.facebook\.com\/fgrealtyqatar\/?/gi, 'https://www.facebook.com/');
    content = content.replace(/https:\/\/www\.facebook\.com\/fgrealtyqa\/?/gi, 'https://www.facebook.com/');
    content = content.replace(/https:\/\/x\.com\/fgrealty_qatar\/?/gi, 'https://x.com/');
    content = content.replace(/https:\/\/www\.instagram\.com\/fgrealty\/?/gi, 'https://www.instagram.com/');
    content = content.replace(/https:\/\/www\.linkedin\.com\/company\/fg-realty\/?/gi, 'https://www.linkedin.com/');
    content = content.replace(/https:\/\/www\.linkedin\.com\/company\/fgrealty-qa\/?/gi, 'https://www.linkedin.com/');
    content = content.replace(/https:\/\/www\.tiktok\.com\/@fgrealty\/?/gi, 'https://www.tiktok.com/');
    content = content.replace(/https:\/\/www\.youtube\.com\/channel\/UCgD9lZ07Bn-WgOyplucEHHw\/?/gi, 'https://www.youtube.com/');

    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
});

console.log(`Successfully updated footers, app banners, and branding links in ${modifiedCount} HTML files!`);
