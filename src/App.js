<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/intake" element={<Intake />} />
</Routes>
import React from 'react';<nav className="flex justify-between items-center py-4">
  <a href="/" className="font-bold text-lg text-indigo-900">Wellfitebooks</a>
  <a href="/intake" className="text-emerald-600 hover:underline">Start SEO Intake</a>
</nav>
