import { Mail, Shield, Lock, Eye, Database, Users } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg text-slate-400">
              Last Updated: January 12, 2026
            </p>

            <p className="text-lg">
              At EstateTrust, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-brand" />
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Professional credentials and qualifications</li>
                <li>Real estate licenses and certifications</li>
                <li>Professional history and experience</li>
                <li>Payment and billing information</li>
                <li>Profile photographs and identification documents</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Blockchain Data</h3>
              <p>
                When you verify credentials, certain information is recorded on the blockchain, including verification timestamps, credential types, and unique identifiers. This information becomes part of a public, immutable record.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Usage Information</h3>
              <p>We automatically collect information about your interaction with our service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and preferences</li>
                <li>Pages visited and features used</li>
                <li>Time and duration of visits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-brand" />
                2. How We Use Your Information
              </h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To verify and authenticate professional credentials</li>
                <li>To process transactions and send related information</li>
                <li>To communicate with you about updates, security alerts, and support</li>
                <li>To detect, prevent, and address fraud and security issues</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-brand" />
                3. Information Sharing and Disclosure
              </h2>
              <p>We may share your information in the following circumstances:</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Public Blockchain Records</h3>
              <p>
                Verified credentials are recorded on a public blockchain. This information is permanently accessible to anyone and cannot be deleted or modified.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Service Providers</h3>
              <p>
                We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Legal Requirements</h3>
              <p>
                We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-brand" />
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure data storage and backup procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand" />
                5. Your Rights and Choices
              </h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal and blockchain limitations)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="mt-4">
                <strong>Important Note:</strong> Information recorded on the blockchain cannot be deleted or modified due to the immutable nature of blockchain technology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Blockchain records are permanent and cannot be deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Third-Party Links</h2>
              <p>
                Our service may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of the service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="flex items-center gap-2 text-brand mt-4">
                <Mail className="w-5 h-5" />
                <a href="mailto:kelloggfairbank@gmail.com" className="hover:text-brand-light transition">
                  kelloggfairbank@gmail.com
                </a>
              </div>
            </section>

            <section className="mt-8 p-6 bg-brand/10 border border-brand/20 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">GDPR Compliance</h3>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
