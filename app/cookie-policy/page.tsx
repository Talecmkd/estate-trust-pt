import { Mail, Cookie, Settings, BarChart, Shield } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-brand" />
            Cookie Policy
          </h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg text-slate-400">
              Last Updated: January 12, 2026
            </p>

            <p className="text-lg">
              This Cookie Policy explains how EstateTrust uses cookies and similar tracking technologies on our platform. By using our service, you consent to the use of cookies as described in this policy.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies can be "persistent" or "session" cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device until deleted or expired</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h2>
              <p>
                We use cookies and similar tracking technologies for several purposes, including to enhance your experience, analyze usage patterns, and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Types of Cookies We Use</h2>

              <div className="space-y-6 mt-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-brand" />
                    Essential Cookies
                  </h3>
                  <p className="mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and accessibility features.
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Examples:</strong> Session management, authentication tokens, security features
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Duration:</strong> Session or up to 1 year
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Can be disabled:</strong> No - these are required for the site to function
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-brand" />
                    Analytics Cookies
                  </h3>
                  <p className="mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Examples:</strong> Google Analytics, usage statistics, page view tracking
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Can be disabled:</strong> Yes - through cookie settings
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-brand" />
                    Functional Cookies
                  </h3>
                  <p className="mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Examples:</strong> Language preferences, display settings, user interface customization
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Duration:</strong> Up to 1 year
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Can be disabled:</strong> Yes - but may affect site functionality
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Marketing/Advertising Cookies</h3>
                  <p className="mb-3">
                    These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Examples:</strong> Third-party advertising cookies, conversion tracking
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Can be disabled:</strong> Yes - through cookie settings
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and you should check the relevant third-party website for more information.
              </p>
              <p className="mt-4">
                Third-party services we use may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics - for usage analytics</li>
                <li>Payment processors - for transaction processing</li>
                <li>Social media platforms - for social sharing features</li>
                <li>Content delivery networks - for performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Managing Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that disabling cookies may affect the functionality of our website.
              </p>
              <p className="mt-4">
                Here's how to manage cookies in common browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Opt-Out Tools</h3>
              <p>
                You can also opt out of certain cookies using these tools:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Network Advertising Initiative opt-out page</li>
                <li>Digital Advertising Alliance opt-out page</li>
                <li>European Interactive Digital Advertising Alliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Do Not Track Signals</h2>
              <p>
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Currently, there is no industry standard for how websites should respond to DNT signals. We do not currently respond to DNT signals, but we provide you with choices about cookies as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Mobile Devices</h2>
              <p>
                If you access our services through a mobile device, you may be able to adjust settings on your device to control advertising tracking and analytics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
                <li><strong>Android:</strong> Settings → Google → Ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Cookie Retention</h2>
              <p>
                Different types of cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Session cookies are deleted when you close your browser</li>
                <li>Functional cookies typically last up to 1 year</li>
                <li>Analytics cookies typically last up to 2 years</li>
                <li>Marketing cookies typically last up to 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="flex items-center gap-2 text-brand mt-4">
                <Mail className="w-5 h-5" />
                <a href="mailto:kelloggfairbank@gmail.com" className="hover:text-brand-light transition">
                  kelloggfairbank@gmail.com
                </a>
              </div>
            </section>

            <section className="mt-8 p-6 bg-brand/10 border border-brand/20 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Your Consent</h3>
              <p>
                By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy. You can withdraw your consent at any time by adjusting your cookie settings or browser preferences.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
