const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

// Extract the exact navbar and mobile menu from en/contact.html
const contactHtml = fs.readFileSync(path.join(publicDir, 'en/contact.html'), 'utf8');

// Get nav from <!-- SITE NAVBAR - Copied from Homepage --> to <!-- /SITE NAVBAR or start of HERO -->
const navStart = contactHtml.indexOf('<!-- SITE NAVBAR - Copied from Homepage -->');
const navEnd = contactHtml.indexOf('<!-- ── HERO ── -->');
let navbarHtml = contactHtml.substring(navStart, navEnd).trim();

// Unified English Footer with 24 Projects
const unifiedEnglishFooter = `    <div class="footerWrapper" style="background: #0d0d11; border-top: 1px solid rgba(201, 168, 76, 0.25); color: #fff;">
        <footer class="footer" style="max-width: 1400px; margin: 0 auto; padding: 60px 24px 28px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 48px;">
                <!-- Brand Info -->
                <div style="flex: 1 1 280px; max-width: 320px;">
                    <a href="/" aria-label="Prime View Real Estate Home">
                        <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 44px; width: auto; max-width: 220px; display: block; margin-bottom: 18px;" loading="lazy" decoding="async" />
                    </a>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.86rem; line-height: 1.7; margin-bottom: 16px; font-family: 'Plus Jakarta Sans', sans-serif;">
                        Prime View Real Estate W.L.L. is Qatar's premier luxury real estate brokerage. Discover our bespoke portfolio of 24 flagship residential, waterfront, and architectural developments across Lusail, The Pearl, and Doha.
                    </p>
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); border-radius: 20px; font-size: 0.78rem; color: #e7cf8a; font-weight: 600;">
                        <span style="display: inline-block; width: 8px; height: 8px; background: #c9a84c; border-radius: 50%;"></span> 24 Flagship Developments
                    </div>
                </div>

                <!-- 24 Projects Grid & Company Links -->
                <div style="flex: 3 1 720px; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 28px;">
                    
                    <!-- Col 1: Waterfront Estates (Lusail / Qetaifan) -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Waterfront Estates</span>
                        <a href="/en/development/skala-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Skala Villas</a>
                        <a href="/en/development/via-doro.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Via D'Oro Villas</a>
                        <a href="/en/development/carlton-house.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Carlton House</a>
                        <a href="/en/development/canal-bay.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Canal Bay</a>
                        <a href="/en/development/skala-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Skala Tower</a>
                        <a href="/en/development/la-mer-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">La Mer Tower</a>
                    </div>

                    <!-- Col 2: Lusail City Heights -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Lusail Heights</span>
                        <a href="/en/development/city-avenue.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">City Avenue</a>
                        <a href="/en/development/rivan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Rivan Tower</a>
                        <a href="/en/development/elite-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Elite Residence</a>
                        <a href="/en/development/boulevard-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Boulevard Residence</a>
                        <a href="/en/development/orjuwan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Orjuwan Tower</a>
                        <a href="/en/development/bliss-residences.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Residences</a>
                    </div>

                    <!-- Col 3: The Pearl Island Collection -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">The Pearl Island</span>
                        <a href="/en/development/milos.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Milos Residence</a>
                        <a href="/en/development/floresta-105.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Floresta 105</a>
                        <a href="/en/development/al-mayyas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Al Mayyas Tower</a>
                        <a href="/en/development/coralia-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Coralia Villas</a>
                        <a href="/en/development/corallia.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Corallia Lease-to-Own</a>
                        <a href="/en/development/marbella.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Marbella Residence</a>
                    </div>

                    <!-- Col 4: Villa Estates & Towers -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Villa Estates & Towers</span>
                        <a href="/en/development/flora-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Flora Villas</a>
                        <a href="/en/development/bliss-gardens.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Gardens (Salata)</a>
                        <a href="/en/development/bliss-gardens-2.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Gardens (Muraikh)</a>
                        <a href="/en/development/voya-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Voya Waterfront</a>
                        <a href="/en/development/bliss-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Tower</a>
                        <a href="/en/development/miran-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Miran Tower</a>
                    </div>

                    <!-- Col 5: Company & Quick Links -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Company</span>
                        <a href="/en/about.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">About Us</a>
                        <a href="/en/developments.html" style="color: #c9a84c; font-weight: 600; font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c9a84c'">All 24 Projects ↗</a>
                        <a href="/en/areas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Qatar's Areas</a>
                        <a href="/en/contact.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Contact Advisory</a>
                        <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Privacy Policy</a>
                        <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Terms & Conditions</a>
                    </div>
                </div>
            </div>

            <!-- Social & Legal Bar -->
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
                <div class="footerSocialMedia" style="display: flex; gap: 12px; align-items: center;">
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
                <span class="text-xs" style="color: rgba(255,255,255,0.45);">Prime View Real Estate - Prime View Real Estate W.L.L. All Rights Reserved. Licensed Luxury Real Estate Brokerage in Qatar.</span>
            </div>

            <div class="footer__bottom" style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div class="footer__copyright">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">© 2026 Prime View Real Estate W.L.L. All Rights Reserved.</span>
                </div>
                <div class="footerBoottomLinks" style="display: flex; align-items: center; gap: 14px;">
                    <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">Privacy Policy</a>
                    <div style="width: 1px; height: 12px; background: rgba(255,255,255,0.2);"></div>
                    <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    </div>`;

