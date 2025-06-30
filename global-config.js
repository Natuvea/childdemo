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
            titleLineHeight: "1.3",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            labelColor: "#ff6600",
            labelFontWeight: "700",
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
        
        // Inputs
        inputs: {
            emailPlaceholder: "Email Address",
            passwordPlaceholder: "Password",
            usernamePlaceholder: "Username",
            confirmPasswordPlaceholder: "Confirm Password",
            emailLabel: "Email",
            passwordLabel: "Password",
            usernameLabel: "Username",
            confirmPasswordLabel: "Confirm Password",
            borderRadius: "20px",
            height: "50px",
            width: "100%",
            padding: "0 1rem",
            margin: "0 0 0.5rem 0",
            fontSize: "1rem",
            fontWeight: "400",
            focusBorderColor: "#000000",
            focusBoxShadow: "0 0 0 2px rgba(19, 224, 11, 0.25)",
            placeholderAlign: 'center'
        },
        
        // Buttons
        buttons: {
            height: "3rem",
            borderRadius: "10px",
            hoverBackground: "#ffffff"
        },
        
        // Page Layout
        pageLayout: {
            backgroundColor: "#212125"
        },
        
        navLinks: {
            signinPrompt: 'Already registered?',
            signinLinkText: 'Log in here',
            signupPrompt: 'Need an account?',
            signupLinkText: 'Register',
            forgotPrompt: 'Trouble signing in?',
            forgotLinkText: 'Recover Password',
            fontSize: '1rem',
            color: '#ffffff',
            linkColor: '#10D5C6',
            fontWeight: '400',
            linkFontWeight: '300',
            textAlign: 'left',
            marginTop: '2rem',
            marginBottom: '1rem',
            backToSigninPrompt: 'Return to?'
        }
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

