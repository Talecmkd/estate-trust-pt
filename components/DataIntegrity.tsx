import { Lock, Ban, Database, CheckCircle } from 'lucide-react';

export default function DataIntegrity() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Data Integrity Section */}
            <div className="space-y-6">
              {/* Data Integrity Tag */}
              <div className="inline-block bg-[#0A68F8] text-white text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-full">
                Data Integrity
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] leading-tight">
                Trust, Transparency & Data Privacy
              </h2>

              {/* Description */}
              <p className="text-base text-[#6B7280] leading-relaxed">
                We believe that verification shouldn&apos;t come at the cost of privacy. EstateTrust adheres to the strictest GDPR and data protection standards.
              </p>

              {/* Feature List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-[#34D399] mt-0.5">
                    <Lock className="w-full h-full" />
                  </div>
                  <p className="text-base text-[#6B7280]">
                    We verify without storing sensitive documents permanently.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-[#34D399] mt-0.5">
                    <Ban className="w-full h-full" />
                  </div>
                  <p className="text-base text-[#6B7280]">
                    No selling of professional data to third-party marketers.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-[#34D399] mt-0.5">
                    <Database className="w-full h-full" />
                  </div>
                  <p className="text-base text-[#6B7280]">
                    256-bit encrypted database infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel - Secure Audit Log Section */}
            <div className="flex items-center justify-center relative">
              {/* SVG Container - No gray background */}
              <div className="w-full max-w-md min-h-[320px] flex items-center justify-center relative">
                {/* Custom SVG Illustration - Full Size */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Background Document/Log */}
                  <rect x="60" y="40" width="280" height="240" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="3"/>

                  {/* Header Bar */}
                  <rect x="60" y="40" width="280" height="50" rx="12" fill="#0A68F8" fillOpacity="0.1"/>
                  <line x1="60" y1="90" x2="340" y2="90" stroke="#E5E7EB" strokeWidth="2"/>

                  {/* Log Entry Rows with Icons */}
                  {/* Row 1 */}
                  <circle cx="90" cy="120" r="8" fill="#34D399"/>
                  <path d="M87 120L89.5 122.5L93 119" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="110" y1="120" x2="240" y2="120" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="260" y="113" width="60" height="14" rx="7" fill="#E5E7EB"/>

                  {/* Row 2 */}
                  <circle cx="90" cy="155" r="8" fill="#34D399"/>
                  <path d="M87 155L89.5 157.5L93 154" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="110" y1="155" x2="220" y2="155" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="260" y="148" width="60" height="14" rx="7" fill="#E5E7EB"/>

                  {/* Row 3 */}
                  <circle cx="90" cy="190" r="8" fill="#34D399"/>
                  <path d="M87 190L89.5 192.5L93 189" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="110" y1="190" x2="230" y2="190" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="260" y="183" width="60" height="14" rx="7" fill="#E5E7EB"/>

                  {/* Row 4 */}
                  <circle cx="90" cy="225" r="8" fill="#34D399"/>
                  <path d="M87 225L89.5 227.5L93 224" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="110" y1="225" x2="210" y2="225" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="260" y="218" width="60" height="14" rx="7" fill="#E5E7EB"/>

                  {/* Large Shield Icon with Checkmark */}
                  <g transform="translate(160, 45)">
                    <circle cx="40" cy="25" r="30" fill="#0A68F8" fillOpacity="0.1"/>
                    <path
                      d="M40 8L25 14V26C25 36 32 45 40 48C48 45 55 36 55 26V14L40 8Z"
                      fill="#0A68F8"
                      stroke="#0A68F8"
                      strokeWidth="2"
                    />
                    <path
                      d="M34 26L38 30L46 22"
                      stroke="white"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* Lock Icon (Top Right) */}
                  <circle cx="310" cy="65" r="22" fill="#34D399" opacity="0.15"/>
                  <g transform="translate(297, 52)">
                    <rect x="7" y="16" width="12" height="10" rx="2" fill="#34D399"/>
                    <path
                      d="M9 16V12C9 9.79086 10.7909 8 13 8C15.2091 8 17 9.79086 17 12V16"
                      stroke="#34D399"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Database Icon (Bottom Right) */}
                  <g transform="translate(305, 245)" opacity="0.3">
                    <ellipse cx="15" cy="5" rx="15" ry="5" fill="#0A68F8"/>
                    <path d="M0 5V12C0 14.7614 6.71573 17 15 17C23.2843 17 30 14.7614 30 12V5" fill="#0A68F8"/>
                    <ellipse cx="15" cy="12" rx="15" ry="5" fill="#0A68F8" fillOpacity="0.6"/>
                  </g>
                </svg>

                {/* Compliance Passed Badge - Positioned higher */}
                <div className="absolute bottom-6 right-0 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 z-10">
                  <div className="w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#2C3E50] leading-tight">Compliance Passed</div>
                    <div className="text-xs text-[#6B7280] leading-tight">ISO 27001 Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
