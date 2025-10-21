### I. Website & Business Fundamentals

- Website URL:
- Website Name:
- Legal Entity Name:
- Legal Jurisdiction: Which state/country governs your legal agreements?
- Designated Privacy Contact Email:

### II. Terms and Conditions (Website Use)

- Intellectual Property (IP): Do you own all website content (text, logos, design) and explicitly prohibit unauthorized commercial use?
  - Yes/No
- User Submissions: Do you allow users to submit content?
  - Yes/No (e.g., comments, forum posts, or just contact forms and inquiries)
- Service/Product Disclaimer: Is there any key service or product information that requires a non-binding disclaimer?
  - Yes/No (All quotes are estimates only, Product colors may vary slightly, Results are not guaranteed.)
- Liability Limit: In the event of a website error or breach, is liability limited to the extent permitted by law?
  - Yes/No

### III. Privacy Policy (Data Collection & Usage)

- Personal Information Collected: List all specific data points collected via forms or checkouts.
  - (e.g., Name, Email, Phone, Mailing Address, Payment Details, Job Title)
- Non-Personal Data & Analytics: What tools are used to collect non-personal data (IP address, pages viewed)?
  - (e.g., Google Analytics 4, Hotjar, Adobe Analytics)
- Primary Data Use: What are the main reasons you use the collected personal information?
  - (e.g., Fulfilling orders, sending marketing emails, providing support, processing estimates)
- Third-Party Sharing: List all third-party services that receive or process user data.
  - (e.g., Stripe (for payment), Mailchimp (for email), Google Analytics, CRM name)
- Data Sale: Do you sell or rent personal information to third parties?
  - Yes/No
- Data Retention: How long do you keep personal data for business/legal records?
  - (e.g., 7 years, 30 days after account deletion, Indefinitely)
- User Rights: Do users have the right to request access, correction, or deletion of their personal data?
  - Yes/No

### IV. Cookie Policy (Tracking & Consent)

- Cookie Purpose: What are the primary functions of the cookies used? (Select all that apply)
  [ ] A. Strictly Necessary (Site function)
  [ ] B. Performance/Analytics (Tracking visits/traffic)
  [ ] C. Functionality (Remembering user settings/choices)
  [ ] D. Targeting/Advertising (Retargeting/Ad campaign measurement)

- Consent Mechanism: Does the website use a cookie banner or other explicit mechanism to obtain user consent before setting non-essential cookies?
  - Yes/No

### V. Business & Content Data

- Business/Site
  - Company's Name, `https://your-domain.com`, City/State/Country
- Unique Value Prop.
  - a clear statement that explains how you solve the customer's problems and why it's better than the competition
- Privacy Contact
  - `privacy@your-domain.com`
- Personal Data
  - Name, Company Name, Email Address, Phone Number, Mailing Address, Job Address, Job Title, Job site images
- Non-Personal Data
  - IP address, browser type, operating system, pages viewed, time spent on site, referring website (Google Analytics GA4)
- Data Use
  - Providing requested virtual estimates, communicating about project inquiries
- Data Sharing
  - Google Analytics, Albato Webhook
- Data Storage
  - Google Sheets, Trello, Gmail
- Data Retention
  - 7 years for tax/business records

---

Generate three complete Astro component files:

1.  `src/pages/legal/terms-and-conditions.astro`
2.  `src/pages/legal/privacy-policy.astro`
3.  `src/pages/legal/cookies.astro`

### Global Structure Requirements

- **Mandatory Astro Structure:** Every file MUST use the following Astro frontmatter and component wrapper, substituting `[PAGE TITLE HERE]` and `[PAGE DESCRIPTION HERE]` with the appropriate content for that specific file:

  ```astro
  ---
  import LegalLayout from "../../layouts/LegalLayout.astro";

  const title = "[PAGE TITLE HERE]";
  const description = "[PAGE DESCRIPTION HERE]";
  const robots = "noindex, nofollow";
  ---

  <LegalLayout title={title} description={description} robots={robots}>
    <!-- PAGE CONTENT STARTS HERE -->
    <p class="lead mb-8 text-center">
      <strong>Effective Date:</strong> October 20, 2025
    </p>

    <!-- PAGE CONTENT ENDS HERE -->
  </LegalLayout>
  ```

- **Effective Date:** Use **Today's Date**. The date paragraph must be the first paragraph and use the exact HTML structure:

  ```html
  <p class="lead mb-8 text-center">
    <strong>Effective Date:</strong> October 20, 2025
  </p>
  ```

- **Section Divider:** Use this exact HTML divider between all major sections and headings:
  ```html
  <div class="my-8 border-t border-gray-300"></div>
  ```

### **IV. Output Format**

Present the content for each file separately using markdown code blocks labeled with the file path.
