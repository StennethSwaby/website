
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Form submission failed");
        }

        formStatus.textContent = "Your message was sent successfully!";
        contactForm.reset();

    } catch (error) {
        formStatus.textContent =
            "Something went wrong. Please try again.";
        console.error(error);

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
    }
});
