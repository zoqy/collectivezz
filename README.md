# 🌍 Collectivezz

Collectivezz is a **community platform for collectives** (formal or informal) to share events and for people to discover, RSVP, and connect around them.  

This ultra-MVP focuses only on the **essential event flow**:

- Post event (collective admins)  
- Browse events (list view, current week only)  
- Map view (events happening this week)  
- RSVP (interested / cancel)  
- Interested list (names public; emails visible only to admins)  

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Backend/DB/Auth**: [Supabase](https://supabase.com/) (Postgres, Auth, Storage, RLS)  
- **Maps**: [Mapbox](https://www.mapbox.com/) (free tier)  
- **Hosting**: [Vercel](https://vercel.com/) (Hobby tier)  

---

## 🗂️ Features

- **Collectives**: every event is owned by a collective (groups or individuals).  
- **Events**: created by collective admins, scoped by week (Mon–Sun, Asia/Jakarta).  
- **RSVP**: users can mark “interested” or “cancelled.”  
- **Interested list**:  
  - Everyone sees names.  
  - Collective admins also see attendee emails.  
- **Map view**: shows only events happening in the current week.  

---

## 📊 Data Model

- `profiles` → user profile info  
- `collectives` → groups that host events  
- `memberships` → user ↔ collective (roles: admin, member)  
- `events` → always linked to a collective  
- `rsvps` → user ↔ event (status: interested, cancelled)  

Full schema and RLS policies: **see `/docs/db-schema.md`**  


---

## 📡 API Endpoints (MVP)
- `GET /api/events` → list events (current week)
- `GET /api/events/:id` → event detail
- `POST /api/collectives/:id/events` → create event (admin only)
- `POST /api/events/:id/rsvp` → mark interest/cancel
- `GET /api/events/:id/interested` → list of interested users

More details: see `/docs/api.md`

---

## 📅 Roadmap

- [ ] **Phase 1:** Setup Supabase + Next.js + deployment  
- [ ] **Phase 2:** Event creation (admins only)  
- [ ] **Phase 3:** RSVP flow + interested list  
- [ ] **Phase 4:** Map view (this week’s events)  
- [ ] **Phase 5:** UX polish (mobile, empty states, error handling)  

Full roadmap: **see `/docs/roadmap.md`**  

---

## ✅ Success Criteria

- Admin can create events under a collective  
- Users can browse events happening **this week only**  
- Events appear on the map (week filter applied)  
- Users can RSVP and show up on the interested list  
- Interested list shows **names to everyone, emails only to admins**  

---

## 📜 License
MIT — feel free to fork and adapt.  
