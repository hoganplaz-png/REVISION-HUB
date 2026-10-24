/* Mathematics AA SL - extra hand-written exam-style questions (IB-style, original). */
IB.addQuestions("math", {
  "math-1": [
    { paper: "P1", marks: 1, diff: 1, q: "The first term of an arithmetic sequence is 7 and the common difference is 4. Which is the 10th term?", options: ["40", "43", "47", "50"], answer: 1, ms: ["B - \\(7 + 9 \\times 4 = 43\\)."] },
    { paper: "P1", marks: 4, diff: 2, numeric: { value: 590, tol: 0.5 }, q: "An arithmetic series has \\(u_1 = 5\\) and \\(u_{20} = 54\\). Find \\(S_{20}\\).", ms: ["\\(S_{20} = \\frac{20}{2}(u_1 + u_{20})\\) [M1]", "\\(= \\frac{20}{2}(5 + 54)\\) [A1]", "\\(= 590\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, numeric: { value: 32, tol: 0.001 }, q: "A geometric sequence has \\(u_2 = 8\\) and \\(u_5 = 1\\). Find the sum to infinity.", ms: ["\\(r^3 = \\frac{1}{8}\\) so \\(r = \\frac{1}{2}\\) [M1][A1]", "\\(u_1 = 16\\) [A1]", "\\(S_\\infty = \\frac{16}{1 - 0.5} = 32\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 6746.77, tol: 0.5 }, q: "$5000 is invested at 3% per annum compounded monthly. Find the value after 10 years, to the nearest cent.", ms: ["\\(5000\\left(1 + \\frac{0.03}{12}\\right)^{120}\\) or TVM: N = 120, I% = 3, PV = −5000, C/Y = 12 [M1][A1]", "$6746.77 [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 17, tol: 0.001 }, q: "Find the least value of \\(n\\) for which the sum of the geometric series \\(3 + 6 + 12 + \\dots\\) exceeds 300 000.", ms: ["\\(\\frac{3(2^n - 1)}{2 - 1} > 300000\\) [M1]", "\\(2^n > 100001\\) [A1]", "\\(n = 17\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 165, tol: 0.001 }, q: "Evaluate \\(\\displaystyle\\sum_{k=1}^{10} 3k\\).", ms: ["\\(3(1 + 2 + \\dots + 10)\\) or \\(\\frac{10}{2}(3 + 30)\\) [M1]", "\\(= 3 \\times 55\\) [A1]", "\\(= 165\\) [A1]"] },
  ],
  "math-2": [
    { paper: "P1", marks: 1, diff: 1, q: "Which is equal to \\(\\log_2 32\\)?", options: ["4", "5", "6", "16"], answer: 1, ms: ["B - \\(2^5 = 32\\)."] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 4, tol: 0.001 }, q: "Solve \\(\\log_3(x + 5) = 2\\).", ms: ["\\(x + 5 = 3^2\\) [M1]", "\\(x + 5 = 9\\) [A1]", "\\(x = 4\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, numeric: { value: 3, tol: 0.001 }, q: "Solve \\(\\log_2 x + \\log_2(x - 2) = \\log_2 3\\).", ms: ["\\(\\log_2 x(x - 2) = \\log_2 3\\) [M1]", "\\(x^2 - 2x - 3 = 0\\) [A1]", "\\((x - 3)(x + 1) = 0\\) [M1]", "\\(x = 3\\) (reject −1 since \\(x > 2\\)) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 1.43, tol: 0.01 }, q: "Solve \\(5^{x} = 10\\), giving your answer to 3 significant figures.", ms: ["\\(x = \\frac{\\ln 10}{\\ln 5}\\) [M1][A1]", "\\(x = 1.43\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Write \\(2\\ln 3 + \\ln 4 - \\ln 6\\) as a single logarithm in its simplest form.", ms: ["\\(\\ln 9 + \\ln 4 - \\ln 6\\) [M1]", "\\(\\ln\\frac{36}{6}\\) [M1]", "\\(\\ln 6\\) [A1]"] },
    { paper: "P2", marks: 4, diff: 3, numeric: { value: 13.9, tol: 0.1 }, q: "A population of bacteria is modelled by \\(P = 200e^{0.05t}\\), \\(t\\) in hours. Find the time for the population to double, to 3 s.f.", ms: ["\\(400 = 200e^{0.05t}\\) [M1]", "\\(e^{0.05t} = 2\\) [A1]", "\\(t = \\frac{\\ln 2}{0.05}\\) [M1]", "\\(t = 13.9\\) hours [A1]"] },
  ],
  "math-3": [
    { paper: "P1", marks: 1, diff: 1, q: "Which is \\(\\binom{6}{2}\\)?", options: ["12", "15", "30", "36"], answer: 1, ms: ["B - \\(\\frac{6 \\times 5}{2} = 15\\)."] },
    { paper: "P1", marks: 4, diff: 2, numeric: { value: -160, tol: 0.001 }, q: "Find the constant term in the expansion of \\(\\left(2x - \\frac{1}{x}\\right)^6\\).", ms: ["General term \\(\\binom{6}{r}(2x)^{6-r}\\left(-\\frac{1}{x}\\right)^r\\) [M1]", "Constant when \\(6 - 2r = 0\\), \\(r = 3\\) [A1]", "\\(\\binom{6}{3}(2)^3(-1)^3\\) [M1]", "\\(= -160\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Prove that the sum of any three consecutive integers is divisible by 3.", ms: ["Let integers be \\(n, n + 1, n + 2\\) [M1]", "Sum \\(= 3n + 3\\) [A1]", "\\(= 3(n + 1)\\), which is a multiple of 3 [R1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Show that \\((n + 3)^2 - (n - 3)^2\\) is always a multiple of 12 for \\(n \\in \\mathbb{Z}\\).", ms: ["Expand: \\(n^2 + 6n + 9 - (n^2 - 6n + 9)\\) [M1]", "\\(= 12n\\) [A1]", "\\(12n\\) is a multiple of 12 [R1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 2160, tol: 0.5 }, q: "Find the coefficient of \\(x^4\\) in the expansion of \\((3 + 2x)^6\\).", ms: ["\\(\\binom{6}{4}3^2(2x)^4\\) [M1]", "\\(15 \\times 9 \\times 16\\) [A1]", "\\(= 2160\\) [A1]"] },
  ],
  "math-4": [
    { paper: "P1", marks: 1, diff: 1, q: "If \\(f(x) = 2x + 1\\) and \\(g(x) = x^2\\), what is \\((f \\circ g)(3)\\)?", options: ["19", "49", "10", "13"], answer: 0, ms: ["A - \\(f(9) = 19\\)."] },
    { paper: "P1", marks: 3, diff: 2, q: "Find \\(f^{-1}(x)\\) for \\(f(x) = \\frac{3x - 1}{2}\\).", ms: ["\\(x = \\frac{3y - 1}{2}\\) [M1]", "\\(2x + 1 = 3y\\) [A1]", "\\(f^{-1}(x) = \\frac{2x + 1}{3}\\) [A1]"] },
    { paper: "P1", marks: 2, diff: 1, q: "State the domain and range of \\(f(x) = \\sqrt{x - 4}\\).", ms: ["Domain \\(x \\ge 4\\) [A1]", "Range \\(f(x) \\ge 0\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, numeric: { value: 2, tol: 0.001 }, q: "Given \\(f(x) = x^2 - 3\\) and \\(g(x) = x + 1\\), solve \\((f \\circ g)(x) = 6\\) for \\(x > 0\\).", ms: ["\\((x + 1)^2 - 3 = 6\\) [M1]", "\\((x + 1)^2 = 9\\) [A1]", "\\(x + 1 = \\pm 3\\) [M1]", "\\(x = 2\\) (reject −4) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, q: "Explain why \\(f(x) = x^2\\), \\(x \\in \\mathbb{R}\\), has no inverse, and state a domain restriction that allows one.", ms: ["Not one-to-one: e.g. \\(f(2) = f(-2) = 4\\) [R1]", "Fails the horizontal line test [R1]", "Restrict to \\(x \\ge 0\\) (then \\(f^{-1}(x) = \\sqrt{x}\\)) [A1]"] },
  ],
  "math-5": [
    { paper: "P1", marks: 1, diff: 1, q: "The vertex of \\(y = (x - 3)^2 + 5\\) is:", options: ["(−3, 5)", "(3, 5)", "(3, −5)", "(5, 3)"], answer: 1, ms: ["B - in the form \\(a(x - h)^2 + k\\) the vertex is (h, k) = (3, 5)."] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 9, tol: 0.001 }, q: "Find the value of \\(k\\) such that \\(x^2 - 6x + k = 0\\) has exactly one real root.", ms: ["\\(\\Delta = 36 - 4k = 0\\) [M1][A1]", "\\(k = 9\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, q: "Write \\(2x^2 - 12x + 7\\) in the form \\(a(x - h)^2 + k\\) and state the coordinates of the vertex.", ms: ["\\(2(x^2 - 6x) + 7\\) [M1]", "\\(2(x - 3)^2 - 18 + 7\\) [A1]", "\\(2(x - 3)^2 - 11\\) [A1]", "Vertex \\((3, -11)\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 3, q: "Find the range of values of \\(m\\) for which \\(x^2 + mx + 4 = 0\\) has two distinct real roots.", ms: ["\\(\\Delta = m^2 - 16 > 0\\) [M1][A1]", "Critical values \\(m = \\pm 4\\) [A1]", "\\(m < -4\\) or \\(m > 4\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 2.5, tol: 0.001 }, q: "A ball's height is \\(h(t) = -5t^2 + 25t + 2\\). Find the time at which it reaches its maximum height.", ms: ["Axis of symmetry \\(t = -\\frac{b}{2a}\\) [M1]", "\\(= \\frac{-25}{-10}\\) [A1]", "\\(t = 2.5\\) s [A1]"] },
  ],
  "math-6": [
    { paper: "P1", marks: 1, diff: 1, q: "The vertical asymptote of \\(y = \\frac{3}{x - 2} + 1\\) is:", options: ["x = 1", "x = 2", "y = 1", "y = 3"], answer: 1, ms: ["B - the denominator is zero when x = 2, so the vertical asymptote is x = 2 (y = 1 is the horizontal asymptote)."] },
    { paper: "P1", marks: 2, diff: 1, q: "Describe the transformation that maps \\(y = f(x)\\) to \\(y = f(x - 4) + 2\\).", ms: ["Translation by vector \\(\\begin{pmatrix}4\\\\2\\end{pmatrix}\\): 4 units to the right [A1]", "and 2 units up [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "The graph of \\(y = e^x\\) is stretched vertically by factor 3 and then translated 1 unit down. Write the new equation and its horizontal asymptote.", ms: ["\\(y = 3e^x\\) (vertical stretch first) [A1]", "\\(y = 3e^x - 1\\) [A1]", "Asymptote \\(y = -1\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, q: "For \\(f(x) = \\frac{2x + 1}{x - 3}\\), state the equations of the asymptotes and the x-intercept.", ms: ["Vertical \\(x = 3\\) [A1]", "Horizontal \\(y = 2\\) [A1]", "x-intercept: \\(2x + 1 = 0\\) [M1]", "\\(x = -\\frac{1}{2}\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, q: "Describe a sequence of transformations mapping \\(y = \\ln x\\) onto \\(y = 2\\ln(x + 1)\\).", ms: ["Translation 1 unit to the left, vector \\(\\begin{pmatrix}-1\\\\0\\end{pmatrix}\\) [A1]", "Vertical stretch [A1]", "with scale factor 2 (either order: a horizontal translation and a vertical stretch do not affect each other) [A1]"] },
  ],
  "math-7": [
    { paper: "P1", marks: 1, diff: 1, q: "Convert \\(\\frac{2\\pi}{3}\\) radians to degrees.", options: ["60°", "120°", "135°", "150°"], answer: 1, ms: ["B - \\(\\frac{2\\pi}{3} \\times \\frac{180°}{\\pi} = 120°\\)."] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 12.6, tol: 0.05 }, q: "A sector of a circle of radius 6 cm has angle 0.7 radians. Find the area of the sector, to 3 s.f.", ms: ["\\(A = \\frac{1}{2}r^2\\theta\\) [M1]", "\\(= \\frac{1}{2}(36)(0.7)\\) [A1]", "\\(= 12.6\\) cm² [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 9.17, tol: 0.02 }, q: "In triangle ABC, AB = 8 cm, AC = 11 cm and angle A = 55°. Find BC to 3 s.f.", ms: ["\\(BC^2 = 8^2 + 11^2 - 2(8)(11)\\cos 55°\\) [M1]", "\\(BC^2 = 84.05...\\) [A1]", "\\(BC = 9.17\\) cm [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 36.0, tol: 0.1 }, q: "Find the area of a triangle with sides 9 cm and 10 cm and included angle 53.1°, to 3 s.f.", ms: ["\\(\\frac{1}{2}(9)(10)\\sin 53.1°\\) [M1][A1]", "\\(= 36.0\\) cm² [A1]"] },
    { paper: "P2", marks: 4, diff: 3, numeric: { value: 26.6, tol: 0.1 }, q: "A cuboid has base 6 cm by 8 cm and height 5 cm. Find the angle between the space diagonal and the base, to 3 s.f.", ms: ["Base diagonal \\(= \\sqrt{36 + 64} = 10\\) [M1][A1]", "\\(\\tan\\theta = \\frac{5}{10}\\) [M1]", "\\(\\theta = 26.6°\\) [A1]"] },
  ],
  "math-8": [
    { paper: "P1", marks: 1, diff: 1, q: "What is the exact value of \\(\\cos\\frac{\\pi}{3}\\)?", options: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "1"], answer: 0, ms: ["A - \\(\\cos\\frac{\\pi}{3} = \\cos 60° = \\frac{1}{2}\\)."] },
    { paper: "P1", marks: 1, diff: 2, q: "The period of \\(y = 3\\sin(2x)\\) is:", options: ["\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "3"], answer: 0, ms: ["A - period \\(= \\frac{2\\pi}{b} = \\frac{2\\pi}{2} = \\pi\\); the 3 changes the amplitude, not the period."] },
    { paper: "P1", marks: 4, diff: 2, q: "Given \\(\\sin\\theta = \\frac{3}{5}\\) and \\(\\frac{\\pi}{2} < \\theta < \\pi\\), find \\(\\cos\\theta\\) and \\(\\sin 2\\theta\\).", ms: ["\\(\\cos\\theta = -\\frac{4}{5}\\) (negative in Q2) [M1][A1]", "\\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\) [M1]", "\\(= -\\frac{24}{25}\\) [A1]"] },
    { paper: "P1", marks: 5, diff: 3, q: "Solve \\(2\\cos^2 x - \\cos x - 1 = 0\\) for \\(0 \\le x \\le 2\\pi\\).", ms: ["\\((2\\cos x + 1)(\\cos x - 1) = 0\\) [M1][A1]", "\\(\\cos x = -\\frac{1}{2}\\) or \\(\\cos x = 1\\) [A1]", "\\(x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\) [A1]", "\\(x = 0, 2\\pi\\) [A1]"] },
    { paper: "P2", marks: 4, diff: 2, q: "The height of a Ferris wheel seat is \\(h(t) = 20 - 18\\cos\\left(\\frac{\\pi t}{15}\\right)\\) metres, where t is the time in minutes. Find the maximum height and the time for one revolution.", ms: ["Max when \\(\\cos\\left(\\frac{\\pi t}{15}\\right) = -1\\) [M1]", "\\(h = 38\\) m [A1]", "Period \\(= \\frac{2\\pi}{\\pi/15}\\) [M1]", "\\(= 30\\) minutes [A1]"] },
  ],
  "math-9": [
    { paper: "P2", marks: 1, diff: 1, q: "Which measure of spread is least affected by outliers?", options: ["Range", "Standard deviation", "Interquartile range", "Variance"], answer: 2, ms: ["C - the IQR uses only the middle 50% of the data, so extreme values do not affect it."] },
    { paper: "P2", marks: 2, diff: 1, numeric: { value: 7, tol: 0.001 }, q: "Find the mean of 4, 6, 7, 8, 10.", ms: ["\\(\\frac{35}{5}\\) [M1]", "\\(= 7\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, q: "For a data set \\(Q_1 = 12\\) and \\(Q_3 = 20\\). Determine whether 33 is an outlier.", ms: ["IQR = 8 [A1]", "Upper fence \\(= 20 + 1.5(8) = 32\\) [M1]", "33 > 32 so 33 is an outlier [R1]"] },
    { paper: "P2", marks: 3, diff: 2, q: "The regression line of y on x is \\(y = 2.4x + 5.1\\) with \\(r = 0.93\\), for \\(10 \\le x \\le 40\\). Comment on using it to estimate y when x = 25 and when x = 70.", ms: ["Strong positive linear correlation (r = 0.93) [R1]", "x = 25 is interpolation - reliable: \\(y = 65.1\\) [A1]", "x = 70 is extrapolation outside the data range - unreliable [R1]"] },
    { paper: "P2", marks: 2, diff: 2, q: "Each value in a data set is multiplied by 3 and then 5 is added. The original mean was 10 and standard deviation 2. State the new mean and standard deviation.", ms: ["Mean = 35 [A1]", "SD = 6 [A1]"] },
  ],
  "math-10": [
    { paper: "P1", marks: 1, diff: 1, q: "Events A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.4. P(A ∪ B) =", options: ["0.12", "0.58", "0.7", "1"], answer: 2, ms: ["C - mutually exclusive, so P(A ∩ B) = 0 and P(A ∪ B) = 0.3 + 0.4 = 0.7."] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 0.58, tol: 0.001 }, q: "A and B are independent, P(A) = 0.3, P(B) = 0.4. Find P(A ∪ B).", ms: ["\\(P(A \\cap B) = 0.12\\) [M1]", "\\(0.3 + 0.4 - 0.12\\) [M1]", "\\(= 0.58\\) [A1]"] },
    { paper: "P1", marks: 4, diff: 2, q: "A bag has 5 red and 3 blue counters. Two are taken without replacement. Find the probability that they are different colours.", ms: ["\\(\\frac{5}{8} \\times \\frac{3}{7}\\) [M1]", "\\(\\times 2\\) (either order) [M1]", "\\(\\frac{30}{56}\\) [A1]", "\\(= \\frac{15}{28}\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 3, numeric: { value: 0.5, tol: 0.001 }, q: "P(A) = 0.5, P(B) = 0.6 and P(A ∪ B) = 0.8. Find \\(P(A \\mid B)\\).", ms: ["\\(P(A \\cap B) = 0.5 + 0.6 - 0.8 = 0.3\\) [M1][A1]", "\\(P(A | B) = \\frac{0.3}{0.6} = 0.5\\) [A1]"] },
  ],
  "math-11": [
    { paper: "P2", marks: 1, diff: 1, q: "For \\(X \\sim B(10, 0.3)\\), E(X) =", options: ["0.3", "2.1", "3", "7"], answer: 2, ms: ["C - E(X) = np = 10 × 0.3 = 3."] },
    { paper: "P2", marks: 2, diff: 2, numeric: { value: 0.267, tol: 0.002 }, q: "\\(X \\sim B(10, 0.3)\\). Find \\(P(X = 3)\\) to 3 s.f.", ms: ["\\(\\binom{10}{3}(0.3)^3(0.7)^7\\) [M1]", "\\(= 0.267\\) [A1]"] },
    { paper: "P2", marks: 2, diff: 2, numeric: { value: 0.841, tol: 0.002 }, q: "\\(X \\sim N(50, 4^2)\\). Find \\(P(X < 54)\\) to 3 s.f.", ms: ["z = 1 / GDC normalcdf [M1]", "\\(= 0.841\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 1.3, tol: 0.001 }, q: "A discrete random variable takes values 0, 1, 2, 3 with probabilities 0.2, 0.4, 0.3, k. Find k and E(X). Give E(X).", ms: ["k = 0.1 [A1]", "\\(E(X) = 0(0.2) + 1(0.4) + 2(0.3) + 3(0.1)\\) [M1]", "\\(= 1.3\\) [A1]"] },
    { paper: "P2", marks: 3, diff: 3, numeric: { value: 68.2, tol: 0.1 }, q: "Heights are \\(N(60, 5^2)\\). Find the height exceeded by the tallest 5%, to 3 s.f.", ms: ["\\(P(H > h) = 0.05\\) [M1]", "invNorm(0.95, 60, 5) [M1]", "\\(h = 68.2\\) [A1]"] },
  ],
  "math-12": [
    { id: "math-12-n1", paper: "P1", marks: 1, diff: 1, q: "The points P(1, 1) and Q(1 + h, (1 + h)²) lie on \\(y = x^2\\). The gradient of the chord PQ is", options: ["\\(2 + h\\)", "\\(2h + h^2\\)", "\\(2\\)", "\\(1 + h\\)"], answer: 0, ms: ["A - \\(\\frac{(1 + h)^2 - 1}{h} = \\frac{2h + h^2}{h} = 2 + h\\)."] },
    { id: "math-12-n2", paper: "P1", marks: 3, diff: 2, numeric: { value: 6, tol: 0.001 }, q: "Let \\(f(x) = x^2\\). (a) Find, in terms of h, the gradient of the chord joining (3, 9) and \\((3 + h, (3 + h)^2)\\). (b) Hence write down the gradient of the curve at x = 3.", ms: ["\\(\\frac{(3 + h)^2 - 9}{h} = \\frac{6h + h^2}{h}\\) [M1]", "\\(= 6 + h\\) [A1]", "as \\(h \\to 0\\), gradient \\(f'(3) = 6\\) [A1]"] },
    { id: "math-12-n3", paper: "P1", marks: 1, diff: 1, q: "For a curve \\(y = f(x)\\), which expression gives the gradient of the tangent at the point where x = 2?", options: ["\\(f(2)\\)", "\\(f'(2)\\)", "\\(\\frac{f(2)}{2}\\)", "\\(f''(2)\\)"], answer: 1, ms: ["B - the derivative evaluated at x = 2 is the gradient of the tangent there."] },
    { id: "math-12-n4", paper: "P1", marks: 2, diff: 1, numeric: { value: 3, tol: 0.001 }, q: "The tangent to the curve \\(y = f(x)\\) at the point (2, 5) also passes through the point (4, 11). Write down the value of \\(f'(2)\\).", ms: ["gradient of the tangent \\(= \\frac{11 - 5}{4 - 2}\\) [M1]", "\\(f'(2) = 3\\) [A1]"] },
    { id: "math-12-n5", paper: "P1", marks: 1, diff: 2, q: "\\(\\displaystyle\\lim_{h \\to 0} \\frac{(2 + h)^3 - 8}{h}\\) is equal to", options: ["0", "8", "12", "it does not exist"], answer: 2, ms: ["C - it is the gradient of \\(y = x^3\\) at x = 2: \\(3(2)^2 = 12\\) (or expand: \\(12 + 6h + h^2 \\to 12\\))."] },
    { id: "math-12-n6", paper: "P2", marks: 3, diff: 2, numeric: { value: -2.12, tol: 0.01 }, q: "The temperature of a cup of tea t minutes after it is made is \\(T(t) = 20 + 70e^{-0.05t}\\) °C. Find the rate of change of T when t = 10 and interpret your answer.", ms: ["\\(T'(t) = -3.5e^{-0.05t}\\) or GDC derivative at t = 10 [M1]", "\\(T'(10) = -2.12\\) °C per minute [A1]", "the temperature is decreasing at 2.12 °C per minute at that instant [R1]"] },
    { id: "math-12-n7", paper: "P2", marks: 2, diff: 1, numeric: { value: 314, tol: 0.5 }, q: "The volume of a spherical balloon of radius r cm is \\(V = \\frac43\\pi r^3\\) cm³. Find \\(\\frac{dV}{dr}\\) when r = 5 and state its units.", ms: ["\\(\\frac{dV}{dr} = 4\\pi r^2\\) [M1]", "\\(= 100\\pi = 314\\) cm³ per cm [A1]"] },
  ],
  "math-12b": [
    { paper: "P1", marks: 1, diff: 1, q: "Given \\(f'(x) = (x - 1)(x - 4)\\), the function f is decreasing for", options: ["\\(x < 1\\)", "\\(1 < x < 4\\)", "\\(x > 4\\)", "\\(x < 1\\) or \\(x > 4\\)"], answer: 1, ms: ["B - the U-shaped f′ is negative between its roots 1 and 4."] },
    { paper: "P1", marks: 2, diff: 2, q: "Show that \\(f(x) = x^3 + 3x - 2\\) is increasing for all values of x.", ms: ["\\(f'(x) = 3x^2 + 3\\) [A1]", "\\(x^2 \\ge 0\\) so \\(f'(x) \\ge 3 > 0\\) for all x, hence f is increasing [R1]"] },
    { paper: "P1", marks: 4, diff: 2, q: "Let \\(f(x) = 2x^3 - 9x^2 + 12x\\). Find the set of values of x for which f is decreasing.", ms: ["\\(f'(x) = 6x^2 - 18x + 12\\) [A1]", "\\(6(x - 1)(x - 2)\\), critical values 1 and 2 [M1][A1]", "decreasing when \\(f'(x) < 0\\): \\(1 < x < 2\\) [A1]"] },
    { paper: "P1", marks: 1, diff: 2, q: "The graph of \\(y = f'(x)\\) lies below the x-axis for \\(0 < x < 3\\) and above it for \\(x < 0\\) and \\(x > 3\\). Which statement is true?", options: ["f is decreasing for 0 < x < 3", "f is increasing for 0 < x < 3", "f has a local minimum at x = 0", "f′ is decreasing for 0 < x < 3"], answer: 0, ms: ["A - f′ < 0 on that interval, so f is decreasing there (f has a local maximum at x = 0)."] },
    { paper: "P1", marks: 3, diff: 3, q: "Let \\(f(x) = x^3 + kx\\). Find the values of k for which \\(f'(x) > 0\\) for all values of x.", ms: ["\\(f'(x) = 3x^2 + k\\) [A1]", "the minimum value of \\(3x^2 + k\\) is k (at x = 0) [M1]", "\\(k > 0\\) [A1]"] },
    { paper: "P2", marks: 4, diff: 2, q: "Let \\(f(x) = x^2e^{-x}\\). Find the interval on which f is increasing.", ms: ["\\(f'(x) = 2xe^{-x} - x^2e^{-x}\\) [M1][A1]", "\\(= x(2 - x)e^{-x}\\), and \\(e^{-x} > 0\\) [M1]", "increasing for \\(0 < x < 2\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = \\ln x - x\\), x > 0. Find the values of x for which f is decreasing.", ms: ["\\(f'(x) = \\frac{1}{x} - 1\\) [A1]", "\\(\\frac{1}{x} - 1 < 0 \\Rightarrow \\frac{1}{x} < 1\\) [M1]", "\\(x > 1\\) [A1]"] },
    { paper: "P1", marks: 1, diff: 1, q: "The function \\(f(x) = e^{-2x}\\) is", options: ["increasing for all x", "decreasing for all x", "increasing only for x > 0", "neither increasing nor decreasing"], answer: 1, ms: ["B - \\(f'(x) = -2e^{-2x} < 0\\) for all x."] },
  ],
  "math-12c": [
    { id: "math-12-q7", paper: "P1", marks: 1, diff: 1, q: "If \\(f(x) = 4x^3\\), then \\(f'(x) =\\)", options: ["\\(12x^2\\)", "\\(4x^2\\)", "\\(12x^3\\)", "\\(x^4\\)"], answer: 0, ms: ["A - power rule: \\(4 \\times 3x^2 = 12x^2\\)."] },
    { paper: "P1", marks: 1, diff: 1, q: "\\(\\frac{d}{dx}\\left(6\\sqrt{x}\\right) =\\)", options: ["\\(\\frac{3}{\\sqrt{x}}\\)", "\\(\\frac{6}{\\sqrt{x}}\\)", "\\(4x^{\\frac32}\\)", "\\(3\\sqrt{x}\\)"], answer: 0, ms: ["A - \\(6x^{\\frac12} \\to 3x^{-\\frac12} = \\frac{3}{\\sqrt{x}}\\)."] },
    { paper: "P1", marks: 1, diff: 1, q: "If \\(f(x) = \\frac{3}{x^2}\\), then \\(f'(x) =\\)", options: ["\\(-\\frac{6}{x^3}\\)", "\\(\\frac{6}{x^3}\\)", "\\(-\\frac{3}{x}\\)", "\\(\\frac{3}{2x}\\)"], answer: 0, ms: ["A - \\(3x^{-2} \\to -6x^{-3}\\)."] },
    { paper: "P1", marks: 2, diff: 1, q: "By expanding the brackets, differentiate \\(y = (2x + 1)^2\\).", ms: ["\\(y = 4x^2 + 4x + 1\\) [A1]", "\\(\\frac{dy}{dx} = 8x + 4\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = \\frac{x^3 - 4x}{x^2}\\), \\(x \\neq 0\\). Find \\(f'(x)\\).", ms: ["\\(f(x) = x - 4x^{-1}\\) [M1]", "\\(f'(x) = 1 + 4x^{-2}\\) [A1][A1]", "\\(= 1 + \\frac{4}{x^2}\\)"] },
    { paper: "P1", marks: 4, diff: 2, q: "Let \\(f(x) = ax^3 + bx\\). Given that \\(f'(1) = 7\\) and \\(f'(2) = 25\\), find a and b.", ms: ["\\(f'(x) = 3ax^2 + b\\) [A1]", "\\(3a + b = 7\\) and \\(12a + b = 25\\) [M1]", "\\(a = 2\\) [A1]", "\\(b = 1\\) [A1]"] },
    { paper: "P1", marks: 2, diff: 1, numeric: { value: 8, tol: 0.001 }, q: "Let \\(f(x) = x^4 - 2x^3 + 5\\). Find \\(f'(2)\\).", ms: ["\\(f'(x) = 4x^3 - 6x^2\\) [A1]", "\\(f'(2) = 32 - 24 = 8\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Find the x-coordinates of the points on the curve \\(y = x^3 - 6x^2 + 1\\) where the gradient is −9.", ms: ["\\(3x^2 - 12x = -9\\) [M1]", "\\(x^2 - 4x + 3 = 0\\) [A1]", "\\(x = 1\\) and \\(x = 3\\) [A1]"] },
  ],
  "math-12d": [
    { id: "math-12-q8", paper: "P1", marks: 4, diff: 2, q: "Find the equation of the tangent to \\(y = x^2 - 3x + 2\\) at \\(x = 4\\).", ms: ["\\(\\frac{dy}{dx} = 2x - 3\\) [M1]", "gradient at x = 4 is 5 [A1]", "point (4, 6) [A1]", "\\(y = 5x - 14\\) [A1]"] },
  ],
  "math-12e": [
    { id: "math-12-q9", paper: "P1", marks: 3, diff: 2, q: "Differentiate \\(y = e^{3x}\\sin x\\).", ms: ["Product rule [M1]", "\\(3e^{3x}\\sin x\\) [A1]", "\\(+ e^{3x}\\cos x\\) [A1]"] },
    { id: "math-12-q10", paper: "P1", marks: 3, diff: 2, q: "Differentiate \\(y = \\ln(x^2 + 1)\\).", ms: ["Chain rule [M1]", "\\(\\frac{1}{x^2 + 1}\\) [A1]", "\\(\\times 2x\\): \\(\\frac{2x}{x^2 + 1}\\) [A1]"] },
  ],
  "math-12f": [
    { paper: "P1", marks: 1, diff: 1, q: "If \\(f(x) = x^4 - 2x^2\\), then \\(f''(x) =\\)", options: ["\\(12x^2 - 4\\)", "\\(4x^3 - 4x\\)", "\\(12x^2 - 4x\\)", "\\(12x - 4\\)"], answer: 0, ms: ["A - \\(f'(x) = 4x^3 - 4x\\), \\(f''(x) = 12x^2 - 4\\)."] },
    { paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = x^3 - 3x^2 + 2\\). Find the set of values of x for which the graph of f is concave down.", ms: ["\\(f'(x) = 3x^2 - 6x\\) [A1]", "\\(f''(x) = 6x - 6 < 0\\) [M1]", "\\(x < 1\\) [A1]"] },
    { paper: "P1", marks: 1, diff: 2, q: "On an interval, the gradient \\(f'(x)\\) of a curve is increasing. Which statement must be true on that interval?", options: ["the graph of f is concave up", "\\(f(x) > 0\\)", "f is increasing", "\\(f'(x) > 0\\)"], answer: 0, ms: ["A - f′ increasing means f″ ≥ 0: the curve is concave up. f itself may be increasing or decreasing."] },
    { paper: "P2", marks: 2, diff: 1, numeric: { value: -3.28, tol: 0.01 }, q: "Let \\(f(x) = e^x - 3x^2\\). Find \\(f''(1)\\).", ms: ["\\(f'(x) = e^x - 6x\\), \\(f''(x) = e^x - 6\\) [M1]", "\\(f''(1) = e - 6 = -3.28\\) [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Let \\(y = x\\ln x\\), x > 0. Show that \\(\\frac{d^2y}{dx^2} = \\frac{1}{x}\\).", ms: ["product rule: \\(\\frac{dy}{dx} = \\ln x + x \\cdot \\frac{1}{x}\\) [M1]", "\\(= \\ln x + 1\\) [A1]", "\\(\\frac{d^2y}{dx^2} = \\frac{1}{x}\\) AG [A1]"] },
    { paper: "P1", marks: 3, diff: 2, q: "Let \\(f(x) = \\sin x\\) for \\(0 \\le x \\le 2\\pi\\). Find the interval on which the graph of f is concave up.", ms: ["\\(f''(x) = -\\sin x\\) [A1]", "concave up where \\(-\\sin x > 0\\), i.e. \\(\\sin x < 0\\) [M1]", "\\(\\pi < x < 2\\pi\\) [A1]"] },
  ],
  "math-12g": [
    { id: "math-12-q11", paper: "P1", marks: 5, diff: 3, q: "Find the coordinates of the stationary points of \\(y = x^3 - 3x^2 - 9x + 1\\) and determine their nature.", ms: ["\\(y' = 3x^2 - 6x - 9 = 0\\) [M1]", "\\(x = -1\\) or \\(x = 3\\) [A1]", "Points \\((-1, 6)\\) and \\((3, -26)\\) [A1]", "\\(y'' = 6x - 6\\) [M1]", "(−1, 6) max; (3, −26) min [A1]"] },
  ],
  "math-13": [
    { id: "math-13-q7", paper: "P1", marks: 1, diff: 1, q: "\\(\\int 6x^2\\,dx =\\)", options: ["\\(12x + c\\)", "\\(2x^3 + c\\)", "\\(6x^3 + c\\)", "\\(3x^2 + c\\)"], answer: 1, ms: ["B - \\(\\frac{6x^3}{3} + c = 2x^3 + c\\)."] },
    { id: "math-13-q8", paper: "P1", marks: 3, diff: 2, numeric: { value: 18, tol: 0.001 }, q: "Evaluate \\(\\displaystyle\\int_1^3 (2x + 5)\\,dx\\).", ms: ["\\(\\left[x^2 + 5x\\right]_1^3\\) [M1][A1]", "\\(24 - 6 = 18\\) [A1]"] },
    { id: "math-13-q11", paper: "P1", marks: 4, diff: 3, q: "Given \\(f'(x) = 3x^2 - 4\\) and \\(f(2) = 5\\), find \\(f(x)\\).", ms: ["\\(f(x) = x^3 - 4x + c\\) [M1][A1]", "\\(8 - 8 + c = 5\\) [M1]", "\\(f(x) = x^3 - 4x + 5\\) [A1]"] },
  ],
  "math-13b": [
    { id: "math-13-q10", paper: "P1", marks: 3, diff: 2, q: "Find \\(\\int \\cos(2x)\\,dx\\) and \\(\\int e^{4x}\\,dx\\).", ms: ["\\(\\frac{1}{2}\\sin 2x + c\\) (A1 for \\(\\sin 2x\\), A1 for \\(\\frac{1}{2}\\)) [A1][A1]", "\\(\\frac{1}{4}e^{4x} + c\\) [A1]"] },
  ],
  "math-13c": [
    { id: "math-13-q9", paper: "P1", marks: 4, diff: 2, numeric: { value: 4.5, tol: 0.001 }, q: "Find the area enclosed between \\(y = x^2\\) and \\(y = 3x\\).", ms: ["Intersections \\(x = 0, 3\\) [A1]", "\\(\\int_0^3 (3x - x^2)\\,dx\\) [M1]", "\\(\\left[\\frac{3x^2}{2} - \\frac{x^3}{3}\\right]_0^3\\) [A1]", "\\(= 4.5\\) [A1]"] },
  ],
  "math-14": [
    { paper: "P1", marks: 1, diff: 1, q: "If displacement is \\(s(t)\\), velocity is:", options: ["\\(\\int s\\,dt\\)", "\\(s'(t)\\)", "\\(s''(t)\\)", "\\(s(t)/t\\)"], answer: 1, ms: ["B - velocity is the rate of change of displacement: \\(v = \\frac{ds}{dt} = s\'(t)\\)."] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 2, tol: 0.001 }, q: "A particle has velocity \\(v = t^2 - 4\\) m s⁻¹. Find the time at which the particle is momentarily at rest (\\(t > 0\\)).", ms: ["\\(t^2 - 4 = 0\\) [M1]", "\\(t = \\pm 2\\) [A1]", "\\(t = 2\\) s [A1]"] },
    { paper: "P2", marks: 3, diff: 2, numeric: { value: 16, tol: 0.01 }, q: "\\(v(t) = t^2 - 4\\) for \\(0 \\le t \\le 4\\). Find the total distance travelled.", ms: ["Distance \\(= \\int_0^4 |t^2 - 4|\\,dt\\) [M1]", "\\(= \\frac{16}{3} + \\frac{32}{3}\\) [A1]", "\\(= 16\\) m [A1]"] },
    { paper: "P1", marks: 3, diff: 2, numeric: { value: 14, tol: 0.001 }, q: "A particle has displacement \\(s = t^3 - 2t\\). Find its acceleration at \\(t = \\frac{7}{3}\\).", ms: ["\\(v = 3t^2 - 2\\) [A1]", "\\(a = 6t\\) [A1]", "\\(a = 14\\) m s⁻² [A1]"] },
  ],
});

/* Syllabus gap fill (review 2026): 1.1 standard form, 3.3 bearings/elevation, 4.2 data presentation. */
IB.addQuestions("math", {
  "math-1": [
    { type: "short", paper: "P1", marks: 3, diff: 1, q: "Let \\(a = 6 \\times 10^5\\) and \\(b = 4 \\times 10^{-2}\\). Find \\(ab\\) and \\(\\frac{a}{b}\\), giving your answers in the form \\(k \\times 10^n\\), where \\(1 \\le k < 10\\) and \\(n \\in \\mathbb{Z}\\).", ms: ["\\(ab = 24 \\times 10^3\\) [M1]", "\\(= 2.4 \\times 10^4\\) [A1]", "\\(\\frac{a}{b} = 1.5 \\times 10^7\\) [A1]"] },
  ],
  "math-7": [
    { type: "short", paper: "P2", marks: 5, diff: 2, numeric: { value: 13.6, tol: 0.05 }, q: "A ship leaves port P and sails 8 km on a bearing of 040° to point A, then 11 km on a bearing of 130° to point B. (a) Show that angle PAB = 90°. (b) Find the distance PB.", ms: ["(a) Back bearing of P from A is 220°; 220° − 130° = 90° [M1][A1] AG", "(b) \\(PB^2 = 8^2 + 11^2\\) [M1]", "\\(PB = \\sqrt{185}\\) [A1]", "= 13.6 km [A1]"] },
    { type: "short", paper: "P2", marks: 3, diff: 2, numeric: { value: 23.1, tol: 0.05 }, q: "From the top of a cliff 40 m high, the angle of depression of a boat is 60°. Find the horizontal distance from the foot of the cliff to the boat.", ms: ["Angle of elevation from boat = 60° (alternate angles) [R1]", "\\(\\tan 60° = \\frac{40}{d}\\) [M1]", "d = 23.1 m [A1]"] },
  ],
  "math-9": [
    { type: "short", paper: "P2", marks: 4, diff: 2, numeric: { value: 24.5, tol: 0.05 }, q: "The heights, h cm, of 40 plants are grouped: 0 < h ≤ 10: 4; 10 < h ≤ 20: 10; 20 < h ≤ 30: 14; 30 < h ≤ 40: 8; 40 < h ≤ 50: 4. (a) Write down the modal class. (b) Use mid-interval values to estimate the mean height.", ms: ["(a) 20 < h ≤ 30 [A1]", "(b) mid-points 5, 15, 25, 35, 45 used [M1]", "\\(\\frac{20 + 150 + 350 + 280 + 180}{40} = \\frac{980}{40}\\) [A1]", "= 24.5 cm [A1]"] },
  ],
});
