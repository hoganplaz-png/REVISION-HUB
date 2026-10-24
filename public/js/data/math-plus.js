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
      formulas: ["\\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\)", "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)", "Area \\(= \\frac{1}{2}ab\\sin C\\)", "\\(l = r\\theta\\), \\(A = \\frac{1}{2}r^2\\theta\\)"],
      methods: [
        "<strong>Choose the rule:</strong> two angles or a side-angle pair opposite each other → sine rule; SAS or SSS → cosine rule.",
        "<strong>Segment area</strong> = sector − triangle = \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\).",
        "<strong>3D problems:</strong> find a right-angled triangle inside the shape and draw it flat.",
      ],
      traps: ["Calculator in degrees when the question is in radians (or vice versa).", "Ambiguous case: the sine rule can give an obtuse angle too (180° − θ).", "Arc and sector formulas need θ in radians."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["Evaluating \\(\\sin\\frac{\\pi}{6}\\) on a GDC in degree mode and writing 0.00914.", "\\(\\sin B = 0.8\\), so \\(B = 53.1°\\) only, although \\(B = 126.9°\\) is also possible.", "A sector with radius r and angle 60° has arc length \\(l = r\\theta = 60r\\)."],
      tips: ["Draw and label the triangle before calculating - it earns method marks and avoids mixing up sides."],
    },
    "math-8": {
      formulas: ["\\(\\sin^2\\theta + \\cos^2\\theta = 1\\)", "\\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\)", "\\(\\cos 2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1\\)", "period of \\(\\sin bx\\) = \\(\\frac{2\\pi}{b}\\)"],
      table: { head: ["θ", "0", "π/6", "π/4", "π/3", "π/2"], rows: [["sin θ", "0", "½", "√2/2", "√3/2", "1"], ["cos θ", "1", "√3/2", "√2/2", "½", "0"], ["tan θ", "0", "√3/3", "1", "√3", "undefined"]] },
      methods: [
        "<strong>All solutions:</strong> find the principal value, then use symmetry - sin: π − θ; cos: 2π − θ; tan: θ + π.",
        "<strong>sin 2x = k:</strong> double the interval for 2x first, solve, then halve.",
        "<strong>Quadratic in sin x:</strong> factorise \\(2\\sin^2x - \\sin x - 1 = (2\\sin x + 1)(\\sin x - 1)\\).",
        "<strong>Modelling y = a sin(b(x − c)) + d:</strong> amplitude = (max − min)/2; d = (max + min)/2; b = 2π/period.",
      ],
      traps: ["Missing solutions in the interval (loses the final A1).", "Using degrees on the GDC for a radians question.", "sign of cos/sin in each quadrant (CAST)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["Solving \\(\\sin x = \\frac{1}{2}\\) for \\(0 \\le x \\le 2\\pi\\) and giving only \\(x = \\frac{\\pi}{6}\\).", "Solving \\(\\cos x = 0.3\\) for \\(0 \\le x \\le 2\\pi\\) and giving x = 72.5 from a GDC in degree mode.", "\\(\\sin\\theta = \\frac{3}{5}\\) with \\(\\frac{\\pi}{2} < \\theta < \\pi\\), so \\(\\cos\\theta = \\frac{4}{5}\\)."],
      tips: ["Learn the exact-value table - Paper 1 relies on it."],
      diagrams: [{ title: "\\(y = \\sin x\\) (accent) and \\(y = \\cos x\\) (dashed), \\(0 \\le x \\le 2\\pi\\)", x: [0, 6.6], y: [-1.5, 1.5], grid: true, curves: [{ f: Math.sin }, { f: Math.cos, color: "b", dash: true }], points: [{ at: [Math.PI / 2, 1], label: "(π/2, 1)" }, { at: [Math.PI, 0], label: "π" }] }],
    },
    "math-9": {
      formulas: ["IQR = Q₃ − Q₁", "outlier: < Q₁ − 1.5×IQR or > Q₃ + 1.5×IQR", "\\(\\bar{x} = \\frac{\\sum fx}{n}\\)"],
      methods: ["<strong>Effect of transformations:</strong> adding k shifts mean, median, quartiles by k - spread unchanged. Multiplying by k multiplies all of them (and σ) by k.", "<strong>Regression:</strong> use y-on-x to predict y, x-on-y to predict x, and only within the data range."],
      traps: ["Extrapolating beyond the data.", "Saying correlation proves causation.", "Using sample vs population σ inconsistently - IB uses population σ (σx on GDC)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["A regression line from data with \\(10 \\le x \\le 40\\) is used to give a reliable prediction at x = 90.", "r = 0.95, so more hours of revision cause higher test scores.", "Quoting \\(s_x\\) from the GDC as the standard deviation of a data set, instead of \\(\\sigma_x\\)."],
      tips: ["Interpret r in words: \"strong positive linear correlation\".", "Write the regression equation with coefficients to 3 s.f."],
    },
    "math-10": {
      formulas: ["\\(P(A\\cup B) = P(A) + P(B) - P(A\\cap B)\\)", "\\(P(A|B) = \\frac{P(A\\cap B)}{P(B)}\\)", "independent: \\(P(A\\cap B) = P(A)P(B)\\)"],
      methods: ["<strong>Venn diagrams:</strong> fill the intersection first, then work outwards.", "<strong>Tree diagrams:</strong> multiply along branches, add between outcomes. \"Without replacement\" changes the second-stage denominators.", "<strong>\"At least one\"</strong> = 1 − P(none)."],
      traps: ["Confusing mutually exclusive (P(A∩B) = 0) with independent.", "Forgetting to reduce totals when sampling without replacement."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.4, so P(A ∩ B) = 0.3 × 0.4 = 0.12.", "Two counters are taken without replacement from 5 red and 3 blue: P(both red) = \\(\\frac{5}{8} \\times \\frac{5}{8}\\)."],
      tips: ["To show independence, compute P(A)P(B) and compare it numerically with P(A∩B), then conclude in words."],
    },
    "math-11": {
      formulas: ["\\(X\\sim B(n,p)\\): \\(E(X) = np\\)", "\\(Var(X) = np(1-p)\\)", "\\(z = \\frac{x - \\mu}{\\sigma}\\)", "\\(\\sum P(X = x) = 1\\)"],
      methods: ["<strong>Binomial on GDC:</strong> binompdf for \"exactly\", binomcdf for \"at most\". P(X ≥ k) = 1 − P(X ≤ k − 1).", "<strong>Normal:</strong> normalcdf for probabilities, invNorm for values. Unknown μ or σ → use z-scores.", "<strong>Fair game:</strong> E(gain) = 0."],
      traps: ["P(X > 3) for binomial = 1 − P(X ≤ 3), not 1 − P(X ≤ 2).", "Using the variance instead of the standard deviation in normal calculations."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["For a binomial X, P(X > 3) = 1 − P(X ≤ 2).", "For \\(X \\sim N(50, 16)\\), entering σ = 16 in the GDC."],
      tips: ["State the distribution with its parameters, e.g. X ~ B(10, 0.3) - it often earns a mark."],
      diagrams: [{ title: "Normal curve: ~68% within 1σ, ~95% within 2σ", x: [-3.5, 3.5], y: [-0.05, 0.5], grid: false, shade: { from: -1, to: 1 }, curves: [{ f: (x) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI) }], texts: [{ at: [0, 0.15], text: "68%", anchor: "middle" }, { at: [3.3, -0.03], text: "z", anchor: "end" }] }],
    },
    "math-12": {
      formulas: ["\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}\\)", "gradient of chord \\(= \\frac{f(a + h) - f(a)}{h}\\)", "\\(\\frac{dy}{dx}\\) = rate of change of y with respect to x"],
      methods: ["<strong>Gradient at a point:</strong> find f′(x), then substitute x = a. The answer is a number, not a function.", "<strong>Where is the gradient k?</strong> Solve f′(x) = k, then find y from the original function.", "<strong>Chord → tangent:</strong> write the chord gradient in terms of h, simplify, then let h → 0.", "<strong>Rate of change in context:</strong> differentiate, substitute, give units (… per …) and say whether the quantity is increasing or decreasing."],
      traps: ["Substituting into f(x) instead of f′(x) when the gradient is asked.", "Leaving out the units or the sign when interpreting a rate of change.", "Letting h → 0 before cancelling the h in the denominator."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["For \\(f(x) = x^2\\), the gradient at x = 3 is f(3) = 9.", "\\(V'(3) = -22.3\\), so the volume is 22.3 litres.", "\\(\\frac{(1 + h)^2 - 1}{h}\\) with h = 0 gives \\(\\frac{0}{0}\\), so the gradient at x = 1 does not exist."],
      tips: ["\"Interpret\" a rate of change: give the number, the units, and whether the quantity is increasing or decreasing at that instant."],
    },
    "math-12b": {
      formulas: ["f increasing \\(\\Leftrightarrow f'(x) > 0\\)", "f decreasing \\(\\Leftrightarrow f'(x) < 0\\)", "stationary \\(\\Leftrightarrow f'(x) = 0\\)"],
      methods: ["<strong>Intervals:</strong> differentiate → factorise f′ → find its zeros → test the sign in each interval → write the inequality.", "<strong>Quadratic f′:</strong> sketch the parabola of f′; a U-shape is negative between its roots and positive outside.", "<strong>For all x:</strong> show f′(x) > 0 using \\(x^2 \\ge 0\\), \\(e^x > 0\\) or a negative discriminant."],
      traps: ["Solving f′(x) = 0 and stopping, without testing the sign either side.", "Reading the graph of f′ as if it were the graph of f.", "Writing \\(x < \\pm 2\\) instead of \\(-2 < x < 2\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(f'(x) = 3x^2 - 12 = 0\\) gives x = ±2, so f is decreasing for x < 2.", "The graph of f′ is falling for 0 < x < 3, so f is decreasing there.", "\\(f'(x) = x^2 - 4 < 0\\) gives \\(x < \\pm 2\\)."],
      tips: ["Draw a quick sign diagram of f′ with its zeros marked: it gives the intervals and the nature of the stationary points in one go."],
    },
    "math-12c": {
      formulas: ["\\(\\frac{d}{dx}x^n = nx^{n-1}\\)", "\\(\\frac{d}{dx}(ax^n) = anx^{n-1}\\)", "\\(\\frac{d}{dx}(c) = 0\\)", "\\(\\frac{d}{dx}(f + g) = f' + g'\\)"],
      methods: ["<strong>Rewrite before differentiating:</strong> \\(\\frac{1}{\\sqrt{x}} = x^{-1/2}\\), \\(\\frac{5}{x} = 5x^{-1}\\).", "<strong>Expand and split:</strong> multiply out brackets and divide each term by the denominator before using the power rule.", "<strong>Unknown coefficients:</strong> differentiate with the letters in, then turn each given gradient into an equation."],
      traps: ["\\(\\frac{d}{dx}x^{-1} = -x^{-2}\\), not \\(-x^{0}\\) or \\(x^{-2}\\): subtract 1 from a negative power carefully.", "Differentiating a quotient of polynomials term by term (top over bottom).", "Forgetting that the derivative of a constant is zero."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\frac{d}{dx}\\left(\\frac{3}{x^2}\\right) = \\frac{3}{2x}\\)", "\\(\\frac{d}{dx}\\left(\\frac{x^3 + 1}{x}\\right) = \\frac{3x^2}{1}\\)", "\\(\\frac{d}{dx}(5x^2 + 7) = 10x + 7\\)"],
      tips: ["Write the index form as a separate line: it earns the M1 and makes the A1s easy."],
    },
    "math-12d": {
      formulas: ["tangent: \\(y - f(a) = f'(a)(x - a)\\)", "normal gradient \\(= -\\frac{1}{f'(a)}\\)", "perpendicular: \\(m_1 m_2 = -1\\)"],
      methods: ["<strong>Tangent at x = a:</strong> find f(a) and f'(a), then \\(y - f(a) = f'(a)(x - a)\\). Normal gradient = \\(-1/f'(a)\\).", "<strong>Parallel to a line:</strong> set f′(x) equal to that line's gradient and solve for the point(s).", "<strong>Given tangent line:</strong> use both 'same point' and 'same gradient' to get two equations."],
      traps: ["Normal gradient written as −m or 1/m instead of −1/m.", "Using f′(a) as the y-coordinate of the point.", "Not giving the equation in the requested form (ax + by + c = 0 with integers)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The tangent to \\(y = x^2\\) at x = 3 has gradient 6, so the normal has gradient −6.", "At x = 2 the gradient is 4, so the tangent is y − 4 = 4(x − 2), using the point (2, 4) for the curve y = x³ − 2x² + 1.", "The tangent at x = 1 is \\(y = 2x\\) because \\(f'(x) = 2x\\)."],
      tips: ["Write the point (a, f(a)) and the gradient on separate lines before the equation: each earns a mark."],
    },
    "math-12e": {
      formulas: ["\\(\\frac{d}{dx}\\sin x = \\cos x\\), \\(\\frac{d}{dx}\\cos x = -\\sin x\\)", "\\(\\frac{d}{dx}e^x = e^x\\), \\(\\frac{d}{dx}\\ln x = \\frac1x\\)", "chain: \\(\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}\\)", "product: \\((uv)' = u'v + uv'\\)", "quotient: \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\)"],
      methods: ["<strong>Chain rule:</strong> derivative of the outside × derivative of the inside: \\(\\frac{d}{dx}\\sin(3x^2) = 6x\\cos(3x^2)\\).", "<strong>Product/quotient:</strong> write u, v, u′, v′ in a small table first, then substitute into the rule.", "<strong>Log laws first:</strong> \\(\\ln(x^2) = 2\\ln x\\), \\(\\ln(5x) = \\ln 5 + \\ln x\\) make differentiation quicker.", "<strong>Simplify:</strong> factorise common factors such as \\(e^{2x}\\) at the end."],
      traps: ["Forgetting the chain rule on \\(e^{3x}\\) or \\(\\sin 2x\\).", "Quotient rule in the wrong order (uv′ − u′v).", "Writing \\(\\frac{d}{dx}\\ln(3x) = \\frac{1}{3x}\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\frac{d}{dx}e^{3x} = e^{3x}\\)", "\\(\\frac{d}{dx}(x^2\\sin x) = 2x\\cos x\\)", "\\(\\frac{d}{dx}\\ln(3x) = \\frac{1}{3x}\\)"],
      tips: ["\"Show that\" derivatives: write every step; the final line must match exactly."],
    },
    "math-12f": {
      formulas: ["\\(f''(x) = \\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(f'(x)\\right)\\)", "concave up: \\(f''(x) > 0\\)", "concave down: \\(f''(x) < 0\\)"],
      methods: ["<strong>Second derivative:</strong> simplify f′(x) fully, then differentiate again.", "<strong>Concavity intervals:</strong> solve f″(x) > 0 or f″(x) < 0 like any inequality.", "<strong>Graph links:</strong> zeros of f′ = stationary points of f; turning points of f′ = inflexions of f; f′ above the axis = f increasing."],
      traps: ["Confusing 'f′ is decreasing' (concave down) with 'f is decreasing' (f′ < 0).", "Reading a turning point of the graph of f′ as a maximum of f.", "Differentiating only once when f″ is asked."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The graph of f′ has a minimum at x = 1, so f has a minimum at x = 1.", "f″(x) < 0 for x < 1, so f is decreasing for x < 1.", "For \\(f(x) = x^3\\), \\(f''(x) = 3x^2\\)."],
      tips: ["When a graph is given, write which function it shows (f, f′ or f″) at the top of your working before reading anything from it."],
    },
    "math-12g": {
      formulas: ["stationary: \\(f'(x) = 0\\)", "\\(f''(x) > 0\\): local minimum; \\(f''(x) < 0\\): local maximum", "inflexion: \\(f''(x) = 0\\) and f″ changes sign"],
      methods: ["<strong>Stationary points:</strong> f'(x) = 0, then classify with f''(x) (> 0 min, < 0 max) or a sign diagram of f′.", "<strong>Optimisation:</strong> write one-variable function → differentiate → set = 0 → justify max/min → answer the question asked.", "<strong>Inflexion:</strong> solve f″ = 0 and show that f″ changes sign; check f′ there to see whether it is stationary."],
      traps: ["Point of inflexion needs f'' to <strong>change sign</strong>, not just f'' = 0.", "Giving the x-value when the question asks for the maximum value (y).", "Not rejecting solutions outside the domain (e.g. x = 15 for a box from a 30 cm sheet)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["For \\(f(x) = x^4\\), \\(f''(0) = 0\\), so the origin is a point of inflexion.", "Asked for the maximum value of f, the answer given is the x-coordinate of the maximum point.", "f′(2) = 0, so (2, f(2)) is a local maximum."],
      tips: ["Optimisation: write a sentence answer with units at the end (\"the maximum volume is 2000 cm³\")."],
      diagrams: [{ title: "\\(y = x^3 - 3x^2 - 9x + 2\\): max (−1, 7), min (3, −25)", x: [-3, 5], y: [-30, 12], curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 2 }], points: [{ at: [-1, 7], label: "max (−1, 7)" }, { at: [3, -25], label: "min (3, −25)" }] }],
    },
    "math-13": {
      formulas: ["\\(\\int ax^n dx = \\frac{ax^{n+1}}{n+1} + C\\ (n \\neq -1)\\)", "area \\(= \\int_a^b f(x)\\,dx\\) when \\(f(x) > 0\\)", "\\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\)"],
      methods: ["<strong>Integrate term by term:</strong> add 1 to the power, divide by the new power, add one + C.", "<strong>Find C</strong> using a given point straight away, and write f(x) in full.", "<strong>Area under a curve (Paper 2):</strong> find the limits (roots or given lines), write \\(\\int_a^b f(x)\\,dx\\), then use the GDC."],
      traps: ["Forgetting + C on indefinite integrals.", "Multiplying by the power instead of dividing (differentiating by mistake).", "Writing only the GDC value with no integral and limits."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\int 2x\\,dx = x^2\\)", "\\(\\int 3x^2\\,dx = 6x + C\\)", "Given f′(x) = 2x and f(1) = 4, f(x) = x² + 4."],
      tips: ["Paper 2: write the integral with limits, then give the GDC value - the written integral earns the method mark."],
    },
    "math-13b": {
      formulas: ["\\(\\int \\frac{1}{x}dx = \\ln|x| + C\\)", "\\(\\int e^{ax+b}dx = \\frac{1}{a}e^{ax+b} + C\\)", "\\(\\int \\sin(ax+b)dx = -\\frac1a\\cos(ax+b) + C\\)", "\\(\\int \\frac{g'(x)}{g(x)}dx = \\ln|g(x)| + C\\)"],
      methods: ["<strong>Reverse chain rule by inspection:</strong> \\(\\int 2x(x^2+1)^3dx = \\frac{(x^2+1)^4}{4} + C\\) - differentiate your answer to check.", "<strong>Linear inside:</strong> integrate the outside function and divide by a, the coefficient of x.", "<strong>Substitution:</strong> u = inside function, replace g′(x) dx by du, integrate, substitute back."],
      traps: ["\\(\\int \\frac{1}{x^2}dx \\neq \\ln x^2\\).", "Multiplying by a instead of dividing for \\(\\int f(ax + b)\\,dx\\).", "\\(\\int \\sin x\\,dx = \\cos x\\) (the minus sign is missing)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\int \\frac{1}{x^2}\\,dx = \\ln x^2 + c\\)", "\\(\\int e^{4x}\\,dx = 4e^{4x} + c\\)", "\\(\\int (x^2 + 1)^3\\,dx = \\frac{(x^2 + 1)^4}{4} + c\\)"],
      tips: ["If the derivative of the inside is missing (not just a constant factor), inspection does not work: expand first."],
    },
    "math-13c": {
      formulas: ["\\(\\int_a^b f(x)dx = F(b) - F(a)\\)", "\\(\\int_b^a f = -\\int_a^b f\\)", "area \\(= \\int_a^b |f(x)|\\,dx\\)", "Area = \\(\\int_a^b (f - g)\\,dx\\)"],
      methods: ["<strong>Exact value:</strong> \\([F(x)]_a^b\\), substitute upper minus lower, simplify with ln/e/π rules.", "<strong>Area below the axis:</strong> find the roots, split the integral, add absolute values.", "<strong>Area between curves:</strong> find intersections, then integrate (top − bottom)."],
      traps: ["Area below the x-axis gives a negative integral - split at the roots and take absolute values.", "Integrating across a root in one go, so areas cancel.", "Using bottom − top and reporting a negative area."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The area between \\(y = x^2 - 3x\\) and the x-axis for \\(0 \\le x \\le 4\\) is \\(\\left|\\int_0^4 (x^2 - 3x)\\,dx\\right| = \\frac{8}{3}\\).", "\\(\\int_1^3 (f(x) + 3)\\,dx = \\int_1^3 f(x)\\,dx + 3\\)", "\\(\\int_3^1 f(x)\\,dx = \\int_1^3 f(x)\\,dx\\)"],
      tips: ["Sketch the region first and shade it: it shows where to split and which curve is on top."],
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
