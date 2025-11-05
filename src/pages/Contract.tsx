import { FileText, Download, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contract() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contractDetails = [
    {
      icon: CheckCircle,
      title: 'Deposit',
      description: '$150 for blueprint and project planning',
    },
    {
      icon: CheckCircle,
      title: 'Remaining Balance',
      description: 'Paid according to selected service package',
    },
    {
      icon: CheckCircle,
      title: 'Ownership & Usage',
      description:
        'Upon full payment, all assets belong to the client. Hosting, retainer, and maintenance services provided at $100/month',
    },
  ];

  const maintenanceFeatures = [
    'Hosting & domain renewal',
    'Retainer updates and maintenance',
    'Bug fixes and performance checks',
    'Support for all live sites',
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Agreement
            </span>
          </h1>
          <p className="text-xl text-gray-400">Clear terms for a smooth collaboration</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Contract Overview</h2>
            <div className="space-y-6">
              {contractDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{detail.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Monthly Maintenance Package -{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                $100/month
              </span>
            </h2>
            <p className="text-gray-400 mb-6">
              After project completion, we provide ongoing support to keep your site running
              smoothly:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-3xl p-12">
            <p className="text-gray-400 mb-8">
              Download the complete project agreement document below. Review the terms and reach out
              if you have any questions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <Download size={20} />
              Download ADAI Agency Contract
            </a>
            <p className="text-sm text-gray-500 mt-6">
              Contact us at{' '}
              <a
                href="mailto:adaiwebagency@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                adaiwebagency@gmail.com
              </a>{' '}
              for contract inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
