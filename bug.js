```javascript
// pages/api/data.js
export default function handler(req, res) {
  // This will cause an error if the fetch fails.
  res.status(200).json(fetch('https://api.example.com/data'));
}
```