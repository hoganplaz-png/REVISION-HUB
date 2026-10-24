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
      id: "math-1", code: "1.1", unit: "Topic 1: Number and algebra", title: "Operations with numbers in standard form",
      summary: "Writing numbers in the form \\(a \\times 10^k\\) with \\(1 \\le a < 10\\) and \\(k \\in \\mathbb{Z}\\), and multiplying, dividing, adding and subtracting them with and without a GDC.",
      concepts: [
        { h: "Standard form \\(a \\times 10^k\\)", b: "<p>Scientific notation \\(a \\times 10^k\\) with \\(1 \\le a < 10\\), k ∈ ℤ, e.g. 0.000 452 = \\(4.52 \\times 10^{-4}\\). In Paper 1 multiply/divide by combining the a-parts and adding/subtracting the powers, then re-normalise: \\((6 \\times 10^5)(4 \\times 10^{3}) = 24 \\times 10^8 = 2.4 \\times 10^9\\).</p>" },
        { h: "Converting to and from standard form", b: "<p>Move the decimal point until exactly one non-zero digit is in front of it; the number of places moved is |k|. Numbers of 10 or more have k &gt; 0 (45 000 = \\(4.5 \\times 10^4\\)); numbers between 0 and 1 have k &lt; 0 (0.000 45 = \\(4.5 \\times 10^{-4}\\)). To convert back, move the point k places to the right (k &gt; 0) or |k| places to the left (k &lt; 0).</p>" },
        { h: "Adding and subtracting", b: "<p>Rewrite both numbers with the same power of 10, add or subtract the a-parts, then re-normalise: \\(3 \\times 10^4 + 5 \\times 10^3 = 3 \\times 10^4 + 0.5 \\times 10^4 = 3.5 \\times 10^4\\). The powers are never added when the numbers are added.</p>" },
        { h: "Standard form on the GDC and accuracy", b: "<p>A GDC shows 2.5E4 for \\(2.5 \\times 10^4\\): always write \\(2.5 \\times 10^4\\) in your answer. Unless told otherwise give answers to 3 significant figures, e.g. 0.000 012 345 = \\(1.23 \\times 10^{-5}\\). Typical contexts are very large or very small quantities: distances in space, populations, masses of particles, sizes of cells.</p>" },
      ],
      terms: [
        ["Standard form", "A number written as \\(a \\times 10^k\\), where \\(1 \\le a < 10\\) and k is an integer (scientific notation)."],
        ["Significant figures", "The digits of a number that carry meaning, counted from the first non-zero digit."],
        ["Order of magnitude", "The power of 10, k, when a number is written in standard form."],
      ],
      skills: [
        { h: "Multiply and divide without a GDC", b: "Work with the a-parts and the powers separately: \\((6 \\times 10^5)(4 \\times 10^{-2}) = 24 \\times 10^3 = 2.4 \\times 10^4\\). Always check the final a satisfies \\(1 \\le a < 10\\)." },
        { h: "Add and subtract", b: "Match the powers first: \\(7.2 \\times 10^5 - 4 \\times 10^4 = 7.2 \\times 10^5 - 0.4 \\times 10^5 = 6.8 \\times 10^5\\)." },
      ],
      examples: [
        { q: "Calculate \\((8 \\times 10^{3}) \\div (2.5 \\times 10^{-4})\\), giving your answer in standard form. [2]", a: "8 ÷ 2.5 = 3.2 and \\(10^3 \\div 10^{-4} = 10^7\\). So the answer is \\(3.2 \\times 10^7\\)." },
        { q: "Write \\(4.7 \\times 10^5 + 3.6 \\times 10^4\\) in standard form. [2]", a: "\\(3.6 \\times 10^4 = 0.36 \\times 10^5\\). The sum is \\((4.7 + 0.36) \\times 10^5 = 5.06 \\times 10^5\\)." },
      ],
      questions: [
        { id: "math-1-n1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Which of the following numbers is written in standard form?", options: ["\\(12.5 \\times 10^{3}\\)", "\\(0.85 \\times 10^{-2}\\)", "\\(3.07 \\times 10^{-4}\\)", "\\(10 \\times 10^{5}\\)"], answer: 2, ms: ["C - only 3.07 satisfies \\(1 \\le a < 10\\)."] },
        { id: "math-1-n2", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(0.000\\,604\\) written in standard form is", options: ["\\(6.04 \\times 10^{-4}\\)", "\\(6.04 \\times 10^{-3}\\)", "\\(6.04 \\times 10^{4}\\)", "\\(60.4 \\times 10^{-5}\\)"], answer: 0, ms: ["A - the decimal point moves 4 places to the right, so k = −4."] },
        { id: "math-1-n3", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "\\(\\dfrac{9 \\times 10^{6}}{3 \\times 10^{-2}} =\\)", options: ["\\(3 \\times 10^{4}\\)", "\\(3 \\times 10^{8}\\)", "\\(3 \\times 10^{-8}\\)", "\\(6 \\times 10^{8}\\)"], answer: 1, ms: ["B - 9 ÷ 3 = 3 and \\(10^{6 - (-2)} = 10^8\\)."] },
        { id: "math-1-n4", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "\\((5 \\times 10^{4})^2 =\\)", options: ["\\(2.5 \\times 10^{9}\\)", "\\(2.5 \\times 10^{8}\\)", "\\(1.0 \\times 10^{9}\\)", "\\(2.5 \\times 10^{6}\\)"], answer: 0, ms: ["A - \\(25 \\times 10^{8} = 2.5 \\times 10^{9}\\)."] },
        { id: "math-1-n5", type: "short", paper: "P1", marks: 2, diff: 1, q: "Write \\(7.2 \\times 10^{5} - 4 \\times 10^{4}\\) in the form \\(a \\times 10^{k}\\), where \\(1 \\le a < 10\\) and \\(k \\in \\mathbb{Z}\\).", ms: ["\\(4 \\times 10^{4} = 0.4 \\times 10^{5}\\) [M1]", "\\(6.8 \\times 10^{5}\\) [A1]"] },
        { id: "math-1-n6", type: "short", paper: "P1", marks: 3, diff: 2, q: "Let \\(x = 2.4 \\times 10^{7}\\) and \\(y = 8 \\times 10^{-3}\\). Find (a) \\(xy\\) (b) \\(\\frac{x}{y}\\), giving each answer in the form \\(a \\times 10^{k}\\), where \\(1 \\le a < 10\\) and \\(k \\in \\mathbb{Z}\\).", ms: ["(a) \\(19.2 \\times 10^{4}\\) [M1]", "\\(= 1.92 \\times 10^{5}\\) [A1]", "(b) \\(0.3 \\times 10^{10} = 3 \\times 10^{9}\\) [A1]"] },
        { id: "math-1-n7", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 1830, tol: 5 }, q: "The mass of an electron is approximately \\(9.11 \\times 10^{-31}\\) kg and the mass of a proton is approximately \\(1.67 \\times 10^{-27}\\) kg. Find how many times heavier a proton is than an electron, giving your answer to 3 significant figures.", ms: ["\\(\\frac{1.67 \\times 10^{-27}}{9.11 \\times 10^{-31}}\\) [M1]", "\\(= 1833.15\\dots\\) [A1]", "1830 (3 s.f.) [A1]"] },
        { id: "math-1-n8", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 500, tol: 0.5 }, q: "Light travels at approximately \\(3.00 \\times 10^{8}\\) m s⁻¹. The distance from the Sun to the Earth is approximately \\(1.50 \\times 10^{11}\\) m. Find the time, in seconds, that light takes to travel from the Sun to the Earth, giving your answer in standard form.", ms: ["time = distance ÷ speed [M1]", "\\(\\frac{1.50 \\times 10^{11}}{3.00 \\times 10^{8}} = 500\\) [A1]", "\\(5.00 \\times 10^{2}\\) s [A1]"] },
        { id: "math-1-n9", type: "short", paper: "P1", marks: 2, diff: 2, q: "Given that \\(0.000\\,0371 \\times 10^{9} = a \\times 10^{k}\\), where \\(1 \\le a < 10\\) and \\(k \\in \\mathbb{Z}\\), find the value of a and the value of k.", ms: ["\\(0.000\\,0371 = 3.71 \\times 10^{-5}\\) [M1]", "a = 3.71, k = 4 [A1]"] },
        { id: "math-1-n10", type: "short", paper: "P1", marks: 3, diff: 2, q: "Calculate \\(\\dfrac{(4.5 \\times 10^{3})(2 \\times 10^{-5})}{3 \\times 10^{2}}\\), giving your answer in the form \\(a \\times 10^{k}\\), where \\(1 \\le a < 10\\) and \\(k \\in \\mathbb{Z}\\).", ms: ["numerator \\(= 9 \\times 10^{-2}\\) [A1]", "dividing by \\(3 \\times 10^{2}\\) [M1]", "\\(3 \\times 10^{-4}\\) [A1]"] },
        { id: "math-1-n11", type: "short", paper: "P2", marks: 2, diff: 1, numeric: { value: 2000, tol: 1 }, q: "A red blood cell has a diameter of about \\(7.5 \\times 10^{-6}\\) m. Find how many such cells, placed side by side, would make a line 1.5 cm long.", ms: ["\\(\\frac{1.5 \\times 10^{-2}}{7.5 \\times 10^{-6}}\\) [M1]", "= 2000 (\\(2 \\times 10^{3}\\)) [A1]"] },
      ],
    },
    {
      id: "math-1b", code: "1.2", unit: "Topic 1: Number and algebra", title: "Arithmetic sequences and series",
      summary: "The nth term and the sum of an arithmetic sequence, sigma notation for arithmetic series, and applications such as simple interest and linear growth.",
      concepts: [
        { h: "Arithmetic sequences", b: "<p>Common difference d: $$u_n = u_1 + (n-1)d$$ Test: \\(u_2 - u_1 = u_3 - u_2 = d\\). Three consecutive terms a, b, c of an arithmetic sequence satisfy \\(2b = a + c\\). The terms lie on a straight line when plotted against n (gradient d).</p>" },
        { h: "Arithmetic series", b: "<p>$$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right) = \\frac{n}{2}(u_1 + u_n)$$ The second form is quickest when the first and last terms are known. Given \\(S_n\\), the terms are \\(u_1 = S_1\\) and \\(u_n = S_n - S_{n-1}\\).</p>" },
        { h: "Sigma notation", b: "<p>\\(\\sum_{k=1}^{n} u_k\\) means add the terms from k = 1 to n. The number of terms is (upper − lower + 1). A linear expression such as \\(\\sum_{k=1}^{20}(4k - 1)\\) is an arithmetic series: first term 3, last term 79, so the sum is \\(\\frac{20}{2}(3 + 79) = 820\\).</p>" },
        { h: "Applications", b: "<p>Arithmetic sequences model constant (linear) change: simple interest, seats in rows, savings that rise by a fixed amount, salaries with a fixed annual increase. 'Increases by 50 each year' → d = 50. In context n must be a positive integer, so 'the first year in which…' needs rounding up.</p>" },
      ],
      terms: [
        ["Arithmetic sequence", "A sequence with a constant difference between consecutive terms."],
        ["Common difference", "The constant d added to each term to get the next term of an arithmetic sequence."],
        ["Arithmetic series", "The sum of the terms of an arithmetic sequence."],
        ["Sigma notation", "Compact notation for a sum, Σ."],
      ],
      skills: [
        { h: "Form simultaneous equations", b: "When two terms are given, write each using the formula, e.g. \\(u_3 = u_1 + 2d = 11\\) and \\(u_8 = u_1 + 7d = 31\\), then subtract: 5d = 20." },
        { h: "Least n for a sum (Paper 2)", b: "Write the inequality \\(S_n > k\\), solve the related quadratic or use the GDC table, and give the smallest integer n that works." },
      ],
      examples: [
        { q: "The 3rd term of an arithmetic sequence is 11 and the 8th term is 31. Find \\(u_1\\), d and \\(S_{20}\\).", a: "Subtracting: 5d = 20 → d = 4, \\(u_1 = 3\\). \\(S_{20} = \\frac{20}{2}(2\\times3 + 19\\times4) = 10(6 + 76) = 820\\)." },
        { q: "Evaluate \\(\\sum_{k=1}^{25}(3k + 2)\\). [3]", a: "The terms form an arithmetic sequence with first term 5 and last term 77, and there are 25 terms. Sum = \\(\\frac{25}{2}(5 + 77) = 1025\\)." },
      ],
      questions: [
        { id: "math-1-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the 10th term of the arithmetic sequence 5, 8, 11, …?", options: ["29", "32", "35", "30"], answer: 1, ms: ["\\(u_{10} = 5 + 9 \\times 3 = 32\\)."] },
        { id: "math-1-q3", type: "short", paper: "P1", marks: 4, diff: 2, numeric: { value: 820, tol: 0.5 }, q: "In an arithmetic sequence \\(u_3 = 11\\) and \\(u_8 = 31\\). Find the sum of the first 20 terms.", ms: ["Forming two equations \\(u_1 + 2d = 11,\\ u_1 + 7d = 31\\) [M1]", "\\(d = 4\\) [A1]", "\\(u_1 = 3\\) [A1]", "\\(S_{20} = 820\\) [A1]"] },
        { id: "math-1-q7", type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 55, tol: 0.01 }, q: "Evaluate \\(\\sum_{k=1}^{10} k\\).", ms: ["\\(\\frac{10}{2}(1 + 10)\\) [M1]", "= 55 [A1]"] },
      ],
    },
    {
      id: "math-1c", code: "1.3", unit: "Topic 1: Number and algebra", title: "Geometric sequences and series",
      summary: "The nth term and the sum of the first n terms of a geometric sequence, finding r from two terms, and finding n with logarithms or a GDC.",
      concepts: [
        { h: "Geometric sequences", b: "<p>Common ratio r: $$u_n = u_1 r^{n-1}$$ Test: \\(\\frac{u_2}{u_1} = \\frac{u_3}{u_2} = r\\). Three consecutive terms a, b, c satisfy \\(b^2 = ac\\). If r &gt; 1 the terms grow; if 0 &lt; r &lt; 1 they shrink; if r &lt; 0 the signs alternate.</p>" },
        { h: "Finite geometric series", b: "<p>$$S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r},\\ r \\neq 1$$ Use the first form when r &gt; 1 and the second when r &lt; 1, so that the numbers stay positive.</p>" },
        { h: "Finding r and n", b: "<p>Two terms given: divide, e.g. \\(\\frac{u_5}{u_2} = r^3\\). An even power gives two values (\\(r^2 = 9 \\Rightarrow r = \\pm 3\\)) - keep both unless a condition removes one. To find n solve \\(u_1 r^{n-1} > k\\) with logarithms (Paper 1) or a GDC table (Paper 2), then round up to the next integer.</p>" },
        { h: "Geometric growth", b: "<p>'Increases by 5% each year' gives r = 1.05; 'loses 20% each year' gives r = 0.8. Population growth, bouncing balls and training plans that increase by a percentage are all geometric.</p>" },
      ],
      terms: [
        ["Geometric sequence", "A sequence with a constant ratio between consecutive terms."],
        ["Common ratio", "The constant r by which each term is multiplied to get the next term of a geometric sequence."],
        ["Geometric series", "The sum of the terms of a geometric sequence."],
      ],
      skills: [
        { h: "Find n in a geometric series", b: "Use logarithms (Paper 1) or the GDC table/solver (Paper 2). Remember n must be an integer - round up for 'first exceeds'." },
        { h: "Three terms in terms of k", b: "If \\(a, b, c\\) are consecutive terms then \\(\\frac{b}{a} = \\frac{c}{b}\\), i.e. \\(b^2 = ac\\). Solve for k and reject any value that makes a term zero." },
      ],
      examples: [
        { q: "A geometric sequence has \\(u_2 = 6\\) and \\(u_5 = 162\\). Find r, \\(u_1\\) and \\(S_6\\). [4]", a: "\\(r^3 = \\frac{162}{6} = 27\\), so r = 3 and \\(u_1 = 2\\). \\(S_6 = \\frac{2(3^6 - 1)}{3 - 1} = 728\\)." },
        { q: "Find the least n for which the sum of the geometric series \\(3 + 6 + 12 + \\dots\\) exceeds 5000. [3]", a: "\\(S_n = 3(2^n - 1) > 5000\\) gives \\(2^n > 1667.7\\), so \\(n > 10.7\\). The least value is n = 11." },
      ],
      questions: [
        { id: "math-1-q6", type: "short", paper: "P2", marks: 4, diff: 3, numeric: { value: 11, tol: 0.01 }, q: "A geometric sequence has \\(u_1 = 3\\) and \\(r = 2\\). Find the least value of n for which \\(S_n > 5000\\).", ms: ["\\(\\frac{3(2^n - 1)}{2 - 1} > 5000\\) [M1]", "\\(2^n > 1667.67\\) [A1]", "\\(n > 10.7\\) [A1]", "n = 11 [A1]"] },
      ],
    },
    {
      id: "math-1d", code: "1.4", unit: "Topic 1: Number and algebra", title: "Financial applications: compound interest and depreciation",
      summary: "Compound interest with different compounding periods, depreciation, finding a rate or a time, and using the GDC's TVM solver.",
      concepts: [
        { h: "Compound interest", b: "<p>$$FV = PV \\times \\left(1 + \\frac{r}{100k}\\right)^{kn}$$ where k = compounding periods per year, n = years and r is the annual rate in %. The value after each period is a geometric sequence with ratio \\(1 + \\frac{r}{100k}\\). Use the TVM solver on a GDC in Paper 2.</p>" },
        { h: "Depreciation", b: "<p>An asset that loses r% of its value each year: \\(V = V_0\\left(1 - \\frac{r}{100}\\right)^n\\). The value never reaches 0; 'the first year in which the value falls below…' needs the next whole year.</p>" },
        { h: "The TVM solver", b: "<p>Enter N = total number of periods (years × k), I% = annual rate, PV = −(amount invested), PMT = 0 for a single investment, FV = 0 or the target, P/Y = C/Y = k. Money paid out is negative, money received is positive. Write the values you entered: they earn the method mark.</p>" },
        { h: "Finding a rate or a time", b: "<p>Rate: solve \\(PV(1 + \\frac{r}{100})^n = FV\\), e.g. \\(1 + \\frac{r}{100} = \\left(\\frac{FV}{PV}\\right)^{1/n}\\). Time: solve with logarithms or the GDC table, then state the whole number of years (or periods) asked for. Inflation can be treated as a negative rate: real value ≈ \\(PV(1 + \\frac{i - \\text{inflation}}{100})^n\\).</p>" },
      ],
      terms: [
        ["Compound interest", "Interest calculated on the principal plus the interest already earned."],
        ["Depreciation", "The decrease in value of an asset over time."],
        ["Present value (PV)", "The amount invested or borrowed at the start."],
        ["Future value (FV)", "The value of an investment or loan after a given time."],
      ],
      skills: [
        { h: "Show the GDC set-up", b: "Write N, I%, PV, PMT, FV, P/Y and C/Y as entered (or the formula with numbers substituted) before the answer - this line earns the M1." },
        { h: "Number of complete years", b: "Find when the value first passes the target, e.g. with a table: n = 9 gives 11 860, n = 10 gives 12 400 → 10 years. Give integers, not 9.4." },
      ],
      examples: [
        { q: "$5000 is invested at 4% per annum compounded quarterly for 6 years. Find the final value. [3]", a: "\\(FV = 5000\\left(1 + \\frac{4}{400}\\right)^{24} = 5000(1.01)^{24} = \\$6348.67\\)." },
        { q: "A car worth $24 000 depreciates by 15% each year. Find its value after 5 years. [2]", a: "\\(24000 \\times 0.85^5 = \\$10\\,648.93\\), so about $10 649." },
      ],
      questions: [
        { id: "math-1-q5", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 6746.77, tol: 0.5 }, q: "Ana invests $5000 at 3% per annum compounded monthly. Find the value of the investment after 10 years, to the nearest cent.", ms: ["\\(5000\\left(1 + \\frac{3}{1200}\\right)^{120}\\) [M1][A1]", "= $6746.77 [A1]"] },
      ],
    },
    {
      id: "math-1e", code: "1.8", unit: "Topic 1: Number and algebra", title: "Sum of infinite convergent geometric sequences",
      summary: "When an infinite geometric series converges, the sum to infinity \\(S_\\infty = \\frac{u_1}{1 - r}\\), and finding r, \\(u_1\\) or x from a given sum.",
      concepts: [
        { h: "Convergence", b: "<p>An infinite geometric series converges (has a finite sum) only when \\(|r| < 1\\), i.e. \\(-1 < r < 1\\). Then \\(r^n \\to 0\\) as \\(n \\to \\infty\\), so \\(S_n \\to \\frac{u_1}{1 - r}\\). If \\(|r| \\ge 1\\) the series diverges and has no sum to infinity.</p>" },
        { h: "Sum to infinity", b: "<p>$$S_\\infty = \\frac{u_1}{1 - r}, \\quad |r| < 1$$ State the condition as the reason (R1). For 0 &lt; r &lt; 1 the sum is bigger than \\(u_1\\); for −1 &lt; r &lt; 0 it is smaller than \\(u_1\\).</p>" },
        { h: "Series with an unknown", b: "<p>For \\(1 + (2x - 1) + (2x - 1)^2 + \\dots\\) the ratio is \\(r = 2x - 1\\). Converges when \\(|2x - 1| < 1\\), i.e. \\(0 < x < 1\\). Then \\(S_\\infty = \\frac{1}{1 - (2x - 1)} = \\frac{1}{2 - 2x}\\).</p>" },
        { h: "Applications", b: "<p>Recurring decimals: \\(0.\\overline{27} = 0.27 + 0.0027 + \\dots\\) with \\(u_1 = 0.27\\), r = 0.01, so it equals \\(\\frac{0.27}{0.99} = \\frac{3}{11}\\). Bouncing balls: total distance = drop + 2 × (sum to infinity of the rebound heights).</p>" },
      ],
      terms: [
        ["Convergent series", "A series whose sum approaches a finite limit as n → ∞."],
        ["Divergent series", "A series whose partial sums do not approach a finite limit."],
        ["Sum to infinity", "The limit of \\(S_n\\) as n → ∞ for a convergent series, \\(S_\\infty = \\frac{u_1}{1 - r}\\)."],
      ],
      skills: [
        { h: "Justify convergence", b: "Write 'since \\(|r| < 1\\), the sum to infinity exists' before using the formula - this is often an R1 mark." },
        { h: "Find r from \\(S_\\infty\\)", b: "Set \\(\\frac{u_1}{1 - r}\\) equal to the given sum and solve; if \\(u_1\\) is unknown too, use a second equation such as \\(u_2 = u_1 r\\) and check every r satisfies \\(|r| < 1\\)." },
      ],
      examples: [
        { q: "Find the sum to infinity of 12 + 6 + 3 + …", a: "\\(r = \\frac{1}{2}\\), \\(S_\\infty = \\frac{12}{1 - 1/2} = 24\\)." },
        { q: "Write \\(0.\\overline{72}\\) as a fraction in its lowest terms. [3]", a: "\\(0.72 + 0.0072 + \\dots\\): \\(u_1 = 0.72\\), r = 0.01, so \\(S_\\infty = \\frac{0.72}{0.99} = \\frac{8}{11}\\)." },
      ],
      questions: [
        { id: "math-1-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "For which value of r does the geometric series with first term 4 have a sum to infinity of 16?", options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{1}{2}\\)", "\\(-\\frac{3}{4}\\)"], answer: 1, ms: ["\\(16 = \\frac{4}{1 - r} \\Rightarrow r = \\frac{3}{4}\\)."] },
        { id: "math-1-q4", type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 27, tol: 0.01 }, q: "Find the sum to infinity of the geometric series \\(18 + 6 + 2 + \\dots\\)", ms: ["\\(r = \\frac{1}{3}\\) [A1]", "\\(S_\\infty = \\frac{18}{1 - \\frac{1}{3}}\\) [M1]", "= 27 [A1]"] },
      ],
    },
    {
      id: "math-2", code: "1.5", unit: "Topic 1: Number and algebra", title: "Laws of exponents and introduction to logarithms",
      summary: "Laws of exponents with integer exponents, the meaning of a logarithm, logarithms with base 10 and e, and evaluating logarithms with technology.",
      concepts: [
        { h: "Laws of exponents (integer exponents)", b: "<p>$$a^m a^n = a^{m+n} \\quad \\frac{a^m}{a^n} = a^{m-n} \\quad (a^m)^n = a^{mn} \\quad (ab)^n = a^n b^n \\quad a^0 = 1 \\quad a^{-n} = \\frac{1}{a^n}$$ e.g. \\(\\frac{(2x^3)^4}{4x^5} = \\frac{16x^{12}}{4x^5} = 4x^7\\).</p>" },
        { h: "Logarithms", b: "<p>\\(a^x = b \\iff x = \\log_a b\\) (a &gt; 0, a ≠ 1, b &gt; 0): the logarithm is the power. So \\(\\log_2 32 = 5\\) because \\(2^5 = 32\\), and \\(\\log_3 \\frac{1}{9} = -2\\). Basic facts: \\(\\log_a 1 = 0\\), \\(\\log_a a = 1\\), \\(\\log_a a^k = k\\), \\(a^{\\log_a x} = x\\).</p>" },
        { h: "Base 10 and base e", b: "<p>\\(\\log x\\) (or \\(\\log_{10} x\\)) is the common logarithm; \\(\\ln x = \\log_e x\\) is the natural logarithm, with e ≈ 2.718. Both keys are on the GDC: \\(\\log 2000 = 3.30\\) (3 s.f.), \\(\\ln 5 = 1.61\\). \\(10^{\\log x} = x\\) and \\(e^{\\ln x} = x\\).</p>" },
        { h: "Same-base equations", b: "<p>When both sides can be written as powers of the same base, equate the powers: \\(2^{3x - 1} = \\frac{1}{16} = 2^{-4}\\) gives 3x − 1 = −4, so x = −1. Factorising out a common power also helps: \\(2^{x + 1} + 2^x = 3 \\times 2^x\\).</p>" },
        { h: "Logarithmic scales", b: "<p>Quantities that range over many powers of 10 use base-10 logarithms: loudness in decibels \\(L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)\\), pH \\(= -\\log_{10}[\\text{H}^+]\\). Multiplying the intensity by 10 adds 10 dB.</p>" },
      ],
      terms: [
        ["Exponent", "The power to which a base is raised, e.g. 5 in \\(2^5\\)."],
        ["Logarithm", "\\(\\log_a b\\) is the power to which a must be raised to give b."],
        ["Natural logarithm", "Logarithm to base e ≈ 2.718."],
      ],
      skills: [
        { h: "Exact answers", b: "In Paper 1 leave answers as \\(\\ln 5\\), \\(\\log 3\\), etc. unless told otherwise; in Paper 2 use the log or ln key and give 3 s.f." },
        { h: "Convert between forms", b: "Rewrite \\(\\log_a b = x\\) as \\(a^x = b\\) to evaluate or to 'un-log': \\(\\log_3(x + 5) = 2 \\Rightarrow x + 5 = 9\\)." },
      ],
      examples: [
        { q: "Simplify \\(\\frac{(2x^3)^4}{4x^5}\\). [2]", a: "\\((2x^3)^4 = 16x^{12}\\), so the expression is \\(\\frac{16x^{12}}{4x^5} = 4x^7\\)." },
        { q: "Find the exact value of \\(\\log_2 32 + \\log_{10} 0.001\\). [2]", a: "\\(2^5 = 32\\) so \\(\\log_2 32 = 5\\); \\(10^{-3} = 0.001\\) so \\(\\log_{10} 0.001 = -3\\). The total is 2." },
      ],
      questions: [
        { id: "math-2-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(\\log_3 81 =\\)", options: ["3", "4", "27", "\\(\\frac{1}{4}\\)"], answer: 1, ms: ["\\(3^4 = 81\\)."] },
      ],
    },
    {
      id: "math-2b", code: "1.7", unit: "Topic 1: Number and algebra", title: "Laws of logarithms and exponential equations",
      summary: "Rational exponents, the laws of logarithms, change of base, and solving exponential and logarithmic equations, including those that lead to quadratics.",
      concepts: [
        { h: "Rational exponents", b: "<p>$$a^{\\frac{1}{n}} = \\sqrt[n]{a} \\qquad a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^m$$ Take the root first to keep numbers small: \\(16^{\\frac{3}{4}} = 2^3 = 8\\), \\(27^{-\\frac{2}{3}} = \\frac{1}{9}\\).</p>" },
        { h: "Laws of logarithms", b: "<p>$$\\log_a xy = \\log_a x + \\log_a y \\quad \\log_a \\frac{x}{y} = \\log_a x - \\log_a y \\quad \\log_a x^m = m \\log_a x$$ There is no law for \\(\\log_a(x + y)\\). Change of base: \\(\\log_a x = \\frac{\\log_b x}{\\log_b a}\\), e.g. \\(\\log_4 x = \\frac{\\log_2 x}{2}\\).</p>" },
        { h: "Solving exponential equations", b: "<p>Solve \\(a^x = b\\) by taking logs: \\(x = \\frac{\\ln b}{\\ln a}\\). With different bases on both sides, take ln of both sides and collect the x terms: \\(2^{x+3} = 5^x \\Rightarrow x = \\frac{3\\ln 2}{\\ln 5 - \\ln 2} = \\frac{\\ln 8}{\\ln 2.5}\\). Hidden quadratics: let \\(y = 3^x\\) in \\(9^x - 4 \\cdot 3^x + 3 = 0\\), and reject any y ≤ 0.</p>" },
        { h: "Solving logarithmic equations", b: "<p>Combine into a single log, then 'un-log': \\(\\log_2(x + 3) + \\log_2(x - 3) = 4 \\Rightarrow x^2 - 9 = 16\\). Every solution must make each original log argument positive - reject the others with a reason.</p>" },
      ],
      terms: [
        ["Change of base", "The rule \\(\\log_a x = \\frac{\\log_b x}{\\log_b a}\\)."],
        ["Exponential equation", "An equation with the unknown in an exponent, e.g. \\(3^{2x} = 7\\)."],
        ["Rational exponent", "An exponent that is a fraction, \\(a^{m/n} = (\\sqrt[n]{a})^m\\)."],
      ],
      skills: [
        { h: "Exact answers", b: "In Paper 1 leave answers as \\(\\ln 5\\), \\(\\frac{\\ln 3}{\\ln 2}\\), etc. unless told otherwise." },
        { h: "Express in terms of given letters", b: "With \\(\\log_a 2 = p\\) and \\(\\log_a 3 = q\\), write the number as a product of powers of 2 and 3: \\(\\log_a 12 = \\log_a (2^2 \\times 3) = 2p + q\\)." },
      ],
      examples: [
        { q: "Solve \\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\).", a: "\\(\\log_2(x^2 - 9) = 4 \\Rightarrow x^2 - 9 = 16 \\Rightarrow x = \\pm 5\\). Reject x = −5 (log of negative), so x = 5." },
        { q: "Solve \\(3^{2x} = 7\\), giving an exact answer.", a: "\\(2x \\ln 3 = \\ln 7 \\Rightarrow x = \\frac{\\ln 7}{2 \\ln 3}\\)." },
      ],
      questions: [
        { id: "math-2-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Simplify \\(\\log_a 12 - \\log_a 3 + 2\\log_a 2\\).", options: ["\\(\\log_a 4\\)", "\\(\\log_a 16\\)", "\\(\\log_a 13\\)", "\\(2\\log_a 4 + 1\\)"], answer: 1, ms: ["\\(\\log_a \\frac{12 \\times 4}{3} = \\log_a 16\\)."] },
        { id: "math-2-q3", type: "short", paper: "P1", marks: 5, diff: 3, numeric: { value: 5, tol: 0.001 }, q: "Solve \\(\\log_2(x + 3) + \\log_2(x - 3) = 4\\).", ms: ["\\(\\log_2((x + 3)(x - 3)) = 4\\) [M1]", "\\(x^2 - 9 = 16\\) [A1]", "\\(x = \\pm 5\\) [A1]", "Reject x = −5 with reason [R1]", "x = 5 [A1]"] },
        { id: "math-2-q5", type: "short", paper: "P1", marks: 3, diff: 2, q: "Solve \\(9^x - 4 \\times 3^x + 3 = 0\\).", ms: ["Let \\(y = 3^x\\): \\(y^2 - 4y + 3 = 0\\) [M1]", "\\(y = 1\\) or \\(y = 3\\) [A1]", "x = 0 or x = 1 [A1]"] },
        { id: "math-2-q6", type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 8, tol: 0.001 }, q: "Evaluate \\(16^{\\frac{3}{4}}\\).", ms: ["\\((\\sqrt[4]{16})^3 = 2^3\\) [M1]", "= 8 [A1]"] },
      ],
    },
    {
      id: "math-2c", code: "2.9", unit: "Topic 2: Functions", title: "Exponential and logarithmic functions",
      summary: "Graphs of \\(y = a^x\\), \\(y = e^x\\), \\(y = \\log_a x\\) and \\(y = \\ln x\\) as inverse functions, their asymptotes and intercepts, and exponential growth and decay models.",
      concepts: [
        { h: "Exponential functions", b: "<p>\\(f(x) = a^x\\) (a &gt; 0, a ≠ 1) has domain ℝ, range \\(f(x) > 0\\), y-intercept (0, 1) and horizontal asymptote y = 0. It is increasing if a &gt; 1 (growth) and decreasing if 0 &lt; a &lt; 1 (decay). \\(y = e^x\\) is the exponential with base e ≈ 2.718.</p>" },
        { h: "Logarithmic functions", b: "<p>\\(f(x) = \\log_a x\\) is the inverse of \\(a^x\\): domain x &gt; 0, range ℝ, x-intercept (1, 0) and vertical asymptote x = 0. \\(y = \\ln x\\) and \\(y = e^x\\) are reflections of each other in y = x, with \\(\\ln(e^x) = x\\) and \\(e^{\\ln x} = x\\).</p>" },
        { h: "Exponential models", b: "<p>\\(N = N_0 e^{kt}\\): growth if k &gt; 0, decay if k &lt; 0; \\(N_0\\) is the value at t = 0. Models of the form \\(T = c + Ae^{-kt}\\) (e.g. cooling) have horizontal asymptote T = c, the long-term value. To find k from one data point, substitute, divide by the coefficient and take ln.</p>" },
      ],
      terms: [
        ["Exponential function", "A function of the form \\(f(x) = a^x\\), a &gt; 0, a ≠ 1."],
        ["Asymptote", "A line that a curve approaches but does not reach."],
        ["Half-life", "The time taken for a decaying quantity to halve."],
      ],
      skills: [
        { h: "Read a model", b: "Initial value: put t = 0. Long-term value: let t → ∞ (the exponential term → 0). Then answer in context with units." },
        { h: "Sketching", b: "Show the asymptote as a dashed line with its equation, the intercept(s) as coordinates, and the correct end behaviour; for \\(y = \\ln(x - h)\\) the asymptote is x = h." },
      ],
      examples: [
        { q: "A population is modelled by \\(P = 200e^{0.05t}\\), t in hours. Find the time for the population to double. [3]", a: "\\(400 = 200e^{0.05t}\\), so \\(e^{0.05t} = 2\\) and \\(t = \\frac{\\ln 2}{0.05} = 13.9\\) hours (3 s.f.)." },
        { q: "Let \\(f(x) = 4 - 2e^x\\). State the horizontal asymptote and find the x-intercept. [3]", a: "As \\(x \\to -\\infty\\), \\(e^x \\to 0\\), so the asymptote is y = 4. \\(4 - 2e^x = 0 \\Rightarrow e^x = 2 \\Rightarrow x = \\ln 2\\), so the x-intercept is \\((\\ln 2, 0)\\)." },
      ],
      questions: [
        { id: "math-2-q4", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 13.4, tol: 0.06 }, q: "A population of bacteria is modelled by \\(N = 200e^{0.15t}\\), where t is in hours. Find the time taken for the population to reach 1500.", ms: ["\\(1500 = 200e^{0.15t}\\) [M1]", "\\(t = \\frac{\\ln 7.5}{0.15}\\) [A1]", "t = 13.4 hours (accept 13.4-13.5) [A1]"] },
      ],
    },
    {
      id: "math-3", code: "1.6", unit: "Topic 1: Number and algebra", title: "Simple deductive proof",
      summary: "Simple deductive proof, LHS to RHS, proofs about integers using 2n, 2n + 1 and n, n + 1, and disproof by counterexample.",
      concepts: [
        { h: "Deductive proof", b: "<p>Start from one side (usually the more complicated) and manipulate to obtain the other: LHS = … = RHS. Use symbols for general integers: even = 2n, odd = 2n + 1, consecutive = n, n + 1. Conclude with a statement.</p>" },
        { h: "Identities", b: "<p>An identity (≡) is true for every value of the variable, e.g. \\((a + b)^2 - (a - b)^2 \\equiv 4ab\\). To prove one, never work on both sides at once and never start from what you want to show; expand, simplify or combine fractions on one side only.</p>" },
        { h: "Proofs with integers", b: "<p>Write the general case with n ∈ ℤ, simplify, then factor out the number you need: \\((2n + 1)^2 - (2n - 1)^2 = 8n\\), which is a multiple of 8 because n is an integer. Finish with a sentence saying why the result follows.</p>" },
        { h: "Counterexamples", b: "<p>One example never proves a general statement, but one counterexample disproves it: \\(n^2 + n + 41\\) is not prime for n = 40, because \\(40^2 + 40 + 41 = 41^2\\).</p>" },
      ],
      terms: [["Identity", "An equation true for all values of the variable (≡)."], ["Counterexample", "A single case that shows a general statement is false."], ["Deductive proof", "A chain of logical steps from known facts to the required result."]],
      skills: [
        { h: "Layout of a proof", b: "LHS = … = … = RHS, one step per line, then a concluding sentence such as 'which is a multiple of 3 since n + 1 is an integer'." },
        { h: "Choosing the general form", b: "Two consecutive odd numbers: 2n + 1 and 2n + 3. Three consecutive integers: n, n + 1, n + 2. Any multiple of 5: 5n." },
      ],
      examples: [{ q: "Prove that the sum of any three consecutive integers is divisible by 3. [3]", a: "Let the integers be n, n + 1 and n + 2, where n ∈ ℤ. Their sum is 3n + 3 = 3(n + 1). Since n + 1 is an integer, the sum is a multiple of 3." }],
      questions: [
        { id: "math-3-q4", type: "short", paper: "P1", marks: 3, diff: 2, q: "Prove that the sum of any three consecutive integers is divisible by 3.", ms: ["Let integers be n, n + 1, n + 2 [M1]", "Sum = 3n + 3 = 3(n + 1) [A1]", "which is a multiple of 3 since n + 1 is an integer [R1]"] },
        { id: "math-3-q5", type: "short", paper: "P1", marks: 3, diff: 2, q: "Show that \\((n + 1)^2 - (n - 1)^2 = 4n\\) for all n.", ms: ["Expand LHS: \\(n^2 + 2n + 1 - (n^2 - 2n + 1)\\) [M1]", "\\(= 4n\\) [A1]", "= RHS [AG]"] },
      ],
    },
    {
      id: "math-3b", code: "1.9", unit: "Topic 1: Number and algebra", title: "The binomial theorem",
      summary: "Expanding \\((a + b)^n\\) for \\(n \\in \\mathbb{N}\\) with Pascal's triangle and \\(^nC_r\\), the general term, finding a coefficient or constant term, and simple approximations.",
      concepts: [
        { h: "Binomial theorem", b: "<p>$$(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r \\qquad \\binom{n}{r} = {}^nC_r = \\frac{n!}{r!(n-r)!}$$ Pascal's triangle gives coefficients for small n. The general term is \\(\\binom{n}{r}a^{n-r}b^r\\).</p>" },
        { h: "Pascal's triangle and nCr", b: "<p>Row n of Pascal's triangle lists \\(\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}\\); each entry is the sum of the two above it. Symmetry: \\(\\binom{n}{r} = \\binom{n}{n-r}\\). The expansion of \\((a + b)^n\\) has n + 1 terms.</p>" },
        { h: "Finding a term or coefficient", b: "<p>Write the general term with every power of x collected, set the power equal to the target (0 for the constant term) and solve for r. Include signs and coefficients inside b: in \\((x - \\frac{2}{x})^6\\), \\(b = -\\frac{2}{x}\\), the power is 6 − 2r, so the constant term has r = 3.</p>" },
      ],
      terms: [["Binomial coefficient", "\\(\\binom{n}{r}\\), the number of ways of choosing r items from n."], ["Pascal's triangle", "A triangle of numbers in which row n gives the coefficients of \\((a + b)^n\\)."], ["Constant term", "The term independent of x in an expansion."]],
      skills: [
        { h: "Finding a specific term", b: "Write the general term with powers of x, set the power equal to the target, solve for r, then evaluate. Include negative signs in b (e.g. b = −2x)." },
        { h: "Approximations", b: "To estimate \\(1.02^5\\), use \\((1 + x)^5\\) with x = 0.02 and keep the first few terms: 1 + 0.1 + 0.004 + … ≈ 1.104." },
      ],
      examples: [{ q: "Find the coefficient of \\(x^3\\) in \\((2 + x)^5\\).", a: "Term: \\(\\binom{5}{3}2^2x^3 = 10 \\times 4 x^3\\), coefficient 40." }],
      questions: [
        { id: "math-3-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "\\(\\binom{6}{2} =\\)", options: ["12", "15", "30", "36"], answer: 1, ms: ["\\(\\frac{6 \\times 5}{2} = 15\\)."] },
        { id: "math-3-q2", type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 40, tol: 0.001 }, q: "Find the coefficient of \\(x^3\\) in the expansion of \\((2 + x)^5\\).", ms: ["Correct term \\(\\binom{5}{3}(2)^2(x)^3\\) [M1]", "\\(10 \\times 4\\) [A1]", "40 [A1]"] },
        { id: "math-3-q3", type: "short", paper: "P1", marks: 4, diff: 3, numeric: { value: -160, tol: 0.001 }, q: "Find the constant term in the expansion of \\(\\left(x - \\frac{2}{x}\\right)^6\\).", ms: ["General term \\(\\binom{6}{r}x^{6-r}\\left(-\\frac{2}{x}\\right)^r\\) [M1]", "Power of x: 6 − 2r = 0 → r = 3 [A1]", "\\(\\binom{6}{3}(-2)^3 = 20 \\times (-8)\\) [M1]", "−160 [A1]"] },
      ],
    },

    // ---------------- TOPIC 2 ----------------
    {
      id: "math-4", code: "2.1", unit: "Topic 2: Functions", title: "Equations of a straight line",
      summary: "Gradient, the forms \\(y = mx + c\\), \\(ax + by + d = 0\\) and \\(y - y_1 = m(x - x_1)\\), parallel and perpendicular lines, intersections and linear models.",
      concepts: [
        { h: "Gradient and forms of a line", b: "<p>Gradient \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Forms: \\(y = mx + c\\) (gradient m, y-intercept c), \\(ax + by + d = 0\\) (general form, usually with integer a, b, d), \\(y - y_1 = m(x - x_1)\\) (point-gradient form). To read the gradient from \\(ax + by + d = 0\\), rearrange to y = …: \\(m = -\\frac{a}{b}\\).</p>" },
        { h: "Parallel and perpendicular lines", b: "<p>Parallel lines have equal gradients. Perpendicular lines have \\(m_1 m_2 = -1\\): flip the gradient and change its sign (2 → \\(-\\frac{1}{2}\\)). A perpendicular bisector of AB passes through the midpoint \\(\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\) with gradient \\(-\\frac{1}{m_{AB}}\\).</p>" },
        { h: "Intersections and linear models", b: "<p>The intersection of two lines is the solution of their simultaneous equations. In a linear model \\(C = 3.5 + 1.8d\\), the gradient 1.8 is the rate of change (cost per km) and the intercept 3.5 is the fixed cost when d = 0.</p>" },
      ],
      terms: [["Gradient", "The rate of change of y with respect to x, rise ÷ run."], ["y-intercept", "The point where a graph meets the y-axis (x = 0)."], ["Perpendicular", "Meeting at a right angle; for lines, \\(m_1 m_2 = -1\\)."]],
      skills: [
        { h: "Equation through a point", b: "Use \\(y - y_1 = m(x - x_1)\\) with the given point, then rearrange into the form the question asks for (y = mx + c or ax + by + d = 0 with integers)." },
        { h: "Interpreting parameters", b: "In context state what the gradient and intercept mean, with units: 'the cost increases by $1.80 for each extra km'." },
      ],
      examples: [{ q: "Find the equation of the line through (3, −2) perpendicular to \\(4x + y = 7\\). Give it in the form ax + by + d = 0. [4]", a: "The given line is y = −4x + 7, gradient −4, so the perpendicular gradient is \\(\\frac{1}{4}\\). \\(y + 2 = \\frac{1}{4}(x - 3)\\) gives 4y + 8 = x − 3, so x − 4y − 11 = 0." }],
      questions: [
        { id: "math-4-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the gradient of a line perpendicular to \\(y = 4x - 1\\)?", options: ["4", "−4", "\\(\\frac{1}{4}\\)", "\\(-\\frac{1}{4}\\)"], answer: 3, ms: ["\\(m_1 m_2 = -1\\)."] },
        { id: "math-4-q5", type: "short", paper: "P1", marks: 4, diff: 2, q: "Find the equation of the line through A(1, 2) and B(5, 10). Give your answer in the form y = mx + c.", ms: ["\\(m = \\frac{10 - 2}{5 - 1} = 2\\) [M1][A1]", "\\(y - 2 = 2(x - 1)\\) [M1]", "y = 2x [A1]"] },
      ],
    },
    {
      id: "math-4b", code: "2.2", unit: "Topic 2: Functions", title: "Functions: domain, range and inverse as reflection",
      summary: "The concept of a function, function notation, domain and range, one-to-one functions, and the inverse function as a reflection in y = x.",
      concepts: [
        { h: "Functions", b: "<p>A function maps each element of the <strong>domain</strong> to exactly one element of the <strong>range</strong>. Restrictions: no division by zero; even roots and logs need non-negative / positive arguments. Vertical line test: a graph is a function if every vertical line meets it at most once.</p>" },
        { h: "Domain and range", b: "<p>Largest possible domain: exclude values that make a denominator zero or a square-root/log argument invalid, e.g. \\(\\sqrt{6 - 2x}\\) needs x ≤ 3. Range: read from the graph or the vertex/asymptote, e.g. \\(x^2 - 4x + 7 = (x - 2)^2 + 3 \\ge 3\\). On a restricted domain check the end points as well as any turning point.</p>" },
        { h: "Inverse functions", b: "<p>\\(f^{-1}\\) undoes f: if f(a) = b then \\(f^{-1}(b) = a\\). Only one-to-one functions have an inverse (horizontal line test), so a quadratic needs its domain restricted at the vertex. The graph of \\(f^{-1}\\) is the reflection of the graph of f in y = x; the domain of \\(f^{-1}\\) is the range of f and vice versa.</p>" },
      ],
      terms: [["Domain", "The set of input values for which a function is defined."], ["Range", "The set of output values of a function."], ["One-to-one", "Each output corresponds to exactly one input."], ["Inverse function", "The function \\(f^{-1}\\) that reverses f, so that \\(f^{-1}(f(x)) = x\\)."]],
      skills: [
        { h: "Domain and range notation", b: "Write x ≥ 2, \\(x \\neq 3\\) or \\(x \\in \\mathbb{R}\\); for the range use f(x) or y, e.g. \\(f(x) \\ge 1\\)." },
        { h: "Points on the inverse", b: "If (2, 5) lies on f, then (5, 2) lies on \\(f^{-1}\\): swap the coordinates. Asymptotes swap too: y = 2 becomes x = 2." },
      ],
      examples: [{ q: "Let \\(f(x) = \\sqrt{6 - 2x} + 1\\). Find the largest possible domain of f and the corresponding range. [3]", a: "Need \\(6 - 2x \\ge 0\\), so x ≤ 3. The square root is ≥ 0, so f(x) ≥ 1." }],
      questions: [
        { id: "math-4-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "What is the largest possible domain of \\(f(x) = \\sqrt{5 - x}\\)?", options: ["x ≥ 5", "x ≤ 5", "x > 5", "all real x"], answer: 1, ms: ["Need 5 − x ≥ 0."] },
      ],
    },
    {
      id: "math-4c", code: "2.3", unit: "Topic 2: Functions", title: "The graph of a function",
      summary: "Creating a sketch from information given or a context, using technology to graph functions, and reading values, domain and range from a given graph.",
      concepts: [
        { h: "Sketch or draw?", b: "<p>A <strong>sketch</strong> shows the general shape and the key features (intercepts, turning points, asymptotes, end points) labelled with coordinates or equations; it need not be to scale. A <strong>drawn</strong> graph is accurate and to scale, on given axes. Both must respect the stated domain.</p>" },
        { h: "Creating a sketch with technology", b: "<p>On a GDC choose a window that shows every key feature, then transfer it: mark the axes, the scale or key values, and write coordinates to 3 s.f. Use closed dots ● for included end points and open dots ○ for excluded ones.</p>" },
        { h: "Reading a graph", b: "<p>f(a) is the y-coordinate of the point with x = a; solving f(x) = k means finding the x-values where the horizontal line y = k meets the graph. The range is the set of y-values the graph covers on the given domain - look at the highest and lowest points, including end points.</p>" },
        { h: "Graphs from a context", b: "<p>In context the domain is often restricted (time ≥ 0, a number of items ≥ 0). Label the axes with the variables and units, and show the shape the context implies: a ball's height rises then falls; a cooling drink approaches room temperature.</p>" },
      ],
      terms: [["Sketch", "A graph showing the general shape and relevant features, not necessarily to scale."], ["Window", "The x- and y-intervals shown on a GDC screen."], ["End point", "A point at the end of a restricted domain, shown with a closed or open dot."]],
      skills: [
        { h: "Sketch checklist", b: "Domain respected · intercepts as coordinates · turning points · asymptotes as dashed lines with equations · correct end behaviour · axes labelled." },
        { h: "Composite values from a graph", b: "For \\((f \\circ f)(2)\\), read f(2) from the graph first, then read f of that value." },
      ],
      examples: [{ q: "Let \\(f(x) = x^2 - 4x + 1\\) for \\(0 \\le x \\le 5\\). Sketch the graph and write down the range of f. [4]", a: "Vertex (2, −3); f(0) = 1 and f(5) = 6. The sketch is a U-shape from (0, 1) down to (2, −3) and up to (5, 6), with closed end points. Range: −3 ≤ f(x) ≤ 6." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "For a function f, \\(f(3) = -1\\). Which point lies on the graph of \\(y = f(x)\\)?", options: ["(−1, 3)", "(3, −1)", "(3, 1)", "(−3, −1)"], answer: 1, ms: ["B - the point is (x, f(x)) = (3, −1)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "The graph of \\(y = f(x)\\), for \\(-2 \\le x \\le 4\\), rises from (−2, −3) to a maximum at (1, 6) and then falls to (4, 2). What is the range of f?", options: ["\\(-3 \\le f(x) \\le 6\\)", "\\(2 \\le f(x) \\le 6\\)", "\\(-2 \\le f(x) \\le 4\\)", "\\(-3 \\le f(x) \\le 2\\)"], answer: 0, ms: ["A - lowest point −3 (end point), highest point 6 (maximum)."] },
        { type: "mcq", paper: "P2", marks: 1, diff: 2, q: "Which GDC window shows both turning points of \\(y = x^3 - 12x\\)?", options: ["\\(-5 \\le x \\le 5,\\ -20 \\le y \\le 20\\)", "\\(-1 \\le x \\le 1,\\ -10 \\le y \\le 10\\)", "\\(-5 \\le x \\le 5,\\ -10 \\le y \\le 10\\)", "\\(0 \\le x \\le 5,\\ -20 \\le y \\le 20\\)"], answer: 0, ms: ["A - the turning points are (−2, 16) and (2, −16), so the window needs |x| ≥ 2 and |y| ≥ 16."] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Sketch the graph of \\(y = (x - 1)(x + 3)\\) for \\(-4 \\le x \\le 2\\), labelling the axis intercepts, the vertex and the end points.", ms: ["x-intercepts (−3, 0) and (1, 0) [A1]", "y-intercept (0, −3) [A1]", "vertex (−1, −4) [A1]", "end points (−4, 5) and (2, 5), U-shape drawn only for −4 ≤ x ≤ 2 [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 2, numeric: { value: 8.85, tol: 0.02 }, q: "A ball is thrown upwards. Its height in metres after t seconds is \\(h(t) = 1.5 + 12t - 4.9t^2\\). (a) Use your GDC to sketch the graph of h for \\(0 \\le t \\le 2.5\\), labelling the maximum point. (b) Write down the maximum height of the ball.", ms: ["(a) parabola opening downwards starting at (0, 1.5) [A1]", "maximum point (1.22, 8.85) labelled [A1]", "(b) maximum from the graph / GDC [M1]", "8.85 m [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "The graph of \\(y = f(x)\\), for \\(-3 \\le x \\le 3\\), consists of two straight line segments, from (−3, 4) to (0, −2) and from (0, −2) to (3, 1). (a) Write down \\(f(0)\\). (b) Find \\(f(-1)\\). (c) Write down the range of f.", ms: ["(a) \\(f(0) = -2\\) [A1]", "(b) gradient −2, so \\(f(x) = -2x - 2\\) and \\(f(-1) = 0\\) [A1]", "(c) \\(-2 \\le f(x) \\le 4\\) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = 3 - 2x\\) for \\(-1 \\le x < 4\\). Write down the coordinates of the end points of the graph of f, stating whether each is included, and write down the range of f.", ms: ["(−1, 5), included (closed dot) [A1]", "(4, −5), not included (open dot) [A1]", "range \\(-5 < f(x) \\le 5\\) [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, q: "The temperature of a drink, T °C, t minutes after it is made is \\(T = 20 + 65(0.9)^t\\). Sketch the graph of T for \\(0 \\le t \\le 40\\), showing the T-intercept and the asymptote, and state what the asymptote means in context.", ms: ["T-intercept (0, 85) [A1]", "decreasing curve approaching the dashed asymptote T = 20 [A1]", "the drink cools towards the room temperature of 20 °C [R1]"] },
      ],
    },
    {
      id: "math-4d", code: "2.4", unit: "Topic 2: Functions", title: "Key features of graphs and intersections",
      summary: "Determining key features of graphs (maximum and minimum values, intercepts, symmetry, vertex, zeros, asymptotes) and finding points of intersection of two curves or lines using technology.",
      concepts: [
        { h: "Key features", b: "<p>Zeros (roots, x-intercepts), the y-intercept, local maximum and minimum points, the vertex of a parabola, lines of symmetry, and vertical and horizontal asymptotes. A GDC finds zeros, maxima and minima directly; write each as coordinates to 3 s.f.</p>" },
        { h: "Intersections using technology", b: "<p>To find where y = f(x) and y = g(x) meet, graph both and use 'intersect', or solve f(x) − g(x) = 0 with the solver. Each intersection is a point (x, y); the x-coordinates are the solutions of f(x) = g(x). Check the window shows every intersection.</p>" },
        { h: "Maximum and minimum values", b: "<p>The maximum value of a function is a y-value; the point where it occurs is (x, y). On a restricted domain the greatest or least value may be at an end point rather than at a turning point.</p>" },
      ],
      terms: [["Zero of a function", "A value of x for which f(x) = 0."], ["Local maximum", "A point higher than all nearby points on the graph."], ["Point of intersection", "A point that lies on both graphs."]],
      skills: [
        { h: "Using the GDC (Paper 2)", b: "Graph, find intersections, zeros, max/min; set a sensible window and sketch with labelled key points (to 3 s.f.)." },
        { h: "Write what you did", b: "State the equation or functions you graphed, e.g. 'graphing \\(y = x^3 - 2x\\) and \\(y = e^x - 3\\)', before giving the answers." },
      ],
      examples: [{ q: "Let \\(f(x) = x^3 - 3x + 1\\). Use your GDC to find the coordinates of the local maximum and minimum points. [2]", a: "From the graph: local maximum (−1, 3) and local minimum (1, −1)." }],
      questions: [
        { type: "mcq", paper: "P2", marks: 1, diff: 2, q: "Using a GDC, the zeros of \\(f(x) = x^3 - 4x + 1\\) are", options: ["−2.11, 0.254, 1.86", "−2.00, 0.250, 2.00", "−1.86, −0.254, 2.11", "0.254 only"], answer: 0, ms: ["A - from the graph or polynomial solver: x = −2.11, 0.254, 1.86 (3 s.f.)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "The graph of a quadratic function f has its vertex at (3, −2), and \\(f(1) = 6\\). What is \\(f(5)\\)?", options: ["6", "−2", "2", "10"], answer: 0, ms: ["A - the graph is symmetric about x = 3, and 5 is the same distance from 3 as 1."] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 1.77, tol: 0.01 }, q: "Let \\(f(x) = 0.5x^3 - 2x\\) and \\(g(x) = 1 - x\\). Use your GDC to find the coordinates of the point of intersection of the graphs of f and g.", ms: ["graphs \\(y = 0.5x^3 - 2x\\) and \\(y = 1 - x\\) / solves \\(0.5x^3 - x - 1 = 0\\) [M1]", "x = 1.77 [A1]", "y = −0.769, so (1.77, −0.769) [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, q: "Let \\(f(x) = xe^{-x}\\) for \\(x \\ge 0\\). (a) Find the coordinates of the maximum point of the graph of f. (b) Write down the equation of the horizontal asymptote of the graph of f.", ms: ["(a) GDC maximum used [M1]", "(1, 0.368) [A1]", "(b) y = 0 [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 2, q: "Let \\(f(x) = x^4 - 4x^2 + 2\\). (a) Write down the y-intercept of the graph of f. (b) Find the coordinates of the two local minimum points. (c) Write down the equation of the line of symmetry of the graph.", ms: ["(a) (0, 2) [A1]", "(b) (−1.41, −2) [A1]", "(1.41, −2) [A1]", "(c) x = 0 (the y-axis) [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 2.12, tol: 0.01 }, q: "Find the coordinates of the point where the graphs of \\(y = e^{0.5x}\\) and \\(y = 5 - x\\) intersect.", ms: ["graphs both functions / solves \\(e^{0.5x} = 5 - x\\) [M1]", "x = 2.12 [A1]", "y = 2.88, so (2.12, 2.88) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 1, q: "For the graph of \\(y = 3 - 2e^{-x}\\), write down (a) the y-intercept (b) the equation of the horizontal asymptote (c) the range.", ms: ["(a) (0, 1) [A1]", "(b) y = 3 [A1]", "(c) y < 3 [A1]"] },
      ],
    },
    {
      id: "math-4e", code: "2.5", unit: "Topic 2: Functions", title: "Composite and inverse functions",
      summary: "Composite functions, the identity function, and finding the inverse function \\(f^{-1}(x)\\) algebraically, with its domain.",
      concepts: [
        { h: "Composite functions", b: "<p>\\((f \\circ g)(x) = f(g(x))\\) - apply g first. In general \\(f \\circ g \\neq g \\circ f\\). The domain of \\(f \\circ g\\) contains the x-values for which g(x) is defined and g(x) lies in the domain of f.</p>" },
        { h: "Identity and inverse", b: "<p>The identity function is \\(x \\mapsto x\\). \\((f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x\\). To find \\(f^{-1}\\): write y = f(x), swap x and y, make y the subject, and state the domain of \\(f^{-1}\\) (= range of f). A self-inverse function satisfies \\(f^{-1} = f\\), e.g. \\(f(x) = \\frac{4}{x}\\).</p>" },
      ],
      terms: [["Composite function", "A function formed by applying one function to the output of another, \\(f(g(x))\\)."], ["Identity function", "The function \\(x \\mapsto x\\)."], ["Self-inverse", "A function equal to its own inverse."]],
      skills: [
        { h: "Number inputs", b: "For \\((f\\circ g)(2)\\) find g(2) first as a number, then put it into f. For \\(f^{-1}(a)\\) as a number just solve f(x) = a." },
        { h: "Rational inverse check", b: "\\(\\frac{ax + b}{cx + d}\\) has inverse \\(\\frac{dx - b}{-cx + a}\\) - use it to check your answer." },
      ],
      examples: [{ q: "Given \\(f(x) = 2x - 3\\) and \\(g(x) = x^2 + 1\\), find \\((f \\circ g)(x)\\) and \\(f^{-1}(x)\\).", a: "\\(f(g(x)) = 2(x^2 + 1) - 3 = 2x^2 - 1\\). For the inverse: \\(y = 2x - 3 \\Rightarrow x = \\frac{y + 3}{2}\\), so \\(f^{-1}(x) = \\frac{x + 3}{2}\\)." }],
      questions: [
        { id: "math-4-q3", type: "short", paper: "P1", marks: 3, diff: 1, numeric: { value: 17, tol: 0.001 }, q: "Let \\(f(x) = 2x - 3\\) and \\(g(x) = x^2 + 1\\). Find \\((f \\circ g)(3)\\).", ms: ["g(3) = 10 [A1]", "f(10) = 2(10) − 3 [M1]", "= 17 [A1]"] },
        { id: "math-4-q4", type: "short", paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = \\frac{3x + 1}{x - 2},\\ x \\neq 2\\). Find \\(f^{-1}(x)\\).", ms: ["Swap x and y: \\(x = \\frac{3y + 1}{y - 2}\\) [M1]", "\\(xy - 2x = 3y + 1 \\Rightarrow y(x - 3) = 2x + 1\\) [A1]", "\\(f^{-1}(x) = \\frac{2x + 1}{x - 3},\\ x \\neq 3\\) [A1]"] },
      ],
    },
    {
      id: "math-5", code: "2.6", unit: "Topic 2: Functions", title: "The quadratic function",
      summary: "The forms \\(ax^2 + bx + c\\), \\(a(x - h)^2 + k\\) and \\(a(x - p)(x - q)\\), the vertex, axis of symmetry and intercepts, and quadratic models.",
      concepts: [
        { h: "Three forms", b: "<p>Standard: \\(f(x) = ax^2 + bx + c\\) (y-intercept c, axis \\(x = -\\frac{b}{2a}\\)). Vertex: \\(a(x - h)^2 + k\\) (vertex (h, k)). Factorised: \\(a(x - p)(x - q)\\) (roots p, q).</p>" },
        { h: "Axis of symmetry and vertex", b: "<p>The graph of $$y=ax^2+bx+c$$ has <strong>axis of symmetry</strong> $$x=-\\frac{b}{2a}$$ (halfway between the roots), and the vertex lies on it: substitute this x to get the y-coordinate. In vertex form $$y=a(x-h)^2+k$$ the axis is x = h and the vertex (h, k). If a &gt; 0 the vertex is a minimum; if a &lt; 0 it is a maximum.</p>" },
        { h: "Quadratic models", b: "<p>Heights of projectiles, areas with a fixed perimeter and revenue are quadratic. The maximum or minimum value is the y-coordinate of the vertex and it occurs at \\(x = -\\frac{b}{2a}\\). State the answer in context with units and check it lies in the domain of the model.</p>" },
      ],
      terms: [["Vertex", "The turning point of a parabola."], ["Axis of symmetry", "The vertical line \\(x = -\\frac{b}{2a}\\) through the vertex of a parabola."], ["Parabola", "The U-shaped graph of a quadratic function."]],
      skills: [
        { h: "Completing the square", b: "\\(2x^2 - 12x + 13 = 2(x^2 - 6x) + 13 = 2(x - 3)^2 - 18 + 13 = 2(x - 3)^2 - 5\\): vertex (3, −5)." },
        { h: "Equation from a graph", b: "Roots given → use \\(a(x - p)(x - q)\\); vertex given → use \\(a(x - h)^2 + k\\); then substitute one more point to find a." },
      ],
      examples: [{ q: "Write \\(x^2 - 6x + 11\\) in the form \\((x - h)^2 + k\\) and state the vertex of its graph. [3]", a: "\\(x^2 - 6x + 11 = (x - 3)^2 - 9 + 11 = (x - 3)^2 + 2\\). The vertex is (3, 2)." }],
      questions: [
        { id: "math-5-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "The vertex of \\(y = 2(x - 3)^2 + 5\\) is:", options: ["(3, 5)", "(−3, 5)", "(3, −5)", "(2, 5)"], answer: 0, ms: ["A - in the form \\(a(x - h)^2 + k\\) the vertex is (h, k) = (3, 5)."] },
        { id: "math-5-q4", type: "short", paper: "P1", marks: 4, diff: 2, q: "Write \\(x^2 - 6x + 11\\) in the form \\((x - h)^2 + k\\) and hence state the coordinates of the vertex of \\(y = x^2 - 6x + 11\\).", ms: ["\\((x - 3)^2 - 9 + 11\\) [M1]", "\\((x - 3)^2 + 2\\), so h = 3 [A1]", "k = 2 [A1]", "Vertex (3, 2) [A1]"] },
      ],
    },
    {
      id: "math-5b", code: "2.7", unit: "Topic 2: Functions", title: "Quadratic equations, inequalities and the discriminant",
      summary: "Solving quadratic equations by factorising, completing the square, the quadratic formula or a GDC, solving quadratic inequalities, and the discriminant \\(\\Delta = b^2 - 4ac\\).",
      concepts: [
        { h: "Solving quadratic equations", b: "<p>Factorise, complete the square, or use $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$ In Paper 2 a GDC polynomial solver gives the roots, but write the equation you solved. Never divide by x - factorise instead, or the root x = 0 is lost.</p>" },
        { h: "The discriminant", b: "<p>\\(\\Delta = b^2 - 4ac\\). Δ &gt; 0: two distinct real roots; Δ = 0: one repeated root (the graph touches the x-axis); Δ &lt; 0: no real roots. 'Real roots' means Δ ≥ 0. A line is tangent to a curve when substituting gives a quadratic with Δ = 0.</p>" },
        { h: "Quadratic inequalities", b: "<p>Solve the equation = 0, sketch the parabola, then read where it is above (&gt; 0) or below (&lt; 0) the x-axis. For \\(x^2 - x - 6 > 0\\): roots −2 and 3, so x &lt; −2 or x &gt; 3; for \\(x^2 - x - 6 < 0\\): −2 &lt; x &lt; 3.</p>" },
      ],
      terms: [["Discriminant", "\\(\\Delta = b^2 - 4ac\\), determining the number of real roots."], ["Repeated root", "A root that occurs twice, when Δ = 0."], ["Quadratic inequality", "An inequality such as \\(ax^2 + bx + c > 0\\)."]],
      skills: [
        { h: "Discriminant parameter questions", b: "When a line is tangent to a curve, substitute to get a quadratic and set Δ = 0. For 'no real roots' set Δ < 0 and solve the inequality." },
        { h: "Always positive", b: "\\(ax^2 + bx + c > 0\\) for all x when a > 0 and Δ < 0." },
      ],
      examples: [{ q: "Find the values of k for which \\(x^2 + kx + 9 = 0\\) has equal roots.", a: "\\(\\Delta = k^2 - 36 = 0 \\Rightarrow k = \\pm 6\\)." }],
      questions: [
        { id: "math-5-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "How many real roots does \\(2x^2 - 3x + 5 = 0\\) have?", options: ["0", "1", "2", "3"], answer: 0, ms: ["\\(\\Delta = 9 - 40 < 0\\)."] },
        { id: "math-5-q3", type: "short", paper: "P1", marks: 3, diff: 2, q: "Find the values of k for which \\(x^2 + kx + 9 = 0\\) has two equal real roots.", ms: ["\\(\\Delta = k^2 - 4(1)(9)\\) [M1]", "\\(k^2 - 36 = 0\\) [A1]", "k = ±6 [A1]"] },
        { id: "math-5-q5", type: "short", paper: "P1", marks: 4, diff: 3, q: "Find the range of values of m for which the line y = mx − 1 does not meet the curve \\(y = x^2 + 3\\).", ms: ["\\(x^2 - mx + 4 = 0\\) [M1]", "No intersection: \\(\\Delta < 0 \\Rightarrow m^2 - 16 < 0\\) [M1][A1]", "−4 < m < 4 [A1]"] },
      ],
    },
    {
      id: "math-6", code: "2.8", unit: "Topic 2: Functions", title: "The reciprocal function and rational functions",
      summary: "The reciprocal function \\(\\frac{1}{x}\\), rational functions \\(\\frac{ax + b}{cx + d}\\), their vertical and horizontal asymptotes, intercepts and graphs.",
      concepts: [
        { h: "The reciprocal function", b: "<p>\\(f(x) = \\frac{1}{x}\\), x ≠ 0: asymptotes x = 0 and y = 0, a graph in the first and third quadrants, symmetric in y = x. It is self-inverse: \\(f^{-1}(x) = \\frac{1}{x}\\). More generally \\(\\frac{k}{x}\\) is self-inverse.</p>" },
        { h: "Rational functions", b: "<p>\\(f(x) = \\frac{ax + b}{cx + d}\\): vertical asymptote \\(x = -\\frac{d}{c}\\) (denominator zero), horizontal asymptote \\(y = \\frac{a}{c}\\) (ratio of the x-coefficients). x-intercept: numerator zero, \\(x = -\\frac{b}{a}\\); y-intercept: \\(\\frac{b}{d}\\). The range is \\(y \\neq \\frac{a}{c}\\).</p>" },
        { h: "Form \\(p + \\frac{q}{x - h}\\)", b: "<p>Dividing gives, e.g., \\(\\frac{2x + 5}{x + 1} = 2 + \\frac{3}{x + 1}\\): the graph of \\(\\frac{3}{x}\\) translated 1 left and 2 up, so the asymptotes are x = −1 and y = 2. In models such as average cost \\(C = \\frac{800 + 5n}{n} = 5 + \\frac{800}{n}\\), the horizontal asymptote is the long-run value.</p>" },
      ],
      terms: [["Vertical asymptote", "A line x = k which the graph approaches as f(x) → ±∞."], ["Horizontal asymptote", "A line y = k which the graph approaches as x → ±∞."], ["Reciprocal function", "The function \\(f(x) = \\frac{1}{x}\\), x ≠ 0."]],
      skills: [
        { h: "Rational function in 4 lines", b: "VA: denominator = 0 · HA: ratio of x-coefficients · y-intercept: put x = 0 · x-intercept: numerator = 0." },
        { h: "Sketch", b: "Dashed asymptotes with equations, both branches in the correct quadrants relative to the asymptotes, and intercepts as coordinates." },
      ],
      examples: [{ q: "State the asymptotes of \\(f(x) = \\frac{2x + 1}{x - 3}\\).", a: "Vertical: x = 3. Horizontal: y = 2." }],
      questions: [
        { id: "math-6-q2", type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Which is the horizontal asymptote of \\(y = \\frac{4x - 1}{2x + 5}\\)?", options: ["y = 4", "y = 2", "\\(x = -\\frac{5}{2}\\)", "\\(y = -\\frac{1}{5}\\)"], answer: 1, ms: ["\\(\\frac{a}{c} = \\frac{4}{2} = 2\\)."] },
        { id: "math-6-q5", type: "short", paper: "P1", marks: 4, diff: 2, q: "Let \\(f(x) = \\frac{2x + 1}{x - 3}\\). Write down the equations of the asymptotes and the coordinates of the axis intercepts.", ms: ["Vertical asymptote x = 3 [A1]", "Horizontal asymptote y = 2 [A1]", "x-intercept \\((-\\frac{1}{2}, 0)\\) [A1]", "y-intercept \\((0, -\\frac{1}{3})\\) [A1]"] },
      ],
    },
    {
      id: "math-6b", code: "2.10", unit: "Topic 2: Functions", title: "Solving equations analytically and graphically",
      summary: "Solving equations analytically, including those that lead to quadratics, and graphically with technology when there is no suitable analytic approach.",
      concepts: [
        { h: "Analytic methods", b: "<p>Rearrange to a form you can solve: clear fractions (\\(\\frac{3}{x - 1} = x + 1 \\Rightarrow x^2 = 4\\)), substitute to reveal a quadratic (\\(x^4 - 5x^2 + 4 = 0\\) with \\(y = x^2\\); \\(x - 5\\sqrt{x} + 6 = 0\\) with \\(y = \\sqrt{x}\\)), then check each solution in the original equation.</p>" },
        { h: "Graphical methods", b: "<p>To solve f(x) = g(x) with a GDC, graph y = f(x) and y = g(x) and find every intersection, or graph y = f(x) − g(x) and find its zeros. Equations such as \\(e^{-x} = x\\) or \\(\\ln x = 3 - x\\) have no analytic method, so technology is expected.</p>" },
        { h: "Checking and reporting", b: "<p>State the method ('using the GDC intersection of \\(y = 2^x\\) and \\(y = x + 3\\)'), give every solution in the window that matters, and round to 3 s.f. Reject values outside the domain (e.g. \\(\\sqrt{x} = -2\\) has no solution).</p>" },
      ],
      terms: [["Analytic solution", "A solution found by algebraic manipulation, giving an exact value."], ["Graphical solution", "A solution read from the intersection of graphs, usually with technology."], ["Extraneous solution", "A value produced by the working that does not satisfy the original equation."]],
      skills: [
        { h: "Hidden quadratic", b: "Spot a power that is the square of another (\\(x^4 = (x^2)^2\\), \\(4^x = (2^x)^2\\), \\(x = (\\sqrt{x})^2\\)), substitute y, solve, then go back to x." },
        { h: "GDC intersections", b: "Write both functions you graphed and list all intersection x-values to 3 s.f.; zoom out to make sure none is missed." },
      ],
      examples: [{ q: "Use your GDC to solve \\(e^{-x} = x\\). [2]", a: "Graphing \\(y = e^{-x}\\) and y = x, they intersect once, at x = 0.567 (3 s.f.)." }],
      questions: [
        { id: "math-6-q4", type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 0.567, tol: 0.002 }, q: "Use your GDC to solve \\(e^{-x} = x\\), giving your answer to 3 significant figures.", ms: ["Graph y = e^{-x} and y = x or use solver [M1]", "Intersection shown/stated [A1]", "x = 0.567 [A1]"] },
      ],
    },
    {
      id: "math-6c", code: "2.11", unit: "Topic 2: Functions", title: "Transformations of graphs",
      summary: "Translations \\(y = f(x) + b\\) and \\(y = f(x - a)\\), reflections in both axes, vertical and horizontal stretches, and composite transformations.",
      concepts: [
        { h: "Transformations", b: "<table><tr><th>Function</th><th>Transformation</th></tr><tr><td>\\(f(x) + b\\)</td><td>vertical translation by b</td></tr><tr><td>\\(f(x - a)\\)</td><td>horizontal translation by a (right)</td></tr><tr><td>\\(pf(x)\\)</td><td>vertical stretch, scale factor p</td></tr><tr><td>\\(f(qx)\\)</td><td>horizontal stretch, scale factor \\(\\frac{1}{q}\\)</td></tr><tr><td>\\(-f(x)\\)</td><td>reflection in the x-axis</td></tr><tr><td>\\(f(-x)\\)</td><td>reflection in the y-axis</td></tr></table><p>Order matters: apply horizontal and vertical transformations step by step; translation vectors written \\(\\begin{pmatrix} a \\\\ b \\end{pmatrix}\\).</p>" },
        { h: "Mapping points", b: "<p>Under \\(y = pf(q(x - h)) + k\\) the point (x, y) moves to \\(\\left(\\frac{x}{q} + h,\\ py + k\\right)\\). Changes outside the bracket act on y and do what they say; changes inside act on x and do the opposite. Asymptotes and intercepts move with the graph.</p>" },
        { h: "Composite transformations", b: "<p>Vertical changes: stretch first, then translate gives \\(2f(x) + 1\\); translate first, then stretch gives \\(2[f(x) + 1] = 2f(x) + 2\\). Factor the inside before reading a horizontal translation: \\(f(2x - 6) = f(2(x - 3))\\) is a stretch with scale factor \\(\\frac{1}{2}\\) and a translation 3 right.</p>" },
      ],
      terms: [["Translation", "A shift of every point by the same vector."], ["Stretch", "A transformation that multiplies distances from an axis by a scale factor."], ["Reflection", "A transformation that maps each point to its mirror image in a line."]],
      skills: [{ h: "Describing transformations", b: "Use precise language: 'translation by the vector (2, −3)', 'horizontal stretch with scale factor ½', 'reflection in the x-axis'." }],
      examples: [{ q: "Describe a sequence of two transformations that maps \\(y = x^2\\) onto \\(y = 3(x + 1)^2\\). [3]", a: "A horizontal translation by \\(\\binom{-1}{0}\\) (1 unit left) and a vertical stretch with scale factor 3." }],
      questions: [
        { id: "math-6-q1", type: "mcq", paper: "P1", marks: 1, diff: 1, q: "The graph of y = f(x − 2) + 3 is the graph of y = f(x) translated by:", options: ["\\(\\binom{2}{3}\\)", "\\(\\binom{-2}{3}\\)", "\\(\\binom{2}{-3}\\)", "\\(\\binom{3}{2}\\)"], answer: 0, ms: ["Right 2, up 3."] },
        { id: "math-6-q3", type: "short", paper: "P1", marks: 3, diff: 2, q: "Describe fully a sequence of two transformations that maps \\(y = x^2\\) onto \\(y = 3(x + 1)^2\\).", ms: ["Horizontal translation by −1 / vector (−1, 0) [A1]", "Vertical stretch [A1]", "scale factor 3 [A1]"] },
      ],
    },

    // ---------------- TOPIC 3 ----------------
    {
      id: "math-7", code: "3.1-3.4", unit: "Topic 3: Geometry and trigonometry", title: "3D geometry, triangles, radians, arcs and sectors",
      summary: "Volumes and surface areas, distance and midpoint in 3D, sine and cosine rules, area of a triangle, radians, arc length and sector area.",
      concepts: [
        { h: "3D shapes and coordinates", b: "<p>Distance \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\\). Volumes: cone \\(\\frac{1}{3}\\pi r^2h\\), sphere \\(\\frac{4}{3}\\pi r^3\\), pyramid \\(\\frac{1}{3}Ah\\). Surface area: sphere \\(4\\pi r^2\\), cone curved \\(\\pi r l\\). Angle between a line and a plane using right-angled triangles.</p>" },
        { h: "Non-right-angled triangles", b: "<p>Sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\) (ambiguous case when given two sides and a non-included angle). Cosine rule: \\(c^2 = a^2 + b^2 - 2ab\\cos C\\), \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\). Area \\(= \\frac{1}{2}ab\\sin C\\).</p>" },
        { h: "Applications: bearings, elevation and depression (3.3)", b: "<p>A <strong>true bearing</strong> is measured clockwise from north, written with three figures (e.g. 065°). The <strong>angle of elevation</strong> is measured up from the horizontal, the <strong>angle of depression</strong> down from the horizontal; they are equal by alternate angles. Draw a diagram with a north line at every point, then use right-angled trig or the sine/cosine rule.</p>" },
        { h: "Radians", b: "<p>\\(\\pi\\) rad = 180°. Arc length \\(l = r\\theta\\); sector area \\(A = \\frac{1}{2}r^2\\theta\\) (θ in radians). Segment area = sector − triangle = \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\).</p>" },
      ],
      terms: [["Radian", "The angle subtended at the centre of a circle by an arc equal in length to the radius."], ["Ambiguous case", "When the sine rule gives two possible triangles (acute and obtuse angle)."]],
      skills: [{ h: "Calculator mode", b: "Check degrees vs radians before every trig calculation in Paper 2. A wrong mode loses all accuracy marks." }],
      examples: [{ q: "In triangle ABC, a = 7, b = 9, C = 60°. Find c and the area.", a: "\\(c^2 = 49 + 81 - 2(7)(9)(0.5) = 67\\), c = 8.19. Area = \\(\\frac{1}{2}(7)(9)\\sin 60° = 27.3\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Convert 135° to radians.", options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{5\\pi}{6}\\)"], answer: 2, ms: ["\\(135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}\\)."] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 8.19, tol: 0.01 }, q: "In triangle ABC, BC = 7 cm, AC = 9 cm and angle ACB = 60°. Find AB.", ms: ["\\(AB^2 = 7^2 + 9^2 - 2(7)(9)\\cos 60°\\) [M1]", "\\(AB^2 = 67\\) [A1]", "AB = 8.19 cm [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "A sector of a circle has radius 6 cm and angle \\(\\frac{\\pi}{3}\\). Find (a) the arc length, (b) the area of the sector, giving exact answers.", ms: ["Arc \\(= 6 \\times \\frac{\\pi}{3}\\) [M1]", "\\(= 2\\pi\\) cm [A1]", "Area \\(= \\frac{1}{2}(36)\\frac{\\pi}{3}\\) [M1]", "\\(= 6\\pi\\) cm² [A1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 10.4, tol: 0.05 }, q: "Find the area of triangle PQR with PQ = 5 cm, PR = 6 cm and angle QPR = 44°.", ms: ["\\(\\frac{1}{2}(5)(6)\\sin 44°\\) [M1][A1]", "= 10.4 cm² [A1]"] },
        { type: "short", paper: "P2", marks: 2, diff: 1, numeric: { value: 5.83, tol: 0.01 }, q: "Find the distance between A(1, 2, 3) and B(4, −1, 7).", ms: ["\\(\\sqrt{3^2 + (-3)^2 + 4^2}\\) [M1]", "= \\(\\sqrt{34}\\) = 5.83 [A1]"] },
      ],
    },
    {
      id: "math-8", code: "3.5-3.8", unit: "Topic 3: Geometry and trigonometry", title: "Trigonometric functions, identities and equations",
      summary: "The unit circle, exact values, identities, graphs of sin/cos/tan and their transformations, and solving trig equations.",
      concepts: [
        { h: "Unit circle and exact values", b: "<p>\\(\\cos\\theta\\) = x-coordinate, \\(\\sin\\theta\\) = y-coordinate on the unit circle; \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\). Exact values for 0, \\(\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\): sin = 0, ½, \\(\\frac{\\sqrt2}{2}\\), \\(\\frac{\\sqrt3}{2}\\), 1. CAST diagram for signs in each quadrant.</p>" },
        { h: "Identities", b: "<p>$$\\sin^2\\theta + \\cos^2\\theta = 1 \\qquad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$ $$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$</p>" },
        { h: "Graphs and transformations", b: "<p>\\(y = a\\sin(b(x - c)) + d\\): amplitude |a|, period \\(\\frac{2\\pi}{b}\\), horizontal shift c, principal axis y = d. Used to model periodic phenomena (tides, Ferris wheels, daylight hours).</p>" },
        { h: "Solving trig equations", b: "<p>Find the principal value, use symmetry (sin: \\(\\pi - \\theta\\); cos: \\(2\\pi - \\theta\\); tan: \\(\\theta + \\pi\\)) to find all solutions in the interval. For \\(\\sin 2x = k\\), extend the interval for 2x first. Quadratic-type: \\(2\\sin^2x - \\sin x - 1 = 0\\) factorises.</p>" },
      ],
      terms: [["Period", "The length of one complete cycle of a periodic function."], ["Amplitude", "Half the distance between the maximum and minimum values."]],
      skills: [{ h: "All solutions", b: "Always check the domain (e.g. 0 ≤ x ≤ 2π) and list every solution. Missing a solution typically loses the final A mark." }],
      examples: [{ q: "Solve \\(2\\cos x = 1\\) for \\(0 \\le x \\le 2\\pi\\).", a: "\\(\\cos x = \\frac{1}{2}\\): \\(x = \\frac{\\pi}{3}\\) or \\(x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}\\)." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "What is the exact value of \\(\\cos\\frac{\\pi}{6}\\)?", options: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt2}{2}\\)", "\\(\\frac{\\sqrt3}{2}\\)", "\\(\\sqrt3\\)"], answer: 2, ms: ["C - \\(\\cos\\frac{\\pi}{6} = \\cos 30° = \\frac{\\sqrt3}{2}\\) (exact values are not in the formula booklet)."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "The period of \\(y = 3\\sin(4x) + 1\\) is:", options: ["\\(4\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(2\\pi\\)"], answer: 1, ms: ["\\(\\frac{2\\pi}{4} = \\frac{\\pi}{2}\\)."] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "Given that \\(\\sin\\theta = \\frac{3}{5}\\) and \\(\\frac{\\pi}{2} < \\theta < \\pi\\), find the exact value of (a) \\(\\cos\\theta\\), (b) \\(\\sin 2\\theta\\).", ms: ["\\(\\cos^2\\theta = 1 - \\frac{9}{25}\\) [M1]", "\\(\\cos\\theta = -\\frac{4}{5}\\) (negative in Q2) [A1]", "\\(\\sin 2\\theta = 2 \\times \\frac{3}{5} \\times (-\\frac{4}{5})\\) [M1]", "\\(= -\\frac{24}{25}\\) [A1]"] },
        { type: "short", paper: "P1", marks: 5, diff: 3, q: "Solve \\(2\\sin^2 x - \\sin x - 1 = 0\\) for \\(0 \\le x \\le 2\\pi\\).", ms: ["\\((2\\sin x + 1)(\\sin x - 1) = 0\\) [M1][A1]", "\\(\\sin x = 1 \\Rightarrow x = \\frac{\\pi}{2}\\) [A1]", "\\(\\sin x = -\\frac{1}{2} \\Rightarrow x = \\frac{7\\pi}{6}\\) [A1]", "\\(x = \\frac{11\\pi}{6}\\) [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 2, q: "The height of a Ferris wheel seat is \\(h(t) = 20 - 18\\cos\\left(\\frac{\\pi t}{15}\\right)\\) metres, t in minutes. Find (a) the maximum height, (b) the period, (c) the first time the seat is at 30 m.", ms: ["Max = 38 m [A1]", "Period = \\(\\frac{2\\pi}{\\pi/15}\\) = 30 minutes [A1]", "Solve \\(20 - 18\\cos(\\frac{\\pi t}{15}) = 30\\) [M1]", "t = 10.3 minutes [A1]"] },
      ],
    },

    // ---------------- TOPIC 4 ----------------
    {
      id: "math-9", code: "4.1-4.4, 4.10", unit: "Topic 4: Statistics and probability", title: "Statistics and regression",
      summary: "Sampling, measures of central tendency and spread, box plots and outliers, correlation and regression lines.",
      concepts: [
        { h: "Sampling and data", b: "<p>Population vs sample; discrete vs continuous data. Sampling methods: simple random, convenience, systematic, quota, stratified. Reliability and bias.</p>" },
        { h: "Presenting data (4.2)", b: "<p>Histograms (continuous data, no gaps, equal class widths), cumulative frequency graphs (plot at <em>upper class boundaries</em>; read median at n/2, Q₁ at n/4, Q₃ at 3n/4, percentiles), and box-and-whisker diagrams (five-number summary, outliers marked separately). Grouped data: estimate the mean using mid-interval values. Compare distributions using a measure of centre <em>and</em> a measure of spread.</p>" },
        { h: "Central tendency and dispersion", b: "<p>Mean \\(\\bar{x} = \\frac{\\sum fx}{n}\\), median, mode, modal class. Range, interquartile range IQR = Q₃ − Q₁, standard deviation σ (GDC), variance σ². <strong>Outlier</strong>: more than 1.5 × IQR below Q₁ or above Q₃. Effects of constant changes: adding k shifts mean by k but not σ; multiplying by k multiplies both by k.</p>" },
        { h: "Correlation and regression", b: "<p>Pearson's product-moment correlation coefficient r (−1 ≤ r ≤ 1) measures linear correlation. Regression line of y on x (y = ax + b) from GDC; use it to predict y from x only within the data range (interpolation). Regression of x on y is used to predict x from y. Correlation does not imply causation.</p>" },
      ],
      terms: [["Outlier", "A value more than 1.5 × IQR beyond the quartiles."], ["Interpolation", "Predicting within the range of the data (reliable)."], ["Extrapolation", "Predicting outside the range of the data (unreliable)."]],
      skills: [{ h: "GDC skills", b: "1-Var Stats for mean, σ, quartiles; 2-Var Stats/LinReg for r and regression line. Write the regression equation with values to 3 s.f." }],
      examples: [{ q: "Data: Q₁ = 12, Q₃ = 20. Is 34 an outlier?", a: "IQR = 8; upper fence = 20 + 1.5 × 8 = 32. Since 34 > 32, it is an outlier." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "For a data set, Q₁ = 15 and Q₃ = 27. Which value is an outlier?", options: ["40", "47", "0", "−2"], answer: 1, ms: ["IQR = 12, so the fences are 15 − 18 = −3 and 27 + 18 = 45. Only 47 lies outside."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Each value in a data set is multiplied by 3 and then 2 is added. The standard deviation was 4. What is the new standard deviation?", options: ["4", "12", "14", "36"], answer: 1, ms: ["Adding does not change spread; multiplying by 3 multiplies σ by 3."] },
        { type: "short", paper: "P1", marks: 2, diff: 1, numeric: { value: 8, tol: 0.001 }, q: "The numbers 3, 5, 6, 8, x have a mean of 6. Find x.", ms: ["\\(\\frac{22 + x}{5} = 6\\) [M1]", "x = 8 [A1]"] },
        { type: "short", paper: "P2", marks: 4, diff: 2, q: "The regression line of y on x for a data set is y = 2.4x + 7.1 with r = 0.93. The x-values range from 5 to 20. (a) Interpret r. (b) Estimate y when x = 12. (c) Explain why it would not be appropriate to estimate y when x = 40.", ms: ["Strong positive linear correlation [A1]", "y = 2.4(12) + 7.1 = 35.9 [M1][A1]", "x = 40 is outside the data range - extrapolation is unreliable [R1]"] },
        { type: "short", paper: "P2", marks: 3, diff: 2, q: "Explain the difference between a stratified sample and a quota sample.", ms: ["Both divide the population into groups and sample each in proportion to its size [R1]", "Stratified: members of each stratum are chosen at random [R1]", "Quota: members are chosen non-randomly (e.g. conveniently) until each quota is filled [R1]"] },
      ],
    },
    {
      id: "math-10", code: "4.5-4.6, 4.11", unit: "Topic 4: Statistics and probability", title: "Probability",
      summary: "Sample spaces, Venn and tree diagrams, combined events, conditional probability and independence.",
      concepts: [
        { h: "Basic probability", b: "<p>\\(P(A) = \\frac{n(A)}{n(U)}\\), \\(P(A') = 1 - P(A)\\). Expected number of occurrences = np.</p>" },
        { h: "Combined events", b: "<p>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$ Mutually exclusive: \\(P(A \\cap B) = 0\\). Conditional: $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$ Independent: \\(P(A \\cap B) = P(A)P(B)\\), equivalently \\(P(A|B) = P(A)\\).</p>" },
        { h: "Diagrams", b: "<p>Venn diagrams (fill the intersection first), tree diagrams (multiply along branches, add between outcomes; branches change 'without replacement'), sample space grids for two dice.</p>" },
      ],
      terms: [["Mutually exclusive", "Events that cannot occur at the same time."], ["Independent events", "The occurrence of one does not affect the probability of the other."], ["Conditional probability", "The probability of A given that B has occurred."]],
      skills: [{ h: "Show independence correctly", b: "Compute P(A)P(B) and compare with P(A ∩ B) numerically, then state the conclusion." }],
      examples: [{ q: "P(A) = 0.4, P(B) = 0.5, P(A ∪ B) = 0.7. Find P(A ∩ B) and decide whether A and B are independent.", a: "P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2. P(A)P(B) = 0.2 = P(A ∩ B), so independent." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "Two fair dice are rolled. What is the probability the total is 7?", options: ["\\(\\frac{1}{12}\\)", "\\(\\frac{1}{6}\\)", "\\(\\frac{7}{36}\\)", "\\(\\frac{5}{36}\\)"], answer: 1, ms: ["6 favourable outcomes out of 36."] },
        { type: "short", paper: "P1", marks: 4, diff: 2, q: "P(A) = 0.4, P(B) = 0.5 and P(A ∪ B) = 0.7. (a) Find P(A ∩ B). (b) Determine whether A and B are independent. (c) Find P(A | B).", ms: ["P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2 [A1]", "P(A)P(B) = 0.2 = P(A ∩ B) [M1]", "so independent [R1]", "P(A|B) = 0.2/0.5 = 0.4 [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 3, numeric: { value: 0.5333, tol: 0.002 }, q: "A bag has 6 red and 4 blue marbles. Two are taken without replacement. Find the probability they are different colours.", ms: ["Tree diagram / P(RB) = \\(\\frac{6}{10} \\times \\frac{4}{9}\\) [M1]", "P(BR) = \\(\\frac{4}{10} \\times \\frac{6}{9}\\) [M1]", "Adding [M1]", "\\(\\frac{48}{90} = \\frac{8}{15}\\) [A1]"] },
        { type: "short", paper: "P1", marks: 3, diff: 2, numeric: { value: 0.1667, tol: 0.002 }, q: "In a class of 30, 18 study French, 12 study Spanish and 5 study both. A student is chosen at random. Find the probability they study neither.", ms: ["n(F ∪ S) = 18 + 12 − 5 = 25 [M1]", "Neither = 5 [A1]", "\\(\\frac{5}{30} = \\frac{1}{6}\\) [A1]"] },
      ],
    },
    {
      id: "math-11", code: "4.7-4.9, 4.12", unit: "Topic 4: Statistics and probability", title: "Discrete and continuous distributions",
      summary: "Discrete random variables and expectation, the binomial distribution, and the normal distribution including inverse normal.",
      concepts: [
        { h: "Discrete random variables", b: "<p>\\(\\sum P(X = x) = 1\\). Expected value \\(E(X) = \\sum x P(X = x)\\). A game is <strong>fair</strong> if E(gain) = 0.</p>" },
        { h: "Binomial distribution", b: "<p>\\(X \\sim B(n, p)\\): fixed n independent trials, two outcomes, constant p. $$P(X = r) = \\binom{n}{r}p^r(1 - p)^{n - r} \\qquad E(X) = np \\qquad Var(X) = np(1 - p)$$ GDC: binompdf for =, binomcdf for ≤. P(X ≥ k) = 1 − P(X ≤ k − 1).</p>" },
        { h: "Normal distribution", b: "<p>\\(X \\sim N(\\mu, \\sigma^2)\\): symmetric, bell-shaped; ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ. GDC normalcdf for probabilities, invNorm for values. Standardisation \\(z = \\frac{x - \\mu}{\\sigma}\\) (used to find unknown μ or σ).</p>" },
      ],
      terms: [["Random variable", "A variable whose value is determined by the outcome of a random experiment."], ["Expected value", "The long-run mean value of a random variable."], ["z-score", "Number of standard deviations a value lies from the mean."]],
      skills: [{ h: "Identify the distribution", b: "Look for the conditions: counting successes in n trials → binomial; continuous measurement like heights/times → normal." }],
      examples: [{ q: "\\(X \\sim B(10, 0.3)\\). Find P(X = 2) and P(X ≥ 2).", a: "P(X = 2) = \\(\\binom{10}{2}(0.3)^2(0.7)^8 = 0.233\\). P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.149 = 0.851." }],
      questions: [
        { type: "mcq", paper: "P1", marks: 1, diff: 1, q: "If \\(X \\sim B(20, 0.25)\\), E(X) =", options: ["4", "5", "3.75", "15"], answer: 1, ms: ["np = 5."] },
        { type: "mcq", paper: "P1", marks: 1, diff: 2, q: "Heights are normally distributed with mean 170 cm and SD 8 cm. Approximately what percentage are between 154 and 186 cm?", options: ["68%", "90%", "95%", "99.7%"], answer: 2, ms: ["Within 2σ ≈ 95%."] },
        { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 0.851, tol: 0.002 }, q: "A spinner lands on red with probability 0.3. It is spun 10 times. Find the probability that it lands on red at least twice.", ms: ["X ~ B(10, 0.3) [M1]", "1 − P(X ≤ 1) [M1]", "= 0.851 [A1]"] },
        { type: "short", paper: "P2", marks: 2, diff: 2, numeric: { value: 0.0668, tol: 0.001 }, q: "The masses of apples are normally distributed with mean 150 g and standard deviation 12 g. Find the probability that an apple weighs more than 168 g.", ms: ["P(X > 168) using normalcdf [M1]", "= 0.0668 [A1]"] },
        { type: "short", paper: "P2", marks: 2, diff: 2, numeric: { value: 165.4, tol: 0.2 }, q: "Using the apples above (mean 150 g, SD 12 g), find the mass exceeded by 10% of apples.", ms: ["invNorm(0.9, 150, 12) [M1]", "= 165 g (165.4) [A1]"] },
        { type: "short", paper: "P1", marks: 4, diff: 3, q: "A discrete random variable X has P(X = x) = kx for x = 1, 2, 3, 4. Find k and E(X).", ms: ["k(1 + 2 + 3 + 4) = 1 [M1]", "k = 0.1 [A1]", "E(X) = 0.1(1 + 4 + 9 + 16) [M1]", "E(X) = 3 [A1]"] },
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
