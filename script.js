 // ── Data Destinasi ──
  const destinations = {
    populer: [
      { city: 'Bali', country: 'Indonesia', tag: 'Terfavorit', price: 'Mulai Rp 700.000', image: 'assets/bali.jpg' },
      { city: 'Tokyo', country: 'Jepang', tag: 'Asia Timur', price: 'Mulai Rp 3.200.000', image: 'assets/tokyo.jpg' },
      { city: 'Labuan Bajo', country: 'Indonesia', tag: 'Alam', price: 'Mulai Rp 1.500.000', image: 'assets/bajo.jpg' },
      { city: 'Lombok', country: 'Indonesia', tag: 'Pantai', price: 'Mulai Rp 850.000', image: 'assets/lombok.jpg' },
      { city: 'Raja Ampat', country: 'Indonesia', tag: 'Diving', price: 'Mulai Rp 2.100.000', image: 'assets/raja.jpg' },
      { city: 'Seoul', country: 'Korea Selatan', tag: 'Asia Timur', price: 'Mulai Rp 2.800.000', image: 'assets/seoul.jpg' }
    ],
    domestik: [
      { city: 'Labuan Bajo', country: 'Nusa Tenggara Timur', tag: 'Alam Liar', price: 'Mulai Rp 1.500.000', image: 'assets/bajo.jpg' },
      { city: 'Raja Ampat', country: 'Papua Barat', tag: 'Surga Diving', price: 'Mulai Rp 2.100.000', image: 'assets/raja.jpg' },
      { city: 'Manado', country: 'Sulawesi Utara', tag: 'Bunaken', price: 'Mulai Rp 980.000', image: 'assets/manado.jpg' },
      { city: 'Lombok', country: 'Nusa Tenggara Barat', tag: 'Pantai & Gunung', price: 'Mulai Rp 850.000', image: 'assets/lombok.jpg' },
      { city: 'Bali', country: 'Bali', tag: 'Populer', price: 'Mulai Rp 700.000', image: 'assets/bali.jpg' },
      { city: 'Yogyakarta', country: 'Jawa Tengah', tag: 'Warisan Budaya', price: 'Mulai Rp 750.000', image: 'assets/yogyakarta.jpg' },
    ],
    internasional: [
      { city: 'Tokyo', country: 'Jepang', tag: 'Asia Timur', price: 'Mulai Rp 3.200.000', image: 'assets/tokyo.jpg' },
      { city: 'Singapore', country: 'Singapura', tag: 'Asia Tenggara', price: 'Mulai Rp 1.100.000', image: 'assets/singapura.jpg' },
      { city: 'Sydney', country: 'Australia', tag: 'Oseania', price: 'Mulai Rp 4.500.000', image: 'assets/sydney.jpg' },
      { city: 'Bangkok', country: 'Thailand', tag: 'Asia Tenggara', price: 'Mulai Rp 1.400.000', image: 'assets/bangkok.jpg' },
      { city: 'Kuala Lumpur', country: 'Malaysia', tag: 'Asia Tenggara', price: 'Mulai Rp 850.000', image: 'assets/kualalumpur.jpg' },
      { city: 'Seoul', country: 'Korea Selatan', tag: 'Asia Timur', price: 'Mulai Rp 2.800.000', image: 'assets/seoul.jpg' },
    ]
  };

  // ── Render Grid ──
  function renderGrid(category) {
    const grid = document.getElementById('destGrid');
    grid.innerHTML = '';
    destinations[category].forEach((d, i) => {
      const card = document.createElement('div');
      card.className = 'dest-card';
      card.innerHTML = `
        <div class="card-art" style="background-image: url('${d.image}');"></div>
        <div class="card-overlay"></div>
        <div class="card-body">
          <div class="card-tag">${d.tag}</div>
          <div class="card-city">${d.city}</div>
          <div class="card-country">${d.country}</div>
          <div class="card-footer">
            <div class="card-price">
              Dari<strong>${d.price}</strong>
            </div>
            <button class="btn-card" onclick="selectFlight(this, '${d.city}')">Pilih</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    grid.classList.remove('grid-entering');
    void grid.offsetWidth;
    grid.classList.add('grid-entering');
  }

  // ── Tab Filter ──
  function filterDest(btn, category) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(category);
  }

  // ── Select Flight ──
  function selectFlight(btn, city) {
    document.querySelectorAll('.btn-card').forEach(b => {
      if (b !== btn) { b.textContent = 'Pilih'; b.classList.remove('selected'); }
    });
    btn.textContent = '✓ Dipilih';
    btn.classList.add('selected');
    showNotif(`${city} — Penerbangan Dipilih!`, 'Lanjutkan ke halaman pemesanan.');
  }

  // ── Search Tab ──
  function setSearchTab(btn) {
    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  // ── Toast Notification ──
  let notifTimer;
  function showNotif(title, sub) {
    const toast = document.getElementById('notifToast');
    document.getElementById('notifTitle').textContent = title;
    document.getElementById('notifSub').textContent = sub;
    toast.classList.add('show');
    clearTimeout(notifTimer);
    notifTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // ── Mobile Nav ──
  function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('open');
  }

  // ── Countdown timer ──
  function startCountdown() {
    let h = 11, m = 59, s = 59;
    setInterval(() => {
      s--;
      if (s < 0) { s = 59; m--; }
      if (m < 0) { m = 59; h--; }
      if (h < 0) { h = 11; m = 59; s = 59; }
      document.getElementById('cHour').textContent = String(h).padStart(2,'0');
      document.getElementById('cMin').textContent = String(m).padStart(2,'0');
      document.getElementById('cSec').textContent = String(s).padStart(2,'0');
    }, 1000);
  }

  // ── Init ──
  renderGrid('populer');
  startCountdown();