
import './style.css'
import Heading from '@/app/components/UI/Heading/Heading';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import Container from '@/app/components/UI/Container/Container';

export const metadata = {
  title: "Ruvo Legal & Privacy",
  description: `Welcome to Ruvo! Our Terms
  and Conditions govern your use of Ruvo’s services, including our
  innovative ride-hailing platform, website, and mobile
  applications. This document outlines what you can expect from Ruvo
  and what we expect from you.`,
};

export default function Leagals() {
  
    return (
        <>
          <Wrapper className="bg-c-green-100 py-8">
            <Heading headingStyle="h1" className="text-center">
              {" "}
              Ruvo Legal & Privacy
            </Heading>
          </Wrapper>
          <div id="terms-conditions"></div>
          <Wrapper className="relative pt-5 pb-8  max-smlg:max-w-full">
            <Wrapper className="flex-1  sticky top-[52px] bg-white py-3  max-tab:top-[66px]">
              <Container className=" flex gap-x-[30px] justify-between flex-col gap-y-4">
                {" "}
                <Heading headingStyle="h2" className="!text-[24px]">
                  Terms & Conditions
                </Heading>
              </Container>
            </Wrapper>
      
            <Container className=" flex gap-x-[30px] justify-between flex-col gap-y-4">
              <Wrapper className="w-full ">
                <Wrapper className="flex flex-col gap-2">
                  <Text>
                    <strong>Introduction</strong> <br /> Welcome to Ruvo! Our Terms
                    and Conditions govern your use of Ruvo’s services, including our
                    innovative ride-hailing platform, website, and mobile
                    applications. This document outlines what you can expect from Ruvo
                    and what we expect from you.
                  </Text>
                  <Text>
                    <strong>Acceptance of Terms</strong> <br /> By using any of Ruvo’s
                    services, you acknowledge that you have read, understood, and
                    agreed to be bound by these terms. If you do not agree with any
                    part of these terms, you should discontinue use of our services
                    immediately.
                  </Text>
                  <Text>
                    <strong>Changes to Terms</strong> <br /> We may occasionally
                    update these terms to reflect changes to our services, user
                    feedback, or legal and regulatory updates. Changes will be
                    communicated through our website or via email, and will take
                    effect from the date they are posted. Continued use of our
                    services after such changes will constitute acceptance of the new
                    terms
                  </Text>
                  <Text>
                    <p className="font-mulish font-normal text-[22px]">
                      Account Requirements
                    </p>
                    <ul className="list-disc text-[16px] font-normal font-mulish pl-[28px]">
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Age Restrictions:</strong> <br /> You must be at
                        least 18 years old to create an account and use Ruvo’s
                        services.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Account Registration: </strong> <br /> To use Ruvo,
                        you must register for an account by providing accurate,
                        current, and complete information as prompted by our
                        registration forms.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>User Responsibilities:</strong> <br /> You are
                        responsible for maintaining the confidentiality of your
                        account information and for all activities that occur under
                        your account.
                      </li>
                    </ul>
                  </Text>
                  <Text>
                    <strong>Service Provision</strong> <br /> Ruvo provides a platform
                    for ride-hailing that connects riders with drivers of electric
                    vehicles. You are responsible for complying with all local laws
                    and regulations while using Ruvo’s services.
                  </Text>
                  <Text>
                    <strong>Payments and Fees</strong> <br /> Our pricing model
                    includes subscription fees for riders and drivers, along with
                    charges per ride. Detailed pricing information is available in our
                    app. Refunds are handled on a case-by-case basis and are generally
                    processed in accordance with our refund policy
                  </Text>
                  <Text>
                    <strong>User Conduct</strong> <br /> Users are expected to behave
                    respectfully and lawfully while using Ruvo’s services. Prohibited
                    behaviors include but are not limited to: disrespecting other
                    inWrapper iduals, using the service for unlawful purposes, and
                    attempting to harm the service or other users.
                  </Text>
                  <Text>
                    <strong>Termination and Suspension</strong> <br /> Ruvo reserves
                    the right to suspend or terminate your account if you breach any
                    terms of this agreement. Users may appeal such decisions by
                    contacting our support team
                  </Text>
                  <Text>
                    <strong>Dispute Resolution</strong> <br /> Disputes between you
                    and Ruvo should be resolved through our support team. We aim to
                    resolve disputes amicably and efficiently.
                  </Text>
                  <Text>
                    <strong id="privacy-policy">Governing Law </strong> <br />
                    These terms are governed by the laws of the jurisdiction in which
                    Ruvo operates, without regard to conflict of law principles.
                  </Text>
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
          <div id="privacy-policy"></div>
          <Wrapper className="relative pt-5 pb-8  bg-whtie max-smlg:max-w-full  bg-c-green-100">
            <Wrapper className="flex-1  sticky top-[52px] bg-c-green-100 py-3 max-tab:top-[66px]">
              <Container>
                <Heading headingStyle="h2" className="!text-[24px]">
                  Privacy Policy
                </Heading>
              </Container>
            </Wrapper>
      
            <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
              <Wrapper className="w-full">
                <Wrapper className="flex flex-col gap-2">
                  <Text>
                    <strong>Introduction</strong> <br /> At Ruvo, your privacy is our
                    priority. We are committed to protecting your personal information
                    and being transparent about what data we collect and how it is
                    used. This policy outlines our practices in detail.
                  </Text>
                  <Text>
                    Information Collection
                    <ul className="list-disc text-[16px] font-normal font-mulish pl-[28px]">
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Registration and Profile Information:</strong> <br />{" "}
                        When you register for an account or update your profile, we
                        collect information such as your name, email address, and
                        contact details. This information is essential for providing
                        you with personalized services.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Cookies and Tracking Technologies: </strong> <br /> W
                        e use cookies and similar technologies primarily to enhance
                        your user experience and improve our services. These
                        technologies help us understand how you use Ruvo, making our
                        platform more intuitive and responsive to your needs.
                      </li>
                    </ul>
                  </Text>
                  <Text>
                    Use of Information:
                    <ul className="list-disc text-[16px] font-normal font-mulish pl-[28px]">
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        Enhance the functionality and usability of our services.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        Manage your account and provide you with customer support.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        Process transactions and send you related information,
                        including confirmations and invoices.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        Communicate with you about promotions, upcoming events, and
                        other news about products and services offered by Ruvo and our
                        selected partners.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        Conduct research and analysis, including surveys and
                        analytics.
                      </li>
                    </ul>
                  </Text>
                  <Text>
                    Information Sharing Ruvo respects your privacy:
                    <ul className="list-disc text-[16px] font-normal font-mulish pl-[28px]">
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>No Selling of Personal Information:</strong> <br /> We
                        will not sell any personal information to third parties.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>No Advertising:</strong> <br /> We will not use your
                        personally identifiable information to target or support
                        advertising. This means we do not engage in activities that
                        use your personal data to display personalized or behavioral
                        advertisements.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>
                          We may share information with third parties in the following
                          ways:
                        </strong>{" "}
                        <br />
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Service Providers:</strong> <br /> We share
                        information with companies that provide services on our
                        behalf, such as payment processing, data analysis, email
                        delivery, hosting services, customer service, and marketing
                        assistance. These service providers are authorized to use your
                        personal information only as necessary to provide these
                        services to us.
                      </li>
                      <li className="text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]">
                        <strong>Legal Requirements and Business Transfers:</strong>{" "}
                        <br /> We may disclose your information if required to do so
                        by law or in the good faith belief that such action is
                        necessary to conform to the edicts of the law or comply with
                        legal process served on us, protect and defend our rights or
                        property, act in urgent circumstances to protect the personal
                        safety of users of Ruvo or the public, or in connection with a
                        merger, acquisition, or sale of assets.
                      </li>
                    </ul>
                  </Text>
                  <Text>
                    <strong>User Rights</strong> <br /> You have the right to access,
                    update, and delete your personal information. You can exercise
                    these rights at any time by logging into your account settings or
                    contacting us directly.
                  </Text>
                  <Text>
                    <strong>Data Security</strong> <br /> We take robust security
                    measures to protect your data from unauthorized access,
                    alteration, destruction, or disclosure. Our security practices
                    include encryption, firewalls, and secure server facilities.
                  </Text>
                  <Text>
                    <strong>Cookies and Tracking Technologies</strong> <br /> Our use
                    of cookies is designed to provide you with a seamless experience
                    and is not linked to personally identifiable information. You can
                    manage your cookie preferences within your browser settings.
                  </Text>
                  <Text>
                    <strong>Changes to the Privacy Policy</strong> <br /> We may
                    update this policy from time to time to reflect changes in our
                    practices or applicable regulations. We will notify you of any
                    material changes by posting the new policy on our website and
                    updating the effective date at the top of this page.
                  </Text>
                  <Text>
                    <strong id="regulatory-information">Contact Information</strong>{" "}
                    <br /> If you have any questions or concerns about this policy or
                    our data practices, please contact us at privacy@myruvo.com.
                  </Text>
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
      
          <div id="regulatory-information"></div>
          <Wrapper className="relative pt-5 pb-8   max-smlg:max-w-full">
            <Wrapper className="flex-1 sticky top-[52px] bg-white py-3  max-tab:top-[66px]">
              <Container>
                <Heading headingStyle="h2" className="!text-[24px] ">
                  Regulatory Information
                </Heading>
              </Container>
            </Wrapper>
      
            <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
              <Wrapper className="w-full">
                <Wrapper className="flex flex-col gap-2">
                  <Text>
                    <strong>Compliance</strong> <br /> Ruvo complies with all
                    applicable data protection laws, transportation regulations, and
                    environmental standards.{" "}
                  </Text>
                  <Text>
                    {" "}
                    <strong>Licenses</strong> <br /> Ruvo is licensed to operate a
                    ride-hailing service in all jurisdictions where it operates.{" "}
                  </Text>
                  <Text>
                    {" "}
                    <strong>Safety Regulations</strong> <br /> We adhere to strict
                    safety regulations to ensure the well-being of our riders and
                    drivers.{" "}
                  </Text>
                  <Text>
                    {" "}
                    <strong>Contact Information</strong> <br /> For more information
                    or to raise concerns, please contact us at support@myruvo.com.
                  </Text>
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
        </>
      );      
}
