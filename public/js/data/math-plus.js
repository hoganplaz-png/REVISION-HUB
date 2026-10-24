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
      formulas: ["\\(a \\times 10^k,\\ 1 \\le a < 10,\\ k \\in \\mathbb{Z}\\)", "\\((a \\times 10^m)(b \\times 10^n) = ab \\times 10^{m+n}\\)", "\\(\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}\\)"],
      methods: [
        "<strong>Multiply / divide:</strong> work with the a-parts and the powers separately, then re-adjust so that 1 ≤ a &lt; 10: \\(32.4 \\times 10^3 = 3.24 \\times 10^4\\).",
        "<strong>Add / subtract:</strong> rewrite with the same power of 10 first: \\(6.3 \\times 10^4 - 8 \\times 10^3 = (6.3 - 0.8) \\times 10^4\\).",
        "<strong>Count the jump:</strong> moving the decimal point n places left adds n to k; moving it right subtracts n.",
        "<strong>GDC answers:</strong> 2.81E2 means \\(2.81 \\times 10^2\\); write it in proper notation and to 3 s.f.",
      ],
      traps: ["Leaving \\(12.8 \\times 10^{-3}\\) or \\(0.5 \\times 10^4\\) as the final answer - not standard form.", "Adding the powers when adding two numbers.", "Copying 'E' notation from the GDC into the answer.", "Sign of k: 0.000 45 has k = −4, not 4."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\((3.2 \\times 10^5)(4 \\times 10^{-8}) = 12.8 \\times 10^{-3}\\), which is in standard form.", "\\(3 \\times 10^4 + 5 \\times 10^3 = 8 \\times 10^7\\)", "\\(0.000\\,45 = 4.5 \\times 10^{4}\\)"],
      tips: ["Paper 1 standard-form questions are worth 2-3 marks: show the unadjusted answer (e.g. \\(24 \\times 10^3\\)) and then the adjusted one.", "When the question says 'in the form \\(a \\times 10^k\\), where \\(1 \\le a < 10\\), \\(k \\in \\mathbb{Z}\\)', any other form loses the final A1."],
    },
    "math-1b": {
      formulas: ["\\(u_n = u_1 + (n-1)d\\)", "\\(S_n = \\frac{n}{2}(2u_1 + (n-1)d)\\)", "\\(S_n = \\frac{n}{2}(u_1 + u_n)\\)"],
      table: { head: ["", "Arithmetic (AP)"], rows: [["Test", "\\(u_2 - u_1 = u_3 - u_2 = d\\)"], ["3 consecutive terms a, b, c", "\\(2b = a + c\\)"], ["Graph of \\(u_n\\) against n", "points on a straight line, gradient d"], ["Real-life cue", "\"increases by 50 each year\" → d = 50"]] },
      methods: [
        "<strong>Count terms correctly:</strong> number of terms = top − bottom + 1. \\(\\sum_{k=3}^{20}\\) has <strong>18</strong> terms, not 17.",
        "<strong>Two terms given → subtract:</strong> \\(u_{10} - u_4 = 6d\\). One step to d - no simultaneous equations needed.",
        "<strong>Sum of a linear sigma = number of terms × average of first and last.</strong> \\(\\sum_{k=1}^{20}(4k-1)\\): first 3, last 79 → 20 × 41 = 820.",
        "<strong>Given \\(S_n\\), find \\(u_n\\):</strong> \\(u_n = S_n - S_{n-1}\\) and \\(u_1 = S_1\\).",
        "<strong>Number of terms in an AP:</strong> n = (last − first) ÷ d + 1. Terms 7, 11, …, 83 → n = 20.",
        "<strong>\"Smallest n such that…\"</strong> (Paper 2): set up the inequality and use the GDC table, then state the integer.",
      ],
      traps: ["Writing nd instead of (n − 1)d.", "Mixing up \\(u_n\\) (one term) and \\(S_n\\) (a total).", "\\(\\sum_{k=1}^{n} c = cn\\), not c.", "Giving a non-integer n (e.g. 21.6) as the final answer."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(u_n = u_1 + nd\\)", "Asked for the sum of the first 10 terms, the answer given is \\(u_{10}\\).", "\\(\\sum_{k=1}^{10} 4 = 4\\)"],
      tips: ["Both arithmetic formulas are in the formula booklet - the 3-term relationship \\(2b = a + c\\) is not.", "For 'which term equals 403?' solve \\(u_1 + (n - 1)d = 403\\) and check n is a positive integer."],
    },
    "math-1c": {
      formulas: ["\\(u_n = u_1r^{n-1}\\)", "\\(S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r}\\)"],
      table: { head: ["", "Geometric (GP)"], rows: [["Test", "\\(u_2 \\div u_1 = u_3 \\div u_2 = r\\)"], ["3 consecutive terms a, b, c", "\\(b^2 = ac\\)"], ["Two terms \\(u_p, u_q\\)", "\\(r^{q-p} = u_q \\div u_p\\)"], ["Real-life cue", "\"increases by 5% each year\" → r = 1.05; \"loses 20%\" → r = 0.8"]] },
      methods: [
        "<strong>Two terms given → divide:</strong> \\(u_5 \\div u_2 = r^3\\).",
        "<strong>Choose the sum formula that keeps numbers positive:</strong> \\(\\frac{u_1(r^n - 1)}{r - 1}\\) for r &gt; 1, \\(\\frac{u_1(1 - r^n)}{1 - r}\\) for r &lt; 1.",
        "<strong>Find n:</strong> \\(u_1r^{n-1} > k\\) → take logs (Paper 1) or use a GDC table (Paper 2); round up.",
      ],
      traps: ["\\(r^2 = 4\\) gives \\(r = \\pm 2\\) - keep both until a condition removes one.", "\\(2 \\times 3^{n-1}\\) is not \\(6^{n-1}\\).", "Dividing by \\(\\ln r\\) when r &lt; 1 reverses an inequality."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(r^2 = 4\\), so \\(r = 2\\) (the root \\(r = -2\\) is dropped).", "\\(u_n = 2 \\times 3^{n-1} = 6^{n-1}\\)"],
      tips: ["Write the inequality and the GDC values either side of the answer (e.g. \\(S_{10} = 3069 < 5000 < S_{11} = 6141\\)) for full marks.", "Percentage increase of p% gives r = 1 + p/100."],
    },
    "math-1d": {
      formulas: ["\\(FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}\\)", "Depreciation: \\(V = V_0\\left(1 - \\frac{r}{100}\\right)^n\\)"],
      table: { head: ["Compounding", "k", "periods in n years"], rows: [["annually", "1", "n"], ["half-yearly", "2", "2n"], ["quarterly", "4", "4n"], ["monthly", "12", "12n"]] },
      methods: [
        "<strong>Periods and rate per period:</strong> 4.5% compounded quarterly for 6 years → 24 periods at 1.125% each.",
        "<strong>TVM:</strong> N = total periods, I% = annual rate, PV negative, PMT = 0 (single sum), P/Y = C/Y = k.",
        "<strong>Complete years:</strong> find the value at the two years either side of the target and state the first that works.",
        "<strong>Find a rate:</strong> \\(1 + \\frac{r}{100} = \\left(\\frac{FV}{PV}\\right)^{1/n}\\), or solve for I% on the TVM solver.",
      ],
      traps: ["Using n instead of kn for the number of periods.", "Entering 0.045 instead of 4.5 for I%.", "PV and FV with the same sign on the TVM solver.", "Rounding money to anything other than 2 d.p. (or the accuracy asked)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["$8000 at 4.5% compounded quarterly for 6 years: \\(8000(1.045)^{6}\\).", "A car worth $32 000 depreciating 15% a year is worth \\(32000 \\times 0.15^6\\) after 6 years."],
      tips: ["Financial maths in Paper 2: use the TVM solver but write down the values you entered (N, I%, PV, PMT, FV, P/Y, C/Y) for method marks.", "Depreciation is compound interest with a negative rate: \\(r = 1 - \\frac{\\text{rate}}{100}\\)."],
    },
    "math-1e": {
      formulas: ["\\(S_\\infty = \\frac{u_1}{1-r},\\ |r|<1\\)"],
      methods: [
        "<strong>Check |r| &lt; 1 first</strong> and write it as the reason (R1) before using \\(S_\\infty\\).",
        "<strong>Unknown in r:</strong> solve \\(-1 < r < 1\\) as a double inequality, e.g. \\(-1 < 2x - 1 < 1 \\Rightarrow 0 < x < 1\\).",
        "<strong>Recurring decimal:</strong> first term = the repeating block, r = \\(10^{-(\\text{length of block})}\\).",
        "<strong>Bouncing ball:</strong> total distance = first drop + 2 × \\(S_\\infty\\) of the rebounds.",
      ],
      traps: ["|r| &lt; 1 means −1 &lt; r &lt; 1; r = −2 has no sum to infinity - state the reason (R1).", "Using \\(S_\\infty\\) for a finite number of terms.", "Forgetting that a ball travels up and down after each bounce."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(r = -2\\), so \\(S_\\infty = \\frac{u_1}{1 - (-2)} = \\frac{u_1}{3}\\).", "The series converges when \\(2x - 1 < 1\\), i.e. x &lt; 1."],
      tips: ["Sanity check: for 0 &lt; r &lt; 1 the sum to infinity is larger than the first term.", "\\(S_\\infty\\) is in the formula booklet; the condition |r| &lt; 1 is what earns the R1."],
    },
    "math-2": {
      formulas: ["\\(a^m a^n = a^{m+n}\\)", "\\(\\frac{a^m}{a^n} = a^{m-n}\\)", "\\((a^m)^n = a^{mn}\\)", "\\(a^{-n} = \\frac{1}{a^n}\\)", "\\(a^x = b \\iff x = \\log_a b\\)"],
      methods: [
        "<strong>Same base trick:</strong> \\(8^x = 4^{x+1}\\) → \\(2^{3x} = 2^{2x+2}\\) → 3x = 2x + 2.",
        "<strong>Factor out the smallest power:</strong> \\(2^{x+3} - 2^x = 2^x(8 - 1) = 7 \\times 2^x\\).",
        "<strong>Evaluate a log:</strong> ask 'which power of the base gives this number?' - \\(\\log_3 \\frac{1}{81} = -4\\).",
        "<strong>Technology:</strong> log and ln keys give \\(\\log_{10}\\) and \\(\\log_e\\) values; give 3 s.f.",
      ],
      traps: ["\\((2x^3)^4 = 2x^{12}\\) - the 2 must be raised to the power too.", "\\(a^{-2}\\) is \\(\\frac{1}{a^2}\\), not \\(-a^2\\).", "\\(\\log_a b\\) needs b &gt; 0: \\(\\log 0\\) and \\(\\log(-3)\\) are undefined."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\((2x^3)^4 = 2x^{12}\\)", "\\(3^{-2} = -9\\)", "\\(\\log_2 8 = 4\\)"],
      tips: ["Know the powers of 2 up to \\(2^{10}\\) and of 3 up to \\(3^5\\) for Paper 1.", "\\(\\log_a 1 = 0\\) and \\(\\log_a a = 1\\) for every base."],
    },
    "math-2b": {
      formulas: ["\\(a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m\\)", "\\(\\log_a xy = \\log_a x + \\log_a y\\)", "\\(\\log_a x^m = m\\log_a x\\)", "\\(\\log_a x = \\frac{\\ln x}{\\ln a}\\)"],
      methods: [
        "<strong>Hidden quadratic:</strong> \\(9^x - 4\\cdot3^x + 3 = 0\\): let \\(y = 3^x\\) → \\(y^2 - 4y + 3 = 0\\). Reject any y ≤ 0.",
        "<strong>Combine logs first:</strong> turn \\(\\log a + \\log b = c\\) into one log, then un-log.",
        "<strong>Different bases:</strong> take ln of both sides, expand, collect the x terms, factorise.",
        "<strong>Change of base to one base:</strong> \\(\\log_4 x = \\frac{1}{2}\\log_2 x\\).",
      ],
      traps: ["There is <strong>no</strong> law for \\(\\log(a+b)\\).", "Log arguments must be positive - check every solution (x = −5 is often rejected).", "\\((\\ln x)^2 \\neq 2\\ln x\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(\\log(a + b) = \\log a + \\log b\\)", "\\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\) gives \\(x = \\pm 5\\), and both values are kept.", "\\((\\ln x)^2 = 2\\ln x\\)"],
      tips: ["Paper 1 wants exact answers like \\(\\frac{\\ln 7}{2\\ln 3}\\) - don't convert to decimals.", "Write the domain condition (e.g. x &gt; 8) beside a log equation before solving."],
    },
    "math-2c": {
      formulas: ["\\(N = N_0e^{kt}\\)", "\\(a^x = e^{x\\ln a}\\)", "doubling time \\(\\frac{\\ln 2}{k}\\)"],
      methods: [
        "<strong>Exponential models:</strong> \\(N = N_0e^{kt}\\): divide by \\(N_0\\) first, then take ln.",
        "<strong>Long-term value:</strong> in \\(T = c + Ae^{-kt}\\), T → c as t → ∞.",
        "<strong>Asymptotes move with translations:</strong> \\(y = e^x + 3\\) has asymptote y = 3; \\(y = \\ln(x - 2)\\) has asymptote x = 2.",
      ],
      traps: ["Forgetting the asymptote (as an equation) on a sketch.", "Giving the domain of \\(\\ln(x - 3)\\) as x ≥ 3 instead of x &gt; 3.", "Writing k with the wrong sign for decay."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The graph of \\(y = e^x + 3\\) has horizontal asymptote y = 0.", "The domain of \\(f(x) = \\ln(x - 3)\\) is x ≥ 3."],
      tips: ["\\(e^x\\) and \\(\\ln x\\) are inverses: reflections in y = x.", "In context questions answer with units and say what the asymptote means (e.g. room temperature)."],
      diagrams: [{ title: "\\(y = 2^x\\) and \\(y = e^{-x}\\)", x: [-3, 3], y: [-1, 6], curves: [{ f: (x) => Math.pow(2, x), label: "2ˣ", labelX: 2.2 }, { f: (x) => Math.exp(-x), color: "b", dash: true, label: "e⁻ˣ", labelX: -2.6 }], points: [{ at: [0, 1], label: "(0, 1)" }], hlines: [{ y: 0 }] }, { title: "\\(y = \\ln x\\)", x: [-1, 6], y: [-3, 3], curves: [{ f: (x) => Math.log(x), domain: [0.03, 6], label: "ln x", labelX: 4.8 }], points: [{ at: [1, 0], label: "(1, 0)" }], vlines: [{ x: 0, label: "x = 0" }] }],
    },
    "math-3": {
      formulas: ["even: 2n · odd: 2n + 1 · consecutive: n, n + 1"],
      table: { head: ["To show something is…", "Write it as"], rows: [["even", "2k, k ∈ ℤ"], ["odd", "2k + 1"], ["consecutive integers", "n, n + 1, n + 2"], ["a multiple of 8", "8 × (an integer expression)"]] },
      methods: [
        "<strong>Divisibility proofs:</strong> expand, collect, then factor out the number: \\((n+3)^2 - (n-1)^2 = 8(n+1)\\).",
        "<strong>Difference of squares saves time:</strong> \\(a^2 - b^2 = (a-b)(a+b)\\).",
        "<strong>Identities with fractions:</strong> combine the LHS over a common denominator and simplify until it matches the RHS.",
        "<strong>Disproof:</strong> one counterexample, with the calculation shown, is enough.",
      ],
      traps: ["In proofs: working on both sides at once, or starting from the conclusion.", "Checking a few numbers and calling it a proof.", "Missing the concluding sentence (it carries the R1)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["A \"show that\" proof that starts from the result and works on both sides until it reaches 0 = 0.", "\"The statement is true for n = 1, 2 and 3, so it is true for all n.\""],
      tips: ["Proof layout for full marks: LHS = … = … = RHS, one step per line, then a concluding sentence.", "One counterexample is a complete disproof."],
    },
    "math-3b": {
      formulas: ["\\((a+b)^n = \\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^r\\)", "\\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\)"],
      methods: [
        "<strong>Specific term:</strong> write the general term, collect the power of x, set it equal to the target, solve for r.",
        "<strong>Constant term:</strong> power of x = 0. In \\((x - \\frac{2}{x})^6\\): 6 − 2r = 0 → r = 3.",
        "<strong>Unknown constant:</strong> write the coefficient in terms of k, set it equal to the given value, solve (check k &gt; 0 if stated).",
        "<strong>Product with a binomial:</strong> \\((1 + 2x)(1 - x)^5\\): the \\(x^3\\) term comes from 1 × (x³ term) + 2x × (x² term).",
      ],
      traps: ["Forgetting the negative sign inside b, e.g. b = −2x means \\((-2x)^r\\).", "Giving the term instead of the coefficient (or vice versa) - read which is asked.", "Raising only x, not its coefficient: \\((2x)^3 = 8x^3\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The \\(x^3\\) term of \\((1 - 2x)^5\\) is \\(\\binom{5}{3}(2x)^3 = 80x^3\\).", "Asked for the coefficient of \\(x^3\\), the answer given is \\(40x^3\\)."],
      tips: ["\\(\\binom{n}{r}\\) is on the GDC (nCr) for Paper 2; in Paper 1 use Pascal's triangle or cancel factorials.", "Sum of all coefficients: put x = 1."],
    },
    "math-4": {
      formulas: ["\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)", "\\(y - y_1 = m(x - x_1)\\)", "\\(m_1m_2 = -1\\) (perpendicular)"],
      methods: [
        "<strong>Gradient from ax + by + d = 0:</strong> rearrange to y = …; m = −a/b.",
        "<strong>Perpendicular bisector:</strong> midpoint + negative reciprocal gradient, then \\(y - y_1 = m(x - x_1)\\).",
        "<strong>Integer form:</strong> multiply out fractions to give ax + by + d = 0 with a, b, d ∈ ℤ.",
        "<strong>Intersection:</strong> solve the two equations simultaneously (substitution or elimination).",
      ],
      traps: ["Inverting the gradient without changing the sign for a perpendicular line.", "Using \\(\\frac{x_2 - x_1}{y_2 - y_1}\\) (upside down).", "Leaving fractions when the question asks for integer coefficients."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The line perpendicular to y = 2x + 1 has gradient \\(\\frac{1}{2}\\).", "The gradient of 3x − 2y = 6 is 3."],
      tips: ["The equation of a straight line in point-gradient form is in the formula booklet.", "In a linear model, say what the gradient and intercept mean in context, with units."],
    },
    "math-4b": {
      formulas: ["domain of \\(f^{-1}\\) = range of f", "range of \\(f^{-1}\\) = domain of f"],
      methods: [
        "<strong>Largest domain:</strong> denominator ≠ 0, even root argument ≥ 0, log argument &gt; 0.",
        "<strong>Range:</strong> sketch, then use the vertex, asymptotes and end points.",
        "<strong>Inverse graph:</strong> reflect in y = x - swap the coordinates of key points and swap the asymptotes.",
        "<strong>Restrict to make one-to-one:</strong> cut a parabola at its vertex (x ≥ h or x ≤ h).",
      ],
      traps: ["\\(f^{-1}(x)\\) is <strong>not</strong> \\(\\frac{1}{f(x)}\\).", "Square-root inverses: choose + or − using the restricted domain.", "Forgetting end points on a restricted domain when stating the range."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(f^{-1}(x) = \\frac{1}{f(x)}\\)", "For \\(f(x) = x^2\\), \\(x \\le 0\\), the inverse is \\(f^{-1}(x) = \\sqrt{x}\\)."],
      tips: ["Domain of \\(f^{-1}\\) = range of f, and the asymptotes swap.", "Only one-to-one functions have an inverse - restrict the domain at the vertex for quadratics."],
    },
    "math-4c": {
      formulas: ["point on the graph: (a, f(a))"],
      methods: [
        "<strong>Sketch checklist:</strong> domain, intercepts, turning points, asymptotes (dashed, with equations), end points (● or ○).",
        "<strong>From the GDC:</strong> choose a window showing all key features, then copy the shape and label points to 3 s.f.",
        "<strong>Range from a graph:</strong> lowest and highest y-values on the domain, including end points.",
      ],
      traps: ["Drawing beyond the given domain.", "Unlabelled intercepts or turning points (each label is often a mark).", "Treating the range as the set of x-values."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["For \\(f(x) = x^2 - 4x + 1\\), \\(0 \\le x \\le 5\\), the range is \\(f(x) \\ge -3\\).", "A sketch of \\(y = 3 - 2x\\), \\(-1 \\le x < 4\\), drawn with a closed dot at (4, −5)."],
      tips: ["'Sketch' needs shape and labelled features; 'draw' needs accuracy on the given axes.", "In context, restrict the domain to sensible values (time ≥ 0)."],
    },
    "math-4d": {
      formulas: ["zeros: f(x) = 0 · intersections: f(x) = g(x)"],
      methods: [
        "<strong>Zeros, max and min:</strong> use the GDC's zero / maximum / minimum tools and give coordinates to 3 s.f.",
        "<strong>Intersections:</strong> graph both functions and use 'intersect' for each point, or find zeros of f(x) − g(x).",
        "<strong>Symmetry:</strong> a parabola is symmetric about \\(x = -\\frac{b}{2a}\\); an even function about the y-axis.",
      ],
      traps: ["A window that hides a zero or a turning point.", "Giving only the x-coordinate when the question asks for a point.", "Rounding an intermediate GDC value before using it."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The maximum value of \\(f(x) = xe^{-x}\\) is x = 1.", "Asked for the points of intersection, the answer given is x = 2.12."],
      tips: ["Write the functions you graphed: it earns the method mark if the answer is slightly off.", "If a zero or turning point isn't visible, zoom out or use a table."],
    },
    "math-4e": {
      formulas: ["\\((f\\circ g)(x) = f(g(x))\\)", "\\((f\\circ f^{-1})(x) = x\\)"],
      methods: [
        "<strong>Number inputs:</strong> for \\((f\\circ g)(2)\\), work out g(2) first as a number, then put it into f.",
        "<strong>\\(f^{-1}(a)\\) as a number:</strong> just solve f(x) = a - no need for the inverse formula.",
        "<strong>Inverse in 4 steps:</strong> write y = f(x) → swap x and y → make y the subject → state domain (= range of f).",
        "<strong>Rational inverse pattern:</strong> \\(\\frac{ax+b}{cx+d} \\to \\frac{dx-b}{-cx+a}\\) - use it to check your answer.",
        "<strong>Verify:</strong> \\((f\\circ f^{-1})(x) = x\\).",
      ],
      traps: ["Applying the outer function first in a composite.", "Forgetting to state the domain of \\(f^{-1}\\).", "Expanding \\((3x - 1)^2\\) as \\(9x^2 - 1\\)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["With \\(f(x) = 2x\\) and \\(g(x) = x + 1\\), \\((f \\circ g)(x) = 2x + 1\\).", "\\(f(x) = 2x - 3\\) has inverse \\(f^{-1}(x) = \\frac{x - 3}{2}\\)."],
      tips: ["\\(f \\circ g\\) and \\(g \\circ f\\) are usually different - read the order carefully.", "A function with \\((f \\circ f)(x) = x\\) is self-inverse."],
    },
    "math-5": {
      formulas: ["axis: \\(x = -\\frac{b}{2a}\\)", "\\(a(x - h)^2 + k\\): vertex (h, k)", "\\(a(x - p)(x - q)\\): roots p, q"],
      methods: [
        "<strong>Vertex without completing the square:</strong> h = −b/2a, then k = f(h).",
        "<strong>Axis from the roots:</strong> the midpoint of the roots, \\(x = \\frac{p + q}{2}\\).",
        "<strong>Maximum / minimum in context:</strong> the vertex gives the optimum value and where it occurs.",
        "<strong>Range:</strong> \\(f(x) \\ge k\\) if a &gt; 0, \\(f(x) \\le k\\) if a &lt; 0.",
      ],
      traps: ["Vertex of \\(a(x + 3)^2 - 1\\) is (−3, −1), not (3, −1).", "Forgetting to multiply by a when completing the square with a ≠ 1.", "Giving the vertex x-value as the maximum value."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The vertex of \\(y = 2(x + 3)^2 - 1\\) is (3, −1).", "\\(2x^2 - 12x + 13 = 2(x - 3)^2 + 4\\)"],
      tips: ["Label the vertex, both x-intercepts and the y-intercept on every parabola sketch."],
      diagrams: [{ title: "\\(y = x^2 - 2x - 3\\)", x: [-3, 5], y: [-5, 6], curves: [{ f: (x) => x * x - 2 * x - 3 }], points: [{ at: [-1, 0], label: "−1" }, { at: [3, 0], label: "3" }, { at: [1, -4], label: "vertex (1, −4)" }, { at: [0, -3], label: "(0, −3)" }] }],
    },
    "math-5b": {
      formulas: ["\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)", "\\(\\Delta = b^2 - 4ac\\)"],
      table: { head: ["Δ", "Roots", "Graph"], rows: [["Δ > 0", "two distinct real roots", "crosses the x-axis twice"], ["Δ = 0", "one repeated root", "touches the x-axis (tangent)"], ["Δ < 0", "no real roots", "never meets the x-axis"], ["Δ ≥ 0", "real roots", "meets the x-axis"]] },
      methods: [
        "<strong>Line meets curve:</strong> substitute, rearrange to = 0, use Δ. Tangent: Δ = 0; two points: Δ > 0; none: Δ < 0.",
        "<strong>\"Always positive\":</strong> a > 0 and Δ < 0.",
        "<strong>Quadratic inequalities in 3 steps:</strong> solve = 0 → sketch → read above (> 0) or below (< 0) the axis.",
        "<strong>Factorising with a ≠ 1:</strong> \\(2x^2 - 5x - 3\\): ac = −6 → −6 and 1 → (2x + 1)(x − 3).",
      ],
      traps: ["Dividing both sides by x loses the root x = 0 - factorise instead.", "Writing \"x < −2 and x > 3\" - impossible; it must be \"or\".", "\"Two distinct roots\" (Δ > 0) vs \"real roots\" (Δ ≥ 0)."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["Solving \\(x^2 = 3x\\) by dividing both sides by x, giving only x = 3.", "The solution of \\(x^2 - x - 6 > 0\\) written as \"x < −2 and x > 3\".", "\"The equation has real roots\", so \\(\\Delta > 0\\)."],
      tips: ["When Δ in terms of k gives another quadratic, solve it as an inequality - sketch it too."],
      diagrams: [{ title: "\\(x^2 - x - 6 < 0 \\Rightarrow -2 < x < 3\\)", x: [-4, 5], y: [-7, 6], shade: { from: -2, to: 3 }, curves: [{ f: (x) => x * x - x - 6, color: "c" }], points: [{ at: [-2, 0], label: "−2", color: "c" }, { at: [3, 0], label: "3", color: "c" }] }],
    },
    "math-6": {
      formulas: ["VA of \\(\\frac{ax+b}{cx+d}\\): \\(x = -\\frac{d}{c}\\)", "HA: \\(y = \\frac{a}{c}\\)"],
      methods: [
        "<strong>Rational function in 4 lines:</strong> VA: bottom = 0 · HA: ratio of x-coefficients · y-int: put x = 0 · x-int: top = 0.",
        "<strong>Rewrite as \\(p + \\frac{q}{x - h}\\)</strong> to read the asymptotes x = h and y = p directly.",
        "<strong>Self-inverse check:</strong> \\(\\frac{ax + b}{cx - a}\\) is self-inverse (d = −a).",
      ],
      traps: ["Sign errors in the VA: \\(\\frac{1}{x + 2}\\) has VA x = −2.", "HA of \\(\\frac{3x - 2}{4 - x}\\) is y = −3 (coefficient of x in the denominator is −1).", "Drawing a branch that crosses the vertical asymptote."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["The vertical asymptote of \\(y = \\frac{1}{x + 2}\\) is x = 2.", "The horizontal asymptote of \\(y = \\frac{3x - 2}{4 - x}\\) is y = 3."],
      tips: ["Asymptotes are written as equations (x = 3, y = 2), not just numbers."],
      diagrams: [{ title: "\\(y = \\frac{2x+1}{x-1}\\): VA x = 1, HA y = 2", x: [-5, 6], y: [-6, 8], curves: [{ f: (x) => (Math.abs(x - 1) < 0.02 ? NaN : (2 * x + 1) / (x - 1)) }], vlines: [{ x: 1, label: "x = 1" }], hlines: [{ y: 2, label: "y = 2" }], points: [{ at: [0, -1], label: "(0, −1)" }, { at: [-0.5, 0], label: "(−½, 0)" }] }],
    },
    "math-6b": {
      formulas: ["f(x) = g(x) ⇔ f(x) − g(x) = 0"],
      methods: [
        "<strong>Clear fractions</strong> by multiplying by the denominator, then solve the polynomial; exclude values that make a denominator zero.",
        "<strong>Substitution:</strong> \\(y = x^2\\), \\(y = \\sqrt{x}\\) or \\(y = e^x\\) to turn the equation into a quadratic.",
        "<strong>GDC:</strong> graph both sides and find every intersection; give the x-values to 3 s.f.",
      ],
      traps: ["Keeping \\(\\sqrt{x} = -2\\) or \\(e^x = -1\\), which have no solution.", "Missing a second intersection outside the default window.", "Giving y-values when the solutions of the equation (x-values) are asked for."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(x - 5\\sqrt{x} + 6 = 0\\) with \\(y = \\sqrt{x}\\) gives y = 2 or 3, so x = 2 or 3.", "The solution of \\(e^x = 3 - x^2\\) is given as the y-value of the intersection."],
      tips: ["When the question says 'solve', give the x-values; when it says 'find the points of intersection', give coordinates.", "If no analytic method exists (\\(e^{-x} = x\\)), a GDC answer with the set-up written is full marks."],
    },
    "math-6c": {
      formulas: ["\\(y = pf(q(x-h)) + k\\): \\((x, y) \\to (\\frac{x}{q} + h,\\ py + k)\\)"],
      table: { head: ["Transformation", "Effect", "(x, y) becomes"], rows: [["y = f(x) + b", "translate up b", "(x, y + b)"], ["y = f(x − a)", "translate right a", "(x + a, y)"], ["y = pf(x)", "vertical stretch, s.f. p", "(x, py)"], ["y = f(qx)", "horizontal stretch, s.f. 1/q", "(x/q, y)"], ["y = −f(x)", "reflect in x-axis", "(x, −y)"], ["y = f(−x)", "reflect in y-axis", "(−x, y)"]] },
      methods: [
        "<strong>Changes outside the bracket affect y and do what they say; inside affect x and do the opposite.</strong>",
        "<strong>Factor the inside first:</strong> f(2x − 6) = f(2(x − 3)) → translate right <strong>3</strong>, not 6.",
        "<strong>Asymptotes move with the graph:</strong> \\(y = e^x + 3\\) has HA y = 3.",
      ],
      traps: ["f(x + 3) moves <strong>left</strong> 3.", "f(2x) squashes horizontally (scale factor ½).", "Forgetting to move asymptotes and intercepts when sketching."],
      // the same traps as worked-wrong statements, for the "spot the mistake" questions
      mistakes: ["\\(y = f(x + 3)\\) is \\(y = f(x)\\) translated 3 units to the right.", "\\(y = f(2x)\\) is a horizontal stretch with scale factor 2.", "Sketching \\(y = \\frac{1}{x - 2} + 3\\) with its asymptotes still at x = 0 and y = 0."],
      tips: ["Use exact words: \"translation by vector \\(\\binom{a}{b}\\)\", \"vertical stretch with scale factor p\", \"reflection in the x-axis\"."],
      diagrams: [{ title: "grey \\(y = x^2\\) · accent \\(y = (x-2)^2 + 1\\) · dashed \\(y = -x^2\\)", x: [-3, 5], y: [-5, 7], curves: [{ f: (x) => x * x, color: "muted" }, { f: (x) => (x - 2) * (x - 2) + 1 }, { f: (x) => -x * x, color: "b", dash: true }], points: [{ at: [2, 1], label: "(2, 1)" }] }],
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
