# EmailJS Setup Guide for Re-gen Active Lab

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for business emails)
4. Follow the authentication steps for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Enquiry Form Template"
4. Use this template content:

### Subject Line:
```
New Enquiry from {{company_name}} - Re-gen Active Lab
```

### Email Body:
```
New Enquiry from Re-gen Active Lab Website

Company Name: {{company_name}}
Contact Person: {{contact_person}}
Email: {{email}}
Phone: {{phone}}
Location: {{location}}
Country: {{country}}
Business Type: {{business_type}}
Product Interest: {{product_interest}}
Quantity Needed: {{quantity}}
Additional Information: {{message}}

Submitted on: {{submission_date}}

---
This enquiry was submitted through the Re-gen Active Lab website.
```

5. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Your Code

Replace the placeholder values in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("user_abc123def456");

// Replace YOUR_SERVICE_ID with your service ID
// Replace YOUR_TEMPLATE_ID with your template ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test Your Form

1. Upload your files to your web server
2. Fill out the enquiry form
3. Submit and check if you receive the email
4. Check the browser console for any error messages

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check your Service ID is correct
   - Ensure your email service is properly connected

2. **"Template not found" error**
   - Check your Template ID is correct
   - Ensure template variables match your form fields

3. **"Public key invalid" error**
   - Check your Public Key is correct
   - Ensure you're using the public key, not private key

4. **Emails not sending**
   - Check your email service authentication
   - Verify your email provider settings
   - Check browser console for error messages

## EmailJS Free Plan Limits

- **200 emails per month** (free plan)
- **2 email templates**
- **1 email service**

## Upgrade Options

If you need more emails:
- **Personal Plan**: $15/month - 1,000 emails
- **Business Plan**: $25/month - 10,000 emails
- **Enterprise Plan**: Custom pricing

## Security Notes

- Your public key is safe to use in frontend code
- Never share your private key
- EmailJS handles email sending securely
- All communication is encrypted

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