const sharedStyles = `
    <link rel="preload" as="style" href="/build/assets/core-BJlXrooN.css" />
    <link rel="stylesheet" href="/build/assets/core-BJlXrooN.css" />
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gold: #B8902A;
            --gold-light: #D4A843;
            --gold-dark: #8A6A1A;
            --gold-glow: rgba(184, 144, 42, 0.22);
            --bg-page: #F7F5F0;
            --bg-white: #FFFFFF;
            --bg-card: #FFFFFF;
            --border-subtle: #E8E4DC;
            --border-gold: rgba(184, 144, 42, 0.22);
            --text-primary: #1C1A16;
            --text-secondary: #5C5648;
            --text-muted: #8A8278;
            --radius-md: 14px;
            --radius-lg: 20px;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-page);
            color: var(--text-primary);
            overflow-x: hidden;
            line-height: 1.8;
        }

        /* Hero */
        .legal-hero {
            position: relative;
            padding: 160px 5% 70px;
            text-align: center;
            background: linear-gradient(180deg, rgba(15, 13, 10, 0.75) 0%, rgba(20, 17, 12, 0.92) 100%),
                        url('/images/DohaSkyline.jpg') center/cover no-repeat;
            color: #FFFFFF;
        }
        .legal-hero__badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 18px;
            background: rgba(184, 144, 42, 0.18);
            border: 1px solid rgba(212, 168, 67, 0.45);
            border-radius: 50px;
            font-size: 0.78rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #E2C068;
            margin-bottom: 20px;
        }
        .legal-hero__title {
            font-family: 'Cinzel', serif;
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 14px;
            color: #FFFFFF;
        }
        .legal-hero__subtitle {
            font-size: clamp(0.95rem, 1.5vw, 1.15rem);
            color: #D1CBC0;
            max-width: 720px;
            margin: 0 auto;
            font-weight: 300;
        }

        /* Container & Cards */
        .legal-container {
            max-width: 1040px;
            margin: 0 auto;
            padding: 60px 24px 100px;
        }
        .legal-card {
            background: var(--bg-white);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-subtle);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            padding: 48px 44px;
            margin-bottom: 36px;
            position: relative;
            overflow: hidden;
        }
        .legal-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, var(--gold-light), var(--gold-dark));
        }
        .legal-card h2 {
            font-family: 'Cinzel', serif;
            font-size: 1.45rem;
            color: var(--text-primary);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .legal-card h2 i {
            color: var(--gold);
            font-size: 1.15rem;
        }
        .legal-card p {
            color: var(--text-secondary);
            font-size: 0.96rem;
            margin-bottom: 16px;
        }
        .legal-card ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 18px;
        }
        .legal-card ul li {
            position: relative;
            padding-left: 26px;
            margin-bottom: 10px;
            color: var(--text-secondary);
            font-size: 0.95rem;
        }
        .legal-card ul li::before {
            content: '✦';
            position: absolute;
            left: 0;
            top: 0;
            color: var(--gold);
            font-size: 0.85rem;
        }
        .legal-highlight-box {
            background: #FAF8F4;
            border: 1px solid var(--border-gold);
            border-radius: var(--radius-md);
            padding: 24px 28px;
            margin-top: 24px;
        }
        .legal-contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }
        .legal-contact-item {
            background: #FFFFFF;
            padding: 18px 20px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-subtle);
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .legal-contact-item i {
            font-size: 1.3rem;
            color: var(--gold);
        }
        .legal-contact-item strong {
            display: block;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-muted);
        }
        .legal-contact-item a, .legal-contact-item span {
            color: var(--text-primary);
            font-weight: 600;
            text-decoration: none;
            font-size: 0.95rem;
        }
        .legal-meta {
            text-align: center;
            margin-top: 40px;
            color: var(--text-muted);
            font-size: 0.88rem;
        }

        /* Navbar & Mega Menu styles */
        .navigationMobile {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 9999 !important;
            background: rgba(255, 255, 255, 0.94) !important;
            backdrop-filter: blur(20px) !important;
            border-bottom: 1px solid rgba(232, 228, 220, 0.9) !important;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06) !important;
            padding: 0 2.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            height: 76px !important;
        }
        .headerNavLinks .headerNavLink a {
            color: #1C1A16 !important;
            font-weight: 500 !important;
            font-size: 0.92rem !important;
            letter-spacing: 0.3px !important;
            transition: color 0.2s !important;
        }
        .headerNavLinks .headerNavLink a:hover {
            color: var(--gold) !important;
        }
        .headerNavLinks .chevron {
            stroke: #1C1A16 !important;
            fill: #1C1A16 !important;
        }

        @media (max-width: 1024px) {
            .navigationMobile__left-hamburger { display: flex !important; }
            .navigationMobile__right { display: none !important; }
            .navigationMobile__left-mobileLogo { display: flex !important; align-items: center !important; }
            .navigationMobile__left-desktopLogo { display: none !important; }
            .navigationMobile { padding: 0 1.25rem !important; }
            .legal-card { padding: 32px 24px; }
        }
    </style>
    <script src="/build/assets/core-BJlXrooN.js" defer></script>
`;

