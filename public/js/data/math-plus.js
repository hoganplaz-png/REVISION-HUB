/* Maths AA SL - exam-focused extras: game plan, fastest methods, traps, exam tips, graphs. */
IB.extend("math", {
  gameplan: {
    intro: "Paper 1 and Paper 2 are each 90 minutes and 80 marks - about <strong>1.1 minutes per mark</strong>. A 6-mark question deserves 6-7 minutes; if you're stuck, move on and come back.",
    rows: [
      ["Section A", "Short questions answered in the boxes on the paper", "Do these first, fast and clean. Every question has marks to pick up - never leave one blank."],
      ["Section B", "2-3 long multi-part questions in the answer booklet", "Part (a) usually leads into (b) and (c). If you can't do (a), use the given answer and carry on for follow-through marks."],
      ["Reading time", "5 minutes before writing", "Spot the 2-3 easiest questions and plan your order."],
      ["Paper 1 vs 2", "P1 no calculator · P2 GDC required", "P1: exact answers and algebra. P2: use the GDC for anything that is just arithmetic - graph, solve, integrate numerically."],
    ],
    codes: [
      ["M1", "Method mark", "Write the formula and substitute, even if unsure - that line alone often earns M1."],
      ["A1", "Answer mark (often needs the M1 first)", "Correct value after a correct method."],
      ["R1", "Reasoning mark", "A sentence of justification: \"since |r| < 1\", \"since n is an integer\"."],
      ["AG", "Answer given in the question", "No marks for the final line itself - marks come from the steps before it."],
      ["FT", "Follow through", "A wrong answer in (a) used correctly in (b) can still score in (b)."],
    ],
    habits: [
      "<strong>Exact answers in Paper 1:</strong> keep \\(\\sqrt{2}\\), \\(\\ln 3\\), \\(\\pi\\), fractions.",
      "<strong>Formula first, then substitute</strong> - that line usually earns M1.",
      "<strong>Read the command term:</strong> \"write down\" = no working needed; \"show that\" = every line; \"hence\" = must use the previous part.",
      "<strong>Check conditions:</strong> \\(|r| < 1\\) for \\(S_\\infty\\), n a positive integer, log argument > 0, \\(\\Delta\\) for real roots.",
      "<strong>Ugly numbers = a mistake</strong> in Paper 1 - the paper is designed for clean numbers.",
      "<strong>Label every sketch:</strong> intercepts, vertex, asymptotes written as equations.",
      "<strong>Keep ± signs</strong> when square-rooting; reject a value only with a reason (R1).",
      "<strong>3 s.f. in Paper 2</strong> unless told otherwise - and don't round mid-calculation.",
      "<strong>Check by substitution</strong> at the end - it takes 10 seconds.",
      "<strong>Save 5 minutes</strong> to recheck signs and copying errors.",
    ],
    extra: {
      title: "Mental arithmetic for Paper 1",
      html: "<table><tr><th>Powers of 2</th><th>Powers of 3</th><th>Squares</th><th>Quick tricks</th></tr><tr><td>2⁵=32, 2⁶=64</td><td>3³=27, 3⁴=81</td><td>13²=169, 14²=196</td><td>×25 = ×100 ÷ 4</td></tr><tr><td>2⁷=128, 2⁸=256</td><td>3⁵=243</td><td>15²=225, 16²=256</td><td>a²−b² = (a−b)(a+b): 51×49 = 2499</td></tr><tr><td>2⁹=512, 2¹⁰=1024</td><td>3⁶=729</td><td>17²=289, 18²=324</td><td>√72 = √36·√2 = 6√2</td></tr></table>",
    },
  },
  topics: {
    "math-1": {
      formulas: ["\\(u_n = u_1 + (n-1)d\\)", "\\(S_n = \\frac{n}{2}(u_1 + u_n)\\)", "\\(u_n = u_1r^{n-1}\\)", "\\(S_\\infty = \\frac{u_1}{1-r},\\ |r|<1\\)", "\\(FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}\\)"],
      table: { head: ["", "Arithmetic (AP)", "Geometric (GP)"], rows: [["Test", "\\(u_2 - u_1 = u_3 - u_2 = d\\)", "\\(u_2 \\div u_1 = u_3 \\div u_2 = r\\)"], ["3 consecutive terms a, b, c", "\\(2b = a + c\\)", "\\(b^2 = ac\\)"], ["Sum to infinity", "does not exist", "only when \\(|r| < 1\\)"], ["Real-life cue", "\"increases by 50 each year\"", "\"increases by 5% each year\" → r = 1.05; \"loses 20%\" → r = 0.8"]] },
      methods: [
        "<strong>Count terms correctly:</strong> number of terms = top − bottom + 1. \\(\\sum_{k=3}^{20}\\) has <strong>18</strong> terms, not 17.",
        "<strong>Two terms given → subtract (AP) or divide (GP):</strong> \\(u_{10} - u_4 = 6d\\); \\(u_5 \\div u_2 = r^3\\). One step to d or r - no simultaneous equations needed.",
        "<strong>Sum of a linear sigma = number of terms × average of first and last.</strong> \\(\\sum_{k=1}^{20}(4k-1)\\): first 3, last 79 → 20 × 41 = 820.",
        "<strong>Given \\(S_n\\), find \\(u_n\\):</strong> \\(u_n = S_n - S_{n-1}\\) and \\(u_1 = S_1\\).",
        "<strong>Number of terms in an AP:</strong> n = (last − first) ÷ d + 1. Terms 7, 11, …, 83 → n = 20.",
        "<strong>\"Smallest n such that…\"</strong> (Paper 2): set up the inequality and use the GDC table, then state the integer.",
      ],
      traps: ["Writing nd instead of (n − 1)d.", "\\(r^2 = 4\\) gives \\(r = \\pm 2\\) - keep both until a condition removes one.", "|r| < 1 means −1 < r < 1; r = −2 has no sum to infinity - state the reason (R1).", "Mixing up \\(u_n\\) (one term) and \\(S_n\\) (a total).", "\\(\\sum_{k=1}^{n} c = cn\\), not c."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(u_n = u_1 + nd\\)", "\\(r^2 = 4\\), so \\(r = 2\\) (the root \\(r = -2\\) is dropped).", "\\(r = -2\\), so \\(S_\\infty = \\frac{u_1}{1 - (-2)} = \\frac{u_1}{3}\\).", "Asked for the sum of the first 10 terms, the answer given is \\(u_{10}\\).", "\\(\\sum_{k=1}^{10} 4 = 4\\)"],
      tips: ["Both AP and GP sum formulas are in the formula booklet - the 3-term relationships are not.", "Financial maths in Paper 2: use the TVM solver but write down the values you entered (N, I%, PV, PMT, FV, P/Y, C/Y) for method marks."],
    },
    "math-2": {
      formulas: ["\\(a^x = b \\iff x = \\log_a b\\)", "\\(\\log_a xy = \\log_a x + \\log_a y\\)", "\\(\\log_a x^m = m\\log_a x\\)", "\\(\\log_a x = \\frac{\\ln x}{\\ln a}\\)"],
      methods: [
        "<strong>Same base trick:</strong> \\(8^x = 4^{x+1}\\) → \\(2^{3x} = 2^{2x+2}\\) → 3x = 2x + 2.",
        "<strong>Hidden quadratic:</strong> \\(9^x - 4\\cdot3^x + 3 = 0\\): let \\(y = 3^x\\) → \\(y^2 - 4y + 3 = 0\\). Reject any y ≤ 0.",
        "<strong>Combine logs first:</strong> turn \\(\\log a + \\log b = c\\) into one log, then un-log.",
        "<strong>Exponential models:</strong> \\(N = N_0e^{kt}\\): divide by \\(N_0\\) first, then take ln.",
      ],
      traps: ["There is <strong>no</strong> law for \\(\\log(a+b)\\).", "Log arguments must be positive - check every solution (x = −5 is often rejected).", "\\((\\ln x)^2 \\neq 2\\ln x\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\log(a + b) = \\log a + \\log b\\)", "\\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\) gives \\(x = \\pm 5\\), and both values are kept.", "\\((\\ln x)^2 = 2\\ln x\\)"],
      tips: ["Paper 1 wants exact answers like \\(\\frac{\\ln 7}{2\\ln 3}\\) - don't convert to decimals.", "\\(e^x\\) and \\(\\ln x\\) are inverses: reflections in y = x."],
      diagrams: [{ title: "\\(y = 2^x\\) and \\(y = e^{-x}\\)", x: [-3, 3], y: [-1, 6], curves: [{ f: (x) => Math.pow(2, x), label: "2ˣ", labelX: 2.2 }, { f: (x) => Math.exp(-x), color: "b", dash: true, label: "e⁻ˣ", labelX: -2.6 }], points: [{ at: [0, 1], label: "(0, 1)" }], hlines: [{ y: 0 }] }, { title: "\\(y = \\ln x\\)", x: [-1, 6], y: [-3, 3], curves: [{ f: (x) => Math.log(x), domain: [0.03, 6], label: "ln x", labelX: 4.8 }], points: [{ at: [1, 0], label: "(1, 0)" }], vlines: [{ x: 0, label: "x = 0" }] }],
    },
    "math-3": {
      formulas: ["\\((a+b)^n = \\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^r\\)", "\\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\)"],
      table: { head: ["To show something is…", "Write it as"], rows: [["even", "2k, k ∈ ℤ"], ["odd", "2k + 1"], ["consecutive integers", "n, n + 1, n + 2"], ["a multiple of 8", "8 × (an integer expression)"]] },
      methods: [
        "<strong>Specific term:</strong> write the general term, collect the power of x, set it equal to the target, solve for r.",
        "<strong>Constant term:</strong> power of x = 0. In \\((x - \\frac{2}{x})^6\\): 6 − 2r = 0 → r = 3.",
        "<strong>Divisibility proofs:</strong> expand, collect, then factor out the number: \\((n+3)^2 - (n-1)^2 = 8(n+1)\\).",
        "<strong>Difference of squares saves time:</strong> \\(a^2 - b^2 = (a-b)(a+b)\\).",
      ],
      traps: ["Forgetting the negative sign inside b, e.g. b = −2x means \\((-2x)^r\\).", "Giving the term instead of the coefficient (or vice versa) - read which is asked.", "In proofs: working on both sides at once, or starting from the conclusion."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The \\(x^3\\) term of \\((1 - 2x)^5\\) is \\(\\binom{5}{3}(2x)^3 = 80x^3\\).", "Asked for the coefficient of \\(x^3\\), the answer given is \\(40x^3\\).", "A \"show that\" proof that starts from the result and works on both sides until it reaches 0 = 0."],
      tips: ["Proof layout for full marks: LHS = … = … = RHS, one step per line, then a concluding sentence.", "One counterexample is a complete disproof."],
    },
    "math-4": {
      formulas: ["\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)", "\\(y - y_1 = m(x - x_1)\\)", "\\(m_1m_2 = -1\\) (perpendicular)", "\\((f\\circ g)(x) = f(g(x))\\)"],
      methods: [
        "<strong>Number inputs:</strong> for \\((f\\circ g)(2)\\), work out g(2) first as a number, then put it into f.",
        "<strong>\\(f^{-1}(a)\\) as a number:</strong> just solve f(x) = a - no need for the inverse formula.",
        "<strong>Inverse in 4 steps:</strong> write y = f(x) → swap x and y → make y the subject → state domain (= range of f).",
        "<strong>Rational inverse pattern:</strong> \\(\\frac{ax+b}{cx+d} \\to \\frac{dx-b}{-cx+a}\\) - use it to check your answer.",
        "<strong>Verify:</strong> \\((f\\circ f^{-1})(x) = x\\).",
      ],
      traps: ["\\(f^{-1}(x)\\) is <strong>not</strong> \\(\\frac{1}{f(x)}\\).", "Applying the outer function first in a composite.", "Square-root inverses: choose + or − using the restricted domain."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(f^{-1}(x) = \\frac{1}{f(x)}\\)", "With \\(f(x) = 2x\\) and \\(g(x) = x + 1\\), \\((f \\circ g)(x) = 2x + 1\\).", "For \\(f(x) = x^2\\), \\(x \\le 0\\), the inverse is \\(f^{-1}(x) = \\sqrt{x}\\)."],
      tips: ["Domain of \\(f^{-1}\\) = range of f, and the asymptotes swap.", "Only one-to-one functions have an inverse - restrict the domain at the vertex for quadratics."],
    },
    "math-5": {
      formulas: ["\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)", "\\(\\Delta = b^2 - 4ac\\)", "axis: \\(x = -\\frac{b}{2a}\\)"],
      table: { head: ["Δ", "Roots", "Graph"], rows: [["Δ > 0", "two distinct real roots", "crosses the x-axis twice"], ["Δ = 0", "one repeated root", "touches the x-axis (tangent)"], ["Δ < 0", "no real roots", "never meets the x-axis"], ["Δ ≥ 0", "real roots", "meets the x-axis"]] },
      methods: [
        "<strong>Vertex without completing the square:</strong> h = −b/2a, then k = f(h).",
        "<strong>Line meets curve:</strong> substitute, rearrange to = 0, use Δ. Tangent: Δ = 0; two points: Δ > 0; none: Δ < 0.",
        "<strong>\"Always positive\":</strong> a > 0 and Δ < 0.",
        "<strong>Quadratic inequalities in 3 steps:</strong> solve = 0 → sketch → read above (> 0) or below (< 0) the axis.",
        "<strong>Factorising with a ≠ 1:</strong> \\(2x^2 - 5x - 3\\): ac = −6 → −6 and 1 → (2x + 1)(x − 3).",
      ],
      traps: ["Dividing both sides by x loses the root x = 0 - factorise instead.", "Writing \"x < −2 and x > 3\" - impossible; it must be \"or\".", "\"Two distinct roots\" (Δ > 0) vs \"real roots\" (Δ ≥ 0)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["Solving \\(x^2 = 3x\\) by dividing both sides by x, giving only x = 3.", "The solution of \\(x^2 - x - 6 > 0\\) written as \"x < −2 and x > 3\".", "\"The equation has real roots\", so \\(\\Delta > 0\\)."],
      tips: ["When Δ in terms of k gives another quadratic, solve it as an inequality - sketch it too."],
      diagrams: [{ title: "\\(y = x^2 - 2x - 3\\)", x: [-3, 5], y: [-5, 6], curves: [{ f: (x) => x * x - 2 * x - 3 }], points: [{ at: [-1, 0], label: "−1" }, { at: [3, 0], label: "3" }, { at: [1, -4], label: "vertex (1, −4)" }, { at: [0, -3], label: "(0, −3)" }] }, { title: "\\(x^2 - x - 6 < 0 \\Rightarrow -2 < x < 3\\)", x: [-4, 5], y: [-7, 6], shade: { from: -2, to: 3 }, curves: [{ f: (x) => x * x - x - 6, color: "c" }], points: [{ at: [-2, 0], label: "−2", color: "c" }, { at: [3, 0], label: "3", color: "c" }] }],
    },
    "math-6": {
      formulas: ["VA of \\(\\frac{ax+b}{cx+d}\\): \\(x = -\\frac{d}{c}\\)", "HA: \\(y = \\frac{a}{c}\\)", "\\(y = pf(q(x-h)) + k\\): \\((x, y) \\to (\\frac{x}{q} + h,\\ py + k)\\)"],
      table: { head: ["Transformation", "Effect", "(x, y) becomes"], rows: [["y = f(x) + b", "translate up b", "(x, y + b)"], ["y = f(x − a)", "translate right a", "(x + a, y)"], ["y = pf(x)", "vertical stretch, s.f. p", "(x, py)"], ["y = f(qx)", "horizontal stretch, s.f. 1/q", "(x/q, y)"], ["y = −f(x)", "reflect in x-axis", "(x, −y)"], ["y = f(−x)", "reflect in y-axis", "(−x, y)"]] },
      methods: [
        "<strong>Changes outside the bracket affect y and do what they say; inside affect x and do the opposite.</strong>",
        "<strong>Rational function in 4 lines:</strong> VA: bottom = 0 · HA: ratio of x-coefficients · y-int: put x = 0 · x-int: top = 0.",
        "<strong>Factor the inside first:</strong> f(2x − 6) = f(2(x − 3)) → translate right <strong>3</strong>, not 6.",
        "<strong>Asymptotes move with the graph:</strong> \\(y = e^x + 3\\) has HA y = 3.",
      ],
      traps: ["f(x + 3) moves <strong>left</strong> 3.", "f(2x) squashes horizontally (scale factor ½).", "Forgetting to move asymptotes and intercepts when sketching."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(y = f(x + 3)\\) is \\(y = f(x)\\) translated 3 units to the right.", "\\(y = f(2x)\\) is a horizontal stretch with scale factor 2.", "Sketching \\(y = \\frac{1}{x - 2} + 3\\) with its asymptotes still at x = 0 and y = 0."],
      tips: ["Use exact words: \"translation by vector \\(\\binom{a}{b}\\)\", \"vertical stretch with scale factor p\", \"reflection in the x-axis\"."],
      diagrams: [{ title: "\\(y = \\frac{2x+1}{x-1}\\): VA x = 1, HA y = 2", x: [-5, 6], y: [-6, 8], curves: [{ f: (x) => (Math.abs(x - 1) < 0.02 ? NaN : (2 * x + 1) / (x - 1)) }], vlines: [{ x: 1, label: "x = 1" }], hlines: [{ y: 2, label: "y = 2" }], points: [{ at: [0, -1], label: "(0, −1)" }, { at: [-0.5, 0], label: "(−½, 0)" }] }, { title: "grey \\(y = x^2\\) · accent \\(y = (x-2)^2 + 1\\) · dashed \\(y = -x^2\\)", x: [-3, 5], y: [-5, 7], curves: [{ f: (x) => x * x, color: "muted" }, { f: (x) => (x - 2) * (x - 2) + 1 }, { f: (x) => -x * x, color: "b", dash: true }], points: [{ at: [2, 1], label: "(2, 1)" }] }],
    },
    "math-7": {
      formulas: ["\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\\)", "cone \\(V = \\frac{1}{3}\\pi r^2h\\), curved \\(A = \\pi rl\\)", "sphere \\(V = \\frac{4}{3}\\pi r^3\\), \\(A = 4\\pi r^2\\)", "pyramid \\(V = \\frac{1}{3}Ah\\)"],
      methods: [
        "<strong>3D problems:</strong> find a right-angled triangle inside the shape and draw it flat.",
        "<strong>Pyramid angles:</strong> slant edge → use half the base diagonal; sloping face → use half the base side (to the midpoint of an edge).",
        "<strong>Composite solid:</strong> add the volumes; for surface area count only the faces you can touch.",
      ],
      traps: ["Angle between a line and a plane measured to an edge of the base instead of the projection of the line.", "Using the vertical height h instead of the slant height l in the cone curved surface area πrl.", "Forgetting the flat circular face in the total surface area of a hemisphere or cone."],
      mistakes: ["For a cuboid 8 × 6 × 5, the angle between the space diagonal AG and the base is tan⁻¹(5/8).", "A cone with r = 3 and h = 4 has curved surface area π(3)(4) = 12π.", "A solid hemisphere of radius r has total surface area 2πr²."],
      tips: ["The volume and surface area formulas are in the formula booklet - check which height (vertical or slant) each formula needs.", "Give 3D lengths to 3 s.f. but keep full values in the GDC for the next part."],
    },
    "math-7b": {
      formulas: ["\\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)", "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)", "\\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\)", "Area \\(= \\frac{1}{2}ab\\sin C\\)"],
      methods: [
        "<strong>Choose the rule:</strong> two angles or a side-angle pair opposite each other → sine rule; SAS or SSS → cosine rule.",
        "<strong>Finding an angle:</strong> prefer the cosine rule when you know three sides - it never gives an ambiguous answer.",
        "<strong>Area given:</strong> \\(\\frac{1}{2}ab\\sin C = A\\) gives sin C; the obtuse answer is \\(180° - C\\).",
      ],
      traps: ["Calculator in radian mode for a degrees question.", "Using the area formula with an angle that is not between the two sides.", "Evaluating the cosine rule as \\((a^2 + b^2 - 2ab)\\cos C\\)."],
      mistakes: ["\\(c^2 = 7^2 + 9^2 - 2(7)(9)\\cos 60° = (49 + 81 - 126)\\cos 60° = 2\\).", "The area of a triangle with sides 5 and 6, where 44° is the angle opposite the side 6, is ½(5)(6) sin 44°.", "Evaluating sin 40° on a GDC in radian mode and writing 0.745."],
      tips: ["Draw and label the triangle before calculating - it earns method marks and avoids mixing up sides.", "Write the formula with the numbers substituted before using the GDC - that line earns the M1."],
    },
    "math-7c": {
      formulas: ["back bearing = bearing ± 180°", "elevation from the bottom = depression from the top", "\\(\\tan\\theta = \\frac{\\text{height}}{\\text{horizontal distance}}\\)"],
      methods: [
        "<strong>Bearings:</strong> draw a north line at each point; use co-interior angles (sum 180°) to find the angle inside the triangle.",
        "<strong>Two angles of elevation:</strong> work in the non-right triangle first (sine rule with the difference of the angles), then use a right-angled triangle for the height.",
        "<strong>Depression → elevation:</strong> the angle of depression from the top equals the angle of elevation from the bottom.",
      ],
      traps: ["Writing a bearing with two figures (45° instead of 045°).", "Measuring an angle of depression from the vertical.", "Using a bearing directly as an angle of the triangle without drawing north lines."],
      mistakes: ["The bearing of B from A is 070°, so the bearing of A from B is 070° + 90° = 160°.", "From a cliff of height h the angle of depression of a boat is 30°, so tan 30° = d/h, where d is the horizontal distance.", "A ship sailing north-east is on a bearing of 45."],
      tips: ["Copy the diagram, or draw your own with every given value - it earns marks and stops you from using the wrong angle.", "Give a bearing to the nearest degree with three figures, e.g. 077°."],
    },
    "math-7d": {
      formulas: ["\\(\\pi\\ \\text{rad} = 180°\\)", "\\(l = r\\theta\\)", "\\(A = \\frac{1}{2}r^2\\theta\\)", "segment \\(= \\frac{1}{2}r^2(\\theta - \\sin\\theta)\\)"],
      methods: [
        "<strong>Segment area</strong> = sector − triangle = \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\).",
        "<strong>Degrees ↔ radians:</strong> × π/180 to radians, × 180/π to degrees; learn 30° = π/6, 45° = π/4, 60° = π/3.",
        "<strong>Unknown r and θ:</strong> write one equation for the perimeter (2r + rθ) and one for the area, then eliminate θ.",
      ],
      traps: ["Arc and sector formulas need θ in radians.", "Sector perimeter written without the two radii.", "Segment area found with the triangle ½r² instead of ½r² sin θ."],
      mistakes: ["A sector with radius r and angle 60° has arc length l = rθ = 60r.", "The perimeter of a sector of radius 5 and angle 1.2 rad is 5 × 1.2 = 6.", "Evaluating \\(\\sin\\frac{\\pi}{6}\\) on a GDC in degree mode and writing 0.00914."],
      tips: ["Set the GDC to radians for any question about arcs and sectors.", "\"Exact\" means leave π (and surds) in the answer."],
    },
    "math-8": {
      formulas: ["\\(\\cos\\theta = x\\), \\(\\sin\\theta = y\\) on the unit circle", "\\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\)", "\\(\\sin(\\pi - \\theta) = \\sin\\theta\\)", "\\(\\cos(2\\pi - \\theta) = \\cos\\theta\\)"],
      table: { head: ["θ", "0", "π/6", "π/4", "π/3", "π/2"], rows: [["sin θ", "0", "½", "√2/2", "√3/2", "1"], ["cos θ", "1", "√3/2", "√2/2", "½", "0"], ["tan θ", "0", "√3/3", "1", "√3", "undefined"]] },
      methods: [
        "<strong>Related angle:</strong> find the acute reference angle and its exact value, then the sign from the quadrant (CAST).",
        "<strong>Ambiguous case:</strong> after \\(\\sin B = k\\), test \\(180° - B\\): it is valid if \\(A + (180° - B) < 180°\\).",
        "<strong>Multiples of π/6, π/4, π/3:</strong> locate the angle on the unit circle by counting steps round from 0.",
      ],
      traps: ["Forgetting the sign of cos or sin in quadrants 2 to 4.", "Ambiguous case: giving only the acute angle from sin⁻¹.", "Writing tan(π/2) = 0 (it is undefined)."],
      mistakes: ["\\(\\cos\\frac{2\\pi}{3} = \\frac{1}{2}\\).", "\\(\\sin B = 0.8\\), so \\(B = 53.1°\\) only, although \\(B = 126.9°\\) is also possible.", "\\(\\tan\\frac{\\pi}{2} = 0\\)."],
      tips: ["Learn the exact-value table - Paper 1 relies on it.", "In an ambiguous-case question state both angles and check that each one gives a valid triangle."],
    },
    "math-8b": {
      formulas: ["\\(\\sin^2\\theta + \\cos^2\\theta = 1\\)", "\\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\)", "\\(\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta\\)", "\\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\)"],
      methods: [
        "<strong>One ratio given:</strong> use the Pythagorean identity, then take the sign from the quadrant.",
        "<strong>Choose the cos 2θ form:</strong> know sin θ → \\(1 - 2\\sin^2\\theta\\); know cos θ → \\(2\\cos^2\\theta - 1\\).",
        "<strong>Show that:</strong> replace sin 2x and cos 2x first, then simplify one side until it matches the other.",
      ],
      traps: ["Taking the positive square root without checking the quadrant.", "\\(\\sin 2\\theta \\ne 2\\sin\\theta\\) and \\(\\cos 2\\theta \\ne 2\\cos\\theta\\).", "Working on both sides of a \"show that\" at once."],
      mistakes: ["\\(\\sin\\theta = \\frac{3}{5}\\) with \\(\\frac{\\pi}{2} < \\theta < \\pi\\), so \\(\\cos\\theta = \\frac{4}{5}\\).", "\\(\\sin 2x = 2\\sin x\\).", "If \\(\\cos x = 0.6\\) then \\(\\cos 2x = 1.2\\)."],
      tips: ["The double angle identities are in the formula booklet; the exact values and the quadrant signs are not.", "Leave answers as exact fractions or surds - never with ±."],
    },
    "math-8c": {
      formulas: ["period of \\(\\sin bx\\) and \\(\\cos bx\\) = \\(\\frac{2\\pi}{b}\\)", "period of \\(\\tan bx\\) = \\(\\frac{\\pi}{b}\\)", "amplitude \\(= \\frac{\\max - \\min}{2}\\)", "principal axis \\(y = \\frac{\\max + \\min}{2}\\)"],
      methods: [
        "<strong>Modelling y = a sin(b(x − c)) + d:</strong> amplitude = (max − min)/2; d = (max + min)/2; b = 2π/period.",
        "<strong>Horizontal shift:</strong> factor out b first: \\(\\sin(2x - \\pi) = \\sin\\left(2\\left(x - \\frac{\\pi}{2}\\right)\\right)\\), a shift of \\(\\frac{\\pi}{2}\\) to the right.",
        "<strong>Context questions:</strong> maximum = d + |a|, minimum = d − |a|, time between maxima = period; solve h(t) = k on the GDC.",
      ],
      traps: ["Period written as 2πb instead of 2π/b.", "Reading the shift of sin(2x − π) as π instead of π/2.", "Giving the range as −a ≤ y ≤ a and forgetting d."],
      mistakes: ["The period of \\(y = 3\\sin(4x)\\) is \\(8\\pi\\).", "\\(y = \\sin(2x - \\pi)\\) is \\(y = \\sin 2x\\) translated π to the right.", "The range of \\(y = 5 - 2\\cos x\\) is \\(-2 \\le y \\le 2\\)."],
      tips: ["Sketch with the maximum, minimum and intercepts labelled - each labelled point is often a mark.", "In context, check the units of t (hours, minutes, seconds) before finding the period."],
      diagrams: [
        { title: "\\(y = \\sin x\\) (accent) and \\(y = \\cos x\\) (dashed), \\(0 \\le x \\le 2\\pi\\)", x: [0, 6.6], y: [-1.5, 1.5], grid: true, curves: [{ f: Math.sin }, { f: Math.cos, color: "b", dash: true }], points: [{ at: [Math.PI / 2, 1], label: "(π/2, 1)" }, { at: [Math.PI, 0], label: "π" }] },
      ],
    },
    "math-8d": {
      formulas: ["sin: \\(x = \\alpha,\\ \\pi - \\alpha\\)", "cos: \\(x = \\alpha,\\ 2\\pi - \\alpha\\)", "tan: \\(x = \\alpha,\\ \\alpha + \\pi\\)", "\\(\\sin bx = k\\): solve for bx on \\(0 \\le bx \\le 2b\\pi\\)"],
      methods: [
        "<strong>All solutions:</strong> find the principal value, then use symmetry - sin: π − θ; cos: 2π − θ; tan: θ + π.",
        "<strong>sin 2x = k:</strong> double the interval for 2x first, solve, then halve.",
        "<strong>Quadratic in sin x:</strong> factorise \\(2\\sin^2x - \\sin x - 1 = (2\\sin x + 1)(\\sin x - 1)\\).",
      ],
      traps: ["Missing solutions in the interval (loses the final A1).", "Using degrees on the GDC for a radians question.", "Dividing by sin x and losing the solutions of sin x = 0."],
      mistakes: ["Solving \\(\\sin x = \\frac{1}{2}\\) for \\(0 \\le x \\le 2\\pi\\) and giving only \\(x = \\frac{\\pi}{6}\\).", "Solving \\(\\cos x = 0.3\\) for \\(0 \\le x \\le 2\\pi\\) and giving x = 72.5 from a GDC in degree mode.", "Solving \\(\\sin 2x = \\sin x\\) by dividing by sin x, which gives only \\(2\\cos x = 1\\)."],
      tips: ["Sketch the graph on the interval to count the solutions before you solve.", "Write the interval for bx (e.g. \\(0 \\le 2x \\le 4\\pi\\)) as your first line."],
    },
    "math-9": {
      formulas: ["stratum sample = \\(\\frac{\\text{stratum size}}{\\text{population size}} \\times n\\)", "systematic interval \\(k = \\frac{N}{n}\\)"],
      methods: [
        "<strong>Name the method:</strong> random from a full list → simple random; every kth → systematic; groups in proportion + random → stratified; groups in proportion + not random → quota; easiest to reach → convenience.",
        "<strong>Explain bias:</strong> say who is left out or over-represented and how that changes the result.",
        "<strong>Discrete or continuous:</strong> counted → discrete; measured → continuous.",
      ],
      traps: ["Calling a quota sample stratified (stratified needs random selection inside each group).", "Saying a larger sample removes bias - it only reduces random variation.", "Classifying a number of people as continuous data."],
      mistakes: ["Surveying every 10th customer who leaves a shop is a simple random sample.", "The number of siblings a student has is continuous data.", "A survey posted on social media gives an unbiased sample of all adults."],
      tips: ["In \"state one disadvantage\" questions give a reason in context, e.g. \"people without internet access cannot respond\".", "Show the proportion calculation for a stratified sample - it earns the M1."],
    },
    "math-9b": {
      formulas: ["IQR = Q₃ − Q₁", "outlier: < Q₁ − 1.5×IQR or > Q₃ + 1.5×IQR", "cf graph: Q₁ at n/4, median at n/2, Q₃ at 3n/4"],
      methods: [
        "<strong>Cumulative frequency:</strong> plot at upper class boundaries and join with a smooth curve starting at (lowest boundary, 0).",
        "<strong>Outlier test:</strong> compute the fence, then compare the value with it in a sentence.",
        "<strong>Compare box plots:</strong> one comparison of centre (median) and one of spread (IQR or range), in context.",
      ],
      traps: ["Plotting cumulative frequency at mid-points instead of upper boundaries.", "Drawing a whisker to an outlier instead of marking it with a cross.", "Reading \"how many more than 25\" directly as cf(25) instead of n − cf(25)."],
      mistakes: ["A cumulative frequency curve is plotted at the class mid-points.", "Q₁ = 15 and Q₃ = 27, so 40 is an outlier.", "Two box plots are compared using only their maximum values."],
      tips: ["Show the fence calculation: Q₃ + 1.5 × IQR = …, then write \"so … is an outlier\".", "Read values off a graph to the accuracy of the grid and leave your construction lines visible."],
    },
    "math-9c": {
      formulas: ["\\(\\bar{x} = \\frac{\\sum fx}{n}\\)", "IQR = Q₃ − Q₁", "variance = σ²", "\\(x \\to ax + b\\): mean → \\(a\\bar{x} + b\\), σ → |a|σ"],
      methods: [
        "<strong>Effect of transformations:</strong> adding k shifts mean, median, quartiles by k - spread unchanged. Multiplying by k multiplies all of them (and σ) by k.",
        "<strong>Missing value:</strong> work with totals: total = mean × number of values.",
        "<strong>Grouped data:</strong> mid-interval values in L1, frequencies in L2, then 1-Var Stats; say that the answer is an estimate.",
      ],
      traps: ["Using sample vs population σ inconsistently - IB uses population σ (σx on the GDC).", "Adding a constant to every value and changing σ.", "Using class boundaries instead of mid-interval values for a grouped mean."],
      mistakes: ["Quoting \\(s_x\\) from the GDC as the standard deviation of a data set, instead of \\(\\sigma_x\\).", "Every value is increased by 4, so the standard deviation also increases by 4.", "Each value is multiplied by 3, so the variance is multiplied by 3."],
      tips: ["Choose the median and IQR when there are outliers or skew; the mean and σ for symmetric data.", "Give σ to 3 s.f. and say \"estimate\" for grouped data."],
    },
    "math-9d": {
      formulas: ["\\(-1 \\le r \\le 1\\)", "y on x: \\(y = ax + b\\) passes through \\((\\bar{x}, \\bar{y})\\)", "predict y from x only inside the data range"],
      methods: [
        "<strong>Regression:</strong> use the line of y on x to predict y from x, and only within the data range.",
        "<strong>Describe r:</strong> strength (strong / moderate / weak), direction (positive / negative) and the word linear.",
        "<strong>Line by eye:</strong> draw it through the mean point (x̄, ȳ) with roughly equal numbers of points on each side.",
      ],
      traps: ["Extrapolating beyond the data.", "Saying correlation proves causation.", "Describing r without the word \"linear\" or without the direction."],
      mistakes: ["A regression line from data with \\(10 \\le x \\le 40\\) is used to give a reliable prediction at x = 90.", "r = 0.95, so more hours of revision cause higher test scores.", "r = −0.9 shows weak correlation because it is negative."],
      tips: ["Interpret r in words: \"strong positive linear correlation\".", "Write the regression equation with coefficients to 3 s.f."],
    },
    "math-9e": {
      formulas: ["x on y: \\(x = cy + d\\)", "both lines pass through \\((\\bar{x}, \\bar{y})\\)", "predict x from y with x on y"],
      methods: [
        "<strong>Which line?</strong> The variable you predict goes on the left: predict x → x on y; predict y → y on x.",
        "<strong>GDC:</strong> swap the lists - y-values as the independent list - to get x = cy + d.",
        "<strong>Mean point from two lines:</strong> solve the two regression equations simultaneously.",
      ],
      traps: ["Rearranging y = ax + b to predict x.", "Using x on y for a value of y outside the data range.", "Writing the line of x on y in the form y = …"],
      mistakes: ["The line of y on x is y = 4.38x + 36.0, so the hours for a score of 70 are x = (70 − 36.0)/4.38.", "The two regression lines are the same line whenever r > 0.9.", "The line of x on y is found by entering x as the independent list on the GDC."],
      tips: ["Say which line you used and why: \"x on y, since x is predicted from y\".", "Check that the given y lies within the y-data before calling the estimate reliable."],
    },
    "math-10": {
      formulas: ["\\(P(A) = \\frac{n(A)}{n(U)}\\)", "\\(P(A') = 1 - P(A)\\)", "expected number = np", "relative frequency = \\(\\frac{\\text{frequency}}{\\text{number of trials}}\\)"],
      methods: [
        "<strong>\"At least one\"</strong> = 1 − P(none).",
        "<strong>Two dice or spinners:</strong> draw the full grid of outcomes, then count.",
        "<strong>Expected number:</strong> multiply the probability by the number of trials.",
      ],
      traps: ["Treating outcomes that are not equally likely (e.g. the totals 2 to 12) as equally likely.", "Rounding an expected number to a whole number when not asked.", "Adding probabilities for \"at least one\" instead of using 1 − P(none)."],
      mistakes: ["Two dice are rolled; the totals 2, 3, …, 12 are 11 outcomes, so P(total = 7) = 1/11.", "A die is rolled 4 times, so P(at least one six) = 4 × 1/6 = 2/3.", "P(A) = 0.35, so P(A′) = 0.35."],
      tips: ["Write probabilities as exact fractions or to 3 s.f.", "A probability above 1 or below 0 means a mistake - check before moving on."],
    },
    "math-10b": {
      formulas: ["\\(P(A\\cup B) = P(A) + P(B) - P(A\\cap B)\\)", "mutually exclusive: \\(P(A\\cap B) = 0\\)", "independent: \\(P(A\\cap B) = P(A)P(B)\\)"],
      methods: [
        "<strong>Venn diagrams:</strong> fill the intersection first, then work outwards.",
        "<strong>Tree diagrams:</strong> multiply along branches, add between outcomes. \"Without replacement\" changes the second-stage denominators.",
        "<strong>Mutually exclusive or independent?</strong> Mutually exclusive → add; independent → multiply.",
      ],
      traps: ["Confusing mutually exclusive (P(A∩B) = 0) with independent.", "Forgetting to reduce totals when sampling without replacement."],
      mistakes: ["A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.4, so P(A ∩ B) = 0.3 × 0.4 = 0.12.", "Two counters are taken without replacement from 5 red and 3 blue: P(both red) = \\(\\frac{5}{8} \\times \\frac{5}{8}\\)."],
      tips: ["Label every branch of a tree diagram with its probability - the diagram itself often earns marks.", "Shade Venn regions carefully: A ∩ B′ means \"A only\"."],
    },
    "math-10c": {
      formulas: ["\\(P(A|B) = \\frac{P(A\\cap B)}{P(B)}\\)", "independent: \\(P(A|B) = P(A) = P(A|B')\\)", "\\(P(A\\cap B) = P(B)P(A|B)\\)"],
      methods: [
        "<strong>\"Given that\" = new denominator:</strong> divide by the probability (or number) of the given event.",
        "<strong>Reverse conditional from a tree:</strong> \\(P(A|B) = \\frac{P(A\\cap B)}{P(B)}\\), with P(B) the sum of all the branches that end in B.",
        "<strong>Independence test:</strong> compare P(A|B) with P(A) (or P(A∩B) with P(A)P(B)), then state the conclusion.",
      ],
      traps: ["Dividing by P(A) instead of P(B) in P(A|B).", "Concluding independence without showing both numbers.", "Confusing P(A|B) with P(B|A)."],
      mistakes: ["P(A ∩ B) = 0.12 and P(B) = 0.4, so P(A|B) = 0.12 × 0.4 = 0.048.", "P(rain) = 0.3 and P(late | rain) = 0.6, so P(rain | late) = 0.6.", "P(A) = 0.4 and P(A|B) = 0.4, so A and B are mutually exclusive."],
      tips: ["To show independence, compute P(A)P(B) and compare it numerically with P(A∩B), then conclude in words.", "Write the conditional formula with numbers substituted - it earns the M1 even if a later value is wrong."],
    },
    "math-11": {
      formulas: ["\\(\\sum P(X = x) = 1\\)", "\\(E(X) = \\sum x\\,P(X = x)\\)", "fair game: E(gain) = 0"],
      methods: [
        "<strong>Fair game:</strong> E(gain) = 0.",
        "<strong>Unknown k:</strong> add all the probabilities, set the sum equal to 1 and solve.",
        "<strong>Expected total over n games:</strong> n × E(X).",
      ],
      traps: ["Using the prize instead of the gain (prize − cost) in a fair-game question.", "Forgetting that probabilities must lie between 0 and 1 (reject an impossible k).", "Thinking E(X) must be one of the values X can take."],
      mistakes: ["A game costs $3 and pays $10 with probability 0.2, so the expected gain is 10 × 0.2 = $2.", "\\(P(X = x) = kx\\) for x = 1, 2, 3, so 3k = 1 and \\(k = \\frac{1}{3}\\).", "E(X) = 2.5 is impossible because X only takes whole-number values."],
      tips: ["Write the distribution as a table before finding E(X).", "State clearly whether a game is fair and give the reason: E(gain) = 0 or E(gain) ≠ 0."],
    },
    "math-11b": {
      formulas: ["\\(P(X = r) = \\binom{n}{r}p^r(1-p)^{n-r}\\)", "\\(E(X) = np\\)", "\\(Var(X) = np(1-p)\\)", "\\(P(X \\ge k) = 1 - P(X \\le k - 1)\\)"],
      methods: [
        "<strong>Binomial on GDC:</strong> binompdf for \"exactly\", binomcdf for \"at most\". P(X ≥ k) = 1 − P(X ≤ k − 1).",
        "<strong>Least n:</strong> P(at least one) = 1 − (1 − p)ⁿ; increase n (GDC table) until it passes the target.",
        "<strong>Two-stage problems:</strong> find p from another distribution first, then use B(n, p).",
      ],
      traps: ["P(X > 3) for binomial = 1 − P(X ≤ 3), not 1 − P(X ≤ 2).", "Using binompdf for \"at most\" (it needs the cdf).", "Using a binomial model when the trials are not independent."],
      mistakes: ["For a binomial X, P(X > 3) = 1 − P(X ≤ 2).", "For X ~ B(10, 0.3), P(X ≤ 2) is binompdf(10, 0.3, 2).", "For X ~ B(20, 0.25), Var(X) = np = 5."],
      tips: ["State the distribution with its parameters, e.g. X ~ B(10, 0.3) - it often earns a mark.", "Translate the words into an inequality before using the GDC: \"at least 3\" → X ≥ 3."],
    },
    "math-11c": {
      formulas: ["\\(X \\sim N(\\mu, \\sigma^2)\\)", "68% within 1σ, 95% within 2σ, 99.7% within 3σ", "\\(P(X < \\mu) = 0.5\\)", "invNorm uses the area to the LEFT"],
      methods: [
        "<strong>Normal:</strong> normalcdf for probabilities, invNorm for values (area to the left).",
        "<strong>Symmetry:</strong> P(X < μ − a) = P(X > μ + a); use it in Paper 1 without a GDC.",
        "<strong>Expected number:</strong> n × P(event) once the normal probability is known.",
      ],
      traps: ["Using the variance instead of the standard deviation in normal calculations.", "Entering the area to the right in invNorm.", "Treating P(X ≤ a) and P(X < a) as different values."],
      mistakes: ["For \\(X \\sim N(50, 16)\\), entering σ = 16 in the GDC.", "The mass exceeded by 10% of apples is invNorm(0.1, 150, 12).", "P(X > μ) = 0.68 for any normal distribution."],
      tips: ["Sketch and shade the normal curve in every question - it is often worth a mark.", "Write the GDC inputs (bounds, μ, σ) as your working."],
      diagrams: [
        { title: "Normal curve: ~68% within 1σ, ~95% within 2σ", x: [-3.5, 3.5], y: [-0.05, 0.5], grid: false, shade: { from: -1, to: 1 }, curves: [{ f: (x) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI) }], texts: [{ at: [0, 0.15], text: "68%", anchor: "middle" }, { at: [3.3, -0.03], text: "z", anchor: "end" }] },
      ],
    },
    "math-11d": {
      formulas: ["\\(z = \\frac{x - \\mu}{\\sigma}\\)", "\\(Z \\sim N(0, 1)\\)", "\\(x = \\mu + z\\sigma\\)"],
      methods: [
        "<strong>Unknown μ or σ:</strong> z = invNorm(area to the left, 0, 1), then solve \\(\\frac{x - \\mu}{\\sigma} = z\\).",
        "<strong>Both unknown:</strong> write two equations \\(x = \\mu + z\\sigma\\) and solve them simultaneously.",
        "<strong>Compare performances:</strong> calculate the z-score of each result and compare.",
      ],
      traps: ["Using invNorm with the unknown μ and σ instead of 0 and 1.", "Losing the minus sign of z for a value below the mean.", "Using the area to the right when P(X > x) is given."],
      mistakes: ["P(X > 40) = 0.15, so z = invNorm(0.15, 0, 1) and (40 − μ)/σ = −1.036.", "A score with z = −1.2 is 1.2 marks below the mean.", "For X ~ N(μ, 5²), the z-value of 40 is (40 − μ)/25."],
      tips: ["Write the z equation with the unknown before solving - it earns the method marks.", "Give μ and σ to 3 s.f. but keep the full z-values in the GDC."],
    },
    "math-12": {
      formulas: ["\\(\\frac{d}{dx}x^n = nx^{n-1}\\)", "chain: \\(\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}\\)", "product: \\((uv)' = u'v + uv'\\)", "quotient: \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\)"],
      methods: ["<strong>Tangent at x = a:</strong> find f(a) and f'(a), then \\(y - f(a) = f'(a)(x - a)\\). Normal gradient = \\(-1/f'(a)\\).", "<strong>Stationary points:</strong> f'(x) = 0, then classify with f''(x) (> 0 min, < 0 max).", "<strong>Optimisation:</strong> write one-variable function → differentiate → set = 0 → justify max/min → answer the question asked.", "<strong>Rewrite before differentiating:</strong> \\(\\frac{1}{\\sqrt{x}} = x^{-1/2}\\)."],
      traps: ["Point of inflexion needs f'' to <strong>change sign</strong>, not just f'' = 0.", "Giving the x-value when the question asks for the maximum value (y).", "Forgetting the chain rule on \\(e^{3x}\\) or \\(\\sin 2x\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["For \\(f(x) = x^4\\), \\(f''(0) = 0\\), so the origin is a point of inflexion.", "Asked for the maximum value of f, the answer given is the x-coordinate of the maximum point.", "\\(\\frac{d}{dx}e^{3x} = e^{3x}\\)"],
      tips: ["\"Show that\" derivatives: write every step; the final line must match exactly."],
      diagrams: [{ title: "\\(y = x^3 - 3x^2 - 9x + 2\\): max (−1, 7), min (3, −25)", x: [-3, 5], y: [-30, 12], curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 2 }], points: [{ at: [-1, 7], label: "max (−1, 7)" }, { at: [3, -25], label: "min (3, −25)" }] }],
    },
    "math-13": {
      formulas: ["\\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\)", "\\(\\int \\frac{1}{x}dx = \\ln|x| + C\\)", "\\(\\int e^{ax}dx = \\frac{1}{a}e^{ax} + C\\)", "Area = \\(\\int_a^b (f - g)\\,dx\\)"],
      methods: ["<strong>Reverse chain rule by inspection:</strong> \\(\\int 2x(x^2+1)^3dx = \\frac{(x^2+1)^4}{4} + C\\) - differentiate your answer to check.", "<strong>Find C</strong> using a given point straight away.", "<strong>Area between curves:</strong> find intersections, then integrate (top − bottom)."],
      traps: ["Forgetting + C on indefinite integrals.", "Area below the x-axis gives a negative integral - split at the roots and take absolute values.", "\\(\\int \\frac{1}{x^2}dx \\neq \\ln x^2\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\int 2x\\,dx = x^2\\)", "The area between \\(y = x^2 - 3x\\) and the x-axis for \\(0 \\le x \\le 4\\) is \\(\\left|\\int_0^4 (x^2 - 3x)\\,dx\\right| = \\frac{8}{3}\\).", "\\(\\int \\frac{1}{x^2}\\,dx = \\ln x^2 + c\\)"],
      tips: ["Paper 2: write the integral with limits, then give the GDC value - the written integral earns the method mark."],
      diagrams: [{ title: "Area between \\(y = 2x\\) and \\(y = x^2\\) is \\(\\frac{4}{3}\\)", x: [-1, 3], y: [-1, 6], shade: { from: 0, to: 2, color: "a" }, curves: [{ f: (x) => 2 * x, color: "b", label: "y = 2x", labelX: 2.4 }, { f: (x) => x * x, label: "y = x²", labelX: 2.2 }], points: [{ at: [2, 4], label: "(2, 4)" }] }],
    },
    "math-14": {
      formulas: ["\\(v = \\frac{ds}{dt}\\)", "\\(a = \\frac{dv}{dt}\\)", "displacement = \\(\\int v\\,dt\\)", "distance = \\(\\int |v|\\,dt\\)"],
      methods: ["<strong>At rest:</strong> v = 0. <strong>Changes direction:</strong> v changes sign.", "<strong>Speeding up</strong> when v and a have the same sign.", "<strong>GDC:</strong> fnInt(|v(t)|, t, a, b) for total distance."],
      traps: ["Using displacement when distance is asked.", "Forgetting the absolute value for distance."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The particle changes direction at t = 1, and the distance travelled for \\(0 \\le t \\le 4\\) is given as \\(s(4) - s(0)\\).", "Distance travelled = \\(\\int_0^4 v(t)\\,dt\\) for a velocity that is negative for part of the interval."],
      tips: ["Sketch v against t on the GDC first - you can see where it changes sign."],
    },
  },
});
