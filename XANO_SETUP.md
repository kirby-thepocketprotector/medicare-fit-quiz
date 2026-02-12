# Xano Integration Setup Guide

This guide explains how to set up the Xano integration to capture user age data from the Medicare quiz.

## 📋 Overview

When users submit their birth date in Q01, the app automatically syncs the following data to Xano:

- `session_id` - Unique UUID for the user session
- `birth_month` - Month of birth (e.g., "January")
- `birth_year` - Year of birth (e.g., "1959")
- `age` - Calculated age (e.g., 66)
- `age_group` - Age segment (e.g., "66-70", "64", "65")
- `timestamp` - ISO timestamp of when data was captured

## 🔧 Xano Setup Steps

### 1. Create Xano Table

Create a table in Xano to store user age data with these fields:

| Field Name   | Type      | Description                          |
|--------------|-----------|--------------------------------------|
| id           | Integer   | Auto-increment primary key          |
| session_id   | Text      | UUID session identifier             |
| birth_month  | Text      | Birth month name                    |
| birth_year   | Text      | Birth year                          |
| age          | Integer   | Calculated age                      |
| age_group    | Text      | Age segment                         |
| timestamp    | DateTime  | When data was captured              |

**Recommended Table Name:** `user_age_data`

### 2. Create Xano API Endpoint

1. Create a new API endpoint in Xano
2. Method: **POST**
3. Path: `/user_age` (or any path you prefer)
4. Add an "Add Record" function to insert the incoming data

**Sample Xano Function Stack:**
```
1. Add Record to "user_age_data"
   - session_id: {{ $body.session_id }}
   - birth_month: {{ $body.birth_month }}
   - birth_year: {{ $body.birth_year }}
   - age: {{ $body.age }}
   - age_group: {{ $body.age_group }}
   - timestamp: {{ $body.timestamp }}

2. Response
   - Return the created record
```

### 3. Get Your Xano API URL

After creating the endpoint, Xano will provide you with a URL like:

```
https://your-workspace-id.xano.io/api:your-api-key/user_age
```

### 4. Configure Environment Variables

Update your `.env` file with the Xano endpoint URL:

```env
NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT="https://your-workspace-id.xano.io/api:your-api-key/user_age"
```

**⚠️ Important:**
- Use `NEXT_PUBLIC_` prefix so it's accessible in the browser
- Replace the placeholder URL with your actual Xano endpoint
- Restart your dev server after changing `.env` file

## 🧪 Testing the Integration

### 1. Check Environment Variable

In your browser console:
```javascript
console.log(process.env.NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT)
```

If it shows `undefined`, restart your dev server.

### 2. Test the Flow

1. Open the quiz: http://localhost:3001/ntm-quiz-2026-v1/q01
2. Select a birth month and year
3. Click "Continue"
4. Open browser DevTools → Network tab
5. Look for a POST request to your Xano endpoint
6. Verify the payload contains all required fields

### 3. Check Xano Dashboard

Go to your Xano dashboard and check if the record was created in your `user_age_data` table.

## 📊 Expected API Payload

Here's what gets sent to Xano:

```json
{
  "session_id": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
  "birth_month": "June",
  "birth_year": "1959",
  "age": 66,
  "age_group": "66-70",
  "timestamp": "2026-02-12T10:30:00.000Z"
}
```

## 🔍 Age Group Segmentation

The `age_group` field segments users into these categories:

| Age Range | Age Group Value |
|-----------|----------------|
| < 60      | `under_60`     |
| 60-63     | `60-63`        |
| 64        | `64`           |
| 65        | `65`           |
| 66-70     | `66-70`        |
| > 70      | `over_70`      |

This makes it easy to filter for users aged 64-65 in Xano queries.

## 📈 Analyzing the Data in Xano

### Count Users by Age Group
```sql
SELECT age_group, COUNT(*) as count
FROM user_age_data
GROUP BY age_group
ORDER BY count DESC
```

### Get Average Age
```sql
SELECT AVG(age) as average_age
FROM user_age_data
```

### Count 64-65 Year Olds
```sql
SELECT COUNT(*) as count_64_65
FROM user_age_data
WHERE age IN (64, 65)
```

## 🚨 Troubleshooting

### "Xano endpoint not configured" Warning

**Problem:** You see this warning in the browser console.

**Solution:** Make sure your `.env` file has the correct variable and restart the dev server:
```bash
# Kill the dev server (Ctrl+C)
npm run dev
```

### Network Request Fails

**Problem:** POST request to Xano fails with 404 or 401.

**Possible Causes:**
1. Incorrect endpoint URL in `.env`
2. Xano API is not published/enabled
3. CORS not configured in Xano (add your domain to allowed origins)

**Solution:** Verify the endpoint URL in Xano dashboard and ensure the API is published.

### Data Not Appearing in Xano

**Problem:** Request succeeds but no data in Xano table.

**Possible Causes:**
1. Field mapping is incorrect in Xano function
2. Table fields don't match the payload structure

**Solution:** Check Xano function logs to see what data was received.

## 🔐 Security Notes

- The integration uses POST requests with JSON body
- No authentication is required by default (add Xano auth if needed)
- Session IDs are anonymous UUIDs (no PII)
- All data transmission happens over HTTPS

## 📝 Optional: Quiz Results Endpoint

A second endpoint is available for syncing complete quiz results (all answers). To enable:

1. Create another Xano table/endpoint for complete quiz data
2. Add the endpoint URL to `.env`:
```env
NEXT_PUBLIC_XANO_QUIZ_RESULTS_ENDPOINT="https://your-workspace.xano.io/api:xxx/quiz_results"
```

3. Use `syncQuizResultsToXano()` function from `/src/utils/xano.ts`

## 💡 Need Help?

If you encounter issues:
1. Check browser console for error messages
2. Check Network tab for failed requests
3. Check Xano function logs for debugging info
4. Verify all environment variables are set correctly

---

**Integration Created:** 2026-02-12
**File Location:** `/src/utils/xano.ts`
**Called From:** `/src/utils/analytics.ts` → `trackUserAge()`

