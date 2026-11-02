document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields in the contact form.");
                return;
            }

            // Simple email format verification
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been validated and prepared successfully.");
            contactForm.submit();
        });
    }

    // ==========================================
    // 2. ENQUIRY FORM VALIDATION & DYNAMIC RESPONSE
    // ==========================================
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullName = document.getElementById("enquiryName").value.trim();
            const enquiryType = document.getElementById("enquiryType").value;
            const responseBox = document.getElementById("enquiryResponse");

            if (fullName === "" || enquiryType === "") {
                alert("Please complete all required fields for your enquiry.");
                return;
            }

            // Dynamic response generation based on what they select
            let responseText = "";
            if (enquiryType === "volunteer") {
                responseText = `Thank you ${fullName}! Volunteer orientation for Ubuntu Youth programs takes place every Saturday at 10:00 AM. We will email your onboarding packet shortly.`;
            } else if (enquiryType === "sponsor") {
                responseText = `Thank you for your generous interest, ${fullName}! A partnership liaison will contact you with our annual corporate sponsorship tiers and impact report.`;
            } else {
                responseText = `Thank you ${fullName}! Your enquiry regarding our youth mentoring programs has been received. Our team will review and respond within 24 hours.`;
            }

            // Display dynamic response on the page
            if (responseBox) {
                responseBox.style.display = "block";
                responseBox.innerHTML = `<p style="background: #eef9f0; padding: 12px; border-left: 4px solid #28a745; margin-top: 10px;"><strong>Dynamic Response:</strong> ${responseText}</p>`;
            } else {
                alert(responseText);
            }
        });
    }

    // ==========================================
    // 3. DYNAMIC PROGRAM SEARCH & FILTER FEATURE
    // ==========================================
    const searchInput = document.getElementById("programSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function (e) {
            const searchTerm = e.target.value.toLowerCase();
            const programCards = document.querySelectorAll(".program-card");

            programCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = "block"; // Show card if it matches
                } else {
                    card.style.display = "none";  // Hide card if it doesn't match
                }
            });
        });
    }

});