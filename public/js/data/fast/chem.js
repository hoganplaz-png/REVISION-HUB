/* ⏱ 10-minute fast notes · Chemistry SL, 2025 guide (format: see js/fastnotes.js). */
IB.addFast({
  "chem-1": {
    title: "Elements & mixtures · Separation · States of matter · Kinetic theory",
    intro: "S1.1：粒子模型一條線貫穿——物質分類、分離方法、溫度 = 平均 KE、變態 = 拆 IMF。每個 part 有時間建議，最後有口訣同練習。",
    parts: [
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "溫度睇動能，變態拆 IMF", "T(K) ∝ average KE；change of state 期間 T 不變（能量用嚟 overcome IMF）。"],
          ["grid", [
            ["S1.1", "元素一種、化合物鍵結、混合物物理", "Element = one type of atom；compound = chemically combined, fixed ratio；mixture = physically combined, variable ratio"],
            ["S1.1", "均勻睇唔到界，唔均勻睇到界", "Homogeneous (one phase) vs heterogeneous (visible different phases)"],
            ["S1.1", "固體震、液體滑、氣體飛", "Solid vibrates in fixed positions；liquid slides past；gas moves freely, far apart"],
            ["S1.1", "溫度 K = °C + 273", "Temperature in K is proportional to average kinetic energy"],
            ["S1.1", "變態唔升溫，能量拆 IMF", "Melting / boiling: energy overcomes IMF, KE unchanged"],
            ["S1.1", "熔、蒸、升華要吸熱；凝、凍、凝華放熱", "Endothermic: melting, vaporisation, sublimation；exothermic: the reverse"],
            ["S1.1", "沸騰成鑊滾，蒸發淨係面層", "Boiling: throughout liquid at b.p.；evaporation: surface only, any temperature"],
            ["S1.1", "唔溶就隔、溶咗就蒸、b.p. 差就蒸餾", "Filtration / evaporation or crystallisation / distillation"],
          ]],
          ["table", ["Constant / fact", "Value", "Use it when…"], [
            ["Kelvin conversion", "T(K) = T(°C) + 273", "any link between temperature and KE or gas laws"],
            ["Absolute zero", "0 K = −273 °C", "particles have minimum kinetic energy"],
            ["Melting / boiling point of water", "0 °C / 100 °C (273 K / 373 K) at 1 atm", "heating-curve questions"],
          ]],
        ],
      },
      {
        h: "Elements · compounds · mixtures 物質分類",
        min: 2,
        blocks: [
          ["key", "<b>Element</b>：a substance made of only one type of atom (same atomic number).<br><b>Compound</b>：a substance made of two or more elements chemically combined in a fixed ratio; properties differ from the elements; can only be split by chemical reactions.<br><b>Mixture</b>：two or more substances physically combined in variable proportions; each keeps its own properties; separated by physical methods."],
          ["table", ["", "Element", "Compound", "Mixture"], [
            ["Composition", "one type of atom", "different atoms, fixed ratio", "variable ratio"],
            ["Bonding between components", "—", "chemical bonds", "none (physical mixing)"],
            ["Separation", "cannot be split chemically", "chemical reaction needed", "physical methods"],
            ["Example", "Fe, O₂, Cl₂", "NaCl, H₂O, CO₂", "air, brass, seawater, sand + water"],
          ]],
          ["table", ["Mixture type", "Meaning", "Examples"], [
            ["Homogeneous", "uniform composition throughout, one phase, can’t see boundaries", "salt solution, air, brass (alloy)"],
            ["Heterogeneous", "non-uniform, separate phases visible", "sand + water, oil + water, granite"],
          ]],
          ["rhyme", "口訣 1", "元素一種、化合固定比、混合隨意", "Iron + sulfur mixed = mixture (magnet separates). Heated → FeS = compound (magnet fails). 呢個例子可以直接答「點分辨」。"],
          ["trap", ["O₂、H₂、Cl₂ 係 element（同種原子）唔係 compound——molecule 唔等如 compound。", "Air / brass / seawater 都係 homogeneous <b>mixture</b>，唔好寫 compound。", "Compound 嘅 ratio 固定（H₂O 永遠 2 : 1）；mixture 比例可變。"]],
        ],
      },
      {
        h: "Kinetic theory & changes of state 粒子模型",
        min: 3,
        blocks: [
          ["table", ["", "Solid", "Liquid", "Gas"], [
            ["Arrangement", "regular, closely packed", "irregular, close together", "random, far apart"],
            ["Movement", "vibrate about fixed positions", "slide / move past each other", "rapid random motion in straight lines"],
            ["IMF", "strongest", "moderate", "negligible (ideal) / weak"],
            ["Shape and volume", "fixed shape, fixed volume", "fixed volume, takes shape of container", "no fixed shape or volume (fills container)"],
            ["Compressible?", "no", "hardly", "yes (large gaps)"],
            ["Density", "high", "high", "very low"],
          ]],
          ["key", "<b>Kinetic molecular theory</b>：all matter is made of particles in constant motion. <b>Temperature (in K) is proportional to the average kinetic energy</b> of the particles. At the same temperature, all substances have the same average KE (lighter particles move faster).<br>T(K) = T(°C) + 273　　0 K = −273 °C (absolute zero, minimum KE)"],
          ["table", ["Change", "From → to", "Energy"], [
            ["Melting", "solid → liquid", "endothermic (absorbs energy)"],
            ["Freezing", "liquid → solid", "exothermic"],
            ["Vaporisation (boiling / evaporation)", "liquid → gas", "endothermic"],
            ["Condensation", "gas → liquid", "exothermic"],
            ["Sublimation", "solid → gas (e.g. CO₂, I₂)", "endothermic"],
            ["Deposition", "gas → solid", "exothermic"],
          ]],
          ["rhyme", "口訣 2", "變態唔升溫，能量拆 IMF", "During a change of state the temperature stays constant because the energy supplied is used to overcome the intermolecular forces (or is released as they form) and NOT to increase the average KE."],
          ["table", ["Boiling", "Evaporation"], [
            ["at one fixed temperature (b.p.)", "at any temperature below b.p."],
            ["throughout the liquid (bubbles form)", "from the surface only"],
            ["all particles have enough KE to break free", "only the highest-KE particles escape → remaining liquid cools"],
          ]],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain the heating curve of water heated steadily from −20 °C to 120 °C.", [
            "−20 → 0 °C (ice warms)：energy ↑ average KE of vibrating particles → temperature rises",
            "0 °C (melting, flat line)：energy used to overcome intermolecular forces (hydrogen bonds) between particles; average KE and temperature constant",
            "0 → 100 °C (liquid warms)：average KE increases → temperature rises",
            "100 °C (boiling, longer flat line)：energy overcomes the remaining intermolecular forces completely and particles move far apart; KE constant. This line is longer because more energy is needed to separate particles fully",
            "100 → 120 °C (steam)：KE increases → temperature rises ✅",
          ]],
          ["note", "Gas pressure = collisions of gas particles with the container walls. Heat a gas in a rigid container → faster particles → more frequent, harder collisions → pressure ↑ (more in chem-3)."],
          ["trap", ["Melting / boiling 期間寫「temperature increases」或「KE increases」→ 0 分。", "寫「covalent bonds break when water boils」✗ ——只係 intermolecular forces。", "冰融化要寫 intermolecular forces overcome，唔係 bonds within molecules。"]],
        ],
      },
      {
        h: "Separation techniques 分離方法",
        min: 3,
        blocks: [
          ["table", ["Method", "Separates", "Property used", "Example"], [
            ["Filtration", "insoluble solid from liquid", "particle size / insoluble", "sand from water"],
            ["Solvation (dissolving)", "soluble from insoluble solid", "solubility", "add water to salt + sand, then filter"],
            ["Evaporation", "soluble solid from solution (solvent not needed)", "solvent evaporates, solute stays", "salt from brine"],
            ["Crystallisation", "pure crystals of solute (heat-sensitive or hydrated)", "solubility falls on cooling", "CuSO₄·5H₂O from solution"],
            ["Simple distillation", "solvent from solution; or liquids with large b.p. difference", "boiling point", "pure water from salt water"],
            ["Fractional distillation", "miscible liquids with similar b.p.", "boiling point", "ethanol (78 °C) + water (100 °C)"],
            ["Paper chromatography", "soluble coloured components", "relative attraction to stationary vs mobile phase", "ink dyes, food colourings"],
          ]],
          ["flow", [["① 溶", "salt + sand: add water, stir (solvation) — salt dissolves"], ["② 濾", "filter: sand = residue on filter paper; wash and dry"], ["③ 蒸", "evaporate filtrate until crystals form (crystallise) → dry salt"]]],
          ["rhyme", "口訣 3", "唔溶就隔，溶咗就蒸，b.p. 差就蒸餾", "Pick the method from ONE property: solubility → filter / evaporate / crystallise；boiling point → distillation；attraction to phases → chromatography."],
          ["note", "<b>Distillation set-up (exam description)</b>：flask + heat source → thermometer bulb level with the side arm (reads vapour temperature) → condenser with cold water IN at the bottom, OUT at the top → collecting flask. Anti-bumping granules prevent violent boiling. <b>Fractional</b>: fractionating column gives many repeated vaporisation–condensation cycles; the component with the lower b.p. (ethanol) reaches the top first and is collected at its b.p.<br><b>Chromatography</b>: pencil baseline (ink would dissolve), spot above solvent level, components with greater attraction to the stationary phase move less. Rf calculation is in chem-4."],
          ["trap", ["Salt solution 用 filtration 分 ✗（ions 太細，穿過 filter paper）→ evaporation / crystallisation。", "Ethanol + water 用 simple distillation ✗ → b.p. 太近，要 fractional。", "Chromatography 基線用 ink pen ✗ → pencil。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "“Temperature increases” during melting / boiling", "Temperature constant; energy overcomes IMF"],
            ["2", "Boiling breaks covalent bonds", "Only intermolecular forces (molecular substances)"],
            ["3", "Element = compound for O₂, Cl₂", "Same atoms → element"],
            ["4", "Air / brass called compounds", "Homogeneous mixtures"],
            ["5", "Salt solution filtered", "Evaporate / crystallise"],
            ["6", "Ethanol + water by simple distillation", "Fractional distillation (close b.p.)"],
            ["7", "°C used for KE comparison", "Use K: K = °C + 273"],
          ]],
          ["check", [
            "Define element, compound, mixture, homogeneous, heterogeneous",
            "Describe solid / liquid / gas in terms of particle arrangement, movement and forces",
            "Name all six changes of state and say which are endothermic",
            "Explain a heating curve and why temperature is constant during a change of state",
            "Explain boiling vs evaporation",
            "Choose and describe filtration, evaporation / crystallisation, distillation, fractional distillation, chromatography",
          ]],
        ],
      },
    ],
    summary: [
      "元素一種原子、化合物固定比例、混合物物理混合",
      "變態唔升溫，能量用嚟拆 IMF；熔、蒸、升華吸熱",
      "T(K) ∝ 平均 KE；K = °C + 273",
      "唔溶就隔，溶咗就蒸，b.p. 差就蒸餾",
    ],
    practice: [
      { q: "S1.1 Which is a heterogeneous mixture?", o: ["A. brass", "B. air", "C. sand and water", "D. sodium chloride solution"], m: 1, a: "<b>C</b>. Visible separate phases. A, B and D are homogeneous." },
      { q: "S1.1 Which method separates a mixture of ethanol and water?", o: ["A. filtration", "B. fractional distillation", "C. evaporation to dryness", "D. simple distillation"], m: 1, a: "<b>B</b>. Miscible liquids with different but fairly close boiling points (78 °C and 100 °C)." },
      { q: "S1.1 What happens to the particles while a solid melts at its melting point?", o: ["A. their average kinetic energy increases", "B. the temperature rises", "C. energy is used to overcome forces between particles", "D. particles stop moving"], m: 1, a: "<b>C</b>. Temperature and average KE stay constant during melting." },
      { q: "Explain why the temperature of a pure substance stays constant while it boils, even though heat is still supplied.", m: 3, a: "Energy supplied is used to overcome the intermolecular forces between particles [1]; it does not increase the average kinetic energy of the particles [1]; temperature is proportional to average KE, so temperature is constant [1]." },
      { q: "Describe how you would obtain a sample of dry salt from a mixture of salt and sand.", m: 3, a: "Add water and stir to dissolve the salt (solvation) [1]; filter, sand stays as the residue [1]; evaporate the filtrate (crystallise) and dry the crystals [1]." },
    ],
  },
  "chem-1b": {
    title: "Nuclear atom · Ions · Isotopes · Ar & mass spectra",
    intro: "S1.2：質子定身份，中子定重量，電子定化學。數粒子、計 Ar、讀 mass spectrum 係必考。每個 part 有時間建議，最後有口訣同練習。",
    parts: [
      {
        h: "Nuclear atom & ions 原子結構",
        min: 3,
        blocks: [
          ["table", ["Particle", "Relative mass", "Relative charge", "Location"], [
            ["proton", "1", "+1", "nucleus"],
            ["neutron", "1", "0", "nucleus"],
            ["electron", "5 × 10⁻⁴ (≈ 1/1840)", "−1", "outside nucleus, in energy levels"],
          ]],
          ["key", "Nuclear symbol \\(^{A}_{Z}X\\)：<b>A = mass number = protons + neutrons</b>，<b>Z = atomic number = protons</b>。<br>neutrons = A − Z　　neutral atom: electrons = protons　　<b>ion: electrons = Z − charge</b>"],
          ["rhyme", "口訣 4", "質子定身份，中子定重量，電子定電荷", "Z decides which element it is；neutrons add mass but no charge；electrons are gained (anion, negative) or lost (cation, positive)."],
          ["eg", "<b>P2 · State · 2 marks</b>　State the numbers of protons, neutrons and electrons in (a) ³⁵Cl⁻ (Z = 17) (b) ²⁷Al³⁺ (Z = 13) (c) ⁵⁶Fe³⁺ (Z = 26).", [
            "(a) p = 17；n = 35 − 17 = 18；e = 17 − (−1) = <b>18</b>",
            "(b) p = 13；n = 27 − 13 = 14；e = 13 − 3 = <b>10</b>",
            "(c) p = 26；n = 56 − 26 = 30；e = 26 − 3 = <b>23</b> ✅",
          ]],
          ["table", ["Species", "Protons", "Neutrons", "Electrons"], [
            ["¹²C", "6", "6", "6"],
            ["¹⁶O²⁻", "8", "8", "10"],
            ["²³Na⁺", "11", "12", "10"],
            ["⁷⁹Br⁻", "35", "44", "36"],
            ["³⁴S²⁻", "16", "18", "18"],
          ]],
          ["note", "<b>Isoelectronic</b> = same number of electrons. e.g. N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺, Al³⁺ all have 10; S²⁻, Cl⁻, Ar, K⁺, Ca²⁺ all have 18. 呢個係 MCQ 常客。"],
          ["trap", ["Anion 係<b>加</b>電子：Cl⁻ 有 18 個，唔係 16。", "Mass number 唔係 relative atomic mass（A 係整數、Ar 係加權平均）。", "Neutron 數 = A − Z，唔好用 Ar 計。"]],
        ],
      },
      {
        h: "Isotopes · Ar · mass spectra",
        min: 4,
        blocks: [
          ["key", "<b>Isotopes</b>: atoms of the same element (same number of protons) with different numbers of neutrons (different mass numbers).<br><b>Relative atomic mass A<sub>r</sub></b>: the weighted average (mean) mass of an atom of an element, relative to 1/12 of the mass of an atom of carbon-12. No units."],
          ["table", ["", "Isotopes of the same element"], [
            ["Same", "protons, electrons, electron configuration → <b>same chemical properties</b> (same reactions)"],
            ["Different", "neutrons, mass → <b>different physical properties</b>: density, rate of diffusion, mass spectrum position, (slightly) melting / boiling point"],
          ]],
          ["key", "\\(A_r = \\dfrac{\\sum(\\text{isotopic mass} \\times \\%\\text{ abundance})}{100}\\)　or　\\(\\dfrac{\\sum(\\text{mass} \\times \\text{relative abundance})}{\\sum \\text{relative abundance}}\\)"],
          ["note", "<b>Mass spectrum</b>：x-axis = m/z (mass-to-charge ratio; for 1+ ions m/z = mass number)，y-axis = relative abundance (height ∝ abundance). One peak = one isotope. Process: vaporise → ionise (1+) → accelerate → deflect in a magnetic field (lighter ions deflect more) → detect."],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　A sample of magnesium has ²⁴Mg 79.0%, ²⁵Mg 10.0%, ²⁶Mg 11.0%. Calculate A<sub>r</sub> to 2 d.p.", [
            "(24 × 79.0) + (25 × 10.0) + (26 × 11.0) = 1896 + 250 + 286 = 2432",
            "2432 ÷ 100 = <b>24.32</b> ✅ (no unit)",
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks (data from spectrum)</b>　A mass spectrum of neon shows peak heights: m/z 20 = 90.5, m/z 21 = 0.3, m/z 22 = 9.2. Calculate A<sub>r</sub>.", [
            "Heights are relative abundances; total = 90.5 + 0.3 + 9.2 = 100.0",
            "(20 × 90.5 + 21 × 0.3 + 22 × 9.2) ÷ 100 = (1810 + 6.3 + 202.4) ÷ 100 = 2018.7 ÷ 100 = <b>20.19</b> ✅",
          ]],
          ["eg", "<b>P1B / P2 · Calculate · 2 marks</b>　Chlorine peaks at m/z 35 and 37 with height ratio 3 : 1. Calculate A<sub>r</sub>.　「畀比例就除總份數」", [
            "Total parts = 3 + 1 = 4（<b>not</b> 100）",
            "(35 × 3 + 37 × 1) ÷ 4 = (105 + 37) ÷ 4 = 142 ÷ 4 = <b>35.5</b> ✅",
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b>　Gallium (A<sub>r</sub> = 69.72) has isotopes ⁶⁹Ga and ⁷¹Ga. Find the % abundance of each.　「未知設 x」", [
            "Let ⁶⁹Ga = x %, so ⁷¹Ga = (100 − x) %",
            "69x + 71(100 − x) = 69.72 × 100 = 6972",
            "7100 − 2x = 6972 → 2x = 128 → x = <b>64 %</b> (⁶⁹Ga)，⁷¹Ga = <b>36 %</b>",
            "Check: 69 × 64 + 71 × 36 = 4416 + 2556 = 6972 ✅",
          ]],
          ["eg", "<b>P1 MCQ-style · 1-2 marks</b>　Boron A<sub>r</sub> = 10.81 and has only ¹⁰B and ¹¹B. Find % ¹⁰B.", [
            "10x + 11(100 − x) = 1081 → 1100 − x = 1081 → x = <b>19 %</b> ¹⁰B (81 % ¹¹B) ✅",
          ]],
          ["note", "<b>常考</b>：Ar from abundances (calculate, 2 marks, give 2 d.p.)、unknown abundance、heating curve explain (3 marks: IMF / not KE / T ∝ KE)、isotopes “same chemical, different physical” (2 marks)、separation method choice (outline/describe 2-3 marks)。"],
          ["rhyme", "口訣 5", "Ar 睇加權，比例除總和，未知設 x", "Which peak is tallest ≈ closest to A<sub>r</sub>：A<sub>r</sub> = 35.5 means ³⁵Cl is the more abundant isotope. 用嚟 sanity check。"],
          ["trap", ["Ar 寫 g mol⁻¹ ✗（relative → 冇單位）；molar mass 先有 g mol⁻¹。", "畀 ratio 但照除 100。", "答案落咗兩個 isotope 質量之外 → 一定計錯。", "Isotope 化學性質唔同 ✗ → 電子排列一樣。"]],
        ],
      },
      {
        h: "長題拆解法",
        min: 2,
        blocks: [
          ["table", ["Move", "What to do"], [
            ["① 圈數", "Circle masses, abundances, peak heights, charges. Spot: ratio or %? number of isotopes?"],
            ["② 認題型", "Count particles / Ar from data / unknown abundance / explain a graph / choose a separation method"],
            ["③ 寫式", "Write formula first (A − Z, Z − charge, Σ(m × %) ÷ 100), then substitute"],
            ["④ 查", "Ar between lightest and heaviest isotope? Units? 2 d.p.?"],
          ]],
          ["table", ["If the question says…", "It is…", "Do this"], [
            ["“mass spectrum”, “m/z”, “peak”", "Ar from data", "Σ(m/z × height) ÷ Σ heights"],
            ["“Ar is …, find the abundance”", "unknown x", "x and 100 − x → solve"],
            ["“how many neutrons / electrons”", "particle count", "A − Z ; Z − charge"],
            ["“explain why the temperature stays constant”", "change of state", "energy → overcome IMF, not KE"],
            ["“separate a mixture of …”", "choose a technique", "name the property, then the method"],
            ["“same chemical properties but different …”", "isotopes", "electrons same ; neutrons / mass differ"],
          ]],
          ["eg", "<b>P2 · 4 marks (calculate + state + explain)</b>　Silicon’s mass spectrum shows peaks: m/z 28 (92.2), m/z 29 (4.7), m/z 30 (3.1). (a) Calculate A<sub>r</sub>. (b) State the number of neutrons in the heaviest isotope (Z = 14). (c) Explain why ²⁸Si and ³⁰Si react identically with oxygen.", [
            "(a) (28 × 92.2 + 29 × 4.7 + 30 × 3.1) ÷ 100 = (2581.6 + 136.3 + 93.0) ÷ 100 = 28.109 → <b>28.11</b> [M1 formula, A1 value]",
            "(b) neutrons = 30 − 14 = <b>16</b> [1]",
            "(c) Same number of electrons / same electron configuration, so the same chemical properties; they differ only in the number of neutrons (mass) [1]",
          ]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["State / Name","One fact, no reason. 1 mark, one short line."],["Define","Exact textbook wording: e.g. A<sub>r</sub> = weighted mean mass of atoms relative to 1/12 of ¹²C."],["Explain","Cause + effect: IMF overcome, not KE; link to temperature ∝ average KE."],["Calculate","Show formula / substitution; A<sub>r</sub> answer to 2 d.p. (data booklet gives 2 d.p.)."],["Outline / Describe","Ordered steps for a separation: dissolve, filter, evaporate."],["Deduce","Use given data (A, Z, charge) to give p, n, e."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Particle count of ion","p = Z; n = A − Z; e = Z − charge."],["Ar from mass spectrum","Σ(m/z × abundance) ÷ Σ abundance, 2 d.p."],["Unknown abundance","x and (100 − x); solve; check Ar sits between the isotopes."],["Heating curve / state change","Flat part: energy used to overcome IMF, KE (temperature) constant."],["Choose separation","Name property difference (solubility, b.p.) then the technique."]]],
          ["note", "Data booklet 有 periodic table 的 A<sub>r</sub>，唔使背。1 mark ≈ 1 個 point：問 Explain 2 分就要寫兩個獨立 point。Accept: “IMF” 可；Reject: “bonds break” 當 boiling 嘅原因。"],
        ],
      },
      {
        h: "S1.2 口訣 + 失分位",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "質子定身份，中子定重量，電子定化學", "Proton number identifies the element；neutrons change the mass (isotopes)；electrons decide the chemistry."],
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Cl⁻ has 16 electrons", "Anion gains: 17 + 1 = 18"],
            ["2", "neutrons = Ar − Z", "Use mass number: A − Z"],
            ["3", "Isotopes have different chemical properties", "Same electrons → same chemistry"],
            ["4", "Ar given units g mol⁻¹", "Ar has no units"],
            ["5", "Divide by 100 when given a ratio", "Divide by the sum of ratio parts"],
          ]],
          ["check", [
            "Define isotope, mass number and A<sub>r</sub>",
            "Count p, n, e in atoms and ions; spot isoelectronic species",
            "Calculate A<sub>r</sub> from abundances or a mass spectrum, including ratios and unknown x",
          ]],
        ],
      },
    ],
    summary: [
      "A = p + n；中子 = A − Z；離子電子 = Z − 電荷",
      "Isotopes：化學一樣（電子），物理唔同（質量）",
      "Ar = Σ(質量 × %) ÷ 100；畀比例除總份數；未知設 x",
      "Ar 冇單位，molar mass 先有 g mol⁻¹",
    ],
    practice: [
      { q: "S1.2 How many electrons are in one ion of \\(^{59}_{27}\\mathrm{Co}^{2+}\\)?", o: ["A. 25", "B. 27", "C. 29", "D. 32"], m: 1, a: "<b>A</b>. 27 − 2 = 25 electrons (neutrons would be 59 − 27 = 32)." },
      { q: "S1.2 Which species has the same number of electrons as an argon atom?", o: ["A. Cl⁻", "B. Na⁺", "C. O²⁻", "D. Mg²⁺"], m: 1, a: "<b>A</b>. Ar = 18; Cl⁻ = 17 + 1 = 18. (Na⁺, O²⁻, Mg²⁺ all have 10.)" },
      { q: "S1.2 An element has two isotopes of mass 10 and 12 and A<sub>r</sub> = 10.8. What is the % abundance of the lighter isotope?", o: ["A. 20", "B. 40", "C. 60", "D. 80"], m: 1, a: "<b>C</b>. 10x + 12(100 − x) = 1080 → 1200 − 2x = 1080 → x = 60." },
      { q: "State the number of protons, neutrons and electrons in \\(^{79}_{35}\\mathrm{Br}^{-}\\).", m: 2, a: "35 protons and 44 neutrons [1]; 36 electrons [1]." },
      { q: "Define relative atomic mass.", m: 2, a: "The weighted average / mean mass of an atom of an element [1] relative to 1/12 of the mass of an atom of carbon-12 [1]." },
      { q: "A sample of copper contains 69.2 % ⁶³Cu and 30.8 % ⁶⁵Cu. Calculate its relative atomic mass to 2 d.p.", m: 2, a: "(63 × 69.2 + 65 × 30.8) ÷ 100 [1] = (4359.6 + 2002) ÷ 100 = 63.62 [1]." },
      { q: "A mass spectrum of an element shows peaks at m/z 24, 25 and 26 with heights 79, 10 and 11. Calculate A<sub>r</sub> and state which isotope is most abundant.", m: 3, a: "(24 × 79 + 25 × 10 + 26 × 11) ÷ 100 [1] = 24.32 [1]; ²⁴Mg / m/z 24 is most abundant (tallest peak) [1]." },
      { q: "Gallium has two isotopes, ⁶⁹Ga and ⁷¹Ga, and A<sub>r</sub> = 69.72. Determine the percentage abundance of ⁶⁹Ga.", m: 3, a: "Let ⁶⁹Ga = x: 69x + 71(100 − x) = 6972 [1]; 7100 − 2x = 6972 [1]; x = 64 % (⁷¹Ga = 36 %) [1]." },
      { q: "Explain why ³⁵Cl and ³⁷Cl have the same chemical properties but different physical properties such as density.", m: 2, a: "Same number of electrons / same electron configuration, so the same chemical properties [1]; different numbers of neutrons, so different mass and hence different density [1]." },
    ],
  },

  "chem-2": {
    title: "Emission spectra · Sublevels & orbitals · Configurations · First IE",
    intro: "S1.3：光譜證明能級係分立；填電子三原則（Aufbau、Pauli、Hund）；4s 先入後出；IE 嘅 dip 用 sublevel 同 pair repulsion 解釋。",
    parts: [
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "跌落放光成線譜，由低填起先坐後 pair，4s 先入後出", "Emission = electron falls to lower level (line spectrum, discrete levels)；filling = lowest energy first, one per orbital, then pair with opposite spin；transition metals lose 4s first."],
          ["grid", [
            ["S1.3", "跌落嚟放光，升上去吸光", "Emission: higher → lower level, photon emitted"],
            ["S1.3", "一條線 = 一個固定能量差", "Discrete levels → line (not continuous) spectrum"],
            ["S1.3", "越高層越逼，線越高頻越密", "Convergence at high frequency / energy"],
            ["S1.3", "n = 1 紫外、n = 2 可見、n = 3 紅外", "Lyman UV / Balmer visible / Paschen IR"],
            ["S1.3", "高頻 = 短波長 = 高能量", "E = hν ; c = λν"],
            ["S1.3", "s2 p6 d10 f14；level 2n²", "Orbitals 1, 3, 5, 7 ; electrons 2, 6, 10, 14"],
            ["S1.3", "1s 2s 2p 3s 3p 4s 3d 4p", "Aufbau order up to Z = 36"],
            ["S1.3", "Aufbau 由低填", "Lowest energy sublevel first"],
            ["S1.3", "Pauli 一格兩個，spin 相反", "Max 2 electrons per orbital, opposite spins"],
            ["S1.3", "Hund 先逐個坐，同 spin，再 pair", "Degenerate orbitals singly occupied first, parallel spins"],
            ["S1.3", "鉻銅半滿全滿", "Cr 3d⁵4s¹ ; Cu 3d¹⁰4s¹"],
            ["S1.3", "4s 先入後出", "Transition metals lose 4s electrons before 3d"],
            ["S3.1", "IE 要 gaseous", "X(g) → X⁺(g) + e⁻"],
            ["S3.1", "Al 入 3p、S 有 pair 相斥", "Two dips in period 3"],
          ]],
          ["table", ["Constant / fact", "Value", "Use it when…"], [
            ["Max electrons in level n", "2n² (2, 8, 18, 32)", "any “how many electrons in shell n”"],
            ["Orbitals in level n", "n² (1, 4, 9, 16)", "counting orbitals"],
            ["Sublevels in level n", "n (n = 1: s ; 2: s p ; 3: s p d ; 4: s p d f)", "listing sublevels"],
            ["Planck relation", "E = hν ; h = 6.63 × 10⁻³⁴ J s", "photon energy (data booklet)"],
            ["Wave equation", "c = λν ; c = 3.00 × 10⁸ m s⁻¹", "frequency ↔ wavelength"],
            ["EM regions (increasing λ)", "UV (&lt; 400 nm) · visible (400–700 nm) · IR (&gt; 700 nm)", "H spectrum region"],
          ]],
        ],
      },
      {
        h: "Emission spectra 發射光譜",
        min: 3,
        blocks: [
          ["key", "Electrons occupy discrete (quantised) energy levels. When an electron falls from a <b>higher to a lower</b> level, the energy difference is emitted as one photon of specific frequency: <b>ΔE = hν</b>. Each line of the <b>line (emission) spectrum</b> = one transition. A continuous spectrum (white light) has no gaps; a line spectrum has only certain frequencies, which is evidence for discrete energy levels."],
          ["table", ["Series (H atom)", "Electron falls to…", "Region", "記法"], [
            ["Lyman", "n = 1", "ultraviolet (UV)", "最大跌幅 → 最高能量"],
            ["Balmer", "n = 2", "visible", "中等 → 睇得到"],
            ["Paschen", "n = 3", "infrared (IR)", "細跌幅 → 最低能量"],
          ]],
          ["rhyme", "口訣 1", "越高層越逼，線越高頻越密", "Energy levels get closer together as n increases, so the energy differences (and lines) get closer together at high frequency: the lines <b>converge</b>. The convergence limit = electron removed completely (n = ∞)."],
          ["table", ["Higher frequency means…", "Direction"], [
            ["Photon energy", "higher (E = hν)"],
            ["Wavelength", "shorter (c = λν)"],
            ["Transition", "larger energy gap, e.g. n = 2 → 1 &gt; n = 3 → 2"],
          ]],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why the emission spectrum of hydrogen is a series of discrete lines which converge at high frequency.", [
            "Electrons are in discrete (quantised) energy levels; when they fall from a higher to a lower level a photon of one specific energy / frequency is emitted [1]",
            "Only certain energy differences are possible, so only certain frequencies appear: lines, not a continuum [1]",
            "Energy levels get closer together at higher energy (as n increases), so the lines converge towards high frequency [1] ✅",
          ]],
          ["eg", "<b>P1 MCQ</b>　Which transition in a hydrogen atom emits radiation of the highest frequency? n = 2 → 1 · n = 3 → 2 · n = 4 → 3 · n = 1 → 2", [
            "Emission = falling, so n = 1 → 2 is absorption (rule out)",
            "Largest gap in the energy level diagram is between n = 1 and n = 2 → <b>n = 2 → 1</b> ✅",
          ]],
          ["note", "<b>Sketch / annotate</b> (常考)：draw horizontal lines for n = 1, 2, 3, 4… getting closer upward; vertical arrows pointing DOWN; label arrows into n = 1 as UV, into n = 2 as visible, into n = 3 as IR; label the energy axis “Energy” with n = ∞ at the top. Arrow tips down = emission."],
          ["trap", ["Emission = 跌落嚟（放光）；absorption = 升上去。方向寫錯即失分。", "「n = 2 嘅線係 UV」✗ → n = 1 先係 UV，n = 2 係 visible。", "Lines converge 係因為 <b>energy levels</b> 靠近，唔係「electrons 靠近」。", "Continuous vs line spectrum：要識講白光係 continuous。"]],
        ],
      },
      {
        h: "Sublevels · orbitals · shells",
        min: 2.5,
        blocks: [
          ["table", ["Sublevel", "Orbitals", "Max electrons", "Shape", "First appears in shell"], [
            ["s", "1", "2", "spherical", "n = 1"],
            ["p", "3 (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)", "6", "dumbbell", "n = 2"],
            ["d", "5", "10", "(not required)", "n = 3"],
            ["f", "7", "14", "(not required)", "n = 4"],
          ]],
          ["key", "<b>Orbital</b>: a region of space around the nucleus where there is a high probability of finding an electron; holds max 2 electrons.<br>Shell n holds <b>2n²</b> electrons: 2, 8, 18, 32.　Higher n = higher energy, further from nucleus.<br>Energy order (up to Z = 36): <b>1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p</b>"],
          ["rhyme", "口訣 2", "Aufbau 由低填、Pauli 兩個反向、Hund 先逐個坐", "<b>Aufbau</b>: fill lowest energy first. <b>Pauli exclusion</b>: max two electrons per orbital, with opposite spins. <b>Hund’s rule</b>: electrons occupy orbitals of the same energy singly with parallel spins before pairing."],
          ["trap", ["Orbital 同 shell / sublevel 混淆：p sublevel 有 3 個 orbitals、6 個 electrons。", "Hund 要<b>同方向</b> arrows 先單獨坐，唔好一開始就 pair。", "寫 Pauli 要寫「opposite spins」。"]],
        ],
      },
      {
        h: "Configurations 電子排列",
        min: 4,
        blocks: [
          ["table", ["Element", "Full configuration", "Condensed", "Unpaired e⁻"], [
            ["N (7)", "1s² 2s² 2p³", "[He]2s²2p³", "3"],
            ["O (8)", "1s² 2s² 2p⁴", "[He]2s²2p⁴", "2"],
            ["Ne (10)", "1s² 2s² 2p⁶", "[He]2s²2p⁶", "0"],
            ["P (15)", "1s² 2s² 2p⁶ 3s² 3p³", "[Ne]3s²3p³", "3"],
            ["Ca (20)", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "[Ar]4s²", "0"],
            ["Cr (24)", "… 3p⁶ 3d⁵ 4s¹", "[Ar]3d⁵4s¹", "6"],
            ["Mn (25)", "… 3p⁶ 3d⁵ 4s²", "[Ar]3d⁵4s²", "5"],
            ["Fe (26)", "… 3p⁶ 3d⁶ 4s²", "[Ar]3d⁶4s²", "4"],
            ["Cu (29)", "… 3p⁶ 3d¹⁰ 4s¹", "[Ar]3d¹⁰4s¹", "1"],
            ["Zn (30)", "… 3p⁶ 3d¹⁰ 4s²", "[Ar]3d¹⁰4s²", "0"],
          ]],
          ["rhyme", "口訣 3", "鉻銅半滿全滿，4s 先入後出", "Half-filled (d⁵) and full (d¹⁰) d sublevels are extra stable, so one 4s electron moves into 3d in Cr and Cu. When forming cations, <b>remove 4s electrons first</b>, then 3d."],
          ["eg", "<b>P2 · State · 2 marks</b>　State the full electron configurations of Cu and Cu²⁺.", [
            "Cu (29 e⁻)：1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ [1]（not 3d⁹4s²）",
            "Cu²⁺ (27 e⁻)：lose the 4s¹ and one 3d → 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ [1] ✅",
          ]],
          ["eg", "<b>P2 · State · 3 marks</b>　Write condensed configurations for Fe, Fe²⁺, Fe³⁺ and Cr³⁺.", [
            "Fe：[Ar]3d⁶4s²",
            "Fe²⁺：remove 4s² → <b>[Ar]3d⁶</b>",
            "Fe³⁺：remove 4s² and one 3d → <b>[Ar]3d⁵</b>（half-filled, stable）",
            "Cr (3d⁵4s¹) → Cr³⁺：remove 4s¹ and two 3d → <b>[Ar]3d³</b> ✅",
          ]],
          ["note", "<b>Main-group ions</b>：Na⁺, Mg²⁺, Al³⁺, O²⁻, F⁻ → 1s²2s²2p⁶ = [Ne]；K⁺, Ca²⁺, Cl⁻, S²⁻ → [Ar]。Atoms lose / gain electrons to reach a noble-gas configuration. Isoelectronic ions: radius decreases as nuclear charge increases (O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺)."],
          ["eg", "<b>P2 · Draw / Deduce · 2 marks</b>　Draw the orbital box diagram for the valence shell of nitrogen and deduce the number of unpaired electrons. Compare with oxygen.", [
            "N 2s：[↑↓]；2p：[↑][↑][↑]（three separate boxes, parallel spins — Hund’s rule）→ <b>3 unpaired</b> [1]",
            "O 2s：[↑↓]；2p：[↑↓][↑][↑] → <b>2 unpaired</b>; fourth 2p electron must pair with opposite spin (Pauli) [1] ✅",
          ]],
          ["eg", "<b>P1 MCQ</b>　Which ion has the configuration [Ar]3d⁵?", [
            "[Ar]3d⁵ has 18 + 5 = 23 electrons",
            "Fe³⁺ has 26 − 3 = 23 ✅ (Mn²⁺ has 25 − 2 = 23 too — both fit; read the options)",
          ]],
          ["trap", ["Fe²⁺ 寫 [Ar]3d⁴4s² ✗ → [Ar]3d⁶（4s 先甩）。", "Cr 寫 [Ar]3d⁴4s² ✗；Cu 寫 3d⁹4s² ✗。", "寫 ion configuration 之前先計電子數（Z ± charge）。", "Condensed 寫 [Ar] 後面要接 3d 再 4s 或者 4s 再 3d 均可，但數量要啱。"]],
          ["note", "<b>常考</b>：“State the electron configuration of X²⁺ (2 marks)”、“Draw orbital diagram / deduce unpaired electrons”、“Explain why Cr / Cu configuration is unusual”（half/full d sublevel stability）。"],
        ],
      },
      {
        h: "First IE + 趨勢解釋",
        min: 4,
        blocks: [
          ["key", "<b>First ionisation energy</b>: the energy required to remove one mole of electrons from one mole of gaseous atoms.<br>X(g) → X⁺(g) + e⁻　　unit kJ mol⁻¹　　always endothermic　　<b>must have (g)</b>"],
          ["table", ["Trend", "Reason (write all 3: charge, distance/shells, shielding)"], [
            ["Across a period: IE increases", "nuclear charge increases, same number of shells / similar shielding, atomic radius decreases → stronger attraction on outer electron"],
            ["Down a group: IE decreases", "more electron shells, larger atomic radius, more shielding → weaker attraction; outer electron easier to remove"],
          ]],
          ["table", ["Dip", "Explanation"], [
            ["Be → B  /  Mg → Al", "outer electron of B / Al is in a p sublevel, higher in energy and slightly further from nucleus than s, and partly shielded by the s electrons → easier to remove"],
            ["N → O  /  P → S", "in O / S two electrons are paired in the same p orbital; electron–electron repulsion makes the paired electron easier to remove"],
          ]],
          ["note", "Order for period 2 (low → high): Li &lt; B &lt; Be &lt; C &lt; O &lt; N &lt; F &lt; Ne.　Period 3: Na &lt; Al &lt; Mg &lt; Si &lt; S &lt; P &lt; Cl &lt; Ar. Noble gas = highest IE in its period; group 1 = lowest."],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why the first ionisation energy of sulfur is lower than that of phosphorus.", [
            "P: 3p³ — three unpaired electrons in separate p orbitals [1]",
            "S: 3p⁴ — one 3p orbital holds a pair of electrons [1]",
            "Repulsion between the paired electrons makes one easier to remove, so IE of S &lt; IE of P [1] ✅",
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why the first IE of potassium is lower than that of sodium.", [
            "K has an additional electron shell / larger atomic radius, and more shielding [1]",
            "Weaker attraction between nucleus and outer electron, so less energy needed [1] ✅",
          ]],
          ["eg", "<b>P2 · Write · 1 mark</b>　Write the equation for the first ionisation energy of magnesium.", [
            "Mg(g) → Mg⁺(g) + e⁻ [1]（state symbols mandatory）",
          ]],
          ["note", "Successive ionisation energies (big jump shows the group) are not a core SL requirement here — check the 2025 guide / your teacher before revising it. This sheet focuses on first IE."],
          ["trap", ["寫 IE equation 漏 (g)。", "解釋 dip 淨係寫「p orbital higher energy」而唔講係 Al 嘅電子入咗 3p（或者 S 有 pair）。", "解釋 trend 少咗 shielding / distance 其一。", "IE 單位 kJ mol⁻¹，唔係 kJ。"]],
        ],
      },
      {
        h: "長題拆解法",
        min: 2,
        blocks: [
          ["table", ["If the question says…", "It is…", "Do this"], [
            ["“State the electron configuration of X⁺ / X²⁻”", "ion configuration", "count electrons = Z ± charge → fill → (remove 4s first)"],
            ["“Draw the orbital diagram”", "box diagram", "boxes per sublevel, arrows ↑↓, Hund then Pauli"],
            ["“Explain the lines / convergence”", "emission spectrum", "discrete levels → photon → converge as levels get closer"],
            ["“Which transition emits visible / UV / IR?”", "H series", "end level n = 2 / 1 / 3"],
            ["“Explain the dip in IE”", "period 2 or 3 trend", "which sublevel, or paired electrons repulsion"],
            ["“Deduce the number of unpaired electrons”", "Hund", "count single arrows in the box diagram"],
          ]],
          ["eg", "<b>P2 · 5 marks (calculate-free long question)</b>　(a) State the full configuration of the ground-state Mn²⁺ ion. (b) Deduce the number of unpaired electrons in Mn²⁺. (c) Explain why the first IE of aluminium is lower than that of magnesium.", [
            "(a) Mn (25): [Ar]3d⁵4s²；Mn²⁺ (23 e⁻): remove 4s² → 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ [1]",
            "(b) five 3d electrons in five separate orbitals, parallel spins (Hund) → <b>5 unpaired</b> [1]",
            "(c) Al outer electron is in 3p (Mg: 3s) [1]; 3p is higher in energy / further from nucleus / shielded by 3s electrons [1]; so less energy needed to remove it [1] ✅",
          ]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["State","Give configuration or sublevel order only, no working."],["Explain","Emission lines: electron falls from higher to lower energy level, emits photon of one frequency; energy levels are discrete, convergence at high energy."],["Deduce","Write full configuration from Z (1s² 2s² 2p⁶ …)."],["Explain (IE trend)","Nuclear charge, shielding, distance; for dips: sublevel (B < Be) and electron pairing (O < N)."],["Sketch","Label axes and mark the convergence point for IE or spectra."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Why lines in emission spectrum","Discrete energy levels, so only specific ΔE (= hf) values; lines converge as levels get closer."],["Successive IE of an element","Large jump in IE shows a new shell: number before jump = valence electrons = group."],["Why IE₁ drops Be→B / N→O","B: 2p higher energy than 2s; O: paired 2p electrons repel."],["Write configuration of ion","Remove from outermost shell first (4s before 3d)."],["Group trend IE₁","Down group: bigger radius + more shielding, so less attraction, lower IE."]]],
          ["note", "每個 IE 解釋至少寫兩個 factor（nuclear charge + distance/shielding），一個 factor 通常得 1 分。E = hf 同 c = fλ 喺 data booklet；唔好忘記 ground state 同 excited state 要分清。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Emission arrows pointing up", "Falling = down = emission"],
            ["2", "n = 2 series called UV", "n = 1 UV, n = 2 visible, n = 3 IR"],
            ["3", "Lines converge because electrons get closer", "Because energy levels get closer"],
            ["4", "Fe²⁺ = [Ar]3d⁴4s²", "[Ar]3d⁶ (4s lost first)"],
            ["5", "Cr = [Ar]3d⁴4s², Cu = [Ar]3d⁹4s²", "Cr 3d⁵4s¹ ; Cu 3d¹⁰4s¹"],
            ["6", "Pairing electrons before each p orbital has one", "Hund: singly first, parallel spins"],
            ["7", "Pauli forgotten: same spin pair", "Paired arrows opposite"],
            ["8", "IE equation without (g)", "X(g) → X⁺(g) + e⁻"],
            ["9", "Dip explained only by “more stable”", "State sublevel (3p vs 3s) or pair repulsion"],
            ["10", "Ion electrons counted from Z only", "Z − charge for cations, Z + charge for anions"],
            ["11", "Orbital = shell", "orbital holds 2 e⁻ ; shell n holds 2n²"],
            ["12", "Successive IE added to SL answers", "AHL — not needed"],
          ]],
          ["check", [
            "Explain why an emission spectrum is a line spectrum and why lines converge",
            "Match n = 1 / 2 / 3 transitions to UV / visible / IR",
            "State max electrons in s, p, d, f and in shell n (2n²)",
            "Write full and condensed configurations up to Z = 36, including Cr and Cu",
            "Write ion configurations (4s lost first)",
            "Draw orbital box diagrams; state Aufbau, Pauli, Hund",
            "Define first IE with equation and state symbols",
            "Explain the period 2 and 3 IE dips and the group trend",
          ]],
        ],
      },
    ],
    summary: [
      "跌落嚟放光，一條線 = 一個能量差",
      "越高層越逼：線越高頻越密（convergence）",
      "n = 1 UV、n = 2 visible、n = 3 IR",
      "s2 p6 d10 f14；shell 2n²",
      "Aufbau 由低填，Pauli 反向兩個，Hund 先逐個坐",
      "4s 先入後出；Cr、Cu 半滿全滿",
      "IE：X(g) → X⁺(g) + e⁻；跨週期升、落 group 跌",
      "Dip：Al 入 3p；S（P→S）有 pair 相斥",
    ],
    practice: [
      { q: "S1.3 Which electron configuration represents the Fe³⁺ ion?", o: ["A. [Ar]3d⁶4s²", "B. [Ar]3d⁵", "C. [Ar]3d³4s²", "D. [Ar]3d⁴"], m: 1, a: "<b>B</b>. Fe = [Ar]3d⁶4s²; lose 4s² then one 3d → 3d⁵." },
      { q: "S1.3 Which transition in the hydrogen atom emits visible light?", o: ["A. n = 3 → 1", "B. n = 4 → 2", "C. n = 4 → 3", "D. n = 1 → 2"], m: 1, a: "<b>B</b>. Ends at n = 2 (Balmer, visible). A is UV, C is IR, D is absorption." },
      { q: "S1.3 What is the maximum number of electrons in the third shell (n = 3)?", o: ["A. 8", "B. 9", "C. 18", "D. 32"], m: 1, a: "<b>C</b>. 2n² = 2 × 9 = 18 (3s 2 + 3p 6 + 3d 10)." },
      { q: "S3.1 Which equation represents the first ionisation energy of calcium?", o: ["A. Ca(s) → Ca⁺(g) + e⁻", "B. Ca(g) → Ca⁺(g) + e⁻", "C. Ca(g) → Ca²⁺(g) + 2e⁻", "D. Ca⁺(g) → Ca²⁺(g) + e⁻"], m: 1, a: "<b>B</b>. Gaseous atom, one electron removed." },
      { q: "S3.1 Which element has the highest first ionisation energy?", o: ["A. Na", "B. Mg", "C. Al", "D. Si"], m: 1, a: "<b>D</b>. Si (Na &lt; Al &lt; Mg &lt; Si)." },
      { q: "S1.3 How many unpaired electrons are in an atom of chromium in the ground state?", o: ["A. 4", "B. 5", "C. 6", "D. 1"], m: 1, a: "<b>C</b>. [Ar]3d⁵4s¹ → five 3d + one 4s." },
      { q: "State the full electron configuration of Cu and of Cu²⁺.", m: 2, a: "Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ [1]; Cu²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ [1]." },
      { q: "State the meaning of the term orbital.", m: 1, a: "A region of space around the nucleus where there is a high probability of finding an electron (holds max two electrons) [1]." },
      { q: "Explain why the emission spectrum of hydrogen consists of lines that converge at higher frequency.", m: 3, a: "Electrons fall from higher to lower discrete energy levels, emitting photons of specific energy / frequency, giving lines [1][1]; energy levels get closer together at higher energy so lines converge [1]." },
      { q: "Deduce the number of unpaired electrons in a nitrogen atom, referring to Hund’s rule.", m: 2, a: "3 unpaired electrons [1]; 2p electrons occupy separate p orbitals singly with parallel spins before any pairing [1]." },
      { q: "Write the equation for the first ionisation energy of aluminium and explain why it is lower than that of magnesium.", m: 3, a: "Al(g) → Al⁺(g) + e⁻ [1]; Al outer electron is in 3p, Mg in 3s [1]; 3p is higher in energy / further from the nucleus / shielded by 3s so easier to remove [1]." },
      { q: "Explain why the first ionisation energy of oxygen is lower than that of nitrogen.", m: 2, a: "In O two electrons are paired in one 2p orbital whereas N has three unpaired 2p electrons [1]; repulsion between the paired electrons makes one easier to remove [1]." },
      { q: "Explain why the first ionisation energy decreases down group 1.", m: 3, a: "Atomic radius increases / more electron shells [1]; more shielding [1]; weaker attraction between nucleus and outer electron so less energy needed to remove it [1]." },
    ],
  },

  "chem-3": {
    title: "The mole · Formulae · Solutions · Avogadro's law",
    intro: "S1.4：Mole 一條橋過晒所有計算題。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
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
          ]],
          ["rhyme", "解難口訣", "圈數、寫式、過橋、查單位", "Circle data & convert units → write balanced equation → cross the mole bridge → check units & sig figs."],
          ["table", ["Constant / rule", "Value", "Use it when…"], [
            ["Avogadro constant N<sub>A</sub>", "6.02 × 10²³ mol⁻¹", "particles ↔ moles"],
            ["cm³ → dm³ / dm³ → m³", "÷ 1000 / ÷ 1000 (1 dm³ = 1 L = 10⁻³ m³)", "every volume"],
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
            ["“made up to”, “diluted”", "c₁V₁ = c₂V₂", "dilution"],
            ["Amounts of two reactants / “excess” / % yield / titration", "see R2.1 Stoichiometry", "next topic sheet"],
          ]],
          ["note", "<b>Sig figs & working</b>：final answer to the fewest significant figures in the data (usually 3)。Keep full calculator values in between — round only at the end。Always write the unit（M → g mol⁻¹；M<sub>r</sub> and A<sub>r</sub> → no unit；c → mol dm⁻³）。Show each step — “calculate” questions give method marks even if the final number is wrong (error carried forward, ECF)。"],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Define","Mole: amount containing 6.02 × 10²³ (N<sub>A</sub>) particles; molar mass: mass per mole."],["Calculate","Formula, substitution, answer with correct s.f. and unit. Method mark (ECF) is given even if the number is wrong."],["Determine","Empirical formula: ÷ M<sub>r</sub>, then smallest ratio; molecular = empirical × (M ÷ M<sub>e</sub>)."],["Deduce","Use data (combustion masses, % composition) to reach a formula."],["Suggest","Reasonable source of error or a sensible conclusion from the data."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Empirical formula from % or masses","mass ÷ A<sub>r</sub> → ÷ smallest → whole numbers (×2 or ×3 if x.5 / x.33)."],["Concentration / dilution","n = cV (V in dm³); c₁V₁ = c₂V₂."],["Reacting gas volumes","Same T and p: volume ratio = coefficient ratio (Avogadro's law)."],["Hydrate X·nH₂O","Mass loss = water; mol H₂O ÷ mol salt = n."]]],
          ["note", "Data booklet: N<sub>A</sub> = 6.02 × 10²³ 同埋 A<sub>r</sub> 值。最後答案跟題目數據用相同 s.f.，寫單位；中間步驟唔好過早 round。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Using cm³ in c = n/V", "÷ 1000 → dm³"],
            ["2", "Rounding 1.33 → 1 in empirical formula", "× 3 (1.5 → × 2, 1.25 → × 4)"],
            ["3", "Molecules vs atoms", "× atoms per formula"],
            ["4", "Cl₂, O₂, H₂, N₂ with single-atom mass", "Diatomic — double the A<sub>r</sub>"],
            ["5", "Dilution: V₂ = water added", "V₂ = final total volume"],
            ["6", "Rounding in the middle of a calculation", "Keep calculator memory; round at the end"],
            ["7", "No units / wrong sig figs", "Unit + s.f. on every final answer"],
          ]],
          ["check", [
            "Define mole, A<sub>r</sub>, M<sub>r</sub>, molar mass, empirical & molecular formula, Avogadro's law",
            "Convert between m, n, N, c, V (gas and solution) using the mole bridge",
            "Empirical formula from % and from combustion data; molecular formula from M<sub>r</sub>",
            "Water of crystallisation (x in ·xH₂O)",
            "Concentration in mol dm⁻³, g dm⁻³ and ppm; dilution; standard solution method",
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
      "圈數、寫式、過橋、查單位",
    ],
    practice: [
      { q: "S1.4 Which contains the greatest number of atoms?", o: ["A. 1.0 g H₂", "B. 1.0 g He", "C. 1.0 g CH₄", "D. 1.0 g H₂O"], m: 1, a: "<b>A</b>. H₂: 0.50 mol × 2 = 1.0 mol atoms; He 0.25; CH₄ 0.062 × 5 = 0.31; H₂O 0.056 × 3 = 0.17." },
      { q: "S1.4 A compound contains 2.4 g C and 0.6 g H. Its empirical formula is:", o: ["A. CH", "B. CH₂", "C. CH₃", "D. C₂H₆"], m: 1, a: "<b>C</b>. C: 2.4/12 = 0.2; H: 0.6/1 = 0.6 → 1 : 3 → CH₃ (C₂H₆ is a molecular formula, not empirical)." },
      { q: "S1.4 What volume of 0.500 mol dm⁻³ solution contains 0.0250 mol of solute?", o: ["A. 5.00 cm³", "B. 12.5 cm³", "C. 50.0 cm³", "D. 20.0 cm³"], m: 1, a: "<b>C</b>. V = n/c = 0.0250/0.500 = 0.0500 dm³ = 50.0 cm³." },
      { q: "S1.4 Which has the same number of molecules as 2.0 g of H₂?", o: ["A. 2.0 g O₂", "B. 16 g O₂", "C. 32 g O₂", "D. 64 g O₂"], m: 1, a: "<b>C</b>. 2.0 g H₂ = 1 mol → need 1 mol O₂ = 32 g." },
      { q: "Calculate the number of atoms in 9.00 g of water.", m: 3, a: "n = 9.00/18.02 = 0.4994 mol [1]; × 6.02 × 10²³ = 3.01 × 10²³ molecules [1]; × 3 = 9.02 × 10²³ atoms [1]." },
      { q: "0.230 g of a compound (C, H, O) gives 0.440 g CO₂ and 0.270 g H₂O on complete combustion. Find its empirical formula.", m: 4, a: "n(C) = 0.0100 mol (0.120 g) [1]; n(H) = 2 × 0.01498 = 0.0300 mol (0.0303 g) [1]; O = (0.230 − 0.120 − 0.0303)/16.00 = 0.00498 mol [1]; ratio 2 : 6 : 1 → C₂H₆O [1]." },
      { q: "2.50 g CuSO₄·xH₂O is heated to constant mass, leaving 1.60 g. Find x.", m: 3, a: "H₂O 0.90/18.02 = 0.0499 mol [1]; CuSO₄ 1.60/159.62 = 0.01002 mol [1]; ratio 4.98 → x = 5 [1]." },
      { q: "25.0 cm³ of 2.00 mol dm⁻³ HCl is diluted to 500 cm³. Find the new concentration.", m: 2, a: "c₁V₁ = c₂V₂ [1]; c₂ = 2.00 × 25.0/500 = 0.100 mol dm⁻³ [1]." },
    ],
  },
  "chem-3b": {
    title: "Ideal gases · Gas laws · pV = nRT",
    intro: "S1.5：理想氣體五個假設、真實氣體幾時偏離、三條 gas laws 同 pV = nRT。單位係最大失分位：溫度永遠 K。",
    parts: [
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
        h: "S1.5 口訣 + 失分位",
        min: 2.5,
        blocks: [
          ["grid", [
            ["S1.5", "細、冇、彈、亂、溫", "5 ideal-gas assumptions"],
            ["S1.5", "高溫低壓最理想；低溫高壓唔理想", "When real gases deviate"],
            ["S1.5", "零度一百 kPa，22.7 記實佢", "STP: 273 K, 100 kPa → 22.7 dm³ mol⁻¹"],
            ["S1.5", "kPa 夾 dm³，Pa 夾 m³，溫度永遠 K", "pV = nRT unit pairing"],
            ["S1.5", "前後一樣 pV/T", "p₁V₁/T₁ = p₂V₂/T₂ (°C + 273)"],
          ]],
          ["table", ["If the question says…", "It is…", "Do this"], [
            ["mass + p + V + T of a gas", "M = mRT ÷ pV", "pV = nRT"],
            ["Conditions before / after", "p₁V₁/T₁ = p₂V₂/T₂", "combined gas law"],
            ["Gas at STP", "molar volume", "V = n × 22.7 dm³ mol⁻¹ (273 K, 100 kPa)"],
          ]],
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Using °C in gas laws", "+ 273 → K, always"],
            ["2", "Pa with dm³ in pV = nRT", "kPa + dm³ or Pa + m³"],
            ["3", "22.4 or 22.7 used when NOT at STP", "22.7 at 273 K & 100 kPa only"],
          ]],
          ["check", [
            "State 5 ideal-gas assumptions; explain when and why real gases deviate",
            "Sketch / interpret p–V, p–1/V, V–T graphs; explain with particles",
            "Use 22.7, pV = nRT, p₁V₁/T₁ = p₂V₂/T₂, M = mRT/pV",
          ]],
        ],
      },
    ],
    summary: [
      "細、冇、彈、亂、溫；高溫低壓最理想",
      "kPa 夾 dm³，Pa 夾 m³，溫度永遠 K；STP 用 22.7",
      "Boyle p ∝ 1/V，Charles V ∝ T，Gay-Lussac p ∝ T（全部用 K）",
    ],
    practice: [
      { q: "S1.5 A fixed mass of gas at constant pressure is heated from 200 K to 400 K. Its volume:", o: ["A. halves", "B. stays the same", "C. doubles", "D. quadruples"], m: 1, a: "<b>C</b>. V ∝ T(K): 200 → 400 K doubles." },
      { q: "S1.5 Under which conditions does a real gas behave most like an ideal gas?", o: ["A. high T, high p", "B. high T, low p", "C. low T, high p", "D. low T, low p"], m: 1, a: "<b>B</b>. 「高溫低壓最理想」" },
      { q: "0.882 g of a gas occupies 500 cm³ at 100 kPa and 300 K. Calculate its molar mass.", m: 3, a: "M = mRT/pV [1] = 0.882 × 8.31 × 300 / (100 × 0.500) [1] = 44.0 g mol⁻¹ [1]." },
      { q: "200 cm³ of gas at 25 °C and 100 kPa is changed to 100 °C and 150 kPa. Calculate the new volume.", m: 3, a: "T in K: 298 and 373 [1]; V₂ = 200 × (100/150) × (373/298) [1] = 167 cm³ [1]." },
    ],
  },

  "chem-4": {
    title: "Ions · Ionic lattices · Lattice enthalpy · Properties",
    intro: "S2.1：離子鍵 = 相反電荷互吸。解釋題永遠係「結構 → 力 → 能量 → 性質」：電荷大、半徑細，晶格就實。",
    parts: [
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "結構 → 力 → 要幾多能量 → 性質", "Every property question: (1) what particles (ions), (2) what force between them (electrostatic attraction), (3) how much energy to overcome, (4) so property (m.p., conductivity, brittleness)."],
          ["grid", [
            ["S2.1", "離子晶格靠相反電荷互吸", "Ionic bond: electrostatic attraction between oppositely charged ions"],
            ["S2.1", "電荷大、半徑細，晶格就實", "Lattice enthalpy ↑ with charge ↑, radius ↓"],
            ["S2.1", "固體 ions 郁唔到，熔咗溶咗先導電", "Conducts only molten / aqueous"],
            ["S2.1", "離子脆，因為層錯位同電荷相斥", "Brittle: ion layers shift, like charges repel"],
          ]],
          ["table", ["Fact", "Value", "Use it when…"], [
            ["Ion charges by group", "1+ · 2+ · 3+ · 3− (N, P) · 2− (O, S) · 1− (halogens)", "formulae of ionic compounds"],
            ["Polyatomic ions", "NH₄⁺ · OH⁻ · NO₃⁻ · HCO₃⁻ · CO₃²⁻ · SO₄²⁻ · PO₄³⁻", "formulae and charge balance"],
          ]],
        ],
      },
      {
        h: "Ionic model 離子鍵",
        min: 3,
        blocks: [
          ["key", "<b>Ionic bond</b>: the electrostatic attraction between oppositely charged ions. Formed by electron transfer from metal to non-metal (large electronegativity difference). Solid = 3D <b>lattice</b>; formula is the simplest ratio of ions (empirical).<br><b>Lattice enthalpy</b>: the enthalpy change when one mole of a solid ionic compound is separated into its gaseous ions (endothermic, IB convention). Larger for <b>higher ion charges</b> and <b>smaller ionic radii</b>."],
          ["eg", "<b>P2 · Deduce · 2 marks</b>　Deduce the formulae of aluminium oxide, magnesium phosphate and ammonium sulfate.", [
            "Al³⁺ and O²⁻：2(+3) = +6, 3(−2) = −6 → <b>Al₂O₃</b>",
            "Mg²⁺ and PO₄³⁻：3(+2) = +6, 2(−3) = −6 → <b>Mg₃(PO₄)₂</b>（brackets round polyatomic ion）",
            "NH₄⁺ and SO₄²⁻：2(+1) + (−2) = 0 → <b>(NH₄)₂SO₄</b> ✅",
          ]],
          ["table", ["Property", "Explanation (use the structure → force → energy chain)"], [
            ["High melting point", "strong electrostatic attraction between oppositely charged ions in lattice; large energy needed to overcome"],
            ["Brittle", "layers displaced → ions of the same charge line up and repel → crystal shatters"],
            ["Solid does not conduct", "ions fixed in lattice, cannot move"],
            ["Conducts when molten or in aqueous solution", "ions are free to move and carry charge"],
            ["Often soluble in water", "polar water molecules attract ions (ion–dipole) strongly enough to overcome the lattice; ions become hydrated / solvated"],
            ["Low volatility", "strong attractions, very high energy to separate"],
          ]],
          ["rhyme", "口訣 1", "電荷大、半徑細，晶格就實", "MgO &gt; NaCl：Mg²⁺ / O²⁻ have charges 2+/2− (vs 1+/1−) and smaller radii → stronger attraction → higher lattice enthalpy and m.p."],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why magnesium oxide has a higher melting point than sodium chloride.", [
            "Mg²⁺ and O²⁻ have higher charges (2+, 2−) and smaller ionic radii than Na⁺ and Cl⁻ [1]",
            "Stronger electrostatic attraction between ions → more energy needed to separate the lattice [1] ✅",
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.", [
            "Solid: ions are held in fixed positions in the lattice, so cannot move [1]",
            "Molten: ions are free to move and carry charge [1] ✅",
          ]],
          ["trap", ["Solid 唔導電係因為 ions <b>fixed</b>，唔係「冇電子」。", "Molten salt 導電靠 <b>ions</b>；metal 靠 <b>electrons</b>。", "Ionic compound 嘅 formula 係 empirical ratio，唔係 molecule：NaCl 冇「NaCl molecule」。", "「Mg 比 Na 強因為更多 mass」✗——係 charge 同 radius。"]],
        ],
      },
    ],
    summary: [
      "電荷大、半徑細，晶格同金屬鍵就實",
      "Ionic 固體 ions 郁唔到，熔咗溶咗先導電",
      "離子脆：層錯位，同性電荷相斥就裂",
    ],
    practice: [
      { q: "S2.1 Which has the highest melting point?", o: ["A. NaCl", "B. MgO", "C. KBr", "D. CsI"], m: 1, a: "<b>B</b>. Highest charges (2+/2−) and small radii give the strongest lattice." },
      { q: "State why solid sodium chloride does not conduct electricity but molten sodium chloride does.", m: 2, a: "Solid: ions fixed in the lattice, cannot move [1]; molten: ions free to move and carry charge [1]." },
      { q: "Explain why magnesium oxide has a higher melting point than sodium chloride.", m: 2, a: "Mg²⁺ and O²⁻ have greater charges and smaller radii [1]; stronger electrostatic attraction, more energy needed to separate ions [1]." },
    ],
  },
  "chem-4b": {
    title: "Covalent · Lewis · VSEPR · Polarity · IMF · Chromatography",
    intro: "S2.2：共用電子對、Lewis structure、VSEPR 形狀、極性、IMF 同 giant covalent。解釋題永遠係「結構 → 力 → 能量 → 性質」。",
    parts: [
      {
        h: "Covalent bonding & Lewis 共價",
        min: 3,
        blocks: [
          ["key", "<b>Covalent bond</b>: the electrostatic attraction between a shared pair of electrons and the positively charged nuclei of the two bonded atoms.<br>Single → double → triple: more shared pairs, <b>shorter and stronger</b> bond.<br><b>Coordination (dative) bond</b>: both electrons in the shared pair come from the same atom, e.g. NH₃ + H⁺ → NH₄⁺; H₂O + H⁺ → H₃O⁺; CO."],
          ["flow", [["① 數電子", "total valence electrons (add for − charge, subtract for + charge)"], ["② 骨架", "least electronegative atom central (not H); single bonds to outer atoms"], ["③ 補八", "complete octets on outer atoms (H gets 2)"], ["④ 檢查", "put leftovers on centre; if the centre lacks an octet, turn lone pairs into double / triple bonds"]]],
          ["table", ["Species", "Valence e⁻", "Lewis structure (words)"], [
            ["CO₂", "4 + 6 + 6 = 16", "O=C=O ; two lone pairs on each O ; no lone pair on C"],
            ["HCN", "1 + 4 + 5 = 10", "H–C≡N ; one lone pair on N"],
            ["NH₃", "5 + 3 = 8", "N with 3 single bonds to H and one lone pair"],
            ["H₂O", "6 + 2 = 8", "O with 2 single bonds to H and two lone pairs"],
            ["NH₄⁺", "5 + 4 − 1 = 8", "N with 4 single bonds to H, no lone pair; one N–H is a coordination bond (arrow N → H⁺)"],
            ["CO", "4 + 6 = 10", "C≡O with a lone pair on each; one of the three bonds is coordinate (O → C)"],
            ["BF₃ (exception)", "3 + 21 = 24", "B has only 6 electrons (incomplete octet); electron-deficient"],
          ]],
          ["note", "SL limit: Lewis structures with up to four electron pairs on each atom. Exceptions you must know: <b>incomplete octet</b> (BF₃, BeCl₂), <b>odd electron</b> species (NO). Formal charges and expanded octets (PCl₅, SF₆) are not SL."],
          ["table", ["Bond", "Length", "Enthalpy", "Order"], [
            ["C–C", "154 pm", "346 kJ mol⁻¹", "1"],
            ["C=C", "134 pm", "614 kJ mol⁻¹", "2"],
            ["C≡C", "120 pm", "839 kJ mol⁻¹", "3"],
          ]],
          ["note", "<b>Extension (benzene)</b>: all six C–C bonds in benzene are equal in length (140 pm), between C–C and C=C, because the π electrons are delocalised over the ring — the Kekulé structure is only a model. The same idea (resonance, equal bond lengths) applies to O₃ and CO₃²⁻."],
          ["trap", ["Lewis structure 漏咗 lone pairs。", "NH₄⁺ 要話 coordinate bond（both electrons from N）。", "Bond length 同 strength 方向相反：triple 最短最強。", "CO₂ 寫成 O–C–O（single bonds）→ C 冇 octet。"]],
        ],
      },
      {
        h: "VSEPR shapes 形狀",
        min: 3,
        blocks: [
          ["key", "<b>VSEPR</b>: electron domains (bonding pairs, lone pairs; a double or triple bond counts as ONE domain) repel to be as far apart as possible. Lone pairs repel more than bonding pairs, so angles shrink."],
          ["table", ["Domains", "Lone pairs", "Electron-domain geometry", "Molecular shape", "Angle", "Examples"], [
            ["2", "0", "linear", "linear", "180°", "CO₂, HCN, BeCl₂"],
            ["3", "0", "trigonal planar", "trigonal planar", "120°", "BF₃, SO₃, CH₂O, CO₃²⁻, NO₃⁻"],
            ["3", "1", "trigonal planar", "bent (V-shaped)", "&lt; 120°", "SO₂, NO₂⁻"],
            ["4", "0", "tetrahedral", "tetrahedral", "109.5°", "CH₄, NH₄⁺, SO₄²⁻, CCl₄"],
            ["4", "1", "tetrahedral", "trigonal pyramidal", "&lt; 109.5° (~107°)", "NH₃, H₃O⁺, PCl₃"],
            ["4", "2", "tetrahedral", "bent (V-shaped)", "&lt; 109.5° (~104.5°)", "H₂O, OF₂"],
          ]],
          ["rhyme", "口訣 2", "雙鍵當一個，孤對推更多", "Count DOMAINS around the central atom (not atoms). Each lone pair squeezes the bond angle: 109.5° → 107° → 104.5°."],
          ["eg", "<b>P2 · Deduce · 3 marks</b>　Deduce the shape and bond angle of (a) NH₃ (b) CO₃²⁻ (c) H₃O⁺.", [
            "(a) N: 3 bonds + 1 lone pair = 4 domains → <b>trigonal pyramidal, ~107°</b>",
            "(b) C: one C=O + two C–O⁻ = 3 domains, no lone pair → <b>trigonal planar, 120°</b>",
            "(c) O: 3 bonds + 1 lone pair = 4 domains → <b>trigonal pyramidal, ~107°</b> ✅",
          ]],
          ["eg", "<b>P1 MCQ</b>　Which species has a bond angle closest to 109.5°?　CO₂ · NH₄⁺ · SO₂ · H₂O", [
            "NH₄⁺: 4 bonding domains, no lone pairs → tetrahedral 109.5° ✅（H₂O ~104.5°, SO₂ &lt; 120°, CO₂ 180°）",
          ]],
          ["trap", ["H₂O 叫 bent / V-shaped，唔好寫「tetrahedral」（嗰個係 electron domain geometry）。", "Shape ≠ domain geometry：NH₃ domain = tetrahedral，shape = trigonal pyramidal。", "只寫 “107°” 唔寫 shape 名 → 失分。"]],
        ],
      },
      {
        h: "Polarity · IMF · solubility",
        min: 4,
        blocks: [
          ["key", "<b>Electronegativity</b>: the ability of an atom to attract the bonding pair of electrons in a covalent bond (Pauling scale; increases across a period and up a group; F = 4.0).<br><b>Polar bond</b>: Δχ gives δ+ on the less electronegative atom, δ− on the more. <b>Polar molecule</b>: net dipole (polar bonds AND asymmetric shape). Symmetric molecules (CO₂, CCl₄, BF₃, CH₄) are non-polar even with polar bonds."],
          ["table", ["Polar molecules", "Non-polar molecules"], [
            ["H₂O, NH₃, HCl, SO₂, CH₃Cl, CH₂Cl₂, CHCl₃, CH₃OH, H₂S", "CO₂, CCl₄, CH₄, BF₃, SO₃, O₂, N₂, Cl₂, C₂H₄"],
          ]],
          ["table", ["IMF (weakest → strongest)", "Cause", "Found in"], [
            ["London (dispersion)", "temporary / instantaneous dipoles → induced dipoles", "ALL molecules ; only force in non-polar molecules ; ↑ with number of electrons / M<sub>r</sub> ; ↑ with larger surface area (straight chain &gt; branched)"],
            ["Dipole–induced dipole", "permanent dipole induces a dipole in a neighbouring non-polar molecule", "polar + non-polar mixtures e.g. HCl with Ar"],
            ["Dipole–dipole", "attraction between permanent dipoles δ+ … δ−", "polar molecules e.g. HCl, CH₃Cl, propanone"],
            ["Hydrogen bond", "H bonded to N, O or F attracted to a lone pair on N, O or F of another molecule", "H₂O, NH₃, HF, alcohols, carboxylic acids, amines"],
          ]],
          ["rhyme", "口訣 3", "沸騰拆 IMF，唔拆共價鍵", "Boiling or melting a simple molecular substance overcomes IMF only. More / stronger IMF → higher b.p., lower volatility. Compare: H-bond &gt; dipole–dipole &gt; London (similar M<sub>r</sub>); if only London, bigger M<sub>r</sub> wins."],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why water (b.p. 100 °C) has a higher boiling point than hydrogen sulfide (b.p. −60 °C).", [
            "H₂O molecules form hydrogen bonds (H bonded to very electronegative O, lone pair on O) [1]",
            "H₂S has only dipole–dipole and London forces, which are weaker [1]",
            "More energy needed to overcome the IMF in water [1] ✅",
          ]],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Propane (M<sub>r</sub> 44, b.p. −42 °C), ethanal (M<sub>r</sub> 44, b.p. 20 °C) and ethanol (M<sub>r</sub> 46, b.p. 78 °C). Explain the order of boiling points.", [
            "Similar M<sub>r</sub> → London forces similar, so the type of other IMF decides",
            "Propane: non-polar, London forces only (weakest) [1]",
            "Ethanal: polar C=O → dipole–dipole as well, stronger [1]",
            "Ethanol: O–H → hydrogen bonding (strongest) → highest b.p. [1] ✅",
          ]],
          ["table", ["Solubility rule 相似相溶", "Why"], [
            ["Ionic dissolves in water", "ion–dipole attractions with water (hydration) compensate for lattice energy"],
            ["Ethanol miscible with water", "O–H forms hydrogen bonds with water"],
            ["Hexane / non-polar does not dissolve in water", "cannot form strong attractions with water; water–water H-bonds stay"],
            ["Non-polar dissolves in non-polar", "London forces comparable on both sides"],
          ]],
          ["trap", ["寫「boiling breaks covalent bonds」→ 即刻 0。", "H-bond 係 intermolecular，唔係 O–H covalent bond。", "H-bond 要寫 H bonded to N/O/F <b>and</b> lone pair on N/O/F of another molecule。", "CO₂ polar bonds 但 non-polar molecule：要講 symmetrical / dipoles cancel。"]],
        ],
      },
      {
        h: "Giant covalent structures 巨型共價",
        min: 2.5,
        blocks: [
          ["table", ["Structure", "Bonding", "Properties and explanation"], [
            ["Diamond", "each C bonded to 4 C (tetrahedral); 3D network", "very hard, very high m.p. (many strong covalent bonds), no conduction (no free electrons)"],
            ["Graphite", "each C bonded to 3 C (trigonal planar, 120°); layers of hexagons, London forces between layers", "conducts along layers (one delocalised e⁻ per C); soft / slippery (layers slide); high m.p. (strong bonds in layers)"],
            ["Graphene", "single layer of graphite", "conducts, very strong, transparent, very thin"],
            ["Silicon", "each Si bonded to 4 Si like diamond", "high m.p., semiconductor"],
            ["Silicon dioxide SiO₂", "each Si bonded to 4 O, each O to 2 Si", "hard, very high m.p., does not conduct"],
            ["Fullerene C₆₀", "discrete molecules (12 pentagons, 20 hexagons) with London forces between", "soft, low m.p. compared with network solids ; poor conductor"],
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why graphite conducts electricity but diamond does not.", [
            "Graphite: each C uses 3 valence electrons in bonds; the fourth is delocalised and free to move between layers [1]",
            "Diamond: all four valence electrons are in localised covalent bonds, no mobile charge carriers [1] ✅",
          ]],
          ["trap", ["Graphite 導電唔係因為 ions；係 delocalised <b>electrons</b>。", "Diamond 硬 + 高 m.p. 係因為 covalent bonds 要斷；graphite 層間係 London forces 所以滑。"]],
        ],
      },
      {
        h: "Chromatography 色層分析",
        min: 2,
        blocks: [
          ["key", "<b>Chromatography</b> separates components of a mixture according to their relative attraction to the <b>stationary phase</b> (e.g. paper / silica gel on TLC plate) and solubility in the <b>mobile phase</b> (solvent).<br>\\(R_f = \\dfrac{\\text{distance moved by the component (centre of spot)}}{\\text{distance moved by the solvent front}}\\)　both measured from the baseline; no units; between 0 and 1."],
          ["flow", [["① 準備", "pencil baseline ; spot sample above solvent level"], ["② 展開", "solvent rises by capillary action ; stop before the front reaches the top"], ["③ 量度", "mark solvent front at once ; measure from baseline"], ["④ 比較", "same Rf / same distance as a known standard → same substance"]]],
          ["eg", "<b>P2 · Calculate + explain · 3 marks</b>　A dye spot moved 2.8 cm from the baseline while the solvent front moved 8.0 cm. Calculate R<sub>f</sub> and explain why two dyes separate.", [
            "R<sub>f</sub> = 2.8 ÷ 8.0 = <b>0.35</b> [1]（no units）",
            "Dyes have different relative attractions (intermolecular forces) to stationary and mobile phase [1]",
            "so they travel different distances in the same time [1] ✅",
          ]],
          ["note", "<b>Interpreting a chromatogram</b>：number of spots = minimum number of components；spot level with a standard = that compound is present；more attracted to the stationary phase → smaller R<sub>f</sub> (stays low)；colourless spots located with a UV lamp or locating agent (e.g. ninhydrin for amino acids). TLC (thin-layer, silica gel) is faster and more sensitive than paper."],
          ["trap", ["Rf 由 baseline 量起；solvent front 都要由 baseline 量。", "Rf 寫單位 cm ✗。", "Baseline 用 ink ✗，會跟住 solvent 走。", "Baseline 浸入 solvent ✗，sample 溶晒入 solvent。"]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Describe","Ionic: electrostatic attraction between oppositely charged ions in a lattice; covalent: shared pair; metallic: cations in sea of delocalised electrons."],["Explain (property)","Structure → bonding → property: e.g. high m.p. because strong electrostatic attraction needs much energy."],["Compare / Distinguish","Both sides each, with same property. Use comparative words."],["Deduce / Predict","Shape and bond angle from electron domains (VSEPR); polarity from shape + electronegativity."],["Draw","Lewis: all valence electrons, lone pairs shown. Dot-and-cross not penalised if consistent."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Explain boiling point order","Identify strongest IMF (H-bond > dipole–dipole > London); larger M<sub>r</sub> raises London forces."],["Why does X conduct / not conduct","Mobile charged particles: ions when molten or dissolved, delocalised electrons in metals."],["Shape + bond angle","Count domains → shape → angle (lone pair reduces angle: CH₄ 109.5°, NH₃ 107°, H₂O 104.5°)."],["Is molecule polar","Polar bonds AND asymmetric shape → net dipole (CO₂ non-polar, H₂O polar)."],["Calculate R<sub>f</sub>","distance spot ÷ distance solvent front."]]],
          ["note", "Metal：mp 高係因為 cation–electron attraction 強，唔好寫 “metallic bonds are broken” 當 conduction reason。Ionic compound 融化要寫 “overcome electrostatic attraction between ions”，唔好寫 “break covalent bonds”。Bond angles 唔喺 booklet，要背。"],
        ],
      },
      {
        h: "長題拆解法 + 失分位",
        min: 2.5,
        blocks: [
          ["table", ["If the question says…", "It is…", "Answer frame"], [
            ["“Explain why X has higher m.p. / b.p. than Y”", "bonding-comparison essay", "type of particle → force → strength compared (charge, radius / IMF type, M<sub>r</sub>) → energy"],
            ["“Explain why X conducts / does not”", "mobile charge carriers", "name the carrier (ions / electrons) and say free or fixed"],
            ["“Deduce the shape of …”", "VSEPR", "Lewis → domains → lone pairs → shape + angle"],
            ["“Is X polar?”", "polarity", "bond polarity (Δχ) + shape symmetry"],
            ["“Predict the solubility in water”", "like dissolves like", "H-bond / ion–dipole available?"],
            ["“Calculate Rf”", "chromatography", "spot ÷ front, both from baseline"],
          ]],
          ["eg", "<b>P2 · 7 marks (Deduce + explain)</b>　(a) Deduce the shape of PCl₃ and estimate its bond angle. (b) Predict, with a reason, whether PCl₃ is polar. (c) Explain why PH₃ (b.p. −88 °C) has a lower boiling point than NH₃ (b.p. −33 °C).", [
            "(a) P: 3 bonding pairs + 1 lone pair = 4 domains → <b>trigonal pyramidal</b>, ~107° [1][1]",
            "(b) P–Cl bonds are polar (Δχ = 3.2 − 2.2 = 1.0) and the pyramidal shape is asymmetric so the dipoles do not cancel → polar [1][1]",
            "(c) NH₃ forms hydrogen bonds (H bonded to N, lone pair on N) [1]; PH₃ has only dipole–dipole and London forces, weaker [1]; less energy needed to overcome IMF in PH₃ → lower b.p. [1] ✅",
          ]],
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Boiling breaks covalent bonds", "IMF only (simple molecular)"],
            ["2", "Solid ionic conducts / has no electrons", "ions fixed in lattice"],
            ["3", "Shape = domain geometry", "name molecular shape (lone pairs excluded)"],
            ["4", "Double bond counted as 2 domains", "1 domain"],
            ["5", "Polar bonds = polar molecule", "check symmetry"],
            ["6", "H-bond is a bond in the molecule", "intermolecular attraction"],
            ["7", "Only London forces compared by mass of one atom", "number of electrons / M<sub>r</sub> of the molecule"],
            ["8", "Graphite conducts by ions", "delocalised electrons"],
            ["9", "Rf with units or from paper edge", "no units ; from baseline"],
            ["10", "Lone pairs missing in Lewis structure", "draw all valence electrons"],
            ["11", "Mg stronger than Na because heavier", "charge, radius, number of delocalised electrons"],
            ["12", "Metal ‘conducts because ions flow’", "electrons flow"],
          ]],
          ["note", "<b>常考</b>：explain m.p./b.p. (2–3 marks)、shape + angle (2 marks)、polarity (2 marks)、graphite vs diamond (2 marks)、Rf calculation + separation reason (3 marks)。每題都按 structure → force → energy 寫。"],
          ["check", [
            "Define ionic bond, covalent bond, coordination bond, metallic bond, electronegativity, lattice enthalpy",
            "Write formulae of ionic compounds with polyatomic ions",
            "Draw Lewis structures up to 4 electron pairs per atom, with BF₃ exception",
            "Use the VSEPR table (domains, lone pairs, shape, angle) up to 4 domains",
            "Decide bond polarity and molecular polarity",
            "Rank IMFs and explain boiling points with H-bond / dipole–dipole / London",
            "Explain properties of diamond, graphite, graphene, SiO₂, fullerene",
            "Explain metallic properties and alloys; calculate and explain Rf",
          ]],
        ],
      },
    ],
    summary: [
      "共價 = 共用電子對同核互吸；鍵數越多越短越強",
      "雙鍵當一個域，孤對推更多：109.5° → 107° → 104.5°",
      "鍵極性睇 χ，分子極性睇形狀對稱",
      "London &lt; dipole–dipole &lt; hydrogen bond；沸騰拆 IMF",
      "Graphite 導電靠 delocalised e⁻，diamond 冇",
      "Rf = spot ÷ front，冇單位",
    ],
    practice: [
      { q: "S2.2 What is the shape of the NH₃ molecule?", o: ["A. trigonal planar", "B. tetrahedral", "C. trigonal pyramidal", "D. bent"], m: 1, a: "<b>C</b>. 4 electron domains with 1 lone pair." },
      { q: "S2.2 Which molecule is non-polar but contains polar bonds?", o: ["A. H₂O", "B. NH₃", "C. CO₂", "D. HCl"], m: 1, a: "<b>C</b>. Linear and symmetrical, so bond dipoles cancel." },
      { q: "S2.2 Which compound has hydrogen bonding between its molecules?", o: ["A. CH₄", "B. CH₃OCH₃", "C. CH₃CH₂OH", "D. CH₃Cl"], m: 1, a: "<b>C</b>. Ethanol has O–H. In B the O has no H attached." },
      { q: "S2.2 Which species has a bond angle of 109.5°?", o: ["A. H₂O", "B. NH₃", "C. NH₄⁺", "D. SO₂"], m: 1, a: "<b>C</b>. 4 bonding pairs, no lone pair → tetrahedral." },
      { q: "S2.2 Which order of bond length is correct?", o: ["A. C≡C &gt; C=C &gt; C–C", "B. C–C &gt; C=C &gt; C≡C", "C. C=C &gt; C–C &gt; C≡C", "D. C–C &gt; C≡C &gt; C=C"], m: 1, a: "<b>B</b>. 154 &gt; 134 &gt; 120 pm; more bonds = shorter." },
      { q: "S2.2 State the meaning of the term coordination (dative covalent) bond.", m: 1, a: "A covalent bond in which both electrons of the shared pair come from the same atom [1]." },
      { q: "Deduce the shape and bond angle of PCl₃.", m: 2, a: "Trigonal pyramidal [1]; ~107° (accept 100–108°) [1]." },
      { q: "Explain why CCl₄ is non-polar although the C–Cl bonds are polar.", m: 2, a: "Tetrahedral / symmetrical shape [1]; bond dipoles cancel, no net dipole [1]." },
      { q: "Explain why ethanol (b.p. 78 °C) has a higher boiling point than ethanal (b.p. 20 °C) of similar M<sub>r</sub>.", m: 2, a: "Ethanol forms hydrogen bonds between molecules (O–H … O) [1]; ethanal has only dipole–dipole + London forces, weaker, so less energy to overcome [1]." },
      { q: "Explain why graphite conducts electricity but diamond does not.", m: 2, a: "Graphite: each C bonded to three others, one delocalised electron per atom free to move [1]; diamond: all four electrons in bonds, no mobile electrons [1]." },
      { q: "In paper chromatography a dye moved 2.7 cm while the solvent front moved 9.0 cm. Calculate R<sub>f</sub> and outline why two dyes separate.", m: 3, a: "R<sub>f</sub> = 2.7/9.0 = 0.30 [1]; dyes have different relative attractions to the stationary and mobile phases [1]; so travel different distances [1]." },
    ],
  },
  "chem-4c": {
    title: "Metallic bonding · Properties of metals",
    intro: "S2.3：金屬 = 正離子晶格 + delocalised electrons 海。強度睇電荷、半徑同每粒原子貢獻幾多 electrons。",
    parts: [
      {
        h: "Metallic model 金屬鍵",
        min: 3,
        blocks: [
          ["key", "<b>Metallic bond</b>: the electrostatic attraction between a lattice of positive metal ions (cations) and delocalised electrons.<br>Strength ↑ with higher charge on cation, smaller radius, more delocalised electrons per atom (Mg &gt; Na)."],
          ["table", ["Property", "Explanation"], [
            ["Conducts electricity and heat", "delocalised electrons are free to move"],
            ["Malleable and ductile", "layers of cations slide over one another without breaking the metallic bond (delocalised electrons still hold lattice)"],
            ["High m.p.", "strong attraction between cations and delocalised electrons"],
            ["Alloys are harder than pure metals", "different-sized atoms disrupt the regular layers, so layers cannot slide easily"],
          ]],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why magnesium has a higher melting point than sodium.", [
            "Mg²⁺ has a higher charge and smaller ionic radius than Na⁺ [1]",
            "Mg contributes two delocalised electrons per atom, Na one [1]",
            "Stronger attraction between cations and delocalised electrons in Mg, so more energy needed [1] ✅",
          ]],
          ["trap", ["Metals 熔咗仲導電（electrons），ionic 熔咗導電（ions）。", "Metal conducts because electrons flow，唔係 ions flow。"]],
        ],
      },
      {
        h: "S2.3 題型 + 自我檢查",
        min: 1.5,
        blocks: [
          ["rhyme", "口訣", "金屬 = 正離子海 + 自由電子", "Strength ↑ with cation charge, ↓ with radius, ↑ with delocalised electrons per atom."],
          ["table", ["If the question says…", "Answer frame"], [
            ["“Describe metallic bonding”", "electrostatic attraction + lattice of cations + delocalised electrons"],
            ["“Explain why metal X has a higher m.p. than Y”", "charge, radius, number of delocalised electrons → stronger attraction → more energy"],
            ["“Explain why metals conduct / are malleable”", "delocalised electrons move / layers slide, electrons keep holding the lattice"],
          ]],
          ["check", [
            "Define the metallic bond",
            "Explain conductivity, malleability and high melting points of metals",
            "Compare melting points of Na, Mg and Al; explain why melting points fall down group 1",
          ]],
        ],
      },
    ],
    summary: [
      "金屬 = 正離子海 + delocalised electrons",
      "電荷大、半徑細、電子多：金屬鍵就實（Al &gt; Mg &gt; Na）",
      "導電靠 electrons 郁；層可以滑所以 malleable",
    ],
    practice: [
      { q: "Explain why alloys are usually harder than the pure metal.", m: 2, a: "Atoms of a different size disrupt the regular arrangement of cations / layers [1]; layers cannot slide over each other easily [1]." },
      { q: "S2.3 Which property of metals is explained by layers of cations sliding over each other?", o: ["A. electrical conductivity", "B. malleability", "C. high density", "D. thermal conductivity"], m: 1, a: "<b>B</b>. Layers slide while the delocalised electrons keep holding the lattice together." },
      { q: "Explain why the melting point of potassium is lower than that of sodium.", m: 2, a: "K⁺ has a larger ionic radius than Na⁺ (same charge) [1]; weaker electrostatic attraction between the cations and the delocalised electrons, so less energy is needed to overcome it [1]." },
    ],
  },

  "chem-5": {
    title: "Bonding triangle · Alloys · Polymers",
    intro: "S2.4：物料性質由 bonding model 決定——用 bonding triangle 定類型，再講 alloys 同 addition polymers。",
    parts: [
      {
        h: "Bonding triangle 鍵三角",
        min: 3,
        blocks: [
          ["key", "<b>Bonding triangle</b> (van Arkel–Ketelaar): x-axis = <b>average electronegativity</b> of the two atoms; y-axis = <b>electronegativity difference Δχ</b>. Corners: <b>metallic</b> (bottom left, low χ, Δχ ≈ 0), <b>covalent</b> (bottom right, high χ, Δχ ≈ 0), <b>ionic</b> (top, large Δχ). Most substances are intermediate — bonding is a continuum."],
          ["table", ["Compound", "χ values", "Δχ", "Average χ", "Classification"], [
            ["Na", "0.9 , 0.9", "0", "0.9", "metallic"],
            ["Cl₂", "3.2 , 3.2", "0", "3.2", "non-polar covalent"],
            ["NaCl", "0.9 , 3.2", "2.3", "2.05", "ionic"],
            ["MgO", "1.3 , 3.4", "2.1", "2.35", "ionic"],
            ["HCl", "2.2 , 3.2", "1.0", "2.7", "polar covalent"],
            ["SiO₂", "1.9 , 3.4", "1.5", "2.65", "polar covalent (giant covalent)"],
            ["AlCl₃", "1.6 , 3.2", "1.6", "2.4", "intermediate (polar covalent / ionic character)"],
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b>　Use χ(Mg) = 1.3 and χ(Cl) = 3.2 to determine the bonding in MgCl₂ and explain why its properties agree.", [
            "Δχ = 3.2 − 1.3 = 1.9 [1]; average χ = (1.3 + 3.2) ÷ 2 = 2.25 [1]",
            "Large Δχ → positioned towards the ionic corner → predominantly ionic [1]",
            "Properties agree: high m.p., conducts when molten ✅",
          ]],
          ["eg", "<b>P2 · Deduce · 2 marks</b>　Predict the bonding type of an element with low χ (0.9) bonded to itself, then compare with a compound of average χ 2.9 and Δχ 0.2.", [
            "Low average χ and Δχ ≈ 0 → metallic (delocalised electrons) [1]",
            "High average χ and small Δχ → covalent (non-polar / slightly polar) [1]",
          ]],
          ["trap", ["Axes 調亂：x = 平均 χ，y = Δχ。", "「Ionic 純粹」✗：大部分 compound 係 intermediate，答案寫 “predominantly / mainly”。", "用 data booklet 數字，唔好自己估 χ。"]],
        ],
      },
      {
        h: "Alloys · polymers · plastics",
        min: 3.5,
        blocks: [
          ["key", "<b>Alloy</b>: a mixture of a metal with other elements (usually metals; steel = Fe + C). Different-sized atoms disrupt the regular layers so they cannot slide → harder, stronger, less malleable; often more resistant to corrosion; conductivity usually lower.<br>Examples: brass (Cu + Zn), bronze (Cu + Sn), steel (Fe + C), solder."],
          ["key", "<b>Addition polymer</b>: formed when monomers containing C=C join end to end, the double bond opening, with no atoms lost. <b>Repeating unit</b>: the smallest unit that repeats; draw in brackets with continuation bonds and subscript n."],
          ["table", ["Monomer", "Repeating unit", "Polymer"], [
            ["CH₂=CH₂ ethene", "–[CH₂–CH₂]–", "poly(ethene)"],
            ["CH₂=CHCH₃ propene", "–[CH₂–CH(CH₃)]–", "poly(propene)"],
            ["CH₂=CHCl chloroethene", "–[CH₂–CHCl]–", "poly(chloroethene), PVC"],
            ["CF₂=CF₂ tetrafluoroethene", "–[CF₂–CF₂]–", "PTFE (poly(tetrafluoroethene))"],
            ["CH₂=CHC₆H₅ phenylethene", "–[CH₂–CH(C₆H₅)]–", "polystyrene"],
          ]],
          ["rhyme", "口訣 1", "雙鍵打開手拖手", "C=C → C–C. Backbone has only 2 carbons per repeating unit; side groups hang off. Reverse: from repeating unit, put the double bond back between the two backbone carbons to name the monomer."],
          ["eg", "<b>P2 · Draw · 2 marks</b>　Draw the repeating unit of the polymer formed from propene, CH₂=CHCH₃.", [
            "Backbone –CH₂–CH– with CH₃ on the second carbon [1]",
            "Brackets crossing continuation bonds, with n [1] ✅（–[CH₂–CH(CH₃)]ₙ–）",
          ]],
          ["eg", "<b>P2 · Deduce · 1 mark</b>　The repeating unit of a polymer is –[CH₂–CHCl]–. Deduce the monomer.", [
            "Restore the C=C between the backbone carbons → <b>CH₂=CHCl</b> (chloroethene) ✅",
          ]],
          ["table", ["Plastics: advantages", "Problems (evaluate)"], [
            ["cheap, light, durable, insulating, easily moulded", "non-biodegradable, persist for centuries in landfill and oceans (microplastics enter food chains)"],
            ["chemically inert, waterproof", "made from fossil fuels (finite resource, CO₂ emissions)"],
            ["", "burning can release toxic gases (PVC → HCl) and CO₂ ; recycling needs sorting and downgrades quality"],
          ]],
          ["note", "<b>Waste strategies</b>: reduce, reuse, recycle (mechanical sorting by resin code), energy recovery by incineration, biodegradable or bio-based alternatives. A balanced answer gives a benefit AND a limitation of each."],
          ["trap", ["Poly(propene) 寫成 –CH₂–CH₂–CH₂– ✗ → CH₃ 係側鏈。", "Repeating unit 漏 brackets / continuation bonds / n。", "Addition polymer 要 C=C，冇原子流失（唔係 condensation）。", "Alloy 好處：「mixture」唔係「compound」。"]],
        ],
      },
      {
        h: "S2.4 口訣 + 數據",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "Bonding model 決定物料性質", "Locate the substance on the bonding triangle → name the bonding → explain the properties (m.p., conductivity, hardness)."],
          ["grid", [
            ["S2.4", "橫軸平均 χ，縱軸 Δχ", "Bonding triangle axes"],
            ["S2.4", "左下金屬、右下共價、頂部離子", "Corners: metallic / covalent / ionic"],
            ["S2.4", "雙鍵打開手拖手", "Addition polymerisation of alkenes"],
            ["S2.4", "兩碳主鏈加括號加 n", "Repeating unit with continuation bonds"],
            ["S2.4", "唔同大小原子阻層滑", "Alloys harder than pure metals"],
          ]],
          ["table", ["Fact", "Value", "Use it when…"], [
            ["Pauling χ (data booklet)", "Na 0.9 · Mg 1.3 · Al 1.6 · Si 1.9 · P 2.2 · S 2.6 · C 2.6 · N 3.0 · Cl 3.2 · O 3.4 · F 4.0", "bonding triangle"],
            ["Bonding type guide", "low average χ → metallic ; high average χ, small Δχ → covalent ; large Δχ (&gt; ~1.8) → ionic", "classifying compounds"],
          ]],
        ],
      },
    ],
    summary: [
      "Triangle：x 平均 χ，y Δχ；左下金屬、右下共價、頂離子",
      "雙鍵打開手拖手，兩碳主鏈加括號加 n",
      "合金：唔同大小原子阻層滑",
    ],
    practice: [
      { q: "S2.4 What is the monomer of the polymer with repeating unit –[CH₂–CHCl]–?", o: ["A. CH₃CH₂Cl", "B. CH₂=CHCl", "C. CHCl=CHCl", "D. CH₂Cl–CH₂Cl"], m: 1, a: "<b>B</b>. Restore the C=C between the backbone carbons." },
      { q: "Draw the repeating unit of the polymer formed from propene, CH₂=CHCH₃.", m: 2, a: "–[CH₂–CH(CH₃)]– with two-carbon backbone and CH₃ side group [1]; brackets with continuation bonds / n [1]." },
      { q: "Using χ(Al) = 1.6 and χ(Cl) = 3.2, calculate Δχ and the average χ for AlCl₃ and state what these imply.", m: 3, a: "Δχ = 3.2 − 1.6 = 1.6 [1]; average = 2.4 [1]; intermediate between ionic and polar covalent bonding [1]." },
    ],
  },
  "chem-5b": {
    title: "Periodic table · Periodic trends · Groups 1 & 17 · Oxides",
    intro: "S3.1：週期表所有 trend 用「核電荷、層數、屏蔽」三寶解釋；氧化物酸鹼 + oxidation state 係計算位。",
    parts: [
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["rhyme", "總綱", "核電荷、層數、屏蔽；金屬氧化物鹼、非金屬酸", "Every periodic trend = nuclear charge + number of shells (distance) + shielding → attraction on the outer electron. Metal oxides basic, non-metal oxides acidic, Al₂O₃ amphoteric."],
          ["grid", [
            ["S3.1", "Period = shells，group = 價電子", "Group 13–18: valence e⁻ = group − 10"],
            ["S3.1", "橫過 period：核電荷升、半徑細", "Across: radius ↓, IE ↑, χ ↑"],
            ["S3.1", "落 group：層數多、屏蔽大", "Down: radius ↑, IE ↓, χ ↓"],
            ["S3.1", "Cation 細過原子，anion 大過原子", "Ionic radius"],
            ["S3.1", "Group 1 越落越勁；Group 17 越落越弱", "Opposite directions"],
            ["S3.1", "強 halogen 趕走弱 halide", "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂"],
            ["S3.1", "金屬氧化物鹼，非金屬酸，Al₂O₃ 兩邊", "Amphoteric Al₂O₃"],
            ["S3.1", "元素零，總和平，O −2，H +1", "Oxidation state rules"],
            ["S3.1", "氧化態寫 +7，離子電荷寫 7+", "Notation"],
          ]],
          ["table", ["Fact", "Value", "Use it when…"], [
            ["Pauling χ (data booklet)", "Li 1.0 · Na 0.9 · K 0.8 · Mg 1.3 · Al 1.6 · Si 1.9 · P 2.2 · S 2.6 · H 2.2 · C 2.6 · N 3.0 · Cl 3.2 · O 3.4 · F 4.0", "bonding triangle, polarity"],
            ["Blocks", "s: groups 1–2 (+He) · p: 13–18 · d: 3–12 · f: lanthanoids / actinoids", "locating elements"],
            ["Metalloids", "B, Si, Ge, As, Sb, Te", "semi-metals"],
            ["Normal rain pH", "≈ 5.6 (dissolved CO₂) ; acid rain pH &lt; 5.6", "acid deposition"],
          ]],
        ],
      },
      {
        h: "Periodic table & trends 趨勢",
        min: 4,
        blocks: [
          ["table", ["Feature", "Meaning"], [
            ["Period (row)", "number of occupied energy levels (shells) = period number"],
            ["Group (column)", "same number of valence electrons (group 1: 1 ; 2: 2 ; 13–18: group − 10)"],
            ["Group names", "1 alkali metals · 2 alkaline earth metals · 17 halogens · 18 noble gases · 3–12 d-block (transition elements)"],
            ["Metals / non-metals", "metals left and centre ; non-metals upper right ; metalloids on the staircase"],
          ]],
          ["table", ["Property", "Across a period →", "Down a group ↓", "Explanation"], [
            ["Atomic radius", "decreases", "increases", "across: nuclear charge ↑, same shell, similar shielding ; down: more shells, more shielding"],
            ["Ionic radius", "decreases within cations, then within anions ; anions &gt; cations", "increases", "same ideas ; cations lose a shell, anions gain repulsion"],
            ["First ionisation energy", "increases (dips)", "decreases", "attraction nucleus–outer electron stronger across ; weaker down"],
            ["Electronegativity", "increases", "decreases", "attraction for bonding pair ; F highest"],
            ["Electron affinity", "generally more exothermic", "less exothermic", "energy released when X(g) + e⁻ → X⁻(g)"],
            ["Metallic character", "decreases", "increases", "ease of losing electrons"],
          ]],
          ["rhyme", "口訣 2", "核電荷、層數、屏蔽", "Always three points: (1) nuclear charge, (2) number of shells / distance, (3) shielding → attraction on outer electrons → effect on the property."],
          ["table", ["Species", "Radius comparison", "Reason"], [
            ["Na vs Na⁺", "Na⁺ smaller", "lost the outer shell ; same protons pull fewer electrons"],
            ["Cl vs Cl⁻", "Cl⁻ larger", "same nuclear charge, one more electron → more repulsion, cloud expands"],
            ["O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺", "isoelectronic: decreasing", "same electrons, nuclear charge increases"],
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why the atomic radius decreases across period 3.", [
            "Nuclear charge (protons) increases while electrons are added to the same shell, shielding approximately constant [1]",
            "Stronger attraction pulls the outer electrons closer to the nucleus [1] ✅",
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b>　Explain why the ionic radius of Cl⁻ is larger than the atomic radius of Cl.", [
            "Same nuclear charge but one more electron [1]",
            "Increased electron–electron repulsion, so the electron cloud expands [1] ✅",
          ]],
          ["trap", ["Across period radius 變細係因為 nuclear charge ↑ 而 <b>shielding 差唔多</b>，唔係「多咗電子」。", "冇寫 shielding 或 shells 其中一個。", "Noble gas 冇 χ 值。", "Anion 一定大過原子。"]],
        ],
      },
      {
        h: "Group 1 · Group 17",
        min: 3,
        blocks: [
          ["table", ["Group 1 (alkali metals)", "Detail"], [
            ["Reaction with water", "2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g) ; alkaline solution (pH &gt; 7)"],
            ["Observations", "Li floats, steady fizzing ; Na melts into a ball, moves, vigorous fizzing ; K ignites with lilac flame, violent"],
            ["Reactivity trend", "increases down the group"],
            ["Reason", "larger radius, more shielding → outer electron less attracted → lower IE → loses electron more easily"],
            ["Melting point", "decreases down the group : weaker metallic bonding (larger cations, same 1 electron)"],
            ["Others", "stored under oil ; soft ; form M⁺ ions ; oxides M₂O + H₂O → 2MOH"],
          ]],
          ["table", ["Group 17 (halogens)", "Detail"], [
            ["Appearance", "F₂ pale yellow gas · Cl₂ pale green gas · Br₂ red-brown liquid · I₂ grey-black solid (violet vapour)"],
            ["Boiling point", "increases down: more electrons → stronger London forces between diatomic molecules"],
            ["Reactivity trend", "decreases down the group"],
            ["Reason", "larger radius, more shielding → weaker attraction for incoming electron, less easily gain electron"],
            ["Displacement", "more reactive halogen oxidises the halide ion of a less reactive one"],
          ]],
          ["table", ["Reaction", "Ionic equation", "Observation"], [
            ["Cl₂ + KBr(aq)", "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂", "solution turns orange / brown"],
            ["Cl₂ + KI(aq)", "Cl₂ + 2I⁻ → 2Cl⁻ + I₂", "solution turns brown (black solid if excess)"],
            ["Br₂ + KI(aq)", "Br₂ + 2I⁻ → 2Br⁻ + I₂", "solution turns brown"],
            ["I₂ + KCl(aq)", "no reaction", "I₂ less reactive than Cl₂"],
          ]],
          ["rhyme", "口訣 3", "金屬越落越勁，鹵素越落越弱", "Group 1 loses electrons: easier down. Group 17 gains electrons: harder down. 兩個方向相反，因為一個係 lose、一個係 gain。"],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why the reactivity of group 1 metals increases down the group.", [
            "Atomic radius increases / more electron shells, more shielding [1]",
            "Weaker attraction between nucleus and outer electron [1]",
            "Lower first IE, so the outer electron is lost more easily [1] ✅",
          ]],
          ["eg", "<b>P2 · Write + predict · 2 marks</b>　Predict whether a reaction occurs when bromine water is added to potassium chloride solution, and justify.", [
            "No reaction [1]",
            "Br₂ is less reactive (weaker oxidising agent) than Cl₂, so cannot oxidise Cl⁻ [1] ✅",
          ]],
          ["trap", ["Halogen reactivity 方向同 Group 1 相反。", "Displacement 方向：強趕走弱 halide（Cl₂ 趕走 Br⁻、I⁻）。", "Group 1 + water 產物：hydroxide + hydrogen（唔係 oxide）。"]],
        ],
      },
      {
        h: "Oxides & oxidation states",
        min: 3,
        blocks: [
          ["table", ["Oxide", "Nature", "Equation with water / acid or base"], [
            ["Na₂O", "basic", "Na₂O + H₂O → 2NaOH"],
            ["MgO", "basic", "MgO + H₂O → Mg(OH)₂ (sparingly soluble) ; MgO + 2HCl → MgCl₂ + H₂O"],
            ["Al₂O₃", "amphoteric (reacts with acid AND base)", "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O ; Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄"],
            ["SiO₂", "acidic (insoluble in water)", "reacts with hot concentrated base"],
            ["P₄O₁₀", "acidic", "P₄O₁₀ + 6H₂O → 4H₃PO₄"],
            ["SO₂", "acidic", "SO₂ + H₂O → H₂SO₃"],
            ["SO₃", "acidic", "SO₃ + H₂O → H₂SO₄"],
            ["CO₂", "acidic", "CO₂ + H₂O ⇌ H₂CO₃"],
            ["NO₂", "acidic", "2NO₂ + H₂O → HNO₂ + HNO₃"],
          ]],
          ["key", "<b>Amphoteric</b>: able to react as both an acid and a base.　Metal oxides = basic (ionic) ; non-metal oxides = acidic (covalent) ; the change from basic to acidic across period 3 follows the change from metallic to non-metallic character."],
          ["note", "<b>Environmental link</b>: <b>acid deposition</b> — SO₂ (burning sulfur-containing fuel) and NOₓ (engines, N₂ + O₂ → 2NO at high temperature) dissolve in rain to give H₂SO₃/H₂SO₄ and HNO₃/HNO₂ ; rain pH &lt; 5.6 ; damages buildings (CaCO₃), aquatic life, soil. <b>Ocean acidification</b>: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ → lower pH, harms shell-forming organisms (CaCO₃ dissolves)."],
          ["key", "<b>Oxidation state rules</b>: elements = 0 ; sum in neutral compound = 0 ; sum in ion = charge ; group 1 = +1 ; group 2 = +2 ; F = −1 ; H = +1 (−1 in metal hydrides) ; O = −2 (−1 in peroxides). Write with sign first: +7, −2 ; name with roman numeral: manganese(VII)."],
          ["eg", "<b>P2 · Deduce · 1–2 marks each</b>　Deduce the oxidation state of (a) Mn in KMnO₄ (b) Cr in Cr₂O₇²⁻ (c) S in Na₂S₂O₃ (d) N in NH₄⁺ (e) O in H₂O₂.", [
            "(a) +1 + x + 4(−2) = 0 → x = <b>+7</b>",
            "(b) 2x + 7(−2) = −2 → 2x = +12 → <b>+6</b>",
            "(c) 2(+1) + 2x + 3(−2) = 0 → 2x = +4 → <b>+2</b>",
            "(d) x + 4(+1) = +1 → <b>−3</b>",
            "(e) 2(+1) + 2x = 0 → <b>−1</b>（peroxide）✅",
          ]],
          ["eg", "<b>P2 · Write · 2 marks</b>　Write an equation for the reaction of sulfur trioxide with water and state the nature of the oxide.", [
            "SO₃(g) + H₂O(l) → H₂SO₄(aq) [1]",
            "SO₃ is an acidic oxide (non-metal oxide) [1] ✅",
          ]],
          ["note", "Transition elements (d-block) show variable oxidation states (e.g. Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺, Mn +2 to +7) and often form coloured compounds."],
          ["trap", ["寫 oxidation state 漏正號 / 位置：+7 唔好寫 7+（7+ 係 ion charge）。", "H₂O₂ 入面 O 係 −1；metal hydride（NaH）入面 H 係 −1。", "Al₂O₃ 當 basic only ✗ → amphoteric。", "SO₂ 同 SO₃ 同 SO₄²⁻ 唔好混：S +4, +6, +6。"]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Explain (trend)","Period 3: nuclear charge increases, same shell, shielding about constant. Group: more shells, more shielding."],["Predict","Use trend plus a named reason; state the direction (increases / decreases)."],["Write an equation","Balanced with state symbols; oxide + water acid / alkaline equations."],["Identify (bonding type)","Use electronegativity difference and bonding triangle (data booklet: values of χ)."],["Compare","Both elements, same property, comparative word."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Atomic radius / IE / EN across period","Nuclear charge ↑, same shielding, stronger attraction: radius ↓, IE ↑, EN ↑."],["Reactivity Group 1 vs 17","Group 1 more reactive down (lose e⁻ easier); halogens less reactive down (gain e⁻ harder)."],["Halogen displacement","More reactive halogen displaces less reactive from its halide: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂."],["Period 3 oxides","Metal oxides basic, Al₂O₃ amphoteric, non-metal oxides acidic; write equation with water."],["Bonding type from EN","Δχ large → ionic; small → covalent; low average χ → metallic."]]],
          ["note", "Trend 題要用 “because” 加 nuclear charge / shielding / distance 三選二。Periodic trend 數據（EN、radius）喺 data booklet，答題引用數字可得 1 分。Reject “bigger nucleus” 當 explanation，要寫 nuclear charge。"],
        ],
      },
      {
        h: "長題拆解法 + 失分位",
        min: 2.5,
        blocks: [
          ["table", ["If the question says…", "It is…", "Answer frame"], [
            ["“Explain the trend in radius / IE / χ”", "periodicity", "nuclear charge + shells + shielding → attraction → trend"],
            ["“Explain the difference between X and X⁻ (or X⁺) radius”", "ionic radius", "same Z ; lose / gain electrons ; repulsion or fewer shells"],
            ["“Predict whether a reaction occurs (halogens)”", "displacement", "which halogen is more reactive ? ionic equation"],
            ["“Write an equation for the oxide with water”", "oxide acid-base", "balanced equation + nature"],
            ["“Deduce the oxidation state”", "algebra", "sign rules ; sum = charge"],
            ["“Draw the repeating unit / deduce monomer”", "addition polymer", "open C=C, 2-C backbone, brackets, n"],
            ["“Using χ, determine bond type”", "bonding triangle", "Δχ and average χ"],
          ]],
          ["eg", "<b>P2 · 6 marks (long)</b>　(a) Explain why the first ionisation energy of sodium is lower than that of lithium. (b) State the bonding type in sodium oxide using χ(Na) = 0.9, χ(O) = 3.4. (c) Write an equation for sodium oxide with water.", [
            "(a) Na has an extra shell / larger radius [1]; more shielding, weaker attraction on outer electron [1]; less energy needed [1]",
            "(b) Δχ = 3.4 − 0.9 = 2.5 ; average = 2.15 → ionic [1]",
            "(c) Na₂O + H₂O → 2NaOH [1] ; basic oxide, alkaline solution [1] ✅",
          ]],
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Radius decreases because more electrons", "nuclear charge increases, shielding similar"],
            ["2", "Only one of charge / shells / shielding", "give all three"],
            ["3", "Group 17 reactivity increases down", "decreases"],
            ["4", "Wrong displacement direction", "stronger halogen oxidises weaker halide"],
            ["5", "Anion smaller than atom", "anion larger"],
            ["6", "Al₂O₃ basic", "amphoteric"],
            ["7", "Oxidation state 7+ / 7", "+7 for oxidation state"],
            ["8", "H₂O₂ O = −2", "−1 (peroxide)"],
            ["9", "Polymer repeating unit missing n or brackets", "–[…]ₙ– with continuation bonds"],
            ["10", "Propene polymer drawn with CH₃ in the backbone", "CH₃ is a side group"],
            ["11", "χ values guessed", "use data booklet"],
            ["12", "Acid rain caused only by CO₂", "SO₂ and NOₓ ; CO₂ gives normal pH 5.6"],
          ]],
          ["note", "<b>常考</b>：trend explanations (2–3 marks)、polymer repeating unit (2 marks)、oxide equation + nature (2 marks)、oxidation state of a named element (1 mark)、halogen displacement prediction (2 marks)、bonding triangle classification (2–3 marks)。"],
          ["check", [
            "Plot / classify a compound on the bonding triangle using Δχ and average χ",
            "Explain alloys and draw / deduce addition polymers; discuss plastics problems",
            "Describe period, group, block, metalloid, transition element",
            "Explain radius, ionic radius, IE, χ trends with the three points",
            "Describe group 1 + water and group 17 displacement, with equations",
            "Write equations for Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₂, SO₃, CO₂, NO₂",
            "Calculate oxidation states including exceptions",
            "Link oxides to acid deposition and ocean acidification",
          ]],
        ],
      },
    ],
    summary: [
      "核電荷、層數、屏蔽解釋所有 trend",
      "Cation 細，anion 大；isoelectronic 核電荷越大越細",
      "Group 1 越落越勁，Group 17 越落越弱；強鹵素趕走弱 halide",
      "金屬氧化物鹼，非金屬酸，Al₂O₃ amphoteric",
      "元素零，總和平，O −2，H +1；寫 +7 唔寫 7+",
    ],
    practice: [
      { q: "S3.1 Which element has the largest atomic radius?", o: ["A. Na", "B. Mg", "C. Cl", "D. Ar"], m: 1, a: "<b>A</b>. Radius decreases across period 3 (more protons, same shell)." },
      { q: "S3.1 Which oxide forms an acidic solution in water?", o: ["A. Na₂O", "B. MgO", "C. SO₂", "D. CaO"], m: 1, a: "<b>C</b>. Non-metal oxide: SO₂ + H₂O → H₂SO₃." },
      { q: "S3.1 Which reaction occurs?", o: ["A. I₂ + 2KBr → 2KI + Br₂", "B. Br₂ + 2KCl → 2KBr + Cl₂", "C. Cl₂ + 2KI → 2KCl + I₂", "D. I₂ + 2KCl → 2KI + Cl₂"], m: 1, a: "<b>C</b>. A more reactive halogen displaces a less reactive halide." },
      { q: "S3.1 What is the oxidation state of manganese in KMnO₄?", o: ["A. +2", "B. +4", "C. +6", "D. +7"], m: 1, a: "<b>D</b>. +1 + x + 4(−2) = 0 → +7." },
      { q: "S3.1 Which has the largest radius?", o: ["A. F⁻", "B. Na⁺", "C. Mg²⁺", "D. Al³⁺"], m: 1, a: "<b>A</b>. Isoelectronic; fewest protons = largest radius." },
      { q: "S3.1 Define the term amphoteric.", m: 1, a: "Able to react as both an acid and a base [1]." },
      { q: "Explain why atomic radius decreases across period 3.", m: 2, a: "Nuclear charge increases while electrons are added to the same shell / shielding similar [1]; greater attraction pulls outer electrons closer [1]." },
      { q: "Explain why the ionic radius of Cl⁻ is larger than the atomic radius of Cl.", m: 2, a: "Same nuclear charge but one more electron [1]; increased electron–electron repulsion expands the cloud [1]." },
      { q: "Explain why the reactivity of group 1 metals increases down the group.", m: 3, a: "Atomic radius increases / more shells [1]; more shielding, weaker attraction for the outer electron [1]; lower ionisation energy so electron lost more easily [1]." },
      { q: "Write an equation for the reaction of sodium oxide with water and state the nature of the oxide.", m: 2, a: "Na₂O + H₂O → 2NaOH [1]; basic oxide [1]." },
      { q: "Deduce the oxidation state of sulfur in Na₂S₂O₃.", m: 1, a: "+2 : 2(+1) + 2x + 3(−2) = 0 [1]." },
      { q: "Explain how acid deposition forms and give one effect.", m: 3, a: "Combustion of sulfur-containing fuels gives SO₂ (or NOₓ from engines at high temperature) [1]; these acidic oxides react with water in the atmosphere to form H₂SO₃/H₂SO₄ or HNO₃ [1]; effect e.g. damages limestone buildings / kills aquatic life [1]." },
    ],
  },

  "chem-6": {
    title: "Functional groups · IUPAC naming · Isomers · IHD · MS / IR / ¹H NMR",
    intro: "有機題 = 認 functional group → 識命名 → 識 isomer → 用 spectra 拆謎。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Homologous series & functional groups 官能團",
        min: 3,
        blocks: [
          ["key", "<b>Homologous series</b> = a family of compounds with the <b>same functional group</b> and the <b>same general formula</b>, each member differing from the next by <b>CH₂</b>. They have <b>similar chemical properties</b> and a <b>gradual trend in physical properties</b> (e.g. boiling point ↑ as chain gets longer).<br><b>Functional group</b> = the atom or group of atoms that is responsible for the characteristic reactions of a compound."],
          ["rhyme", "口訣 1", "認組先，其他自然通", "看到任何有機題，第一步圈出 functional group：佢決定 (a) 個名 (b) 反應 (c) IR 見咩峰 (d) NMR 有咩 H。"],
          ["table", ["Class", "Functional group", "General formula", "Suffix / prefix", "Example"], [
            ["alkane", "C–C single only", "CₙH₂ₙ₊₂", "-ane", "propane CH₃CH₂CH₃"],
            ["alkene", "C=C", "CₙH₂ₙ", "-ene", "but-1-ene CH₂=CHCH₂CH₃"],
            ["alkyne", "C≡C", "CₙH₂ₙ₋₂", "-yne", "ethyne HC≡CH"],
            ["halogenoalkane", "C–X (X = F, Cl, Br, I)", "CₙH₂ₙ₊₁X", "fluoro-, chloro-, bromo-, iodo- (prefix)", "2-bromopropane CH₃CHBrCH₃"],
            ["alcohol", "–OH (hydroxyl)", "CₙH₂ₙ₊₁OH", "-ol", "propan-2-ol CH₃CH(OH)CH₃"],
            ["aldehyde", "–CHO (C=O at END of chain)", "CₙH₂ₙO", "-al", "propanal CH₃CH₂CHO"],
            ["ketone", "C=O (in the MIDDLE of chain)", "CₙH₂ₙO", "-one", "propanone CH₃COCH₃"],
            ["carboxylic acid", "–COOH (carboxyl)", "CₙH₂ₙO₂", "-oic acid", "ethanoic acid CH₃COOH"],
            ["ester", "–COO– (–COOR)", "CₙH₂ₙO₂", "alkyl …-oate", "methyl ethanoate CH₃COOCH₃"],
            ["ether", "C–O–C", "CₙH₂ₙ₊₂O", "alkoxy- (prefix)", "methoxyethane CH₃OCH₂CH₃"],
            ["amine", "–NH₂ (amino)", "CₙH₂ₙ₊₃N (primary)", "-amine", "ethanamine CH₃CH₂NH₂"],
            ["amide", "–CONH₂ (amido)", "CₙH₂ₙ₊₁NO (primary)", "-amide", "ethanamide CH₃CONH₂"],
            ["arene", "benzene ring C₆H₅–", "C₆H₆ (benzene)", "benzene / phenyl (prefix)", "methylbenzene C₆H₅CH₃"],
          ]],
          ["note", "<b>Saturated</b> = only single C–C bonds (alkanes). <b>Unsaturated</b> = at least one C=C or C≡C. <b>Hydrocarbon</b> = contains only C and H. Alkane CₙH₂ₙ₊₂ vs alkene CₙH₂ₙ: 少咗 2 粒 H = 多一個 π bond or ring。"],
          ["eg", "<b>P1 MCQ · 1 mark style</b> Name the class of each: (a) CH₃CH₂CHO (b) CH₃COCH₂CH₃ (c) CH₃COOCH₂CH₃ (d) CH₃CH₂OCH₃", [
            "(a) –CHO at end → <b>aldehyde</b> (propanal)",
            "(b) C=O between two carbons → <b>ketone</b> (butanone)",
            "(c) C(=O)–O–C ester linkage → <b>ester</b> (ethyl ethanoate)",
            "(d) C–O–C with only C on both sides → <b>ether</b> (methoxyethane)。⚠ 唔好同 ester 撈亂：ester 有 C=O，ether 冇。",
          ]],
          ["trap", ["Aldehyde vs ketone：–CHO 一定喺鏈尾；C=O 喺中間 = ketone。", "Carboxylic acid 嘅 C=O 同 O–H 係同一組 –COOH，唔好當成 ketone + alcohol。", "Ester 同 carboxylic acid 係 functional-group isomers（同分子式，如 C₃H₆O₂），分別係有冇 acidic O–H。"]],
        ],
      },
      {
        h: "IUPAC naming 命名",
        min: 4,
        blocks: [
          ["table", ["C atoms", "Stem", "Alkyl branch", "C atoms", "Stem", "Alkyl branch"], [
            ["1", "meth-", "methyl", "4", "but-", "butyl"],
            ["2", "eth-", "ethyl", "5", "pent-", "pentyl"],
            ["3", "prop-", "propyl", "6", "hex-", "hexyl"],
          ]],
          ["flow", [["① 主鏈", "Find the longest carbon chain that contains the functional group → stem (meth-, eth-, prop-…)"], ["② 編號", "Number from the end that gives the functional group the LOWEST locant (then C=C, then branches)"], ["③ 寫名", "Substituents in ALPHABETICAL order (ignore di-/tri-), each with its locant, then stem + suffix"]]],
          ["rhyme", "口訣 2", "最長鏈、最細號、字母排", "Longest chain (containing the group) → lowest locant → alphabetical. 例：2-methylbutan-1-ol、3-chloro-2-methylpentane。"],
          ["table", ["Rule", "Detail", "Example"], [
            ["Multiple identical branches", "di- (2), tri- (3), tetra- (4); every branch gets its own locant; locants separated by commas", "2,2-dimethylpropane"],
            ["Numbers vs letters", "numbers–numbers with commas; numbers–letters with hyphens", "2,3-dimethylbutane; 2-bromo-3-chlorobutane"],
            ["Alkene / alkyne", "locant of the FIRST carbon of the multiple bond, placed before the suffix", "pent-2-ene; but-1-yne"],
            ["Alcohol / ketone / amine", "locant of the carbon carrying the group, before the suffix", "butan-2-ol; pentan-3-one; propan-1-amine"],
            ["Aldehyde / acid / amide", "group is on C1 so NO locant needed (the carbon is part of the chain)", "butanal; 2-methylpropanoic acid; ethanamide"],
            ["Halogen / alkoxy / alkyl", "always PREFIX with locant, alphabetical (bromo, chloro, ethyl, fluoro, iodo, methyl, methoxy)", "1,2-dichloroethane; 2-bromo-2-methylpropane"],
            ["Ester", "name = alkyl (from the ALCOHOL part, on the O) + stem-oate (from the ACID part, contains C=O)", "CH₃CH₂COOCH₃ = methyl propanoate"],
            ["Ether", "shorter alkyl + O → alkoxy prefix on the longer chain", "CH₃OCH₂CH₃ = methoxyethane"],
            ["Benzene ring", "benzene as parent (methylbenzene) or phenyl– as a branch", "C₆H₅CH₃ methylbenzene; C₆H₅NH₂ phenylamine"],
          ]],
          ["note", "<b>Priority when a molecule has two groups</b>（high → low）：carboxylic acid › ester › amide › aldehyde › ketone › alcohol › amine › C=C › halogen/alkyl。Highest-priority group gives the suffix; the others become prefixes（–OH = hydroxy-, –NH₂ = amino-, C=O = oxo-）。例：HOCH₂COOH = 2-hydroxyethanoic acid。"],
          ["eg", "<b>P2 · 'State the IUPAC name' · 1 mark each</b> Name (a) CH₃CH(CH₃)CH₂CH₃ (b) CH₃C(CH₃)₂CH₂Br (c) CH₃CH₂CH(OH)CH₂CH₃ (d) CH₃CH=CHCH₂CH₃ (e) (CH₃)₂CHCH₂COOH (f) CH₃CH₂COOCH₂CH₂CH₃", [
            "(a) longest chain 4 C (butane) with CH₃ on C2 → <b>2-methylbutane</b>（唔係 3-methylbutane：從另一端數會變 3，要最細）",
            "(b) chain 3 C (propane); two CH₃ + Br on the same carbon... Br is on CH₂ (C1), the two CH₃ on C2 → <b>1-bromo-2,2-dimethylpropane</b>",
            "(c) 5 C chain, OH on the middle carbon (C3) → <b>pentan-3-ol</b>",
            "(d) 5 C chain, C=C starts at C2 (number from the end nearer the double bond) → <b>pent-2-ene</b>",
            "(e) acid carbon = C1; chain C1–C2–C3(CH₃)... CH₂ is C2, CH is C3 carrying CH₃ → <b>3-methylbutanoic acid</b>",
            "(f) acid part has 3 C (propanoate); alcohol part is propyl → <b>propyl propanoate</b>",
          ]],
          ["trap", ["Longest chain 唔一定係畫得最長嗰條線：要睇清楚轉彎之後仲有冇更長。", "Alkane 命名：編號令 branch locants 總體最細；alcohol 等：先俾 functional group 最細號，再計 branch。", "Ester 次序反轉最常見：CH₃COOCH₂CH₃ = <b>ethyl</b> ethanoate（O 後面嗰段 = ethyl），唔係 methyl propanoate。", "Alphabetical 唔計 di-/tri-：按 branch 名第一個字母排，ethyl (e) 排 methyl (m) 之前：3-ethyl-2-methylpentane；2,3-dimethyl 就按 m 排。"]],
        ],
      },
      {
        h: "Structural isomers 結構異構體 · 1° 2° 3°",
        min: 3,
        blocks: [
          ["key", "<b>Structural isomers</b>: compounds with the <b>same molecular formula</b> but <b>different structural formulae</b> (different arrangement of atoms / order of bonding)."],
          ["table", ["Type", "What changes", "Example (same formula)"], [
            ["Chain", "branching of carbon skeleton", "C₄H₁₀: butane / 2-methylpropane"],
            ["Position", "same group on a different carbon", "C₃H₇Br: 1-bromopropane / 2-bromopropane"],
            ["Functional group", "different class altogether", "C₂H₆O: ethanol / methoxymethane; C₃H₆O: propanal / propanone; C₃H₆O₂: propanoic acid / methyl ethanoate / ethyl methanoate"],
          ]],
          ["note", "Stereoisomers（cis/trans, optical）= 另一回事，SL 重點係 structural isomers；d 題問 “structural isomers” 就唔使畫 cis/trans。"],
          ["rhyme", "口訣 3", "數碳鄰居定級數", "睇連住 –OH / –X（或 N）嗰粒 C，有幾多粒 <b>C</b> 鄰居：1 粒 = primary (1°)，2 粒 = secondary (2°)，3 粒 = tertiary (3°)。CH₃OH 當 primary。"],
          ["table", ["Class", "Alcohol", "Halogenoalkane", "Amine (look at N)"], [
            ["primary 1°", "CH₃CH₂CH₂OH propan-1-ol", "CH₃CH₂Br bromoethane", "CH₃NH₂: N bonded to 1 C"],
            ["secondary 2°", "CH₃CH(OH)CH₃ propan-2-ol", "CH₃CHBrCH₃ 2-bromopropane", "(CH₃)₂NH: N bonded to 2 C"],
            ["tertiary 3°", "(CH₃)₃COH 2-methylpropan-2-ol", "(CH₃)₃CBr 2-bromo-2-methylpropane", "(CH₃)₃N: N bonded to 3 C"],
          ]],
          ["note", "Amine 分級睇 <b>N 連幾多粒 C</b>（唔係睇 C 嘅鄰居）；alcohol / halogenoalkane 睇帶住 –OH / –X 嗰粒 C 連幾多粒 <b>C</b>。"],
          ["eg", "<b>P2 · 'Draw/deduce' · 3-4 marks</b> Draw and name all isomers of C₄H₁₀O which are alcohols, and classify each. How many ethers?", [
            "Alcohol: write the 4 C skeletons: straight butane chain or branched 2-methylpropane, then put OH in each different position",
            "① butan-1-ol CH₃CH₂CH₂CH₂OH — C bonded to 1 C → <b>primary</b>",
            "② butan-2-ol CH₃CH(OH)CH₂CH₃ — 2 C neighbours → <b>secondary</b>",
            "③ 2-methylpropan-1-ol (CH₃)₂CHCH₂OH — 1 C neighbour → <b>primary</b>",
            "④ 2-methylpropan-2-ol (CH₃)₃COH — 3 C neighbours → <b>tertiary</b>",
            "Ethers C₄H₁₀O: methoxypropane, 2-methoxypropane, ethoxyethane = <b>3</b> → total 7 structural isomers of C₄H₁₀O ✅",
          ]],
          ["eg", "<b>P2 · 'Draw' · 3 marks</b> Draw all structural isomers of C₅H₁₂ and name them.", [
            "Longest chain 5: <b>pentane</b> CH₃CH₂CH₂CH₂CH₃",
            "Longest chain 4 + 1 methyl: methyl on C2 (C3 gives the same molecule) → <b>2-methylbutane</b>",
            "Longest chain 3 + two methyls on C2 → <b>2,2-dimethylpropane</b>",
            "Total = <b>3</b> ✅（C₆H₁₄ = 5 isomers）",
          ]],
          ["trap", ["畫 isomer 唔好同一個分子轉個方向畫兩次（例如 2-methylbutane 同 3-methylbutane 係同一個）。", "Chain isomer 要確認 longest chain 同個名一致，用命名嚟 check 有冇重複。", "Aldehyde 同 ketone 係 functional-group isomers；carboxylic acid 同 ester 都係；alcohol 同 ether 都係。"]],
        ],
      },
      {
        h: "IHD · molecular formula tools",
        min: 2,
        blocks: [
          ["key", "<b>Index of hydrogen deficiency (IHD)</b> = number of rings + π bonds (a C=C or C=O counts 1, C≡C counts 2, a benzene ring counts 4)<br><b>IHD = (2C + 2 + N − H − X) ÷ 2</b>　(X = halogens；O and S are ignored)"],
          ["table", ["Formula", "IHD calculation", "IHD", "Meaning"], [
            ["C₄H₁₀", "(8 + 2 − 10)/2", "0", "saturated, no ring"],
            ["C₃H₆O", "(6 + 2 − 6)/2", "1", "one C=O (or C=C or a ring)"],
            ["C₂H₄O₂", "(4 + 2 − 4)/2", "1", "C=O in –COOH or ester"],
            ["C₄H₆", "(8 + 2 − 6)/2", "2", "alkyne, diene or ring + C=C"],
            ["C₆H₆", "(12 + 2 − 6)/2", "4", "benzene ring (3 C=C + 1 ring)"],
            ["C₂H₃Cl", "(4 + 2 − 3 − 1)/2", "1", "C=C (chloroethene)"],
            ["C₂H₇N", "(4 + 2 + 1 − 7)/2", "0", "saturated amine"],
            ["C₈H₁₀", "(16 + 2 − 10)/2", "4", "contains a benzene ring"],
          ]],
          ["rhyme", "口訣 4", "O 唔計，鹵素當 H，N 加一", "IHD = 0 → saturated and acyclic；IHD ≥ 4 and C ≥ 6 → suspect a benzene ring。"],
          ["trap", ["N 係 +N 唔係 −N；鹵素 X 係同 H 一齊減。", "IHD = 1 唔一定係 C=C：可以係 C=O 或者 ring。要靠 IR 排除。"]],
        ],
      },
      {
        h: "Mass spectrometry 質譜 MS",
        min: 2.5,
        blocks: [
          ["key", "Sample is ionised: M → M⁺• + e⁻. The peak with the <b>highest m/z</b> (ignore tiny M+1 peak) is the <b>molecular ion M⁺</b>, so <b>m/z = relative molecular mass M<sub>r</sub></b>. Smaller peaks are <b>fragments</b> (positive ions) formed when M⁺ breaks apart. m/z of a fragment = its mass because charge = +1."],
          ["rhyme", "口訣 5", "最右係 M，差數睇斷咗乜", "Subtract the fragment from M: M − 15 = lost CH₃；M − 17 = lost OH；M − 29 = lost C₂H₅ or CHO；M − 45 = lost COOH。"],
          ["table", ["m/z", "Fragment", "m/z", "Fragment"], [
            ["15", "CH₃⁺", "43", "C₃H₇⁺ or CH₃CO⁺"],
            ["17", "OH⁺", "45", "COOH⁺ (or C₂H₅O⁺)"],
            ["29", "C₂H₅⁺ or CHO⁺", "57", "C₄H₉⁺"],
            ["31", "CH₂OH⁺", "77", "C₆H₅⁺"],
          ]],
          ["table", ["Compound", "M⁺", "Typical fragments (m/z)"], [
            ["ethanol CH₃CH₂OH", "46", "31 (CH₂OH⁺), 29, 15"],
            ["propanone CH₃COCH₃", "58", "43 (CH₃CO⁺, base peak), 15"],
            ["ethanoic acid CH₃COOH", "60", "45 (COOH⁺), 43 (CH₃CO⁺), 15"],
            ["butane", "58", "43 (C₃H₇⁺), 29 (C₂H₅⁺), 15"],
          ]],
          ["note", "<b>Halogen isotope pattern</b>：Cl 有 ³⁵Cl : ³⁷Cl ≈ 3 : 1 → M and M+2 peaks in 3 : 1；Br 有 ⁷⁹Br : ⁸¹Br ≈ 1 : 1 → M and M+2 peaks equal height。"],
          ["eg", "<b>P2 · 'Deduce' · 2 marks</b> A compound shows M⁺ at m/z 60 and major fragments at 45 and 15. Which functional group is likely?", [
            "M − 45 = 15 → loss of COOH (45) leaves CH₃⁺ (15)",
            "45 = COOH⁺ → suggests carboxylic acid; M = 60 = C₂H₄O₂ → <b>ethanoic acid</b> ✅（用 IR 2500–3000 broad 確認）",
          ]],
          ["trap", ["M⁺ 係最大 m/z，唔係最高嘅 peak（base peak 通常係某個 fragment）。", "Fragment 要寫成 positive ion with ⁺，例如 CH₃⁺，唔可以寫中性 CH₃。", "m/z 15, 29, 43… 差 14 = 一組 CH₂，通常係 alkyl 鏈。"]],
        ],
      },
      {
        h: "Infrared spectroscopy 紅外 IR",
        min: 2,
        blocks: [
          ["key", "Bonds <b>absorb IR radiation</b> at characteristic <b>wavenumbers (cm⁻¹)</b> because they vibrate (stretch / bend). Different bonds → different absorptions → identifies functional groups. The data booklet gives the ranges (units cm⁻¹); you read <b>% transmittance dips</b>, not peaks upwards."],
          ["table", ["Bond", "Wavenumber / cm⁻¹", "Appearance / found in"], [
            ["O–H (alcohol, phenol)", "3200–3600", "strong, <b>broad</b> — alcohols"],
            ["O–H (carboxylic acid)", "2500–3000", "strong, <b>very broad</b>, overlaps C–H — acids"],
            ["N–H", "3300–3500", "amines, amides"],
            ["C–H", "2850–3090", "almost every organic compound"],
            ["C≡C", "2100–2260", "alkynes"],
            ["C=O", "1700–1750", "strong, sharp — aldehyde, ketone, acid, ester, amide"],
            ["C=C", "1620–1680", "alkenes (weaker)"],
            ["C–O", "1050–1410", "alcohols, ethers, esters, acids"],
          ]],
          ["rhyme", "口訣 6", "三千幾闊係 OH，一七零零係 C=O", "Broad 3200–3600 only (no C=O) → alcohol；very broad 2500–3000 + 1700–1750 → carboxylic acid；1700–1750 and NO O–H → aldehyde / ketone / ester。"],
          ["table", ["Compound", "Look for", "Do NOT see"], [
            ["alcohol (ethanol)", "broad 3200–3600; C–O ~1050–1410", "C=O"],
            ["aldehyde / ketone", "strong 1700–1750", "any O–H"],
            ["carboxylic acid", "very broad 2500–3000 AND 1700–1750", "—"],
            ["ester", "1700–1750 AND C–O 1050–1410", "O–H"],
            ["alkene", "1620–1680 and C–H 2850–3090", "O–H, C=O"],
          ]],
          ["note", "IR 可以追蹤反應：alcohol → aldehyde / acid 時，broad O–H 消失 / 變得更闊而 C=O (1700–1750) 出現。Fingerprint region（&lt; 1500 cm⁻¹）一般用嚟同 database 比較，唔使逐個峰分析。"],
          ["trap", ["要寫埋 wavenumber range 同 bond，單寫 “O–H” 冇 range = 0 mark。", "Alcohol 嘅 O–H（3200–3600）同 acid 嘅 O–H（2500–3000）位置唔同。", "同一個 C=O range 不能區分 aldehyde / ketone / ester / acid，要配合 NMR 或 O–H。"]],
        ],
      },
      {
        h: "¹H NMR 核磁共振 (SL)",
        min: 3,
        blocks: [
          ["key", "¹H NMR gives 3 pieces of info (SL):<br>① <b>Number of signals</b> = number of different (non-equivalent) H environments<br>② <b>Integration (relative peak area)</b> = ratio of number of H in each environment<br>③ <b>Chemical shift δ (ppm)</b> measured relative to <b>TMS (tetramethylsilane, δ = 0)</b> tells the type of environment (use data booklet). TMS gives one sharp signal, is inert and volatile, 12 equivalent H.<br>Splitting patterns (multiplets, n + 1) = AHL only — SL 唔使。"],
          ["rhyme", "口訣 7", "數屋企、數人頭、睇位置", "Signals = how many 屋企 (environments)；integration = how many 人 (H) in each；shift = where the 屋 is (next to O, C=O, ring…)。"],
          ["table", ["Environment", "Approx. δ / ppm (check booklet)"], [
            ["alkyl C–H (CH₃, CH₂, CH)", "0.9 – 1.7"],
            ["H–C next to C=O (CH₃CO–, –CH₂CO–)", "2.0 – 2.7"],
            ["H–C–O (alcohol, ether, ester)", "3.3 – 4.3"],
            ["C=C–H (alkene)", "4.5 – 6.0"],
            ["aromatic H (benzene ring)", "6.9 – 9.0"],
            ["aldehyde H–C=O", "9.4 – 10.0"],
            ["carboxylic acid O–H", "10 – 12"],
          ]],
          ["note", "Equivalent H 判斷：同一個 C 上嘅 H（free rotation）equivalent；對稱位置嘅 C 上嘅 H equivalent（如 (CH₃)₂CO 兩個 CH₃ 完全一樣 = 1 signal）。O–H 通常都算自己一個 signal。"],
          ["table", ["Compound", "Environments (H count)", "Signals", "Ratio"], [
            ["ethanol CH₃CH₂OH", "CH₃ (3), CH₂ (2), OH (1)", "3", "3 : 2 : 1"],
            ["propan-1-ol", "CH₃ (3), CH₂ (2), CH₂O (2), OH (1)", "4", "3 : 2 : 2 : 1"],
            ["propan-2-ol (CH₃)₂CHOH", "2 × CH₃ (6), CH (1), OH (1)", "3", "6 : 1 : 1"],
            ["propanone (CH₃)₂CO", "all 6 H equivalent", "1", "—"],
            ["propanal CH₃CH₂CHO", "CH₃ (3), CH₂ (2), CHO (1)", "3", "3 : 2 : 1"],
            ["ethanoic acid CH₃COOH", "CH₃ (3), COOH (1)", "2", "3 : 1"],
            ["methyl ethanoate CH₃COOCH₃", "CH₃CO (3), OCH₃ (3)", "2", "1 : 1"],
            ["ethyl ethanoate CH₃COOCH₂CH₃", "CH₃CO (3), OCH₂ (2), CH₃ (3)", "3", "3 : 2 : 3"],
            ["butane", "CH₃ (6), CH₂ (4)", "2", "3 : 2"],
            ["2-methylpropane", "CH₃ (9), CH (1)", "2", "9 : 1"],
            ["1,2-dichloroethane", "all 4 H equivalent", "1", "—"],
            ["1,1-dichloroethane", "CH₃ (3), CHCl₂ (1)", "2", "3 : 1"],
            ["benzene", "all 6 H equivalent", "1", "—"],
            ["methylbenzene", "CH₃ (3), ortho (2), meta (2), para (1)", "4", "3 : 2 : 2 : 1"],
          ]],
          ["eg", "<b>P1 MCQ / P2 · 'Deduce' · 2 marks</b> How many ¹H NMR signals does pentan-3-one, CH₃CH₂COCH₂CH₃, show, and in what ratio?", [
            "Molecule is symmetrical about C=O: the two CH₃ equivalent, the two CH₂ equivalent",
            "Environments: CH₃ (6 H), CH₂ (4 H) → <b>2 signals</b>",
            "Ratio 6 : 4 = <b>3 : 2</b> ✅",
          ]],
          ["trap", ["Ratio 要化簡：6 : 4 寫成 3 : 2；integration 係 H 嘅比例，唔係 C 嘅。", "Symmetry 令 signal 少咗：propanone 得 1 個，唔係 2 個。", "SL 唔需要寫 splitting（triplet / quartet）。"]],
        ],
      },
      {
        h: "Combined spectra 拆謎方法",
        min: 3.5,
        blocks: [
          ["note", "<b>常考</b>：combined MS/IR/NMR 「deduce the structure」(3-4 marks) 係 perennial favourite；IUPAC 命名、IHD、count NMR signals 幾乎每年都有 P1 MCQ。每個 mark = 一條 evidence + 一個 conclusion。"],
          ["flow", [["① MS", "M⁺ → M<sub>r</sub>；fragments → pieces"], ["② 公式", "If % composition / formula given → molecular formula → IHD"], ["③ IR", "Circle O–H / C=O / C=C → functional group(s)"], ["④ NMR", "Signals, ratio, shifts → carbon skeleton"], ["⑤ 驗證", "Draw it; check M<sub>r</sub>, IHD, signals, ratio"]]],
          ["rhyme", "口訣 8", "MS 稱重，IR 認組，NMR 數屋企", "每個 mark point 要寫證據：”absorption at 1710 cm⁻¹ → C=O“，唔好只寫答案。"],
          ["eg", "<b>P2 · 'Deduce' with evidence · 4 marks</b> Compound A: M⁺ = 74; IR strong absorption at 1740 cm⁻¹, no absorption at 3200–3600; ¹H NMR: 2 signals, integration ratio 1 : 1. Identify A.", [
            "M<sub>r</sub> = 74 and C=O with no O–H, and two O atoms likely → try C₃H₆O₂ (36 + 6 + 32 = 74 ✓)",
            "IHD = (6 + 2 − 6)/2 = 1 → one C=O (matches 1740 cm⁻¹)",
            "No O–H → not an acid → <b>ester</b>（C–O present）",
            "2 signals in 1 : 1 → 3 H + 3 H environments: CH₃CO– and –OCH₃",
            "A = <b>methyl ethanoate, CH₃COOCH₃</b> ✅（ethyl methanoate 會有 3 signals，propanoic acid 有 broad O–H）",
          ]],
          ["eg", "<b>P2 · 'Deduce' · 3 marks</b> Compound B: C₄H₈O; IR 1715 cm⁻¹ and no broad O–H; ¹H NMR 3 signals with ratio 3 : 2 : 3. Identify B.", [
            "IHD = (8 + 2 − 8)/2 = 1 → C=O only (1715 cm⁻¹); no O–H",
            "C=O: aldehyde or ketone. 3 signals 3 : 2 : 3 = CH₃, CH₂, CH₃ (8 H total ✓)",
            "Aldehyde (butanal) would give 4 signals (3 : 2 : 2 : 1) → not matching",
            "Ketone: CH₃–CO–CH₂–CH₃ has CH₃CO (3), CH₂ (2), CH₃ (3) ✓ → <b>butanone</b> ✅",
          ]],
          ["eg", "<b>P2 · 'Identify' · 3 marks</b> Compound C: C₃H₈O; M⁺ = 60; IR broad absorption 3200–3600 cm⁻¹ and no C=O; ¹H NMR 3 signals 6 : 1 : 1. Identify C.", [
            "IHD = (6 + 2 − 8)/2 = 0 → saturated, no C=O (consistent)",
            "Broad 3200–3600 → O–H of an alcohol",
            "6 : 1 : 1 → two equivalent CH₃ (6 H), one CH, one OH",
            "<b>propan-2-ol (CH₃)₂CHOH</b> ✅（propan-1-ol 會有 4 signals）",
          ]],
          ["eg", "<b>P2 · 'Identify' · 3 marks</b> Compound D: C₂H₄O₂, IR very broad 2500–3000 and 1710 cm⁻¹; ¹H NMR 2 signals 3 : 1.", [
            "IHD = 1 → one C=O; very broad 2500–3000 + 1710 → –COOH",
            "3 : 1 = CH₃ and COOH → <b>ethanoic acid, CH₃COOH</b> ✅（M<sub>r</sub> = 60）",
          ]],
          ["trap", ["寫答案要列 evidence + conclusion，唔好只寫 “it is ethanoic acid”。", "同 formula 嘅 isomers 常考 distinguish：signals 數量 / IR 有冇 O–H。", "Calculate IHD 先，可以即刻排除一半 candidate（IHD = 0 → 冇 C=O / C=C / ring）。"]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Identify / State","Name functional group or give IUPAC name; no explanation."],["Draw / Deduce","Structural formula with all bonds clear; give isomers without repeats."],["Determine","Molecular formula from M<sub>r</sub>, % or IHD: IHD = (2C + 2 + N − H − X) ÷ 2."],["Deduce (spectra)","Link each peak (IR wavenumber, m/z fragment, NMR shift / splitting) to a group."],["Explain","Isomers: same molecular formula, different structure; link structure to property."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Name / draw from IUPAC","Longest chain → suffix → lowest locants → prefixes alphabetical."],["Isomer counting","Systematic: shorten chain by one C, move branch, check not repeated."],["Identify from MS","M⁺ = M<sub>r</sub>; fragments: 15 (CH₃⁺), 29 (C₂H₅⁺), 43, 45 (CH₃CH₂O⁺)… from booklet."],["Identify from IR","Use booklet table: O–H 3200–3600, C=O 1700–1750, C–H ~2850–3090."],["Identify from ¹H NMR (SL)","Number of signals = environments; area ratio = H count; shift from booklet."]]],
          ["note", "IR / NMR 數值喺 data booklet（唔好背數值）。答 spectra 題要寫 “peak at ~1710 cm⁻¹ shows C=O”：先講數據，再講 group。IHD 計算亦喺 booklet。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake 失分位", "Fix 點改"], [
            ["Ester 名倒轉（ethyl ethanoate vs methyl propanoate）", "O 後面嗰段 = alkyl 名；有 C=O 嗰段 = -oate"],
            ["Longest chain 揀錯", "沿住鏈行，轉彎都計，數清楚 C"],
            ["Locant 唔係最細", "由兩端數一次，揀 functional group 最細號"],
            ["Branch 冇按字母排 / 數 di- 入字母排", "按第一個字母；di-/tri- 唔計"],
            ["Aldehyde 寫 propan-1-al", "-al 係鏈尾 C1，唔使 locant：propanal"],
            ["Primary / secondary 數錯", "數 C 鄰居（amine 數 N 連幾多 C）"],
            ["IHD 用錯公式 (O 都計)", "O 同 S 唔計；N +1；X 當 H"],
            ["M⁺ 揀錯", "最大 m/z，唔係最高峰"],
            ["Fragment 冇寫 +", "CH₃⁺、COOH⁺ 要有 +"],
            ["IR 只寫 bond 唔寫 range", "寫 “O–H alcohol, 3200–3600 cm⁻¹ (broad)”"],
            ["Alcohol 同 acid O–H 搞亂", "alcohol 3200–3600；acid 2500–3000 very broad"],
            ["NMR ratio 冇化簡 / 對稱算漏", "6 : 4 = 3 : 2；先睇對稱"],
            ["SL 答 splitting", "唔使；只用 signals + ratio + shift"],
            ["只畫 cis/trans 當 structural isomer", "structural = 原子排列次序不同"],
          ]],
          ["check", [
            "Define homologous series, functional group, structural isomers, IHD, molecular ion",
            "Write functional group + suffix for 13 classes (alkane to arene) from memory",
            "Name a branched alkane, an alcohol, a ketone, an acid, an ester (3 of each in 1 min)",
            "Draw all isomers of C₅H₁₂, C₄H₁₀O and C₃H₆O₂",
            "Classify an alcohol / halogenoalkane / amine as 1°, 2° or 3°",
            "Calculate IHD and say what it means",
            "State m/z fragments 15, 29, 31, 43, 45 and how to use M − fragment",
            "Quote IR ranges for O–H (alcohol, acid), C=O, C–H, C=C",
            "Count ¹H NMR signals + ratio for 6 compounds",
            "Solve a combined M⁺ / IR / NMR problem with evidence for each step",
          ]],
        ],
      },
    ],
    summary: [
      "認組先：官能團決定名、反應、IR、NMR",
      "最長鏈、最細號、字母排（di-/tri- 唔計）",
      "Ester：alkyl 先（O 後面），-oate 後（C=O 嗰邊）",
      "數碳鄰居定 1° / 2° / 3°（amine 數 N 連幾多 C）",
      "IHD = (2C + 2 + N − H − X)/2；O 唔計",
      "MS：最右 = M⁺；M − 15 / 17 / 29 / 45 = 斷咗乜",
      "三千幾闊係 OH，一七零零係 C=O；acid = 2500–3000 超闊",
      "NMR：signals = 環境數，integration = H 比，對稱減 signal，SL 唔考 splitting",
      "MS 稱重，IR 認組，NMR 數屋企，最後驗證",
    ],
    practice: [
      { q: "S3.2 What is the IUPAC name of CH₃CH(CH₃)CH₂CH₃?", o: ["A. 2-methylbutane", "B. 3-methylbutane", "C. pentane", "D. 2-ethylpropane"], m: 1, a: "<b>A</b>. Longest chain 4 C (butane), CH₃ on C2 (lowest locant) = 2-methylbutane." },
      { q: "S3.2 Which pair are structural isomers of each other?", o: ["A. propanal and propanone", "B. ethanol and ethanal", "C. butane and but-1-ene", "D. methane and ethane"], m: 1, a: "<b>A</b>. Both C₃H₆O but aldehyde vs ketone. B, C, D have different molecular formulae." },
      { q: "S3.2 What is the IHD of C₅H₈?", o: ["A. 0", "B. 1", "C. 2", "D. 3"], m: 1, a: "<b>C</b>. (2×5 + 2 − 8)/2 = 2." },
      { q: "S3.2 Which compound shows both a very broad IR absorption at 2500–3000 cm⁻¹ and a strong absorption at 1700–1750 cm⁻¹?", o: ["A. ethanol", "B. ethanal", "C. ethanoic acid", "D. ethyl ethanoate"], m: 1, a: "<b>C</b>. Carboxylic acid: O–H (very broad) and C=O. Ethanol has only O–H (3200–3600); ethanal and the ester have C=O but no O–H." },
      { q: "S3.2 How many signals are in the ¹H NMR spectrum of 2-methylpropan-2-ol, (CH₃)₃COH?", o: ["A. 1", "B. 2", "C. 3", "D. 4"], m: 1, a: "<b>B</b>. Three equivalent CH₃ (9 H) and the OH (1 H): 2 signals, ratio 9 : 1." },
      { q: "S3.2 Which is a secondary halogenoalkane?", o: ["A. 1-bromopropane", "B. 2-bromopropane", "C. 2-bromo-2-methylpropane", "D. bromoethane"], m: 1, a: "<b>B</b>. In 2-bromopropane the C–Br carbon is bonded to two other carbons." },
      { q: "Name CH₃CH₂CH(OH)CH₃ and state whether it is a primary, secondary or tertiary alcohol.", m: 2, a: "Butan-2-ol [1]; secondary, because the carbon bearing the OH is bonded to two other carbon atoms [1]." },
      { q: "Draw and name the three structural isomers of C₅H₁₂.", m: 3, a: "Pentane CH₃CH₂CH₂CH₂CH₃ [1]; 2-methylbutane (CH₃)₂CHCH₂CH₃ [1]; 2,2-dimethylpropane (CH₃)₄C [1]." },
      { q: "Define the term homologous series and explain why boiling point increases along the alkane series.", m: 3, a: "A family of compounds with the same functional group and general formula, differing by CH₂ [1]. Longer chain → more electrons / larger surface area → stronger London (dispersion) forces [1] → more energy needed to overcome them, so higher boiling point [1]." },
      { q: "Explain how the ¹H NMR spectra of propan-1-ol and propan-2-ol differ.", m: 3, a: "Propan-1-ol has 4 signals [1] with ratio 3 : 2 : 2 : 1 [1]; propan-2-ol has 3 signals with ratio 6 : 1 : 1 [1] (two CH₃ groups are equivalent)." },
      { q: "A compound has molecular formula C₄H₈O. Its IR spectrum has a strong absorption at 1715 cm⁻¹ and no broad absorption above 2500 cm⁻¹. Its ¹H NMR spectrum has three signals in the ratio 3 : 2 : 3. Deduce its structure, showing your reasoning.", m: 4, a: "IHD = (8 + 2 − 8)/2 = 1 → one C=O [1]; 1715 cm⁻¹ = C=O and no O–H so not an acid/alcohol [1]; three environments 3 : 2 : 3 = CH₃, CH₂, CH₃ [1]; butanone CH₃COCH₂CH₃ [1] (butanal would give four signals)." },
      { q: "A compound has M⁺ at m/z 60, a very broad IR absorption at 2500–3000 cm⁻¹ and one at 1710 cm⁻¹. Its ¹H NMR spectrum has two signals in the ratio 3 : 1. Identify the compound, explaining each piece of evidence.", m: 4, a: "M<sub>r</sub> = 60 → C₂H₄O₂, IHD = 1 [1]; very broad 2500–3000 = O–H of carboxylic acid and 1710 = C=O [1]; two signals 3 : 1 = CH₃ and COOH [1]; ethanoic acid CH₃COOH [1]." },
      { q: "Butane and 2-methylpropane are isomers. State which has the higher boiling point and explain.", m: 2, a: "Butane [1]; its straight chain gives larger surface area of contact / more contact between molecules, so stronger London forces than the more compact branched isomer [1]." },
    ],
  },

  "chem-7": {
    title: "Enthalpy changes · Energy profiles · Calorimetry",
    intro: "R1.1：能量題第一步 = 認 sign，第二步 = q = mcΔT 再 ÷ mol。每個 part 有時間建議，最後有口訣同 IB-style 練習。",
    parts: [
      {
        h: "Enthalpy changes & energy profiles 焓變",
        min: 3,
        blocks: [
          ["key", "<b>Enthalpy change ΔH</b> = heat energy transferred to or from the surroundings at constant pressure (unit kJ mol⁻¹). <b>ΔH = H(products) − H(reactants).</b><br><b>Standard conditions</b>: pressure 100 kPa, a specified temperature (usually 298 K), substances in their standard states; ΔH⦵."],
          ["table", ["", "Exothermic 放熱", "Endothermic 吸熱"], [
            ["Heat flow", "released TO surroundings", "absorbed FROM surroundings"],
            ["Temperature of surroundings", "rises", "falls"],
            ["Sign of ΔH", "negative (−)", "positive (+)"],
            ["Enthalpy of products", "lower than reactants (more stable)", "higher than reactants"],
            ["Bonds", "more energy released forming new bonds than needed to break old ones", "more energy needed to break bonds than released forming new ones"],
            ["Examples", "combustion, neutralisation, respiration, most oxidations", "thermal decomposition of CaCO₃, photosynthesis, dissolving NH₄NO₃"],
          ]],
          ["rhyme", "口訣 1", "放熱減、吸熱加；個溫度跟住環境走", "Exo: ΔH −, surroundings get hotter. Endo: ΔH +, surroundings get colder. 睇溫度變化永遠係睇 surroundings（水）。"],
          ["table", ["Energy profile diagram", "Exothermic", "Endothermic"], [
            ["Reactants level", "HIGHER than products", "LOWER than products"],
            ["ΔH arrow", "points DOWN from reactants to products", "points UP from reactants to products"],
            ["Activation energy E<sub>a</sub>", "arrow from reactants UP to the peak", "arrow from reactants UP to the peak (bigger than ΔH)"],
            ["Labels needed", "y-axis: enthalpy (H); x-axis: reaction coordinate/progress; reactants, products, E<sub>a</sub>, ΔH", "same"],
          ]],
          ["note", "<b>Activation energy</b> = the minimum energy colliding particles must have for a reaction to occur. E<sub>a</sub> 永遠由 reactants 量到 peak；ΔH 由 reactants 量到 products。Catalyst 降 E<sub>a</sub> 但 ΔH 不變。"],
          ["trap", ["ΔH = products − reactants，冇倒轉。", "Energy profile 要標 axes（Enthalpy / Reaction coordinate）同 label，arrow 方向要啱。", "Exothermic 唔代表冇 E<sub>a</sub>：所有 reactions 都要先過 activation energy。"]],
        ],
      },
      {
        h: "Calorimetry 量熱法",
        min: 4,
        blocks: [
          ["key", "<b>q = m c ΔT</b>　q in J；m = mass of <b>water / solution</b> (g)；c = 4.18 J g⁻¹ K⁻¹ (data booklet)；ΔT in K or °C (same size)<br><b>ΔH = −q ÷ n</b>　(÷1000 first: J → kJ) 　n = moles of the <b>limiting reagent / substance that reacted</b>"],
          ["flow", [["① q", "q = m c ΔT with m of water (1.00 g cm⁻³ → 1 cm³ = 1 g)"], ["② n", "n of the substance burnt / limiting reactant"], ["③ ΔH", "ΔH = −q(kJ) ÷ n；temp ↑ → exothermic → negative"]]],
          ["rhyme", "口訣 2", "水嘅質量、水嘅溫差，燃料嘅 mol", "q 用水（total solution）嘅 m；n 用燃料／限量試劑；溫度升 → ΔH 負。"],
          ["eg", "<b>P2 · Calculate · 3 marks (常考)</b> 50.0 cm³ of 1.00 mol dm⁻³ HCl is added to 50.0 cm³ of 1.00 mol dm⁻³ NaOH in a polystyrene cup. The temperature rises by 6.8 °C. Calculate ΔH for the neutralisation per mole of water. (Assume density 1.00 g cm⁻³, c = 4.18 J g⁻¹ K⁻¹.)", [
            "m = 100.0 g (50.0 + 50.0 cm³ of solution) → q = 100.0 × 4.18 × 6.8 = 2842 J = 2.842 kJ [1]",
            "n(HCl) = n(NaOH) = 0.0500 dm³ × 1.00 = 0.0500 mol → n(H₂O) = 0.0500 mol [1]",
            "ΔH = −2.842 ÷ 0.0500 = <b>−56.8 kJ mol⁻¹</b> [1]（sign + unit required）",
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b> 0.500 g ethanol (M = 46.07 g mol⁻¹) is burnt and heats 200 g water from 21.0 °C to 35.5 °C. Determine ΔH<sub>c</sub> of ethanol.", [
            "ΔT = 14.5 K；q = 200 × 4.18 × 14.5 = 12 122 J = 12.1 kJ [1]",
            "n(C₂H₅OH) = 0.500 ÷ 46.07 = 0.01085 mol [1]",
            "ΔH = −12.1 ÷ 0.01085 = −1117 ≈ <b>−1.12 × 10³ kJ mol⁻¹</b> [1]（3 s.f.；literature −1367：差距因 heat loss）",
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b> (endothermic) 5.00 g NH₄NO₃ (M = 80.05) dissolves in 50.0 g water; the temperature falls from 21.0 °C to 16.5 °C. Calculate ΔH of dissolving.", [
            "q = 50.0 × 4.18 × 4.5 = 940.5 J = 0.9405 kJ [1]（ΔT 用大小 4.5，m = water 50.0 g）",
            "n = 5.00 ÷ 80.05 = 0.06246 mol [1]",
            "ΔH = +0.9405 ÷ 0.06246 = <b>+15.1 kJ mol⁻¹</b> [1]（temperature fell → endothermic → positive）",
          ]],
          ["table", ["P1B / evaluation: improve the experiment", "Why it helps"], [
            ["Insulate (polystyrene cup + lid, or lagged calorimeter)", "less heat lost to surroundings"],
            ["Use a draught shield around a spirit burner; burner closer to the can", "less heat loss; more heat transferred to the water"],
            ["Stir the water (continuously)", "even temperature throughout"],
            ["Extrapolate the temperature–time graph back to the time of mixing", "corrects for heat loss while the reading was taken"],
            ["Use a more precise thermometer / temperature probe + data logger", "smaller uncertainty in ΔT"],
            ["Burn to constant mass / ensure complete combustion", "avoid soot, CO"],
          ]],
          ["eg", "<b>P1B · Calculate uncertainty · 2 marks</b> ΔT is found from initial and final readings, each ±0.2 °C (thermometer 21.0 → 35.5 °C). State ΔT with its uncertainty and its percentage uncertainty.", [
            "Absolute uncertainty in ΔT = 0.2 + 0.2 = ±0.4 °C → ΔT = 14.5 ± 0.4 °C [1]（subtract readings, ADD uncertainties）",
            "% uncertainty = 0.4 ÷ 14.5 × 100 = <b>2.8 %</b> [1]",
          ]],
          ["note", "<b>常考</b>：ethanol/alcohol calorimetry + 「why experimental ΔH_c is less exothermic than literature」(2 marks: heat loss to surroundings + incomplete combustion / evaporation / heat absorbed by calorimeter)。計算題一定要 sign + unit + sig figs。"],
          ["trap", ["q 用 water 嘅質量，唔係燃料；solution 質量 = 總體積 × 1.00。", "J ↔ kJ 轉換：q 用 J，ΔH 用 kJ mol⁻¹，記得 ÷1000。", "ΔT 升 → ΔH 負；ΔT 跌 → ΔH 正。", "混合兩種 solutions 後總體積係 100 cm³，但 n 用其中 limiting reagent。"]],
        ],
      },
      {
        h: "Command-term exam patterns 題型",
        min: 2.5,
        blocks: [
          ["table", ["If the question says…", "Do this", "Marks"], [
            ["Calculate ΔH from calorimetry", "q = mcΔT → n → ΔH = −q/n; sign, unit, s.f.", "3"],
            ["Sketch energy profile", "axes, reactants, products, E<sub>a</sub>, ΔH arrow, exo/endo shape", "2–3"],
            ["Explain why experimental value ≠ literature", "heat loss + incomplete combustion/evaporation + heat absorbed by the calorimeter", "2"],
            ["Suggest improvement", "insulate, lid, draught shield, stir, graph extrapolation", "1–2"],
            ["State the meaning of exothermic / standard enthalpy change", "word-for-word (see key boxes)", "1–2"],
          ]],
          ["eg", "<b>P2 · Sketch + explain · 3 marks</b> Sketch an energy profile for an exothermic reaction and show the effect of a catalyst.", [
            "y-axis labelled enthalpy, x-axis reaction coordinate; reactants higher than products [1]",
            "Peak above reactants with E<sub>a</sub> arrow; ΔH arrow downwards from reactants to products [1]",
            "Second, lower peak for catalysed path with smaller E<sub>a</sub>; same reactant and product levels (ΔH unchanged) [1]",
          ]],
          ["check", [
            "Define exothermic / endothermic, standard conditions, standard enthalpy change, activation energy",
            "Sketch both energy profiles with E<sub>a</sub> and ΔH",
            "Calorimetry calculation (q → n → ΔH) incl. sign, unit, s.f.",
            "Calorimetry uncertainty in ΔT and % uncertainty; list 4 improvements",
          ]],
        ],
      },
    ],
    summary: [
      "放熱減、吸熱加；溫度睇 surroundings",
      "q = mcΔT（用水），ΔH = −q ÷ n，J 轉 kJ",
      "Exo：surroundings 變熱、ΔH 負；Endo：變凍、ΔH 正",
    ],
    practice: [
      { q: "R1.1 Which statement about an exothermic reaction is correct?", o: ["A. ΔH is positive and the surroundings cool", "B. ΔH is negative and the surroundings warm", "C. Products have a higher enthalpy than reactants", "D. Bond-forming releases less energy than bond-breaking requires"], m: 1, a: "<b>B</b>. Heat is released to the surroundings, so ΔH < 0 and the surroundings warm up." },
      { q: "R1.1 In a calorimetry experiment, 100 g of water is heated by 5.0 °C. What is q? (c = 4.18 J g⁻¹ K⁻¹)", o: ["A. 2.09 J", "B. 20.9 J", "C. 2090 J", "D. 41 800 J"], m: 1, a: "<b>C</b>. q = 100 × 4.18 × 5.0 = 2090 J." },
      { q: "50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH. The temperature rises by 6.8 °C. Calculate the enthalpy change of neutralisation in kJ mol⁻¹. (Density 1.00 g cm⁻³, c = 4.18 J g⁻¹ K⁻¹.)", m: 3, a: "q = 100.0 × 4.18 × 6.8 = 2842 J [1]; n(H₂O) = 0.0500 mol [1]; ΔH = −2.842/0.0500 = −56.8 kJ mol⁻¹ [1]." },
      { q: "Suggest two reasons why the experimental ΔH<sub>c</sub> of ethanol, obtained by heating water in a calorimeter, is less exothermic than the literature value, and one improvement.", m: 3, a: "Heat loss to surroundings / not all heat transferred to water [1]; incomplete combustion / evaporation of ethanol / heat absorbed by calorimeter [1]; improvement: draught shield / lid / insulation / stirring [1]." },
    ],
  },
  "chem-7b": {
    title: "Bond enthalpies · Hess's law · Energy cycles",
    intro: "R1.2：ΔH 有兩條路計——斷鍵減成鍵（bond enthalpy）同埋 Hess's law 砌方程式。每個 part 有時間建議，最後有口訣同練習。",
    parts: [
      {
        h: "Bond enthalpies 鍵焓",
        min: 3,
        blocks: [
          ["key", "<b>Bond enthalpy</b> = the enthalpy change when <b>one mole of a covalent bond is broken in the gaseous state</b>. <b>Average bond enthalpy</b> = averaged over a range of similar compounds. Breaking bonds is <b>endothermic (+)</b>; forming bonds is <b>exothermic (−)</b>.<br><b>ΔH = Σ(bonds broken) − Σ(bonds formed)</b>"],
          ["rhyme", "口訣 3", "斷多少、成多少，斷減成", "ΔH = 斷鍵總和 − 成鍵總和。Negative answer = exothermic = stronger bonds formed than broken。All species must be gaseous."],
          ["eg", "<b>P2 · Calculate · 3 marks (常考)</b> Use the bond enthalpies (C–H 414, O=O 498, C=O 804, O–H 463 kJ mol⁻¹) to calculate ΔH for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g).", [
            "Broken: 4 C–H + 2 O=O = 4(414) + 2(498) = 1656 + 996 = 2652 kJ [1]",
            "Formed: 2 C=O + 4 O–H = 2(804) + 4(463) = 1608 + 1852 = 3460 kJ [1]",
            "ΔH = 2652 − 3460 = <b>−808 kJ mol⁻¹</b> [1]",
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b> C₂H₄(g) + H₂(g) → C₂H₆(g). Bond enthalpies: C=C 614, C–C 346, C–H 414, H–H 436.", [
            "Broken: C=C + H–H = 614 + 436 = 1050 kJ [1]（C–H bonds unchanged: cancel）",
            "Formed: C–C + 2 C–H = 346 + 828 = 1174 kJ [1]",
            "ΔH = 1050 − 1174 = <b>−124 kJ mol⁻¹</b> [1]",
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b> The value from bond enthalpies for ΔH of combustion of ethanol(l) differs from the experimental value. Give two reasons.", [
            "Bond enthalpies are <b>average</b> values across many compounds, not specific to ethanol [1]",
            "Calculation assumes all species are in the <b>gas phase</b>; real ethanol and water are liquid (enthalpy of vaporisation not included) [1]",
          ]],
          ["trap", ["Draw out every bond (Lewis structure) 先數，CO₂ 有 2 個 C=O，H₂O 有 2 個 O–H。", "唔好只睇改變嘅鍵；全部都數都得，不變嘅會抵消。", "答案方向：broken − formed；唔好顛倒。", "Bond enthalpy 係 gaseous，用 liquid 水要加 vaporisation 修正。"]],
        ],
      },
      {
        h: "Hess's law & energy cycles",
        min: 4.5,
        blocks: [
          ["key", "<b>Hess's law</b>: the total enthalpy change for a reaction is <b>independent of the route taken</b> (provided initial and final conditions are the same).<br>Reverse an equation → change sign of ΔH. Multiply equation → multiply ΔH. Add equations → add ΔH."],
          ["table", ["Standard enthalpy change", "Definition", "Cycle formula"], [
            ["ΔH<sub>f</sub>⦵ formation", "enthalpy change when <b>one mole of a compound</b> is formed from its <b>elements in their standard states</b> (ΔH<sub>f</sub> of an element = 0)", "ΔH = Σ ΔH<sub>f</sub>(products) − Σ ΔH<sub>f</sub>(reactants)"],
            ["ΔH<sub>c</sub>⦵ combustion", "enthalpy change when <b>one mole of a substance is completely burnt in excess oxygen</b> under standard conditions", "ΔH = Σ ΔH<sub>c</sub>(reactants) − Σ ΔH<sub>c</sub>(products)"],
            ["neutralisation", "enthalpy change when an acid and a base react to form one mole of water", "≈ −57 kJ mol⁻¹ for strong acid + strong base"],
          ]],
          ["rhyme", "口訣 4", "Formation：產物減反應物；Combustion：反應物減產物", "ΔH<sub>f</sub> → products − reactants；ΔH<sub>c</sub> → reactants − products（倒轉，因為 combustion 係去 CO₂ 同 H₂O）。"],
          ["eg", "<b>P2 · Calculate · 3 marks</b> Calculate ΔH for C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). ΔH<sub>f</sub>: C₃H₈ −104, CO₂ −394, H₂O(l) −286 kJ mol⁻¹.", [
            "Σ ΔH<sub>f</sub>(products) = 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ [1]",
            "Σ ΔH<sub>f</sub>(reactants) = −104 + 5(0) = −104 kJ（O₂ element = 0）[1]",
            "ΔH = −2326 − (−104) = <b>−2222 kJ mol⁻¹</b> [1]",
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b> Determine ΔH<sub>f</sub> of ethane, 2C(s) + 3H₂(g) → C₂H₆(g), using ΔH<sub>c</sub>: C(s) −394, H₂(g) −286, C₂H₆(g) −1560 kJ mol⁻¹.", [
            "Σ ΔH<sub>c</sub>(reactants) = 2(−394) + 3(−286) = −788 − 858 = −1646 kJ [1]",
            "Σ ΔH<sub>c</sub>(product) = −1560 kJ [1]",
            "ΔH<sub>f</sub> = −1646 − (−1560) = <b>−86 kJ mol⁻¹</b> [1]",
          ]],
          ["eg", "<b>P2 · Determine · 2 marks</b> Given C(s) + O₂(g) → CO₂(g) ΔH = −394 kJ and CO(g) + ½O₂(g) → CO₂(g) ΔH = −283 kJ, determine ΔH for C(s) + ½O₂(g) → CO(g).", [
            "Keep the first equation: C + O₂ → CO₂ (−394)；reverse the second: CO₂ → CO + ½O₂ (+283) [1]",
            "Add: C + ½O₂ → CO；ΔH = −394 + 283 = <b>−111 kJ mol⁻¹</b> [1]",
          ]],
          ["eg", "<b>P1 MCQ</b> A → B ΔH = +50 kJ; B → C ΔH = −120 kJ. What is ΔH for C → A?", [
            "A → C = +50 + (−120) = −70 kJ；reverse: C → A = <b>+70 kJ</b> ✅",
          ]],
          ["note", "<b>Cycle 畫法</b>：路線 1（直接）= 路線 2（經 elements 或 經 CO₂ + H₂O）。箭頭方向對 → 用 + ；逆箭頭 → 用 −。Formation cycle：reactants → elements → products。Combustion cycle：reactants → combustion products ← products。"],
          ["trap", ["Elements 嘅 ΔH<sub>f</sub> = 0（O₂, H₂, C(graphite)），唔好漏。", "係數 × ΔH：ΔH<sub>f</sub> 要乘 mol 數。", "H₂O 要睇 state：(l) −286；(g) −242。", "Reverse 要變 sign。", "Formation/combustion 用嗰條 formula 唔好調返轉。"]],
        ],
      },
      {
        h: "R1.2 題型 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["If the question says…", "Do this", "Marks"], [
            ["Calculate ΔH using bond enthalpies", "list broken/formed → broken − formed", "2–3"],
            ["Calculate ΔH using ΔHf / ΔHc", "correct formula; multiply by coefficients; elements = 0", "2–3"],
            ["Determine ΔH using given equations", "reverse/multiply/add; show equation manipulation", "2–3"],
            ["Explain why bond-enthalpy ΔH ≠ experimental", "average values from many compounds + apply to gases only", "2"],
            ["State Hess's law / define bond enthalpy", "word-for-word (see key boxes)", "1"],
          ]],
          ["check", [
            "Define average bond enthalpy and state Hess's law",
            "Bond-enthalpy calculation with a Lewis structure (count every bond)",
            "ΔH from ΔH<sub>f</sub> and from ΔH<sub>c</sub> (and which formula is which)",
            "Hess's law from given equations: reverse → change sign, multiply → multiply ΔH",
          ]],
        ],
      },
    ],
    summary: [
      "斷鍵減成鍵：ΔH = Σbroken − Σformed（要 gaseous）",
      "Formation：產物減反應物；Combustion：反應物減產物",
      "Elements ΔH<sub>f</sub> = 0；reverse 變 sign；multiply 乘 ΔH",
      "Hess：路線唔同、ΔH 一樣",
    ],
    practice: [
      { q: "R1.2 A → B ΔH = +50 kJ and B → C ΔH = −120 kJ. What is ΔH for C → A?", o: ["A. −70 kJ", "B. +70 kJ", "C. +170 kJ", "D. −170 kJ"], m: 1, a: "<b>B</b>. A → C = −70 kJ; reversing gives +70 kJ." },
      { q: "R1.2 Which is the standard enthalpy of formation of CO₂ (ΔH<sub>f</sub> = −394 kJ mol⁻¹)?", o: ["A. CO(g) + ½O₂(g) → CO₂(g)", "B. C(s) + O₂(g) → CO₂(g)", "C. C(g) + 2O(g) → CO₂(g)", "D. 2C(s) + 2O₂(g) → 2CO₂(g)"], m: 1, a: "<b>B</b>. One mole of compound from elements in standard states (graphite and O₂ gas)." },
      { q: "R1.2 Use the bond enthalpies (C–H 414, O=O 498, C=O 804, O–H 463 kJ mol⁻¹) to calculate ΔH for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g).", m: 3, a: "Broken 4(414) + 2(498) = 2652 kJ [1]; formed 2(804) + 4(463) = 3460 kJ [1]; ΔH = −808 kJ mol⁻¹ [1]." },
      { q: "Calculate ΔH for C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l) using ΔH<sub>f</sub>: C₃H₈ −104, CO₂ −394, H₂O(l) −286 kJ mol⁻¹.", m: 3, a: "Products 3(−394) + 4(−286) = −2326 [1]; reactants −104 [1]; ΔH = −2326 − (−104) = −2222 kJ mol⁻¹ [1]." },
      { q: "Outline why bond enthalpy calculations give approximate values of ΔH.", m: 2, a: "Bond enthalpies are average values from many compounds, not specific to the molecules involved [1]; they apply to gaseous species so any liquid or solid states are not accounted for [1]." },
    ],
  },
  "chem-7c": {
    title: "Combustion · Fossil fuels · Biofuels · Fuel cells",
    intro: "R1.3：燃料題 = 寫平衡燃燒方程式、計 specific energy、比較 fossil fuel 同 biofuel、識 fuel cell half-equations。",
    parts: [
      {
        h: "Energy from fuels 燃料",
        min: 3.5,
        blocks: [
          ["table", ["", "Complete combustion", "Incomplete combustion"], [
            ["Oxygen", "excess / plentiful", "limited"],
            ["Products (hydrocarbon)", "CO₂ + H₂O", "CO and/or C (soot) + H₂O"],
            ["Equation example", "CH₄ + 2O₂ → CO₂ + 2H₂O", "2CH₄ + 3O₂ → 2CO + 4H₂O；CH₄ + O₂ → C + 2H₂O"],
            ["Energy released", "more per mole", "less"],
            ["Problem", "CO₂ = greenhouse gas", "CO is toxic (binds haemoglobin); soot = particulates"],
          ]],
          ["rhyme", "口訣 5", "夠氧 CO₂，唔夠氧 CO 同炭黑", "Alcohol：C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O。Flame yellow & sooty = incomplete。"],
          ["table", ["Fuel type", "Source & features", "Pros", "Cons"], [
            ["Fossil fuels (coal, oil, natural gas)", "formed over millions of years from ancient organisms; <b>non-renewable</b>", "high energy content, established infrastructure", "release CO₂ (enhanced greenhouse effect, climate change); also SO₂, NOₓ, CO, particulates; finite"],
            ["Biofuels (bioethanol, biodiesel)", "from plants/waste; <b>renewable</b>; ethanol from fermentation C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", "renewable; \"carbon neutral\" in theory because CO₂ released was absorbed in photosynthesis", "land use competes with food, deforestation, fertilisers/transport emit CO₂ (not truly neutral), lower energy density than petrol"],
            ["Hydrogen fuel cell", "H₂ + O₂ → H₂O; chemical energy → electricity directly", "only water produced at point of use; higher efficiency than combustion", "H₂ usually made from fossil fuels; storage hard (gas, explosive)"],
          ]],
          ["key", "<b>Specific energy</b> = energy released per unit <b>mass</b> of fuel (kJ g⁻¹ or MJ kg⁻¹) = ΔH<sub>c</sub> ÷ M.<br><b>Energy density</b> = energy released per unit <b>volume</b> (kJ cm⁻³ or MJ dm⁻³) = specific energy × density."],
          ["eg", "<b>P2 · Calculate · 3 marks</b> ΔH<sub>c</sub> of ethanol = −1367 kJ mol⁻¹, M = 46.07 g mol⁻¹, density 0.789 g cm⁻³. Calculate its specific energy and energy density.", [
            "Specific energy = 1367 ÷ 46.07 = <b>29.7 kJ g⁻¹</b> [1]",
            "Energy density = 29.7 kJ g⁻¹ × 0.789 g cm⁻³ = <b>23.4 kJ cm⁻³</b> [1]",
            "Comment: for equal mass, fuels with higher specific energy are better for transport; ethanol is lower than petrol [1]",
          ]],
          ["table", ["Hydrogen–oxygen fuel cell", "Acidic electrolyte", "Alkaline electrolyte"], [
            ["Anode (−), oxidation", "H₂ → 2H⁺ + 2e⁻", "H₂ + 2OH⁻ → 2H₂O + 2e⁻"],
            ["Cathode (+), reduction", "O₂ + 4H⁺ + 4e⁻ → 2H₂O", "O₂ + 2H₂O + 4e⁻ → 4OH⁻"],
            ["Overall", "2H₂ + O₂ → 2H₂O", "2H₂ + O₂ → 2H₂O"],
          ]],
          ["note", "Fuel cell：fuel 連續供應，唔會 'run flat'，不同於 battery；電子經 external circuit，H⁺ 經 proton-exchange membrane。"],
          ["note", "<b>常考</b>：「Compare/evaluate biofuel vs fossil fuel」(3 marks)：renewable + near carbon-neutral（advantage），food/land competition（disadvantage），仍然產生 CO₂（comment）。同埋 write balanced equations for complete/incomplete combustion。"],
          ["trap", ["“Carbon neutral” 係 in theory；要提生產/運輸排放。", "Incomplete combustion 方程要配平，O₂ 可以有 ½ 係數但要提供整數形式更安全。", "Energy density 用 volume，specific energy 用 mass，唔好搞亂。"]],
        ],
      },
      {
        h: "R1.3 題型 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["If the question says…", "Do this", "Marks"], [
            ["Write an equation for complete / incomplete combustion", "balance C → H → O; incomplete gives CO and/or C", "1–2"],
            ["Calculate specific energy / energy density", "|ΔH<sub>c</sub>| ÷ M; × density for energy density", "2"],
            ["Compare / evaluate fuels", "renewability + CO₂ + specific energy + land use (advantage AND disadvantage)", "3"],
            ["Fuel cell half-equations", "anode oxidation H₂; cathode reduction O₂; balance charge", "2"],
          ]],
          ["check", [
            "Write complete and incomplete combustion equations for an alkane and an alcohol",
            "State one problem each of CO₂, CO and soot",
            "Specific energy and energy density calculation",
            "H₂/O₂ fuel cell half-equations; biofuel vs fossil fuel evaluation",
          ]],
        ],
      },
    ],
    summary: [
      "夠氧 CO₂ + H₂O；唔夠氧 CO / C + H₂O",
      "Specific energy = 每克；energy density = 每 cm³",
      "Biofuel：renewable、理論 carbon neutral，但佔地同仍有排放",
    ],
    practice: [
      { q: "R1.3 Which is a product of incomplete combustion of a hydrocarbon?", o: ["A. CO₂ only", "B. H₂ only", "C. CO", "D. SO₂"], m: 1, a: "<b>C</b>. CO (and/or C soot) forms when oxygen is limited." },
      { q: "State two advantages and one disadvantage of using bioethanol instead of petrol.", m: 3, a: "Renewable [1]; near carbon-neutral because CO₂ absorbed during growth of crops [1]; disadvantage: uses land that could grow food / lower energy density / production emissions [1]." },
      { q: "Calculate the specific energy (in kJ g⁻¹) of ethanol, ΔH<sub>c</sub> = −1367 kJ mol⁻¹, M = 46.07 g mol⁻¹.", m: 2, a: "1367/46.07 [1] = 29.7 kJ g⁻¹ [1]." },
      { q: "State the half-equations at the anode and cathode of a hydrogen–oxygen fuel cell with an acidic electrolyte.", m: 2, a: "Anode: H₂ → 2H⁺ + 2e⁻ [1]; cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O [1]." },
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
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Calculate","Moles → ratio → target; units and s.f. Mark scheme gives ECF."],["Determine (limiting)","Compare n ÷ coefficient for each reactant; smallest is limiting."],["Calculate % yield","actual ÷ theoretical × 100; atom economy = M<sub>r</sub>(desired) ÷ ΣM<sub>r</sub>(products) × 100."],["Suggest (error)","Name specific: not all solid transferred, incomplete reaction, loss on filtering."],["Outline (titration)","Burette, pipette, indicator, concordant titres within 0.10 cm³."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Mass of product from reactant","n = m/M → ratio → m = nM."],["Limiting reagent + excess left","Compare moles, compute excess remaining."],["Titration concentration","n(known) = cV → ratio → c(unknown) = n ÷ V."],["Gas volume reaction","Avogadro: volume ratio = mole ratio at same T, P."],["Percentage yield from mass data","Theoretical from limiting reactant first."]]],
          ["note", "Titration 計算 V 要轉 dm³（cm³ ÷ 1000）。Average titre 只用 concordant results（相差 ≤ 0.10 cm³）。步驟分好重要：寫 “mol = c × V = …” 比淨係寫答案安全。"],
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
    title: "Rate of reaction · Collision theory · Maxwell–Boltzmann · Catalysts",
    intro: "速率題 = 識量、識 collision theory 三步答法、識畫 M-B curve。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Rate & how to measure it 速率",
        min: 3.5,
        blocks: [
          ["key", "<b>Rate of reaction</b> = the change in concentration of a reactant or product per unit time.<br>Rate = Δ[concentration] ÷ Δt　unit <b>mol dm⁻³ s⁻¹</b>（or mol dm⁻³ min⁻¹）<br>Practical alternatives: gas volume per time (cm³ s⁻¹), mass lost per time (g s⁻¹), 1/time."],
          ["table", ["Property that changes", "Method (apparatus)", "Suitable for"], [
            ["Gas produced", "gas syringe / upturned measuring cylinder over water; volume vs time", "Mg + HCl (H₂), CaCO₃ + HCl (CO₂, slightly soluble), H₂O₂ decomposition (O₂)"],
            ["Mass of mixture falls", "balance (cotton wool plug in flask); mass vs time", "gas escapes: CaCO₃ + acid (CO₂ heavy enough)"],
            ["Colour intensity", "colorimeter / spectrophotometer (absorbance vs time)", "coloured species, e.g. I₂, MnO₄⁻, Br₂"],
            ["Precipitate forms", "time for a cross under flask to disappear (1/t ∝ rate)", "Na₂S₂O₃ + HCl (sulfur)"],
            ["Ions change", "conductivity meter; pH meter", "acid/base or ionic reactions"],
            ["Concentration directly", "take samples at intervals, quench, titrate", "any reaction where a titration is feasible"],
          ]],
          ["rhyme", "口訣 1", "速率 = 濃度變幾多 ÷ 用幾耐", "Avoid just writing “rate = speed”；要寫 change in concentration per unit time（or amount/volume/mass per time）。"],
          ["table", ["Type of rate", "How to get it from a graph"], [
            ["Average rate over a period", "gradient of the straight line between two points = Δy ÷ Δx"],
            ["Rate at an instant t (e.g. initial rate at t = 0)", "draw a tangent to the curve at that time → gradient of tangent"],
            ["Reaction finished", "curve flat (gradient 0)"],
          ]],
          ["eg", "<b>P2 / P1B · Calculate · 2 marks (常考)</b> H₂ gas is collected from Mg + 2HCl. The tangent to the volume–time curve at t = 0 passes through (0, 0) and (40 s, 60 cm³). Calculate the initial rate and explain why the rate falls with time.", [
            "Initial rate = gradient of tangent = 60 ÷ 40 = <b>1.5 cm³ s⁻¹</b> [1]",
            "As reactants are used up their concentration falls → fewer collisions per unit time / lower frequency of successful collisions → rate falls (gradient decreases) [1]",
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b> [A] falls from 0.80 mol dm⁻³ to 0.50 mol dm⁻³ in 30 s. Calculate the average rate.", [
            "Δ[A] = 0.30 mol dm⁻³ [1]",
            "Rate = 0.30 ÷ 30 = <b>0.010 mol dm⁻³ s⁻¹</b> [1]",
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b> 24.0 cm³ of H₂ is collected in 40.0 s at 273 K and 100 kPa (molar volume 22.7 dm³ mol⁻¹). Calculate the average rate in mol s⁻¹.", [
            "n(H₂) = 0.0240 dm³ ÷ 22.7 dm³ mol⁻¹ = 1.057 × 10⁻³ mol [1]",
            "Rate = 1.057 × 10⁻³ ÷ 40.0 [1]",
            "= <b>2.64 × 10⁻⁵ mol s⁻¹</b> [1]",
          ]],
          ["eg", "<b>P1B · Explain · 2 marks</b> In Na₂S₂O₃ + HCl, doubling [S₂O₃²⁻] halves the time for the cross to vanish from 50 s to 25 s. What does this show about rate?", [
            "Rate ∝ 1/time: 1/50 = 0.020 s⁻¹ → 1/25 = 0.040 s⁻¹ [1]",
            "Rate doubled when concentration doubled [1]",
          ]],
          ["trap", ["Rate 單位：mol dm⁻³ s⁻¹，唔係 mol dm⁻³（漏咗 time）。", "Tangent 要用直尺貼住曲線畫，唔好用兩點間連線當作 instantaneous rate。", "Gas syringe 方法用來收集會溶於水嘅氣體（CO₂）要小心；mass loss 方法對 H₂ 太輕不準。", "要 “quench” 先 titrate，否則反應繼續。"]],
        ],
      },
      {
        h: "Collision theory 碰撞理論",
        min: 3,
        blocks: [
          ["key", "<b>Collision theory</b>: a reaction occurs only when particles <b>collide</b> with (1) <b>energy ≥ activation energy E<sub>a</sub></b> and (2) the <b>correct orientation</b>. <b>Rate depends on the frequency of successful (effective) collisions.</b><br><b>Activation energy</b> = the minimum energy that colliding particles must have for a reaction to occur."],
          ["rhyme", "口訣 2", "夠勁、啱角度、撞得密", "Three requirements for a successful collision: enough energy, right orientation, high frequency。"],
          ["table", ["Factor ↑", "Effect on particles", "Effect on rate", "Model answer phrase"], [
            ["Concentration (solutions)", "more particles per unit volume", "↑", "higher frequency of collisions → higher frequency of <b>successful</b> collisions"],
            ["Pressure (gases)", "more molecules per unit volume (closer)", "↑", "same as concentration"],
            ["Surface area (solids, smaller pieces)", "more exposed particles at the surface", "↑", "more particles available to collide at any time → more frequent collisions"],
            ["Temperature", "higher average kinetic energy; faster particles", "↑↑", "greater <b>proportion</b> of particles with E ≥ E<sub>a</sub> (main effect) and more frequent collisions (minor)"],
            ["Catalyst", "alternative pathway, lower E<sub>a</sub>", "↑", "greater proportion of collisions have E ≥ E<sub>a(cat)</sub>"],
          ]],
          ["note", "<b>三步答法</b>（explain 題 2-3 marks）：① 改變咗乜（particles closer / faster / lower E<sub>a</sub>）② 因此 collision frequency / proportion with E ≥ E<sub>a</sub> 點變 ③ 因此 successful collisions per unit time ↑ → rate ↑。"],
          ["eg", "<b>P2 · Explain · 2-3 marks (常考)</b> Explain why powdered marble reacts faster than marble chips with dilute HCl.", [
            "Powder has a larger surface area (for the same mass) [1]",
            "More particles exposed to the acid at any time → higher frequency of collisions / successful collisions [1]",
            "→ greater rate of reaction [1]（Total amount of CO₂ stays the same if mass of CaCO₃ and excess acid same）",
          ]],
          ["eg", "<b>P2 · Explain · 3 marks (perennial favourite)</b> Explain, using collision theory, why increasing temperature by 10 °C approximately doubles the rate.", [
            "Particles have more kinetic energy and move faster → collisions are more frequent [1]（minor effect）",
            "A greater proportion of particles have energy ≥ E<sub>a</sub> [1]（dominant effect — see M-B curve）",
            "Higher frequency of successful collisions → rate approximately doubles [1]",
          ]],
          ["trap", ["寫 “more collisions” 唔夠 mark：要寫 “more <b>frequent</b> collisions” 同 “successful”。", "Temperature 嘅主因係 proportion with E ≥ E<sub>a</sub>，唔係 “particles collide more”。", "Activation energy 唔會因溫度變；只有 catalyst 先會令 E<sub>a</sub> 改變。", "增加 acid 體積但濃度不變 → rate 不變（只係總 CO₂ 量可能改變）。"]],
        ],
      },
      {
        h: "Maxwell–Boltzmann distribution",
        min: 3.5,
        blocks: [
          ["key", "<b>Maxwell–Boltzmann curve</b>: the distribution of kinetic energies of particles in a gas/fluid at a given temperature.<br>x-axis: <b>kinetic energy (E)</b>; y-axis: <b>number (or fraction) of particles</b>. Area under the curve = total number of particles (constant)."],
          ["table", ["Feature", "What to draw"], [
            ["Start", "from the origin (0,0) — no particles have zero energy"],
            ["Shape", "rises to a peak then falls with a long tail to the right, never touching the x-axis (asymptotic), not symmetrical"],
            ["Most probable energy", "at the peak"],
            ["E<sub>a</sub>", "vertical line to the right of the peak; area to the right of this line = particles able to react"],
            ["Higher temperature T₂ > T₁", "peak lower and shifted RIGHT; curve broader; tail higher; <b>area under both curves is equal</b>; more area beyond E<sub>a</sub>"],
            ["Catalyst", "same curve; E<sub>a</sub> line moves LEFT (E<sub>a(cat)</sub>) → area beyond line larger"],
          ]],
          ["rhyme", "口訣 3", "熱令曲線低而右，催化令線搬去左", "Temperature changes the CURVE; catalyst moves the Ea LINE. 兩個 curves 面積一樣。"],
          ["eg", "<b>P2 · Sketch + explain · 3-4 marks (perennial favourite)</b> Sketch Maxwell–Boltzmann curves for a gas at T and at a higher temperature (T + 20 K). Explain why the rate increases at the higher temperature.", [
            "Axes: x = kinetic energy, y = number of particles (or fraction); both curves start at origin, skewed peak, asymptotic [1]",
            "Higher-T curve: lower peak, shifted to the right, broader; same total area [1]",
            "E<sub>a</sub> marked on x-axis; shaded area beyond E<sub>a</sub> greater at higher T [1]",
            "Greater proportion of particles with E ≥ E<sub>a</sub> → more frequent successful collisions → higher rate [1]",
          ]],
          ["eg", "<b>P2 · Explain · 2-3 marks</b> Use a Maxwell–Boltzmann curve to explain how a catalyst increases rate.", [
            "Same curve for a given temperature; E<sub>a(catalysed)</sub> marked to the left of E<sub>a(uncatalysed)</sub> [1]",
            "Area to the right of E<sub>a(cat)</sub> is larger → greater proportion of particles with sufficient energy [1]",
            "Higher frequency of successful collisions → rate increases [1]",
          ]],
          ["trap", ["Higher T curve 唔係高啲：peak 低啲、右移，面積一樣。", "兩條 curve 唔可以相交 x-axis；唔好畫成對稱鐘形。", "Catalyst 唔改變 curve，亦唔改 kinetic energy。", "Axes label 一定要有 (y-axis: number of particles)。"]],
        ],
      },
      {
        h: "Catalysts & energy profiles 催化劑",
        min: 3,
        blocks: [
          ["key", "<b>Catalyst</b> = a substance that increases the rate of a reaction by providing an <b>alternative pathway with lower activation energy</b>, and is <b>not used up</b> (regenerated) in the overall reaction. It does NOT change ΔH, the position of equilibrium or the yield at equilibrium (only the time taken)."],
          ["table", ["Type", "Phase", "Examples"], [
            ["Homogeneous", "same phase as reactants", "H⁺ in esterification; Fe²⁺/Fe³⁺ with persulfate"],
            ["Heterogeneous", "different phase (solid with gases/liquids)", "Fe in Haber process; Pt/Pd/Rh in catalytic converters; MnO₂ with H₂O₂"],
          ]],
          ["table", ["Energy profile feature", "Uncatalysed", "Catalysed"], [
            ["Peak height", "high", "lower peak(s) (may have several small peaks/intermediates)"],
            ["Reactant and product levels", "—", "unchanged (same ΔH)"],
            ["E<sub>a</sub>", "bigger", "smaller"],
          ]],
          ["eg", "<b>P2 · Sketch + label · 3 marks</b> Sketch an energy profile for an exothermic reaction with and without a catalyst. Label E<sub>a</sub> and ΔH.", [
            "Axes: enthalpy (y), reaction coordinate (x); reactants higher than products [1]",
            "Uncatalysed curve with peak; E<sub>a</sub> arrow from reactants to peak [1]",
            "Catalysed curve with lower peak; E<sub>a(cat)</sub> labelled; ΔH arrow same for both [1]",
          ]],
          ["note", "<b>Transition state</b> = highest-energy arrangement of atoms (peak) during the reaction; <b>intermediate</b> = a species formed in a multi-step path at a valley between two peaks. Multi-step reactions: the step with highest peak is the rate-determining step (note for AHL; SL 只需要知道 profile)。"],
          ["note", "<b>常考</b>：「State/explain how a catalyst increases rate」+ 畫 energy profile；同埋 catalytic converters / Haber 嘅 Fe catalyst 作 application。Catalyst 唔改變平衡位置/yield（連 chem-10 一齊考）。"],
          ["trap", ["Catalyst 唔係 “not involved”：佢參與反應但最後再生。", "Catalyst 唔提供 energy，亦唔令 particles 動得更快。", "Catalyst 唔改變 ΔH 同 equilibrium yield。"]],
        ],
      },
      {
        h: "Designing & evaluating rate experiments",
        min: 3,
        blocks: [
          ["table", ["Item", "How to write it"], [
            ["Independent variable", "the factor you change (temperature, concentration, surface area…)"],
            ["Dependent variable", "what you measure (volume of gas, time for cross to vanish…)"],
            ["Controlled variables", "everything else: volume/mass, concentration, temperature, same mass of solid, particle size, same apparatus"],
            ["Repeat + average", "improves reliability; discard anomalous results"],
          ]],
          ["eg", "<b>P1B · Design · 4 marks</b> Outline an experiment to investigate how concentration of HCl affects the rate with Mg ribbon.", [
            "Independent: HCl concentration (e.g. 0.50, 1.0, 1.5, 2.0 mol dm⁻³ by dilution) [1]",
            "Measure volume of H₂ every 15 s in a gas syringe (or time for Mg to disappear) [1]",
            "Controlled: same length/mass of Mg, volume of acid, temperature, apparatus [1]",
            "Plot volume vs time, tangent at t = 0 for initial rate; plot initial rate vs concentration; repeat for reliability [1]",
          ]],
          ["eg", "<b>P1B · Data response · 3 marks</b> The volume of H₂ vs time curve for a reaction levels off at 48 cm³. A second experiment with the same mass of Mg but excess acid at higher concentration reaches 48 cm³ sooner. Explain the final volume and the steeper curve.", [
            "Same mass of Mg (limiting reactant) → same moles → same final volume 48 cm³ [1]",
            "Higher concentration → more frequent collisions → higher initial rate [1]",
            "Steeper initial gradient and plateau reached in less time [1]",
          ]],
          ["note", "<b>常考</b>：給你 graph（volume or mass vs time）→ draw tangent / compare curves；問 “What does the final volume depend on?” 答：amount (mol) of the <b>limiting reactant</b>，同 rate 無關。"],
          ["trap", ["曲線 plateau 高度由 limiting reactant 決定，不是 rate。", "Fair test 一次只改一個 variable。", "Mass-loss data: 小 mass 變化→ balance 要 precise；H₂ 太輕。", "Marble chips + acid 實驗：surface area 同 mass 都要控制好。"]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Define","Rate = change in concentration of reactant / product per unit time."],["Explain (collision theory)","Frequency of collisions up AND fraction of collisions with E ≥ E<sub>a</sub> (for temperature, catalyst); two points."],["Sketch","M–B curve: same area, peak shifts right and lower at higher T; mark E<sub>a</sub>; axes labelled."],["Suggest / Evaluate (experiment)","Measurable change, control variables, source of error, improvement."],["Describe","Gradient of tangent = rate at that time."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Why higher T increases rate","Particles have more KE; more collisions with E ≥ E<sub>a</sub>; frequency also slightly up."],["Why higher concentration / pressure","More particles per volume, more frequent collisions (E<sub>a</sub> fraction unchanged)."],["Catalyst effect","Alternative pathway with lower E<sub>a</sub>: more particles E ≥ E<sub>a</sub>; ΔH and yield unchanged."],["Read rate from graph","Tangent at t; initial rate at t = 0."],["Evaluate method","Gas syringe: leaks, time delay; mass loss: dense gas only."]]],
          ["note", "“Particles collide more often” 單獨只得半分：一定要加 “with energy ≥ E<sub>a</sub>” 或 “greater proportion”。Catalyst 唔改 equilibrium position 亦唔改 ΔH。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake 失分位", "Fix 點改"], [
            ["Rate 單位漏 time", "mol dm⁻³ s⁻¹；cm³ s⁻¹"],
            ["只寫 “more collisions”", "write “more frequent <b>successful</b> collisions”"],
            ["Temperature 解釋只講 faster", "必須寫 greater proportion with E ≥ E<sub>a</sub>"],
            ["M-B curve 面積唔一樣 / 對稱", "面積相同；skewed；由 origin 起"],
            ["Catalyst 畫成 shift curve", "移動 E<sub>a</sub> line，唔係 curve"],
            ["Catalyst 話改 yield / ΔH", "只改 rate；ΔH 同 equilibrium 不變"],
            ["Tangent 畫錯", "用直尺貼住曲線一點，gradient = Δy/Δx"],
            ["Initial rate 用 average rate", "initial = tangent at t = 0"],
            ["Plateau 當 rate 問題", "plateau 高度 = limiting reactant 量"],
            ["Surface area 變加 mass", "同一 mass，更小 particle size"],
            ["Concentration 與 volume 搞混", "體積加但濃度不變 → rate 不變"],
            ["Ea 位置錯", "E<sub>a</sub> arrow 由 reactants 到 peak"],
            ["冇 label axes", "x: kinetic energy / y: number of particles；Enthalpy / reaction coordinate"],
          ]],
          ["check", [
            "Define rate, activation energy, catalyst; state the 2 conditions for a successful collision",
            "Give 4 methods to follow a reaction with a suitable example for each",
            "Calculate average rate; find initial rate by tangent",
            "Explain effect of concentration, pressure, surface area, temperature, catalyst (3-step answer)",
            "Sketch M-B curves for two temperatures and for a catalyst",
            "Sketch energy profile with catalyst; label E<sub>a</sub> and ΔH",
            "Distinguish homogeneous and heterogeneous catalysts with examples",
            "Interpret volume–time graphs for same/different amounts of limiting reactant",
            "Design a fair test: independent, dependent, controlled variables",
          ]],
        ],
      },
    ],
    summary: [
      "速率 = 濃度變幾多 ÷ 時間；單位 mol dm⁻³ s⁻¹",
      "瞬時速率 = tangent gradient；平均 = 兩點斜率",
      "夠勁、啱角度、撞得密",
      "濃度 / 壓力 / 表面積：撞得密；溫度：夠勁嘅比例 ↑",
      "M-B：由原點起、不對稱、面積不變",
      "熱令曲線低而右；催化令 Ea 線搬去左",
      "Catalyst：替代路徑、Ea 低、不耗用、不改 ΔH 同 yield",
      "Plateau 高度睇 limiting reactant，唔睇 rate",
    ],
    practice: [
      { q: "R2.2 Which change does NOT increase the rate of reaction between marble chips and hydrochloric acid?", o: ["A. Using powdered marble", "B. Increasing acid concentration", "C. Increasing the volume of acid at the same concentration", "D. Increasing the temperature"], m: 1, a: "<b>C</b>. Same concentration → same collision frequency per unit volume." },
      { q: "R2.2 How does a catalyst increase the rate of reaction?", o: ["A. Increases kinetic energy of particles", "B. Increases collision frequency only", "C. Provides an alternative pathway with lower activation energy", "D. Shifts the Maxwell–Boltzmann curve to the right"], m: 1, a: "<b>C</b>." },
      { q: "R2.2 Which is the main reason a temperature increase raises rate?", o: ["A. Collision frequency increases", "B. Activation energy decreases", "C. A greater proportion of collisions have energy ≥ E<sub>a</sub>", "D. Particles become larger"], m: 1, a: "<b>C</b>." },
      { q: "R2.2 On a Maxwell–Boltzmann curve, what happens as temperature increases?", o: ["A. Peak higher and moves left", "B. Peak lower and moves right", "C. Area under the curve increases", "D. E<sub>a</sub> decreases"], m: 1, a: "<b>B</b>. Area stays constant; E<sub>a</sub> unchanged." },
      { q: "R2.2 Which measurement is most suitable for following CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)?", o: ["A. colour change", "B. mass loss of the mixture", "C. pH of a gas", "D. conductivity of a solid"], m: 1, a: "<b>B</b>. CO₂ escapes so the mass decreases (or collect gas volume)." },
      { q: "R2.2 A student calculates the initial rate from a volume–time graph. Which method is correct?", o: ["A. Gradient of the chord joining the first and last points", "B. Gradient of tangent at t = 0", "C. Final volume ÷ total time", "D. Area under the curve"], m: 1, a: "<b>B</b>." },
      { q: "State the two conditions required for a successful collision between reacting particles.", m: 2, a: "Particles collide with energy ≥ activation energy [1]; with the correct orientation [1]." },
      { q: "Explain, using collision theory, why increasing the concentration of a reactant in solution increases the rate of reaction.", m: 2, a: "More particles per unit volume → more frequent collisions [1]; higher frequency of successful collisions → increased rate [1]." },
      { q: "Sketch a Maxwell–Boltzmann distribution for a gas at two temperatures T₁ and T₂ (T₂ > T₁) and use it to explain why the rate is greater at T₂.", m: 4, a: "Axes labelled kinetic energy and number of particles; curves from origin [1]; T₂ lower peak shifted right, same area [1]; E<sub>a</sub> marked, greater area beyond E<sub>a</sub> at T₂ [1]; greater proportion of particles with E ≥ E<sub>a</sub> → more frequent successful collisions [1]." },
      { q: "Sketch an energy profile for an exothermic reaction with and without a catalyst. Label ΔH and E<sub>a</sub>.", m: 3, a: "Axes (enthalpy, reaction coordinate) and reactants above products [1]; uncatalysed peak with E<sub>a</sub> labelled [1]; lower catalysed peak with smaller E<sub>a</sub>, same ΔH [1]." },
      { q: "The tangent at t = 0 to a graph of volume of H₂ against time passes through (0, 0) and (50 s, 75 cm³). Calculate the initial rate and state why the gradient decreases later.", m: 2, a: "75/50 = 1.5 cm³ s⁻¹ [1]; reactant concentration falls so fewer successful collisions per unit time [1]." },
      { q: "Outline how the rate of the reaction between sodium thiosulfate and hydrochloric acid can be followed and explain how you would verify that doubling [S₂O₃²⁻] doubles the rate.", m: 3, a: "Measure time for a cross beneath the flask to disappear (precipitate of sulfur) [1]; rate ∝ 1/time [1]; if time halves when concentration doubles then rate doubles (controlling volume and temperature) [1]." },
      { q: "Explain why 0.50 g of magnesium reacting with excess acid at a higher temperature gives the same final volume of hydrogen but a steeper initial gradient.", m: 2, a: "Same amount of Mg (limiting reactant) → same moles of H₂ [1]; higher temperature → greater proportion with E ≥ E<sub>a</sub> → faster initial rate [1]." },
    ],
  },

  "chem-10": {
    title: "Dynamic equilibrium · Kc · Le Chatelier · Haber & industrial compromise",
    intro: "平衡題 = 識定義、識寫 Kc、識用 Le Chatelier 三步答、識解釋 compromise。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Dynamic equilibrium 動態平衡",
        min: 3,
        blocks: [
          ["key", "<b>Dynamic equilibrium</b>: in a <b>closed system</b>, the <b>rate of the forward reaction equals the rate of the reverse reaction</b>, so the <b>concentrations (macroscopic properties) of reactants and products remain constant</b> — but both reactions are still happening."],
          ["table", ["Feature", "Detail"], [
            ["System", "must be closed (no matter escapes); reversible reaction (⇌)"],
            ["Rates", "forward rate = reverse rate (NOT zero)"],
            ["Concentrations", "constant, but NOT necessarily equal"],
            ["Macroscopic properties", "colour, pressure, density, pH stay constant"],
            ["Approach", "same equilibrium reachable from either reactants or products (same T)"],
            ["Time", "rate–time graph: forward rate falls, reverse rate rises until the lines meet and stay level"],
          ]],
          ["rhyme", "口訣 1", "封閉、可逆、速率等、濃度唔變", "Four conditions for equilibrium; “dynamic” = reactions still going on, concentration constant, NOT stopped."],
          ["table", ["Example equilibrium", "Observation"], [
            ["2NO₂ (brown) ⇌ N₂O₄ (colourless), ΔH = −57 kJ mol⁻¹", "colour stays constant at equilibrium"],
            ["Fe³⁺ (yellow) + SCN⁻ ⇌ FeSCN²⁺ (blood-red)", "red colour intensity constant"],
            ["N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹", "Haber process"],
            ["2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0", "Contact process"],
          ]],
          ["trap", ["“Reaction has stopped” = 錯。要話 rates equal。", "Equilibrium 唔係 concentrations equal。", "Open system 唔會到達 equilibrium（如 CaCO₃ 喺開放容器分解）。"]],
        ],
      },
      {
        h: "The equilibrium constant Kc",
        min: 4,
        blocks: [
          ["key", "For aA + bB ⇌ cC + dD (all aqueous or gaseous):<br><b>K<sub>c</sub> = [C]<sup>c</sup>[D]<sup>d</sup> ÷ ([A]<sup>a</sup>[B]<sup>b</sup>)</b>　[ ] = equilibrium concentration in mol dm⁻³<br>K<sub>c</sub> depends <b>only on temperature</b>. Pure solids and pure liquids are NOT included."],
          ["rhyme", "口訣 2", "產物喺上、反應物喺下，係數做 power", "Products over reactants, each raised to its coefficient. 固體同純液體唔寫。"],
          ["table", ["Size of K<sub>c</sub>", "Meaning"], [
            ["K ≫ 1 (e.g. 10³ or more)", "equilibrium lies to the right: mostly products"],
            ["K ≈ 1", "significant amounts of reactants and products"],
            ["K ≪ 1 (e.g. 10⁻³ or less)", "equilibrium lies to the left: mostly reactants"],
          ]],
          ["table", ["Manipulation", "Effect on K"], [
            ["Reverse the equation", "K → 1/K"],
            ["Multiply coefficients by n", "K → Kⁿ (halve → square root)"],
            ["Change T", "K changes (see Le Chatelier)"],
            ["Change concentration, pressure, add catalyst", "K unchanged"],
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks (常考)</b> At equilibrium [H₂] = 0.200, [I₂] = 0.200 and [HI] = 1.40 mol dm⁻³. Calculate K<sub>c</sub> for H₂(g) + I₂(g) ⇌ 2HI(g).", [
            "K<sub>c</sub> = [HI]² ÷ ([H₂][I₂]) [1]",
            "= 1.40² ÷ (0.200 × 0.200) = 1.96 ÷ 0.0400 = <b>49.0</b> [1]（no units: powers cancel）",
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b> For N₂(g) + 3H₂(g) ⇌ 2NH₃(g): [N₂] = 0.50, [H₂] = 1.00, [NH₃] = 0.20 mol dm⁻³. Write K<sub>c</sub> and calculate its value with units.", [
            "K<sub>c</sub> = [NH₃]² ÷ ([N₂][H₂]³) [1]",
            "= 0.20² ÷ (0.50 × 1.00³) = 0.040 ÷ 0.50 = <b>0.080 mol⁻² dm⁶</b> [1]",
          ]],
          ["eg", "<b>P2 · Determine · 2 marks</b> PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), K<sub>c</sub> = 0.040 mol dm⁻³. At equilibrium [PCl₃] = [Cl₂] = 0.020 mol dm⁻³. Determine [PCl₅].", [
            "K<sub>c</sub> = [PCl₃][Cl₂] ÷ [PCl₅] → [PCl₅] = (0.020 × 0.020) ÷ 0.040 [1]",
            "= <b>0.010 mol dm⁻³</b> [1]",
          ]],
          ["eg", "<b>P1 MCQ</b> For N₂ + 3H₂ ⇌ 2NH₃, K<sub>c</sub> = 0.080. What is K<sub>c</sub> for (a) 2NH₃ ⇌ N₂ + 3H₂ (b) ½N₂ + 3/2 H₂ ⇌ NH₃?", [
            "(a) reverse → 1/0.080 = <b>12.5</b>",
            "(b) halve coefficients → √0.080 = <b>0.28</b>",
          ]],
          ["eg", "<b>P2 · Deduce · 1 mark</b> Write the K<sub>c</sub> expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g).", [
            "Solids omitted: <b>K<sub>c</sub> = [CO₂]</b> [1]",
          ]],
          ["eg", "<b>Extension (check if your teacher tests ICE tables)</b> 1.00 mol H₂ and 1.00 mol I₂ in a 1.00 dm³ flask reach equilibrium, K<sub>c</sub> = 49. Find [HI].", [
            "Let x mol H₂ react: [H₂] = [I₂] = 1.00 − x；[HI] = 2x",
            "K<sub>c</sub> = (2x)² ÷ (1.00 − x)² = 49 → 2x ÷ (1.00 − x) = 7 (take √)",
            "2x = 7 − 7x → x = 7/9 = 0.778；[HI] = 1.56 mol dm⁻³；[H₂] = [I₂] = 0.222 mol dm⁻³ ✅（check: 1.556²/0.222² = 49）",
          ]],
          ["note", "<b>Reaction quotient Q</b>（AHL）：same expression with non-equilibrium concentrations；Q &lt; K → shifts right; Q &gt; K → shifts left. SL 通常唔直接考，但可以用嚟理解 Le Chatelier。"],
          ["trap", ["Power = coefficient，唔好漏 square / cube。", "K 單位：由 expression 度出嚟；很多題目 K 當無單位，睇題目要求。", "K 只受 temperature 影響；加 catalyst、改 concentration 都唔變。", "固體 / 純液體唔寫入 expression；(aq) 同 (g) 先寫。"]],
        ],
      },
      {
        h: "Le Chatelier's principle",
        min: 4,
        blocks: [
          ["key", "<b>Le Chatelier's principle</b>: if a system at equilibrium is subjected to a change, the <b>position of equilibrium shifts to partially counteract (oppose) the change</b>."],
          ["table", ["Change", "Position shifts", "K<sub>c</sub>", "Reason (write this)"], [
            ["↑ [reactant] (or ↓ [product])", "right (products)", "no change", "system opposes by using up added reactant"],
            ["↓ [reactant] (or ↑ [product])", "left", "no change", "opposes by making more reactant"],
            ["↑ pressure (↓ volume) gases", "side with FEWER moles of gas", "no change", "opposes pressure rise by reducing number of gas molecules"],
            ["↓ pressure", "side with MORE moles of gas", "no change", "opposes pressure drop"],
            ["↑ temperature", "endothermic direction", "changes", "opposes by absorbing heat"],
            ["↓ temperature", "exothermic direction", "changes", "opposes by releasing heat"],
            ["Catalyst", "no shift", "no change", "speeds forward and reverse equally; equilibrium reached faster"],
            ["Inert gas at constant volume", "no shift", "no change", "partial pressures / concentrations unchanged"],
          ]],
          ["rhyme", "口訣 3", "加咗邊邊，就往另一邊；加熱往吸熱，加壓往少 mol", "Shift AWAY from what is added; ↑T → endothermic; ↑p → fewer gas mol. 數 mol 時只數 (g)。"],
          ["table", ["Effect of T on K", "Exothermic (ΔH < 0)", "Endothermic (ΔH > 0)"], [
            ["T increases", "K decreases (shift left)", "K increases (shift right)"],
            ["T decreases", "K increases", "K decreases"],
          ]],
          ["eg", "<b>P1 MCQ</b> For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0, which change increases the equilibrium yield of SO₃?", [
            "3 mol gas on left, 2 mol on right → increase pressure shifts right ✅",
            "Increasing T shifts left (exothermic forward) ✗；catalyst no shift ✗",
          ]],
          ["eg", "<b>P2 · Explain · 3 marks (常考)</b> 2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless), ΔH = −57 kJ mol⁻¹. Predict and explain the colour change when the mixture is (a) heated, (b) compressed.", [
            "(a) heating favours the endothermic direction (reverse) → more NO₂ → darker brown [1]",
            "(b) compression increases pressure → shifts to the side with fewer moles of gas (right) → N₂O₄ increases [1]",
            "Colour first looks darker (higher concentration immediately after compression), then fades as equilibrium shifts right [1]",
          ]],
          ["eg", "<b>P2 · Explain · 3 marks</b> Fe³⁺(aq) + SCN⁻(aq) ⇌ FeSCN²⁺(aq). Explain the effect of adding more Fe(NO₃)₃ solution on the colour and on K<sub>c</sub>.", [
            "[Fe³⁺] increases → equilibrium shifts right to use up some Fe³⁺ [1]",
            "More FeSCN²⁺ forms → red colour deepens [1]",
            "K<sub>c</sub> unchanged since temperature is constant [1]",
          ]],
          ["eg", "<b>P2 · Explain · 2 marks</b> Explain the effect of a catalyst on the position of equilibrium and the value of K<sub>c</sub>.", [
            "Catalyst lowers E<sub>a</sub> for forward and reverse reactions equally; equilibrium is reached faster but the position is unchanged [1]",
            "K<sub>c</sub> does not change (depends only on temperature) [1]",
          ]],
          ["trap", ["K 只受溫度影響：改變壓力 / 濃度 / 加 catalyst 時 K 都唔變。", "Shift 唔等如 reaction 變快；rate 同 position 係兩回事。", "Pressure 影響只考慮 gaseous moles；兩邊相等就唔 shift。", "答 Le Chatelier 要寫 “to oppose the change / partially counteract”。", "增加 temperature 時，要同時講 K 點變（會改變）。"]],
        ],
      },
      {
        h: "Industrial equilibria: Haber & Contact",
        min: 3.5,
        blocks: [
          ["key", "<b>Haber process</b>: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)　ΔH = −92 kJ mol⁻¹　(4 mol gas → 2 mol gas)<br>Conditions: about <b>450 °C</b>, about <b>200 atm</b> (≈ 2 × 10⁴ kPa), <b>iron catalyst</b>, NH₃ liquefied and removed, unreacted N₂/H₂ recycled."],
          ["table", ["Condition", "Effect on yield (position)", "Effect on rate", "Why that compromise"], [
            ["Low temperature", "higher yield (forward is exothermic)", "slow", "too slow to be economic"],
            ["High temperature (450 °C)", "lower yield", "fast", "compromise: acceptable rate + reasonable yield; catalyst works effectively"],
            ["High pressure (200 atm)", "higher yield (4 → 2 mol)", "fast", "very high pressure is costly (equipment, energy) and a safety risk → compromise"],
            ["Iron catalyst", "no change in yield", "lower E<sub>a</sub> → faster", "allows lower temperature to be used"],
            ["Remove NH₃ (liquefy)", "shifts right", "—", "increases overall conversion; recycle reactants"],
          ]],
          ["rhyme", "口訣 4", "產量要低溫高壓，速率要高溫催化；折衷 450 °C", "Industrial conditions = compromise between yield, rate and cost。Say all three."],
          ["eg", "<b>P2 · Explain · 3 marks (perennial favourite)</b> Explain, using Le Chatelier's principle, the effect of increasing temperature on the yield of ammonia in the Haber process, and why about 450 °C is used.", [
            "Forward reaction is exothermic, so increasing T shifts the equilibrium to the left (endothermic direction) [1]",
            "Yield of ammonia decreases (and K decreases) [1]",
            "A higher temperature gives a faster rate; 450 °C is a compromise between acceptable rate and reasonable yield [1]",
          ]],
          ["eg", "<b>P2 · Discuss · 3 marks</b> 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0 (V₂O₅ catalyst, ~450 °C, low pressure ~1–2 atm). Why is a very high pressure not used?", [
            "Higher pressure would favour more SO₃ (3 → 2 mol gas) [1]",
            "But the yield is already high at atmospheric pressure [1]",
            "High pressure is costly and unsafe — not worth the extra yield [1]",
          ]],
          ["note", "<b>常考</b>：Haber 同 Contact process 嘅 “explain the conditions” 係 P2 熱門 3-4 marks：每個條件講 yield + rate + cost 三個角度。"],
          ["trap", ["唔好話 high T 令 yield 升；exothermic forward reaction，T ↑ → yield ↓。", "Catalyst 唔提高 yield，只係加快 equilibrium 到達。", "Compromise 一定要提兩邊（rate vs yield）加 cost / safety。"]],
        ],
      },
      {
        h: "Command-term patterns 題型",
        min: 2,
        blocks: [
          ["table", ["Question says…", "Answer pattern", "Marks"], [
            ["Define dynamic equilibrium", "closed system; forward = reverse rate; concentrations constant", "2"],
            ["Write the K<sub>c</sub> expression", "[products]^coef / [reactants]^coef; omit solids/liquids", "1"],
            ["Calculate K<sub>c</sub>", "substitute equilibrium concentrations; value, units if asked", "2"],
            ["State the magnitude of K", "K ≫ 1 products; K ≪ 1 reactants", "1"],
            ["Predict/explain effect of T", "endo/exo direction; K change; colour change", "2–3"],
            ["Predict/explain effect of p", "count gas moles; shift to fewer; K unchanged", "2"],
            ["State effect of catalyst", "rate ↑, position & K unchanged", "1–2"],
            ["Explain industrial conditions", "yield + rate + cost; compromise", "3–4"],
          ]],
          ["check", [
            "Define dynamic equilibrium and list its 4 conditions",
            "Write K<sub>c</sub> for any reaction (ignore solids and liquids)",
            "Calculate K<sub>c</sub> and use K<sub>c</sub> to find a missing concentration",
            "State what K ≫ 1 / ≪ 1 means; how reversing/halving changes K",
            "Predict shifts for ΔT, Δp, Δ[ ], catalyst (and K change)",
            "Explain the colour changes in NO₂/N₂O₄ and Fe³⁺/SCN⁻",
            "Explain the Haber conditions as a compromise (rate, yield, cost)",
          ]],
        ],
      },
    ],
    summary: [
      "封閉、可逆、速率等、濃度唔變",
      "Kc = 產物 ÷ 反應物，係數做 power；固體液體唔寫",
      "K 大 = 偏右；K 細 = 偏左；K 只睇溫度",
      "反轉 K → 1/K；係數 × n → Kⁿ",
      "加咗邊邊，就往另一邊",
      "加熱往吸熱；加壓往少 mol；catalyst 唔 shift",
      "Haber：450 °C、200 atm、Fe；rate / yield / cost 折衷",
    ],
    practice: [
      { q: "R2.3 Which statement is true for a system at dynamic equilibrium?", o: ["A. The reaction has stopped", "B. Concentrations of reactants and products are equal", "C. Forward and reverse rates are equal", "D. Only the forward reaction occurs"], m: 1, a: "<b>C</b>. Rates equal; concentrations constant (not necessarily equal)." },
      { q: "R2.3 For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0, which change increases the equilibrium yield of SO₃?", o: ["A. Increasing temperature", "B. Decreasing pressure", "C. Adding a catalyst", "D. Increasing pressure"], m: 1, a: "<b>D</b>. 3 mol gas → 2 mol gas, so higher pressure shifts right." },
      { q: "R2.3 What is the effect of a catalyst on an equilibrium?", o: ["A. Increases K", "B. Shifts position to the right", "C. Equilibrium reached faster with no change in position", "D. Decreases K"], m: 1, a: "<b>C</b>." },
      { q: "R2.3 For A ⇌ B, K = 4.0. What is K for 2B ⇌ 2A?", o: ["A. 0.0625", "B. 0.25", "C. 8.0", "D. 16"], m: 1, a: "<b>A</b>. Reverse → 1/4 = 0.25; doubling → 0.25² = 0.0625." },
      { q: "R2.3 What is the K<sub>c</sub> expression for 2NO₂(g) ⇌ N₂O₄(g)?", o: ["A. [N₂O₄]/[NO₂]", "B. [N₂O₄]/[NO₂]²", "C. [NO₂]²/[N₂O₄]", "D. 2[NO₂]/[N₂O₄]"], m: 1, a: "<b>B</b>. Products over reactants; coefficient 2 becomes a power." },
      { q: "R2.3 The forward reaction of an equilibrium is exothermic. What happens to K when temperature increases?", o: ["A. K increases", "B. K decreases", "C. K is unchanged", "D. K becomes zero"], m: 1, a: "<b>B</b>. Equilibrium shifts left (endothermic direction) so K decreases." },
      { q: "State the K<sub>c</sub> expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g).", m: 1, a: "K<sub>c</sub> = [CO₂] [1] (solids omitted)." },
      { q: "At equilibrium [H₂] = 0.200, [I₂] = 0.200 and [HI] = 1.40 mol dm⁻³. Calculate K<sub>c</sub> for H₂(g) + I₂(g) ⇌ 2HI(g).", m: 2, a: "K<sub>c</sub> = [HI]²/([H₂][I₂]) = 1.40²/(0.200 × 0.200) [1] = 49 [1]." },
      { q: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) at equilibrium [N₂] = 0.50, [H₂] = 1.00, [NH₃] = 0.20 mol dm⁻³. Calculate K<sub>c</sub> including units.", m: 2, a: "K<sub>c</sub> = [NH₃]²/([N₂][H₂]³) [1] = 0.040/0.50 = 0.080 mol⁻² dm⁶ [1]." },
      { q: "Explain, using Le Chatelier's principle, the effect of increasing temperature on the yield of ammonia in the Haber process (ΔH = −92 kJ mol⁻¹), and why about 450 °C is used.", m: 3, a: "Forward reaction exothermic so equilibrium shifts left when T increases [1]; yield of ammonia (and K) decreases [1]; 450 °C is a compromise between acceptable rate and reasonable yield [1]." },
      { q: "State and explain the effect of increasing pressure on the position of equilibrium in N₂(g) + 3H₂(g) ⇌ 2NH₃(g), and on K<sub>c</sub>.", m: 3, a: "Shifts right [1] because 4 mol gas → 2 mol gas, system opposes pressure increase by reducing the number of molecules [1]; K<sub>c</sub> unchanged because it depends only on temperature [1]." },
      { q: "2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless), ΔH = −57 kJ mol⁻¹. Predict and explain the colour change when the equilibrium mixture is cooled.", m: 2, a: "Cooling favours the exothermic (forward) direction [1]; more N₂O₄ forms so the brown colour fades [1]." },
      { q: "Outline why equilibrium cannot be reached in an open system and why a dynamic equilibrium is described as dynamic.", m: 2, a: "In an open system products/reactants can escape so concentrations cannot stay constant [1]; at equilibrium the forward and reverse reactions both continue at equal rates, with constant concentrations [1]." },
    ],
  },

  "chem-11": {
    title: "Brønsted–Lowry · pH & Kw · Strong vs weak · Neutralisation · Titration",
    intro: "Acid–base 全部圍住「H⁺ 搬嚟搬去」。識 conjugate pair、識 pH 一行計、識強弱分別、識中和計 mole，就包晒 R3.1。最後有失分位同 12 題練習。",
    parts: [
      {
        h: "Brønsted–Lowry 定義 · conjugate pairs",
        min: 3,
        blocks: [
          ["key", "<b>Brønsted–Lowry acid</b>: a proton (H⁺) donor.<br><b>Brønsted–Lowry base</b>: a proton (H⁺) acceptor.<br><b>Conjugate pair</b>: two species that differ by one proton (H⁺). Acid side has the extra H⁺.<br><b>Amphiprotic</b>: a species that can both donate and accept a proton (H₂O, HCO₃⁻, HSO₄⁻, H₂PO₄⁻).<br><b>Amphoteric</b>: reacts as both an acid and a base (e.g. Al₂O₃, ZnO); a wider word than amphiprotic."],
          ["grid", [
            ["①", "畀 H 係酸，收 H 係鹼", "acid = donor, base = acceptor"],
            ["②", "差一粒 H⁺ 就係一對", "conjugate pair differs by H⁺"],
            ["③", "酸減 H 變 conjugate base", "HA − H⁺ → A⁻"],
            ["④", "鹼加 H 變 conjugate acid", "B + H⁺ → BH⁺"],
            ["⑤", "水兩邊撈", "water is amphiprotic"],
          ]],
          ["table", ["Acid", "Conjugate base", "Base", "Conjugate acid"], [
            ["HCl", "Cl⁻", "NH₃", "NH₄⁺"],
            ["HNO₃", "NO₃⁻", "OH⁻", "H₂O"],
            ["H₂SO₄", "HSO₄⁻", "H₂O", "H₃O⁺"],
            ["HSO₄⁻", "SO₄²⁻", "CO₃²⁻", "HCO₃⁻"],
            ["CH₃COOH", "CH₃COO⁻", "CH₃COO⁻", "CH₃COOH"],
            ["H₂CO₃", "HCO₃⁻", "HCO₃⁻", "H₂CO₃"],
            ["H₃PO₄", "H₂PO₄⁻", "CH₃NH₂", "CH₃NH₃⁺"],
          ]],
          ["eg", "<b>【P2 · 2 marks】</b> Identify the two conjugate acid–base pairs: HSO₄⁻ + NH₃ ⇌ SO₄²⁻ + NH₄⁺.", [
            "① 邊個畀出 H⁺？HSO₄⁻ → SO₄²⁻（少咗一粒 H⁺）→ HSO₄⁻ is the acid, SO₄²⁻ is its conjugate base",
            "② 邊個收入 H⁺？NH₃ → NH₄⁺（多咗一粒 H⁺）→ NH₃ is the base, NH₄⁺ is its conjugate acid",
            "<b>Pairs: HSO₄⁻ / SO₄²⁻ and NH₄⁺ / NH₃</b> ✅（每對一邊喺左、一邊喺右）",
          ]],
          ["eg", "<b>【P2 · 2 marks】</b> Show that water is amphiprotic and that HCO₃⁻ is amphiprotic.", [
            "H₂O as an acid: H₂O + NH₃ ⇌ OH⁻ + NH₄⁺ ；H₂O as a base: H₂O + HCl → H₃O⁺ + Cl⁻",
            "HCO₃⁻ as an acid: HCO₃⁻ + OH⁻ → CO₃²⁻ + H₂O ；HCO₃⁻ as a base: HCO₃⁻ + H⁺ → H₂CO₃（→ H₂O + CO₂）",
            "要證明 amphiprotic：必須寫<b>兩條</b> equation，一條做 acid，一條做 base ✅",
          ]],
          ["note", "<b>Self-ionisation of water</b>: 2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)，通常簡寫 H₂O ⇌ H⁺ + OH⁻。H⁺(aq) 同 H₃O⁺(aq) 當同一樣嘢。"],
          ["trap", ["Conjugate base of H₂SO₄ 係 HSO₄⁻（只係少一粒 H⁺），唔係 SO₄²⁻。", "Conjugate base 要<b>電荷減 1</b>，conjugate acid 要<b>電荷加 1</b>：NH₃ → NH₄⁺（0 → +1），唔係 NH₂⁻。", "Amphiprotic（H⁺）≠ amphoteric（酸鹼都反應，e.g. Al₂O₃）。", "寫 conjugate pair 要配對：「HCl / Cl⁻」係一對，唔好寫「HCl / NH₄⁺」。"]],
        ],
      },
      {
        h: "pH · pOH · Kw 計算",
        min: 4,
        blocks: [
          ["key", "<b>pH = −log₁₀[H⁺]</b>　　<b>[H⁺] = 10<sup>−pH</sup></b><br><b>pOH = −log₁₀[OH⁻]</b>　　<b>[OH⁻] = 10<sup>−pOH</sup></b><br><b>Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ (at 298 K)</b>　　<b>pH + pOH = 14 (at 298 K)</b><br>單位：[ ] 用 mol dm⁻³；pH 冇單位。"],
          ["grid", [
            ["⑥", "差一級，差十倍", "1 pH unit = ×10 in [H⁺]"],
            ["⑦", "酸直接 −log，鹼先 pOH", "bases: pOH first, then 14 − pOH"],
            ["⑧", "pH 嘅 d.p. = [H⁺] 嘅 s.f.", "2 s.f. → 2 d.p."],
            ["⑨", "Ba(OH)₂ 乘 2", "2 OH⁻ per formula unit"],
            ["⑩", "稀釋 ×10，強酸 pH +1", "strong acid: ×10 dilution → pH + 1"],
          ]],
          ["table", ["[H⁺] / mol dm⁻³", "pH", "[OH⁻] / mol dm⁻³", "Solution"], [
            ["1.0", "0", "1.0 × 10⁻¹⁴", "very acidic"],
            ["1.0 × 10⁻¹", "1", "1.0 × 10⁻¹³", "strongly acidic"],
            ["1.0 × 10⁻⁷", "7", "1.0 × 10⁻⁷", "neutral (298 K)"],
            ["1.0 × 10⁻¹³", "13", "1.0 × 10⁻¹", "strongly alkaline"],
          ]],
          ["eg", "<b>【P2 · 1 mark】</b> Calculate the pH of 0.020 mol dm⁻³ HNO₃.", [
            "HNO₃ is a strong monoprotic acid → completely dissociates → [H⁺] = 0.020 mol dm⁻³",
            "pH = −log(0.020) = <b>1.70</b>（0.020 係 2 s.f. → 2 d.p.）✅"
          ]],
          ["eg", "<b>【P1 MCQ/P2 · 1 mark】</b> Calculate [H⁺] of a solution with pH 8.20.", [
            "[H⁺] = 10⁻⁸·²⁰ = 10⁻⁹ × 10⁰·⁸ = 6.31 × 10⁻⁹",
            "pH 有 2 d.p. → 答 <b>6.3 × 10⁻⁹ mol dm⁻³</b>（2 s.f.）✅"
          ]],
          ["eg", "<b>【P2 · 3 marks】</b> Calculate the pH of 0.0050 mol dm⁻³ Ba(OH)₂ at 298 K.", [
            "Ba(OH)₂ → Ba²⁺ + 2OH⁻ ：[OH⁻] = 2 × 0.0050 = 0.010 mol dm⁻³",
            "pOH = −log(0.010) = 2.00 → pH = 14 − 2.00 = <b>12.00</b> ✅",
            "另一條路：[H⁺] = 1.0 × 10⁻¹⁴ ÷ 0.010 = 1.0 × 10⁻¹² → pH 12.00（同一個答案）"
          ]],
          ["eg", "<b>【P2 · 2 marks】</b> Calculate the pH of a solution with [OH⁻] = 2.5 × 10⁻³ mol dm⁻³ at 298 K.", [
            "[H⁺] = Kw ÷ [OH⁻] = 1.0 × 10⁻¹⁴ ÷ 2.5 × 10⁻³ = 4.0 × 10⁻¹²",
            "pH = −log(4.0 × 10⁻¹²) = 11.40 ；check：pOH = 2.60，14 − 2.60 = <b>11.40</b> ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks】</b> 10.0 cm³ of 0.100 mol dm⁻³ HCl is diluted with water to a total volume of 1000 cm³. Find the new pH.", [
            "n(H⁺) 不變 = 0.100 × 0.0100 = 1.00 × 10⁻³ mol",
            "[H⁺] = 1.00 × 10⁻³ ÷ 1.000 dm³ = 1.00 × 10⁻³ mol dm⁻³（dilution ×100）",
            "pH 由 1.00 → <b>3.00</b>（×100 = pH +2）✅"
          ]],
          ["eg", "<b>【P2 · 3 marks】</b> At 323 K, Kw = 5.5 × 10⁻¹⁴. Calculate the pH of pure water at this temperature and state whether it is acidic, neutral or alkaline.", [
            "純水：[H⁺] = [OH⁻] → [H⁺]² = 5.5 × 10⁻¹⁴ → [H⁺] = 2.3 × 10⁻⁷",
            "pH = <b>6.63</b>（&lt; 7）",
            "但 [H⁺] = [OH⁻] → still <b>neutral</b> ✅ Ionisation is endothermic → T ↑ → Kw ↑ → pH of water ↓"
          ]],
          ["note", "<b>常考</b>：pH calculation + s.f.（P2 1–3 分）、conjugate pairs（2 分）、strong vs weak 實驗比較（2 分 explain/outline）、titration 計算 + uncertainty（P2/P1B）、acid + carbonate equation。\"Explain\" 題要兩個連住嘅 point（解離程度 → [H⁺] → pH/rate）。"],
          ["note", "pH 7 neutral 只喺 298 K 成立。Neutral 嘅真正定義：<b>[H⁺] = [OH⁻]</b>。Acidic: [H⁺] &gt; [OH⁻]；alkaline: [H⁺] &lt; [OH⁻]。"],
          ["trap", ["Base 直接 −log[OH⁻] 就當 pH ✗ — 咁個係 pOH，要 14 − pOH。", "漏咗 Ba(OH)₂ / Ca(OH)₂ 要乘 2。", "pH d.p. 寫錯：[H⁺] = 0.020（2 s.f.）→ pH 1.70，唔係 1.7 或 1.699。", "稀釋 ×10 pH +1，唔係 ×10 咁大；弱酸稀釋 pH 變化少過 1。", "log 計錯方向：[H⁺] 越細，pH 越大。"]],
        ],
      },
      {
        h: "Strong vs weak 強弱",
        min: 3,
        blocks: [
          ["key", "<b>Strong acid</b>: completely dissociated (ionised) in aqueous solution. Written with →.<br><b>Weak acid</b>: partially dissociated in aqueous solution; an equilibrium is established. Written with ⇌.<br>Strong base: completely dissociates (NaOH, KOH, LiOH, Ba(OH)₂). Weak base: partially reacts with water (NH₃, amines like CH₃NH₂)."],
          ["rhyme", "口訣", "強弱講解離，濃稀講份量", "Strong/weak = how much ionises（degree of dissociation）。Concentrated/dilute = how many mol dm⁻³。兩樣獨立，可以有 dilute strong acid 或者 concentrated weak acid。"],
          ["table", ["", "Strong acid (HCl)", "Weak acid (CH₃COOH)"], [
            ["Equation", "HCl(aq) → H⁺(aq) + Cl⁻(aq)", "CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)"],
            ["Particles in solution", "H⁺, Cl⁻ (no HCl)", "mostly CH₃COOH molecules; few H⁺, CH₃COO⁻"],
            ["pH (same conc.)", "lower (0.10 M → pH 1.0)", "higher"],
            ["Conductivity (same conc.)", "higher (more ions)", "lower (fewer ions)"],
            ["Rate with Mg / CaCO₃ (same conc.)", "faster (higher [H⁺])", "slower"],
            ["Moles NaOH to neutralise same n(acid)", "same", "same (equilibrium shifts as H⁺ is used up)"],
            ["Conjugate base", "very weak (Cl⁻)", "stronger (CH₃COO⁻)"],
          ]],
          ["table", ["Strong acids (memorise)", "Strong bases", "Weak acids", "Weak bases"], [
            ["HCl, HBr, HI, HNO₃, H₂SO₄ (first H⁺)", "LiOH, NaOH, KOH, Ba(OH)₂", "CH₃COOH and other carboxylic acids, H₂CO₃, H₃PO₄", "NH₃, CH₃NH₂ and other amines"],
          ]],
          ["table", ["Experiment to distinguish 0.10 M HCl from 0.10 M CH₃COOH", "Result for strong acid"], [
            ["Measure pH with a pH meter (or universal indicator)", "lower pH (≈ 1 vs ≈ 3)"],
            ["Conductivity meter", "higher conductivity"],
            ["Add Mg ribbon / CaCO₃, same size", "faster bubbling (more vigorous)"],
            ["Measure temperature rise with Mg? — NOT valid", "Final amount of H₂ is the same, so only the <b>rate</b> differs"],
          ]],
          ["eg", "<b>【P2 · 2 marks】</b> 25.0 cm³ of HCl and 25.0 cm³ of CH₃COOH both have pH 3.0. Compare the volume of 0.0100 mol dm⁻³ NaOH needed to neutralise each.", [
            "同 pH → 同 [H⁺] = 1.0 × 10⁻³，但 CH₃COOH 只係部分解離 → 它嘅<b>總濃度</b>遠高於 1.0 × 10⁻³",
            "HCl：n = 1.0 × 10⁻³ × 0.0250 = 2.5 × 10⁻⁵ mol → V(NaOH) = 2.5 × 10⁻⁵ ÷ 0.0100 = 2.5 cm³",
            "CH₃COOH：總 n 大好多 → <b>needs a larger volume of NaOH</b>（因為中和時全部 CH₃COOH 都最終畀出 H⁺）✅"
          ]],
          ["trap", ["寫「weak acid = dilute acid」✗ — weak 係解離少，dilute 係濃度低。", "「同濃度、同體積嘅強弱酸中和 NaOH 量唔同」✗ — 同 moles 就同量。", "Strong acid 用 ⇌ 或 weak acid 用 → ✗ — 箭咀要啱。", "Weak acid 同 Mg 反應「得出少啲 H₂ 」✗ — 最終 H₂ 量一樣，只係慢啲。", "Strong acid 嘅 H⁺ 濃度等於酸嘅濃度（monoprotic）；weak acid 唔係。"]],
        ],
      },
      {
        h: "Acid reactions · 離子方程式 · acid deposition",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "酸遇金屬出氫，遇碳酸鹽出二氧化碳，遇氧化物 / 氫氧化物出水", "全部都生成 salt。Salt 名：HCl → chloride，HNO₃ → nitrate，H₂SO₄ → sulfate。"],
          ["table", ["Acid + …", "Products", "Example (balanced)", "Observation"], [
            ["reactive metal", "salt + H₂", "Mg + 2HCl → MgCl₂ + H₂", "bubbles, metal dissolves, test: squeaky pop"],
            ["metal oxide", "salt + water", "CuO + H₂SO₄ → CuSO₄ + H₂O", "black solid dissolves, blue solution"],
            ["metal hydroxide / alkali", "salt + water", "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O", "temperature rises (exothermic)"],
            ["carbonate", "salt + water + CO₂", "CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂", "fizzing; CO₂ turns limewater milky"],
            ["hydrogencarbonate", "salt + water + CO₂", "NaHCO₃ + HCl → NaCl + H₂O + CO₂", "fizzing"],
            ["ammonia", "ammonium salt (no water)", "NH₃ + HCl → NH₄Cl", "—"],
          ]],
          ["key", "<b>離子方程式</b>：split 可溶 ionic compound 同 strong acid/base；solid、gas、water、weak acid 保持原樣；刪走 spectator ions。<br>強酸 + 強鹼：<b>H⁺(aq) + OH⁻(aq) → H₂O(l)</b>（ΔH ≈ −57 kJ mol⁻¹，所有強酸強鹼都差不多）<br>酸 + carbonate：<b>2H⁺(aq) + CO₃²⁻(aq) → H₂O(l) + CO₂(g)</b>"],
          ["eg", "<b>【P2 · 2 marks】</b> Write the ionic equation for Mg + 2HCl → MgCl₂ + H₂, and for CuO + H₂SO₄ → CuSO₄ + H₂O.", [
            "Mg(s) + 2H⁺(aq) + 2Cl⁻(aq) → Mg²⁺(aq) + 2Cl⁻(aq) + H₂(g) → 刪 Cl⁻ → <b>Mg(s) + 2H⁺(aq) → Mg²⁺(aq) + H₂(g)</b>",
            "CuO 係 insoluble solid，保持原樣：CuO(s) + 2H⁺(aq) + SO₄²⁻(aq) → Cu²⁺(aq) + SO₄²⁻(aq) + H₂O(l) → 刪 SO₄²⁻ → <b>CuO(s) + 2H⁺(aq) → Cu²⁺(aq) + H₂O(l)</b> ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks】</b> 50.0 cm³ of 1.00 mol dm⁻³ HCl reacts completely with Mg. Calculate the mass of Mg and the volume of H₂ at STP (molar volume 22.7 dm³ mol⁻¹).", [
            "n(HCl) = 1.00 × 0.0500 = 0.0500 mol ；Mg + 2HCl → MgCl₂ + H₂ → n(Mg) = 0.0500 ÷ 2 = 0.0250 mol",
            "m(Mg) = 0.0250 × 24.31 = <b>0.608 g</b>",
            "n(H₂) = 0.0250 mol → V = 0.0250 × 22.7 = <b>0.568 dm³</b> ✅"
          ]],
          ["table", ["Acid deposition", "Details"], [
            ["Normal rain", "pH ≈ 5.6 (slightly acidic): CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻"],
            ["Acid rain", "pH &lt; 5.6. Caused by oxides of sulfur and nitrogen: SO₂ + H₂O → H₂SO₃ ; 2SO₂ + O₂ ⇌ 2SO₃, SO₃ + H₂O → H₂SO₄ ; 2NO₂ + H₂O → HNO₃ + HNO₂"],
            ["Sources", "Burning fossil fuels containing sulfur (coal); high-temperature engines: N₂ + O₂ → 2NO, then 2NO + O₂ → 2NO₂"],
            ["Effects", "Corrodes limestone / marble / metals (CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂); damages trees; acidifies lakes → kills fish"],
            ["Reduce", "Remove S from fuel; flue-gas desulfurisation (CaO / CaCO₃ + SO₂); catalytic converters; liming of lakes (add CaCO₃); use renewable energy"],
          ]],
          ["trap", ["Metal oxide + acid 寫成會出 H₂ ✗ — 出 water。", "Carbonate + acid 漏咗 H₂O（只寫 CO₂）→ 失分。", "Insoluble solid（CuO、CaCO₃）喺 ionic equation 入面 split 咗 ✗。", "Normal rain 嘅 pH 係 5.6 唔係 7 — acid rain 係 &lt; 5.6。", "Spectator ions 唔刪清楚，或者 charge 唔平衡。"]],
        ],
      },
      {
        h: "Neutralisation · titration · indicator · pH curve",
        min: 4,
        blocks: [
          ["key", "<b>Neutralisation</b>: acid + base → salt + water（exothermic，強酸強鹼 ΔH ≈ −57 kJ mol⁻¹）。<br><b>Titration 一條龍</b>：已知嗰邊 n = c × V（V 用 dm³）→ 用 equation 比例過橋 → 未知嗰邊 c = n ÷ V。"],
          ["flow", [
            ["①", "Balanced equation，搵 mole ratio"],
            ["②", "已知溶液：n = c × V（cm³ ÷ 1000）"],
            ["③", "ratio 轉去未知嘅 n"],
            ["④", "c = n ÷ V（V 用 titration 嗰 volume）"],
            ["⑤", "核對 sig fig = data 最少者"],
          ]],
          ["eg", "<b>【P2 · 3 marks】</b> 25.00 cm³ of NaOH is neutralised by 18.40 cm³ of 0.100 mol dm⁻³ HCl (mean titre). Find c(NaOH).", [
            "NaOH + HCl → NaCl + H₂O（1 : 1）",
            "n(HCl) = 0.100 × 0.01840 = 1.84 × 10⁻³ mol → n(NaOH) = 1.84 × 10⁻³ mol",
            "c(NaOH) = 1.84 × 10⁻³ ÷ 0.02500 = <b>0.0736 mol dm⁻³</b> ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks】</b> 25.0 cm³ of 0.0400 mol dm⁻³ Ba(OH)₂ is titrated with 0.100 mol dm⁻³ HCl. Find the volume of HCl needed.", [
            "Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O（1 : 2）",
            "n(Ba(OH)₂) = 0.0400 × 0.0250 = 1.00 × 10⁻³ mol → n(HCl) = 2.00 × 10⁻³ mol",
            "V(HCl) = 2.00 × 10⁻³ ÷ 0.100 = 0.0200 dm³ = <b>20.0 cm³</b> ✅"
          ]],
          ["eg", "<b>【P1B · 3 marks】</b> Concordant titres: 21.35, 20.10, 20.05, 20.15 cm³ (first one is a rough). Find the mean titre and the percentage uncertainty if each burette reading is ± 0.05 cm³.", [
            "捨棄 rough（21.35）；concordant = within 0.10 cm³ of each other：20.10, 20.05, 20.15 ✅",
            "Mean = (20.10 + 20.05 + 20.15) ÷ 3 = <b>20.10 cm³</b>",
            "一個 titre = final − initial → 兩次 reading → uncertainty = ±0.05 + ±0.05 = ±0.10 cm³",
            "% uncertainty = 0.10 ÷ 20.10 × 100 = <b>0.50%</b> ✅"
          ]],
          ["table", ["Titration type", "Equivalence point pH", "Suitable indicator"], [
            ["Strong acid + strong base", "7 (steep jump from ~3 to ~11)", "methyl orange, bromothymol blue or phenolphthalein"],
            ["Weak acid + strong base", "&gt; 7 (smaller, higher jump)", "phenolphthalein"],
            ["Strong acid + weak base", "&lt; 7", "methyl orange"],
          ]],
          ["table", ["Indicator", "Approx. pH range", "Colour change (acid → alkali)"], [
            ["Methyl orange", "≈ 3.2 – 4.4", "red → yellow"],
            ["Bromothymol blue", "≈ 6.0 – 7.6", "yellow → blue"],
            ["Phenolphthalein", "≈ 8.2 – 10.0", "colourless → pink"],
          ]],
          ["note", "<b>Choose indicator</b>：colour-change range 要完全喺 pH curve 嘅 vertical section 入面。Exact ranges 睇 data booklet。<br><b>Curve 形狀（strong/strong）</b>：起點低 pH（~1，酸喺 flask）→ 緩慢上升 → equivalence 附近一滴就跳 → 平坦去高 pH。若鹼放 burette，酸放 flask 就係呢個形；反過來就倒轉。<br><b>pH meter vs indicator</b>：pH meter 連續、客觀、更精確；indicator 靠肉眼判斷 colour，主觀。"],
          ["trap", ["Volume 用 cm³ 直接乘 concentration — 要 ÷ 1000。", "Ratio 1 : 2（Ba(OH)₂、H₂SO₄）忘記，所有 titration 都當 1 : 1。", "Mean titre 包咗 rough titre。", "Titre uncertainty 只寫 ±0.05（要兩個 reading → ±0.10）。", "揀 phenolphthalein 做 strong acid + weak base ✗（range 唔喺 vertical section）。", "「Equivalence point = endpoint」— 前者係 stoichiometric 時，後者係 indicator 變色時，兩個接近但唔同。"]],
        ],
      },
      {
        h: "Back titration · 長題拆解",
        min: 3,
        blocks: [
          ["rhyme", "拆題口訣", "先寫 equation，逐步轉 mol，最後先轉返 mass / %", "長題每步寫 unit，每步拎 method mark；中途唔 round，最後按 s.f. 寫。"],
          ["table", ["題目講", "即係", "做法"], [
            ["“excess acid” / “back titration”", "固體用咗過量酸，剩低酸用 NaOH 滴", "n(acid used) = n(acid added) − n(acid left)"],
            ["“tablet / limestone contains CaCO₃”", "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂", "n(CaCO₃) = ½ × n(HCl used)"],
            ["“% purity / % by mass”", "(mass of pure ÷ mass of sample) × 100", "最後一步先做"],
            ["“diluted to 250 cm³, took 25.0 cm³”", "只用咗 1/10", "計出嚟 n × 10 先係全部"],
          ]],
          ["eg", "<b>【P2 · 5 marks】</b> A 1.50 g antacid tablet containing CaCO₃ is crushed and added to 50.0 cm³ of 0.500 mol dm⁻³ HCl (excess). The unreacted HCl needs 18.0 cm³ of 0.400 mol dm⁻³ NaOH to neutralise. Calculate the % by mass of CaCO₃ in the tablet.", [
            "① n(HCl added) = 0.500 × 0.0500 = 0.0250 mol",
            "② HCl + NaOH → NaCl + H₂O（1 : 1）：n(NaOH) = 0.400 × 0.0180 = 7.20 × 10⁻³ mol = n(HCl left)",
            "③ n(HCl reacted with tablet) = 0.0250 − 0.00720 = 0.0178 mol",
            "④ CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂（1 : 2）：n(CaCO₃) = 0.0178 ÷ 2 = 8.90 × 10⁻³ mol",
            "⑤ m(CaCO₃) = 8.90 × 10⁻³ × 100.09 = 0.891 g",
            "⑥ % = 0.891 ÷ 1.50 × 100 = <b>59.4%</b> ✅"
          ]],
          ["eg", "<b>【P2 · 4 marks】</b> A student is given a 1.00 g sample of impure NaOH. It is dissolved and made up to 250.0 cm³. 25.00 cm³ of this requires 21.50 cm³ of 0.1000 mol dm⁻³ HCl. Find the % purity.", [
            "n(HCl) = 0.1000 × 0.02150 = 2.150 × 10⁻³ mol → n(NaOH) in 25.00 cm³ = 2.150 × 10⁻³ mol",
            "全部 250.0 cm³：× 10 = 2.150 × 10⁻² mol",
            "m(NaOH) = 2.150 × 10⁻² × 40.00 = 0.860 g",
            "% purity = 0.860 ÷ 1.00 × 100 = <b>86.0%</b> ✅"
          ]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Define","Acid: proton donor; base: proton acceptor (Brønsted–Lowry)."],["Distinguish (strong/weak)","Degree of dissociation, not concentration; compare conductivity and pH at same concentration."],["Calculate","pH = −log[H⁺]; [H⁺] = 10<sup>−pH</sup>; K<sub>w</sub> = 1.00 × 10⁻¹⁴ at 298 K."],["Write equation","Include state symbols; weak acid uses ⇌."],["Sketch (pH curve)","Starting pH, equivalence volume, vertical region; shape for strong/weak combos."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["pH of strong acid / base","pH = −log c; for base pOH = −log[OH⁻], pH = 14 − pOH."],["Conjugate pairs","Acid → loses H⁺ → conjugate base; list both."],["Choose indicator","Match indicator range to the steep part; weak acid–strong base → phenolphthalein."],["Back titration","Excess reagent − reacted = amount in sample."],["Acid + carbonate / metal / base","Salt + water (+ CO₂ / H₂) balanced equation."]]],
          ["note", "pH 1 unit change = 10× [H⁺]。pH 答案 2 d.p. 通常接受，但跟有效數字。Strong vs weak 唔等於 concentrated vs dilute，呢個係常見 reject point。Indicator pH ranges 喺 booklet。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["trap", ["Conjugate pair 寫成同邊（兩個都喺左）。", "Amphiprotic 只寫一條 equation。", "Strong/weak 同 concentrated/dilute 混淆。", "pH 計 base 忘記 14 − pOH。", "忘記 Ba(OH)₂ 兩個 OH⁻。", "pH sig fig 錯。", "Neutral 一定 pH 7 ✗ — 睇 [H⁺] = [OH⁻]。", "Titration 忘記 ÷ 1000 或者 1 : 2 ratio。", "ionic equation 冇刪 spectator ions，或者 split 咗 solid。", "Acid + carbonate 漏咗 H₂O。", "Indicator 揀錯。", "Normal rain pH 寫 7。"]],
          ["check", [
            "我可以背出 Brønsted–Lowry acid、base、conjugate pair、amphiprotic 嘅定義",
            "我可以 identify 任何 equation 入面兩對 conjugate pairs",
            "我可以由 [H⁺] 計 pH，亦可以反過來，並寫啱 d.p.",
            "我可以計 strong base 嘅 pH（包括 Ba(OH)₂）",
            "我可以講出強酸同弱酸 4 個實驗分別",
            "我可以寫 acid + metal / carbonate / oxide 嘅 balanced 同 ionic equations",
            "我可以由 titration data 計 concentration（包括 1 : 2 同 back titration）",
            "我可以為 titration 揀 indicator 並解釋點解",
          ]],
        ],
      },
    ],
    summary: [
      "畀 H 係酸，收 H 係鹼，差一粒係一對",
      "水兩邊撈 = amphiprotic；寫兩條 equation",
      "pH = −log[H⁺]；差一級，差十倍",
      "鹼先 pOH，再 14 − pOH；Ba(OH)₂ 乘 2",
      "pH 嘅 d.p. = [H⁺] 嘅 s.f.；Kw = 1.0 × 10⁻¹⁴ at 298 K",
      "強弱講解離，濃稀講份量",
      "酸遇金屬出氫，遇碳酸鹽出 CO₂，遇氧化物出水",
      "Titration：已知計 n、比例過橋、未知除 V（cm³ ÷ 1000）",
      "Indicator range 要喺 pH curve 垂直位入面",
    ],
    practice: [
      { q: "Which species is the conjugate base of H₂PO₄⁻?", o: ["A. H₃PO₄", "B. HPO₄²⁻", "C. PO₄³⁻", "D. H₃O⁺"], m: 1, a: "B [1]. Remove one H⁺ from H₂PO₄⁻ → HPO₄²⁻." },
      { q: "The pH of solution X is 2 and the pH of solution Y is 5. How do their hydrogen ion concentrations compare?", o: ["A. X has 3 times the [H⁺] of Y", "B. X has 30 times the [H⁺] of Y", "C. X has 1000 times the [H⁺] of Y", "D. Y has 1000 times the [H⁺] of X"], m: 1, a: "C [1]. 3 pH units = 10³ = 1000 times; lower pH = higher [H⁺]." },
      { q: "Which 0.10 mol dm⁻³ solution has the highest pH?", o: ["A. HCl", "B. CH₃COOH", "C. NH₃", "D. NaOH"], m: 1, a: "D [1]. NaOH is a strong base (pH 13); NH₃ is a weak base so lower." },
      { q: "Which statement about 0.10 mol dm⁻³ ethanoic acid compared with 0.10 mol dm⁻³ hydrochloric acid is correct?", o: ["A. It needs more NaOH to neutralise 25 cm³", "B. It has a higher pH", "C. It produces more hydrogen with excess Mg", "D. It has a higher electrical conductivity"], m: 1, a: "B [1]. Weak acid partially dissociates → lower [H⁺] → higher pH. Moles neutralised and final H₂ are the same." },
      { q: "Identify the two conjugate acid–base pairs in the reaction: HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺.", m: 2, a: "HCO₃⁻ (acid) / CO₃²⁻ (conjugate base) [1]; H₃O⁺ (conjugate acid) / H₂O (base) [1]." },
      { q: "Calculate the pH of 0.0025 mol dm⁻³ Ba(OH)₂ at 298 K.", m: 3, a: "[OH⁻] = 2 × 0.0025 = 5.0 × 10⁻³ mol dm⁻³ [1]; pOH = 2.30 [1]; pH = 14 − 2.30 = 11.70 [1]." },
      { q: "A solution of HCl has pH 2.00. 10.0 cm³ of this solution is diluted to 1000 cm³. Calculate the new pH and state the new [H⁺].", m: 2, a: "Dilution factor 100 → [H⁺] = 1.0 × 10⁻² ÷ 100 = 1.0 × 10⁻⁴ mol dm⁻³ [1]; pH = 4.00 [1]." },
      { q: "Distinguish between a strong acid and a weak acid, and outline two experimental observations that would show that 0.10 mol dm⁻³ CH₃COOH is weaker than 0.10 mol dm⁻³ HCl.", m: 4, a: "Strong acid completely dissociates in water; weak acid only partially dissociates (equilibrium) [1][1]. Any two: higher pH (pH meter) for CH₃COOH [1]; lower conductivity [1]; slower reaction with Mg / CaCO₃ (fewer bubbles per second) [1] (max 2 of the three)." },
      { q: "Write a balanced equation and an ionic equation for the reaction between dilute nitric acid and solid calcium carbonate. State one observation.", m: 3, a: "CaCO₃(s) + 2HNO₃(aq) → Ca(NO₃)₂(aq) + H₂O(l) + CO₂(g) [1]; CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g) [1]; effervescence / solid dissolves [1]." },
      { q: "25.00 cm³ of H₂SO₄ is neutralised by 31.20 cm³ of 0.1000 mol dm⁻³ NaOH. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of the acid.", m: 3, a: "n(NaOH) = 0.1000 × 0.03120 = 3.120 × 10⁻³ mol [1]; n(H₂SO₄) = 1.560 × 10⁻³ mol (1 : 2) [1]; c = 1.560 × 10⁻³ ÷ 0.02500 = 0.0624 mol dm⁻³ [1]." },
      { q: "Pure water at 323 K has Kw = 5.5 × 10⁻¹⁴. Calculate its pH and state, with a reason, whether it is acidic, neutral or alkaline.", m: 3, a: "[H⁺] = √(5.5 × 10⁻¹⁴) = 2.3 × 10⁻⁷ mol dm⁻³ [1]; pH = 6.63 [1]; neutral because [H⁺] = [OH⁻] [1]." },
      { q: "Methyl orange is used in a titration of 0.10 mol dm⁻³ ammonia with hydrochloric acid. Explain why it is a suitable indicator and state its colour change at the end point.", m: 3, a: "Equivalence point lies at pH below 7 (acidic salt NH₄Cl) [1]; methyl orange changes colour in pH range ≈ 3–4.5 which lies within the steep section of the curve [1]; yellow → red/orange as acid is added [1]." },
    ],
  },

  "chem-12": {
    title: "Oxidation states · Half-equations · Activity series · Cells · Organic redox",
    intro: "Redox = 電子搬運。識 oxidation state、識砌 half-equation、識分 voltaic 同 electrolytic、識醇氧化條件，R3.2 就搞掂。最後有失分位同 12 題練習。",
    parts: [
      {
        h: "Oxidation states 氧化數",
        min: 3,
        blocks: [
          ["key", "<b>Oxidation</b>: loss of electrons / increase in oxidation state.<br><b>Reduction</b>: gain of electrons / decrease in oxidation state.<br><b>Oxidising agent</b>: accepts electrons (is reduced) and oxidises another species.<br><b>Reducing agent</b>: donates electrons (is oxidised) and reduces another species."],
          ["grid", [
            ["①", "OIL RIG", "Oxidation Is Loss, Reduction Is Gain"],
            ["②", "氧化劑自己被還原", "oxidising agent is reduced"],
            ["③", "單質 0，離子 = 電荷", "element = 0; ion = its charge"],
            ["④", "總和 = 整體電荷", "sum = charge of species"],
            ["⑤", "O −2、H +1、F −1", "exceptions: peroxide −1, metal hydride −1"],
          ]],
          ["table", ["Rule（由上而下）", "Value"], [
            ["Atom in an element (Cl₂, Fe, O₃)", "0"],
            ["Monatomic ion", "= its charge (Fe³⁺ = +3)"],
            ["Group 1 / Group 2 in compounds", "+1 / +2"],
            ["Fluorine in compounds", "−1"],
            ["Oxygen", "−2 (peroxides, e.g. H₂O₂: −1; OF₂: +2)"],
            ["Hydrogen", "+1 (with metals, e.g. NaH: −1)"],
            ["Halogens Cl, Br, I with less electronegative elements", "−1"],
            ["Sum of oxidation states", "= overall charge (0 for a neutral compound)"],
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> Deduce the oxidation state of (a) Cr in Cr₂O₇²⁻ (b) S in S₂O₃²⁻ (c) N in NH₄⁺ (d) C in CH₃OH.", [
            "(a) 2x + 7(−2) = −2 → 2x = +12 → <b>+6</b>",
            "(b) 2x + 3(−2) = −2 → 2x = +4 → <b>+2</b>",
            "(c) x + 4(+1) = +1 → <b>−3</b>",
            "(d) x + 4(+1) + (−2) = 0 → <b>−2</b> ✅（每題寫出 sum = charge 呢行拎 method mark）"
          ]],
          ["eg", "<b>【P2 · 2 marks · Identify】</b> In Cl₂ + 2KBr → 2KCl + Br₂, identify the species oxidised and the oxidising agent.", [
            "Br⁻ (−1) → Br₂ (0)：oxidation state ↑ → <b>Br⁻ is oxidised</b>",
            "Cl₂ (0) → Cl⁻ (−1)：reduced → Cl₂ is the <b>oxidising agent</b> ✅（K⁺ 係 spectator）"
          ]],
          ["table", ["Common agent", "Change", "Colour change"], [
            ["MnO₄⁻ / H⁺ (oxidising)", "Mn +7 → Mn²⁺ +2", "purple → (almost) colourless"],
            ["Cr₂O₇²⁻ / H⁺ (oxidising)", "Cr +6 → Cr³⁺ +3", "orange → green"],
            ["Fe²⁺ (reducing)", "Fe²⁺ → Fe³⁺", "pale green → yellow/brown"],
            ["I⁻ (reducing)", "2I⁻ → I₂", "colourless → brown"],
            ["Halogens Cl₂ > Br₂ > I₂ (oxidising)", "X₂ → 2X⁻", "—"],
          ]],
          ["trap", ["Oxidation state 寫 6+ 或者 6：要寫 <b>+6</b>（符號喺前面）；charge of ion 先寫 2+。", "Oxidising agent 寫成「被氧化嗰個」✗ — 佢自己被 reduce。", "H₂O₂ 入面 O 係 −1 唔係 −2。", "只講「oxidation state changes」冇講邊個變、由幾多到幾多。"]],
        ],
      },
      {
        h: "Half-equations 同 redox 方程式",
        min: 4,
        blocks: [
          ["flow", [
            ["①", "Balance atoms 除 O 同 H 之外"],
            ["②", "Add H₂O 補 O"],
            ["③", "Add H⁺ 補 H"],
            ["④", "Add e⁻ 平衡電荷"],
            ["⑤", "兩條 half-equation 乘 factor 令 e⁻ 相等，加埋，刪走 e⁻、同埋兩邊相同嘅 H⁺/H₂O"],
          ]],
          ["rhyme", "口訣", "先配原子，水補氧，H⁺ 補氫，電子補電", "e⁻ 喺 reduction 嘅左邊，喺 oxidation 嘅右邊。最後 check：atoms 同 charge 兩邊都要平。"],
          ["table", ["Half-equation (acidic)", "Type"], [
            ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "reduction"],
            ["Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O", "reduction"],
            ["Fe²⁺ → Fe³⁺ + e⁻", "oxidation"],
            ["2I⁻ → I₂ + 2e⁻", "oxidation"],
            ["H₂O₂ → O₂ + 2H⁺ + 2e⁻", "oxidation (H₂O₂ as reducing agent)"],
            ["SO₃²⁻ + H₂O → SO₄²⁻ + 2H⁺ + 2e⁻", "oxidation"],
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> Deduce the half-equation for the reduction of MnO₄⁻ to Mn²⁺ in acid, then the overall equation with Fe²⁺ → Fe³⁺.", [
            "MnO₄⁻ → Mn²⁺ + 4H₂O（水補 4 個 O）→ + 8H⁺ 喺左（補 8 個 H）→ charge 左 −1 + 8 = +7，右 +2 → 左邊加 5e⁻ ✅",
            "Fe²⁺ → Fe³⁺ + e⁻，× 5 令 e⁻ 相等",
            "<b>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</b>；charge：−1 + 8 + 10 = +17；右 +2 + 15 = +17 ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> Combine Cr₂O₇²⁻ → 2Cr³⁺ with 2I⁻ → I₂ in acidic solution.", [
            "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O ；2I⁻ → I₂ + 2e⁻ （× 3）",
            "<b>Cr₂O₇²⁻ + 14H⁺ + 6I⁻ → 2Cr³⁺ + 3I₂ + 7H₂O</b>",
            "Charge check：−2 + 14 − 6 = +6；右 +6 ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> Combine MnO₄⁻ → Mn²⁺ (5e⁻) with H₂O₂ → O₂ in acid.", [
            "× 2：2MnO₄⁻ + 16H⁺ + 10e⁻ → 2Mn²⁺ + 8H₂O ；× 5：5H₂O₂ → 5O₂ + 10H⁺ + 10e⁻",
            "加埋，刪 10e⁻，刪 10H⁺（16 − 10 = 6）：<b>2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 5O₂ + 8H₂O</b>",
            "Check：H 左 6 + 10 = 16，右 16 ✅；O 左 8 + 10 = 18，右 10 + 8 = 18 ✅；charge 左 +4，右 +4 ✅"
          ]],
          ["eg", "<b>【P2/P1B · 4 marks · Calculate】</b> 25.00 cm³ of acidified Fe²⁺ solution requires 22.40 cm³ of 0.0200 mol dm⁻³ KMnO₄ for a permanent pale pink end-point. Calculate c(Fe²⁺).", [
            "n(MnO₄⁻) = 0.0200 × 0.02240 = 4.48 × 10⁻⁴ mol",
            "MnO₄⁻ : Fe²⁺ = 1 : 5 → n(Fe²⁺) = 2.24 × 10⁻³ mol",
            "c = 2.24 × 10⁻³ ÷ 0.02500 = <b>0.0896 mol dm⁻³</b> ✅",
            "KMnO₄ 係 self-indicating：end-point = 第一滴 permanent pink（purple 過量）"
          ]],
          ["note", "<b>常考</b>：合併 half-equation（3 分）、redox titration 計算（3–4 分）、「identify oxidising agent + 解釋用 oxidation state」（2 分）。SL 只考 acidic solution。"],
          ["trap", ["Overall equation 仲有 e⁻ → 扣分。", "e⁻ 放錯邊（reduction 應該喺左）。", "H₂O 同 H⁺ 冇平衡，只平衡 charge。", "乘 factor 後忘記乘埋其他物質。", "Redox titration 比例當 1 : 1（MnO₄⁻ : Fe²⁺ = 1 : 5）。"]],
        ],
      },
      {
        h: "Activity series · displacement 置換",
        min: 3,
        blocks: [
          ["key", "<b>Reactivity of metals</b> = tendency to lose electrons (be oxidised). More reactive metal = stronger reducing agent; its ion is the weaker oxidising agent. A more reactive metal displaces a less reactive metal from solution of its ions."],
          ["rhyme", "口訣", "K Na Ca Mg Al Zn Fe Pb (H) Cu Ag Au", "鉀鈉鈣鎂鋁鋅鐵鉛（氫）銅銀金。H 以上同 dilute acid 出 H₂；Cu、Ag、Au 唔會。"],
          ["table", ["Displacement", "Equation", "Observation"], [
            ["Zn + CuSO₄(aq)", "Zn + Cu²⁺ → Zn²⁺ + Cu", "blue solution fades; reddish-brown solid"],
            ["Cu + AgNO₃(aq)", "Cu + 2Ag⁺ → Cu²⁺ + 2Ag", "silvery solid; solution turns blue"],
            ["Fe + CuSO₄(aq)", "Fe + Cu²⁺ → Fe²⁺ + Cu", "brown solid; blue → pale green"],
            ["Cl₂(aq) + 2KBr", "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂", "colourless → orange/brown"],
            ["Br₂(aq) + 2KI", "Br₂ + 2I⁻ → 2Br⁻ + I₂", "orange → brown"],
            ["Cu + ZnSO₄(aq)", "no reaction (Cu less reactive)", "no change"],
          ]],
          ["eg", "<b>【P2 · 3 marks · Explain】</b> Zinc is added to copper(II) sulfate solution. Explain, in terms of electron transfer, why a reaction occurs and state one observation.", [
            "Zn is more reactive than Cu / Zn is a stronger reducing agent [1]",
            "Zn loses electrons (oxidised): Zn → Zn²⁺ + 2e⁻ ；Cu²⁺ gains electrons (reduced): Cu²⁺ + 2e⁻ → Cu [1]",
            "Observation：blue solution becomes colourless; brown/pink solid forms [1] ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks · Predict】</b> Predict, with a reason, whether a reaction occurs between (a) magnesium and iron(II) sulfate solution, (b) silver and copper(II) nitrate solution.", [
            "(a) Yes — Mg is above Fe, more reactive: Mg + Fe²⁺ → Mg²⁺ + Fe [1]",
            "(b) No — Ag is below Cu, less reactive, cannot reduce Cu²⁺ [1] ✅"
          ]],
          ["note", "<b>Sacrificial protection</b>：Zn / Mg 接觸鐵 → 更 reactive 嘅金屬先被氧化，鐵受保護（galvanising 就係鍍鋅）。"],
          ["trap", ["將「more reactive」寫成「stronger oxidising agent」✗ — metal 越 reactive 係越強 reducing agent。", "Displacement observation 只寫「it reacts」→ 冇分。", "Halogen 置換方向搞錯：Cl₂ 置換 Br⁻、I⁻，但 I₂ 置換唔到 Br⁻。"]],
        ],
      },
      {
        h: "Voltaic cells 原電池 · fuel cells",
        min: 4,
        blocks: [
          ["key", "<b>Voltaic (galvanic) cell</b>: converts chemical energy to electrical energy using a spontaneous redox reaction.<br><b>Salt bridge</b>: allows ions to flow between half-cells to complete the circuit and maintain electrical neutrality (it does not carry electrons).<br>Anode = oxidation (−). Cathode = reduction (+). Electrons: anode → external wire → cathode."],
          ["rhyme", "口訣", "An Ox, Red Cat；電子行線，離子行橋", "Anode 氧化；Cathode 還原。電子經 external circuit，ions 經 salt bridge。Anions → anode，cations → cathode。"],
          ["table", ["Daniell cell Zn | Zn²⁺ || Cu²⁺ | Cu", "What happens"], [
            ["Anode (Zn, negative)", "Zn(s) → Zn²⁺(aq) + 2e⁻ ；Zn electrode loses mass"],
            ["Cathode (Cu, positive)", "Cu²⁺(aq) + 2e⁻ → Cu(s) ；Cu electrode gains mass; blue colour fades"],
            ["Overall", "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)"],
            ["Salt bridge (e.g. KNO₃(aq) on filter paper)", "NO₃⁻ → Zn²⁺ half-cell; K⁺ → Cu²⁺ half-cell; use an inert salt"],
            ["Voltmeter", "shows potential difference; larger gap in activity series → larger voltage"],
          ]],
          ["table", ["Cell type", "Examples", "Key points"], [
            ["Primary", "dry cell, alkaline battery", "reaction not easily reversed → not rechargeable"],
            ["Secondary (rechargeable)", "lead-acid, Li-ion, NiCd", "reaction reversed by applying external current (electrolytic mode when charging)"],
            ["Fuel cell", "H₂ / O₂", "reactants supplied continuously; water only product; no recharging"],
          ]],
          ["table", ["Hydrogen–oxygen fuel cell (acidic electrolyte)", "Equation"], [
            ["Anode (−)", "H₂ → 2H⁺ + 2e⁻"],
            ["Cathode (+)", "O₂ + 4H⁺ + 4e⁻ → 2H₂O"],
            ["Overall", "2H₂ + O₂ → 2H₂O"],
          ]],
          ["note", "Lead–acid 放電總方程式：Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O。Li-ion：light, high energy density, many charge cycles; lead-acid cheap, high current but heavy. 如果題目畀咗 electrolyte（alkaline fuel cell: H₂ + 2OH⁻ → 2H₂O + 2e⁻；O₂ + 2H₂O + 4e⁻ → 4OH⁻），跟題目。"],
          ["eg", "<b>【P2 · 4 marks · Describe/Label】</b> A voltaic cell is made from Mg | Mg²⁺ and Cu | Cu²⁺ half-cells joined by a salt bridge and a wire. Identify the anode, give its half-equation, state the direction of electron flow and the role of the salt bridge.", [
            "Anode = Mg (more reactive, oxidised) [1]；Mg → Mg²⁺ + 2e⁻ [1]",
            "Electrons flow from Mg (anode) to Cu (cathode) through the external wire [1]",
            "Salt bridge allows ions to move to complete the circuit / maintain neutrality in each half-cell [1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Compare】</b> Distinguish between a primary cell and a secondary cell, and state one advantage of a fuel cell.", [
            "Primary cell: reaction cannot be reversed efficiently → single-use [1]；Secondary cell: reaction can be reversed by passing current → rechargeable [1]",
            "Fuel cell: continuous supply of fuel, produces only water (clean) / higher efficiency than combustion [1] ✅"
          ]],
          ["trap", ["「Electrons flow through the salt bridge」→ 0 分。", "Anode 正負號：voltaic anode 係 <b>−</b>，electrolytic anode 係 <b>+</b>。", "Salt bridge 用會同電解質反應嘅鹽（KCl 配 Ag⁺ 會有 AgCl）。", "Fuel cell 話係「rechargeable」✗。", "Daniell cell 嘅 Zn electrode 質量增加 ✗（減少）。"]],
        ],
      },
      {
        h: "Electrolytic cells 電解 (molten)",
        min: 3,
        blocks: [
          ["key", "<b>Electrolysis</b>: using electrical energy to drive a non-spontaneous redox reaction. <b>Electrolyte</b>: molten or aqueous ionic compound; ions must be mobile, so solid ionic compounds don't work. Cations → cathode (−, reduction); anions → anode (+, oxidation)."],
          ["table", ["", "Voltaic", "Electrolytic"], [
            ["Energy", "chemical → electrical", "electrical → chemical"],
            ["Reaction", "spontaneous", "non-spontaneous"],
            ["Anode (oxidation)", "negative", "positive"],
            ["Cathode (reduction)", "positive", "negative"],
            ["Power source", "none (it is the source)", "external DC supply"],
            ["Electrolyte", "two half-cells + salt bridge", "one container, one electrolyte"],
          ]],
          ["table", ["Molten electrolyte", "Cathode (−)", "Anode (+)", "Overall"], [
            ["NaCl", "Na⁺ + e⁻ → Na(l)", "2Cl⁻ → Cl₂(g) + 2e⁻", "2NaCl → 2Na + Cl₂"],
            ["PbBr₂", "Pb²⁺ + 2e⁻ → Pb(l)", "2Br⁻ → Br₂(g) + 2e⁻", "PbBr₂ → Pb + Br₂"],
            ["MgCl₂", "Mg²⁺ + 2e⁻ → Mg(l)", "2Cl⁻ → Cl₂(g) + 2e⁻", "MgCl₂ → Mg + Cl₂"],
          ]],
          ["eg", "<b>【P2 · 4 marks · State/Write】</b> Molten lead(II) bromide is electrolysed using inert electrodes. State the products and give the half-equation at each electrode.", [
            "Cathode (negative): lead / Pb(l) ；Pb²⁺ + 2e⁻ → Pb [1][1]",
            "Anode (positive): bromine / Br₂(g) (red-brown fumes) ；2Br⁻ → Br₂ + 2e⁻ [1][1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Explain】</b> Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does, and state the electron/ion movement during electrolysis.", [
            "Solid: ions fixed in lattice, cannot move [1]；molten: ions free to move (mobile charge carriers) [1]",
            "Electrons flow in the external wire; Na⁺ move to the cathode, Cl⁻ move to the anode [1] ✅"
          ]],
          ["note", "<b>常考</b>：labelled diagram of electrolytic cell（power supply 方向、電極正負）、half-equation（1 分一條）、voltaic vs electrolytic 比較表。Electrolysis of aqueous solutions 屬 HL，SL 只考 molten。"],
          ["trap", ["寫「aqueous」NaCl 產物（H₂ 同 Cl₂）— SL 唔考，molten 先係 Na。", "e⁻ 放錯邊或者冇平衡 charge（2Cl⁻ → Cl₂ + 2e⁻）。", "寫「ions flow through the wire」✗。", "Cathode 永遠係還原；唔好因為電池類型記反。"]],
        ],
      },
      {
        h: "Organic redox 有機氧化還原",
        min: 3.5,
        blocks: [
          ["rhyme", "口訣", "1° → 醛（蒸）→ 酸（回流）；2° → 酮；3° 唔郁", "Oxidising agent：acidified K₂Cr₂O₇（orange → green）或 KMnO₄/H⁺。用 [O] 寫 equation。"],
          ["table", ["Alcohol", "Oxidation product", "Conditions", "Equation"], [
            ["Primary (e.g. ethanol)", "aldehyde (ethanal)", "heat, <b>distil</b> product off as formed", "CH₃CH₂OH + [O] → CH₃CHO + H₂O"],
            ["Primary", "carboxylic acid (ethanoic acid)", "excess oxidant, heat under <b>reflux</b>", "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O"],
            ["Secondary (propan-2-ol)", "ketone (propanone)", "heat, reflux", "CH₃CH(OH)CH₃ + [O] → CH₃COCH₃ + H₂O"],
            ["Tertiary", "no reaction", "stays orange", "—"],
          ]],
          ["table", ["Reduction", "Reagent", "Product"], [
            ["Carboxylic acid", "LiAlH₄ (dry ether) only", "primary alcohol"],
            ["Aldehyde", "NaBH₄ or LiAlH₄", "primary alcohol"],
            ["Ketone", "NaBH₄ or LiAlH₄", "secondary alcohol"],
            ["Alkene (hydrogenation)", "H₂, Ni catalyst, heat", "alkane"],
          ]],
          ["eg", "<b>【P2 · 4 marks · Explain】</b> Explain the different conditions used to obtain ethanal or ethanoic acid from ethanol using acidified K₂Cr₂O₇, and state the colour change.", [
            "Ethanal: heat with limited oxidant and distil off as it forms [1]; ethanal has lower boiling point (no hydrogen bonding) so it distils before further oxidation [1]",
            "Ethanoic acid: excess oxidant, heat under reflux so aldehyde stays in flask until fully oxidised [1]",
            "Colour change: orange → green (Cr₂O₇²⁻ → Cr³⁺) [1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> Compound X (C₄H₁₀O) is heated under reflux with excess acidified dichromate(VI) and gives a product Y that cannot be oxidised further and is reduced back to X by NaBH₄. The orange solution turns green. Deduce the class of X and a possible structure.", [
            "Y is a product that NaBH₄ can reduce and cannot be oxidised more (even under reflux/excess) → a <b>ketone</b> [1]",
            "So X is a <b>secondary alcohol</b> [1]",
            "Butan-2-ol, CH₃CH(OH)CH₂CH₃ [1] ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks · Write】</b> Write the equation for reduction of ethanoic acid to ethanol using [H].", [
            "CH₃COOH + 4[H] → CH₃CH₂OH + H₂O [1]（LiAlH₄ in dry ether, then acid）",
            "NaBH₄ 唔夠強，reduce 唔到 carboxylic acid [1] ✅"
          ]],
          ["trap", ["想要 aldehyde 但寫 reflux ✗（會變酸）。", "Tertiary alcohol 寫會氧化。", "顏色寫反（green → orange）。", "Carboxylic acid 用 NaBH₄ 還原 ✗（要 LiAlH₄）。", "Alkene hydrogenation 冇寫 Ni catalyst。"]],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Deduce","Oxidation states by rules; identify oxidised / reduced species and oxidising / reducing agent."],["Write / Construct","Half-equations: balance atoms, charge with e⁻, H⁺ and H₂O in acid; combine so e⁻ cancel."],["Explain (cell)","Anode: oxidation (negative in voltaic); cathode: reduction; electron flow external wire, ions via salt bridge."],["Predict","Use activity series / E° values in booklet; more reactive displaces less reactive."],["Describe (electrolysis)","Cathode product, anode product, with half-equations (molten ionic)."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Oxidised / reduced","OIL RIG: oxidation = loss of electrons / increase in oxidation state."],["Balance redox in acid","Half-equations → equal e⁻ → add → cancel."],["Voltaic cell diagram","Label anode, cathode, e⁻ direction, salt bridge, electrolyte."],["Electrolysis of molten salt","Cathode: M⁺ + e⁻ → M; anode: 2X⁻ → X₂ + 2e⁻."],["Organic redox","Alcohol → aldehyde → carboxylic acid with K₂Cr₂O₇/H⁺ (orange → green)."]]],
          ["note", "Anode / cathode 喺 voltaic 同 electrolytic 一樣定義（oxidation / reduction），但極性相反。Oxidation state 要寫符號 +2 唔係 2+（charge 先係 2+）。Reflux 見 “complete oxidation”，distil 見 “aldehyde”。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["trap", ["Oxidising agent 同 reducing agent 搞反。", "Oxidation state 符號寫後面。", "Half-equation e⁻ 位置錯。", "Overall equation 仲有 e⁻。", "Redox titration ratio 1 : 5 忘記。", "Salt bridge 傳電子。", "Voltaic / electrolytic anode 正負反。", "Electrolysis aqueous（HL）用嚟答 molten。", "Distil vs reflux 搞反。", "Tertiary 都氧化。", "Fuel cell 話可以 recharge。", "Displacement 無觀察現象。"]],
          ["check", [
            "我可以由 formula 計 oxidation state（包括 Cr₂O₇²⁻、S₂O₃²⁻、H₂O₂）",
            "我可以背出 OIL RIG 同 oxidising/reducing agent 定義",
            "我可以砌 MnO₄⁻、Cr₂O₇²⁻ half-equations 同合併",
            "我可以計 KMnO₄ 滴定",
            "我可以砌 Daniell cell 並標示 anode、cathode、e⁻ 方向、salt bridge",
            "我可以比較 voltaic 同 electrolytic 同 primary/secondary/fuel cell",
            "我可以寫 molten 電解兩個 half-equations",
            "我可以講出醇氧化條件、產物同顏色",
          ]],
        ],
      },
    ],
    summary: [
      "OIL RIG；oxidising agent 自己被 reduce",
      "單質 0，離子 = 電荷，總和 = 電荷",
      "先配原子，水補氧，H⁺ 補氫，電子補電",
      "MnO₄⁻ : Fe²⁺ = 1 : 5；Cr₂O₇²⁻ 收 6e⁻",
      "越 reactive = 越強 reducing agent，會置換下面金屬",
      "An Ox, Red Cat；電子行線，離子行橋",
      "Voltaic anode 負；electrolytic anode 正",
      "Molten：金屬喺 cathode，非金屬喺 anode",
      "1° → 醛（蒸）→ 酸（回流）；2° → 酮；3° 唔郁",
    ],
    practice: [
      { q: "What is the oxidation state of chromium in K₂Cr₂O₇?", o: ["A. +3", "B. +6", "C. +7", "D. +12"], m: 1, a: "B [1]. 2(+1) + 2x + 7(−2) = 0 → x = +6." },
      { q: "Which species is the reducing agent in Zn + Cu²⁺ → Zn²⁺ + Cu?", o: ["A. Zn", "B. Cu²⁺", "C. Zn²⁺", "D. Cu"], m: 1, a: "A [1]. Zn loses electrons (oxidised), so it is the reducing agent." },
      { q: "Which is the half-equation at the anode of a voltaic cell made of Zn and Cu half-cells?", o: ["A. Cu²⁺ + 2e⁻ → Cu", "B. Zn → Zn²⁺ + 2e⁻", "C. Zn²⁺ + 2e⁻ → Zn", "D. Cu → Cu²⁺ + 2e⁻"], m: 1, a: "B [1]. Zn is more reactive; oxidation occurs at the anode." },
      { q: "Which alcohol is not oxidised by acidified potassium dichromate(VI)?", o: ["A. Butan-1-ol", "B. Butan-2-ol", "C. 2-methylpropan-2-ol", "D. 2-methylpropan-1-ol"], m: 1, a: "C [1]. It is tertiary." },
      { q: "Deduce the oxidation state of sulfur in SO₄²⁻ and in SO₂, and state whether S is oxidised or reduced when SO₂ becomes SO₄²⁻.", m: 3, a: "SO₄²⁻: +6 [1]; SO₂: +4 [1]; oxidised, as oxidation state increases +4 → +6 [1]." },
      { q: "Deduce the overall equation for the reaction of MnO₄⁻ with Fe²⁺ in acid from the half-equations MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O and Fe²⁺ → Fe³⁺ + e⁻.", m: 2, a: "Multiply Fe half-equation by 5 to equalise electrons [1]; MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O [1]." },
      { q: "25.00 cm³ of Fe²⁺ solution requires 18.60 cm³ of 0.0200 mol dm⁻³ KMnO₄ in acid. Calculate the concentration of Fe²⁺.", m: 3, a: "n(MnO₄⁻) = 0.0200 × 0.01860 = 3.72 × 10⁻⁴ mol [1]; n(Fe²⁺) = 5 × 3.72 × 10⁻⁴ = 1.86 × 10⁻³ mol [1]; c = 1.86 × 10⁻³ ÷ 0.02500 = 0.0744 mol dm⁻³ [1]." },
      { q: "A voltaic cell uses magnesium and copper half-cells. Outline the function of the salt bridge, state the direction of electron flow and write the half-equation at the negative electrode.", m: 3, a: "Salt bridge: allows ion movement to complete circuit / maintain electrical neutrality [1]; electrons flow from Mg to Cu in the external wire [1]; Mg → Mg²⁺ + 2e⁻ [1]." },
      { q: "Explain why a more reactive metal displaces a less reactive metal from a solution of its salt, using zinc and copper(II) sulfate as an example.", m: 3, a: "Zn more easily loses electrons / stronger reducing agent [1]; Zn → Zn²⁺ + 2e⁻ and Cu²⁺ + 2e⁻ → Cu [1]; Cu²⁺ is reduced, so copper deposits and the blue colour fades [1]." },
      { q: "State the products at each electrode and write the half-equations for the electrolysis of molten magnesium chloride with inert electrodes.", m: 4, a: "Cathode: magnesium; Mg²⁺ + 2e⁻ → Mg [1][1]; anode: chlorine; 2Cl⁻ → Cl₂ + 2e⁻ [1][1]." },
      { q: "Compare and contrast a voltaic cell and an electrolytic cell.", m: 3, a: "Both involve oxidation at the anode and reduction at the cathode [1]; voltaic: spontaneous, chemical → electrical, anode negative [1]; electrolytic: non-spontaneous, electrical → chemical, anode positive, needs external supply [1]." },
      { q: "Ethanol can be converted to ethanal or to ethanoic acid. State the reagent, the conditions for each product and the colour change observed.", m: 4, a: "Acidified potassium dichromate(VI) [1]; ethanal: distil off as formed [1]; ethanoic acid: excess oxidant, reflux [1]; orange → green [1]." },
    ],
  },

  "chem-13": {
    title: "Radicals · Homolytic fission · Radical substitution",
    intro: "R3.3：鍵點斷決定反應類型——homolytic fission 一人一粒電子，整出 radicals。識寫 initiation、propagation、termination，就答晒呢個 topic。",
    parts: [
      {
        h: "Bond fission 斷鍵 · species 定義",
        min: 3,
        blocks: [
          ["key", "<b>Radical</b>: a species with an unpaired electron (written with a dot, e.g. Cl•, •CH₃).<br><b>Homolytic fission</b>: a covalent bond breaks and each atom takes one electron of the shared pair, forming two radicals (needs UV light or heat).<br><b>Heterolytic fission</b>: a covalent bond breaks and both electrons go to the same atom, forming a cation and an anion.<br><b>Nucleophile</b>: an electron-rich species that donates a pair of electrons to form a covalent bond (attracted to δ+ / positive centres).<br><b>Electrophile</b>: an electron-deficient species that accepts a pair of electrons to form a covalent bond."],
          ["table", ["", "Homolytic", "Heterolytic"], [
            ["Electrons", "one each", "both to one atom"],
            ["Products", "2 radicals", "cation + anion"],
            ["Arrow", "half-headed (fish-hook) ↼", "full-headed curly arrow"],
            ["Typical conditions", "UV light / heat", "polar bond, polar solvent"],
            ["Example", "Cl–Cl → 2Cl•", "H–Br → H⁺ + Br⁻"],
            ["Reaction type", "radical substitution", "nucleophilic substitution; electrophilic addition"],
          ]],
          ["table", ["Nucleophiles (lone pair / negative)", "Electrophiles (δ+ or positive)"], [
            ["OH⁻, CN⁻, Cl⁻, I⁻, NH₃, H₂O, CH₃NH₂", "H⁺, NO₂⁺, Br⁺ / δ+ Br in Br₂, carbocations, δ+ carbon in C–X"],
          ]],
          ["grid", [
            ["①", "Radical = 單電子", "unpaired electron"],
            ["②", "Homolytic 一人一粒，heterolytic 一人攞晒", "each takes one vs one takes both"],
            ["③", "Nucleophile 畀電子對，electrophile 收電子對", "donate vs accept"],
            ["④", "Nucleo 愛核（δ+），electro 愛電子雲（C=C）", "targets"],
            ["⑤", "Nucleophile = Lewis base", "Electrophile = Lewis acid"],
          ]],
          ["eg", "<b>【P2 · 3 marks · Define/State】</b> Define the term radical and state the type of bond fission that forms radicals. Draw the fission of Br₂ using fish-hook arrows.", [
            "Radical: species with an unpaired electron [1]",
            "Homolytic fission [1]",
            "Br–Br with one half-arrow from the bond to each Br → Br• + Br• [1] ✅"
          ]],
          ["trap", ["Nucleophile 只寫「negative ion」✗ — NH₃ 同 H₂O 都係 nucleophile。要講 <b>donates a pair of electrons</b>。", "Radical 寫成「charged species」✗。", "Half-headed arrow 同 full-headed arrow 混用。", "Electrophile 一定係 +ve ✗（可以係 δ+，亦可以係中性 Lewis acid）。"]],
        ],
      },
      {
        h: "Radical substitution 烷烴自由基取代",
        min: 4,
        blocks: [
          ["key", "<b>Radical substitution</b>: alkane + halogen, UV light → halogenoalkane + hydrogen halide. A chain reaction in 3 steps. 條件一定要寫：<b>UV light</b>（或高溫）。"],
          ["table", ["Step", "特徵", "CH₄ + Cl₂ 例子"], [
            ["Initiation", "radicals formed from molecules (0 → 2 radicals), UV", "Cl₂ → 2Cl•"],
            ["Propagation", "1 radical in → 1 radical out; chain continues", "CH₄ + Cl• → •CH₃ + HCl<br>•CH₃ + Cl₂ → CH₃Cl + Cl•"],
            ["Termination", "2 radicals combine → 0 radicals", "Cl• + Cl• → Cl₂<br>•CH₃ + Cl• → CH₃Cl<br>•CH₃ + •CH₃ → C₂H₆"],
          ]],
          ["rhyme", "口訣", "光開頭，一換一，二合一", "Initiation 有 UV；propagation 一個 radical 入、一個 radical 出；termination 兩個 radical 撞埋變分子。"],
          ["eg", "<b>【P2 · 3 marks · Write】</b> Write equations for the initiation and the two propagation steps for the reaction of ethane with bromine in UV light, and the overall equation for the first substitution.", [
            "Initiation: Br₂ → 2Br• [1]",
            "Propagation: CH₃CH₃ + Br• → •CH₂CH₃ + HBr ；•CH₂CH₃ + Br₂ → CH₃CH₂Br + Br• [1][1]",
            "Overall: C₂H₆ + Br₂ → C₂H₅Br + HBr（兩條 propagation 加埋）✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Explain】</b> Explain why a mixture of products forms when methane reacts with excess chlorine, and give the formula of one by-product formed in a termination step.", [
            "Chlorine radicals keep reacting: CH₃Cl + Cl• → •CH₂Cl + HCl ，•CH₂Cl + Cl₂ → CH₂Cl₂ + Cl• [1]",
            "Further substitution gives CH₂Cl₂, CHCl₃, CCl₄ (multiple substitution) [1]",
            "Termination: 2•CH₃ → C₂H₆ (ethane) [1] ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks · Explain】</b> Explain why UV light is needed and why methane does not react with chlorine in the dark.", [
            "UV provides energy to break the Cl–Cl bond (bond enthalpy 242 kJ mol⁻¹) homolytically [1]",
            "C–H (414) is non-polar / strong and nothing starts the chain in the dark: no radicals → no reaction [1] ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks · Deduce】</b> Propane reacts with bromine in UV light. State the monobromo products.", [
            "Radical can abstract an H from an end carbon or the middle carbon",
            "<b>1-bromopropane and 2-bromopropane</b> [1][1] ✅（mixture of isomers）"
          ]],
          ["table", ["CFCs and ozone（成個 mechanism 識寫）", "Equation"], [
            ["UV breaks C–Cl bond", "CCl₂F₂ → •CClF₂ + Cl•"],
            ["Propagation 1", "Cl• + O₃ → ClO• + O₂"],
            ["Propagation 2", "ClO• + O₃ → Cl• + 2O₂"],
            ["Net", "2O₃ → 3O₂ ；Cl• is a catalyst (regenerated), so one Cl• destroys many O₃"],
          ]],
          ["note", "<b>常考</b>：寫 3 個 step 嘅 equations（3 分）、解釋 mixture of products（2 分）、點解要 UV（1–2 分）、CFC 同臭氧（2–3 分）。要促進 monosubstitution：excess alkane。Alkane 平時 unreactive 因為 C–C、C–H strong 同 non-polar。"],
          ["trap", ["Propagation 寫成 CH₄ + Cl• → CH₃Cl + H• ✗（正確：→ •CH₃ + HCl）。", "漏寫 UV light 條件。", "Radical 冇寫 •（Cl 同 Cl• 唔同）。", "Termination 入面仲有 radical 出（應該 0 radical 出）。", "寫 Cl₂ → Cl⁻ + Cl⁺（heterolytic）✗。"]],
        ],
      },
    ],
    summary: [
      "Radical = 單電子；homolytic 一人一粒",
      "光開頭，一換一，二合一",
      "多取代 = mixture；excess alkane 做 mono",
    ],
    practice: [
      { q: "Which step is a propagation step in the chlorination of methane?", o: ["A. Cl₂ → 2Cl•", "B. CH₄ + Cl• → •CH₃ + HCl", "C. •CH₃ + Cl• → CH₃Cl", "D. 2Cl• → Cl₂"], m: 1, a: "B [1]. A radical in, a radical out." },
      { q: "Write equations for the initiation and two propagation steps in the reaction of methane with bromine in UV light.", m: 3, a: "Br₂ → 2Br• [1]; CH₄ + Br• → •CH₃ + HBr [1]; •CH₃ + Br₂ → CH₃Br + Br• [1]." },
      { q: "Explain why a mixture of halogenated products is formed when ethane reacts with excess chlorine.", m: 2, a: "Chlorine radicals can continue to substitute further hydrogen atoms [1]; giving C₂H₄Cl₂, C₂H₃Cl₃ etc. (multiple substitution) [1]." },
    ],
  },
  "chem-13b": {
    title: "Nucleophiles & electrophiles · Halogenoalkanes · Alkenes · Lewis acids",
    intro: "R3.4：heterolytic fission 一方攞晒電子對。識分 nucleophile、electrophile、Lewis acid / base，識畫 curly arrows。最後有失分位同練習。",
    parts: [
      {
        h: "Lewis acids & bases · coordination bond",
        min: 3,
        blocks: [
          ["key", "<b>Lewis acid</b>: an electron-pair acceptor.<br><b>Lewis base</b>: an electron-pair donor.<br><b>Coordination (dative covalent) bond</b>: a covalent bond in which both shared electrons come from the same atom (the donor lone pair).<br><b>Ligand</b>: a Lewis base that donates a lone pair to a central metal ion. <b>Complex ion</b>: central metal ion + ligands."],
          ["table", ["Lewis base（donor）", "Lewis acid（acceptor）", "Product"], [
            ["NH₃", "BF₃", "H₃N→BF₃"],
            ["NH₃", "H⁺", "NH₄⁺"],
            ["H₂O", "H⁺", "H₃O⁺"],
            ["Cl⁻", "AlCl₃", "AlCl₄⁻"],
            ["6 H₂O (ligands)", "Cu²⁺", "[Cu(H₂O)₆]²⁺（blue; coordination number 6）"],
            ["4 NH₃ (replace H₂O)", "Cu²⁺", "[Cu(NH₃)₄(H₂O)₂]²⁺（deep blue）"],
          ]],
          ["eg", "<b>【P2 · 3 marks · Identify/Explain】</b> Identify the Lewis acid and Lewis base in BF₃ + NH₃ → F₃B–NH₃, and describe how the bond forms.", [
            "NH₃ is the Lewis base: has a lone pair on N to donate [1]",
            "BF₃ is the Lewis acid: B has an incomplete octet (6 electrons) so accepts the pair [1]",
            "Coordination bond formed, both electrons supplied by N [1] ✅"
          ]],
          ["eg", "<b>【P2 · 2 marks · Deduce】</b> State the charge of the complex [Cu(H₂O)₆]ˣ and the coordination number.", [
            "Ligands H₂O are neutral → charge = charge of Cu ion = <b>2+</b>",
            "Six ligands → coordination number <b>6</b> ✅"
          ]],
          ["note", "每個 Brønsted–Lowry base 都係 Lewis base（有 lone pair 收 H⁺）；H⁺ 係 Lewis acid。Lewis 定義範圍更廣（唔需要 H⁺ 轉移）。<b>Nucleophile ≈ Lewis base；electrophile ≈ Lewis acid</b>。"],
          ["trap", ["Lewis 定義冇講 <b>electron pair</b>，只寫 donate / accept 「electrons」。", "BF₃ 話係 Lewis base ✗。", "Coordination bond 話兩邊各出一粒電子 ✗。", "Brønsted（H⁺）同 Lewis（electron pair）混淆。", "Complex ion 電荷 = ligand 電荷總和 + metal ion 電荷（記得看 ligand 是否 neutral）。"]],
        ],
      },
      {
        h: "Nucleophilic substitution 鹵代烷",
        min: 3.5,
        blocks: [
          ["key", "<b>Halogenoalkane</b> R–X：C–X 鍵 polar，carbon 係 δ+，nucleophile 攻擊 carbon，X⁻ leaves。<br><b>Nucleophilic substitution</b>: a nucleophile replaces the halogen. <b>R–X + OH⁻(aq) → R–OH + X⁻</b>（reagent: NaOH(aq), heat under reflux）"],
          ["table", ["Halogenoalkane type", "Structure", "Example"], [
            ["Primary (1°)", "C–X carbon bonded to 1 alkyl group", "CH₃CH₂CH₂Br"],
            ["Secondary (2°)", "bonded to 2 alkyl groups", "CH₃CHBrCH₃"],
            ["Tertiary (3°)", "bonded to 3 alkyl groups", "(CH₃)₃CBr"],
          ]],
          ["table", ["Nucleophile", "Product", "Example"], [
            ["OH⁻ (aq, heat)", "alcohol", "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻"],
            ["NH₃ (excess, ethanolic)", "amine", "CH₃CH₂Br + 2NH₃ → CH₃CH₂NH₂ + NH₄Br"],
            ["CN⁻ (ethanolic KCN)", "nitrile (one more C)", "CH₃CH₂Br + CN⁻ → CH₃CH₂CN + Br⁻"],
          ]],
          ["eg", "<b>【P2 · 3 marks · State/Write】</b> State the reagent and conditions to convert 1-bromopropane to propan-1-ol, write the equation and name the reaction type.", [
            "Reagent: aqueous sodium hydroxide, heat under reflux [1]",
            "CH₃CH₂CH₂Br + OH⁻ → CH₃CH₂CH₂OH + Br⁻ [1]",
            "Nucleophilic substitution [1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Explain】</b> Explain why iodoalkanes react faster than chloroalkanes in nucleophilic substitution.", [
            "Rate depends on C–X bond strength / breaking the C–X bond [1]",
            "C–I (228 kJ mol⁻¹) weaker than C–Cl (324 kJ mol⁻¹); C–Br is 285 [1]",
            "Weaker bond breaks more easily → faster substitution (order: RI &gt; RBr &gt; RCl) [1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Outline】</b> Outline an experiment to find out which halogen is present in an unknown halogenoalkane.", [
            "Warm with NaOH(aq) under reflux to convert C–X into X⁻ [1]",
            "Acidify with dilute HNO₃ (to remove OH⁻), then add AgNO₃(aq) [1]",
            "White ppt = Cl⁻; cream = Br⁻; yellow = I⁻ [1] ✅"
          ]],
          ["note", "<b>Curly arrow（加分）</b>：OH⁻ lone pair → arrow to δ+ carbon；C–Br bond → arrow to Br。SN1 / SN2 命名同 mechanism 比較屬 HL。<b>常考</b>：reagent + condition + 反應類型（3 分）、C–X bond strength 解釋 rate（2–3 分）、classification 1°/2°/3°。"],
          ["trap", ["Reagent 寫 NaOH 冇 aq / 冇 heat。", "Alcoholic（ethanolic）KOH 做 elimination — 唔係 substitution，唔好混。", "Nucleophile 寫 Na⁺（OH⁻ 先係）。", "C–X 反應速率解釋用 polarity（C–F 最 polar 但最慢，因為鍵最強）。", "Halide 測試冇先 acidify。"]],
        ],
      },
      {
        h: "Electrophilic addition 烯烴加成",
        min: 3.5,
        blocks: [
          ["key", "<b>Alkene C=C</b> has a region of high electron density (π bond) → attacks electrophiles. <b>Electrophilic addition</b>: an electrophile adds across C=C and the double bond becomes single (unsaturated → saturated)."],
          ["table", ["Reagent", "Conditions", "Product (ethene)", "Name"], [
            ["Br₂ (or Cl₂)", "room temp, no catalyst; bromine water", "CH₂BrCH₂Br (1,2-dibromoethane)", "halogenation"],
            ["HBr / HCl (gas)", "room temp", "CH₃CH₂Br", "hydrohalogenation"],
            ["H₂O (steam)", "H₃PO₄ catalyst, high temp &amp; pressure", "CH₃CH₂OH", "hydration"],
            ["H₂", "Ni catalyst, heat", "CH₃CH₃", "hydrogenation"],
          ]],
          ["rhyme", "口訣", "烯有電子雲，electrophile 來攻擊", "Alkene + Br₂ → orange 變 colourless（唔係 clear）。用嚟分 alkene 同 alkane。"],
          ["eg", "<b>【P2 · 3 marks · Describe/State】</b> Describe how to distinguish hex-1-ene from hexane, state the result for each and name the reaction type.", [
            "Add bromine water, shake [1]",
            "Hex-1-ene: orange/brown → colourless; hexane: stays orange (no reaction in the dark) [1]",
            "Electrophilic addition [1] ✅"
          ]],
          ["eg", "<b>【P2 · 3 marks · Write】</b> Write equations for the reaction of but-2-ene with (a) bromine, (b) hydrogen bromide, (c) steam.", [
            "(a) CH₃CH=CHCH₃ + Br₂ → CH₃CHBrCHBrCH₃ [1]",
            "(b) CH₃CH=CHCH₃ + HBr → CH₃CH₂CHBrCH₃ (2-bromobutane) [1]",
            "(c) CH₃CH=CHCH₃ + H₂O → CH₃CH₂CH(OH)CH₃ (butan-2-ol) [1] ✅（對稱烯 → 得一種產物）"
          ]],
          ["eg", "<b>【P2 · 3 marks · Deduce】</b> An alkene X (C₄H₈) reacts with H₂ over Ni to give butane and with HBr to give a single product. Deduce the structure of X.", [
            "Hydrogenation gives butane → carbon chain unbranched [1]",
            "Single HBr product → symmetrical alkene [1]",
            "X = but-2-ene, CH₃CH=CHCH₃ [1] ✅（but-1-ene 會有兩種 HBr 產物）"
          ]],
          ["note", "<b>Bonus（描述 mechanism）</b>：Br₂ 靠近 C=C，電子雲令 Br–Br polarised（δ+ Br 受攻擊）→ π electrons attack δ+ Br → carbocation（或 bromonium ion）+ Br⁻ → Br⁻ attacks carbocation。Unsymmetrical alkene + HBr 主要產物（Markovnikov）屬 HL；SL 睇題目要求。<b>常考</b>：bromine water test（3 分）、寫 equations（每條 1 分）、alkene vs alkane 分別。"],
          ["trap", ["Bromine water 變「clear」✗ — 要 colourless。", "Alkane + Br₂ 話喺暗處都反應 ✗。", "H₂O addition 冇 steam / acid catalyst。", "Alkene 反應類型寫 substitution ✗ — 係 addition。", "Br₂ 加到 C=C，Br 加到唔同碳（1,2-）；寫成 CH₂=CHBr₂ 之類 ✗。"]],
        ],
      },
      {
        h: "Reaction map · 識別題型",
        min: 2.5,
        blocks: [
          ["table", ["題目講…", "反應類型", "關鍵 conditions", "Key word"], [
            ["alkane + Cl₂ / Br₂", "radical substitution", "UV light", "homolytic, chain"],
            ["halogenoalkane + OH⁻(aq)", "nucleophilic substitution", "heat under reflux", "δ+ carbon, nucleophile"],
            ["alkene + Br₂ / HBr / H₂O", "electrophilic addition", "room temp / steam + acid", "π bond, electrophile"],
            ["alkene + H₂", "hydrogenation (addition)", "Ni catalyst", "reduction"],
            ["alcohol + Cr₂O₇²⁻/H⁺", "oxidation", "distil / reflux", "orange → green"],
          ]],
          ["flow", [
            ["①", "Alkane →(Cl₂, UV)→ halogenoalkane"],
            ["②", "Halogenoalkane →(NaOH(aq), reflux)→ alcohol"],
            ["③", "Alkene →(HBr)→ halogenoalkane；→(steam, H₃PO₄)→ alcohol；→(H₂, Ni)→ alkane"],
            ["④", "Alcohol →(K₂Cr₂O₇/H⁺)→ aldehyde / ketone / acid"],
          ]],
          ["eg", "<b>【P2 · 5 marks · Deduce/Outline】</b> Outline a 3-step synthesis of ethanal from ethene, giving reagent, conditions and equation for each step.", [
            "Step 1: ethene + HBr (room temperature) → bromoethane: CH₂=CH₂ + HBr → CH₃CH₂Br [1]",
            "Step 2: NaOH(aq), heat under reflux → ethanol: CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻ [1][1]",
            "Step 3: acidified K₂Cr₂O₇, heat and distil off product → ethanal: CH₃CH₂OH + [O] → CH₃CHO + H₂O [1][1] ✅",
            "（Shortcut 其實可用 ethene + steam → ethanol，但題目指定 3 步就跟）"
          ]],
          ["note", "<b>常考</b>：「name the type of reaction」+「give the reagent」+「write the equation」三連問；synthesis route 4–5 分。每步寫 reagent、condition、equation。"],
        ],
      },
      {
        h: "IB 考試位：command terms + 常見題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "Needs for full marks"], [["Describe / Outline (mechanism)","Curly arrows from lone pair or bond to atom; show lone pairs, partial charges, intermediate."],["Explain","Why: C–X polar, δ⁺ carbon attacked by nucleophile; bond enthalpy decides reactivity (C–I fastest)."],["Distinguish","Radical (UV, one-electron arrows, fish-hook) vs ionic (full arrows)."],["Deduce","Product and type of reaction from reagent and conditions."],["Write equation","Initiation, propagation, termination for radical substitution."]]],
          ["table", ["常見題型", "Model answer pattern (1 line)"], [["Radical substitution of alkane","Initiation: Cl₂ → 2Cl• (UV); propagation 2 steps; termination: radicals combine."],["Nucleophilic substitution","Nu: attacks δ⁺ C, X⁻ leaves; keep to the SL mechanism taught in class."],["Electrophilic addition to alkene","π bond attacks E⁺; carbocation intermediate; Nu⁻ adds. Br₂ test: orange to colourless."],["Lewis acid / base","Lone pair donor = Lewis base; forms coordinate bond."],["Rate of halogenoalkane hydrolysis","Weaker C–X bond reacts faster: I > Br > Cl."]]],
          ["note", "Mechanism 箭頭一定由 lone pair / bond 出發，指向 atom 或 bond，唔好由 atom 出發。Fish-hook 半箭咀係 radical。每個 mechanism step 通常 1 mark，要畫曬 charges 同 lone pairs。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2.5,
        blocks: [
          ["trap", ["Radical 冇寫 •，propagation 配錯。", "漏寫 UV light。", "Nucleophile 只寫 negative ion。", "Lewis acid / base 冇講 electron pair。", "Halogenoalkane 反應用錯 reagent（冇 aq / reflux）。", "Bromine water 寫「clear」。", "Alkane + Br₂ 當成 addition。", "Termination 仲有 radical 出。", "Curly arrow 方向錯（由 lone pair 去 δ+）。", "C–X 速率用 polarity 解釋。", "Multiple substitution 冇解釋。", "Markovnikov 用咗但題目冇要求。"]],
          ["check", [
            "我可以背出 radical、homolytic、heterolytic、nucleophile、electrophile 定義",
            "我可以寫 methane + Cl₂ 三個 step 嘅 equations",
            "我可以解釋點解有 mixture of products",
            "我可以寫 CFC 破壞臭氧 equations",
            "我可以識別 Lewis acid / base 同 coordination bond",
            "我可以寫 halogenoalkane + OH⁻ 嘅條件同 equation，並解釋 C–X rate",
            "我可以寫 alkene 加成四個反應同 bromine water test",
            "我可以設計 3 步 synthesis",
          ]],
        ],
      },
    ],
    summary: [
      "Nucleophile 畀電子對，electrophile 收電子對",
      "Lewis acid 收、Lewis base 畀 → coordination bond",
      "鹵代烷 + OH⁻(aq) 回流 = nucleophilic substitution",
      "C–I 最弱最快，C–Cl 最強最慢（F 更慢）",
      "烯 + Br₂ 橙變無色 = electrophilic addition",
    ],
    practice: [
      { q: "Which species is a nucleophile?", o: ["A. H⁺", "B. NO₂⁺", "C. NH₃", "D. BF₃"], m: 1, a: "C [1]. NH₃ has a lone pair to donate." },
      { q: "What type of reaction occurs between CH₃CH₂Br and aqueous NaOH?", o: ["A. Electrophilic addition", "B. Radical substitution", "C. Nucleophilic substitution", "D. Elimination"], m: 1, a: "C [1]." },
      { q: "Which observation is made when ethene is bubbled through bromine water?", o: ["A. Colourless to orange", "B. Orange to colourless", "C. Orange to green", "D. No change"], m: 1, a: "B [1]." },
      { q: "Define the term nucleophile and give one example.", m: 2, a: "Species that donates a pair of electrons to form a covalent bond / electron-rich [1]; e.g. OH⁻, NH₃, H₂O, CN⁻ [1]." },
      { q: "Identify the Lewis acid and Lewis base in BF₃ + NH₃ → F₃B–NH₃, explaining your answer.", m: 3, a: "NH₃ is the Lewis base – donates its lone pair [1]; BF₃ is the Lewis acid – accepts the electron pair (incomplete octet) [1]; a coordination bond forms with both electrons from N [1]." },
      { q: "State the reagent and conditions to convert bromoethane to ethanol and name the type of reaction.", m: 3, a: "Aqueous sodium hydroxide [1]; heat under reflux [1]; nucleophilic substitution [1]." },
      { q: "Explain why the rate of hydrolysis of RX with aqueous OH⁻ increases in the order RCl &lt; RBr &lt; RI.", m: 3, a: "Rate depends on C–X bond breaking [1]; C–Cl 324 &gt; C–Br 285 &gt; C–I 228 kJ mol⁻¹ (bond weakens down the group) [1]; weaker bond is broken more easily so faster [1]." },
      { q: "Describe a test to distinguish cyclohexene from cyclohexane and state the type of reaction responsible for the observation.", m: 3, a: "Add bromine water and shake [1]; cyclohexene decolourises it (orange → colourless), cyclohexane stays orange [1]; electrophilic addition [1]." },
      { q: "Ethene is converted to ethanol. State the reagent and conditions and write the equation, naming the type of reaction.", m: 3, a: "Steam with phosphoric acid catalyst (high temperature and pressure) [1]; C₂H₄ + H₂O → C₂H₅OH [1]; electrophilic addition (hydration) [1]." },
    ],
  },
});
