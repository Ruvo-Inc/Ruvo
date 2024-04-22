'use client'
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import LeagalBanner from '../../assets/images/leagal-banner.png'
export default function Leagals() {
    return (
        <div className='w-full bg-[#FBF7F6]'>
            <div  data-aos="zoom-out" data-aos-duration="800"  className="flex justify-center items-center h-screen" id="leagal" style={{ backgroundImage: `url(${LeagalBanner.src})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} >
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className=''>
                    <Heading headingStyle='h1' className=' lg:whitespace-nowrap text-white text-center'>
                        Ruvo Legal & Privacy
                    </Heading>

                </div>
            </div>
            <div className='lg:p-0 p-[20px]'>
                <div className='w-full flex justify-center'>
                    <div className='w-full  lg:pt-[82px] pt-[0px] max-w-[992px]'>
                        <h4 className='font-mulish font-normal text-[22px]'>Terms & Conditions</h4>
                        <p className='text-[16px] font-normal font-mulish'> <strong>Introduction</strong> Welcome to Ruvo! Our Terms and Conditions govern your use of Ruvo’s services, including our innovative ride-hailing platform, website, and mobile applications. This document outlines what you can expect from Ruvo and what we expect from you. </p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'> <strong>Acceptance of Terms</strong> By using any of Ruvo’s services, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree with any part of these terms, you should discontinue use of our services immediately. </p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'> <strong>Changes to Terms</strong> We may occasionally update these terms to reflect changes to our services, user feedback, or legal and regulatory updates. Changes will be communicated through our website or via email, and will take effect from the date they are posted. Continued use of our services after such changes will constitute acceptance of the new terms </p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='font-mulish font-normal text-[22px]'>Account Requirements</p>
                        <ul className='list-disc text-[16px] font-normal font-mulish pl-[28px]'>
                            <li><strong>ge Restrictions:</strong> A You must be at least 18 years old to create an account and use Ruvo’s services.</li>
                            <li><strong>Account Registration: </strong> To use Ruvo, you must register for an account by providing accurate, current, and complete information as prompted by our registration forms.</li>
                            <li><strong>User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Service Provision</strong> Ruvo provides a platform for ride-hailing that connects riders with drivers of electric vehicles. You are responsible for complying with all local laws and regulations while using Ruvo’s services.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Payments and Fees</strong>  Our pricing model includes subscription fees for riders and drivers, along with charges per ride. Detailed pricing information is available in our app. Refunds are handled on a case-by-case basis and are generally processed in accordance with our refund policy</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>User Conduct</strong>  Users are expected to behave respectfully and lawfully while using Ruvo’s services. Prohibited behaviors include but are not limited to: disrespecting other individuals, using the service for unlawful purposes, and attempting to harm the service or other users.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Termination and Suspension</strong>  Ruvo reserves the right to suspend or terminate your account if you breach any terms of this agreement. Users may appeal such decisions by contacting our support team</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Dispute Resolution</strong> Disputes between you and Ruvo should be resolved through our support team. We aim to resolve disputes amicably and efficiently.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center' id="privacy-policy">
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Dispute Resolution</strong> Disputes between you and Ruvo should be resolved through our support team. We aim to resolve disputes amicably and efficiently.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <h4 className='font-mulish font-normal text-[22px]'  >Privacy Policy</h4>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Introduction</strong> At Ruvo, your privacy is our priority. We are committed to protecting your personal information and being transparent about what data we collect and how it is used. This policy outlines our practices in detail.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='font-mulish font-normal text-[22px]'>Information Collection</p>
                        <ul className='list-disc text-[16px] font-normal font-mulish pl-[28px]'>
                            <li><strong>Registration and Profile Information:</strong> When you register for an account or update your profile, we collect information such as your name, email address, and contact details. This information is essential for providing you with personalized services.</li>
                            <li><strong>Cookies and Tracking Technologies: </strong> W e use cookies and similar technologies primarily to enhance your user experience and improve our services. These technologies help us understand how you use Ruvo, making our platform more intuitive and responsive to your needs.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='font-mulish font-normal text-[22px]'>Use of Information: </p>
                        <ul className='list-disc text-[16px] font-normal font-mulish pl-[28px]'>
                            <li>Enhance the functionality and usability of our services.</li>
                            <li>Manage your account and provide you with customer support.</li>
                            <li>Process transactions and send you related information, including confirmations and invoices.</li>
                            <li>Communicate with you about promotions, upcoming events, and other news about products and services offered by Ruvo and our selected partners.</li>
                            <li>Conduct research and analysis, including surveys and analytics.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[50px] max-w-[992px]'>
                        <p className='font-mulish font-normal text-[22px]'>Information Sharing Ruvo respects your privacy:</p>
                        <ul className='list-disc text-[16px] font-normal font-mulish pl-[28px]'>
                            <li><strong>No Selling of Personal Information:</strong> We will not sell any personal information to third parties.</li>
                            <li><strong>No Advertising:</strong> We will not use your personally identifiable information to target or support advertising. This means we do not engage in activities that use your personal data to display personalized or behavioral advertisements.</li>
                            <li><strong>We may share information with third parties in the following ways:</strong></li>
                            <li><strong>Service Providers:</strong> We share information with companies that provide services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. These service providers are authorized to use your personal information only as necessary to provide these services to us.</li>
                            <li><strong>Legal Requirements and Business Transfers:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to conform to the edicts of the law or comply with legal process served on us, protect and defend our rights or property, act in urgent circumstances to protect the personal safety of users of Ruvo or the public, or in connection with a merger, acquisition, or sale of assets.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>User Rights</strong> You have the right to access, update, and delete your personal information. You can exercise these rights at any time by logging into your account settings or contacting us directly.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Data Security</strong> We take robust security measures to protect your data from unauthorized access, alteration, destruction, or disclosure. Our security practices include encryption, firewalls, and secure server facilities.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Cookies and Tracking Technologies</strong> Our use of cookies is designed to provide you with a seamless experience and is not linked to personally identifiable information. You can manage your cookie preferences within your browser settings.</p>
                    </div>
                </div>
                <div className='w-full flex  justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Changes to the Privacy Policy</strong> We may update this policy from time to time to reflect changes in our practices or applicable regulations. We will notify you of any material changes by posting the new policy on our website and updating the effective date at the top of this page.</p>
                    </div>
                </div>
                <div className='w-full flex   justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <p className='text-[16px] font-normal font-mulish'><strong>Contact Information</strong>  If you have any questions or concerns about this policy or our data practices, please contact us at privacy@myruvo.com.</p>
                    </div>
                </div>
                <div className='w-full flex pb-[60px] justify-center'>
                    <div className='w-full  pt-[30px] max-w-[992px]'>
                        <h4 className='font-mulish font-normal text-[22px]' id="regulatory-information">Regulatory Information</h4>
                        <p className='text-[16px] font-normal font-mulish'><strong>Compliance</strong> Ruvo complies with all applicable data protection laws, transportation regulations, and environmental standards.</p>
                        <p className='text-[16px] font-normal font-mulish'><strong>Licenses</strong> Ruvo is licensed to operate a ride-hailing service in all jurisdictions where it operates.</p>
                        <p className='text-[16px] font-normal font-mulish'><strong>Safety Regulations</strong> We adhere to strict safety regulations to ensure the well-being of our riders and drivers.</p>
                        <p className='text-[16px] font-normal font-mulish'><strong>Contact Information</strong> For more information or to raise concerns, please contact us at support@myruvo.com.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}