// ==========================================
// 1. Generate privacy-policy.html
// ==========================================
const privacyPolicyContent = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy | Prime View Real Estate Qatar</title>
    <meta name="description" content="Read the official Privacy Policy of Prime View Real Estate W.L.L. Learn how we collect, protect, and handle your data with the highest confidentiality in Qatar.">
    <link rel="canonical" href="/en/privacy-policy.html">
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    ${sharedStyles}
</head>
<body>
    ${navbarHtml}

    <main>
        <section class="legal-hero">
            <div class="legal-hero__badge">
                <i class="fa-solid fa-shield-halved"></i> Legal & Data Governance
            </div>
            <h1 class="legal-hero__title">Privacy Policy</h1>
            <p class="legal-hero__subtitle">Your confidentiality, data security, and trust are our highest priorities. Learn how Prime View Real Estate protects your personal information.</p>
        </section>

        <div class="legal-container">
            <article class="legal-card">
                <h2><i class="fa-solid fa-building-shield"></i> 1. Introduction & Overview</h2>
                <p>Prime View Real Estate W.L.L. ("Prime View Real Estate", "we", "our", or "us") is a premier licensed luxury real estate brokerage incorporated and operating in the State of Qatar, with its headquarters at Al Jazeera Commercial Tower, West Bay, Doha, Qatar.</p>
                <p>We are dedicated to safeguarding your privacy and protecting the personal and financial information you entrust to us when exploring luxury real estate, acquiring properties, arranging leases, or consulting our private client advisory team.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-clipboard-list"></i> 2. Information We Collect</h2>
                <p>We may collect information directly from you when you submit an inquiry, request a property viewing, schedule a consultation, or engage our brokerage services:</p>
                <ul>
                    <li><strong>Contact Details:</strong> Full name, email address, telephone and WhatsApp contact numbers, and preferred language.</li>
                    <li><strong>Property & Investment Criteria:</strong> Desired property types, preferred locations (such as Lusail, The Pearl, West Bay), budget allocations, investment horizons, and specific luxury lifestyle requirements.</li>
                    <li><strong>Transaction & Compliance Information:</strong> Identification documents, proof of funds, or corporate verification as mandated by Qatar real estate licensing and regulatory compliance laws.</li>
                    <li><strong>Technical Usage Data:</strong> Anonymized IP addresses, browser specifications, operating system details, and interaction metrics to optimize our digital portal performance.</li>
                </ul>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-gears"></i> 3. How We Use Your Information</h2>
                <p>All collected data is utilized strictly for professional real estate brokerage and bespoke client advisory purposes:</p>
                <ul>
                    <li>To present tailored property recommendations and off-plan investment portfolios matching your distinct requirements.</li>
                    <li>To coordinate VIP private property viewings and developer negotiations.</li>
                    <li>To manage contract preparation, lease agreements, and freehold title transfer documentation under Ministry of Justice guidelines.</li>
                    <li>To deliver curated market intelligence, investment reports, and property alerts with your explicit consent.</li>
                </ul>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-user-lock"></i> 4. Data Security & Storage</h2>
                <p>We implement state-of-the-art administrative, technical, and physical safeguards designed to prevent unauthorized access, disclosure, alteration, or destruction of your personal information.</p>
                <p>Our digital infrastructure operates on secure servers with enterprise SSL encryption, strict role-based access protocols, and continuous security auditing in compliance with Qatar Data Privacy Law No. 13 of 2016.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-handshake-angle"></i> 5. Non-Disclosure & Third-Party Sharing</h2>
                <p>Prime View Real Estate maintains an unyielding commitment to client discretion. We never sell, rent, or trade your personal data to external third-party marketing companies.</p>
                <p>Information is only shared with verified legal advisors, certified escrow entities, and government land registries strictly as required to execute your real estate transactions.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-scale-balanced"></i> 6. Your Rights & Data Access</h2>
                <p>Under Qatar personal data protection laws, you maintain full authority over your personal information. You have the right to request access to, update, rectify, or request the deletion of your stored records at any time by contacting our legal compliance desk.</p>

                <div class="legal-highlight-box">
                    <h3 style="font-family: 'Cinzel', serif; font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Contact Our Compliance & Data Protection Officer</h3>
                    <p style="margin-bottom: 0; color: var(--text-secondary); font-size: 0.92rem;">If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact us:</p>
                    
                    <div class="legal-contact-grid">
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-envelope"></i>
                            <div>
                                <strong>Direct Email</strong>
                                <a href="mailto:office@primeview.qa">office@primeview.qa</a>
                            </div>
                        </div>
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-phone"></i>
                            <div>
                                <strong>Phone / WhatsApp</strong>
                                <a href="tel:+97430451451">+974 3045 1451</a>
                            </div>
                        </div>
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <strong>Corporate Office</strong>
                                <span>Al Jazeera Tower, West Bay, Doha, Qatar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <div class="legal-meta">
                <p>Last Updated: August 2026 | Prime View Real Estate W.L.L. Doha, Qatar</p>
            </div>
        </div>
    </main>

    ${unifiedEnglishFooter}
