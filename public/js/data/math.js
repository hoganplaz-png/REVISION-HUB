/* IB Mathematics: Analysis and Approaches SL - original IB-style notes and questions (2021+ guide). */
IB.register({
  id: "math",
  name: "Mathematics AA SL",
  short: "Math AA SL",
  color: "var(--math)",
  guide: "IB Mathematics: analysis and approaches guide (first assessment 2021)",
  assessment: [
    ["Paper 1 - no technology", "1h 30m", "80 marks", "40%", "Section A short-response, Section B extended-response. No calculator."],
    ["Paper 2 - technology required", "1h 30m", "80 marks", "40%", "Section A short-response, Section B extended-response. GDC required."],
    ["Internal assessment", "-", "20 marks", "20%", "Mathematical exploration (12-20 pages) on a topic of the student's choice."],
  ],
  papers: {
    P1: { name: "Paper 1 (no calculator)", minutes: 90, marks: 80, mix: { short: 12 } },
    P2: { name: "Paper 2 (calculator)", minutes: 90, marks: 80, mix: { short: 12 } },
  },
  commandTerms: [
    ["Show that", "Obtain the required result (possibly using information given). Every step must be shown; on Paper 1, or when the question says so, without a calculator."],
    ["Hence", "Use the preceding work to obtain the required result."],
    ["Hence or otherwise", "Using the preceding work is suggested but other methods could also receive credit."],
    ["Find / Calculate", "Obtain an answer showing relevant stages in the working."],
    ["Write down", "Obtain the answer(s) usually by extracting information - little or no calculation is required."],
    ["Sketch", "Represent by means of a diagram or graph showing the general shape and relevant features (intercepts, asymptotes, turning points)."],
  ],
  topics: [
    // ---------------- TOPIC 1 ----------------
    {
      id: "math-1", code: "1.1-1.4, 1.8", unit: "Topic 1: Number and algebra", title: "Sequences, series and financial maths",
      summary: "Standard form, arithmetic and geometric sequences and series, sigma notation, infinite geometric series, compound interest and depreciation.",
      concepts: [
        { h: "Standard form (1.1)", b: "<p>Scientific notation \\(a \\times 10^k\\) with \\(1 \\le a < 10\\), k ∈ ℤ, e.g. 0.000 452 = \\(4.52 \\times 10^{-4}\\). In Paper 1 multiply/divide by combining the a-parts and adding/subtracting the powers, then re-normalise: \\((6 \\times 10^5)(4 \\times 10^{3}) = 24 \\times 10^8 = 2.4 \\times 10^9\\).</p>" },
        { h: "Arithmetic sequences", b: "<p>Common difference d: $$u_n = u_1 + (n-1)d \\qquad S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right) = \\frac{n}{2}(u_1 + u_n)$$ Applications: simple interest, linear growth, seating rows.</p>" },
        { h: "Geometric sequences", b: "<p>Common ratio r: $$u_n = u_1 r^{n-1} \\qquad S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r},\\ r \\neq 1$$ Infinite sum converges only when \\(|r| < 1\\): $$S_\\infty = \\frac{u_1}{1 - r}$$</p>" },
        { h: "Sigma notation", b: "<p>\\(\\sum_{k=1}^{n} u_k\\) means add terms from k = 1 to n. The number of terms is (upper − lower + 1).</p>" },
        { h: "Compound interest", b: "<p>$$FV = PV \\times \\left(1 + \\frac{r}{100k}\\right)^{kn}$$ where k = compounding periods per year, n = years. Use the TVM solver on a GDC in Paper 2. Depreciation uses a negative rate.</p>" },
      ],
      terms: [
        ["Arithmetic sequence", "A sequence with a constant difference between consecutive terms."],
        ["Geometric sequence", "A sequence with a constant ratio between consecutive terms."],
        ["Convergent series", "A series whose sum approaches a finite limit as n → ∞."],
        ["Sigma notation", "Compact notation for a sum, Σ."],
      ],
      skills: [
        { h: "Form simultaneous equations", b: "When two terms are given, write each using the formula, e.g. \\(u_3 = u_1 + 2d = 11\\) and \\(u_8 = u_1 + 7d = 31\\), then solve." },
        { h: "Find n in a geometric series", b: "Use logarithms (Paper 1) or the GDC table/solver (Paper 2). Remember n must be an integer - round up for 'first exceeds'." },
      ],
      examples: [
        { q: "The 3rd term of an arithmetic sequence is 11 and the 8th term is 31. Find \\(u_1\\), d and \\(S_{20}\\).", a: "Subtracting: 5d = 20 → d = 4, \\(u_1 = 3\\). \\(S_{20} = \\frac{20}{2}(2\\times3 + 19\\times4) = 10(6 + 76) = 820\\)." },
        { q: "Find the sum to infinity of 12 + 6 + 3 + …", a: "\\(r = \\frac{1}{2}\\), \\(S_\\infty = \\frac{12}{1 - 1/2} = 24\\)." },
      ],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the 10th term of the arithmetic sequence 5, 8, 11, …?", options: ["29", "32", "35", "30"], answer: 1, ms: ["\\(u_{10} = 5 + 9 \\times 3 = 32\\)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "For which value of r does the geometric series with first term 4 have a sum to infinity of 16?", options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{1}{2}\\)", "\\(-\\frac{3}{4}\\)"], answer: 1, ms: ["\\(16 = \\frac{4}{1 - r} \\Rightarrow r = \\frac{3}{4}\\)."] },
        { type: "short", paper: "P1", marks: 4, diff: 2, numeric: { value: 820, tol: 0.5 }, q: "In an arithmetic sequence \\(u_3 = 11\\) and \\(u_8 = 31\\). Find the sum of the first 20 terms.", ms: ["Forming two equations \\(u_1 + 2d = 11,\\ u_1 + 7d = 31\\) [M1]", "\\(d = 4\\) [A1]", "\\(u_1 = 3\\) [A1]", "\\(S_{20} = 820\\) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 27, tol: 0.01 }, q: "Find the sum to infinity of the geometric series \\(18 + 6 + 2 + \\dots\\)", ms: ["\\(r = \\frac{1}{3}\\) [A1]", "\\(S_\\infty = \\frac{18}{1 - \\frac{1}{3}}\\) [M1]", "= 27 [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 6746.77, tol: 0.5 }, q: "Ana invests $5000 at 3% per annum compounded monthly. Find the value of the investment after 10 years, to the nearest cent.", ms: ["\\(5000\\left(1 + \\frac{3}{1200}\\right)^{120}\\) [M1][A1]", "= $6746.77 [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 3, numeric: { value: 11, tol: 0.01 }, q: "A geometric sequence has \\(u_1 = 3\\) and \\(r = 2\\). Find the least value of n for which \\(S_n > 5000\\).", ms: ["\\(\\frac{3(2^n - 1)}{2 - 1} > 5000\\) [M1]", "\\(2^n > 1667.67\\) [A1]", "\\(n > 10.7\\) [A1]", "n = 11 [A1]"] },
        { type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 55, tol: 0.01 }, q: "Evaluate \\(\\sum_{k=1}^{10} k\\).", ms: ["\\(\\frac{10}{2}(1 + 10)\\) [M1]", "= 55 [A1]"] },
      ],
    },
    {
      id: "math-2", code: "1.5, 1.7, 2.9", unit: "Topic 1: Number and algebra", title: "Exponents and logarithms",
      summary: "Laws of exponents and logs, change of base, solving exponential equations, and exponential models.",
      concepts: [
        { h: "Laws of exponents", b: "<p>$$a^m a^n = a^{m+n} \\quad \\frac{a^m}{a^n} = a^{m-n} \\quad (a^m)^n = a^{mn} \\quad a^{-n} = \\frac{1}{a^n} \\quad a^{\\frac{1}{n}} = \\sqrt[n]{a}$$</p>" },
        { h: "Logarithms", b: "<p>\\(a^x = b \\iff x = \\log_a b\\) (a &gt; 0, a ≠ 1, b &gt; 0). Laws: $$\\log_a xy = \\log_a x + \\log_a y \\quad \\log_a \\frac{x}{y} = \\log_a x - \\log_a y \\quad \\log_a x^m = m \\log_a x$$ Change of base: \\(\\log_a x = \\frac{\\log_b x}{\\log_b a}\\). Natural log \\(\\ln x = \\log_e x\\).</p>" },
        { h: "Exponential equations and models", b: "<p>Solve \\(a^x = b\\) by taking logs: \\(x = \\frac{\\ln b}{\\ln a}\\). Models: \\(N = N_0 e^{kt}\\) (growth if k &gt; 0, decay if k &lt; 0). Graph of \\(y = a^x\\) has horizontal asymptote y = 0 and passes through (0, 1); \\(y = \\log_a x\\) is its inverse, with vertical asymptote x = 0.</p>" },
      ],
      terms: [
        ["Logarithm", "\\(\\log_a b\\) is the power to which a must be raised to give b."],
        ["Natural logarithm", "Logarithm to base e ≈ 2.718."],
        ["Asymptote", "A line that a curve approaches but does not reach."],
      ],
      skills: [{ h: "Exact answers", b: "In Paper 1 leave answers as \\(\\ln 5\\), \\(\\frac{\\ln 3}{\\ln 2}\\), etc. unless told otherwise." }],
      examples: [
        { q: "Solve \\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\).", a: "\\(\\log_2(x^2 - 9) = 4 \\Rightarrow x^2 - 9 = 16 \\Rightarrow x = \\pm 5\\). Reject x = −5 (log of negative), so x = 5." },
        { q: "Solve \\(3^{2x} = 7\\), giving an exact answer.", a: "\\(2x \\ln 3 = \\ln 7 \\Rightarrow x = \\frac{\\ln 7}{2 \\ln 3}\\)." },
      ],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(\\log_3 81 =\\)", options: ["3", "4", "27", "\\(\\frac{1}{4}\\)"], answer: 1, ms: ["\\(3^4 = 81\\)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Simplify \\(\\log_a 12 - \\log_a 3 + 2\\log_a 2\\).", options: ["\\(\\log_a 4\\)", "\\(\\log_a 16\\)", "\\(\\log_a 13\\)", "\\(2\\log_a 4 + 1\\)"], answer: 1, ms: ["\\(\\log_a \\frac{12 \\times 4}{3} = \\log_a 16\\)."] },
        { type: "short", paper: "P1", marks: 5, diff: 3, numeric: { value: 5, tol: 0.001 }, q: "Solve \\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\).", ms: ["\\(\\log_2((x + 3)(x - 3)) = 4\\) [M1]", "\\(x^2 - 9 = 16\\) [A1]", "\\(x = \\pm 5\\) [A1]", "Reject x = −5 with reason [R1]", "x = 5 [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 13.4, tol: 0.06 }, q: "A population of bacteria is modelled by \\(N = 200e^{0.15t}\\), where t is in hours. Find the time taken for the population to reach 1500.", ms: ["\\(1500 = 200e^{0.15t}\\) [M1]", "\\(t = \\frac{\\ln 7.5}{0.15}\\) [A1]", "t = 13.4 hours (accept 13.4-13.5) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Solve \\(9^x - 4 \\times 3^x + 3 = 0\\).", ms: ["Let \\(y = 3^x\\): \\(y^2 - 4y + 3 = 0\\) [M1]", "\\(y = 1\\) or \\(y = 3\\) [A1]", "x = 0 or x = 1 [A1]"] },
        { type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 8, tol: 0.001 }, q: "Evaluate \\(16^{\\frac{3}{4}}\\).", ms: ["\\((\\sqrt[4]{16})^3 = 2^3\\) [M1]", "= 8 [A1]"] },
      ],
    },
    {
      id: "math-3", code: "1.6, 1.9", unit: "Topic 1: Number and algebra", title: "Proof and the binomial theorem",
      summary: "Simple deductive proof, LHS to RHS, and binomial expansion with \\(^nC_r\\).",
      concepts: [
        { h: "Deductive proof", b: "<p>Start from one side (usually the more complicated) and manipulate to obtain the other: LHS = … = RHS. Use symbols for general integers: even = 2n, odd = 2n + 1, consecutive = n, n + 1. Conclude with a statement.</p>" },
        { h: "Binomial theorem", b: "<p>$$(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r \\qquad \\binom{n}{r} = {}^nC_r = \\frac{n!}{r!(n-r)!}$$ Pascal's triangle gives coefficients for small n. The general term is \\(\\binom{n}{r}a^{n-r}b^r\\).</p>" },
      ],
      terms: [["Binomial coefficient", "\\(\\binom{n}{r}\\), the number of ways of choosing r items from n."], ["Identity", "An equation true for all values of the variable (≡)."]],
      skills: [{ h: "Finding a specific term", b: "Write the general term with powers of x, set the power equal to the target, solve for r, then evaluate. Include negative signs in b (e.g. b = −2x)." }],
      examples: [{ q: "Find the coefficient of \\(x^3\\) in \\((2 + x)^5\\).", a: "Term: \\(\\binom{5}{3}2^2x^3 = 10 \\times 4 x^3\\), coefficient 40." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(\\binom{6}{2} =\\)", options: ["12", "15", "30", "36"], answer: 1, ms: ["\\(\\frac{6 \\times 5}{2} = 15\\)."] },
        { type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 40, tol: 0.001 }, q: "Find the coefficient of \\(x^3\\) in the expansion of \\((2 + x)^5\\).", ms: ["Correct term \\(\\binom{5}{3}(2)^2(x)^3\\) [M1]", "\\(10 \\times 4\\) [A1]", "40 [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 3, numeric: { value: -160, tol: 0.001 }, q: "Find the constant term in the expansion of \\(\\left(x - \\frac{2}{x}\\right)^6\\).", ms: ["General term \\(\\binom{6}{r}x^{6-r}\\left(-\\frac{2}{x}\\right)^r\\) [M1]", "Power of x: 6 − 2r = 0 → r = 3 [A1]", "\\(\\binom{6}{3}(-2)^3 = 20 \\times (-8)\\) [M1]", "−160 [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Prove that the sum of any three consecutive integers is divisible by 3.", ms: ["Let integers be n, n + 1, n + 2 [M1]", "Sum = 3n + 3 = 3(n + 1) [A1]", "which is a multiple of 3 since n + 1 is an integer [R1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Show that \\((n + 1)^2 - (n - 1)^2 = 4n\\) for all n.", ms: ["Expand LHS: \\(n^2 + 2n + 1 - (n^2 - 2n + 1)\\) [M1]", "\\(= 4n\\) [A1]", "= RHS [AG]"] },
      ],
    },

    // ---------------- TOPIC 2 ----------------
    {
      id: "math-4", code: "2.1-2.5", unit: "Topic 2: Functions", title: "Functions: domain, range, composite and inverse",
      summary: "Equations of lines, function notation, domain and range, composite functions, inverse functions and graphs.",
      concepts: [
        { h: "Straight lines", b: "<p>Gradient \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Forms: \\(y = mx + c\\), \\(ax + by + d = 0\\), \\(y - y_1 = m(x - x_1)\\). Parallel lines: equal gradients. Perpendicular: \\(m_1 m_2 = -1\\).</p>" },
        { h: "Functions", b: "<p>A function maps each element of the <strong>domain</strong> to exactly one element of the <strong>range</strong>. Restrictions: no division by zero; even roots and logs need non-negative / positive arguments.</p>" },
        { h: "Composite and inverse functions", b: "<p>\\((f \\circ g)(x) = f(g(x))\\) - apply g first. Inverse \\(f^{-1}\\) exists only for one-to-one functions; swap x and y and rearrange. \\((f \\circ f^{-1})(x) = x\\). The graph of \\(f^{-1}\\) is the reflection of f in y = x. Domain of \\(f^{-1}\\) = range of f.</p>" },
      ],
      terms: [["Domain", "The set of input values for which a function is defined."], ["Range", "The set of output values of a function."], ["One-to-one", "Each output corresponds to exactly one input."]],
      skills: [{ h: "Using the GDC (Paper 2)", b: "Graph, find intersections, zeros, max/min; set a sensible window and sketch with labelled key points (to 3 s.f.)." }],
      examples: [{ q: "Given \\(f(x) = 2x - 3\\) and \\(g(x) = x^2 + 1\\), find \\((f \\circ g)(x)\\) and \\(f^{-1}(x)\\).", a: "\\(f(g(x)) = 2(x^2 + 1) - 3 = 2x^2 - 1\\). For the inverse: \\(y = 2x - 3 \\Rightarrow x = \\frac{y + 3}{2}\\), so \\(f^{-1}(x) = \\frac{x + 3}{2}\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the gradient of a line perpendicular to \\(y = 4x - 1\\)?", options: ["4", "−4", "\\(\\frac{1}{4}\\)", "\\(-\\frac{1}{4}\\)"], answer: 3, ms: ["\\(m_1 m_2 = -1\\)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "What is the largest possible domain of \\(f(x) = \\sqrt{5 - x}\\)?", options: ["x ≥ 5", "x ≤ 5", "x > 5", "all real x"], answer: 1, ms: ["Need 5 − x ≥ 0."] },
        { type: "short", paper: "P1", marks: 3, diff: 1, numeric: { value: 17, tol: 0.001 }, q: "Let \\(f(x) = 2x - 3\\) and \\(g(x) = x^2 + 1\\). Find \\((f \\circ g)(3)\\).", ms: ["g(3) = 10 [A1]", "f(10) = 2(10) − 3 [M1]", "= 17 [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = \\frac{3x + 1}{x - 2},\\ x \\neq 2\\). Find \\(f^{-1}(x)\\).", ms: ["Swap x and y: \\(x = \\frac{3y + 1}{y - 2}\\) [M1]", "\\(xy - 2x = 3y + 1 \\Rightarrow y(x - 3) = 2x + 1\\) [A1]", "\\(f^{-1}(x) = \\frac{2x + 1}{x - 3},\\ x \\neq 3\\) [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Find the equation of the line through A(1, 2) and B(5, 10). Give your answer in the form y = mx + c.", ms: ["\\(m = \\frac{10 - 2}{5 - 1} = 2\\) [M1][A1]", "\\(y - 2 = 2(x - 1)\\) [M1]", "y = 2x [A1]"] },
      ],
    },
    {
      id: "math-5", code: "2.6-2.7", unit: "Topic 2: Functions", title: "Quadratic functions and equations",
      summary: "Forms of quadratics, vertex and roots, the discriminant, and solving quadratic equations and inequalities.",
      concepts: [
        { h: "Three forms", b: "<p>Standard: \\(f(x) = ax^2 + bx + c\\) (y-intercept c, axis \\(x = -\\frac{b}{2a}\\)). Vertex: \\(a(x - h)^2 + k\\) (vertex (h, k)). Factorised: \\(a(x - p)(x - q)\\) (roots p, q).</p>" },
        { h: "Solving and the discriminant", b: "<p>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\qquad \\Delta = b^2 - 4ac$$ Δ &gt; 0: two distinct real roots; Δ = 0: one repeated root (tangent to x-axis); Δ &lt; 0: no real roots.</p>" },
        { h: "Quadratic formula and axis of symmetry", b: "<p>For $$ax^2+bx+c=0$$ the roots are $$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$ The graph of $$y=ax^2+bx+c$$ has <strong>axis of symmetry</strong> $$x=-\\frac{b}{2a}$$ (halfway between the roots), and the vertex lies on it: substitute this x to get the y-coordinate. In vertex form $$y=a(x-h)^2+k$$ the axis is x = h and the vertex (h, k). The roots are symmetric about the axis, so if you know one root and the axis you can find the other: $$x_2 = 2\\left(-\\frac{b}{2a}\\right)-x_1$$</p>" },
      ],
      terms: [["Discriminant", "\\(\\Delta = b^2 - 4ac\\), determining the number of real roots."], ["Vertex", "The turning point of a parabola."]],
      skills: [{ h: "Discriminant parameter questions", b: "When a line is tangent to a curve, substitute to get a quadratic and set Δ = 0. For 'no real roots' set Δ < 0 and solve the inequality." }],
      examples: [{ q: "Find the values of k for which \\(x^2 + kx + 9 = 0\\) has equal roots.", a: "\\(\\Delta = k^2 - 36 = 0 \\Rightarrow k = \\pm 6\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "The vertex of \\(y = 2(x - 3)^2 + 5\\) is:", options: ["(3, 5)", "(−3, 5)", "(3, −5)", "(2, 5)"], answer: 0, ms: ["A - in the form \\(a(x - h)^2 + k\\) the vertex is (h, k) = (3, 5)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "How many real roots does \\(2x^2 - 3x + 5 = 0\\) have?", options: ["0", "1", "2", "3"], answer: 0, ms: ["\\(\\Delta = 9 - 40 < 0\\)."] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Find the values of k for which \\(x^2 + kx + 9 = 0\\) has two equal real roots.", ms: ["\\(\\Delta = k^2 - 4(1)(9)\\) [M1]", "\\(k^2 - 36 = 0\\) [A1]", "k = ±6 [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Write \\(x^2 - 6x + 11\\) in the form \\((x - h)^2 + k\\) and hence state the coordinates of the vertex of \\(y = x^2 - 6x + 11\\).", ms: ["\\((x - 3)^2 - 9 + 11\\) [M1]", "\\((x - 3)^2 + 2\\), so h = 3 [A1]", "k = 2 [A1]", "Vertex (3, 2) [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 3, q: "Find the range of values of m for which the line y = mx − 1 does not meet the curve \\(y = x^2 + 3\\).", ms: ["\\(x^2 - mx + 4 = 0\\) [M1]", "No intersection: \\(\\Delta < 0 \\Rightarrow m^2 - 16 < 0\\) [M1][A1]", "−4 < m < 4 [A1]"] },
      ],
    },
    {
      id: "math-6", code: "2.8-2.11", unit: "Topic 2: Functions", title: "Rational, exponential & log functions and transformations",
      summary: "Reciprocal and rational functions, asymptotes, solving equations graphically, and transformations of graphs.",
      concepts: [
        { h: "Rational functions", b: "<p>\\(f(x) = \\frac{ax + b}{cx + d}\\): vertical asymptote \\(x = -\\frac{d}{c}\\), horizontal asymptote \\(y = \\frac{a}{c}\\). Reciprocal \\(f(x) = \\frac{1}{x}\\) is self-inverse.</p>" },
        { h: "Transformations", b: "<table><tr><th>Function</th><th>Transformation</th></tr><tr><td>\\(f(x) + b\\)</td><td>vertical translation by b</td></tr><tr><td>\\(f(x - a)\\)</td><td>horizontal translation by a (right)</td></tr><tr><td>\\(pf(x)\\)</td><td>vertical stretch, scale factor p</td></tr><tr><td>\\(f(qx)\\)</td><td>horizontal stretch, scale factor \\(\\frac{1}{q}\\)</td></tr><tr><td>\\(-f(x)\\)</td><td>reflection in the x-axis</td></tr><tr><td>\\(f(-x)\\)</td><td>reflection in the y-axis</td></tr></table><p>Order matters: apply horizontal and vertical transformations step by step; translation vectors written \\(\\begin{pmatrix} a \\\\ b \\end{pmatrix}\\).</p>" },
      ],
      terms: [["Vertical asymptote", "A line x = k which the graph approaches as f(x) → ±∞."], ["Translation", "A shift of every point by the same vector."]],
      skills: [{ h: "Describing transformations", b: "Use precise language: 'translation by the vector (2, −3)', 'horizontal stretch with scale factor ½', 'reflection in the x-axis'." }],
      examples: [{ q: "State the asymptotes of \\(f(x) = \\frac{2x + 1}{x - 3}\\).", a: "Vertical: x = 3. Horizontal: y = 2." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "The graph of y = f(x − 2) + 3 is the graph of y = f(x) translated by:", options: ["\\(\\binom{2}{3}\\)", "\\(\\binom{-2}{3}\\)", "\\(\\binom{2}{-3}\\)", "\\(\\binom{3}{2}\\)"], answer: 0, ms: ["Right 2, up 3."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Which is the horizontal asymptote of \\(y = \\frac{4x - 1}{2x + 5}\\)?", options: ["y = 4", "y = 2", "\\(x = -\\frac{5}{2}\\)", "\\(y = -\\frac{1}{5}\\)"], answer: 1, ms: ["\\(\\frac{a}{c} = \\frac{4}{2} = 2\\)."] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Describe fully a sequence of two transformations that maps \\(y = x^2\\) onto \\(y = 3(x + 1)^2\\).", ms: ["Horizontal translation by −1 / vector (−1, 0) [A1]", "Vertical stretch [A1]", "scale factor 3 [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 0.567, tol: 0.002 }, q: "Use your GDC to solve \\(e^{-x} = x\\), giving your answer to 3 significant figures.", ms: ["Graph y = e^{-x} and y = x or use solver [M1]", "Intersection shown/stated [A1]", "x = 0.567 [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Let \\(f(x) = \\frac{2x + 1}{x - 3}\\). Write down the equations of the asymptotes and the coordinates of the axis intercepts.", ms: ["Vertical asymptote x = 3 [A1]", "Horizontal asymptote y = 2 [A1]", "x-intercept \\((-\\frac{1}{2}, 0)\\) [A1]", "y-intercept \\((0, -\\frac{1}{3})\\) [A1]"] },
      ],
    },

    // ---------------- TOPIC 3 ----------------
    {
      id: "math-7", code: "3.1", unit: "Topic 3: Geometry and trigonometry", title: "3D geometry: distance, midpoint, volume and surface area",
      summary: "Distance and midpoint in 3D, volume and surface area of prisms, pyramids, cones, spheres and hemispheres, and the angle between a line and a plane.",
      concepts: [
        { h: "3D shapes and coordinates", b: "<p>Distance \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\\). Volumes: cone \\(\\frac{1}{3}\\pi r^2h\\), sphere \\(\\frac{4}{3}\\pi r^3\\), pyramid \\(\\frac{1}{3}Ah\\). Surface area: sphere \\(4\\pi r^2\\), cone curved \\(\\pi r l\\). Angle between a line and a plane using right-angled triangles.</p>" },
        { h: "Angle between a line and a plane", b: "<p>Drop a perpendicular from the top of the line to the plane; the angle is between the line and its <strong>projection</strong> on the plane. Form a right-angled triangle (height, projection, line) and use \\(\\tan\\theta = \\frac{\\text{height}}{\\text{projection}}\\). For a right pyramid the apex is above the centre of the base, so the projection of a slant edge is half a base diagonal.</p>" },
        { h: "Composite solids", b: "<p>Split the solid into standard parts (cylinder, cone, hemisphere, pyramid) and add the volumes. For surface area add only the <strong>exposed</strong> faces: a cylinder topped with a hemisphere has the curved cylinder, the curved hemisphere and one circular base.</p>" },
      ],
      terms: [
        ["Right pyramid", "A pyramid whose apex is directly above the centre of its base."],
        ["Slant height", "The distance from the apex of a cone to a point on the edge of its base, l = √(r² + h²)."],
      ],
      skills: [
        { h: "Draw it flat", b: "For every 3D angle question redraw the right-angled triangle you are using as a flat 2D sketch with its lengths marked." },
      ],
      examples: [
        { q: "Find the distance between A(1, 2, 3) and B(4, −2, 15), and the midpoint of AB.", a: "\\(AB = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{169} = 13\\). Midpoint \\(\\left(\\frac{5}{2}, 0, 9\\right)\\)." },
      ],
      questions: [
        { id: "math-7-q5", type: "short", paper: "P2", marks: 2, diff: 1, numeric: { value: 5.83, tol: 0.01 }, q: "Find the distance between A(1, 2, 3) and B(4, −1, 7).", ms: ["\\(\\sqrt{3^2 + (-3)^2 + 4^2}\\) [M1]", "= \\(\\sqrt{34}\\) = 5.83 [A1]"] },
      ],
    },
    {
      id: "math-7b", code: "3.2", unit: "Topic 3: Geometry and trigonometry", title: "Right-angled and non-right-angled trigonometry",
      summary: "SOH CAH TOA and Pythagoras, the sine rule, the cosine rule and the area of a triangle ½ab sin C.",
      concepts: [
        { h: "Non-right-angled triangles", b: "<p>Sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\) (ambiguous case when given two sides and a non-included angle). Cosine rule: \\(c^2 = a^2 + b^2 - 2ab\\cos C\\), \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\). Area \\(= \\frac{1}{2}ab\\sin C\\).</p>" },
        { h: "Right-angled triangles", b: "<p>SOH CAH TOA: \\(\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}\\), \\(\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}\\), \\(\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}\\), and Pythagoras \\(a^2 + b^2 = c^2\\). Use them whenever the triangle has a right angle - they are quicker than the sine or cosine rule.</p>" },
        { h: "Choosing the rule", b: "<p>SAS (two sides and the included angle) → cosine rule for the third side, then area \\(\\frac{1}{2}ab\\sin C\\). SSS → cosine rule rearranged for an angle; the largest angle is opposite the longest side. Two angles and a side, or a side and the angle opposite it → sine rule.</p>" },
      ],
      terms: [
        ["Included angle", "The angle between two given sides of a triangle."],
        ["Cosine rule", "c² = a² + b² − 2ab cos C, relating the three sides and one angle of any triangle."],
      ],
      skills: [
        { h: "Calculator mode", b: "Check degrees vs radians before every trig calculation in Paper 2. A wrong mode loses all accuracy marks." },
      ],
      examples: [
        { q: "In triangle ABC, a = 7, b = 9, C = 60°. Find c and the area.", a: "\\(c^2 = 49 + 81 - 2(7)(9)(0.5) = 67\\), c = 8.19. Area = \\(\\frac{1}{2}(7)(9)\\sin 60° = 27.3\\)." },
      ],
      questions: [
        { id: "math-7-q2", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 8.19, tol: 0.01 }, q: "In triangle ABC, BC = 7 cm, AC = 9 cm and angle ACB = 60°. Find AB.", ms: ["\\(AB^2 = 7^2 + 9^2 - 2(7)(9)\\cos 60°\\) [M1]", "\\(AB^2 = 67\\) [A1]", "AB = 8.19 cm [A1]"] },
        { id: "math-7-q4", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 10.4, tol: 0.05 }, q: "Find the area of triangle PQR with PQ = 5 cm, PR = 6 cm and angle QPR = 44°.", ms: ["\\(\\frac{1}{2}(5)(6)\\sin 44°\\) [M1][A1]", "= 10.4 cm² [A1]"] },
      ],
    },
    {
      id: "math-7c", code: "3.3", unit: "Topic 3: Geometry and trigonometry", title: "Applications of trigonometry: elevation, depression and bearings",
      summary: "Applications of right and non-right angled trigonometry: angles of elevation and depression, bearings and labelled diagrams drawn from written statements.",
      concepts: [
        { h: "Applications: bearings, elevation and depression (3.3)", b: "<p>A <strong>true bearing</strong> is measured clockwise from north, written with three figures (e.g. 065°). The <strong>angle of elevation</strong> is measured up from the horizontal, the <strong>angle of depression</strong> down from the horizontal; they are equal by alternate angles. Draw a diagram with a north line at every point, then use right-angled trig or the sine/cosine rule.</p>" },
        { h: "Labelled diagrams from written statements", b: "<p>Read the question sentence by sentence and add each fact to the sketch: points, distances, angles, north lines and right angles. Mark the unknown with a letter. Then pick the triangle that contains the unknown and two or three known facts; two-step problems (two angles of elevation, a ship that changes course) need a second triangle that shares a side with the first.</p>" },
      ],
      terms: [
        ["Angle of elevation", "The angle measured upwards from the horizontal to the line of sight."],
        ["Angle of depression", "The angle measured downwards from the horizontal to the line of sight."],
        ["True bearing", "A direction measured clockwise from north, written with three figures."],
      ],
      skills: [
        { h: "North lines", b: "Draw a north line at every point where a bearing is measured or used; most bearings errors come from measuring at the wrong point." },
      ],
      examples: [
        { q: "From the top of a cliff 40 m high the angle of depression of a boat is 60°. Find the horizontal distance from the foot of the cliff to the boat.", a: "The angle of elevation from the boat is also 60° (alternate angles). \\(\\tan 60° = \\frac{40}{d}\\), so \\(d = \\frac{40}{\\tan 60°} = 23.1\\) m." },
      ],
      questions: [

      ],
    },
    {
      id: "math-7d", code: "3.4", unit: "Topic 3: Geometry and trigonometry", title: "The circle: radians, arc length and sector area",
      summary: "Radian measure, converting between degrees and radians, arc length, sector area and perimeter, and segments of a circle.",
      concepts: [
        { h: "Radians", b: "<p>\\(\\pi\\) rad = 180°. Arc length \\(l = r\\theta\\); sector area \\(A = \\frac{1}{2}r^2\\theta\\) (θ in radians). Segment area = sector − triangle = \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\).</p>" },
        { h: "Arcs, sectors and perimeters", b: "<p>A sector with radius r and angle θ (radians) has arc length \\(l = r\\theta\\), area \\(A = \\frac{1}{2}r^2\\theta\\) and perimeter \\(2r + r\\theta\\). If θ is given in degrees, convert first (× π/180) or use the fractions \\(\\frac{\\theta}{360} \\times 2\\pi r\\) and \\(\\frac{\\theta}{360} \\times \\pi r^2\\).</p>" },
      ],
      terms: [
        ["Radian", "The angle subtended at the centre of a circle by an arc equal in length to the radius."],
        ["Sector", "The region of a circle bounded by two radii and the arc between them."],
      ],
      skills: [
        { h: "Exact answers", b: "In Paper 1 leave answers in terms of π (e.g. 6π cm²) unless told otherwise; a decimal can lose the final A1." },
      ],
      examples: [
        { q: "A sector has radius 6 cm and angle \\(\\frac{\\pi}{3}\\). Find the exact arc length and area.", a: "\\(l = 6 \\times \\frac{\\pi}{3} = 2\\pi\\) cm; \\(A = \\frac{1}{2}(36)\\frac{\\pi}{3} = 6\\pi\\) cm²." },
      ],
      questions: [
        { id: "math-7-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Convert 135° to radians.", options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{5\\pi}{6}\\)"], answer: 2, ms: ["\\(135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}\\)."] },
        { id: "math-7-q3", type: "short", paper: "P1", marks: 4, diff: 2, q: "A sector of a circle has radius 6 cm and angle \\(\\frac{\\pi}{3}\\). Find (a) the arc length, (b) the area of the sector, giving exact answers.", ms: ["Arc \\(= 6 \\times \\frac{\\pi}{3}\\) [M1]", "\\(= 2\\pi\\) cm [A1]", "Area \\(= \\frac{1}{2}(36)\\frac{\\pi}{3}\\) [M1]", "\\(= 6\\pi\\) cm² [A1]"] },
      ],
    },
    {
      id: "math-8", code: "3.5", unit: "Topic 3: Geometry and trigonometry", title: "The unit circle, exact values and the ambiguous case",
      summary: "Sine and cosine defined on the unit circle, tan θ = sin θ / cos θ, exact values of special angles and their multiples, and the ambiguous case of the sine rule.",
      concepts: [
        { h: "Unit circle and exact values", b: "<p>\\(\\cos\\theta\\) = x-coordinate, \\(\\sin\\theta\\) = y-coordinate on the unit circle; \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\). Exact values for 0, \\(\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\): sin = 0, ½, \\(\\frac{\\sqrt2}{2}\\), \\(\\frac{\\sqrt3}{2}\\), 1. CAST diagram for signs in each quadrant.</p>" },
        { h: "The ambiguous case of the sine rule", b: "<p>Given two sides and a non-included angle (SSA), the sine rule gives \\(\\sin B = k\\). If \\(0 < k < 1\\) there are two angles, \\(B\\) and \\(180° - B\\), because \\(\\sin\\theta = \\sin(180° - \\theta)\\) on the unit circle. Both give a triangle if the angle sum stays below 180°; this happens when the side opposite the given angle is shorter than the other given side.</p>" },
      ],
      terms: [
        ["Ambiguous case", "When the sine rule gives two possible triangles (acute and obtuse angle)."],
        ["Unit circle", "The circle of radius 1 centred at the origin; the point at angle θ has coordinates (cos θ, sin θ)."],
      ],
      skills: [
        { h: "Exact values", b: "Learn sin, cos and tan of 0, π/6, π/4, π/3 and π/2, then use the quadrant signs (CAST) and symmetry for their multiples." },
      ],
      examples: [
        { q: "Find the exact value of \\(\\cos\\frac{4\\pi}{3}\\).", a: "\\(\\frac{4\\pi}{3} = \\pi + \\frac{\\pi}{3}\\) is in the third quadrant, where cos is negative, so \\(\\cos\\frac{4\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}\\)." },
      ],
      questions: [
        { id: "math-8-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the exact value of \\(\\cos\\frac{\\pi}{6}\\)?", options: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt2}{2}\\)", "\\(\\frac{\\sqrt3}{2}\\)", "\\(\\sqrt3\\)"], answer: 2, ms: ["C - \\(\\cos\\frac{\\pi}{6} = \\cos 30° = \\frac{\\sqrt3}{2}\\) (exact values are not in the formula booklet)."] },
        { id: "math-8-n1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Which of the following is equal to \\(\\sin\\frac{2\\pi}{3}\\)?", options: ["\\(\\sin\\frac{\\pi}{3}\\)", "\\(\\cos\\frac{\\pi}{3}\\)", "\\(-\\sin\\frac{\\pi}{3}\\)", "\\(\\sin\\frac{\\pi}{6}\\)"], answer: 0, ms: ["A - \\(\\sin(\\pi - \\theta) = \\sin\\theta\\), so \\(\\sin\\frac{2\\pi}{3} = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt3}{2}\\)."] },
        { id: "math-8-n2", type: "short", paper: "P1", marks: 3, diff: 2, q: "The point P lies on the unit circle at an angle of \\(\\frac{7\\pi}{6}\\) measured anticlockwise from the positive x-axis. Find the exact coordinates of P and the exact value of \\(\\tan\\frac{7\\pi}{6}\\).", ms: ["\\(x = \\cos\\frac{7\\pi}{6} = -\\frac{\\sqrt3}{2}\\) [A1]", "\\(y = \\sin\\frac{7\\pi}{6} = -\\frac{1}{2}\\) [A1]", "\\(\\tan\\frac{7\\pi}{6} = \\frac{-1/2}{-\\sqrt3/2} = \\frac{\\sqrt3}{3}\\) [A1]"] },
        { id: "math-8-n3", type: "short", paper: "P2", marks: 4, diff: 2, q: "In triangle PQR, PQ = 12 cm, QR = 8 cm and angle QPR = 38°. Find the two possible values of angle PRQ, and explain why there are two.", ms: ["\\(\\frac{\\sin R}{12} = \\frac{\\sin 38°}{8}\\) [M1]", "\\(\\sin R = 0.923\\) [A1]", "R = 67.4° or R = 180° − 67.4° = 112.6° [A1]", "two triangles because QR is shorter than PQ and 38° + 112.6° < 180° [R1]"] },
      ],
    },
    {
      id: "math-8b", code: "3.6", unit: "Topic 3: Geometry and trigonometry", title: "Trigonometric identities: Pythagorean and double angle",
      summary: "The Pythagorean identity, the double angle identities for sine and cosine, and finding one trigonometric ratio from another.",
      concepts: [
        { h: "Identities", b: "<p>$$\\sin^2\\theta + \\cos^2\\theta = 1 \\qquad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$ $$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$</p>" },
        { h: "Relationships between the ratios", b: "<p>Given one ratio and the quadrant, find the others: use \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) (or a right-angled triangle for the reference angle), then choose the sign from the quadrant. \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\) links all three. Double angles follow: \\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\), and \\(\\cos 2\\theta\\) in whichever form uses what you know.</p>" },
      ],
      terms: [
        ["Identity", "An equation that is true for every value of the variable, often written with ≡."],
        ["Double angle identity", "A formula for sin 2θ or cos 2θ in terms of sin θ and cos θ."],
      ],
      skills: [
        { h: "Show that", b: "Start from one side (usually the more complicated one) and work to the other; never work on both sides at once or start from the answer." },
      ],
      examples: [
        { q: "Given \\(\\cos\\theta = -\\frac{5}{13}\\) and \\(\\pi < \\theta < \\frac{3\\pi}{2}\\), find \\(\\sin\\theta\\) and \\(\\sin 2\\theta\\).", a: "\\(\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}\\); sin is negative in the third quadrant, so \\(\\sin\\theta = -\\frac{12}{13}\\). \\(\\sin 2\\theta = 2\\left(-\\frac{12}{13}\\right)\\left(-\\frac{5}{13}\\right) = \\frac{120}{169}\\)." },
      ],
      questions: [
        { id: "math-8-q3", type: "short", paper: "P1", marks: 4, diff: 2, q: "Given that \\(\\sin\\theta = \\frac{3}{5}\\) and \\(\\frac{\\pi}{2} < \\theta < \\pi\\), find the exact value of (a) \\(\\cos\\theta\\), (b) \\(\\sin 2\\theta\\).", ms: ["\\(\\cos^2\\theta = 1 - \\frac{9}{25}\\) [M1]", "\\(\\cos\\theta = -\\frac{4}{5}\\) (negative in Q2) [A1]", "\\(\\sin 2\\theta = 2 \\times \\frac{3}{5} \\times (-\\frac{4}{5})\\) [M1]", "\\(= -\\frac{24}{25}\\) [A1]"] },
      ],
    },
    {
      id: "math-8c", code: "3.7", unit: "Topic 3: Geometry and trigonometry", title: "Circular functions: graphs, transformations and models",
      summary: "Graphs of sin x, cos x and tan x, amplitude, period and principal axis, transformations of y = a sin(b(x − c)) + d, and periodic models in context.",
      concepts: [
        { h: "Graphs and transformations", b: "<p>\\(y = a\\sin(b(x - c)) + d\\): amplitude |a|, period \\(\\frac{2\\pi}{b}\\), horizontal shift c, principal axis y = d. Used to model periodic phenomena (tides, Ferris wheels, daylight hours).</p>" },
        { h: "The graphs of sin, cos and tan", b: "<p>\\(y = \\sin x\\) and \\(y = \\cos x\\) have period \\(2\\pi\\), range −1 ≤ y ≤ 1 and amplitude 1; cos starts at its maximum and sin starts at 0. \\(y = \\tan x\\) has period \\(\\pi\\), no amplitude and vertical asymptotes at \\(x = \\frac{\\pi}{2} + k\\pi\\). For \\(y = a\\sin(bx) + d\\) the range is \\(d - |a| \\le y \\le d + |a|\\).</p>" },
      ],
      terms: [
        ["Period", "The length of one complete cycle of a periodic function."],
        ["Amplitude", "Half the distance between the maximum and minimum values."],
        ["Principal axis", "The horizontal line y = d about which a sinusoidal graph oscillates, halfway between the maximum and minimum."],
      ],
      skills: [
        { h: "Read the parameters", b: "From a graph or a context: a = (max − min)/2, d = (max + min)/2 and b = 2π/period; whether the cycle starts at a maximum, a minimum or the axis decides cos, −cos or sin." },
      ],
      examples: [
        { q: "Write down the amplitude, period and range of \\(y = 3\\sin(2x) + 1\\).", a: "Amplitude 3, period \\(\\frac{2\\pi}{2} = \\pi\\), range \\(-2 \\le y \\le 4\\)." },
      ],
      questions: [
        { id: "math-8-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "The period of \\(y = 3\\sin(4x) + 1\\) is:", options: ["\\(4\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(2\\pi\\)"], answer: 1, ms: ["\\(\\frac{2\\pi}{4} = \\frac{\\pi}{2}\\)."] },
        { id: "math-8-q5", type: "short", paper: "P2", marks: 4, diff: 2, q: "The height of a Ferris wheel seat is \\(h(t) = 20 - 18\\cos\\left(\\frac{\\pi t}{15}\\right)\\) metres, t in minutes. Find (a) the maximum height, (b) the period, (c) the first time the seat is at 30 m.", ms: ["Max = 38 m [A1]", "Period = \\(\\frac{2\\pi}{\\pi/15}\\) = 30 minutes [A1]", "Solve \\(20 - 18\\cos(\\frac{\\pi t}{15}) = 30\\) [M1]", "t = 10.3 minutes [A1]"] },
      ],
    },
    {
      id: "math-8d", code: "3.8", unit: "Topic 3: Geometry and trigonometry", title: "Solving trigonometric equations",
      summary: "Solving trigonometric equations on a finite interval, analytically and graphically, including equations that lead to quadratics in sin x, cos x or tan x.",
      concepts: [
        { h: "Solving trig equations", b: "<p>Find the principal value, use symmetry (sin: \\(\\pi - \\theta\\); cos: \\(2\\pi - \\theta\\); tan: \\(\\theta + \\pi\\)) to find all solutions in the interval. For \\(\\sin 2x = k\\), extend the interval for 2x first. Quadratic-type: \\(2\\sin^2x - \\sin x - 1 = 0\\) factorises.</p>" },
        { h: "Equations that become quadratics", b: "<p>Use an identity so that only one ratio appears: \\(\\cos^2x = 1 - \\sin^2x\\), \\(\\cos 2x = 1 - 2\\sin^2x\\) or \\(2\\cos^2x - 1\\). Let \\(s = \\sin x\\), factorise (or use the quadratic formula), reject values outside −1 ≤ s ≤ 1, then solve each simple equation on the interval. Never divide by sin x or cos x - move everything to one side and factorise.</p>" },
      ],
      terms: [
        ["Principal value", "The solution given by sin⁻¹, cos⁻¹ or tan⁻¹ on a calculator, from which the other solutions are found by symmetry."],
        ["Finite interval", "The given range of x, for example 0 ≤ x ≤ 2π, in which every solution must be found."],
      ],
      skills: [
        { h: "All solutions", b: "Always check the domain (e.g. 0 ≤ x ≤ 2π) and list every solution. Missing a solution typically loses the final A mark." },
      ],
      examples: [
        { q: "Solve \\(2\\cos x = 1\\) for \\(0 \\le x \\le 2\\pi\\).", a: "\\(\\cos x = \\frac{1}{2}\\): \\(x = \\frac{\\pi}{3}\\) or \\(x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}\\)." },
      ],
      questions: [
        { id: "math-8-q4", type: "short", paper: "P1", marks: 5, diff: 3, q: "Solve \\(2\\sin^2 x - \\sin x - 1 = 0\\) for \\(0 \\le x \\le 2\\pi\\).", ms: ["\\((2\\sin x + 1)(\\sin x - 1) = 0\\) [M1][A1]", "\\(\\sin x = 1 \\Rightarrow x = \\frac{\\pi}{2}\\) [A1]", "\\(\\sin x = -\\frac{1}{2} \\Rightarrow x = \\frac{7\\pi}{6}\\) [A1]", "\\(x = \\frac{11\\pi}{6}\\) [A1]"] },
      ],
    },

    // ---------------- TOPIC 4 ----------------
    {
      id: "math-9", code: "4.1", unit: "Topic 4: Statistics and probability", title: "Collecting data: populations, samples and sampling techniques",
      summary: "Population and sample, discrete and continuous data, reliability of data sources, bias in sampling, interpreting outliers and the main sampling techniques.",
      concepts: [
        { h: "Sampling and data", b: "<p>Population vs sample; discrete vs continuous data. Sampling methods: simple random, convenience, systematic, quota, stratified. Reliability and bias.</p>" },
        { h: "Sampling techniques", b: "<p><strong>Simple random</strong>: every member has an equal chance (random numbers from a full list). <strong>Systematic</strong>: every kth member of a list, k = N/n, with a random start. <strong>Stratified</strong>: split the population into groups (strata) and sample each in proportion to its size, at random. <strong>Quota</strong>: like stratified, but members are chosen non-randomly until each quota is filled. <strong>Convenience</strong>: whoever is easiest to reach - quick but likely to be biased.</p>" },
        { h: "Reliability, bias and outliers", b: "<p>A sample is <strong>biased</strong> if some members of the population are more likely to be chosen than others (an online survey leaves out people without internet access). Larger random samples give more reliable estimates. An <strong>outlier</strong> may be a recording error (correct or remove it, giving a reason) or a genuine extreme value (keep it); always interpret it in context.</p>" },
      ],
      terms: [
        ["Population", "The whole group that is being studied."],
        ["Sample", "A selection of members taken from the population."],
        ["Bias", "A systematic tendency for a sample to misrepresent the population."],
        ["Continuous data", "Data that can take any value in an interval, such as a time or a mass."],
      ],
      skills: [
        { h: "Stratified sample sizes", b: "Number from each stratum = (stratum size ÷ population size) × sample size; round sensibly and check that the numbers add up to the sample size." },
      ],
      examples: [
        { q: "A school has 240 Year 11 and 360 Year 12 students. A stratified sample of 40 is chosen. How many students come from each year?", a: "\\(\\frac{240}{600} \\times 40 = 16\\) from Year 11 and \\(\\frac{360}{600} \\times 40 = 24\\) from Year 12, chosen at random within each year." },
      ],
      questions: [
        { id: "math-9-q5", type: "short", paper: "P2", marks: 3, diff: 2, q: "Explain the difference between a stratified sample and a quota sample.", ms: ["Both divide the population into groups and sample each in proportion to its size [R1]", "Stratified: members of each stratum are chosen at random [R1]", "Quota: members are chosen non-randomly (e.g. conveniently) until each quota is filled [R1]"] },
        { id: "math-9-n1", type: "short", paper: "P1", marks: 2, diff: 1, q: "A researcher wants to know the mean height of the 900 students in a school and measures 60 of them. (a) Identify the population. (b) Identify the sample.", ms: ["(a) all 900 students in the school [A1]", "(b) the 60 students who are measured [A1]"] },
        { id: "math-9-n2", type: "short", paper: "P1", marks: 3, diff: 2, q: "A town council asks the first 50 people who walk past the town hall on a Monday morning whether they support a new car park. (a) Name this sampling technique. (b) Give two reasons why the sample may be biased.", ms: ["(a) convenience sampling [A1]", "(b) only people near the town hall on a Monday morning can be chosen, so people who work or live elsewhere are excluded [R1]", "the people are not chosen at random, so some groups may be over-represented [R1]"] },
        { id: "math-9-n3", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "A gym has 200 members: 120 adults and 80 teenagers. A sample of 25 is chosen so that it contains 15 adults and 10 teenagers, with the members of each group chosen at random. This is:", options: ["a stratified sample", "a quota sample", "a systematic sample", "a convenience sample"], answer: 0, ms: ["A - the groups are sampled in proportion (120/200 × 25 = 15) and members are chosen at random within each group."] },
        { id: "math-9-n4", type: "short", paper: "P1", marks: 3, diff: 2, q: "The masses, in kg, of ten bags of flour are recorded as 1.02, 0.98, 1.01, 0.99, 1.00, 10.1, 1.03, 0.97, 1.00, 1.01. (a) Identify the outlier. (b) Suggest a cause of the outlier and how it should be treated.", ms: ["(a) 10.1 [A1]", "(b) probably a recording error, with the decimal point in the wrong place (1.01) [R1]", "so it should be corrected or removed before calculating any statistics [R1]"] },
      ],
    },
    {
      id: "math-9b", code: "4.2", unit: "Topic 4: Statistics and probability", title: "Presenting data: histograms, cumulative frequency and box plots",
      summary: "Frequency tables and histograms, cumulative frequency graphs for the median, quartiles and percentiles, box-and-whisker diagrams and outliers.",
      concepts: [
        { h: "Presenting data (4.2)", b: "<p>Histograms (continuous data, no gaps, equal class widths), cumulative frequency graphs (plot at <em>upper class boundaries</em>; read median at n/2, Q₁ at n/4, Q₃ at 3n/4, percentiles), and box-and-whisker diagrams (five-number summary, outliers marked separately). Grouped data: estimate the mean using mid-interval values. Compare distributions using a measure of centre <em>and</em> a measure of spread.</p>" },
        { h: "Box-and-whisker diagrams and outliers", b: "<p>The five-number summary (minimum, Q₁, median, Q₃, maximum) gives a box plot. An <strong>outlier</strong> is more than 1.5 × IQR below Q₁ or above Q₃; it is marked with a cross and the whisker stops at the most extreme value that is not an outlier. A symmetric box and whiskers suggest the data may be normally distributed; a longer right whisker shows positive skew.</p>" },
      ],
      terms: [
        ["Outlier", "A value more than 1.5 × IQR beyond the quartiles."],
        ["Cumulative frequency", "The running total of the frequencies up to the upper boundary of each class."],
        ["Percentile", "The value below which a given percentage of the data lies."],
      ],
      skills: [
        { h: "Reading a cumulative frequency graph", b: "Draw lines across at n/4, n/2 and 3n/4 (or the required percentage of n) and down to the x-axis; show these lines on the graph to earn the method mark." },
      ],
      examples: [
        { q: "Data: Q₁ = 12, Q₃ = 20. Is 34 an outlier?", a: "IQR = 8; upper fence = 20 + 1.5 × 8 = 32. Since 34 > 32, it is an outlier." },
      ],
      questions: [
        { id: "math-9-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "For a data set, Q₁ = 15 and Q₃ = 27. Which value is an outlier?", options: ["40", "47", "0", "−2"], answer: 1, ms: ["IQR = 12, so the fences are 15 − 18 = −3 and 27 + 18 = 45. Only 47 lies outside."] },
      ],
    },
    {
      id: "math-9c", code: "4.3", unit: "Topic 4: Statistics and probability", title: "Measures of central tendency and dispersion",
      summary: "Mean, median and mode, the estimated mean of grouped data, the modal class, range, IQR, standard deviation and variance, and the effect of constant changes to the data.",
      concepts: [
        { h: "Central tendency and dispersion", b: "<p>Mean \\(\\bar{x} = \\frac{\\sum fx}{n}\\), median, mode, modal class. Range, interquartile range IQR = Q₃ − Q₁, standard deviation σ (GDC), variance σ². <strong>Outlier</strong>: more than 1.5 × IQR below Q₁ or above Q₃. Effects of constant changes: adding k shifts mean by k but not σ; multiplying by k multiplies both by k.</p>" },
        { h: "Combining and changing data", b: "<p>Total = mean × n, so the mean of two groups is \\(\\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}\\) and a missing value is found from the change in the total. For grouped data use mid-interval values to <strong>estimate</strong> the mean and standard deviation (GDC with a frequency list). Quartiles of discrete data are the medians of the lower and upper halves.</p>" },
      ],
      terms: [
        ["Standard deviation", "A measure of the spread of the data about the mean; IB uses the population value σ."],
        ["Modal class", "The class with the highest frequency in grouped data."],
      ],
      skills: [
        { h: "GDC skills", b: "1-Var Stats for mean, σ, quartiles; 2-Var Stats/LinReg for r and regression line. Write the regression equation with values to 3 s.f." },
      ],
      examples: [
        { q: "The mean of 6 numbers is 12. One number is removed and the mean of the other 5 is 11. Find the number removed.", a: "Total before = 6 × 12 = 72; total after = 5 × 11 = 55; the number removed is 72 − 55 = 17." },
      ],
      questions: [
        { id: "math-9-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Each value in a data set is multiplied by 3 and then 2 is added. The standard deviation was 4. What is the new standard deviation?", options: ["4", "12", "14", "36"], answer: 1, ms: ["Adding does not change spread; multiplying by 3 multiplies σ by 3."] },
        { id: "math-9-q3", type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 8, tol: 0.001 }, q: "The numbers 3, 5, 6, 8, x have a mean of 6. Find x.", ms: ["\\(\\frac{22 + x}{5} = 6\\) [M1]", "x = 8 [A1]"] },
      ],
    },
    {
      id: "math-9d", code: "4.4", unit: "Topic 4: Statistics and probability", title: "Correlation and the regression line of y on x",
      summary: "Scatter diagrams, Pearson's product-moment correlation coefficient r, lines of best fit through the mean point, the regression line of y on x, prediction and interpreting a and b.",
      concepts: [
        { h: "Correlation and regression", b: "<p>Pearson's product-moment correlation coefficient r (−1 ≤ r ≤ 1) measures linear correlation. Regression line of y on x (y = ax + b) from GDC; use it to predict y from x only within the data range (interpolation). Regression of x on y is used to predict x from y. Correlation does not imply causation.</p>" },
        { h: "Interpreting a and b", b: "<p>In \\(y = ax + b\\) the gradient a is the change in y for each increase of 1 in x (in context: \"each extra hour of revision is associated with about a more marks\"); b is the value of y when x = 0, which may have no sensible meaning if x = 0 lies outside the data. Predict y only from the line of y on x and only for x inside the data range (interpolation).</p>" },
      ],
      terms: [
        ["Interpolation", "Predicting within the range of the data (reliable)."],
        ["Extrapolation", "Predicting outside the range of the data (unreliable)."],
        ["Pearson's correlation coefficient", "A value r, −1 ≤ r ≤ 1, that measures the strength and direction of the linear relationship between two variables."],
      ],
      skills: [
        { h: "GDC regression", b: "Enter x in L1 and y in L2, then LinReg(ax+b) for a, b and r (switch Diagnostics on). Write the equation with values to 3 s.f." },
      ],
      examples: [
        { q: "The regression line of y on x is y = 2.4x + 7.1 with r = 0.93 for 5 ≤ x ≤ 20. Estimate y when x = 12.", a: "y = 2.4(12) + 7.1 = 35.9. This is reliable: r shows strong positive linear correlation and x = 12 lies within the data (interpolation)." },
      ],
      questions: [
        { id: "math-9-q4", type: "short", paper: "P2", marks: 4, diff: 2, q: "The regression line of y on x for a data set is y = 2.4x + 7.1 with r = 0.93. The x-values range from 5 to 20. (a) Interpret r. (b) Estimate y when x = 12. (c) Explain why it would not be appropriate to estimate y when x = 40.", ms: ["Strong positive linear correlation [A1]", "y = 2.4(12) + 7.1 = 35.9 [M1][A1]", "x = 40 is outside the data range - extrapolation is unreliable [R1]"] },
      ],
    },
    {
      id: "math-9e", code: "4.10", unit: "Topic 4: Statistics and probability", title: "The regression line of x on y",
      summary: "The equation of the regression line of x on y and its use to predict x from a given value of y.",
      concepts: [
        { h: "When to use x on y", b: "<p>The regression line of y on x is used to predict y from x. To predict x from a given y use the regression line of <strong>x on y</strong>, \\(x = cy + d\\), found on the GDC by swapping the lists (the y-values as the independent list). Do not rearrange the line of y on x: unless r = ±1 the two lines are different.</p>" },
        { h: "Properties of the two lines", b: "<p>Both regression lines pass through the mean point \\((\\bar{x}, \\bar{y})\\), so the point where they intersect is the mean point. The closer |r| is to 1, the closer the two lines are; if r = ±1 they coincide. As with y on x, a prediction is reliable only when the correlation is strong and the given y lies within the data range.</p>" },
      ],
      terms: [
        ["Regression line of x on y", "The line x = cy + d used to predict x from a given value of y."],
        ["Mean point", "The point (x̄, ȳ), through which both regression lines pass."],
      ],
      skills: [
        { h: "GDC for x on y", b: "Run LinReg with the y-list as Xlist and the x-list as Ylist; the output a and b are the coefficients of x = ay + b." },
      ],
      examples: [
        { q: "For data with r = 0.996, the regression line of x on y is x = 0.226y − 8.10. Estimate x when y = 70.", a: "x = 0.226(70) − 8.10 = 7.72. The line of x on y is used because x is being predicted from y." },
      ],
      questions: [
        { id: "math-9e-n1", type: "short", paper: "P2", marks: 5, diff: 2, numeric: { value: 161, tol: 0.5 }, q: "The heights, h cm, and arm spans, s cm, of six students are: h: 150, 156, 160, 165, 170, 178; s: 148, 155, 161, 163, 172, 176. (a) Find the regression line of s on h. (b) Find the regression line of h on s. (c) Use the appropriate line to estimate the height of a student whose arm span is 160 cm.", ms: ["(a) s = 1.02h − 4.11 [A1][A1]", "(b) h = 0.952s + 8.47 [A1]", "(c) h on s, since h is predicted from s [M1]", "h = 0.952(160) + 8.47 = 161 cm [A1]"] },
        { id: "math-9e-n2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Two regression lines for a data set are y = 2x + 3 and x = 0.4y + 1. The mean point is:", options: ["(11, 25)", "(25, 11)", "(3, 1)", "(1, 5)"], answer: 0, ms: ["A - substitute: x = 0.4(2x + 3) + 1 gives 0.2x = 2.2, so x̄ = 11 and ȳ = 25; both lines pass through the mean point."] },
        { id: "math-9e-n3", type: "short", paper: "P2", marks: 3, diff: 2, q: "For a set of bivariate data r = 0.35. A student uses the regression line of x on y to estimate x from a value of y that lies within the data range. Comment on the reliability of the estimate.", ms: ["the correct line (x on y) is used and y is within the data range (interpolation) [R1]", "but r = 0.35 shows only weak positive linear correlation [A1]", "so the estimate is not reliable [R1]"] },
      ],
    },
    {
      id: "math-10", code: "4.5", unit: "Topic 4: Statistics and probability", title: "Probability: sample spaces, complements and expected occurrences",
      summary: "Trials, outcomes and sample spaces, equally likely outcomes, relative frequency, complementary events and the expected number of occurrences.",
      concepts: [
        { h: "Basic probability", b: "<p>\\(P(A) = \\frac{n(A)}{n(U)}\\), \\(P(A') = 1 - P(A)\\). Expected number of occurrences = np.</p>" },
        { h: "Sample spaces and equally likely outcomes", b: "<p>A <strong>trial</strong> produces an <strong>outcome</strong>; the set of all outcomes is the sample space U and an <strong>event</strong> is a subset of U. If the outcomes are equally likely, \\(P(A) = \\frac{n(A)}{n(U)}\\) - list them or draw a sample space diagram (a 6 × 6 grid for two dice). Complementary events: \\(P(A') = 1 - P(A)\\), so \"at least one\" = 1 − P(none).</p>" },
      ],
      terms: [
        ["Sample space", "The set of all possible outcomes of a trial."],
        ["Relative frequency", "The number of times an event occurs divided by the number of trials; an estimate of its probability."],
        ["Complementary events", "A and A′: exactly one of them happens, so P(A′) = 1 − P(A)."],
      ],
      skills: [
        { h: "Expected number", b: "Expected number of occurrences = n × P(A); it need not be a whole number, so do not round it unless asked." },
      ],
      examples: [
        { q: "A biased coin lands heads 74 times in 200 throws. Estimate P(heads) and the expected number of heads in 500 throws.", a: "Relative frequency 74/200 = 0.37; expected number 500 × 0.37 = 185." },
      ],
      questions: [
        { id: "math-10-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Two fair dice are rolled. What is the probability the total is 7?", options: ["\\(\\frac{1}{12}\\)", "\\(\\frac{1}{6}\\)", "\\(\\frac{7}{36}\\)", "\\(\\frac{5}{36}\\)"], answer: 1, ms: ["6 favourable outcomes out of 36."] },
      ],
    },
    {
      id: "math-10b", code: "4.6", unit: "Topic 4: Statistics and probability", title: "Combined events: Venn diagrams and tree diagrams",
      summary: "Venn diagrams, tree diagrams, sample space diagrams and tables of outcomes, combined events, mutually exclusive events and independent events.",
      concepts: [
        { h: "Combined events", b: "<p>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$ Mutually exclusive: \\(P(A \\cap B) = 0\\). Conditional: $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$ Independent: \\(P(A \\cap B) = P(A)P(B)\\), equivalently \\(P(A|B) = P(A)\\).</p>" },
        { h: "Diagrams", b: "<p>Venn diagrams (fill the intersection first), tree diagrams (multiply along branches, add between outcomes; branches change 'without replacement'), sample space grids for two dice.</p>" },
      ],
      terms: [
        ["Mutually exclusive", "Events that cannot occur at the same time."],
        ["Independent events", "The occurrence of one does not affect the probability of the other."],
      ],
      skills: [
        { h: "Fill the Venn diagram first", b: "Put the intersection in first, then the \"only\" regions, then the outside; check that all the regions add up to the total before answering." },
      ],
      examples: [
        { q: "A bag has 5 red and 3 blue counters. Two are taken without replacement. Find P(both red).", a: "\\(\\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}\\)." },
      ],
      questions: [
        { id: "math-10-q3", type: "short", paper: "P1", marks: 4, diff: 3, numeric: { value: 0.5333, tol: 0.002 }, q: "A bag has 6 red and 4 blue marbles. Two are taken without replacement. Find the probability they are different colours.", ms: ["Tree diagram / P(RB) = \\(\\frac{6}{10} \\times \\frac{4}{9}\\) [M1]", "P(BR) = \\(\\frac{4}{10} \\times \\frac{6}{9}\\) [M1]", "Adding [M1]", "\\(\\frac{48}{90} = \\frac{8}{15}\\) [A1]"] },
        { id: "math-10-q4", type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 0.1667, tol: 0.002 }, q: "In a class of 30, 18 study French, 12 study Spanish and 5 study both. A student is chosen at random. Find the probability they study neither.", ms: ["n(F ∪ S) = 18 + 12 − 5 = 25 [M1]", "Neither = 5 [A1]", "\\(\\frac{5}{30} = \\frac{1}{6}\\) [A1]"] },
      ],
    },
    {
      id: "math-10c", code: "4.11", unit: "Topic 4: Statistics and probability", title: "Conditional probability and testing for independence",
      summary: "The formal definition P(A|B) = P(A ∩ B)/P(B), reverse conditional probability from tree diagrams and tables, and testing for independence with P(A|B) = P(A) = P(A|B′).",
      concepts: [
        { h: "Conditional probability", b: "<p>$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$ \"Given B\" means the sample space shrinks to B: in a Venn diagram or table divide by the total of B only. On a tree diagram the second-stage branches are already conditional probabilities; a reverse condition such as P(first | second) needs the formula, with P(second) as the denominator.</p>" },
        { h: "Testing for independence", b: "<p>A and B are independent if \\(P(A|B) = P(A) = P(A|B')\\), or equivalently \\(P(A \\cap B) = P(A)P(B)\\). To test: calculate both sides with numbers, compare them and conclude in words. Events with non-zero probabilities cannot be both mutually exclusive and independent.</p>" },
      ],
      terms: [
        ["Conditional probability", "The probability of A given that B has occurred."],
        ["Test for independence", "Checking whether P(A|B) = P(A), or P(A ∩ B) = P(A)P(B), to decide whether two events are independent."],
      ],
      skills: [
        { h: "Show independence correctly", b: "Compute P(A)P(B) and compare with P(A ∩ B) numerically, then state the conclusion." },
      ],
      examples: [
        { q: "P(A) = 0.4, P(B) = 0.5, P(A ∪ B) = 0.7. Find P(A ∩ B) and decide whether A and B are independent.", a: "P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2. P(A)P(B) = 0.2 = P(A ∩ B), so independent." },
      ],
      questions: [
        { id: "math-10-q2", type: "short", paper: "P1", marks: 4, diff: 2, q: "P(A) = 0.4, P(B) = 0.5 and P(A ∪ B) = 0.7. (a) Find P(A ∩ B). (b) Determine whether A and B are independent. (c) Find P(A | B).", ms: ["P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2 [A1]", "P(A)P(B) = 0.2 = P(A ∩ B) [M1]", "so independent [R1]", "P(A|B) = 0.2/0.5 = 0.4 [A1]"] },
      ],
    },
    {
      id: "math-11", code: "4.7", unit: "Topic 4: Statistics and probability", title: "Discrete random variables and expected value",
      summary: "Discrete random variables and their probability distributions, the expected value E(X), and applications such as fair games.",
      concepts: [
        { h: "Discrete random variables", b: "<p>\\(\\sum P(X = x) = 1\\). Expected value \\(E(X) = \\sum x P(X = x)\\). A game is <strong>fair</strong> if E(gain) = 0.</p>" },
        { h: "Probability distributions", b: "<p>A discrete random variable X takes distinct values with probabilities that are each between 0 and 1 and add up to 1. The distribution can be a table or a formula such as \\(P(X = x) = kx\\). Find an unknown k from \\(\\sum P(X = x) = 1\\), then \\(E(X) = \\sum x P(X = x)\\), the long-run mean. Probabilities such as \\(P(X \\ge 3)\\) are sums of the relevant entries.</p>" },
        { h: "Expected gain and fair games", b: "<p>For a game, let X be the <strong>gain</strong> (prize minus the cost to play). The game is fair if E(X) = 0. Working with the prize W instead, the game is fair when E(W) equals the cost. The expected total gain over n games is n × E(X).</p>" },
      ],
      terms: [
        ["Random variable", "A variable whose value is determined by the outcome of a random experiment."],
        ["Expected value", "The long-run mean value of a random variable."],
        ["Fair game", "A game in which the expected gain of a player is zero."],
      ],
      skills: [
        { h: "Check the distribution", b: "After finding k, check that every probability is between 0 and 1 and that they add up to 1 before finding E(X)." },
      ],
      examples: [
        { q: "X has \\(P(X = x) = k(6 - x)\\) for x = 1, 2, 3, 4, 5. Find k and E(X).", a: "k(5 + 4 + 3 + 2 + 1) = 15k = 1, so \\(k = \\frac{1}{15}\\). \\(E(X) = \\frac{1(5) + 2(4) + 3(3) + 4(2) + 5(1)}{15} = \\frac{35}{15} = \\frac{7}{3}\\)." },
      ],
      questions: [
        { id: "math-11-q6", type: "short", paper: "P1", marks: 4, diff: 3, q: "A discrete random variable X has P(X = x) = kx for x = 1, 2, 3, 4. Find k and E(X).", ms: ["k(1 + 2 + 3 + 4) = 1 [M1]", "k = 0.1 [A1]", "E(X) = 0.1(1 + 4 + 9 + 16) [M1]", "E(X) = 3 [A1]"] },
      ],
    },
    {
      id: "math-11b", code: "4.8", unit: "Topic 4: Statistics and probability", title: "The binomial distribution",
      summary: "The binomial distribution B(n, p), its conditions, binomial probabilities, and the mean np and variance np(1 − p).",
      concepts: [
        { h: "Binomial distribution", b: "<p>\\(X \\sim B(n, p)\\): fixed n independent trials, two outcomes, constant p. $$P(X = r) = \\binom{n}{r}p^r(1 - p)^{n - r} \\qquad E(X) = np \\qquad Var(X) = np(1 - p)$$ GDC: binompdf for =, binomcdf for ≤. P(X ≥ k) = 1 − P(X ≤ k − 1).</p>" },
        { h: "Conditions for a binomial model", b: "<p>X ~ B(n, p) models the number of successes when there is a fixed number n of trials, each trial has two outcomes (success or failure), the trials are independent and the probability of success p is the same for every trial. Sampling without replacement from a small group, or trials that affect each other, break these conditions.</p>" },
      ],
      terms: [
        ["Binomial distribution", "The distribution of the number of successes in n independent trials, each with the same probability of success p."],
        ["Trial", "A single performance of an experiment, with a defined set of outcomes."],
      ],
      skills: [
        { h: "Identify the distribution", b: "Look for the conditions: counting successes in n trials → binomial; continuous measurement like heights/times → normal." },
      ],
      examples: [
        { q: "\\(X \\sim B(10, 0.3)\\). Find P(X = 2) and P(X ≥ 2).", a: "P(X = 2) = \\(\\binom{10}{2}(0.3)^2(0.7)^8 = 0.233\\). P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.149 = 0.851." },
      ],
      questions: [
        { id: "math-11-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "If \\(X \\sim B(20, 0.25)\\), E(X) =", options: ["4", "5", "3.75", "15"], answer: 1, ms: ["np = 5."] },
        { id: "math-11-q3", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 0.851, tol: 0.002 }, q: "A spinner lands on red with probability 0.3. It is spun 10 times. Find the probability that it lands on red at least twice.", ms: ["X ~ B(10, 0.3) [M1]", "1 − P(X ≤ 1) [M1]", "= 0.851 [A1]"] },
      ],
    },
    {
      id: "math-11c", code: "4.9", unit: "Topic 4: Statistics and probability", title: "The normal distribution",
      summary: "The normal distribution and curve, its properties, normal probability calculations and inverse normal calculations.",
      concepts: [
        { h: "Normal distribution", b: "<p>\\(X \\sim N(\\mu, \\sigma^2)\\): symmetric, bell-shaped; ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ. GDC normalcdf for probabilities, invNorm for values. Standardisation \\(z = \\frac{x - \\mu}{\\sigma}\\) (used to find unknown μ or σ).</p>" },
        { h: "Properties of the normal curve", b: "<p>X ~ N(μ, σ²) is continuous, bell-shaped and symmetric about μ, with mean = median = mode and total area 1. About 68% of values lie within 1σ of the mean, 95% within 2σ and 99.7% within 3σ. For a continuous variable P(X = a) = 0, so < and ≤ give the same probability. Probabilities are areas (normalcdf); a value with a given area to its left comes from invNorm.</p>" },
      ],
      terms: [
        ["Normal distribution", "A continuous, symmetric, bell-shaped distribution X ~ N(μ, σ²) with mean μ and variance σ²."],
        ["Inverse normal", "Finding the value x for which P(X < x) equals a given probability."],
      ],
      skills: [
        { h: "Sketch first", b: "Draw the bell curve, mark μ and the boundary values and shade the required area before using the GDC - it shows the direction of the inequality and often earns a mark." },
      ],
      examples: [
        { q: "The masses of apples are N(150, 12²) g. Find P(X > 168) and the mass exceeded by 10% of apples.", a: "P(X > 168) = 0.0668 (normalcdf). The mass exceeded by 10% is invNorm(0.9, 150, 12) = 165 g." },
      ],
      questions: [
        { id: "math-11-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Heights are normally distributed with mean 170 cm and SD 8 cm. Approximately what percentage are between 154 and 186 cm?", options: ["68%", "90%", "95%", "99.7%"], answer: 2, ms: ["Within 2σ ≈ 95%."] },
        { id: "math-11-q4", type: "short", paper: "P2", marks: 2, diff: 2, numeric: { value: 0.0668, tol: 0.001 }, q: "The masses of apples are normally distributed with mean 150 g and standard deviation 12 g. Find the probability that an apple weighs more than 168 g.", ms: ["P(X > 168) using normalcdf [M1]", "= 0.0668 [A1]"] },
        { id: "math-11-q5", type: "short", paper: "P2", marks: 2, diff: 2, numeric: { value: 165.4, tol: 0.2 }, q: "Using the apples above (mean 150 g, SD 12 g), find the mass exceeded by 10% of apples.", ms: ["invNorm(0.9, 150, 12) [M1]", "= 165 g (165.4) [A1]"] },
      ],
    },
    {
      id: "math-11d", code: "4.12", unit: "Topic 4: Statistics and probability", title: "Standardisation: z-values and unknown μ or σ",
      summary: "Standardising normal variables with z-values, and inverse normal calculations where the mean or standard deviation is unknown.",
      concepts: [
        { h: "Standardising: z-values", b: "<p>$$z = \\frac{x - \\mu}{\\sigma}$$ is the number of standard deviations x lies above (z > 0) or below (z < 0) the mean. If X ~ N(μ, σ²) then Z ~ N(0, 1) and P(X < x) = P(Z < z). z-values compare results from different distributions: the larger z, the better the relative performance.</p>" },
        { h: "Finding an unknown μ or σ", b: "<p>Use invNorm with mean 0 and standard deviation 1 to find z for the given area to the left, then solve \\(\\frac{x - \\mu}{\\sigma} = z\\). One unknown needs one equation; if both μ and σ are unknown, use the two given probabilities to form the simultaneous equations \\(x_1 = \\mu + z_1\\sigma\\) and \\(x_2 = \\mu + z_2\\sigma\\).</p>" },
      ],
      terms: [
        ["z-score", "Number of standard deviations a value lies from the mean."],
        ["Standard normal distribution", "The normal distribution Z ~ N(0, 1), with mean 0 and standard deviation 1."],
      ],
      skills: [
        { h: "Signs of z", b: "A value below the mean has a negative z: if P(X < 30) = 0.2, then z = invNorm(0.2, 0, 1) = −0.842." },
      ],
      examples: [
        { q: "X ~ N(μ, 5²) and P(X > 40) = 0.15. Find μ.", a: "Area to the left 0.85 gives z = 1.036, so \\(\\frac{40 - \\mu}{5} = 1.036\\) and μ = 34.8." },
      ],
      questions: [
        { id: "math-11d-n1", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 2.86, tol: 0.01 }, q: "The masses of bags of sugar are normally distributed with mean 1005 g. 4% of the bags weigh less than 1000 g. Find the standard deviation of the masses.", ms: ["z = invNorm(0.04, 0, 1) = −1.751 [M1]", "\\(\\frac{1000 - 1005}{\\sigma} = -1.751\\) [M1]", "σ = 2.86 g [A1]"] },
        { id: "math-11d-n2", type: "short", paper: "P2", marks: 5, diff: 3, numeric: { value: 19.2, tol: 0.05 }, q: "The times taken to complete a puzzle are normally distributed. 10% of people take less than 12 minutes and 15% take more than 25 minutes. Find the mean and the standard deviation of the times.", ms: ["z = −1.282 for 12 [A1]", "z = 1.036 for 25 [A1]", "μ − 1.282σ = 12 and μ + 1.036σ = 25 [M1]", "σ = 5.61 [A1]", "μ = 19.2 [A1]"] },
      ],
    },

    // ---------------- TOPIC 5 ----------------
    {
      id: "math-12", code: "5.1-5.4, 5.6-5.8", unit: "Topic 5: Calculus", title: "Differentiation",
      summary: "Limits and the derivative, power/chain/product/quotient rules, derivatives of standard functions, tangents and normals, stationary points.",
      concepts: [
        { h: "The derivative", b: "<p>The derivative \\(f'(x)\\) is the gradient function: $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$ It gives the rate of change. f is increasing where \\(f'(x) > 0\\), decreasing where \\(f'(x) < 0\\).</p>" },
        { h: "Rules", b: "<table><tr><th>f(x)</th><th>f'(x)</th></tr><tr><td>\\(x^n\\)</td><td>\\(nx^{n-1}\\)</td></tr><tr><td>\\(\\sin x\\)</td><td>\\(\\cos x\\)</td></tr><tr><td>\\(\\cos x\\)</td><td>\\(-\\sin x\\)</td></tr><tr><td>\\(e^x\\)</td><td>\\(e^x\\)</td></tr><tr><td>\\(\\ln x\\)</td><td>\\(\\frac{1}{x}\\)</td></tr></table><p>Chain: \\(\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}\\). Product: \\((uv)' = u'v + uv'\\). Quotient: \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\).</p>" },
        { h: "Tangents, normals and stationary points", b: "<p>Tangent at x = a: gradient f'(a), \\(y - f(a) = f'(a)(x - a)\\). Normal: gradient \\(-\\frac{1}{f'(a)}\\). Stationary points where f'(x) = 0; classify with the second derivative: f''(x) &gt; 0 minimum, f''(x) &lt; 0 maximum. Points of inflexion where f''(x) = 0 <em>and</em> f'' changes sign (concavity changes). Optimisation: form a function, differentiate, set to zero, verify max/min.</p>" },
      ],
      terms: [["Derivative", "The instantaneous rate of change of a function; the gradient of the tangent."], ["Stationary point", "A point where f'(x) = 0."], ["Point of inflexion", "A point where concavity changes."]],
      skills: [{ h: "Show that", b: "In 'show that f'(x) = …' questions, write every line of the differentiation; the final line must match exactly." }],
      examples: [{ q: "Find the stationary points of \\(f(x) = x^3 - 3x^2 - 9x + 2\\) and classify them.", a: "\\(f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1\\). \\(f''(x) = 6x - 6\\): f''(−1) = −12 < 0 → max at (−1, 7); f''(3) = 12 > 0 → min at (3, −25)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "If \\(f(x) = 4x^3 - 2x\\), then \\(f'(x) =\\)", options: ["\\(12x^2 - 2\\)", "\\(12x^2\\)", "\\(x^4 - x^2\\)", "\\(4x^2 - 2\\)"], answer: 0, ms: ["A - power rule: \\(4 \\times 3x^2 - 2 = 12x^2 - 2\\)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "The derivative of \\(e^{3x^2}\\) is:", options: ["\\(e^{3x^2}\\)", "\\(6xe^{3x^2}\\)", "\\(3x^2e^{3x^2 - 1}\\)", "\\(6x e^{6x}\\)"], answer: 1, ms: ["B - chain rule: \\(e^{3x^2} \\times \\frac{d}{dx}(3x^2) = 6xe^{3x^2}\\)."] },
        { type: "short", paper: "P1", marks: 5, diff: 2, q: "Find the coordinates of the stationary points of \\(y = x^3 - 3x^2 - 9x + 2\\) and determine their nature.", ms: ["\\(\\frac{dy}{dx} = 3x^2 - 6x - 9\\) [A1]", "Setting = 0, x = −1 and x = 3 [M1][A1]", "(−1, 7) maximum (f'' = −12 < 0) [A1]", "(3, −25) minimum (f'' = 12 > 0) [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Find the equation of the tangent to \\(y = x^2 + 3x\\) at the point where x = 1.", ms: ["\\(\\frac{dy}{dx} = 2x + 3\\) [A1]", "Gradient at x = 1 is 5 [A1]", "Point (1, 4) [A1]", "y − 4 = 5(x − 1) → y = 5x − 1 [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 3, q: "Differentiate (a) \\(y = x^2 \\sin x\\), (b) \\(y = \\frac{\\ln x}{x}\\).", ms: ["Product rule: \\(2x\\sin x + x^2\\cos x\\) [M1][A1]", "Quotient rule: \\(\\frac{\\frac{1}{x}\\cdot x - \\ln x}{x^2}\\) [M1]", "\\(= \\frac{1 - \\ln x}{x^2}\\) [A1]"] },
        { type: "short", paper: "P2", marks: 5, diff: 3, numeric: { value: 48, tol: 0.01 }, q: "An open box with a square base of side x cm has volume 32 cm³. Its surface area is \\(S = x^2 + \\frac{128}{x}\\). Find the minimum surface area.", ms: ["\\(\\frac{dS}{dx} = 2x - \\frac{128}{x^2}\\) [A1]", "Set = 0: \\(x^3 = 64\\) [M1]", "x = 4 [A1]", "Verify minimum (second derivative > 0 or sign test) [R1]", "S = 16 + 32 = 48 cm² [A1]"] },
      ],
    },
    {
      id: "math-13", code: "5.5, 5.10-5.11", unit: "Topic 5: Calculus", title: "Integration and area",
      summary: "Anti-differentiation, standard integrals, integration by substitution (inspection), definite integrals and areas between curves.",
      concepts: [
        { h: "Indefinite integrals", b: "<p>$$\\int x^n dx = \\frac{x^{n+1}}{n + 1} + C\\ (n \\neq -1) \\qquad \\int \\frac{1}{x} dx = \\ln|x| + C$$ $$\\int \\sin x\\,dx = -\\cos x + C \\quad \\int \\cos x\\,dx = \\sin x + C \\quad \\int e^x dx = e^x + C$$ Linear composite: \\(\\int f(ax + b)dx = \\frac{1}{a}F(ax + b) + C\\). Use a boundary condition to find C.</p>" },
        { h: "Substitution / inspection", b: "<p>Recognise \\(\\int g'(x) f(g(x))dx = F(g(x)) + C\\). E.g. \\(\\int 2x(x^2 + 1)^3 dx = \\frac{(x^2 + 1)^4}{4} + C\\).</p>" },
        { h: "Definite integrals and area", b: "<p>$$\\int_a^b f(x)dx = F(b) - F(a)$$ Area between curve and x-axis = \\(\\int_a^b |f(x)|dx\\) (split at roots; area below the axis gives a negative integral). Area between two curves = \\(\\int_a^b (f(x) - g(x))dx\\) where f is above g.</p>" },
      ],
      terms: [["Antiderivative", "A function F whose derivative is f."], ["Definite integral", "The signed area under a curve between two limits."]],
      skills: [{ h: "Paper 2 GDC", b: "Use fnInt / ∫ on the GDC for definite integrals; write the integral you are evaluating with limits before giving the value." }],
      examples: [{ q: "Find the area enclosed by \\(y = x^2\\) and \\(y = 2x\\).", a: "Intersections: \\(x^2 = 2x \\Rightarrow x = 0, 2\\). Area = \\(\\int_0^2 (2x - x^2)dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(\\int (6x^2 - 4)dx =\\)", options: ["\\(12x + C\\)", "\\(2x^3 - 4x + C\\)", "\\(3x^3 - 4x + C\\)", "\\(2x^3 + C\\)"], answer: 1, ms: ["B - \\(\\frac{6x^3}{3} - 4x + C = 2x^3 - 4x + C\\)."] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Given \\(f'(x) = 3x^2 - 2x\\) and f(1) = 4, find f(x).", ms: ["\\(f(x) = x^3 - x^2 + C\\) [A1]", "4 = 1 − 1 + C [M1]", "\\(f(x) = x^3 - x^2 + 4\\) [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, numeric: { value: 1.3333, tol: 0.002 }, q: "Find the area of the region enclosed by \\(y = x^2\\) and \\(y = 2x\\).", ms: ["Intersections x = 0, x = 2 [A1]", "\\(\\int_0^2 (2x - x^2)dx\\) [M1]", "\\(\\left[x^2 - \\frac{x^3}{3}\\right]_0^2\\) [A1]", "\\(\\frac{4}{3}\\) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 3, q: "Find \\(\\int 2x(x^2 + 1)^3 dx\\).", ms: ["Recognising substitution u = x² + 1 / inspection [M1]", "\\(\\frac{(x^2 + 1)^4}{4}\\) [A1]", "+ C [A1]"] },
        { type: "short", paper: "P2", marks: 2, diff: 2, numeric: { value: 2, tol: 0.001 }, q: "Find \\(\\int_0^{\\pi} \\sin x\\, dx\\).", ms: ["\\([-\\cos x]_0^{\\pi} = 1 - (-1)\\) [M1]", "= 2 [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Find \\(\\int \\left(e^{2x} + \\frac{1}{x}\\right)dx\\).", ms: ["\\(\\frac{1}{2}e^{2x}\\) [A1]", "\\(+ \\ln|x|\\) [A1]", "+ C [A1]"] },
      ],
    },
    {
      id: "math-14", code: "5.9", unit: "Topic 5: Calculus", title: "Kinematics",
      summary: "Displacement, velocity and acceleration, distance travelled, and motion problems using calculus.",
      concepts: [
        { h: "Relationships", b: "<p>$$v = \\frac{ds}{dt} \\qquad a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2} \\qquad s = \\int v\\,dt$$ Particle at rest when v = 0; changes direction when v changes sign. Speed = |v|.</p>" },
        { h: "Distance vs displacement", b: "<p>Displacement = \\(\\int_{t_1}^{t_2} v(t)\\,dt\\) (can be negative). Distance travelled = \\(\\int_{t_1}^{t_2} |v(t)|\\,dt\\). A particle is speeding up when v and a have the same sign.</p>" },
      ],
      terms: [["Displacement", "Position relative to a fixed origin (a vector quantity)."], ["Velocity", "Rate of change of displacement."], ["Acceleration", "Rate of change of velocity."]],
      skills: [{ h: "GDC with |v|", b: "In Paper 2 use fnInt(|v(t)|, t, a, b) for total distance - don't forget the absolute value." }],
      examples: [{ q: "\\(v(t) = t^2 - 4t + 3\\) for 0 ≤ t ≤ 4. Find when the particle is at rest and the total distance travelled.", a: "v = (t − 1)(t − 3) = 0 at t = 1, 3. Distance = \\(\\int_0^4 |v|dt = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "If \\(s(t) = 5t^2 - 2t\\), the velocity at t = 3 is:", options: ["28", "39", "30", "10"], answer: 0, ms: ["v = 10t − 2 = 28."] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "A particle moves with velocity \\(v(t) = t^2 - 4t + 3\\) m s⁻¹. Find the times when the particle is at rest and its acceleration at t = 2.", ms: ["(t − 1)(t − 3) = 0 [M1]", "t = 1 and t = 3 [A1]", "a = 2t − 4 = 0 at t = 2 [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 3, numeric: { value: 4, tol: 0.01 }, q: "For \\(v(t) = t^2 - 4t + 3\\), find the total distance travelled from t = 0 to t = 4.", ms: ["\\(\\int_0^4 |t^2 - 4t + 3|dt\\) [M1]", "Splitting at t = 1, 3 or using GDC [M1]", "= 4 m [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 3, numeric: { value: 2.43, tol: 0.01 }, q: "A particle moves in a straight line with velocity \\(v(t) = 2\\sin t - t\\cos t\\) m s⁻¹ for 0 ≤ t ≤ 4. (a) Find the maximum velocity of the particle. (b) Find the displacement of the particle between t = 0 and t = 2.", ms: ["Using GDC to find the maximum of v [M1]", "max velocity = 3.31 m s⁻¹ (at t = 2.80) [A1]", "\\(\\int_0^2 v(t)\\,dt\\) [M1]", "= 2.43 m [A1]"] },
      ],
    },
  ],
});
