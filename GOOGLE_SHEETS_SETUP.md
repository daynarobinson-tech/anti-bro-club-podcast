# Google Sheets Integration Setup

Follow these steps to connect your form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Business Name`
   - D1: `What You Do`
   - E1: `Hot Take`
   - F1: `Website`
   - G1: `Podcast Experience`
   - H1: `Anything Else`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.name,
    data.businessName,
    data.whatYouDo,
    data.hotTake,
    data.website,
    data.podcastExperience,
    data.anythingElse
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the project (Ctrl+S or Cmd+S)

## Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set these options:
   - Description: "Anti Bro Club Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Authorize the script when prompted
6. **Copy the Web app URL** - it will look like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4: Add the URL to Your Site

1. Open `src/app/page.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web app URL

## Testing

1. Submit a test application through your form
2. Check your Google Sheet - a new row should appear!

## Troubleshooting

- If submissions aren't appearing, make sure the script is deployed with "Anyone" access
- Check the Apps Script execution log for errors: **View > Executions**
- The form uses `no-cors` mode, so you won't see errors in the browser console
