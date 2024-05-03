"use client";
import Link from "next/link";
import Container from "../../UI/Container/Container";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../Button/Button";
import Text from "../../UI/Text/Text";
import Heading from "../../UI/Heading/Heading";
import Notification from "../../UI/notification/success/Notification";
import { useThemeConfig } from "@/app/contexts/ThemeConfig/ThemeConfig";
import { useRouter } from "next/navigation";
import LoaderNotification from "../../UI/notification/loader/LoaderNotification";
const ApplyForm = ({ setApply, type }) => {
  const date = new Date();
  const [formData, setFormData] = useState({
    created_at: date
  });  
  const [formError, setFormError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { setFormActive, setFormActiveTerm } = useThemeConfig();
  const recaptcha = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } 
    else if (e.target.type === "tel") {
      const val = e.target.value.replace(/[^0-9.-.(.).+]/g, '').replace(/(\..*?)\..*/g, '$1');
      setFormData({
        ...formData,
        [e.target.name]: val,
      });
    } 
    else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  useEffect(() => {
    setFormData({
      ...formData,
      type: type,
    });
  }, [type]);
  const onSubmitForm = (e) => {
    e.preventDefault();
    const requiredFields = [
      "fullname",
      "email",
      "phone",
      "state",
      "city",
      "legals",
    ];
    const newFormError = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newFormError[field] = "This field is required.";
      } else {
        if (field === "email") {
          if (!formData[field].includes("@")) {
            newFormError[field] = "Invalid Email Format";
          }
        } else {
          newFormError[field] = "";
        }
      }
    });
    setFormError(newFormError);
    console.log(newFormError)
    if (
      !newFormError?.fullname &&
      !newFormError?.email &&
      !newFormError?.phone &&
      !newFormError?.state &&
      !newFormError?.city &&
      !newFormError?.legals
    ) 
    {
      setLoading(true);
      
      fetch("/api/set-data", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setFormData({
              ...formData,
              fullname: "",
              email: "",
              phone: "",
              state: "",
              city: "",
              legals: false,
              MarketingCommunications: false,
            });
            setSuccess(false);
            setApply(false);
          }, 2000);
        })
        .catch((error) => {
          setError(true);
        });
    }
  };
  const onCaptchaChange = (token) => {
    // Set the captcha token when the user completes the reCAPTCHA
    if (token) {
      formData.captchaToken = token;
    }
  };
  const setForm = () => {
    setFormActive(true);
  };
  const setFormTerm = () => {
    setFormActiveTerm(true);
  };
  const CancelForm = () => {
    router.push("/#banner");
    setTimeout(() => {
      setFormActiveTerm(false);
      setFormActive(false);
      setApply(false);
    }, 100);
  };
  return (
    <Wrapper>
      <Container>
        {success === false && (
          <Wrapper className="flex justify-between gap-12 py-6 pt-6 max-smlg:flex-col max-smlg:pt-6 max-smlg:pb-0">
            <Wrapper className="flex-1">
              <Wrapper className="sticky top-24">
                <Heading headingStyle={"h3Class"} className="mb-4">
                  We're Getting Ready to Roll!
                </Heading>
                <Text>
                  We at Ruvo are hard at work, putting the final touches on an
                  app designed to transform your travel experience.
                  <br />
                  <br />
                  Register now and be the first to know when our app is ready to
                  hit the road. We'll send you an exclusive invite to download
                  the app, plus early access to updates and special offers.
                </Text>
              </Wrapper>
            </Wrapper>
            <form
              className="flex  flex-1 gap-[20px] w-full flex-col"
              onSubmit={onSubmitForm}
            >
              <Wrapper>
                <Input
                  name="fullname"
                  label="Full Name"
                  placeholder="Full Name"
                  required={true}
                  setData={handleChange}
                  value={formData?.fullname}
                  type="text"
                />
                {formError?.fullname && !formData?.fullname && (
                  <Text className="text-sm text-red-500 mt-1">
                    {formError?.fullname}
                  </Text>
                )}
              </Wrapper>
              <Wrapper>
                <Input
                  name="email"
                  required={true}
                  type="email"
                  placeholder="example@xyz.com"
                  label="Email Address"
                  value={formData?.email}
                  setData={handleChange}
                />
                {formError?.email &&
                  formError?.email !== "Invalid Email Format" &&
                  !formData?.email && (
                    <Text className="text-sm text-red-500 mt-1">
                      {formError?.email}
                    </Text>
                  )}
                {formError?.email === "Invalid Email Format" &&
                  !formData?.email.includes("@") && (
                    <Text className="text-sm text-red-500 mt-1">
                      {formError?.email}
                    </Text>
                  )}
              </Wrapper>
              <Wrapper>
                <Input
                  name="phone"
                  required={true}
                  type="tel"
                  placeholder="Phone number"
                  label="Phone number"
                  value={formData?.phone}
                  setData={handleChange}
                />
                {formError?.phone && !formData?.phone && (
                  <Text className="text-sm text-red-500 mt-1">
                    {formError?.phone}
                  </Text>
                )}
              </Wrapper>
              <Wrapper className="flex gap-[20px]  w-full  max-sm:flex-col">
                <Wrapper className="flex-1">
                  <Input
                    name="state"
                    label="State"
                    placeholder="State"
                    required={true}
                    setData={handleChange}
                    value={formData?.state}
                    type="text"
                  />
                  {formError?.state && !formData?.state && (
                    <Text className="text-sm text-red-500 mt-1">
                      {formError?.state}
                    </Text>
                  )}
                </Wrapper>
                <Wrapper className="flex-1">
                  <Input
                    name="city"
                    label="City"
                    placeholder="City"
                    required={true}
                    setData={handleChange}
                    value={formData?.city}
                    type="text"
                  />
                  {formError?.city && !formData?.city && (
                    <Text className="text-sm text-red-500 mt-1">
                      {formError?.city}
                    </Text>
                  )}
                </Wrapper>
              </Wrapper>
              <Wrapper>
                <Checkbox
                  name={"legals"}
                  index={1}
                  setData={handleChange}
                  value={formData?.legals}
                  required={true}
                >
                  I have read and agree to the{" "}
                  <Link href="/pages/legal#privacy-policy" onClick={setForm}>
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/pages/legal#terms-conditions"
                    onClick={setFormTerm}
                  >
                    Terms of Service
                  </Link>
                  .
                </Checkbox>
                {formError?.legals && !formData?.legals && (
                  <Text className="text-sm text-red-500 mt-1">
                    {formError?.legals}
                  </Text>
                )}
              </Wrapper>
              <Checkbox
                name={"MarketingCommunications"}
                index={2}
                setData={handleChange}
                value={formData?.MarketingCommunications}
              >
                Yes, I would like to receive emails from Ruvo about new
                features, promotions, and other marketing communications.
              </Checkbox>
              <Text>
                Please complete the CAPTCHA challenge below to help us prevent
                spam.
              </Text>
              <Wrapper>
                <ReCAPTCHA
                  size="normal"
                  sitekey='6Ler9s4pAAAAAIEHFDSmgWfnzDi48XAK4gl2azcL'
                  onChange={onCaptchaChange}
                  ref={recaptcha}
                />
                {formError?.captchaToken && !formData?.captchaToken && (
                  <Text className="text-sm text-red-500 mt-1">
                    {formError?.captchaToken}
                  </Text>
                )}
              </Wrapper>
              <Wrapper className="flex gap-x-[25px] max-sm:gap-x-[15px]">
                <Button
                  event={CancelForm}
                  btnType="outlined"
                  color="orange"
                  label="Cancel"
                  type="button"
                ></Button>
                <Button
                  event={onSubmitForm}
                  btnType="solid"
                  color="orange"
                  label="Submit"
                  loading={loading}
                  loadingText="Submitting"
                  type="submit"
                ></Button>
              </Wrapper>
            </form>
          </Wrapper>
        )}
      </Container>
      {success && (
        <Notification active={success} message="Thank you for contacting us." />
      )}
      {error && (
        <LoaderNotification active={error} message="Something Went Wrong" />
      )}
    </Wrapper>
  );
};

export default ApplyForm;
