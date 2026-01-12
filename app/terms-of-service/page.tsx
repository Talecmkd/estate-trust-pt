import { Mail } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg text-slate-400">
              Last Updated: January 12, 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using EstateTrust's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
              <p>
                EstateTrust provides a blockchain-based platform for verifying and managing real estate credentials, including licenses, certifications, and professional qualifications. Our service enables transparent and immutable record-keeping for real estate professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Obligations</h2>
              <p>As a user of EstateTrust, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Update your information to keep it accurate and current</li>
                <li>Not misrepresent your credentials or qualifications</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any fraudulent or illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Verification Process</h2>
              <p>
                EstateTrust uses blockchain technology to verify credentials. While we employ industry-standard verification methods, users are responsible for ensuring the accuracy of the information they submit. Verified credentials are recorded on the blockchain and become part of an immutable public record.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Intellectual Property Rights</h2>
              <p>
                The service and its original content, features, and functionality are owned by EstateTrust and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Payment and Fees</h2>
              <p>
                Certain features of EstateTrust may require payment. You agree to pay all fees associated with your use of premium features. All fees are non-refundable unless otherwise stated. We reserve the right to modify our pricing structure at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Data and Privacy</h2>
              <p>
                Your use of EstateTrust is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information and how we will treat it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                EstateTrust shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. In no event shall our total liability exceed the amount paid by you to EstateTrust in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Disclaimer of Warranties</h2>
              <p>
                The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. EstateTrust does not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Account Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Portugal, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Contact Information</h2>
              <div className="flex items-center gap-2 text-brand">
                <Mail className="w-5 h-5" />
                <a href="mailto:kelloggfairbank@gmail.com" className="hover:text-brand-light transition">
                  kelloggfairbank@gmail.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
