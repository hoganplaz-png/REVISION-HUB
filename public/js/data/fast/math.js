/* ⏱ 10-minute fast notes · Mathematics AA SL (format: see js/fastnotes.js). */
IB.addFast({
  "math-6": {
    title: "Rational functions 有理函數 · 漸近線",
    intro: "2.8：1/x 同 (ax + b)/(cx + d)：VA 由分母、HA 由 x 系數比、兩個截距，同 sketch。",
    parts: [
      {
        h: "Rational functions 有理函數 · 漸近線",
        min: 3.5,
        blocks: [
          ["key", "\\(f(x)=\\dfrac{ax+b}{cx+d}\\)：<b>VA</b> \\(x=-\\dfrac{d}{c}\\)　<b>HA</b> \\(y=\\dfrac{a}{c}\\)　x-intercept \\(x=-\\dfrac{b}{a}\\)　y-intercept \\(y=\\dfrac{b}{d}\\)<br>（VA / HA 公式喺 formula booklet）"],
          ["rhyme", "口訣 5", "直線分母零，橫線睇頭頭", "VA（vertical asymptote）：分母 = 0 嘅 x。HA（horizontal asymptote）：x 好大時 y 去邊 → x 前面嘅係數相除。"],
          ["table", ["類型", "VA", "HA"], [["\\(y=\\frac{ax+b}{cx+d}\\)", "\\(x=-\\frac dc\\)", "\\(y=\\frac ac\\)"], ["\\(y=\\frac{a}{x-h}+k\\)", "x = h", "y = k"], ["\\(y=a\\,b^{x}+k\\)（含 \\(e^x\\)）", "冇", "y = k"], ["\\(y=\\ln(x-h)+k\\)", "x = h", "冇"]]],
          ["eg", "<b>P1 · 5 marks</b> \\(f(x)=\\dfrac{6x-1}{2x+4}\\)：求 asymptotes、intercepts、domain、range。", ["VA：\\(2x+4=0\\) → <b>x = −2</b>", "HA：\\(y=\\frac{6}{2}\\) = <b>y = 3</b>", "x-intercept：\\(6x-1=0\\) → x = 1/6，點 (1/6, 0)", "y-intercept：f(0) = −1/4，點 (0, −1/4)", "domain <b>x ≠ −2</b>；range <b>y ≠ 3</b> ✅"]],
          ["eg", "<b>P1 · 5 marks</b> Write \\(f(x)=\\dfrac{3x+5}{x-2}\\) in the form \\(a+\\dfrac{b}{x-2}\\), and hence sketch it.", ["\\(3x+5 = 3(x-2)+11\\) → \\(f(x)=3+\\dfrac{11}{x-2}\\)", "VA x = 2，HA y = 3；y-intercept f(0) = −5/2；x-intercept x = −5/3", "Sketch：兩條虛線（標方程）；b = 11 &gt; 0 → 曲線喺右上同左下兩個區域；標兩個 intercepts（寫坐標）✅"]],
          ["trap", ["漸近線一定要寫成<b>方程</b>：“x = −2”，唔好淨係寫 “−2”。", "HA 睇 x 前面嘅係數：\\(\\frac{3-2x}{x+1}\\) 嘅 HA 係 <b>y = −2</b>（唔係 3！）。", "Sketch：漸近線用虛線畫、標方程；曲線貼近但<b>唔好掂到</b>；標 intercepts 坐標。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識由 \\(\\frac{ax+b}{cx+d}\\) 即時寫出 VA、HA、兩個 intercepts", "我識將 (ax + b)/(cx + d) 寫成 p + q/(x − h)", "我知道 range 係 y ≠ HA"]],
        ],
      },
    ],
    summary: [
      "直線分母零，橫線睇頭頭（y = a/c）",
      "x-intercept：分子 = 0；y-intercept：x = 0",
      "k/x 同 (ax + b)/(cx − a) 係 self-inverse",
    ],
    practice: [
      { q: "Write down the vertical and horizontal asymptotes of f(x) = (3x + 5)/(x − 2), x ≠ 2. Hence state the range of f.", m: 3, a: "VA <b>x = 2</b> [1]; HA <b>y = 3</b> [1]; range <b>f(x) ≠ 3</b> [1]" },
      { q: "f(x) = (6x − 1)/(2x + 4). Find (a) the equations of the asymptotes, (b) the coordinates of the y-intercept.", m: 4, a: "(a) <b>x = −2</b> [1]; <b>y = 3</b> [1]; (b) f(0) = −1/4 [1] → <b>(0, −1/4)</b> [1]" },
      { q: "A graph has the form y = a/(x − h) + k with vertical asymptote x = 1, horizontal asymptote y = 2, and passes through (3, 5). Find a.", m: 3, a: "h = 1, k = 2 [1]; 5 = a/2 + 2 [1]; <b>a = 6</b> [1]" },
    ],
  },
  "math-6b": {
    title: "Solving equations 解方程 · Analytic & GDC",
    intro: "2.10：代數解（清分母、代 u 變二次）同 GDC 解（交點 / zero），答案要驗算。",
    parts: [
      {
        h: "Solving equations 解方程 · GDC",
        min: 3.5,
        blocks: [
          ["key", "<b>Paper 1</b>：analytic（代數）→ 要寫步驟、通常要 exact value（如 \\(\\ln 3\\)）。<br><b>Paper 2</b>：graph → 2 個函數畫埋一齊搵 <b>intersection</b>，答案 3 s.f.（除非題目話 exact）。"],
          ["table", ["GDC 工具", "Casio fx-CG50", "TI-Nspire", "TI-84"], [["畫圖", "Menu → Graph", "Graphs page (ctrl+I → Add Graphs)", "Y= 然後 GRAPH"], ["Zero / root", "G-Solve (Shift F5) → ROOT", "Menu → Analyze Graph → Zero", "2nd TRACE → 2:zero"], ["Min / Max", "G-Solve → MIN / MAX", "Analyze Graph → Minimum / Maximum", "2nd TRACE → 3:min / 4:max"], ["Intersection", "G-Solve → ISCT", "Analyze Graph → Intersection", "2nd TRACE → 5:intersect"], ["Asymptote", "睇圖 / Table 檢查 x 靠近 VA 時 y 值", "同左", "同左"]]],
          ["rhyme", "口訣 7", "兩條線相交，交點個 x 就係解", "方程 \\(f(x)=g(x)\\)：將左右兩邊分別輸入 Y1、Y2，intersection 嘅 x-coordinate 就係解。要 y 先寫 y。Window 要調到見到全部交點（Zoom Fit / Auto）。"],
          ["eg", "<b>P2 · 2 marks</b> Solve \\(e^x = 4 - x\\) (Paper 2, 3 s.f.).", ["輸入 Y1 = e^x，Y2 = 4 − x，畫圖", "Intersection → x ≈ 1.0737", "答 <b>x = 1.07</b> ✅（只有一個交點，因為 e^x 遞增、4 − x 遞減）"]],
          ["eg", "<b>P1 · 6 marks</b> Analytic：solve (a) \\(\\ln x=2\\)　(b) \\(2^x=5\\)　(c) \\(e^{2x}-5e^x+6=0\\).", ["(a) x = e<sup>2</sup>（≈ 7.39）", "(b) \\(x=\\log_2 5=\\dfrac{\\ln 5}{\\ln 2}\\) = <b>2.32</b>", "(c) 令 \\(u=e^x\\)：\\(u^2-5u+6=0\\) → (u − 2)(u − 3) = 0 → \\(e^x=2\\) 或 3 → <b>x = ln 2 或 x = ln 3</b> ✅"]],
          ["note", "<b>Show that / Hence</b>：「Hence」一定要用上一問結果；「Show that」要寫齊步驟去到題目所給答案，最後一行寫成題目嘅形式。"],
          ["trap", ["GDC 答案四捨五入前先睇有幾多個交點（題目話 “all solutions” 就要全部寫出，仲要有 domain 限制）。", "唔好中途 round：用 GDC 儲存 / Ans；最後先 round 3 s.f.。", "Sketch 題唔需要 GDC 精確值，但要標 intercepts、asymptotes 同形狀。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識用 GDC：intersection / zero / max / min", "我識用 \\(u=e^x\\) 解隱藏二次方程", "我會捨棄 √x、eˣ 等於負數嘅解"]],
        ],
      },
    ],
    summary: [
      "兩條線相交，交點個 x 就係解（3 s.f.）",
      "見 x⁴、4ˣ、e²ˣ、x 同 √x → 代 u 變二次",
      "冇代數方法就用 GDC，寫低兩條 function",
    ],
    practice: [
      { q: "Solve e^(2x) − 5eˣ + 6 = 0. Give exact answers.", m: 4, a: "u = eˣ: u² − 5u + 6 = 0 [1]; (u − 2)(u − 3) = 0 [1]; <b>x = ln 2</b> [1]; <b>x = ln 3</b> [1]" },
      { q: "Using your GDC, solve eˣ = 4 − x. Give your answer to 3 s.f.", m: 2, a: "intersection of y = eˣ and y = 4 − x [1]; <b>x = 1.07</b> [1]" },
      { q: "Solve x − 5√x + 6 = 0.", m: 4, a: "u = √x: u² − 5u + 6 = 0 [1]; u = 2 or 3 [1]; x = u² [1]; <b>x = 4 or 9</b> [1]" },
    ],
  },
  "math-6c": {
    title: "Transformations 圖形變換",
    intro: "2.11：translation、stretch、reflection 同組合變換；出面照做，入面反轉做。",
    parts: [
      {
        h: "Transformations 圖形變換",
        min: 3,
        blocks: [
          ["key", "萬能式：\\(y = a\\,f\\big(b(x-h)\\big) + k\\)<br><b>括號外</b>（a, k）郁 y → 直向 vertical｜<b>括號內</b>（b, h）郁 x → 橫向 horizontal，而且<b>反轉</b>做。"],
          ["rhyme", "口訣 1", "出面照住做，入面反轉做", "外面 +3 就真係上 3；入面 +3 反而係左 3；入面 ×2 反而係橫向縮到一半。"],
          ["table", ["寫法", "IB 字眼（description）", "點 (x, y) 變成", "記法"], [["\\(f(x)+k\\)", "translation by \\(\\binom{0}{k}\\)（k &lt; 0 就向下）", "(x, y+k)", "外加 → 上"], ["\\(f(x-h)\\)", "translation by \\(\\binom{h}{0}\\)（right h）", "(x+h, y)", "入面減 → 去右"], ["\\(f(x+h)\\)", "translation by \\(\\binom{-h}{0}\\)（left h）", "(x−h, y)", "入面加 → 去左"], ["\\(a\\,f(x)\\)", "vertical stretch, scale factor a", "(x, ay)", "y 乘 a"], ["\\(f(bx)\\)", "horizontal stretch, scale factor \\(\\tfrac{1}{b}\\)", "(x/b, y)", "x 除 b"], ["\\(-f(x)\\)", "reflection in the x-axis", "(x, −y)", "外面負 → y 變號"], ["\\(f(-x)\\)", "reflection in the y-axis", "(−x, y)", "入面負 → x 變號"]]],
          ["rhyme", "口訣 2（最快做題法）", "x 做相反，y 照計", "新 x = x ÷ b + h　　新 y = a × y + k（先乘除，後加減）。入面有 \\(2x-4\\) 呢類，一定要先抽成 \\(2(x-2)\\)。"],
          ["eg", "<b>P1 · 3 marks</b> (2, 5) 喺 \\(y=f(x)\\) 上。求 \\(y = 3f(2x-4)+1\\) 上面對應嘅點。", ["抽 b：\\(2x-4 = 2(x-2)\\) → b = 2，h = 2（⚠ 一定要先抽！）", "新 x = 2 ÷ 2 + 2 = <b>3</b>", "新 y = 3 × 5 + 1 = <b>16</b> → <b>(3, 16)</b> ✅"]],
          ["eg", "<b>P1 · 3 marks</b> (4, −2) 喺 \\(y=f(x)\\) 上。求 \\(y = -2f(x+1)+3\\) 上面對應嘅點。", ["b = 1，h = −1（\\(x+1 = x-(-1)\\)），a = −2，k = 3", "新 x = 4 ÷ 1 + (−1) = <b>3</b>", "新 y = (−2)(−2) + 3 = <b>7</b> → <b>(3, 7)</b> ✅"]],
          ["eg", "<b>P1 · 4 marks</b> Describe the transformations that map \\(y=f(x)\\) onto \\(y=-f(x-3)+1\\).", ["入面 \\(x-3\\) → translation by \\(\\binom{3}{0}\\)（right 3）", "外面 − → reflection in the x-axis", "外面 +1 → translation by \\(\\binom{0}{1}\\)", "<b>順序</b>：reflection 一定要喺 up 1 之前（否則變成 \\(-(f(x)+1)\\)）。Marks：每個變換 [1]，順序啱 [1]。"]],
          ["eg", "<b>P1 · 3 marks</b> Describe fully the transformations that map \\(y=f(x)\\) onto \\(y=f(3x-6)\\).", ["抽 3：\\(f(3x-6) = f\\big(3(x-2)\\big)\\)", "<b>horizontal stretch, scale factor \\(\\tfrac13\\)</b>（即係向 y 軸縮）", "then <b>translation by \\(\\binom{2}{0}\\)</b>（right 2）✅　（唔係 right 6！）"]],
          ["note", "<b>常考</b>：①image of a point under 兩個變換（P1 MCQ / 3 marks）；②“Describe the transformation(s)” 要寫齊名同數值；③rational function 嘅 asymptotes + intercepts + sketch（labelled）；④exp / ln inverse 加 domain；⑤P2 intersect 3 s.f.。"],
          ["trap", ["\\(f(2x-4)\\) 唔係 right 4！係 right <b>2</b>（先抽 2 出嚟）。", "Describe 要寫齊：<b>變換名 + 數值 / 方向</b>，例：“horizontal stretch, scale factor ½”、“translation by \\(\\binom{2}{0}\\)”。淨係寫 “move right” 冇分。", "Asymptote 都會跟住變：\\(y=\\frac1x\\) → \\(y=\\frac{2}{x-3}+1\\)，VA 由 x = 0 變 x = 3，HA 由 y = 0 變 y = 1。"]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["State / Write down", "直接寫答案，無需過程（通常 1 分），但要用正確記號"], ["Describe", "一定要有變換名稱 + 數值（vector、scale factor、axis），缺一不得分"], ["Sketch", "形狀 + 截距 + 漸近線（虛線並標方程）+ 端點座標；唔需要精確比例"], ["Hence", "必須用上一部分結果，另起爐灶會失分"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 點變換：抽 b → x 相反、y 照計（2–3 分）<br>• Describe transformation：名 + 向量 / scale factor + 順序（每個變換 1 分）<br>• Domain / range：用不等式，端點睇 ≥ 定 &gt;<br>• 漸近線：VA 分母 = 0，HA 睇 x→∞<br>• exp 方程：\\(u=e^x\\) 變二次"],
          ["trap", ["Describe 只寫 “shift” 或 “stretch”：要 “translation by \\(\\binom{h}{k}\\)” 同 “scale factor”", "Range 用 x 值答，或者漏咗端點值", "漸近線只寫 “2” 而唔係 “x = 2”"]],
          ["note", "<b>⏱ 考試 tips</b>：1 mark ≈ 1 分鐘；GDC 畫圖可驗證你嘅 sketch 同 range。Formula booklet 無變換公式，要背。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我可以由 \\(y=af(b(x-h))+k\\) 寫出新點，唔會忘記先抽 b", "我識用 “translation by vector / stretch scale factor / reflection in” 描述變換"]],
        ],
      },
    ],
    summary: [
      "出面照住做，入面反轉做",
      "x 做相反（÷b, +h），y 照計（×a, +k）；入面有數先抽 b",
      "Describe：變換名 + 數值 / 方向，順序要啱",
    ],
    practice: [
      { q: "The point (4, −2) lies on the graph of y = f(x). What are the coordinates of the image of this point on y = −2f(x+1) + 3?", m: 1, o: ["A. (3, 7)", "B. (5, 7)", "C. (3, −1)", "D. (5, −7)"], a: "<b>A</b>. x: 4 − 1 = 3; y: (−2)(−2) + 3 = 7 [1]" },
      { q: "The graph of y = f(x) is translated 3 units to the right. Which is the equation of the image?", m: 1, o: ["A. f(x) + 3", "B. f(x + 3)", "C. f(x − 3)", "D. f(3x)"], a: "<b>C</b>. 入面減 = 去右 [1]" },
      { q: "The graph of y = eˣ is reflected in the x-axis, then translated by \\(\\binom{0}{2}\\). Write down the equation of the new graph, its horizontal asymptote and its range.", m: 4, a: "<b>y = −eˣ + 2</b> [2]; HA <b>y = 2</b> [1]; range <b>y &lt; 2</b> [1]" },
      { q: "Describe fully the transformations that map y = f(x) to y = f(3x − 6).", m: 3, a: "f(3(x − 2)) [1]; horizontal stretch, scale factor 1/3 [1]; translation by \\(\\binom{2}{0}\\) [1]（先 translate right 6 再 stretch sf 1/3 亦 accept，數值跟順序配）" },
    ],
  },
  "math-1": {
    title: "Standard form 科學記數法 a × 10ᵏ",
    intro: "1.1：Paper 1 唔用計數機做乘除加減，Paper 2 識讀 GDC 嘅 E 記號，答案一定要 1 ≤ a &lt; 10。",
    parts: [
      {
        h: "Standard form 科學記數法",
        min: 1.5,
        blocks: [
          ["key", "<b>Standard form：a × 10<sup>k</sup>，1 ≤ a &lt; 10，k ∈ ℤ</b>。大數 k 正，細數 k 負。"],
          ["rhyme", "口訣 1", "小數點搬到只剩一位，搬幾位 k 就係幾", "向左搬 → k 正（45 000 = 4.5 × 10⁴）；向右搬 → k 負（0.00045 = 4.5 × 10⁻⁴）。"],
          ["eg", "<b>P1 · 3 marks</b> Calculate (a) (3.2 × 10⁵)(4 × 10⁻⁸)　(b) (6 × 10⁴) ÷ (1.5 × 10⁻³)　(c) 3 × 10⁴ + 5 × 10³. Give answers in standard form.", ["(a) 3.2 × 4 = 12.8；10⁵ × 10⁻⁸ = 10⁻³ → 12.8 × 10⁻³ → <b>1.28 × 10⁻²</b>（12.8 唔係 standard form，要再調整！）", "(b) 6 ÷ 1.5 = 4；10⁴ ÷ 10⁻³ = 10⁷ → <b>4 × 10⁷</b>", "(c) 先化同一個次方：3 × 10⁴ + 0.5 × 10⁴ = <b>3.5 × 10⁴</b> ✅"]],
          ["trap", ["乘除：a 乘除、10 的次方加減；加減：先令 k 一樣。", "a 一定 ≥ 1 同 &lt; 10：12.8 × 10⁻³ 同 0.5 × 10⁴ 都唔算 standard form。", "GDC 顯示 1.28E-2 係 1.28 × 10⁻²，唔好抄成 “1.28E-2”。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["trap", ["加減唔可以將次方相加。", "k 嘅正負：0.000 45 → k = −4。", "答案冇調整好（12.8 × 10⁻³）會失最後 A1。"]],
          ["check", ["我識 standard form 嘅 a 範圍，加減前先令 k 一樣", "我識數小數點搬幾多位，向左 k 加、向右 k 減", "我唔會抄 GDC 嘅 2.5E4，會寫 2.5 × 10⁴"]],
        ],
      },
    ],
    summary: [
      "Standard form：1 ≤ a &lt; 10，加減先化同一個次方",
      "乘除：a 乘除、10 嘅次方加減，最後調整 a",
      "小數點向左搬 k 加，向右搬 k 減",
    ],
    practice: [
      { q: "Write 0.00045 × 8 000 000 in the form a × 10^k, 1 ≤ a &lt; 10.", m: 2, a: "0.00045 = 4.5 × 10⁻⁴ and 8 000 000 = 8 × 10⁶ [1]; 4.5 × 8 = 36, 10⁻⁴ × 10⁶ = 10² → 36 × 10² = <b>3.6 × 10³</b> [1]" },
      { q: "Calculate (6 × 10⁵)(4 × 10⁻²), giving your answer in standard form.", m: 2, a: "24 × 10³ [1] = <b>2.4 × 10⁴</b> [1]" },
      { q: "Write 7.2 × 10⁵ − 4 × 10⁴ in standard form.", m: 2, a: "7.2 × 10⁵ − 0.4 × 10⁵ [1] = <b>6.8 × 10⁵</b> [1]" },
    ],
  },
  "math-1b": {
    title: "Arithmetic sequences 等差數列 · Sigma Σ",
    intro: "1.2：u_n 同 S_n 公式喺 formula booklet，重點係兩項相減搵 d、數啱項數、Paper 2 用 GDC 搵 least n。",
    parts: [
      {
        h: "Arithmetic sequences 等差數列",
        min: 3,
        blocks: [
          ["key", "\\(u_n = u_1 + (n-1)d\\)　　\\(S_n = \\frac{n}{2}\\big(2u_1 + (n-1)d\\big) = \\frac{n}{2}(u_1 + u_n)\\)<br>Definition：arithmetic sequence = 相鄰兩項嘅差係常數 d（common difference）。Test：\\(u_2 - u_1 = u_3 - u_2 = d\\)。"],
          ["rhyme", "口訣 2", "等差加 d，第 n 項只加 (n−1) 次", "第 1 項冇加過 d，所以第 20 項係加 19 次 d。已知兩項：相減得 d，唔使解聯立。"],
          ["eg", "<b>P1 · 5 marks</b> An arithmetic sequence has \\(u_3 = 14\\) and \\(u_8 = 29\\). Find \\(u_1\\), d, \\(u_{20}\\) and \\(S_{20}\\).", ["\\(u_8 - u_3 = 5d = 15\\) → <b>d = 3</b>", "\\(u_1 = 14 - 2(3) =\\) <b>8</b>", "\\(u_{20} = 8 + 19(3) =\\) <b>65</b>", "\\(S_{20} = \\frac{20}{2}(8 + 65) = 10 \\times 73 =\\) <b>730</b> ✅（用另一條 \\(\\frac{20}{2}(16+19\\cdot3)=730\\) 驗算）"]],
          ["eg", "<b>P1/P2 · 6 marks</b> Sequence 8, 11, 14, … (a) Which term equals 200? (b) Is 150 a term? (c) Find the least n such that \\(S_n > 1000\\).", ["(a) 8 + 3(n − 1) = 200 → n − 1 = 64 → <b>n = 65</b>", "(b) 8 + 3(n − 1) = 150 → n − 1 = 142/3 → 唔係整數 → <b>150 唔係 term</b>（n 一定係正整數）", "(c) \\(\\frac n2(16+3(n-1)) > 1000\\) → \\(3n^2 + 13n - 2000 > 0\\)", "GDC：解 \\(3n^2+13n-2000=0\\) 得 n ≈ 23.7 → 或試 n = 23：S = 943（&lt; 1000）；n = 24：S = 1020 → <b>n = 24</b> ✅"]],
          ["note", "<b>GDC (c) 做法</b>：Table / Spreadsheet 輸入 Y1 = x/2 × (16 + 3(x − 1))，睇邊個 x 第一次 &gt; 1000；或者 Y1 同 Y = 1000 畫圖搵 intersection，之後 round up 到整數 n。"],
          ["note", "<b>常考</b>：①兩項已知求 u₁, d / r 再求 S_n（P1 必考）；②“least n such that S_n &gt; k”（P2 GDC 或 log）；③複利 / 貶值用 TVM 或公式（P2，錢 2 d.p.）；④S∞ 加 “justify |r| &lt; 1”。Command terms：Find / Show that / Hence / Determine [1 mark 一步]。"],
          ["trap", ["數項數：由 a 到 b 嘅項數 = (b − a)/d + 1。", "n 一定係正整數；“least n” 要 round <b>up</b>，並要用 n 驗算。", "u_n 同 S_n 唔好混：問 “the 20th term” 用 u_n；問 “sum of first 20 terms” 用 S_n。"]],
        ],
      },
      {
        h: "Sigma notation Σ 求和",
        min: 2,
        blocks: [
          ["key", "\\(\\displaystyle\\sum_{k=1}^{n} u_k = u_1 + u_2 + \\dots + u_n\\)　　項數 = 上限 − 下限 + 1<br>重要：\\(\\sum_{k=1}^{n} c = nc\\)；\\(\\sum (a u_k + b) = a\\sum u_k + nb\\)。"],
          ["rhyme", "口訣 4", "Σ 先認出係等差定等比，再數項數", "睇 k 前面：3k + 2 係等差（d = 3）；\\(3\\cdot(\\tfrac12)^k\\) 係等比（r = ½）。第一項代入下限搵。"],
          ["eg", "<b>P1 · 5 marks</b> Evaluate (a) \\(\\sum_{k=1}^{10}(3k+2)\\)　(b) \\(\\sum_{k=0}^{4} 3\\left(\\tfrac12\\right)^k\\).", ["(a) 等差：u₁ = 5（k=1），u₁₀ = 32，10 項 → \\(\\frac{10}{2}(5+32) = \\) <b>185</b>", "(b) 等比：k = 0 → u₁ = 3，r = ½，項數 = 4 − 0 + 1 = 5", "\\(S_5 = \\dfrac{3(1-(1/2)^5)}{1-1/2} = 6 \\times \\dfrac{31}{32} =\\) <b>93/16 = 5.8125</b> ✅"]],
          ["note", "<b>GDC</b>：TI-Nspire / TI-84 用 <b>sum(seq(3k+2, k, 1, 10))</b>（TI-84：List → Math → sum；List → Ops → seq）。Casio：Run-Matrix → OPTN → CALC → Σ(。"],
          ["trap", ["下限唔係 1 時，項數 = 上限 − 下限 + 1，u₁ 用下限代入。", "Σ 入面如果 k 喺指數：等比；k 喺 base：多數係等差。"]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["Find", "列式 + 答案；每個步驟 1 分"], ["Show that", "由已知推到所給結果，不可倒推，最後一行要同題目一樣"], ["Determine", "需要過程，GDC 求解要寫出所設方程"], ["Give your answer to 3 s.f.", "最終答案才捨入，中間保持完整數值；錢可以 2 d.p. 但 accuracy 條件要睇題"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Find u_n / S_n：寫出 u₁、d 或 r，代入 booklet 公式（2–4 分）<br>• 已知兩項求 d、r：列兩條方程相除 / 相減<br>• Compound interest：用 GDC finance solver，記錄 N, I%, PV, FV, P/Y, C/Y<br>• 求 n 最細整數：GDC 表格或 log，答案要取整<br>• Sum to infinity：先確認 |r| &lt; 1"],
          ["trap", ["將 u₁ 當成 u₀，n 搞錯 1", "複利 compounding 次數 / P/Y 同 C/Y 設錯", "S∞ 忘記檢查 |r| &lt; 1", "中間步驟提早 round，答案偏離"]],
          ["note", "<b>⏱ 考試 tips</b>：Formula booklet Topic 1 有 u_n、S_n（arithmetic + geometric）、S∞ 同 compound interest 公式，唔使背但要識揀。長題最後一部通常係 “Hence” 或 GDC。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識用兩項相減 / 相除搵 d 或 r", "我識寫 u_n 同 S_n 公式（booklet 都有，但識揀）", "我識用 Σ 判斷等差定等比，並數啱項數", "我知道 n 一定係正整數，“least n” 要 round up"]],
        ],
      },
    ],
    summary: [
      "等差加 d，第 n 項只加 (n−1) 次；兩項相減得 d",
      "Σ：先認類型、再數項數（上 − 下 + 1）",
      "S_n = n/2 (u₁ + u_n)：頭加尾，乘項數，除二",
    ],
    practice: [
      { q: "The first term of an arithmetic sequence is 7 and the common difference is 4. What is the 20th term?", m: 1, o: ["A. 83", "B. 87", "C. 91", "D. 80"], a: "<b>A</b>. 7 + 19(4) = 83 [1]" },
      { q: "An arithmetic sequence has u₄ = 17 and u₁₀ = 41. Find u₁, d and S₁₅.", m: 4, a: "6d = 24 → <b>d = 4</b> [1]; u₁ = 17 − 12 = <b>5</b> [1]; S₁₅ = (15/2)(2·5 + 14·4) [1] = <b>495</b> [1]" },
      { q: "An arithmetic sequence has u₁ = 8, d = 3. Find the least n such that Sₙ > 1000.", m: 3, a: "Sₙ = (n/2)(16 + 3(n − 1)) [1]; Sₙ > 1000 → n ≥ 23.7 or test S₂₃ = 943, S₂₄ = 1020 [1]; <b>n = 24</b> [1]" },
      { q: "Evaluate Σ (k = 1 to 10) (3k + 2).", m: 3, a: "arithmetic, u₁ = 5, u₁₀ = 32 [1]; S = (10/2)(5 + 32) [1]; = <b>185</b> [1]" },
    ],
  },
  "math-1c": {
    title: "Geometric sequences 等比數列 · S_n",
    intro: "1.3：兩項相除搵 r，r² 記得 ±，求 n 用 log（P1）或 GDC table（P2）。",
    parts: [
      {
        h: "Geometric sequences 等比數列",
        min: 3,
        blocks: [
          ["key", "\\(u_n = u_1 r^{\\,n-1}\\)　　\\(S_n = \\dfrac{u_1(r^n-1)}{r-1} = \\dfrac{u_1(1-r^n)}{1-r}\\)　(r ≠ 1)<br>Definition：geometric sequence = 相鄰兩項嘅比係常數 r（common ratio）。Test：\\(u_2/u_1 = u_3/u_2 = r\\)。"],
          ["rhyme", "口訣 3", "等比乘 r，第 n 項係 r 的 (n−1) 次方", "已知兩項：相除 → \\(r^{\\text{隔幾項}}\\)，開方（偶數次方要小心 ±）。r &gt; 1 用 \\(r^n - 1\\) 版，|r| &lt; 1 用 \\(1 - r^n\\) 版，最方便。"],
          ["eg", "<b>P1 · 5 marks</b> A geometric sequence has \\(u_2 = 6\\) and \\(u_5 = 162\\). Find r, \\(u_1\\), \\(u_8\\) and \\(S_6\\).", ["\\(\\dfrac{u_5}{u_2} = r^3 = \\dfrac{162}{6} = 27\\) → <b>r = 3</b>", "\\(u_1 = 6 \\div 3 =\\) <b>2</b>", "\\(u_8 = 2 \\times 3^7 = 2 \\times 2187 =\\) <b>4374</b>", "\\(S_6 = \\dfrac{2(3^6 - 1)}{3-1} = 728\\) ✅"]],
          ["eg", "<b>P1 · 3 marks</b> Sequence 5, 10, 20, … Find the first term greater than 1 000 000.", ["\\(5 \\times 2^{n-1} > 10^6\\) → \\(2^{n-1} > 200\\,000\\)", "取 ln：\\((n-1)\\ln 2 > \\ln 200000\\) → \\(n - 1 > 17.61\\)", "n − 1 ≥ 18 → <b>n = 19</b>；驗算：\\(5 \\times 2^{18} = 1\\,310\\,720\\) ✅（n = 18 時 655 360 &lt; 10⁶）"]],
          ["table", ["已知", "做法"], [["兩項 \\(u_p, u_q\\)", "\\(r^{q-p} = u_q/u_p\\)"], ["求 n（指數入面）", "兩邊取 ln 或 log，或者用 GDC graph / table"], ["r 可以負數", "例 2, −6, 18, …：r = −3；項正負交替"], ["總和 S_n，|r| &lt; 1", "用 \\(\\frac{u_1(1-r^n)}{1-r}\\)"]]],
          ["trap", ["\\(r^3 = 27\\) → r = 3；但 \\(r^2 = 9\\) → r = ±3（要檢查有冇其他條件如 “all terms positive”）。", "\\(2 \\times 3^{n-1}\\) 唔係 \\((2\\times3)^{n-1}\\)：先指數，後乘。", "Solve for n 用 log：\\(r^{n-1} > c\\) → \\(n-1 > \\frac{\\ln c}{\\ln r}\\)；r &lt; 1 時除以負數要反轉不等號。"]],
        ],
      },
      {
        h: "Long question 長題拆解",
        min: 2.5,
        blocks: [
          ["flow", [["① 認類型", "等差 (+d) / 等比 (×r) / 財務"], ["② 抽已知", "寫 u₁, d 或 r, n"], ["③ 揀公式", "u_n, S_n, S∞, FV"], ["④ 計 + 驗算", "代回題目"]]],
          ["table", ["題目字眼", "即係", "用乜"], [["“common difference” / “increases by”", "等差", "u_n = u₁ + (n−1)d"], ["“common ratio” / “percentage”", "等比", "u_n = u₁ r^(n−1)"], ["“sum of first n terms”", "S_n", "booklet 公式"], ["“sum to infinity”", "S∞", "|r| &lt; 1"], ["“compounded … ” / “depreciates”", "財務", "FV 公式 / TVM"]]],
          ["eg", "<b>P2 · 8 marks</b> Geometric sequence with \\(u_1 = 4\\), \\(u_3 = 36\\), all terms positive. (i) Find r [2]. (ii) Find \\(S_6\\) [2]. (iii) Find the least n such that \\(S_n > 10^5\\) [4].", ["(i) r² = 36/4 = 9，positive terms → <b>r = 3</b>", "(ii) \\(S_6 = \\dfrac{4(3^6 - 1)}{2} = 2 \\times 728 =\\) <b>1456</b>", "(iii) \\(S_n = 2(3^n - 1) > 100000\\) → \\(3^n > 50001\\) → n &gt; ln 50001/ln 3 = 9.85 → <b>n = 10</b>", "驗算：S₁₀ = 2(59049 − 1) = 118 096 &gt; 10⁵；S₉ = 2(19683 − 1) = 39 364 ✅"]],
          ["trap", ["Sequence 與 series：sequence 係項嘅列表，series 係項嘅和。", "Paper 2 問 “find n” 用 GDC graph / table，Paper 1 用 log。", "“Show that” 題：最後一行必須係題目答案，唔好 round 到另一個數。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識用兩項相減 / 相除搵 d 或 r", "我識寫 u_n 同 S_n 公式（booklet 都有，但識揀）", "我識用 log 解 “find the least n”，並驗算"]],
        ],
      },
    ],
    summary: [
      "等比乘 r，第 n 項 = u₁ r^(n−1)；兩項相除得 r 的幾次方",
      "求 n：log（Paper 1）／ GDC table（Paper 2），round up 後驗算",
      "增加 p% → r = 1 + p/100；減少 p% → r = 1 − p/100",
    ],
    practice: [
      { q: "The 3rd and 6th terms of a geometric sequence are 12 and 96. What is the common ratio?", m: 1, o: ["A. 2", "B. 3", "C. 4", "D. 8"], a: "<b>A</b>. r³ = 96/12 = 8 → r = 2 [1]" },
      { q: "A geometric sequence has u₂ = 6 and u₅ = 162. Find r, u₁ and S₆.", m: 4, a: "r³ = 27 → <b>r = 3</b> [1]; u₁ = 2 [1]; S₆ = 2(3⁶ − 1)/2 [1] = <b>728</b> [1]" },
      { q: "A geometric sequence has u₁ = 4, u₃ = 36, all terms positive. Find the least n for which Sₙ > 100 000.", m: 4, a: "r = 3 [1]; Sₙ = 2(3ⁿ − 1) [1]; 3ⁿ &gt; 50 001 → n &gt; 9.85 [1]; <b>n = 10</b> [1]" },
    ],
  },
  "math-1d": {
    title: "Compound interest 複利 · Depreciation 貶值",
    intro: "1.4：FV 公式同 TVM solver；寫低 N、I%、PV、FV、P/Y、C/Y 就有 method mark。",
    parts: [
      {
        h: "Compound interest 複利 · depreciation",
        min: 3.5,
        blocks: [
          ["key", "<b>FV = PV × (1 + r/(100k))<sup>kn</sup></b>　FV = 終值，PV = 本金，n = 年數，r = 年利率 %，k = 每年複利次數。<br>Depreciation（貶值）：同一條式，r 用負數：FV = PV (1 − r/100)<sup>n</sup>。"],
          ["rhyme", "口訣 5", "年率除次數，次數乘年數", "Annual k=1；半年 k=2；季度 k=4；月 k=12。Interest earned = FV − PV。"],
          ["table", ["Compounding", "k", "每期利率 (r=6)", "期數 (n=3年)"], [["annually 每年", "1", "6%", "3"], ["half-yearly 半年", "2", "3%", "6"], ["quarterly 每季", "4", "1.5%", "12"], ["monthly 每月", "12", "0.5%", "36"]]],
          ["eg", "<b>P2 · 3 marks</b> $5000 is invested at 4% p.a. compounded quarterly for 6 years. Find the final value and the interest earned.", ["k = 4, n = 6 → 期數 24，每期 4/4 = 1%", "FV = 5000 × 1.01<sup>24</sup> = 5000 × 1.26973…", "= <b>$6348.67</b>（2 d.p.，錢要 2 位小數）；Interest = 6348.67 − 5000 = <b>$1348.67</b> ✅"]],
          ["eg", "<b>P2 · 2 marks</b> A car worth $24 000 depreciates 15% each year. Find its value after 5 years.", ["每年保留 85% → 24000 × 0.85⁵ = 24000 × 0.44370…", "= <b>$10 649</b>（nearest dollar；$10 648.93）✅"]],
          ["eg", "<b>P2 · 5 marks</b> (a) What annual rate (compounded annually) makes $3000 grow to $4000 in 5 years? (b) How many full years for money to double at 6% p.a. compounded annually?", ["(a) 3000(1 + r/100)⁵ = 4000 → (1 + r/100)⁵ = 4/3 → 1 + r/100 = (4/3)^(1/5) = 1.0592 → <b>r = 5.92%</b>", "(b) 1.06ⁿ &gt; 2 → n &gt; ln 2/ln 1.06 = 11.9 → <b>12 years</b>（11 年唔夠：1.06¹¹ = 1.898）✅"]],
          ["note", "<b>GDC TVM Solver</b>：N = 年數 × 每年次數（總期數），I% = 年利率（唔係每期），PV = −5000（付出去係負），PMT = 0，FV = 求，P/Y = C/Y = k。<br>Casio：Menu → Financial → Compound Interest；TI-Nspire：Menu → Finance → TVM Solver；TI-84：APPS → Finance → TVM Solver。"],
          ["trap", ["季度複利 k = 4：總期數 24 而唔係 6，利率 4/4 = 1%。", "年率 6.5% 輸入 6.5，唔係 0.065（booklet 公式 r 係百分比數字）。", "TVM：PV 同 FV 一正一負（現金流向）；兩個都正會得出錯誤答案。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識用 FV = PV(1 + r/(100k))^(kn) 同 TVM（N, I%, PV, FV, P/Y, C/Y）", "我知道錢要 2 d.p.、其他 3 s.f.", "我識搵「第幾個完整年」：比較前後兩年嘅數值"]],
        ],
      },
    ],
    summary: [
      "年率除次數，次數乘年數；貶值 r 取負",
      "TVM：PV 負、FV 正；I% 係年利率",
      "搵利率：(FV/PV)^(1/n) − 1；搵年數：table 或 log，再取整數",
    ],
    practice: [
      { q: "$5000 is invested at 4% per annum compounded quarterly. Find the value after 6 years, to the nearest cent.", m: 3, a: "5000(1 + 4/400)^(4×6) [2] = <b>$6348.67</b> [1]" },
      { q: "A car worth $24 000 depreciates by 15% each year. Find its value after 5 years, to the nearest dollar.", m: 2, a: "24000 × 0.85⁵ [1] = <b>$10 649</b> [1]" },
      { q: "Find the number of full years needed for an investment to double at 6% p.a. compounded annually.", m: 3, a: "1.06ⁿ &gt; 2 [1]; n &gt; ln 2/ln 1.06 = 11.9 [1]; <b>12 years</b> [1]" },
    ],
  },
  "math-1e": {
    title: "Infinite geometric series 無窮等比級數 S∞",
    intro: "1.8：|r| &lt; 1 先有 S∞ = u₁/(1 − r)，條件要寫出嚟攞 R1。",
    parts: [
      {
        h: "Infinite geometric series 無窮等比級數",
        min: 2.5,
        blocks: [
          ["key", "<b>S<sub>∞</sub> = u₁ / (1 − r)</b>，只有當 <b>|r| &lt; 1</b>（−1 &lt; r &lt; 1）先存在（converges 收斂）。|r| ≥ 1 → diverges，冇和。"],
          ["rhyme", "口訣 6", "|r| 細過 1 先收斂，頭除 (1−r)", "寫 “since |r| &lt; 1, the series converges”，呢句係 justification mark。"],
          ["eg", "<b>P1 · 7 marks</b> (a) Find \\(S_\\infty\\) of 12 + 6 + 3 + …　(b) A series has \\(u_1 = 5\\), \\(S_\\infty = 20\\). Find r.　(c) Write 0.727272… as a fraction.", ["(a) r = ½，|r| &lt; 1 → \\(S_\\infty = \\dfrac{12}{1-\\frac12} = \\) <b>24</b>", "(b) 5/(1 − r) = 20 → 1 − r = ¼ → <b>r = ¾</b>", "(c) 0.72 + 0.0072 + … → u₁ = 0.72，r = 0.01 → 0.72/0.99 = <b>8/11</b> ✅"]],
          ["eg", "<b>P1 · 5 marks</b> The series \\(1 + \\frac{x}{3} + \\frac{x^2}{9} + \\dots\\) converges. Find the possible values of x, and its sum when x = 1.", ["r = x/3；converges 當 |x/3| &lt; 1 → <b>−3 &lt; x &lt; 3</b>", "x = 1：r = 1/3 → S∞ = 1/(1 − 1/3) = <b>3/2</b> ✅"]],
          ["trap", ["要先檢查 |r| &lt; 1 先可以用 S∞；r = 1 或 −1 都唔收斂。", "Recurring decimal：找出第一項同 r，唔好直接 round。", "S∞ 係 limit，永遠唔會真係加到呢個數。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識寫 “|r| &lt; 1 so converges” 然後用 S∞ = u₁/(1−r)", "我識用 −1 &lt; r &lt; 1 解含 x 嘅收斂條件", "我識將循環小數寫成無窮等比級數", "我識計彈波總距離：第一次跌落 + 2 × S∞"]],
        ],
      },
    ],
    summary: [
      "|r| 細過 1 先收斂，S∞ = u₁/(1−r)",
      "含 x 嘅 r：解 −1 &lt; r &lt; 1 雙不等式",
      "彈波：上落都要計，rebounds × 2",
    ],
    practice: [
      { q: "Find the sum to infinity of 12 + 6 + 3 + …, justifying that it exists.", m: 3, a: "r = ½, |r| &lt; 1 so S∞ exists [1]; S∞ = 12/(1 − ½) [1] = <b>24</b> [1]" },
      { q: "Write 0.727272… as a fraction in the form a/b using a geometric series.", m: 3, a: "0.72 + 0.0072 + …; u₁ = 0.72, r = 0.01 [1]; S∞ = 0.72/0.99 [1] = <b>8/11</b> [1]" },
      { q: "The series 1 + (2x − 1) + (2x − 1)² + … has a sum to infinity. Find the possible values of x.", m: 3, a: "r = 2x − 1 [1]; −1 &lt; 2x − 1 &lt; 1 [1]; <b>0 &lt; x &lt; 1</b> [1]" },
    ],
  },
  "math-2": {
    title: "Laws of exponents 指數定律 · Logarithm 對數入門",
    intro: "1.5：整數次方嘅指數定律、log 嘅定義（log 就係次方）、log₁₀ 同 ln 用計數機計。",
    parts: [
      {
        h: "Laws of exponents 指數定律",
        min: 2,
        blocks: [
          ["key", "\\(a^m a^n = a^{m+n}\\)　\\(\\dfrac{a^m}{a^n} = a^{m-n}\\)　\\((a^m)^n = a^{mn}\\)　\\((ab)^n=a^nb^n\\)<br>\\(a^0 = 1\\)　\\(a^{-n} = \\dfrac{1}{a^n}\\)　\\(a^{\\frac{1}{n}} = \\sqrt[n]{a}\\)　\\(a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m\\)"],
          ["rhyme", "口訣 1", "同底乘就加，除就減，次方再次方就乘", "分數次方：分母係開根，分子係次方。負次方 = 倒轉。化簡先搵共同底（2, 4, 8 → 2；3, 9, 27 → 3）。"],
          ["eg", "<b>P1 · 3 marks</b> Simplify \\(\\dfrac{(2x^3y^{-2})^3}{4x^{-1}y}\\), giving positive powers only.", ["分子：\\(2^3 x^9 y^{-6} = 8x^9y^{-6}\\) [1]", "除：\\(\\dfrac{8}{4} x^{9-(-1)} y^{-6-1} = 2x^{10}y^{-7}\\) [1]", "正次方：<b>\\(\\dfrac{2x^{10}}{y^7}\\)</b> [1] ✅"]],
          ["eg", "<b>P1 · 3 marks</b> Evaluate (a) \\(8^{2/3}\\)　(b) \\(27^{-1/3}\\)　(c) \\(\\left(\\tfrac{1}{16}\\right)^{-3/4}\\).", ["(a) \\((\\sqrt[3]{8})^2 = 2^2 =\\) <b>4</b>", "(b) \\(\\dfrac{1}{27^{1/3}} = \\) <b>1/3</b>", "(c) 負次方倒轉：\\(16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 =\\) <b>8</b> ✅"]],
          ["trap", ["\\(a^m + a^n\\) 唔可以合併；\\((a+b)^2 \\ne a^2 + b^2\\)。", "\\(-2^2 = -4\\) 但 \\((-2)^2 = 4\\)；\\(2^{-3}\\) 係 1/8，唔係 −8。", "\\(2 \\times 2^x \\ne 4^x\\)，係 \\(2^{x+1}\\)。"]],
        ],
      },
      {
        h: "Logarithm 定義 · log₁₀ · ln",
        min: 2,
        blocks: [
          ["key", "<b>\\(a^x = b \\iff x = \\log_a b\\)</b>（a &gt; 0，a ≠ 1，b &gt; 0）：log 就係「底數要幾多次方先等於 b」。<br>\\(\\log x = \\log_{10} x\\)（common log），\\(\\ln x = \\log_e x\\)（natural log，e ≈ 2.718）。"],
          ["rhyme", "口訣", "log 就係問次方", "\\(\\log_2 32\\)：2 嘅幾多次方係 32？→ 5。\\(\\log_3 \\frac{1}{9} = -2\\)，\\(\\log_a 1 = 0\\)，\\(\\log_a a = 1\\)。"],
          ["eg", "<b>P1 · 3 marks</b> Find the exact value of (a) \\(\\log_2 32\\)　(b) \\(\\log_{10} 0.001\\)　(c) \\(\\log_3 \\frac{1}{81}\\).", ["(a) \\(2^5 = 32\\) → <b>5</b>", "(b) \\(10^{-3} = 0.001\\) → <b>−3</b>", "(c) \\(3^{-4} = \\frac{1}{81}\\) → <b>−4</b> ✅"]],
          ["trap", ["log 入面一定要正數：log 0、log(−3) 冇定義。", "計數機 log 掣係 base 10，ln 掣係 base e。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識所有指數定律，包括分數同負次方", "我識由 log 定義轉做指數：\\(\\log_a b = c \\iff a^c = b\\)", "我識用計數機嘅 log 同 ln 掣，答案 3 s.f."]],
        ],
      },
    ],
    summary: [
      "同底乘就加，除就減，次方再次方就乘",
      "aˣ = b ⇔ x = log_a b；log_a a = 1，log_a 1 = 0",
      "log 就係問次方；log 掣係 base 10，ln 掣係 base e",
    ],
    practice: [
      { q: "Simplify (2x³y⁻²)³ ÷ (4x⁻¹y), giving positive powers.", m: 3, a: "8x⁹y⁻⁶ [1]; 2x¹⁰y⁻⁷ [1]; <b>2x¹⁰/y⁷</b> [1]" },
      { q: "Find the exact value of log₃(1/81).", m: 1, a: "3⁻⁴ = 1/81 → <b>−4</b> [1]" },
      { q: "Solve 2^(3x − 1) = 1/16.", m: 3, a: "1/16 = 2⁻⁴ [1]; 3x − 1 = −4 [1]; <b>x = −1</b> [1]" },
    ],
  },
  "math-2b": {
    title: "Log laws 對數定律 · Exponential & log equations",
    intro: "1.7：分數次方、三條 log 定律 + change of base、指數方程（化同底 / 取 ln）、log 方程（合併再驗 domain）。",
    parts: [
      {
        h: "Logarithms 對數定義 + 定律",
        min: 3,
        blocks: [
          ["key", "<b>\\(a^x = b \\iff x = \\log_a b\\)</b>（a &gt; 0, a ≠ 1, b &gt; 0）。<br>\\(\\log_a a = 1\\)　\\(\\log_a 1 = 0\\)　\\(\\log_a a^x = x\\)　\\(a^{\\log_a x} = x\\)<br>\\(\\ln x = \\log_e x\\)；\\(\\lg x = \\log_{10} x\\)（只可以取正數）"],
          ["table", ["Law", "式", "例"], [["Product 積", "\\(\\log_a(xy) = \\log_a x + \\log_a y\\)", "log₂ 3 + log₂ 4 = log₂ 12"], ["Quotient 商", "\\(\\log_a\\frac{x}{y} = \\log_a x - \\log_a y\\)", "log₂ 12 − log₂ 3 = log₂ 4 = 2"], ["Power 次方", "\\(\\log_a x^m = m\\log_a x\\)", "log 100³ = 3 × 2 = 6"], ["Change of base", "\\(\\log_b a = \\dfrac{\\log_c a}{\\log_c b}\\)", "log₄ 7 = ln 7 / ln 4 = 1.40"]]],
          ["rhyme", "口訣 2", "加變乘，減變除，次方走落前", "合併 log 時：加 → 乘入面；減 → 除入面；係數 → 變次方。Log 唔可以「分拆」：\\(\\log(x+y) \\ne \\log x + \\log y\\)。"],
          ["eg", "<b>P1 · 4 marks</b> Evaluate (a) \\(\\log_2 32\\)　(b) \\(\\log_3\\tfrac19\\)　(c) \\(\\log_5\\sqrt5\\)　(d) \\(2\\log_3 6 - \\log_3 4\\).", ["(a) 2⁵ = 32 → <b>5</b>　(b) 3⁻² → <b>−2</b>　(c) 5^(1/2) → <b>1/2</b>", "(d) \\(\\log_3 36 - \\log_3 4 = \\log_3 9 =\\) <b>2</b> ✅"]],
          ["eg", "<b>P1 · 4 marks</b> Given \\(\\log_a 2 = p\\) and \\(\\log_a 3 = q\\), express in terms of p and q: (a) \\(\\log_a 18\\)　(b) \\(\\log_a\\frac{2}{27}\\)　(c) \\(\\log_a\\sqrt6\\).", ["(a) \\(\\log_a(2\\cdot3^2) = p + 2q\\)", "(b) \\(\\log_a 2 - \\log_a 3^3 = p - 3q\\)", "(c) \\(\\tfrac12\\log_a 6 = \\tfrac12(p+q)\\) ✅"]],
          ["eg", "<b>P1 · 3 marks</b> Write \\(\\ln 5 + 2\\ln 3 - \\ln 15\\) as a single logarithm, then simplify.", ["\\(\\ln 5 + \\ln 9 - \\ln 15\\) [1]", "\\(=\\ln\\dfrac{5\\times9}{15}\\) [1] = <b>\\(\\ln 3\\)</b> [1] ✅"]],
          ["note", "<b>GDC</b>：log₂ 7 用 change of base 輸入 ln(7)/ln(2) = 2.81；部分機有 logBASE( )。"],
          ["trap", ["\\(\\log_a x\\) 只喺 x &gt; 0 有定義；log(−2) 無意義。", "\\(\\log x + \\log y = \\log(xy)\\)（唔係 log(x+y)）。", "\\(2\\log_3 6\\) 先變 \\(\\log_3 6^2\\) 先可以合併。"]],
        ],
      },
      {
        h: "Exponential equations 指數方程",
        min: 3,
        blocks: [
          ["flow", [["① 同底？", "可以化同底 → 比較指數"], ["② 唔得 → 取 log", "兩邊 ln：x ln a = ln b"], ["③ 隱藏二次", "令 u = aˣ"]]],
          ["eg", "<b>P1 · 3 marks</b> Solve \\(8^x = 4^{x+1}\\).", ["化底 2：\\(2^{3x} = 2^{2x+2}\\) [1]", "指數相等：3x = 2x + 2 [1] → <b>x = 2</b> [1] ✅"]],
          ["eg", "<b>P1/P2 · 3 marks</b> Solve \\(3^{2x-1} = 20\\). Give (a) the exact form (b) the answer to 3 s.f.", ["取 ln：\\((2x-1)\\ln 3 = \\ln 20\\) [1]", "\\(2x - 1 = \\dfrac{\\ln 20}{\\ln 3} = \\log_3 20\\) → exact：<b>\\(x = \\dfrac{1 + \\log_3 20}{2}\\)</b> [1]", "數值：ln 20 = 2.9957，ln 3 = 1.0986 → 2x − 1 = 2.7268 → <b>x = 1.86</b> [1] ✅"]],
          ["eg", "<b>P1 · 5 marks</b> Solve \\(4^x - 6\\cdot2^x + 8 = 0\\).", ["\\(4^x = (2^x)^2\\)；令 \\(u = 2^x\\) → \\(u^2 - 6u + 8 = 0\\) [2]", "\\((u-2)(u-4) = 0\\) → u = 2 或 4 [1]", "\\(2^x = 2\\) → <b>x = 1</b>；\\(2^x = 4\\) → <b>x = 2</b> [2] ✅"]],
          ["trap", ["\\(e^x = -3\\) 或 \\(2^x = 0\\) 無解 (aˣ &gt; 0)；二次方程出負值要捨棄 u &lt; 0。", "取 log 之後 \\(x\\ln a\\) 要括號：\\((2x-1)\\ln 3\\)，唔係 \\(2x - \\ln 3\\)。", "Exact 答案唔好 round；題目話 3 s.f. 先轉小數。"]],
        ],
      },
      {
        h: "Logarithmic equations 對數方程",
        min: 3,
        blocks: [
          ["rhyme", "口訣 3", "合成一個 log，轉指數式，最後驗 domain", "兩邊都單一 log 同底 → 去 log 比較；一邊係數字 → 轉成指數。最後將解代返原式 log 入面檢查係咪 &gt; 0。"],
          ["eg", "<b>P1 · 5 marks</b> Solve \\(\\log_2 x + \\log_2(x-2) = 3\\).", ["合併：\\(\\log_2 x(x-2) = 3\\) [1]", "轉指數：\\(x(x-2) = 2^3 = 8\\) [1]", "\\(x^2 - 2x - 8 = 0\\) → (x − 4)(x + 2) = 0 [1]", "x = 4 或 −2；x = −2 令 log₂(−2) 無定義 → 捨棄 [1] → <b>x = 4</b> [1] ✅"]],
          ["eg", "<b>P1 · 3 marks</b> Solve \\(\\ln(2x+1) = 3\\), giving the answer to 3 s.f.", ["\\(2x+1 = e^3 = 20.0855\\) [1]", "\\(x = 9.5428\\) → <b>x = 9.54</b> [2] ✅（驗：2x + 1 &gt; 0 ✓）"]],
          ["eg", "<b>P1 · 4 marks</b> Solve \\(\\log_3(x+1) - \\log_3(x-1) = 2\\).", ["\\(\\log_3\\dfrac{x+1}{x-1} = 2\\) [1] → \\(\\dfrac{x+1}{x-1} = 9\\) [1]", "x + 1 = 9x − 9 → 10 = 8x → <b>x = 5/4</b> [1]", "驗：x − 1 = 0.25 &gt; 0 ✓ [1]"]],
          ["eg", "<b>P1 · 4 marks</b> Solve \\(\\log_2 x + \\log_4 x = 6\\).", ["change of base：\\(\\log_4 x = \\dfrac{\\log_2 x}{\\log_2 4} = \\tfrac12\\log_2 x\\) [1]", "\\(\\tfrac32\\log_2 x = 6\\) [1] → \\(\\log_2 x = 4\\) [1] → <b>x = 16</b> [1] ✅"]],
          ["trap", ["Log 方程一定驗 domain，漏咗少 1 分（A1）。", "\\(\\log x = \\log y\\) 先可以得 x = y；唔係 \\(\\log x = 3\\) 就等於 x = 3（係 x = 10³ 或 a³）。"]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["Simplify", "合併成單一項 / 最簡形式，一般要用定律"], ["Solve", "exact 或 3 s.f. 按題目；log 方程要檢查真數 &gt; 0"], ["Show that", "每個定律用一步，寫清楚，唔好跳"], ["Hence", "要用上題結果（例如 \\(u=2^x\\)）"], ["Interpret", "用 context 單位同詞語講 k 或 A 代表乜"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 化簡 log / 指數式：用 log 定律每步 1 分<br>• 解 \\(a^x=b\\)：兩邊取 log 或 ln，答案 3 s.f. 或 exact<br>• Show that + log：由定律推出所給式<br>• 指數模型：由兩個條件求 A、k，再預測 / 求 t<br>• Exact value：答案寫成 ln 或 log 形式，唔好用小數"],
          ["trap", ["\\(\\log(a+b)\\) 當成 \\(\\log a+\\log b\\)", "解 log 方程後唔檢查，保留負數真數嘅假根", "用 GDC 答案但題目要 exact", "模型中 t = 0 嘅意義講錯"]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 \\(a^x=e^{x\\ln a}\\)、換底公式、log 定律。Exact 題用 GDC 驗證但唔好直接寫小數。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識 \\(a^x=b \\iff x=\\log_a b\\) 並背熟三條 log 定律 + change of base", "我識將多個 log 合成一個，或者用 p, q 表達", "我識解 aˣ = b：化同底 / 取 ln", "我識見 \\(4^x - 6\\cdot 2^x + 8\\) 想到 u = 2ˣ", "我解 log 方程後一定驗 domain，捨棄無效解"]],
        ],
      },
    ],
    summary: [
      "加變乘，減變除，次方走落前",
      "Change of base：log_b a = ln a ÷ ln b",
      "aˣ = b：化同底，唔得就取 ln",
      "見 4ˣ、e²ˣ → 令 u = 2ˣ、eˣ，解二次，捨棄 u ≤ 0",
      "Log 方程：合成一個，轉指數，驗 domain",
    ],
    practice: [
      { q: "Which is equal to log₂ 12 − log₂ 3?", m: 1, o: ["A. log₂ 9", "B. 2", "C. log₂ 4 + 1", "D. 4"], a: "<b>B</b>. log₂(12/3) = log₂ 4 = 2 [1]" },
      { q: "Given log₁₀ x = a, express log₁₀ (100x³) in terms of a.", m: 1, o: ["A. 2 + 3a", "B. 3a + 100", "C. 6a", "D. 2a + 3"], a: "<b>A</b>. log 100 + 3 log x = 2 + 3a [1]" },
      { q: "Write ln 5 + 2 ln 3 − ln 15 as a single logarithm and simplify.", m: 3, a: "ln 5 + ln 9 − ln 15 [1]; ln(45/15) [1]; <b>ln 3</b> [1]" },
      { q: "Given log_a 2 = p and log_a 3 = q, express log_a 18 and log_a(2/27) in terms of p and q.", m: 3, a: "log_a 18 = log_a(2·3²) = <b>p + 2q</b> [1]; log_a 2 − 3 log_a 3 [1] = <b>p − 3q</b> [1]" },
      { q: "Solve 8ˣ = 4^(x+1).", m: 3, a: "2^(3x) = 2^(2x+2) [1]; 3x = 2x + 2 [1]; <b>x = 2</b> [1]" },
      { q: "Solve 3^(2x−1) = 20. Give your answer to 3 s.f.", m: 3, a: "(2x − 1) ln 3 = ln 20 [1]; 2x − 1 = 2.727 [1]; <b>x = 1.86</b> [1]" },
      { q: "Solve 4ˣ − 6·2ˣ + 8 = 0.", m: 5, a: "u = 2ˣ: u² − 6u + 8 = 0 [2]; u = 2, 4 [1]; <b>x = 1</b> [1]; <b>x = 2</b> [1]" },
      { q: "Solve log₂ x + log₂(x − 2) = 3.", m: 5, a: "log₂ x(x − 2) = 3 [1]; x(x − 2) = 8 [1]; (x − 4)(x + 2) = 0 [1]; reject x = −2 as log of negative [1]; <b>x = 4</b> [1]" },
      { q: "Solve ln(2x + 1) = 3. Give your answer to 3 s.f.", m: 3, a: "2x + 1 = e³ [1]; x = 9.5428 [1]; <b>x = 9.54</b> [1]" },
    ],
  },
  "math-2c": {
    title: "Exponential & log functions 指數同對數函數",
    intro: "2.9：aˣ、eˣ、logₐx、ln x 嘅圖像（截距、漸近線、互為反函數），同 growth / decay model。",
    parts: [
      {
        h: "Exponential models 指數模型",
        min: 3,
        blocks: [
          ["key", "Growth：\\(P = P_0 e^{kt}\\)（k &gt; 0）　Decay：\\(A = A_0 e^{-kt}\\) 或 \\(A_0(\\tfrac12)^{t/T}\\)（T = half-life）<br>有 limiting value：\\(y = ae^{-kt} + c\\) → 長遠 y → c（HA）。"],
          ["rhyme", "口訣 4", "初值 t = 0，倍數看底，長遠看 HA", "Initial value = 代 t = 0；“long-term” 令 t → ∞（e⁻ᵏᵗ → 0）。要搵 t：取 ln；Paper 2 可畫圖搵 intersection。"],
          ["eg", "<b>P2 · 5 marks</b> A population is modelled by \\(P(t) = 200e^{0.03t}\\), t in years. (a) State the initial population. (b) Find the time to reach 500, to 3 s.f.", ["(a) P(0) = <b>200</b> [1]", "(b) \\(200e^{0.03t} = 500\\) → \\(e^{0.03t} = 2.5\\) [1]", "\\(0.03t = \\ln 2.5 = 0.9163\\) [1] → \\(t = 30.5\\) years [2] ✅（GDC：Y1 = 200e^(0.03x) 與 Y2 = 500 intersection）"]],
          ["eg", "<b>P2 · 5 marks</b> A radioactive substance has mass \\(A = 80\\left(\\tfrac12\\right)^{t/12}\\) g, t in hours. (a) Mass after 30 hours. (b) Half-life. (c) Time to reach 10 g.", ["(a) 80 × 0.5^2.5 = 80 × 0.17678 = <b>14.1 g</b> [2]", "(b) 指數 t/12：每 12 小時 mass 減半 → <b>12 hours</b> [1]", "(c) 0.5^(t/12) = 10/80 = 1/8 = 0.5³ → t/12 = 3 → <b>t = 36 hours</b> [2] ✅"]],
          ["eg", "<b>P1 · 3 marks</b> The graph of \\(y = ab^x\\) passes through (0, 3) and (2, 12). Find a and b (b &gt; 0).", ["(0, 3)：a = <b>3</b> [1]", "(2, 12)：3b² = 12 → b² = 4 [1] → <b>b = 2</b> [1] ✅"]],
          ["note", "<b>常考</b>：①Paper 2 model：initial value / time to reach value（取 ln 或 GDC）/ long-term 值；②Paper 1：solve exact；③“Show that” 轉 log 形式；④“Hence” 用上一問結果。"],
          ["trap", ["t 單位要睇清楚（hours / years）。", "Half-life 公式 \\((\\tfrac12)^{t/T}\\)：T 係每次減半所需時間。", "Model 答案要有單位，同合理 round（3 s.f.）。"]],
        ],
      },
      {
        h: "Exponential & log 指數同對數函數",
        min: 3,
        blocks: [
          ["table", ["Graph", "必過嘅點", "Asymptote", "Domain", "Range"], [["\\(y=a^x\\)（a &gt; 0, a ≠ 1）", "(0, 1)", "HA y = 0", "x ∈ ℝ", "y &gt; 0"], ["\\(y=e^x\\)", "(0, 1)", "HA y = 0", "x ∈ ℝ", "y &gt; 0"], ["\\(y=\\log_a x\\)", "(1, 0)", "VA x = 0", "x &gt; 0", "y ∈ ℝ"], ["\\(y=\\ln x\\)", "(1, 0)", "VA x = 0", "x &gt; 0", "y ∈ ℝ"]]],
          ["rhyme", "口訣 6", "exp 同 log 係鏡像，鏡就係 y = x", "\\(a^x\\) 同 \\(\\log_a x\\) 互為 inverse：(0,1) ↔ (1,0)，HA y=0 ↔ VA x=0。\\(\\ln(e^x)=x\\)，\\(e^{\\ln x}=x\\)。"],
          ["key", "a &gt; 1：\\(a^x\\) 遞增（increasing）；0 &lt; a &lt; 1：遞減（decay）。\\(f(x)=ab^x+k\\)：HA 係 y = k，y-intercept = a + k。<br>變換同樣適用：\\(y=\\ln(x-h)+k\\) 嘅 VA 係 x = h，domain x &gt; h。"],
          ["eg", "<b>P1 · 6 marks</b> \\(f(x)=2e^{x-1}+3\\)：找 HA、range、同 \\(f^{-1}(x)\\) 連 domain。", ["HA <b>y = 3</b>；range <b>f(x) &gt; 3</b>", "Inverse：令 \\(y=2e^{x-1}+3\\)，x 同 y 對調：\\(x=2e^{y-1}+3\\)", "\\(\\dfrac{x-3}{2}=e^{y-1}\\) → \\(y-1=\\ln\\dfrac{x-3}{2}\\) → <b>\\(f^{-1}(x)=\\ln\\!\\left(\\dfrac{x-3}{2}\\right)+1\\)</b>", "domain of \\(f^{-1}\\) = range of f → <b>x &gt; 3</b>；range of \\(f^{-1}\\) = ℝ ✅"]],
          ["eg", "<b>P1 · 4 marks</b> Sketch \\(y=\\ln(x-2)\\) and state its domain, VA, and x-intercept.", ["由 \\(y=\\ln x\\) 向右 translate 2", "VA <b>x = 2</b>；domain <b>x &gt; 2</b>", "x-intercept：\\(\\ln(x-2)=0\\) → x − 2 = 1 → <b>(3, 0)</b> ✅"]],
          ["trap", ["\\(\\ln(x-2)\\) 嘅 VA 係 x = 2；曲線喺 x = 2 右邊貼住條虛線向下，唔好畫過去左邊。", "\\(e^x\\) 永遠 &gt; 0：\\(e^x=-3\\) 無解，要寫 “no solution”。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識 growth / decay：初值、half-life、time to reach、long-term", "我識 sketch exp / ln 圖（過 (0,1) / (1,0)，漸近線標出）", "我識搵 inverse，並寫出 inverse 嘅 domain"]],
        ],
      },
    ],
    summary: [
      "Model：t = 0 係初值，長遠睇 HA，half-life 睇底",
      "exp 同 log 係鏡像，鏡就係 y = x；inverse 就 domain range 對調",
      "eˣ 過 (0, 1)、漸近線 y = 0；ln x 過 (1, 0)、漸近線 x = 0",
    ],
    practice: [
      { q: "A population is P(t) = 200e^(0.03t), t in years. Find the initial population and the time to reach 500 (3 s.f.).", m: 4, a: "P(0) = <b>200</b> [1]; e^(0.03t) = 2.5 [1]; t = ln 2.5 / 0.03 [1]; <b>t = 30.5 years</b> [1]" },
      { q: "A = 80(½)^(t/12) g, t in hours. Find the mass after 30 hours and the time to reach 10 g.", m: 4, a: "80(0.5)^2.5 [1] = <b>14.1 g</b> [1]; (½)^(t/12) = 1/8 [1]; <b>t = 36 hours</b> [1]" },
      { q: "The graph of y = abˣ passes through (0, 3) and (2, 12), b &gt; 0. Find a and b.", m: 3, a: "a = 3 [1]; 3b² = 12 [1]; <b>b = 2</b> [1]" },
      { q: "Let f(x) = 2e^(x−1) + 3. Find f⁻¹(x) and state its domain.", m: 4, a: "x = 2e^(y−1) + 3 [1]; (x − 3)/2 = e^(y−1) [1]; <b>f⁻¹(x) = ln((x − 3)/2) + 1</b> [1]; domain <b>x &gt; 3</b> [1]" },
    ],
  },
  "math-3": {
    title: "Simple deductive proof 證明",
    intro: "1.6：格式攞分 — LHS → RHS、用 2n / 2n + 1 / n, n + 1 表示整數、最後寫結論句；一個反例就可以否定命題。",
    parts: [
      {
        h: "Simple deductive proof 證明格式",
        min: 2.5,
        blocks: [
          ["key", "格式：<b>LHS = … = … = RHS</b>（由一邊推到另一邊），最後寫一句結論。<br>Even = 2n；odd = 2n + 1；consecutive integers = n, n + 1, n + 2（n ∈ ℤ）。Identity 用 ≡ 表示恆等。"],
          ["rhyme", "口訣 1", "由左行到右，唔好兩邊一齊郁", "揀複雜嗰邊開始拆，拆到等於另一邊。唔可以由要證嘅結論開始推（會變 circular）。"],
          ["table", ["要證", "設", "目標"], [["even / 偶數", "2n", "結果 = 2 × integer"], ["odd / 奇數", "2n + 1", "結果 = 2k + 1"], ["divisible by k", "—", "結果 = k × integer"], ["兩個不同 integer", "2m + 1, 2n + 1（唔同字母！）", "—"], ["恆大於 0", "completing the square", "(…)² + 正數"]]],
          ["note", "<b>寫法</b>：“Let n be an integer” → 代數推導 → “which is a multiple of …, hence …” → “Therefore proved / QED”。每個步驟都要有因由（如 expand、factorise）。"],
          ["trap", ["證明兩個不同 odd 數，要用 <b>m 同 n</b>（2m+1, 2n+1），唔可以兩個都用 n。", "例子檢查（plug in numbers）唔算 proof。", "最後一定要寫結論句：“so the sum is even for all integers n”。"]],
        ],
      },
      {
        h: "Proof 例題：整除 / 奇偶",
        min: 4,
        blocks: [
          ["eg", "<b>P1 · 3 marks</b> Prove that the sum of three consecutive integers is divisible by 3.", ["令 integers 為 n, n + 1, n + 2 [1]", "Sum = n + (n + 1) + (n + 2) = 3n + 3 [1]", "= 3(n + 1)，n + 1 係 integer → divisible by 3 [1] ✅"]],
          ["eg", "<b>P1 · 4 marks</b> Prove that the product of two odd integers is odd.", ["令兩個 odd 數為 2m + 1 同 2n + 1 [1]", "(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 [1]", "= 2(2mn + m + n) + 1 [1]", "2mn + m + n 係 integer → 形式 2k + 1 → odd [1] ✅"]],
          ["eg", "<b>P1 · 5 marks</b> Show that \\((2n+1)^2 - 1\\) is divisible by 8 for all integers n.", ["Expand：\\(4n^2 + 4n + 1 - 1 = 4n^2 + 4n\\) [1]", "Factorise：\\(4n(n+1)\\) [1]", "n(n + 1) 係兩個 consecutive integers 嘅積 → 其中一個 even → n(n+1) = 2k [2]", "所以 = 4 × 2k = 8k → divisible by 8 [1] ✅（驗：n = 1：9 − 1 = 8；n = 2：25 − 1 = 24）"]],
          ["eg", "<b>P1 · 3 marks</b> Show that \\((n+1)^2 - (n-1)^2 = 4n\\), and state what this proves.", ["LHS = \\(n^2 + 2n + 1 - (n^2 - 2n + 1)\\) [1]", "= \\(4n\\) = RHS [1]", "差永遠係 4 嘅倍數，即 “the difference of the squares of two integers that differ by 2 is divisible by 4” [1] ✅"]],
          ["eg", "<b>P1 · 3 marks</b> Prove that \\(x^2 + 4x + 7 > 0\\) for all real x.", ["Complete the square：\\(x^2 + 4x + 7 = (x+2)^2 + 3\\) [1]", "\\((x+2)^2 \\ge 0\\) [1]", "所以 expression ≥ 3 &gt; 0 for all x [1] ✅"]],
          ["note", "<b>常考</b>：①odd / even / consecutive integers 證 divisible（P1 3–5 marks）；②LHS → RHS 恆等式（expand + simplify）；③completing the square 證恆正；④“Hence” 第二問用結果。Command terms：Show that / Prove that / Hence。"],
          ["trap", ["「Show that」最後一行必須同題目答案一模一樣。", "“divisible by 8” 要見到 8 × integer。", "唔好用具體數字（如 n = 3）當證明。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識 LHS → RHS 格式，唔會兩邊同時郁", "我識設 even = 2n、odd = 2n + 1、consecutive = n, n+1, n+2", "我識寫完整結論句"]],
        ],
      },
    ],
    summary: [
      "由左行到右，唔好兩邊一齊郁",
      "Even = 2n，odd = 2n + 1，consecutive = n, n+1, n+2",
      "不同整數用不同字母；最後寫結論句",
    ],
    practice: [
      { q: "Which expression is always an even integer for any integer n?", m: 1, o: ["A. n² + 1", "B. n² + n", "C. 2n + 1", "D. n² − n + 1"], a: "<b>B</b>. n(n + 1) is a product of consecutive integers [1]" },
      { q: "Prove that the sum of three consecutive integers is divisible by 3.", m: 3, a: "n, n + 1, n + 2 [1]; sum = 3n + 3 [1]; = 3(n + 1), integer multiple of 3 [1]" },
      { q: "Prove that the product of two odd integers is odd.", m: 4, a: "2m + 1, 2n + 1 [1]; 4mn + 2m + 2n + 1 [1]; = 2(2mn + m + n) + 1 [1]; odd [1]" },
      { q: "Show that (2n + 1)² − 1 is divisible by 8 for all integers n.", m: 5, a: "4n² + 4n [1]; 4n(n + 1) [1]; n(n + 1) even (consecutive integers) [2]; = 8k [1]" },
      { q: "Show that x² + 4x + 7 &gt; 0 for all real x.", m: 3, a: "(x + 2)² + 3 [1]; (x + 2)² ≥ 0 [1]; ≥ 3 &gt; 0 [1]" },
    ],
  },
  "math-3b": {
    title: "Binomial theorem 二項式定理",
    intro: "1.9：Pascal 三角形、nCr、(a + b)ⁿ 展開，同用 general term 搵指定項同 constant term。",
    parts: [
      {
        h: "Pascal 三角形 + nCr",
        min: 2.5,
        blocks: [
          ["key", "\\(\\dbinom{n}{r} = \\dfrac{n!}{r!\\,(n-r)!}\\)（booklet 有）　\\(\\dbinom nr = \\dbinom n{n-r}\\)　\\(\\dbinom n0 = \\dbinom nn = 1\\)　\\(\\dbinom n1 = n\\)　\\(\\dbinom n2 = \\dfrac{n(n-1)}{2}\\)"],
          ["table", ["n", "Pascal 行（nC0 … nCn）"], [["2", "1 2 1"], ["3", "1 3 3 1"], ["4", "1 4 6 4 1"], ["5", "1 5 10 10 5 1"], ["6", "1 6 15 20 15 6 1"], ["7", "1 7 21 35 35 21 7 1"]]],
          ["rhyme", "口訣 2", "上面兩個加埋就係下面", "Pascal 每個數 = 上一行左上同右上嘅和。n 次方有 n + 1 項。"],
          ["eg", "<b>P1 · 2 marks</b> Evaluate (a) \\(\\binom 83\\)　(b) \\(\\binom{10}{2}\\)　(c) \\(\\binom 74\\).", ["(a) 8·7·6 / 3! = 336/6 = <b>56</b>", "(b) 10·9/2 = <b>45</b>", "(c) \\(\\binom73 = 35\\) = <b>35</b> ✅"]],
          ["note", "<b>GDC nCr</b>：Casio：OPTN → PROB → nCr；TI-84：MATH → PRB → 3:nCr（先打 n，再 nCr，再 r）；TI-Nspire：Menu → Probability → Combinations → nCr(n,r)。"],
        ],
      },
      {
        h: "Binomial 展開",
        min: 3,
        blocks: [
          ["key", "<b>\\((a+b)^n = \\displaystyle\\sum_{r=0}^{n}\\binom nr a^{n-r}b^{\\,r}\\)</b>　n ∈ ℕ。<br>a 嘅次方由 n 降到 0，b 嘅次方由 0 升到 n，兩個次方加埋 = n。"],
          ["rhyme", "口訣 3", "係數看 Pascal，a 降 b 升，負號跟 b", "Expand \\((x-2)^5\\)：b = −2，所以交替正負。括號入面有係數，如 (2x)⁴，要連數字一齊次方。"],
          ["eg", "<b>P1 · 4 marks</b> Expand \\((2x+3)^4\\).", ["Pascal：1, 4, 6, 4, 1 [1]", "\\((2x)^4 = 16x^4\\)；\\(4(2x)^3(3) = 4\\cdot8\\cdot3\\,x^3 = 96x^3\\)；\\(6(2x)^2(3)^2 = 6\\cdot4\\cdot9\\,x^2 = 216x^2\\)；\\(4(2x)(3)^3 = 216x\\)；\\(3^4 = 81\\) [2]", "<b>\\(16x^4 + 96x^3 + 216x^2 + 216x + 81\\)</b> [1]", "驗算 x = 1：(5)⁴ = 625；16 + 96 + 216 + 216 + 81 = 625 ✓"]],
          ["eg", "<b>P1 · 3 marks</b> Expand and simplify \\((x-2)^5\\).", ["Pascal：1, 5, 10, 10, 5, 1", "\\(x^5 + 5x^4(-2) + 10x^3(4) + 10x^2(-8) + 5x(16) + (-32)\\) [2]", "<b>\\(x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32\\)</b> [1] ✅（驗算 x = 1：−1 = 1 − 10 + 40 − 80 + 80 − 32 ✓）"]],
          ["note", "<b>近似</b>：\\((1.02)^5 = (1 + 0.02)^5 \\approx 1 + 5(0.02) + 10(0.02)^2 = 1.104\\)（真值 1.10408）。"],
          ["trap", ["係數要連數字次方：\\((2x)^3 = 8x^3\\)，唔係 \\(2x^3\\)。", "負數 b 要用括號：\\((-2)^3 = -8\\)。", "最後化簡要由高次排低次（或題目要求嘅次序）。"]],
        ],
      },
      {
        h: "General term 通項 · 搵指定項",
        min: 3,
        blocks: [
          ["key", "<b>General term：\\(T_{r+1} = \\dbinom nr a^{\\,n-r}b^{\\,r}\\)</b>（第 r + 1 項，r 由 0 開始）<br>Coefficient of \\(x^k\\)：寫出 x 嘅總次方 = k，解 r，再代入。"],
          ["flow", [["① 寫通項", "nCr·(第一項)^(n−r)·(第二項)^r"], ["② 合併 x 次方", "令 x 次方 = k"], ["③ 解 r", "r 必須係 0 ≤ r ≤ n 嘅整數"], ["④ 代入", "含數字、符號"]]],
          ["eg", "<b>P1 · 4 marks</b> Find the coefficient of \\(x^3\\) in the expansion of \\((3x-2)^6\\).", ["通項：\\(\\binom6r(3x)^{6-r}(-2)^r\\) [1]", "x³ → 6 − r = 3 → r = 3 [1]", "\\(\\binom63(3)^3(-2)^3 = 20\\cdot27\\cdot(-8)\\) [1]", "= <b>−4320</b> [1] ✅"]],
          ["eg", "<b>P1 · 5 marks</b> Find the constant term in the expansion of \\(\\left(x^2 + \\dfrac2x\\right)^6\\).", ["通項：\\(\\binom6r(x^2)^{6-r}\\left(\\dfrac2x\\right)^r = \\binom6r 2^r x^{12-2r-r}\\) [2]", "constant → 12 − 3r = 0 → r = 4 [1]", "\\(\\binom64 2^4 = 15\\times16\\) [1] = <b>240</b> [1] ✅"]],
          ["eg", "<b>P1 · 4 marks</b> In the expansion of \\((1+ax)^8\\) the coefficient of \\(x^2\\) is 112. Find the possible values of a.", ["x² 項：\\(\\binom82 (ax)^2 = 28a^2x^2\\) [1]", "28a² = 112 [1] → a² = 4 [1] → <b>a = 2 或 a = −2</b> [1] ✅"]],
          ["eg", "<b>P1 · 5 marks</b> Find the coefficient of \\(x^3\\) in the expansion of \\((1+x)(2-x)^5\\).", ["先展 \\((2-x)^5 = 32 - 80x + 80x^2 - 40x^3 + 10x^4 - x^5\\) [2]", "x³ 來自 1 × (−40x³) 同 x × (80x²) [2]", "−40 + 80 = <b>40</b> [1] ✅"]],
          ["note", "<b>常考</b>：①“Find the coefficient of x^k”（P1 4–5 marks）；②constant term（x 同 1/x）；③已知某項係數，求未知 a 或 n；④(1+x)×(…)ⁿ 兩因子相乘搵一項；⑤用前三項估算。Command terms：Expand / Find / Hence / Write down。"],
          ["trap", ["通項 r 由 0 開始：第 4 項 r = 3。", "x 次方要合併：\\((x^2)^{6-r}(1/x)^r\\) → \\(x^{12-3r}\\)。", "兩因子相乘（如 (1+x)(2−x)⁵）要考慮所有組合，唔好漏咗。", "r 必須係整數；若 r 唔係整數，該項唔存在（coefficient = 0）。"]],
        ],
      },
      {
        h: "Long question 長題拆解",
        min: 2.5,
        blocks: [
          ["eg", "<b>P1 · 7 marks</b> (a) Expand \\((1+2x)^5\\) in ascending powers up to \\(x^3\\) [3]. (b) Hence find the coefficient of \\(x^3\\) in \\((3-x)(1+2x)^5\\) [4].", ["(a) Pascal 1, 5, 10, 10：\\(1 + 5(2x) + 10(2x)^2 + 10(2x)^3\\) [2]", "= <b>\\(1 + 10x + 40x^2 + 80x^3 + \\dots\\)</b> [1]", "(b) \\((3-x)(1+10x+40x^2+80x^3)\\)：x³ 項來自 3 × 80x³ 同 (−x) × 40x² [2]", "= 240 − 40 [1] = <b>200</b> [1] ✅"]],
          ["table", ["字眼", "點做"], [["“Hence”", "用上一問嘅展開結果，唔好重新做"], ["“ascending powers”", "由 x⁰, x¹, x² … 排"], ["“Show that … = …”", "每步寫清，最後等於所給值"], ["“Find n”", "用已知某項係數建立 equation"]]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["Show that / Prove", "每步合理，最後明確寫 “hence … is divisible by …” 或 “therefore”；舉例子唔算證明"], ["Expand", "寫到指定項數或降冪，每項要簡化"], ["Find the coefficient", "只要數字，唔好連 x 一齊寫"], ["Hence", "用上題展開結果再做近似 / 求值"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Proof：開頭設變量（例如 n 為整數），逐步代數，最後下結論（3–4 分）<br>• 展開：用 booklet 嘅 \\(\\binom{n}{r}\\) 公式寫出前幾項<br>• 搵指定項 / 係數：通項 \\(\\binom{n}{r}a^{n-r}b^r\\)，設 r 再解<br>• 常數項：令 x 嘅指數 = 0<br>• (a+b)ⁿ 中 a、b 要包括系數同負號"],
          ["trap", ["證明用數字代入，唔係代數", "通項 r 同 n−r 次序搞錯", "忘記 b 內嘅負號或係數要連冪次", "冇寫結論句，失最後 1 分"]],
          ["note", "<b>⏱ 考試 tips</b>：Binomial 公式喺 booklet，但 nCr 要識用 GDC。Proof 題 4 分通常：設式 1、代數 2、結論 1。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識 Pascal 前 7 行同 nCr 公式", "我識 (a + b)ⁿ 展開（a 降 b 升，負號跟 b）", "我識通項 nCr·aⁿ⁻ʳ·bʳ，搵 x^k 同 constant term", "我識處理 (1 + x)(…)ⁿ 兩個因子相乘", "我識用 GDC 計 nCr 驗算"]],
        ],
      },
    ],
    summary: [
      "上面兩個加埋就係下面（Pascal）",
      "a 降 b 升，次方加埋 = n，負號跟 b",
      "通項 T(r+1) = nCr·aⁿ⁻ʳ·bʳ，r 由 0 開始",
      "搵 x^k：合併 x 次方，令佢 = k，解 r",
      "兩因子相乘：逐個組合加埋",
    ],
    practice: [
      { q: "Which is the coefficient of x² in the expansion of (2 + x)⁵?", m: 1, o: ["A. 40", "B. 80", "C. 10", "D. 20"], a: "<b>B</b>. 5C2·2³ = 10 × 8 = 80 [1]" },
      { q: "Expand (2x + 3)⁴.", m: 4, a: "1, 4, 6, 4, 1 [1]; terms [2]; <b>16x⁴ + 96x³ + 216x² + 216x + 81</b> [1]" },
      { q: "Expand and simplify (x − 2)⁵.", m: 3, a: "<b>x⁵ − 10x⁴ + 40x³ − 80x² + 80x − 32</b> [3]（Pascal 1 5 10 10 5 1 [1]; powers of −2 [1]; simplified [1]）" },
      { q: "Find the coefficient of x³ in the expansion of (3x − 2)⁶.", m: 4, a: "6C3 (3x)³(−2)³ [2]; 20·27·(−8) [1]; <b>−4320</b> [1]" },
      { q: "Find the constant term in the expansion of (x² + 2/x)⁶.", m: 5, a: "6Cr (x²)^(6−r)(2/x)^r = 6Cr 2^r x^(12−3r) [2]; 12 − 3r = 0, r = 4 [1]; 15 × 16 [1]; <b>240</b> [1]" },
      { q: "The coefficient of x² in (1 + ax)⁸ is 112. Find the possible values of a.", m: 4, a: "8C2 a² = 28a² [1]; 28a² = 112 [1]; a² = 4 [1]; <b>a = ±2</b> [1]" },
      { q: "Find the coefficient of x³ in the expansion of (1 + x)(2 − x)⁵.", m: 5, a: "(2 − x)⁵ = 32 − 80x + 80x² − 40x³ + … [2]; x³ from 1(−40x³) and x(80x²) [2]; <b>40</b> [1]" },
      { q: "Use the first three terms of the expansion of (1 + 0.02)⁵ to estimate 1.02⁵.", m: 3, a: "1 + 5(0.02) + 10(0.02)² [2]; <b>1.104</b> [1]" },
    ],
  },
  "math-4": {
    title: "Straight lines 直線方程",
    intro: "2.1：gradient、三種直線寫法、平行同垂直、perpendicular bisector、交點同 linear model。",
    parts: [
      {
        h: "Straight lines 直線",
        min: 3,
        blocks: [
          ["key", "<b>Gradient</b>　\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)<br><b>Forms</b>：\\(y = mx + c\\)（c = y-intercept）；\\(ax + by + d = 0\\)（a, b, d 整數）；\\(y - y_1 = m(x - x_1)\\)（點斜式）<br><b>Parallel</b> \\(m_1 = m_2\\)　<b>Perpendicular</b> \\(m_1 m_2 = -1\\)（即 \\(m_2 = -\\frac{1}{m_1}\\)）<br><b>Midpoint</b> \\(\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)\\)　<b>Distance</b> \\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\)　（以上全部喺 formula booklet）"],
          ["rhyme", "口訣", "垂直就倒轉再變號", "m = 3 → 垂直 m = \\(-\\frac13\\)；m = \\(-\\frac25\\) → \\(\\frac52\\)。"],
          ["table", ["已知", "第一步", "之後"], [["兩點", "\\(m=\\frac{\\Delta y}{\\Delta x}\\)", "用其中一點代入 \\(y-y_1=m(x-x_1)\\)"], ["一點 + 平行線", "m 相同", "點斜式"], ["一點 + 垂直線", "倒轉變號", "點斜式"], ["Perpendicular bisector of AB", "midpoint of AB + 垂直 gradient", "點斜式"], ["\\(ax+by+d=0\\) 要 gradient", "整理成 \\(y=\\dots\\)", "\\(m=-\\frac ab\\)"]]],
          ["eg", "[P1/P2 · 5 marks] Line \\(L_1\\) passes through A(−1, 5) and B(3, −3). Find (a) the equation of \\(L_1\\) in the form y = mx + c; (b) the line \\(L_2\\) through (4, 1) perpendicular to \\(L_1\\), in the form ax + by + d = 0.", ["(a) \\(m=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2\\) [M1]", "\\(y-5=-2(x+1)\\) → \\(y=-2x+3\\) [A1]　驗：B：−2(3)+3 = −3 ✓", "(b) 垂直：\\(m_2=\\frac12\\) [M1]", "\\(y-1=\\frac12(x-4)\\) → \\(y=\\frac12x-1\\) [M1]", "× 2 搬晒：\\(2y=x-2\\) → <b>\\(x-2y-2=0\\)</b> [A1]　（a, b, d 要係整數，所以要 × 2）"]],
          ["eg", "[P1 · 3 marks] Find the perpendicular bisector of P(2, 1) and Q(6, 7).", ["Midpoint = \\(\\left(\\frac{2+6}{2},\\frac{1+7}{2}\\right)=(4,4)\\) [A1]", "\\(m_{PQ}=\\frac{7-1}{6-2}=\\frac32\\) → 垂直 \\(m=-\\frac23\\) [M1]", "\\(y-4=-\\frac23(x-4)\\) → ×3：\\(3y-12=-2x+8\\) → <b>\\(2x+3y-20=0\\)</b> [A1]"]],
          ["trap", ["垂直 gradient 只變號唔倒轉（或者倒轉唔變號）。", "答案要求 \\(ax+by+d=0\\) 但留分數 → 失分；要整數。", "Vertical line 係 \\(x=k\\)（gradient 無定義）；horizontal 係 \\(y=k\\)（m = 0）。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["寫到 parallel / perpendicular line 同 perpendicular bisector", "我識將答案寫成 ax + by + d = 0（整數系數）", "我識解釋 linear model 嘅 gradient 同截距（連單位）"]],
        ],
      },
    ],
    summary: [
      "垂直就倒轉再變號",
      "gradient = y 差 ÷ x 差；平行同 gradient",
      "Perpendicular bisector：中點 + 垂直 gradient",
    ],
    practice: [
      { q: "The gradient of a line perpendicular to \\(3x+4y=8\\) is:", o: ["A. \\(-\\frac34\\)", "B. \\(\\frac34\\)", "C. \\(\\frac43\\)", "D. \\(-\\frac43\\)"], m: 1, a: "<b>C</b>. \\(y=-\\frac34x+2\\), m = −3/4 → perpendicular m = 4/3 (flip and change sign)." },
      { q: "Find the equation of the perpendicular bisector of A(1, 2) and B(7, 6), giving your answer in the form ax + by + d = 0 where a, b, d are integers.", m: 4, a: "Midpoint (4, 4) [A1]. \\(m_{AB}=\\frac{6-2}{7-1}=\\frac23\\) [M1] → perpendicular m = \\(-\\frac32\\) [A1]. \\(y-4=-\\frac32(x-4)\\) → ×2: \\(2y-8=-3x+12\\) → <b>3x + 2y − 20 = 0</b> [A1]. Check: (4,4): 12 + 8 − 20 = 0 ✓" },
      { q: "Find the equation of the line through (1, 4) parallel to 3x − 2y = 12, in the form ax + by + d = 0.", m: 3, a: "m = 3/2 [1]; y − 4 = (3/2)(x − 1) [1]; <b>3x − 2y + 5 = 0</b> [1]" },
    ],
  },
  "math-4b": {
    title: "Functions 函數 · Domain 定義域 · Range 值域",
    intro: "2.2：一個 x 只對一個 y、largest possible domain、range（連 restricted domain）、反函數係對 y = x 嘅鏡像。",
    parts: [
      {
        h: "Function, domain & range 定義域值域",
        min: 4,
        blocks: [
          ["note", "<b>Function</b>: a relation where each input (element of the domain) is mapped to exactly one output (element of the range).<br><b>Domain</b>: the set of all possible input values (x-values) for which f(x) is defined.<br><b>Range</b>: the set of all output values (f(x) or y-values) the function produces.<br><b>One-to-one</b>: each output comes from exactly one input（passes horizontal line test）→ 有 inverse。"],
          ["table", ["Type", "限制", "Domain 例子"], [["\\(\\frac{1}{g(x)}\\)", "分母 ≠ 0", "\\(\\frac1{x-3}\\)：\\(x\\ne3\\)"], ["\\(\\sqrt{g(x)}\\)", "根號內 ≥ 0", "\\(\\sqrt{2x-6}\\)：\\(x\\ge3\\)"], ["\\(\\ln g(x)\\)", "括號內 > 0（嚴格）", "\\(\\ln(4-x^2)\\)：\\(-2<x<2\\)"], ["\\(\\frac{1}{\\sqrt{g(x)}}\\)", "根號內 > 0", "\\(\\frac1{\\sqrt{x-1}}\\)：\\(x>1\\)"], ["Polynomial, \\(e^x\\), sin, cos", "冇限制", "\\(x\\in\\mathbb{R}\\)"]]],
          ["eg", "[P1 · 3 marks] Find the largest possible domain of \\(f(x)=\\frac{\\sqrt{2x-6}}{x-5}\\).", ["根號：\\(2x-6\\ge0\\) → \\(x\\ge3\\) [A1]", "分母：\\(x-5\\ne0\\) → \\(x\\ne5\\) [A1]", "<b>Domain：\\(x\\ge3,\\ x\\ne5\\)</b> ✅（兩個條件都要寫）"]],
          ["eg", "Find the largest possible domain of \\(g(x)=\\ln(4-x^2)\\).", ["\\(4-x^2>0\\) → \\(x^2<4\\) [M1]", "<b>\\(-2<x<2\\)</b> [A1]　（log 要 > 0，所以 −2 同 2 都唔包）"]],
          ["rhyme", "口訣", "Range 睇 y：畫圖、搵頂點、睇端點", "二次函數：range 由 vertex 開始；有 restricted domain 就要代端點。"],
          ["eg", "\\(f(x)=(x-2)^2+3\\). State the range if (a) \\(x\\in\\mathbb R\\); (b) \\(0\\le x\\le5\\).", ["(a) vertex (2, 3) 係最低點，向上開口 → <b>\\(f(x)\\ge3\\)</b> [A1]", "(b) 最低 f(2) = 3；端點 f(0) = 4 + 3 = 7，f(5) = 9 + 3 = 12 → 最高係 12 [M1]", "<b>\\(3\\le f(x)\\le12\\)</b> [A1]　（唔好漏咗 x = 5 呢個端點！）"]],
          ["trap", ["Range 用 f(x) 或 y 寫，例如 \\(f(x)\\ge2\\)，唔好寫 \\(x\\ge2\\)。", "有 restricted domain 時，range 要同時睇 vertex 同兩個端點。", "實心 / 空心點：\\(\\le\\) 實心，\\(<\\) 空心，sketch 要標。", "Interval notation 同 inequality 都接受，但要一致。"]],
        ],
      },
      {
        h: "Domain & Range 定義域 / 值域",
        min: 3,
        blocks: [
          ["key", "<b>Domain</b>（定義域）= the set of all possible input values x。<br><b>Range</b>（值域）= the set of all possible output values f(x) (y-values)。"],
          ["rhyme", "口訣 3（搵 domain）", "分母唔做零，根號唔可負，log 入面要正數", "三個限制：\\(\\frac{1}{\\ldots}\\) 分母 ≠ 0；\\(\\sqrt{\\ldots}\\) 入面 ≥ 0；\\(\\ln(\\ldots)\\) 入面 &gt; 0。"],
          ["table", ["Function", "Domain", "Range"], [["\\(\\frac{1}{x-3}\\)", "x ≠ 3", "y ≠ 0"], ["\\(\\sqrt{x-2}\\)", "x ≥ 2", "y ≥ 0"], ["\\(\\ln(x+1)\\)", "x &gt; −1", "y ∈ ℝ"], ["\\(e^x + 4\\)", "x ∈ ℝ", "y &gt; 4"], ["\\((x-1)^2 + 5\\)", "x ∈ ℝ", "y ≥ 5（vertex 係最低點）"], ["\\(-2(x+3)^2 + 7\\)", "x ∈ ℝ", "y ≤ 7（a 負 → 開口向下）"], ["\\(\\frac{3x+5}{x-2}\\)", "x ≠ 2", "y ≠ 3"]]],
          ["rhyme", "口訣 4（搵 range）", "畫個圖，睇上落；頂點、漸近線、端點，三樣睇齊", "Paper 2 用 GDC 畫圖睇 min / max / asymptote；Paper 1 靠 sketch。限制咗 domain 就一定要睇端點。"],
          ["eg", "<b>P1 · 3 marks</b> \\(f(x)=(x-1)^2+5\\) 嘅 domain 係 \\(0 \\le x \\le 4\\)。求 range。", ["Vertex (1, 5) 喺 domain 入面 → 最小值 f(1) = 5", "端點：f(0) = 1 + 5 = 6，f(4) = 9 + 5 = 14 → 最大值 14", "<b>range：\\(5 \\le f(x) \\le 14\\)</b> ✅（唔可以淨係睇端點寫 6 ≤ y ≤ 14！）"]],
          ["eg", "<b>P1 · 3 marks</b> f 嘅 range 係 \\(0 \\le y \\le 4\\)。求 \\(2f(x)-1\\) 同 \\(-f(x)\\) 嘅 range。", ["\\(2f(x)-1\\)：2(0) − 1 ≤ y ≤ 2(4) − 1 → <b>−1 ≤ y ≤ 7</b>", "\\(-f(x)\\)：乘 −1 會對調大細 → <b>−4 ≤ y ≤ 0</b>（唔係 0 ≤ y ≤ −4）"]],
          ["key", "<b>橫向變換改 domain，直向變換改 range。</b>　Inverse：\\(f^{-1}\\) 嘅 domain = f 嘅 range；\\(f^{-1}\\) 嘅 range = f 嘅 domain。"],
          ["trap", ["≥ 定 &gt;？有漸近線 → 用 &gt;（永遠掂唔到）；有 vertex / 端點 → 用 ≥ / ≤。", "Range 要用 <b>y</b> 或 <b>f(x)</b> 寫，唔好寫 x！", "\\(\\ln\\) 同 \\(\\sqrt{\\ }\\) 嘅 domain 要先解不等式：例 \\(\\sqrt{10-2x}\\)：\\(10-2x \\ge 0\\) → x ≤ 5（除以負數要反轉符號）。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["寫到 function、domain、range、one-to-one 嘅文字定義", "對任何 f(x) 搵到 largest possible domain", "搵 range（連 restricted domain）", "我識寫 domain / range（包括不等式 ≥ 同 &gt; 嘅分別）"]],
        ],
      },
    ],
    summary: [
      "一個 x 只可以有一個 y",
      "分母唔做零，根號唔可負，log 入面要正",
      "Range 睇 y，頂點加端點",
      "Inverse 係 y = x 鏡像；f⁻¹ 唔係 1/f",
      "分母唔做零，根號唔可負，log 入面要正數",
      "畫個圖睇上落：頂點、漸近線、端點",
    ],
    practice: [
      { q: "The largest possible domain of \\(f(x)=\\sqrt{x-2}+\\frac1{x-5}\\) is:", o: ["A. \\(x\\ge2\\)", "B. \\(x\\ge2,\\ x\\ne5\\)", "C. \\(x>2,\\ x\\ne5\\)", "D. \\(x\\ne5\\)"], m: 1, a: "<b>B</b>. \\(x-2\\ge0\\) gives \\(x\\ge2\\); \\(x\\ne5\\) from the denominator." },
      { q: "\\(f(x)=x^2+1\\) with \\(f(x)\\) defined for \\(-1\\le x\\le3\\). The range of f is:", o: ["A. \\(2\\le f(x)\\le10\\)", "B. \\(1\\le f(x)\\le10\\)", "C. \\(1\\le f(x)\\le2\\)", "D. \\(f(x)\\ge1\\)"], m: 1, a: "<b>B</b>. Minimum at x = 0: f(0) = 1; endpoints f(−1) = 2, f(3) = 10 → \\(1\\le f(x)\\le10\\)." },
      { q: "State the largest possible domain of (a) \\(g(x)=\\ln(x-3)\\); (b) \\(h(x)=\\frac{1}{\\sqrt{6-2x}}\\).", m: 4, a: "(a) x − 3 > 0 → <b>x > 3</b> [A1][A1]. (b) 6 − 2x > 0 (strictly, square root in the denominator) [M1] → <b>x < 3</b> [A1]." },
      { q: "Find the largest possible domain of g(x) = √(10 − 2x). State the range of g.", m: 3, a: "10 − 2x ≥ 0 [1] → <b>x ≤ 5</b> [1]; range <b>g(x) ≥ 0</b> [1]" },
      { q: "f(x) = (x − 1)² + 5 for 0 ≤ x ≤ 4. Find the range of f.", m: 3, a: "vertex (1, 5) 喺 domain 內 → min 5 [1]; f(4) = 14 [1] (f(0) = 6 較細); <b>5 ≤ f(x) ≤ 14</b> [1]" },
    ],
  },
  "math-4c": {
    title: "Graph of a function 函數圖像 · Sketching",
    intro: "2.3：sketch 要形狀 + key features，draw 要準確；識由資料、情境或 GDC 畫圖，識由圖讀數。",
    parts: [
      {
        h: "Sketch 畫草圖",
        min: 2.5,
        blocks: [
          ["key", "<b>Sketch</b> = 形狀 + 標晒 key features（截距、頂點 / 極值、漸近線、端點），唔使 to scale。<b>Draw</b> = 準確、跟住題目嘅 scale。兩樣都要跟 domain。"],
          ["rhyme", "口訣", "截距頂點漸近線，端點實心定空心", "≤ / ≥ 用實心 ●，&lt; / &gt; 用空心 ○；漸近線用虛線同寫方程。"],
          ["eg", "<b>P1 · 4 marks</b> Sketch \\(y = x^2 - 4x + 1\\) for \\(0 \\le x \\le 5\\) and write down the range.", ["頂點：x = 2 → y = −3 → <b>(2, −3)</b>", "端點：f(0) = 1 → (0, 1)；f(5) = 6 → (5, 6)，兩個都係實心點", "U 形由 (0, 1) 落到 (2, −3) 再上到 (5, 6)", "Range：<b>−3 ≤ f(x) ≤ 6</b> ✅"]],
          ["note", "<b>GDC</b>：先揀一個睇到晒 key features 嘅 window，再抄落紙；坐標 3 s.f.。情境題（時間、高度）domain 通常 ≥ 0，軸要寫變數同單位。"],
          ["trap", ["畫出 domain 以外。", "冇標截距 / 頂點（每個 label 通常係 1 分）。", "Range 寫成 x 嘅範圍。"]],
        ],
      },
      {
        h: "Identify from graph 睇圖定函數",
        min: 2,
        blocks: [
          ["table", ["圖入面見到", "點用"], [["HA / VA", "\\(y=\\frac{a}{x-h}+k\\)：VA x = h，HA y = k"], ["y-intercept 同 HA", "\\(y=ab^x+k\\)：k = HA；a + k = y-intercept"], ["兩個 x-intercepts", "\\(y=a(x-p)(x-q)\\)；再用多一點搵 a"], ["Vertex (h, k)", "\\(y=a(x-h)^2+k\\)；再用多一點搵 a"], ["Reflected 唔同方向", "圖由上升變下降 → 外面或入面有負號"]]],
          ["eg", "<b>P1 · 3 marks</b> 圖像係 \\(y=\\dfrac{a}{x-h}+k\\)，VA x = 1，HA y = 2，並經過 (3, 5)。求 a。", ["h = 1，k = 2 → \\(y=\\dfrac{a}{x-1}+2\\)", "代入 (3, 5)：5 = a/2 + 2 → a = <b>6</b> ✅"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["我識分 sketch 同 draw", "我識標截距、頂點、漸近線同端點", "我識由圖讀 f(a)、解 f(x) = k、寫 range", "我識由 GDC 揀 window 再抄圖"]],
        ],
      },
    ],
    summary: [
      "Sketch：形狀 + key features，唔使 to scale",
      "端點 ≤ ≥ 實心，&lt; &gt; 空心",
      "Range 睇最低同最高嘅 y，包埋端點",
    ],
    practice: [
      { q: "The graph of y = f(x) for −2 ≤ x ≤ 4 rises from (−2, −3) to a maximum at (1, 6), then falls to (4, 2). Write down the range of f.", m: 1, a: "<b>−3 ≤ f(x) ≤ 6</b> [1]" },
      { q: "Let f(x) = 3 − 2x for −1 ≤ x &lt; 4. Write down the end points of the graph and the range of f.", m: 3, a: "(−1, 5) closed [1]; (4, −5) open [1]; <b>−5 &lt; f(x) ≤ 5</b> [1]" },
      { q: "Sketch y = (x − 1)(x + 3) for −4 ≤ x ≤ 2, labelling the intercepts, vertex and end points.", m: 4, a: "(−3, 0), (1, 0) [1]; (0, −3) [1]; vertex (−1, −4) [1]; end points (−4, 5), (2, 5) [1]" },
    ],
  },
  "math-4d": {
    title: "Key features 圖像特徵 · Intersections 交點 (GDC)",
    intro: "2.4：零點、極值、頂點、對稱軸、漸近線，同用 GDC 搵兩條圖嘅交點。",
    parts: [
      {
        h: "Graphs, key features & GDC 計數機",
        min: 3,
        blocks: [
          ["key", "<b>Key features</b>：x-intercept（zero）、y-intercept、max / min（vertex）、vertical & horizontal asymptote、symmetry、intersection。<br>P2：用 GDC 搵，答案 <b>3 s.f.</b>；P1：用代數 / 簡單 sketch。"],
          ["table", ["要搵", "Casio / TI 做法（通用）", "答案寫法"], [["x-intercept / zero", "畫圖 → G-Solve（Casio）或 CALC → zero（TI）", "x = 1.23 或 (1.23, 0)"], ["y-intercept", "代 x = 0，或 table", "(0, c)"], ["Max / min", "G-Solve → MAX / MIN（TI: CALC → maximum / minimum）", "坐標 (x, y)"], ["Intersection", "兩條函數都輸入，G-Solve → ISCT（TI: CALC → intersect）", "x = …（問 solve 就俾 x）"], ["Solve f(x) = a", "Y1 = f(x)，Y2 = a，搵交點", "x = …"], ["Asymptote", "睇圖 + 代數（分母 = 0；x→∞ 嘅極限）", "x = k, y = k（方程，唔係數字）"], ["Table of values", "TABLE 模式，設 start / step", "用嚟驗證圖"]]],
          ["note", "<b>GDC 小技巧</b>：① 先睇 window — 圖唔見就 Auto / Zoom Fit 或手動設 Xmin–Xmax、Ymin–Ymax；② 若 trig 題睇 mode 係 <b>radians</b> 定 degrees；③ 多個交點時，每個都要逐個搵（移動 cursor 靠近想要嘅交點）；④ 中間答案存入 memory（STO），最後先 round；⑤ P2 要寫「sketch + 標 key points」就畫細圖，標交點坐標。"],
          ["eg", "[P2 · 3 marks] \\(f(x)=x^3-4x+1\\) and \\(g(x)=2x+3\\). Find the x-coordinates where the graphs intersect, for \\(-3\\le x\\le3\\).", ["Y1 = \\(x^3-4x+1\\)，Y2 = \\(2x+3\\)；window x: −3 至 3，y: −10 至 10 [M1]", "用 intersect 逐個搵：<b>x = −2.26, x = −0.340, x = 2.60</b>（睇圖搵齊 3 個！）[A1][A1]", "寫法：「Using GDC, intersection points at x = …」，3 s.f.。"]],
          ["trap", ["只搵到一個交點就停 — 圖有幾多個交點就要答幾多個。", "答案 round 到 2 s.f. 或寫 4 s.f. 嘅 working 當最終答案（要 3 s.f.）。", "Asymptote 要寫方程（x = 2），唔係淨係寫「2」。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["用 GDC 搵零點、極值、交點，答案 3 s.f.", "我知道 maximum value 係 y 值，maximum point 係 (x, y)", "我會寫低自己畫咗邊兩條 function"]],
        ],
      },
    ],
    summary: [
      "Zeros = x-intercepts = f(x) = 0 嘅解",
      "交點：兩條圖 intersect，或者 f(x) − g(x) 嘅 zero",
      "Max value 係 y；max point 係 (x, y)；3 s.f.",
    ],
    practice: [
      { q: "(P2) \\(f(x)=e^x\\) and \\(g(x)=6-x^2\\). Find the x-coordinates of the points of intersection of the graphs of f and g.", m: 3, a: "Sketch/plot \\(y=e^x\\) and \\(y=6-x^2\\) on GDC [M1]. Two intersections: <b>x = −2.43</b> and <b>x = 1.40</b> (3 s.f.) [A1][A1]. (Must find BOTH.)" },
      { q: "Let f(x) = x³ − 3x + 1. Use your GDC to find the local maximum and minimum points.", m: 2, a: "<b>(−1, 3)</b> [1] and <b>(1, −1)</b> [1]" },
      { q: "Find the coordinates of the point of intersection of y = e^(0.5x) and y = 5 − x.", m: 3, a: "graph both [1]; x = 2.12 [1]; <b>(2.12, 2.88)</b> [1]" },
    ],
  },
  "math-4e": {
    title: "Composite 合成函數 · Inverse 反函數",
    intro: "2.5：f∘g 由內至外、由 f∘g 反推 g、搵 f⁻¹(x) 同佢嘅 domain、identity 同 self-inverse。",
    parts: [
      {
        h: "Composite functions 合成函數",
        min: 3,
        blocks: [
          ["key", "<b>\\((f\\circ g)(x)=f(g(x))\\)</b>：先做 g，再做 f。<br>Domain of \\(f\\circ g\\)：x 要喺 g 嘅 domain 內，而且 g(x) 要喺 f 嘅 domain 內。"],
          ["rhyme", "口訣", "入面先做，由右至左", "\\(f\\circ g\\)：g 貼住 x，所以 g 先做。一般 \\(f\\circ g\\ne g\\circ f\\)。"],
          ["eg", "[P1 · 4 marks] \\(f(x)=2x+1\\), \\(g(x)=x^2-3\\). Find (a) \\((f\\circ g)(x)\\); (b) \\((g\\circ f)(x)\\); (c) \\((f\\circ g)(2)\\); (d) solve \\((f\\circ g)(x)=13\\).", ["(a) \\(f(g(x))=2(x^2-3)+1=\\) <b>\\(2x^2-5\\)</b> [A1]", "(b) \\(g(f(x))=(2x+1)^2-3=\\) <b>\\(4x^2+4x-2\\)</b> [A1]　（兩個唔同！）", "(c) 數字題最快：g(2) = 1 → f(1) = <b>3</b> [A1]　驗：用 (a)：2(4) − 5 = 3 ✓", "(d) \\(2x^2-5=13\\) → \\(x^2=9\\) → <b>\\(x=\\pm3\\)</b> [A1]"]],
          ["eg", "\\(f(x)=\\sqrt{x}\\), \\(g(x)=x-4\\). Find \\(f\\circ g\\) and \\(g\\circ f\\) with their domains.", ["\\((f\\circ g)(x)=\\sqrt{x-4}\\)，domain：\\(x-4\\ge0\\) → <b>\\(x\\ge4\\)</b>", "\\((g\\circ f)(x)=\\sqrt{x}-4\\)，domain：<b>\\(x\\ge0\\)</b>　→ 兩個 domain 唔同 ✅"]],
          ["eg", "\\(f(x)=3x-1\\) and \\((f\\circ g)(x)=6x+11\\). Find \\(g(x)\\).", ["\\(f(g(x))=3g(x)-1=6x+11\\) [M1]", "\\(3g(x)=6x+12\\) → <b>\\(g(x)=2x+4\\)</b> [A1]　驗：3(2x+4) − 1 = 6x + 11 ✓"]],
          ["note", "<b>常考</b>：f∘g 代數 + 解 (f∘g)(x)=k、inverse + 寫 domain、「explain why f⁻¹ exists」(R1) 係 P1 長期熱門；P2 就係 GDC 交點 / 零點 3 s.f.。<br>Repeated composite：\\(f^2(x)=f(f(x))\\)，唔係 \\([f(x)]^2\\)。"],
          ["trap", ["做反次序（先做 f 再做 g）— 睇清楚 \\(f\\circ g\\) 邊個喺右邊。", "漏咗用括號：\\(f(g(x))\\) 入面 g(x) 要成個代入，例如 \\(f(x)=x^2\\), g(x) = x + 1 → \\((x+1)^2\\) 唔係 \\(x^2+1\\)。", "寫 composite 時唔好寫 \\(f(x)\\times g(x)\\)。"]],
        ],
      },
      {
        h: "Inverse functions 反函數",
        min: 4,
        blocks: [
          ["rhyme", "口訣", "x y 對調，再搵返 y", "① 寫 y = f(x) ② x、y 對調 ③ 搬 y 做主項 ④ 寫 \\(f^{-1}(x)=\\dots\\) + domain。"],
          ["key", "只有 <b>one-to-one</b> function 先有 inverse（horizontal line test）。<br>\\(f^{-1}\\) 嘅圖 = f 沿 <b>y = x</b> 鏡像反射。<br><b>Domain of \\(f^{-1}\\) = Range of f</b>；<b>Range of \\(f^{-1}\\) = Domain of f</b>。<br>\\((f\\circ f^{-1})(x)=x\\)，\\((f^{-1}\\circ f)(x)=x\\)。"],
          ["table", ["f(x) 類型", "Inverse 做法", "例"], [["線性 \\(ax+b\\)", "對調後直接搬", "\\(f(x)=4-3x\\) → \\(\\frac{4-x}{3}\\)"], ["分式 \\(\\frac{ax+b}{cx+d}\\)", "交叉相乘，y 項集中，因式分解 y", "見下例"], ["\\(e^x\\) 型", "用 ln", "\\(f(x)=e^x-3\\) → \\(\\ln(x+3)\\)"], ["\\(\\ln\\) 型", "用 e 的次方", "\\(f(x)=\\ln(2x-1)\\) → \\(\\frac{e^x+1}{2}\\)"], ["二次函數", "先 restrict domain，配方後開方", "揀 + 定 − 睇原 domain"]]],
          ["eg", "[P1 · 4 marks] \\(f(x)=\\frac{3x-2}{x+4},\\ x\\ne-4\\). Find \\(f^{-1}(x)\\) and state its domain.", ["對調：\\(x=\\frac{3y-2}{y+4}\\) [M1]", "\\(xy+4x=3y-2\\) → \\(xy-3y=-4x-2\\) [M1]", "\\(y(x-3)=-4x-2\\) → <b>\\(f^{-1}(x)=\\frac{-4x-2}{x-3}\\)</b>，<b>\\(x\\ne3\\)</b> [A1][A1]", "驗：\\(f(0)=-\\frac12\\)；\\(f^{-1}(-\\frac12)=\\frac{2-2}{-3.5}=0\\) ✓　（range of f 係 \\(y\\ne3\\)，所以 inverse 嘅 domain 係 \\(x\\ne3\\)）"]],
          ["eg", "\\(f(x)=x^2-6x+5,\\ x\\ge3\\). Find \\(f^{-1}(x)\\) and its domain.", ["配方：\\(f(x)=(x-3)^2-4\\)，vertex (3, −4)；x ≥ 3 → one-to-one (R1)，range \\(f(x)\\ge-4\\) [A1]", "對調：\\(x=(y-3)^2-4\\) → \\((y-3)^2=x+4\\) [M1]", "\\(y-3=\\pm\\sqrt{x+4}\\)；原本 \\(x\\ge3\\) 即 inverse 嘅 range \\(y\\ge3\\) → 取 + [R1]", "<b>\\(f^{-1}(x)=3+\\sqrt{x+4}\\)，domain \\(x\\ge-4\\)</b> [A1]　驗：f(5) = 0 → \\(f^{-1}(0)=3+2=5\\) ✓"]],
          ["eg", "\\(f(x)=\\ln(2x-1)\\). Find \\(f^{-1}(x)\\).", ["\\(x=\\ln(2y-1)\\) → \\(e^x=2y-1\\) [M1]", "<b>\\(f^{-1}(x)=\\frac{e^x+1}{2}\\)</b> [A1]　（domain of f: \\(x>\\frac12\\)，range of f: all reals → \\(f^{-1}\\) domain 係 all reals）"]],
          ["eg", "\\(f(x)=x^3+2x\\). Find \\(f^{-1}(10)\\) (P2).", ["唔使搵 \\(f^{-1}\\)！\\(f^{-1}(10)\\) 即係「f(x) = 10 嘅 x」", "GDC：畫 \\(Y_1=x^3+2x\\) 同 \\(Y_2=10\\) → intersect → <b>x = 1.85</b>（3 s.f.）✅"]],
          ["trap", ["\\(f^{-1}(x)\\ne\\frac1{f(x)}\\)；\\(f^{-1}(x)\\) 唔係 \\([f(x)]^{-1}\\)。", "忘記寫 inverse 嘅 domain（通常有 [A1]）。", "二次函數開方漏咗 ± 判斷：用原本 domain 決定取 + 定 −。", "Self-inverse：\\(f=f^{-1}\\) 即 \\(f(f(x))=x\\)，圖形對稱於 y = x（例：\\(f(x)=\\frac{x+3}{x-1}\\)）。"]],
        ],
      },
      {
        h: "長題拆解法",
        min: 2,
        blocks: [
          ["eg", "\\(f(x)=\\frac{2x+1}{x-3},\\ x\\ne3\\) and \\(g(x)=x^2-1\\). (a) Find \\(f^{-1}(x)\\). (b) Find \\((g\\circ f)(x)\\) at \\(x=4\\). (c) Solve \\(f(x)=g(2)\\). [8 marks]", ["圈數：f 分式、g 二次；(c) g(2) 係數字 → 先計 g(2) = 3", "(a) \\(x=\\frac{2y+1}{y-3}\\) → \\(xy-3x=2y+1\\) → \\(y(x-2)=3x+1\\) → <b>\\(f^{-1}(x)=\\frac{3x+1}{x-2},\\ x\\ne2\\)</b> [4]", "(b) f(4) = 9 → g(9) = 81 − 1 = <b>80</b> [2]　（g∘f：先 f 再 g）", "(c) \\(\\frac{2x+1}{x-3}=3\\) → \\(2x+1=3x-9\\) → <b>x = 10</b> [2]　驗：21/7 = 3 ✓"]],
          ["table", ["題目講…", "即係…"], [["“find the largest possible domain”", "分母、根號、log 三個限制逐個查"], ["“state the range”", "寫 y / f(x) 嘅不等式，睇圖或頂點"], ["“find \\(f^{-1}(a)\\)”（無搵 \\(f^{-1}\\) 要求）", "直接解 f(x) = a"], ["“explain why \\(f^{-1}\\) exists”", "f is one-to-one — horizontal line test (R1)"], ["“hence” / “show that”", "用上一部分結果；唔好重新推"], ["“sketch” + “label”", "intercepts 坐標、asymptote 方程、端點空 / 實心"]]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["Write down", "由圖或式直接得出，不需過程"], ["Find", "列式；GDC 結果要寫出你點樣設"], ["Sketch", "軸截距、頂點、漸近線、形狀，標明座標"], ["Hence", "要用上一部分結果"], ["State the domain", "用不等式或區間，f⁻¹ 嘅 domain = f 嘅 range"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 求直線方程：點斜式 / 兩點，斜率 \\(m=\\frac{y_2-y_1}{x_2-x_1}\\)<br>• 垂直：\\(m_1m_2=-1\\)；平行：m 相等<br>• f∘g、f⁻¹：由內到外 / 對調 x y，並寫 domain<br>• Domain、range：結合圖像寫不等式<br>• GDC：找 zero、intersection、max / min 並寫座標"],
          ["trap", ["f(g(x)) 同 g(f(x)) 次序倒轉", "反函數冇改 domain、range", "直線方程答案冇化成題目要求嘅形式（y = mx + c 或 ax+by+d=0）", "GDC 交點只寫 x，唔寫 y 座標"]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有直線方程、斜率公式、距離 / 中點。Domain、range 通常 1–2 分，係易拎分位。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [["1", "垂直 gradient 只變號 / 只倒轉", "兩樣都做：倒轉 + 變號"], ["2", "\\(ax+by+d=0\\) 仍有分數", "× 通分母，a, b, d 整數"], ["3", "Range 寫成 x ≥ …", "用 f(x) 或 y"], ["4", "Restricted domain 漏咗端點嘅 f 值", "代兩端 + vertex，逐個比"], ["5", "Domain 漏咗 x ≠ … 或寫錯 ≥ / >", "分母、根號、log 全部查；log 同分母根號用嚴格 >"], ["6", "\\(f\\circ g\\) 同 \\(g\\circ f\\) 次序反咗", "「入面先做」"], ["7", "\\(f^{-1}=\\frac1f\\)", "完全唔同；inverse = 對調 x y"], ["8", "Inverse 無寫 domain", "= range of f，補 [A1]"], ["9", "二次 inverse 開方忘取正 / 負", "睇原 domain → inverse range"], ["10", "\\(f^{-1}(a)\\) 先搵晒 \\(f^{-1}\\) 再代入（慢又易錯）", "直接解 f(x) = a"], ["11", "GDC 只搵一個交點", "每個交點都要搵"], ["12", "GDC mode / window 錯", "先設 window；trig 先睇 radians"]]],
          ["check", ["做 f∘g、g∘f 同由 f∘g 反推 g", "分式 / 二次 / ln 函數搵 \\(f^{-1}\\) 同 domain"]],
        ],
      },
    ],
    summary: [
      "入面先做，由右至左",
      "x y 對調，再搵返 y；domain range 對調",
      "f⁻¹(a)：直接解 f(x) = a",
    ],
    practice: [
      { q: "\\(f(x)=2x+1\\) and \\(g(x)=x^2\\). Then \\((f\\circ g)(3)\\) equals:", o: ["A. 49", "B. 19", "C. 13", "D. 10"], m: 1, a: "<b>B</b>. g(3) = 9, f(9) = 19. (49 is g∘f.)" },
      { q: "\\(f(x)=\\frac{x+5}{2}\\). Then \\(f^{-1}(3)\\) equals:", o: ["A. 4", "B. 1", "C. \\(\\frac23\\)", "D. 11"], m: 1, a: "<b>B</b>. Solve f(x) = 3: x + 5 = 6, x = 1. (Not 1/f(3).)" },
      { q: "\\(f(x)=3x-2\\) and \\(g(x)=\\frac{x}{x+1},\\ x\\ne-1\\). (a) Find \\((g\\circ f)(x)\\). (b) Solve \\((g\\circ f)(x)=\\frac12\\).", m: 5, a: "(a) \\(g(f(x))=\\frac{3x-2}{3x-2+1}=\\) <b>\\(\\frac{3x-2}{3x-1}\\)</b> [M1][A1]. (b) \\(\\frac{3x-2}{3x-1}=\\frac12\\) → \\(2(3x-2)=3x-1\\) [M1] → \\(6x-4=3x-1\\) [A1] → <b>x = 1</b> [A1]. Check: 1/2 ✓" },
      { q: "\\(f(x)=\\frac{5x-1}{x+2},\\ x\\ne-2\\). (a) Find \\(f^{-1}(x)\\). (b) State the domain of \\(f^{-1}\\).", m: 5, a: "(a) \\(x=\\frac{5y-1}{y+2}\\) [M1] → \\(xy+2x=5y-1\\) → \\(y(x-5)=-2x-1\\) [M1] → <b>\\(f^{-1}(x)=\\frac{-2x-1}{x-5}\\)</b> [A1]. (b) Domain of \\(f^{-1}\\) = range of f: <b>x ≠ 5</b> [A1][A1]. Check: f(0) = −1/2, \\(f^{-1}(-\\frac12)=\\frac{1-1}{-5.5}=0\\) ✓" },
      { q: "\\(f(x)=x^2-4x+7,\\ x\\ge2\\). (a) Explain why \\(f^{-1}\\) exists. (b) Find \\(f^{-1}(x)\\) and state its domain.", m: 6, a: "(a) \\(f(x)=(x-2)^2+3\\); for x ≥ 2 the graph is increasing, so f is one-to-one (passes the horizontal line test) [R1]. (b) \\(x=(y-2)^2+3\\) [M1] → \\(y-2=\\sqrt{x-3}\\) (positive since y ≥ 2) [M1][R1] → <b>\\(f^{-1}(x)=2+\\sqrt{x-3}\\)</b> [A1]. Domain = range of f: <b>x ≥ 3</b> [A1]. Check: f(4) = 7, \\(f^{-1}(7)=2+2=4\\) ✓" },
    ],
  },
  "math-5": {
    title: "Quadratic functions 二次函數 · 三種寫法",
    intro: "2.6：standard / vertex / factorised form 互換，頂點、對稱軸、截距，同二次 model 搵最大最小值。",
    parts: [
      {
        h: "Three forms 三種寫法",
        min: 3,
        blocks: [
          ["table", ["Form", "寫法", "一眼睇到", "點搵"], [["Standard", "\\(ax^2+bx+c\\)", "y-intercept (0, c)；axis \\(x=-\\frac b{2a}\\)", "vertex 的 y：代 axis 的 x"], ["Vertex", "\\(a(x-h)^2+k\\)", "vertex (h, k)；axis x = h", "配方 complete the square"], ["Factorised", "\\(a(x-p)(x-q)\\)", "x-intercepts p, q；axis \\(x=\\frac{p+q}2\\)", "factorise 或 formula"]]],
          ["note", "<b>Quadratic function</b>: \\(f(x)=ax^2+bx+c\\), \\(a\\ne0\\); its graph is a parabola. a > 0 opens upward (minimum at vertex); a < 0 opens downward (maximum).<br><b>Roots / zeros / x-intercepts</b>: values of x where f(x) = 0. 三個詞同一樣嘢。"],
          ["eg", "[P1 · 4 marks] Write \\(f(x)=2x^2-12x+7\\) in the form \\(a(x-h)^2+k\\) and state the vertex.", ["提 a：\\(2(x^2-6x)+7\\) [M1]", "配方：\\(2[(x-3)^2-9]+7\\) [M1]", "展開：\\(2(x-3)^2-18+7=\\) <b>\\(2(x-3)^2-11\\)</b> [A1]　vertex <b>(3, −11)</b> [A1]", "驗：x = 0 → 2(9) − 11 = 7 ✓（= c）"]],
          ["eg", "[P1 · 3 marks] A quadratic has roots −1 and 4 and passes through (0, 8). Find its equation in the form \\(ax^2+bx+c\\).", ["\\(y=a(x+1)(x-4)\\) [M1]", "代 (0, 8)：\\(8=a(1)(-4)\\) → <b>a = −2</b> [A1]", "<b>\\(y=-2x^2+6x+8\\)</b> [A1]　驗：x = 0 → 8 ✓"]],
          ["eg", "[P1 · 3 marks] The vertex of a parabola is (2, −3) and it passes through (0, 5). Find its equation.", ["\\(y=a(x-2)^2-3\\) [M1]", "\\(5=a(4)-3\\) → <b>a = 2</b> [A1]　→ <b>\\(y=2(x-2)^2-3\\)</b> [A1]"]],
          ["trap", ["Vertex form 入面 \\((x-h)\\)：h 要變號，\\((x+3)^2\\) 即 h = −3。", "配方前冇先提出 a。", "Axis 公式漏咗負號：\\(-\\frac b{2a}\\)。"]],
        ],
      },
      {
        h: "Modelling & GDC (P2)",
        min: 3,
        blocks: [
          ["key", "<b>P2 模式</b>：畫 y = f(x) → 用 GDC 搵 max/min、zeros、y-intercept → 解釋喺 context 入面係乜。單位同 s.f. 唔好漏。"],
          ["eg", "[P2 · 6 marks] The height of a ball is \\(h(t)=-5t^2+20t+1\\) metres, t seconds. Find (a) the maximum height and when it occurs; (b) when the ball hits the ground; (c) the height at t = 0.", ["(a) axis：\\(t=-\\frac{20}{2(-5)}=2\\) [M1]；\\(h(2)=-20+40+1=\\) <b>21 m</b> [A1]　GDC：max (2, 21) ✓", "(b) 解 \\(-5t^2+20t+1=0\\) [M1]：\\(t=\\frac{-20-\\sqrt{420}}{-10}=\\frac{20+\\sqrt{420}}{10}\\) → <b>t = 4.05 s</b>（取正）[A1]　（另一個根 −0.049 s 無意義 → reject [R1]）", "(c) h(0) = <b>1 m</b>（= c，發射高度）[A1]"]],
          ["eg", "[P2 · 4 marks] A farmer has 40 m of fencing for a rectangular pen against a wall (three sides). Find the width x that gives the maximum area.", ["length = 40 − 2x，Area \\(A=x(40-2x)=-2x^2+40x\\) [M1][A1]", "axis：\\(x=-\\frac{40}{2(-2)}=10\\) [M1]", "<b>x = 10 m</b>，A = 200 m²，length 20 m [A1]"]],
          ["trap", ["Context 題兩個根要判斷邊個合理（時間不能為負）。", "最大值答咗 x 而唔係 y（或者相反）— 睇清楚問「when」定「what」。", "單位漏咗，或者提早 round。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["check", ["三種 form 互換，vertex / intercepts / axis 秒睇", "Context 題 max / min、reject 無效根"]],
        ],
      },
    ],
    summary: [
      "軸線負 b over 2a",
      "頂點 (h, k)，括號入面變號",
      "Context 根要檢查合唔合理",
    ],
    practice: [
      { q: "The vertex of \\(y=(x-3)^2+5\\) is:", o: ["A. (3, 5)", "B. (−3, 5)", "C. (3, −5)", "D. (5, 3)"], m: 1, a: "<b>A</b>. \\(a(x-h)^2+k\\) → (h, k) = (3, 5)." },
      { q: "The axis of symmetry of \\(y=2x^2-8x+3\\) is:", o: ["A. x = 2", "B. x = −2", "C. x = 4", "D. x = 1"], m: 1, a: "<b>A</b>. \\(x=-\\frac{-8}{2(2)}=2\\)." },
      { q: "Write \\(x^2+8x+3\\) in the form \\((x+p)^2+q\\) and hence state the minimum value.", m: 3, a: "\\((x+4)^2-16+3\\) [M1] = <b>\\((x+4)^2-13\\)</b> [A1]. Minimum value <b>−13</b> (at x = −4) [A1]." },
      { q: "(P2) The profit of a company is \\(P(x)=-2x^2+60x-300\\) thousand dollars, where x is the number of items (hundreds) sold. Find (a) the value of x giving maximum profit and the maximum profit; (b) the values of x for which the company makes a profit.", m: 6, a: "(a) \\(x=-\\frac{60}{2(-2)}=15\\) [M1][A1]; P(15) = −450 + 900 − 300 = <b>150</b> (thousand dollars) [A1]. (b) Solve P(x) > 0: roots of \\(-2x^2+60x-300=0\\) → \\(x^2-30x+150=0\\) → x = 15 ± √75 = 6.34, 23.7 [M1][A1] → <b>6.34 < x < 23.7</b> [A1]." },
    ],
  },
  "math-5b": {
    title: "Quadratic equations · Inequalities · Discriminant 判別式",
    intro: "2.7：分解、公式、配方、GDC 解方程；二次不等式畫圖睇上下；Δ 決定根嘅數目同 tangent 條件。",
    parts: [
      {
        h: "Solving: factorise · formula · GDC",
        min: 4,
        blocks: [
          ["key", "<b>Quadratic formula</b>（formula booklet 有）：\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)，\\(a\\ne0\\)<br>先搬到 <b>= 0</b> 先可以用！"],
          ["rhyme", "口訣", "搬晒過去變零，先分解、唔得就公式", "P2：直接 GDC 解（poly solver 或畫圖搵 zero）；P1 要寫代數步驟。"],
          ["eg", "[P1 · 3 marks] Solve \\(2x^2-5x-3=0\\).", ["\\((2x+1)(x-3)=0\\) [M1][A1]", "<b>\\(x=-\\frac12\\) 或 \\(x=3\\)</b> [A1]　驗 x = 3：18 − 15 − 3 = 0 ✓"]],
          ["eg", "[P1 · 3 marks] Solve \\(x^2-4x-3=0\\), giving exact answers.", ["a = 1, b = −4, c = −3：\\(x=\\frac{4\\pm\\sqrt{16+12}}{2}\\) [M1]（小心 −4ac = +12）", "\\(=\\frac{4\\pm\\sqrt{28}}{2}=\\frac{4\\pm2\\sqrt7}2\\) [A1]", "<b>\\(x=2\\pm\\sqrt7\\)</b> [A1]　（decimal：4.65, −0.646）"]],
          ["eg", "[P1 · 4 marks] Solve \\(e^{2x}-5e^{x}+6=0\\).", ["令 \\(u=e^x\\)：\\(u^2-5u+6=0\\) [M1]", "\\((u-2)(u-3)=0\\) → u = 2 或 3 [A1]", "\\(e^x=2\\) → <b>x = ln 2</b>；\\(e^x=3\\) → <b>x = ln 3</b> [A1][A1]", "常考 note：「equation leading to quadratic」，trig 版見 math-8 (\\(2\\sin^2x-\\sin x-1=0\\))。"]],
          ["note", "<b>GDC (P2)</b>：MENU → Equation → Polynomial（degree 2）輸入 a, b, c → Solve；或者畫 Y1 = f(x) → G-Solve → ROOT（TI: CALC → zero，要設 left/right bound）。每個根都要搵；答案 3 s.f.。如果要「exact」就唔可以靠 GDC。"],
          ["trap", ["未搬到 = 0 就用 formula。", "\\(-4ac\\) 符號錯（c 負時變正）。", "Formula 漏咗 \\(\\pm\\)（得一個根）。", "兩邊除以 x 令根消失：\\(x^2=3x\\) 應該 \\(x(x-3)=0\\)。"]],
        ],
      },
      {
        h: "Discriminant 判別式",
        min: 4,
        blocks: [
          ["key", "<b>\\(\\Delta=b^2-4ac\\)</b>（喺 quadratic formula 根號入面）"],
          ["table", ["Δ", "根嘅數目", "圖", "寫法"], [["Δ > 0", "兩個 distinct real roots", "x 軸相交兩點", "two distinct real roots"], ["Δ = 0", "一個 repeated (double) root", "vertex 喺 x 軸上 / tangent", "equal roots"], ["Δ < 0", "冇 real roots", "完全喺 x 軸上面或下面", "no real roots"]]],
          ["eg", "[P1 · 4 marks] Find the values of k for which \\(x^2+kx+9=0\\) has equal roots.", ["equal roots → Δ = 0 [M1]", "\\(k^2-4(1)(9)=0\\) [A1]", "\\(k^2=36\\) → <b>\\(k=\\pm6\\)</b> [A1][A1]　（記得 ± 兩個）"]],
          ["eg", "[P1 · 3 marks] Find the range of k for which \\(2x^2-4x+k=0\\) has two distinct real roots.", ["Δ > 0 [M1]　\\(16-8k>0\\) [A1]", "\\(8k<16\\) → <b>k < 2</b> [A1]", "驗：k = 0 → \\(2x^2-4x=0\\) 兩根 0, 2 ✓"]],
          ["eg", "[P1 · 5 marks] The line \\(y=2x+k\\) is a tangent to the curve \\(y=x^2-3x+5\\). Find k.", ["令相等：\\(x^2-3x+5=2x+k\\) [M1]", "整理 = 0：\\(x^2-5x+(5-k)=0\\) [A1]", "tangent → Δ = 0：\\(25-4(5-k)=0\\) [M1]", "\\(5+4k=0\\) → <b>\\(k=-\\frac54\\)</b> [A1]　驗：\\(x^2-5x+6.25=(x-2.5)^2\\) ✓ [R1 for 一個根]"]],
          ["eg", "[P1 · 3 marks] Show that \\(2x^2-4x+5>0\\) for all real x.", ["\\(\\Delta=16-40=-24<0\\) [M1][A1]", "no real roots and a = 2 > 0 so parabola above x-axis → <b>f(x) > 0 for all x</b> [R1]"]],
          ["note", "<b>常考 · Line meets curve</b>：「find k so line is tangent / intersects at two points / doesn't intersect」→ 代入 → Δ = 0 / > 0 / < 0。呢類每年都有，通常 5–6 marks。"],
          ["trap", ["「Distinct」= Δ > 0，唔包 Δ = 0。", "Tangent 題冇先整理成 = 0 就搵 Δ。", "Δ < 0 結論要講埋 a 嘅正負先知圖喺上定下。"]],
        ],
      },
      {
        h: "Inequalities 二次不等式",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "搵根、畫圖、睇上下", "a > 0：f(x) > 0 取兩邊（外面）；f(x) < 0 取中間。唔好死記，畫條 sketch。"],
          ["eg", "[P1 · 4 marks] Solve \\(x^2-x-6<0\\).", ["\\((x-3)(x+2)=0\\) → 根 −2, 3 [M1][A1]", "向上拋物線，< 0 即喺 x 軸下面 [M1]", "<b>\\(-2<x<3\\)</b> [A1]"]],
          ["eg", "[P1 · 4 marks] Solve \\(2x^2+x-6\\ge0\\).", ["\\(2x^2+x-6=(2x-3)(x+2)\\) → 根 \\(\\frac32\\), −2 [M1][A1]", "向上拋物線，≥ 0 取兩邊 [M1]", "<b>\\(x\\le-2\\) 或 \\(x\\ge\\frac32\\)</b> [A1]　（兩段用「或」，唔好寫成 \\(-2\\ge x\\ge\\frac32\\)）"]],
          ["trap", ["「兩邊」答案寫成一條連續不等式。", "≤ / ≥ 同 < / > 混淆（嚴格不等式端點唔包）。", "x² 係數係負數時，圖反轉，好易取錯。"]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [["Find the roots / Solve", "寫出所有解；GDC 要列方程"], ["Determine the values of k", "令 Δ &gt; 0、= 0 或 &lt; 0 再解不等式"], ["Show that", "由已知推到結論，每步清楚"], ["Interpret", "用情境語言解釋頂點或截距"]]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Factorised / vertex form：寫出頂點、截距（2–3 分）<br>• 解方程：因式分解 / 公式 / GDC，揀最快者<br>• 判別式 Δ：兩根、重根、無實根，求 k 嘅範圍<br>• 二次不等式：畫 sketch 再讀區間<br>• P2 模型：求最大值，用 vertex 或 GDC max"],
          ["trap", ["Δ 用錯：兩個不同根係 Δ &gt; 0，重根 Δ = 0", "解不等式時只寫一個區間或錯方向", "配方法 \\(a(x-h)^2+k\\) 嘅符號搞錯", "答案漏單位 / 解釋"]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 \\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\) 同 Δ。GDC polynomial solver 驗算。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [["1", "未搬到 = 0 就解 / 用 Δ", "先整理成 \\(ax^2+bx+c=0\\)"], ["2", "Formula 符號錯：−4ac, ±", "寫 a, b, c 再代"], ["3", "k = ±6 只寫一個", "Δ = 0 開方記得 ±"], ["4", "Vertex form 變號錯", "\\((x+3)^2\\) → h = −3"], ["5", "配方前未提 a", "先 \\(a(x^2+\\dots)\\)"], ["6", "Tangent 條件寫成 Δ > 0", "tangent = Δ = 0"], ["7", "不等式「兩邊」寫成連續式", "「或」連接兩段"], ["8", "Context 根冇判斷", "reject 負時間 / 長度"], ["9", "Exact 要求但用 GDC 小數", "formula / 配方留 √"], ["10", "Round 太早", "GDC memory 存值"]]],
          ["check", ["Factorise、formula、配方、GDC 四種解法", "Δ 三種情況 + 求 k 範圍 + tangent", "二次不等式畫 sketch 取答案", "Disguised quadratic（\\(e^{2x}\\)、\\(\\sin^2x\\)）代 u"]],
        ],
      },
    ],
    summary: [
      "搬晒過去變零，先分解、唔得就公式",
      "Δ 大於兩根，等於一根，小於冇根",
      "Tangent = Δ 等於零",
      "搵根、畫圖、睇上下；兩邊用「或」",
      "k = ±：開方記得兩個",
    ],
    practice: [
      { q: "The equation \\(x^2-6x+k=0\\) has two distinct real roots when:", o: ["A. k < 9", "B. k > 9", "C. k = 9", "D. k ≤ 9"], m: 1, a: "<b>A</b>. Δ = 36 − 4k > 0 → k < 9." },
      { q: "Solve \\(x^2+2x>8\\).", o: ["A. −4 < x < 2", "B. x < −4 or x > 2", "C. x > 2", "D. x < −2 or x > 4"], m: 1, a: "<b>B</b>. \\(x^2+2x-8=(x+4)(x-2)>0\\): outside the roots." },
      { q: "Solve \\(3x^2-7x-6=0\\).", m: 3, a: "\\((3x+2)(x-3)=0\\) [M1][A1] → <b>\\(x=-\\frac23\\) or \\(x=3\\)</b> [A1]. Check x = 3: 27 − 21 − 6 = 0 ✓" },
      { q: "Find the values of k for which \\(kx^2+4x+1=0\\) has no real roots.", m: 4, a: "no real roots → Δ < 0 [M1]. \\(16-4k<0\\) [A1] → <b>k > 4</b> [A1]. (k ≠ 0 holds automatically; for k = 0 the equation is linear.) [A1 for correct final inequality with reasoning]" },
      { q: "The line \\(y=x+k\\) is tangent to the parabola \\(y=x^2+3x+4\\). Find k.", m: 5, a: "\\(x^2+3x+4=x+k\\) → \\(x^2+2x+(4-k)=0\\) [M1][A1]. Δ = 0: \\(4-4(4-k)=0\\) [M1] → \\(4k-12=0\\) [A1] → <b>k = 3</b> [A1]. Check: \\(x^2+2x+1=(x+1)^2\\) ✓" },
      { q: "Solve \\(2x^2-3x-5\\le0\\).", m: 4, a: "\\((2x-5)(x+1)=0\\) → roots \\(\\frac52\\), −1 [M1][A1]. Upward parabola, ≤ 0 between roots [M1] → <b>\\(-1\\le x\\le\\frac52\\)</b> [A1]." },
    ],
  },
  "math-7": {
    title: "3D geometry · Sine & cosine rule · Bearings · Radians, arcs & sectors",
    intro: "Topic 3 前半：幾乎每份 P1 / P2 都有 sine / cosine rule 同 arc / sector 題。第一件事：檢查計數機 mode（degrees / radians）。",
    parts: [
      {
        h: "全章地圖 + 口訣一覽",
        min: 2,
        blocks: [
          ["key", "<b>所有三角形題 = 揀啱工具</b>：直角 → SOH CAH TOA / Pythagoras；非直角 → sine rule 或 cosine rule；要面積 → \\(\\frac12ab\\sin C\\)；圓形 → radians 公式。立體題 = 抽出一個直角三角形。"],
          ["table", ["已知", "要搵", "用"], [
            ["SAS（兩邊夾角）", "第三邊", "Cosine rule"],
            ["SSS（三邊）", "角", "Cosine rule（變形）"],
            ["AAS / ASA（兩角一邊）", "其他邊", "Sine rule"],
            ["SSA（兩邊 + 非夾角）", "角", "Sine rule — <b>小心 ambiguous case</b>"],
            ["兩邊 + 夾角", "面積", "\\(\\frac12ab\\sin C\\)"],
          ]],
          ["grid", [
            ["Sine rule", "邊對角，比值相同", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)"],
            ["Cosine rule", "夾角用 cos，兩邊平方加，減兩倍積", "\\(c^2=a^2+b^2-2ab\\cos C\\)"],
            ["面積", "兩邊夾角，一半 sin", "\\(\\frac12ab\\sin C\\)"],
            ["Ambiguous", "SSA 搵角有兩個答案，檢查和 < 180°", "\\(\\theta\\) 同 \\(180°-\\theta\\)"],
            ["Radian", "半圓係 π，度數乘 π 除 180", "\\(180°=\\pi\\)"],
            ["Arc", "弧長 = 半徑乘角", "\\(l=r\\theta\\)"],
            ["Sector", "扇形 = 半 r 平方乘角", "\\(A=\\frac12r^2\\theta\\)"],
            ["Bearing", "由北順時針，三位數", "065°, 270°"],
            ["Mode", "度數弧度先睇 mode", "錯 mode = 全部蝕分"],
          ]],
        ],
      },
      {
        h: "3D shapes & coordinates 立體圖形",
        min: 4,
        blocks: [
          ["key", "<b>Distance</b>（3D）：\\(d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}\\)　<b>Midpoint</b>：\\(\\left(\\frac{x_1+x_2}2,\\frac{y_1+y_2}2,\\frac{z_1+z_2}2\\right)\\)<br><b>Volume</b>：prism / cylinder = 底面積 × 高（\\(\\pi r^2h\\)）；pyramid \\(\\frac13Ah\\)；cone \\(\\frac13\\pi r^2h\\)；sphere \\(\\frac43\\pi r^3\\)<br><b>Surface area</b>：sphere \\(4\\pi r^2\\)；cone curved \\(\\pi rl\\)（l = slant height，\\(l^2=r^2+h^2\\)）；cylinder curved \\(2\\pi rh\\)<br>（以上喺 formula booklet；用前核對自己份 booklet）"],
          ["eg", "[P2 · 3 marks] A(2, −1, 3), B(6, 3, 5). Find (a) distance AB; (b) midpoint of AB.", [
            "(a) 差：(4, 4, 2) → \\(\\sqrt{16+16+4}=\\sqrt{36}=\\) <b>6</b> [M1][A1]",
            "(b) <b>(4, 1, 4)</b> [A1]",
          ]],
          ["eg", "[P2 · 5 marks] A right cone has radius 5 cm and slant height 13 cm. Find (a) the height; (b) the volume; (c) the total surface area.", [
            "(a) \\(h=\\sqrt{13^2-5^2}=\\sqrt{144}=\\) <b>12 cm</b> [A1]",
            "(b) \\(V=\\frac13\\pi(25)(12)=100\\pi=\\) <b>314 cm³</b> [M1][A1]",
            "(c) curved \\(=\\pi(5)(13)=65\\pi\\)；base \\(=\\pi(25)=25\\pi\\) [M1] → total \\(90\\pi=\\) <b>283 cm²</b> [A1]　（total = curved + base 圓面）",
          ]],
          ["eg", "[P2 · 7 marks] A right pyramid has a square base of side 6 cm and vertical height 4 cm, apex V above the centre. Find (a) volume; (b) length of slant edge; (c) angle between a slant edge and the base; (d) angle between a triangular face and the base.", [
            "(a) \\(V=\\frac13(36)(4)=\\) <b>48 cm³</b> [M1][A1]",
            "(b) 底面對角線 \\(\\sqrt{72}\\)，半條 \\(3\\sqrt2=4.243\\)；edge \\(=\\sqrt{(3\\sqrt2)^2+4^2}=\\sqrt{34}=\\) <b>5.83 cm</b> [M1][A1]",
            "(c) 角 = 高 對 半對角線：\\(\\tan\\theta=\\frac4{3\\sqrt2}\\) → <b>θ = 43.3°</b> [M1][A1]",
            "(d) 面嘅高度喺底邊中點：水平 3，垂直 4，\\(\\tan\\phi=\\frac43\\) → <b>53.1°</b> [A1]（slant height = 5，3-4-5）",
          ]],
          ["eg", "[P2 · 3 marks] A cuboid is 6 by 4 by 3. Find the angle between its space diagonal and the base.", [
            "base diagonal \\(=\\sqrt{36+16}=\\sqrt{52}=7.211\\) [A1]",
            "\\(\\tan\\theta=\\frac3{7.211}\\) [M1] → <b>θ = 22.6°</b> [A1]　（space diagonal \\(\\sqrt{61}=7.81\\)）",
          ]],
          ["note", "<b>常考</b>：pyramid / cone / cuboid 立體 + 「angle between line and plane」(3–6 marks, P2)。技巧：畫出直角三角形、標邊長；角度 = 高 ÷ 水平投影。"],
          ["trap", ["Angle with the plane = 同投影線嘅角，唔係同斜邊垂直。", "Cone slant height l 同 vertical height h 混淆。", "Total surface area 漏咗底；hemisphere 面積要加圓底。"]],
        ],
      },
      {
        h: "Right-angled & non-right triangles",
        min: 5,
        blocks: [
          ["key", "<b>Sine rule</b>：\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)　<b>Cosine rule</b>：\\(c^2=a^2+b^2-2ab\\cos C\\)；\\(\\cos C=\\frac{a^2+b^2-c^2}{2ab}\\)　<b>Area</b> \\(=\\frac12ab\\sin C\\)<br>邊 a 對角 A（小寫對大寫）。三角形內角和 180°。"],
          ["eg", "[P2 · 6 marks] In triangle ABC, AB = 9, AC = 11, angle A = 70°. Find (a) BC; (b) the area; (c) angle B.", [
            "(a) \\(BC^2=81+121-2(9)(11)\\cos70°\\) [M1] = 202 − 198(0.34202) = 134.28 → <b>BC = 11.6</b> [A1]",
            "(b) \\(\\frac12(9)(11)\\sin70°=\\) <b>46.5</b> [M1][A1]",
            "(c) \\(\\frac{\\sin B}{11}=\\frac{\\sin70°}{11.588}\\) → sin B = 0.8920 → <b>B = 63.1°</b> [M1][A1]　（BC 係最長邊，對最大角 A，所以 B 係銳角，無 ambiguity）",
          ]],
          ["eg", "[P2 · 3 marks] Triangle with sides 8, 5, 7. Find the largest angle and the area.", [
            "最大角對最長邊 8：\\(\\cos A=\\frac{25+49-64}{2(5)(7)}=\\frac{10}{70}=\\frac17\\) [M1] → <b>A = 81.8°</b> [A1]",
            "Area \\(=\\frac12(5)(7)\\sin81.8°=\\) <b>17.3</b> [A1]　（Heron 驗：s = 10，\\(\\sqrt{10\\cdot2\\cdot5\\cdot3}=17.32\\) ✓）",
          ]],
          ["eg", "[P2 · 2 marks] A = 40°, B = 65°, a = 8. Find b.", [
            "\\(\\frac b{\\sin65°}=\\frac8{\\sin40°}\\) [M1]",
            "\\(b=\\frac{8\\sin65°}{\\sin40°}=\\) <b>11.3</b> [A1]（≈ 11.28）",
          ]],
          ["eg", "[P2 · 5 marks] In triangle ABC, A = 30°, a = 7, b = 12. Find all possible values of B, and the corresponding values of c.", [
            "\\(\\sin B=\\frac{12\\sin30°}7=\\frac67=0.857\\) [M1]",
            "<b>B = 59.0°</b> 或 <b>B = 180° − 59.0° = 121.0°</b> [A1][A1]　（兩個都 valid：30 + 121 < 180 ✓）",
            "B = 59.0° → C = 91.0°，\\(c=\\frac{7\\sin91.0°}{\\sin30°}=\\) <b>14.0</b> [A1]",
            "B = 121.0° → C = 29.0°，\\(c=\\frac{7\\sin29.0°}{\\sin30°}=\\) <b>6.79</b> [A1]",
          ]],
          ["note", "<b>Ambiguous case</b>：只喺 SSA（角係非夾角、而且對邊短過另一邊）出現。用 sine rule 搵 obtuse 角時會漏咗第二個答案。若問 “find angle”，用 cosine rule 就冇 ambiguity。"],
          ["note", "<b>GDC</b>：存儲中間值（Ans / STO）；sin⁻¹ 只俾銳角，另一個答案自己用 180° − θ（degrees）。Mode 檢查：Degrees。"],
          ["trap", ["Cosine rule 入面 2ab cos C 要全部先乘再減，唔好 \\((a^2+b^2-2ab)\\cos C\\)。", "Sine rule 搵到 sin⁻¹ 就停，漏咗 obtuse 解。", "Mode 錯。", "邊同角配對錯（a 一定對 A）。"]],
        ],
      },
      {
        h: "Bearings, elevation & depression 應用",
        min: 3,
        blocks: [
          ["key", "<b>True bearing</b>：由 <b>北</b> 順時針量度，用三位數（例 065°, 270°）。<br><b>Angle of elevation</b>：由水平線向上望；<b>angle of depression</b>：由水平線向下望（兩者 alternate angles 相等）。<br>步驟：每個點畫一條北線，標出角；搵三角形內角；用 sine / cosine rule。"],
          ["eg", "[P2 · 5 marks] A ship sails 12 km on bearing 040° from A to B, then 9 km on bearing 130° to C. Find (a) the distance AC; (b) the bearing of C from A; (c) the bearing of A from C.", [
            "(a) 兩次方向差 130° − 40° = 90° → 喺 B 係直角 [M1]　\\(AC=\\sqrt{12^2+9^2}=\\) <b>15 km</b> [A1]",
            "(b) 角 BAC：\\(\\tan=\\frac9{12}\\) → 36.9° [M1]；bearing = 40° + 36.9° = <b>076.9° ≈ 077°</b> [A1]",
            "(c) back bearing = 77° + 180° = <b>257°</b> [A1]（或 076.9 + 180 = 256.9°）",
          ]],
          ["eg", "[P2 · 3 marks] From a point 50 m horizontally from the foot of a tower the angle of elevation of the top is 32°. Find the height of the tower.", [
            "\\(\\tan32°=\\frac h{50}\\) [M1][A1]",
            "\\(h=50\\tan32°=\\) <b>31.2 m</b> [A1]（若觀察者眼高 1.6 m → 加返）",
          ]],
          ["note", "<b>常考</b>：bearings + cosine rule + sine rule 兩部曲（先 cosine 搵邊，再 sine 搵角），P2 6–8 marks。Back bearing = ± 180°。"],
          ["trap", ["Bearing 少於 100° 要寫 0：045° 唔係 45°。", "冇畫北線令角算錯。", "Depression 角當成由垂直線量。"]],
        ],
      },
      {
        h: "Radians, arc & sector 弧度",
        min: 5,
        blocks: [
          ["key", "<b>π rad = 180°</b>。度 → 弧度：× \\(\\frac\\pi{180}\\)；弧度 → 度：× \\(\\frac{180}\\pi\\)。<br><b>Arc length</b> \\(l=r\\theta\\)　<b>Sector area</b> \\(A=\\frac12r^2\\theta\\)（θ 必須係 radians）<br><b>Perimeter of sector</b> = \\(2r+r\\theta\\)　<b>Segment area</b> = sector − triangle \\(=\\frac12r^2(\\theta-\\sin\\theta)\\)　<b>Chord</b> \\(=2r\\sin\\frac\\theta2\\)（或 cosine rule）"],
          ["note", "<b>Radian</b>: the angle subtended at the centre of a circle by an arc equal in length to the radius."],
          ["table", ["度", "30°", "45°", "60°", "90°", "120°", "135°", "150°", "180°", "270°", "360°"], [
            ["弧度", "\\(\\frac\\pi6\\)", "\\(\\frac\\pi4\\)", "\\(\\frac\\pi3\\)", "\\(\\frac\\pi2\\)", "\\(\\frac{2\\pi}3\\)", "\\(\\frac{3\\pi}4\\)", "\\(\\frac{5\\pi}6\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}2\\)", "\\(2\\pi\\)"],
          ]],
          ["eg", "[P1 · 5 marks] A sector has radius 6 cm and angle \\(\\frac\\pi3\\). Find, in exact form, (a) the arc length; (b) the area; (c) the perimeter.", [
            "(a) \\(l=6\\times\\frac\\pi3=\\) <b>\\(2\\pi\\) cm</b> [M1][A1]",
            "(b) \\(A=\\frac12(36)\\frac\\pi3=\\) <b>\\(6\\pi\\) cm²</b> [M1][A1]",
            "(c) \\(P=12+2\\pi\\) cm [A1]",
          ]],
          ["eg", "[P1 · 3 marks] An arc of length 10 cm is on a circle of radius 4 cm. Find the angle at the centre in radians and in degrees.", [
            "\\(10=4\\theta\\) → <b>θ = 2.5 rad</b> [M1][A1]",
            "\\(2.5\\times\\frac{180}\\pi=\\) <b>143°</b> [A1]（143.2°）",
          ]],
          ["eg", "[P2 · 6 marks] Circle centre O, radius 10 cm. Chord AB subtends angle 1.2 rad at O. Find (a) arc AB; (b) the area of the minor sector; (c) the area of the segment; (d) the perimeter of the segment.", [
            "(a) \\(l=10(1.2)=\\) <b>12 cm</b> [A1]",
            "(b) \\(A=\\frac12(100)(1.2)=\\) <b>60 cm²</b> [A1]",
            "(c) triangle OAB \\(=\\frac12(100)\\sin1.2=46.60\\)；segment \\(=60-46.60=\\) <b>13.4 cm²</b> [M1][A1]",
            "(d) chord \\(=2(10)\\sin0.6=11.29\\)（或 \\(\\sqrt{200-200\\cos1.2}\\)）；perimeter \\(=12+11.29=\\) <b>23.3 cm</b> [M1][A1]　（記得 calculator 要 radian mode！）",
          ]],
          ["eg", "[P1 · 3 marks] Convert (a) 150° to radians; (b) 2.4 rad to degrees (3 s.f.).", [
            "(a) \\(150\\times\\frac\\pi{180}=\\) <b>\\(\\frac{5\\pi}6\\)</b> [A1]",
            "(b) \\(2.4\\times\\frac{180}\\pi=\\) <b>138°</b>（137.5°）[M1][A1]",
          ]],
          ["trap", ["θ 用咗 degrees 代入 \\(r\\theta\\)。", "Perimeter of sector 漏咗兩條半徑。", "Segment 面積減咗錯三角形（要 \\(\\frac12r^2\\sin\\theta\\)）。", "Exact 答案寫成小數。"]],
        ],
      },
      {
        h: "長題拆解法",
        min: 2.5,
        blocks: [
          ["eg", "[P2 · 7 marks] A park is in the shape of triangle PQR with PQ = 80 m, PR = 100 m, angle QPR = 70°. A circular flower bed centre P radius 30 m lies inside (sector QPR region cut by radii along PQ, PR). Find (a) QR; (b) the area of the park; (c) the area of the sector of the flower bed inside the park; (d) the area of the park outside the flower bed. (Hint: flower bed region is the sector of radius 30 m at P.)", [
            "圈數：PQ 80、PR 100、夾角 70° → SAS；花圃 radius 30、同一個角 70°",
            "(a) \\(QR^2=80^2+100^2-2(80)(100)\\cos70°=6400+10000-16000(0.34202)=10927.7\\) → <b>QR = 105 m</b> [M1][A1]",
            "(b) \\(\\frac12(80)(100)\\sin70°=\\) <b>3760 m²</b> [M1][A1]（3758.8）",
            "(c) θ = 70° = 1.2217 rad；\\(\\frac12(30)^2(1.2217)=\\) <b>550 m²</b> [M1][A1]（549.8；或 \\(\\frac{70}{360}\\pi30^2\\)）",
            "(d) 3758.8 − 549.8 = <b>3210 m²</b> [A1]　（4 位數字答案最好寫 3 s.f.：3210）",
          ]],
          ["table", ["題目講…", "即係…"], [
            ["“angle between line and plane”", "畫投影，直角三角形"],
            ["“find the exact …” + radian 角", "用 π 表示，唔好小數"],
            ["“find the area of the segment”", "sector − triangle"],
            ["“bearing of B from A”", "喺 A 畫北線，順時針量到 B"],
            ["“show that …”", "寫晒每一步，唔可以倒推"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find / Calculate", "列式，代入 booklet 公式，答案 3 s.f."],
            ["Show that", "最後一行同題目一樣"],
            ["Hence", "用上一部分結果"],
            ["State the units", "長度、面積、角度都要有單位，degree 或 radian"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 三角形：識別 right-angled / sine rule / cosine rule（2–4 分）<br>• 面積：\\(\\frac12ab\\sin C\\)<br>• 3D：先畫右角三角形，標出邊<br>• Bearings：北線畫出，角度順時針 3 位數<br>• 弧度：arc \\(l=r\\theta\\)，sector \\(A=\\frac12r^2\\theta\\)"],
          ["trap", [
            "GDC 模式 degree / radian 唔對",
            "Sine rule 中 ambiguous case 漏第二個解",
            "Bearing 寫成 -45° 或唔足三位數",
            "弧度題用度數公式",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 sine rule、cosine rule、triangle area、arc length、sector area。畫圖標清楚已知，可以拎方法分。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Calculator mode 錯", "開始前睇 DEG / RAD"],
            ["2", "Sine rule 搵角漏 obtuse 解", "SSA 時檢查 180° − θ"],
            ["3", "Cosine rule 括號錯", "先 \\(2ab\\cos C\\) 再從 \\(a^2+b^2\\) 減"],
            ["4", "面積用錯角", "角要係兩邊夾角"],
            ["5", "Bearing 冇 3 位數 / 唔係順時針", "045°；由北順時針"],
            ["6", "Sector 公式用 degrees", "θ 一定 radians（或用 \\(\\frac\\theta{360}\\) 比例）"],
            ["7", "Sector perimeter 漏半徑", "\\(2r+r\\theta\\)"],
            ["8", "Segment 面積減錯", "\\(\\frac12r^2(\\theta-\\sin\\theta)\\)"],
            ["9", "Cone 用 h 當 l", "l 用於曲面積，h 用於體積"],
            ["10", "Surface area 漏底", "Total = curved + base"],
            ["11", "Angle with plane 搵錯三角形", "用高 / 水平投影"],
            ["12", "Round 太早", "用 Ans / memory"],
          ]],
          ["check", [
            "3D distance、midpoint，cone / pyramid / sphere 公式",
            "Sine / cosine rule 同選擇 table；ambiguous case",
            "面積 \\(\\frac12ab\\sin C\\) 同 bearing 題",
            "度 ↔ 弧度，常用角度弧度表",
            "Arc、sector、segment 面積與周界",
            "Pyramid 立體：角度 + 體積",
          ]],
        ],
      },
    ],
    summary: [
      "兩邊夾角用 cosine，邊對角用 sine",
      "面積：兩邊夾角，一半 sin",
      "SSA 小心：θ 同 180° − θ",
      "半圓係 π，度乘 π 除 180",
      "弧長 = rθ；扇形 = 半 r 平方 θ",
      "Segment = sector 減 triangle",
      "Bearing 由北順時針，三位數",
      "計數機 mode 先睇",
    ],
    practice: [
      { q: "Convert 135° to radians.", o: ["A. \\(\\frac\\pi4\\)", "B. \\(\\frac{2\\pi}3\\)", "C. \\(\\frac{3\\pi}4\\)", "D. \\(\\frac{5\\pi}6\\)"], m: 1, a: "<b>C</b>. 135 × π/180 = 3π/4." },
      { q: "A sector has radius 8 cm and angle 0.75 rad. Its arc length is:", o: ["A. 6 cm", "B. 24 cm", "C. 10.7 cm", "D. 48 cm"], m: 1, a: "<b>A</b>. l = rθ = 8 × 0.75 = 6 cm. (24 is the area.)" },
      { q: "The distance between (1, 0, 2) and (4, 4, 2) is:", o: ["A. 5", "B. 7", "C. 25", "D. 3"], m: 1, a: "<b>A</b>. √(9 + 16 + 0) = 5." },
      { q: "Which expression gives the area of triangle ABC with a = 6, b = 9, C = 40°?", o: ["A. 27 sin 40°", "B. 54 sin 40°", "C. 27 cos 40°", "D. 54 cos 40°"], m: 1, a: "<b>A</b>. ½(6)(9) sin 40° = 27 sin 40°." },
      { q: "In triangle ABC, AB = 7 cm, BC = 9 cm, angle ABC = 60°. Find AC.", m: 3, a: "\\(AC^2=49+81-2(7)(9)\\cos60°\\) [M1] = 130 − 63 = 67 [A1] → <b>AC = 8.19 cm</b> [A1]." },
      { q: "A sector has radius 6 cm and angle \\(\\frac\\pi3\\). Find, in exact form, the arc length and the area of the sector.", m: 4, a: "Arc \\(=6\\times\\frac\\pi3=\\) <b>2π cm</b> [M1][A1]. Area \\(=\\frac12(36)\\frac\\pi3=\\) <b>6π cm²</b> [M1][A1]." },
      { q: "In triangle PQR, angle P = 35°, angle Q = 80°, QR = 10 cm. Find PR.", m: 3, a: "\\(\\frac{PR}{\\sin80°}=\\frac{10}{\\sin35°}\\) [M1][A1] → <b>PR = 17.2 cm</b> [A1]." },
      { q: "A rectangular-based pyramid has base 8 cm by 6 cm and vertical height 12 cm, apex above the centre. Find the volume and the length of a slant edge.", m: 5, a: "\\(V=\\frac13(48)(12)=\\) <b>192 cm³</b> [M1][A1]. Base diagonal \\(\\sqrt{64+36}=10\\), half = 5 [A1]. Edge \\(=\\sqrt{5^2+12^2}=\\) <b>13 cm</b> [M1][A1]." },
      { q: "From a boat the angle of elevation of the top of a cliff is 24°. After sailing 100 m directly towards the cliff the angle is 38°. Find the height of the cliff (to 3 s.f.).", m: 5, a: "Let h = height, x = distance after sailing. \\(\\tan38°=\\frac hx\\), \\(\\tan24°=\\frac h{x+100}\\) [M1][M1]. \\(x=\\frac h{\\tan38°}\\), \\(x+100=\\frac h{\\tan24°}\\) → \\(h(\\frac1{\\tan24°}-\\frac1{\\tan38°})=100\\) [M1] → \\(h(2.2460-1.2799)=100\\) [A1] → \\(h=103.5\\) → <b>h = 104 m</b> [A1]. (Alternatively sine rule in the triangle with angle 14°.)" },
      { q: "Circle centre O, radius 8 cm. Chord AB subtends angle 1.5 rad at O. Find (a) the area of the minor segment; (b) the perimeter of the segment.", m: 6, a: "(a) Sector \\(=\\frac12(64)(1.5)=48\\) [A1]; triangle \\(=\\frac12(64)\\sin1.5=31.92\\) [M1][A1]; segment <b>16.1 cm²</b> [A1]. (b) Chord \\(=2(8)\\sin0.75=10.91\\) [M1]; arc = 12; perimeter <b>22.9 cm</b> [A1]." },
    ],
  },
  "math-8": {
    title: "Unit circle & exact values · Identities · Graphs & transformations · Solving trig equations",
    intro: "Topic 3 後半：exact values 要背，identities 要識用，graph 要識讀參數，equation 要搵齊所有解。P1 靠代數，P2 靠 GDC（radian mode）。",
    parts: [
      {
        h: "全章地圖 + 口訣一覽",
        min: 2,
        blocks: [
          ["key", "<b>一個單位圓搞掂全章</b>：點 (cos θ, sin θ) 喺半徑 1 嘅圓上，tan θ = sin θ ÷ cos θ。Exact value → 靠 30-60-90 同 45-45-90 三角形；所有解 → 靠對稱；graph → 靠 \\(a\\sin(b(x-c))+d\\) 四個參數。"],
          ["flow", [
            ["① Mode", "radians（x 用 π）定 degrees？"],
            ["② Exact 題", "用 identity / 單位圓 / 特別角，唔用計數機"],
            ["③ 解方程", "整理成 sin x = k → 主值 → 對稱搵其他 → 逐個檢查 interval"],
            ["④ Graph / model", "max, min → a, d；period → b；起點 → c"],
          ]],
          ["grid", [
            ["Unit circle", "cos 係橫，sin 係縱", "\\(\\cos\\theta=x,\\ \\sin\\theta=y\\)"],
            ["tan", "sin 除 cos", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)"],
            ["Pythagoras", "sin 平方加 cos 平方等於一", "\\(\\sin^2\\theta+\\cos^2\\theta=1\\)"],
            ["Double angle", "sin 二倍：二 sin cos", "\\(\\sin2\\theta=2\\sin\\theta\\cos\\theta\\)"],
            ["cos 2θ", "三款寫法按需要揀", "\\(\\cos^2-\\sin^2=2\\cos^2-1=1-2\\sin^2\\)"],
            ["CAST", "全 sin tan cos 逆時針", "Q1 all, Q2 sin, Q3 tan, Q4 cos"],
            ["Period", "sin cos 兩 π 除 b，tan 一 π 除 b", "\\(\\frac{2\\pi}b\\)；\\(\\frac\\pi b\\)"],
            ["Amplitude", "|a|，中線係 d", "max \\(d+|a|\\)，min \\(d-|a|\\)"],
            ["所有解", "逐個 interval 檢查，一個都唔好漏", "改變 interval 先解 2x"],
          ]],
        ],
      },
      {
        h: "Exact values & unit circle",
        min: 4,
        blocks: [
          ["table", ["θ", "0", "\\(\\frac\\pi6\\) (30°)", "\\(\\frac\\pi4\\) (45°)", "\\(\\frac\\pi3\\) (60°)", "\\(\\frac\\pi2\\) (90°)", "\\(\\pi\\) (180°)", "\\(\\frac{3\\pi}2\\) (270°)"], [
            ["sin θ", "0", "\\(\\frac12\\)", "\\(\\frac{\\sqrt2}2\\)", "\\(\\frac{\\sqrt3}2\\)", "1", "0", "−1"],
            ["cos θ", "1", "\\(\\frac{\\sqrt3}2\\)", "\\(\\frac{\\sqrt2}2\\)", "\\(\\frac12\\)", "0", "−1", "0"],
            ["tan θ", "0", "\\(\\frac1{\\sqrt3}\\)", "1", "\\(\\sqrt3\\)", "無定義", "0", "無定義"],
          ]],
          ["rhyme", "口訣", "sin 由 0 數落 4：√0 √1 √2 √3 √4 全部除 2；cos 反轉", "sin: 0, ½, √2/2, √3/2, 1；cos 同一列倒轉。Exact value 唔喺 formula booklet，要記！"],
          ["rhyme", "CAST", "全 sin tan cos，逆時針", "Q1 (0–π/2) 全正；Q2 sin 正；Q3 tan 正；Q4 cos 正。"],
          ["table", ["Symmetry（θ 銳角）", "sin", "cos", "tan"], [
            ["\\(\\pi-\\theta\\)（Q2）", "\\(+\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(-\\tan\\theta\\)"],
            ["\\(\\pi+\\theta\\)（Q3）", "\\(-\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(+\\tan\\theta\\)"],
            ["\\(2\\pi-\\theta\\)（Q4）", "\\(-\\sin\\theta\\)", "\\(+\\cos\\theta\\)", "\\(-\\tan\\theta\\)"],
            ["\\(-\\theta\\)", "\\(-\\sin\\theta\\)", "\\(+\\cos\\theta\\)", "\\(-\\tan\\theta\\)"],
            ["\\(\\frac\\pi2-\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\frac1{\\tan\\theta}\\)"],
          ]],
          ["eg", "[P1 · 3 marks] Find the exact value of (a) \\(\\sin\\frac{5\\pi}6\\); (b) \\(\\cos\\frac{4\\pi}3\\); (c) \\(\\tan\\frac{3\\pi}4\\).", [
            "(a) \\(\\frac{5\\pi}6=\\pi-\\frac\\pi6\\)（Q2，sin 正）→ <b>\\(\\frac12\\)</b> [A1]",
            "(b) \\(\\frac{4\\pi}3=\\pi+\\frac\\pi3\\)（Q3，cos 負）→ <b>\\(-\\frac12\\)</b> [A1]",
            "(c) \\(\\frac{3\\pi}4=\\pi-\\frac\\pi4\\)（Q2，tan 負）→ <b>−1</b> [A1]",
          ]],
          ["trap", ["Exact value 題用計數機小數 → 唔得分（除非問 3 s.f.）。", "忘記象限符號。", "tan(π/2) 無定義，唔係 0。"]],
        ],
      },
      {
        h: "Identities 恆等式",
        min: 4,
        blocks: [
          ["key", "<b>\\(\\sin^2\\theta+\\cos^2\\theta=1\\)</b>　<b>\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)</b><br><b>\\(\\sin2\\theta=2\\sin\\theta\\cos\\theta\\)</b><br><b>\\(\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta\\)</b>　（全部喺 formula booklet）"],
          ["table", ["要做乜", "用邊個"], [
            ["已知 sin，要 cos（或相反）", "\\(\\sin^2+\\cos^2=1\\) + 象限決定正負"],
            ["Equation 有 cos 2x 同 sin x", "\\(\\cos2x=1-2\\sin^2x\\)"],
            ["Equation 有 cos 2x 同 cos x", "\\(\\cos2x=2\\cos^2x-1\\)"],
            ["Equation 有 \\(\\cos^2x\\) 同 \\(\\sin x\\)", "\\(\\cos^2x=1-\\sin^2x\\)"],
            ["化簡 / 證明", "全部轉做 sin 同 cos，約分"],
          ]],
          ["eg", "[P1 · 5 marks] Given \\(\\cos\\theta=-\\frac5{13}\\) and \\(\\pi<\\theta<\\frac{3\\pi}2\\), find the exact value of (a) \\(\\sin\\theta\\); (b) \\(\\tan\\theta\\); (c) \\(\\sin2\\theta\\); (d) \\(\\cos2\\theta\\).", [
            "(a) \\(\\sin^2\\theta=1-\\frac{25}{169}=\\frac{144}{169}\\) [M1]；Q3 sin 負 → <b>\\(-\\frac{12}{13}\\)</b> [A1]",
            "(b) \\(\\tan\\theta=\\frac{-12/13}{-5/13}=\\) <b>\\(\\frac{12}5\\)</b> [A1]",
            "(c) \\(2\\left(-\\frac{12}{13}\\right)\\left(-\\frac5{13}\\right)=\\) <b>\\(\\frac{120}{169}\\)</b> [A1]",
            "(d) \\(2\\cos^2\\theta-1=\\frac{50}{169}-1=\\) <b>\\(-\\frac{119}{169}\\)</b> [A1]　驗：\\(120^2+119^2=14400+14161=28561=169^2\\) ✓",
          ]],
          ["eg", "[P1 · 4 marks] Show that \\(\\frac{\\sin2\\theta}{1+\\cos2\\theta}=\\tan\\theta\\).", [
            "LHS \\(=\\frac{2\\sin\\theta\\cos\\theta}{1+(2\\cos^2\\theta-1)}\\) [M1][A1]",
            "\\(=\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}\\) [A1]　\\(=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta\\) = RHS [A1] ∎（寫「∎」或 “as required”，由 LHS 推去 RHS）",
          ]],
          ["trap", ["開方求 cos 時冇用象限決定正負。", "\\(\\sin2\\theta\\ne2\\sin\\theta\\)；\\(\\cos2\\theta\\ne2\\cos\\theta\\)。", "證明題由兩邊同時推（要由一邊推去另一邊）。"]],
        ],
      },
      {
        h: "Graphs & transformations 圖像",
        min: 4,
        blocks: [
          ["key", "<b>\\(y=a\\sin(b(x-c))+d\\)</b>（cos 同理）<br>amplitude = |a|；period = \\(\\frac{2\\pi}b\\)（degrees：\\(\\frac{360°}b\\)）；horizontal shift c（向右）；principal axis y = d。<br>Max \\(=d+|a|\\)，min \\(=d-|a|\\)。tan：period \\(\\frac\\pi b\\)，無 amplitude，vertical asymptote \\(x=\\frac\\pi2+n\\pi\\)（\\(y=\\tan x\\)）。"],
          ["table", ["Function", "Period", "Range", "特點"], [
            ["\\(y=\\sin x\\)", "\\(2\\pi\\)", "\\(-1\\le y\\le1\\)", "過原點，x=0 時 y=0"],
            ["\\(y=\\cos x\\)", "\\(2\\pi\\)", "\\(-1\\le y\\le1\\)", "x=0 時 y=1（= sin 向左平移 π/2）"],
            ["\\(y=\\tan x\\)", "\\(\\pi\\)", "all reals", "asymptotes \\(x=\\pm\\frac\\pi2,\\pm\\frac{3\\pi}2\\)"],
          ]],
          ["eg", "[P1 · 4 marks] For \\(f(x)=-2\\cos(3x-\\pi)+5\\) find the amplitude, period, range and horizontal shift.", [
            "改成 \\(b(x-c)\\)：\\(3x-\\pi=3\\left(x-\\frac\\pi3\\right)\\) → b = 3, c = \\(\\frac\\pi3\\) [M1]",
            "amplitude <b>2</b>；period \\(\\frac{2\\pi}3\\)；shift <b>\\(\\frac\\pi3\\) right</b> [A1][A1]",
            "range：5 − 2 ≤ f ≤ 5 + 2 → <b>\\(3\\le f(x)\\le7\\)</b> [A1]　（負號只翻轉，唔影響 amplitude）",
          ]],
          ["eg", "[P2 · 7 marks] A tide height h (metres) follows \\(h(t)=a\\cos(b(t-c))+d\\), t hours after midnight. High tide 6.5 m at t = 3; low tide 1.5 m at t = 9. (a) Find a, b, c, d. (b) Find the first time the depth is 5 m; (c) how long is the depth at least 5 m in the first cycle?", [
            "(a) \\(d=\\frac{6.5+1.5}2=4\\)；\\(a=\\frac{6.5-1.5}2=2.5\\)；半周期 9 − 3 = 6 → period 12 → \\(b=\\frac{2\\pi}{12}=\\frac\\pi6\\)；max 喺 t = 3 → c = 3 [A1][A1][A1][A1]",
            "模型：<b>\\(h=2.5\\cos\\left(\\frac\\pi6(t-3)\\right)+4\\)</b>　驗：t = 9 → cos π = −1 → 1.5 ✓",
            "(b) 解 \\(2.5\\cos(\\frac\\pi6(t-3))+4=5\\) → \\(\\cos(\\dots)=0.4\\)；GDC（radians！）畫 Y1 與 Y2 = 5：最早交點 <b>t = 0.786 h</b> [M1][A1]",
            "(c) 另一交點 t = 5.214（對稱於 t = 3）；時間 = 5.214 − 0.786 = <b>4.43 h</b> [A1]",
          ]],
          ["note", "<b>常考</b>：「The graph shows … find a, b, c, d」+「context: Ferris wheel / tide / daylight / temperature」+「solve f(t) = k with GDC」，P2 6–8 marks。從圖找參數：max/min → d 同 a；兩個相鄰 max 距離 → period → b；起點或 max 位置 → c。"],
          ["trap", ["period 用 \\(\\frac{2\\pi}b\\)，唔係 \\(2\\pi b\\)。", "\\(\\sin(2x-\\pi)\\) 嘅 shift 係 \\(\\frac\\pi2\\)，唔係 π（要先提出 b）。", "GDC 用咗 degrees 解 radian 題。", "d 當成 amplitude。"]],
        ],
      },
      {
        h: "Solving trig equations 解方程",
        min: 5,
        blocks: [
          ["rhyme", "口訣", "求主值、用對稱、逐個檢查 interval", "① 整理成 sin x = k ② 主值 (calculator / exact) ③ 對稱：sin → θ, π − θ；cos → θ, 2π − θ；tan → θ, θ + π ④ 加 2π 直到出 interval。"],
          ["key", "<b>Interval 是答案嘅一部分</b>：\\(0\\le x\\le2\\pi\\)（radians）或 \\(0°\\le x\\le360°\\)。Equation 含 \\(\\sin2x\\) → 先將 interval 乘 2：\\(0\\le2x\\le4\\pi\\)。"],
          ["eg", "[P1 · 3 marks] Solve \\(\\sin x=-\\frac{\\sqrt3}2\\) for \\(0\\le x\\le2\\pi\\).", [
            "參考角 \\(\\frac\\pi3\\)；sin 負 → Q3, Q4 [M1]",
            "<b>\\(x=\\frac{4\\pi}3,\\ \\frac{5\\pi}3\\)</b> [A1][A1]",
          ]],
          ["eg", "[P1 · 3 marks] Solve \\(\\tan x=-1\\) for \\(0\\le x\\le2\\pi\\).", [
            "參考角 \\(\\frac\\pi4\\)；tan 負 → Q2, Q4 [M1]",
            "<b>\\(x=\\frac{3\\pi}4,\\ \\frac{7\\pi}4\\)</b> [A1][A1]",
          ]],
          ["eg", "[P1 · 4 marks] Solve \\(2\\sin2x=\\sqrt3\\) for \\(0\\le x\\le2\\pi\\).", [
            "\\(\\sin2x=\\frac{\\sqrt3}2\\)；\\(0\\le2x\\le4\\pi\\) [M1]",
            "\\(2x=\\frac\\pi3,\\ \\frac{2\\pi}3,\\ \\frac{7\\pi}3,\\ \\frac{8\\pi}3\\) [A1][A1]",
            "<b>\\(x=\\frac\\pi6,\\ \\frac\\pi3,\\ \\frac{7\\pi}6,\\ \\frac{4\\pi}3\\)</b> [A1]　（4 個解：週期減半 → 解數目加倍）",
          ]],
          ["eg", "[P1 · 6 marks] Solve \\(\\cos2x=\\sin x\\) for \\(0\\le x\\le2\\pi\\).", [
            "\\(1-2\\sin^2x=\\sin x\\) [M1]（因為右邊係 sin x，所以用 \\(1-2\\sin^2\\)）",
            "\\(2\\sin^2x+\\sin x-1=0\\) → \\((2\\sin x-1)(\\sin x+1)=0\\) [M1][A1]",
            "\\(\\sin x=\\frac12\\) → \\(x=\\frac\\pi6,\\frac{5\\pi}6\\)；\\(\\sin x=-1\\) → \\(x=\\frac{3\\pi}2\\) [A1][A1]",
            "<b>\\(x=\\frac\\pi6,\\ \\frac{5\\pi}6,\\ \\frac{3\\pi}2\\)</b> [A1]",
          ]],
          ["eg", "[P1 · 5 marks] Solve \\(2\\cos^2x+3\\sin x=3\\) for \\(0\\le x\\le2\\pi\\).", [
            "\\(2(1-\\sin^2x)+3\\sin x=3\\) [M1]",
            "\\(2\\sin^2x-3\\sin x+1=0\\) → \\((2\\sin x-1)(\\sin x-1)=0\\) [M1][A1]",
            "\\(\\sin x=\\frac12\\) → \\(\\frac\\pi6,\\frac{5\\pi}6\\)；\\(\\sin x=1\\) → \\(\\frac\\pi2\\) [A1]",
            "<b>\\(x=\\frac\\pi6,\\ \\frac\\pi2,\\ \\frac{5\\pi}6\\)</b> [A1]",
          ]],
          ["eg", "[P2 · 3 marks] Solve \\(3\\sin x=2\\) for \\(0\\le x\\le2\\pi\\) (radians, 3 s.f.).", [
            "\\(\\sin x=\\frac23\\) → \\(x=\\sin^{-1}(0.667)=0.730\\) [M1][A1]",
            "\\(x=\\pi-0.730=\\) <b>2.41</b> [A1]　（degrees 版：41.8°, 138.2°）",
          ]],
          ["note", "<b>GDC</b>：① Mode 要同題目一致；② 畫 Y1 = 左邊，Y2 = 右邊，限制 window 喺 interval，逐個 intersect；③ 如果有 sin⁻¹，只俾主值，其他解靠對稱；④ P2 通常問 3 s.f.，P1 通常 exact（π 分數）。"],
          ["trap", ["漏咗 interval 入面第二個（或以上）解。", "\\(\\sin2x=k\\) 只解 \\(0\\le2x\\le2\\pi\\)（應該延伸到 4π）。", "兩邊除以 \\(\\sin x\\) 令解消失 → 應該移項分解。", "答案超出 interval。", "令 \\(\\sin x=2\\)（無解）— 檢查 \\(|\\sin x|\\le1\\)。"]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Solve", "指定範圍內所有解，不可漏"],
            ["Find the exact value", "分數 / 根號形式，不用小數"],
            ["Show that", "由一邊證到另一邊"],
            ["State the amplitude / period", "直接讀出數值，週期用 \\(\\frac{2\\pi}{b}\\)"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Exact values：用 unit circle / 30°-60°-45° 三角形<br>• 恆等式：\\(\\sin^2\\theta+\\cos^2\\theta=1\\)，\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)<br>• 解三角方程：先找主值，再用對稱找所有解<br>• 圖像：振幅、週期、平移<br>• 模型：\\(y=a\\sin(b(x-c))+d\\)"],
          ["trap", [
            "只寫主值，漏咗其他象限解",
            "弧度同度數範圍混用",
            "\\(\\sin^2\\theta\\) 同 \\(\\sin\\theta^2\\) 搞錯",
            "兩邊約 sin x 令解丟失",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 identities、double angle 同週期公式，但 exact values 要自己識。Solve 題畫 sketch 最穩陣。"],
        ],
      },
      {
        h: "長題 + 失分位 + 自我檢查",
        min: 3,
        blocks: [
          ["eg", "[P1 · 8 marks] Given \\(f(x)=3\\cos2x+2\\sin x\\). (a) Show that \\(f(x)=-6\\sin^2x+2\\sin x+3\\). (b) Hence solve \\(f(x)=3\\) for \\(0\\le x\\le2\\pi\\).", [
            "圈數：cos 2x 同 sin x → 用 \\(\\cos2x=1-2\\sin^2x\\)",
            "(a) \\(3(1-2\\sin^2x)+2\\sin x=3-6\\sin^2x+2\\sin x\\) = <b>\\(-6\\sin^2x+2\\sin x+3\\)</b> [M1][A1]",
            "(b) \\(-6\\sin^2x+2\\sin x+3=3\\) → \\(-6\\sin^2x+2\\sin x=0\\) → \\(2\\sin x(1-3\\sin x)=0\\) [M1][A1]",
            "\\(\\sin x=0\\) → \\(x=0,\\ \\pi,\\ 2\\pi\\)；\\(\\sin x=\\frac13\\) → \\(x=0.340,\\ 2.80\\) [A1][A1][A1]　（asin(1/3) = 0.3398；π − 0.3398 = 2.8018）",
            "<b>x = 0, 0.340, 2.80, π, 2π</b>　（Interval 兩端 0 同 2π 都包！）[A1]",
          ]],
          ["table", ["題目講…", "即係…"], [
            ["“find the exact value”", "特別角 / identity，唔用 GDC"],
            ["“show that … hence solve …”", "(a) 用 identity 代入；(b) 用 (a) 結果變 quadratic"],
            ["“solve … for \\(0\\le x\\le2\\pi\\)”", "逐個象限搵解，數清楚個數"],
            ["“write down the period / amplitude”", "讀參數 |a|, \\(\\frac{2\\pi}b\\)"],
            ["“find when the height is …”", "畫圖 + intersect，radian mode，3 s.f."],
          ]],
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Mode 錯 (degrees ↔ radians)", "每題開始前檢查"],
            ["2", "漏解", "用單位圓 / 對稱逐個象限檢查；延伸 interval"],
            ["3", "cos 2x 選錯形式", "睇同題有 sin 定 cos 決定"],
            ["4", "Period 公式錯", "\\(\\frac{2\\pi}b\\)（tan 係 \\(\\frac\\pi b\\)）"],
            ["5", "象限符號錯", "CAST + 參考角"],
            ["6", "Exact 題用小數", "留 √、π 分數"],
            ["7", "\\(\\sin(b(x-c))\\) 冇提 b", "先因式分解，再讀 c"],
            ["8", "Show that 倒推", "由一邊推去另一邊，寫晒每步"],
            ["9", "唔包 interval 端點", "檢查 0 同 2π 是否解"],
            ["10", "\\(\\sin^2x\\) 同 \\(\\sin x^2\\) 混淆", "\\(\\sin^2x=(\\sin x)^2\\)"],
          ]],
          ["check", [
            "背熟 0, π/6, π/4, π/3, π/2 嘅 sin, cos, tan 同 CAST",
            "已知一個 ratio + 象限，求其他 ratio / double angle",
            "識用 identity 變 quadratic 並因式分解",
            "讀 a, b, c, d，寫 period / range，並從 context 建立模型",
            "解 sin 2x = k，確保所有解喺 interval 入面",
            "P2 用 GDC（radians）逐個交點，3 s.f.",
          ]],
        ],
      },
    ],
    summary: [
      "cos 橫 sin 縱，tan 係 sin 除 cos",
      "sin 平方加 cos 平方等於一",
      "sin 二倍：二 sin cos；cos 二倍睇題揀款",
      "全 sin tan cos，逆時針",
      "週期 2π 除 b，tan 係 π 除 b",
      "最高 d 加 |a|，最低 d 減 |a|",
      "求主值、用對稱、逐個檢查 interval",
      "先睇 mode，再落筆",
    ],
    practice: [
      { q: "The exact value of \\(\\cos\\frac\\pi6\\) is:", o: ["A. \\(\\frac12\\)", "B. \\(\\frac{\\sqrt2}2\\)", "C. \\(\\frac{\\sqrt3}2\\)", "D. \\(\\sqrt3\\)"], m: 1, a: "<b>C</b>. cos 30° = √3/2." },
      { q: "The period of \\(y=3\\sin(4x)+1\\) is:", o: ["A. \\(4\\pi\\)", "B. \\(\\frac\\pi2\\)", "C. \\(\\frac\\pi4\\)", "D. \\(2\\pi\\)"], m: 1, a: "<b>B</b>. 2π/4 = π/2." },
      { q: "The range of \\(f(x)=2\\sin x-3\\) is:", o: ["A. \\(-5\\le f\\le-1\\)", "B. \\(-1\\le f\\le5\\)", "C. \\(-3\\le f\\le2\\)", "D. \\(-2\\le f\\le2\\)"], m: 1, a: "<b>A</b>. −3 ± 2 → −5 to −1." },
      { q: "\\(\\sin\\theta=\\frac35\\) and θ is obtuse. Then \\(\\cos\\theta=\\)", o: ["A. \\(\\frac45\\)", "B. \\(-\\frac45\\)", "C. \\(\\frac35\\)", "D. \\(-\\frac35\\)"], m: 1, a: "<b>B</b>. cos² = 16/25; Q2 → cos negative: −4/5." },
      { q: "Given \\(\\sin\\theta=\\frac35\\) and \\(\\frac\\pi2<\\theta<\\pi\\), find the exact values of (a) cos θ; (b) sin 2θ.", m: 4, a: "(a) \\(\\cos^2\\theta=1-\\frac9{25}=\\frac{16}{25}\\) [M1]; Q2 → <b>\\(-\\frac45\\)</b> [A1]. (b) \\(2\\times\\frac35\\times(-\\frac45)\\) [M1] = <b>\\(-\\frac{24}{25}\\)</b> [A1]." },
      { q: "Solve \\(2\\cos x=1\\) for \\(0\\le x\\le2\\pi\\).", m: 3, a: "\\(\\cos x=\\frac12\\) [M1]; <b>\\(x=\\frac\\pi3\\)</b> [A1], <b>\\(x=\\frac{5\\pi}3\\)</b> [A1]." },
      { q: "Solve \\(2\\sin^2x-\\sin x-1=0\\) for \\(0\\le x\\le2\\pi\\).", m: 5, a: "\\((2\\sin x+1)(\\sin x-1)=0\\) [M1][A1]. \\(\\sin x=1\\) → \\(x=\\frac\\pi2\\) [A1]. \\(\\sin x=-\\frac12\\) → \\(x=\\frac{7\\pi}6,\\ \\frac{11\\pi}6\\) [A1][A1]." },
      { q: "Solve \\(\\sqrt2\\sin2x=1\\) for \\(0\\le x\\le\\pi\\).", m: 4, a: "\\(\\sin2x=\\frac1{\\sqrt2}\\); \\(0\\le2x\\le2\\pi\\) [M1]. \\(2x=\\frac\\pi4,\\frac{3\\pi}4\\) [A1] → <b>\\(x=\\frac\\pi8,\\ \\frac{3\\pi}8\\)</b> [A1][A1]." },
      { q: "Show that \\(\\frac{1-\\cos2\\theta}{\\sin2\\theta}=\\tan\\theta\\).", m: 4, a: "\\(\\frac{1-(1-2\\sin^2\\theta)}{2\\sin\\theta\\cos\\theta}\\) [M1][A1] \\(=\\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}\\) [A1] \\(=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta\\) [A1]." },
      { q: "(P2) The height of a Ferris wheel seat is \\(h(t)=20-18\\cos\\left(\\frac{\\pi t}{15}\\right)\\) metres, t minutes. Find (a) the maximum height; (b) the period; (c) the first time the seat is at 30 m.", m: 5, a: "(a) 20 + 18 = <b>38 m</b> [A1]. (b) \\(\\frac{2\\pi}{\\pi/15}=\\) <b>30 min</b> [A1]. (c) Solve \\(20-18\\cos(\\frac{\\pi t}{15})=30\\) → \\(\\cos(\\dots)=-\\frac59\\) [M1]; GDC in radians → <b>t = 10.3 min</b> (check: acos(−0.556) = 2.157; ×15/π = 10.3) [A1][A1]." },
    ],
  },
  "math-9": {
    title: "Sampling · Averages & spread · Diagrams · Correlation & regression",
    intro: "Statistics 統計：一份 data，永遠做四件事 —— 抽樣、描述、比較、預測。大部分計算用 GDC，攞分靠識揀 σx、識解讀同寫啱字眼。",
    parts: [
      {
        h: "Big picture 統計四步",
        min: 2,
        blocks: [
          ["note", "<b>常考 Perennial favourites</b>：(1) outlier “show that” (2–3 marks)；(2) grouped mean / σ with GDC then cumulative-frequency median (4–6)；(3) r + regression line, interpret, “comment on reliability” (4–6)；(4) stratified sample size (2)；(5) effect of × a and + b on mean and σ (MCQ)。Command terms: <b>find / calculate</b> = numerical answer; <b>show that</b> = full working to a given value; <b>estimate</b> = approximate (grouped data or reading a graph); <b>interpret / comment</b> = a sentence in context; <b>explain</b> = reason with a link."],
          ["rhyme", "口訣", "抽、描、比、估", "Sample it → Describe it (centre + spread) → Compare it (box plots / cf) → Predict from it (regression). Every Topic-4 statistics question is one of these four."],
          ["flow", [["① 抽 Sample", "Method? Biased? Stratified size = 組 ÷ 總數 × n"], ["② 描 Describe", "GDC 1-Var Stats → x̄, σx, Q₁, med, Q₃. Outlier fences."], ["③ 比 Compare", "One centre + one spread, in context. Outlier → median + IQR."], ["④ 估 Predict", "r (3 樣) → y on x or x on y → inside range only."]]],
          ["key", "<b>Exam rule</b>：Paper 1 要手算（小數據、圖讀數）；Paper 2 靠 GDC。兩種都要<b>寫出式 / 比較 / 單位</b>先有 method mark。Answers 3 s.f. 除非題目另有指示。"],
        ],
      },
      {
        h: "口訣 + 公式一頁過",
        min: 2,
        blocks: [
          ["grid", [
            ["4.1", "人口係全部，樣本係一撮", "Population = whole group; sample = part of it"],
            ["4.1", "數得 discrete，量度 continuous", "Count → discrete; measure → continuous"],
            ["4.1", "分層按比例又隨機；配額按比例唔隨機", "Stratified = proportional + random; quota = proportional + non-random"],
            ["4.1", "隔 k 個揀一個", "Systematic: every k = N ÷ n th, random start"],
            ["4.2", "密度 = 頻數 ÷ 組距，面積先係頻數", "Histogram: frequency density = f ÷ class width"],
            ["4.2", "cf 畫喺上界，中位數讀 n/2", "Plot at upper boundary; Q₁ n/4, median n/2, Q₃ 3n/4"],
            ["4.3", "Q₃ + 1.5 IQR 以上、Q₁ − 1.5 IQR 以下就係 outlier", "Outlier test: compare with the fence and WRITE the comparison"],
            ["4.3", "分組用組中點，答案係 estimate", "Grouped data: mid-interval values → estimated mean"],
            ["4.3", "GDC 抄 σx，唔抄 sx", "Population standard deviation σx"],
            ["4.3", "加數只郁中心，乘數連 spread 一齊郁", "x → ax + b: mean a·x̄ + b, σ → |a|σ, variance → a²σ²"],
            ["4.3", "有 outlier 用 median + IQR", "Resistant measures when outliers/skew"],
            ["4.4", "r 講三樣：強弱、正負、linear", "strong/moderate/weak + positive/negative + linear"],
            ["4.4", "r 係 −1 至 1，唔係 causation", "Correlation does not imply causation"],
            ["4.4 / 4.10", "估 y 用 y on x，估 x 用 x on y", "Never rearrange y on x to find x"],
            ["4.4", "範圍內 interpolation，範圍外 extrapolation", "Extrapolation = unreliable"],
            ["4.4", "兩條線都過 (x̄, ȳ)", "Both regression lines pass through the mean point"],
          ]],
          ["table", ["Item", "Formula / value", "Note"], [
            ["Mean", "\\(\\bar x = \\dfrac{\\sum f x}{n}\\), n = ∑f", "Grouped: x = mid-interval value"],
            ["Range", "max − min", "Affected by outliers"],
            ["IQR", "Q₃ − Q₁", "Middle 50% of data"],
            ["Outlier fences", "Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR", "Strictly beyond the fence = outlier"],
            ["Variance", "σ²", "σ from GDC, then square"],
            ["Class width", "upper boundary − lower boundary", "Frequency density = f ÷ width"],
            ["Linear change", "mean, median, mode, σ, IQR, range", "see 線性變換 part"],
            ["Regression y on x", "y = ax + b (GDC LinReg)", "a = gradient, b = y-intercept"],
            ["Regression x on y", "x = cy + d (swap the lists!)", "Use to predict x"],
          ]],
        ],
      },
      {
        h: "Sampling & data 抽樣",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Population:</b> the whole group that is being studied. <b>Sample:</b> a selection of members taken from the population. <b>Census:</b> every member of the population is surveyed.<br><b>Discrete data:</b> can only take separate (countable) values, e.g. number of siblings. <b>Continuous data:</b> can take any value in a range, usually measured, e.g. height, time.<br><b>Simple random sample:</b> every member of the population (and every possible sample of that size) has an equal chance of being selected.<br><b>Systematic:</b> members are chosen at regular intervals from an ordered list, e.g. every kth person after a random start. <b>Convenience:</b> members are chosen because they are easy to reach. <b>Stratified:</b> the population is divided into groups (strata), and a random sample is taken from each stratum in proportion to its size. <b>Quota:</b> as stratified, but the interviewer chooses members non-randomly until each quota is filled.<br><b>Bias:</b> the sample is not representative of the population, so results are systematically wrong. <b>Reliable:</b> repeated sampling gives similar results (a larger sample is more reliable)."],
          ["table", ["Method", "點做", "Advantage", "Disadvantage"], [
            ["Simple random", "Random numbers / draw names", "Unbiased, every member equal chance", "Needs a full list; may miss small groups"],
            ["Systematic", "Every k-th (k = N ÷ n)", "Quick, spread evenly", "Bias if list has a pattern"],
            ["Stratified", "Groups, random inside, proportional", "Represents every group", "Needs group info; more work"],
            ["Quota", "Groups, proportional, non-random", "Quick, no list needed", "Interviewer bias, not random"],
            ["Convenience", "Easiest people", "Cheap and fast", "Very likely biased"],
          ]],
          ["eg", "<b>P1 · 3 marks</b>　A school has 240 Year 11 and 360 Year 12 students. A stratified sample of 40 is needed. How many from each year?", [
            "Total = 240 + 360 = 600",
            "Year 11：240 ÷ 600 × 40 = <b>16</b>",
            "Year 12：360 ÷ 600 × 40 = <b>24</b>　(check 16 + 24 = 40 ✅)",
            "Inside each year choose the students <b>at random</b> (that is what makes it stratified, not quota).",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　Describe how to take: A systematic sample of 25 is needed from a list of 400 people. Describe how.", [
            "k = 400 ÷ 25 = <b>16</b>",
            "Pick a random starting number from 1 to 16, then take every 16th person on the list ✅",
          ]],
          ["note", "<b>Evaluation phrases</b>：“The sample is <b>not representative</b> because …”；“self-selected / non-response bias”；“a <b>larger sample</b> gives more reliable results”；“<b>random</b> selection removes selection bias”。"],
        ],
      },
      {
        h: "Averages & spread 平均同離散",
        min: 4,
        blocks: [
          ["key", "Mean \\(\\bar x = \\frac{\\sum fx}{n}\\)　　IQR = Q₃ − Q₁　　Range = max − min　　variance = σ²<br><b>Median position</b>：(n+1)/2 th value。<b>Modal class</b> = class with the highest frequency (grouped data)。"],
          ["eg", "<b>P1 · 5 marks</b>　For 2, 4, 5, 7, 8, 9, 12, 15, 30: find the median, Q₁, Q₃, IQR, and test for outliers.", [
            "n = 9 → median = 5th value = <b>8</b>",
            "Lower half (2, 4, 5, 7) → Q₁ = (4 + 5) ÷ 2 = <b>4.5</b>；upper half (9, 12, 15, 30) → Q₃ = (12 + 15) ÷ 2 = <b>13.5</b>　(GDC gives the same)",
            "IQR = 13.5 − 4.5 = <b>9</b>",
            "Upper fence = 13.5 + 1.5(9) = <b>27</b>；lower fence = 4.5 − 13.5 = −9",
            "30 &gt; 27, so <b>30 is an outlier</b>；nothing is below −9. ✅ (一定要寫出比較)",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Calculate: Frequency table → GDC. Scores x: 1, 2, 3, 4, 5 with frequencies 3, 5, 8, 6, 3. Find x̄ and σ.", [
            "n = 3 + 5 + 8 + 6 + 3 = 25；∑fx = 3 + 10 + 24 + 24 + 15 = 76",
            "x̄ = 76 ÷ 25 = <b>3.04</b>",
            "∑fx² = 3 + 20 + 72 + 96 + 75 = 266 → σ² = 266 ÷ 25 − 3.04² = 10.64 − 9.2416 = 1.3984 → σ = <b>1.18</b>",
            "GDC：L1 = x, L2 = f → 1-Var Stats (L1, L2) → read x̄ and <b>σx</b> ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　Grouped data. Time t (min): 0≤t&lt;10 (4), 10≤t&lt;20 (9), 20≤t&lt;30 (12), 30≤t&lt;40 (5). Estimate the mean and standard deviation.", [
            "Mid-values 5, 15, 25, 35 with f = 4, 9, 12, 5；n = 30",
            "∑fx = 20 + 135 + 300 + 175 = 630 → x̄ = 630 ÷ 30 = <b>21</b>",
            "∑fx² = 100 + 2025 + 7500 + 6125 = 15750 → σ² = 525 − 441 = 84 → σ = <b>9.17</b>",
            "Modal class = 20 ≤ t &lt; 30。Say “estimate” because actual values are unknown ✅",
          ]],
          ["table", ["Situation", "Better measure", "Why (write this)"], [
            ["Symmetric, no outliers", "Mean + σ", "Uses every value"],
            ["Skewed / has outliers", "Median + IQR", "Not affected by extreme values (resistant)"],
            ["Compare consistency", "Smaller σ or IQR", "Data less spread out = more consistent"],
            ["Categorical / most popular", "Mode / modal class", "Most frequent"],
          ]],
          ["note", "<b>GDC tips</b>：<b>TI-84</b> STAT → Edit (L1 data, L2 frequency) → STAT → CALC → 1-Var Stats (List L1, FreqList L2) → x̄, <b>σx</b>, n, Q₁, Med, Q₃. <b>Casio</b> MENU → STATISTICS → enter lists → CALC → SET (1Var XList, 1Var Freq) → 1-VAR → x̄, <b>σx</b>, Q₁, Med, Q₃. Grouped data: type mid-values as x. Make sure the Freq list is switched on, or the GDC treats every value once."],
        ],
      },
      {
        h: "Diagrams 圖表 histogram · cf · box plot",
        min: 4,
        blocks: [
          ["table", ["Diagram", "How to draw / read", "Marks-earning detail"], [
            ["Histogram", "Continuous data, bars touch, x-axis = class intervals. Height = frequency density = f ÷ class width", "Unequal class widths → <b>area</b> (not height) is proportional to frequency"],
            ["Cumulative frequency", "Points at (upper class boundary, cf), start at (lowest boundary, 0), smooth curve", "Median: n/2；Q₁: n/4；Q₃: 3n/4；k-th percentile: kn/100. Draw read-off lines"],
            ["Box-and-whisker", "Min, Q₁, median, Q₃, max on a number line", "Outliers plotted as × and whiskers end at the largest/smallest non-outlier"],
            ["Stem-and-leaf / frequency", "Ordered data kept in the diagram", "Give a key (e.g. 3 | 4 = 34)"],
          ]],
          ["eg", "<b>P1 · 5 marks</b>　Cumulative frequency for the grouped data above (n = 30). Estimate the median, Q₁, Q₃, IQR and how many scored 30 or more.", [
            "Upper boundaries and cf：10 → 4；20 → 13；30 → 25；40 → 30",
            "Median at n/2 = 15 → in class 20–30：20 + (15 − 13) ÷ 12 × 10 ≈ <b>21.7</b>",
            "Q₁ at 7.5：10 + (7.5 − 4) ÷ 9 × 10 ≈ <b>13.9</b>；Q₃ at 22.5：20 + (22.5 − 13) ÷ 12 × 10 ≈ <b>27.9</b>",
            "IQR ≈ 27.9 − 13.9 = <b>14.0</b>",
            "Fewer than 30 = 25 → 30 or more = 30 − 25 = <b>5</b> ✅ (“多過” 要用總數減 cf)",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Histogram: class 0–10 has f = 8, class 10–30 has f = 30. Find the frequency densities.", [
            "0–10：width 10 → 8 ÷ 10 = <b>0.8</b>",
            "10–30：width 20 → 30 ÷ 20 = <b>1.5</b>　(not 30!)",
            "Check area (= frequency): 10 × 0.8 = 8 ✅，20 × 1.5 = 30 ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Compare two box plots. A: min 12, Q₁ 20, med 25, Q₃ 30, max 41. B: min 8, Q₁ 18, med 22, Q₃ 33, max 45.", [
            "Centre：median A (25) &gt; median B (22) → A typically higher scores.",
            "Spread：IQR A = 10, IQR B = 15 → <b>A is more consistent</b> (less spread).",
            "Range A = 29, B = 37. Write one statement about centre <b>and</b> one about spread, <b>in context</b> ✅",
          ]],
          ["trap", ["“Box plot 嘅鬚” 唔好畫到 outlier；outlier 用 × 另外標。", "Cumulative frequency 用 upper boundary，唔係 mid-point。", "“How many more than 25” = n − cf(25)，唔係直接讀 cf。"]],
        ],
      },
      {
        h: "線性變換 + 缺失數據",
        min: 2,
        blocks: [
          ["table", ["Transformation x → ax + b", "Mean / median / mode", "σ, IQR, range", "Variance"], [
            ["+ b (shift)", "+ b", "unchanged", "unchanged"],
            ["× a (scale)", "× a", "× |a|", "× a²"],
            ["ax + b", "a·x̄ + b", "|a|σ", "a²σ²"],
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Heights have mean 170 cm and σ = 8 cm. (a) Convert to metres. (b) Everyone then stands on a 5 cm box (cm). Find the new mean and σ in cm.", [
            "(a) × 0.01：mean <b>1.70 m</b>，σ <b>0.08 m</b>",
            "(b) +5 on the original cm values：mean <b>175 cm</b>，σ stays <b>8 cm</b> (shift never changes spread) ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Mean of 6 numbers is 14.5. A 7th number is added and the mean becomes 15. Find the 7th number.", [
            "Total of 6 = 6 × 14.5 = 87；total of 7 = 7 × 15 = 105",
            "7th number = 105 − 87 = <b>18</b> ✅　(用 total，唔好用 mean 加減)",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　The numbers 3, 5, 6, 8, x have mean 6. Find x.", ["(3 + 5 + 6 + 8 + x) ÷ 5 = 6 → 22 + x = 30 → <b>x = 8</b> ✅"]],
        ],
      },
      {
        h: "Correlation & regression 相關同回歸",
        min: 4,
        blocks: [
          ["note", "<b>Definitions</b><br><b>Pearson's product-moment correlation coefficient r:</b> measures the strength and direction of the <b>linear</b> relationship between two variables, −1 ≤ r ≤ 1. <b>Regression line of y on x:</b> the line y = ax + b that best fits the data, used to estimate y from a given x (least-squares, minimises the vertical distances). <b>Interpolation:</b> estimate inside the range of the data (reasonably reliable). <b>Extrapolation:</b> estimate outside the range (unreliable). <b>Dependent variable:</b> the one you want to predict."],
          ["table", ["r", "Describe (always 3 things)"], [
            ["r = 1 / −1", "perfect positive / negative linear correlation"],
            ["about 0.75 to 1 (or −0.75 to −1)", "strong positive (negative) linear correlation"],
            ["about 0.25 to 0.75 (abs)", "moderate / weak positive (negative) linear correlation"],
            ["close to 0", "no (very weak) linear correlation — but there might still be a non-linear relationship"],
          ]],
          ["note", "IB gives no official cut-offs: choose a word that fits the size of |r| and always add <b>linear</b> and <b>positive/negative</b>."],
          ["eg", "<b>P2 · 6 marks</b>　x: 1, 2, 3, 4, 5, 6 and y: 12, 15, 19, 20, 26, 27. Find r, the regression line of y on x, and estimate y when x = 4. Then find the x on y line and estimate x when y = 20.", [
            "GDC：2-Var Stats / LinReg(ax+b) with Xlist = L1, Ylist = L2 → <b>r = 0.985</b>，<b>y = 3.11x + 8.93</b>",
            "Describe：very strong positive linear correlation",
            "x = 4 (inside 1 ≤ x ≤ 6, interpolation)：y = 3.1143(4) + 8.933 = <b>21.4</b>",
            "To estimate x: <b>swap the lists</b> (Xlist = L2, Ylist = L1) → <b>x = 0.312y − 2.68</b>",
            "y = 20：x = 0.31173(20) − 2.6826 = <b>3.55</b> ✅",
            "Check: both lines pass through the mean point (3.5, 19.8)",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　The line is y = 4.38x + 36.0 (r = 0.996) for 2 ≤ x ≤ 10 hours of revision, y = score. Interpret the gradient and comment on x = 20.", [
            "Gradient 4.38：each <b>extra hour of revision</b> is associated with an <b>average increase of 4.38 marks</b>",
            "Intercept 36.0：predicted score with 0 hours (only meaningful if 0 is near the data)",
            "x = 20 is outside 2–10 → <b>extrapolation, not reliable</b> ✅ (also: score cannot exceed 100)",
          ]],
          ["note", "<b>GDC tips</b>：<b>TI-84</b> turn on <b>DiagnosticOn</b> (2nd 0 CATALOG) or r will not appear. STAT → CALC → 4:LinReg(ax+b) L1, L2 → a, b, r. <b>Casio</b> MENU → STATISTICS → enter x, y → CALC → REG → X → a, b, r. For x on y: put y data in the X list and x data in the Y list. Write the equation as “y = …” using <b>3 s.f.</b> and do <b>not</b> use the rounded line to calculate (store the unrounded a and b)."],
          ["trap", ["Correlation ≠ causation：唔好寫 “revision causes higher scores”，寫 “is associated with”。", "r 近 0 只代表冇 <b>linear</b> 關係。", "估 x 要用 x on y，唔可以將 y on x 移項。"]],
        ],
      },
      {
        h: "Long question 拆題法",
        min: 2.5,
        blocks: [
          ["flow", [["① 圈關鍵字", "estimate / hence / show that / in context / 3 s.f."], ["② 揀 GDC 或手算", "有 frequency table → lists + Freq；Paper 1 → formula"], ["③ 寫 working", "式 → 代入 → 答案 → 單位"], ["④ 解讀", "一句 context 句子 (centre/spread/reliability)"]]],
          ["eg", "<b>P2 · 7 marks (long)</b>　A teacher records marks of 30 students (the grouped data above: mean 21, σ = 9.17). (a) Marks are scaled by × 2.5 to give percentages: find the new mean and σ. (b) A student scored 52% — is this unusually high? Use the scaled values. (c) The teacher wants to predict a student's final mark from the mark in a mock test with the regression line y = 0.8x + 6 (10 ≤ x ≤ 40). Predict y for x = 25 and comment on x = 60.", [
            "(a) mean = 2.5 × 21 = <b>52.5%</b>；σ = 2.5 × 9.17 = <b>22.9%</b> (variance × 6.25)",
            "(b) 52 is within 1σ of 52.5 → <b>not unusual</b> (near the mean)",
            "(c) y = 0.8(25) + 6 = <b>26</b> (interpolation)",
            "x = 60 is outside 10–40 → <b>extrapolation</b>, the linear model may not hold so the prediction is unreliable ✅",
          ]],
          ["table", ["If the question says…", "It wants…"], [
            ["“Show that … is an outlier”", "Compute fence, then write “value > fence”"],
            ["“Estimate the mean”", "Mid-values × frequencies ÷ n"],
            ["“Hence”", "Use the previous answer (often r or the line)"],
            ["“Comment / interpret”", "A sentence in context, not only a number"],
            ["“Explain why unreliable”", "Extrapolation; small sample; non-random method"],
            ["“Compare the distributions”", "One centre + one spread, both in context"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Calculate", "用 GDC 讀出，列出所用統計量"],
            ["Comment on", "必須指出趨勢同情境意義"],
            ["Interpret", "用情境語言解釋斜率 / 截距"],
            ["Estimate", "在 data range 內預測；範圍外要話 unreliable"],
            ["Describe", "一般性描述，包括強弱同方向"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Mean、median、IQR：由表或 GDC 讀出<br>• Box plot：五數概括；outlier 用 1.5×IQR 判斷<br>• 相關：r 描述強弱同方向，再用回歸線預測<br>• 線性變換：mean、SD 隨 \\(ax+b\\) 變<br>• 抽樣：描述方法同 bias"],
          ["trap", [
            "r 當成因果關係",
            "Extrapolation 仍然話可靠",
            "Outlier 判斷用錯公式",
            "Mean、SD 變換時，SD 唔受加減影響",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 regression y on x、r 嘅定義、outlier 判斷同 Q 公式。Interpretation 題至少 1 分係 “in context”。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["table", ["Mistake 錯", "Fix 啱"], [
            ["Copy sx instead of σx from the GDC", "Always use σx (population)"],
            ["Forget the Freq list in 1-Var Stats", "Set the FreqList / 1Var Freq"],
            ["Outlier claimed with no working", "Write fence value and “value > fence”"],
            ["Plot cf at mid-points", "Plot at upper class boundary"],
            ["Read cf directly for “more than”", "Total − cf"],
            ["Histogram height = frequency (unequal widths)", "Height = frequency ÷ class width"],
            ["Variance changes when you add a constant", "Only multiplying changes spread; variance × a²"],
            ["Forget to square a when finding variance", "σ → |a|σ but variance → a²σ²"],
            ["Use y on x to estimate x", "Use the x on y line (swap the lists)"],
            ["Describe r as only “strong”", "Strong + positive/negative + linear"],
            ["Say “causes”", "Say “is associated with”"],
            ["Predict outside the data range", "Say extrapolation = unreliable"],
            ["Call a quota sample random", "Quota is non-random"],
            ["Grouped mean given as exact", "Say “estimate”"],
          ]],
          ["check", ["I can state the 5 sampling methods and get a stratified sample size", "I can find Q₁, Q₃, IQR and prove an outlier with the fence", "I can use 1-Var Stats with a Freq list and read σx", "I can estimate mean and σ of grouped data", "I can read median/quartiles/percentiles from a cf curve", "I can find frequency density and compare two box plots", "I know what + b and × a do to mean, σ, variance", "I can find r and both regression lines on my GDC", "I can interpret gradient and decide interpolation vs extrapolation"]],
        ],
      },
    ],
    summary: [
      "抽、描、比、估：每題四步之一",
      "Stratified = 比例 + 隨機；quota = 比例 + 唔隨機",
      "Outlier：Q₁ − 1.5 IQR / Q₃ + 1.5 IQR，寫出比較",
      "GDC 抄 σx，frequency list 記得開",
      "加數只郁中心，乘數連 spread 一齊郁，variance × a²",
      "cf 畫上界；median n/2；「多過」用總數減",
      "密度 = 頻數 ÷ 組距；面積 = 頻數",
      "r 講三樣：強弱、正負、linear；唔係 causation",
      "估 y 用 y on x，估 x 用 x on y；範圍外 = extrapolation",
    ],
    practice: [
      { q: "S4.3 For a data set Q₁ = 40 and Q₃ = 52. Which value is an outlier?", o: ["A. 70", "B. 71", "C. 22", "D. 25"], m: 1, a: "<b>B</b>. IQR = 12, upper fence = 52 + 18 = 70, lower fence = 40 − 18 = 22. Outlier must be strictly beyond a fence: 71 &gt; 70. 70 and 22 are on the fence, 25 is inside." },
      { q: "S4.3 A data set has mean 8 and standard deviation 3. Each value is replaced by 2x − 5. What is the new variance?", o: ["A. 9", "B. 18", "C. 36", "D. 31"], m: 1, a: "<b>C</b>. New σ = 2 × 3 = 6 (the −5 does not change spread) → variance = 6² = 36. (New mean = 11.)" },
      { q: "S4.1 There are 150 boys and 100 girls in a year group. A stratified sample of 50 is taken. How many boys are in the sample?", o: ["A. 20", "B. 25", "C. 30", "D. 33"], m: 1, a: "<b>C</b>. 150 ÷ 250 × 50 = 30 boys (20 girls)." },
      { q: "S4.4 The correlation coefficient between two variables is r = −0.92. Which description is best?", o: ["A. strong positive linear", "B. strong negative linear", "C. weak negative linear", "D. no relationship"], m: 1, a: "<b>B</b>. |r| close to 1 = strong; sign negative; always linear." },
      { q: "The mean of 6 numbers is 14.5. A seventh number is added and the mean becomes 15. Find the seventh number.", m: 3, a: "Total 6 numbers = 87 [M1]; total 7 numbers = 105 [M1]; seventh = 105 − 87 = <b>18</b> [A1]." },
      { q: "For the data 2, 4, 5, 7, 8, 9, 12, 15, 30: (a) find the median and the interquartile range; (b) show that 30 is an outlier.", m: 6, a: "(a) median = <b>8</b> [A1]; Q₁ = 4.5, Q₃ = 13.5 [A1][A1]; IQR = <b>9</b> [A1]. (b) upper fence 13.5 + 1.5(9) = 27 [M1]; 30 &gt; 27 so it is an outlier [R1]. (Total 6.)" },
      { q: "The table shows the ages of 50 customers: 10≤x&lt;20 (6), 20≤x&lt;30 (14), 30≤x&lt;40 (18), 40≤x&lt;50 (12). (a) Estimate the mean and standard deviation. (b) Construct the cumulative frequencies and estimate the median.", m: 6, a: "(a) mid-values 15, 25, 35, 45 [M1]; ∑fx = 1610 → mean = <b>32.2</b> [A1]; σ = <b>9.60</b> [A2] (σ² = 1129 − 32.2² = 92.16). (b) cf: 6, 20, 38, 50 [A1]; median at 25 → 30 + (25 − 20) ÷ 18 × 10 ≈ <b>32.8</b> [A1] (graph reading about 33 accepted)." },
      { q: "In a survey, temperature x (°C, 15 ≤ x ≤ 35) and ice-cream sales y per day give r = 0.94 and the regression line y = 12.4x − 85. (a) Describe the correlation. (b) Interpret the gradient. (c) Estimate y when x = 30. (d) Explain why the line is not suitable when x = 5. (e) Explain why you cannot use this line to estimate the temperature when sales are 200.", m: 6, a: "(a) <b>strong positive linear</b> correlation [A1]. (b) for each 1 °C increase, sales are predicted to rise by <b>12.4</b> on average [A1]. (c) 12.4(30) − 85 = <b>287</b> [M1][A1]. (d) 5 is outside 15–35: <b>extrapolation</b>, unreliable (also gives negative sales) [R1]. (e) need the regression line of <b>x on y</b>, because y on x minimises errors in y, not x [R1]." },
      { q: "Heights have mean 170 cm, σ = 8 cm. (a) Give the mean and σ in metres. (b) A new data set is formed by adding 5 cm to every height. Write the new mean and variance in cm.", m: 3, a: "(a) mean <b>1.70 m</b>, σ <b>0.08 m</b> [A1][A1]. (b) mean 175 cm; variance unchanged = 8² = <b>64</b> [A1]." },
      { q: "A school has 480 students: 192 in Year 11 and 288 in Year 12. (a) Find the number from each year in a stratified sample of 60. (b) Give one reason why this is better than a convenience sample.", m: 4, a: "(a) 192 ÷ 480 × 60 = <b>24</b> [A1]; 288 ÷ 480 × 60 = <b>36</b> [A1]. (b) each year is represented in proportion to its size [R1] and members are chosen at random so less bias [R1]." },
      { q: "Box plots of two classes: A has min 12, Q₁ 20, median 25, Q₃ 30, max 41; B has min 8, Q₁ 18, median 22, Q₃ 33, max 45. Compare the two classes.", m: 3, a: "A has the higher median (25 &gt; 22), so a typical student in A scores higher [R1]. IQR of A = 10 &lt; IQR of B = 15 [A1], so A is more consistent / less spread [R1]." },
      { q: "x: 1, 2, 3, 4, 5, 6 and y: 12, 15, 19, 20, 26, 27. Use your GDC to find (a) r, (b) the regression line of y on x, (c) the estimate of y when x = 4.", m: 4, a: "(a) <b>r = 0.985</b> [A1]. (b) <b>y = 3.11x + 8.93</b> [A1][A1]. (c) y = 21.4 [A1] (interpolation: 4 is inside 1–6)." },
    ],
  },
  "math-10": {
    title: "Probability rules · Venn · Tree diagrams · Conditional & independent events",
    intro: "Probability 每題都係：畫圖（Venn / tree / grid）+ 一條公式。識揀圖、識寫 conditional，就穩攞分。",
    parts: [
      {
        h: "Big picture 揀圖 + 公式",
        min: 1.5,
        blocks: [
          ["rhyme", "口訣", "先畫圖，再填數，最後揀公式", "Draw a Venn / tree / grid FIRST, fill in every number, then read the answer off the picture. Most marks are lost by skipping the diagram."],
          ["flow", [["① 畫圖", "兩組人 → Venn；連續事件 → tree；兩粒骰 → grid"], ["② 由交集開始", "Venn: fill the intersection first, then the “only” parts, then outside"], ["③ 認字眼", "“given that / if” = conditional；“and” = ∩；“or” = ∪"], ["④ 檢查", "All probabilities sum to 1 (or total n). Answer between 0 and 1."]]],
          ["note", "<b>常考 Perennial favourites</b>：(1) Venn with unknown intersection (3–5 marks)；(2) conditional probability from a tree or Venn (“given that”)；(3) without-replacement tree (4–6)；(4) “show that A and B are independent / not independent” (2–3)；(5) “at least one” = 1 − P(none)。Command terms: <b>find / calculate</b> number; <b>show that</b> full working; <b>determine whether</b> compare two numbers then state conclusion."],
        ],
      },
      {
        h: "口訣 + 公式一頁過",
        min: 2,
        blocks: [
          ["grid", [
            ["4.5", "全部加埋係一", "Probabilities sum to 1; 0 ≤ P ≤ 1"],
            ["4.5", "冇咗就 1 減", "P(A′) = 1 − P(A)"],
            ["4.5", "「至少一個」= 1 減「一個都冇」", "P(at least one) = 1 − P(none)"],
            ["4.5", "預期次數 = n × p", "Expected number of occurrences = n P(A)"],
            ["4.6", "或就加，再減走重疊", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
            ["4.6", "互斥冇重疊", "Mutually exclusive: P(A ∩ B) = 0"],
            ["4.6", "獨立：乘得埋", "Independent: P(A ∩ B) = P(A) P(B)"],
            ["4.11", "既然 B 發生咗，分母係 B", "P(A | B) = P(A ∩ B) ÷ P(B)"],
            ["4.11", "獨立 = 知道 B 唔改變 A", "P(A | B) = P(A) = P(A | B′)"],
            ["4.6", "互斥 ≠ 獨立", "If both have P &gt; 0, mutually exclusive events are NOT independent"],
            ["4.6", "Tree：沿枝乘，枝尾加", "Multiply along branches, add the outcomes"],
            ["4.6", "唔放回，下一格分母減一", "Without replacement: denominators fall by 1"],
            ["4.6", "Venn 由交集填起", "Fill the intersection first"],
            ["4.6", "Grid 36 格，數清楚先除", "Two dice: n(U) = 36"],
          ]],
          ["table", ["Item", "Formula", "Booklet?"], [
            ["Complement", "P(A′) = 1 − P(A)", "learn it"],
            ["Union", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "yes"],
            ["Conditional", "\\(P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}\\)", "yes"],
            ["Multiplication", "P(A ∩ B) = P(A | B) P(B)", "rearrange"],
            ["Independent", "P(A ∩ B) = P(A) P(B)", "yes"],
            ["Total probability from a tree", "P(B) = P(A)P(B|A) + P(A′)P(B|A′)", "from tree"],
            ["Expected frequency", "n × P(A)", "learn it"],
          ]],
        ],
      },
      {
        h: "Definitions + 字眼對照表",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Sample space U:</b> the set of all possible outcomes. <b>Event:</b> a subset of the sample space. <b>Complement A′:</b> the event A does not happen. <b>Mutually exclusive events:</b> events that cannot both occur at the same time, so P(A ∩ B) = 0. <b>Independent events:</b> the occurrence of one event does not affect the probability of the other, so P(A ∩ B) = P(A) × P(B). <b>Conditional probability P(A|B):</b> the probability that A occurs given that B has occurred. <b>Theoretical probability:</b> P(A) = n(A) ÷ n(U) when outcomes are equally likely. <b>Expected number of occurrences:</b> n × P(A) for n trials."],
          ["table", ["Question says…", "Means", "Use"], [
            ["“A and B”", "both", "A ∩ B (intersection)"],
            ["“A or B” / “at least one of”", "either or both", "A ∪ B (union)"],
            ["“neither”", "not A and not B", "(A ∪ B)′ = 1 − P(A ∪ B)"],
            ["“A only”", "A but not B", "P(A) − P(A ∩ B)"],
            ["“given that / if / knowing that”", "conditional", "P(A|B) = P(A ∩ B) ÷ P(B)"],
            ["“without replacement”", "dependent draws", "tree: change denominators"],
            ["“with replacement” / “independent”", "same probabilities each time", "tree: same numbers"],
            ["“at least one”", "complement is none", "1 − P(none)"],
            ["“show that … independent”", "test numerically", "compare P(A∩B) with P(A)P(B)"],
          ]],
          ["table", ["Mutually exclusive", "Independent"], [
            ["Cannot happen together: P(A ∩ B) = 0", "One does not change the other: P(A ∩ B) = P(A)P(B)"],
            ["Venn circles do not overlap", "Circles overlap by exactly P(A) × P(B)"],
            ["P(A ∪ B) = P(A) + P(B)", "P(A ∪ B) = P(A) + P(B) − P(A)P(B)"],
            ["If P(A), P(B) &gt; 0 they are NOT independent", "If P(A), P(B) &gt; 0 they are NOT mutually exclusive"],
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Find: P(A) = 0.3, P(B) = 0.5. Find P(A ∪ B) if (a) A and B are mutually exclusive; (b) A and B are independent.", [
            "(a) P(A ∪ B) = 0.3 + 0.5 = <b>0.8</b>",
            "(b) P(A ∩ B) = 0.3 × 0.5 = 0.15 → P(A ∪ B) = 0.3 + 0.5 − 0.15 = <b>0.65</b> ✅",
          ]],
        ],
      },
      {
        h: "Venn diagrams 文氏圖",
        min: 4,
        blocks: [
          ["table", ["Region", "Notation", "Probability from numbers"], [
            ["Both A and B", "A ∩ B", "centre"],
            ["A only", "A ∩ B′", "P(A) − P(A ∩ B)"],
            ["B only", "A′ ∩ B", "P(B) − P(A ∩ B)"],
            ["Neither", "(A ∪ B)′", "1 − P(A ∪ B)"],
            ["At least one", "A ∪ B", "A only + both + B only"],
          ]],
          ["eg", "<b>P1 · 5 marks</b>　In a group of 40 students, 22 play football (F), 18 play tennis (T) and 6 play neither. (a) Find the number who play both. (b) Find P(F | T). (c) Find P(T | F′).", [
            "(a) 22 + 18 − x + 6 = 40 → <b>x = 6</b> (both)；F only 16，T only 12，both 6，neither 6 (sum 40 ✅)",
            "(b) P(F|T) = 6 ÷ 18 = <b>1/3</b>　(sample space shrinks to the T circle)",
            "(c) F′ = 12 + 6 = 18 people；of them 12 play tennis → P(T|F′) = 12 ÷ 18 = <b>2/3</b> ✅",
          ]],
          ["eg", "<b>P1 · 5 marks</b>　Algebra Venn: only A = 2x, both = x, only B = x + 7, neither = 5, total 40. Find x, then P(B) and P(A | B).", [
            "2x + x + (x + 7) + 5 = 40 → 4x + 12 = 40 → <b>x = 7</b>",
            "Only A = 14，both = 7，only B = 14，neither = 5 (sum 40 ✅)",
            "P(B) = (7 + 14) ÷ 40 = <b>21/40</b>",
            "P(A|B) = 7 ÷ 21 = <b>1/3</b> ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　P(A) = 0.6, P(B) = 0.5, P(A ∪ B) = 0.8. (a) Find P(A ∩ B). (b) Determine whether A and B are independent. (c) Find P(A | B′).", [
            "(a) 0.6 + 0.5 − 0.8 = <b>0.3</b>",
            "(b) P(A)P(B) = 0.6 × 0.5 = 0.3 = P(A ∩ B) → <b>independent</b>",
            "(c) P(A ∩ B′) = 0.6 − 0.3 = 0.3；P(B′) = 0.5 → P(A|B′) = <b>0.6</b> (= P(A), consistent with independence) ✅",
          ]],
          ["note", "<b>Two sets with unknown inside Venn</b>: let the intersection = x, write the other regions in terms of x using the totals, then use the total or P(A ∪ B) to solve."],
        ],
      },
      {
        h: "Tree diagrams 樹形圖",
        min: 4,
        blocks: [
          ["key", "<b>沿枝乘、枝尾加</b>：P(path) = product along the branches；P(event) = sum of the paths in that event。Each pair of branches from one point sums to 1。"],
          ["eg", "<b>P1 · 6 marks</b>　A bag has 5 green and 3 yellow counters. Two are taken at random without replacement. Find (a) P(both green), (b) P(different colours), (c) P(at least one yellow), (d) P(first was yellow | second is green).", [
            "(a) 5/8 × 4/7 = 20/56 = <b>5/14</b>",
            "(b) GY + YG = 5/8 × 3/7 + 3/8 × 5/7 = 15/56 + 15/56 = 30/56 = <b>15/28</b>",
            "(c) 1 − P(both green) = 1 − 5/14 = <b>9/14</b>",
            "(d) P(Y then G) = 15/56；P(second green) = P(GG) + P(YG) = 20/56 + 15/56 = 35/56",
            "P(first Y | second G) = (15/56) ÷ (35/56) = <b>3/7</b> ✅　(分母係 given 嗰個事件)",
          ]],
          ["eg", "<b>P2 · 5 marks</b>　Two machines: A makes 60% of items, B makes 40%. 3% of A's items and 5% of B's items are defective. Find (a) P(defective), (b) P(item came from A | it is defective).", [
            "(a) P(A and D) = 0.6 × 0.03 = 0.018；P(B and D) = 0.4 × 0.05 = 0.020 → P(D) = <b>0.038</b>",
            "(b) P(A|D) = 0.018 ÷ 0.038 = 9/19 = <b>0.474</b> ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　P(rain) = 0.3. If it rains the bus is late with probability 0.4, otherwise 0.1. Find P(bus is late) and P(rain | late).", [
            "P(rain ∩ late) = 0.3 × 0.4 = 0.12；P(no rain ∩ late) = 0.7 × 0.1 = 0.07",
            "P(late) = 0.12 + 0.07 = <b>0.19</b>",
            "P(rain | late) = 0.12 ÷ 0.19 = 12/19 = <b>0.632</b> ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Independent trials: a player wins each game with probability 0.3. In 4 games find P(at least one win) and the expected number of wins.", [
            "P(no win in 4) = 0.7⁴ = 0.2401",
            "P(at least one) = 1 − 0.2401 = <b>0.760</b> (0.7599)",
            "Expected wins = 4 × 0.3 = <b>1.2</b> ✅",
          ]],
          ["trap", ["Without replacement：第二格分母 − 1，而且如果第一個係綠色，綠色數量都 − 1。", "「至少一個」唔好逐個加，用 1 − P(none)。", "Reverse conditional（由結果問原因）分母係 <b>total P(結果)</b>，唔係 1。"]],
        ],
      },
      {
        h: "Conditional + independence 條件同獨立",
        min: 4,
        blocks: [
          ["key", "<b>Test for independence</b>：compute P(A) × P(B) and P(A ∩ B) → equal ⇒ independent；not equal ⇒ not independent. Always <b>write the numbers and the conclusion</b>."],
          ["eg", "<b>P1 · 3 marks</b>　Show that A and B are not independent: P(A) = 0.4, P(B) = 0.35, P(A ∩ B) = 0.2.", [
            "P(A) × P(B) = 0.4 × 0.35 = 0.14 [M1]",
            "0.14 ≠ 0.2 = P(A ∩ B) [A1]",
            "So A and B are <b>not independent</b> [R1] ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　In a survey of 50: 30 like tea (T), 25 like coffee (C), 12 like both. Determine whether liking tea and liking coffee are independent.", [
            "P(T) = 30/50 = 0.6；P(C) = 25/50 = 0.5 → product = 0.30",
            "P(T ∩ C) = 12/50 = 0.24 ≠ 0.30 → <b>not independent</b> ✅",
            "Also: P(C|T) = 12/30 = 0.4 ≠ P(C) = 0.5 (same conclusion)",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　Two fair dice are rolled. Given that at least one die shows 3, find P(sum is 7). Also find P(sum ≥ 9).", [
            "At least one 3：6 + 6 − 1 = 11 outcomes",
            "Sum 7 with a 3：(3,4), (4,3) = 2 → P = <b>2/11</b>",
            "Sum ≥ 9：9 (4) + 10 (3) + 11 (2) + 12 (1) = 10 → P = 10/36 = <b>5/18</b> ✅",
          ]],
          ["table", ["Grid fact (2 dice)", "Value"], [
            ["Total outcomes", "36"],
            ["Sum 7", "6 → 1/6 (most likely)"],
            ["Sum 2 or 12", "1 each → 1/36"],
            ["Doubles", "6 → 1/6"],
            ["Sum 5 / sum 9", "4 each → 1/9"],
          ]],
          ["eg", "<b>P2 · 2 marks</b>　The probability of rain on any day is 0.15. In a 120-day season, find the expected number of rainy days. Find the probability of no rain on 3 consecutive (independent) days.", [
            "Expected = 120 × 0.15 = <b>18 days</b>",
            "0.85³ = <b>0.614</b> ✅",
          ]],
        ],
      },
      {
        h: "Long question 拆題法",
        min: 2.5,
        blocks: [
          ["eg", "<b>P2 · 9 marks (long)</b>　In a college, 60% of students take Maths (M). Of those taking Maths, 70% also take Physics (P); of those not taking Maths, 20% take Physics. (a) Draw a tree diagram. (b) Find P(M ∩ P). (c) Find P(P). (d) Given that a student takes Physics, find the probability they take Maths. (e) Determine whether M and P are independent. (f) In a random sample of 200 students, estimate how many take Physics.", [
            "(a) First branches M 0.6, M′ 0.4；then P 0.7 / P′ 0.3 after M；P 0.2 / P′ 0.8 after M′",
            "(b) 0.6 × 0.7 = <b>0.42</b>",
            "(c) 0.42 + 0.4 × 0.2 = 0.42 + 0.08 = <b>0.50</b>",
            "(d) P(M|P) = 0.42 ÷ 0.50 = <b>0.84</b>",
            "(e) P(M)P(P) = 0.6 × 0.5 = 0.30 ≠ 0.42 → <b>not independent</b> (also P(P|M) = 0.7 ≠ P(P) = 0.5)",
            "(f) 200 × 0.50 = <b>100</b> students ✅",
          ]],
          ["table", ["Step", "Do"], [
            ["1", "Draw the tree / Venn and label every branch with a probability"],
            ["2", "Write the formula you use (method mark) before substituting"],
            ["3", "Keep fractions exact until the end"],
            ["4", "“Hence” → use the previous result; “determine whether” → compare, then conclude"],
            ["5", "Check: branches sum to 1; answer 0 ≤ p ≤ 1"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find", "列式 + 答案；分數或 3 s.f."],
            ["Show that", "每步清楚，最終同所給一致"],
            ["Determine whether independent", "用公式驗證，比較 P(A∩B) 同 P(A)P(B)"],
            ["Hence", "用上一部分結果"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Venn / 表：先填交集，再補其餘<br>• 條件概率：\\(P(A|B)=\\frac{P(A\\cap B)}{P(B)}\\)<br>• Tree：沿枝相乘，不同路徑相加<br>• 獨立：\\(P(A\\cap B)=P(A)P(B)\\)<br>• 互斥：\\(P(A\\cap B)=0\\)"],
          ["trap", [
            "獨立同互斥搞亂",
            "Tree diagram 冇更新第二層條件概率",
            "Without replacement 漏改分母",
            "答案超過 1 或者負數",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 P(A∪B)、P(A|B)、獨立公式。長題先填 Venn 或 tree，已經拎方法分。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["table", ["Mistake 錯", "Fix 啱"], [
            ["Use P(A) + P(B) for “or” without subtracting the overlap", "Subtract P(A ∩ B)"],
            ["Think mutually exclusive means independent", "Exclusive ⇒ P(A∩B) = 0; independent ⇒ product"],
            ["Conditional with wrong denominator", "Divide by the probability of the GIVEN event"],
            ["Forget to reduce numbers without replacement", "Denominator and the colour count both change"],
            ["Skip the diagram", "Draw Venn / tree / grid first"],
            ["Independence “shown” with no numbers", "Write both P(A)P(B) and P(A∩B), then conclude"],
            ["“At least one” found by adding many cases", "1 − P(none)"],
            ["Probability above 1 or negative", "Check the Venn regions are ≥ 0"],
            ["Treat tree branches as adding to 1 across different levels", "Only branches from the same point sum to 1"],
            ["Round early", "Exact fractions, then 3 s.f. at the end"],
            ["P(A only) = P(A)", "Subtract the overlap"],
            ["Say “independent” because the numbers look similar", "Exact equality needed"],
          ]],
          ["check", ["I can fill a Venn diagram starting from the intersection", "I know ∩, ∪, ′ and “only” regions in words", "I can write P(A|B) with the right denominator", "I can test independence with numbers and a conclusion", "I can build a without-replacement tree", "I can go backwards on a tree (reverse conditional)", "I use 1 − P(none) for “at least one”", "I can read a 36-outcome grid", "I can compute expected frequency n × p"]],
        ],
      },
    ],
    summary: [
      "先畫圖，再填數，最後揀公式",
      "或就加再減重疊；P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      "條件：分母係 given 嗰個事件",
      "獨立：乘得埋；寫數字再下結論",
      "互斥 ≠ 獨立（兩個 P &gt; 0 就唔可以同時）",
      "Tree 沿枝乘、枝尾加；唔放回分母減一",
      "至少一個 = 1 − 一個都冇",
      "Venn 由交集填起，總數驗算",
      "預期次數 = n × p",
    ],
    practice: [
      { q: "S4.6 Events A and B are independent with P(A) = 0.3 and P(B) = 0.4. What is P(A ∪ B)?", o: ["A. 0.12", "B. 0.58", "C. 0.70", "D. 0.82"], m: 1, a: "<b>B</b>. P(A ∩ B) = 0.12; P(A ∪ B) = 0.3 + 0.4 − 0.12 = 0.58." },
      { q: "S4.6 A and B are mutually exclusive, P(A) = 0.2 and P(B) = 0.5. What is P(A ∪ B)?", o: ["A. 0.1", "B. 0.6", "C. 0.7", "D. 0.8"], m: 1, a: "<b>C</b>. P(A ∩ B) = 0 → 0.2 + 0.5 = 0.7." },
      { q: "S4.11 P(A ∩ B) = 0.12 and P(B) = 0.4. What is P(A | B)?", o: ["A. 0.048", "B. 0.28", "C. 0.3", "D. 0.52"], m: 1, a: "<b>C</b>. 0.12 ÷ 0.4 = 0.3." },
      { q: "S4.5 A fair coin is tossed 3 times. What is the probability of at least one head?", o: ["A. 1/8", "B. 3/8", "C. 1/2", "D. 7/8"], m: 1, a: "<b>D</b>. 1 − P(TTT) = 1 − (1/2)³ = 7/8." },
      { q: "Of 50 students, 30 like tea (T), 25 like coffee (C) and 12 like both. (a) Find the number who like neither. (b) Find P(C | T). (c) Determine whether T and C are independent.", m: 5, a: "(a) 30 + 25 − 12 = 43 like at least one → <b>7</b> neither [M1][A1]. (b) 12 ÷ 30 = <b>0.4</b> [A1]. (c) P(T)P(C) = 0.6 × 0.5 = 0.30 ≠ P(T ∩ C) = 0.24 [M1] → not independent [R1]." },
      { q: "A bag has 4 red and 6 white balls. Two are drawn without replacement. Find (a) P(both white), (b) P(same colour), (c) P(first is white | the balls are different colours).", m: 6, a: "(a) 6/10 × 5/9 = 30/90 = <b>1/3</b> [M1][A1]. (b) RR 4/10 × 3/9 = 12/90 plus WW 30/90 = 42/90 = <b>7/15</b> [M1][A1]. (c) P(diff) = 8/15 [A1]; P(W then R) = 24/90 = 4/15; (4/15) ÷ (8/15) = <b>1/2</b> [A1]." },
      { q: "A factory has machine A (60% of output) and machine B (40%). 3% of A's items and 5% of B's items are defective. (a) Find P(defective). (b) An item is defective: find the probability it came from A.", m: 5, a: "(a) 0.6 × 0.03 + 0.4 × 0.05 [M1][M1] = <b>0.038</b> [A1]. (b) 0.018 ÷ 0.038 [M1] = 9/19 = <b>0.474</b> [A1]." },
      { q: "P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. (a) Find P(A ∩ B). (b) Show that A and B are independent. (c) Find P(A | B′).", m: 5, a: "(a) 0.5 + 0.4 − 0.7 = <b>0.2</b> [M1][A1]. (b) 0.5 × 0.4 = 0.2 = P(A ∩ B) [M1] so independent [R1]. (c) P(A ∩ B′) = 0.3, P(B′) = 0.6 → 0.3 ÷ 0.6 = <b>0.5</b> [A1]." },
      { q: "The probability of rain on any day is 0.15. (a) In a 120-day season, how many rainy days are expected? (b) Find the probability of no rain on three consecutive days (days are independent).", m: 3, a: "(a) 120 × 0.15 = <b>18</b> [A1]. (b) 0.85³ [M1] = <b>0.614</b> [A1]." },
      { q: "Two fair dice are rolled. Given that the sum is greater than 9, find the probability that the dice show a double.", m: 3, a: "Sum &gt; 9: (4,6), (6,4), (5,5), (5,6), (6,5), (6,6) = 6 outcomes [A1]; doubles among them: (5,5), (6,6) = 2 [A1]; probability = 2/6 = <b>1/3</b> [A1]." },
      { q: "In a group of 40, 2x play only A, x play both A and B, (x + 7) play only B and 5 play neither. (a) Find x. (b) Find P(B). (c) Find P(A | B).", m: 5, a: "(a) 2x + x + x + 7 + 5 = 40 → 4x = 28 → <b>x = 7</b> [M1][A1]. (b) (7 + 14) ÷ 40 = <b>21/40</b> [A1]. (c) 7 ÷ 21 = <b>1/3</b> [M1][A1]." },
      { q: "A player wins each game with probability 0.3, independently. In 4 games find the probability of at least one win.", m: 3, a: "P(no win) = 0.7⁴ = 0.2401 [M1][A1]; at least one = 1 − 0.2401 = <b>0.760</b> [A1]." },
    ],
  },
  "math-11": {
    title: "Discrete random variables · Binomial · Normal distribution · Inverse normal",
    intro: "Distributions 分佈：每題先認出係邊種分佈，再用 GDC。識寫 X ~ B(n, p) / X ~ N(μ, σ²) 同畫 sketch 已經有分。",
    parts: [
      {
        h: "Big picture 認分佈",
        min: 1.5,
        blocks: [
          ["rhyme", "口訣", "先認分佈，再按 GDC", "Name the distribution in symbols FIRST (X ~ B(n, p) or X ~ N(μ, σ²)), then press the right GDC function. The statement itself earns a mark."],
          ["table", ["Clue in question", "Distribution", "GDC"], [
            ["table of x and P(X = x)", "Discrete random variable", "E(X) = ∑ x P(x)"],
            ["fixed n trials, success/failure, constant p", "Binomial B(n, p)", "binompdf / binomcdf"],
            ["measurement (mass, height, time), mean and σ", "Normal N(μ, σ²)", "normalcdf / invNorm"],
            ["“at least”, “at most”, “more than”", "choose cdf and adjust", "see the table below"],
          ]],
          ["note", "<b>常考 Perennial favourites</b>：(1) find k then E(X) from a table (3–4)；(2) fair game (3)；(3) binomial P(X = r), P(X ≥ r), E(X)/Var (3–5)；(4) normal probability and inverse normal in context (2–4)；(5) <b>find μ and/or σ</b> using standardisation (5–6)；(6) smallest n for a binomial inequality (4). Command terms: <b>find / calculate</b>; <b>state the distribution</b>; <b>write down</b> = no working needed; <b>sketch</b> = bell curve with μ marked and the area shaded."],
        ],
      },
      {
        h: "口訣 + 公式一頁過",
        min: 2,
        blocks: [
          ["grid", [
            ["4.7", "概率加埋係一", "∑ P(X = x) = 1"],
            ["4.7", "期望值 = 每個值乘概率再加", "E(X) = ∑ x P(X = x)"],
            ["4.7", "公平遊戲：期望收益 = 0", "Fair game: E(gain) = 0"],
            ["4.7", "收益 = 贏到 − 入場費", "Gain = prize − entry fee"],
            ["4.8", "固定次數、兩種結果、概率不變、互相獨立", "Binomial conditions"],
            ["4.8", "pdf 係「剛好」，cdf 係「最多」", "binompdf: P(X = r); binomcdf: P(X ≤ r)"],
            ["4.8", "至少 r 個 = 1 − cdf(r − 1)", "P(X ≥ r) = 1 − P(X ≤ r − 1)"],
            ["4.8", "期望 np，方差 np(1 − p)", "E(X) = np; Var(X) = np(1 − p)"],
            ["4.9", "鐘形、對稱、面積係一", "Normal: symmetric about μ, total area 1"],
            ["4.9", "連續：「剛好」概率 = 0，&lt; 同 ≤ 一樣", "P(X = a) = 0"],
            ["4.9", "68 – 95 – 99.7", "Within 1σ, 2σ, 3σ of the mean"],
            ["4.9", "invNorm 要左面積", "invNorm(area to the LEFT, μ, σ)"],
            ["4.12", "z = (x − μ) ÷ σ", "Standardise to find unknown μ or σ"],
            ["4.9", "先 sketch：μ 喺中間，影住個面積", "Sketch and shade — earns marks"],
            ["4.12", "兩個未知 → 兩條 z 方程", "Two unknowns: two equations"],
          ]],
          ["table", ["Item", "Formula / value", "Note"], [
            ["Expected value", "\\(E(X)=\\sum x\\,P(X=x)\\)", "booklet"],
            ["Binomial", "\\(P(X=r)=\\binom{n}{r}p^r(1-p)^{n-r}\\)", "booklet"],
            ["Binomial mean / variance", "np / np(1 − p)", "booklet"],
            ["Standardisation", "\\(z=\\dfrac{x-\\mu}{\\sigma}\\)", "booklet"],
            ["Normal, 1σ / 2σ / 3σ", "≈ 68% / 95% / 99.7%", "learn it"],
            ["Standard normal Z", "Z ~ N(0, 1)", "mean 0, σ 1"],
            ["Expected frequency", "n × P(event)", "learn it"],
          ]],
        ],
      },
      {
        h: "Discrete random variables 離散隨機變量",
        min: 4,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Random variable:</b> a variable whose value depends on the outcome of a random experiment. <b>Discrete random variable:</b> a random variable that can take only separate (countable) values. <b>Probability distribution:</b> lists every possible value x with its probability P(X = x); the probabilities sum to 1. <b>Expected value E(X):</b> the long-run mean value of X, E(X) = ∑ x P(X = x). <b>Fair game:</b> a game in which the expected gain is 0."],
          ["eg", "<b>P1 · 4 marks</b>　A discrete random variable X has P(X = x) = kx for x = 1, 2, 3, 4. Find k and E(X).", [
            "∑P = 1：k(1 + 2 + 3 + 4) = 1 → 10k = 1 → <b>k = 0.1</b> [M1][A1]",
            "E(X) = ∑xP = 0.1(1) + 0.2(2) + 0.3(3) + 0.4(4) = 0.1 + 0.4 + 0.9 + 1.6 = <b>3</b> [M1][A1] ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　P(X = x) = k(5 − x) for x = 1, 2, 3, 4. Find k, E(X) and P(X ≥ 3).", [
            "k(4 + 3 + 2 + 1) = 1 → <b>k = 0.1</b>",
            "Probabilities 0.4, 0.3, 0.2, 0.1 → E(X) = 0.4 + 0.6 + 0.6 + 0.4 = <b>2</b>",
            "P(X ≥ 3) = 0.2 + 0.1 = <b>0.3</b> ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　x = 0, 1, 2, 3 with P = 0.1, 0.3, 0.4, k. Find k and E(X).", [
            "0.1 + 0.3 + 0.4 + k = 1 → <b>k = 0.2</b>",
            "E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0.3 + 0.8 + 0.6 = <b>1.7</b> ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　A game costs $c to play. You win $10 with probability 0.2, $2 with probability 0.3, otherwise nothing. (a) Find the expected winnings. (b) Find c if the game is fair. (c) Find the expected gain if c = 3.", [
            "(a) E(win) = 10(0.2) + 2(0.3) + 0(0.5) = 2 + 0.6 = <b>$2.60</b>",
            "(b) Fair → expected gain = 0 → <b>c = $2.60</b>",
            "(c) Expected gain = 2.60 − 3 = <b>−$0.40</b> (you lose 40 cents per game on average) ✅",
          ]],
          ["trap", ["寫 k 之前一定要用 ∑P = 1；每個 P 必須喺 0 至 1 之間。", "Fair game 要用 <b>gain</b>（贏到 − 入場費），唔係 prize。", "E(X) 唔一定係 X 可以取到嘅值。"]],
        ],
      },
      {
        h: "Binomial 二項分佈",
        min: 4.5,
        blocks: [
          ["note", "<b>Binomial conditions (state ALL when asked)</b>: (1) a fixed number n of trials; (2) each trial has two outcomes, success or failure; (3) the probability of success p is the same for each trial; (4) the trials are independent."],
          ["table", ["Wording", "Write as", "GDC (n = trials)"], [
            ["exactly r", "P(X = r)", "binompdf(n, p, r)"],
            ["at most r / no more than r / r or fewer", "P(X ≤ r)", "binomcdf(n, p, r)"],
            ["fewer than r", "P(X ≤ r − 1)", "binomcdf(n, p, r − 1)"],
            ["at least r / r or more", "P(X ≥ r) = 1 − P(X ≤ r − 1)", "1 − binomcdf(n, p, r − 1)"],
            ["more than r", "P(X ≥ r + 1) = 1 − P(X ≤ r)", "1 − binomcdf(n, p, r)"],
            ["between a and b inclusive", "P(a ≤ X ≤ b)", "cdf(b) − cdf(a − 1)"],
          ]],
          ["eg", "<b>P2 · 5 marks</b>　X ~ B(10, 0.3). Find (a) P(X = 3), (b) P(X ≤ 3), (c) P(X ≥ 4), (d) E(X) and Var(X).", [
            "(a) binompdf(10, 0.3, 3) = \\(\\binom{10}{3}(0.3)^3(0.7)^7\\) = <b>0.267</b>",
            "(b) binomcdf(10, 0.3, 3) = <b>0.650</b>",
            "(c) 1 − P(X ≤ 3) = 1 − 0.6496 = <b>0.350</b>",
            "(d) E(X) = 10 × 0.3 = <b>3</b>；Var(X) = 10 × 0.3 × 0.7 = <b>2.1</b>（σ = 1.45）✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　A spinner lands on red with probability 0.25. It is spun 8 times. Find P(exactly 2 reds), P(at least one red), P(at most 2 reds).", [
            "State X ~ B(8, 0.25) <b>(first mark)</b>",
            "P(X = 2) = binompdf(8, 0.25, 2) = <b>0.311</b>",
            "P(X ≥ 1) = 1 − 0.75⁸ = 1 − 0.1001 = <b>0.900</b>",
            "P(X ≤ 2) = binomcdf(8, 0.25, 2) = <b>0.679</b> ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　X ~ B(n, p) has E(X) = 12 and n = 40. Find p and Var(X).", [
            "np = 12 → p = 12 ÷ 40 = <b>0.3</b>",
            "Var = np(1 − p) = 40 × 0.3 × 0.7 = <b>8.4</b> ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　Each shot hits with probability 0.1. Find the least number of shots n so that P(at least one hit) &gt; 0.95.", [
            "P(at least one) = 1 − 0.9ⁿ &gt; 0.95 → 0.9ⁿ &lt; 0.05",
            "Take logs: n ln 0.9 &lt; ln 0.05 → <b>divide by ln 0.9 (negative) so flip the sign</b>: n &gt; ln 0.05 ÷ ln 0.9 = 28.4",
            "<b>n = 29</b>　(check: 0.9²⁸ = 0.0523 &gt; 0.05 ✗, 0.9²⁹ = 0.0471 &lt; 0.05 ✅)",
            "GDC alternative: table of Y₁ = 1 − 0.9^X, find the first value above 0.95",
          ]],
          ["note", "<b>GDC tips</b>：<b>TI-84</b> 2nd VARS (DISTR) → A:binompdf( n, p, r ) / B:binomcdf( n, p, r ) [cdf = P(X ≤ r)]. <b>TI-Nspire</b> binomPdf(n,p,r), binomCdf(n,p,r). <b>Casio</b> MENU → DISTRIBUTION → Binomial PD / CD (x, Numtrial n, p). To solve “smallest n” use a table with Y₁ = 1 − 0.9^X. Always write the answer to 3 s.f. and write the setup X ~ B(n, p)."],
        ],
      },
      {
        h: "Normal distribution 常態分佈",
        min: 4.5,
        blocks: [
          ["note", "<b>Properties (state when asked)</b>: X ~ N(μ, σ²) is continuous, bell-shaped and symmetric about the mean μ; mean = median = mode; total area under the curve = 1; about 68% of values lie within 1σ of μ, 95% within 2σ and 99.7% within 3σ. For a continuous variable P(X = a) = 0, so P(X &lt; a) = P(X ≤ a). <b>σ² = variance</b>: N(150, 12²) means σ = 12."],
          ["eg", "<b>P2 · 3 marks</b>　The masses of apples are N(150, 12²) g. Find (a) P(X &gt; 168), (b) P(140 &lt; X &lt; 160), (c) the expected number of apples over 168 g in a box of 500.", [
            "Sketch a bell curve, mark 150, shade the right tail beyond 168",
            "(a) normalcdf(168, 1E99, 150, 12) = <b>0.0668</b>　(z = (168 − 150) ÷ 12 = 1.5 ✅ check)",
            "(b) normalcdf(140, 160, 150, 12) = <b>0.595</b>",
            "(c) 500 × 0.0668 = 33.4 ≈ <b>33 apples</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Use the apples above. (a) Find the mass exceeded by 10% of apples. (b) Find the mass below which 20% fall.", [
            "(a) Top 10% → area to the left = 0.9：invNorm(0.9, 150, 12) = <b>165</b> g (165.4)",
            "(b) invNorm(0.2, 150, 12) = <b>140</b> g (139.9) ✅",
            "Always sketch: shade the area and mark the unknown value",
          ]],
          ["eg", "<b>P2 · 4 marks (link to binomial)</b>　Using the apples above: ten apples are chosen at random. Find the probability that at least one is heavier than 168 g.", [
            "p = P(X &gt; 168) = 0.0668 (keep full calculator value)",
            "Y ~ B(10, 0.0668)：P(Y ≥ 1) = 1 − (1 − 0.0668)¹⁰ = 1 − 0.9332¹⁰ = <b>0.499</b> ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Heights are N(170, 8²). Use the 68–95–99.7 rule to estimate the percentage between 154 and 186 cm.", [
            "154 = 170 − 2(8) and 186 = 170 + 2(8) → within 2σ",
            "So about <b>95%</b> ✅ (approximate rule, GDC would give 95.4%)",
          ]],
          ["note", "<b>GDC tips</b>：<b>TI-84</b> normalcdf(lower, upper, μ, σ)；use <b>−1E99</b> or <b>1E99</b> for ±infinity. invNorm(area to the <b>left</b>, μ, σ). <b>Casio</b> MENU → DISTRIBUTION → Normal CD (Lower, Upper, <b>σ</b>, <b>μ</b> — σ comes first!) and Inverse Normal (Tail: Left, Area, σ, μ). <b>TI-Nspire</b> normCdf(lower,upper,μ,σ), invNorm(area,μ,σ). Right-tail question: use 1 − p as the area for invNorm."],
          ["table", ["Question", "Setup"], [
            ["P(X &gt; a)", "normalcdf(a, 1E99, μ, σ)"],
            ["P(X &lt; a)", "normalcdf(−1E99, a, μ, σ)"],
            ["P(a &lt; X &lt; b)", "normalcdf(a, b, μ, σ)"],
            ["P(X &lt; k) = p → find k", "invNorm(p, μ, σ)"],
            ["P(X &gt; k) = p → find k", "invNorm(1 − p, μ, σ)"],
            ["Symmetry", "P(X &lt; μ − a) = P(X &gt; μ + a)"],
          ]],
        ],
      },
      {
        h: "Standardisation 求 μ 或 σ",
        min: 3.5,
        blocks: [
          ["key", "<b>z = (x − μ) ÷ σ</b>　當 μ 或 σ 未知：用 invNorm(area, 0, 1) 搵 z，再代入 z 公式解方程。<br>1 個未知 → 1 條方程；2 個未知 → 2 條方程。"],
          ["eg", "<b>P2 · 3 marks</b>　X ~ N(μ, 5²) and P(X &gt; 40) = 0.15. Find μ.", [
            "Area to the left = 0.85 → z = invNorm(0.85, 0, 1) = <b>1.036</b> [M1]",
            "(40 − μ) ÷ 5 = 1.036 [M1] → 40 − μ = 5.18",
            "<b>μ = 34.8</b> [A1] ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　X ~ N(40, σ²) and P(X &gt; 45) = 0.1. Find σ.", [
            "z = invNorm(0.9, 0, 1) = 1.2816",
            "(45 − 40) ÷ σ = 1.2816 → σ = 5 ÷ 1.2816 = <b>3.90</b> ✅",
          ]],
          ["eg", "<b>P2 · 6 marks</b>　X ~ N(μ, σ²), P(X &lt; 12) = 0.1 and P(X &lt; 18) = 0.8. Find μ and σ.", [
            "z₁ = invNorm(0.1) = −1.2816：(12 − μ) ÷ σ = −1.2816 → 12 − μ = −1.2816σ  (1)",
            "z₂ = invNorm(0.8) = 0.8416：(18 − μ) ÷ σ = 0.8416 → 18 − μ = 0.8416σ  (2)",
            "(2) − (1)：6 = 2.1232σ → <b>σ = 2.83</b>",
            "Sub into (1)：μ = 12 + 1.2816(2.8260) = <b>15.6</b> ✅",
            "Check with the GDC: normalcdf(−1E99, 12, 15.62, 2.826) = 0.1",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　X ~ N(μ, σ²) with P(X &lt; 10) = P(X &gt; 20). Find μ.", ["Symmetry: 10 and 20 are the same distance from the mean → <b>μ = 15</b> ✅"]],
        ],
      },
      {
        h: "Long question 拆題法",
        min: 2.5,
        blocks: [
          ["eg", "<b>P2 · 8 marks (long)</b>　Packets of rice have mass N(500, 8²) g. (a) Find the probability a packet weighs less than 490 g. (b) The lightest 5% are rejected: find the cut-off mass. (c) A box has 20 packets. Find the probability that at most 2 are under 490 g. (d) Find the expected number of such packets.", [
            "(a) normalcdf(−1E99, 490, 500, 8) = <b>0.106</b> (z = −1.25)",
            "(b) invNorm(0.05, 500, 8) = <b>486.8 g</b>",
            "(c) Y ~ B(20, 0.1056)，binomcdf(20, 0.1056, 2) = <b>0.645</b> (keep p unrounded)",
            "(d) E(Y) = 20 × 0.1056 = <b>2.11</b> ✅",
          ]],
          ["table", ["Step", "Do"], [
            ["1", "Name the distribution in symbols, and note what the variable measures"],
            ["2", "Sketch (normal) and shade; or write the binomial probability required"],
            ["3", "Use the GDC; write the function/setup so method marks are visible"],
            ["4", "Carry full calculator values into later parts; round at the end to 3 s.f."],
            ["5", "Check: probability between 0 and 1; E(X) sensible"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find", "列式 + GDC 輸入 + 答案"],
            ["Show that", "列出 Σp = 1 並解出 k"],
            ["Write down the distribution", "寫明 B 或 N 同參數"],
            ["Sketch", "鐘形圖，標 μ，shade 要求區域"],
            ["Interpret", "用情境語言"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• Distribution table：Σp = 1，求未知 k<br>• E(X) = Σxp<br>• 二項：\\(X\\sim B(n,p)\\)，用 GDC binompdf / binomcdf<br>• 常態：寫出 N(μ, σ²)，用 GDC normalcdf / invNorm<br>• 標準化：\\(z=\\frac{x-\\mu}{\\sigma}\\)"],
          ["trap", [
            "binomcdf 嘅 ≤ 同 &lt; 搞錯",
            "invNorm 面積方向搞錯",
            "P(X ≥ k) = 1 − P(X ≤ k−1)",
            "normalcdf 冇寫界限",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 binomial pmf、E(X)、Var(X)。GDC 步驟要寫低（distribution, bounds），作為方法分。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["table", ["Mistake 錯", "Fix 啱"], [
            ["No “X ~ B(n, p)” statement", "Write the distribution with parameters"],
            ["Use binompdf for “at most”", "cdf for ≤; pdf only for =" ],
            ["P(X ≥ r) = 1 − cdf(r)", "= 1 − cdf(r − 1)"],
            ["Forget to flip the inequality when dividing by ln 0.9", "Dividing by a negative flips &gt; to &lt;"],
            ["Use σ² as σ in normalcdf", "N(150, 12²) → σ = 12"],
            ["invNorm with right-tail area", "Use the area to the LEFT (1 − p)"],
            ["Casio: enter μ before σ", "Casio asks σ first"],
            ["Give P(X = a) for normal as non-zero", "It is 0 for continuous"],
            ["Fair game with prize only", "Use gain = prize − cost"],
            ["Rounded p reused in later parts", "Keep the full calculator value"],
            ["Give binomial answer as exact fraction only", "3 s.f. decimal"],
            ["Omit sketch for normal", "Quick bell curve with shading"],
            ["Forget k must make ∑P = 1", "First equation of the question"],
          ]],
          ["check", ["I can find k from ∑P = 1 and then E(X)", "I can set up and solve a fair-game question", "I can list the 4 binomial conditions", "I can choose pdf / cdf and adjust for ≥ and &gt;", "I can find E(X) and Var(X) for a binomial", "I can use normalcdf and invNorm (−1E99, 1E99, left area)", "I can find μ or σ (or both) using z", "I can solve 1 − pⁿ &gt; value with logs or a table", "I use the 68–95–99.7 rule correctly"]],
        ],
      },
    ],
    summary: [
      "先認分佈，寫 X ~ B(n, p) / N(μ, σ²)，再按 GDC",
      "∑P = 1 搵 k；E(X) = ∑xP；fair = 期望收益 0",
      "二項條件：固定次數、兩結果、p 不變、獨立",
      "pdf = 剛好；cdf = 最多；至少 r = 1 − cdf(r − 1)",
      "E = np，Var = np(1 − p)",
      "Normal：sketch、σ 唔係 σ²、invNorm 用左面積",
      "未知 μ/σ：z = (x − μ) ÷ σ，兩未知兩方程",
      "除以負數 ln 0.9 要反轉不等號",
      "後面用前面答案：保留完整計數機數值",
    ],
    practice: [
      { q: "S4.8 X ~ B(20, 0.25). What is Var(X)?", o: ["A. 3.75", "B. 5", "C. 15", "D. 0.1875"], m: 1, a: "<b>A</b>. np(1 − p) = 20 × 0.25 × 0.75 = 3.75. (5 is the mean.)" },
      { q: "S4.8 Which is NOT a condition for a binomial distribution?", o: ["A. fixed number of trials", "B. two outcomes on each trial", "C. probability of success changes each trial", "D. trials are independent"], m: 1, a: "<b>C</b>. p must stay constant." },
      { q: "S4.9 X ~ N(μ, σ²) with P(X &lt; 10) = P(X &gt; 20). What is μ?", o: ["A. 10", "B. 15", "C. 20", "D. 30"], m: 1, a: "<b>B</b>. By symmetry μ is halfway: (10 + 20) ÷ 2 = 15." },
      { q: "S4.7 A discrete random variable has P(X = x) = 0.1, 0.2, k, 0.4 for x = 1, 2, 3, 4. What is k?", o: ["A. 0.2", "B. 0.3", "C. 0.4", "D. 0.7"], m: 1, a: "<b>B</b>. 0.1 + 0.2 + 0.4 = 0.7 → k = 0.3." },
      { q: "A discrete random variable X has P(X = x) = k(5 − x) for x = 1, 2, 3, 4. Find (a) k, (b) E(X), (c) P(X ≥ 3).", m: 5, a: "(a) k(4 + 3 + 2 + 1) = 1 → <b>k = 0.1</b> [M1][A1]. (b) 0.4 + 0.6 + 0.6 + 0.4 = <b>2</b> [M1][A1]. (c) 0.2 + 0.1 = <b>0.3</b> [A1]." },
      { q: "A game costs $c to play. A player wins $10 with probability 0.2, $2 with probability 0.3 and nothing otherwise. (a) Find the expected winnings. (b) Find the value of c for which the game is fair.", m: 3, a: "(a) 10(0.2) + 2(0.3) [M1] = <b>$2.60</b> [A1]. (b) fair → expected gain 0 → <b>c = $2.60</b> [A1]." },
      { q: "X ~ B(12, 0.4). Find (a) P(X = 5), (b) P(X ≤ 4), (c) P(X ≥ 7).", m: 5, a: "State X ~ B(12, 0.4) [A1]. (a) <b>0.227</b> [A1]. (b) <b>0.438</b> [A1]. (c) 1 − P(X ≤ 6) [M1] = <b>0.158</b> [A1]." },
      { q: "Each shot at a target hits with probability 0.2, independently. Find the least number of shots n such that the probability of at least one hit exceeds 0.99.", m: 4, a: "1 − 0.8ⁿ &gt; 0.99 → 0.8ⁿ &lt; 0.01 [M1]; n &gt; ln 0.01 ÷ ln 0.8 [M1] (inequality flips) = 20.6 [A1]; <b>n = 21</b> [A1] (0.8²¹ = 0.0092)." },
      { q: "The mass of a packet of rice is N(500, 8²) g. (a) Find the probability that a packet weighs less than 490 g. (b) The lightest 5% of packets are rejected. Find the cut-off mass.", m: 4, a: "(a) normalcdf(−1E99, 490, 500, 8) [M1] = <b>0.106</b> [A1]. (b) invNorm(0.05, 500, 8) [M1] = <b>486.8 g</b> (487) [A1]." },
      { q: "X ~ N(40, σ²) and P(X &gt; 45) = 0.1. Find σ.", m: 3, a: "z = invNorm(0.9) = 1.2816 [A1]; (45 − 40) ÷ σ = 1.2816 [M1]; <b>σ = 3.90</b> [A1]." },
      { q: "X ~ N(μ, σ²) with P(X &lt; 12) = 0.1 and P(X &lt; 18) = 0.8. Find μ and σ.", m: 6, a: "(12 − μ) ÷ σ = −1.2816 [M1][A1]; (18 − μ) ÷ σ = 0.8416 [M1][A1]; subtract: 6 = 2.1232σ → <b>σ = 2.83</b> [A1]; <b>μ = 15.6</b> [A1]." },
      { q: "Packets weigh N(500, 8²) g and 20 packets are in a box. Find the probability that at most 2 packets in the box weigh less than 490 g.", m: 4, a: "p = 0.1056 (from normal) [A1]; Y ~ B(20, 0.1056) [M1]; P(Y ≤ 2) [M1] = <b>0.645</b> [A1]." },
    ],
  },
  "math-12": {
    title: "Limits · Gradient function · Rate of change",
    intro: "5.1 微分入門：f′(x) 係斜率函數，亦係變化率。Chord 斜率喺 h → 0 嘅極限 = 切線斜率。呢張 sheet 講清楚 limit 嘅意思、點樣讀 dy/dx，同埋 context 題點答。",
    parts: [
      {
        h: "Big picture 微分三件事",
        min: 1.5,
        blocks: [
          ["rhyme", "口訣", "斜率、零點、二階", "f′(x) = gradient (tangent slope / rate of change) → set f′ = 0 for stationary points → f″ tells max / min / inflexion."],
          ["flow", [["① 求導", "Power · chain · product · quotient (rewrite roots/fractions as powers first)"], ["② 代入 / 令零", "f′(a) = gradient；f′(x) = 0 = stationary"], ["③ 判斷", "f″ &gt; 0 min；f″ &lt; 0 max；f″ = 0 + sign change = inflexion"], ["④ 答 context", "Units, 3 s.f., justify max/min (R1)"]]],
          ["note", "<b>常考 Perennial favourites</b>：(1) chain / product / quotient differentiate (2–4 marks)；(2) tangent and normal equation (4–5)；(3) stationary points and nature (5–6)；(4) optimisation “show that … find the minimum” (6–9)；(5) reading f′ / f″ from a graph (3–4)；(6) find an unknown constant given a gradient. Command terms: <b>find</b> = derive; <b>show that</b> = every line to the given result; <b>determine the nature</b> = max/min/inflexion with justification; <b>hence</b> = use the earlier part; <b>justify</b> = reason, e.g. f″ &gt; 0."],
        ],
      },
      {
        h: "Limit 極限：chord → tangent",
        min: 3,
        blocks: [
          ["key", "<b>Gradient of a curve at P = gradient of the tangent at P.</b> 喺曲線上面再揀一點 Q，chord PQ 嘅斜率 = \\(\\frac{f(a+h)-f(a)}{h}\\)。Q 越嚟越近 P（h → 0），chord 就變成 tangent：<br>\\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\)"],
          ["rhyme", "口訣", "先約 h，後令 h 趨零", "直接代 h = 0 會得 0/0；一定要先化簡、約走分母個 h，再睇 h → 0 時趨向幾多。"],
          ["table", ["Q", "h", "gradient of chord PQ on y = x², P(1, 1)"], [
            ["(2, 4)", "1", "3"],
            ["(1.5, 2.25)", "0.5", "2.5"],
            ["(1.1, 1.21)", "0.1", "2.1"],
            ["(1.01, 1.0201)", "0.01", "2.01"],
            ["h → 0", "→ 0", "→ <b>2 = f′(1)</b>"],
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Let f(x) = x². Find the gradient of the chord joining (3, 9) and (3 + h, (3 + h)²), and hence the gradient of the curve at x = 3.", [
            "Chord gradient = ((3 + h)² − 9) ÷ h = (6h + h²) ÷ h [M1]",
            "= <b>6 + h</b> [A1]",
            "h → 0：gradient at x = 3 is <b>6</b> [A1] ✅（同 f′(x) = 2x 一致）",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　The tangent to y = f(x) at (2, 5) passes through (4, 11). Write down f′(2).", [
            "Tangent gradient = (11 − 5) ÷ (4 − 2) = 3",
            "<b>f′(2) = 3</b> ✅（f′(2) 就係喺 x = 2 嘅切線斜率）",
          ]],
          ["trap", ["h = 0 直接代入 → 0/0，要先約。", "f′(a) 係斜率（一個數），f(a) 係高度，唔好搞亂。", "Gradient function f′(x) 係 function；gradient at a point 係數字。"]],
        ],
      },
      {
        h: "Rate of change 變化率",
        min: 3,
        blocks: [
          ["grid", [
            ["5.1", "f′(a) = 喺 x = a 嘅切線斜率", "Gradient of tangent at x = a"],
          ]],
          ["key", "\\(\\frac{dy}{dx}\\) = rate of change of y with respect to x。單位 = (y 嘅單位) per (x 嘅單位)，例如 litres per minute、m s⁻¹、°C per minute。<b>正數</b> = 嗰一刻增加緊；<b>負數</b> = 減少緊。"],
          ["eg", "<b>P2 · 3 marks</b>　T(t) = 20 + 70e^(−0.05t) °C is the temperature of tea after t minutes. Find the rate of change of T when t = 10 and interpret it.", [
            "T′(t) = −3.5e^(−0.05t)（或 GDC dy/dx at t = 10）[M1]",
            "T′(10) = <b>−2.12 °C per minute</b> [A1]",
            "Interpret：t = 10 嗰一刻，溫度以每分鐘 2.12 °C <b>下降緊</b> [R1] ✅",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　V = (4/3)πr³. Find dV/dr when r = 3 cm.", [
            "dV/dr = 4πr² [M1]",
            "= 36π ≈ <b>113 cm³ per cm</b> [A1] ✅",
          ]],
          ["table", ["If the question says…", "Do this"], [
            ["“Find the gradient at x = a”", "f′(a)"],
            ["“Rate of change”", "f′ with units (e.g. m s⁻¹)"],
            ["“Show that”", "Every algebra line, final line = given result"],
            ["“Hence”", "Use the previous result"],
            ["“Determine the nature”", "f″ test or sign diagram, then state max/min"],
            ["“Justify”", "One clear reason, e.g. f″ &gt; 0"],
            ["“Increasing / decreasing”", "Solve f′ &gt; 0 / f′ &lt; 0 for an interval"],
          ]],
          ["trap", ["變化率答案冇單位或者冇講增加 / 減少 → 失 R1。", "P′(5) 係「人口嘅變化率」，唔係人口數目。", "Paper 2 用 GDC 求 dy/dx 都要寫低求緊乜（例如 T′(10)）。"]],
        ],
      },
    ],
    summary: [
      "f′(a) = 喺 x = a 嘅切線斜率",
      "Chord 斜率 (f(a+h) − f(a))/h，h → 0 就係 f′(a)",
      "先約 h，後令 h 趨零（唔好 0/0）",
      "dy/dx = 變化率：單位係 y per x",
      "正數 = 增加緊；負數 = 減少緊",
      "Gradient = k：解 f′(x) = k，再代返 f 搵 y",
    ],
    practice: [
      { q: "S5.1 The gradient of the chord joining P(1, 1) and Q(1 + h, (1 + h)²) on y = x² is", o: ["A. 2 + h", "B. 2h + h²", "C. 2", "D. 1 + h"], m: 1, a: "<b>A</b>. ((1 + h)² − 1) ÷ h = (2h + h²) ÷ h = 2 + h." },
      { q: "S5.1 For y = x³, the gradient of the curve at x = 2 is", o: ["A. 8", "B. 12", "C. 6", "D. 4"], m: 1, a: "<b>B</b>. dy/dx = 3x² = 12（8 係 y 值）." },
      { q: "Let f(x) = x² + 1. Show that the gradient of the chord from x = 2 to x = 2 + h is 4 + h, and hence find the gradient of the curve at x = 2.", m: 4, a: "((2 + h)² + 1 − 5) ÷ h [M1] = (4h + h²) ÷ h = 4 + h [A1]; as h → 0 [M1] gradient → <b>4</b> [A1]." },
      { q: "The population of a town is P(t) = 12000e^(0.02t), t years after 2020. Find P′(5) and interpret it.", m: 3, a: "P′(t) = 240e^(0.02t) [M1]; P′(5) = <b>265</b> [A1]; in 2025 the population is increasing at about 265 people per year [R1]." },
    ],
  },
  "math-12b": {
    title: "Increasing & decreasing functions · Sign of f′",
    intro: "5.2：f′(x) 嘅正負話你知 f 升定跌。解 f′ = 0 搵分界點，再用符號圖 (sign diagram) 寫區間；識由 f′ 嘅圖讀返 f 喺邊度升、邊度跌。",
    parts: [
      {
        h: "Sign of f′ 升定跌",
        min: 3,
        blocks: [
          ["key", "<b>f′(x) &gt; 0 ⇒ f increasing</b>（由左至右上升）；<b>f′(x) &lt; 0 ⇒ f decreasing</b>；f′(x) = 0 ⇒ 水平切線（stationary）。"],
          ["rhyme", "口訣", "正升負跌，零點分界", "解 f′(x) = 0 搵 critical values，喺數線上標出，每段代一個數試正負。"],
          ["flow", [["① 微分", "f′(x)，盡量因式分解"], ["② 分界", "f′(x) = 0 → critical values"], ["③ 試號", "每段代一個 x，或者畫 f′ 嘅草圖"], ["④ 寫答案", "Inequality：−2 &lt; x &lt; 2；x &lt; 1 or x &gt; 3"]]],
          ["eg", "<b>P1 · 4 marks</b>　Find the values of x for which f(x) = x³ − 6x² + 9x is increasing.", [
            "f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3)",
            "Increasing when f′ &gt; 0：parabola opens up → <b>x &lt; 1 or x &gt; 3</b> ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　Let f(x) = 2x³ − 9x² + 12x. Find the set of values of x for which f is decreasing.", [
            "f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) [A1][M1]",
            "Critical values x = 1, 2 [A1]",
            "U 形 f′ 喺兩根中間係負 → <b>1 &lt; x &lt; 2</b> [A1] ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b>　Let f(x) = x²e^(−x). Find the interval on which f is increasing.", [
            "f′(x) = 2xe^(−x) − x²e^(−x) = x(2 − x)e^(−x) [M1][A1]",
            "e^(−x) &gt; 0 永遠正，所以只睇 x(2 − x) [M1]",
            "<b>0 &lt; x &lt; 2</b> [A1] ✅",
          ]],
        ],
      },
      {
        h: "For all x + graph of f′ 讀圖",
        min: 2.5,
        blocks: [
          ["eg", "<b>P1 · 2 marks</b>　Show that f(x) = x³ + 3x − 2 is increasing for all x.", [
            "f′(x) = 3x² + 3 [A1]",
            "x² ≥ 0 ⇒ f′(x) ≥ 3 &gt; 0 for all x ⇒ increasing [R1] ✅",
          ]],
          ["note", "<b>「For all x」嘅理由</b>：x² ≥ 0、eˣ &gt; 0、或者二次 f′ 嘅判別式 &lt; 0 而且 leading coefficient &gt; 0。代幾個數入去<b>唔算</b>證明。<br><b>讀 f′ 嘅圖</b>：f′ 喺 x 軸<b>上面</b> ⇒ f 升；喺 x 軸<b>下面</b> ⇒ f 跌；f′ 穿過 x 軸 ⇒ f 有 stationary point。"],
          ["trap", ["淨係解 f′ = 0 就停，冇試正負。", "寫 x &lt; ±2：要寫 −2 &lt; x &lt; 2。", "睇 f′ 條線升定跌（嗰個係 concavity），唔係睇 f′ 嘅正負。"]],
        ],
      },
    ],
    summary: [
      "f′ &gt; 0 升；f′ &lt; 0 跌；f′ = 0 分界",
      "因式分解 f′，數線試號",
      "U 形 f′：兩根中間負，外面正",
      "eˣ 永遠正，只睇其他因子",
      "For all x：x² ≥ 0 或判別式 &lt; 0",
      "f′ 圖喺 x 軸上面 = f 升",
    ],
    practice: [
      { q: "Find the set of values of x for which f(x) = x³ − 6x² + 9x is increasing.", m: 4, a: "f′ = 3x² − 12x + 9 = 3(x − 1)(x − 3) [M1][A1]; f′ &gt; 0 [M1] → <b>x &lt; 1 or x &gt; 3</b> [A1]." },
      { q: "S5.2 Given f′(x) = (x − 1)(x − 4), f is decreasing for", o: ["A. x &lt; 1", "B. 1 &lt; x &lt; 4", "C. x &gt; 4", "D. x &lt; 1 or x &gt; 4"], m: 1, a: "<b>B</b>. U 形 f′ 喺兩根中間係負." },
      { q: "Let f(x) = ln x − x, x &gt; 0. Find the values of x for which f is decreasing.", m: 3, a: "f′(x) = 1/x − 1 [A1]; 1/x − 1 &lt; 0 [M1] ⇒ <b>x &gt; 1</b> [A1]." },
      { q: "Let f(x) = x³ − 3x² + kx. Find the values of k for which f is increasing for all x.", m: 4, a: "f′(x) = 3x² − 6x + k [A1]; discriminant ≤ 0 [M1]: 36 − 12k ≤ 0 [A1] ⇒ <b>k ≥ 3</b> [A1]." },
    ],
  },
  "math-12c": {
    title: "Power rule · Derivatives of polynomials",
    intro: "5.3：ax^n 嘅導數係 anx^(n−1)，n 可以係負數或分數。秘訣係先改寫做 xⁿ、先展開、先拆分數，再逐項微分。",
    parts: [
      {
        h: "口訣 Power rule",
        min: 2,
        blocks: [
          ["key", "\\(\\dfrac{d}{dx}\\left(ax^n\\right) = anx^{n-1}\\)（n ∈ ℚ）。常數導數 = 0；和差逐項微分：\\((f \\pm g)' = f' \\pm g'\\)，\\((kf)' = kf'\\)。"],
          ["grid", [
            ["5.3", "指數落前面，指數減一", "d/dx(xⁿ) = n xⁿ⁻¹"],
            ["5.3", "常數導數零", "d/dx(c) = 0"],
            ["5.3", "先改寫：√x = x^½，1/x² = x⁻²", "Rewrite before differentiating"],
            ["5.3", "負指數減一，越減越負", "x⁻¹ → −x⁻², x⁻² → −2x⁻³"],
            ["5.3", "分數指數照減一", "x^(1/2) → ½x^(−1/2)"],
          ]],
          ["table", ["Rewrite", "Index form", "Derivative"], [
            ["\\(\\sqrt{x}\\)", "\\(x^{1/2}\\)", "\\(\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\\)"],
            ["\\(\\frac{1}{x}\\)", "\\(x^{-1}\\)", "\\(-x^{-2} = -\\frac{1}{x^2}\\)"],
            ["\\(\\frac{3}{x^2}\\)", "\\(3x^{-2}\\)", "\\(-6x^{-3} = -\\frac{6}{x^3}\\)"],
            ["\\(\\frac{4}{\\sqrt{x}}\\)", "\\(4x^{-1/2}\\)", "\\(-2x^{-3/2}\\)"],
            ["\\(x\\sqrt{x}\\)", "\\(x^{3/2}\\)", "\\(\\frac{3}{2}x^{1/2}\\)"],
          ]],
        ],
      },
      {
        h: "Rewrite → differentiate 改寫再微",
        min: 3.5,
        blocks: [
          ["eg", "<b>P1 · 3 marks</b>　Differentiate (a) f(x) = 3x⁴ − 2x² + 5x − 7, (b) y = 4/x² + √x.", [
            "(a) f′(x) = <b>12x³ − 4x + 5</b>",
            "(b) rewrite y = 4x⁻² + x^½ → dy/dx = <b>−8x⁻³ + ½x^(−½)</b> = −8/x³ + 1/(2√x) ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Let f(x) = (x³ − 4x)/x², x ≠ 0. Find f′(x).", [
            "逐項除：f(x) = x − 4x⁻¹ [M1]",
            "f′(x) = 1 + 4x⁻² = <b>1 + 4/x²</b> [A1][A1] ✅",
          ]],
          ["eg", "<b>P1 · 2 marks</b>　Differentiate y = (2x + 1)².", [
            "先展開：y = 4x² + 4x + 1 [A1]",
            "dy/dx = <b>8x + 4</b> [A1] ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　f(x) = ax³ + bx, f′(1) = 7 and f′(2) = 25. Find a and b.", [
            "f′(x) = 3ax² + b [A1]",
            "3a + b = 7，12a + b = 25 [M1]",
            "相減：9a = 18 → <b>a = 2</b>，<b>b = 1</b> [A1][A1] ✅",
          ]],
          ["trap", ["負指數：d/dx(x⁻¹) = −x⁻²，唔係 −x⁰。", "分數唔可以「上面微分 ÷ 下面微分」，要先逐項除。", "括號相乘唔可以「導數乘導數」，要先展開。", "Gradient = 7 係 f′ = 7，唔係 f = 7。"]],
        ],
      },
    ],
    summary: [
      "指數落前面，指數減一",
      "常數導數零",
      "√x = x^½，1/x² = x⁻²：先改寫",
      "分數先逐項除，括號先展開",
      "畀斜率求常數：f′(a) = 已知值",
    ],
    practice: [
      { q: "S5.3 If f(x) = 5x³ − 2x + 1, then f′(x) =", o: ["A. 15x² − 2", "B. 15x² − 2x", "C. 5x² − 2", "D. 15x² + 1"], m: 1, a: "<b>A</b>. 5 · 3x² − 2 + 0." },
      { q: "S5.3 If f(x) = 3/x², then f′(x) =", o: ["A. −6/x³", "B. 6/x³", "C. −3/x", "D. 3/(2x)"], m: 1, a: "<b>A</b>. 3x⁻² → −6x⁻³." },
      { q: "Differentiate y = 4x³ − 6/x + 2√x.", m: 3, a: "y = 4x³ − 6x⁻¹ + 2x^½ [M1]; dy/dx = 12x² + 6x⁻² [A1] + x^(−½) [A1] = 12x² + 6/x² + 1/√x." },
      { q: "Let f(x) = ax² + bx + 3. The gradient of the graph is 1 at x = 1 and 7 at x = 2. Find a and b.", m: 4, a: "f′(x) = 2ax + b [A1]; 2a + b = 1, 4a + b = 7 [M1]; <b>a = 3</b> [A1]; <b>b = −5</b> [A1]." },
    ],
  },
  "math-12d": {
    title: "Tangents & normals · Given gradients",
    intro: "5.4：切線同法線方程。三步：搵點 (a, f(a))、搵斜率 f′(a)、寫 y − y₁ = m(x − x₁)；法線斜率 = −1/m。仲有「parallel to」同「已知切線求常數」兩款常考題。",
    parts: [
      {
        h: "Tangent & normal 切線同法線",
        min: 3.5,
        blocks: [
          ["flow", [["① 搵點", "y-coordinate: f(a)"], ["② 搵斜率", "m = f′(a)"], ["③ 寫線", "y − f(a) = m(x − a)"], ["④ 法線", "m_normal = −1 ÷ m"]]],
          ["eg", "<b>P1 · 5 marks</b>　Find the equations of the tangent and the normal to f(x) = x³ − 2x + 1 at x = 2.", [
            "f(2) = 8 − 4 + 1 = 5 → point (2, 5) [A1]",
            "f′(x) = 3x² − 2 → f′(2) = 10 [M1][A1]",
            "Tangent：y − 5 = 10(x − 2) → <b>y = 10x − 15</b> [A1]",
            "Normal：gradient −1/10：y − 5 = −0.1(x − 2) → <b>y = −0.1x + 5.2</b> (x + 10y = 52) [A1] ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　The tangent to y = x² − 4x + 7 is parallel to the line y = 2x + 1. Find the equation of the tangent.", [
            "Parallel ⇒ gradient 2：dy/dx = 2x − 4 = 2 → <b>x = 3</b> [M1][A1]",
            "y = 9 − 12 + 7 = 4 → point (3, 4) [A1]",
            "y − 4 = 2(x − 3) → <b>y = 2x − 2</b> [A1] ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　The tangent at x = 2 to y = x² + kx has gradient 7. Find k.", [
            "dy/dx = 2x + k；at x = 2: 4 + k = 7 → <b>k = 3</b> ✅",
          ]],
          ["eg", "<b>P1 · 4 marks</b>　Find the tangent to y = ln x at x = e, and the normal at x = 1.", [
            "At x = e: y = 1, gradient 1/e → y − 1 = (1/e)(x − e) → <b>y = x/e</b>",
            "At x = 1: y = 0, gradient 1 → normal gradient −1 → <b>y = −x + 1</b> ✅",
          ]],
          ["note", "<b>GDC tips</b>：<b>TI-84</b> graph Y₁, 2nd TRACE (CALC) → 6:dy/dx → type the x value to see the gradient; CALC → minimum / maximum for stationary points. <b>Casio</b> G-Solv → d/dx, Min, Max. Paper 2 may allow a GDC gradient, but write the exact method if “show that”. Tangent: a line can also be found with “Tangent” in the Casio G-Solv / TI-84 DRAW → 5:Tangent(. Write answers to 3 s.f. unless exact."],
          ["trap", ["法線斜率要 −1/m，唔係 −m 或者 1/m。", "切線要用點 (a, f(a))，唔好用 f′(a) 做 y 值。", "「Parallel to y = 2x + 1」→ 斜率 2。"]],
        ],
      },
      {
        h: "Unknown constants 已知切線求常數",
        min: 2,
        blocks: [
          ["grid", [
            ["5.4", "切線 y − y₁ = m(x − x₁)；法線 m 反轉再變號", "Normal gradient = −1 ÷ m"],
          ]],
          ["key", "如果直線 y = mx + c 係曲線喺 x = a 嘅切線，就有<b>兩個</b>條件：① 同一點：f(a) = ma + c；② 同一斜率：f′(a) = m。兩條方程解兩個未知數。"],
          ["eg", "<b>P1 · 4 marks</b>　The line y = 4x − 3 is a tangent to y = ax² + b at x = 1. Find a and b.", [
            "同斜率：2a(1) = 4 → <b>a = 2</b> [M1][A1]",
            "同一點：x = 1 時 y = 4 − 3 = 1，所以 a + b = 1 → <b>b = −1</b> [M1][A1] ✅",
          ]],
          ["trap", ["只用咗一個條件（淨係斜率或者淨係點）。", "切線方程入面唔可以有 x²：斜率係一個數字 f′(a)。"]],
        ],
      },
    ],
    summary: [
      "切線：點 (a, f(a)) + 斜率 f′(a)",
      "y − y₁ = m(x − x₁)",
      "法線斜率 = −1 ÷ m",
      "Parallel = 斜率一樣：解 f′(x) = m",
      "已知切線：同一點 + 同斜率 = 兩條方程",
    ],
    practice: [
      { q: "S5.4 What is the gradient of the normal to y = x² at x = 3?", o: ["A. 6", "B. −6", "C. 1/6", "D. −1/6"], m: 1, a: "<b>D</b>. Tangent gradient 2x = 6; normal = −1/6." },
      { q: "Find the equations of the tangent and normal to f(x) = 2x² − 3x + 1 at x = 2.", m: 5, a: "f(2) = 3 [A1]; f′(x) = 4x − 3 → f′(2) = 5 [M1][A1]; tangent y − 3 = 5(x − 2) → <b>y = 5x − 7</b> [A1]; normal gradient −1/5: <b>y = −0.2x + 3.4</b> (x + 5y = 17) [A1]." },
      { q: "The tangent to y = x² + kx at x = 2 has gradient 7. Find k and the equation of the tangent.", m: 4, a: "dy/dx = 2x + k [A1]; 4 + k = 7 → <b>k = 3</b> [A1]; y(2) = 4 + 6 = 10 [A1]; y − 10 = 7(x − 2) → <b>y = 7x − 4</b> [A1]." },
    ],
  },
  "math-12e": {
    title: "Standard derivatives · Chain · Product · Quotient",
    intro: "5.6：背熟 xⁿ、sin x、cos x、eˣ、ln x 嘅導數，再識揀 chain / product / quotient rule。Formula booklet 有，但要識用、識化簡。",
    parts: [
      {
        h: "口訣 + 導數表",
        min: 2.5,
        blocks: [
          ["grid", [
            ["5.6", "鏈：外層導數 × 內層導數", "Chain: f′(g(x)) · g′(x)"],
            ["5.6", "積：導一乘二，加一乘導二", "Product: u′v + uv′"],
            ["5.6", "商：導上乘下，減上乘導下，除下平方", "Quotient: (u′v − uv′) ÷ v²"],
            ["5.6", "sin → cos → −sin → −cos", "Derivative cycle of sin and cos"],
            ["5.6", "ln 入面有乘除，先用 log 法則拆", "ln(3x) = ln 3 + ln x → 1/x"],
          ]],
          ["table", ["f(x)", "f′(x)", "Chain version f(g(x))"], [
            ["xⁿ", "n xⁿ⁻¹", "n g(x)ⁿ⁻¹ · g′(x)"],
            ["sin x", "cos x", "cos(g(x)) · g′(x)"],
            ["cos x", "−sin x", "−sin(g(x)) · g′(x)"],
            ["eˣ", "eˣ", "e^{g(x)} · g′(x)"],
            ["ln x", "1/x", "g′(x) ÷ g(x)"],
          ]],
          ["note", "<b>Formula booklet</b> (SL): derivatives of xⁿ, sin x, cos x, eˣ, ln x; chain, product, quotient rules; tangent/normal not given (learn y − y₁ = m(x − x₁)). tan x is HL — not needed for SL. Definition: \\(f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}\\)."],
        ],
      },
      {
        h: "Rules 公式練習 (power · chain · product · quotient)",
        min: 5,
        blocks: [
          ["eg", "<b>P1 · 3 marks</b>　Differentiate (a) f(x) = 3x⁴ − 2x² + 5x − 7, (b) y = 4/x² + √x.", [
            "(a) f′(x) = <b>12x³ − 4x + 5</b>",
            "(b) rewrite y = 4x⁻² + x^½ → dy/dx = <b>−8x⁻³ + ½x^(−½)</b> = −8/x³ + 1/(2√x) ✅",
          ]],
          ["eg", "<b>P1 · 5 marks (chain)</b>　Differentiate (a) y = (3x² − 1)⁵, (b) y = e^(x²+1), (c) y = ln(5x − 2), (d) y = cos(x²).", [
            "(a) 5(3x² − 1)⁴ × 6x = <b>30x(3x² − 1)⁴</b>",
            "(b) e^(x²+1) × 2x = <b>2x e^(x²+1)</b>",
            "(c) 5 ÷ (5x − 2) = <b>5/(5x − 2)</b>",
            "(d) −sin(x²) × 2x = <b>−2x sin(x²)</b> ✅",
            "Shortcut: ln(3x) = ln 3 + ln x → derivative 1/x (not 1/(3x)).",
          ]],
          ["eg", "<b>P1 · 4 marks (product)</b>　Differentiate (a) y = x²e^(3x), (b) y = x ln x.", [
            "(a) u = x², v = e^(3x)；u′ = 2x，v′ = 3e^(3x) → <b>2x e^(3x) + 3x² e^(3x)</b> = x e^(3x)(2 + 3x)",
            "(b) u = x, v = ln x → 1 · ln x + x · (1/x) = <b>ln x + 1</b> ✅",
          ]],
          ["eg", "<b>P1 · 4 marks (quotient)</b>　Differentiate (a) y = (2x + 1)/(x − 3), (b) y = sin x / x².", [
            "(a) (2(x − 3) − (2x + 1)(1)) ÷ (x − 3)² = <b>−7/(x − 3)²</b>",
            "(b) (x² cos x − 2x sin x) ÷ x⁴ = <b>(x cos x − 2 sin x)/x³</b> ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Find the value of the gradient of f(x) = ln(x² + 1) at x = 1.", [
            "Chain: f′(x) = 2x ÷ (x² + 1)",
            "f′(1) = 2 ÷ 2 = <b>1</b> ✅",
          ]],
          ["note", "<b>Which rule?</b>　函數嵌入函數（括號內有 x）→ chain；兩個含 x 嘅因子相乘 → product；一個除另一個 → quotient（或改寫成 product with negative power）；只係 xⁿ → power。Mixed question: chain inside product, e.g. x·e^(2x)。"],
          ["trap", ["Chain：記得乘內層導數（eˣ²　唔係 eˣ²）。", "ln(g(x)) 導數 = g′ ÷ g，唔係 1/x。", "Quotient 次序：u′v <b>減</b> uv′，唔好反轉。"]],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1,
        blocks: [
          ["table", ["Mistake 錯", "Fix 啱"], [
            ["Forget the chain-rule factor", "Differentiate the inside and multiply"],
            ["d/dx ln(3x) = 1/(3x)", "= 1/x"],
            ["Product rule written as u′v′", "u′v + uv′"],
            ["Quotient: uv′ − u′v", "u′v − uv′ over v²"],
            ["Degrees mode with sin/cos calculus", "Calculus needs radians"],
          ]],
          ["check", ["I can differentiate xⁿ, sin, cos, eˣ, ln", "I can apply chain, product, quotient rules without notes", "I simplify with log laws before differentiating", "I know calculus in sin/cos needs radian mode"]],
        ],
      },
    ],
    summary: [
      "sin → cos，cos → −sin，eˣ → eˣ，ln x → 1/x",
      "Chain：外層導數 × 內層導數",
      "Product：u′v + uv′",
      "Quotient：(u′v − uv′) ÷ v²",
      "ln 先拆：ln(3x) 導數 = 1/x",
      "sin/cos 微分一定用弧度 (radians)",
    ],
    practice: [
      { q: "S5.6 The derivative of ln(3x²) is:", o: ["A. 1/(3x²)", "B. 2/x", "C. 6x", "D. 1/x"], m: 1, a: "<b>B</b>. g′/g = 6x ÷ 3x² = 2/x (or 2 ln x + ln 3 → 2/x)." },
      { q: "Differentiate (a) y = (2x − 5)⁴, (b) y = x e^(2x), (c) y = eˣ/(x + 1).", m: 6, a: "(a) 4(2x − 5)³ × 2 = <b>8(2x − 5)³</b> [M1][A1]. (b) e^(2x) + 2x e^(2x) = <b>e^(2x)(1 + 2x)</b> [M1][A1]. (c) (eˣ(x + 1) − eˣ) ÷ (x + 1)² = <b>x eˣ/(x + 1)²</b> [M1][A1]." },
      { q: "Let f(x) = x²e^(−2x). Show that f′(x) = 2x(1 − x)e^(−2x).", m: 4, a: "Product rule with u = x², v = e^(−2x) [M1]; u′ = 2x, v′ = −2e^(−2x) [A1]; f′ = 2xe^(−2x) − 2x²e^(−2x) [A1] = 2x(1 − x)e^(−2x) [A1] (AG)." },
    ],
  },
  "math-12f": {
    title: "Second derivative · Concavity · Graphs of f, f′, f″",
    intro: "5.7：f″ = f′ 再微分一次，話你知斜率點變。f″ &gt; 0 凹向上，f″ &lt; 0 凹向下；仲要識由 f 嘅圖講 f′，由 f′ 嘅圖講 f。",
    parts: [
      {
        h: "f″ + concavity 凹向",
        min: 3,
        blocks: [
          ["grid", [
            ["5.7", "f″ &gt; 0 凹向上（min），f″ &lt; 0 凹向下（max）", "Second derivative test"],
            ["5.7", "inflexion：f″ = 0 而且符號轉變", "Concavity changes"],
            ["5.7", "f′ 升 ⇔ f″ &gt; 0 ⇔ 凹向上", "Gradient increasing = concave up"],
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Let f(x) = x³ − 3x² + 2. Find the set of values of x for which the graph is concave down.", [
            "f′(x) = 3x² − 6x，f″(x) = 6x − 6 [A1]",
            "Concave down：f″(x) &lt; 0 [M1]",
            "<b>x &lt; 1</b> [A1] ✅",
          ]],
          ["eg", "<b>P1 · 3 marks</b>　Show that f(x) = x³ − 6x² + 9x + 1 has a point of inflexion at x = 2.", [
            "f″(x) = 6x − 12 = 0 → x = 2 [A1]",
            "f″(1.9) = −0.6 &lt; 0 and f″(2.1) = 0.6 &gt; 0 → <b>concavity changes</b> [R1]",
            "f(2) = 8 − 24 + 18 + 1 = 3 → inflexion at (2, 3) [A1] ✅",
          ]],
        ],
      },
      {
        h: "f, f′, f″ 圖 graph links",
        min: 3,
        blocks: [
          ["note", "<b>f(x) + f′(x) + f″(x) graph links</b>：f′ crosses the x-axis ⇒ f has a stationary point；f′ is positive ⇒ f increasing；f′ has a local max/min ⇒ f has an inflexion (f″ = 0)；f″ &gt; 0 ⇒ f concave up. Given the graph of f′ → say what f does; do not read f′ as f."],
          ["grid", [
            ["5.8", "圖上 f′ 穿過 x 軸 = f 嘅轉向點", "f′ + to − = max; − to + = min"],
            ["5.8", "f′ 嘅最高/最低點 = f 嘅 inflexion", "f″ = 0 where f′ turns"],
          ]],
          ["eg", "<b>P1 · 4 marks</b>　The graph of f′ is a parabola crossing the x-axis at x = −1 and x = 3 and opening upward, with minimum at x = 1. (a) State where f has stationary points and their nature. (b) State where f is decreasing. (c) Find the x-coordinate of the point of inflexion of f.", [
            "(a) f′ = 0 at x = −1 (f′: + to −) → <b>local maximum</b>；at x = 3 (− to +) → <b>local minimum</b>",
            "(b) f′ &lt; 0 for <b>−1 &lt; x &lt; 3</b>",
            "(c) f′ has its minimum at x = 1, so f″(1) = 0 with sign change → <b>inflexion at x = 1</b> ✅",
          ]],
          ["trap", ["f′ 跌緊 (concave down) ≠ f 跌緊 (f′ &lt; 0)。", "f′ 嘅最低點唔係 f 嘅 minimum，係 f 嘅 inflexion。", "先講清楚你睇緊邊條圖（f、f′ 定 f″）。"]],
        ],
      },
    ],
    summary: [
      "f″ = f′ 再微一次",
      "f″ &gt; 0 凹向上；f″ &lt; 0 凹向下",
      "f′ 穿過 x 軸 = f 嘅駐點",
      "f′ 嘅轉向點 = f 嘅 inflexion",
      "f′ 喺 x 軸上面 = f 升",
    ],
    practice: [
      { q: "Show that f(x) = x³ − 6x² + 9x + 1 has a point of inflexion at x = 2 and find its coordinates.", m: 4, a: "f″ = 6x − 12 [A1]; = 0 → x = 2 [A1]; f″ changes sign (− for x &lt; 2, + for x &gt; 2) [R1]; f(2) = 3 → <b>(2, 3)</b> [A1]." },
      { q: "The graph of f′ is an upward parabola crossing the x-axis at x = −1 and x = 3, with its minimum at x = 1. (a) Find the x-coordinates of the stationary points of f and state their nature. (b) State where f is decreasing. (c) Find the x-coordinate of the point of inflexion of f.", m: 5, a: "(a) x = −1: f′ changes + to − → <b>maximum</b> [A1]; x = 3: − to + → <b>minimum</b> [A1][A1 for both x-values]. (b) f′ &lt; 0: <b>−1 &lt; x &lt; 3</b> [A1]. (c) f′ has its minimum at x = 1 so f″(1) = 0 with a sign change → <b>x = 1</b> [A1] (5 total: lose no mark for combined phrasing)." },
      { q: "S5.7 If y = e^(3x), then d²y/dx² =", o: ["A. 3e^(3x)", "B. 9e^(3x)", "C. e^(3x)", "D. 6e^(3x)"], m: 1, a: "<b>B</b>. 微分兩次：3 × 3 = 9." },
    ],
  },
  "math-12g": {
    title: "Stationary points · Max / min tests · Optimisation · Inflexion",
    intro: "5.8：f′ = 0 搵駐點，用 f″ 或 f′ 前後正負判斷極大 / 極小；最值題四步走；拐點要 f″ 轉號（有 zero 同 non-zero gradient 兩種）。",
    parts: [
      {
        h: "Definitions + tests 定義同判斷法",
        min: 2,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Derivative f′(x):</b> the gradient function of f; it gives the instantaneous rate of change of f with respect to x, and the gradient of the tangent to the curve at x. <b>Increasing function at x = a:</b> f′(a) &gt; 0. <b>Decreasing:</b> f′(a) &lt; 0. <b>Tangent:</b> a straight line that touches the curve at a point and has the same gradient as the curve there. <b>Normal:</b> the line perpendicular to the tangent at that point. <b>Stationary point:</b> a point where f′(x) = 0. <b>Local maximum / minimum:</b> a stationary point where f′ changes from positive to negative / negative to positive. <b>Point of inflexion:</b> a point where the concavity of the curve changes (f″ changes sign). <b>Concave up:</b> f″(x) &gt; 0. <b>Concave down:</b> f″(x) &lt; 0. <b>Second derivative f″(x):</b> the derivative of f′(x)."],
          ["table", ["Test", "Result"], [
            ["f′(x) = 0 and f″(x) &gt; 0", "local minimum"],
            ["f′(x) = 0 and f″(x) &lt; 0", "local maximum"],
            ["f′(x) = 0 and f″(x) = 0", "inconclusive → use sign of f′ either side"],
            ["f″(x) = 0 and f″ changes sign", "point of inflexion (non-stationary unless f′ = 0 too)"],
            ["f′ changes + to − at x = a", "local maximum"],
            ["f′ changes − to + at x = a", "local minimum"],
            ["f′ does not change sign and f′(a) = 0", "stationary (horizontal) point of inflexion"],
          ]],
          ["grid", [
            ["5.8", "f′ = 0 就係 stationary，唔一定係 max/min", "Could be inflexion"],
            ["5.8", "最值題：寫式、求導、令零、驗證", "Optimisation steps"],
          ]],
        ],
      },
      {
        h: "Stationary points & inflexion 轉向點",
        min: 3.5,
        blocks: [
          ["eg", "<b>P1 · 6 marks</b>　Find the coordinates of the stationary points of f(x) = 2x³ − 9x² + 12x + 1 and determine their nature.", [
            "f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) = 0 → x = 1 or 2 [M1][A1]",
            "f(1) = 2 − 9 + 12 + 1 = 6；f(2) = 16 − 36 + 24 + 1 = 5 [A1]",
            "f″(x) = 12x − 18 [A1]",
            "f″(1) = −6 &lt; 0 → <b>local maximum at (1, 6)</b> [A1]",
            "f″(2) = 6 &gt; 0 → <b>local minimum at (2, 5)</b> [A1] ✅",
            "Increasing for x &lt; 1 and x &gt; 2；decreasing for 1 &lt; x &lt; 2 (f′ sign: + − +)",
          ]],
          ["eg", "<b>P1 · 6 marks</b>　f(x) = x⁴ − 4x³. Find the stationary points and the points of inflexion.", [
            "f′(x) = 4x³ − 12x² = 4x²(x − 3) = 0 → x = 0, x = 3",
            "f″(x) = 12x² − 24x = 12x(x − 2)",
            "x = 3：f″(3) = 36 &gt; 0 → <b>minimum at (3, −27)</b>",
            "x = 0：f″(0) = 0 → inconclusive. f′(−1) = −16 &lt; 0 and f′(1) = −8 &lt; 0: <b>no sign change</b> → horizontal point of inflexion at (0, 0)",
            "f″ = 0 at x = 0 and x = 2；f″ is + (x &lt; 0), − (0 &lt; x &lt; 2), + (x &gt; 2) → sign changes at both → <b>inflexions at (0, 0) and (2, −16)</b> ✅",
          ]],
          ["trap", ["「f′ = 0」只係 stationary，要用 f″ 或符號變化判斷 max/min。", "f″ = 0 唔夠證明 inflexion，要寫出 concavity / f″ 符號轉變。", "要答 x <b>同</b> y 坐標（coordinates），題目問 coordinates 就要兩個。"]],
        ],
      },
      {
        h: "Optimisation 最值題",
        min: 3.5,
        blocks: [
          ["flow", [["① 寫式", "Express quantity in ONE variable using the constraint"], ["② 求導令零", "dS/dx = 0 → solve"], ["③ 驗證", "Second derivative or sign change (R1)"], ["④ 答問題", "Substitute for the required value + units"]]],
          ["eg", "<b>P2 · 6 marks</b>　An open box has a square base of side x cm and height h cm. Its volume is 500 cm³. (a) Show that the surface area is S = x² + 2000/x. (b) Find the value of x that minimises S. (c) Find the minimum surface area, and justify that it is a minimum.", [
            "(a) x²h = 500 → h = 500/x²；S = x² + 4xh = x² + 4x(500/x²) = <b>x² + 2000/x</b> [M1][A1] (show every line)",
            "(b) S′ = 2x − 2000/x² = 0 → x³ = 1000 → <b>x = 10</b> [M1][A1]",
            "(c) S(10) = 100 + 200 = <b>300 cm²</b> [A1]",
            "S″ = 2 + 4000/x³ = 2 + 4 = 6 &gt; 0 → minimum [R1] ✅",
          ]],
          ["eg", "<b>P1 · 5 marks</b>　80 m of fence encloses a rectangular field against a straight river (three sides fenced). Find the maximum area.", [
            "Width x, length 80 − 2x → A = x(80 − 2x) = 80x − 2x²",
            "A′ = 80 − 4x = 0 → x = 20；length = 40",
            "A″ = −4 &lt; 0 → maximum",
            "A = 20 × 40 = <b>800 m²</b> ✅",
          ]],
          ["eg", "<b>P2 · 6 marks</b>　A closed cylinder has volume 500 cm³. Find the radius that minimises its surface area, and the minimum surface area.", [
            "πr²h = 500 → h = 500/(πr²)",
            "S = 2πr² + 2πrh = 2πr² + 1000/r",
            "S′ = 4πr − 1000/r² = 0 → r³ = 250/π → <b>r = 4.30 cm</b>",
            "S″ = 4π + 2000/r³ &gt; 0 → minimum",
            "S = 2π(4.30)² + 1000/4.30 = <b>349 cm²</b> ✅ (GDC: graph S, use minimum to check)",
          ]],
          ["note", "<b>Paper 2 shortcut</b>：after finding the function, you may graph it and use the GDC <b>minimum / maximum</b> to confirm, but a “show that” still needs the algebra. State a justification: S″ &gt; 0, or the sign of S′ changes from − to +."],
        ],
      },
      {
        h: "Long question 拆題法",
        min: 2,
        blocks: [
          ["eg", "<b>P2 · 9 marks (long)</b>　The curve y = x³ − 3x² − 9x + 2 has stationary points A and B. (a) Find dy/dx. (b) Find the coordinates of A and B and the nature of each. (c) Find the equation of the tangent at x = 0. (d) Find the range of x for which the curve is decreasing. (e) Find the x-coordinate of the inflexion point.", [
            "(a) dy/dx = <b>3x² − 6x − 9</b> = 3(x − 3)(x + 1)",
            "(b) x = −1 → y = −1 − 3 + 9 + 2 = 7；x = 3 → y = 27 − 27 − 27 + 2 = −25；d²y/dx² = 6x − 6 → at −1: −12 (max) <b>A(−1, 7) maximum</b>；at 3: 12 (min) <b>B(3, −25) minimum</b>",
            "(c) at x = 0: y = 2, gradient −9 → <b>y = −9x + 2</b>",
            "(d) dy/dx &lt; 0 → <b>−1 &lt; x &lt; 3</b>",
            "(e) d²y/dx² = 6x − 6 = 0 → <b>x = 1</b> (sign changes) ✅ at (1, −9)",
          ]],
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find", "列式，每項導數 1 分"],
            ["Show that", "由所給式出發"],
            ["Justify / Hence", "需要用 f″ 或符號表驗證 max / min"],
            ["Determine", "最終答案及 nature"],
            ["Interpret", "gradient 嘅意義，加單位"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 求導：用 power、product、chain，booklet 有 sin、cos、e、ln<br>• 切線 / 法線：f(a)、f′(a)，再 \\(y-y_1=m(x-x_1)\\)<br>• Stationary：f′(x)=0，用 f″ 或符號變化分辨<br>• Optimisation：建立函數，求導，驗證<br>• Increasing / decreasing：f′ 嘅符號"],
          ["trap", [
            "忘記 chain rule 內部導數",
            "法線斜率冇取負倒數",
            "Stationary point 只求 x，漏 y 座標",
            "Optimisation 冇驗證 max 或 min",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有導數規則同基本函數導數。長題常 3–4 部分：求導 → 切線 → 最值 → 解釋。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["table", ["Mistake 錯", "Fix 啱"], [
            ["Forget the chain-rule factor", "Differentiate the inside and multiply"],
            ["d/dx ln(3x) = 1/(3x)", "= 1/x"],
            ["Product rule written as u′v′", "u′v + uv′"],
            ["Quotient: uv′ − u′v", "u′v − uv′ over v²"],
            ["Differentiate before rewriting roots/fractions", "Write as powers first"],
            ["Normal gradient = −m", "−1 ÷ m"],
            ["Give only x of stationary point", "Give (x, y)"],
            ["Say “f′ = 0 so max”", "Test with f″ or sign change"],
            ["Inflexion claimed from f″ = 0 only", "Show f″ changes sign"],
            ["Skip the verification in optimisation", "R1 mark: S″ &gt; 0 or sign test"],
            ["Show that: jump steps", "Show every line to the exact given result"],
            ["Round early", "Keep exact values, 3 s.f. at the end"],
            ["Degrees mode with sin/cos calculus", "Calculus needs radians"],
            ["Treat f′ graph as f", "Read signs of f′ to describe f"],
          ]],
          ["check", ["I can differentiate xⁿ, sin, cos, eˣ, ln", "I can apply chain, product, quotient rules without notes", "I can write tangent and normal equations", "I can find and classify stationary points", "I can show an inflexion with a sign change", "I can set up and solve an optimisation problem and justify it", "I can use a graph of f′ to describe f", "I know calculus in sin/cos needs radian mode", "I can use GDC min/max/dy/dx to check"]],
        ],
      },
    ],
    summary: [
      "f′ = 0 = stationary；要寫 (x, y)",
      "f″ &gt; 0 min；f″ &lt; 0 max；f″ = 0 睇 f′ 前後",
      "inflexion 要 f″ 轉號；f′ = 0 嘅係水平拐點",
      "最值題：一個變數、求導令零、寫驗證",
      "答返題目問嘅嘢：max value 係 y",
      "Show that：每一行都要寫出",
    ],
    practice: [
      { q: "S5.8 At x = 2, f′(2) = 0 and f″(2) = −4. What does f have at x = 2?", o: ["A. local minimum", "B. local maximum", "C. point of inflexion", "D. cannot tell"], m: 1, a: "<b>B</b>. f″ &lt; 0 → concave down → local maximum." },
      { q: "Find the stationary points of f(x) = x³ − 12x + 5 and determine their nature.", m: 6, a: "f′ = 3x² − 12 = 0 → x = ±2 [M1][A1]; f(2) = −11, f(−2) = 21 [A1]; f″ = 6x [A1]; f″(2) = 12 &gt; 0 → <b>minimum (2, −11)</b> [A1]; f″(−2) = −12 &lt; 0 → <b>maximum (−2, 21)</b> [A1]." },
      { q: "An open box with square base of side x cm and height h cm has volume 500 cm³. (a) Show that its surface area is S = x² + 2000/x. (b) Find the value of x for which S is a minimum, and the minimum area. (c) Justify that it is a minimum.", m: 7, a: "(a) h = 500/x² [M1]; S = x² + 4xh [M1]; = x² + 2000/x [A1] (shown). (b) S′ = 2x − 2000/x² = 0 [M1] → x³ = 1000 → <b>x = 10</b> [A1]; S = <b>300 cm²</b> [A1]. (c) S″ = 2 + 4000/x³ = 6 &gt; 0 → minimum [R1]." },
    ],
  },
  "math-13": {
    title: "Anti-differentiation · Finding C · Area under a curve (GDC)",
    intro: "5.5 積分入門：積分 = 微分倒轉做。ax^n 積分（加一除新次 + C）、用一點搵 C、曲線喺 x 軸上面嘅面積 = 定積分，Paper 2 用 GDC 計。",
    parts: [
      {
        h: "Big picture 大圖 + 口訣",
        min: 2,
        blocks: [
          ["key", "<b>Integration is the reverse of differentiation.</b> \\(F'(x) = f(x)\\) ⟺ \\(\\int f(x)\\,dx = F(x) + C\\).<br>Indefinite integral → a <b>function + C</b>. Definite integral → a <b>number</b> (signed area). Area question → a <b>positive number</b> (split at x-axis crossings)."],
          ["flow", [["① 認題型", "Find \\(\\int\\)… (indefinite) / evaluate \\(\\int_a^b\\) (definite) / find area / find f given f′ and a point"], ["② 揀方法", "Power rule / linear (ax + b) / inspection (inside derivative outside) / expand first"], ["③ 寫答案", "Indefinite: + C. Definite: [F(x)] with limits, upper − lower. Area: sketch, split, positive"], ["④ 驗算", "Differentiate your answer back. P2: GDC to check the number"]]],
          ["grid", [
            ["5.10", "加一除新次，記得 + C", "Power rule: raise power by 1, divide by new power, add C"],
            ["5.5", "定積分：上限減下限", "\\(\\int_a^b f = F(b) - F(a)\\); the +C cancels"],
            ["5.5", "有 point 就搵 C", "Given f(a) = b: sub in, solve C"],
            ["P2", "寫出 integral + limits 先 GDC", "M1 is for the integral set-up, A1 for the value"],
            ["P2", "交點存入 A、B", "Store intersections, use them as exact limits"],
          ]],
          ["note", "<b>常考 (frequent IB types):</b> P1 · 1 mark MCQ on standard integrals / inspection; P1 · 3-5 marks \"find f(x)\" with a point, or evaluate \\(\\int_a^b\\) exactly (command terms: find, evaluate, show that); P2 · 4-6 marks area between curve and x-axis or between two curves with GDC limits (\"find the area of the region\"); a \"hence\" or \"find k\" part is a favourite."],
          ["rhyme", "解難口訣", "識別、揀法、積、代限、睇符號", "Identify the type → choose method → integrate → substitute limits → check sign/units of area."],
        ],
      },
      {
        h: "Power rule 積分 ax^n",
        min: 2.5,
        blocks: [
          ["key", "Rules: \\(\\int k f = k\\int f\\); \\(\\int (f \\pm g) = \\int f \\pm \\int g\\). Rewrite roots and fractions as powers first: \\(\\sqrt x = x^{1/2}\\), \\(\\frac1{x^3} = x^{-3}\\), \\(\\frac{1}{\\sqrt x} = x^{-1/2}\\). There is NO product or quotient rule for integrals: <b>expand or split first</b>."],
          ["eg", "Find \\(\\int (6x^2 - 4x + 5)\\,dx\\).", [
            "Each term: \\(\\frac{6x^3}{3} - \\frac{4x^2}{2} + 5x\\)",
            "<b>\\(2x^3 - 2x^2 + 5x + C\\)</b> ✅"
          ]],
          ["eg", "Find \\(\\int \\left(\\frac{3}{x^2} + \\sqrt x\\right)dx\\).", [
            "Rewrite: \\(3x^{-2} + x^{1/2}\\)",
            "\\(\\frac{3x^{-1}}{-1} + \\frac{x^{3/2}}{3/2}\\)",
            "<b>\\(-\\frac3x + \\frac23 x^{3/2} + C\\)</b> ✅"
          ]],
          ["trap", ["漏 + C = 失 A1（indefinite 一定要有）。", "積分係「除」新指數，唔係「乘」（乘係微分）。", "\\(\\int \\frac{1}{x^2}dx = -\\frac1x + C\\)，唔係 ln。"]],
        ],
      },
      {
        h: "Finding f from f′ 搵返原函數 (+ C)",
        min: 2,
        blocks: [
          ["flow", [["① 積分", "\\(f(x) = \\int f'(x)dx\\) (write + C)"], ["② 代點", "Sub the given point (a, b): f(a) = b → solve C"], ["③ 寫完整答案", "f(x) = … with the number C filled in"]]],
          ["rhyme", "口訣 3", "有點就搵 C，冇點就留 + C", "Every \"find f(x)\" question gives a point. Show the substitution line for the M1."],
          ["eg", "<b>P1 · 3 marks</b> Given \\(f'(x) = 3x^2 - 2x\\) and f(2) = 1, find f(x).", [
            "\\(f(x) = x^3 - x^2 + C\\) [A1]",
            "f(2) = 8 − 4 + C = 1 [M1]",
            "C = −3 → <b>\\(f(x) = x^3 - x^2 - 3\\)</b> [A1] ✅"
          ]],
          ["eg", "The gradient of a curve is \\(\\frac{dy}{dx} = e^{2x} + 1\\) and it passes through (0, 2). Find y.", [
            "\\(y = \\frac12 e^{2x} + x + C\\)",
            "At (0, 2): \\(\\frac12 + 0 + C = 2\\) → C = 1.5",
            "<b>\\(y = \\frac12 e^{2x} + x + 1.5\\)</b> ✅"
          ]],
          ["note", "Same idea is used in kinematics: a → v → s, with initial conditions. (See the kinematics sheet.) Also: if the question gives f″(x), integrate twice and you need two conditions."]
        ],
      },
      {
        h: "Area under a curve + GDC 面積",
        min: 3,
        blocks: [
          ["key", "如果 f(x) &gt; 0 喺 [a, b]，曲線、x 軸、x = a、x = b 圍住嘅面積 = \\(\\int_a^b f(x)\\,dx\\)。冇畀 limits 就自己解 f(x) = 0 搵交 x 軸嘅點。"],
          ["eg", "<b>P1 · 4 marks</b> Find the area of the region enclosed by \\(y = 4x - x^2\\) and the x-axis.", [
            "Roots: x(4 − x) = 0 → x = 0, 4 [A1]",
            "Curve is above axis between 0 and 4 → \\(\\int_0^4 (4x - x^2)dx\\) [M1]",
            "\\(\\left[2x^2 - \\frac{x^3}{3}\\right]_0^4 = 32 - \\frac{64}{3}\\) [M1]",
            "Area = <b>\\(\\frac{32}{3}\\)</b> (≈ 10.7) [A1] ✅"
          ]],
          ["key", "On Paper 2 you may use the GDC, but <b>method marks need the set-up written down</b>: write \\(\\int_a^b \\ldots dx\\) with limits, then give the value (3 s.f. unless told otherwise)."],
          ["table", ["Task", "GDC route (most models)", "Write down"], [
            ["Definite integral value", "TI-84: MATH → 9 fnInt(f(x), x, a, b).  Casio: OPTN → CALC → ∫dx.  Nspire: ∫ template (menu → Calculus → Numerical Integral)", "\\(\\int_a^b f(x)dx = \\) value"],
            ["Area under |f|", "Type abs( ) around the function inside the integral", "\\(\\int_a^b |f(x)|dx\\)"],
            ["Intersection limits", "Graph both → intersect (TI: 2nd CALC 5; Casio: G-Solve ISCT; Nspire: Analyze Graph → Intersection)", "x = value (store as A, B for accuracy)"],
            ["Roots of f", "Graph → zero / root, or solver", "x = value"],
            ["Area between curves", "Find intersection x-values A, B → fnInt(top − bottom, x, A, B)", "\\(\\int_A^B (f - g)dx\\)"],
            ["Check your hand-calc", "Graph shows shaded integral value", "—"],
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Water flows into a tank at r(t) = 30e^(−0.2t) litres per minute. Find the volume that flows in during the first 5 minutes.", [
            "Volume = \\(\\int_0^5 30e^{-0.2t}\\,dt\\) [M1]",
            "= <b>94.8 litres</b>（GDC）[A1] ✅（rate 積分 = 總量）",
          ]],
          ["note", "<b>Accuracy rule:</b> don't use rounded limits (1.07). Store the exact calculator value (1.0737…) as A and type A. Rounding too early can change the 3rd s.f. and lose A1.<br>Radian mode for anything with sin / cos. Use brackets around the whole integrand: fnInt((4−x)−e^x, …)."],
        ],
      },
    ],
    summary: [
      "加一除新次，記得 + C",
      "有點就搵 C，冇點就留 + C",
      "f(x) &gt; 0：面積 = \\(\\int_a^b f\\,dx\\)",
      "Rate 積分 = 總量",
      "GDC：寫 integral + limits，存精確 limits",
    ],
    practice: [
      { q: "\\(\\int (6x^2 - 4)\\,dx =\\)", m: 1, o: ["\\(12x + C\\)", "\\(2x^3 - 4x + C\\)", "\\(3x^3 - 4x + C\\)", "\\(2x^3 + C\\)"], a: "<b>B</b> [1]: \\(\\frac{6x^3}{3} - 4x + C = 2x^3 - 4x + C\\)." },
      { q: "Given \\(f'(x) = 3x^2 - 2x\\) and f(2) = 1, find f(x).", m: 3, a: "\\(f(x) = x^3 - x^2 + C\\) [A1]<br>8 − 4 + C = 1 [M1]<br><b>\\(f(x) = x^3 - x^2 - 3\\)</b> [A1]" },
      { q: "Find the area of the region enclosed by the graph of \\(y = 4x - x^2\\) and the x-axis.", m: 4, a: "Roots x = 0, 4 [A1]<br>\\(\\int_0^4 (4x - x^2)dx\\) [M1]<br>\\(\\left[2x^2 - \\frac{x^3}{3}\\right]_0^4 = 32 - \\frac{64}{3}\\) [M1]<br>Area = <b>\\(\\frac{32}{3}\\)</b> [A1]" },
    ],
  },
  "math-13b": {
    title: "Standard integrals · Linear composites · Inspection & substitution",
    intro: "5.10：xⁿ、1/x、eˣ、sin x、cos x 嘅積分，入面係 ax + b 就除以 a；見到入面嘅導數喺出面，就用 inspection 或 substitution（reverse chain rule）。",
    parts: [
      {
        h: "Standard integrals 標準積分 (Formula booklet)",
        min: 3.5,
        blocks: [
          ["grid", [
            ["5.10", "加一除新次，記得 + C", "Power rule: raise power by 1, divide by new power, add C"],
            ["5.10", "入面 ax + b，外面除 a", "Linear inside: \\(\\int f(ax+b)dx = \\frac1a F(ax+b)\\)"],
            ["5.10", "1/x 變 ln，1/x² 唔係 ln", "\\(\\int x^{-1} = \\ln|x|\\), but \\(\\int x^{-2} = -x^{-1}\\)"],
            ["5.10", "sin 積出負 cos", "\\(\\int \\sin x = -\\cos x + C\\)"],
            ["5.10", "見到入面嘅微分喺出面，就當佢一粒", "Inspection: \\(\\int f(g(x))g'(x)dx = F(g(x)) + C\\)"],
            ["5.10", "分數先拆、括號先展", "Expand / split the fraction before integrating"],
          ]],
          ["table", ["f(x)", "\\(\\int f(x)\\,dx\\)", "Note"], [
            ["\\(x^n\\) (n ≠ −1)", "\\(\\frac{x^{n+1}}{n+1} + C\\)", "works for fractions and negatives too"],
            ["\\(\\frac1x\\)", "\\(\\ln|x| + C\\)", "the ONLY case where power rule fails"],
            ["\\(e^x\\)", "\\(e^x + C\\)", "unchanged"],
            ["\\(\\sin x\\)", "\\(-\\cos x + C\\)", "radians"],
            ["\\(\\cos x\\)", "\\(\\sin x + C\\)", "radians"],
            ["\\(\\frac{1}{ax+b}\\)", "\\(\\frac1a\\ln|ax+b| + C\\)", "linear inside"],
            ["\\(e^{ax+b}\\)", "\\(\\frac1a e^{ax+b} + C\\)", "linear inside"],
            ["\\(\\sin(ax+b)\\)", "\\(-\\frac1a\\cos(ax+b) + C\\)", "linear inside"],
            ["\\(\\cos(ax+b)\\)", "\\(\\frac1a\\sin(ax+b) + C\\)", "linear inside"],
            ["\\((ax+b)^n\\)", "\\(\\frac{(ax+b)^{n+1}}{a(n+1)} + C\\)", "divide by a AND (n+1)"],
          ]],
          ["eg", "Find \\(\\int \\frac{(x+1)^2}{x}\\,dx\\).", [
            "Expand top: \\(\\frac{x^2 + 2x + 1}{x} = x + 2 + \\frac1x\\)",
            "<b>\\(\\frac{x^2}{2} + 2x + \\ln|x| + C\\)</b> ✅"
          ]],
          ["eg", "Find (a) \\(\\int e^{2x}dx\\) (b) \\(\\int (3x-1)^4dx\\) (c) \\(\\int \\frac{1}{2x+1}dx\\) (d) \\(\\int \\sin 3x\\,dx\\).", [
            "(a) <b>\\(\\frac12 e^{2x} + C\\)</b>",
            "(b) \\(\\frac{(3x-1)^5}{3 \\times 5}\\) = <b>\\(\\frac{(3x-1)^5}{15} + C\\)</b>",
            "(c) <b>\\(\\frac12\\ln|2x+1| + C\\)</b>",
            "(d) <b>\\(-\\frac13\\cos 3x + C\\)</b> ✅"
          ]],
          ["eg", "Given \\(f'(x) = \\cos 2x\\) and \\(f\\left(\\frac\\pi4\\right) = 3\\), find f(x).", [
            "\\(f(x) = \\frac12\\sin 2x + C\\) [A1]",
            "\\(\\frac12\\sin\\frac\\pi2 + C = 3\\) → \\(\\frac12 + C = 3\\) [M1]",
            "C = 2.5 → <b>\\(f(x) = \\frac12\\sin 2x + 2.5\\)</b> [A1] ✅"
          ]],
          ["trap", ["漏 + C = 失 A1（indefinite 一定要有）。", "\\(\\int \\frac{1}{x^2}dx = -\\frac1x + C\\)，唔係 ln。ln 只係 \\(\\frac1x\\)。", "\\(\\int \\sin x\\,dx = -\\cos x\\)：負號喺積分嗰邊（\\(\\frac{d}{dx}\\cos x = -\\sin x\\)）。", "\\(\\int (3x-1)^4\\) 要除 3 同除 5，唔好淨係除 5。"]],
        ],
      },
      {
        h: "Integration by inspection 觀察法 · substitution",
        min: 3,
        blocks: [
          ["key", "\\(\\int f(g(x))\\,g'(x)\\,dx = F(g(x)) + C\\). If the <b>derivative of the inside</b> sits outside (up to a constant), integrate the outside function as if the inside were one letter."],
          ["rhyme", "口訣 2", "見到入面嘅微分喺出面，就當佢一粒", "唔夠倍數就自己補返：\\(\\int x e^{x^2}dx = \\frac12 e^{x^2} + C\\)（\\(\\frac{d}{dx}x^2 = 2x\\)，所以補 ½）。"],
          ["table", ["If you see…", "Think", "Answer"], [
            ["\\(\\int 2x(x^2+1)^3dx\\)", "inside \\(x^2+1\\), derivative \\(2x\\) ✓", "\\(\\frac{(x^2+1)^4}{4} + C\\)"],
            ["\\(\\int \\frac{2x}{x^2+1}dx\\)", "top = derivative of bottom → \\(\\int \\frac{g'}{g}\\)", "\\(\\ln(x^2+1) + C\\)"],
            ["\\(\\int \\cos x\\,\\sin^3 x\\,dx\\)", "inside \\(\\sin x\\), derivative \\(\\cos x\\)", "\\(\\frac{\\sin^4 x}{4} + C\\)"],
            ["\\(\\int \\frac{\\cos x}{\\sin x}dx\\)", "\\(\\frac{g'}{g}\\) with g = sin x", "\\(\\ln|\\sin x| + C\\)"],
            ["\\(\\int x e^{x^2}dx\\)", "inside \\(x^2\\), need 2x → multiply by ½", "\\(\\frac12 e^{x^2} + C\\)"],
            ["\\(\\int \\frac{3x^2}{x^3+5}dx\\)", "\\(\\frac{g'}{g}\\) with g = x³ + 5", "\\(\\ln|x^3+5| + C\\)"],
          ]],
          ["note", "Pattern \\(\\int \\frac{g'(x)}{g(x)}dx = \\ln|g(x)| + C\\) shows up very often. Always check: <b>differentiate your answer, you must get back the original integrand</b>."],
          ["eg", "Find \\(\\int x(x^2+3)^5dx\\) using substitution.", [
            "Let \\(u = x^2 + 3\\), so \\(\\frac{du}{dx} = 2x\\) → \\(x\\,dx = \\frac12 du\\) [M1]",
            "\\(\\int x(x^2+3)^5dx = \\frac12\\int u^5du\\) [A1]",
            "\\(= \\frac12 \\times \\frac{u^6}{6} + C = \\frac{u^6}{12} + C\\)",
            "<b>\\(\\frac{(x^2+3)^6}{12} + C\\)</b> [A1] ✅"
          ]],
          ["eg", "Find the exact value of \\(\\int_0^1 2x\\,e^{x^2}dx\\).", [
            "Inside \\(x^2\\), derivative \\(2x\\) is present → \\(\\int 2x e^{x^2}dx = e^{x^2}\\) [M1]",
            "\\([e^{x^2}]_0^1 = e^1 - e^0\\) [M1]",
            "<b>e − 1</b> [A1] ✅ (definite + inspection: no need to change limits if you keep x)"
          ]],
          ["eg", "Find \\(\\int \\frac{x}{x^2+4}\\,dx\\).", [
            "Derivative of bottom = 2x, we only have x → multiply by ½",
            "<b>\\(\\frac12\\ln(x^2+4) + C\\)</b> (x² + 4 > 0 so no modulus needed) ✅"
          ]],
          ["trap", ["補常數時要乘「倒數」：缺 2 就乘 ½，唔係乘 2。", "Inside 唔係 linear 就唔可以淨係除 a（\\(\\int (x^2+1)^3dx \\neq \\frac{(x^2+1)^4}{4}\\)，因為冇 2x）。這種要先展開。", "\\(\\int \\frac{g'}{g}\\) 係 ln，但 \\(\\int \\frac{1}{g^2}\\) 唔係。"]]
        ],
      },
    ],
    summary: [
      "1/x 變 ln；1/x² 係 −1/x",
      "sin 積出 −cos；cos 積出 sin",
      "入面 ax + b，外面除 a",
      "見到入面嘅微分喺出面，就當佢一粒",
      "g′ 喺 g 上面 → ln|g|",
      "積完微分返檢查",
    ],
    practice: [
      { q: "\\(\\int e^{3x}\\,dx =\\)", m: 1, o: ["\\(3e^{3x} + C\\)", "\\(\\frac13 e^{3x} + C\\)", "\\(e^{3x} + C\\)", "\\(\\frac{e^{3x+1}}{3x+1} + C\\)"], a: "<b>B</b> [1]: linear inside, divide by 3." },
      { q: "\\(\\int \\frac{2x}{x^2+4}\\,dx =\\)", m: 1, o: ["\\(\\ln(x^2+4) + C\\)", "\\(\\frac{1}{x^2+4} + C\\)", "\\(2\\ln(x^2+4) + C\\)", "\\(x^2 \\ln(x^2+4) + C\\)"], a: "<b>A</b> [1]: numerator is the derivative of the denominator, so \\(\\ln(x^2+4)\\)." },
      { q: "Find \\(\\int x(x^2 + 3)^5\\,dx\\).", m: 3, a: "Inside \\(x^2 + 3\\), derivative 2x; need factor ½ [M1]<br>\\(\\frac12 \\times \\frac{(x^2+3)^6}{6}\\) [A1]<br><b>\\(\\frac{(x^2+3)^6}{12} + C\\)</b> [A1]" },
    ],
  },
  "math-13c": {
    title: "Definite integrals · Areas below the axis · Area between curves",
    intro: "5.11：定積分 F(b) − F(a) 要識手計 exact value；曲線喺 x 軸下面積分係負，面積要分段取絕對值；兩條曲線之間係上減下，交點做上下限。",
    parts: [
      {
        h: "Definite integrals 定積分",
        min: 3,
        blocks: [
          ["key", "<b>\\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\)</b> (upper − lower). Write \\(\\left[F(x)\\right]_a^b\\) then substitute. No + C in definite integrals."],
          ["table", ["Property", "Meaning"], [
            ["\\(\\int_a^b f = -\\int_b^a f\\)", "swapping limits flips the sign"],
            ["\\(\\int_a^a f = 0\\)", "zero-width"],
            ["\\(\\int_a^b kf = k\\int_a^b f\\)", "constants come out"],
            ["\\(\\int_a^b (f \\pm g) = \\int_a^b f \\pm \\int_a^b g\\)", "split sums"],
            ["\\(\\int_a^c f + \\int_c^b f = \\int_a^b f\\)", "join / split at c"],
            ["\\(\\int_a^b k\\,dx = k(b - a)\\)", "constant integrand"],
          ]],
          ["eg", "Evaluate \\(\\int_0^2 (3x^2 - 2x + 1)dx\\).", [
            "\\([x^3 - x^2 + x]_0^2\\) [M1]",
            "\\((8 - 4 + 2) - 0\\) = <b>6</b> [A1] ✅"
          ]],
          ["eg", "Find the exact value of \\(\\int_1^e \\frac2x\\,dx\\).", [
            "\\([2\\ln x]_1^e = 2\\ln e - 2\\ln 1\\) [M1]",
            "= 2 − 0 = <b>2</b> [A1] ✅ (ln e = 1, ln 1 = 0)"
          ]],
          ["eg", "Find the exact value of \\(\\int_0^{\\pi/6}\\cos 2x\\,dx\\).", [
            "\\(\\left[\\frac12\\sin 2x\\right]_0^{\\pi/6}\\) [M1]",
            "\\(\\frac12\\sin\\frac\\pi3 - \\frac12\\sin 0 = \\frac12 \\times \\frac{\\sqrt3}{2}\\)",
            "<b>\\(\\frac{\\sqrt3}{4}\\)</b> [A1] ✅ (radians!)"
          ]],
          ["eg", "Given \\(\\int_0^k (2x+1)dx = 12\\) with k > 0, find k.", [
            "\\([x^2 + x]_0^k = k^2 + k\\) [M1]",
            "\\(k^2 + k = 12\\) → \\(k^2 + k - 12 = 0\\) → (k + 4)(k − 3) = 0 [M1]",
            "k = 3 or −4; since k > 0, <b>k = 3</b> [A1] ✅"
          ]],
          ["eg", "Given \\(\\int_1^5 f(x)dx = 7\\) and \\(\\int_1^3 f(x)dx = 4\\), find (a) \\(\\int_3^5 f\\) (b) \\(\\int_1^5 (2f(x) + 1)dx\\).", [
            "(a) \\(\\int_3^5 f = 7 - 4 = \\) <b>3</b>",
            "(b) \\(2 \\times 7 + \\int_1^5 1\\,dx = 14 + (5 - 1) = \\) <b>18</b> ✅"
          ]],
          ["trap", ["上限代入減下限代入，次序唔好反。", "Exact value 題唔好俾 decimal（要 ln 2、π、√3、e − 1 呢類）。", "三角函數積分一定 radian mode。", "「Find k」嘅二次式有兩個答案，要用 k > 0 / limits 條件剔走一個。"]]
        ],
      },
      {
        h: "Area 面積：below the axis + between curves",
        min: 4,
        blocks: [
          ["grid", [
            ["5.11", "x 軸下面係負，分段取絕對值", "Area = \\(\\int |f|\\); split at roots"],
            ["5.11", "上減下，交點做上下限", "Area between curves = \\(\\int (\\text{top} - \\text{bottom})dx\\)"],
          ]],
          ["key", "<b>Area between curve and x-axis</b> = \\(\\int_a^b |f(x)|\\,dx\\). Where f < 0 the integral is negative, so split at every root, integrate each piece, take the <b>absolute value</b> of each and add.<br><b>Area between two curves</b> = \\(\\int_a^b (f(x) - g(x))\\,dx\\) where f ≥ g on [a, b]; limits are the x-coordinates of intersections."],
          ["table", ["Question says", "What to do"], [
            ["\\(\\int_a^b f\\,dx\\) (evaluate)", "signed answer, can be negative"],
            ["area between curve and x-axis from a to b", "split at roots in [a, b]; positive total"],
            ["area enclosed by curve and x-axis", "limits = roots of f (set f = 0)"],
            ["area enclosed by two curves", "solve f = g for limits; top − bottom"],
            ["curves cross inside the region", "split at crossing; swap top/bottom each side"],
            ["from a graph with regions A (above) and B (below)", "\\(\\int f = A - B\\), but area = A + B"],
          ]],
          ["eg", "Find the area between \\(y = x^2 - 4\\), the x-axis, x = 0 and x = 3.", [
            "Root at x = 2 inside [0, 3] → split [M1]",
            "\\(\\int_0^2 (x^2 - 4)dx = \\left[\\frac{x^3}{3} - 4x\\right]_0^2 = \\frac83 - 8 = -\\frac{16}{3}\\) → area \\(\\frac{16}{3}\\)",
            "\\(\\int_2^3 (x^2 - 4)dx = (9 - 12) - \\left(\\frac83 - 8\\right) = -3 + \\frac{16}{3} = \\frac73\\)",
            "Total = \\(\\frac{16}{3} + \\frac73 = \\) <b>\\(\\frac{23}{3}\\)</b> ✅ (If you integrated 0 to 3 in one go you get −3: WRONG for area.)"
          ]],
          ["eg", "<b>P1/P2 · 3 marks</b> Find the area enclosed by \\(y = x^2\\) and \\(y = x + 2\\).", [
            "Intersections: \\(x^2 = x + 2\\) → (x − 2)(x + 1) = 0 → x = −1, 2 [A1]",
            "Line is above parabola between them: \\(\\int_{-1}^{2}(x + 2 - x^2)dx\\) [M1]",
            "\\(\\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2} = \\frac{10}{3} - \\left(-\\frac76\\right)\\)",
            "= \\(\\frac{27}{6}\\) = <b>4.5</b> [A1] ✅"
          ]],
          ["eg", "Find the area enclosed by \\(y = x^3\\) and \\(y = x\\).", [
            "\\(x^3 = x\\) → x(x − 1)(x + 1) = 0 → x = −1, 0, 1 [A1]",
            "On [−1, 0]: \\(x^3 \\ge x\\); on [0, 1]: \\(x \\ge x^3\\) (they swap!) [R1]",
            "\\(\\int_{-1}^0 (x^3 - x)dx = \\left[\\frac{x^4}{4} - \\frac{x^2}{2}\\right]_{-1}^{0} = 0 - \\left(\\frac14 - \\frac12\\right) = \\frac14\\)",
            "\\(\\int_0^1 (x - x^3)dx = \\frac12 - \\frac14 = \\frac14\\)",
            "Total = <b>\\(\\frac12\\)</b> ✅ (by symmetry, double one side)"
          ]],
          ["trap", ["Curve 穿過 x 軸，一氣呵成積分會正負抵銷：面積題必須分段。", "Area 永遠正數；積分值（signed）可以負。", "Between curves：top − bottom，唔係 right − left，亦唔係減錯次序（會變負）。", "兩條 curve 喺 region 中間交叉，要分開兩段。", "Region 由 limits (vertical lines) 俾你，就唔好自己用 roots 做 limits（反之亦然）。"]],
        ],
      },
      {
        h: "Paper 2 GDC：area between curves",
        min: 1.5,
        blocks: [
          ["eg", "<b>P2 · 4 marks</b> (GDC) Find the area of the region bounded by \\(y = e^x\\), \\(y = 4 - x\\) and the y-axis.", [
            "Sketch: at x = 0, \\(4 - x = 4\\) is above \\(e^0 = 1\\) → top is 4 − x [R1]",
            "Intersection of \\(e^x = 4 - x\\) by GDC: x = 1.0737… (store as A) [A1]",
            "\\(\\text{Area} = \\int_0^{A} (4 - x - e^x)\\,dx\\) [M1]",
            "= <b>1.79</b> (3 s.f.) [A1] ✅"
          ]],
          ["trap", ["Calculator 喺 degree mode = trig 積分全錯。", "冇寫 integral set-up，只寫答案：最多得 A 分，M 分冇。", "用咗四捨五入嘅 limits 去計，答案多數差喺第 3 位有效數字。", "「Find exact value」題用 GDC 俾 decimal = 冇分（要手算）。"]],
        ],
      },
      {
        h: "Long questions 長題拆解法",
        min: 3,
        blocks: [
          ["flow", [["① 圈指令", "Circle: find, show that, hence, exact, sketch, area"], ["② 先做簡單 part", "Antiderivative, find C first; later parts reuse it"], ["③ Hence = 用返上一 part", "Don't restart from scratch"], ["④ 分步寫", "Each line one idea; each line can earn a mark"]]],
          ["eg", "A curve has gradient \\(f'(x) = 3x^2 - 6x\\) and passes through (1, −2). (a) Find f(x). (b) Find the coordinates of the stationary points. (c) Hence find the area enclosed by the curve and the x-axis.", [
            "<b>(a)</b> \\(f(x) = x^3 - 3x^2 + C\\); f(1) = 1 − 3 + C = −2 → C = 0. <b>\\(f(x) = x^3 - 3x^2\\)</b> [A1 M1 A1]",
            "<b>(b)</b> f′(x) = 3x(x − 2) = 0 → x = 0, 2. f(0) = 0, f(2) = 8 − 12 = −4. Stationary points <b>(0, 0) and (2, −4)</b> [M1 A1]",
            "<b>(c)</b> Roots: \\(x^2(x - 3) = 0\\) → x = 0 (touches), x = 3 [M1]. Between 0 and 3 the curve is below the axis (f(2) = −4) [R1]",
            "\\(\\int_0^3 (x^3 - 3x^2)dx = \\left[\\frac{x^4}{4} - x^3\\right]_0^3 = \\frac{81}{4} - 27 = -\\frac{27}{4}\\) [A1]",
            "Area = <b>\\(\\frac{27}{4}\\) = 6.75</b> (area is positive) [A1] ✅"
          ]],
          ["note", "Marker's wording: \"Hence\" means use the previous result (e.g. the stationary points tell you the curve is below the axis). \"Show that\" means every line must be visible, ending with the stated answer."]
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find", "列式，積分，+ C"],
            ["Hence", "用上題結果"],
            ["Show that", "由所給積分推到結論"],
            ["Calculate area", "先畫圖識別上下曲線，GDC 可用但要寫積分式"],
            ["Write down", "由結果直接得出"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• 不定積分：每項 +1 冪，記得 + C<br>• 由條件求 C：代入點 (a, b)<br>• Chain 逆：inspection \\(\\int f'(g)g'\\)，booklet 無 substitution 通用表<br>• 面積：\\(\\int_a^b f\\,dx\\)，GDC 驗算<br>• 兩曲線之間：上 − 下"],
          ["trap", [
            "漏 + C",
            "定積分上下限代錯",
            "面積在 x 軸下面變負號",
            "兩曲線面積，用錯誰上誰下",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有積分表同 area 公式。畫圖睇交點，決定分段。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["trap", [
            "漏 + C（indefinite）→ 失 A1。",
            "\\(\\int \\frac1{x^2}\\) 當成 ln。",
            "\\(\\int \\sin x = +\\cos x\\)（符號錯）。",
            "\\(\\int (ax+b)^n\\) 只除 (n+1)，唔除 a。",
            "Integrate 分數乘積／商，冇先展開或拆分。",
            "Definite integral 上下限代入次序反。",
            "Area 題一氣呵成積分，冇喺 root 分段。",
            "Between curves 用咗 bottom − top → 負面積。",
            "Curves 喺 region 內交叉冇分段。",
            "GDC 冇寫 integral + limits。",
            "GDC 用咗四捨五入 limits。",
            "Calculator 喺 degree mode。",
            "「Exact value」俾 decimal。",
            "積 f′ 搵 f 之後忘記代點搵 C。"
          ]],
          ["check", [
            "Write all 10 standard integrals (incl. linear versions) from memory.",
            "Spot \\(\\int g'/g = \\ln|g|\\) and inside-derivative patterns.",
            "Evaluate a definite integral with exact answers (ln, e, √3).",
            "Find C from a given point.",
            "Split an area at x-axis crossings and add absolute values.",
            "Area between two curves: limits, top − bottom, even when they swap.",
            "Use GDC fnInt with stored intersections and write the set-up.",
            "State what \"hence\" and \"show that\" require."
          ]]
        ],
      },
    ],
    summary: [
      "定積分：上限減下限，冇 C",
      "Exact value：保留 ln、e、π、√",
      "x 軸下面係負，分段取絕對值",
      "上減下，交點做上下限",
      "曲線中間交叉要分段",
    ],
    practice: [
      { q: "\\(\\int_1^4 \\frac{1}{\\sqrt x}\\,dx =\\)", m: 1, o: ["1.5", "2", "3", "4"], a: "<b>B</b> [1]: \\([2\\sqrt x]_1^4 = 4 - 2 = 2\\)." },
      { q: "\\(\\int_1^3 f(x)dx = 5\\) and \\(\\int_1^4 f(x)dx = 2\\). Then \\(\\int_3^4 f(x)dx =\\)", m: 1, o: ["7", "3", "−3", "−7"], a: "<b>C</b> [1]: 2 − 5 = −3." },
      { q: "Find the exact value of \\(\\int_0^{\\pi/4}\\sin 2x\\,dx\\).", m: 3, a: "\\(\\left[-\\frac12\\cos 2x\\right]_0^{\\pi/4}\\) [A1]<br>\\(-\\frac12\\cos\\frac\\pi2 + \\frac12\\cos 0\\) [M1]<br>= 0 + ½ = <b>\\(\\frac12\\)</b> [A1]" },
      { q: "Find the total area between the curve \\(y = x^2 - 4\\), the x-axis, x = 0 and x = 3.", m: 5, a: "Root x = 2 inside [0, 3], so split [M1 A1]<br>\\(\\int_0^2 = -\\frac{16}{3}\\) → area \\(\\frac{16}{3}\\) [A1]<br>\\(\\int_2^3 = \\frac73\\) [A1]<br>Total = <b>\\(\\frac{23}{3}\\)</b> [A1]" },
      { q: "Given that k > 0 and \\(\\int_0^k (2x + 1)\\,dx = 12\\), find the value of k.", m: 4, a: "\\([x^2 + x]_0^k = k^2 + k\\) [M1 A1]<br>\\(k^2 + k - 12 = 0\\) → (k + 4)(k − 3) = 0 [M1]<br>k = 3 (reject −4 since k > 0) [A1]" },
      { q: "Use your GDC to find the area of the region bounded by \\(y = e^x\\), \\(y = 4 - x\\) and the y-axis. Give your answer to 3 s.f.", m: 4, a: "Intersection \\(e^x = 4 - x\\) at x = 1.0737… [A1]<br>4 − x is above \\(e^x\\) for 0 ≤ x ≤ 1.07 [R1]<br>\\(\\int_0^{1.0737}(4 - x - e^x)dx\\) [M1]<br>= <b>1.79</b> [A1]" },
    ],
  },
  "math-14": {
    title: "Displacement · Velocity · Acceleration · Distance travelled",
    intro: "Kinematics = 微分 + 積分應用題：s、v、a 三個量用「微分落、積分上」連住。分數好穩，P1 P2 都考，睇完呢張 sheet 就識晒。",
    parts: [
      {
        h: "s, v, a ladder 樓梯",
        min: 2.5,
        blocks: [
          ["key", "<b>Displacement s(t)</b> = position relative to a fixed origin (a vector, can be negative). <b>Velocity</b> \\(v = \\frac{ds}{dt}\\) = rate of change of displacement. <b>Acceleration</b> \\(a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}\\) = rate of change of velocity.<br>Going up: \\(v = \\int a\\,dt\\), \\(s = \\int v\\,dt\\) (each step needs + C, found from an initial condition)."],
          ["html", "<div class=\"fn-hub\"><div class=\"hub-box hub-t\" style=\"--hc:#15803D\"><b>s(t)</b>displacement 位移 (m)</div><div class=\"hub-n\">v<small>m s⁻¹</small></div><div class=\"hub-box hub-l\" style=\"--hc:#1D4ED8\"><b>a(t)</b>acceleration (m s⁻²)</div><div class=\"hub-op\">微分落樓梯：s → v → a ・ 積分上樓梯：a → v → s（每層 + C）</div></div>"],
          ["note", "<b>常考 (frequent IB types):</b> P1 · 4-6 marks \"find the times when the particle is at rest\" then acceleration; \"find s given v and s(0)\"; P2 · 3-6 marks \"find the total distance travelled\" using \\(\\int|v|\\) on the GDC; \"justify that it is speeding up\" needs both signs (R1)."],
          ["rhyme", "口訣 1", "微分落樓梯，積分上樓梯，每上一層搵 C", "s → v → a differentiate (down). a → v → s integrate (up), using v(0), s(0) or another given value to find each C."],
          ["table", ["Question says", "Maths meaning"], [
            ["at rest / stationary / instantaneously at rest", "v = 0"],
            ["changes direction", "v = 0 <b>and v changes sign</b>"],
            ["speed", "|v| (always ≥ 0)"],
            ["initially / at the start", "t = 0"],
            ["at the origin / returns to its starting position", "s = 0 (or s = s(0))"],
            ["speeding up", "v and a have the <b>same sign</b>"],
            ["slowing down", "v and a have <b>opposite signs</b>"],
            ["constant velocity", "a = 0"],
            ["maximum / minimum velocity", "a = 0 (check ends of interval)"],
            ["maximum displacement from origin", "v = 0 (check s there, and at ends)"],
          ]],
          ["grid", [
            ["5.9", "微分落樓梯，積分上樓梯", "s → v → a differentiate; reverse integrate"],
            ["5.9", "靜止就 v 等於零", "At rest ⟹ v = 0"],
            ["5.9", "轉方向要 v 變號", "Change of direction ⟹ v = 0 AND sign change"],
            ["5.9", "位移照積，路程要加絕對值", "Displacement \\(\\int v\\); distance \\(\\int |v|\\)"],
            ["5.9", "v a 同號就加速，異號就減速", "Speeding up / slowing down test"],
            ["5.9", "最大速度睇 a = 0，最大速率睇 |v|", "Max velocity vs max speed"],
            ["5.9", "初始條件代 t = 0 搵 C", "Initial condition → C"],
            ["P2", "∫|v| 一定用 GDC，寫出 integral", "fnInt(abs(v),t,a,b)"],
          ]],
          ["eg", "\\(a = 6t - 4\\), v(0) = 2 and s(0) = 1. Find v and s.", [
            "\\(v = 3t^2 - 4t + C\\), v(0) = 2 → C = 2 → <b>\\(v = 3t^2 - 4t + 2\\)</b> [M1 A1]",
            "\\(s = t^3 - 2t^2 + 2t + C\\), s(0) = 1 → C = 1 → <b>\\(s = t^3 - 2t^2 + 2t + 1\\)</b> [M1 A1] ✅"
          ]],
          ["trap", ["每次積分都有新嘅 C，要用對應嘅條件：v(0) 搵 v 嘅 C，s(0) 搵 s 嘅 C。", "Units：s 用 m，v 用 m s⁻¹，a 用 m s⁻²（題目有 unit 就答案帶 unit）。"]]
        ],
      },
      {
        h: "At rest · direction · position 靜止同方向",
        min: 3,
        blocks: [
          ["eg", "A particle moves on a line with \\(s(t) = 2t^3 - 9t^2 + 12t\\), t ≥ 0. (a) Find v and a. (b) Find when it is at rest. (c) Does it change direction? (d) Find a at each rest time.", [
            "(a) <b>\\(v = 6t^2 - 18t + 12\\)</b>, <b>\\(a = 12t - 18\\)</b> [A1 A1]",
            "(b) v = 6(t² − 3t + 2) = 6(t − 1)(t − 2) = 0 → <b>t = 1 and t = 2</b> [M1 A1]",
            "(c) v is a positive-leading parabola: v > 0 for t < 1, v < 0 for 1 < t < 2, v > 0 for t > 2. v changes sign at both → <b>changes direction at t = 1 and t = 2</b> [R1]",
            "(d) a(1) = 12 − 18 = <b>−6</b>; a(2) = 24 − 18 = <b>6</b> ✅"
          ]],
          ["eg", "For \\(s(t) = 2t^3 - 9t^2 + 12t\\) find the position at t = 1, 2, 3 and the displacement and distance travelled for 0 ≤ t ≤ 3.", [
            "s(0) = 0; s(1) = 2 − 9 + 12 = 5; s(2) = 16 − 36 + 24 = 4; s(3) = 54 − 81 + 36 = 9",
            "Displacement = s(3) − s(0) = <b>9 m</b>",
            "Pieces: 0→1: +5; 1→2: −1 (so 1); 2→3: +5. Distance = 5 + 1 + 5 = <b>11 m</b> ✅"
          ]],
          ["eg", "\\(s(t) = t^3 - 6t^2 + 9t\\). When does the particle return to its starting position?", [
            "Starting position s(0) = 0",
            "\\(t(t^2 - 6t + 9) = t(t - 3)^2 = 0\\) → t = 0 or t = 3",
            "Returns at <b>t = 3</b> (also at rest then, since v = 3(t − 1)(t − 3) = 0) ✅"
          ]],
          ["trap", ["v = 0 唔等於轉方向：要睇 v 有冇變號（例如 \\(v = (t-2)^2\\) 喺 t = 2 靜止但冇轉方向）。", "「Position at time t」要代入 s，唔好代入 v。", "要列表或者畫 sign line 證明變號（R1），唔好只講「因為 v = 0」。"]]
        ],
      },
      {
        h: "Displacement vs distance 位移同路程",
        min: 3.5,
        blocks: [
          ["key", "<b>Displacement</b> from \\(t_1\\) to \\(t_2\\) = \\(\\int_{t_1}^{t_2} v\\,dt\\) = \\(s(t_2) - s(t_1)\\) (signed).<br><b>Total distance travelled</b> = \\(\\int_{t_1}^{t_2} |v|\\,dt\\) (always ≥ 0) = sum of the absolute displacements between turning points."],
          ["table", ["", "Displacement", "Distance travelled"], [
            ["Formula", "\\(\\int v\\,dt\\)", "\\(\\int |v|\\,dt\\)"],
            ["Sign", "can be negative", "never negative"],
            ["Hand method", "s(end) − s(start)", "find v = 0 times, split, add absolute pieces"],
            ["GDC method", "fnInt(v,t,a,b)", "fnInt(abs(v),t,a,b)"],
            ["Equal when…", "v never changes sign (then distance = |displacement|)", ""],
          ]],
          ["rhyme", "口訣 2", "位移照積，路程要加絕對值", "P1: solve v = 0, integrate each piece, take positive, add. P2: fnInt(abs(v)) straight away, but still write the integral."],
          ["eg", "\\(v = 10 - 2t\\) m s⁻¹, s(0) = 0, for 0 ≤ t ≤ 8. Find (a) when at rest (b) displacement (c) total distance.", [
            "(a) 10 − 2t = 0 → <b>t = 5</b> [A1]",
            "\\(s = 10t - t^2\\) (s(0) = 0 → C = 0) [M1]",
            "(b) Displacement = s(8) − s(0) = 80 − 64 = <b>16 m</b> [A1]",
            "(c) s(5) = 50 − 25 = 25 (moves forward 25). s(8) = 16 so back 9 from t = 5 to t = 8. Distance = 25 + 9 = <b>34 m</b> [M1 A1] ✅"
          ]],
          ["eg", "\\(v = 2t - 6\\) for 0 ≤ t ≤ 5. Find the displacement and total distance.", [
            "v = 0 at t = 3 [A1]",
            "Displacement: \\([t^2 - 6t]_0^5 = 25 - 30 = \\) <b>−5</b> [A1]",
            "0→3: \\([t^2 - 6t]_0^3 = -9\\) → 9. 3→5: \\((25 - 30) - (9 - 18) = 4\\) [M1]",
            "Distance = 9 + 4 = <b>13</b> ✅"
          ]],
          ["eg", "<b>P2 · 4 marks</b> (GDC) A particle has \\(v(t) = 10\\sin\\left(\\frac t2\\right)\\) m s⁻¹, 0 ≤ t ≤ 8. Find the distance travelled and the displacement.", [
            "Radian mode! v = 0 when t/2 = π → t = 2π ≈ 6.28, inside [0, 8] so the sign changes [R1]",
            "Distance = \\(\\int_0^8 |10\\sin(t/2)|\\,dt\\) [M1] = <b>46.9 m</b> [A1]",
            "Displacement = \\(\\int_0^8 10\\sin(t/2)\\,dt\\) = <b>33.1 m</b> [A1]",
            "Check by hand: \\([-20\\cos(t/2)]\\): 0 to 2π gives 40; 2π to 8 gives −6.93; distance 40 + 6.93, displacement 40 − 6.93 ✅"
          ]],
          ["trap", ["問 distance 你計 displacement = 全錯。", "GDC 計 ∫|v| 一定要寫出條 integral 同 limits 先有 M1。", "Distance 係分段加絕對值，唔係 s(end) − s(start)。", "v 變號喺 interval 入面，唔分段直接積分會正負抵銷。"]]
        ],
      },
      {
        h: "Speeding up · slowing down · max values",
        min: 3,
        blocks: [
          ["key", "<b>Speeding up</b>: v and a same sign (both + or both −). <b>Slowing down</b>: v and a opposite signs. Always say \"v = … and a = …, so …\" with both numbers/signs."],
          ["rhyme", "口訣 3", "同號加速，異號減速；最大速度睇 a = 0，最大速率睇 |v|", "Max velocity: solve a = 0 (v′ = 0), then compare with v at the endpoints. Max speed: biggest |v|, which may be a negative v."],
          ["eg", "<b>P1 · 3 marks</b> \\(v = t^2 - 5t + 4\\). Is the particle speeding up or slowing down at t = 2? Justify.", [
            "v(2) = 4 − 10 + 4 = −2 [A1]",
            "a = 2t − 5 → a(2) = −1 [A1]",
            "v and a are both negative (same sign) → <b>speeding up</b> [R1] ✅"
          ]],
          ["eg", "\\(v = 4 - t^2\\). Describe the motion at t = 1 and at t = 3.", [
            "a = −2t",
            "t = 1: v = 3 (+), a = −2 (−) → opposite signs → <b>slowing down</b> (still moving forward)",
            "t = 3: v = −5 (−), a = −6 (−) → same sign → <b>speeding up</b> (moving backwards) ✅"
          ]],
          ["eg", "\\(v = 12t - 3t^2\\) for 0 ≤ t ≤ 5. Find the maximum velocity and the maximum speed.", [
            "\\(a = 12 - 6t = 0\\) → t = 2, v(2) = 24 − 12 = 12 [M1 A1]",
            "Endpoints: v(0) = 0; v(5) = 60 − 75 = −15 [M1]",
            "Maximum velocity = <b>12 m s⁻¹</b> (at t = 2)",
            "Maximum speed = largest |v| = |−15| = <b>15 m s⁻¹</b> (at t = 5) [A1] ✅"
          ]],
          ["trap", ["Max velocity ≠ max speed（v = −15 嘅 speed 係 15，大過 v = 12）。", "Speeding up / slowing down 要同時講 v 同 a 嘅符號，淨係講 a > 0 = 0 分。", "Max 要檢查端點，唔好淨係 a = 0。"]]
        ],
      },
      {
        h: "v–t graphs & Paper 2 GDC",
        min: 3,
        blocks: [
          ["key", "On a velocity–time graph: <b>gradient = acceleration</b>; <b>signed area under the graph = displacement</b>; <b>total area (all positive) = distance</b>; v = 0 at the t-axis crossings; max |v| = highest or lowest point."],
          ["rhyme", "口訣 4", "斜率係加速，面積係位移，面積全加就係路程", "Area above the t-axis is + displacement, below is −. Distance adds all areas as positives."],
          ["table", ["Task", "GDC route", "Write down"], [
            ["Plot v(t), find times v = 0", "Graph → zero / root (window 0 ≤ t ≤ T)", "t = …"],
            ["Distance travelled", "TI-84: MATH 9 fnInt(abs(v), t, a, b).  Casio: OPTN CALC ∫dx.  Nspire: ∫ template", "\\(\\int_a^b |v|dt\\) = value"],
            ["Acceleration at a time t₀", "Gradient of v graph at t₀: nDeriv / d/dx at t₀ (or differentiate by hand)", "a(t₀) = …"],
            ["Max / min of v or s", "Graph → maximum / minimum", "t = …, value = …"],
            ["Time when s = value", "Graph s(t) and y = value → intersect", "t = …"],
            ["Check units", "m, m s⁻¹, m s⁻²", "—"],
          ]],
          ["note", "Radian mode for any trig model. Use a sensible window (set t-range from the question, e.g. 0 ≤ t ≤ 8). Quote 3 s.f. unless told otherwise. Write the set-up first (M1) then the value (A1)."],
          ["eg", "From a v–t graph: v rises linearly from 0 at t = 0 to 8 at t = 4, stays 8 until t = 10, then falls linearly to 0 at t = 14. Find (a) acceleration for 0 < t < 4 (b) distance.", [
            "(a) Gradient = (8 − 0) ÷ (4 − 0) = <b>2 m s⁻²</b> [A1]",
            "(b) Area = trapezium: ½(parallel sides)(height) = ½ × (6 + 14) × 8 [M1] (parallel sides: top 6 wide, base 14 wide)",
            "= ½ × 20 × 8 = <b>80 m</b> [A1] ✅ (top is from t = 4 to 10 = 6 wide; base 14)"
          ]],
          ["trap", ["Calculator degree mode：trig v(t) 全錯。", "冇寫 ∫|v| 集合，只寫答案：失 M 分。", "Graph 面積喺 t 軸下面當正數去加位移（位移要減）。"]]
        ],
      },
      {
        h: "Long question 長題拆解法",
        min: 3,
        blocks: [
          ["flow", [["① 抄資料", "List: a(t) or v(t) or s(t); initial v(0), s(0); interval"], ["② 一步一步上／落", "Differentiate or integrate; find C immediately"], ["③ 翻譯字眼", "at rest → v = 0; distance → |v|; speeding up → signs"], ["④ 每個 part 單獨交代", "Write answer + unit"]]],
          ["eg", "<b>P1/P2 · 11 marks (long)</b> A particle moves in a straight line with acceleration \\(a = 6t - 12\\) m s⁻², 0 ≤ t ≤ 4. Initially v = 9 and s = 0. (a) Find v(t). (b) Find when the particle is at rest. (c) Find s(t). (d) Find the total distance travelled. (e) Is it speeding up or slowing down at t = 3.5?", [
            "(a) \\(v = 3t^2 - 12t + C\\); v(0) = 9 → C = 9. <b>\\(v = 3t^2 - 12t + 9\\)</b> [M1 A1]",
            "(b) \\(3(t^2 - 4t + 3) = 3(t - 1)(t - 3) = 0\\) → <b>t = 1, 3</b> [M1 A1]",
            "(c) \\(s = t^3 - 6t^2 + 9t + C\\); s(0) = 0 → C = 0. <b>\\(s = t^3 - 6t^2 + 9t\\)</b> [M1 A1]",
            "(d) s(1) = 1 − 6 + 9 = 4; s(3) = 27 − 54 + 27 = 0; s(4) = 64 − 96 + 36 = 4 [A1]. Distance = |4 − 0| + |0 − 4| + |4 − 0| = 4 + 4 + 4 = <b>12 m</b> [M1 A1]",
            "(e) v(3.5) = 3(2.5)(0.5) = 3.75 (+). a(3.5) = 21 − 12 = 9 (+). Same sign → <b>speeding up</b> [A1 R1] ✅"
          ]],
          ["note", "Check shortcut: v = 3(t − 1)(t − 3) has the factor form, so sign changes at t = 1 and 3. Displacement for (d) would be s(4) − s(0) = 4, not 12, a quick way to catch mixing them up."]
        ],
      },
      {
        h: "IB 考試位 · 題型 + 命令詞",
        min: 2.5,
        blocks: [
          ["table", ["命令詞 / 題型", "拎滿分要點"], [
            ["Find", "列式 + GDC 結果"],
            ["Determine when", "令 v = 0 或 a = 0 後解 t"],
            ["Distance travelled", "\\(\\int|v|\\), 唔係 displacement"],
            ["Interpret", "用 context 同單位解釋正負號"],
            ["Show that", "由所給式推導"],
          ]],
          ["note", "<b>常見題型 → 一句答法</b><br>• s、v、a 轉換：求導 / 積分<br>• v = 0 → 方向改變<br>• Distance：\\(\\int|v|\\,dt\\)，用 GDC<br>• Displacement：\\(\\int v\\,dt\\)<br>• 由 a 積分求 v，要用初始條件求 C"],
          ["trap", [
            "Distance 同 displacement 搞錯",
            "積分漏 + C，冇用初始條件",
            "t 範圍錯，例如 t ≥ 0",
            "速度負係方向，唔係減速",
          ]],
          ["note", "<b>⏱ 考試 tips</b>：Booklet 有 v = ds/dt、a = dv/dt 同 distance、displacement 積分。GDC 對 |v| 積分最快。"],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["trap", [
            "漏 + C，或者用錯條件搵 C（v 同 s 各有自己 C）。",
            "At rest 當成 a = 0。",
            "Change direction 冇驗證 v 變號。",
            "Distance 同 displacement 混淆。",
            "計 ∫|v| 冇分段／冇寫 integral。",
            "Speeding up 只睇 a 嘅符號。",
            "Max velocity 同 max speed 唔同。",
            "最大值冇比較端點。",
            "Trig 題用咗 degree mode。",
            "漏 unit（m、m s⁻¹、m s⁻²）。",
            "「Position」題代入 v 而唔係 s。",
            "Rounded 中間數值，令最後第 3 位有效數字錯。"
          ]],
          ["check", [
            "Write the s → v → a ladder and the 5 \"question says\" translations from memory.",
            "Integrate a to v to s, finding C each time.",
            "Find at-rest times and prove a change of direction (sign check).",
            "Compute displacement and distance for the same motion (by hand).",
            "Use fnInt(abs(v),t,a,b) and write the set-up.",
            "Justify speeding up / slowing down with both signs.",
            "Distinguish max velocity from max speed.",
            "Read gradient and area from a v–t graph."
          ]]
        ],
      },
    ],
    summary: [
      "微分落樓梯，積分上樓梯；每上一層搵 C",
      "靜止 v = 0；轉方向要 v 變號",
      "位移照積，路程要加絕對值",
      "同號加速，異號減速",
      "最大速度睇 a = 0，最大速率睇 |v|",
      "斜率係加速，面積係位移",
      "GDC：fnInt(abs(v))，radian mode，寫 integral"
    ],
    practice: [
      { q: "If \\(s(t) = 5t^2 - 2t\\), the velocity at t = 3 is:", m: 1, o: ["28", "39", "30", "10"], a: "<b>A</b> [1]: v = 10t − 2 = 28." },
      { q: "A particle has \\(v(t) = t^2 - 4t\\). Its acceleration at t = 3 is:", m: 1, o: ["−3", "2", "5", "−12"], a: "<b>B</b> [1]: a = 2t − 4 = 2." },
      { q: "\\(v = 2t - 6\\) for 0 ≤ t ≤ 5. The total distance travelled is:", m: 1, o: ["−5", "5", "9", "13"], a: "<b>D</b> [1]: 9 (t 0 to 3) + 4 (t 3 to 5) = 13. (−5 is the displacement.)" },
      { q: "A particle has \\(v = 4 - t^2\\). At t = 3 the particle is:", m: 1, o: ["speeding up, moving in the negative direction", "slowing down, moving in the negative direction", "speeding up, moving in the positive direction", "at rest"], a: "<b>A</b> [1]: v = −5, a = −6, same sign → speeding up; v < 0 so negative direction." },
      { q: "A particle is instantaneously at rest and changes direction when:", m: 1, o: ["a = 0", "v = 0 and v changes sign", "s = 0", "v = 0 only"], a: "<b>B</b> [1]." },
      { q: "A particle has displacement \\(s = t^3 - 6t^2 + 9t\\). Find the times when it is at rest and its acceleration at t = 3.", m: 4, a: "v = 3t² − 12t + 9 [A1]<br>3(t − 1)(t − 3) = 0 [M1]<br><b>t = 1 and t = 3</b> [A1]<br>a = 6t − 12 → <b>a(3) = 6</b> [A1]" },
      { q: "\\(v = 4 - 2t\\) and s(0) = 3. Find s(5).", m: 3, a: "\\(s = 4t - t^2 + C\\), C = 3 [M1 A1]<br>s(5) = 20 − 25 + 3 = <b>−2</b> [A1]" },
      { q: "\\(a = 6t - 4\\), v(0) = 2, s(0) = 1. Find the displacement s at t = 2.", m: 4, a: "\\(v = 3t^2 - 4t + 2\\) [M1 A1]<br>\\(s = t^3 - 2t^2 + 2t + 1\\) [A1]<br>s(2) = 8 − 8 + 4 + 1 = <b>5</b> [A1]" },
      { q: "\\(v = 2t - 6\\) for 0 ≤ t ≤ 5. Find the displacement and the total distance travelled.", m: 4, a: "Displacement \\([t^2 - 6t]_0^5 = \\) <b>−5</b> [A1]<br>v = 0 at t = 3 [M1]<br>Distance = |−9| + 4 [M1] = <b>13</b> [A1]" },
      { q: "A particle moves with \\(v(t) = 10\\sin\\left(\\frac t2\\right)\\) m s⁻¹. Find the distance travelled for 0 ≤ t ≤ 8.", m: 3, a: "\\(\\int_0^8 |10\\sin(t/2)|\\,dt\\) [M1] (radians; sign change at t = 2π ≈ 6.28 [R1])<br>= <b>46.9 m</b> [A1]" },
      { q: "\\(v = t^2 - 5t + 4\\). Is the particle speeding up or slowing down at t = 2? Justify your answer.", m: 3, a: "v(2) = −2 [A1]<br>a = 2t − 5 → a(2) = −1 [A1]<br>Same sign → <b>speeding up</b> [R1]" },
      { q: "\\(v = 12t - 3t^2\\) for 0 ≤ t ≤ 5. Find the maximum speed of the particle.", m: 4, a: "a = 12 − 6t = 0 → t = 2, v = 12 [M1 A1]<br>v(5) = 60 − 75 = −15 [M1]<br>Max speed = |−15| = <b>15 m s⁻¹</b> (at t = 5) [A1]" }
    ],
  },
});
