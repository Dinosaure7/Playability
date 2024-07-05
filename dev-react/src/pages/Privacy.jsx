import React from "react";

function Privacy() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: [07/04/2024]</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">1. Introduction</h2>
      <p>
        We are committed to protecting your personal information. This privacy
        policy explains how we collect, use, and share your information when you
        use our website [Playability] and our services.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        2. Information We Collect
      </h2>
      <h3 className="text-xl font-bold mt-2 mb-2">
        2.1. Information You Provide to Us
      </h3>
      <p>
        When you fill out forms or contact us, we may collect information such
        as your name, email address, phone number, and postal address.
      </p>
      <p>
        <strong>Payment Information</strong>: if you make purchases through our
        site, we will collect the information necessary to process payments.
      </p>

      <h3 className="text-xl font-bold mt-2 mb-2">
        2.2. Information We Collect Automatically
      </h3>
      <p>
        <strong>Browsing Data</strong>: we may collect information about how you
        access and use our site, such as your IP address, browser type, Internet
        Service Provider (ISP), referring/exit pages, and timestamps.
      </p>
      <p>
        <strong>Cookies and Similar Technologies</strong>: we use cookies to
        enhance your user experience, analyze site usage, and customize content.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        3. Use of Your Information
      </h2>
      <p>We use your information to:</p>
      <ul className="list-disc list-inside">
        <li>Provide, operate, and improve our services;</li>
        <li>Process your transactions and send you confirmations;</li>
        <li>Respond to your inquiries and concerns;</li>
        <li>
          Send you marketing and promotional communications (if you have
          consented to receive them);
        </li>
        <li>Analyze site usage and personalize your experience.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        4. Sharing Your Information
      </h2>
      <p>
        We do not sell your personal information to third parties. We may share
        your information with trusted third parties, including:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Service Providers</strong>: to help us operate our site and
          provide our services (e.g., payment processing and web hosting
          services).
        </li>
        <li>
          <strong>Legal Obligations</strong>: to comply with laws or respond to
          legal requests or governmental authorities.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        5. Security of Your Information
      </h2>
      <p>
        We implement security measures to protect your personal information from
        unauthorized access, use, or disclosure. However, no method of
        transmission over the Internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">6. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the following rights
        regarding your personal information:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Access</strong>: you have the right to request access to your
          personal information that we hold.
        </li>
        <li>
          <strong>Correction</strong>: you may request the correction of
          inaccurate or incomplete personal information.
        </li>
        <li>
          <strong>Deletion</strong>: you may request the deletion of your
          personal information.
        </li>
        <li>
          <strong>Objection and Restriction</strong>: you may object to or
          request the restriction of the processing of your personal
          information.
        </li>
      </ul>
      <p>
        To exercise these rights, please contact us at: [Contact email address].
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        7. Changes to this Policy
      </h2>
      <p>
        We may update this privacy policy from time to time. We will post any
        changes on this page and update the "Last updated" date at the top of
        this policy.
      </p>
    </div>
  );
}

export default Privacy;
