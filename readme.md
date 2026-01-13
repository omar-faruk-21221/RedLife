# RedLife

## Short project description

RedLife is a community-driven blood donation platform that connects verified donors, receivers, and volunteers to make emergency blood needs faster, safer, and more transparent. [page:1]  
Users can browse donors, manage donor profiles, and get essential contact and support information through a clean web interface. [page:1]

## Setup & installation instructions

> Adjust tech stack details if different in your project.

1. Clone the repository
   - `git https://github.com/omarfaruk21221/RedLife`
   - `cd redlife`
2. Install dependencies
   - `npm install` or `yarn`
3. Configure environment variables
   - Create `.env.local` and add API URLs, database URI, auth keys, etc.
4. Run the development server
   - `npm run dev` or `yarn dev`
   - Open `http://localhost:3000` in your browser. [page:1]
5. Build & production
   - `npm run build`
   - `npm start` on your server or deploy to platforms like Vercel/Netlify.

## Route summary

- `/` – Home page with hero, top donors, statistics, FAQ, and contact section. [page:1]
- `/all-donars` – List of all donors with blood group, age, availability, area, and last donation date. [page:1]
- `/all-donars/[id]` – Donor details page linked from each donor card. [page:1]
- `/add-donar` – Form page to add a new donor profile. [page:1]
- `/manage-donar` – Interface to manage existing donor records (update/delete). [page:1]
- `/about` – About RedLife and platform mission. [page:1]
- `/contact` – Contact form and contact information. [page:1]
- `/login` – Login page for authenticated actions like adding or managing donors. [page:1]

## List of implemented features

- Responsive landing page with hero section and CTA to view all donors. [page:1]
- Top donors section showing highlighted donor cards with key info. [page:1]
- Full donor listing with navigation to individual donor details. [page:1]
- Basic statistics for total donors, receivers, and volunteers. [page:1]
- FAQ section answering common user questions. [page:1]
- Contact form with name, email, and message fields plus contact info. [page:1]
- Navigation bar and footer with quick links and social media placeholders. [page:1]
- Authentication entry point via login route (UI link present). [page:1]

## Brief explanation of features

- **Landing page & hero**: Welcomes users with the slogan “Donate Blood, Save Lives” and a primary call-to-action button to browse all donors, helping users quickly start searching. [page:1]
- **Top donors**: Displays a curated grid of donor cards showing name, blood group, age, availability, area, last donation date, and a details button for more information. [page:1]
- **All donors & details**: The donors list page centralizes all donor profiles, and each profile links to a detailed route for deeper information and potential contact workflows. [page:1]
- **Statistics**: Shows simple counters for total donors, receivers, and volunteers to communicate platform scale and impact at a glance. [page:1]
- **FAQ**: Provides quick answers about booking services, coverage areas, customization, pricing, and logistics so users can resolve common questions without support. [page:1]
- **Contact section**: Includes a message form and direct contact info (address and social links) so users can reach the team for support, feedback, or collaboration. [page:1]
- **Navigation & footer**: Global navigation and footer give consistent access to main routes and brand message “Donate blood, share life,” reinforcing the platform’s mission. [page:1]

## Links

- **gitHub Repository:** https://github.com/omarfaruk21221/RedLife
- **Live Site (Vercel):**
  https://redlife-frontend.vercel.app/
- **Login Credential**
  -- Email: user@example.com
  -- Password: Aa1234