</body>
</html>`;

// ==========================================
// 2. Generate terms-and-conditions.html
// ==========================================
const termsConditionsContent = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms and Conditions | Prime View Real Estate Qatar</title>
    <meta name="description" content="Review the Terms and Conditions for Prime View Real Estate W.L.L. Qatar. Professional luxury real estate brokerage and advisory standards in Doha.">
    <link rel="canonical" href="/en/terms-and-conditions.html">
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    ${sharedStyles}
</head>
<body>
    ${navbarHtml}

    <main>
        <section class="legal-hero">
            <div class="legal-hero__badge">
                <i class="fa-solid fa-gavel"></i> Regulatory Compliance & Terms
            </div>
            <h1 class="legal-hero__title">Terms & Conditions</h1>
            <p class="legal-hero__subtitle">Please review the terms and standards governing your use of Prime View Real Estate platforms and luxury brokerage advisory services.</p>
        </section>

        <div class="legal-container">
            <article class="legal-card">
                <h2><i class="fa-solid fa-file-contract"></i> 1. Acceptance of Terms</h2>
                <p>By accessing the Prime View Real Estate website, utilizing our online property discovery portals, or engaging our advisory team for real estate services, you agree to comply with and be bound by these Terms and Conditions.</p>
                <p>These terms constitute a legally binding agreement between you and Prime View Real Estate W.L.L., a company registered in Doha, Qatar under commercial registration and licensed by the Ministry of Justice.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-compass"></i> 2. Scope of Real Estate Services</h2>
                <p>Prime View Real Estate provides premium real estate brokerage, property acquisition advisory, rental management, freehold investment consulting, and developer representations across Qatar, including Doha, Lusail City, The Pearl Island, West Bay Lagoon, and Al Wakra.</p>
                <p>All property transactions are conducted in full compliance with State of Qatar Real Estate Brokerage Law No. 22 of 2017 and applicable statutory regulations.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-house-circle-check"></i> 3. Property Information & Availability</h2>
                <p>While Prime View Real Estate strives to maintain exact precision in all property listings, descriptions, floor plans, pricing schedules, and availability statuses:</p>
                <ul>
                    <li>All listings are subject to prior sale, lease, price revision, or withdrawal without prior notification.</li>
                    <li>Square meter measurements, architectural renderings, and prospective yield forecasts are provided for general guidance and marketing illustration purposes.</li>
                    <li>Official contracts, title deed verifications, and signed lease agreements take precedence over web portal summaries.</li>
                </ul>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-copyright"></i> 4. Intellectual Property Rights</h2>
                <p>All content published on this website—including but not limited to brand emblems, property photography, architectural visual tours, texts, graphics, code, and project portfolios—is the exclusive proprietary property of Prime View Real Estate W.L.L. or its licensing partners.</p>
                <p>Unauthorized copying, reproduction, redistribution, or commercial exploitation without prior written consent from Prime View Real Estate is strictly prohibited.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-shield"></i> 5. Limitation of Liability</h2>
                <p>Prime View Real Estate W.L.L. and its executive management shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital portals, or reliance on market projections.</p>
                <p>Clients are encouraged to seek independent financial, legal, and tax advice tailored to their specific real estate transactions.</p>
            </article>

            <article class="legal-card">
                <h2><i class="fa-solid fa-landmark"></i> 6. Governing Law & Jurisdiction</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising in connection with these terms or our real estate services shall be subject to the exclusive jurisdiction of the competent courts of Doha, Qatar.</p>

                <div class="legal-highlight-box">
                    <h3 style="font-family: 'Cinzel', serif; font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Legal & Corporate Inquiries</h3>
                    <p style="margin-bottom: 0; color: var(--text-secondary); font-size: 0.92rem;">For contractual inquiries, legal notices, or formal representations, please contact our corporate headquarters:</p>
                    
                    <div class="legal-contact-grid">
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-envelope"></i>
                            <div>
                                <strong>Legal Desk</strong>
                                <a href="mailto:office@primeview.qa">office@primeview.qa</a>
                            </div>
                        </div>
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-phone"></i>
                            <div>
                                <strong>Direct Line</strong>
                                <a href="tel:+97430451451">+974 3045 1451</a>
                            </div>
                        </div>
                        <div class="legal-contact-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <strong>Location</strong>
                                <span>Al Jazeera Tower, West Bay, Doha, Qatar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <div class="legal-meta">
                <p>Last Updated: August 2026 | Prime View Real Estate W.L.L. Doha, Qatar</p>
            </div>
        </div>
    </main>

    ${unifiedEnglishFooter}
</body>
</html>`;

// Write to en/ directory and root for maximum route coverage
fs.writeFileSync(path.join(publicDir, 'en/privacy-policy.html'), privacyPolicyContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'privacy-policy.html'), privacyPolicyContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'en/terms-and-conditions.html'), termsConditionsContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'terms-and-conditions.html'), termsConditionsContent, 'utf8');

console.log('Successfully regenerated Prime View Real Estate Privacy Policy and Terms & Conditions pages with 24 projects footer!');
