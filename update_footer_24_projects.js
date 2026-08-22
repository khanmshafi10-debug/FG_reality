const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

// 1. Luxury English Footer with all 24 Projects categorized
const luxuryEnglish24Footer = `    <div class="footerWrapper" style="background: #0d0d11; border-top: 1px solid rgba(201, 168, 76, 0.25); color: #fff;">
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

// 2. Luxury Arabic Footer with all 24 Projects categorized
const luxuryArabic24Footer = `    <div class="footerWrapper" style="background: #0d0d11; border-top: 1px solid rgba(201, 168, 76, 0.25); color: #fff;">
        <footer class="footer" style="max-width: 1400px; margin: 0 auto; padding: 60px 24px 28px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 48px;">
                <!-- Brand Info -->
                <div style="flex: 1 1 280px; max-width: 320px;">
                    <a href="/ar.html" aria-label="برايم فيو العقارية">
                        <img src="/images/prime-view-logo.png" alt="برايم فيو العقارية" style="height: 44px; width: auto; max-width: 220px; display: block; margin-bottom: 18px;" loading="lazy" decoding="async" />
                    </a>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.86rem; line-height: 1.7; margin-bottom: 16px;">
                        تأسست شركة برايم فيو العقارية (Prime View Real Estate W.L.L.) في الدوحة - قطر، لتقدم لعملائها نخبة المشاريع الفاخرة التي تضم 24 مشروعاً سكنياً وعقارياً رائداً في لوسيل واللؤلؤة وكافة مناطق قطر.
                    </p>
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); border-radius: 20px; font-size: 0.78rem; color: #e7cf8a; font-weight: 600;">
                        <span style="display: inline-block; width: 8px; height: 8px; background: #c9a84c; border-radius: 50%;"></span> 24 مشروعاً عقارياً رائداً
                    </div>
                </div>

                <!-- 24 Projects Grid & Company Links -->
                <div style="flex: 3 1 720px; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 28px;">
                    
                    <!-- Col 1: مشاريع الواجهة البحرية -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">الواجهة البحرية</span>
                        <a href="/en/development/skala-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فلل سكالا</a>
                        <a href="/en/development/via-doro.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فلل فيا دورو</a>
                        <a href="/en/development/carlton-house.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">كارلتون هاوس</a>
                        <a href="/en/development/canal-bay.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">كانال باي</a>
                        <a href="/en/development/skala-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج سكالا</a>
                        <a href="/en/development/la-mer-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج لا مير</a>
                    </div>

                    <!-- Col 2: أبراج لوسيل -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">أبراج لوسيل</span>
                        <a href="/en/development/city-avenue.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">سيتي أفينيو</a>
                        <a href="/en/development/rivan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج ريفان</a>
                        <a href="/en/development/elite-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">إيليت ريزيدنس</a>
                        <a href="/en/development/boulevard-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">بوليفارد ريزيدنس</a>
                        <a href="/en/development/orjuwan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج أرجوان</a>
                        <a href="/en/development/bliss-residences.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">بليس ريزيدنس</a>
                    </div>

                    <!-- Col 3: جزيرة اللؤلؤة -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">جزيرة اللؤلؤة</span>
                        <a href="/en/development/milos.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">ميلوس ريزيدنس</a>
                        <a href="/en/development/floresta-105.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فلوريستا 105</a>
                        <a href="/en/development/al-mayyas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج المياس</a>
                        <a href="/en/development/coralia-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فلل كوراليا</a>
                        <a href="/en/development/corallia.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">كوراليا إيجار للتملك</a>
                        <a href="/en/development/marbella.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">ماربيلا ريزيدنس</a>
                    </div>

                    <!-- Col 4: الفلل والأبراج السكنية -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">الفلل والأبراج السكنية</span>
                        <a href="/en/development/flora-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فلورا فيلا</a>
                        <a href="/en/development/bliss-gardens.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">بليس جاردنز (الهلال)</a>
                        <a href="/en/development/bliss-gardens-2.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">بليس جاردنز (المريخ)</a>
                        <a href="/en/development/voya-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">فويا ووترفرونت</a>
                        <a href="/en/development/bliss-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج بليس</a>
                        <a href="/en/development/miran-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">برج ميران</a>
                    </div>

                    <!-- Col 5: الشركة -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">الشركة</span>
                        <a href="/en/about.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">من نحن</a>
                        <a href="/en/developments.html" style="color: #c9a84c; font-weight: 600; font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">كافة المشاريع الـ 24 ↗</a>
                        <a href="/en/areas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">مناطق قطر</a>
                        <a href="/en/contact.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">اتصل بنا</a>
                        <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">سياسة الخصوصية</a>
                        <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;">الشروط والأحكام</a>
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
                <span class="text-xs" style="color: rgba(255,255,255,0.45);">برايم فيو العقارية - برايم فيو العقارية ذ.م.م. جميع الحقوق محفوظة. شركة وساطة عقارية مرخصة في قطر.</span>
            </div>

            <div class="footer__bottom" style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div class="footer__copyright">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">© 2026 برايم فيو العقارية ذ.م.م. جميع الحقوق محفوظة.</span>
                </div>
                <div class="footerBoottomLinks" style="display: flex; align-items: center; gap: 14px;">
                    <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">سياسة الخصوصية</a>
                    <div style="width: 1px; height: 12px; background: rgba(255,255,255,0.2);"></div>
                    <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">الشروط والأحكام</a>
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
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const isArabic = path.basename(file) === 'ar.html';
    const chosenFooter = isArabic ? luxuryArabic24Footer : luxuryEnglish24Footer;

    if (content.includes('<div class="footerWrapper"')) {
        const footerWrapperRegex = /<div class="footerWrapper"[\s\S]*?<\/footer>\s*<\/div>/gi;
        if (footerWrapperRegex.test(content)) {
            content = content.replace(footerWrapperRegex, chosenFooter);
        } else {
            const startIdx = content.indexOf('<div class="footerWrapper"');
            const footerEndIdx = content.indexOf('</footer>', startIdx);
            if (startIdx !== -1 && footerEndIdx !== -1) {
                const endDivIdx = content.indexOf('</div>', footerEndIdx);
                if (endDivIdx !== -1) {
                    content = content.substring(0, startIdx) + chosenFooter + content.substring(endDivIdx + 6);
                }
            }
        }
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Updated 24-projects footer across ${updatedCount} HTML files!`);
