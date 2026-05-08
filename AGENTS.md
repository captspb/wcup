# World Cup Encyclopedia Website

## Project Overview

A static website introducing the FIFA World Cup, built with pure HTML/CSS and featuring multi-language support. The site complies with Google AdSense policies and includes a complete privacy policy page.

## Tech Stack

- **Frontend**: Pure HTML5 + CSS3
- **No External Dependencies**: CDN-free static pages
- **Fonts**: System font stack (no external font loading)
- **Images**: CSS-generated icons and gradient backgrounds
- **Multi-language**: JavaScript-based internationalization (i18n)

## File Structure

```
/workspace/projects/
├── index.html           # Main page - World Cup Encyclopedia
├── privacy.html         # Privacy Policy page
├── styles/
│   └── main.css         # Stylesheet with RTL support
├── js/
│   ├── i18n.js          # Multi-language system (7 languages)
│   └── teams-analysis.js # 2026 World Cup team analysis
├── .coze                # Project configuration
└── .gitignore
```

## Multi-Language Support

### Supported Languages (7 Languages)

1. **English (en)** - Default language
2. **中文 (zh)** - Simplified Chinese
3. **日本語 (ja)** - Japanese
4. **한국어 (ko)** - Korean
5. **Español (es)** - Spanish
6. **Français (fr)** - French
7. **العربية (ar)** - Arabic (with RTL support)

### How It Works

- Language preference is saved to `localStorage`
- Language switcher button appears in bottom-right corner
- Click to open dropdown and select language
- Arabic automatically switches to RTL (right-to-left) layout
- Font optimization for each language family

### Usage

Users can switch languages anytime via the globe icon button at the bottom-right of the page. The selection persists across page reloads.

## Page Content

### Main Page (index.html)

- **2026 World Cup Team Analysis**: Comprehensive analysis of all qualified teams with ratings and predictions
- **Hero Banner**: World Cup theme and statistics
- **World Cup History**: Origin & development, global impact
- **Champions Throughout History**: 1930-2022 championship list
- **Famous Stadiums**: Lusail, Maracanã, Wembley, etc.
- **Legendary Records**: Goals, appearances, youngest scorer, etc.
- **About Us**: Website introduction and contact info

## 2026 World Cup Team Analysis

### Features

- **32 Teams Coverage**: Complete analysis of all qualified teams
- **Multi-dimensional Ratings**:
  - Overall (综合评分)
  - Squad (阵容实力)
  - Tactics (战术水平)
  - Experience (大赛经验)
  - Coaching (教练能力)
- **Prediction Categories**:
  - Champion Contender (夺冠热门)
  - Dark Horse (黑马)
  - Upset Potential (爆冷潜力)
  - Group Stage Exit (小组赛出局)
- **Filtering & Sorting**:
  - Sort by any rating dimension
  - Filter by region (Europe, South America, Asia, Africa, North America, Oceania)
- **Detailed Analysis**:
  - Key players list
  - Strengths and weaknesses
  - Team analysis summary
- **Multi-language Support**: Available in all 7 languages

### Privacy Policy Page (privacy.html)

- Information collection & use
- Cookies & tracking technologies
- Google AdSense & advertising
- Third-party links
- Children's privacy
- Data security
- Contact us

## Google AdSense Compliance

1. ✅ **Substantial Content**: 7 content sections, 400+ lines of HTML
2. ✅ **Clear Navigation**: Fixed navbar, anchor links, breadcrumbs
3. ✅ **Privacy Policy Link**: All pages link to `/privacy.html`
4. ✅ **Cookie Disclosure**: Detailed cookie usage in privacy policy
5. ✅ **Google AdSense Disclosure**: Clear statement about AdSense usage
6. ✅ **Opt-out Mechanism**: Link to opt out of personalized ads
7. ✅ **Contact Information**: Email contact provided
8. ✅ **HTTPS**: Deployed in HTTPS environment

### Ad Placements

6 ad container placeholders are reserved throughout the page (with comments for easy AdSense code insertion).

**Setup Instructions**:
1. Register a Google AdSense account
2. Get your `publisher ID` (ca-pub-XXXXXXXX)
3. Create ad units and get `ad slot IDs`
4. Replace placeholder comments with actual AdSense code

## Performance Optimization

- Pure CSS animations, no JavaScript dependencies
- System font stack, no font loading delays
- CSS variables for theme consistency
- Responsive design, mobile-friendly
- RTL support for Arabic content

## Testing Commands

```bash
# Check server status
curl -I -s --max-time 3 http://localhost:5000

# Check page content
curl -s http://localhost:5000 | grep -E 'Privacy Policy|FIFA World Cup'

# Check privacy policy page
curl -s http://localhost:5000/privacy.html | grep -E 'Cookies|Children|Contact'

# Check multi-language support
curl -s http://localhost:5000/js/i18n.js | grep -o "en:" | wc -l
```

## Deployment

Website is deployed on port 5000, served by a static file server.
