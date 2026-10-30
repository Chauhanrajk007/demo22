# APEX EXPRESS LOGISTICS / GLOBAL TRACKER 🚢📦🚛

A modern, high-fidelity Logistics & Express Cargo Tracking web portal styled identically to enterprise carrier portals like Blue Dart & DHL Express. Built with **Next.js 14 App Router**, **Tailwind CSS**, and **Lucide React**, fully optimized for zero-configuration deployment to **Vercel**.

---

## ⚡ Key Features

1. **Enterprise Carrier Aesthetic**:
   - Deep Enterprise Blue (`#00205B`), Vibrant Red (`#D40511`), and Vibrant Yellow (`#FFCC00`) accents.
   - Dual-stripe branding bar inspired by DHL / Blue Dart carrier design.
   - 24/7 Priority Freight Support ribbon: `1800-200-APEX`.
   - Telematics & ICEGATE status indicators with live pulse animations.

2. **Multi-Modal Waybill Search**:
   - Toggle radio modes: **Waybill / AWB No.** vs **Reference No. / Order ID**.
   - Input supporting up to 5 comma-separated waybills for multi-consignment tracking.
   - 1.5-second realistic loading state: *"Querying Global Telematics Gateway & Port Terminals..."*

3. **Pre-Programmed Synthetic Datasets**:
   - **`21092924823`**: The On-Time Fabric Delivery (UK Wool Melton Rolls to Peenya Apparel Hub Dock A) - `DELIVERED / ON SCHEDULE`
   - **`MSKU8421095`**: The Critical Delay (40ft High Cube EXIM Ocean Container with Heavy Brass Fasteners from Savannah Port to Peenya Apparel Hub Dock B) - `CRITICAL DELAY / CUSTOMS YARD HOLD`, Flashing Red Badge, and Demurrage Hazard Alert (`₹12,000/day`).
   - **Fallback (Any other ID)**: Dynamic `IN TRANSIT` parcel from Pune Hub to Whitefield Depot.

4. **TinyFish Scraper Compatibility**:
   - Status element: `<span id="shipment-status" data-testid="shipment-status">`
   - Current Location element: `<span id="current-location" data-testid="current-location">`
   - Updated ETA element: `<span id="revised-eta" data-testid="revised-eta">`
   - Milestone Timeline: `<table id="milestone-timeline" data-testid="milestone-timeline">`

---

## 🚀 Quick Start & Deployment to Vercel

### Deploy to Vercel (1-Click)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial apex logistics tracking portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com) — framework will automatically be detected as **Next.js**.
3. Click **Deploy**.

---

## 🛠 Local Development (Optional)

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.
