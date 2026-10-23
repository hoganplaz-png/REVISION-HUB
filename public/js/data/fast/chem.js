/* ⏱ 10-minute fast notes · Chemistry SL, 2025 guide (format: see js/fastnotes.js). */
IB.addFast({
  "chem-1": {
    title: "States of matter · Nuclear atom · Isotopes & Ar",
    parts: [
      {
        h: "Matter & kinetic theory 物質同粒子",
        min: 2.5,
        blocks: [
          ["key", "<b>Element</b> 一種原子｜<b>Compound</b> 化學結合、固定比例｜<b>Mixture</b> 物理混合、比例可變（homogeneous 均勻 e.g. solution, alloy；heterogeneous 唔均勻）<br><b>Temperature (K) ∝ average kinetic energy</b>　T(K) = T(°C) + 273"],
          ["rhyme", "口訣 1", "變態唔升溫，能量拆 IMF", "Change of state 期間溫度唔變：能量用嚟 overcome intermolecular forces，唔係加 KE。"],
          ["table", ["Separation 方法", "靠咩分", "例子"], [
            ["Filtration", "solubility（固體唔溶）", "sand + water"],
            ["Crystallisation / evaporation", "solute 留低", "salt from brine"],
            ["(Fractional) distillation", "boiling point", "ethanol + water"],
            ["Paper chromatography", "對 mobile / stationary phase 嘅吸引", "ink dyes"],
          ]],
          ["trap", [
            "Melting / boiling 期間寫「temperature increases」→ 0 分。",
            "Endothermic：melting, vaporisation, sublimation；exothermic：freezing, condensation, deposition。",
          ]],
        ],
      },
      {
        h: "Nuclear atom 原子結構",
        min: 2.5,
        blocks: [
          ["table", ["Particle", "Relative mass", "Charge", "位置"], [
            ["proton", "1", "+1", "nucleus"],
            ["neutron", "1", "0", "nucleus"],
            ["electron", "5 × 10⁻⁴（≈ 1/1840）", "−1", "energy levels"],
          ]],
          ["key", "\\(^{A}_{Z}X\\)：A = protons + neutrons，Z = protons<br>neutrons = A − Z　　electrons in ion = Z − charge（S²⁻：16 − (−2) = 18）"],
          ["rhyme", "口訣 2", "質子定身份，中子定重量", "Isotopes：same Z, different neutrons → <b>same chemical properties</b>（same electron configuration）、<b>different physical properties</b>（mass, density, diffusion rate）。"],
          ["trap", ["Isotope 化學性質唔同 ✗ —— 電子排列一樣，所以 chemical properties 一樣。", "負離子係加電子：Cl⁻ 有 18 個電子，唔係 16。"]],
        ],
      },
      {
        h: "Relative atomic mass & mass spectra",
        min: 3,
        blocks: [
          ["key", "\\(A_r = \\dfrac{\\sum(\\text{isotope mass} \\times \\%\\text{ abundance})}{100}\\)　——weighted mean, relative to 1/12 of a ¹²C atom"],
          ["eg", "Mass spectrum of Cl：m/z 35 (75.8%)、m/z 37 (24.2%)。求 Ar。", [
            "(35 × 75.8 + 37 × 24.2) ÷ 100 = (2653 + 895.4) ÷ 100",
            "= 35.484 → <b>35.5</b>（Ar 冇單位）✅",
          ]],
          ["eg", "Ga 有 ⁶⁹Ga 同 ⁷¹Ga，Ar = 69.72。求 ⁶⁹Ga 嘅 % abundance。", [
            "設 ⁶⁹Ga = x%，⁷¹Ga = (100 − x)%",
            "69x + 71(100 − x) = 6972 → 7100 − 2x = 6972 → x = <b>64%</b>（⁷¹Ga 36%）",
          ]],
          ["rhyme", "口訣 3", "未知設 x，其餘 100 減", "Peak 高度 ∝ abundance；如果畀 ratio（3 : 1）就除總數 4 唔係 100。"],
          ["trap", ["Ar 寫單位 g mol⁻¹ ✗（Ar 係 relative，冇單位；molar mass 先有 g mol⁻¹）。", "畀咗 ratio 但照除 100。"]],
        ],
      },
    ],
    summary: [
      "Change of state 溫度唔變：能量去 overcome IMF",
      "T(K) ∝ average KE；K = °C + 273",
      "neutrons = A − Z；ion 電子 = Z − charge",
      "Isotopes：化學一樣，物理唔同",
      "Ar = Σ(mass × %)/100；ratio 就除總和",
      "未知 abundance：x 同 100 − x",
    ],
    practice: [
      { q: "State the number of protons, neutrons and electrons in \\(^{34}_{16}\\mathrm{S^{2-}}\\).", m: 2, a: "16 protons, 18 neutrons [1]; 18 electrons [1]." },
      { q: "Explain why the temperature of a pure solid stays constant while it melts.", m: 2, a: "Energy absorbed is used to overcome intermolecular forces / attractions between particles [1]; not to increase average kinetic energy, so temperature is constant [1]." },
      { q: "Magnesium has isotopes ²⁴Mg (79.0%), ²⁵Mg (10.0%) and ²⁶Mg (11.0%). Calculate Ar(Mg) to two decimal places.", m: 2, a: "(24 × 79.0 + 25 × 10.0 + 26 × 11.0)/100 [1] = (1896 + 250 + 286)/100 = 24.32 [1]." },
      { q: "Outline why ³⁵Cl and ³⁷Cl have the same chemical properties but different densities.", m: 2, a: "Same number of electrons / same electron configuration, so same chemical properties [1]; different number of neutrons so different mass, hence different density [1]." },
    ],
  },

  "chem-2": {
    title: "Emission spectra · Sublevels & orbitals · Configurations",
    parts: [
      {
        h: "Emission spectra 發射光譜",
        min: 3,
        blocks: [
          ["key", "Electron 由 <b>higher → lower</b> energy level 跌落嚟 → emit photon，\\(E = h\\nu\\)。Energy levels 係 discrete（quantised）→ <b>line spectrum</b>，唔係 continuous。"],
          ["table", ["跌落去", "Region", "記法"], [
            ["n = 1", "UV（能量最大）", "跌到地下 → 最大力"],
            ["n = 2", "visible", "跌到 2 樓 → 睇得到"],
            ["n = 3", "IR", "跌到 3 樓 → 最細力"],
          ]],
          ["rhyme", "口訣 1", "越高層越逼，線越高頻越密", "<b>Convergence</b>：higher energy 嗰邊線越嚟越近，因為 energy levels 越上越近。"],
          ["trap", ["Emission = 跌落嚟（放光）；absorption = 升上去。方向寫錯即失分。", "Continuous spectrum（白光）vs line spectrum 要識講分別。"]],
        ],
      },
      {
        h: "Sublevels, orbitals & Aufbau",
        min: 3.5,
        blocks: [
          ["table", ["Sublevel", "Orbitals", "Max e⁻", "形狀"], [
            ["s", "1", "2", "spherical"],
            ["p", "3", "6", "dumbbell (px, py, pz)"],
            ["d", "5", "10", "—"],
            ["f", "7", "14", "—"],
          ]],
          ["key", "Level n 最多 <b>2n²</b> 個電子。填法：1s 2s 2p 3s 3p <b>4s 3d</b> 4p<br><b>Aufbau</b> 由低填起｜<b>Pauli</b> 每 orbital 最多 2 個、spin 相反｜<b>Hund</b> 先逐個坐、同 spin，再 pair"],
          ["rhyme", "口訣 2", "4s 先入後出，鉻銅半滿全滿", "Cr = [Ar]3d⁵4s¹，Cu = [Ar]3d¹⁰4s¹；transition metal 變 ion 時 <b>先甩 4s</b>。"],
          ["eg", "寫 Fe 同 Fe³⁺ 嘅 configuration。", [
            "Fe (26)：1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ = [Ar]3d⁶4s²",
            "Fe³⁺：先甩 4s² 再甩一粒 3d → <b>[Ar]3d⁵</b> ✅",
          ]],
          ["trap", ["Fe²⁺ 寫 [Ar]3d⁴4s² ✗ → 正確 [Ar]3d⁶。", "Orbital diagram：p 同 d 先單獨填（Hund），箭頭方向要一致先 pair。"]],
        ],
      },
      {
        h: "First IE 連結（S3.1 常考）",
        min: 2,
        blocks: [
          ["key", "First IE：X(g) → X⁺(g) + e⁻（一定要 gaseous！）"],
          ["table", ["點解 dip?", "原因"], [
            ["Mg → Al 跌", "Al 嘅電子喺 3p，energy 高過 3s、離核遠少少"],
            ["P → S 跌", "S 嘅 3p 有一對 paired electrons → repulsion，易拎走"],
          ]],
          ["trap", ["寫 IE equation 漏 (g) state symbol。", "解釋 dip 唔講 sublevel（3p vs 3s）或 spin-pair repulsion。"]],
        ],
      },
    ],
    summary: [
      "跌落嚟放光；跌去 n=1 UV、n=2 visible",
      "線越高頻越密 = convergence",
      "s2 p6 d10 f14；level 2n²",
      "Aufbau、Pauli、Hund：由低填，相反 spin，先坐後 pair",
      "4s 先入後出；Cr、Cu 例外",
      "IE dip：Al 入 3p、S pair 相斥",
    ],
    practice: [
      { q: "State the full electron configuration of Cu and of Cu²⁺.", m: 2, a: "Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ [1]; Cu²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ [1]." },
      { q: "Explain why the emission spectrum of hydrogen consists of lines that converge at higher frequency.", m: 3, a: "Electrons fall from higher to lower (discrete) energy levels [1]; emitting photons of specific energy/frequency, giving lines [1]; energy levels get closer together at higher energy so lines converge [1]." },
      { q: "Deduce the number of unpaired electrons in a nitrogen atom, referring to Hund's rule.", m: 2, a: "3 unpaired electrons [1]; 2p electrons occupy separate p orbitals singly with parallel spins before pairing [1]." },
      { q: "Which transition in a hydrogen atom emits a photon of the highest energy? A. n=2→n=1 B. n=3→n=2 C. n=4→n=3 D. n=1→n=2", m: 1, a: "A (largest energy gap, ending at n = 1; D is absorption)." },
    ],
  },

  "chem-3": {
    title: "The mole · Formulae · Solutions · Ideal gases",
    intro: "Mole 一條橋過晒所有計算題：每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Mole bridge 摩爾橋",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "見數先轉 mol，mol 係唯一嘅橋", "Whatever the question gives you (grams, gas volume, concentration, number of particles), turn it into moles (n) first. Moles are the only way to cross from one substance to another."],
          ["html", "<div class=\"fn-hub\"><div class=\"hub-box hub-t\" style=\"--hc:#15803D\"><b>Gas volume V (dm³)</b>氣體：STP 用 22.7；其他用 pV = nRT</div><div class=\"hub-n\">n<small>mol</small></div><div class=\"hub-box hub-l\" style=\"--hc:#1D4ED8\"><b>Mass m (g)</b>質量　n = m ÷ M</div><div class=\"hub-box hub-r\" style=\"--hc:#BE123C\"><b>Particles N</b>粒子數目　n = N ÷ N<sub>A</sub></div><div class=\"hub-box hub-b\" style=\"--hc:#C2410C\"><b>Solution c, V (dm³)</b>溶液　n = c × V</div><div class=\"hub-op\">V = n × 22.7 ・ m = n × M ・ N = n × N<sub>A</sub> ・ c = n ÷ V</div></div>"],
          ["flow", [["① 轉 mol", "What you KNOW: m / V / c,V / N → n(A)"], ["② 比例", "n(B) = n(A) × coef(B) ÷ coef(A)，用 balanced equation"], ["③ 轉返", "n(B) → m / V / c / N (what you WANT)"]]],
          ["rhyme", "三步法", "一轉 mol、二比例、三轉返", "要嘅係數放上面，知嘅係數放下面。e.g. 2H₂ + O₂ → 2H₂O：0.40 mol H₂ 需要 n(O₂) = 0.40 × 1/2 = 0.20 mol。"],
        ],
      },
      {
        h: "口訣 + data booklet 數據",
        min: 1.5,
        blocks: [
          ["grid", [
            ["S1.4", "m 在頂，n 同 M 喺下面", "n = m ÷ M (cover the one you want)"],
            ["S1.4", "問原子，記得乘原子數", "molecules × atoms per formula = atoms"],
            ["S1.4", "百變克、除原子量、除最細、湊整數", "Empirical formula: % → g → ÷Ar → ÷smallest → × to whole"],
            ["S1.4", "1.5 乘 2，1.33 乘 3，1.25 乘 4", "Never round 1.33 down to 1!"],
            ["S1.4", "碳睇 CO₂、氫睇水、氧靠減", "Combustion: C from CO₂, H from H₂O, O = total − C − H"],
            ["S1.4", "鹽一個 mol、水一個 mol，水除鹽 = x", "Water of crystallisation"],
            ["S1.4", "c = n ÷ V，cm³ 除千", "V must be in dm³"],
            ["S1.4", "加水唔加 mol", "Dilution: c₁V₁ = c₂V₂"],
            ["S1.4", "氣對氣，體積比 = mol 比", "Avogadro: same T & P → use volumes directly"],
            ["S1.5", "細、冇、彈、亂、溫", "5 ideal-gas assumptions"],
            ["S1.5", "高溫低壓最理想；低溫高壓唔理想", "When real gases deviate"],
            ["S1.5", "零度一百 kPa，22.7 記實佢", "STP: 273 K, 100 kPa → 22.7 dm³ mol⁻¹"],
            ["S1.5", "kPa 夾 dm³，Pa 夾 m³，溫度永遠 K", "pV = nRT unit pairing"],
            ["S1.5", "前後一樣 pV/T", "p₁V₁/T₁ = p₂V₂/T₂ (°C + 273)"],
          ]],
          ["rhyme", "解難口訣", "圈數、寫式、過橋、查單位", "Circle data & convert units → write balanced equation → cross the mole bridge → check units & sig figs."],
          ["table", ["Constant / rule", "Value", "Use it when…"], [
            ["Avogadro constant N<sub>A</sub>", "6.02 × 10²³ mol⁻¹", "particles ↔ moles"],
            ["Molar volume at STP", "22.7 dm³ mol⁻¹ (273 K, 100 kPa)", "gas at STP only"],
            ["Gas constant R", "8.31 J K⁻¹ mol⁻¹", "gas NOT at STP → pV = nRT"],
            ["Kelvin", "T(K) = T(°C) + 273", "every gas law"],
            ["cm³ → dm³ / dm³ → m³", "÷ 1000 / ÷ 1000 (1 dm³ = 1 L = 10⁻³ m³)", "every volume"],
            ["kPa → Pa", "× 1000", "pV = nRT in SI"],
            ["g dm⁻³ ↔ mol dm⁻³", "c × M = g dm⁻³", "concentration"],
          ]],
          ["note", "<b>Speed tip</b>：memorise these M values (use data-booklet A<sub>r</sub> in real answers): H₂O 18.02 · CO₂ 44.01 · O₂ 32.00 · N₂ 28.02 · CH₄ 16.05 · NH₃ 17.04 · HCl 36.46 · NaOH 40.00 · NaCl 58.44 · H₂SO₄ 98.09 · CaCO₃ 100.09 · C₆H₁₂O₆ 180.18 · Cl₂ 70.90"],
        ],
      },
      {
        h: "Mole, M, N 同 definitions",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word — easy marks)</b><br><b>Mole:</b> the amount of substance that contains 6.02 × 10²³ elementary entities (atoms, molecules, ions…).<br><b>Relative atomic mass A<sub>r</sub>:</b> weighted average mass of an atom of an element relative to 1/12 of the mass of an atom of carbon-12. No units.<br><b>Relative formula mass M<sub>r</sub>:</b> sum of the A<sub>r</sub> values in the formula. No units.<br><b>Molar mass M:</b> mass of one mole of a substance. Unit g mol⁻¹. Same number as M<sub>r</sub>.<br><b>Empirical formula:</b> simplest whole-number ratio of atoms of each element in a compound.<br><b>Molecular formula:</b> actual number of atoms of each element in one molecule."],
          ["key", "<b>n = m ÷ M</b>　(m = n × M · M = m ÷ n)　　<b>n = N ÷ N<sub>A</sub></b>　(N = number of particles; molecules → atoms: × atoms in formula)"],
          ["eg", "How many atoms are in 9.00 g of water?", [
            "① mol：n(H₂O) = 9.00 ÷ 18.02 = 0.4994 mol",
            "② molecules：0.4994 × 6.02 × 10²³ = 3.01 × 10²³ molecules",
            "③ atoms：each H₂O has 3 atoms → 3.01 × 10²³ × 3 = <b>9.02 × 10²³ atoms</b> ✅",
          ]],
          ["note", "<b>Fast MCQ trick — “Which has the most atoms / molecules?”</b> Same mass → smaller M = more moles. Then multiply by atoms per formula. e.g. 1 g H₂ (0.5 mol × 2 = 1 mol atoms) beats 1 g He (0.25 mol atoms)."],
          ["trap", ["Molecules vs atoms：記得 × atoms per formula。", "Cl₂、O₂、H₂、N₂ 係 diatomic：用 70.90 / 32.00，唔係單原子質量。"]],
        ],
      },
      {
        h: "Empirical formula · combustion · hydrates",
        min: 4,
        blocks: [
          ["eg", "A compound is 40.0% C, 6.7% H, 53.3% O. M<sub>r</sub> = 180. Find both formulas.", [
            "① % → g（assume 100 g）：C 40.0 · H 6.7 · O 53.3",
            "② ÷ A<sub>r</sub>：40.0/12.01 = 3.33 · 6.7/1.01 = 6.63 · 53.3/16.00 = 3.33",
            "③ ÷ smallest (3.33)：1.00 : 1.99 : 1.00 → ④ whole numbers 1 : 2 : 1",
            "Empirical formula = <b>CH₂O</b>（mass 30.03）。Multiplier = 180 ÷ 30.03 = 6 → <b>C₆H₁₂O₆</b> ✅",
          ]],
          ["table", ["After ÷ smallest, if you get…", "Multiply by"], [
            ["x.5", "× 2"], ["x.33 or x.67", "× 3"], ["x.25 or x.75", "× 4"], ["x.2", "× 5"],
          ]],
          ["rhyme", "Molecular formula", "Mr 除 EF，得倍數", "n = M<sub>r</sub> ÷ (empirical formula mass)，then multiply EVERY subscript by n。"],
          ["eg", "Combustion：0.230 g of a compound containing C, H and O burns completely to give 0.440 g CO₂ and 0.270 g H₂O. Find the empirical formula.　「碳睇 CO₂、氫睇水、氧靠減」", [
            "C：all C ends up in CO₂ → n(C) = 0.440 ÷ 44.01 = 0.0100 mol → mass C = 0.120 g",
            "H：each H₂O has 2 H → n(H) = 2 × (0.270 ÷ 18.02) = 0.0300 mol → mass H = 0.0303 g",
            "O by subtraction（O₂ from air also went into products!）：0.230 − 0.120 − 0.0303 = 0.0797 g → ÷ 16.00 = 0.00498 mol",
            "Ratio ÷ 0.00498 → C 2.01 : H 6.02 : O 1 → <b>C₂H₆O</b> ✅",
          ]],
          ["trap", ["H in water：moles × 2。", "Never find O from the CO₂/H₂O (some came from the air)；always subtract。"]],
          ["eg", "Water of crystallisation：2.50 g of CuSO₄·xH₂O is heated to constant mass. 1.60 g of anhydrous CuSO₄ remains. Find x.　「鹽一個 mol、水一個 mol，水除鹽 = x」", [
            "Water lost = 2.50 − 1.60 = 0.90 g",
            "n(CuSO₄) = 1.60 ÷ 159.62 = 0.01002；n(H₂O) = 0.90 ÷ 18.02 = 0.0499",
            "x = 0.0499 ÷ 0.01002 = 4.98 ≈ <b>5</b> (CuSO₄·5H₂O) ✅",
          ]],
          ["note", "“Heated to constant mass” = all water removed (evaluation point: if not heated to constant mass, x comes out too small)."],
        ],
      },
      {
        h: "Solutions 溶液 · dilution · Avogadro",
        min: 3,
        blocks: [
          ["key", "<b>c = n ÷ V</b>（c in mol dm⁻³，V in dm³）　Mass concentration (g dm⁻³) = c × M<br>ppm = (mass solute ÷ mass solution) × 10⁶　For dilute water solutions: 1 ppm ≈ 1 mg dm⁻³"],
          ["eg", "(1) 2.00 g NaOH dissolved to make 250 cm³. (2) 0.0035 g of lead in 500 g of water — ppm?", [
            "(1) n = 2.00 ÷ 40.00 = 0.0500 mol；c = 0.0500 ÷ 0.250 = <b>0.200 mol dm⁻³</b>",
            "(2) (0.0035 ÷ 500) × 10⁶ = <b>7.0 ppm</b>",
          ]],
          ["rhyme", "Dilution", "加水唔加 mol", "c₁V₁ = c₂V₂。V₂ 係最後總體積，唔係加咗幾多水。同一個 unit 兩邊可以直接約晒（cm³ 都得）。"],
          ["eg", "25.0 cm³ of 2.00 mol dm⁻³ HCl is made up to 500 cm³.", ["c₂ = 2.00 × 25.0 ÷ 500 = <b>0.100 mol dm⁻³</b> ✅"]],
          ["note", "<b>Standard solution</b>（describe-type question）：accurately known concentration. Weigh solid accurately (by difference) → dissolve in a little distilled water in a beaker → transfer to a volumetric flask with all washings → add water until the bottom of the meniscus is on the mark → stopper and invert to mix。"],
          ["rhyme", "Avogadro's law", "氣對氣，體積比 = mol 比", "Equal volumes of all gases at the same T and P contain equal numbers of molecules → volume ratio = mole ratio = coefficient ratio. No need to convert to moles!"],
        ],
      },
      {
        h: "Ideal gases 理想氣體",
        min: 5,
        blocks: [
          ["table", ["口訣", "Ideal-gas assumption (write this in the exam)"], [
            ["<b>細</b>", "Gas particles have negligible volume compared with the container (point masses)."],
            ["<b>冇</b>", "No intermolecular forces between particles (no attraction or repulsion)."],
            ["<b>彈</b>", "Collisions between particles and with the walls are perfectly elastic (no kinetic energy lost)."],
            ["<b>亂</b>", "Particles are in constant, random, straight-line motion."],
            ["<b>溫</b>", "Average kinetic energy is proportional to the absolute temperature (K)."],
          ]],
          ["table", ["Condition", "Why real gases deviate"], [
            ["High pressure", "Particles are close together → their own volume is no longer negligible."],
            ["Low temperature", "Particles move slowly → intermolecular attractions become significant (gas may condense)."],
            ["Strong IMFs (NH₃, H₂O)", "Polar / H-bonding gases deviate more. Small non-polar gases (He, H₂) are closest to ideal."],
          ]],
          ["rhyme", "Real gases", "高溫低壓最理想；低溫高壓唔理想", "Graph question：compression factor Z = pV ÷ nRT。Ideal gas → Z = 1 (flat line) at all pressures；a real gas curve moves away from 1 at high pressure。"],
          ["table", ["Law", "Constant", "Relationship", "Particle explanation"], [
            ["Boyle", "T", "p ∝ 1/V", "Smaller volume → more frequent collisions with walls → higher p"],
            ["Charles", "p", "V ∝ T (K)", "Hotter → faster particles → gas expands to keep p constant"],
            ["Gay-Lussac", "V", "p ∝ T (K)", "Hotter → faster, more frequent and harder collisions → higher p"],
          ]],
          ["note", "Graphs：p vs V curve · p vs 1/V straight line through origin · V vs T(K) through origin · V vs T(°C) hits −273 °C。"],
          ["rhyme", "Combined gas law", "前後一樣 pV/T", "p₁V₁ ÷ T₁ = p₂V₂ ÷ T₂（T in K!）"],
          ["eg", "200 cm³ of gas at 25 °C and 100 kPa is heated to 100 °C and compressed to 150 kPa. New volume?", [
            "V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 200 × (100/150) × (373/298) = <b>167 cm³</b> ✅",
            "Speed check：pressure up → V down；temperature up → V up。Put each ratio so it moves V the right way。",
          ]],
          ["trap", ["100 °C → 200 °C does NOT double the volume (373 K → 473 K)。Only doubling the Kelvin temperature doubles V。"]],
          ["rhyme", "Molar volume", "零度一百 kPa，22.7 記實佢", "n = V ÷ 22.7（V in dm³，only at STP = 273 K, 100 kPa）。0.250 mol of any ideal gas at STP = 0.250 × 22.7 = 5.68 dm³。22.4 is the OLD value (101.3 kPa)。"],
          ["rhyme", "pV = nRT", "kPa 夾 dm³，Pa 夾 m³，溫度永遠 K", "R = 8.31 J K⁻¹ mol⁻¹。Pa + m³ ✔ · kPa + dm³ ✔ (the two × 1000s cancel — fastest!) · Pa + dm³ ✘ (answer off by 1000)。"],
          ["eg", "(1) Moles of gas in 2.00 dm³ at 150 kPa and 27 °C？ (2) 0.882 g of a gas occupies 500 cm³ at 100 kPa and 300 K. Find M and suggest its identity.", [
            "(1) n = pV ÷ RT = (150 × 2.00) ÷ (8.31 × 300) = <b>0.120 mol</b>",
            "(2) n = m/M → pV = (m/M)RT → <b>M = mRT ÷ pV</b> = 0.882 × 8.31 × 300 ÷ (100 × 0.500) = <b>44.0 g mol⁻¹</b> → likely CO₂ ✅",
          ]],
          ["table", ["Which formula do I use? — 30-second decision", "Use"], [
            ["Gas at STP", "n = V ÷ 22.7"],
            ["Gas at other T/p, one condition", "pV = nRT"],
            ["Same gas, conditions change (before/after)", "p₁V₁/T₁ = p₂V₂/T₂, no moles needed"],
            ["Gases reacting, same T and p", "volume ratio = coefficient ratio (Avogadro)"],
          ]],
          ["trap", ["Gas collected over water：some gas dissolves → measured volume too small。", "Gas escapes before the bung is put in → volume too small。", "Room T and p are not STP → don't use 22.7；use pV = nRT。"]],
        ],
      },
      {
        h: "Long questions 拆解法",
        min: 2.5,
        blocks: [
          ["table", ["Move", "What to do"], [
            ["① 圈數", "Circle every number with its unit and substance. Convert units NOW (cm³ → dm³, °C → K). Underline: excess, limiting, STP, anhydrous, to constant mass."],
            ["② 寫式", "Write / check the balanced equation. Write coefficients large above each formula."],
            ["③ 過橋", "Which substance do I know completely (m & M, or c & V, or p, V & T)? Get its moles → ratio → target moles → convert."],
            ["④ 查單位", "Units on the answer, sig figs = fewest in the data, does the size make sense?"],
          ]],
          ["table", ["If the question says…", "It is…", "Go to"], [
            ["% by mass, or masses of CO₂ and H₂O", "Empirical formula", "empirical / combustion"],
            ["“·xH₂O”, “heated to constant mass”", "Water of crystallisation", "hydrates"],
            ["mass + p + V + T of a gas", "M = mRT ÷ pV", "pV = nRT"],
            ["Conditions before / after", "p₁V₁/T₁ = p₂V₂/T₂", "combined gas law"],
            ["“made up to”, “diluted”", "c₁V₁ = c₂V₂", "dilution"],
            ["Amounts of two reactants / “excess” / % yield / titration", "see R2.1 Stoichiometry", "next topic sheet"],
          ]],
          ["note", "<b>Sig figs & working</b>：final answer to the fewest significant figures in the data (usually 3)。Keep full calculator values in between — round only at the end。Always write the unit（M → g mol⁻¹；M<sub>r</sub> and A<sub>r</sub> → no unit；c → mol dm⁻³）。Show each step — “calculate” questions give method marks even if the final number is wrong (error carried forward, ECF)。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Using cm³ in c = n/V or pV = nRT", "÷ 1000 → dm³"],
            ["2", "Using °C in gas laws", "+ 273 → K, always"],
            ["3", "Pa with dm³ in pV = nRT", "kPa + dm³ or Pa + m³"],
            ["4", "Rounding 1.33 → 1 in empirical formula", "× 3 (1.5 → × 2, 1.25 → × 4)"],
            ["5", "Molecules vs atoms", "× atoms per formula"],
            ["6", "Cl₂, O₂, H₂, N₂ with single-atom mass", "Diatomic — double the A<sub>r</sub>"],
            ["7", "22.4 or 22.7 used when NOT at STP", "22.7 at 273 K & 100 kPa only"],
            ["8", "Dilution: V₂ = water added", "V₂ = final total volume"],
            ["9", "Rounding in the middle of a calculation", "Keep calculator memory; round at the end"],
            ["10", "No units / wrong sig figs", "Unit + s.f. on every final answer"],
          ]],
          ["check", [
            "Define mole, A<sub>r</sub>, M<sub>r</sub>, molar mass, empirical & molecular formula, Avogadro's law",
            "Convert between m, n, N, c, V (gas and solution) using the mole bridge",
            "Empirical formula from % and from combustion data; molecular formula from M<sub>r</sub>",
            "Water of crystallisation (x in ·xH₂O)",
            "Concentration in mol dm⁻³, g dm⁻³ and ppm; dilution; standard solution method",
            "State 5 ideal-gas assumptions; explain when and why real gases deviate",
            "Sketch / interpret p–V, p–1/V, V–T graphs; explain with particles",
            "Use 22.7, pV = nRT, p₁V₁/T₁ = p₂V₂/T₂, M = mRT/pV",
          ]],
        ],
      },
    ],
    summary: [
      "見數先轉 mol，mol 係唯一嘅橋",
      "n = m ÷ M ；N = n × N<sub>A</sub> ；問原子記得乘原子數",
      "百變克、除原子量、除最細、湊整數（1.5 乘 2，1.33 乘 3）",
      "碳睇 CO₂、氫睇水、氧靠減；水除鹽 = x",
      "c = n ÷ V，cm³ 除千；加水唔加 mol",
      "細、冇、彈、亂、溫；高溫低壓最理想",
      "kPa 夾 dm³，Pa 夾 m³，溫度永遠 K；STP 用 22.7",
      "圈數、寫式、過橋、查單位",
    ],
    practice: [
      { q: "S1.4 Which contains the greatest number of atoms?", o: ["A. 1.0 g H₂", "B. 1.0 g He", "C. 1.0 g CH₄", "D. 1.0 g H₂O"], m: 1, a: "<b>A</b>. H₂: 0.50 mol × 2 = 1.0 mol atoms; He 0.25; CH₄ 0.062 × 5 = 0.31; H₂O 0.056 × 3 = 0.17." },
      { q: "S1.4 A compound contains 2.4 g C and 0.6 g H. Its empirical formula is:", o: ["A. CH", "B. CH₂", "C. CH₃", "D. C₂H₆"], m: 1, a: "<b>C</b>. C: 2.4/12 = 0.2; H: 0.6/1 = 0.6 → 1 : 3 → CH₃ (C₂H₆ is a molecular formula, not empirical)." },
      { q: "S1.4 What volume of 0.500 mol dm⁻³ solution contains 0.0250 mol of solute?", o: ["A. 5.00 cm³", "B. 12.5 cm³", "C. 50.0 cm³", "D. 20.0 cm³"], m: 1, a: "<b>C</b>. V = n/c = 0.0250/0.500 = 0.0500 dm³ = 50.0 cm³." },
      { q: "S1.4 Which has the same number of molecules as 2.0 g of H₂?", o: ["A. 2.0 g O₂", "B. 16 g O₂", "C. 32 g O₂", "D. 64 g O₂"], m: 1, a: "<b>C</b>. 2.0 g H₂ = 1 mol → need 1 mol O₂ = 32 g." },
      { q: "S1.5 A fixed mass of gas at constant pressure is heated from 200 K to 400 K. Its volume:", o: ["A. halves", "B. stays the same", "C. doubles", "D. quadruples"], m: 1, a: "<b>C</b>. V ∝ T(K): 200 → 400 K doubles." },
      { q: "S1.5 Under which conditions does a real gas behave most like an ideal gas?", o: ["A. high T, high p", "B. high T, low p", "C. low T, high p", "D. low T, low p"], m: 1, a: "<b>B</b>. 「高溫低壓最理想」" },
      { q: "Calculate the number of atoms in 9.00 g of water.", m: 3, a: "n = 9.00/18.02 = 0.4994 mol [1]; × 6.02 × 10²³ = 3.01 × 10²³ molecules [1]; × 3 = 9.02 × 10²³ atoms [1]." },
      { q: "0.230 g of a compound (C, H, O) gives 0.440 g CO₂ and 0.270 g H₂O on complete combustion. Find its empirical formula.", m: 4, a: "n(C) = 0.0100 mol (0.120 g) [1]; n(H) = 2 × 0.01498 = 0.0300 mol (0.0303 g) [1]; O = (0.230 − 0.120 − 0.0303)/16.00 = 0.00498 mol [1]; ratio 2 : 6 : 1 → C₂H₆O [1]." },
      { q: "2.50 g CuSO₄·xH₂O is heated to constant mass, leaving 1.60 g. Find x.", m: 3, a: "H₂O 0.90/18.02 = 0.0499 mol [1]; CuSO₄ 1.60/159.62 = 0.01002 mol [1]; ratio 4.98 → x = 5 [1]." },
      { q: "0.882 g of a gas occupies 500 cm³ at 100 kPa and 300 K. Calculate its molar mass.", m: 3, a: "M = mRT/pV [1] = 0.882 × 8.31 × 300 / (100 × 0.500) [1] = 44.0 g mol⁻¹ [1]." },
      { q: "200 cm³ of gas at 25 °C and 100 kPa is changed to 100 °C and 150 kPa. Calculate the new volume.", m: 3, a: "T in K: 298 and 373 [1]; V₂ = 200 × (100/150) × (373/298) [1] = 167 cm³ [1]." },
      { q: "25.0 cm³ of 2.00 mol dm⁻³ HCl is diluted to 500 cm³. Find the new concentration.", m: 2, a: "c₁V₁ = c₂V₂ [1]; c₂ = 2.00 × 25.0/500 = 0.100 mol dm⁻³ [1]." },
    ],
  },

  "chem-4": {
    title: "Ionic · Covalent · Metallic · IMF · Chromatography",
    parts: [
      {
        h: "Ionic & metallic 離子同金屬",
        min: 2.5,
        blocks: [
          ["key", "<b>Ionic</b>：electrostatic attraction between oppositely charged ions（lattice）<br><b>Metallic</b>：electrostatic attraction between a lattice of cations and delocalised electrons"],
          ["rhyme", "口訣 1", "電荷大、半徑細，就夠實淨", "Lattice enthalpy / metallic strength ↑ 當 charge ↑、radius ↓ → m.p. ↑（MgO > NaCl；Mg > Na）。"],
          ["table", ["Property", "Ionic", "Metallic"], [
            ["Conduct", "molten / aq only（ions free to move）", "solid & liquid（delocalised e⁻）"],
            ["Mechanical", "brittle（同電荷 ions 錯位相斥）", "malleable, ductile（layers slide）"],
            ["m.p.", "high", "generally high；alloys 更硬（唔同大小原子阻住 layers 滑）"],
          ]],
          ["trap", ["Ionic solid 唔導電因為 ions <b>fixed in lattice</b>，唔係「冇電子」。", "Metal 導電靠 delocalised <b>electrons</b>；molten salt 靠 <b>ions</b>。"]],
        ],
      },
      {
        h: "Covalent & VSEPR 共價同形狀",
        min: 3,
        blocks: [
          ["key", "Covalent bond = attraction between a <b>shared pair of electrons</b> and the nuclei。Coordination bond：兩粒電子都嚟自同一原子（NH₄⁺, H₃O⁺, CO）。"],
          ["table", ["Domains", "Lone pairs", "Shape", "Angle", "例"], [
            ["2", "0", "linear", "180°", "CO₂"],
            ["3", "0", "trigonal planar", "120°", "BF₃"],
            ["3", "1", "bent", "~117°", "SO₂"],
            ["4", "0", "tetrahedral", "109.5°", "CH₄"],
            ["4", "1", "trigonal pyramidal", "~107°", "NH₃"],
            ["4", "2", "bent", "~104.5°", "H₂O"],
          ]],
          ["rhyme", "口訣 2", "雙鍵當一個，孤對推更多", "Double/triple bond = 1 domain；lone pair repel 多過 bonding pair → 每多一對 lone pair，角度減約 2.5°。"],
          ["note", "Giant covalent：diamond（4 bonds, hard, no conduct）、graphite（3 bonds, layers, delocalised e⁻ → conducts）、graphene、C₆₀ fullerene（molecular）、SiO₂。"],
          ["trap", ["H₂O 叫 bent / V-shaped，唔好寫「linear」或「tetrahedral」（嗰個係 electron domain geometry）。", "Lewis structure 要畫埋所有 lone pairs。"]],
        ],
      },
      {
        h: "IMF, polarity & chromatography",
        min: 3,
        blocks: [
          ["key", "強度：London (dispersion) &lt; dipole–induced dipole &lt; dipole–dipole &lt; hydrogen bond（H on N/O/F … lone pair on N/O/F）"],
          ["rhyme", "口訣 3", "沸騰拆 IMF，唔拆共價鍵", "Simple molecular 沸點高低 = IMF 強弱；London forces 隨 number of electrons ↑。Polar bond + 對稱形狀（CO₂、CCl₄）→ non-polar molecule。"],
          ["eg", "解釋 H₂O（bp 100 °C）高過 H₂S（bp −60 °C）。", [
            "H₂O：hydrogen bonds between molecules（H bonded to very electronegative O）",
            "H₂S：only dipole–dipole + London forces, weaker",
            "→ more energy needed to overcome IMF in H₂O ✅",
          ]],
          ["note", "<b>Chromatography</b>（S2.2）：components 分開靠對 <b>stationary phase</b>（paper/water）同 <b>mobile phase</b>（solvent）嘅 relative attraction。\\(R_f = \\dfrac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}\\)（0–1，冇單位）。例：spot 3.6 cm，front 8.0 cm → Rf = 0.45。"],
          ["trap", ["寫「boiling breaks covalent bonds」→ 即刻 0。", "Rf 用 baseline 量起，唔係由紙底；start line 要用鉛筆、高過 solvent。"]],
        ],
      },
    ],
    summary: [
      "Ionic / metallic：電荷大半徑細就強",
      "Ionic 熔咗或溶咗先導電",
      "雙鍵當一個，孤對推更多",
      "沸騰拆 IMF，唔拆 covalent bond",
      "H-bond：H 連 N、O、F",
      "對稱就 non-polar；Rf = spot ÷ front",
    ],
    practice: [
      { q: "Deduce the shape and bond angle of PCl₃.", m: 2, a: "Trigonal pyramidal [1]; ~107° (accept 100–108°) [1]." },
      { q: "Explain why CCl₄ is non-polar although C–Cl bonds are polar.", m: 2, a: "Tetrahedral / symmetrical shape [1]; bond dipoles cancel, no net dipole [1]." },
      { q: "Explain why graphite conducts electricity but diamond does not.", m: 2, a: "Graphite: each C bonded to three others, one delocalised electron per atom free to move [1]; diamond: all four valence electrons used in bonds, no mobile electrons [1]." },
      { q: "In paper chromatography a dye moved 2.7 cm while the solvent moved 9.0 cm. Calculate Rf and outline why two dyes separate.", m: 3, a: "Rf = 2.7/9.0 = 0.30 [1]; dyes have different relative attractions (IMF) to the stationary and mobile phases [1]; so travel different distances [1]." },
      { q: "Explain why magnesium oxide has a higher melting point than sodium chloride.", m: 2, a: "Mg²⁺/O²⁻ have greater charges (and smaller radii) than Na⁺/Cl⁻ [1]; stronger electrostatic attraction / lattice, more energy needed to separate ions [1]." },
    ],
  },

  "chem-5": {
    title: "Bonding triangle · Polymers · Periodic trends · Oxides",
    parts: [
      {
        h: "Materials 物料",
        min: 3,
        blocks: [
          ["key", "<b>Bonding triangle</b>：x-axis = <b>average electronegativity</b>，y-axis = <b>electronegativity difference</b> Δχ。左下 metallic、右下 covalent、頂 ionic；大部分物質喺中間（bonding continuum）。"],
          ["eg", "用 data booklet：Na χ = 0.9，Cl χ = 3.2。分類 NaCl。", [
            "Δχ = 3.2 − 0.9 = 2.3；average = (0.9 + 3.2)/2 = 2.05",
            "落喺 triangle 上方 → predominantly <b>ionic</b> ✅",
          ]],
          ["rhyme", "口訣 1", "雙鍵打開手拖手", "<b>Addition polymer</b>：alkene 嘅 C=C 打開，monomers 連埋，冇原子流失。Repeating unit 要畫 <b>2 個 C 主鏈 + brackets + continuation bonds + n</b>。"],
          ["note", "Alloys：金屬 + 其他元素 → 唔同大小原子阻住 layers sliding → harder, stronger。Plastics：durable, non-biodegradable → 環境問題；recycling 需要分類。"],
          ["trap", ["Poly(propene) repeating unit 寫成 -CH₂-CH₂-CH₂- ✗ → 正確 -[CH₂-CH(CH₃)]-，CH₃ 係側鏈。", "Bonding triangle 兩條軸調亂。"]],
        ],
      },
      {
        h: "Periodic trends 週期趨勢",
        min: 3,
        blocks: [
          ["table", ["Property", "Across period →", "Down group ↓"], [
            ["Atomic radius", "↓", "↑"],
            ["First IE", "↑（有 dip）", "↓"],
            ["Electronegativity", "↑", "↓"],
            ["Electron affinity", "generally more exothermic", "less exothermic"],
            ["Metallic character", "↓", "↑"],
          ]],
          ["rhyme", "口訣 2（解釋三寶）", "核電荷、層數、屏蔽", "每個 trend 都用：nuclear charge、number of shells / distance、shielding → attraction for outer electrons。"],
          ["note", "Group 1：down the group 更 reactive（IE ↓）；2Na + 2H₂O → 2NaOH + H₂。Group 17：down the group 較唔 reactive；Cl₂ + 2KBr → 2KCl + Br₂（強嘅 displace 弱嘅 halide）。Ionic radius：cation 細過原子，anion 大過原子。"],
          ["trap", ["Across period radius 變細係因為 nuclear charge ↑ 而 <b>shielding 差唔多</b>，唔係「多咗電子」。", "Halogen reactivity 方向同 group 1 相反。"]],
        ],
      },
      {
        h: "Oxides & oxidation states",
        min: 2.5,
        blocks: [
          ["key", "Metal oxide = <b>basic</b>（Na₂O + H₂O → 2NaOH）｜Non-metal oxide = <b>acidic</b>（SO₃ + H₂O → H₂SO₄；CO₂ → H₂CO₃）｜Al₂O₃ = <b>amphoteric</b>"],
          ["note", "Environmental link：NOₓ / SO₂ → <b>acid deposition</b>；CO₂ 溶入海 → H₂CO₃ → <b>ocean acidification</b>。"],
          ["rhyme", "口訣 3", "元素零，總和平，O 負二，H 正一", "例：KMnO₄：+1 + x + 4(−2) = 0 → x = +7，寫 manganese(VII)。"],
          ["trap", ["寫 oxidation state 漏正號（+7 唔好寫 7+；7+ 係 ion charge 寫法）。", "H₂O₂ 入面 O 係 −1；metal hydride 入面 H 係 −1。"]],
        ],
      },
    ],
    summary: [
      "Triangle：x 平均 χ，y 係 Δχ",
      "雙鍵打開手拖手，兩碳主鏈加括號",
      "核電荷、層數、屏蔽解釋所有 trend",
      "Group 1 越落越勁，Group 17 越落越弱",
      "金屬氧化物 basic，非金屬 acidic，Al₂O₃ 兩樣都得",
      "元素零，總和平，O −2，H +1",
    ],
    practice: [
      { q: "Draw (describe) the repeating unit of the polymer formed from propene, CH₂=CHCH₃.", m: 2, a: "-[CH₂-CH(CH₃)]- with two-carbon backbone and CH₃ side group [1]; brackets with continuation bonds / n [1]." },
      { q: "Explain why atomic radius decreases across period 3.", m: 2, a: "Nuclear charge increases while electrons are added to the same shell / shielding similar [1]; greater attraction pulls outer electrons closer [1]." },
      { q: "Write an equation for the reaction of sodium oxide with water and state the nature of the oxide.", m: 2, a: "Na₂O + H₂O → 2NaOH [1]; basic oxide [1]." },
      { q: "Deduce the oxidation state of sulfur in Na₂S₂O₃.", m: 1, a: "+2 (2(+1) + 2x + 3(−2) = 0)." },
    ],
  },

  "chem-6": {
    title: "Functional groups · Naming · Isomers · Spectroscopy",
    parts: [
      {
        h: "Functional groups & IUPAC 命名",
        min: 3,
        blocks: [
          ["table", ["Class", "Group", "命名", "例"], [
            ["alkene", "C=C", "-ene", "but-1-ene"],
            ["halogenoalkane", "C–X", "chloro-/bromo-", "2-bromopropane"],
            ["alcohol", "–OH (hydroxyl)", "-ol", "propan-2-ol"],
            ["aldehyde", "–CHO (carbonyl, 末端)", "-al", "propanal"],
            ["ketone", "C=O (carbonyl, 中間)", "-one", "propanone"],
            ["carboxylic acid", "–COOH (carboxyl)", "-oic acid", "ethanoic acid"],
            ["ester", "–COO–", "-yl -oate", "methyl ethanoate"],
            ["ether / amine / amide", "C–O–C / –NH₂ / –CONH₂", "alkoxy- / -amine / -amide", "methoxyethane / ethanamine / ethanamide"],
          ]],
          ["rhyme", "口訣 1", "最長鏈、最細號、字母排", "Longest chain containing the functional group → lowest locant → substituents alphabetical（2-methylbutan-1-ol）。"],
          ["note", "Homologous series：same general formula, same functional group, differ by CH₂, similar chemical properties, gradual trend in physical properties（b.p. ↑ 因為 London forces ↑）。"],
          ["trap", ["Ester 命名先 alkyl（嚟自 alcohol）再 -oate（嚟自 acid）：CH₃COOCH₃ = methyl ethanoate。", "Aldehyde 嘅 C=O 一定喺鏈尾，唔使寫數字（propanal 唔寫 propan-1-al）。"]],
        ],
      },
      {
        h: "Isomers & classifying",
        min: 2,
        blocks: [
          ["key", "<b>Structural isomers</b>：same molecular formula, different structural formula（chain / position / functional group）"],
          ["eg", "C₄H₁₀O 有幾多個 alcohol isomers？", [
            "butan-1-ol（primary）、butan-2-ol（secondary）",
            "2-methylpropan-1-ol（primary）、2-methylpropan-2-ol（<b>tertiary</b>）→ 4 個 ✅",
          ]],
          ["rhyme", "口訣 2", "數碳鄰居定級數", "連住 –OH / –X 嗰粒 C 有幾多粒 C 鄰居：1 = primary，2 = secondary，3 = tertiary。"],
        ],
      },
      {
        h: "Spectroscopy 光譜（P1B / P2 必考）",
        min: 3.5,
        blocks: [
          ["key", "<b>IHD</b> = (2C + 2 + N − H − X)/2 = rings + π bonds<br><b>MS</b>：molecular ion M⁺ → M；fragments 15 CH₃⁺、29 C₂H₅⁺/CHO⁺、31 CH₂OH⁺、45 COOH⁺<br><b>IR</b>：bond vibrations → functional group<br><b>¹H NMR</b>：no. of signals = H environments；integration = H ratio；chemical shift vs TMS (0 ppm)"],
          ["table", ["IR band / cm⁻¹", "Bond", "睇法"], [
            ["3200–3600 broad", "O–H alcohol", "闊、圓"],
            ["2500–3000 very broad", "O–H acid", "又闊又爛，蓋住 C–H"],
            ["1700–1750 strong", "C=O", "尖、深"],
            ["2850–3090", "C–H", "幾乎個個有"],
          ]],
          ["eg", "C₂H₄O₂：MS M⁺ = 60；IR 2500–3000 very broad + 1710；¹H NMR 2 signals, 3 : 1。", [
            "IHD = (4 + 2 − 4)/2 = 1 → 一個 C=O",
            "Very broad O–H + C=O → carboxylic acid",
            "3 : 1 = CH₃ 同 COOH → <b>ethanoic acid, CH₃COOH</b> ✅",
          ]],
          ["rhyme", "口訣 3", "MS 稱重，IR 認組，NMR 數屋企", "做 combined spectra 題：M → IHD → IR → NMR → 寫結構 → check 返。"],
          ["trap", ["IR 範圍要喺 data booklet 揀，唔好背錯數字。", "對稱分子 H environment 數多咗（propanone 只有 1 個 signal）。", "SL 唔使分析 splitting pattern（AHL）。"]],
        ],
      },
    ],
    summary: [
      "最長鏈、最細號、字母排",
      "Ester：alkyl 先，-oate 後",
      "數碳鄰居定 1°/2°/3°",
      "IHD = (2C + 2 + N − H − X)/2",
      "MS 稱重，IR 認組，NMR 數屋企",
      "Broad 2500–3000 + 1700 = carboxylic acid",
    ],
    practice: [
      { q: "State the IUPAC name of CH₃CH₂COOCH₂CH₃.", m: 1, a: "Ethyl propanoate." },
      { q: "Calculate the IHD of C₄H₆ and suggest one possible structure.", m: 2, a: "(2×4 + 2 − 6)/2 = 2 [1]; e.g. but-1-yne / buta-1,3-diene / cyclobutene [1]." },
      { q: "Deduce the number of signals and their ratio in the ¹H NMR spectrum of propan-2-ol, (CH₃)₂CHOH.", m: 2, a: "3 signals [1]; ratio 6 : 1 : 1 [1]." },
      { q: "Explain how IR spectroscopy distinguishes propan-1-ol from propanal.", m: 2, a: "Propan-1-ol: broad absorption 3200–3600 cm⁻¹ (O–H) [1]; propanal: strong absorption 1700–1750 cm⁻¹ (C=O) and no broad O–H [1]." },
    ],
  },

  "chem-7": {
    title: "Enthalpy · Calorimetry · Bond enthalpy & Hess · Fuels",
    parts: [
      {
        h: "ΔH & calorimetry 量熱",
        min: 3.5,
        blocks: [
          ["key", "\\(q = mc\\Delta T\\)（m = <b>水/溶液</b>質量 g，c = 4.18 J g⁻¹ K⁻¹）　\\(\\Delta H = -\\dfrac{q}{n}\\)（kJ mol⁻¹）"],
          ["rhyme", "口訣 1", "升溫放熱負，降溫吸熱正", "Exothermic：surroundings 變熱，ΔH &lt; 0，products 喺 energy profile 較低；endothermic 相反。"],
          ["eg", "Excess Zn 加入 50.0 cm³ 0.200 mol dm⁻³ CuSO₄，ΔT = +10.0 K。求 ΔH。", [
            "q = 50.0 × 4.18 × 10.0 = 2090 J = 2.09 kJ",
            "n(CuSO₄) = 0.200 × 0.0500 = 0.0100 mol（limiting）",
            "ΔH = −2.09 / 0.0100 = <b>−209 kJ mol⁻¹</b> ✅",
          ]],
          ["note", "P1B 必考：heat loss → 實驗值 <b>less exothermic</b> than literature。改善：lid、polystyrene cup / insulation、stir、extrapolate temperature–time graph 返去加入時間求 max ΔT。燃燒實驗：incomplete combustion、soot、draught shield。"],
          ["trap", ["m 用咗燃料質量。", "漏咗負號或單位 kJ mol⁻¹ → 失 A mark。", "Excess reagent 唔係計 n 嗰個。"]],
        ],
      },
      {
        h: "Bond enthalpy & Hess's law",
        min: 3,
        blocks: [
          ["key", "\\(\\Delta H = \\sum\\text{bonds broken} - \\sum\\text{bonds formed}\\)　Breaking = endothermic，forming = exothermic"],
          ["eg", "H₂(g) + Cl₂(g) → 2HCl(g)；H–H 436、Cl–Cl 242、H–Cl 431 kJ mol⁻¹。", [
            "Broken：436 + 242 = 678；Formed：2 × 431 = 862",
            "ΔH = 678 − 862 = <b>−184 kJ mol⁻¹</b>",
          ]],
          ["rhyme", "口訣 2", "斷減成；反轉變號，乘就乘埋", "Hess's law：ΔH independent of route。用方程式砌目標反應。"],
          ["eg", "C + O₂ → CO₂ ΔH = −394；CO + ½O₂ → CO₂ ΔH = −283。求 C + ½O₂ → CO。", ["第一條照用 + 第二條反轉：−394 + 283 = <b>−111 kJ mol⁻¹</b>"]],
          ["trap", ["Bond enthalpy 係 average、只適用 gaseous → 同 data 有差異。", "方向顛倒成「formed − broken」。"]],
        ],
      },
      {
        h: "Fuels 燃料",
        min: 2,
        blocks: [
          ["table", ["燃燒", "產物", "問題"], [
            ["complete", "CO₂ + H₂O", "CO₂ greenhouse gas"],
            ["incomplete（O₂ 唔夠）", "CO / C (soot) + H₂O", "CO toxic；soot 污染"],
          ]],
          ["note", "Fossil fuels：high specific energy，non-renewable。Biofuels（ethanol 由 fermentation、biodiesel）：renewable、理論上 carbon neutral，但佔農地。Fuel cell：2H₂ + O₂ → 2H₂O，化學能直接變電能，efficiency 高。"],
          ["trap", ["寫 incomplete combustion 方程式要 balance：CH₄ + 1½O₂ → CO + 2H₂O。"]],
        ],
      },
    ],
    summary: [
      "q = mcΔT，m 係水；ΔH = −q/n",
      "升溫負，降溫正；單位 kJ mol⁻¹",
      "Heat loss → less exothermic",
      "斷減成；bond enthalpy 係 average、gas",
      "Hess：反轉變號，乘就乘埋",
      "O₂ 唔夠 → CO + soot",
    ],
    practice: [
      { q: "Burning 0.230 g of ethanol (M = 46.08 g mol⁻¹) raised the temperature of 100.0 g of water by 15.0 K. Calculate ΔHc of ethanol.", m: 3, a: "q = 100.0 × 4.18 × 15.0 = 6270 J [1]; n = 0.230/46.08 = 4.99 × 10⁻³ mol [1]; ΔHc = −6.27/4.99 × 10⁻³ = −1.26 × 10³ kJ mol⁻¹ [1]." },
      { q: "Suggest why the value in Q1 is less exothermic than the literature value (−1367 kJ mol⁻¹) and one improvement.", m: 2, a: "Heat lost to surroundings / incomplete combustion [1]; insulate / use a lid or draught shield / reduce distance between flame and calorimeter [1]." },
      { q: "Use bond enthalpies (N≡N 945, H–H 436, N–H 391 kJ mol⁻¹) to calculate ΔH for N₂ + 3H₂ → 2NH₃.", m: 3, a: "Broken: 945 + 3(436) = 2253 [1]; formed: 6(391) = 2346 [1]; ΔH = −93 kJ mol⁻¹ [1]." },
      { q: "State the products of incomplete combustion of octane and one hazard of each.", m: 2, a: "Carbon monoxide – toxic, binds to haemoglobin [1]; carbon/soot – respiratory problems / global dimming [1] (water also formed)." },
    ],
  },

  "chem-8": {
    title: "Reacting masses · Limiting reactant · Yield · Gas volumes · Titration",
    intro: "每條 stoichiometry 題都係同一條橋：轉 mol → 比例 → 轉返。最後有 15 個失分位同練習。",
    parts: [
      {
        h: "Reacting masses 一行計法",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "一轉 mol、二比例、三轉返", "要嘅係數放上面，知嘅係數放下面。永遠唔好直接用 mass ratio；寫清楚 “mole ratio 1 : 2” 攞 method mark。"],
          ["key", "<b>m(B) = [m(A) ÷ M(A)] × [b ÷ a] × M(B)</b><br>a, b = coefficients of A (known) and B (wanted) in the balanced equation。計數機一行打晒，中途唔 round。"],
          ["eg", "5.00 g CaCO₃ reacts with excess HCl. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Find the mass and the STP volume of CO₂.", [
            "① mol：n(CaCO₃) = 5.00 ÷ 100.09 = 0.0500 mol（“excess HCl” = ignore HCl!）",
            "② ratio：CaCO₃ : CO₂ = 1 : 1 → n(CO₂) = 0.0500 mol",
            "③ 轉返：mass = 0.0500 × 44.01 = <b>2.20 g</b>；volume = 0.0500 × 22.7 = <b>1.13 dm³</b> ✅",
          ]],
        ],
      },
      {
        h: "Limiting reactant 限量",
        min: 4,
        blocks: [
          ["rhyme", "口訣", "mol 除係數，最細就係限量", "限量話事，過量睇戲：product 永遠由 limiting reactant 計。"],
          ["note", "<b>Limiting reactant</b>: the reactant that is completely used up; it decides the maximum amount of product. The other is in excess."],
          ["eg", "2.70 g Al reacts with 7.10 g Cl₂. 2Al + 3Cl₂ → 2AlCl₃. (a) Limiting? (b) Theoretical yield of AlCl₃? (c) Mass of excess left? (d) 7.12 g obtained — % yield?", [
            "n(Al) = 2.70 ÷ 26.98 = 0.1001；n(Cl₂) = 7.10 ÷ 70.90 = 0.1001",
            "÷ coef：Al 0.1001 ÷ 2 = 0.0500；Cl₂ 0.1001 ÷ 3 = 0.0334 ← smallest → <b>Cl₂ is limiting</b>",
            "(b) n(AlCl₃) = 0.1001 × 2/3 = 0.0668 mol → × 133.33 = <b>8.90 g</b>",
            "(c) Al used = 0.0668 mol；left = 0.1001 − 0.0668 = 0.0333 mol → × 26.98 = <b>0.899 g</b>　「總數 − 用咗 = 剩低」",
            "(d) % yield = 7.12 ÷ 8.90 × 100 = <b>80.0%</b> ✅",
          ]],
          ["rhyme", "Super shortcut", "除係數、揀最細、再乘返", "The smallest (n ÷ coefficient) is the number of “reaction units”. Multiply it by ANY coefficient to get that substance's moles：0.0334 × 2 = 0.0668 mol AlCl₃。"],
          ["trap", ["Comparing raw moles (0.1001 vs 0.1001 — looks equal!) 係錯。一定先除係數。", "Cl₂、O₂、N₂、H₂ 係 diatomic：用 70.90，唔係 35.45。"]],
        ],
      },
      {
        h: "% yield · atom economy",
        min: 3,
        blocks: [
          ["key", "<b>% yield = (experimental yield ÷ theoretical yield) × 100</b>　　<b>Atom economy = [M of desired product ÷ total M of all reactants] × 100</b>"],
          ["rhyme", "口訣", "實際除理論；要嘅除晒全部（連係數）", "Atom economy 計 M 時要乘返 coefficient。"],
          ["table", ["Why < 100 %?", "Why > 100 %?"], [
            ["Incomplete / reversible reaction", "Product not dry (still contains water / solvent)"],
            ["Side reactions (other products)", "Product contains impurities"],
            ["Product lost during transfer, filtering, purifying", ""],
            ["Impure reactants", ""],
          ]],
          ["eg", "Fermentation C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Atom economy for ethanol?", ["(2 × 46.08) ÷ 180.18 × 100 = <b>51.1%</b>（include the coefficient 2!）✅"]],
          ["table", ["% yield", "Atom economy"], [
            ["Needs an experiment (actual mass)", "Calculated from the equation only"],
            ["How well did the practical go?", "How much of the atoms end up in the useful product (green chemistry)"],
          ]],
          ["note", "High atom economy = less waste, fewer by-products, more sustainable. Addition reactions = 100%。"],
        ],
      },
      {
        h: "Gas volume reactions",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "氣對氣，體積比 = mol 比", "用 Start / Change / End table，唔使轉 mol。"],
          ["eg", "50 cm³ CH₄ burns in 150 cm³ O₂ at room temperature. CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). Final gas volume?", [
            "Start：CH₄ 50 · O₂ 150 · CO₂ 0",
            "Change (1 : 2 : 1)：CH₄ −50 · O₂ −100 · CO₂ +50 · H₂O(l) ignore",
            "End：CH₄ 0 · O₂ 50 · CO₂ 50 → final gas volume = <b>100 cm³</b> ✅",
          ]],
          ["trap", ["Water at room temperature is a liquid → 唔計體積。只數剩低嘅氣體（包括 excess reactant!）。"]],
        ],
      },
      {
        h: "Titration 滴定（P1B 重點）",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "已知嗰邊計 n，比例過橋，未知嗰邊除 V", ""],
          ["eg", "25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.100 mol dm⁻³ H₂SO₄. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Find c(NaOH).", [
            "Known side：n(H₂SO₄) = 0.100 × 0.0200 = 0.00200 mol",
            "Ratio：n(NaOH) = 0.00200 × 2/1 = 0.00400 mol",
            "Unknown side：c = 0.00400 ÷ 0.0250 = <b>0.160 mol dm⁻³</b> ✅",
          ]],
        ],
      },
      {
        h: "Long questions 拆解法",
        min: 3,
        blocks: [
          ["eg", "0.120 g of magnesium is added to 50.0 cm³ of 0.150 mol dm⁻³ HCl. Calculate the volume of hydrogen (in cm³) produced at STP.", [
            "圈數：Mg 0.120 g；HCl 50.0 cm³ = 0.0500 dm³, 0.150 mol dm⁻³；STP → 22.7；兩個 reactant 都俾咗 → limiting reactant question！",
            "寫式：Mg + 2HCl → MgCl₂ + H₂",
            "n(Mg) = 0.120 ÷ 24.31 = 0.00494 → ÷1 = 0.00494；n(HCl) = 0.150 × 0.0500 = 0.00750 → ÷2 = 0.00375 ← smallest → <b>HCl limiting</b>",
            "n(H₂) = 0.00375 mol → V = 0.00375 × 22.7 = 0.0851 dm³ → asked in cm³ × 1000 = <b>85.1 cm³</b> ✅",
          ]],
          ["trap", ["Most students assume Mg is limiting (it's the “solid”) and get 112 cm³ — wrong!"]],
          ["table", ["If the question says…", "It is…"], [
            ["Amounts of two reactants given", "Limiting reactant"],
            ["“excess” of one reactant", "Use only the other one"],
            ["Volumes of reacting gases only", "Avogadro: volume ratio"],
            ["Burette / pipette / “neutralised”", "Titration"],
            ["Experimental mass vs calculated mass", "% yield"],
          ]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Forgetting the mole ratio (assuming 1 : 1)", "Want-coef ÷ know-coef, every time"],
            ["2", "Limiting reactant from raw moles", "Divide by coefficient first"],
            ["3", "Using the EXCESS reactant to calculate product", "「限量話事」— use the limiting one"],
            ["4", "Atom economy without coefficients", "Multiply M by its coefficient"],
            ["5", "Counting liquid water as gas volume", "H₂O(l) at room temp has ~0 volume"],
            ["6", "Cl₂, O₂, H₂, N₂ with single-atom mass", "Diatomic — double the A<sub>r</sub>"],
            ["7", "cm³ used as dm³ in c = n/V", "÷ 1000 first"],
            ["8", "Rounding in the middle", "Keep calculator memory; round at the end"],
            ["9", "No units / wrong sig figs", "Unit + s.f. on every final answer"],
          ]],
          ["check", [
            "Reacting masses / volumes / solutions from a balanced equation",
            "Limiting reactant, theoretical yield, excess left over, % yield (and reasons)",
            "Atom economy and how it differs from % yield",
            "Gas-volume table (Start / Change / End)",
            "Titration calculation with a non-1:1 ratio",
          ]],
        ],
      },
    ],
    summary: [
      "一轉 mol、二比例、三轉返",
      "要嘅係數放上面，知嘅係數放下面",
      "mol 除係數，最細就係限量；限量話事",
      "實際除理論 = % yield；要嘅除晒全部（連係數）= atom economy",
      "氣對氣，體積比 = mol 比；液態水唔計",
      "滴定：已知計 n → 比例 → 未知除 V",
    ],
    practice: [
      { q: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Moles of O₂ needed for 0.50 mol C₄H₁₀?", o: ["A. 3.25", "B. 6.5", "C. 13", "D. 1.6"], m: 1, a: "<b>A</b>. 0.50 × 13/2 = 3.25 (want-coef on top)." },
      { q: "20 cm³ N₂ reacts completely with H₂: N₂ + 3H₂ → 2NH₃ (same T, p). Volume of NH₃ formed?", o: ["A. 20 cm³", "B. 40 cm³", "C. 60 cm³", "D. 80 cm³"], m: 1, a: "<b>B</b>. Volume ratio N₂ : NH₃ = 1 : 2 → 40 cm³." },
      { q: "Theoretical yield 10.0 g, actual yield 7.5 g. % yield?", o: ["A. 7.5 %", "B. 25 %", "C. 75 %", "D. 133 %"], m: 1, a: "<b>C</b>. 7.5 ÷ 10.0 × 100 = 75 %." },
      { q: "2.70 g Al reacts with 7.10 g Cl₂ (2Al + 3Cl₂ → 2AlCl₃). Identify the limiting reactant, calculate the theoretical yield, and the % yield if 7.12 g is obtained.", m: 4, a: "n ÷ coef: Al 0.0500, Cl₂ 0.0334 → Cl₂ limiting [1]; n(AlCl₃) = 0.0668 mol [1] × 133.33 = 8.90 g [1]; 7.12/8.90 × 100 = 80.0% [1]." },
      { q: "Calculate the atom economy for making ethanol by fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.", m: 2, a: "(2 × 46.08)/180.18 [1] × 100 = 51.1% [1]." },
      { q: "25.0 cm³ NaOH is neutralised by 20.0 cm³ of 0.100 mol dm⁻³ H₂SO₄. Find c(NaOH).", m: 3, a: "n(acid) = 0.00200 [1]; n(NaOH) = 0.00400 (ratio 1 : 2) [1]; c = 0.00400/0.0250 = 0.160 mol dm⁻³ [1]." },
      { q: "0.120 g Mg is added to 50.0 cm³ of 0.150 mol dm⁻³ HCl. Calculate the volume of H₂ (cm³) at STP.", m: 4, a: "n(Mg) 0.00494 ÷ 1; n(HCl) 0.00750 ÷ 2 = 0.00375 (limiting) [2]; n(H₂) = 0.00375 [1]; × 22.7 = 0.0851 dm³ = 85.1 cm³ [1]." },
      { q: "50 cm³ CH₄ is burned in 150 cm³ O₂ at room temperature. What is the total volume of gas at the end?", m: 2, a: "CH₄ uses 100 cm³ O₂ [1]; 50 O₂ left + 50 CO₂ formed (water is liquid) = 100 cm³ [1]." },
    ],
  },

  "chem-9": {
    title: "Measuring rate · Collision theory · Maxwell–Boltzmann · Catalysts",
    parts: [
      {
        h: "Measuring rate 量度速率（P1B 熱門）",
        min: 3,
        blocks: [
          ["key", "Rate = change in concentration (amount) ÷ time（mol dm⁻³ s⁻¹）。Rate at time t = <b>gradient of tangent</b>。"],
          ["table", ["方法", "量咩", "適用"], [
            ["gas syringe / inverted burette", "volume of gas", "Mg + HCl, CaCO₃ + HCl"],
            ["balance", "mass loss（gas 走咗）", "CaCO₃ + HCl"],
            ["colorimeter", "absorbance / colour", "有色物質"],
            ["disappearing cross", "time for precipitate", "Na₂S₂O₃ + HCl"],
            ["pH / conductivity probe", "[H⁺] / ions", "離子數變化"],
          ]],
          ["eg", "Gas volume–time 圖，t = 0 嘅 tangent 經過 (0, 0) 同 (20 s, 30 cm³)。Initial rate？", ["Gradient = 30/20 = <b>1.5 cm³ s⁻¹</b>"]],
          ["trap", ["Rate 慢慢減因為 reactant concentration ↓ → collision frequency ↓。", "Final volume 只由 limiting reactant 決定，唔關 catalyst / 溫度事。", "1/time 可以當 relative rate 用（disappearing cross）。"]],
        ],
      },
      {
        h: "Collision theory 碰撞理論",
        min: 2.5,
        blocks: [
          ["key", "Successful collision：<b>E ≥ Ea</b> + <b>correct orientation</b>"],
          ["table", ["Factor ↑", "點解快咗"], [
            ["concentration / pressure", "more frequent collisions"],
            ["surface area", "more particles exposed → more frequent collisions"],
            ["temperature", "<b>greater proportion with E ≥ Ea</b>（主要）+ more frequent collisions"],
            ["catalyst", "alternative pathway, lower Ea"],
          ]],
          ["rhyme", "口訣 1", "濃度面積撞多啲，溫度催化夠力啲", "前兩個係 frequency，後兩個係 energy（proportion ≥ Ea）。"],
          ["trap", ["寫「more collisions」唔夠 → 要寫 <b>more frequent</b> / per unit time。", "Catalyst 唔係畀粒子更多 energy。"]],
        ],
      },
      {
        h: "Maxwell–Boltzmann & energy profiles",
        min: 3,
        blocks: [
          ["key", "M–B 曲線：由 origin 開始，偏左峰，右邊尾巴唔掂 x-axis。Axes：<b>number (fraction) of particles</b> vs <b>kinetic energy</b>。Area = total particles。"],
          ["rhyme", "口訣 2", "升溫峰矮向右移，催化 Ea 向左移", "High T：peak lower, broader, shifted right，<b>area 不變</b>，Ea 右邊面積大好多。Catalyst：曲線唔變，Ea 線向左。"],
          ["note", "Energy profile：reactants → 頂點 = <b>transition state</b>（activated complex）→ products。Ea 由 reactants 量到頂；ΔH 由 reactants 量到 products。Catalysed pathway 頂點較低，ΔH 不變。"],
          ["trap", ["畫高溫曲線面積大咗 / 峰高咗 → 扣分。", "Ea 箭頭由 products 量起 ✗。"]],
        ],
      },
    ],
    summary: [
      "Rate = 切線 gradient",
      "Successful：E ≥ Ea + 啱方向",
      "濃度面積撞多啲，溫度催化夠力啲",
      "More frequent，唔係 more",
      "升溫峰矮向右移，面積不變",
      "Catalyst：lower Ea，ΔH 不變",
    ],
    practice: [
      { q: "Explain, with reference to the Maxwell–Boltzmann distribution, why increasing temperature increases the rate.", m: 3, a: "Average kinetic energy increases / curve shifts right and flattens [1]; greater proportion of particles have E ≥ Ea [1]; more frequent successful collisions [1]." },
      { q: "Outline two methods to measure the rate of CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g).", m: 2, a: "Measure volume of CO₂ with a gas syringe over time [1]; measure mass loss on a balance over time [1] (or pH/conductivity)." },
      { q: "Explain why powdered CaCO₃ reacts faster than the same mass of marble chips but gives the same final volume of CO₂.", m: 2, a: "Larger surface area → more frequent collisions [1]; same amount (moles) of limiting reactant so same total CO₂ [1]." },
      { q: "State what is represented by the maximum of a reaction energy profile.", m: 1, a: "Transition state / activated complex." },
    ],
  },

  "chem-10": {
    title: "Dynamic equilibrium · Kc · Le Chatelier",
    parts: [
      {
        h: "Dynamic equilibrium & Kc",
        min: 3,
        blocks: [
          ["key", "Closed system；<b>forward rate = reverse rate</b>；concentrations <b>constant（唔一定相等）</b>；macroscopic properties constant。"],
          ["key", "aA + bB ⇌ cC + dD：\\(K_c = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}\\)　K ≫ 1 → 偏右（products）；K ≪ 1 → 偏左"],
          ["rhyme", "口訣 1", "產物做頭，係數做次方", "N₂ + 3H₂ ⇌ 2NH₃：Kc = [NH₃]² / ([N₂][H₂]³)。"],
          ["note", "反轉方程式 → 1/K；係數 ×2 → K²。K <b>只隨溫度變</b>。"],
          ["trap", ["寫「concentrations are equal」或「reaction stopped」→ 0 分。", "Kc 用 + 唔用 ×；漏次方。"]],
        ],
      },
      {
        h: "Le Chatelier's principle",
        min: 3.5,
        blocks: [
          ["key", "Equilibrium 受擾 → position shifts to <b>partially oppose</b> the change"],
          ["table", ["改變", "Position", "K"], [
            ["加 reactant / 抽走 product", "→ right", "不變"],
            ["↑ pressure", "→ fewer moles of gas", "不變"],
            ["↑ temperature", "→ endothermic direction", "<b>變</b>"],
            ["catalyst", "no shift，到 equilibrium 快啲", "不變"],
          ]],
          ["rhyme", "口訣 2", "你加我減，你熱我吸，你壓我縮", "答題四步：change → direction → reason（oppose）→ effect on yield / K。"],
          ["eg", "Haber：N₂ + 3H₂ ⇌ 2NH₃，ΔH = −92 kJ mol⁻¹。點解用 ~450 °C、~200 atm、Fe catalyst？", [
            "低溫 → 偏右（exothermic forward）但 rate 太慢 → 450 °C = <b>compromise</b> between yield and rate",
            "高壓 → 4 mol gas → 2 mol，偏右；但太高壓成本同安全問題",
            "Fe catalyst：rate ↑，唔改變 yield",
          ]],
          ["trap", ["升溫 exothermic 反應 → K <b>減少</b>，唔係只講 position。", "Catalyst 「shifts equilibrium」✗。"]],
        ],
      },
      {
        h: "Q vs K（延伸，快速睇）",
        min: 1.5,
        blocks: [
          ["key", "Reaction quotient Q：同 Kc 一樣嘅 expression，但用任何時刻嘅濃度。Q &lt; K → forward；Q &gt; K → reverse；Q = K → at equilibrium。"],
          ["note", "2025 guide 入面 Q 同 ICE 計 K 係 AHL；SL 主要考 expression、K 大細意義同 Le Chatelier。"],
        ],
      },
    ],
    summary: [
      "Rate 相等，濃度不變（唔係相等）",
      "產物做頭，係數做次方",
      "K 只怕溫度",
      "你加我減，你熱我吸，你壓我縮",
      "Catalyst 唔郁 position，只係快啲到",
      "工業條件 = yield、rate、cost compromise",
    ],
    practice: [
      { q: "Write the Kc expression for 2SO₂(g) + O₂(g) ⇌ 2SO₃(g).", m: 1, a: "Kc = [SO₃]² / ([SO₂]²[O₂])." },
      { q: "For the reaction in Q1 (ΔH &lt; 0), predict the effect on the equilibrium position and on Kc of increasing the temperature.", m: 2, a: "Position shifts left (endothermic direction) [1]; Kc decreases [1]." },
      { q: "Outline two characteristics of a system in dynamic equilibrium.", m: 2, a: "Rate of forward reaction equals rate of reverse reaction [1]; concentrations of reactants and products remain constant / closed system [1]." },
      { q: "State and explain the effect of increasing pressure on the yield of NH₃ in N₂(g) + 3H₂(g) ⇌ 2NH₃(g).", m: 2, a: "Yield increases [1]; equilibrium shifts to the side with fewer moles of gas (4 → 2) to oppose the increase [1]." },
    ],
  },

  "chem-11": {
    title: "Brønsted–Lowry · pH & Kw · Strong vs weak · Neutralisation",
    parts: [
      {
        h: "Brønsted–Lowry & conjugate pairs",
        min: 2.5,
        blocks: [
          ["key", "<b>Acid</b> = proton (H⁺) donor｜<b>Base</b> = proton acceptor｜<b>Conjugate pair</b> 相差一粒 H⁺｜<b>Amphiprotic</b>：可以 donate 又 accept（H₂O、HCO₃⁻、HSO₄⁻）"],
          ["eg", "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻：指出 conjugate pairs。", [
            "H₂O 畀 H⁺ → acid；conjugate base OH⁻",
            "NH₃ 收 H⁺ → base；conjugate acid NH₄⁺ ✅",
          ]],
          ["rhyme", "口訣 1", "畀 H 係酸，收 H 係鹼，差一粒係一對", ""],
          ["trap", ["Conjugate base of H₂SO₄ 係 HSO₄⁻，唔係 SO₄²⁻。", "Amphiprotic（proton）≠ amphoteric（酸鹼都反應，e.g. Al₂O₃）。"]],
        ],
      },
      {
        h: "pH & Kw",
        min: 3,
        blocks: [
          ["key", "pH = −log₁₀[H⁺]　[H⁺] = 10⁻ᵖᴴ　Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴（298 K）　pH + pOH = 14"],
          ["rhyme", "口訣 2", "差一級，差十倍", "pH 3 比 pH 5 嘅 [H⁺] 大 100 倍；稀釋 10 倍（strong acid）→ pH +1。"],
          ["eg", "求 0.0050 mol dm⁻³ Ba(OH)₂ 嘅 pH（298 K）。", [
            "[OH⁻] = 2 × 0.0050 = 0.010 mol dm⁻³（一粒 Ba(OH)₂ 兩粒 OH⁻）",
            "pOH = 2.00 → pH = <b>12.00</b> ✅",
          ]],
          ["note", "Kw 隨溫度變（ionisation 係 endothermic，T ↑ → Kw ↑ → pure water pH &lt; 7，但仍然 neutral 因為 [H⁺] = [OH⁻]）。"],
          ["trap", ["pH 嘅 d.p. = [H⁺] 嘅 s.f.（[H⁺] 2 s.f. → pH 2 d.p.）。", "Base 直接 −log[OH⁻] 就當 pH ✗。"]],
        ],
      },
      {
        h: "Strong vs weak & neutralisation",
        min: 3,
        blocks: [
          ["table", ["", "Strong (HCl, HNO₃, H₂SO₄)", "Weak (CH₃COOH, H₂CO₃)"], [
            ["Dissociation", "complete", "partial（⇌ equilibrium）"],
            ["同濃度 pH", "lower", "higher"],
            ["Conductivity", "higher（more ions）", "lower"],
            ["Rate with Mg / CaCO₃", "faster", "slower"],
            ["中和同 volume NaOH", "same（同 moles）", "same"],
          ]],
          ["rhyme", "口訣 3", "強弱講解離，濃稀講份量", "Strong/weak = 解離程度；concentrated/dilute = mol dm⁻³。"],
          ["note", "Reactions：acid + metal → salt + H₂；+ carbonate → salt + H₂O + CO₂；+ metal oxide/hydroxide → salt + H₂O（neutralisation, exothermic）。<br>Titration curve（strong/strong）：起點 pH ~1，equivalence 有 sharp jump，<b>pH = 7</b>；indicator 嘅 colour-change range 要喺 jump 入面。"],
          ["trap", ["寫「weak acid = dilute」✗。", "Weak acid 唔係中和少啲 NaOH——同 moles 就同 volume。"]],
        ],
      },
    ],
    summary: [
      "畀 H 係酸，收 H 係鹼，差一粒係一對",
      "pH = −log[H⁺]；差一級，差十倍",
      "Base：pOH → 14 − pOH",
      "Kw = 1.0 × 10⁻¹⁴ at 298 K",
      "強弱講解離，濃稀講份量",
      "同 moles 酸中和同 volume NaOH",
    ],
    practice: [
      { q: "Identify the two conjugate acid–base pairs in HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺.", m: 2, a: "HCO₃⁻ / CO₃²⁻ [1]; H₃O⁺ / H₂O [1]." },
      { q: "Calculate the pH of a solution with [OH⁻] = 2.5 × 10⁻³ mol dm⁻³ at 298 K.", m: 2, a: "[H⁺] = 1.0 × 10⁻¹⁴ / 2.5 × 10⁻³ = 4.0 × 10⁻¹² [1]; pH = 11.40 [1]." },
      { q: "Describe two experiments that distinguish 0.10 mol dm⁻³ HCl from 0.10 mol dm⁻³ CH₃COOH.", m: 2, a: "HCl has lower pH (pH meter / universal indicator) [1]; HCl has higher conductivity / reacts faster with Mg or CaCO₃ (more bubbles) [1]." },
      { q: "A solution of HNO₃ has pH 2.0. It is diluted by a factor of 100. State the new pH.", m: 1, a: "pH 4.0." },
    ],
  },

  "chem-12": {
    title: "Oxidation states · Half-equations · Cells · Organic redox",
    parts: [
      {
        h: "Oxidation states & half-equations",
        min: 3,
        blocks: [
          ["key", "<b>OIL RIG</b>：oxidation = loss of e⁻ / oxidation state ↑；reduction = gain / ↓<br><b>Oxidising agent</b> 自己被 reduce；<b>reducing agent</b> 自己被 oxidise"],
          ["rhyme", "口訣 1（酸性 half-equation）", "先配原子，水補氧，H⁺ 補氫，電子補電", "e.g. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O；Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O"],
          ["eg", "合併 MnO₄⁻ 同 Fe²⁺ → Fe³⁺ + e⁻。", [
            "Fe 嗰條 × 5，等電子數相同（5e⁻）",
            "<b>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</b>（電荷：+17 = +17 ✅）",
          ]],
          ["trap", ["Overall equation 仲有 e⁻ 未消 → 扣分。", "Oxidising agent 寫成「被 oxidise 嗰個」✗。"]],
        ],
      },
      {
        h: "Activity series & cells",
        min: 3,
        blocks: [
          ["key", "Activity series：越 reactive = stronger reducing agent；佢會 displace 較唔 reactive 嘅 metal ion（Zn + Cu²⁺ → Zn²⁺ + Cu）；H 以上嘅金屬同 dilute acid 出 H₂。"],
          ["table", ["", "Primary (voltaic) cell", "Electrolytic cell"], [
            ["能量", "chemical → electrical, spontaneous", "electrical → chemical, non-spontaneous"],
            ["Anode", "oxidation, <b>−</b>", "oxidation, <b>+</b>"],
            ["Cathode", "reduction, <b>+</b>", "reduction, <b>−</b>"],
          ]],
          ["rhyme", "口訣 2", "An Ox, Red Cat；電子行線，離子行橋", "Electrons 由 anode 經 external wire 去 cathode；salt bridge 畀 ions 行，保持 electrical neutrality。較 reactive 嘅金屬做 anode。"],
          ["note", "Secondary (rechargeable) cells：lead–acid、lithium-ion、NiCd——充電時反應倒轉。Fuel cell：持續供應 fuel。"],
          ["trap", ["寫「electrons flow through the salt bridge」→ 0。", "Voltaic 同 electrolytic 嘅 anode 正負號相反。"]],
        ],
      },
      {
        h: "Electrolysis & organic redox",
        min: 2.5,
        blocks: [
          ["key", "Molten salt electrolysis：metal 喺 cathode（e.g. Pb²⁺ + 2e⁻ → Pb），non-metal 喺 anode（2Br⁻ → Br₂ + 2e⁻）。"],
          ["table", ["Alcohol", "+ acidified K₂Cr₂O₇（orange → green）"], [
            ["primary", "aldehyde（<b>distil</b>）→ carboxylic acid（<b>reflux</b>, excess oxidant）"],
            ["secondary", "ketone"],
            ["tertiary", "no reaction（stays orange）"],
          ]],
          ["note", "Reduction：carboxylic acid / aldehyde → primary alcohol，ketone → secondary alcohol（LiAlH₄ / NaBH₄）；alkene + H₂（Ni catalyst）→ alkane。"],
          ["trap", ["想要 aldehyde 但寫 reflux ✗。", "顏色寫反（green → orange）。"]],
        ],
      },
    ],
    summary: [
      "OIL RIG；oxidising agent 自己被 reduce",
      "原子、水補氧、H⁺ 補氫、電子補電",
      "An Ox, Red Cat",
      "電子行線，離子行橋",
      "Voltaic anode 負；electrolytic anode 正",
      "1° → 醛（蒸）→ 酸（回流）；2° → 酮；3° 唔郁",
    ],
    practice: [
      { q: "Deduce the oxidation state of chromium in Cr₂O₇²⁻ and state whether it is oxidised or reduced when it forms Cr³⁺.", m: 2, a: "+6 [1]; reduced (oxidation state decreases +6 → +3) [1]." },
      { q: "20.00 cm³ of 0.0200 mol dm⁻³ KMnO₄ reacts exactly with Fe²⁺ (MnO₄⁻ : Fe²⁺ = 1 : 5). Calculate the amount of Fe²⁺.", m: 2, a: "n(MnO₄⁻) = 0.0200 × 0.02000 = 4.00 × 10⁻⁴ mol [1]; n(Fe²⁺) = 5 × 4.00 × 10⁻⁴ = 2.00 × 10⁻³ mol [1]." },
      { q: "In a Mg/Cu voltaic cell, identify the anode and state the direction of electron flow.", m: 2, a: "Mg is the anode (more reactive, oxidised) [1]; electrons flow from Mg to Cu through the external circuit [1]." },
      { q: "State the products at each electrode in the electrolysis of molten sodium chloride and give the half-equation at the cathode.", m: 3, a: "Cathode: sodium [1]; anode: chlorine [1]; Na⁺ + e⁻ → Na [1]." },
    ],
  },

  "chem-13": {
    title: "Radicals · Nucleophiles & electrophiles · Lewis acids",
    parts: [
      {
        h: "Radicals 自由基（R3.3）",
        min: 3,
        blocks: [
          ["key", "<b>Radical</b>：species with an unpaired electron（寫 Cl•）。<b>Homolytic fission</b>：共價鍵斷開，每邊攞一粒電子；需要 UV light。"],
          ["table", ["Step", "特徵", "CH₄ + Cl₂ 例子"], [
            ["Initiation", "0 radical → 2 radicals", "Cl₂ → 2Cl•（UV）"],
            ["Propagation", "1 radical in → 1 radical out", "CH₄ + Cl• → •CH₃ + HCl<br>•CH₃ + Cl₂ → CH₃Cl + Cl•"],
            ["Termination", "2 radicals → 0", "Cl• + •CH₃ → CH₃Cl；2•CH₃ → C₂H₆"],
          ]],
          ["rhyme", "口訣 1", "光開頭，一換一，二合一", "Alkanes 一般好 unreactive（strong C–C, C–H, non-polar），但 radical substitution 可以發生。"],
          ["trap", ["Propagation 寫成 CH₄ + Cl• → CH₃Cl + H• ✗（正確出 HCl + •CH₃）。", "漏寫 UV light 條件。"]],
        ],
      },
      {
        h: "Nucleophiles, electrophiles & Lewis（R3.4）",
        min: 3,
        blocks: [
          ["key", "<b>Heterolytic fission</b>：兩粒電子都去同一邊 → ions。<br><b>Nucleophile</b>：electron-rich，<b>donates a lone pair</b>（OH⁻, H₂O, NH₃, CN⁻）<br><b>Electrophile</b>：electron-deficient，<b>accepts an electron pair</b>（H⁺, NO₂⁺, δ+ Br in Br₂）"],
          ["rhyme", "口訣 2", "Nucleo 鍾意核（正），electro 鍾意電子", "Nucleophile 去攻擊 δ+ 碳；electrophile 去攻擊 C=C 嘅電子雲。"],
          ["key", "<b>Lewis acid</b> = electron-pair acceptor；<b>Lewis base</b> = electron-pair donor → 形成 <b>coordination bond</b>（e.g. BF₃ + NH₃ → H₃N→BF₃；Cu²⁺ + 6H₂O → [Cu(H₂O)₆]²⁺）"],
          ["trap", ["Nucleophile = Lewis base；electrophile = Lewis acid——definitions 一定要講 <b>electron pair</b>。", "Brønsted 講 H⁺；Lewis 講 electron pair，唔好混。"]],
        ],
      },
      {
        h: "Reactions 要識寫",
        min: 2.5,
        blocks: [
          ["table", ["反應", "類型", "例"], [
            ["halogenoalkane + OH⁻(aq)", "nucleophilic substitution", "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻"],
            ["alkene + Br₂", "electrophilic addition", "C₂H₄ + Br₂ → CH₂BrCH₂Br（orange → colourless）"],
            ["alkene + HBr", "electrophilic addition", "C₂H₄ + HBr → CH₃CH₂Br"],
            ["alkene + H₂O (steam, H₃PO₄)", "electrophilic addition", "C₂H₄ + H₂O → C₂H₅OH"],
            ["alkane + Cl₂ (UV)", "radical substitution", "CH₄ + Cl₂ → CH₃Cl + HCl"],
          ]],
          ["eg", "點樣分 hexane 同 hex-1-ene？", ["加 bromine water、搖勻：hex-1-ene <b>orange → colourless</b>（electrophilic addition）；hexane 冇變化（喺黑暗中）✅"]],
          ["trap", ["Bromine water 由「clear」變 colourless ✗——要寫 colourless，唔係 clear。", "SL 寫 equation + 反應類型；curly-arrow mechanism（SN1/SN2）係 AHL。"]],
        ],
      },
    ],
    summary: [
      "Radical = unpaired electron；homolytic 一人一粒",
      "光開頭，一換一，二合一",
      "Nucleophile 畀電子對，electrophile 收電子對",
      "Lewis acid 收、Lewis base 畀 → coordination bond",
      "Halogenoalkane + OH⁻ = nucleophilic substitution",
      "Alkene + Br₂ = electrophilic addition，橙變無色",
    ],
    practice: [
      { q: "Write equations for the initiation and two propagation steps of the reaction of methane with bromine in UV light.", m: 3, a: "Br₂ → 2Br• [1]; CH₄ + Br• → •CH₃ + HBr [1]; •CH₃ + Br₂ → CH₃Br + Br• [1]." },
      { q: "Define nucleophile and give one example.", m: 2, a: "Species that donates a pair of electrons (to form a covalent bond) / electron-rich [1]; e.g. OH⁻, NH₃, H₂O, CN⁻ [1]." },
      { q: "Identify the Lewis acid and Lewis base in BF₃ + NH₃ → F₃B–NH₃, explaining your answer.", m: 2, a: "NH₃ is the Lewis base – donates its lone pair [1]; BF₃ is the Lewis acid – accepts the electron pair (B has incomplete octet) forming a coordination bond [1]." },
      { q: "State the reagent and condition to convert ethene into ethanol and the type of reaction.", m: 2, a: "Steam with (phosphoric) acid catalyst / high temperature and pressure [1]; electrophilic addition [1]." },
    ],
  },
});
