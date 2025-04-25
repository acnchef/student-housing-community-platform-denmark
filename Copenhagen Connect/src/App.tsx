import { useEffect } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { WaitlistForm } from './components/WaitlistForm';
import { FeatureCard } from './components/FeatureCard';
import { Building, Check, CreditCard, FileCheck, House, MessageCircle, Shield, Users, Wallet } from 'lucide-react';

export function App() {
  useEffect(() => {
    // Load Plus Jakarta Sans font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Update meta tags
    document.title = 'HomeBase | Safe Housing for International Students in Denmark';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brightBlue/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block rounded-full bg-softYellow px-4 py-1 text-sm font-medium text-midnight mb-6 shadow-soft">
              Coming August 2025
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-dawn md:text-5xl lg:text-6xl max-w-4xl">
              Find Safe Housing in Copenhagen, <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Without the Stress</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-dawn opacity-80">
              The trusted platform helping international students relocate to Denmark with secure housing, protected deposits, and a supportive community.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#join-waitlist">
                <Button variant="primary" size="lg">
                  Join the Waitlist
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose HomeBase</h2>
            <p className="mt-4 text-xl text-gray-600">
              We solve the biggest challenges international students face when moving to Denmark
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Shield size={24} />}
              title="Verified Safe Housing"
              description="Every property is verified by our team to ensure it complies with Danish rental laws and standards."
            />
            <FeatureCard
              icon={<Wallet size={24} />}
              title="Secure Deposit Escrow"
              description="Your rental deposit is protected in our secure escrow solution until your tenancy is confirmed."
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Community Support"
              description="Connect with fellow students and get advice from those who've been through the process."
            />
            <FeatureCard
              icon={<FileCheck size={24} />}
              title="Legal Guidance"
              description="Navigate Danish rental contracts and regulations with our easy-to-understand guides."
            />
            <FeatureCard
              icon={<Building size={24} />}
              title="Copenhagen Focus"
              description="Specialized in housing near major educational institutions like Niels Brock Business College."
            />
            <FeatureCard
              icon={<MessageCircle size={24} />}
              title="Multilingual Support"
              description="Get help in your language from our team of international student advisors."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-brightBlue/10 section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-dawn md:text-4xl">How HomeBase Works</h2>
            <p className="mt-4 text-xl text-dawn opacity-80">
              Your journey to safe housing in Copenhagen in three simple steps
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative rounded-xl bg-white p-6 shadow-card">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-start to-primary-end text-xl font-bold text-white shadow-soft">
                1
              </div>
              <h3 className="mb-4 mt-6 text-xl font-bold">Browse Verified Listings</h3>
              <p className="text-gray-600">
                Search through our database of verified apartments and rooms near your school or university in Copenhagen.
              </p>
            </div>
            
            <div className="relative rounded-xl bg-white p-6 shadow-card">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-start to-primary-end text-xl font-bold text-white shadow-soft">
                2
              </div>
              <h3 className="mb-4 mt-6 text-xl font-bold">Secure Your Housing</h3>
              <p className="text-gray-600">
                Place your deposit in our secure escrow system, giving you and the landlord peace of mind.
              </p>
            </div>
            
            <div className="relative rounded-xl bg-white p-6 shadow-card">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-start to-primary-end text-xl font-bold text-white shadow-soft">
                3
              </div>
              <h3 className="mb-4 mt-6 text-xl font-bold">Move In With Confidence</h3>
              <p className="text-gray-600">
                Arrive in Denmark to a smooth move-in process and connect with our community of international students.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Students Trust Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from students who've used similar solutions in other markets
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-brightBlue/5 p-6 shadow-card">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="mb-6 italic text-gray-600">
                "Finding accommodation was my biggest worry when moving to study abroad. Having a platform like this would have saved me so much stress and prevented me from almost being scammed."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brightBlue/20 flex items-center justify-center text-midnight font-bold">
                  MA
                </div>
                <div className="ml-4">
                  <p className="font-medium">Maria A.</p>
                  <p className="text-sm text-gray-500">International Student, Spain</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-brightBlue/5 p-6 shadow-card">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="mb-6 italic text-gray-600">
                "The deposit protection was crucial for me. I had friends who lost their entire deposits in unfair situations. A secure escrow service gives both students and landlords confidence."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brightBlue/20 flex items-center justify-center text-midnight font-bold">
                  JL
                </div>
                <div className="ml-4">
                  <p className="font-medium">John L.</p>
                  <p className="text-sm text-gray-500">Business Student, Canada</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-brightBlue/5 p-6 shadow-card">
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="mb-6 italic text-gray-600">
                "The community aspect is what stands out. Moving to a new country is overwhelming, but having a network of other students who understand what you're going through makes all the difference."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brightBlue/20 flex items-center justify-center text-midnight font-bold">
                  RP
                </div>
                <div className="ml-4">
                  <p className="font-medium">Raj P.</p>
                  <p className="text-sm text-gray-500">MBA Student, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-brightBlue/10 section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Get answers to common questions about HomeBase
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="text-lg font-medium text-gray-900">When will HomeBase launch?</h3>
              <p className="mt-2 text-gray-600">
                We're targeting a launch in Spring 2025, in time for students arriving for the August 2025 intake at institutions like Niels Brock Business College.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="text-lg font-medium text-gray-900">How does the deposit protection work?</h3>
              <p className="mt-2 text-gray-600">
                Your deposit is held in a secure escrow account. It's only released to the landlord after you've confirmed that the property matches the description and your tenancy has begun.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="text-lg font-medium text-gray-900">Do you verify all the listings?</h3>
              <p className="mt-2 text-gray-600">
                Yes, our team verifies each listing to ensure it's legitimate, complies with Danish regulations, and is accurately represented. We check documentation and conduct virtual or in-person visits.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="text-lg font-medium text-gray-900">Is HomeBase only for Niels Brock students?</h3>
              <p className="mt-2 text-gray-600">
                We're starting with a focus on Niels Brock Business College for our initial launch, but plan to expand to other educational institutions in Copenhagen and eventually across Denmark.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="text-lg font-medium text-gray-900">How do you handle my personal data?</h3>
              <p className="mt-2 text-gray-600">
                HomeBase is fully GDPR compliant. We only collect necessary data, store it securely, and never share it with third parties without your explicit consent. You can request a copy or deletion of your data at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Waitlist Section */}
      <section id="join-waitlist" className="py-16 bg-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-r from-primary-start to-primary-end p-8 shadow-medium sm:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white">Join Our Waitlist</h2>
                <p className="mt-2 text-blue-100">
                  Be the first to access HomeBase when we launch for the August 2025 intake
                </p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-12 bg-brightBlue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-8 text-xl font-medium text-gray-700">Built with security and compliance in mind</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center text-gray-500">
                <Shield className="mr-2 h-5 w-5" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center text-gray-500">
                <CreditCard className="mr-2 h-5 w-5" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Check className="mr-2 h-5 w-5" />
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center text-gray-500">
                <FileCheck className="mr-2 h-5 w-5" />
                <span>Legal Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">HomeBase</h3>
              <p className="mb-4">
                The trusted platform for international students finding housing in Denmark.
              </p>
              <p className="text-sm">
                © 2025 HomeBase. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-medium text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-medium text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">GDPR Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-medium text-white">Contact</h4>
              <p className="mb-2">Copenhagen, Denmark</p>
              <p className="mb-4">info@homebase-denmark.com</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
