// Initialize EmailJS and form handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
    
    // Form handling script
    document.getElementById('enquiryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            company_name: data.companyName,
            contact_person: data.contactPerson,
            email: data.email,
            phone: data.phone,
            location: data.location,
            country: data.country,
            business_type: data.businessType,
            product_interest: data.productInterest,
            quantity: data.quantity,
            message: data.message,
            submission_date: new Date().toLocaleString()
        };
        
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                alert('Thank you for your enquiry! We will get back to you within 24 hours.');
                
                // Reset form
                document.getElementById('enquiryForm').reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Sorry, there was an error sending your enquiry. Please try again or contact us directly.');
            })
            .finally(function() {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
    
    // Form validation and enhancement
    const form = document.getElementById('enquiryForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Add real-time validation feedback
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(220, 53, 69)') {
                this.style.borderColor = '#ddd';
            }
        });
    });
});
