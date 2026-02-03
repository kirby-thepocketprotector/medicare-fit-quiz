"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormCta.module.css";

export function FormCta({
  as: _Component = _Builtin.Section,
  ctaHeader = "Stay Ahead of Your Medicare Deadlines.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-cta")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "article-anchor")}
        tag="div"
        id="form"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1280")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-custom-7")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cta-header-default-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-45",
                  "margin-bottom-24",
                  "line-height-1"
                )}
                tag="h2"
              >
                {ctaHeader}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "max-725")} tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-size-20",
                  "poppins",
                  "margin-bottom-custom-24"
                )}
                tag="div"
              >
                {
                  "Get your personalized Medicare calendar and get a clear plan for all your key dates."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "medicare-form")}
            >
              <_Builtin.FormForm
                className={_utils.cx(_styles, "medicare-form-wrapper")}
                name="email-form"
                data-name="Email Form"
                method="get"
                id="wf-form-Article-Medicare-Main-Form"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "form-validation-script")}
                  value="%3Cscript%3E%0Alet%20ip_addMain%20%3D%20''%3B%0Alet%20hubspotErrorMain%20%3D%20false%3B%0Alet%20contact_id_main%20%3D%20''%3B%0Alet%20isBirthdayValidMain%20%3D%20false%3B%0A%0Alet%20isZipValidMain%20%3D%20false%3B%0Alet%20isEmailValidMain%20%3D%20false%3B%0Alet%20isValidName%20%3D%20false%3B%0Alet%20submit_locMain%20%3D%20'ntm_quiz'%3B%0Aconst%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0Aconst%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%0A%0A%20%20function%20validateFormMain()%20%7B%0A%20%20%20%20const%20zipCode%20%3D%20%2212345%22%3B%0A%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%20%7C%7C%20%22%22%3B%0A%20%20%20%20const%20email%20%3D%20%24('%23email').val()%3B%0A%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%20%20%20%20const%20name%20%3D%20%22test%22%3B%0A%0A%20%20%20%20%2F%2F%20Regex%3A%20allows%20letters%2C%20apostrophes%2C%20and%20hyphens%20(e.g.%2C%20O'Connor%2C%20Anne-Marie)%0A%20%20%20%20const%20nameRegex%20%3D%20%2F%5E%5BA-Za-z%5D%2B(%5B-'%20%5D%5BA-Za-z%5D%2B)*%24%2F%3B%0A%0A%20%20%20%20if%20(name.length%20%3E%3D%202%20%26%26%20nameRegex.test(name))%20%7B%0A%20%20%20%20%20%20isValidName%20%3D%20true%3B%0A%20%20%20%20%20%20%24('.name-text-error-main').hide()%3B%0A%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20isValidName%20%3D%20false%3B%0A%20%20%20%20%20%20%24('.name-text-error-main')%0A%20%20%20%20%20%20%20%20.text('Please%20enter%20your%20first%20name.')%0A%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-main').hide()%3B%0A%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-main').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20isZipValidMain%20%3D%20false%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-main')%0A%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%7D%0A%0A%0A%20%20%20%20%2F%2F%20Toggle%20submit%20button%0A%20%20%20%20if%20(isBirthdayValidMain%20%26%26%20isValidName)%20%7B%0A%20%20%20%20%20%20%2F%2F%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0Afunction%20submitFormMain(location%2C%20email)%7B%0A%20%20%2F%2Fconst%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads'%3B%20%2F%2F%20Test%20API%20URL%0A%20%20%2F%2Fconst%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot'%3B%20%2F%2F%20Test%20API%20URL%0A%20%20%0A%20%20%20let%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot'%3B%0A%20%20%0A%20%20if(hubspotErrorMain)%7B%0A%20%20%09apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot_update'%3B%0A%20%20%7D%0A%20%20%0A%20%20const%20apiKey%20%3D%20'bqlq2wZ2Pb0n0P7R0IiIRRXYlffbHZ7_tYfbhsNJE3ls0LCDWuSZgNwftEFNrArtV5t98EGfai2XYrtFy3bGC3ihJWVQQfYh7OCWkmjBX9ayA4Qfv4nWe_kVa_9oALEpDitLTtG_bvU3y6C1fdE7nYi1Osv7manzc3Ah7s2SMXI'%3B%20%2F%2F%20Test%20API%20Key%0A%20%20%0A%20%20const%20url%20%3D%20window.location.href%3B%0A%20%20%2F%2F%20Create%20a%20URL%20object%0A%20%20%20%20const%20urlParams%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20parameters%0A%20%20const%20ls_agerange%20%3D%20urlParam.get('ls_agerange')%3B%20%2F%2F%20Fix%3A%20use%20%60urlParam%60%0A%20%20const%20ls_gender%20%3D%20urlParam.get('ls_gender')%3B%0A%20%20const%20ls_policysize%20%3D%20urlParam.get('ls_policysize')%3B%0A%20%20let%20policy_size%20%3D%20ls_policysize%3B%0A%20%20const%20utm_source_data%20%3D%20urlParam.get('utm_source')%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20UTM%20parameters%0A%20%20const%20utm_source%20%3D%20urlParams.get('utm_source')%20%7C%7C%20''%3B%0A%20%20const%20utm_campaign%20%3D%20urlParams.get('utm_campaign')%20%7C%7C%20''%3B%0A%20%20const%20utm_medium%20%3D%20urlParams.get('utm_medium')%20%7C%7C%20''%3B%0A%20%20const%20utm_creative%20%3D%20urlParams.get('utm_creative')%20%7C%7C%20''%3B%0A%20%20const%20utm_adset%20%3D%20urlParams.get('utm_adset')%20%7C%7C%20''%3B%0A%20%20const%20utm_placement%20%3D%20urlParams.get('utm_placement')%20%7C%7C%20urlParams.get('placement')%20%7C%7C%20''%3B%0A%20%20const%20utm_id%20%3D%20urlParams.get('utm_id')%20%7C%7C%20''%3B%0A%20%20const%20utm_content%20%3D%20urlParams.get('utm_content')%20%7C%7C%20''%3B%0A%20%20const%20utm_term%20%3D%20urlParams.get('utm_term')%20%7C%7C%20''%3B%0A%20%20const%20fbclid%20%20%3D%20urlParams.get('fbclid')%20%7C%7C%20''%3B%0A%20%20%0A%20%20const%20dobInput%20%3D%20%24('%23birthday-input-main').val()%3B%20%2F%2F%20Example%3A%20%2201%2F01%2F1990%22%20or%20%2201-01-1990%22%0A%20%20const%20parsedDate%20%3D%20new%20Date(dobInput)%3B%0A%20%20const%20yyyy%20%3D%20parsedDate.getFullYear()%3B%0A%20%20const%20mm%20%3D%20String(parsedDate.getMonth()%20%2B%201).padStart(2%2C%20'0')%3B%20%2F%2F%20Months%20are%200-indexed%0A%20%20const%20dd%20%3D%20String(parsedDate.getDate()).padStart(2%2C%20'0')%3B%0A%20%20%2F%2Fconst%20phone%20%3D%20%24('%5Bmain-phone%5D').val().replace(%2F%5CD%2Fg%2C%20'')%3B%0A%20%20const%20phone%20%3D%20%22%22%3B%0A%0A%20%20const%20formattedDate%20%3D%20%60%24%7Byyyy%7D-%24%7Bmm%7D-%24%7Bdd%7D%60%3B%0A%20%20console.log(formattedDate)%3B%20%2F%2F%20%221990-01-01%22%0A%20%20%0A%20%20const%20name%20%3D%20%24('%23email').val()%3B%0A%20%20%0A%20%20%0A%20%20%2F%2FCalculate%20Dates%0A%20%20let%20dobStr%20%3D%20formattedDate%3B%20%2F%2F%20YYYY-MM-DD%0A%20%20let%20medicareDates%20%3D%20calculateMedicareDates(dobStr)%3B%0A%20%20console.log(%22Beginning%20of%20IEP%3A%22%2C%20medicareDates.beginningOfIEP)%3B%0A%20%20console.log(%22Earliest%20Coverage%20Date%3A%22%2C%20medicareDates.earliestCoverageDate)%3B%0A%20%20console.log(%22Enrollment%20Window%20Closes%3A%22%2C%20medicareDates.enrollmentWindowCloses)%3B%0A%20%20%2F%2FCalculate%20Dates%0A%20%20%0A%20%20const%20postDataLead%20%3D%20%7B%0A%20%20%20%20contactID%3A%20contact_id_main%2C%0A%20%20%20%20%2F%2Femail%3A%20email%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20first_name%3A%20name%2C%0A%20%20%20%20phone%3A%20phone%2C%0A%20%20%20%20phone_number%3A%20%24('%5Bmain-phone%5D').val()%2C%0A%20%20%20%20Preferred_Contact_Window%3A%20%24('%23best-time-reach').val()%2C%0A%20%20%20%20zipcode%3A%20%24('%23zip-input').val()%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20DOB%3A%20%24('%23birthday-input-main').val()%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20dob%3A%20formattedDate%2C%0A%20%20%20%20submit_location%3A%20location%2C%0A%20%20%20%20ip_address%3A%20ip_addMain%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20email%3A%20%24('%23email').val()%2C%0A%20%20%20%20%2F%2Froot_url%3A%20window.location.origin%20%2B%20window.location.pathname%2C%20%2F%2F%20Capture%20root%20URL%20(domain%20%2B%20path)%0A%20%20%20%20root_url%3A%20window.location.href%2C%0A%20%20%20%20utm_source%3A%20utm_source%2C%0A%20%20%20%20utm_campaign%3A%20utm_campaign%2C%0A%20%20%20%20utm_medium%3A%20utm_medium%2C%0A%20%20%20%20utm_creative%3A%20utm_creative%2C%0A%20%20%20%20utm_adset%3A%20utm_adset%2C%0A%20%20%20%20utm_placement%3A%20utm_placement%2C%0A%20%20%20%20utm_id%3A%20utm_id%2C%0A%20%20%09utm_content%3A%20utm_content%2C%0A%20%20%20%20utm_term%3A%20utm_term%2C%0A%20%20%20%20fbclid%3A%20fbclid%2C%0A%20%20%20%20policy_userinput%3A%20ls_policysize%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20beginning_of_iep%3A%20medicareDates.beginningOfIEP%2C%20%2F%2FBeginning%20of%20IEP%0A%20%20%20%20earliest_coverage_date%3A%20medicareDates.earliestCoverageDate%2C%20%2F%2FEarliest%20Coverage%20Date%0A%20%20%20%20enrollment_window_closes%3A%20medicareDates.enrollmentWindowCloses%2C%20%2F%2FEnrollment%20Window%20Closes%0A%20%20%7D%3B%0A%20%20%0A%20%20%20console.log(postDataLead)%3B%0A%0A%20%20fetch(apiUrl%2C%20%7B%0A%20%20%20%20method%3A%20'POST'%2C%0A%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20'Content-Type'%3A%20'application%2Fjson'%2C%0A%20%20%20%20%20%20'Authorization'%3A%20%60%24%7BapiKey%7D%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20body%3A%20JSON.stringify(postDataLead)%0A%20%20%7D)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error(%60HTTP%20error!%20Status%3A%20%24%7Bresponse.status%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%20console.log('Success%3A%20Sent%20Data'%2C%20data)%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2Fconsole.log(data.tpp_.response.result)%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%20%20let%20existingId%20%3D%20null%3B%0A%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20data.tpp_.response.result%20%26%26%0A%20%20%20%20%20%20%20%20data.tpp_.response.result.status%20%3D%3D%3D%20%22error%22%20%26%26%0A%20%20%20%20%20%20%20%20data.tpp_.response.result.message.includes(%22Existing%20ID%3A%22)%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20existingId%20%3D%20data.tpp_.response.result.message.split(%22Existing%20ID%3A%22)%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20if(existingId)%7B%0A%20%20%20%20%20%20%20%20%20%20hubspotErrorMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20contact_id_main%20%3D%20existingId%3B%0A%20%20%20%20%20%20%20%20%20%20submitFormMain(location%2C%20email)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20console.log(existingId)%3B%20%2F%2F%20%E2%9E%9D%20%22170457770712%22%0A%20%20%20%20%20%20%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%0A%20%20%20%20%2F*setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B*%2F%0A%20%20%20%20%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error('Error%3A'%2C%20error)%3B%0A%0A%20%20%20%20%2F*setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B*%2F%0A%20%20%20%20%0A%20%20%7D)%3B%0A%0A%7D%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09const%20apiUrl%20%3D%20'https%3A%2F%2Fapi.seeip.org%2Fgeoip'%3B%0A%0A%20%20fetch(apiUrl)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error('Network%20response%20was%20not%20ok')%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%0A%20%20%20%20console.log(data)%3B%0A%20%20%20%20%0A%20%20%20%20ip_addMain%20%3D%20data.ip%3B%0A%20%20%20%20%2F*postal_code%20%3D%20data.postal_code%3B%0A%20%20%20%20city%20%3D%20data.city.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20region_iso%20%3D%20data.region_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20country%20%3D%20data.country_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20state_region%20%3D%20data.region.replaceAll('%20'%2C'').toLowerCase()%3B*%2F%0A%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error(error)%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%20%20%20%20%2F%2FBirthdate%20Validation%0A%20%20%20%20const%20%24input%20%3D%20%24('%23birthday-input-main')%3B%0A%20%20%20%20let%20previousValue%20%3D%20''%3B%0A%20%20%20%20let%20hadCompleteInput%20%3D%20false%3B%20%2F%2F%20Track%20if%20input%20was%20ever%20completed%20(8%20digits)%0A%0A%20%20%20%20function%20validateBirthdayInput(triggeredByBlur%20%3D%20false)%20%7B%0A%20%20%20%20%20%20let%20raw%20%3D%20%24input.val()%3B%0A%20%20%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%20%20%24input.val(formatted)%3B%0A%20%20%20%20%20%20%20%20const%20inputEl%20%3D%20%24input.get(0)%3B%0A%20%20%20%20%20%20%20%20inputEl.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20const%20isBackspace%20%3D%20previousValue.length%20%3E%20formatted.length%3B%0A%20%20%20%20%20%20const%20isNowComplete%20%3D%20numbers.length%20%3D%3D%3D%208%3B%0A%20%20%20%20%20%20const%20wasPreviouslyComplete%20%3D%20hadCompleteInput%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Update%20tracker%0A%20%20%20%20%20%20if%20(isNowComplete)%20%7B%0A%20%20%20%20%20%20%20%20hadCompleteInput%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20previousValue%20%3D%20formatted%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Determine%20whether%20to%20run%20validation%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20triggeredByBlur%20%7C%7C%20isNowComplete%20%7C%7C%20wasPreviouslyComplete%3B%0A%0A%20%20%20%20%20%20if%20(!shouldValidate)%20return%3B%0A%0A%20%20%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Parse%20date%20parts%0A%20%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20validYear%20%3D%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%20%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%20%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%20%20%20%20%20%20%20%20return%20validYear%20%26%26%20inputDate%20%3C%20today%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Final%20validation%0A%20%20%20%20%20%20if%20(isValidDate(month%2C%20day%2C%20year)%20%26%26%20isWithinRange(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate')%3B%0A%0A%20%20%20%20%20%20%20%20if%20(isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20ZIP%20logic%20if%20needed%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20validateFormMain()%3B%20%2F%2F%20Re-check%20form%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Trigger%20on%20input%0A%20%20%20%20%24input.on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20validateBirthdayInput(false)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Trigger%20on%20blur%0A%20%20%20%20%24input.on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20validateBirthdayInput(true)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%2F%2FBirthdate%20Validation%0A%20%20%0A%0A%0A%20%20%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%20%20%24('%23wf-form-Article-Medicare-Main-Form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20const%20zipCode%20%3D%20%2212345%22%3B%0A%20%20%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20const%20email%20%3D%20%22test%40test.com%22%3B%0A%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%0A%0A%20%20%20%20%20%20if%20(!emailRegex.test(email)%20%7C%7C%20birthday.length%20!%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20%20%20submitFormMain('calendar_reminder_request_call'%2C%20%24('%23email-input-main').val())%3B%0A%20%20%20%20%20%20%20%20%2F%2F%24('%23article-question-main').hide()%3B%0A%0A%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23form').offset().top%3B%0A%20%20%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%20%20%7D%2C%203500)%3B%0A%0A%20%20%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20event%3A%20'request_call'%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20submit_locMain%20%3D%20'calendar_reminder_request_call'%3B%0A%0A%20%20%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%0A%0A%20%20%20%20%20%20%20%20const%20dataLayerEvent2%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20%20%20%2F%2Flocation%3A%20medicare%20%3D%3D%3D%20'over_65'%20%3F%20'O65_Working_Screener_Result'%20%3A%20'T65_Screener_Result'%2C%0A%20%20%20%20%20%20%20%20%20%20location%3A%20'calendar_reminder_request_call'%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent2)%3B%0A%20%20%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D)%3B%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%0A%3Cscript%3E%0Afunction%20calculateMedicareDates(dobStr)%20%7B%0A%20%20let%20dob%20%3D%20new%20Date(dobStr)%3B%0A%20%20let%20today%20%3D%20new%20Date()%3B%0A%0A%20%20%2F%2F%20Helpers%0A%20%20function%20firstDayOfMonth(date)%20%7B%0A%20%20%20%20return%20new%20Date(date.getFullYear()%2C%20date.getMonth()%2C%201)%3B%0A%20%20%7D%0A%20%20function%20lastDayOfMonth(date)%20%7B%0A%20%20%20%20return%20new%20Date(date.getFullYear()%2C%20date.getMonth()%20%2B%201%2C%200)%3B%0A%20%20%7D%0A%20%20function%20formatDate(date)%20%7B%0A%20%20%20%20let%20year%20%3D%20date.getFullYear()%3B%0A%20%20%20%20let%20month%20%3D%20String(date.getMonth()%20%2B%201).padStart(2%2C%20'0')%3B%0A%20%20%20%20let%20day%20%3D%20String(date.getDate()).padStart(2%2C%20'0')%3B%0A%20%20%20%20return%20%60%24%7Byear%7D-%24%7Bmonth%7D-%24%7Bday%7D%60%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Calculate%2065th%20birthday%0A%20%20let%20sixtyFifth%20%3D%20new%20Date(dob)%3B%0A%20%20sixtyFifth.setFullYear(sixtyFifth.getFullYear()%20%2B%2065)%3B%0A%0A%20%20%2F%2F%20Define%20IEP%20window%20(3%20months%20before%20to%203%20months%20after%2065th%20birthday)%0A%20%20let%20windowStart%20%3D%20new%20Date(sixtyFifth)%3B%0A%20%20windowStart.setMonth(windowStart.getMonth()%20-%203)%3B%0A%20%20let%20windowEnd%20%3D%20new%20Date(sixtyFifth)%3B%0A%20%20windowEnd.setMonth(windowEnd.getMonth()%20%2B%203)%3B%0A%0A%20%20%2F%2F%20Beginning%20of%20IEP%20(3%20months%20before%2C%20first%20day%20of%20month)%0A%20%20let%20beginningOfIEP%20%3D%20firstDayOfMonth(windowStart)%3B%0A%0A%20%20%2F%2F%20Earliest%20Coverage%20Date%20(first%20day%20of%20birthday%20month)%0A%20%20let%20earliestCoverage%20%3D%20firstDayOfMonth(sixtyFifth)%3B%0A%0A%20%20%2F%2F%20Enrollment%20Window%20Closes%20(3%20months%20after%2C%20last%20day%20of%20month)%0A%20%20let%20enrollmentCloses%20%3D%20lastDayOfMonth(windowEnd)%3B%0A%0A%20%20%2F%2F%20Age%20calculation%0A%20%20let%20age%20%3D%20today.getFullYear()%20-%20dob.getFullYear()%3B%0A%20%20let%20m%20%3D%20today.getMonth()%20-%20dob.getMonth()%3B%0A%20%20if%20(m%20%3C%200%20%7C%7C%20(m%20%3D%3D%3D%200%20%26%26%20today.getDate()%20%3C%20dob.getDate()))%20%7B%0A%20%20%20%20age--%3B%20%2F%2F%20adjust%20if%20birthday%20hasn't%20occurred%20yet%20this%20year%0A%20%20%7D%0A%0A%20%20%2F%2F%20Only%20return%20dates%20if%20contact%20is%2062%E2%80%9365%20(within%20eligibility%20range)%0A%20%20if%20(age%20%3C%2062%20%7C%7C%20today%20%3E%20windowEnd)%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20beginningOfIEP%3A%20%22%22%2C%0A%20%20%20%20%20%20earliestCoverageDate%3A%20%22%22%2C%0A%20%20%20%20%20%20enrollmentWindowCloses%3A%20%22%22%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%0A%20%20return%20%7B%0A%20%20%20%20beginningOfIEP%3A%20formatDate(beginningOfIEP)%2C%0A%20%20%20%20earliestCoverageDate%3A%20formatDate(earliestCoverage)%2C%0A%20%20%20%20enrollmentWindowCloses%3A%20formatDate(enrollmentCloses)%0A%20%20%7D%3B%0A%7D%0A%3C%2Fscript%3E"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(
                    _styles,
                    "text-size-16",
                    "poppins",
                    "text-weight-normal"
                  )}
                  htmlFor="email"
                >
                  {"Email"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(
                    _styles,
                    "medicare-form-input",
                    "margin-bottom-24"
                  )}
                  autoFocus={false}
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  type="email"
                  disabled={false}
                  required={true}
                  id="email"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(
                    _styles,
                    "text-size-16",
                    "poppins",
                    "text-weight-normal"
                  )}
                  htmlFor="birthday-input-main"
                >
                  {"Date of Birth"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(
                    _styles,
                    "medicare-form-input",
                    "margin-bottom-24"
                  )}
                  autoFocus={false}
                  maxLength="10"
                  name="name"
                  data-name="Name"
                  type="text"
                  disabled={false}
                  required={true}
                  autoComplete="off"
                  inputMode="numeric"
                  id="birthday-input-main"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "birthday-text-error-main")}
                  tag="div"
                >
                  {"Please enter a valid birthday MM/DD/YYYY"}
                </_Builtin.Block>
                <_Builtin.FormButton
                  className={_utils.cx(
                    _styles,
                    "cta-green",
                    "is-v2",
                    "custom-1"
                  )}
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  id="continue-question"
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(
                  _styles,
                  "article-success-msg",
                  "align-left"
                )}
              >
                <_Builtin.Block tag="div">
                  {"Thanks! We'll be reaching out to you shortly."}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
