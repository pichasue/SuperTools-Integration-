# Integration Guide for Cloned "Tools" Page into WordPress

This guide provides step-by-step instructions for integrating the cloned "Tools" page into your WordPress site. Please follow the instructions carefully to ensure a smooth integration process.

## Prerequisites
- Ensure you have administrative access to your WordPress dashboard.
- Make sure you have a backup of your WordPress site before making changes.

## Steps for Integration

1. **Export React App as Static Files:**
   - Build your React application to generate static files. You can typically do this by running `npm run build` in your project directory.
   - After building, you will find the static files in the `build` folder of your React project.

2. **Upload Static Files to WordPress:**
   - Log in to your WordPress dashboard.
   - Navigate to the Media section and upload the static files from the `build` folder.
   - Take note of the URLs provided by WordPress for these files, as you will need them for the next steps.

3. **Create a New Page for the "Tools" Section:**
   - In your WordPress dashboard, go to Pages and click 'Add New'.
   - Title the page appropriately, for example, "AI Tools Directory".

4. **Integrate Static Files into the New Page:**
   - While editing the new page, switch to the 'Text' editor mode to edit the HTML directly.
   - Use the `<iframe>` tag to embed the main HTML file from your static files. Set the `src` attribute to the URL of the uploaded HTML file.
   - Example: `<iframe src="URL_OF_YOUR_UPLOADED_HTML_FILE" width="100%" height="600px" style="border:none;"></iframe>`

5. **Adjust Permalinks (Optional):**
   - If you want to customize the URL of your new page, you can do so by editing the permalink in the page editor.

6. **Test the Integration:**
   - Once you have added the iframe and published the page, visit the page's URL to test the integration.
   - Ensure that the "Tools" page loads correctly and that all functionalities are working as expected.

7. **Update Affiliate Links:**
   - Replace the placeholder affiliate links with your actual affiliate links.
   - Ensure that each tool's affiliate link directs to the correct affiliate program page.

## Troubleshooting

If you encounter any issues during the integration process, here are a few troubleshooting tips:

- **Page Not Displaying Correctly:** Check that the iframe's `src` attribute points to the correct URL of the uploaded HTML file.
- **Functionality Not Working:** Ensure that all JavaScript files are uploaded and referenced correctly in the HTML file.
- **Affiliate Links Not Working:** Verify that the affiliate links are correct and that they have not been altered during the upload process.

For further assistance, please reach out to your web developer or contact WordPress support.

## Conclusion

By following this guide, you should be able to successfully integrate the cloned "Tools" page into your WordPress site. Remember to test the page thoroughly and ensure that all affiliate links are functioning correctly to take full advantage of the monetization opportunities.
