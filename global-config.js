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
            },
            navTextColor: "#1a1a1a",
            navTextColorDark: "#ffffff"
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

