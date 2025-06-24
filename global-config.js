// Global configuration for Authiqa Widget
window.AuthiqaGlobalConfig = {
    customization: {
        // Layout
        layout: {
            padding: "1.5rem",
            borderRadius: "8px",
            maxWidth: "400px"
        },
        
        // Colors
        colors: {
            background: "#27272a",
            buttonBackground: "#10D5C6",
            buttonText: "#1F2025",
            inputBackground: "#212125",
            inputText: "#ffffff",
            inputPlaceholder: "#71717a",
            borderColor: "#3f3f46",
            inputFocusBorderColor: "#10D5C6",
            inputFocusBoxShadow: "0 0 0 2px rgba(16, 213, 198, 0.25)",
            buttonHoverBackground: "#0fbfb1"
        },
        
        // Typography
        typography: {
            titleText: {
                signinText: "Sign In",
                signupText: "Get Started",
                resetText: "Forgotten Password?",
                updateText: "Update Password",
                verifyText: "Verify Email",
                resendText: "Resend Confirmation Email"
            },
            subtitleText: {
                signinText: "Welcome back to your account",
                signupText: "Start Authenticating users in minutes",
                resetText: "We'll send you a reset link",
                updateText: "Create a new secure password",
                resendText: "Didn't receive the email?"
                // No subtitle for verify
            },
            titleSize: "1.9rem",
            titleColor: "#10D5C6",
            titleAlignment: "left",
            titleWeight: "800",
            titleLineHeight: "1.2",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            termsText: {
                agreePrefix: "I agree with the",
                andConnector: "and",
                defaultPrefix: "default",
                linkText: {
                    terms: "Terms of Service",
                    privacy: "Privacy Policy",
                    notifications: "Notification Settings"
                },
                textColor: "#ffffff",
                linkColor: "#10D5C6"
            }
        },
        
        // Buttons
        buttons: {
            height: "2.5rem",
            borderRadius: "4px"
        },
        
        // Page Layout
        pageLayout: {
            backgroundColor: "#212125"
        },
        
        // Advanced CSS (custom CSS that will be injected)
        advancedCSS: `
            /* Add subtitle after h1 */
            .authiqa-container h1:after {
                content: attr(data-subtitle);
                display: block;
                color: #ffffff !important;
                font-size: 0.7rem !important;
                font-weight: 400 !important;
                margin-top: 0.4rem !important;
                line-height: 0.6 !important;
                margin-bottom: 1rem !important;
            }
            
            /* Input focus state */
            .authiqa-container input:focus {
                border-color: #10D5C6 !important;
                box-shadow: 0 0 0 2px rgba(16, 213, 198, 0.25) !important;
            }
            
            /* Button hover state */
            .authiqa-container button[type="submit"]:hover {
                background-color: #0fbfb1 !important;
            }
            
            /* Title alignment */
            .authiqa-container h1 {
                text-align: left !important;
                font-weight: 800 !important;
                line-height: 1.2 !important;
            }
        `
    },
    
    // Custom messages
    messages: {
        signupSuccess: "Account created successfully! Please check your email for verification.",
        signupLoading: "Creating your account...",
        signinSuccess: "Welcome back! You've successfully signed in.",
        resetSuccess: "Password reset link sent! Please check your email.",
        resetLoading: "Sending password reset link...",
        updateSuccess: "Password updated successfully! You can now sign in with your new password.",
        updateLoading: "Updating your password...",
        resendSuccess: "Confirmation email sent! Please check your inbox.",
        resendLoading: "Sending confirmation email..."
    }
};

// Apply the advanced CSS
document.addEventListener('DOMContentLoaded', function() {
    if (window.AuthiqaGlobalConfig?.customization?.advancedCSS) {
        const style = document.createElement('style');
        style.textContent = window.AuthiqaGlobalConfig.customization.advancedCSS;
        document.head.appendChild(style);
    }
    
    // Set up a mutation observer to add subtitles to h1 elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        const h1 = node.tagName === 'H1' ? node : node.querySelector('h1');
                        if (h1 && h1.classList.contains('authiqa-title')) {
                            // Determine which form we're on
                            let formType = '';
                            if (h1.textContent.includes('Sign In')) formType = 'signin';
                            else if (h1.textContent.includes('Get Started') || h1.textContent.includes('Create Account')) formType = 'signup';
                            else if (h1.textContent.includes('Reset Password')) formType = 'reset';
                            else if (h1.textContent.includes('Update Password')) formType = 'update';
                            else if (h1.textContent.includes('Resend')) formType = 'resend';
                            else if (h1.textContent.includes('Verify')) formType = 'verify';
                            
                            // Set the subtitle as a data attribute
                            if (formType && window.AuthiqaGlobalConfig?.customization?.typography?.subtitleText?.[formType + 'Text']) {
                                h1.setAttribute('data-subtitle', window.AuthiqaGlobalConfig.customization.typography.subtitleText[formType + 'Text']);
                            }
                        }
                    }
                });
            }
        });
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
});

