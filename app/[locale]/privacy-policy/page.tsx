'use client';

import { use } from 'react';
import { Mail, Shield, Lock, Eye, Database, Users } from 'lucide-react';
import { Locale } from '@/lib/i18n';

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 12, 2026",
    intro: "At EstateTrust, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.",
    sections: [
      {
        icon: Database,
        title: "1. Information We Collect",
        subsections: [
          {
            subtitle: "Personal Information",
            content: "We collect information that you provide directly to us, including:",
            list: [
              "Name, email address, and contact information",
              "Professional credentials and qualifications",
              "Real estate licenses and certifications",
              "Professional history and experience",
              "Payment and billing information",
              "Profile photographs and identification documents"
            ]
          },
          {
            subtitle: "Blockchain Data",
            content: "When you verify credentials, certain information is recorded on the blockchain, including verification timestamps, credential types, and unique identifiers. This information becomes part of a public, immutable record."
          },
          {
            subtitle: "Usage Information",
            content: "We automatically collect information about your interaction with our service:",
            list: [
              "Device information (IP address, browser type, operating system)",
              "Usage patterns and preferences",
              "Pages visited and features used",
              "Time and duration of visits"
            ]
          }
        ]
      },
      {
        icon: Eye,
        title: "2. How We Use Your Information",
        content: "We use the collected information for the following purposes:",
        list: [
          "To provide, maintain, and improve our services",
          "To verify and authenticate professional credentials",
          "To process transactions and send related information",
          "To communicate with you about updates, security alerts, and support",
          "To deteect, prevent, and address fraud and security issues",
          "To comply with legal obligations and regulations",
          "To analyze usage patterns and improve user experience",
          "To send marketing communications (with your consent)"
        ]
      },
      {
        icon: Users,
        title: "3. Information Sharing and Disclosure",
        content: "We may share your information in the following circumstances:",
        subsections: [
          {
            subtitle: "Public Blockchain Records",
            content: "Verified credentials are recorded on a public blockchain. This information is permanently accessible to anyone and cannot be deleted or modified."
          },
          {
            subtitle: "Service Providers",
            content: "We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery."
          },
          {
            subtitle: "Legal Requirements",
            content: "We may disclose your information if required by law or in response to valid requests by public authorities."
          },
          {
            subtitle: "Business Transfers",
            content: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity."
          }
        ]
      },
      {
        icon: Lock,
        title: "4. Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
        list: [
          "Encryption of data in transit and at rest",
          "Regular security assessments and audits",
          "Access controls and authentication requirements",
          "Secure data storage and backup procedures",
          "Employee training on data protection practices"
        ],
        note: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
      },
      {
        icon: Shield,
        title: "5. Your Rights and Choices",
        content: "You have the following rights regarding your personal information:",
        list: [
          "<strong>Access:</strong> Request access to your personal information",
          "<strong>Correction:</strong> Request correction of inaccurate information",
          "<strong>Deletion:</strong> Request deletion of your information (subject to legal and blockchain limitations)",
          "<strong>Portability:</strong> Request a copy of your data in a portable format",
          "<strong>Objection:</strong> Object to processing of your information",
          "<strong>Withdrawal:</strong> Withdraw consent for marketing communications"
        ],
        note: "<strong>Important Note:</strong> Information recorded on the blockchain cannot be deleted or modified due to the immutable nature of blockchain technology."
      },
      {
        title: "6. Data Retention",
        content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Blockchain records are permanent and cannot be deleted."
      },
      {
        title: "7. International Data Transfers",
        content: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information."
      },
      {
        title: "8. Children's Privacy",
        content: "Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information."
      },
      {
        title: "9. Third-Party Links",
        content: "Our service may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies."
      },
      {
        title: "10. Changes to This Privacy Policy",
        content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. Your continued use of the service after changes constitutes acceptance of the updated policy."
      },
      {
        title: "11. Contact Us",
        content: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:"
      }
    ],
    gdprTitle: "GDPR Compliance",
    gdprContent: "For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority."
  },
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última Atualização: 12 de Janeiro de 2026",
    intro: "No EstateTrust, estamos empenhados em proteger a sua privacidade e garantir a segurança dos seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas informações quando utiliza a nossa plataforma.",
    sections: [
      {
        icon: Database,
        title: "1. Informação que Recolhemos",
        subsections: [
          {
            subtitle: "Informação Pessoal",
            content: "Recolhemos informação que nos fornece diretamente, incluindo:",
            list: [
              "Nome, endereço de email e informação de contacto",
              "Credenciais e qualificações profissionais",
              "Licenças e certificações imobiliárias",
              "Histórico e experiência profissional",
              "Informação de pagamento e faturação",
              "Fotografias de perfil e documentos de identificação"
            ]
          },
          {
            subtitle: "Dados de Blockchain",
            content: "Quando verifica credenciais, certas informações são registadas na blockchain, incluindo carimbos temporais de verificação, tipos de credenciais e identificadores únicos. Esta informação torna-se parte de um registo público e imutável."
          },
          {
            subtitle: "Informação de Utilização",
            content: "Recolhemos automaticamente informação sobre a sua interação com o nosso serviço:",
            list: [
              "Informação do dispositivo (endereço IP, tipo de navegador, sistema operativo)",
              "Padrões e preferências de utilização",
              "Páginas visitadas e funcionalidades utilizadas",
              "Tempo e duração das visitas"
            ]
          }
        ]
      },
      {
        icon: Eye,
        title: "2. Como Utilizamos a Sua Informação",
        content: "Utilizamos a informação recolhida para os seguintes propósitos:",
        list: [
          "Para fornecer, manter e melhorar os nossos serviços",
          "Para verificar e autenticar credenciais profissionais",
          "Para processar transações e enviar informação relacionada",
          "Para comunicar consigo sobre atualizações, alertas de segurança e suporte",
          "Para detetar, prevenir e resolver questões de fraude e segurança",
          "Para cumprir com obrigações legais e regulamentações",
          "Para analisar padrões de utilização e melhorar a experiência do utilizador",
          "Para enviar comunicações de marketing (com o seu consentimento)"
        ]
      },
      {
        icon: Users,
        title: "3. Partilha e Divulgação de Informação",
        content: "Podemos partilhar a sua informação nas seguintes circunstâncias:",
        subsections: [
          {
            subtitle: "Registos Públicos de Blockchain",
            content: "As credenciais verificadas são registadas numa blockchain pública. Esta informação está permanentemente acessível a qualquer pessoa e não pode ser eliminada ou modificada."
          },
          {
            subtitle: "Fornecedores de Serviços",
            content: "Partilhamos informação com fornecedores de serviços terceiros que prestam serviços em nosso nome, como processamento de pagamentos, análise de dados e entrega de email."
          },
          {
            subtitle: "Requisitos Legais",
            content: "Podemos divulgar a sua informação se exigido por lei ou em resposta a pedidos válidos por autoridades públicas."
          },
          {
            subtitle: "Transferências Empresariais",
            content: "No caso de uma fusão, aquisição ou venda de ativos, a sua informação pode ser transferida para a entidade adquirente."
          }
        ]
      },
      {
        icon: Lock,
        title: "4. Segurança de Dados",
        content: "Implementamos medidas técnicas e organizacionais apropriadas para proteger a sua informação pessoal contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:",
        list: [
          "Encriptação de dados em trânsito e em repouso",
          "Avaliações e auditorias de segurança regulares",
          "Controlos de acesso e requisitos de autenticação",
          "Procedimentos seguros de armazenamento e backup de dados",
          "Formação de colaboradores sobre práticas de proteção de dados"
        ],
        note: "No entanto, nenhum método de transmissão pela internet ou armazenamento eletrónico é 100% seguro. Embora nos esforcemos para proteger a sua informação, não podemos garantir segurança absoluta."
      },
      {
        icon: Shield,
        title: "5. Os Seus Direitos e Escolhas",
        content: "Tem os seguintes direitos relativos aos seus dados pessoais:",
        list: [
          "<strong>Acesso:</strong> Solicitar acesso aos seus dados pessoais",
          "<strong>Correção:</strong> Solicitar correção de informação incorreta",
          "<strong>Eliminação:</strong> Solicitar eliminação da sua informação (sujeito a limitações legais e de blockchain)",
          "<strong>Portabilidade:</strong> Solicitar uma cópia dos seus dados num formato portátil",
          "<strong>Oposição:</strong> Opor-se ao processamento da sua informação",
          "<strong>Retirada:</strong> Retirar consentimento para comunicações de marketing"
        ],
        note: "<strong>Nota Importante:</strong> A informação registada na blockchain não pode ser eliminada ou modificada devido à natureza imutável da tecnologia blockchain."
      },
      {
        title: "6. Retenção de Dados",
        content: "Retemos os seus dados pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Os registos de blockchain são permanentes e não podem ser eliminados."
      },
      {
        title: "7. Transferências Internacionais de Dados",
        content: "A sua informação pode ser transferida e processada em países diferentes do seu país de residência. Estes países podem ter leis de proteção de dados diferentes. Garantimos que existem salvaguardas apropriadas para proteger a sua informação."
      },
      {
        title: "8. Privacidade de Menores",
        content: "O nosso serviço não se destina a indivíduos com menos de 18 anos. Não recolhemos intencionalmente informação pessoal de menores. Se tivermos conhecimento de que recolhemos informação de um menor, tomaremos medidas para eliminar essa informação."
      },
      {
        title: "9. Links de Terceiros",
        content: "O nosso serviço pode conter links para websites de terceiros. Não somos responsáveis pelas práticas de privacidade desses websites. Encorajamos a rever as suas políticas de privacidade."
      },
      {
        title: "10. Alterações a Esta Política de Privacidade",
        content: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações materiais publicando a nova Política de Privacidade nesta página e atualizando a data \"Última Atualização\". A sua utilização continuada do serviço após as alterações constitui aceitação da política atualizada."
      },
      {
        title: "11. Contacte-nos",
        content: "Se tiver questões ou preocupações sobre esta Política de Privacidade ou as nossas práticas de dados, por favor contacte-nos:"
      }
    ],
    gdprTitle: "Conformidade com o RGPD",
    gdprContent: "Para utilizadores no Espaço Económico Europeu (EEE), cumprimos com o Regulamento Geral sobre a Proteção de Dados (RGPD). Tem direitos adicionais ao abrigo do RGPD, incluindo o direito de apresentar queixa junto de uma autoridade de supervisão."
  }
};

export default function PrivacyPolicy({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const t = content[locale];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">{t.title}</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg text-slate-400">{t.lastUpdated}</p>
            <p className="text-lg">{t.intro}</p>

            {t.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                  {section.icon && <section.icon className="w-6 h-6 text-brand" />}
                  {section.title}
                </h2>

                {section.content && <p>{section.content}</p>}

                {section.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((sub, subIdx) => (
                  <div key={subIdx}>
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">{sub.subtitle}</h3>
                    <p>{sub.content}</p>
                    {sub.list && (
                      <ul className="list-disc pl-6 space-y-2">
                        {sub.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.note && <p className="mt-4" dangerouslySetInnerHTML={{ __html: section.note }} />}
              </section>
            ))}

            <section>
              <div className="flex items-center gap-2 text-brand mt-4">
                <Mail className="w-5 h-5" />
                <a href="mailto:kelloggfairbank@gmail.com" className="hover:text-brand-light transition">
                  kelloggfairbank@gmail.com
                </a>
              </div>
            </section>

            <section className="mt-8 p-6 bg-brand/10 border border-brand/20 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">{t.gdprTitle}</h3>
              <p>{t.gdprContent}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
