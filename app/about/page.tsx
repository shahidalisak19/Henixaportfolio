import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Henixa | Software Development Company Profile',
  description: 'Learn about Henixa Software Development Company - our expertise in custom software, web applications, mobile apps, and digital solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-cyan-400">Henixa</span> Software Development Company
        </h1>
        
        <div className="space-y-6 text-lg">
          <div className="p-6 bg-white/5 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Henixa Software Development Company</h2>
            <p><strong>Henixa</strong> is a professional software development company specializing in custom software solutions, web applications, and mobile app development. Founded with the vision to transform businesses through innovative technology, <strong>Henixa Software Development Company</strong> combines technical expertise with creative problem-solving to deliver exceptional software products.</p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Henixa Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
                <div className="font-bold text-cyan-300">Custom Software Development</div>
                <div className="text-sm mt-2">Tailored software solutions for unique business requirements</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="font-bold text-cyan-300">Web Application Development</div>
                <div className="text-sm mt-2">Scalable web apps with React, Next.js, Node.js</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl">
                <div className="font-bold text-cyan-300">Mobile App Development</div>
                <div className="text-sm mt-2">iOS & Android apps with React Native & Flutter</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl">
                <div className="font-bold text-cyan-300">Enterprise Solutions</div>
                <div className="text-sm mt-2">CRM, ERP, and business process automation</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white/5 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Why Choose Henixa Software Development?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">200+ Software Projects</div>
                  <div className="text-sm text-gray-300">Successfully delivered custom software solutions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">50+ Technologies</div>
                  <div className="text-sm text-gray-300">Expertise in multiple programming languages and frameworks</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Agile Development</div>
                  <div className="text-sm text-gray-300">Iterative development with regular client feedback</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">24/7 Support</div>
                  <div className="text-sm text-gray-300">Ongoing maintenance and technical support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-cyan-500/30">
            <h2 className="text-2xl font-bold mb-4">Partner with Henixa</h2>
            <p>Ready to develop custom software with <strong>Henixa Software Development Company</strong>? Get in touch with our technical team:</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-cyan-300 font-medium">Company:</div>
                <div className="font-semibold">Henixa Software Development Company</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-cyan-300 font-medium">Website:</div>
                <a href="https://henixaportfolio.vercel.app" className="hover:text-cyan-200">
                  henixaportfolio.vercel.app
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-cyan-300 font-medium">Email:</div>
                <div>support@henixa73.com</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-cyan-300 font-medium">Services:</div>
                <div>Custom Software Development, Web Apps, Mobile Apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}