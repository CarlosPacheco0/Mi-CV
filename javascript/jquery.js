function switchView(view) {
  const it = document.getElementById('cv-it');
  const ats = document.getElementById('cv-ats');
  const btnIt = document.getElementById('btn-it');
  const btnAts = document.getElementById('btn-ats');

  if(view === 'it') {
    it.classList.remove('hidden');
    ats.classList.add('hidden');
    btnIt.className = "px-8 py-3 rounded-xl font-black transition-all bg-slate-900 text-white shadow-xl";
    btnAts.className = "px-8 py-3 rounded-xl font-black transition-all bg-white text-slate-600 border-2 border-slate-200";
  } else {
    it.classList.add('hidden');
    ats.classList.remove('hidden');
    btnAts.className = "px-8 py-3 rounded-xl font-black transition-all bg-slate-900 text-white shadow-xl";
    btnIt.className = "px-8 py-3 rounded-xl font-black transition-all bg-white text-slate-600 border-2 border-slate-200";
  }
}