/* ⏱ 10-minute fast notes · Physics SL (guide first assessed 2025; format: see js/fastnotes.js). */
IB.addFast({
  "phys-1": {
    title: "Kinematics · suvat · Motion graphs · Projectiles · Terminal speed",
    intro: "A.1 一條線：先分類（直線？圖？拋射？），再揀工具。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "A.1 總覽 + 口訣 + 數據",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "先分類、後揀式、符號一次定", "Step 1 classify (straight-line constant a? a graph? a projectile?) → Step 2 pick the tool → Step 3 fix the positive direction ONCE and keep it to the end."],
          ["note", "<b>常考 (perennial)</b>: P2 suvat/projectile calculations (2-4 marks) with unit + s.f.; v–t graph area/gradient; 'Explain terminal speed' (3 marks, drag ↑ → drag = weight → resultant force zero); 'describe the effect of air resistance on a projectile' (2 marks). P1 MCQ loves 'acceleration at the top' and 'two balls land together'."],
          ["flow", [["① 分類", "Constant acceleration in a line → suvat. Graph given → gradient / area. Launched at an angle or horizontally → projectile."], ["② 列表", "Write s, u, v, a, t. Tick the 3 you know, circle the 1 you want, the left-over one is the one NOT in your equation."], ["③ 計 + 檢", "Substitute with signs, keep 3 s.f., unit + direction for vectors, check sign makes physical sense."]]],
          ["grid", [
            ["A.1", "五個字，剔三個，揀冇第五個", "suvat: choose the equation that leaves out the variable you neither know nor want"],
            ["A.1", "suvat 只限 a 恆定", "Not valid if acceleration changes (e.g. with drag)"],
            ["A.1", "位移有向，路程冇向", "displacement / velocity / acceleration = vectors"],
            ["A.1", "s–t 睇斜率，v–t 斜率 a 面積 s", "Gradient of s–t = v; gradient of v–t = a; area under v–t = displacement"],
            ["A.1", "曲線要畫切線", "Instantaneous value on a curve = gradient of the tangent"],
            ["A.1", "橫行唔加速，直落受地心", "Horizontal: a = 0; vertical: a = g downwards"],
            ["A.1", "t 做橋，橫直分開計", "Time is the only quantity shared by both directions"],
            ["A.1", "最高點 v 直 = 0，a 仍然 g", "At the top of a vertical throw: v = 0 but a = 9.81 m s⁻² downwards"],
            ["A.1", "斜拋最高點仲有橫速", "At the top of a projectile path v = u cos θ (horizontal), not zero"],
            ["A.1", "阻力隨速度升，升到等於重量就唔再加速", "Terminal speed: drag = weight, resultant force = 0"],
            ["A.1", "有阻力：矮、近、斜落", "Lower max height, shorter range, steeper descent"],
            ["A.1", "同向相減，對頭相加", "Relative velocity in 1-D: v(A rel B) = v(A) − v(B)"],
          ]],
          ["table", ["Quantity / constant", "Value / unit", "Note"], [
            ["Acceleration of free fall g", "9.81 m s⁻² (data booklet; near Earth's surface)", "Use 9.81, not 10, unless the question says so"],
            ["Distance, displacement", "m", "displacement is a vector"],
            ["Speed, velocity", "m s⁻¹", "convert km h⁻¹ → m s⁻¹ by ÷ 3.6"],
            ["Acceleration", "m s⁻²", "negative a with positive u = slowing down"],
            ["Significant figures", "Answer to 2–3 s.f. (same as the data given)", "'Show that' → give one more s.f. than the value shown"],
          ]],
        ],
      },
      {
        h: "Definitions + vector 定義 · 向量",
        min: 2,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word)</b><br><b>Distance:</b> the total length of the path travelled (scalar, m).<br><b>Displacement:</b> the change in position of an object in a given direction (vector, m) — the straight-line distance from start to finish with direction.<br><b>Speed:</b> the rate of change of distance (scalar).<br><b>Velocity:</b> the rate of change of displacement (vector).<br><b>Average velocity</b> = total displacement ÷ total time. <b>Average speed</b> = total distance ÷ total time.<br><b>Instantaneous velocity:</b> the velocity at one moment = gradient of the displacement–time graph at that point.<br><b>Acceleration:</b> the rate of change of velocity (vector, m s⁻²).<br><b>Uniform acceleration:</b> constant rate of change of velocity (same size and direction).<br><b>Scalar:</b> has magnitude only. <b>Vector:</b> has magnitude and direction."],
          ["table", ["Scalar (size only)", "Vector (size + direction)"], [
            ["distance", "displacement"],
            ["speed", "velocity"],
            ["time, mass, energy, power, temperature", "acceleration, force, momentum, weight"],
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A runner completes one lap of a 400 m track in 50 s. Find the average speed and average velocity.", [
            "Average speed = distance ÷ time = 400 ÷ 50 = <b>8.0 m s⁻¹</b>",
            "After one lap the runner is back at the start → displacement = 0",
            "Average velocity = 0 ÷ 50 = <b>0 m s⁻¹</b> ✅ (speed ≠ velocity!)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A car goes 30 km east then 40 km north. Find the distance and the displacement.", [
            "Distance = 30 + 40 = <b>70 km</b> (add the path lengths)",
            "Displacement = √(30² + 40²) = <b>50 km</b> (Pythagoras)",
            "Direction: tan θ = 40/30 → θ = 53.1° north of east ✅",
          ]],
          ["trap", ["Velocity 要有方向：答「4.0 m s⁻¹ downwards」，淨係寫 4.0 當一半分。", "Average speed ≠ magnitude of average velocity，除非係直線單向行。"]],
        ],
      },
      {
        h: "suvat 五揀三 · 恆定加速度",
        min: 4,
        blocks: [
          ["key", "<b>只限 uniform acceleration（直線）</b><br>v = u + at　｜　s = ut + ½at²　｜　v² = u² + 2as　｜　s = ½(u + v)t<br>s = displacement，u = initial velocity，v = final velocity，a = acceleration，t = time。全部 vector，要有符號。"],
          ["table", ["Missing variable", "Use this equation", "Typical clue"], [
            ["s", "v = u + at", "no distance mentioned"],
            ["v", "s = ut + ½at²", "final speed not given / not asked"],
            ["t", "v² = u² + 2as", "no time mentioned (braking distance, free fall height)"],
            ["a", "s = ½(u + v)t", "acceleration not given and not asked"],
          ]],
          ["rhyme", "口訣", "冇咗邊個就用邊條：冇 s 用 v=u+at、冇 t 用 v²、冇 v 用 ut、冇 a 用平均", "Write the 5 letters, tick the known, and let the missing one choose the equation. If the quantity you do not need is t, use v² = u² + 2as."],
          ["eg", "<b>P2 · 3 marks</b> — A stone is dropped from rest from a bridge 45 m above water. Ignore air resistance. Find the time to fall and the speed on impact.", [
            "Take down as positive: u = 0, a = +9.81, s = 45 (t and v unknown)",
            "Time: s = ut + ½at² → 45 = ½(9.81)t² → t = √(90/9.81) = <b>3.03 s</b>",
            "Speed: v = u + at = 0 + 9.81 × 3.03 = <b>29.7 m s⁻¹ downwards</b> ✅",
            "Check without t: v² = 0 + 2(9.81)(45) = 882.9 → v = 29.7 ✓",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A car travelling at 25 m s⁻¹ brakes with a constant deceleration of 6.0 m s⁻². Find the stopping distance and stopping time.", [
            "Take direction of motion as positive: u = +25, v = 0, a = −6.0",
            "Distance: v² = u² + 2as → 0 = 625 − 12s → s = 625 ÷ 12 = <b>52 m</b>",
            "Time: v = u + at → 0 = 25 − 6.0t → t = 25 ÷ 6.0 = <b>4.2 s</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A ball is thrown vertically upwards at 15 m s⁻¹ from the ground. Find (a) maximum height, (b) time to return to the ground.", [
            "Take up as positive: u = +15, a = −9.81, and at the top v = 0",
            "(a) v² = u² + 2as → 0 = 225 − 2(9.81)s → s = 225 ÷ 19.62 = <b>11.5 m</b>",
            "Time to the top: v = u + at → 0 = 15 − 9.81t → t = 1.53 s",
            "(b) Up and down take equal time (same height, no air resistance) → total = 2 × 1.53 = <b>3.06 s</b> ✅",
            "Check: s = 0 → 0 = 15t − 4.905t² → t = 15 ÷ 4.905 = 3.06 s ✓",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A stone is thrown upwards at 12 m s⁻¹ from the edge of a cliff 20 m above the sea and misses the cliff on the way down. Find the time to reach the sea and the impact speed.", [
            "Up positive: u = +12, a = −9.81, final displacement s = <b>−20</b> (sea is below the start)",
            "Speed first (no t needed): v² = 12² + 2(9.81)(20) = 144 + 392.4 = 536.4 → v = <b>23.2 m s⁻¹ downwards</b> (so v = −23.2)",
            "Time: v = u + at → −23.2 = 12 − 9.81t → t = 35.2 ÷ 9.81 = <b>3.58 s</b> ✅",
            "Check with quadratic: −20 = 12t − 4.905t² → 4.905t² − 12t − 20 = 0 → t = 3.58 s (reject the negative root)",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A train speeds up uniformly from 5.0 m s⁻¹ to 25 m s⁻¹ while travelling 400 m. Find the acceleration and the time taken.", [
            "u = 5.0, v = 25, s = 400 (a and t unknown)",
            "Acceleration: v² = u² + 2as → 625 = 25 + 800a → a = 600 ÷ 800 = <b>0.75 m s⁻²</b>",
            "Time: s = ½(u + v)t → 400 = ½(30)t → t = 400 ÷ 15 = <b>27 s</b> ✅",
          ]],
          ["trap", ["suvat 只限恆定加速度；有 drag、變力就用唔到。", "揀咗向上為正，g 就係 −9.81，成條題都唔好轉。", "Quadratic 兩個根：負時間要捨棄。", "停車題 v = 0；落地題 s 可以係負數（低過起點）。"]],
        ],
      },
      {
        h: "Motion graphs 運動圖",
        min: 3,
        blocks: [
          ["table", ["Graph", "Gradient =", "Area under graph =", "Straight line means"], [
            ["displacement–time (s–t)", "velocity", "nothing useful", "constant velocity"],
            ["velocity–time (v–t)", "acceleration", "displacement (change in position)", "constant acceleration"],
            ["acceleration–time (a–t)", "rate of change of acceleration (not needed)", "change in velocity Δv", "constant acceleration if horizontal"],
          ]],
          ["table", ["Shape", "s–t graph", "v–t graph"], [
            ["horizontal line", "at rest", "constant velocity (a = 0)"],
            ["straight sloped line", "constant velocity", "constant acceleration"],
            ["curve getting steeper", "speeding up", "acceleration increasing"],
            ["curve flattening out", "slowing down", "acceleration decreasing (e.g. approaching terminal speed)"],
            ["line below the axis", "moving back / negative displacement", "velocity negative (moving in the negative direction)"],
          ]],
          ["rhyme", "口訣", "s–t 斜率 v，v–t 斜率 a，v–t 面積 s", "Area below the time axis is negative displacement; total displacement = areas above minus areas below, total distance = add all areas."],
          ["eg", "<b>P2 · 4 marks</b> — A car moves with this v–t graph: 0–10 s uniform acceleration from 0 to 20 m s⁻¹; 10–30 s constant 20 m s⁻¹; 30–40 s uniform deceleration to rest. Find each acceleration, the total distance and the average velocity.", [
            "a (0–10 s) = Δv/Δt = (20 − 0)/10 = <b>+2.0 m s⁻²</b>; a (10–30 s) = <b>0</b>; a (30–40 s) = (0 − 20)/10 = <b>−2.0 m s⁻²</b>",
            "Areas: triangle ½ × 10 × 20 = 100 m; rectangle 20 × 20 = 400 m; triangle ½ × 10 × 20 = 100 m",
            "Total displacement = 100 + 400 + 100 = <b>600 m</b>",
            "Average velocity = total displacement ÷ total time = 600 ÷ 40 = <b>15 m s⁻¹</b> ✅ (not 20!)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — On a curved s–t graph a tangent drawn at t = 3.0 s passes through (1.0 s, 2.0 m) and (5.0 s, 18.0 m). Find the instantaneous velocity at t = 3.0 s.", [
            "Instantaneous velocity = gradient of the <b>tangent</b> at that point",
            "Gradient = Δs/Δt = (18.0 − 2.0)/(5.0 − 1.0) = 16.0/4.0 = <b>4.0 m s⁻¹</b> ✅",
            "Do NOT use s ÷ t from the origin: that gives the average velocity, not the instantaneous velocity.",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A v–t graph is a straight line from +8.0 m s⁻¹ at t = 0 to −4.0 m s⁻¹ at t = 6.0 s, crossing zero at t = 4.0 s. Find displacement and distance in 6.0 s.", [
            "Area above axis (0–4 s): ½ × 4.0 × 8.0 = +16 m",
            "Area below axis (4–6 s): ½ × 2.0 × 4.0 = −4.0 m",
            "Displacement = 16 − 4.0 = <b>12 m</b>; distance = 16 + 4.0 = <b>20 m</b> ✅",
          ]],
          ["trap", ["曲線 s–t 求 instantaneous velocity：要畫 tangent，唔可以 s ÷ t。", "數格仔面積：睇清楚每格代表幾多 m（x 軸 × y 軸刻度）。", "v–t 圖交 x 軸 = 轉頭，唔係停喺原點；位移同路程唔同。"]],
        ],
      },
      {
        h: "Projectiles 拋射運動",
        min: 4,
        blocks: [
          ["key", "<b>橫直分開，t 做橋（忽略 air resistance）</b><br>Horizontal：u<sub>x</sub> = u cos θ，a = 0 → x = u<sub>x</sub>t（等速）<br>Vertical：u<sub>y</sub> = u sin θ，a = −g → 用 suvat<br>Horizontal launch：u<sub>y</sub> = 0, u<sub>x</sub> = launch speed。"],
          ["rhyme", "口訣", "先分解、直向搵 t、橫向乘 t", "Resolve the launch velocity → use the vertical motion to find t → horizontal distance = u<sub>x</sub> × t. Speed on impact = √(v<sub>x</sub>² + v<sub>y</sub>²), angle from tan⁻¹(v<sub>y</sub>/v<sub>x</sub>)."],
          ["table", ["Quantity (launch from and landing at same level)", "Formula"], [
            ["Time of flight", "t = 2u sin θ ÷ g"],
            ["Maximum height", "H = (u sin θ)² ÷ 2g"],
            ["Range", "R = u cos θ × t = u² sin 2θ ÷ g (max at 45°)"],
            ["At the top", "v<sub>y</sub> = 0, v = u cos θ, a = g downwards"],
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A ball is kicked from level ground at 20 m s⁻¹ at 30° above the horizontal. Find the time of flight, maximum height and range.", [
            "u<sub>x</sub> = 20 cos 30° = 17.3 m s⁻¹；u<sub>y</sub> = 20 sin 30° = 10.0 m s⁻¹",
            "Time of flight: 0 = 10.0t − 4.905t² → t = 2(10.0) ÷ 9.81 = <b>2.04 s</b>",
            "Max height: 0 = 10.0² − 2(9.81)H → H = 100 ÷ 19.62 = <b>5.10 m</b>",
            "Range = u<sub>x</sub>t = 17.3 × 2.04 = <b>35.3 m</b> ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b> — A ball is kicked horizontally at 8.0 m s⁻¹ from the top of a 20 m high wall. Find (a) where it lands, (b) its speed and direction on impact.", [
            "Vertical (u<sub>y</sub> = 0, down +): 20 = ½(9.81)t² → t = √(40/9.81) = 2.02 s",
            "(a) Horizontal distance = 8.0 × 2.02 = <b>16 m</b> from the wall",
            "(b) v<sub>y</sub> = 0 + 9.81 × 2.02 = 19.8 m s⁻¹ downwards; v<sub>x</sub> = 8.0 m s⁻¹",
            "Speed = √(8.0² + 19.8²) = <b>21.4 m s⁻¹</b>; angle below horizontal = tan⁻¹(19.8/8.0) = <b>68.0°</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A stone is thrown horizontally at 12 m s⁻¹ from a cliff 80 m high. How far from the base of the cliff does it land?", [
            "Vertical: 80 = ½(9.81)t² → t = √(160/9.81) = 4.04 s",
            "Horizontal: x = 12 × 4.04 = <b>48.5 m</b> ✅ (the 12 m s⁻¹ does not affect the fall time)",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A ball is launched from level ground at 25 m s⁻¹ at 40° above horizontal. Find the range and the maximum height.", [
            "u<sub>x</sub> = 25 cos 40° = 19.15 m s⁻¹；u<sub>y</sub> = 25 sin 40° = 16.07 m s⁻¹",
            "t = 2 × 16.07 ÷ 9.81 = 3.28 s → range = 19.15 × 3.28 = <b>62.7 m</b>",
            "H = 16.07² ÷ (2 × 9.81) = 258.2 ÷ 19.62 = <b>13.2 m</b> ✅",
          ]],
          ["note", "<b>With air resistance (fluid resistance)</b>: drag acts opposite to velocity, so horizontal speed also decreases. Compared with no-drag: <b>lower maximum height, shorter range, path not symmetrical, steeper descent</b>, and the speed on landing is less than the launch speed."],
          ["trap", ["橫向用咗 g，或者最高點寫 v = 0（斜拋仲有 u cos θ）。", "水平發射：u<sub>y</sub> = 0，唔好將發射速度當 vertical。", "Range 公式 u² sin 2θ/g 只限起落同一高度；懸崖題一定要 vertical quadratic。", "解方向角：tan⁻¹(v<sub>y</sub>/v<sub>x</sub>)，唔好倒轉。"]],
        ],
      },
      {
        h: "Fluid resistance + terminal speed + relative velocity",
        min: 3,
        blocks: [
          ["note", "<b>Definitions</b><br><b>Fluid resistance (drag):</b> the force opposing the motion of an object through a fluid; it increases as the speed increases.<br><b>Terminal speed:</b> the constant maximum speed reached when the drag force equals the driving force (weight), so the resultant force is zero.<br><b>Relative velocity:</b> the velocity of A as measured by an observer in the frame of B: v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> (both measured in the same reference frame)."],
          ["flow", [["① 剛放", "Speed ≈ 0 → drag ≈ 0 → resultant force = weight → a = g"], ["② 加速", "Speed ↑ → drag ↑ → resultant force ↓ → acceleration ↓ (but still speeding up)"], ["③ 終端", "Drag = weight → resultant force = 0 → a = 0 → constant (terminal) speed"]]],
          ["rhyme", "口訣", "越快越大阻力，阻力等重量，合力零就等速", "Terminal speed model answer: drag increases with speed [1]; until drag = weight [1]; resultant force (and acceleration) zero so constant speed [1]."],
          ["table", ["v–t graph of a falling object with drag", "What it shows"], [
            ["gradient at t = 0 is 9.81 m s⁻²", "a = g because there is no drag at rest"],
            ["gradient decreases (curve flattens)", "acceleration decreases as drag grows"],
            ["horizontal line at the end", "terminal speed, a = 0"],
            ["parachute opens: speed falls then levels at a lower value", "bigger drag → smaller new terminal speed"],
          ]],
          ["eg", "<b>P1 MCQ-style · 1 mark</b> — Car A travels at 30 m s⁻¹ east and car B at 20 m s⁻¹ west. Find the velocity of A relative to B, and of A relative to B if B also moves east at 20 m s⁻¹.", [
            "Take east as positive: v<sub>A</sub> = +30, v<sub>B</sub> = −20",
            "v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> = 30 − (−20) = <b>+50 m s⁻¹</b> (towards each other: add speeds)",
            "If B is +20: v<sub>AB</sub> = 30 − 20 = <b>+10 m s⁻¹</b> (same direction: subtract)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A boat travels at 3.0 m s⁻¹ relative to the water in a river flowing at 1.5 m s⁻¹. Find the boat's speed relative to the bank going downstream and upstream.", [
            "Downstream: v = 3.0 + 1.5 = <b>4.5 m s⁻¹</b>",
            "Upstream: v = 3.0 − 1.5 = <b>1.5 m s⁻¹</b> (relative to the bank) ✅",
          ]],
          ["trap", ["Terminal speed 唔係「冇力」：重量同 drag 仍然存在，係合力為零。", "有 drag 時 a 唔再係 g；只有剛放手 (v = 0) 先係 g。", "Relative velocity：揀定正方向，同向減、反向加。"]],
        ],
      },
      {
        h: "長題拆解 · 懸崖拋射",
        min: 2.5,
        blocks: [
          ["flow", [["① 畫圖", "Mark start, landing, positive direction (up +). Landing below start → s<sub>y</sub> negative."], ["② 分解", "u<sub>x</sub> = u cos θ, u<sub>y</sub> = u sin θ (θ above horizontal)."], ["③ 直向 → t", "Use vertical suvat; quadratic if needed, drop negative root."], ["④ 橫向 → x", "x = u<sub>x</sub>t."], ["⑤ 落地速度", "v<sub>y</sub> = u<sub>y</sub> − gt; combine with v<sub>x</sub> by Pythagoras + angle."]]],
          ["eg", "<b>P2 · 6 marks</b> — A ball is thrown from the top of a 30 m high building at 15 m s⁻¹ at 20° above the horizontal. Ignoring air resistance find (a) time to reach the ground, (b) horizontal distance from the building, (c) impact speed and angle.", [
            "① Up positive. u<sub>x</sub> = 15 cos 20° = 14.1 m s⁻¹; u<sub>y</sub> = 15 sin 20° = 5.13 m s⁻¹; landing displacement s<sub>y</sub> = −30 m",
            "② (a) −30 = 5.13t − 4.905t² → 4.905t² − 5.13t − 30 = 0 → t = [5.13 + √(5.13² + 4 × 4.905 × 30)] ÷ 9.81 = (5.13 + 24.8) ÷ 9.81 = <b>3.05 s</b> (negative root rejected)",
            "③ (b) x = 14.1 × 3.05 = <b>43.0 m</b>",
            "④ (c) v<sub>y</sub> = 5.13 − 9.81(3.05) = −24.8 m s⁻¹ (downwards); v = √(14.1² + 24.8²) = <b>28.5 m s⁻¹</b>",
            "⑤ Angle below horizontal = tan⁻¹(24.8/14.1) = <b>60.4°</b> ✅",
            "Check by energy-style suvat: v² = u² + 2gh = 15² + 2(9.81)(30) = 813.6 → v = 28.5 ✓ (speed on landing does not depend on launch angle)",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["State","One fact or unit, no working [1]."],["Calculate","Substitution + answer + unit + direction; ECF allowed [1 per step]."],["Determine","Use graph/data: show the gradient triangle or area, not just the final number."],["Sketch","Shape, start point, labelled axes; no numbers needed unless asked."],["Explain","Cause → effect chain; 3 marks = 3 linked statements."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["v–t graph","gradient = a [1]; area = displacement [1]; substitute read-off values [1]"],["Projectile","split u into components [1]; vertical suvat → t [1]; x = u<sub>x</sub>t [1]"],["Air resistance sketch","lower peak, shorter range, steeper descent, not symmetrical"],["Terminal speed","drag ↑ with v → drag = weight → resultant force 0, so constant v"],["Curve s–t","tangent → gradient = instantaneous v"]]],
          ["trap", ["Gradient 'determine' with no triangle drawn or points quoted loses the method mark","Drag-free symmetric path drawn when the question says air resistance acts","Rounding g or intermediate values early: keep 3 s.f. until the last line"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Data booklet gives the four suvat equations and g = 9.81 m s⁻²: look them up, don't memorise-and-misquote. On 4+ mark projectile questions, the first mark is almost always the component split."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake", "Fix"], [
            ["Using suvat when acceleration is not constant (e.g. with drag)", "only for uniform a"],
            ["Mixing + and − for g halfway through", "pick the direction at the start and keep it"],
            ["Saying v = 0 and a = 0 at the top of a vertical throw", "v = 0 but a = 9.81 m s⁻² downwards"],
            ["Saying the projectile has zero speed at the top of an angled throw", "speed = u cos θ there"],
            ["Using s ÷ t on a curved s–t graph", "draw a tangent and take its gradient"],
            ["Using the area under an s–t graph", "area is meaningless; use gradient"],
            ["Forgetting the direction of a vector answer", "write 'downwards', 'east', or the sign"],
            ["Using g in the horizontal direction", "horizontal a = 0 (no drag)"],
            ["Using the range formula for a cliff launch", "solve the vertical quadratic for t"],
            ["Treating a graph's total distance as displacement", "areas below the axis are negative displacement"],
            ["Writing 'terminal speed = no forces'", "forces balance; resultant force is zero"],
            ["Calculating average velocity as (initial + final) ÷ 2 for non-uniform motion", "total displacement ÷ total time"],
          ]],
          ["check", [
            "I can choose the correct suvat equation from the 'missing variable' table.",
            "I can state definitions of displacement, velocity, acceleration word-for-word.",
            "I can find acceleration, displacement and average velocity from a v–t graph.",
            "I can draw a tangent and find an instantaneous velocity.",
            "I can solve a horizontal and an angled projectile, including a cliff launch.",
            "I can explain terminal speed in three steps.",
            "I can describe how air resistance changes a projectile path.",
            "I can do relative velocity in one dimension with correct signs.",
          ]],
        ],
      },
    ],
    summary: [
      "分類先：直線 suvat、圖睇斜率面積、拋射橫直分家",
      "五字剔三個，冇咗邊個就用邊條",
      "suvat 只限恆定加速度，符號一次定",
      "s–t 斜率 v；v–t 斜率 a、面積 s；曲線畫切線",
      "橫行唔加速，直落受地心，t 做橋",
      "最高點 v 直 = 0，但 a 仍然 9.81 向下",
      "越快越大阻力，drag = weight → 合力零 → terminal speed",
      "有阻力：矮、近、斜落、唔對稱",
      "同向相減、對頭相加（relative velocity）",
    ],
    practice: [
      { q: "Which quantity is a vector?", o: ["A. Speed", "B. Distance", "C. Displacement", "D. Time"], m: 1, a: "<b>C</b>. Displacement has magnitude and direction. [1]" },
      { q: "A ball is thrown vertically upwards. At its highest point, which row is correct?", o: ["A. v = 0, a = 0", "B. v = 0, a = 9.81 m s⁻² downwards", "C. v = 9.81 m s⁻¹, a = 0", "D. v = 0, a = 9.81 m s⁻² upwards"], m: 1, a: "<b>B</b>. Only gravity acts all the time, so a = g downwards even when v = 0. [1]" },
      { q: "An object decelerates uniformly from 20 m s⁻¹ to rest in 4.0 s. What is the distance travelled?", o: ["A. 5.0 m", "B. 40 m", "C. 80 m", "D. 160 m"], m: 1, a: "<b>B</b>. s = ½(u + v)t = ½ × 20 × 4.0 = 40 m (area of the triangle). [1]" },
      { q: "One ball is dropped from rest and a second identical ball is projected horizontally from the same height at the same instant. Ignoring air resistance, which statement is correct?", o: ["A. The dropped ball lands first.", "B. The projected ball lands first.", "C. They land at the same time.", "D. It depends on the horizontal speed."], m: 1, a: "<b>C</b>. Vertical motion is independent of horizontal motion; both have u<sub>y</sub> = 0 and the same a = g. [1]" },
      { q: "A car travelling at 25 m s⁻¹ brakes with a constant deceleration of 6.0 m s⁻². Calculate the stopping distance.", m: 2, a: "v² = u² + 2as with v = 0, a = −6.0 → 0 = 25² − 2(6.0)s [1]; s = 625 ÷ 12 = 52 m (52.1 m) [1]" },
      { q: "A stone is thrown vertically upwards at 12 m s⁻¹ from a cliff 20 m above the sea. Calculate the time taken to reach the sea.", m: 3, a: "Up +: s = −20 m, u = +12, a = −9.81 [1]; v² = 144 + 392.4 → v = −23.2 m s⁻¹ [1]; t = (−23.2 − 12) ÷ (−9.81) = 3.6 s (3.58 s) [1]. (Or solve 4.905t² − 12t − 20 = 0.)" },
      { q: "A car moves as follows: uniform acceleration from rest to 20 m s⁻¹ in 10 s, then 20 m s⁻¹ for 20 s, then uniform deceleration to rest in 10 s. Determine (a) the total distance and (b) the average velocity.", m: 3, a: "(a) Area under v–t graph: ½ × 10 × 20 + 20 × 20 + ½ × 10 × 20 [1] = 100 + 400 + 100 = 600 m [1]; (b) average velocity = 600 ÷ 40 = 15 m s⁻¹ [1]" },
      { q: "A tangent to a displacement–time graph at t = 3.0 s passes through (1.0 s, 2.0 m) and (5.0 s, 18.0 m). Determine the velocity at t = 3.0 s and explain why s ÷ t cannot be used.", m: 3, a: "Velocity = gradient of tangent [1] = (18.0 − 2.0) ÷ (5.0 − 1.0) = 4.0 m s⁻¹ [1]; s ÷ t gives the average velocity over the whole time, not the instantaneous velocity at a point on a curve [1]" },
      { q: "A ball is kicked horizontally at 8.0 m s⁻¹ from the top of a wall 20 m high. Calculate (a) the horizontal distance from the wall to where it lands and (b) its speed just before impact.", m: 4, a: "(a) 20 = ½(9.81)t² [1] → t = 2.02 s; x = 8.0 × 2.02 = 16 m [1]; (b) v<sub>y</sub> = 9.81 × 2.02 = 19.8 m s⁻¹ [1]; v = √(8.0² + 19.8²) = 21 m s⁻¹ (21.4) [1]" },
      { q: "A ball is kicked from level ground at 20 m s⁻¹ at 30° to the horizontal. Calculate the horizontal range.", m: 3, a: "u<sub>y</sub> = 20 sin 30° = 10.0 m s⁻¹, u<sub>x</sub> = 17.3 m s⁻¹ [1]; t = 2 × 10.0 ÷ 9.81 = 2.04 s [1]; range = 17.3 × 2.04 = 35 m (35.3 m) [1]" },
      { q: "Explain why a skydiver who jumps from a stationary balloon eventually reaches a constant speed.", m: 3, a: "Drag/air resistance increases as speed increases [1]; eventually drag equals weight [1]; resultant force is zero so acceleration is zero and speed is constant (terminal speed) [1]" },
      { q: "State two ways in which the path of a projectile differs when air resistance acts.", m: 2, a: "Any two: lower maximum height; shorter range; path not symmetrical / steeper descent than ascent; lower speed on landing [1 each]" },
    ],
  },

  "phys-2": {
    title: "Newton's laws · Forces · Momentum & impulse · Circular motion",
    intro: "A.2 一條線：每題先畫 free-body diagram，搵 resultant force，再用 F = ma 或 F = Δp/Δt。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "A.2 總覽 + 口訣 + 公式",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "畫力、合力、再計算", "Draw the free-body diagram (forces ON the object only) → find the resultant force in the direction of motion → apply F = ma (or F = Δp/Δt, or F = mv²/r for circular motion)."],
          ["note", "<b>常考 (perennial)</b>: P2 collision calculation + 'determine whether elastic' (3-4 marks); impulse from F–t graph; 'explain using Newton's laws' (rocket, swimmer, lift); circular motion 'what provides the centripetal force' (1 mark) + calculate. P1 MCQ: N3 pair identification, lift readings, momentum with signs."],
          ["flow", [["① 畫 FBD", "One dot/box. Arrows start on the object: weight, normal, tension, friction, drag, thrust, buoyancy."], ["② 揀方向", "Choose positive along the motion (or up the slope). Resolve forces into components."], ["③ 合力", "Resultant = sum of forces in that direction. At rest / constant v → resultant = 0."], ["④ 計", "a = F<sub>net</sub> ÷ m. Collision/explosion → conserve total momentum. Circle → F<sub>net</sub> = mv²/r towards the centre."]]],
          ["grid", [
            ["A.2", "三律一對兩件物，同類同大反方向", "N3 pair: equal, opposite, same type of force, acting on two different bodies"],
            ["A.2", "合力零 = 靜止或等速", "N1: zero resultant force → constant velocity (could be at rest)"],
            ["A.2", "合力 = 動量變化率", "N2: F = Δp/Δt; F = ma when mass is constant"],
            ["A.2", "FBD 只畫作用喺佢身上嘅力", "Never draw forces the object exerts on others"],
            ["A.2", "升降機：N − mg = ma", "Lift accelerating up → N > mg (feels heavier)"],
            ["A.2", "靜摩擦係「最大」、動摩擦係「定值」", "Static ≤ μs R; dynamic = μd R"],
            ["A.2", "動量實守恆，動能睇彈性", "Momentum always conserved (isolated system); KE only in elastic collisions"],
            ["A.2", "反彈要加：Δp = m(v + u)", "Rebound reverses direction → add the speeds"],
            ["A.2", "J = FΔt = 面積 F–t = Δp", "Impulse = area under force–time graph (N s)"],
            ["A.2", "爆炸前零，後面等大反向", "Explosion from rest: Σp = 0 → fragments have equal and opposite momentum"],
            ["A.2", "圓周運動，a 指向圓心", "Constant speed but velocity changes direction → acceleration towards the centre"],
            ["A.2", "向心力唔係新力，係合力", "Provided by tension, gravity, friction, normal reaction, etc."],
          ]],
          ["table", ["Formula (data booklet)", "Meaning"], [
            ["F = ma　｜　F = Δp/Δt", "Newton II (constant mass | general)"],
            ["W = mg (g = 9.81 m s⁻²)", "weight (N)"],
            ["F<sub>f</sub> ≤ μ<sub>s</sub>R　｜　F<sub>f</sub> = μ<sub>d</sub>R", "static friction (max) | dynamic friction"],
            ["F<sub>H</sub> = −kx", "Hooke's law (k in N m⁻¹)"],
            ["F<sub>b</sub> = ρVg", "buoyancy = weight of fluid displaced (V = submerged volume)"],
            ["F<sub>d</sub> = 6πηrv", "Stokes' drag on a small sphere (η viscosity, laminar flow)"],
            ["p = mv　｜　J = FΔt = Δp", "momentum (kg m s⁻¹) | impulse (N s)"],
            ["E<sub>k</sub> = p²/2m = ½mv²", "kinetic energy from momentum"],
            ["a = v²/r = 4π²r/T²　｜　F = mv²/r", "centripetal acceleration | centripetal force"],
            ["v = ωr = 2πr/T", "linear speed in a circle (ω in rad s⁻¹)"],
          ]],
        ],
      },
      {
        h: "Newton's laws 牛頓三律 + 定義",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Newton's first law:</b> an object remains at rest or moves with constant velocity unless acted on by a resultant (net) force.<br><b>Newton's second law:</b> the resultant force on an object is equal to the rate of change of its momentum, F = Δp/Δt (in the direction of the force). For constant mass, F = ma.<br><b>Newton's third law:</b> if object A exerts a force on object B, then B exerts an equal and opposite force of the same type on A. The two forces act on different objects.<br><b>Weight:</b> the gravitational force on an object, W = mg. <b>Mass</b> is the amount of matter (kg) and is constant.<br><b>Equilibrium (translational):</b> the resultant force is zero, so the object is at rest or moves at constant velocity.<br><b>Normal reaction:</b> contact force perpendicular to the surface."],
          ["table", ["Situation", "Resultant force", "Motion"], [
            ["Terminal speed / constant velocity", "zero", "a = 0, constant velocity"],
            ["Lift moving up at constant speed", "zero (N = mg)", "no acceleration"],
            ["Lift accelerating up / decelerating down", "upwards, N − mg = ma", "feels heavier (N > mg)"],
            ["Lift accelerating down / decelerating up", "downwards, mg − N = ma", "feels lighter (N < mg)"],
            ["Free fall (cable snaps)", "mg only, N = 0", "a = g, 'weightless' sensation"],
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 70 kg person stands on scales in a lift. Find the scale reading when the lift accelerates (a) upwards at 1.5 m s⁻², (b) downwards at 1.5 m s⁻².", [
            "Up positive. The scale reading = normal reaction N",
            "(a) N − mg = ma → N = m(g + a) = 70(9.81 + 1.5) = <b>792 N</b> (more than the weight 687 N)",
            "(b) N − mg = m(−1.5) → N = m(g − a) = 70(9.81 − 1.5) = <b>582 N</b> ✅ (less than the weight)",
          ]],
          ["eg", "<b>P2 · 4 marks</b> — A 5.0 kg block is released on a smooth (frictionless) slope inclined at 30°. Find its acceleration. Repeat with μ<sub>d</sub> = 0.20.", [
            "Resolve along the slope: component of weight down the slope = mg sin 30°; perpendicular: R = mg cos 30°",
            "Smooth: ma = mg sin 30° → a = 9.81 × 0.50 = <b>4.9 m s⁻²</b> (mass cancels)",
            "With friction: F<sub>f</sub> = μ<sub>d</sub>R = 0.20 × 5.0 × 9.81 × cos 30° = 8.50 N",
            "ma = mg sin 30° − F<sub>f</sub> → 5.0a = 24.5 − 8.5 = 16.0 → a = <b>3.2 m s⁻²</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — Identify the Newton III pair for a book resting on a table.", [
            "Force 1: Earth pulls the book down (weight, gravitational force on the book).",
            "Its N3 pair is: the book pulls the Earth up (gravitational force on the Earth) — NOT the normal reaction.",
            "The normal reaction from the table on the book pairs with: the book pushes down on the table (contact force). Same type, equal, opposite, on different objects ✅",
          ]],
          ["note", "<b>Rocket model answer (3 marks):</b> the rocket pushes exhaust gas backwards (a force on the gas) [1]; by Newton III the gas pushes the rocket forwards with an equal and opposite force [1]; this resultant force gives the rocket an acceleration / rate of change of momentum (Newton II) [1]. No external medium is needed to push against."],
          ["trap", ["Weight 同 normal reaction 唔係 N3 pair（兩個力作用喺同一件物，亦唔同類）。", "「Because of N3 the forces cancel」錯：N3 pair 作用喺不同物件，唔會互相抵消。", "斜面：perpendicular 方向 R = mg cos θ，沿斜面係 mg sin θ，唔好調轉。", "Mass 唔係 weight；月球上 mass 不變，weight 變。"]],
        ],
      },
      {
        h: "各種力 · 摩擦 · 彈簧 · 浮力 · 黏滯阻力",
        min: 3,
        blocks: [
          ["table", ["Force", "Formula / rule", "Direction & condition"], [
            ["Weight", "W = mg", "always down; acts at centre of mass"],
            ["Normal reaction R", "perpendicular to surface", "from surface on object"],
            ["Static friction", "F<sub>f</sub> ≤ μ<sub>s</sub>R", "opposes tendency to slide; equals the applied force until the maximum"],
            ["Dynamic (kinetic) friction", "F<sub>f</sub> = μ<sub>d</sub>R", "opposes motion; usually μ<sub>d</sub> < μ<sub>s</sub>"],
            ["Spring (Hooke)", "F<sub>H</sub> = −kx", "restoring force; within the limit of proportionality; x = extension"],
            ["Buoyancy (upthrust)", "F<sub>b</sub> = ρVg", "up; = weight of fluid displaced (ρ = fluid density, V = submerged volume)"],
            ["Viscous drag (Stokes)", "F<sub>d</sub> = 6πηrv", "opposes motion; small sphere, slow, laminar flow"],
            ["Tension", "along the string", "pulls on the object"],
          ]],
          ["rhyme", "口訣", "靜摩擦隨力變、最大 μs R；動摩擦定值 μd R", "Static friction matches the applied force (up to a maximum), so do NOT use μR unless the object is about to slip or is already sliding."],
          ["eg", "<b>P2 · 3 marks</b> — A 5.0 kg crate is pulled along a horizontal floor by a 30 N horizontal force. μ<sub>d</sub> = 0.40. Find the acceleration.", [
            "R = mg = 5.0 × 9.81 = 49.05 N",
            "F<sub>f</sub> = μ<sub>d</sub>R = 0.40 × 49.05 = 19.6 N",
            "Resultant = 30 − 19.6 = 10.4 N → a = 10.4 ÷ 5.0 = <b>2.1 m s⁻²</b> ✅ (2.08)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A 20 kg crate rests on a floor with μ<sub>s</sub> = 0.50. A person pushes with 80 N horizontally. Does it move? What is the friction force?", [
            "Maximum static friction = μ<sub>s</sub>R = 0.50 × 20 × 9.81 = 98.1 N",
            "Push 80 N &lt; 98.1 N → the crate does <b>not</b> move",
            "Friction = push = <b>80 N</b> (static friction equals the applied force, not 98.1 N) ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A 2.0 kg mass hangs at rest from a vertical spring (k = 200 N m⁻¹). Find the extension.", [
            "At rest the forces balance: kx = mg",
            "x = mg ÷ k = 2.0 × 9.81 ÷ 200 = <b>0.098 m</b> (9.8 cm) ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 3.0 kg block of volume 2.0 × 10⁻³ m³ is fully submerged in water (ρ = 1000 kg m⁻³). Find the buoyancy force and the tension in the supporting string.", [
            "F<sub>b</sub> = ρVg = 1000 × 2.0 × 10⁻³ × 9.81 = <b>19.6 N</b> upwards",
            "Weight = 3.0 × 9.81 = 29.4 N",
            "Equilibrium: T + F<sub>b</sub> = W → T = 29.4 − 19.6 = <b>9.8 N</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A sphere of radius 2.0 mm falls at 0.050 m s⁻¹ through oil of viscosity η = 0.80 Pa s. Find the viscous drag. Explain how terminal speed arises.", [
            "F<sub>d</sub> = 6πηrv = 6π × 0.80 × 2.0 × 10⁻³ × 0.050 = <b>1.5 × 10⁻³ N</b>",
            "Drag increases with v; at terminal speed weight = drag + buoyancy → resultant force zero, so a = 0 ✅",
          ]],
          ["trap", ["寫「靜摩擦 = μR」：只有即將滑動先係最大值。", "Buoyancy 用嘅 V 係排開流體嘅體積（浸入部份），唔係物件總體積（如只浸一半）。", "Hooke：x 係 extension（長度變化），唔係彈簧總長度。"]],
        ],
      },
      {
        h: "Momentum & impulse 動量與衝量",
        min: 4,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Linear momentum:</b> the product of mass and velocity, p = mv (vector, kg m s⁻¹).<br><b>Impulse:</b> the product of the force and the time for which it acts, J = FΔt; it equals the change in momentum of the object (N s). It is the area under a force–time graph.<br><b>Principle of conservation of momentum:</b> the total momentum of a closed (isolated) system remains constant provided no external resultant force acts.<br><b>Elastic collision:</b> a collision in which the total kinetic energy is conserved. <b>Inelastic collision:</b> kinetic energy is not conserved (some becomes thermal/sound/deformation energy). <b>Totally (perfectly) inelastic:</b> the objects stick together (maximum KE lost, momentum still conserved).<br><b>Isolated system:</b> no external force (e.g. friction, drag) acts on it."],
          ["flow", [["① 畫前後圖", "Label m and velocity with arrows; choose +."], ["② 前 = 後", "Σp before = Σp after (signs!)."], ["③ 判斷彈性", "Compare ΣE<sub>k</sub> before and after (use ½mv² or p²/2m)."]]],
          ["eg", "<b>P2 · 4 marks</b> — A 3.0 kg trolley at 4.0 m s⁻¹ hits a stationary 1.0 kg trolley and they stick together. Find the common velocity and decide if the collision is elastic.", [
            "p before = 3.0 × 4.0 + 0 = 12 kg m s⁻¹",
            "12 = (3.0 + 1.0)v → v = <b>3.0 m s⁻¹</b>",
            "E<sub>k</sub> before = ½ × 3.0 × 4.0² = 24 J; after = ½ × 4.0 × 3.0² = 18 J",
            "E<sub>k</sub> is not conserved → <b>inelastic</b> (6 J lost as thermal/sound) ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 1.0 kg trolley at 4.0 m s⁻¹ hits a stationary 1.0 kg trolley. After the collision the first stops and the second moves at 4.0 m s⁻¹. Is this elastic?", [
            "Momentum: before 1.0 × 4.0 = 4.0; after 0 + 1.0 × 4.0 = 4.0 ✓ conserved",
            "E<sub>k</sub> before = ½ × 1.0 × 16 = 8.0 J; after = 8.0 J",
            "E<sub>k</sub> unchanged → <b>elastic</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A stationary 3.0 kg shell explodes into two fragments. The 1.0 kg fragment moves east at 10 m s⁻¹. Find the velocity of the other fragment and the kinetic energy released.", [
            "Σp before = 0 → 0 = 1.0(+10) + 2.0v → v = <b>−5.0 m s⁻¹</b> (5.0 m s⁻¹ west)",
            "E<sub>k</sub> after = ½(1.0)(10²) + ½(2.0)(5.0²) = 50 + 25 = <b>75 J</b> released from stored (chemical) energy ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 0.20 kg ball hits a wall at 5.0 m s⁻¹ and rebounds at 3.0 m s⁻¹. The contact time is 0.020 s. Find the impulse and the average force.", [
            "Take towards the wall as +: Δp = m(v − u) = 0.20(−3.0 − 5.0) = −1.6 N s",
            "Impulse on the ball = <b>1.6 N s</b> away from the wall",
            "F = Δp/Δt = 1.6 ÷ 0.020 = <b>80 N</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A force–time graph for a 0.15 kg ball struck by a bat is a triangle: peak force 600 N, base 0.010 s. Find the impulse and the ball's speed (starting from rest).", [
            "Impulse = area = ½ × 0.010 × 600 = <b>3.0 N s</b>",
            "J = Δp = mv → v = 3.0 ÷ 0.15 = <b>20 m s⁻¹</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A hose sends 0.50 kg of water per second at 8.0 m s⁻¹ horizontally onto a wall, where it stops. Find the force on the wall.", [
            "Momentum lost per second = (Δm/Δt) × v = 0.50 × 8.0 = 4.0 kg m s⁻²",
            "F = Δp/Δt = <b>4.0 N</b> ✅ (Newton II in momentum form)",
          ]],
          ["trap", ["「Momentum 唔守恆」：只要冇外力，永遠守恆；有 friction/drag 嘅外力先唔守恆。", "反彈：Δp = m(v − u) 兩個速度符號相反，結果係 m(v + u) 嘅大小，唔係相減。", "「Collision 之後 KE 唔變所以守恆」：要計出 ½mv² 前後比較先可以講 elastic。", "Impulse 單位 N s = kg m s⁻¹，唔係 N。"]],
        ],
      },
      {
        h: "Circular motion 圓周運動",
        min: 3,
        blocks: [
          ["note", "<b>Definitions</b><br><b>Centripetal force:</b> the resultant force on an object moving in a circle, directed towards the centre, F = mv²/r. It is not a new type of force: it is provided by tension, gravity, friction, normal reaction etc.<br><b>Centripetal acceleration:</b> the acceleration towards the centre of the circle, a = v²/r. The speed is constant but the velocity changes direction.<br><b>Period T:</b> time for one revolution (s). <b>Angular speed ω:</b> angle swept per second (rad s⁻¹), ω = 2π/T. The centripetal force does no work (it is perpendicular to the velocity)."],
          ["key", "v = 2πr/T = ωr　｜　a = v²/r = ω²r = 4π²r/T²　｜　F = ma = mv²/r = mω²r<br>速度沿切線，加速度同合力指向圓心。"],
          ["rhyme", "口訣", "圈上有 v 無加速唔得，a 一定指向圓心", "Always name the real force that provides the centripetal force (e.g. 'friction provides the centripetal force')."],
          ["table", ["Situation", "What provides F<sub>c</sub>", "Equation"], [
            ["Car on a flat bend", "friction between tyres and road", "μ<sub>s</sub>mg ≥ mv²/r"],
            ["Ball on a string (horizontal circle)", "tension (horizontal component)", "T = mv²/r"],
            ["Moon / satellite orbit", "gravitational force", "GMm/r² = mv²/r"],
            ["Person at the top of a Ferris wheel", "weight − normal reaction", "mg − N = mv²/r"],
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 1200 kg car rounds a flat bend of radius 50 m at 15 m s⁻¹. Find the friction force needed and the minimum coefficient of static friction.", [
            "F = mv²/r = 1200 × 15² ÷ 50 = <b>5400 N</b> towards the centre (provided by friction)",
            "F ≤ μ<sub>s</sub>mg → μ<sub>s</sub> ≥ 5400 ÷ (1200 × 9.81) = <b>0.46</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 0.25 kg mass on a string moves in a horizontal circle of radius 0.80 m with period 1.2 s. Find the speed and the centripetal force.", [
            "v = 2πr/T = 2π × 0.80 ÷ 1.2 = <b>4.2 m s⁻¹</b>",
            "F = mv²/r = 0.25 × 4.19² ÷ 0.80 = <b>5.5 N</b> (or F = m4π²r/T² = 0.25 × 4π² × 0.80 ÷ 1.44 = 5.5 N) ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 60 kg person sits at the top of a Ferris wheel (r = 10 m) moving at 5.0 m s⁻¹. Find the normal reaction from the seat.", [
            "Centre is below: mg − N = mv²/r",
            "mv²/r = 60 × 25 ÷ 10 = 150 N; mg = 588.6 N",
            "N = 588.6 − 150 = <b>439 N</b> ✅ (person feels lighter at the top)",
          ]],
          ["trap", ["喺 FBD 加多一支「centripetal force」：錯，佢係合力，唔係額外嘅力。", "「離心力」將物件推出：冇呢支力；物件因 inertia 想行直線。", "Constant speed 唔等如 a = 0；velocity 轉向就有 acceleration。", "ω 要用 rad s⁻¹；T 轉 ω = 2π/T。"]],
        ],
      },
      {
        h: "長題拆解 · 子彈撞木塊",
        min: 2.5,
        blocks: [
          ["flow", [["① 認出碰撞", "Bullet embeds in block = perfectly inelastic: use momentum, not energy, for the collision."], ["② 碰撞前後", "Σp before = Σp after → common velocity V."], ["③ 之後上擺", "After the collision, mechanical energy IS conserved: ½(M+m)V² = (M+m)gh."], ["④ 能量損失", "Compare E<sub>k</sub> before and after the collision."]]],
          ["eg", "<b>P2 · 6 marks</b> — A 0.010 kg bullet travelling at 400 m s⁻¹ embeds in a 2.0 kg wooden block hanging on light strings. Find (a) the speed of the block + bullet just after impact, (b) the maximum height they rise, (c) the percentage of kinetic energy lost in the collision.", [
            "① (a) Σp: 0.010 × 400 = (2.0 + 0.010)V → V = 4.0 ÷ 2.010 = <b>1.99 m s⁻¹</b>",
            "② (b) Energy conserved on the swing: ½V² = gh → h = V² ÷ 2g = 1.99² ÷ 19.62 = <b>0.20 m</b>",
            "③ (c) E<sub>k</sub> before = ½ × 0.010 × 400² = 800 J; after = ½ × 2.010 × 1.99² = 3.98 J",
            "④ Fraction lost = (800 − 3.98) ÷ 800 = 0.995 → <b>99.5 %</b> of the kinetic energy is lost (thermal, sound, deformation) ✅",
            "Never apply energy conservation <i>through</i> the collision, only after it.",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["State Newton's 3rd law","Pair forces: equal magnitude, opposite direction, same type, act on <b>different</b> bodies."],["Define","Impulse = force × time (= change in momentum); linear momentum = mass × velocity."],["Explain","Name the law used, then link net force → acceleration / momentum change."],["Calculate","Signs for direction fixed first; unit N, kg m s⁻¹ or N s."],["Discuss / Compare","Elastic vs inelastic: momentum conserved in both; KE only in elastic."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Free-body diagram","arrows from object centre, labelled by name (weight, normal reaction, friction, tension), lengths match if in equilibrium"],["Collision","'no external force' [1]; Σp before = Σp after [1]; solve [1]; check KE for type [1]"],["Impulse","area under F–t graph = Δp [1]; then Δp = mΔv [1]"],["Circular motion","identify which force supplies centripetal [1]; F = mv²/r [1]"],["Equilibrium","resultant = 0: resolve both directions [1 each]"]]],
          ["trap", ["Weight and normal reaction called a 'third-law pair' (different type, same body)","'Centrifugal force' drawn on a free-body diagram","Forgetting that momentum is a vector: opposite directions need opposite signs","Saying centripetal force is an <i>extra</i> force; it is the net inward force"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Data booklet gives p = mv, F = ma, F = Δp/Δt, Ek = p²/2m, a = v²/r and the friction relations. For a conservation-of-momentum question always write the 'closed system / no external force' condition: it is a mark."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake", "Fix"], [
            ["Adding a 'centripetal force' arrow on the FBD", "It is the resultant; label the real force (tension, friction, gravity…)"],
            ["Treating weight and normal reaction as an N3 pair", "N3 pair = same type, different objects (book on Earth ↔ Earth on book)"],
            ["Saying 'forces cancel' for an N3 pair", "They act on different bodies so cannot cancel"],
            ["Using μR for static friction when nothing moves", "Static friction equals the applied force up to the maximum μ<sub>s</sub>R"],
            ["Rebound: Δp = m(v − u) using speeds without signs", "Take opposite directions as opposite signs: Δp = m(−v − u)"],
            ["Saying KE is conserved in every collision", "Only in elastic; momentum conserved in all (isolated)"],
            ["Using energy conservation through an inelastic collision", "Use momentum for the collision, energy after it"],
            ["Forgetting a, F vectors have direction", "Give direction or sign"],
            ["Using mg for normal reaction on a slope or in a lift", "Resolve forces: R = mg cos θ; lift N = m(g ± a)"],
            ["Buoyancy with the whole volume of a half-submerged object", "V = volume of fluid displaced"],
            ["Using cm or g in F = ma or momentum", "Convert to kg, m, s first"],
            ["ω in degrees or T mixed up with f", "ω = 2π/T in rad s⁻¹; f = 1/T"],
          ]],
          ["check", [
            "I can state N1, N2 (momentum form) and N3 word-for-word.",
            "I can draw a correct FBD and name an N3 pair.",
            "I can solve a lift, slope and friction problem.",
            "I can use Hooke, buoyancy and Stokes formulae.",
            "I can do collisions and explosions with correct signs and test if elastic.",
            "I can get impulse from a force–time graph and use F = Δp/Δt.",
            "I can name what provides the centripetal force in 4 situations.",
            "I can do the bullet–block two-stage problem.",
          ]],
        ],
      },
    ],
    summary: [
      "畫力、合力、再計算",
      "N3 pair：同類、等大、反向、兩件物",
      "N2：F = Δp/Δt，質量不變 F = ma",
      "靜摩擦隨力變，最大 μs R；動摩擦 μd R",
      "升降機：N = m(g ± a)",
      "動量實守恆（冇外力），動能睇彈性",
      "反彈加速度，爆炸前零後等大反向",
      "J = FΔt = F–t 面積 = Δp",
      "向心力係合力，指向圓心：mv²/r",
    ],
    practice: [
      { q: "A lift of passengers accelerates upwards. The normal reaction on a passenger of mass m is:", o: ["A. less than mg", "B. equal to mg", "C. greater than mg", "D. zero"], m: 1, a: "<b>C</b>. N − mg = ma with a upwards → N = m(g + a) &gt; mg. [1]" },
      { q: "The unit of impulse is equivalent to:", o: ["A. N", "B. N s⁻¹", "C. kg m s⁻¹", "D. kg m s⁻²"], m: 1, a: "<b>C</b>. J = FΔt = Δp, unit N s = kg m s⁻¹. [1]" },
      { q: "A car travels at constant speed round a circular track. Which statement is correct?", o: ["A. Its velocity is constant.", "B. Its acceleration is zero.", "C. Its acceleration is directed towards the centre.", "D. No resultant force acts on it."], m: 1, a: "<b>C</b>. Direction of velocity changes, so there is an acceleration (v²/r) towards the centre produced by a resultant force. [1]" },
      { q: "Two trolleys of equal mass collide and stick together. Which quantity is conserved?", o: ["A. Kinetic energy only", "B. Momentum only", "C. Both momentum and kinetic energy", "D. Neither"], m: 1, a: "<b>B</b>. Perfectly inelastic: momentum conserved (isolated system), kinetic energy is not. [1]" },
      { q: "A 0.20 kg ball moving at 5.0 m s⁻¹ hits a wall and rebounds at 3.0 m s⁻¹. The contact time is 0.020 s. Calculate the magnitude of (a) the impulse and (b) the average force.", m: 3, a: "(a) Δp = 0.20 × (3.0 − (−5.0)) [1] = 1.6 N s [1]; (b) F = 1.6 ÷ 0.020 = 80 N [1]" },
      { q: "A 2.0 kg trolley moving at 3.0 m s⁻¹ collides with a stationary 3.0 kg trolley and they move off together. Calculate (a) their common velocity and (b) the kinetic energy lost.", m: 4, a: "(a) 2.0 × 3.0 = (2.0 + 3.0)v [1]; v = 1.2 m s⁻¹ [1]; (b) E<sub>k</sub> before = ½ × 2.0 × 3.0² = 9.0 J, after = ½ × 5.0 × 1.2² = 3.6 J [1]; lost = 5.4 J [1]" },
      { q: "A 1200 kg car rounds a flat bend of radius 50 m at 15 m s⁻¹. State what provides the centripetal force and calculate its value.", m: 3, a: "Friction (between tyres and road) [1]; F = mv²/r = 1200 × 15² ÷ 50 [1] = 5400 N (5.4 × 10³ N) [1]" },
      { q: "A 5.0 kg crate is pulled across a horizontal floor by a horizontal force of 30 N. The coefficient of dynamic friction is 0.40. Calculate the acceleration.", m: 3, a: "Friction = 0.40 × 5.0 × 9.81 = 19.6 N [1]; resultant = 30 − 19.6 = 10.4 N [1]; a = 10.4 ÷ 5.0 = 2.1 m s⁻² [1]" },
      { q: "A stationary 3.0 kg shell explodes into two fragments of mass 1.0 kg and 2.0 kg. The 1.0 kg fragment moves east at 10 m s⁻¹. Determine the velocity of the 2.0 kg fragment.", m: 3, a: "Total momentum before = 0 [1]; 0 = 1.0 × 10 + 2.0v [1]; v = 5.0 m s⁻¹ west [1]" },
      { q: "Explain, using Newton's laws, how a rocket accelerates in empty space.", m: 3, a: "Rocket exerts a force on the exhaust gas pushing it backwards [1]; the gas exerts an equal and opposite force forwards on the rocket (Newton III) [1]; resultant force on rocket so it accelerates / momentum of rocket changes (Newton II) [1]" },
      { q: "A 0.15 kg ball is struck by a bat. The force–time graph is a triangle with peak 600 N and base 0.010 s. The ball starts at rest. Determine the speed of the ball immediately after the hit.", m: 3, a: "Impulse = area under graph = ½ × 0.010 × 600 [1] = 3.0 N s [1]; v = J/m = 3.0 ÷ 0.15 = 20 m s⁻¹ [1]" },
      { q: "A 0.010 kg bullet at 400 m s⁻¹ embeds in a 2.0 kg block hanging from strings. Determine the maximum height the block rises.", m: 4, a: "Momentum conserved in collision: 0.010 × 400 = 2.010V [1]; V = 1.99 m s⁻¹ [1]; E<sub>k</sub> → E<sub>p</sub>: ½V² = gh [1]; h = 1.99² ÷ (2 × 9.81) = 0.20 m [1]" },
    ],
  },

  "phys-3": {
    title: "Work · Energy · Conservation · Power · Efficiency",
    intro: "A.3 一條線：所有題目都係「能量由邊度去到邊度」。畫 energy bar，揀 W = Fs cos θ、守恆或 P = Fv。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "A.3 總覽 + 口訣 + 公式",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "起點終點列能量，差額就係做功或消耗", "Write the energy stores at the start and the end. If they differ, the difference was transferred by work done (or dissipated as thermal energy by friction/drag)."],
          ["flow", [["① 列能量", "Start: E<sub>k</sub>, E<sub>p</sub> (grav), E<sub>H</sub> (elastic). End: the same list."], ["② 有冇損失", "Friction or drag? Then E<sub>start</sub> = E<sub>end</sub> + work done against resistive force (F × distance)."], ["③ 解未知", "Solve for v, h, x or F. Mass often cancels. Check units (J, W)."]]],
          ["grid", [
            ["A.3", "做功要力 × 力方向嘅位移", "W = Fs cos θ; θ = angle between force and displacement"],
            ["A.3", "力垂直位移，做功零", "Centripetal force, normal reaction on a horizontal surface do no work"],
            ["A.3", "F–s 面積 = 做功", "Area under force–displacement graph = work done"],
            ["A.3", "動能睇速度平方", "Double the speed → 4 × E<sub>k</sub>"],
            ["A.3", "位能睇高度差，唔睇路徑", "ΔE<sub>p</sub> = mgΔh, path independent"],
            ["A.3", "彈簧能量 ½ k x²", "Elastic energy = area under F–x graph for a spring"],
            ["A.3", "能量唔會消失，只會變熱散走", "Energy is dissipated (spread out as thermal), not destroyed"],
            ["A.3", "P = W/t = Fv", "Constant speed on level road: driving force = resistive force"],
            ["A.3", "效率 = 有用 ÷ 總輸入", "Efficiency = useful output ÷ total input (no units; ≤ 1)"],
            ["A.3", "Sankey 箭嘴闊度比例於能量", "Total in = useful out + wasted out"],
            ["A.3", "動能同動量：Ek = p²/2m", "Same p, bigger mass → less KE"],
          ]],
          ["table", ["Formula (data booklet)", "Meaning / unit"], [
            ["W = Fs cos θ", "work done (J = N m)"],
            ["E<sub>k</sub> = ½mv² = p²/2m", "kinetic energy (J)"],
            ["ΔE<sub>p</sub> = mgΔh", "gravitational potential energy change near Earth's surface (g = 9.81 m s⁻²)"],
            ["E<sub>H</sub> = ½kΔx²", "elastic (spring) energy (J), k in N m⁻¹"],
            ["P = ΔW/Δt = Fv", "power (W = J s⁻¹)"],
            ["efficiency = useful output energy (power) ÷ total input energy (power)", "ratio or %"],
            ["Energy density", "energy released per unit volume (J m⁻³) or per unit mass (J kg⁻¹, specific energy) — follow the units in the question"],
          ]],
        ],
      },
      {
        h: "Work done 做功 + 定義",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Work done:</b> the energy transferred when a force moves its point of application; W = Fs cos θ, the product of the force and the displacement in the direction of the force (scalar, joule).<br><b>Joule:</b> the work done when a force of 1 N moves an object 1 m in the direction of the force.<br><b>Energy:</b> the capacity to do work (scalar, J).<br><b>Kinetic energy:</b> the energy an object has because of its motion, ½mv².<br><b>Gravitational potential energy:</b> the energy stored in an object because of its position in a gravitational field.<br><b>Elastic potential energy:</b> energy stored in a deformed spring/elastic object.<br><b>Power:</b> the rate of doing work, or the rate of energy transfer (W).<br><b>Efficiency:</b> the ratio of useful output energy (or power) to total input energy (or power).<br><b>Principle of conservation of energy:</b> energy cannot be created or destroyed, only transformed or transferred; the total energy of an isolated system is constant."],
          ["rhyme", "常考", "P2 · 2-3 marks 計 W：寫出 W = Fs cos θ，代入，單位 J", "Frequent: 'Calculate the work done by the force' (2 marks) and 'State why no work is done' (1 mark: force ⟂ displacement)."],
          ["table", ["Angle θ between force and displacement", "Work done", "Example"], [
            ["0°", "W = +Fs (maximum)", "pushing a trolley forward"],
            ["90°", "W = 0", "centripetal force; weight on horizontal motion; normal reaction"],
            ["180°", "W = −Fs", "friction, drag (removes KE)"],
            ["any θ", "W = Fs cos θ", "pulling a suitcase on a strap"],
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A suitcase is pulled 20 m along a horizontal floor by a strap tension of 50 N at 30° above the horizontal. Calculate the work done by the tension.", [
            "W = Fs cos θ [M1]",
            "= 50 × 20 × cos 30° = <b>8.7 × 10² J</b> (866 J) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A force F acting on a trolley varies with displacement s: it rises linearly from 0 to 12 N over the first 4.0 m, then stays at 12 N for the next 6.0 m. Determine the total work done.", [
            "Work = area under F–s graph [M1]",
            "Triangle: ½ × 4.0 × 12 = 24 J; rectangle: 6.0 × 12 = 72 J [M1]",
            "Total = <b>96 J</b> [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 1000 kg car travelling at 20 m s⁻¹ is brought to rest by a constant braking force of 4000 N. Determine the stopping distance.", [
            "Work done by brakes = change in kinetic energy [M1]",
            "E<sub>k</sub> = ½ × 1000 × 20² = 2.0 × 10⁵ J [A1]",
            "Fs = 2.0 × 10⁵ → s = 2.0 × 10⁵ ÷ 4000 = <b>50 m</b> [A1] ✅",
          ]],
          ["trap", ["θ 係力同位移之間嘅角，唔係力同水平面（拉行李箱：θ = 皮帶角）。", "做功冇方向（scalar），但可以係負數（friction）。", "Constant speed 圓周運動：向心力做功 = 0，因為力垂直速度。"]],
        ],
      },
      {
        h: "Kinetic · potential · elastic 能量形式",
        min: 3.5,
        blocks: [
          ["key", "E<sub>k</sub> = ½mv² = p²/2m　｜　ΔE<sub>p</sub> = mgΔh　｜　E<sub>H</sub> = ½kΔx²<br>光滑（冇能量損失）：E<sub>k</sub> + E<sub>p</sub> + E<sub>H</sub> 守恆。"],
          ["eg", "<b>P2 · 2 marks</b> — A ball is dropped from rest from a height of 12 m. Ignoring air resistance, calculate its speed just before hitting the ground.", [
            "Loss in E<sub>p</sub> = gain in E<sub>k</sub>: mgh = ½mv² [M1]",
            "v = √(2gh) = √(2 × 9.81 × 12) = <b>15 m s⁻¹</b> (15.3) [A1] ✅ (mass cancels)",
          ]],
          ["eg", "<b>P2 · 4 marks</b> — A 2.0 kg block slides from rest down a rough ramp of length 5.0 m. The vertical height drop is 1.5 m and its speed at the bottom is 4.0 m s⁻¹. Determine the average friction force.", [
            "Loss of E<sub>p</sub> = mgΔh = 2.0 × 9.81 × 1.5 = 29.4 J [A1]",
            "Gain of E<sub>k</sub> = ½ × 2.0 × 4.0² = 16 J [A1]",
            "Energy dissipated = work against friction = 29.4 − 16 = 13.4 J [M1]",
            "F × s = 13.4 → F = 13.4 ÷ 5.0 = <b>2.7 N</b> (2.69 N) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A spring (k = 400 N m⁻¹) is compressed by 0.10 m and used to launch a 0.050 kg ball along a smooth horizontal surface. Calculate the launch speed.", [
            "Elastic energy: E<sub>H</sub> = ½kΔx² = ½ × 400 × 0.10² = 2.0 J [A1]",
            "E<sub>H</sub> = ½mv² [M1]",
            "v = √(2 × 2.0 ÷ 0.050) = <b>8.9 m s⁻¹</b> [A1] ✅",
          ]],
          ["eg", "<b>P1 MCQ-style · 1 mark</b> — A car's speed doubles from v to 2v. By what factor does its kinetic energy change?", [
            "E<sub>k</sub> ∝ v² → (2)² = <b>4</b> ✅",
            "Same idea for p: p ∝ v, so momentum doubles but E<sub>k</sub> × 4.",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A pendulum bob is released from rest at a height of 0.20 m above its lowest point. Ignoring resistance, find its speed at the lowest point.", [
            "mgh = ½mv² [M1]",
            "v = √(2 × 9.81 × 0.20) = <b>2.0 m s⁻¹</b> (1.98) [A1] ✅ (tension does no work: ⟂ to motion)",
          ]],
          ["note", "<b>常考 (perennial)</b>: 'Explain why the speed at the bottom is less than predicted' → friction/air resistance does work against motion [1]; some energy dissipated as thermal energy [1]. 'Sketch the energy–time (or energy–height) graph' → total constant, E<sub>k</sub> and E<sub>p</sub> mirror images."],
          ["trap", ["Friction 令能量「消失」：錯，轉咗熱能（dissipated），總能量仍守恆。", "ΔE<sub>p</sub> = mgΔh 用垂直高度差，唔好用斜邊長度。", "½kΔx² 唔好漏平方，亦唔好寫 ½kx。"]],
        ],
      },
      {
        h: "Power 功率 + efficiency 效率",
        min: 3,
        blocks: [
          ["key", "P = W/t = ΔE/Δt　｜　P = Fv（F 沿運動方向）<br>Efficiency = useful output ÷ total input（energy 或 power 比都得），再 × 100 % 就係百分率。"],
          ["rhyme", "口訣", "等速行，驅動力 = 阻力；P = Fv", "On level ground at constant speed the resultant force is zero, so engine force = resistive force. Then P = F v."],
          ["eg", "<b>P2 · 3 marks</b> — A car travels at a constant 25 m s⁻¹ on a level road against a total resistive force of 600 N. Calculate the power delivered to the wheels.", [
            "Constant speed → driving force = resistive force = 600 N [M1]",
            "P = Fv = 600 × 25 [M1] = <b>1.5 × 10⁴ W</b> (15 kW) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 4 marks</b> — A motor lifts an 800 kg load through 12 m in 20 s at constant speed. The motor is 75 % efficient. Determine the electrical input power.", [
            "Useful work = mgΔh = 800 × 9.81 × 12 = 9.4 × 10⁴ J [A1]",
            "Useful power = 9.4 × 10⁴ ÷ 20 = 4.7 × 10³ W [A1]",
            "Efficiency = useful ÷ input → input = 4.71 × 10³ ÷ 0.75 [M1]",
            "= <b>6.3 × 10³ W</b> (6.28 kW) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Water falls 30 m at a rate of 1500 kg s⁻¹ through a hydroelectric turbine of efficiency 60 %. Calculate the electrical power output.", [
            "Power available = (Δm/Δt) g Δh = 1500 × 9.81 × 30 = 4.4 × 10⁵ W [M1][A1]",
            "Output = 0.60 × 4.41 × 10⁵ = <b>2.6 × 10⁵ W</b> (265 kW) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A Sankey diagram shows 200 J of electrical energy input into a device, 60 J useful light, 120 J thermal and 20 J sound. Calculate the efficiency and state what the width of each arrow represents.", [
            "Efficiency = useful output ÷ total input = 60 ÷ 200 = <b>0.30 (30 %)</b> [A1][M1]",
            "Arrow width is proportional to the amount of energy (power) [A1]",
            "Check: 60 + 120 + 20 = 200 J ✅ (energy conserved)",
          ]],
          ["table", ["Power question type", "Use"], [
            ["Car at constant speed against drag", "P = F<sub>drive</sub> v, F<sub>drive</sub> = resistance"],
            ["Car accelerating", "F<sub>resultant</sub> = ma; F<sub>drive</sub> = ma + resistance; then P = F<sub>drive</sub>v"],
            ["Lifting a load", "P<sub>useful</sub> = mgΔh/t"],
            ["Flow rate (water, wind)", "P = (Δm/Δt) × energy per kg"],
            ["Efficiency with chain of devices", "multiply the efficiencies"],
          ]],
          ["trap", ["Efficiency 大過 100 %：違反能量守恆，檢查有用／總輸入有冇倒轉。", "P = Fv 要用驅動力 F；加速時 F ≠ 阻力。", "kW → W ×1000；kWh 係能量單位（3.6 × 10⁶ J），唔係功率。"]],
        ],
      },
      {
        h: "Energy density + dissipation + 長題",
        min: 3,
        blocks: [
          ["note", "<b>Definitions</b><br><b>Energy density (of a fuel):</b> the energy released per unit volume of fuel (J m⁻³); the energy released per unit mass is the specific energy (J kg⁻¹). Quote units as given in the question.<br><b>Dissipated energy:</b> energy transferred to the surroundings as (usually) thermal energy that is no longer useful and cannot easily be recovered; total energy is still conserved.<br><b>Sankey diagram:</b> arrow widths are proportional to the energy (or power) transferred."],
          ["eg", "<b>P2 · 4 marks</b> — A car engine of efficiency 25 % burns 2.0 kg of fuel with energy density (specific energy) 4.6 × 10⁷ J kg⁻¹. The average resistive force is 800 N. Determine the distance travelled.", [
            "Energy released = 2.0 × 4.6 × 10⁷ = 9.2 × 10⁷ J [A1]",
            "Useful energy = 0.25 × 9.2 × 10⁷ = 2.3 × 10⁷ J [A1]",
            "Work done against resistance: Fs = 2.3 × 10⁷ [M1]",
            "s = 2.3 × 10⁷ ÷ 800 = <b>2.9 × 10⁴ m</b> (29 km) [A1] ✅",
          ]],
          ["flow", [["① 辨認階段", "Part 1: loss of E<sub>p</sub> sliding down with friction. Part 2: kinetic energy → spring."], ["② 每階段列能量", "Part 1: mgh = ½mv² + F<sub>f</sub>s. Part 2: ½mv² = ½kx² (smooth surface)."], ["③ 連起來", "Use the E<sub>k</sub> found in part 1 as the start of part 2."]]],
          ["eg", "<b>P2 · 6 marks</b> — A 2.0 kg block is released from rest at the top of a 4.0 m long rough ramp inclined at 30° (μ<sub>d</sub> = 0.25). At the bottom it slides along a smooth horizontal surface and compresses a spring of k = 500 N m⁻¹. Determine (a) the speed at the bottom, (b) the maximum compression of the spring.", [
            "Height = 4.0 sin 30° = 2.0 m; ΔE<sub>p</sub> = 2.0 × 9.81 × 2.0 = 39.2 J [A1]",
            "Friction = μ<sub>d</sub>R = 0.25 × 2.0 × 9.81 × cos 30° = 4.25 N [M1]; work against friction = 4.25 × 4.0 = 17.0 J [A1]",
            "(a) E<sub>k</sub> at bottom = 39.2 − 17.0 = 22.2 J [A1] → v = √(2 × 22.2 ÷ 2.0) = <b>4.7 m s⁻¹</b> [A1]",
            "(b) ½kx² = 22.2 → x = √(2 × 22.2 ÷ 500) = <b>0.30 m</b> [A1] ✅",
          ]],
          ["note", "<b>常考</b>: 'Explain why the energy at the end is less' (2 marks) — friction/air resistance acts against the motion [1]; work done against it dissipates energy as thermal energy in the surroundings [1]. 'Outline why a fuel with higher energy density is preferred for transport' — more energy for same volume/mass, so smaller/lighter tank [1]. Command terms: <b>State</b> (1 fact), <b>Outline</b> (brief account), <b>Explain</b> (cause + effect), <b>Calculate/Determine</b> (working + unit)."],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define work","W = Fs cos θ: force × displacement in the direction of the force; unit J."],["Define power / efficiency","P = energy transferred ÷ time = Fv; efficiency = useful output ÷ total input (no unit)."],["Calculate / Determine","Area under an F–x graph = work done; show the area."],["Explain","Name the energy stores and the transfer, e.g. gravitational → kinetic + thermal."],["Discuss","Both sides: energy is conserved in total, but usable energy is dissipated."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Energy conservation","state the stores before/after [1]; equate with friction work as loss [1]; solve [1]"],["F–x area","area = work [1]; count squares/shape [1]"],["Efficiency","useful ÷ total [1]; use power, not energy, if the data are rates"],["Power = Fv","constant speed on a slope: F balances drag + weight component"],["Why energy is lost","friction/drag does work → thermal energy in surroundings, not 'used up'"]]],
          ["trap", ["θ in W = Fs cos θ taken as the angle to the slope, not between F and displacement","Efficiency quoted above 100% or with a unit","Writing 'energy is lost/used up'; say transferred to thermal energy of surroundings","Using the mass in E<sub>k</sub> = ½mv² but forgetting to square v"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: Ek = ½mv², ΔEp = mgΔh, Ee = ½kx², P = Fv, efficiency = useful power out ÷ total power in. 'Show that' energy questions: write the equality in symbols first, then substitute."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake", "Fix"], [
            ["Using θ between force and the horizontal in W = Fs cos θ", "θ = angle between force and displacement"],
            ["Saying work is done by a centripetal / normal force", "Force ⟂ displacement → W = 0"],
            ["Saying energy is 'lost' or 'used up'", "Transferred / dissipated as thermal energy to surroundings"],
            ["Forgetting to square v in E<sub>k</sub>", "E<sub>k</sub> = ½mv²; double v → ×4"],
            ["Using slope length in mgΔh", "Use vertical height change"],
            ["P = Fv with F = resistance when accelerating", "Use driving force = ma + resistance"],
            ["Efficiency written with units or &gt; 1", "Ratio; multiply by 100 for %"],
            ["Using E<sub>p</sub> = mgh for large heights (far from Earth)", "Only near the surface where g is constant"],
            ["Using energy conservation through an inelastic collision", "Energy is not conserved as KE; use momentum"],
            ["½kx used for spring energy", "½kΔx² (area under triangle F–x graph)"],
            ["Mixing kJ, MJ, W, kWh", "Convert to J and W first"],
            ["Giving energy-density answer in wrong unit", "Match the unit of the data (J kg⁻¹ vs J m⁻³)"],
          ]],
          ["check", [
            "I can state the definitions of work, power, efficiency and the conservation of energy.",
            "I can use W = Fs cos θ and get work from an F–s graph.",
            "I can apply energy conservation with and without friction.",
            "I can do spring, pendulum, ramp and braking problems.",
            "I can use P = Fv and compute efficiency, including chains of devices.",
            "I can read and draw a Sankey diagram.",
            "I can answer 'explain why energy is dissipated' in two linked points.",
          ]],
        ],
      },
    ],
    summary: [
      "起點終點列能量，差額就係做功或消耗",
      "W = Fs cos θ，θ 係力同位移嘅角",
      "力垂直位移，做功零",
      "Ek = ½mv²，速度×2 動能×4",
      "ΔEp = mgΔh（垂直高度），彈簧 ½kΔx²",
      "摩擦令能量變熱散走，總量守恆",
      "P = W/t = Fv；等速時驅動力 = 阻力",
      "效率 = 有用 ÷ 總輸入，永遠 ≤ 1",
      "Sankey：闊度 ∝ 能量，總入 = 總出",
    ],
    practice: [
      { q: "A car's speed doubles. Its kinetic energy:", o: ["A. doubles", "B. increases by a factor of 4", "C. increases by a factor of 8", "D. stays the same"], m: 1, a: "<b>B</b>. E<sub>k</sub> = ½mv² ∝ v². [1]" },
      { q: "A force acts on an object that moves in a circle at constant speed. The force is always perpendicular to the velocity. The work done by the force in one revolution is:", o: ["A. Fs", "B. 2πrF", "C. positive but small", "D. zero"], m: 1, a: "<b>D</b>. W = Fs cos 90° = 0. [1]" },
      { q: "A machine has input power 500 W and wastes 350 W as heat. Its efficiency is:", o: ["A. 0.30", "B. 0.43", "C. 0.70", "D. 0.15"], m: 1, a: "<b>A</b>. Useful = 500 − 350 = 150 W; 150 ÷ 500 = 0.30. [1]" },
      { q: "A 2.0 kg object is lifted vertically at constant speed through 3.0 m in 4.0 s. The useful power output is:", o: ["A. 15 W", "B. 59 W", "C. 6.0 W", "D. 24 W"], m: 1, a: "<b>A</b>. P = mgΔh/t = 2.0 × 9.81 × 3.0 ÷ 4.0 = 14.7 ≈ 15 W. [1]" },
      { q: "A suitcase is pulled 20 m along a horizontal floor by a force of 50 N at 30° above the horizontal. Calculate the work done by the force.", m: 2, a: "W = Fs cos θ [1]; 50 × 20 × cos 30° = 8.7 × 10² J (866 J) [1]" },
      { q: "A ball is dropped from rest from a height of 12 m. Calculate its speed just before it hits the ground, ignoring air resistance.", m: 2, a: "mgh = ½mv² [1]; v = √(2 × 9.81 × 12) = 15 m s⁻¹ [1]" },
      { q: "A 1000 kg car travelling at 20 m s⁻¹ brakes to rest with a constant force of 4000 N. Determine the braking distance.", m: 3, a: "E<sub>k</sub> = ½ × 1000 × 20² = 2.0 × 10⁵ J [1]; Fs = E<sub>k</sub> [1]; s = 2.0 × 10⁵ ÷ 4000 = 50 m [1]" },
      { q: "A 2.0 kg block slides from rest down a rough ramp of length 5.0 m. The vertical drop is 1.5 m and its speed at the bottom is 4.0 m s⁻¹. Determine the average frictional force.", m: 4, a: "Loss of E<sub>p</sub> = 2.0 × 9.81 × 1.5 = 29.4 J [1]; gain of E<sub>k</sub> = ½ × 2.0 × 4.0² = 16 J [1]; energy dissipated = 13.4 J [1]; F = 13.4 ÷ 5.0 = 2.7 N [1]" },
      { q: "Explain why the speed of the block in the previous question is less than the speed it would have on a smooth ramp.", m: 2, a: "Friction acts against the motion / work is done against friction [1]; energy is dissipated as thermal energy so less E<sub>p</sub> is converted to E<sub>k</sub> [1]" },
      { q: "A car travels at a constant 25 m s⁻¹ on a level road against a total resistive force of 600 N. (a) State the driving force. (b) Calculate the power developed.", m: 3, a: "(a) 600 N, since the resultant force is zero at constant speed [1]; (b) P = Fv [1] = 600 × 25 = 1.5 × 10⁴ W [1]" },
      { q: "A motor of efficiency 75 % lifts an 800 kg load through 12 m in 20 s at constant speed. Determine the power input to the motor.", m: 4, a: "Useful work = 800 × 9.81 × 12 = 9.4 × 10⁴ J [1]; useful power = 4.7 × 10³ W [1]; input = useful ÷ efficiency [1]; = 6.3 × 10³ W [1]" },
      { q: "A device receives 200 J of energy. It produces 60 J useful light, 120 J thermal energy and 20 J sound. (a) Calculate the efficiency. (b) Describe how this would be shown on a Sankey diagram.", m: 3, a: "(a) 60 ÷ 200 = 0.30 (30 %) [1]; (b) one input arrow of 200 units width splitting into a 60-unit useful arrow and 140-unit (120 + 20) wasted arrows [1]; widths proportional to energy [1]" },
    ],
  },

  "phys-6": {
    title: "Temperature · Internal energy · c & L · Conduction · Black-body radiation",
    intro: "B.1 一條線：分清「升溫 (mcΔT)」同「相變 (mL)」兩種過程，再加三種傳熱方式同黑體輻射。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "B.1 總覽 + 口訣 + 數據",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "斜線 mcΔT，平線 mL；溫度睇平均，內能計總數", "Sloping section of a heating curve: temperature changes → Q = mcΔT. Flat section: phase change → Q = mL. Temperature ∝ AVERAGE kinetic energy; internal energy = TOTAL kinetic + potential."],
          ["flow", [["① 識別過程", "Does the temperature change? Yes → mcΔT. No (melting/boiling) → mL."], ["② 分段計", "Multi-stage: ice warming, melting, water warming, boiling… add all Q."], ["③ 加條件", "Mixtures: energy lost by hot = energy gained by cold. Heater: Q = Pt × efficiency."]]],
          ["grid", [
            ["B.1", "溫度 K，攝氏加 273", "T(K) = θ(°C) + 273; ΔT is the same in K and °C"],
            ["B.1", "溫度 ∝ 粒子平均動能", "Ē<sub>k</sub> = (3/2)k<sub>B</sub>T"],
            ["B.1", "內能 = 隨機動能 + 分子間位能", "Internal energy = total random KE + intermolecular PE"],
            ["B.1", "固液氣：排列、距離、運動", "Solid: fixed positions, vibrate; liquid: close, slide; gas: far apart, random"],
            ["B.1", "溶解／沸騰：位能升，動能不變", "During phase change: bonds broken, PE increases, temperature constant"],
            ["B.1", "蒸發任何溫度，只喺表面，最快粒子走", "Evaporation: fastest molecules escape, so remaining liquid cools"],
            ["B.1", "混合水：熱得 = 冷得", "Energy lost by hot = energy gained by cold (no heat loss)"],
            ["B.1", "傳導靠振動同自由電子", "Metals: free electrons carry energy; non-metals: lattice vibrations only"],
            ["B.1", "對流要流體，輻射唔使媒介", "Convection needs a fluid; radiation travels through vacuum"],
            ["B.1", "L = σAT⁴，T 加倍功率 ×16", "Stefan–Boltzmann: L ∝ T⁴ (kelvin only)"],
            ["B.1", "λmax T = 2.90 × 10⁻³ m K", "Hotter body → shorter peak wavelength"],
            ["B.1", "亮度 b = L/4πd²，距離加倍亮度 ÷4", "Inverse square law"],
          ]],
          ["table", ["Constant (data booklet)", "Value", "Use"], [
            ["Stefan–Boltzmann constant σ", "5.67 × 10⁻⁸ W m⁻² K⁻⁴", "L = σAT⁴"],
            ["Wien's constant", "2.90 × 10⁻³ m K", "λ<sub>max</sub>T = constant"],
            ["Boltzmann constant k<sub>B</sub>", "1.38 × 10⁻²³ J K⁻¹", "Ē<sub>k</sub> = (3/2)k<sub>B</sub>T"],
            ["Avogadro constant N<sub>A</sub>", "6.02 × 10²³ mol⁻¹", "particles ↔ moles"],
            ["Specific heat capacity of water", "4180 J kg⁻¹ K⁻¹ (given in questions)", "Q = mcΔT"],
            ["Specific latent heat of fusion of ice", "3.34 × 10⁵ J kg⁻¹ (given in questions)", "Q = mL"],
            ["Kelvin", "T(K) = θ(°C) + 273", "every T⁴, kinetic-energy and gas question"],
          ]],
        ],
      },
      {
        h: "Temperature + internal energy + phases 定義",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Temperature:</b> a measure of the average random kinetic energy of the particles in a substance; it determines the direction of net thermal energy flow (from hot to cold). Measured in kelvin.<br><b>Thermal equilibrium:</b> two objects in contact have the same temperature, so there is no net transfer of thermal energy between them.<br><b>Internal energy:</b> the total of the random kinetic energy and the intermolecular potential energy of all the particles in a system.<br><b>Thermal energy (heat):</b> energy transferred from a region of higher temperature to a region of lower temperature.<br><b>Absolute zero:</b> 0 K, the temperature at which the particles have minimum (zero in classical model) random kinetic energy.<br><b>Evaporation:</b> change from liquid to gas at the surface at any temperature. <b>Boiling:</b> change from liquid to gas throughout the liquid at the boiling point."],
          ["table", ["Phase", "Arrangement", "Movement", "Intermolecular forces / energy"], [
            ["Solid", "regular, fixed positions, close", "vibrate about fixed points", "strong; PE lowest"],
            ["Liquid", "close, irregular", "vibrate and slide past each other", "moderate; PE higher"],
            ["Gas", "far apart, random", "random, fast, free motion", "negligible; PE highest (≈ 0 for ideal gas)"],
          ]],
          ["key", "Ē<sub>k</sub> = (3/2) k<sub>B</sub>T　｜　T(K) = θ(°C) + 273"],
          ["eg", "<b>P2 · 2 marks</b> — Calculate the average random kinetic energy of a gas molecule at 27 °C.", [
            "T = 27 + 273 = 300 K [M1]",
            "Ē<sub>k</sub> = (3/2) × 1.38 × 10⁻²³ × 300 = <b>6.2 × 10⁻²¹ J</b> [A1] ✅",
          ]],
          ["eg", "<b>P1 MCQ-style · 1 mark</b> — The temperature of a gas rises from 27 °C to 127 °C. By what factor does the average kinetic energy of its molecules increase?", [
            "Convert to kelvin: 300 K → 400 K",
            "Ē<sub>k</sub> ∝ T → 400 ÷ 300 = <b>1.33</b> ✅ (not 127/27 = 4.7!)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — A bath of warm water and a cup of boiling water. State and explain which has the greater internal energy.", [
            "The bath (more particles, so greater total random KE + PE) [1]",
            "Temperature measures only the AVERAGE kinetic energy; the cup has higher temperature but far fewer particles [1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Explain why evaporation cools a liquid.", [
            "Molecules with the highest kinetic energy near the surface escape [1]",
            "Remaining molecules have lower average kinetic energy [1]",
            "So the temperature of the liquid decreases [1] ✅",
          ]],
          ["trap", ["寫「Temperature = kinetic energy」漏咗 average / random 要扣分。", "Thermal equilibrium 係「冇 net transfer」，唔係「冇能量交換」。", "Celsius ΔT 同 kelvin ΔT 一樣大；但除法比例要用 K。"]],
        ],
      },
      {
        h: "Specific heat capacity c · latent heat L",
        min: 4,
        blocks: [
          ["note", "<b>Definitions (word-for-word)</b><br><b>Specific heat capacity c:</b> the energy required to raise the temperature of 1 kg of a substance by 1 K (J kg⁻¹ K⁻¹).<br><b>Specific latent heat L:</b> the energy required to change the phase of 1 kg of a substance at constant temperature (J kg⁻¹); L<sub>f</sub> for melting/freezing, L<sub>v</sub> for boiling/condensing.<br><b>Heat capacity C:</b> energy needed to raise the temperature of a whole object by 1 K, C = mc (J K⁻¹)."],
          ["key", "Q = mcΔT（溫度變）　｜　Q = mL（溫度唔變）　｜　電熱：Q = Pt × efficiency"],
          ["table", ["Heating curve section", "What happens", "Energy equation", "Particles"], [
            ["Sloped (solid / liquid / gas)", "temperature rises", "Q = mcΔT", "average KE increases"],
            ["Flat (melting)", "temperature constant", "Q = mL<sub>f</sub>", "bonds partly broken; PE increases"],
            ["Flat (boiling)", "temperature constant", "Q = mL<sub>v</sub>", "bonds fully broken; PE increases a lot, large volume increase"],
            ["Gradient steeper for gas", "lower c", "gradient = P ÷ (mc)", "compare c from slopes"],
          ]],
          ["eg", "<b>P2 · 3 marks</b> — A 3.0 kW electric kettle heats 2.0 kg of water from 20 °C to 80 °C. Assuming no thermal energy loss, calculate the time taken. (c = 4180 J kg⁻¹ K⁻¹)", [
            "Q = mcΔT = 2.0 × 4180 × 60 = 5.0 × 10⁵ J [M1][A1]",
            "Pt = Q → t = 5.02 × 10⁵ ÷ 3000 = <b>1.7 × 10² s</b> (167 s) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Calculate the energy needed to melt 0.50 kg of ice at 0 °C and heat the water to 20 °C. (L<sub>f</sub> = 3.34 × 10⁵ J kg⁻¹, c = 4180 J kg⁻¹ K⁻¹)", [
            "Melting: Q<sub>1</sub> = mL = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J [M1]",
            "Heating: Q<sub>2</sub> = mcΔT = 0.50 × 4180 × 20 = 4.18 × 10⁴ J [M1]",
            "Total = <b>2.1 × 10⁵ J</b> (2.09 × 10⁵) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — 0.20 kg of water at 80 °C is mixed with 0.50 kg of water at 20 °C in an insulated container. Determine the final temperature.", [
            "Energy lost by hot = energy gained by cold [M1]",
            "0.20 × c × (80 − T) = 0.50 × c × (T − 20) → c cancels [M1]",
            "16 − 0.20T = 0.50T − 10 → 26 = 0.70T → T = <b>37 °C</b> (37.1) [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — In an experiment a 60 W heater is used for 200 s to raise the temperature of a 0.50 kg metal block by 12 K. Determine the specific heat capacity of the metal. Suggest why the true value is lower than the value you find.", [
            "Energy supplied = Pt = 60 × 200 = 1.2 × 10⁴ J [M1]",
            "c = Q ÷ (mΔT) = 12000 ÷ (0.50 × 12) = <b>2.0 × 10³ J kg⁻¹ K⁻¹</b> [A1]",
            "Some thermal energy is lost to the surroundings, so less energy actually heated the block; the real c is smaller [1] ✅ (insulate the block to improve)",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — Describe, in terms of particles, what happens to the energy supplied while ice at 0 °C melts.", [
            "Energy breaks (weakens) intermolecular bonds / increases intermolecular potential energy [1]",
            "The average kinetic energy does not change, so the temperature stays constant [1] ✅",
          ]],
          ["note", "<b>常考 (perennial)</b>: heating-curve graph with the temperature axis and a calculation of c or L from the gradient / length of the flat part; 'explain in terms of molecules why temperature is constant during melting' (2 marks); mixtures with a final temperature; 'suggest one reason the experimental value differs' (heat loss)."],
          ["trap", ["相變期間寫「溫度升高」；其實溫度不變。", "水 c = 4180，唔好同 L = 3.34 × 10⁵ 混淆。", "Mixture：用 (T<sub>hot</sub> − T) 同 (T − T<sub>cold</sub>)，兩邊都要正數。"]],
        ],
      },
      {
        h: "Conduction · convection · radiation 傳熱",
        min: 3,
        blocks: [
          ["table", ["Method", "Medium?", "How it works (exam wording)", "Example"], [
            ["Conduction", "solids best; needs matter", "Particles at the hot end vibrate with greater amplitude and pass energy to neighbours through collisions/bonds. In metals, free (delocalised) electrons also diffuse and transfer energy quickly.", "metal spoon in hot tea"],
            ["Convection", "fluids only", "Heated fluid expands, becomes less dense and rises; cooler, denser fluid sinks to take its place, forming a convection current that carries thermal energy.", "sea breeze, boiling water"],
            ["Thermal radiation", "none (works in vacuum)", "All bodies above 0 K emit electromagnetic waves (mainly infrared); transferred at the speed of light and absorbed by other bodies.", "Sun to Earth"],
          ]],
          ["key", "Conduction rate：ΔQ/Δt = kA ΔT/Δx（k = thermal conductivity, A = area, Δx = thickness）<br>面積大、溫差大、k 大、厚度薄 → 傳熱快。（公式如題目／booklet 有給）"],
          ["rhyme", "口訣", "傳導靠碰撞，對流靠升降，輻射靠電磁", "Conduction: collisions/vibrations (and free electrons in metals). Convection: bulk movement of fluid due to density difference. Radiation: EM waves, no medium."],
          ["eg", "<b>P2 · 2 marks</b> — A glass window of area 2.0 m², thickness 6.0 mm and thermal conductivity 0.80 W m⁻¹ K⁻¹ has a temperature difference of 20 K across it. Calculate the rate of conduction.", [
            "ΔQ/Δt = kAΔT/Δx [M1]",
            "= 0.80 × 2.0 × 20 ÷ 6.0 × 10⁻³ = <b>5.3 × 10³ W</b> [A1] ✅ (6.0 mm → 6.0 × 10⁻³ m!)",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Explain why metals are better thermal conductors than wood.", [
            "In both, particles vibrate and pass energy to neighbours [1]",
            "Metals also contain free (delocalised) electrons [1]",
            "These move through the metal and transfer energy much faster than lattice vibrations alone [1] ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b> — Outline why the freezer compartment of a refrigerator is placed at the top.", [
            "Air cooled by the freezer becomes denser and sinks [1]",
            "Warmer air rises to be cooled, establishing a convection current that cools the whole fridge [1] ✅",
          ]],
          ["trap", ["「Heat rises」：應該寫 hot fluid is less dense so it rises。", "Radiation 唔使 medium，真空都得；convection 真空唔得。", "傳導公式 Δx 要轉做 m（mm → ×10⁻³）。"]],
        ],
      },
      {
        h: "Black-body radiation 黑體輻射",
        min: 3.5,
        blocks: [
          ["note", "<b>Definitions</b><br><b>Black body:</b> an idealised object that absorbs all the electromagnetic radiation incident on it, and emits the maximum possible radiation at every wavelength for its temperature.<br><b>Luminosity L:</b> the total power radiated by a star (W).<br><b>Apparent brightness b:</b> the power received per unit area at the observer (W m⁻²); b = L/4πd².<br><b>Stefan–Boltzmann law:</b> the total power emitted by a black body is proportional to its surface area and to the fourth power of its absolute temperature, L = σAT⁴.<br><b>Wien's displacement law:</b> the peak wavelength is inversely proportional to the absolute temperature, λ<sub>max</sub>T = 2.90 × 10⁻³ m K."],
          ["key", "L = σAT⁴（球星 A = 4πR²）｜ λ<sub>max</sub>T = 2.90 × 10⁻³ m K ｜ b = L/(4πd²)"],
          ["table", ["Black-body spectrum (intensity vs wavelength)", "What changes when T increases"], [
            ["Total area under curve", "increases (∝ T⁴)"],
            ["Peak wavelength", "moves to shorter wavelength (∝ 1/T)"],
            ["Peak height", "increases at all wavelengths"],
            ["Curves", "never cross; hotter curve is above the cooler one at every wavelength"],
          ]],
          ["eg", "<b>P2 · 2 marks</b> — The Sun's spectrum peaks at 500 nm. Estimate its surface temperature.", [
            "λ<sub>max</sub>T = 2.90 × 10⁻³ [M1]",
            "T = 2.90 × 10⁻³ ÷ 500 × 10⁻⁹ = <b>5.8 × 10³ K</b> [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — The Sun has surface temperature 5800 K and radius 7.0 × 10⁸ m. Calculate its luminosity.", [
            "A = 4πR² = 4π(7.0 × 10⁸)² = 6.16 × 10¹⁸ m² [M1]",
            "L = σAT⁴ = 5.67 × 10⁻⁸ × 6.16 × 10¹⁸ × 5800⁴ [M1]",
            "= <b>3.9 × 10²⁶ W</b> [A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Star X has the same surface temperature as the Sun but twice the radius. State and calculate how its luminosity compares. Then find the factor for a star with twice the temperature and half the radius.", [
            "L ∝ R²T⁴. Same T, R × 2 → L × 2² = <b>4 times</b> [A1]",
            "T × 2, R × ½ → L × (½)² × 2⁴ = ¼ × 16 = <b>4 times</b> [M1][A1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b> — Luminosity of the Sun is 3.85 × 10²⁶ W and the Earth–Sun distance is 1.5 × 10¹¹ m. Calculate the apparent brightness at the Earth. Then state the brightness if the distance were doubled.", [
            "b = L/4πd² = 3.85 × 10²⁶ ÷ (4π × (1.5 × 10¹¹)²) [M1]",
            "= <b>1.4 × 10³ W m⁻²</b> (1360 with the exact distance) [A1]",
            "d × 2 → b ÷ 4 ≈ 3.4 × 10² W m⁻² [A1] ✅",
          ]],
          ["note", "<b>常考</b>: sketch two black-body curves (axes labelled: wavelength / intensity); 'determine the radius of a star from L and T' (rearrange R = √(L/4πσT⁴)); compare two stars by ratios (no calculator numbers needed); 'state why the star is not a perfect black body' (it is an approximation)."],
          ["trap", ["T⁴ 一定用 kelvin，唔好用 °C。", "球星 A = 4πR²（唔好用 πR²）。", "b 同 L 唔同：L 係總功率 W，b 係每 m² W m⁻²。", "Wien 係波長，Stefan 係功率，唔好換。"]],
        ],
      },
      {
        h: "長題拆解 · 電熱水壺",
        min: 2.5,
        blocks: [
          ["flow", [["① 識別階段", "Stage 1 temperature rise (mcΔT). Stage 2 boiling at 100 °C (mL)."], ["② 有效功率", "Useful power = efficiency × electrical power."], ["③ 逐段計", "Time = Q ÷ useful power; boiled mass = useful energy ÷ L."]]],
          ["eg", "<b>P2 · 6 marks</b> — A 2.0 kW kettle of efficiency 85 % contains 1.5 kg of water at 20 °C. (a) Calculate the time to reach 100 °C. (b) The kettle is left on for a further 60 s at 100 °C. Calculate the mass of water that boils away. (c) State two reasons why the efficiency is less than 100 %. (c = 4180 J kg⁻¹ K⁻¹, L<sub>v</sub> = 2.26 × 10⁶ J kg⁻¹)", [
            "① (a) Q = mcΔT = 1.5 × 4180 × 80 = 5.0 × 10⁵ J [M1][A1]",
            "② Useful power = 0.85 × 2000 = 1700 W [M1]; t = 5.02 × 10⁵ ÷ 1700 = <b>3.0 × 10² s</b> (295 s) [A1]",
            "③ (b) Useful energy in 60 s = 1700 × 60 = 1.02 × 10⁵ J [M1]; m = Q/L = 1.02 × 10⁵ ÷ 2.26 × 10⁶ = <b>0.045 kg</b> [A1]",
            "(c) Thermal energy lost to surroundings (conduction/convection/radiation from the walls) [1]; some energy heats the kettle itself [1] ✅",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Distinguish","Temperature = measure of average random KE of particles; thermal energy = energy transferred due to a temperature difference."],["Define c / L","c = energy per kg per K; L = energy per kg to change phase at constant temperature."],["Outline","Short statement of each mode (conduction, convection, radiation) with the mechanism."],["Estimate","State assumptions (e.g. no heat loss) then calculate."],["Explain heating curve","flat parts: energy raises PE (bonds broken), KE and T constant; sloped: KE rises."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Q = mcΔT","ΔT in K or °C is the same; units J, kg"],["Mixing / calorimetry","energy lost = energy gained [1]; solve T<sub>f</sub> [1]"],["Heater with losses","electrical energy VIt = mcΔT + loss; real c from gradient"],["Black-body","P = σAT⁴ [1]; use K [1]; Wien λ<sub>max</sub>T = 2.90 × 10⁻³ m K"],["Compare surfaces","emissivity/colour/area explanation for radiation rate"]]],
          ["trap", ["Using °C in σAT⁴ or Wien's law (must be K)","Applying ΔT = mcΔT with phase change; use mL when T is constant","Saying 'heat is stored'; it is internal (thermal) energy"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: Q = mcΔT, Q = mL, P = eσAT⁴, λ<sub>max</sub>T = 2.90 × 10⁻³ m K, σ = 5.67 × 10⁻⁸. Always write the heat-balance equation before numbers."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["Mistake", "Fix"], [
            ["Using °C in L = σAT⁴ or λT", "Always kelvin: T = θ + 273"],
            ["Saying temperature rises during melting/boiling", "Constant; energy goes to potential energy (bonds)"],
            ["Writing 'temperature = kinetic energy'", "Temperature measures AVERAGE random KE"],
            ["Using A = πR² for a star", "A = 4πR²"],
            ["Mixing Q = mcΔT for phase-change sections", "Flat section → mL"],
            ["Forgetting a heater's efficiency / heat loss", "Pt × efficiency = Q; heat loss makes measured c too large"],
            ["Using 127/27 style ratios for temperature", "Convert to kelvin before taking ratios"],
            ["Saying 'heat rises' for convection", "Hot fluid is less dense, so it rises"],
            ["Mixing luminosity and brightness", "L total power (W); b power per area (W m⁻²)"],
            ["Black-body curves drawn crossing", "Hotter curve is above at every wavelength"],
            ["Conduction: mm not converted to m", "Δx in metres"],
            ["Not including all stages in multi-stage heating", "Add each Q: ice warm + melt + water warm + boil"],
          ]],
          ["check", [
            "I can state the definitions of temperature, internal energy, c and L word-for-word.",
            "I can do multi-stage Q = mcΔT + mL calculations and mixtures.",
            "I can explain melting/boiling/evaporation using particles.",
            "I can explain conduction (including free electrons), convection and radiation.",
            "I can use L = σAT⁴, Wien and b = L/4πd² and ratio-compare stars.",
            "I can sketch black-body curves for two temperatures.",
            "I can explain why experimental c is too large when heat is lost.",
          ]],
        ],
      },
    ],
    summary: [
      "斜線 mcΔT，平線 mL",
      "溫度睇平均動能，內能計總數（動能 + 位能）",
      "相變：位能升，動能不變，溫度不變",
      "混合：熱得 = 冷得，c 約走",
      "傳導振動 + 自由電子；對流密度差；輻射電磁無媒介",
      "L = σAT⁴（K、A = 4πR²）",
      "λmax T = 2.90 × 10⁻³ m K：越熱波長越短",
      "亮度 b = L/4πd²，距離×2 亮度 ÷4",
      "電熱：Pt × efficiency = Q",
    ],
    practice: [
      { q: "During the melting of a pure solid at its melting point, the thermal energy supplied increases:", o: ["A. the average kinetic energy of the particles", "B. the intermolecular potential energy of the particles", "C. the temperature of the substance", "D. both the temperature and the potential energy"], m: 1, a: "<b>B</b>. Temperature (average KE) is constant; the energy increases the potential energy as bonds are weakened. [1]" },
      { q: "The absolute temperature of a black body doubles. The total power it radiates increases by a factor of:", o: ["A. 2", "B. 4", "C. 8", "D. 16"], m: 1, a: "<b>D</b>. L ∝ T⁴ → 2⁴ = 16. [1]" },
      { q: "The temperature of a gas increases from 27 °C to 127 °C. The average kinetic energy of its molecules increases by a factor of:", o: ["A. 1.33", "B. 4.7", "C. 2.0", "D. 1.0"], m: 1, a: "<b>A</b>. Ē<sub>k</sub> ∝ T in kelvin: 400 ÷ 300 = 1.33. [1]" },
      { q: "Two stars have the same surface temperature. Star P has twice the radius of star Q. The luminosity of P compared with Q is:", o: ["A. 2×", "B. 4×", "C. 8×", "D. 16×"], m: 1, a: "<b>B</b>. L ∝ R²T⁴ → 2² = 4. [1]" },
      { q: "Calculate the energy needed to melt 0.50 kg of ice at 0 °C and warm the water to 20 °C. (L<sub>f</sub> = 3.34 × 10⁵ J kg⁻¹; c = 4180 J kg⁻¹ K⁻¹)", m: 3, a: "mL = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J [1]; mcΔT = 0.50 × 4180 × 20 = 4.18 × 10⁴ J [1]; total = 2.1 × 10⁵ J (2.09 × 10⁵ J) [1]" },
      { q: "0.20 kg of water at 80 °C is added to 0.50 kg of water at 20 °C in an insulated container. Determine the final temperature.", m: 3, a: "Energy lost by hot = energy gained by cold [1]; 0.20(80 − T) = 0.50(T − 20) [1]; T = 37 °C [1]" },
      { q: "Explain, in terms of particles, why the temperature of a substance remains constant while it melts, even though energy is supplied.", m: 2, a: "Energy is used to break/weaken the intermolecular bonds, increasing potential energy [1]; the average kinetic energy of the particles (hence temperature) does not change [1]" },
      { q: "Explain why evaporation causes the temperature of a liquid to fall.", m: 3, a: "The most energetic (fastest) molecules escape from the surface [1]; the average kinetic energy of the remaining molecules decreases [1]; temperature falls [1]" },
      { q: "A student heats a 0.50 kg metal block with a 60 W heater for 200 s and measures a temperature rise of 12 K. (a) Determine the specific heat capacity. (b) Suggest why the accepted value is lower.", m: 4, a: "(a) E = Pt = 60 × 200 = 1.2 × 10⁴ J [1]; c = E/(mΔT) [1] = 1.2 × 10⁴ ÷ (0.50 × 12) = 2.0 × 10³ J kg⁻¹ K⁻¹ [1]; (b) thermal energy lost to surroundings so not all energy raised the block's temperature [1]" },
      { q: "Explain why metals conduct thermal energy better than non-metals.", m: 3, a: "Vibrating particles pass energy on to neighbours in all solids [1]; metals also have free/delocalised electrons [1]; these move through the metal transferring energy much faster [1]" },
      { q: "The Sun's spectrum has its peak intensity at a wavelength of 500 nm. (a) Estimate the Sun's surface temperature. (b) The Sun has radius 7.0 × 10⁸ m. Calculate its luminosity.", m: 5, a: "(a) T = 2.90 × 10⁻³ ÷ 500 × 10⁻⁹ [1] = 5.8 × 10³ K [1]; (b) A = 4πR² = 6.2 × 10¹⁸ m² [1]; L = σAT⁴ = 5.67 × 10⁻⁸ × 6.2 × 10¹⁸ × (5.8 × 10³)⁴ [1] = 4 × 10²⁶ W (3.9 × 10²⁶ W) [1]" },
      { q: "Sketch on one set of axes the black-body spectra (intensity against wavelength) of a body at 3000 K and at 6000 K, labelling each curve.", m: 3, a: "Axes labelled intensity (power per area) and wavelength [1]; 6000 K curve has higher peak and larger area [1]; peak of 6000 K at shorter wavelength (half the peak wavelength) and curves do not cross [1]" },
      { q: "The Earth receives thermal radiation from the Sun of luminosity 3.85 × 10²⁶ W at a distance of 1.5 × 10¹¹ m. Calculate the apparent brightness at Earth.", m: 2, a: "b = L/4πd² [1]; = 3.85 × 10²⁶ ÷ (4π × (1.5 × 10¹¹)²) = 1.4 × 10³ W m⁻² [1]" },
    ],
  },
});
IB.addFast({
  "phys-7": {
    title: "Greenhouse Effect · Albedo · Emissivity · Energy Balance",
    intro: "一條平衡式打天下：power absorbed = power emitted。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Energy balance 能量平衡",
        min: 2,
        blocks: [
          ["note", "<b>常考：</b>① Calculate T from (1−α)S/4 = eσT⁴ (3 marks, 開四次方) ② Explain greenhouse mechanism (3 marks: absorb–resonance–re-emit) ③ Show that S/4 (2 marks) ④ Suggest/outline feedback (ice–albedo, 2 marks) ⑤ Calculate albedo or emissivity (1–2 marks)。"],
          ["rhyme", "口訣", "入 = 出，先 ÷4、扣反射，再開四次方", "Every B.2 calculation: energy IN (sunlight, after reflection) = energy OUT (thermal radiation, σT⁴). Write that line first, then solve for T."],
          ["flow", [["① 入", "S ÷ 4 → × (1 − α)　absorbed per m² = (1 − α)S/4"], ["② 出", "emitted per m² = eσT⁴"], ["③ 令佢相等", "(1 − α)S/4 = eσT⁴ → T = [ (1 − α)S / (4eσ) ]<sup>¼</sup>"], ["④ 檢查", "答案係 K、約 200–300 K、冇忘記開四次方"]]],
          ["key", "<b>Equilibrium:</b> power absorbed = power emitted　⇒　\\((1-\\alpha)\\frac{S}{4} = e\\sigma T^4\\)　(per m² of surface)"],
        ],
      },
      {
        h: "口訣 + data booklet 數據",
        min: 1.5,
        blocks: [
          ["grid", [
            ["B.2", "反射睇 albedo，放射睇 emissivity", "Albedo = reflected ÷ incident; emissivity = emitted ÷ black-body emitted"],
            ["B.2", "除四因為圓碟變波波", "Disc πR² catches the light, sphere 4πR² emits → S/4"],
            ["B.2", "短波入，長波出", "Sun → visible/UV in; Earth → infrared out"],
            ["B.2", "氣體共振食紅外，四面八方再放返", "GHG absorb IR (resonance) → re-emit in all directions"],
            ["B.2", "T 加倍，功率十六倍", "P ∝ T⁴ (2⁴ = 16)"],
            ["B.2", "最後開四次方", "T = (…)<sup>¼</sup>; forgetting gives ~10⁹"],
            ["B.2", "冰融 albedo 跌，越融越熱", "Positive feedback"],
            ["B.2", "光滑反射、黑嘅又吸又放", "Black body: e = 1, absorbs and emits best"],
            ["B.2", "冇大氣 255，有大氣 288", "Greenhouse effect ≈ +33 K"],
          ]],
          ["table", ["Quantity", "Symbol / value", "Note"], [
            ["Solar constant", "S = 1.36 × 10³ W m⁻²", "Intensity at top of atmosphere, normal to rays"],
            ["Mean incoming intensity", "S/4 = 340 W m⁻²", "Averaged over whole Earth"],
            ["Stefan–Boltzmann constant", "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴", "In data booklet"],
            ["Wien's law constant", "λ<sub>max</sub>T = 2.90 × 10⁻³ m K", "In data booklet"],
            ["Earth albedo (mean)", "α ≈ 0.30", "Snow/ice ≈ 0.8; ocean/forest ≈ 0.1; cloud high"],
            ["Earth mean surface temp", "≈ 288 K (15 °C)", "With atmosphere"],
            ["Earth temp, no atmosphere", "≈ 255 K", "e = 1, α = 0.30"],
            ["Earth radius", "6.37 × 10⁶ m", "In data booklet"],
          ]],
        ],
      },
      {
        h: "Definitions 定義",
        min: 2,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word)</b><br><b>Solar constant S:</b> the power per unit area (intensity) of solar radiation received at the top of Earth's atmosphere, on a surface perpendicular to the Sun's rays (≈ 1360 W m⁻²).<br><b>Albedo α:</b> the ratio of the total scattered (reflected) power to the total incident power. No units; 0 ≤ α ≤ 1.<br><b>Emissivity e:</b> the ratio of the power radiated by a surface to the power radiated by a black body of the same surface area and temperature. No units; 0 ≤ e ≤ 1.<br><b>Black body:</b> a perfect absorber and perfect emitter of radiation (e = 1).<br><b>Greenhouse gas:</b> a gas in the atmosphere that absorbs infrared radiation emitted by the Earth's surface and re-emits it in all directions (CO₂, CH₄, H₂O, N₂O).<br><b>Enhanced greenhouse effect:</b> extra warming due to human activities raising greenhouse-gas concentrations.<br><b>Intensity:</b> power per unit area, I = P/A (W m⁻²)."],
          ["table", ["Surface / object", "Albedo α", "Effect"], [
            ["Fresh snow / ice", "high (≈ 0.8)", "reflects most, absorbs little → cool"],
            ["Clouds", "high", "more cloud ↑ → more reflected sunlight"],
            ["Desert", "medium", "—"],
            ["Ocean / forest", "low (≈ 0.1)", "absorbs most → warm"],
            ["Black body", "0 (absorbs all)", "e = 1 (emits best)"],
          ]],
          ["trap", ["Albedo（反射）同 emissivity（放射）撈亂。", "Albedo、emissivity 都冇單位，係 0 至 1 之間嘅比例。"]],
        ],
      },
      {
        h: "Greenhouse mechanism 機制 (3-mark answer)",
        min: 3,
        blocks: [
          ["flow", [["1 太陽", "Short-wavelength radiation (visible, UV) passes through the atmosphere"], ["2 地面", "Surface absorbs it and warms; part is reflected (albedo)"], ["3 地面放射", "Warm surface emits long-wavelength infrared (Wien: λ<sub>max</sub> ≈ 10 μm)"], ["4 吸收", "GHG molecules absorb IR: IR frequency matches natural frequency of molecular vibration (resonance)"], ["5 再放", "Molecules re-emit IR in all directions, some back to the surface"], ["6 結果", "Less energy escapes to space → surface temperature higher than without atmosphere"]]],
          ["rhyme", "三分題骨架", "放射、吸收（共振）、四面八方再放返", "Emits infrared [1]; absorbed by GHG as frequency matches natural frequency of vibration [1]; re-emitted in all directions, some towards the Earth [1]."],
          ["table", ["Gas", "Main source", "Note"], [
            ["Carbon dioxide CO₂", "Burning fossil fuels, deforestation, cement", "Largest human-caused contribution"],
            ["Methane CH₄", "Livestock, rice paddies, landfill, natural-gas leaks, melting permafrost", "Stronger per molecule than CO₂"],
            ["Water vapour H₂O", "Evaporation; amount rises as air warms", "A feedback more than a driver"],
            ["Nitrous oxide N₂O", "Fertilisers, combustion", "Long lifetime"],
            ["N₂, O₂ (99% of air)", "—", "Not significant GHG: they do not absorb IR strongly"],
          ]],
          ["note", "<b>Feedback (positive = amplifies change)</b><br>Ice–albedo: warming → ice melts → albedo ↓ → more radiation absorbed → more warming.<br>Water vapour: warming → more evaporation → more H₂O (a GHG) → more warming.<br>Permafrost: warming → melting releases CH₄ → more warming.<br><b>Evidence for the enhanced effect:</b> rising CO₂ in ice cores and atmospheric measurements, rising mean global temperature, rising sea level, retreat of glaciers."],
          ["trap", ["只寫 “traps heat” 冇分：一定要寫 absorb + re-emit (all directions)。", "唔好話 ozone hole 導致 global warming；ozone 同 UV 有關，兩樣嘢。", "“Greenhouse gases reflect IR” 係錯：係 absorb 再 re-emit。", "Energy 入同出平衡時 Earth 唔再升溫；更多 GHG 令平衡溫度上升。"]],
        ],
      },
      {
        h: "Black-body radiation 公式",
        min: 2.5,
        blocks: [
          ["key", "<b>Stefan–Boltzmann:</b> \\(P = e\\sigma AT^4\\)　（P in W, A in m², T in K）<br><b>Wien:</b> \\(\\lambda_{max}T = 2.90\\times10^{-3}\\) m K<br><b>Intensity:</b> \\(I = P/A\\)　Inverse square: \\(I \\propto 1/d^2\\)"],
          ["table", ["If the question says…", "Do this"], [
            ["T doubles (A, e same)", "P × 2⁴ = <b>16</b>"],
            ["T increases by 10%", "P × 1.1⁴ = 1.46 (+46%)"],
            ["Radius doubles (sphere, same T)", "A × 4 → P × 4"],
            ["Find the peak wavelength", "λ<sub>max</sub> = 2.90 × 10⁻³ ÷ T"],
            ["Hotter object", "λ<sub>max</sub> shorter (bluer) and much more power"],
            ["Star luminosity", "L = σ(4πR²)T⁴ (e = 1)"],
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A surface of area 2.0 m² and emissivity 0.80 is at 400 K. Calculate the power it radiates.", [
            "P = eσAT⁴ = 0.80 × 5.67 × 10⁻⁸ × 2.0 × 400⁴",
            "400⁴ = 2.56 × 10¹⁰",
            "P = 0.80 × 5.67 × 10⁻⁸ × 2.0 × 2.56 × 10¹⁰ = 2.32 × 10³ W = <b>2.3 kW</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Find the wavelength of peak emission for (a) the Sun (5800 K) and (b) the Earth (288 K).", [
            "(a) λ = 2.90 × 10⁻³ ÷ 5800 = 5.0 × 10⁻⁷ m = <b>500 nm</b> (visible)",
            "(b) λ = 2.90 × 10⁻³ ÷ 288 = 1.0 × 10⁻⁵ m = <b>10 μm</b> (infrared) ✅",
            "→ Sun emits short wavelength, Earth emits long wavelength: this is why the greenhouse effect works.",
          ]],
        ],
      },
      {
        h: "Planet 溫度計算 · worked examples",
        min: 5,
        blocks: [
          ["eg", "<b>P2 · 2 marks</b>　Show that the mean intensity over the Earth's surface is S/4.", [
            "The Earth intercepts sunlight over a disc of area πR²: power received = S × πR²",
            "This power is spread over the whole sphere of area 4πR²",
            "Mean intensity = SπR² ÷ 4πR² = <b>S/4</b> ✅ (= 1360/4 = 340 W m⁻²)",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Estimate the mean temperature of the Earth with no atmosphere (α = 0.30, S = 1360 W m⁻², e = 1).", [
            "Absorbed = (1 − α)S/4 = 0.70 × 1360 ÷ 4 = 238 W m⁻²",
            "238 = 5.67 × 10⁻⁸ × T⁴ → T⁴ = 4.20 × 10⁹",
            "T = (4.20 × 10⁹)<sup>¼</sup> = <b>255 K</b> (−18 °C) ✅",
            "The real mean is 288 K → greenhouse effect adds about 33 K.",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Same Earth, but the atmosphere makes the effective emissivity e = 0.62. Find T.", [
            "238 = 0.62 × 5.67 × 10⁻⁸ × T⁴",
            "T⁴ = 238 ÷ 3.515 × 10⁻⁸ = 6.77 × 10⁹",
            "T = <b>287 K</b> ✅ (close to the observed 288 K)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A planet has S = 590 W m⁻², albedo 0.25, e = 1. Find its equilibrium temperature.", [
            "Absorbed = 0.75 × 590 ÷ 4 = 110.6 W m⁻²",
            "T⁴ = 110.6 ÷ 5.67 × 10⁻⁸ = 1.95 × 10⁹",
            "T = <b>210 K</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Total power absorbed by the whole Earth (R = 6.37 × 10⁶ m, α = 0.30).", [
            "Incident power = S × πR² = 1360 × π × (6.37 × 10⁶)² = 1360 × 1.275 × 10¹⁴ = 1.73 × 10¹⁷ W",
            "Absorbed = 0.70 × 1.73 × 10¹⁷ = <b>1.21 × 10¹⁷ W</b> ✅ (check: 238 × 4πR² = 238 × 5.10 × 10¹⁴ = 1.21 × 10¹⁷ W)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　The albedo falls from 0.30 to 0.29 (ice melting). Estimate the change in T (e = 1).", [
            "T ∝ (1 − α)<sup>¼</sup>: new T⁴ ∝ 0.71 vs 0.70",
            "T = 255 × (0.71 ÷ 0.70)<sup>¼</sup> = 255 × 1.0036 = 255.9 K",
            "Rise ≈ <b>0.9 K</b> ✅ (small albedo change, measurable warming; positive feedback)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Surface at 288 K with e = 1 radiates σT⁴. Space sees 240 W m⁻² leaving Earth. Find the effective emissivity.", [
            "σT⁴ = 5.67 × 10⁻⁸ × 288⁴ = 390 W m⁻²",
            "e = 240 ÷ 390 = <b>0.62</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Sun: L = 3.85 × 10²⁶ W, Earth–Sun distance 1.50 × 10¹¹ m. Find S.", [
            "S = L ÷ 4πd² = 3.85 × 10²⁶ ÷ (4π × (1.50 × 10¹¹)²)",
            "4π × 2.25 × 10²² = 2.83 × 10²³",
            "S = <b>1.36 × 10³ W m⁻²</b> ✅",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Outline (greenhouse)","3 marks: short-wave in → surface absorbs, re-emits long-wave IR → GHG absorb/re-radiate, part back to surface."],["Define albedo","Fraction (or %) of incident radiation reflected/scattered by a surface (no unit)."],["Explain","Link to equilibrium: power in = power out; change one term → new T."],["Calculate / Show that","P = eσAT⁴, I = P/A, solar intensity ÷ 4 for whole-sphere averaging."],["Discuss","Evidence and cause, with enhanced greenhouse effect from added CO₂ / CH₄."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Mechanism 3-marker","visible/UV in; IR out (longer λ); GHG molecules absorb and re-emit in all directions"],["Albedo calc","absorbed = (1 − α) × S × πR²; emitted = σ4πR²T⁴"],["Equilibrium T","set power in = power out [1]; solve for T [1]; convert K → °C only if asked"],["Effect of change","e.g. ↑ albedo → less absorbed → lower equilibrium T"],["Compare planets","atmosphere thickness, GHG content"]]],
          ["trap", ["Mixing up with the ozone layer problem","Saying GHG 'trap heat' without the absorb/re-emit in all directions idea","Forgetting ÷ 4 (πR² intercepts, 4πR² emits)"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet gives σ, Wien's law, P = eσAT⁴. Mark scheme words: 'infrared', 'longer wavelength', 'absorbed and re-radiated', 'in all directions', 'natural frequency of vibration of molecules'."],
        ],
      },
      {
        h: "Long question 長題拆解 + 失分位",
        min: 3,
        blocks: [
          ["note", "<b>拆解方法：</b>① 圈出 α、S、e、T 邊個係未知 ② 寫 absorbed = emitted ③ 代入每 m² 嘅量（有 ÷4 嗎？）④ 解 T⁴ ⑤ 開四次方 ⑥ 加單位 K。若題目問「why 比 no-atmosphere 熱」→ 用 mechanism 三步。"],
          ["eg", "Long question：(a) Estimate Earth's temperature with no atmosphere. (b) Observed temperature is 288 K. Explain the difference. (c) Suggest what happens to the equilibrium temperature if CO₂ concentration rises. [3+3+2]", [
            "(a) 0.70 × 1360/4 = 238 = σT⁴ → T = 255 K [3]",
            "(b) Atmosphere contains GHG; surface emits IR; GHG absorb it (resonance with molecular vibrations) and re-emit in all directions, some back to the surface; so surface is warmer (288 K > 255 K) [3]",
            "(c) More GHG → more IR absorbed and re-emitted back → equilibrium temperature higher (lower effective emissivity) [2]",
          ]],
          ["table", ["Mistake 失分位", "Fix"], [
            ["Forgetting ÷ 4", "Sunlight on disc, emitted from sphere: use S/4 per m²"],
            ["Forgetting (1 − α)", "Absorbed fraction = 1 − albedo"],
            ["Not taking fourth root", "T⁴ = … then T = (…)<sup>¼</sup>, check T ≈ 200–300 K"],
            ["Using °C in σT⁴", "Always kelvin: K = °C + 273"],
            ["“GHG trap heat”", "Absorb IR (resonance) + re-emit in all directions"],
            ["Reflects IR instead of absorbs", "GHG absorb then re-emit; surfaces reflect visible"],
            ["Confusing albedo and emissivity", "Albedo = reflection of incoming; emissivity = emission of outgoing"],
            ["Saying greenhouse effect = global warming", "Natural GHE keeps Earth habitable; ENHANCED effect causes extra warming"],
            ["Albedo of ice written as low", "Ice/snow high albedo; melting lowers albedo → positive feedback"],
            ["Radius vs diameter in πR²", "Check R, not diameter"],
            ["Writing 255 K as 255 °C", "255 K = −18 °C"],
            ["No units / 5 s.f.", "3 s.f. + unit (K, W, W m⁻²)"],
          ]],
          ["check", [
            "Define albedo, emissivity, solar constant, black body, GHG, enhanced GHE",
            "Explain why S/4 (disc vs sphere)",
            "Write the 3-mark greenhouse mechanism using resonance and re-emission in all directions",
            "Use (1 − α)S/4 = eσT⁴ to find T (and the fourth root)",
            "Use P = eσAT⁴ and λ<sub>max</sub>T = 2.90 × 10⁻³ without notes",
            "Name 4 GHG with a source each",
            "Explain ice–albedo and water-vapour positive feedback",
            "Say why Sun gives short wavelength and Earth gives infrared",
          ]],
        ],
      },
    ],
    summary: [
      "入 = 出：(1 − α)S/4 = eσT⁴",
      "除四因為圓碟變波波",
      "Albedo 反射，emissivity 放射",
      "短波入，長波出",
      "氣體共振食紅外，四面八方再放返",
      "T 加倍，功率十六倍；λ 最大 = 2.90×10⁻³ ÷ T",
      "冰融 albedo 跌，越融越熱",
      "最後開四次方，單位係 K",
    ],
    practice: [
      { q: "B.2 A surface receives 500 W m⁻² and absorbs 350 W m⁻². Its albedo is:", o: ["A. 0.30", "B. 0.70", "C. 0.43", "D. 1.43"], m: 1, a: "<b>A</b>. Reflected = 150; α = 150/500 = 0.30 [1]." },
      { q: "B.2 The absolute temperature of a black body doubles. The power it radiates changes by a factor of:", o: ["A. 2", "B. 4", "C. 8", "D. 16"], m: 1, a: "<b>D</b>. P ∝ T⁴ → 2⁴ = 16 [1]." },
      { q: "B.2 Which gas in the atmosphere is NOT a significant greenhouse gas?", o: ["A. Methane", "B. Carbon dioxide", "C. Nitrogen", "D. Water vapour"], m: 1, a: "<b>C</b>. N₂ does not absorb IR significantly [1]." },
      { q: "B.2 Which surface, if increased in area, would most increase global albedo?", o: ["A. Ocean", "B. Forest", "C. Snow and ice", "D. Bare dark soil"], m: 1, a: "<b>C</b>. Snow and ice have the highest albedo (≈ 0.8) [1]." },
      { q: "B.2 Earth's surface at 288 K radiates, as seen from space, 240 W m⁻². Calculate the effective emissivity.", m: 2, a: "σT⁴ = 5.67 × 10⁻⁸ × 288⁴ = 390 W m⁻² [M1]; e = 240/390 = 0.62 [A1]." },
      { q: "B.2 Show that the mean intensity of solar radiation over Earth's surface is S/4.", m: 2, a: "Power intercepted = S × πR² [1]; spread over surface 4πR², so mean intensity = SπR²/4πR² = S/4 [1]." },
      { q: "B.2 Explain how greenhouse gases increase the temperature of the Earth's surface.", m: 3, a: "Surface emits infrared radiation [1]; GHG molecules absorb IR as its frequency matches the natural (vibrational) frequency of the molecules / resonance [1]; molecules re-emit in all directions, some returning to the surface, so more energy retained and surface warmer [1]." },
      { q: "B.2 A planet has S = 590 W m⁻², albedo 0.25, emissivity 1. Calculate its equilibrium temperature.", m: 3, a: "Absorbed = 0.75 × 590/4 = 110.6 W m⁻² [M1]; 110.6 = 5.67 × 10⁻⁸ T⁴ [M1]; T = 210 K [A1]." },
      { q: "B.2 Estimate the Earth's mean temperature without an atmosphere (α = 0.30, S = 1360 W m⁻², e = 1).", m: 3, a: "Absorbed = 0.70 × 1360/4 = 238 W m⁻² [M1]; 238 = σT⁴ [M1]; T = 255 K [A1]." },
      { q: "B.2 Suggest why melting of polar ice can lead to further warming.", m: 2, a: "Ice replaced by sea water / land with lower albedo [1]; more radiation absorbed → temperature rises further (positive feedback) [1]." },
      { q: "B.2 The Sun's surface is at 5800 K. Calculate the wavelength of peak emission and state the region of the spectrum.", m: 2, a: "λ = 2.90 × 10⁻³/5800 [M1] = 5.0 × 10⁻⁷ m (500 nm), visible [A1]." },
      { q: "B.2 Outline two human activities that enhance the greenhouse effect.", m: 2, a: "Any two: burning fossil fuels (CO₂) [1]; deforestation (less CO₂ absorbed) [1]; livestock / rice farming (CH₄) [1]; fertiliser use (N₂O) [1]." },
    ],
  },

  "phys-8": {
    title: "Gas Laws · Ideal Gas Equation · Kinetic Model · Real Gases",
    intro: "一條式 pV = nRT 管晒氣體題：先轉單位（K、m³、Pa），再揀式。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "Unit 轉換 + 揀式",
        min: 2,
        blocks: [
          ["note", "<b>常考：</b>① Calculate with pV = nRT or p₁V₁/T₁ = p₂V₂/T₂ (2 marks, K!) ② Explain pressure change with kinetic model (2–3 marks) ③ State assumptions (2) ④ Real gas deviation (2) ⑤ Calculate mean KE / rms speed / number of molecules, p–V、p–1/V、p–T graphs。"],
          ["rhyme", "口訣", "先轉單位 K、Pa、m³，再揀式", "Gas questions are 70% unit conversion. Temperature in kelvin, pressure in Pa, volume in m³, then choose the equation."],
          ["flow", [["① 圈數據", "p, V, T, n or N, m; what is constant?"], ["② 轉單位", "T(K) = °C + 273 ・ kPa × 10³ = Pa ・ cm³ × 10⁻⁶ = m³ ・ dm³ (L) × 10⁻³ = m³"], ["③ 揀式", "Before/after (same gas): p₁V₁/T₁ = p₂V₂/T₂ ・ One state: pV = nRT or pV = Nk<sub>B</sub>T"], ["④ 檢查", "p, V ratios on same unit side can cancel; T always K"]]],
          ["table", ["If the question gives…", "Use"], [
            ["Moles n", "pV = nRT (R = 8.31)"],
            ["Number of molecules N", "pV = Nk<sub>B</sub>T (k<sub>B</sub> = 1.38 × 10⁻²³)"],
            ["Same fixed mass, before and after", "p₁V₁/T₁ = p₂V₂/T₂"],
            ["Density or mean square speed", "p = ⅓ρ⟨v²⟩"],
            ["Kinetic energy of one particle", "Ē<sub>k</sub> = (3/2)k<sub>B</sub>T"],
            ["Internal energy of monatomic ideal gas", "U = (3/2)nRT = (3/2)Nk<sub>B</sub>T"],
          ]],
        ],
      },
      {
        h: "口訣 + data booklet 數據",
        min: 1.5,
        blocks: [
          ["grid", [
            ["B.3", "pV 等 nRT，攝氏加 273", "pV = nRT; T in K"],
            ["B.3", "Boyle：T 不變，pV 不變", "p ∝ 1/V; p–1/V line through origin"],
            ["B.3", "Charles：p 不變，V 跟 T", "V/T constant (kelvin)"],
            ["B.3", "壓力定律：V 不變，p 跟 T", "p/T constant (kelvin)"],
            ["B.3", "cm³ × 10⁻⁶，dm³ × 10⁻³，kPa × 10³", "Convert before substituting"],
            ["B.3", "熱咗跑快啲，撞得密又大力", "Frequency ↑ and momentum change ↑ → p ↑"],
            ["B.3", "Boyle 只係撞得密", "T same → speed same; only collision frequency changes"],
            ["B.3", "Ek = 3/2 kT，同質量無關", "Mean KE depends on T only"],
            ["B.3", "輕嘅跑得快", "v<sub>rms</sub> = √(3k<sub>B</sub>T/m)"],
            ["B.3", "低壓高溫最理想", "Real gas ≈ ideal at low p, high T"],
          ]],
          ["table", ["Constant", "Value", "Note"], [
            ["Gas constant R", "8.31 J K⁻¹ mol⁻¹", "n in mol, p in Pa, V in m³"],
            ["Boltzmann constant k<sub>B</sub>", "1.38 × 10⁻²³ J K⁻¹", "R/N<sub>A</sub>"],
            ["Avogadro constant N<sub>A</sub>", "6.02 × 10²³ mol⁻¹", "N = nN<sub>A</sub>"],
            ["Absolute zero", "0 K = −273 °C", "T(K) = T(°C) + 273"],
            ["Atomic mass unit u", "1.66 × 10⁻²⁷ kg", "m = (molar mass in g mol⁻¹) × 1.66 × 10⁻²⁷ kg"],
            ["Standard atmosphere", "1.01 × 10⁵ Pa", "if not given, use 100 kPa as stated"],
          ]],
        ],
      },
      {
        h: "Definitions + gas laws 氣體定律",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word)</b><br><b>Pressure:</b> the force exerted per unit area, acting normally (perpendicular) to a surface, p = F/A (Pa = N m⁻²).<br><b>Mole:</b> the amount of substance containing 6.02 × 10²³ elementary entities.<br><b>Avogadro constant N<sub>A</sub>:</b> the number of particles in one mole (6.02 × 10²³ mol⁻¹).<br><b>Ideal gas:</b> a gas that obeys pV = nRT at all pressures and temperatures (follows the kinetic model assumptions exactly).<br><b>Absolute zero:</b> 0 K, the temperature at which particles have minimum (zero) kinetic energy.<br><b>Temperature:</b> a measure of the mean random kinetic energy of the particles (K).<br><b>Internal energy:</b> total of the random kinetic energies and intermolecular potential energies of all particles; for an ideal gas, only kinetic."],
          ["key", "<b>pV = nRT = Nk<sub>B</sub>T</b>　(N = nN<sub>A</sub>)　　<b>p₁V₁/T₁ = p₂V₂/T₂</b> (fixed mass)　　<b>p = F/A</b>　<b>ρ = m/V</b>"],
          ["table", ["Law", "Constant", "Relationship", "Graph", "Particle explanation"], [
            ["Boyle", "T, n", "p ∝ 1/V (pV = constant)", "p–V hyperbola; p vs 1/V straight through origin", "V ↓ → more particles per volume → more frequent collisions (same speed) → p ↑"],
            ["Charles", "p, n", "V ∝ T (K)", "V–T(K) straight through origin; V–T(°C) line hits −273 °C at V = 0", "T ↑ → faster particles → hit walls harder and more often → gas expands until p back to original"],
            ["Pressure law", "V, n", "p ∝ T (K)", "p–T(K) straight through origin", "T ↑ → faster → more frequent and harder collisions → p ↑"],
          ]],
          ["note", "Graph tip：extrapolate p–T(°C) or V–T(°C) lines back → meet the axis at −273 °C (absolute zero). Isotherms (curves p–V) at higher T lie further from the axes."],
          ["trap", ["用 °C 做比例（57/27）：大錯，T 一定 K。", "Gauge pressure 同 absolute pressure：氣體定律用 absolute（gauge + atmospheric）。"]],
        ],
      },
      {
        h: "Gas law 計算 · worked examples",
        min: 5,
        blocks: [
          ["eg", "<b>P2 · 2 marks</b>　Boyle: a gas at 200 kPa occupies 3.0 L. It is compressed to 1.2 L at constant temperature. Find the new pressure.", [
            "p₁V₁ = p₂V₂ (T constant)",
            "p₂ = 200 × 3.0 ÷ 1.2 = <b>500 kPa</b> ✅ (units cancel, so kPa and L can stay)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Pressure law: a tyre is at 250 kPa (absolute) at 27 °C. After driving it is 57 °C. Volume constant. Find the pressure.", [
            "T₁ = 27 + 273 = 300 K, T₂ = 57 + 273 = 330 K",
            "p₂ = 250 × 330 ÷ 300 = <b>275 kPa</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Combined law: 1.5 dm³ of gas at 100 kPa, 300 K is heated to 400 K while the pressure rises to 250 kPa. Find the new volume.", [
            "p₁V₁/T₁ = p₂V₂/T₂ → V₂ = p₁V₁T₂ ÷ (T₁p₂)",
            "V₂ = (100 × 1.5 × 400) ÷ (300 × 250) = 60000 ÷ 75000 = <b>0.80 dm³</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Moles and molecules: a 2.50 × 10⁻³ m³ container holds gas at 1.00 × 10⁵ Pa and 300 K. Find n and N.", [
            "n = pV/RT = (1.00 × 10⁵ × 2.50 × 10⁻³) ÷ (8.31 × 300) = 250 ÷ 2493 = <b>0.100 mol</b>",
            "N = nN<sub>A</sub> = 0.1003 × 6.02 × 10²³ = <b>6.04 × 10²² molecules</b>",
            "Check: N = pV/k<sub>B</sub>T = 250 ÷ (1.38 × 10⁻²³ × 300) = 6.04 × 10²² ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Density of air (M = 29 g mol⁻¹) at 100 kPa and 300 K.", [
            "Take 1 mol: V = nRT/p = 8.31 × 300 ÷ 1.00 × 10⁵ = 0.02493 m³",
            "ρ = m/V = 0.029 ÷ 0.02493 = <b>1.16 kg m⁻³</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Gas in a sealed cylinder at 27 °C. At what Celsius temperature does the (absolute) pressure double? (V constant)", [
            "p ∝ T → T doubles: 300 K × 2 = 600 K",
            "600 − 273 = <b>327 °C</b> ✅ (not 54 °C!)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　From the graph: p–T(°C) line passes through (27 °C, 300 kPa) and (127 °C, 400 kPa). Find the temperature where p = 0.", [
            "Gradient = (400 − 300) ÷ 100 = 1.0 kPa per °C",
            "p = 0 when T = 27 − 300 ÷ 1.0 = −273 °C ✅ (absolute zero)",
          ]],
        ],
      },
      {
        h: "Kinetic model 動力論",
        min: 4,
        blocks: [
          ["table", ["Assumption (write in exam)", "Consequence"], [
            ["Gas has a very large number of identical particles in constant random motion", "Statistical average valid; pressure steady"],
            ["Particle volume negligible compared with container", "Treated as point masses"],
            ["No intermolecular forces except during collisions", "Internal energy is all kinetic (no potential energy)"],
            ["Collisions with walls and each other are elastic", "No kinetic energy lost; temperature stays constant"],
            ["Time of collision negligible compared with time between collisions", "Particles move in straight lines between collisions"],
          ]],
          ["key", "<b>Pressure:</b> particles hit wall → change of momentum Δp = 2mv → rate of change of momentum = force → force ÷ area = pressure<br><b>p = ⅓ρ⟨v²⟩</b>　　<b>Ē<sub>k</sub> = ½m⟨v²⟩ = (3/2)k<sub>B</sub>T</b>　　<b>v<sub>rms</sub> = √⟨v²⟩ = √(3k<sub>B</sub>T/m)</b>　　<b>U = (3/2)nRT</b> (monatomic)"],
          ["rhyme", "解釋壓力", "跑得快、撞得密、每撞動量變得大", "Pressure ↑ when T ↑ (V const): faster particles → greater change of momentum per collision AND more frequent collisions → greater force per unit area."],
          ["eg", "<b>P2 · 2 marks</b>　Average kinetic energy of a gas particle at 300 K; then the rms speed of an N₂ molecule (m = 28.0 u).", [
            "Ē<sub>k</sub> = 1.5 × 1.38 × 10⁻²³ × 300 = <b>6.21 × 10⁻²¹ J</b> (same for every gas)",
            "m = 28.0 × 1.66 × 10⁻²⁷ = 4.65 × 10⁻²⁶ kg",
            "⟨v²⟩ = 2Ē<sub>k</sub>/m = 1.242 × 10⁻²⁰ ÷ 4.65 × 10⁻²⁶ = 2.67 × 10⁵ → v<sub>rms</sub> = <b>517 m s⁻¹</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Air at 100 kPa has density 1.2 kg m⁻³. Estimate the rms speed.", [
            "p = ⅓ρ⟨v²⟩ → ⟨v²⟩ = 3p/ρ = 3 × 1.00 × 10⁵ ÷ 1.2 = 2.5 × 10⁵",
            "v<sub>rms</sub> = <b>5.0 × 10² m s⁻¹</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Internal energy of 2.0 mol of monatomic ideal gas at 300 K, and the change when heated to 400 K.", [
            "U = (3/2)nRT = 1.5 × 2.0 × 8.31 × 300 = <b>7.48 × 10³ J</b>",
            "ΔU = 1.5 × 2.0 × 8.31 × 100 = <b>2.49 × 10³ J</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　He (4.0 u) and Ar (40 u) at the same temperature. Compare their rms speeds and mean kinetic energies.", [
            "Same T → same mean KE (ratio 1 : 1)",
            "v ∝ 1/√m → v<sub>He</sub>/v<sub>Ar</sub> = √(40/4) = √10 = <b>3.2</b> ✅",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["State assumptions","Ideal gas: negligible volume, no intermolecular forces, elastic collisions, random motion."],["Define pressure","Force per unit area (normal to surface)."],["Explain (pressure)","molecule hits wall → momentum change → force; many collisions → average force/area."],["Calculate","pV = nRT with SI units; state which law is used."],["Sketch","P–T and V–T lines extrapolating to −273 °C (0 K) on the axis."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Same gas, two states","P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>; T in K [1]"],["pV = nRT","convert kPa → Pa, cm³ → m³ [1 for conversion]"],["Kinetic explanation","↑ T → ↑ average KE → faster, harder, more frequent hits"],["E<sub>k</sub> = (3/2)k<sub>B</sub>T","mean KE per molecule depends only on T"],["Real vs ideal","deviation at high pressure / low T: intermolecular forces, finite volume"]]],
          ["trap", ["Using °C in gas laws","Giving 'collisions more frequent' only: need ↑ force per collision as well","n (mol) vs N (molecules): n = N/N<sub>A</sub>"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: pV = nRT, n = N/N<sub>A</sub>, E<sub>k</sub> = (3/2)k<sub>B</sub>T, R = 8.31, N<sub>A</sub> = 6.02 × 10²³, k<sub>B</sub> = 1.38 × 10⁻²³. Convert units on the first line to avoid 10³ errors."],
        ],
      },
      {
        h: "Real gases + 長題拆解 + 失分位",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "低壓高溫最理想，高壓低溫要離譜", "Real gas ≈ ideal at low pressure / high temperature / low density (particles far apart, fast)."],
          ["table", ["Condition", "Why a real gas deviates"], [
            ["High pressure", "Particles close together; own volume no longer negligible compared with container"],
            ["Low temperature", "Slow particles; intermolecular attractions matter, p lower than ideal, gas may liquefy"],
            ["Gas close to condensing (e.g. steam, NH₃)", "Strong intermolecular forces → large deviation"],
            ["He, H₂ (small, weak forces)", "Closest to ideal"],
          ]],
          ["note", "<b>拆解方法：</b>① 寫 constant（T/p/V/n）② 圈單位轉換 ③ 揀 before/after 還是 single state ④ 「explain」題一定用 particle language：speed → momentum change → frequency → force → pressure。"],
          ["eg", "Long question：A fixed mass of gas has p = 1.0 × 10⁵ Pa, V = 2.0 × 10⁻³ m³, T = 300 K. It is compressed slowly to 1.0 × 10⁻³ m³ while kept at 300 K, then heated at constant volume to 450 K. Find the final pressure and explain, using the kinetic model, each step. [5]", [
            "Step 1 (Boyle): p = 1.0 × 10⁵ × 2.0 ÷ 1.0 = 2.0 × 10⁵ Pa [1]",
            "Step 2 (pressure law): p = 2.0 × 10⁵ × 450 ÷ 300 = <b>3.0 × 10⁵ Pa</b> [1]",
            "Explanation step 1: T same so mean speed same; particles in smaller volume hit walls more frequently → greater force per area [1]",
            "Explanation step 2: higher T → faster particles; each collision has greater momentum change and collisions more frequent → greater pressure [1]",
            "(Check combined law: 1.0 × 10⁵ × 2.0 ÷ 300 = p × 1.0 ÷ 450 → p = 3.0 × 10⁵ Pa ✅) [1]",
          ]],
          ["table", ["Mistake 失分位", "Fix"], [
            ["Using °C in gas laws", "Add 273; check the answer in kelvin"],
            ["cm³ not converted to m³", "× 10⁻⁶ (cm³), × 10⁻³ (dm³)"],
            ["kPa used with R = 8.31", "Convert to Pa (× 10³) when using R; ratios may keep kPa"],
            ["Boyle explained with “harder collisions”", "T constant → speed constant; only frequency ↑"],
            ["Saying particles “expand” when heated", "Particles move faster, they don't grow"],
            ["Forgetting ‘change of momentum / force’", "Pressure = force per area from momentum change"],
            ["Ek depends on mass of particle", "Ē<sub>k</sub> depends only on T"],
            ["Intermolecular PE in ideal gas internal energy", "Ideal: none; U is all kinetic"],
            ["Saying real gases are ideal at high pressure", "Ideal at LOW pressure, HIGH temperature"],
            ["Gauge pressure in pV = nRT", "Use absolute pressure"],
            ["Doubling Celsius to double T", "Double the kelvin value"],
            ["Using 2 s.f. data to give 5 s.f.", "Match the least s.f. in data"],
          ]],
          ["check", [
            "State 5 kinetic-model assumptions and explain pressure from momentum change",
            "Write pV = nRT, pV = Nk<sub>B</sub>T, p = ⅓ρ⟨v²⟩, Ē<sub>k</sub> = (3/2)k<sub>B</sub>T, U = (3/2)nRT",
            "Do unit conversions (K, Pa, m³) without error",
            "Use p₁V₁/T₁ = p₂V₂/T₂ with correct constants",
            "Explain Boyle, Charles and pressure law with particles",
            "Sketch p–V, p–1/V, p–T graphs and find absolute zero",
            "Find v<sub>rms</sub> and mean KE of a gas particle",
            "Explain when and why real gases deviate",
          ]],
        ],
      },
    ],
    summary: [
      "pV = nRT = NkT，先轉單位 K、Pa、m³",
      "Boyle T 不變，Charles p 不變，壓力律 V 不變",
      "熱咗跑快啲，撞得密又大力",
      "Boyle 只係撞得密，速度唔變",
      "Ek = 3/2 kT，同質量無關；輕嘅跑得快",
      "理想氣體冇 PE，內能全部係 KE",
      "低壓高溫最理想",
      "攝氏加 273，倍數用 K",
    ],
    practice: [
      { q: "B.3 The Celsius temperature of a fixed mass of gas at constant volume rises from 27 °C to 327 °C. The pressure becomes:", o: ["A. 12 times", "B. 2 times", "C. the same", "D. 4 times"], m: 1, a: "<b>B</b>. 300 K → 600 K; p ∝ T → ×2 [1]." },
      { q: "B.3 Which graph is a straight line through the origin for a fixed mass of ideal gas at constant temperature?", o: ["A. p against V", "B. p against 1/V", "C. pV against V", "D. V against 1/p²"], m: 1, a: "<b>B</b>. pV = constant, p = const × (1/V) [1]." },
      { q: "B.3 He (4 u) and Ar (40 u) are at the same temperature. The ratio of rms speeds v<sub>He</sub> : v<sub>Ar</sub> is:", o: ["A. 1 : 1", "B. 10 : 1", "C. √10 : 1", "D. 1 : √10"], m: 1, a: "<b>C</b>. Same Ē<sub>k</sub>, v ∝ 1/√m → √(40/4) = √10 [1]." },
      { q: "B.3 Under which conditions does a real gas behave most like an ideal gas?", o: ["A. High pressure, low temperature", "B. Low pressure, high temperature", "C. High pressure, high temperature", "D. Low pressure, low temperature"], m: 1, a: "<b>B</b>. Particles far apart and fast: forces and volume negligible [1]." },
      { q: "B.3 A gas at 200 kPa occupies 3.0 L. It is compressed to 1.2 L at constant temperature. Calculate the new pressure.", m: 1, a: "p₂ = 200 × 3.0/1.2 = 500 kPa [1]." },
      { q: "B.3 Calculate the number of molecules in 1.0 × 10⁻³ m³ of gas at 100 kPa and 300 K.", m: 2, a: "N = pV/k<sub>B</sub>T = (1.0 × 10⁵ × 1.0 × 10⁻³) ÷ (1.38 × 10⁻²³ × 300) [M1] = 2.4 × 10²² [A1]." },
      { q: "B.3 1.5 dm³ of gas at 100 kPa and 300 K is changed to 250 kPa and 400 K. Calculate the new volume.", m: 2, a: "V₂ = p₁V₁T₂/(T₁p₂) = 100 × 1.5 × 400 ÷ (300 × 250) [M1] = 0.80 dm³ [A1]." },
      { q: "B.3 Explain, using the kinetic model, why the pressure of a gas increases when its volume is reduced at constant temperature.", m: 2, a: "Mean speed unchanged (same T) but particles hit walls more frequently (more per unit volume) [1]; greater rate of change of momentum → greater force per unit area [1]." },
      { q: "B.3 Explain, using the kinetic model, why the pressure of a gas increases when it is heated at constant volume.", m: 3, a: "Particles move faster / greater mean kinetic energy [1]; collide with the walls more frequently [1]; greater change of momentum per collision, so greater force per unit area [1]." },
      { q: "B.3 State two assumptions of the kinetic model of an ideal gas.", m: 2, a: "Any two: negligible particle volume; no intermolecular forces except in collisions; elastic collisions; random motion of a large number of particles; collision time negligible [1 each]." },
      { q: "B.3 Calculate the mean kinetic energy of a gas molecule at 300 K and the rms speed of a nitrogen molecule (mass 4.65 × 10⁻²⁶ kg).", m: 3, a: "Ē<sub>k</sub> = (3/2)k<sub>B</sub>T = 6.21 × 10⁻²¹ J [1]; ½m⟨v²⟩ = 6.21 × 10⁻²¹ → ⟨v²⟩ = 2.67 × 10⁵ [1]; v<sub>rms</sub> = 517 m s⁻¹ [1]." },
      { q: "B.3 Outline why a real gas deviates from ideal behaviour at high pressure and at low temperature.", m: 3, a: "High pressure: particles close together so their own volume is not negligible [1]; low temperature: slow particles, so intermolecular forces matter [1]; pressure lower than ideal / gas may liquefy [1]." },
    ],
  },

  "phys-10": {
    title: "Current · Resistance · Circuits · Kirchhoff · emf & Internal Resistance",
    intro: "電路題只有三條橋：V = IR、串聯並聯規則、ε = V + Ir。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "電路解題路線",
        min: 2,
        blocks: [
          ["note", "<b>常考：</b>① Series/parallel current & p.d. (3 marks) ② R = ρL/A with diameter (2) ③ emf & r from V–I graph or two readings (3) ④ Potential divider with thermistor/LDR (2, explain) ⑤ Explain lamp I–V curve (2) ⑥ Kirchhoff statement (2–4) ⑦ Power loss in internal resistance。"],
          ["rhyme", "口訣", "先簡化電阻，再搵總 I，然後逐個拆返", "Collapse parallel and series to ONE resistance → find total current from V = IR (include r) → work backwards to get each p.d. and current."],
          ["flow", [["① 簡化", "Parallel first (1/R = 1/R₁ + 1/R₂ or product ÷ sum), then add series"], ["② 總 I", "I = ε ÷ (R<sub>total</sub> + r)"], ["③ 拆返", "Series: same I. Parallel: same V. Use V = IR on each part"], ["④ 檢查", "Sum of p.d. round a loop = ε; currents into junction = out"]]],
          ["key", "Series：same <b>I</b>，V's add，R's add　　Parallel：same <b>V</b>，I's add，1/R's add"],
        ],
      },
      {
        h: "口訣 + data booklet 數據",
        min: 1.5,
        blocks: [
          ["grid", [
            ["B.5", "電流係電荷流速", "I = Δq/Δt (A = C s⁻¹)"],
            ["B.5", "電壓係每庫侖做功", "V = W/q (V = J C⁻¹)"],
            ["B.5", "串聯電流一樣，並聯電壓一樣", "Series: same I; parallel: same V"],
            ["B.5", "並聯越加越細", "R<sub>parallel</sub> < smallest R"],
            ["B.5", "R 同長成正比、同面積成反比", "R = ρL/A"],
            ["B.5", "直徑除二先平方", "A = π(d/2)²"],
            ["B.5", "mm² 乘 10⁻⁶", "1 mm² = 10⁻⁶ m²"],
            ["B.5", "大電阻分大電壓", "Potential divider"],
            ["B.5", "V 對 I 作圖：截距 emf，斜率負內阻", "V = ε − Ir"],
            ["B.5", "電荷守恆睇 junction，能量守恆睇 loop", "Kirchhoff 1 and 2"],
            ["B.5", "熱咗 NTC 電阻跌，光猛 LDR 電阻跌", "Sensors"],
          ]],
          ["table", ["Constant / formula", "Value", "Note"], [
            ["Elementary charge e", "1.60 × 10⁻¹⁹ C", "N = q/e"],
            ["Current", "I = Δq/Δt", "1 A = 1 C s⁻¹"],
            ["Potential difference", "V = W/q", "1 V = 1 J C⁻¹"],
            ["Resistance", "R = V/I (Ω = V A⁻¹)", "ohmic: constant at constant T"],
            ["Resistivity", "ρ = RA/L (Ω m)", "material property"],
            ["Power", "P = VI = I²R = V²/R", "W"],
            ["Energy", "E = VIt = Pt", "J (or kW h: × 3.6 × 10⁶)"],
            ["Drift", "I = nAvq", "n = carriers per m³"],
          ]],
        ],
      },
      {
        h: "Definitions + 元件特性",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word)</b><br><b>Electric current:</b> the rate of flow of charge, I = Δq/Δt (ampere).<br><b>Potential difference (V):</b> the work done (energy transferred) per unit charge moving between two points.<br><b>Electromotive force (emf) ε:</b> the work done (energy transferred) per unit charge by the source in driving charge round a complete circuit.<br><b>Resistance:</b> the ratio of the potential difference across a component to the current through it, R = V/I.<br><b>Resistivity ρ:</b> a property of the material: R = ρL/A.<br><b>Ohmic conductor:</b> current is directly proportional to p.d. at constant temperature (R constant).<br><b>Internal resistance r:</b> the resistance of the source itself, causing a drop in terminal p.d. when current flows.<br><b>Terminal p.d.:</b> the p.d. across the terminals of a cell when current is drawn: V = ε − Ir."],
          ["table", ["Component", "I–V graph", "Reason"], [
            ["Ohmic resistor / metal at constant T", "Straight line through origin", "R constant"],
            ["Filament lamp", "Curve flattens, R increases with I", "T ↑ → lattice ions vibrate more → more collisions with electrons"],
            ["NTC thermistor", "T ↑ → R ↓", "More charge carriers released"],
            ["LDR", "Light intensity ↑ → R ↓", "More charge carriers released"],
            ["Ideal ammeter", "Series, R = 0", "No p.d. across it"],
            ["Ideal voltmeter", "Parallel, R = ∞", "Draws no current"],
          ]],
          ["trap", ["Ohmic 定義漏咗 “at constant temperature”。", "emf 係 source 提供能量，p.d. 係 component 用能量。", "Ammeter 串聯、voltmeter 並聯，唔好反。", "Metal R 隨 T 升高；NTC 相反。"]],
        ],
      },
      {
        h: "I, V, R, P 計算 · worked examples",
        min: 5,
        blocks: [
          ["eg", "<b>P2 · 2 marks</b>　A current of 0.50 A flows for 2.0 minutes. How many electrons pass a point?", [
            "q = It = 0.50 × 120 = 60 C",
            "N = q/e = 60 ÷ 1.60 × 10⁻¹⁹ = <b>3.75 × 10²⁰ electrons</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Resistance of a 1.5 m nichrome wire, diameter 0.40 mm, ρ = 1.1 × 10⁻⁶ Ω m.", [
            "r = 0.20 mm = 0.20 × 10⁻³ m → A = π(0.20 × 10⁻³)² = 1.26 × 10⁻⁷ m² (⚠ radius!)",
            "R = ρL/A = 1.1 × 10⁻⁶ × 1.5 ÷ 1.26 × 10⁻⁷ = <b>13 Ω</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A wire is stretched to twice its length (same volume, same ρ). Compare the new resistance.", [
            "V = AL constant: L × 2 → A ÷ 2",
            "R = ρL/A → R × 2 × 2 = <b>×4</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Kettle rated 2.0 kW at 230 V. Find I, R and the energy used in 3.0 minutes.", [
            "I = P/V = 2000 ÷ 230 = <b>8.7 A</b>",
            "R = V²/P = 230² ÷ 2000 = <b>26 Ω</b>",
            "E = Pt = 2000 × 180 = <b>3.6 × 10⁵ J</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Lamp marked 12 V, 36 W works normally. Find its current and its resistance at working temperature.", [
            "I = 36 ÷ 12 = <b>3.0 A</b>",
            "R = 12 ÷ 3.0 = <b>4.0 Ω</b> (hot filament; cold resistance is much smaller) ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Drift speed: copper wire, n = 8.5 × 10²⁸ m⁻³, cross-section 1.0 mm², I = 2.0 A.", [
            "A = 1.0 × 10⁻⁶ m²",
            "v = I/(nAq) = 2.0 ÷ (8.5 × 10²⁸ × 1.0 × 10⁻⁶ × 1.60 × 10⁻¹⁹) = 2.0 ÷ 1.36 × 10⁴",
            "v = <b>1.5 × 10⁻⁴ m s⁻¹</b> (0.15 mm s⁻¹: slow!) ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A battery pack is 3.7 V, 2.0 A h, mass 45 g. Find its stored energy and energy density.", [
            "q = 2.0 A × 3600 s = 7200 C",
            "E = qV = 7200 × 3.7 = 2.66 × 10⁴ J",
            "Energy density = 2.66 × 10⁴ ÷ 0.045 = <b>5.9 × 10⁵ J kg⁻¹</b> ✅",
          ]],
        ],
      },
      {
        h: "Series · Parallel · Divider · Kirchhoff",
        min: 4,
        blocks: [
          ["key", "Series：\\(R = R_1 + R_2 + \\dots\\)　Parallel：\\(\\frac1R = \\frac1{R_1} + \\frac1{R_2} + \\dots\\)（two resistors: R = R₁R₂ ÷ (R₁ + R₂)）<br><b>Potential divider:</b> \\(V_{out} = V_{in}\\frac{R_2}{R_1 + R_2}\\)<br><b>Kirchhoff 1:</b> ΣI<sub>in</sub> = ΣI<sub>out</sub> at a junction (conservation of charge)　<b>Kirchhoff 2:</b> Σε = ΣIR round a closed loop (conservation of energy)"],
          ["eg", "<b>P2 · 3 marks</b>　6.0 Ω and 3.0 Ω in parallel, in series with 4.0 Ω, connected to 12 V (negligible internal resistance). Find the current in the 3.0 Ω resistor.", [
            "Parallel: 6.0 × 3.0 ÷ 9.0 = 2.0 Ω → total R = 2.0 + 4.0 = 6.0 Ω",
            "Total I = 12 ÷ 6.0 = 2.0 A",
            "p.d. across parallel part = 2.0 × 2.0 = 4.0 V",
            "I (3.0 Ω) = 4.0 ÷ 3.0 = <b>1.3 A</b> (and 4.0 ÷ 6.0 = 0.67 A in the 6.0 Ω; sum 2.0 A ✅)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Potential divider: 12 V supply, fixed 10 kΩ resistor in series with an NTC thermistor. Find the p.d. across the thermistor when it is (a) 10 kΩ and (b) 2.0 kΩ.", [
            "(a) V = 12 × 10 ÷ (10 + 10) = <b>6.0 V</b>",
            "(b) V = 12 × 2.0 ÷ (10 + 2.0) = <b>2.0 V</b> ✅",
            "Hotter → thermistor R ↓ → takes smaller share of the supply p.d.",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Kirchhoff: junction with 3.0 A entering; branches carry 1.2 A and I. Then a loop has a 12 V cell opposing a 4.0 V cell, with total resistance 4.0 Ω (ignore r).", [
            "Junction: I = 3.0 − 1.2 = <b>1.8 A</b>",
            "Loop: 12 − 4.0 = I × 4.0 → I = <b>2.0 A</b> ✅ (cells opposing: subtract)",
          ]],
          ["table", ["If the question says…", "Do this"], [
            ["Two identical R in parallel", "R/2"],
            ["Extra resistor added in parallel", "Total R decreases, total I increases"],
            ["Extra resistor added in series", "Total R increases, I decreases"],
            ["“Show that total resistance is…”", "Show the parallel step, then the series step"],
            ["Divider output p.d. when sensor changes", "Sensor R ↑ → its share of V ↑"],
            ["One bulb in parallel blows", "Others keep same V and brightness"],
          ]],
          ["trap", ["並聯直接相加 R：1/R 先相加。", "Series 嘅 R 比大，parallel 嘅 R 比最細嗰個仲細。", "Kirchhoff loop 方向：電池逆向要減。"]],
        ],
      },
      {
        h: "emf & internal resistance · Cells",
        min: 4,
        blocks: [
          ["key", "<b>ε = I(R + r)</b>　　<b>V = ε − Ir</b>　　<b>V = IR</b> (terminal p.d. = p.d. across external R)　　Short circuit: I<sub>max</sub> = ε/r"],
          ["rhyme", "口訣", "V 對 I 作圖：截距 emf，斜率負內阻", "Plot V (y) against I (x): y-intercept = ε, gradient = −r, x-intercept = ε/r (short-circuit current). Open circuit (I = 0): V = ε."],
          ["eg", "<b>P2 · 2 marks</b>　A cell gives terminal p.d. 5.6 V at 0.40 A and 5.2 V at 0.80 A. Find ε and r.", [
            "V = ε − Ir → two equations: 5.6 = ε − 0.40r ; 5.2 = ε − 0.80r",
            "Subtract: 0.40 = 0.40r → <b>r = 1.0 Ω</b>",
            "ε = 5.6 + 0.40 × 1.0 = <b>6.0 V</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Cell ε = 6.0 V, r = 0.50 Ω connected to R = 2.5 Ω. Find terminal p.d., power in R, power lost in the cell and efficiency.", [
            "I = 6.0 ÷ (2.5 + 0.50) = 2.0 A",
            "V = IR = 2.0 × 2.5 = <b>5.0 V</b> (check: 6.0 − 2.0 × 0.50 = 5.0 V ✅)",
            "P<sub>R</sub> = I²R = 4.0 × 2.5 = <b>10 W</b>；P<sub>lost</sub> = I²r = 4.0 × 0.50 = <b>2.0 W</b>；total 12 W = εI ✅",
            "Efficiency = 10 ÷ 12 = <b>83%</b>",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A cell ε = 9.0 V, r = 1.5 Ω. What is the short-circuit current, and the terminal p.d. when drawing 2.0 A?", [
            "I<sub>sc</sub> = ε/r = 9.0 ÷ 1.5 = <b>6.0 A</b>",
            "V = 9.0 − 2.0 × 1.5 = <b>6.0 V</b> ✅",
          ]],
          ["table", ["Cell type", "Key facts"], [
            ["Primary cell", "Single use, chemical reaction irreversible (e.g. alkaline battery)"],
            ["Secondary cell", "Rechargeable, reaction reversible by passing current backwards (e.g. Li-ion, lead-acid)"],
            ["Energy density", "Energy stored per unit mass (J kg⁻¹) ・ higher is better for portable devices"],
            ["Discharge curve", "Terminal p.d. stays fairly flat, then drops quickly near the end"],
            ["Internal resistance", "Rises as cell discharges/ages → more energy wasted as heat I²r inside the cell"],
          ]],
          ["trap", ["Internal resistance 都會發熱（I²r），最大電流得 ε/r。", "Cell 開路時 V = ε；有電流時 V < ε。", "Gradient 要負：r = −gradient。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define emf","Energy transferred per unit charge by the source (J C⁻¹), measured with no current drawn."],["Define p.d. / resistance","p.d. = work per unit charge between two points; R = V/I."],["Explain internal resistance","Energy dissipated inside the cell → terminal p.d. = ε − Ir."],["Draw circuit","Ammeter in series, voltmeter in parallel, correct symbols."],["Determine r","From V–I graph: intercept = ε, gradient = −r."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Series / parallel","find R<sub>total</sub> [1]; I = V/R [1]; p.d. across each [1]"],["Internal resistance","ε = I(R + r) [1]; two data points or graph [1]"],["Potential divider","V<sub>out</sub> = V × R<sub>2</sub>/(R<sub>1</sub>+R<sub>2</sub>); effect of LDR/thermistor change"],["Ohmic?","straight line through origin at constant T"],["Resistivity","R = ρL/A, doubling length / halving area effects"]]],
          ["trap", ["Voltmeter in series / ammeter in parallel","'Current is used up': charge is conserved, energy is transferred","Using ε instead of terminal p.d. when a current flows"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: V = IR, P = VI, R = ρL/A, ε = I(R + r), series/parallel formulas. In a multi-step circuit, label I and V on each resistor on your diagram first."],
        ],
      },
      {
        h: "Long question + 失分位",
        min: 2.5,
        blocks: [
          ["note", "<b>拆解方法：</b>① 畫電路，標 ε, r ② 先做 parallel ③ 總 R + r → 總 I ④ 每個 branch 用 V = IR ⑤ 驗證：總 power εI = Σ I²R。"],
          ["eg", "Long question：A 9.0 V cell (r = 1.0 Ω) is connected to a 5.0 Ω resistor in series with a parallel pair of 6.0 Ω and 12 Ω. Find (a) total current, (b) terminal p.d., (c) current in the 12 Ω resistor. [5]", [
            "Parallel: 6.0 × 12 ÷ 18 = 4.0 Ω → external R = 5.0 + 4.0 = 9.0 Ω [1]",
            "(a) I = ε/(R + r) = 9.0 ÷ (9.0 + 1.0) = <b>0.90 A</b> [1]",
            "(b) V = ε − Ir = 9.0 − 0.90 × 1.0 = <b>8.1 V</b> [1]",
            "p.d. across the parallel part = I × 4.0 = 0.90 × 4.0 = 3.6 V [1]",
            "(c) I(12 Ω) = 3.6 ÷ 12 = <b>0.30 A</b> (and 3.6 ÷ 6.0 = 0.60 A; sum 0.90 A ✅) [1]",
          ]],
          ["table", ["Mistake 失分位", "Fix"], [
            ["Diameter used as radius", "r = d/2 then A = πr²"],
            ["mm² → m² forgotten", "× 10⁻⁶ (mm²), × 10⁻⁴ (cm²)"],
            ["Adding parallel R directly", "1/R = Σ1/R or product ÷ sum"],
            ["Ignoring r in ε = I(R + r)", "r is in series with the external circuit"],
            ["Terminal p.d. = ε with current flowing", "V = ε − Ir"],
            ["Voltmeter in series", "Voltmeter parallel, ammeter series"],
            ["Ohmic defined without constant temperature", "Add “at constant temperature”"],
            ["Filament lamp explained by “more electrons”", "Lattice vibrates more → more collisions → R ↑"],
            ["Thermistor divider direction wrong", "NTC hot → R ↓ → its V ↓"],
            ["Kirchhoff 1 vs 2 mixed up", "Junction: charge conserved; loop: energy conserved"],
            ["kW h not converted", "1 kW h = 3.6 × 10⁶ J"],
            ["No unit / s.f.", "Unit + 2–3 s.f."],
          ]],
          ["check", [
            "Define current, p.d., emf, resistance, resistivity, ohmic, internal resistance",
            "Use R = ρL/A including radius and area conversions",
            "Combine series and parallel and find all branch currents",
            "State Kirchhoff's two laws with the conservation law behind each",
            "Use a potential divider with a thermistor or LDR",
            "Find ε and r from two points or from a V–I graph",
            "Calculate power, energy and efficiency including internal losses",
            "Compare primary/secondary cells and explain I–V of lamp, thermistor",
          ]],
        ],
      },
    ],
    summary: [
      "I = Δq/Δt，V = W/q，R = V/I",
      "R = ρL/A，直徑除二，mm² × 10⁻⁶",
      "串聯 I 一樣，並聯 V 一樣",
      "Kirchhoff：junction 電荷守恆、loop 能量守恆",
      "大電阻分大電壓；NTC 熱咗電阻跌",
      "ε = I(R + r)；V = ε − Ir：截距 emf，斜率 −r",
      "P = VI = I²R = V²/R，內阻都會發熱",
      "並聯越加越細",
    ],
    practice: [
      { q: "B.5 Two 4.0 Ω resistors are connected in parallel. The total resistance is:", o: ["A. 0.5 Ω", "B. 2.0 Ω", "C. 4.0 Ω", "D. 8.0 Ω"], m: 1, a: "<b>B</b>. 4.0 × 4.0 ÷ 8.0 = 2.0 Ω [1]." },
      { q: "B.5 A wire's length is doubled and its cross-sectional area halved. Its resistance becomes:", o: ["A. the same", "B. twice as large", "C. four times as large", "D. half as large"], m: 1, a: "<b>C</b>. R ∝ L/A → 2 ÷ ½ = 4 [1]." },
      { q: "B.5 The I–V graph for a filament lamp curves so that resistance increases with p.d. because:", o: ["A. fewer electrons flow", "B. the filament temperature rises", "C. the p.d. increases", "D. the wire gets longer"], m: 1, a: "<b>B</b>. Higher temperature → lattice ions vibrate more → more collisions [1]." },
      { q: "B.5 A cell has emf ε and internal resistance r. The graph of terminal p.d. (y) against current (x) has a gradient equal to:", o: ["A. ε", "B. −ε", "C. r", "D. −r"], m: 1, a: "<b>D</b>. V = ε − Ir, gradient −r [1]." },
      { q: "B.5 A current of 0.50 A flows for 2.0 minutes. Calculate the number of electrons passing a point.", m: 2, a: "q = 0.50 × 120 = 60 C [M1]; N = 60/1.60 × 10⁻¹⁹ = 3.75 × 10²⁰ [A1]." },
      { q: "B.5 Calculate the resistance of a 1.5 m wire of diameter 0.40 mm made of material of resistivity 1.1 × 10⁻⁶ Ω m.", m: 2, a: "A = π(2.0 × 10⁻⁴)² = 1.26 × 10⁻⁷ m² [M1]; R = 13 Ω [A1]." },
      { q: "B.5 A 6.0 Ω and a 3.0 Ω resistor are in parallel; this is in series with a 4.0 Ω resistor and a 12 V supply of negligible internal resistance. Calculate the current in the 3.0 Ω resistor.", m: 3, a: "Total R = 2.0 + 4.0 = 6.0 Ω, I = 2.0 A [1]; p.d. across parallel part = 2.0 × 2.0 = 4.0 V [1]; I = 4.0/3.0 = 1.3 A [1]." },
      { q: "B.5 A cell gives terminal p.d. 5.6 V at 0.40 A and 5.2 V at 0.80 A. Determine the emf and internal resistance.", m: 3, a: "r = (5.6 − 5.2)/(0.80 − 0.40) = 1.0 Ω [2]; ε = 5.6 + 0.40 × 1.0 = 6.0 V [1]." },
      { q: "B.5 A cell of emf 6.0 V and internal resistance 0.50 Ω supplies a 2.5 Ω resistor. Calculate the power dissipated inside the cell.", m: 3, a: "I = 6.0/3.0 = 2.0 A [M1]; P = I²r = 4.0 × 0.50 [M1] = 2.0 W [A1]." },
      { q: "B.5 A thermistor and fixed resistor form a potential divider. Explain what happens to the p.d. across the thermistor as its temperature rises.", m: 2, a: "Thermistor resistance decreases (NTC) [1]; it takes a smaller share of the supply p.d., so p.d. across it falls [1]." },
      { q: "B.5 State Kirchhoff's two laws and the physical principle behind each.", m: 4, a: "Junction: sum of currents into a junction = sum out [1]; conservation of charge [1]; loop: sum of emfs = sum of p.d.s (IR) round a closed loop [1]; conservation of energy [1]." },
      { q: "B.5 Outline the difference between a primary cell and a secondary cell and state why energy density matters for a phone battery.", m: 3, a: "Primary: single use, reaction irreversible [1]; secondary: rechargeable, reaction reversed by passing a current [1]; high energy density gives more stored energy per unit mass, so lighter battery for same energy [1]." },
    ],
  },

  "phys-11": {
    title: "Simple Harmonic Motion · Period · Energy · Phase (SL)",
    intro: "SHM 只有一個核心：a = −ω²x，加上兩條 period 公式同 energy 圖。每個 part 有時間建議，最後有總口訣同 IB-style 練習。",
    parts: [
      {
        h: "SHM 核心 + 解題路線",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "加速同位移成正比，方向永遠返屋企", "SHM = restoring acceleration proportional to displacement AND directed towards equilibrium: a = −ω²x. Both conditions needed for the mark."],
          ["flow", [["① 認類型", "Spring (m, k)? Pendulum (l, g)? Graph? Energy?"], ["② 揀式", "T = 2π√(m/k) ・ T = 2π√(l/g) ・ ω = 2π/T ・ a = −ω²x"], ["③ 單位", "T in s, m in kg, k in N m⁻¹, l in m; angles in rad for ω"], ["④ 檢查", "T ∝ √m, T ∝ √l, T ∝ 1/√k, T independent of amplitude"]]],
          ["note", "<b>常考 (P1 + P2)：</b>① 寫 SHM 定義（2 marks：成正比 + 指向平衡點）② spring / pendulum period 計算 + sig figs ③ 「質量 × 4 / length 增加 → period 變幾多」④ x–t, v–t, a–t, E–x 圖 ⑤ pendulum 實驗 T² vs l ⑥ 兩個振動嘅 phase difference。"],
        ],
      },
      {
        h: "口訣 + data booklet 數據",
        min: 1.5,
        blocks: [
          ["grid", [
            ["C.1", "加速同位移成正比，方向返屋企", "a = −ω²x"],
            ["C.1", "ω = 2π 除 T", "ω = 2π/T = 2πf (rad s⁻¹)"],
            ["C.1", "彈簧睇質量，鐘擺睇長度", "T = 2π√(m/k); T = 2π√(l/g)"],
            ["C.1", "擺錘質量冇關係", "Pendulum T independent of m"],
            ["C.1", "Period 同振幅無關", "Isochronous"],
            ["C.1", "中間最快，兩邊最大加速", "Equilibrium: v max, a = 0; extreme: v = 0, a max"],
            ["C.1", "Ek 同 Ep 對調，總能量不變", "No damping: E<sub>T</sub> constant"],
            ["C.1", "v 快 x 四分一，a 同 x 正相反", "v leads x by π/2; a antiphase (π)"],
            ["C.1", "質量 × 4，period × 2", "√ relationship"],
            ["C.1", "小角度先係 SHM", "Pendulum: θ ≲ 10°"],
          ]],
          ["table", ["Formula", "Meaning", "Units"], [
            ["a = −ω²x", "Defining equation of SHM", "m s⁻²"],
            ["ω = 2π/T = 2πf", "Angular frequency", "rad s⁻¹"],
            ["T = 1/f", "Period and frequency", "s, Hz"],
            ["T = 2π√(m/k)", "Mass–spring (ω² = k/m)", "m kg, k N m⁻¹"],
            ["T = 2π√(l/g)", "Simple pendulum, small angle (ω² = g/l)", "l m, g 9.81 m s⁻²"],
            ["F = −kx", "Restoring force of spring (Hooke)", "N"],
            ["Δφ = 2πΔt/T", "Phase difference from time lag", "rad"],
          ]],
        ],
      },
      {
        h: "Definitions + displacement / velocity / acceleration",
        min: 3,
        blocks: [
          ["note", "<b>Definitions (learn word-for-word)</b><br><b>Simple harmonic motion:</b> oscillation in which the acceleration is proportional to the displacement from the equilibrium position and is directed towards the equilibrium position (opposite to the displacement).<br><b>Displacement x:</b> distance from the equilibrium position in a given direction.<br><b>Amplitude x₀:</b> maximum displacement from the equilibrium position.<br><b>Period T:</b> time for one complete oscillation.<br><b>Frequency f:</b> number of oscillations per unit time, f = 1/T (Hz).<br><b>Angular frequency ω:</b> ω = 2πf = 2π/T (rad s⁻¹).<br><b>Phase difference:</b> the fraction of a cycle (in radians) by which one oscillation leads or lags another.<br><b>Equilibrium position:</b> where the resultant force on the oscillator is zero."],
          ["table", ["Position", "x", "v", "a", "F", "E<sub>k</sub>", "E<sub>p</sub>"], [
            ["Equilibrium", "0", "maximum", "0", "0", "maximum (= E<sub>T</sub>)", "0"],
            ["Extreme (±x₀)", "±x₀", "0", "maximum, towards centre", "maximum, towards centre", "0", "maximum (= E<sub>T</sub>)"],
            ["Halfway (x₀/2)", "x₀/2", "less than max", "half of max", "half of max", "¾ E<sub>T</sub>", "¼ E<sub>T</sub>"],
          ]],
          ["trap", ["定義寫 “acceleration proportional to displacement” 但漏 “towards equilibrium / opposite direction”：只拎半分。", "Period 同 amplitude 無關（isochronous），amplitude 只影響 max speed 同 energy。", "最大速度喺 equilibrium，唔係喺 extreme。"]],
        ],
      },
      {
        h: "Period 計算 · worked examples",
        min: 5,
        blocks: [
          ["eg", "<b>P2 · 2 marks</b>　Maximum acceleration: an object in SHM has period 0.40 s and amplitude 0.020 m. Calculate the maximum acceleration.", [
            "ω = 2π/T = 2π ÷ 0.40 = 15.7 rad s⁻¹",
            "a<sub>max</sub> = ω²x₀ = 15.7² × 0.020 = 246.7 × 0.020 = <b>4.9 m s⁻²</b> ✅ (at the extremes, towards the centre)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Spring: a 0.50 kg mass on a spring of k = 20 N m⁻¹ oscillates. Calculate the period and frequency.", [
            "T = 2π√(m/k) = 2π√(0.50 ÷ 20) = 2π√0.025 = 2π × 0.158",
            "T = <b>0.99 s</b>；f = 1/T = <b>1.0 Hz</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Find k: a 0.25 kg mass oscillates vertically with period 0.80 s. Calculate the spring constant.", [
            "T² = 4π²m/k → k = 4π²m/T²",
            "k = 39.48 × 0.25 ÷ 0.64 = <b>15 N m⁻¹</b> ✅ (gravity only shifts equilibrium; T unchanged)",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Pendulum on the Moon (g = 1.62 m s⁻²): period of a 1.00 m simple pendulum; and length of a pendulum with period 2.0 s on Earth.", [
            "Moon: T = 2π√(1.00 ÷ 1.62) = 2π × 0.786 = <b>4.9 s</b> (Earth: 2.01 s)",
            "Earth: l = gT²/4π² = 9.81 × 4.0 ÷ 39.48 = <b>0.99 m</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Scaling: (a) the mass on a spring is increased by factor 4; (b) a pendulum length is increased from 1.0 m to 4.0 m. State the new period each time.", [
            "(a) T ∝ √m → √4 = 2 → period <b>doubles</b>",
            "(b) T ∝ √l → √4 = 2 → period <b>doubles</b>",
            "Amplitude and pendulum mass: no effect ✅",
          ]],
          ["eg", "<b>P2 · 3 marks</b>　Show that a mass–spring system performs SHM. [3 marks]", [
            "Restoring force F = −kx (towards equilibrium) [1]",
            "Newton's second law: ma = −kx → a = −(k/m)x [1]",
            "k/m is constant, so a ∝ −x; this has the form a = −ω²x with ω² = k/m → SHM [1]",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Experiment: a student plots T² (y) against l (x) for a pendulum and finds a straight line with gradient 4.0 s² m⁻¹. Determine g.", [
            "T² = (4π²/g)l → gradient = 4π²/g",
            "g = 4π² ÷ 4.0 = 39.48 ÷ 4.0 = <b>9.9 m s⁻²</b> ✅",
            "Good method: time 10–20 oscillations, small angle, measure l to the centre of the bob, repeat and average.",
          ]],
        ],
      },
      {
        h: "Energy · phase · graphs",
        min: 4,
        blocks: [
          ["key", "No damping: E<sub>T</sub> = E<sub>k</sub> + E<sub>p</sub> = constant. E<sub>k</sub> max at equilibrium, E<sub>p</sub> max at extremes. Spring: E<sub>p</sub> = ½kx² (parabola in x).<br>Phase difference \\(\\Delta\\phi = 2\\pi\\frac{\\Delta t}{T}\\)　　E<sub>k</sub> and E<sub>p</sub> each vary with frequency <b>2f</b> (twice per oscillation)."],
          ["table", ["Graph", "Shape", "Key facts"], [
            ["x–t", "Sine / cosine", "Gradient = v; amplitude = max height; period = repeat time"],
            ["v–t", "Leads x–t by T/4 (π/2)", "Zero when x is at max; max when x = 0"],
            ["a–t", "Opposite x–t (antiphase, π)", "a = −ω²x"],
            ["a–x", "Straight line, negative gradient through origin", "Gradient = −ω²"],
            ["E–x", "E<sub>p</sub>: upright parabola; E<sub>k</sub>: inverted parabola; E<sub>T</sub>: horizontal line", "E<sub>k</sub> + E<sub>p</sub> = E<sub>T</sub> at every x"],
            ["E–t", "E<sub>k</sub> and E<sub>p</sub> sinusoids, frequency 2f, in antiphase", "Never negative; total flat"],
          ]],
          ["eg", "<b>P2 · 2 marks</b>　At what fraction of the amplitude is E<sub>k</sub> = E<sub>p</sub>? And what fraction of the total energy is kinetic at x = x₀/2?", [
            "E<sub>p</sub> ∝ x². Total E ∝ x₀². E<sub>p</sub> = ½E<sub>T</sub> → x² = ½x₀² → x = <b>0.71 x₀</b>",
            "At x = x₀/2: E<sub>p</sub> = (½)² = ¼ E<sub>T</sub> → E<sub>k</sub> = <b>¾ E<sub>T</sub></b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　Two identical pendulums of period 0.80 s: B reaches maximum displacement 0.10 s after A. Find the phase difference.", [
            "Δφ = 2π × Δt/T = 2π × 0.10 ÷ 0.80 = π/4",
            "= <b>0.79 rad</b> (45°) ✅; T/4 gap would be π/2, T/2 gap π",
          ]],
          ["eg", "<b>P2 · 2 marks</b>　A pendulum bob swings with maximum height 5.0 cm above the lowest point. Find its maximum speed (no damping).", [
            "E<sub>p</sub> at top = E<sub>k</sub> at bottom: mgh = ½mv²",
            "v = √(2gh) = √(2 × 9.81 × 0.050) = <b>0.99 m s⁻¹</b> ✅",
          ]],
          ["trap", ["Ek–x 圖係倒轉拋物線，Ep–x 係正拋物線，兩者相加係水平線。", "Ek 同 Ep 變化頻率係 2f，唔係 f。", "有 damping 時 amplitude 同 total energy 逐漸減少，但 period 近似唔變。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define SHM","Acceleration proportional to displacement from equilibrium and always directed towards it (a ∝ −x)."],["Sketch","x–t, v–t, a–t on same axes: v leads x by a quarter cycle; a opposite to x."],["Determine","T from graph: peak-to-peak time; ω = 2π/T."],["Explain energy","KE ↔ PE exchange; total constant if undamped; KE max at equilibrium."],["Outline damping","Energy dissipated, amplitude decreases, T almost unchanged for light damping."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Identify SHM","force/acceleration ∝ −displacement [1], towards equilibrium [1]"],["Period","mass–spring T = 2π√(m/k); pendulum T = 2π√(l/g)"],["Graph reading","state amplitude, T, then f = 1/T"],["Energy graph","E<sub>k</sub> and E<sub>p</sub> against x: parabolas that add to a constant"],["Phase","compare two graphs by quarter-cycle shifts"]]],
          ["trap", ["Calculator in degree mode for sin ωt","Saying 'a is zero at the extremes'; it is maximum there","Pendulum formula used for large angles"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet gives the T formulas and ω = 2π/T. Draw the graph in pencil first and label 'T', 'x₀' on it: many marks are for reading these correctly."],
        ],
      },
      {
        h: "Long question + 失分位",
        min: 3,
        blocks: [
          ["note", "<b>拆解方法：</b>① 認定 spring 定 pendulum ② 逐個變量用比例（√）③ graph 題先讀軸（x–t 還是 a–x）④ 「explain」題寫 energy 轉換：Ek ⇄ Ep，total constant。"],
          ["eg", "P2 long question：A 0.20 kg mass on a horizontal spring (k = 32 N m⁻¹) oscillates with amplitude 0.050 m. (a) Calculate T. (b) State the position where speed is maximum and the position of maximum acceleration. (c) Calculate the maximum acceleration. (d) Describe the energy changes in one quarter cycle starting from maximum displacement. [2 + 2 + 2 + 2]", [
            "(a) T = 2π√(0.20 ÷ 32) = 2π × 0.0791 = <b>0.50 s</b> [2]",
            "(b) Max speed at equilibrium; max acceleration at the extremes (±0.050 m) [2]",
            "(c) ω = 2π/0.497 = 12.6 rad s⁻¹ (or ω² = k/m = 160 s⁻²); a<sub>max</sub> = ω²x₀ = 160 × 0.050 = <b>8.0 m s⁻²</b> [2]",
            "(d) Elastic potential energy decreases and kinetic energy increases; E<sub>p</sub> → E<sub>k</sub>, total constant; at equilibrium all kinetic [2]",
          ]],
          ["table", ["Mistake 失分位", "Fix"], [
            ["Definition missing “towards equilibrium”", "Write both conditions"],
            ["Period depends on amplitude", "It doesn't (small-angle pendulum, spring)"],
            ["Using mass in the pendulum formula", "Only l and g matter"],
            ["Forgetting the square root", "T ∝ √m, √l"],
            ["ω in degrees", "ω in rad s⁻¹ (2π/T)"],
            ["Using pendulum formula for large angle", "SHM only for small angle (~10° or less)"],
            ["Measuring l to the top of the bob", "To the centre of mass of the bob"],
            ["Timing one oscillation", "Time 10–20 and divide"],
            ["Energy graph frequency f", "2f for both E<sub>k</sub> and E<sub>p</sub>"],
            ["a and v in phase", "a antiphase to x; v leads x by π/2"],
            ["Max speed at extreme", "Max speed at equilibrium"],
            ["Wrong unit for k", "N m⁻¹"],
          ]],
          ["check", [
            "Write the SHM definition with both conditions",
            "Use ω = 2π/T and a = −ω²x for max acceleration",
            "Use T = 2π√(m/k) and T = 2π√(l/g), including rearrangements",
            "Predict how T changes when m, k, l or g change",
            "Sketch x–t, v–t, a–t graphs with correct phase and E–x graphs",
            "Describe Ek ⇄ Ep conversion with constant total energy",
            "Calculate phase difference from a time lag",
            "Outline a pendulum experiment (T² vs l, gradient 4π²/g)",
          ]],
        ],
      },
    ],
    summary: [
      "a = −ω²x：成正比 + 返中間",
      "ω = 2π/T，a<sub>max</sub> = ω²x₀",
      "彈簧睇 m/k，鐘擺睇 l/g，質量 × 4 period × 2",
      "Period 同振幅無關",
      "中間最快，兩邊最大加速",
      "Ek ⇄ Ep，總能量不變，頻率 2f",
      "v 快 x 四分一，a 同 x 相反",
      "小角度先係 SHM",
    ],
    practice: [
      { q: "C.1 An object undergoes SHM. At which position is its acceleration greatest?", o: ["A. At the equilibrium position", "B. At maximum displacement", "C. Halfway between", "D. Acceleration is constant"], m: 1, a: "<b>B</b>. a = −ω²x is largest at the extremes [1]." },
      { q: "C.1 The mass on a spring is increased by a factor of 4. The period changes by a factor of:", o: ["A. 1/4", "B. 1/2", "C. 2", "D. 4"], m: 1, a: "<b>C</b>. T ∝ √m → √4 = 2 [1]." },
      { q: "C.1 A pendulum of length l has period T. The length is increased to 9l. The new period is:", o: ["A. T/3", "B. T", "C. 3T", "D. 9T"], m: 1, a: "<b>C</b>. T ∝ √l → √9 = 3 [1]." },
      { q: "C.1 Two oscillations have a time lag of T/4. Their phase difference is:", o: ["A. π/4", "B. π/2", "C. π", "D. 2π"], m: 1, a: "<b>B</b>. 2π × ¼ = π/2 [1]." },
      { q: "C.1 State the two conditions for an object to perform simple harmonic motion.", m: 2, a: "Acceleration proportional to displacement (from equilibrium) [1]; directed towards the equilibrium position / opposite to displacement [1]." },
      { q: "C.1 An object in SHM has period 0.40 s and amplitude 0.020 m. Calculate its maximum acceleration.", m: 2, a: "ω = 2π/0.40 = 15.7 rad s⁻¹ [M1]; a = ω²x₀ = 4.9 m s⁻² [A1]." },
      { q: "C.1 A 0.50 kg mass on a spring of stiffness 20 N m⁻¹ oscillates. Calculate its period.", m: 2, a: "T = 2π√(0.50/20) [M1] = 0.99 s [A1]." },
      { q: "C.1 Calculate the period of a 1.0 m simple pendulum on the Moon (g = 1.62 m s⁻²).", m: 2, a: "T = 2π√(1.0/1.62) [M1] = 4.9 s [A1]." },
      { q: "C.1 The mass on a spring is increased by a factor of 4. State and explain the change in period.", m: 2, a: "Period doubles [1]; T ∝ √m (T = 2π√(m/k)) [1]." },
      { q: "C.1 Show that a mass on a spring (spring constant k, mass m) performs SHM.", m: 3, a: "Restoring force F = −kx [1]; ma = −kx so a = −(k/m)x [1]; k/m constant → a ∝ −x, SHM with ω² = k/m [1]." },
      { q: "C.1 A plot of T² against l for a pendulum has gradient 4.0 s² m⁻¹. Determine g and give one way to reduce timing uncertainty.", m: 3, a: "Gradient = 4π²/g [1]; g = 39.5/4.0 = 9.9 m s⁻² [1]; time many (10–20) oscillations and divide [1]." },
      { q: "C.1 Describe the energy changes of a frictionless mass–spring system as it moves from maximum displacement to the equilibrium position, and sketch the E<sub>p</sub> against x graph.", m: 3, a: "Elastic potential energy decreases while kinetic energy increases [1]; total energy constant, all kinetic at equilibrium [1]; E<sub>p</sub>–x: upright parabola through origin (E<sub>k</sub> inverted, sum horizontal) [1]." },
    ],
  },

  "phys-12": {
    title: "Wave model · v = fλ · Transverse & Longitudinal · Intensity · Polarisation · EM spectrum",
    intro: "C.2 全部圍住一條橋：v = fλ。再加 graph 讀法、intensity ∝ A²、Malus 定律同 EM spectrum。睇完呢張 + 做完練習，C.2 唔會再失分。",
    parts: [
      {
        h: "Wave 基本 + 定義",
        min: 3,
        blocks: [
          ["note", "<b>常考</b>：P2 calculate 2 分 = 公式 [1] + 答案連單位 / 3 s.f. [1]；P1 MCQ 常考 graph 讀法同比例（×2 → ×4）；\"explain\" 題要兩個連住嘅 point（原因 → 結果）。"],
          ["rhyme", "口訣", "波走能量走，粒子喺度郁", "Waves transfer <b>energy</b>, not matter. 粒子只係喺平衡位置附近振動。"],
          ["key", "<b>v = fλ</b>　　<b>T = 1/f</b>　　（v in m s⁻¹, f in Hz, λ in m, T in s）<br>v 由 medium 決定；改 f 只會改 λ，唔會改 v。"],
          ["table", ["Term", "Exact definition (抄呢句)"], [
            ["Wavefront", "A line (or surface) joining points that are in phase (e.g. all crests)."],
            ["Ray", "A line showing the direction of energy transfer; it is perpendicular to the wavefronts."],
            ["Amplitude", "The maximum displacement from the equilibrium position."],
            ["Wavelength λ", "The distance between two successive points in phase (e.g. crest to crest)."],
            ["Frequency f", "The number of complete oscillations (waves passing a point) per unit time. Unit Hz."],
            ["Period T", "The time taken for one complete oscillation. T = 1/f."],
            ["Wave speed", "The distance travelled by the wave (energy) per unit time = fλ."],
            ["Transverse wave", "Oscillations are perpendicular to the direction of energy transfer (light, waves on a string, ripples)."],
            ["Longitudinal wave", "Oscillations are parallel to the direction of energy transfer (sound); made of compressions and rarefactions."],
            ["Intensity I", "The power received per unit area, measured perpendicular to the direction of energy transfer. I = P/A, unit W m⁻²."],
            ["Polarised wave", "A transverse wave whose oscillations are in one plane only."],
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A note of frequency 440 Hz travels through air at 340 m s⁻¹. Calculate its wavelength.", [
            "公式：λ = v ÷ f",
            "λ = 340 ÷ 440 = 0.7727…",
            "<b>λ = 0.773 m</b>（3 s.f.）✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A radio station broadcasts at 98 MHz. Calculate the wavelength (c = 3.00 × 10⁸ m s⁻¹).", [
            "先轉單位：98 MHz = 98 × 10⁶ Hz",
            "λ = c ÷ f = 3.00 × 10⁸ ÷ 98 × 10⁶",
            "<b>λ = 3.06 m</b> ✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A sonar pulse (speed 1500 m s⁻¹) returns from the sea bed 0.40 s after it was emitted. Find the depth.", [
            "Total distance = speed × time = 1500 × 0.40 = 600 m",
            "Pulse goes down AND back → depth = 600 ÷ 2 = <b>300 m</b> ✅（除二！）"
          ]],
          ["trap", ["Sound cannot travel in a vacuum (needs particles)；EM waves can.", "Transverse / longitudinal 係睇「振動 vs 能量方向」，唔係睇波本身嘅上下。"]],
        ],
      },
      {
        h: "兩種 graph 唔好撈",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "距離圖搵 λ，時間圖搵 T", "Displacement–distance = 影相 (snapshot)；displacement–time = 錄影 (one particle)。"],
          ["table", ["Graph", "x-axis", "What you read", "Picture"], [
            ["Displacement–distance", "position x / m", "wavelength λ, amplitude", "All particles at ONE instant"],
            ["Displacement–time", "time t / s", "period T (→ f = 1/T), amplitude", "ONE particle over time"],
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A displacement–distance graph shows two full waves in 1.20 m. A displacement–time graph for the same wave has period 0.020 s. Find the wave speed.", [
            "λ：2 waves = 1.20 m → λ = 0.60 m",
            "f = 1 ÷ T = 1 ÷ 0.020 = 50 Hz",
            "v = fλ = 50 × 0.60 = <b>30 m s⁻¹</b> ✅（或 v = λ/T = 0.60/0.020）"
          ]],
          ["note", "<b>Phase difference</b>：兩點相隔 Δx，Δφ = 2π × Δx/λ。相隔 λ → in phase（Δφ = 2π）；相隔 λ/2 → in antiphase（Δφ = π）。同一點相隔時間 Δt：Δφ = 2π × Δt/T。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Two points on a wave of wavelength 0.40 m are 0.10 m apart. Find their phase difference.", [
            "Δx/λ = 0.10 ÷ 0.40 = 1/4 of a wavelength",
            "Δφ = 2π × 1/4 = <b>π/2 rad (90°)</b> ✅"
          ]],
          ["trap", ["喺 displacement–time 圖讀 λ → 錯。睇清楚 x-axis 單位（m 定 s）。", "Longitudinal wave 畫成 graph 嘅時候，graph 唔係波嘅真實形狀，只係粒子位移。"]],
        ],
      },
      {
        h: "Superposition 疊加",
        min: 2,
        blocks: [
          ["key", "<b>Principle of superposition</b>: when two or more waves meet at a point, the resultant displacement is the <b>vector sum</b> of the displacements of the individual waves at that point."],
          ["rhyme", "口訣", "相遇就加，加完各走各路", "Waves pass through each other and continue unchanged. 同相 → bigger (constructive)；反相 → smaller (destructive)。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Two pulses meet at a point. One has displacement +3.0 cm and the other −2.0 cm at that instant. Find the resultant displacement.", [
            "Add as signed numbers：(+3.0) + (−2.0)",
            "<b>= +1.0 cm</b> ✅",
            "If two equal pulses (+3.0 and −3.0) overlap → total 0 (complete destructive) but energy is not destroyed; the pulses emerge unchanged."
          ]],
          ["note", "兩個 same amplitude A 嘅波 in phase → resultant amplitude 2A；exactly in antiphase → 0。"],
        ],
      },
      {
        h: "Intensity ∝ A² · 點光源",
        min: 3,
        blocks: [
          ["key", "<b>I = P/A</b>（W m⁻²）　　<b>I ∝ (amplitude)²</b>　　點光源喺距離 x：<b>I = P/(4πx²)</b>，所以 <b>I ∝ 1/x²</b>"],
          ["rhyme", "口訣", "強度跟振幅平方；點源跟距離平方反比", "Amplitude ×2 → I ×4。Distance ×2 → I ÷4。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A point source emits 20 W uniformly in all directions. Find the intensity at 2.0 m and then at 4.0 m.", [
            "Area of sphere at 2.0 m：4πx² = 4π × 2.0² = 50.27 m²",
            "I = P/A = 20 ÷ 50.27 = <b>0.40 W m⁻²</b>",
            "Distance doubled → I ÷ 4 → <b>0.10 W m⁻²</b>（check：20/(4π × 16) = 0.0995）✅"
          ]],
          ["eg", "<b>[P2 · State · 2–3 marks]</b> A wave of amplitude 2.0 cm has intensity 5.0 W m⁻². What is the intensity if the amplitude becomes 6.0 cm (same frequency)?", [
            "Amplitude × 3 → intensity × 3² = × 9",
            "I = 5.0 × 9 = <b>45 W m⁻²</b> ✅"
          ]],
          ["trap", ["Intensity 唔係 power：power 係總輸出 (W)，intensity 係每 m² (W m⁻²)。", "用 I ∝ 1/x² 要係「點源、無吸收、四方八面」。"]],
        ],
      },
      {
        h: "Polarisation 偏振 · Malus",
        min: 3,
        blocks: [
          ["key", "<b>Malus' law: I = I₀ cos²θ</b>　θ = angle between the transmission axis of the polariser (analyser) and the plane of polarisation of the incident light。"],
          ["rhyme", "口訣", "橫波先可以偏振，縱波冇得", "Only <b>transverse</b> waves can be polarised → polarisation is evidence that light is a transverse wave. 聲音 (longitudinal) 唔可以。"],
          ["note", "Unpolarised light passing through an ideal polariser: intensity drops to half, and the light becomes plane-polarised. 兩塊 polariser 垂直 (θ = 90°)：cos 90° = 0 → I = 0（crossed polarisers = 全黑）。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Plane-polarised light of intensity 80 W m⁻² reaches a polariser whose axis is at 30° to the plane of polarisation. Find the transmitted intensity.", [
            "I = I₀ cos²θ",
            "cos 30° = 0.8660 → cos²30° = 0.750",
            "I = 80 × 0.750 = <b>60 W m⁻²</b> ✅"
          ]],
          ["eg", "<b>[P2 · State · 2–3 marks]</b> Plane-polarised light of intensity I₀ passes through a polariser at 60°. What fraction is transmitted?", [
            "cos 60° = 0.500 → cos²60° = 0.250",
            "Fraction = <b>1/4</b>, i.e. I = 0.25 I₀ ✅"
          ]],
          ["trap", ["θ 係 axes 之間嘅角，唔好用 sin。", "cos² 要平方——好多人只用 cos 一次。", "計數機要設 degrees 模式。"]],
        ],
      },
      {
        h: "EM spectrum + 聲波",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "無微紅光紫 X 伽", "Radio · Microwave · Infrared · Visible · Ultraviolet · X-ray · Gamma：由左至右 λ 越短，f 同 photon energy 越大。"],
          ["table", ["Region", "Approx. wavelength", "Remark"], [
            ["Radio", "> 10⁻¹ m", "Longest λ, lowest f"],
            ["Microwave", "10⁻³ – 10⁻¹ m", "Ovens, mobile phones"],
            ["Infrared", "7 × 10⁻⁷ – 10⁻³ m", "Heat radiation, remote controls"],
            ["Visible", "about 400 – 700 nm", "Violet (400) → Red (700)"],
            ["Ultraviolet", "10⁻⁸ – 4 × 10⁻⁷ m", "Sterilising, causes sunburn"],
            ["X-ray", "10⁻¹¹ – 10⁻⁸ m", "Imaging"],
            ["Gamma", "< 10⁻¹¹ m", "Shortest λ, highest f"],
          ]],
          ["key", "All EM waves are <b>transverse</b>, travel at <b>c = 3.00 × 10⁸ m s⁻¹</b> in a vacuum, and can be polarised. 聲 = longitudinal，需要 medium，速度約 340 m s⁻¹（air, room temperature）。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Red light has wavelength 650 nm in air. Calculate its frequency.", [
            "650 nm = 650 × 10⁻⁹ m = 6.50 × 10⁻⁷ m",
            "f = c ÷ λ = 3.00 × 10⁸ ÷ 6.50 × 10⁻⁷",
            "<b>f = 4.6 × 10¹⁴ Hz</b> ✅"
          ]],
          ["trap", ["單位：MHz × 10⁶、GHz × 10⁹、nm × 10⁻⁹。", "Higher frequency = shorter wavelength（因為 c 固定）。", "唔好話「sound 係 EM wave」。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define","Amplitude: max displacement; wavelength: distance between two points in phase; frequency: waves per second."],["Distinguish","Transverse: oscillation ⟂ to energy travel; longitudinal: oscillation ∥ (compressions/rarefactions)."],["Describe","Say what the particles do and which direction the energy goes."],["Calculate","v = fλ; intensity I ∝ A²; point source I = P/4πr²."],["Sketch","Label λ on displacement–position, T on displacement–time."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Two graphs","from d–x read λ; from d–t read T; v = λ/T"],["Intensity","doubling A → 4× I; doubling r → I ÷ 4"],["Polarisation","I = I<sub>0</sub> cos²θ; unpolarised → I<sub>0</sub>/2 after first polariser"],["EM spectrum","order by λ; all travel at c in vacuum"],["Sound","longitudinal; speed depends on medium; cannot be polarised"]]],
          ["trap", ["Reading λ from a displacement–time graph","Saying longitudinal waves can be polarised","Treating intensity as ∝ A, not A²"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: v = fλ, I = P/A, I = I<sub>0</sub>cos²θ, c = 3.00 × 10⁸. Quote the order of the EM spectrum from radio to γ."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Saying waves transfer matter", "Energy only; particles oscillate about equilibrium"],
            ["2", "Reading λ off a displacement–time graph", "x-axis in s → T; x-axis in m → λ"],
            ["3", "Forgetting to halve sonar / echo distance", "Distance travelled = 2 × depth"],
            ["4", "MHz / nm not converted", "× 10⁶ / × 10⁻⁹ before substituting"],
            ["5", "Using I ∝ A instead of A²", "Amplitude ×2 → intensity ×4"],
            ["6", "Malus' law with cos not cos²", "I = I₀ cos²θ"],
            ["7", "Saying sound can be polarised", "Only transverse waves"],
            ["8", "Defining wavelength as 'length of a wave'", "'distance between two successive points in phase'"],
            ["9", "Changing f and saying v changes", "v depends on medium; f changes → λ changes"],
            ["10", "Longitudinal: 'oscillates left-right' only", "State: parallel to the direction of energy transfer"],
            ["11", "Phase difference of λ/2 = π/2", "λ/2 → π (antiphase); λ/4 → π/2"],
            ["12", "Sound in vacuum", "Needs a medium"],
          ]],
          ["check", [
            "Write the definitions of wavefront, ray, amplitude, wavelength, frequency, period, intensity without notes",
            "Use v = fλ and T = 1/f with unit conversions",
            "Pick λ from distance graph and T from time graph; find v from both",
            "Calculate phase difference from Δx/λ",
            "Apply superposition and I ∝ A², I ∝ 1/x²",
            "Use Malus' law and explain why polarisation shows light is transverse",
            "List the EM spectrum in order with c and visible range"
          ]],
        ],
      },
    ],
    summary: [
      "波送能量唔送物質",
      "v = fλ，速度睇 medium，改 f 改 λ",
      "橫波垂直能量方向，縱波平行（compression / rarefaction）",
      "距離圖搵 λ，時間圖搵 T",
      "Δφ = 2πΔx/λ；λ/2 即 π",
      "I = P/A；I ∝ A²；點源 I ∝ 1/x²",
      "Malus：I = I₀cos²θ；只有橫波偏振",
      "無微紅光紫 X 伽，全部 c = 3.00 × 10⁸"
    ],
    practice: [
      { q: "Which wave is longitudinal?", o: ["A. Light", "B. Sound in air", "C. A wave on a string", "D. Microwaves"], m: 1, a: "<b>B</b>. Air particles oscillate parallel to the direction of energy transfer." },
      { q: "A wave has frequency 50 Hz and wavelength 0.40 m. What is its speed?", o: ["A. 8.0 m s⁻¹", "B. 20 m s⁻¹", "C. 125 m s⁻¹", "D. 2.0 m s⁻¹"], m: 1, a: "<b>B</b>. v = fλ = 50 × 0.40 = 20 m s⁻¹." },
      { q: "The amplitude of a wave is doubled with frequency unchanged. The intensity becomes", o: ["A. the same", "B. 2 times", "C. 4 times", "D. 8 times"], m: 1, a: "<b>C</b>. I ∝ A² → 2² = 4." },
      { q: "Light of intensity I₀ polarised in a vertical plane meets a polariser whose axis is 45° from vertical. The transmitted intensity is", o: ["A. I₀", "B. I₀/2", "C. I₀/√2", "D. 0"], m: 1, a: "<b>B</b>. cos²45° = 0.5." },
      { q: "A sonar pulse travelling at 1500 m s⁻¹ returns 0.40 s after emission. Calculate the depth of the sea bed.", m: 2, a: "Total distance = 1500 × 0.40 = 600 m [1]; depth = 600/2 = 300 m [1]" },
      { q: "Distinguish between a displacement–distance graph and a displacement–time graph for a wave.", m: 2, a: "Displacement–distance shows the displacement of all points at one instant [1] and gives the wavelength; displacement–time shows one point over time [1] and gives the period." },
      { q: "State what is meant by a transverse wave and describe how a longitudinal wave such as sound travels in air.", m: 3, a: "Transverse: oscillations perpendicular to the direction of energy transfer [1]. Sound: air particles oscillate parallel to the direction of energy transfer [1], forming compressions and rarefactions that move through the air [1]." },
      { q: "A point source emits 20 W uniformly. Calculate the intensity at a distance of 2.0 m.", m: 2, a: "I = P/(4πx²) = 20/(4π × 2.0²) [1]; = 0.40 W m⁻² [1]" },
      { q: "Plane-polarised light of intensity 80 W m⁻² passes through a polariser with its axis at 30° to the plane of polarisation. Calculate the transmitted intensity.", m: 2, a: "I = I₀cos²θ = 80 × cos²30° [1]; = 60 W m⁻² [1]" },
      { q: "A displacement–distance graph shows λ = 0.60 m and a displacement–time graph for the same wave shows T = 0.020 s. Calculate the wave speed.", m: 2, a: "f = 1/T = 50 Hz [1]; v = fλ = 50 × 0.60 = 30 m s⁻¹ [1]" },
      { q: "Explain why polarisation provides evidence that light is a transverse wave.", m: 2, a: "Polarisation restricts oscillations to a single plane [1]; this is only possible if the oscillations are perpendicular to the direction of travel (transverse), not along it [1]." },
    ],
  },
});
IB.addFast({
  "phys-13": {
    title: "Reflection · Refraction · Total internal reflection · Diffraction · Interference · Double-slit",
    intro: "C.3 兩條主線：(1) 折射 Snell + 臨界角；(2) 干涉 path difference + s = λD/d。其餘係定義同 explanation 句式。",
    parts: [
      {
        h: "Reflection · Refraction 折射",
        min: 3,
        blocks: [
          ["note", "<b>常考</b>：P2 calculate 2 分 = 公式 [1] + 答案連單位 / 3 s.f. [1]；P1 MCQ 常考 graph 讀法同比例（×2 → ×4）；\"explain\" 題要兩個連住嘅 point（原因 → 結果）。"],
          ["rhyme", "口訣", "反射角等入射角；折射 n 大角細", "Angles always measured from the <b>normal</b>, not the surface. Law of reflection: θᵢ = θᵣ."],
          ["key", "<b>n = c / v</b>　　<b>n₁ sin θ₁ = n₂ sin θ₂</b>　　即 <b>sin θ₁ / sin θ₂ = n₂ / n₁ = v₁ / v₂ = λ₁ / λ₂</b><br>Refraction: change of direction when a wave crosses a boundary because its speed changes。<b>Frequency stays the same</b>；v 同 λ 一齊變。"],
          ["table", ["Going from…", "Speed", "λ", "f", "Bends…"], [
            ["Lower n → higher n (air → glass)", "decreases", "decreases", "same", "towards the normal"],
            ["Higher n → lower n (glass → air)", "increases", "increases", "same", "away from the normal"],
          ]],
          ["note", "Absolute refractive index n of a medium = c ÷ v (c in vacuum). n(air) ≈ 1.00，n(water) ≈ 1.33，n(glass) ≈ 1.50。n ≥ 1，冇單位。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A ray in air hits glass (n = 1.50) at 40° to the normal. Find the angle of refraction.", [
            "Snell: 1.00 × sin 40° = 1.50 × sin θ₂",
            "sin θ₂ = 0.6428 ÷ 1.50 = 0.4285",
            "θ₂ = sin⁻¹(0.4285) = <b>25.4°</b>（towards the normal，因為入咗 higher n）✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Calculate the speed of light in glass of n = 1.50, and the wavelength in glass of light that has λ = 600 nm in air.", [
            "v = c ÷ n = 3.00 × 10⁸ ÷ 1.50 = <b>2.00 × 10⁸ m s⁻¹</b>",
            "f 唔變：λ ∝ v ∝ 1/n → λ(glass) = 600 ÷ 1.50 = <b>400 nm</b> ✅",
            "Check f: 3.00 × 10⁸ ÷ 600 × 10⁻⁹ = 5.00 × 10¹⁴ Hz；2.00 × 10⁸ ÷ 400 × 10⁻⁹ = 5.00 × 10¹⁴ Hz ✓"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Light leaves water (n = 1.33) into air at 30° to the normal. Find the angle in air.", [
            "1.33 × sin 30° = 1.00 × sin θ₂",
            "sin θ₂ = 1.33 × 0.500 = 0.665",
            "θ₂ = sin⁻¹(0.665) = <b>41.7°</b>（away from the normal）✅"
          ]],
          ["trap", ["角度由 normal 量起，唔係由 surface。", "Frequency 唔變，唔好話 f 變。", "Snell 兩邊 n 同 sin 要配啱 (n₁ 配 θ₁)。"]],
        ],
      },
      {
        h: "Critical angle · TIR 全內反射",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "濃入稀、角夠大、全反射", "Two conditions: (1) light travels from higher n to lower n；(2) angle of incidence > critical angle."],
          ["key", "<b>Critical angle θc</b>: the angle of incidence in the denser medium for which the angle of refraction is 90°。<br><b>sin θc = n₂ / n₁</b>（n₁ > n₂）；進入空氣：<b>sin θc = 1/n</b>"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Calculate the critical angle for glass (n = 1.50) to air, and for water (n = 1.33) to air.", [
            "Glass: sin θc = 1 ÷ 1.50 = 0.6667 → θc = <b>41.8°</b>",
            "Water: sin θc = 1 ÷ 1.33 = 0.7519 → θc = <b>48.8°</b> ✅"
          ]],
          ["eg", "<b>[P2 · Determine · 2–3 marks]</b> A ray inside a glass prism (n = 1.50) hits a glass–air boundary at 45°. Does total internal reflection occur?", [
            "θc = 41.8°",
            "45° > 41.8° and light goes glass (higher n) → air (lower n)",
            "<b>Yes</b>: total internal reflection；ray reflects with angle of reflection = 45° ✅"
          ]],
          ["note", "<b>Optical fibre</b>: core (high n) surrounded by cladding (lower n); light stays inside by repeated TIR, so there is almost no loss through the walls. 角度 < θc 會有部分折射出去，信號損失。"],
          ["trap", ["TIR 唔可以由 air 入 glass。", "記得話 'greater than the critical angle'，唔係 'equal'。", "θc 用 sin⁻¹(n₂/n₁)，唔好倒轉（否則 sin > 1）。"]],
        ],
      },
      {
        h: "Diffraction 衍射",
        min: 2,
        blocks: [
          ["key", "<b>Diffraction</b>: the spreading of a wave (change of direction of wavefronts) as it passes through a gap or around an obstacle。<br>Most noticeable when the <b>gap width ≈ wavelength</b>. λ unchanged, speed unchanged, f unchanged."],
          ["table", ["Gap vs λ", "What happens"], [
            ["gap ≫ λ", "Little diffraction; wave passes almost straight with sharp shadows"],
            ["gap ≈ λ", "Maximum diffraction; semicircular wavefronts spread out"],
            ["gap ≪ λ", "Wave mostly reflected; little transmitted"],
          ]],
          ["rhyme", "口訣", "縫同波長差唔多，擴散最嚴重", "Why you hear around a door but not see around a corner: sound λ (~1 m) ≈ doorway; light λ (~500 nm) ≪ doorway."],
          ["note", "<b>Huygens</b>: every point on a wavefront acts as a source of secondary wavelets; the new wavefront is the envelope of the wavelets. 用嚟解釋 diffraction 同 refraction。"],
          ["trap", ["Diffraction 後 λ 唔變。", "Single-slit 嘅 θ = λ/b 同 diffraction grating 係 HL，SL 只需 qualitative。"]],
        ],
      },
      {
        h: "Interference 干涉",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "程差整數 λ 加強；半個 λ 抵消", "Path difference = nλ → constructive (bright)；(n + ½)λ → destructive (dark)。n = 0, 1, 2…"],
          ["table", ["Condition", "Path difference", "Phase difference", "Result"], [
            ["Constructive", "0, λ, 2λ… (nλ)", "0, 2π…", "Maximum amplitude / bright fringe / loud"],
            ["Destructive", "λ/2, 3λ/2… ((n+½)λ)", "π, 3π…", "Minimum (zero if equal amplitudes) / dark fringe / quiet"],
          ]],
          ["note", "<b>Coherent sources</b>: same frequency and a constant phase difference. 要穩定嘅 interference pattern 一定要 coherent（例：同一光源經兩條縫）。以上條件假設兩個 source in phase。"],
          ["eg", "<b>[P2 · State · 2–3 marks]</b> Two coherent loudspeakers in phase emit sound of wavelength 0.020 m. At a point P the path difference is 0.050 m. Is the sound loud or quiet?", [
            "Path difference ÷ λ = 0.050 ÷ 0.020 = 2.5",
            "2.5 = (n + ½) with n = 2 → <b>destructive</b> → quiet ✅"
          ]],
          ["eg", "<b>[P2 · State · 2–3 marks]</b> Same speakers. At point Q the path difference is 0.060 m. What is observed?", [
            "0.060 ÷ 0.020 = 3.0 = whole number",
            "<b>Constructive</b> → loud ✅"
          ]],
          ["trap", ["Path difference 要同 λ 比，唔係同距離比。", "Destructive ≠ 冇能量，係能量重新分佈。", "Incoherent sources (two torches) → no stable pattern."],]
        ],
      },
      {
        h: "Double-slit Young",
        min: 4,
        blocks: [
          ["key", "<b>s = λD / d</b>　s = fringe spacing（centre to centre of adjacent bright fringes or adjacent dark）　D = slit-to-screen distance　d = slit separation。<br>Valid when d ≪ D。All lengths in metres."],
          ["rhyme", "口訣", "λ 大 s 大，D 遠 s 大，d 大 s 細", "s ∝ λ，s ∝ D，s ∝ 1/d。"],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Light of wavelength 600 nm passes through two slits 0.30 mm apart onto a screen 2.0 m away. Calculate the fringe spacing.", [
            "Convert: λ = 600 × 10⁻⁹ m；d = 0.30 × 10⁻³ m",
            "s = λD/d = 600 × 10⁻⁹ × 2.0 ÷ 0.30 × 10⁻³",
            "<b>s = 4.0 × 10⁻³ m = 4.0 mm</b> ✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> In a double-slit experiment ten fringe spacings measure 15 mm. d = 0.50 mm and D = 1.5 m. Find the wavelength.", [
            "s = 15 mm ÷ 10 = 1.5 × 10⁻³ m（量多個 fringe 再除，減少 uncertainty）",
            "λ = s d / D = 1.5 × 10⁻³ × 0.50 × 10⁻³ ÷ 1.5",
            "<b>λ = 5.0 × 10⁻⁷ m = 500 nm</b> ✅"
          ]],
          ["eg", "<b>[P2 · Explain · 2–3 marks]</b> The apparatus above (s = 4.0 mm for 600 nm light) is changed. State and explain what happens to s if (a) red light is replaced by blue light, (b) the slits are moved closer together.", [
            "(a) Blue has shorter λ → s ∝ λ → s decreases（fringes closer）",
            "(b) d smaller → s ∝ 1/d → s increases（fringes further apart）✅"
          ]],
          ["note", "<b>Explain the fringes</b>: light diffracts at each slit → the two beams overlap and are coherent → bright fringe where path difference = nλ (waves arrive in phase, constructive) → dark fringe where path difference = (n+½)λ (antiphase, destructive). Using white light: central fringe white, others coloured."],
          ["trap", ["Convert mm and nm to metres first。", "s 係 adjacent fringes 之間距，唔係 central to nth fringe（除返 n）。", "Slit width 同 slit separation d 唔同。"]],
        ],
      },
      {
        h: "Long questions 拆解法",
        min: 3,
        blocks: [
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Laser light of wavelength 633 nm in air enters a glass block (n = 1.50) at 50° to the normal, then meets the glass–air boundary on the other side at a point where the angle of incidence is 48°. (a) Find the angle of refraction on entering glass. (b) Does light emerge at the second boundary?", [
            "圈數：λ 633 nm（用唔著，因為只問角度）；n = 1.50；50°；48°",
            "(a) sin θ₂ = sin 50° ÷ 1.50 = 0.7660 ÷ 1.50 = 0.5107 → <b>θ₂ = 30.7°</b>",
            "(b) θc = sin⁻¹(1/1.50) = 41.8°；48° > 41.8° and glass → air → <b>TIR, no light emerges</b> ✅"
          ]],
          ["table", ["If the question says…", "It is…"], [
            ["'angle', 'bends', 'speed in medium', 'n'", "Snell / n = c/v"],
            ["'glass to air', 'optical fibre', 'prism', 'fully reflected'", "Critical angle / TIR"],
            ["'gap', 'obstacle', 'spreads', 'wavelength comparable'", "Diffraction"],
            ["'path difference', 'in phase', 'loud / quiet', 'coherent'", "Interference: nλ or (n+½)λ"],
            ["'slits', 'screen', 'fringe spacing'", "s = λD/d"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["State Snell's law","n₁ sin θ₁ = n₂ sin θ₂; angles from the normal."],["Explain TIR","Needs n₁ > n₂ and incident angle > critical angle; sin θ<sub>c</sub> = n₂/n₁."],["Outline diffraction","Spreading of a wave as it passes a gap/edge; most when gap ≈ λ."],["Explain interference","Superposition: path difference nλ → constructive; (n+½)λ → destructive."],["Calculate","Double slit s = λD/d; single slit first minimum θ ≈ λ/b."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Refraction","n = c/v [1]; Snell [1]; angle from normal [1]"],["Optical fibre","TIR, cladding lower n, critical angle argument"],["Double slit","coherent sources; bright fringes at path diff nλ; s ∝ λ"],["Single slit","central max twice as wide as others; narrower slit → wider pattern"],["Diagram","ray arrows, normal, labelled angles"]]],
          ["trap", ["Measuring angles from the surface instead of the normal","Frequency changes on refraction; it does not","Forgetting 'coherent' for double-slit sources"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: n = c/v, n₁sinθ₁ = n₂sinθ₂, sin θ<sub>c</sub> = n₂/n₁, s = λD/d. Fringe questions are ratios: proportional reasoning gets full marks faster than recalculation."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Measuring angles from the surface", "Always from the normal"],
            ["2", "Saying frequency changes on refraction", "f same; v and λ change"],
            ["3", "n₁ and n₂ swapped in Snell", "n₁ goes with θ₁ (incident side)"],
            ["4", "sin θc = n₁/n₂ (>1)", "θc = sin⁻¹(n₂/n₁), n₁ is higher"],
            ["5", "TIR claimed for low-to-high n", "Only high n → low n and θ > θc"],
            ["6", "Calculator in radians", "Check DEG mode"],
            ["7", "mm / nm not in metres in s = λD/d", "Convert before substituting"],
            ["8", "Destructive when path difference = λ", "Destructive = (n + ½)λ"],
            ["9", "'Waves cancel so energy is lost'", "Energy redistributed to constructive regions"],
            ["10", "Forgetting 'coherent'", "Same f + constant phase difference"],
            ["11", "Diffraction changes λ", "λ, f, v unchanged"],
            ["12", "s measured across 1 fringe only", "Measure many fringes, divide by number of spacings"],
          ]],
          ["check", [
            "Write Snell's law, n = c/v, and relate speed, λ and f in a new medium",
            "Calculate θc and decide whether TIR occurs",
            "Define diffraction and state when it is greatest",
            "State the interference conditions in terms of path difference and phase",
            "Use s = λD/d and say how s changes when λ, D, d change",
            "Define coherent and explain why it is needed"
          ]],
        ],
      },
    ],
    summary: [
      "角度由 normal 量；θᵢ = θᵣ",
      "n = c/v；n₁sinθ₁ = n₂sinθ₂；f 唔變",
      "入濃折向 normal，入稀折離 normal",
      "濃入稀 + 角 > θc = TIR；sinθc = n₂/n₁",
      "縫同波長差唔多，衍射最大",
      "程差 nλ 加強，(n+½)λ 抵消；要 coherent",
      "s = λD/d：λ、D 大 s 大，d 大 s 細",
      "mm、nm 先轉 m"
    ],
    practice: [
      { q: "Destructive interference of two coherent in-phase sources occurs when the path difference is", o: ["A. λ", "B. 2λ", "C. λ/2", "D. 0"], m: 1, a: "<b>C</b>. Destructive: (n + ½)λ, here n = 0." },
      { q: "A ray passes from air into glass. Which quantity does NOT change?", o: ["A. Speed", "B. Wavelength", "C. Frequency", "D. Direction"], m: 1, a: "<b>C</b>. Frequency is set by the source." },
      { q: "Light travels from glass (n = 1.50) to air. The critical angle is closest to", o: ["A. 34°", "B. 42°", "C. 48°", "D. 56°"], m: 1, a: "<b>B</b>. sin θc = 1/1.50 → 41.8°." },
      { q: "In a double-slit experiment the slit separation is halved. The fringe spacing", o: ["A. halves", "B. is unchanged", "C. doubles", "D. quadruples"], m: 1, a: "<b>C</b>. s ∝ 1/d." },
      { q: "Light travels from air into glass of refractive index 1.50 at 40° to the normal. Calculate the angle of refraction.", m: 2, a: "sin θ₂ = sin 40°/1.50 [1]; θ₂ = 25° (25.4°) [1]" },
      { q: "Calculate the critical angle for light travelling from glass (n = 1.50) into air.", m: 2, a: "sin θc = 1/1.50 [1]; θc = 41.8° [1]" },
      { q: "State two conditions needed for total internal reflection.", m: 2, a: "Light travels from a medium of higher refractive index to lower [1]; the angle of incidence exceeds the critical angle [1]." },
      { q: "Light of wavelength 600 nm passes through two slits 0.30 mm apart onto a screen 2.0 m away. Calculate the fringe spacing.", m: 2, a: "s = λD/d = (600 × 10⁻⁹ × 2.0)/(0.30 × 10⁻³) [1]; = 4.0 × 10⁻³ m (4.0 mm) [1]" },
      { q: "Explain why a bright fringe is formed at the centre of the screen in a double-slit experiment.", m: 3, a: "Light from the two slits is coherent [1]; the path difference at the centre is zero [1]; waves arrive in phase and interfere constructively [1]." },
      { q: "Outline what is meant by diffraction and state the condition for it to be most pronounced.", m: 2, a: "Spreading of a wave (change of direction of wavefronts) as it passes through a gap or around an obstacle [1]; most pronounced when the gap width is comparable to the wavelength [1]." },
      { q: "Light of wavelength 500 nm in air enters water (n = 1.33). Calculate its wavelength in water.", m: 2, a: "f unchanged so λ ∝ 1/n [1]; λ = 500/1.33 = 376 nm [1]" },
    ],
  },

  "phys-14": {
    title: "Standing waves · Harmonics in strings & pipes · Resonance · Damping",
    intro: "C.4：先畫 node / antinode，數幾多個 λ/4 或 λ/2 喺 L 入面，再 f = v/λ。最後係 resonance 同 damping 嘅文字題。",
    parts: [
      {
        h: "Standing wave 基本",
        min: 3,
        blocks: [
          ["note", "<b>常考</b>：P2 calculate 2 分 = 公式 [1] + 答案連單位 / 3 s.f. [1]；P1 MCQ 常考 graph 讀法同比例（×2 → ×4）；\"explain\" 題要兩個連住嘅 point（原因 → 結果）。"],
          ["rhyme", "口訣", "兩波相反疊，節不動、腹最大", "A standing wave forms from superposition of two waves of the same frequency and amplitude travelling in opposite directions (e.g. incident + reflected)."],
          ["key", "<b>Node</b>: point of zero amplitude (destructive interference always).　<b>Antinode</b>: point of maximum amplitude.<br>Adjacent nodes (or adjacent antinodes) are <b>λ/2</b> apart；node to next antinode = <b>λ/4</b>."],
          ["table", ["Feature", "Travelling wave", "Standing wave"], [
            ["Energy", "Transferred along the wave", "Not transferred (energy stored in oscillation)"],
            ["Amplitude", "Same for all points", "Varies: 0 at nodes, maximum at antinodes"],
            ["Phase", "Changes continuously along the wave", "All points between two adjacent nodes in phase; points in adjacent loops in antiphase"],
            ["Waveform", "Moves", "Does not move along"],
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> Adjacent nodes of a standing wave on a string are 0.15 m apart and the frequency is 1000 Hz. Find the wave speed.", [
            "Adjacent nodes = λ/2 → λ = 2 × 0.15 = 0.30 m",
            "v = fλ = 1000 × 0.30 = <b>300 m s⁻¹</b> ✅"
          ]],
          ["trap", ["Node 之間距係 λ/2，唔係 λ。", "Standing wave 唔傳送能量；唔好話 'wave moves'。", "Node 唔係 amplitude 細，係 amplitude 零。"]],
        ],
      },
      {
        h: "String · 兩端固定",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "兩端係節，每個 harmonic 都有", "Fixed ends = nodes. L = n × λ/2 → λ = 2L/n；f = n v / 2L (n = 1, 2, 3…)。"],
          ["key", "<b>λₙ = 2L / n</b>　　<b>fₙ = n·v / 2L = n f₁</b>　　fundamental (1st harmonic) = one loop, L = λ/2。"],
          ["table", ["Harmonic", "Loops", "L =", "λ", "f"], [
            ["1st (fundamental)", "1", "λ/2", "2L", "f₁ = v/2L"],
            ["2nd", "2", "λ", "L", "2f₁"],
            ["3rd", "3", "3λ/2", "2L/3", "3f₁"],
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A string of length 0.80 m is fixed at both ends and vibrates in its fundamental mode at 220 Hz. Find the wave speed and the frequencies of the 2nd and 3rd harmonics.", [
            "Fundamental: L = λ/2 → λ = 2 × 0.80 = 1.6 m",
            "v = fλ = 220 × 1.6 = <b>352 m s⁻¹</b>",
            "f₂ = 2 × 220 = <b>440 Hz</b>；f₃ = 3 × 220 = <b>660 Hz</b> ✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A guitar string, wave speed 300 m s⁻¹, length 0.60 m. Find the fundamental frequency and the wavelength of the 3rd harmonic.", [
            "f₁ = v/2L = 300 ÷ (2 × 0.60) = <b>250 Hz</b>",
            "λ₃ = 2L/3 = 1.20 ÷ 3 = <b>0.40 m</b>（check: f₃ = 750 Hz; v = 750 × 0.40 = 300 ✓）✅"
          ]],
          ["note", "Shorter string / higher tension → higher f₁ (v increases with tension, f₁ = v/2L)."],
        ],
      },
      {
        h: "Pipes 管",
        min: 4,
        blocks: [
          ["rhyme", "口訣", "閉端係節，開口係腹；閉管淨係單數", "Closed end = <b>node</b>；open end = <b>antinode</b>。"],
          ["table", ["Pipe", "Ends", "Fundamental", "λₙ", "fₙ", "Harmonics"], [
            ["Open both ends", "A – A", "L = λ/2", "2L/n", "n·v/2L", "all: f₁, 2f₁, 3f₁…"],
            ["Closed one end", "N – A", "L = λ/4", "4L/n", "n·v/4L", "odd only: f₁, 3f₁, 5f₁… (n = 1, 3, 5…)"],
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A pipe 0.34 m long is closed at one end. Find the fundamental frequency and the next possible frequency (v = 347 m s⁻¹).", [
            "Fundamental: L = λ/4 → λ = 4 × 0.34 = 1.36 m",
            "f₁ = v/λ = 347 ÷ 1.36 = <b>255 Hz</b>",
            "Next = 3rd harmonic (no 2nd!) = 3 × 255 = <b>765 Hz</b> ✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> An open pipe of length 0.50 m, v = 340 m s⁻¹. Find f₁ and f₂.", [
            "λ = 2L = 1.0 m → f₁ = 340 ÷ 1.0 = <b>340 Hz</b>",
            "f₂ = 2f₁ = <b>680 Hz</b> ✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A closed pipe produces a fundamental of 170 Hz (v = 340 m s⁻¹). Find its length.", [
            "λ = v/f = 340 ÷ 170 = 2.0 m",
            "L = λ/4 = <b>0.50 m</b> ✅"
          ]],
          ["trap", ["閉管冇偶數 harmonic (no 2f₁, 4f₁)。", "閉管 fundamental 係 λ/4 唔係 λ/2。", "Open end 都係 antinode（pressure node），唔好畫節。"]],
        ],
      },
      {
        h: "Resonance tube 實驗",
        min: 2,
        blocks: [
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A tuning fork of frequency 500 Hz is held above a tube closed at the bottom by water. The first resonance occurs when the air column is L₁ and the second when it is L₂. Find L₁, L₂ and the speed of sound if v = 340 m s⁻¹, and explain how to find v from measurements.", [
            "λ = v/f = 340 ÷ 500 = 0.68 m",
            "First resonance: L₁ = λ/4 = <b>0.17 m</b>；second: L₂ = 3λ/4 = <b>0.51 m</b>",
            "L₂ − L₁ = λ/2 = 0.34 m → <b>v = 2f(L₂ − L₁) = 2 × 500 × 0.34 = 340 m s⁻¹</b>",
            "用差值唔使理 end correction（實際 antinode 稍為喺管口之外）✅"
          ]],
          ["note", "Resonance in the tube: the sound reflected at the water surface and the incident sound form a standing wave; node at the water, antinode near the top."],
        ],
      },
      {
        h: "Resonance · Damping",
        min: 3,
        blocks: [
          ["key", "<b>Natural frequency</b>: the frequency at which a system oscillates freely.<br><b>Resonance</b>: when the driving frequency equals the natural frequency of the system, the amplitude of oscillation becomes a maximum (maximum energy transfer to the system)."],
          ["table", ["Damping", "What happens"], [
            ["Light", "Many oscillations; amplitude decreases slowly; resonance peak tall and narrow"],
            ["Critical", "Returns to equilibrium in the shortest time without oscillating"],
            ["Heavy (over)", "No oscillation; returns very slowly"],
          ]],
          ["rhyme", "口訣", "驅動等於自然，振幅最大", "More damping → lower, broader resonance peak (peak frequency slightly lower)."],
          ["note", "<b>Damping</b>: energy removed from oscillating system by resistive/frictional forces so amplitude decreases. Examples: shock absorbers (aim near critical), door closer, building dampers."],
          ["table", ["Useful resonance", "Harmful resonance"], [
            ["Microwave oven (water molecules)", "Bridge/building oscillating in wind or by marching soldiers/earthquake"],
            ["Musical instruments (air column / string)", "Rattling car panel, glass breaking at a note"],
            ["MRI (protons)", "Machine vibration"],
          ]],
          ["trap", ["Resonance = driving f equals NATURAL f，唔係 'f 越大越好'。", "Damping 唔係令 f 變大；佢令 amplitude 細同 peak 寬。"]],
        ],
      },
      {
        h: "Long questions 拆解法",
        min: 3,
        blocks: [
          ["eg", "<b>[P2 · Calculate · 2–3 marks]</b> A string fixed at both ends has length 1.2 m and supports a standing wave with 4 antinodes at frequency 200 Hz. Find the wavelength, wave speed and fundamental frequency.", [
            "圈數：L = 1.2 m；4 antinodes = 4 loops = 4 × λ/2 → n = 4",
            "λ = 2L/n = 2.4 ÷ 4 = <b>0.60 m</b>",
            "v = fλ = 200 × 0.60 = <b>120 m s⁻¹</b>",
            "f₁ = 200 ÷ 4 = <b>50 Hz</b>（或 v/2L = 120/2.4 = 50 ✓）✅"
          ]],
          ["table", ["If the question says…", "Use…"], [
            ["'string', 'fixed at both ends', 'open pipe'", "L = nλ/2"],
            ["'closed at one end', 'odd harmonics'", "L = nλ/4, n odd"],
            ["'nodes', 'antinodes', 'loops'", "Count λ/2 per loop"],
            ["'driving frequency = natural frequency'", "Resonance"],
            ["'returns without oscillating in shortest time'", "Critical damping"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Explain standing wave","Superposition of incident and reflected waves of same f; nodes (zero amplitude) and antinodes."],["Define resonance","Driving frequency = natural frequency, giving maximum amplitude."],["Sketch","Draw the envelope, mark N and A, show L = nλ/2 etc."],["Compare","Standing: no net energy transfer, nodes fixed; progressive: energy moves, amplitude equal everywhere."],["Calculate","Harmonic frequencies from v/λ with the right boundary conditions."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["String fixed–fixed","L = nλ/2, f<sub>n</sub> = nv/2L"],["Pipe open–open","antinodes at both ends; L = nλ/2, all harmonics"],["Pipe closed–open","L = (2n−1)λ/4; odd harmonics only"],["Resonance tube","adjacent resonances differ by λ/2"],["Damping","reduces amplitude and sharpness of resonance"]]],
          ["trap", ["Closed end drawn as antinode (it is a node)","Adjacent nodes separated by λ, not λ/2","Assuming all harmonics exist in a closed pipe"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Always sketch the pattern before applying a formula: the picture gives L in terms of λ with fewer slips than recalling a formula."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Node spacing = λ", "Adjacent nodes = λ/2"],
            ["2", "Saying standing waves transfer energy", "No net energy transfer along the wave"],
            ["3", "Even harmonics in a closed pipe", "Odd only: f₁, 3f₁, 5f₁"],
            ["4", "Closed pipe L = λ/2", "Fundamental L = λ/4"],
            ["5", "Fixed end drawn as antinode", "Fixed / closed end = node; open end = antinode"],
            ["6", "Forgetting v = fλ for the final speed", "Find λ from the diagram first"],
            ["7", "Mixing f₁ with the n-th harmonic frequency", "fₙ = n f₁"],
            ["8", "Defining resonance without 'natural frequency'", "Driving f = natural f → max amplitude"],
            ["9", "Damping 'stops' oscillation", "Removes energy; amplitude decreases"],
            ["10", "Critical damping oscillates once", "No oscillation, fastest return"],
            ["11", "No 'superposition / opposite directions' in the explanation", "Two waves, same f, opposite directions"],
          ]],
          ["check", [
            "Define node, antinode, standing wave, resonance, natural frequency",
            "Compare standing and travelling waves (energy, amplitude, phase)",
            "Draw and calculate harmonics for string, open pipe, closed pipe",
            "Find v from resonance tube using L₂ − L₁ = λ/2",
            "Describe light, critical, heavy damping and effect on the resonance curve",
            "Give one useful and one harmful example of resonance"
          ]],
        ],
      },
    ],
    summary: [
      "兩波相反疊 = standing wave；節不動，腹最大",
      "節與節 λ/2；節到腹 λ/4",
      "兩端固定 / 開管：L = nλ/2，全部 harmonic",
      "閉管：閉端節、開端腹，L = nλ/4，n 單數",
      "fₙ = n f₁；v = fλ",
      "Resonance：驅動頻率 = 自然頻率，振幅最大",
      "Damping 令 peak 低同闊；critical 最快返原位"
    ],
    practice: [
      { q: "The distance between adjacent nodes in a standing wave is", o: ["A. λ/4", "B. λ/2", "C. λ", "D. 2λ"], m: 1, a: "<b>B</b>." },
      { q: "A pipe closed at one end has fundamental frequency f. The next higher resonant frequency is", o: ["A. 2f", "B. 3f", "C. 4f", "D. 5f"], m: 1, a: "<b>B</b>. Only odd harmonics: f, 3f, 5f." },
      { q: "A string fixed at both ends has fundamental frequency 100 Hz. Which frequency can it also support?", o: ["A. 150 Hz", "B. 250 Hz", "C. 300 Hz", "D. 350 Hz"], m: 1, a: "<b>C</b>. fₙ = n × 100 Hz." },
      { q: "A string 0.80 m long vibrates in its fundamental mode at 220 Hz. Calculate the wave speed.", m: 2, a: "λ = 2L = 1.6 m [1]; v = fλ = 220 × 1.6 = 352 m s⁻¹ [1]" },
      { q: "A pipe 0.34 m long is closed at one end. Calculate its fundamental frequency (speed of sound 347 m s⁻¹).", m: 2, a: "λ = 4L = 1.36 m [1]; f = 347/1.36 = 255 Hz [1]" },
      { q: "Compare a standing wave with a travelling wave.", m: 3, a: "Travelling wave transfers energy, standing wave does not [1]; travelling wave has the same amplitude at all points, standing wave has nodes (zero) and antinodes (max) [1]; in a standing wave points between adjacent nodes are in phase, in a travelling wave phase varies along the wave [1]." },
      { q: "Explain how a standing wave is formed on a string fixed at both ends.", m: 3, a: "A wave reflects at the fixed end [1]; the incident and reflected waves (same frequency, opposite directions) superpose [1]; at certain frequencies this gives nodes (destructive) and antinodes (constructive) with the ends as nodes [1]." },
      { q: "Outline what is meant by resonance and give one example where it is harmful.", m: 2, a: "Resonance: large amplitude when the driving frequency equals the natural frequency of the system [1]; e.g. bridge/building oscillating in wind or earthquake [1]." },
      { q: "Describe the effect of heavy damping compared with light damping on a system driven near its natural frequency.", m: 2, a: "Heavy damping gives a lower maximum amplitude [1] and a broader resonance peak (more energy removed per cycle) [1]." },
      { q: "An air column closed at one end resonates with a 500 Hz fork at lengths 0.17 m and 0.51 m. Calculate the speed of sound.", m: 2, a: "λ/2 = 0.51 − 0.17 = 0.34 m so λ = 0.68 m [1]; v = fλ = 500 × 0.68 = 340 m s⁻¹ [1]" },
    ],
  },

  "phys-15": {
    title: "Doppler effect · Wavefront bunching · Redshift & blueshift · Δλ/λ = v/c",
    intro: "C.5 好短：會解釋 wavefront 點樣 bunch up，會用 Δλ/λ ≈ v/c 計速度，同分得清 red / blue shift。",
    parts: [
      {
        h: "Doppler 解釋",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "行近頻率高，行遠頻率低", "Source and observer approaching → observed f higher (λ shorter)；separating → f lower (λ longer)."],
          ["key", "<b>Doppler effect</b>: the change in the observed frequency (and wavelength) of a wave when there is relative motion between the source and the observer。<br>Note: the source's own emitted frequency does not change; the observer receives wavefronts at a different rate."],
          ["note", "<b>常考 (P2, 2–3 marks, 'Explain')</b>：先講 source moving，每個 wavefront 由新位置發出 → 前面 wavefront 被壓縮 (bunched, shorter λ)，後面被拉開 (longer λ) → 因 v = fλ，波速不變，前面 f 高、後面 f 低。"],
          ["table", ["Situation", "Wavefronts", "Observed λ", "Observed f"], [
            ["Source moves towards observer", "Compressed (closer) in front", "Shorter", "Higher"],
            ["Source moves away", "Stretched (further apart) behind", "Longer", "Lower"],
            ["Observer moves towards source", "Meets wavefronts more often", "(source λ same)", "Higher"],
            ["Observer moves away", "Meets wavefronts less often", "(source λ same)", "Lower"],
          ]],
          ["note", "<b>Model answer frame (3 marks)</b>: the source emits wavefronts at a regular rate [1]; as the source moves towards the observer, each successive wavefront is emitted from a position closer to the observer, so the distance between wavefronts (wavelength) decreases [1]; wave speed unchanged so f = v/λ increases [1]."],
          ["trap", ["Source 本身 frequency 冇變，變嘅係 observed。", "唔好話 'wave speed increases'。"]],
        ],
      },
      {
        h: "光嘅 Doppler · Redshift",
        min: 4,
        blocks: [
          ["key", "<b>Δλ/λ ≈ Δf/f ≈ v/c</b>　（v ≪ c）　Δλ = λ(observed) − λ(emitted)<br><b>Redshift</b>: observed wavelength longer → source <b>receding</b>。<b>Blueshift</b>: observed wavelength shorter → source <b>approaching</b>。"],
          ["rhyme", "口訣", "遠離變紅，靠近變藍", "Galaxies show redshift of spectral lines → moving away from us (evidence the universe is expanding)."],
          ["eg", "<b>[P2 · Calculate · 2 marks]</b> A spectral line of wavelength 656 nm in the laboratory is observed at 663 nm in light from a galaxy. Calculate the speed of the galaxy relative to Earth and state whether it is approaching or receding.", [
            "Δλ = 663 − 656 = 7 nm",
            "v = c × Δλ/λ = 3.00 × 10⁸ × 7 ÷ 656 = 3.2 × 10⁶ m s⁻¹",
            "Observed λ longer → redshift → <b>receding, 3.2 × 10⁶ m s⁻¹</b> ✅"
          ]],
          ["eg", "<b>[P2 · Determine · 2 marks]</b> A hydrogen line of 434.0 nm is observed at 434.4 nm from a star. Determine the star's speed.", [
            "Δλ = 0.4 nm",
            "v = 3.00 × 10⁸ × 0.4 ÷ 434.0 = <b>2.8 × 10⁵ m s⁻¹</b>（receding, redshift）✅"
          ]],
          ["eg", "<b>[P2 · Calculate · 2 marks]</b> A galaxy recedes at 2.0 × 10⁶ m s⁻¹. Light of emitted wavelength 550 nm. Find the observed wavelength.", [
            "Δλ/λ = v/c = 2.0 × 10⁶ ÷ 3.00 × 10⁸ = 6.67 × 10⁻³",
            "Δλ = 550 × 6.67 × 10⁻³ = 3.67 nm",
            "Observed λ = 550 + 3.67 = <b>553.7 nm (≈ 554 nm)</b> ✅"
          ]],
          ["eg", "<b>[P1 MCQ · 1 mark]</b> A star's line is observed at a shorter wavelength than in the lab. The star is…", [
            "Shorter λ = blueshift → <b>approaching Earth</b> ✅"
          ]],
          ["trap", ["Δλ 用 observed − emitted；正數 = receding。", "Δλ/λ ≈ v/c 只適用 v ≪ c，且用來計光，唔係聲音。", "nm 比例計算可以直接用 nm，因為係比值，但答案 v 要 m s⁻¹。"]],
        ],
      },
      {
        h: "聲波 Doppler",
        min: 3,
        blocks: [
          ["note", "<b>常考 (P2, 'Describe / Explain')</b>：救護車 siren 行近 pitch 高、行過後 pitch 低。講 wavefront bunching + v = fλ。Sound 嘅 moving source / observer 公式（f' = f·v/(v ∓ uₛ)）係 HL，SL 只需要 qualitative + 光嘅 Δλ/λ ≈ v/c。"],
          ["eg", "<b>[P2 · Explain · 3 marks]</b> An ambulance siren sounds higher in pitch as it approaches a stationary observer and lower after it passes. Explain.", [
            "Approaching: each wavefront is emitted closer to the observer than the last → wavefronts bunched up, shorter observed wavelength [1]",
            "Speed of sound unchanged (set by air) so f = v/λ is higher → higher pitch [1]",
            "After passing: wavefronts spread out, longer λ → lower f → lower pitch [1] ✅"
          ]],
          ["eg", "<b>[P2 · Outline · 2 marks]</b> Outline how the Doppler effect is used to measure the speed of a car by a radar gun.", [
            "Radio/microwave pulse reflected from the moving car has a changed frequency (shifted by relative speed) [1]",
            "The size of the frequency shift is compared with the emitted frequency to find the speed [1] ✅"
          ]],
        ],
      },
      {
        h: "Long questions 拆解法",
        min: 3,
        blocks: [
          ["eg", "<b>[P2 · 4 marks]</b> The light from a distant galaxy shows a hydrogen line (emitted 486 nm) at 490 nm. (a) State what this shows about the galaxy's motion. [1] (b) Calculate its speed. [2] (c) Explain why the observed wavelength has changed. [1]", [
            "圈數：λ = 486 nm；observed 490 nm；Δλ = 4 nm",
            "(a) Observed λ longer → redshift → <b>receding</b> [1]",
            "(b) v = c Δλ/λ = 3.00 × 10⁸ × 4 ÷ 486 = <b>2.5 × 10⁶ m s⁻¹</b> [M1][A1]",
            "(c) Relative motion between source and observer stretches the wavefronts → longer received wavelength (Doppler effect) [1] ✅"
          ]],
          ["table", ["If the question says…", "Do…"], [
            ["'spectral line', 'galaxy', 'redshift'", "Δλ/λ = v/c, state receding"],
            ["'siren', 'pitch', 'approaches'", "Wavefront bunching + v = fλ"],
            ["'observed wavelength shorter'", "Blueshift, approaching"],
            ["'speed of source calculated'", "v = cΔλ/λ (light only at SL)"],
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Describe Doppler","Observed frequency changes when source and observer have relative motion."],["Explain (wavefronts)","Source moves: wavefronts compressed in front (↑ f), stretched behind (↓ f)."],["Calculate","f′ = f·v/(v ∓ u<sub>s</sub>) for moving source; v ≪ c: Δf/f ≈ v/c."],["Determine","Speed of a galaxy/object from redshift or speed gun data."],["Outline","Redshift = λ increased, source moving away."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Source approaching","f′ = f·v/(v − u<sub>s</sub>)"],["Source receding","f′ = f·v/(v + u<sub>s</sub>)"],["Wavefront diagram","closer spaced = ↑ f"],["Astronomical","Δλ/λ ≈ v/c"],["Reflection (speed gun)","moving reflector acts as moving source after acting as observer, so shift is about double"]]],
          ["trap", ["Using the wrong sign in the denominator","Saying the wave speed changes (it depends only on the medium)","Light: wrong approximation if v is not ≪ c"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: f′ = f·v/(v ± u<sub>s</sub>), Δf/f ≈ Δλ/λ ≈ v/c. Rule: approaching → bigger f → smaller denominator."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 2,
        blocks: [
          ["table", ["#", "Trap", "Fix"], [
            ["1", "Saying the source's frequency changes", "Observed frequency changes"],
            ["2", "Saying wave speed changes", "Speed fixed by medium; λ and f change"],
            ["3", "Redshift = approaching", "Redshift = receding"],
            ["4", "Δλ = emitted − observed", "Δλ = observed − emitted"],
            ["5", "Using Δλ/λ = v/c for relativistic speeds", "Valid only for v ≪ c"],
            ["6", "No mention of wavefronts in 'explain'", "Bunched in front, stretched behind"],
            ["7", "Using sound formula at SL", "SL: qualitative for sound"],
            ["8", "v answer with nm or no unit", "m s⁻¹, 2–3 s.f."],
            ["9", "'Galaxy is red'", "Wavelength shifted towards red end"],
            ["10", "Forgetting redshift evidence of expansion", "Galaxies moving away → universe expanding"],
          ]],
          ["check", [
            "Define the Doppler effect",
            "Explain wavefront bunching for a moving source",
            "Distinguish redshift and blueshift",
            "Use Δλ/λ ≈ v/c and give direction of motion",
            "Explain a siren changing pitch in 3 marks"
          ]],
        ],
      },
    ],
    summary: [
      "靠近頻率高，遠離頻率低",
      "Wavefront 前面 bunch，後面 stretch；speed 唔變",
      "Δλ/λ ≈ Δf/f ≈ v/c（v ≪ c）",
      "遠離紅移，靠近藍移",
      "Δλ = observed − emitted",
      "Source 本身 f 冇變，係 observed 變"
    ],
    practice: [
      { q: "Light from a galaxy is redshifted. This indicates that the galaxy is", o: ["A. approaching Earth", "B. moving away from Earth", "C. stationary", "D. polarised"], m: 1, a: "<b>B</b>. Longer observed wavelength = receding." },
      { q: "A source emitting sound moves towards a stationary observer. Which is correct for the observer?", o: ["A. Higher f, shorter λ", "B. Lower f, longer λ", "C. Higher f, longer λ", "D. Same f and λ"], m: 1, a: "<b>A</b>. Wavefronts bunched; speed unchanged." },
      { q: "A spectral line of 656 nm is observed at 663 nm. Calculate the recession speed of the source.", m: 2, a: "v = c Δλ/λ = 3.00 × 10⁸ × 7/656 [1]; = 3.2 × 10⁶ m s⁻¹ [1]" },
      { q: "State what is meant by the Doppler effect.", m: 1, a: "Change in observed frequency (wavelength) due to relative motion between source and observer [1]." },
      { q: "Explain why the pitch of an ambulance siren appears higher as it approaches an observer.", m: 3, a: "Successive wavefronts emitted closer to observer, so wavelength shorter [1]; speed of sound unchanged [1]; f = v/λ increases [1]." },
      { q: "A star's spectral line has emitted wavelength 500 nm and is observed at 499.5 nm. Determine the star's velocity relative to Earth, including direction.", m: 3, a: "Δλ = −0.5 nm [1]; v = 3.00 × 10⁸ × 0.5/500 = 3.0 × 10⁵ m s⁻¹ [1]; approaching (blueshift) [1]" },
      { q: "A galaxy recedes at 3.0 × 10⁶ m s⁻¹. Calculate Δλ/λ for light from it.", m: 2, a: "Δλ/λ = v/c [1]; = 3.0 × 10⁶/3.00 × 10⁸ = 0.010 [1]" },
      { q: "Outline why redshift of distant galaxies is evidence that the universe is expanding.", m: 2, a: "Spectral lines from distant galaxies are shifted to longer wavelengths [1]; this means they are moving away from us, so space is expanding [1]." },
    ],
  },

  "phys-16": {
    title: "Gravitational Fields · Newton's Law · Kepler · Orbits",
    intro: "D.1 只有兩條 formula 加一條 derivation：F = GMm/r² 同埋 GMm/r² = mv²/r。r 永遠由 centre 度起。",
    parts: [
      {
        h: "Master idea 同 method chain",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "r 由心度起，引力做向心", "Every D.1 question is Newton's law of gravitation. For orbits, set gravitational force = centripetal force (mass m of the satellite cancels). r is ALWAYS measured from the centre of the planet, never from the surface."],
          ["flow", [["① 圈數據", "Convert to SI: km → m (× 10³), hours → s (× 3600), days → s (× 86 400). Write G = 6.67 × 10⁻¹¹ N m² kg⁻²."], ["② 搵 r", "r = planet radius + height above surface (from the centre!)."], ["③ 揀式", "Field strength at a point: g = GM/r². Force on a mass: F = GMm/r². Orbit: GMm/r² = mv²/r (circular)."], ["④ 計 + 單位", "Check units (N kg⁻¹, m s⁻¹, s). Give answer to 2-3 s.f."]]],
          ["note", "常考 note：(1) calculate g / orbital speed with r = R + h, (2) “show that” T² ∝ r³ or geostationary radius, (3) explain weightlessness (2 linked points), (4) Kepler II explanation. 一定要 units + 2-3 s.f.。"],
          ["note", "<b>If the question says…</b>: “gravitational field strength at…” → g = GM/r².　“force on satellite/astronaut” → F = GMm/r² (or F = mg).　“orbital speed / period of a satellite” → GMm/r² = mv²/r.　“Show that T² ∝ r³” → derivation (Part 5).　“geostationary” → T = 24 h, above the equator, same direction as Earth's rotation."],
        ],
      },
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["grid", [
            ["D.1", "距離加倍力四分一", "Inverse square: r × 2 → F, g ÷ 4"],
            ["D.1", "r 由中心度起，唔係地面", "r = R + h"],
            ["D.1", "g 睇行星質量，唔睇我質量", "g = GM/r² has no m of the small mass"],
            ["D.1", "場強即係每公斤受幾多力", "g = F/m (N kg⁻¹)"],
            ["D.1", "引力做向心，m 抵消", "GMm/r² = mv²/r → v = √(GM/r)"],
            ["D.1", "越遠越慢越長命", "Bigger r → smaller v, bigger T"],
            ["D.1", "T 平方比 r 立方", "T² ∝ r³ (Kepler III); T² = 4π²r³/GM"],
            ["D.1", "近日行快、遠日行慢", "Kepler II: equal areas in equal times"],
            ["D.1", "橢圓、太陽喺焦點", "Kepler I"],
            ["D.1", "失重係自由落體", "Weightless = no contact force, still has weight"],
          ]],
          ["table", ["Constant / fact", "Value", "Use it when…"], [
            ["Gravitational constant G", "6.67 × 10⁻¹¹ N m² kg⁻²", "every D.1 calculation"],
            ["g at Earth's surface", "9.81 N kg⁻¹ (= m s⁻²)", "near-Earth; checks"],
            ["Mass of Earth", "5.97 × 10²⁴ kg", "satellite / g questions"],
            ["Radius of Earth", "6.37 × 10⁶ m", "r = R + h"],
            ["GM of Earth (handy)", "3.98 × 10¹⁴ m³ s⁻²", "= 6.67 × 10⁻¹¹ × 5.97 × 10²⁴"],
            ["Day / year", "86 400 s / 3.16 × 10⁷ s", "period conversions"],
            ["Mass of Sun; Earth–Sun distance", "1.99 × 10³⁰ kg; 1.50 × 10¹¹ m", "planet orbit questions"],
          ]],
          ["note", "<b>Check the question gives the values</b>: in the exam the data booklet gives G, Earth/Sun data (mass, radius, distance); you do not need to memorise them but you must know where to look."],
        ],
      },
      {
        h: "Definitions 一字不漏",
        min: 2,
        blocks: [
          ["note", "<b>Newton's law of gravitation:</b> every point mass attracts every other point mass with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. (Spherical masses behave as if all their mass is at the centre.)<br><b>Gravitational field:</b> a region of space in which a mass experiences a force due to another mass.<br><b>Gravitational field strength g at a point:</b> the force per unit mass experienced by a small test mass placed at that point. g = F/m, unit N kg⁻¹ (vector, direction towards the mass).<br><b>Geostationary satellite:</b> orbits above the equator with a period of 24 h (same as Earth's rotation), in the same direction, so it stays above the same point on Earth.<br><b>Weight:</b> the gravitational force on an object, W = mg (a force, in N). <b>Mass</b> is a scalar amount of matter (kg) and does not change with place."],
          ["key", "\\(F = G\\dfrac{Mm}{r^2}\\)　　\\(g = \\dfrac{F}{m} = G\\dfrac{M}{r^2}\\)　　\\(F = mg\\)"],
          ["table", ["Property", "Gravitational field", "Electric field (D.2)"], [
            ["Force law", "F = GMm/r²", "F = kq₁q₂/r²"],
            ["Source", "mass", "charge"],
            ["Attract / repel", "attraction only", "attract or repel"],
            ["Field strength", "g = F/m (N kg⁻¹)", "E = F/q (N C⁻¹)"],
            ["Constant", "G = 6.67 × 10⁻¹¹ (weak)", "k = 8.99 × 10⁹ (strong)"],
            ["Radial field lines", "always point INTO the mass", "out of + / into −"],
          ]],
        ],
      },
      {
        h: "Field strength g · inverse square",
        min: 4,
        blocks: [
          ["key", "Outside a spherical mass: <b>g = GM/r²</b>.　Close to the surface (h ≪ R) g ≈ constant → field lines parallel and equally spaced (uniform). Far away → radial lines getting further apart (weaker)."],
          ["rhyme", "口訣", "g 同 r² 成反比，同行星 M 成正比", "Double r → g ÷ 4. Triple r → g ÷ 9. Double M → g × 2. Mass of the test object m does not appear."],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Calculate g at the surface of Earth (M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m).", [
            "g = GM/R² = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ ÷ (6.37 × 10⁶)²",
            "numerator = 3.982 × 10¹⁴；denominator = 4.058 × 10¹³",
            "g = <b>9.81 N kg⁻¹</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Mars: M = 6.4 × 10²³ kg, r = 3.4 × 10⁶ m. Calculate g at its surface.", [
            "g = GM/r² = 6.67 × 10⁻¹¹ × 6.4 × 10²³ ÷ (3.4 × 10⁶)²",
            "= 4.269 × 10¹³ ÷ 1.156 × 10¹³ = <b>3.7 N kg⁻¹</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　The ISS orbits 400 km above Earth's surface. Calculate g at that height.", [
            "r = R + h = 6.37 × 10⁶ + 4.00 × 10⁵ = 6.77 × 10⁶ m（唔係 400 km！）",
            "g = 3.982 × 10¹⁴ ÷ (6.77 × 10⁶)² = 3.982 × 10¹⁴ ÷ 4.583 × 10¹³ = <b>8.69 N kg⁻¹</b> ✅",
            "Gravity is still ≈ 89% of surface value — astronauts are weightless because they are in free fall, not because g = 0."
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Two 1000 kg masses are 2.0 m apart (centres). Calculate the force between them.", [
            "F = GMm/r² = 6.67 × 10⁻¹¹ × 1000 × 1000 ÷ 2.0² = 6.67 × 10⁻⁵ ÷ 4",
            "= <b>1.7 × 10⁻⁵ N</b> ✅（tiny — gravity is weak unless one mass is huge）"
          ]],
          ["eg", "<b>P1 MCQ · 1 mark</b>　A planet has twice Earth's mass and twice Earth's radius. Find g at its surface in terms of Earth's g (9.81).", [
            "g ∝ M/R² → factor = 2 ÷ 2² = 1/2",
            "g = 0.5 × 9.81 = <b>4.9 N kg⁻¹</b> ✅"
          ]],
          ["note", "<b>Sketch rules</b>: radial field of a sphere = straight lines pointing <b>towards centre</b> with arrows; spacing wider further away. Near surface = parallel equally spaced lines pointing down. Field strength of two equal masses cancels at the midpoint (g = 0 there) — vectors add!"],
          ["trap", ["用高度 h 當 r（漏咗加地球半徑）。", "Field strength 係 vector：答方向 “towards the centre of the mass”。", "Mass 唔變（kg）；weight 先變（N）。"]],
        ],
      },
      {
        h: "Circular orbits 軌道",
        min: 5,
        blocks: [
          ["rhyme", "口訣", "引力做向心，m 抵消，v 只靠 M 同 r", "Orbit speed and period do NOT depend on the satellite's mass. Heavier satellite, same orbit, same speed."],
          ["flow", [["① 設等式", "Gravity provides centripetal force: GMm/r² = mv²/r"], ["② 求 v", "v² = GM/r → v = √(GM/r)"], ["③ 代 v = 2πr/T", "GM/r = 4π²r²/T² → T² = (4π²/GM) r³"], ["④ 結論", "T² ∝ r³ (Kepler III) — and T² / r³ = 4π²/GM is constant for all bodies orbiting the same mass M"]]],
          ["key", "\\(v = \\sqrt{\\dfrac{GM}{r}}\\)　　\\(T = \\dfrac{2\\pi r}{v}\\)　　\\(T^2 = \\dfrac{4\\pi^2}{GM}\\,r^3\\)　(M = mass of the body being orbited)"],
          ["eg", "<b>P2 · Show that · 3 marks</b>　Show that the radius of a geostationary orbit is about 4.2 × 10⁷ m (GM of Earth = 3.98 × 10¹⁴ m³ s⁻²).", [
            "T = 24 h = 86 400 s",
            "r³ = GMT²/(4π²) = 3.98 × 10¹⁴ × (86 400)² ÷ 39.48 = 3.98 × 10¹⁴ × 7.465 × 10⁹ ÷ 39.48",
            "r³ = 7.53 × 10²² → r = <b>4.22 × 10⁷ m</b> ✅（≈ 3.6 × 10⁷ m above the surface）"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　Calculate the orbital speed of the ISS (r = 6.77 × 10⁶ m) and its period in minutes.", [
            "v = √(GM/r) = √(3.98 × 10¹⁴ ÷ 6.77 × 10⁶) = √(5.88 × 10⁷) = <b>7.67 × 10³ m s⁻¹</b>",
            "T = 2πr/v = 2π × 6.77 × 10⁶ ÷ 7.67 × 10³ = 5.55 × 10³ s = <b>92.5 min</b> ✅"
          ]],
          ["eg", "<b>P2 · Determine · 2 marks</b>　Speed of a geostationary satellite (r = 4.22 × 10⁷ m).", [
            "v = √(3.98 × 10¹⁴ ÷ 4.22 × 10⁷) = √(9.43 × 10⁶) = <b>3.07 × 10³ m s⁻¹</b>",
            "Check: 2πr/T = 2π × 4.22 × 10⁷ ÷ 86 400 = 3.07 × 10³ m s⁻¹ ✅"
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b>　Use Earth's orbit (r = 1.50 × 10¹¹ m, T = 3.16 × 10⁷ s) to find the mass of the Sun.", [
            "M = 4π²r³ ÷ (G T²)",
            "r³ = 3.375 × 10³³；4π² r³ = 1.332 × 10³⁵",
            "G T² = 6.67 × 10⁻¹¹ × (3.16 × 10⁷)² = 6.67 × 10⁻¹¹ × 9.99 × 10¹⁴ = 6.66 × 10⁴",
            "M = 1.332 × 10³⁵ ÷ 6.66 × 10⁴ = <b>2.0 × 10³⁰ kg</b> ✅"
          ]],
          ["eg", "<b>P1 MCQ · 1 mark</b>　A planet orbits a star at 4 times the radius of another planet round the same star. Find the ratio of periods.", [
            "T² ∝ r³ → T ∝ r^(3/2)",
            "T₂/T₁ = 4^(3/2) = 8 → <b>period is 8 times longer</b> ✅"
          ]],
          ["table", ["If orbit radius r ↑ (×4)", "Change"], [
            ["Orbital speed v ∝ r^(−1/2)", "÷ 2"],
            ["Period T ∝ r^(3/2)", "× 8"],
            ["Gravitational force on satellite ∝ r⁻²", "÷ 16"],
            ["Centripetal acceleration = g at that r", "÷ 16"],
          ]],
        ],
      },
      {
        h: "Kepler's laws + weightlessness",
        min: 2.5,
        blocks: [
          ["table", ["Law", "Statement (write this)", "Meaning"], [
            ["1st", "The orbit of each planet is an ellipse with the Sun at one focus.", "not a perfect circle (circles are approximations)"],
            ["2nd", "The line joining a planet to the Sun sweeps out equal areas in equal times.", "faster near Sun (perihelion), slower far away (aphelion)"],
            ["3rd", "The square of the period of a planet is proportional to the cube of its mean orbital radius: T² ∝ r³.", "T²/r³ = constant for planets round the same star"],
          ]],
          ["note", "<b>Why faster near the Sun?</b> Gravity does positive work as the planet moves closer, so kinetic energy increases (speed up); the line to the Sun is shorter so it must move faster to sweep the same area."],
          ["note", "<b>Weightless astronaut (2-mark answer)</b>: The astronaut and the spacecraft are both in free fall with the same acceleration (the local g) [1]; so there is no contact force between them / the astronaut feels no normal reaction force [1]. Gravity has NOT disappeared — it provides the centripetal force."],
          ["trap", ["Kepler III 要寫 “mean radius”，同埋只係喺同一個 central body 周圍先成立。", "Never say astronauts are weightless because “there is no gravity in space”."]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["State Newton's law of gravitation","F = GMm/r² between point masses, attractive."],["Define g","Gravitational field strength = force per unit mass; g = GM/r²."],["Show that","T²∝r³ from F = centripetal; mass of satellite cancels."],["Explain","Weightlessness is free fall, not absence of gravity."],["Calculate","Use r from centre, not altitude; orbital v = √(GM/r)."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Orbit","GMm/r² = mv²/r [1]; v = √(GM/r) [1]"],["Kepler 3","T² = 4π²r³/GM [1]"],["Field strength","g at height h: r = R + h"],["Potential","V = −GM/r; energy of a mass = mV"],["Escape/binding","energy to reach infinity"]]],
          ["trap", ["Using altitude as r","Saying satellite astronauts have no gravity","Sign of gravitational potential (negative)"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: F = GMm/r², g = GM/r², V = −GM/r, v = √(GM/r), T²/r³ = 4π²/GM. In derivations, the cancellation of m is a mark: write it."],
        ],
      },
      {
        h: "Long question 拆解 + 失分位",
        min: 4,
        blocks: [
          ["flow", [["Step 1", "Underline every given; convert to SI (km → m, h → s)."], ["Step 2", "What is r? Add radius + height. Draw the orbit, label r."], ["Step 3", "Pick: g = GM/r² (field) or GMm/r² = mv²/r (orbit)."], ["Step 4", "Write equation, rearrange, substitute with units, answer with s.f. + unit."], ["Step 5", "Link back: “so a heavier satellite would have the same speed”."]]],
          ["eg", "<b>P2 · long question · 6 marks</b>　A satellite of mass 500 kg orbits Earth at height 3.6 × 10⁶ m. Determine (a) its orbital speed, (b) the gravitational force on it, (c) its period. [6]", [
            "r = 6.37 × 10⁶ + 3.6 × 10⁶ = 9.97 × 10⁶ m [1]",
            "(a) v = √(GM/r) = √(3.98 × 10¹⁴ ÷ 9.97 × 10⁶) = √(3.99 × 10⁷) = <b>6.3 × 10³ m s⁻¹</b> [2]",
            "(b) F = mv²/r = 500 × 3.99 × 10⁷ ÷ 9.97 × 10⁶ = <b>2.0 × 10³ N</b>（or GMm/r² = 3.98 × 10¹⁴ × 500 ÷ (9.97 × 10⁶)²= 2.0 × 10³ N）[1]",
            "(c) T = 2πr/v = 2π × 9.97 × 10⁶ ÷ 6.32 × 10³ = <b>9.9 × 10³ s (≈ 2.8 h)</b> [2]"
          ]],
          ["trap", [
            "Forgetting to add Earth's radius to height (most common slip).",
            "km 唔轉 m：400 km = 4.00 × 10⁵ m。",
            "Period 用 days / hours 代入 → T 要轉 s。",
            "Show-that: 寫晒 equate → rearrange → substitute → answer 多一個 s.f.。",
            "Saying “gravity provides a centrifugal force”：只有 centripetal（向內）。",
            "Think satellite mass affects orbital speed / period：m 抵消。",
            "Kepler III 用錯 proportional：T² ∝ r³，唔係 T ∝ r³。",
            "g 畫成指向外或者冇箭咀。",
            "Mix up g (field strength) and G (constant).",
            "Using g = 9.81 at all altitudes.",
            "Weightless = “no gravity”.",
            "Elliptical orbit: calculating with v = √(GM/r) (only circular)."
          ]],
          ["check", ["寫到 Newton's law 同 g = F/m 嘅 word-for-word definition", "識 convert r = R + h，km/h → SI", "識 derive T² = 4π²r³/GM 每一步", "識解釋 weightless 同 Kepler II 近日行快", "識答 “mass of satellite does not matter”", "識算 g at height 同 orbital speed/period"]],
        ],
      },
    ],
    summary: [
      "F = GMm/r²，r 由中心度起",
      "g = F/m = GM/r²，加倍距離四分一",
      "引力做向心，m 抵消，v = √(GM/r)",
      "T² = 4π²r³/GM → T² ∝ r³",
      "越遠越慢越長命",
      "Kepler II：近日行快 (equal areas)",
      "Geostationary：T = 24 h，赤道上空 r = 4.2 × 10⁷ m",
      "失重 = 自由落體，唔係冇 gravity"
    ],
    practice: [
      { q: "The distance between the centres of two spherical masses is tripled. The gravitational force between them becomes:", o: ["A. 3 times larger", "B. 9 times larger", "C. 1/3 of the original", "D. 1/9 of the original"], m: 1, a: "<b>D</b>. F ∝ 1/r² → (1/3)² = 1/9." },
      { q: "A planet has twice the mass and twice the radius of Earth. The gravitational field strength at its surface is about:", o: ["A. 2.5 N kg⁻¹", "B. 4.9 N kg⁻¹", "C. 9.8 N kg⁻¹", "D. 20 N kg⁻¹"], m: 1, a: "<b>B</b>. g ∝ M/R² = 2/4 = 1/2 → 4.9 N kg⁻¹." },
      { q: "A satellite moves in a circular orbit. The orbit radius is increased to 4 times the original radius. The new orbital speed is:", o: ["A. 4 times larger", "B. 2 times larger", "C. 1/2 of original", "D. 1/4 of original"], m: 1, a: "<b>C</b>. v ∝ r^(−1/2) → 4^(−1/2) = 1/2." },
      { q: "Two satellites of mass m and 2m orbit Earth in the same circular orbit. Compare their orbital speeds.", o: ["A. the 2m satellite is faster", "B. the m satellite is faster", "C. equal", "D. depends on the shape of the satellite"], m: 1, a: "<b>C</b>. v = √(GM/r) does not contain the satellite's mass." },
      { q: "Define gravitational field strength at a point, and state its unit.", m: 2, a: "The force per unit mass [1] acting on a small test mass placed at that point [1]. (Unit N kg⁻¹.)" },
      { q: "Calculate the gravitational field strength at a height of 400 km above Earth's surface. (M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m)", m: 3, a: "r = 6.37 × 10⁶ + 4.00 × 10⁵ = 6.77 × 10⁶ m [1]; g = GM/r² [1]; = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ ÷ (6.77 × 10⁶)² = 8.69 N kg⁻¹ [1]." },
      { q: "A communications satellite is geostationary. (a) State two features of its orbit. (b) Show that its orbital radius is about 4.2 × 10⁷ m. GM(Earth) = 3.98 × 10¹⁴ m³ s⁻².", m: 5, a: "(a) Period 24 h [1]; orbits above the equator in the same direction as Earth's rotation [1]. (b) GMm/r² = m(4π²/T²)r → r³ = GMT²/4π² [1]; T = 86 400 s, r³ = 3.98 × 10¹⁴ × (86 400)² ÷ 4π² [1]; r = 4.2 × 10⁷ m (4.22 × 10⁷, at least 2 s.f.) [1]." },
      { q: "Derive Kepler's third law T² ∝ r³ for a satellite in circular orbit round a planet of mass M.", m: 3, a: "Gravity provides centripetal force: GMm/r² = mv²/r [1]; v = 2πr/T → GM/r² = 4π²r/T² [1]; T² = (4π²/GM) r³, and 4π²/GM is constant so T² ∝ r³ [1]." },
      { q: "The orbital speed of the ISS is 7.67 × 10³ m s⁻¹ at radius 6.77 × 10⁶ m. Calculate its period in minutes.", m: 2, a: "T = 2πr/v [1] = 2π × 6.77 × 10⁶ ÷ 7.67 × 10³ = 5.55 × 10³ s = 92.5 min [1]." },
      { q: "Astronauts inside the ISS float. Explain why they appear weightless although g is 8.7 N kg⁻¹ at that height.", m: 2, a: "The astronauts and the station are in free fall with the same acceleration [1]; there is no contact (normal) force between them and the floor, so they feel no weight sensation [1]." },
      { q: "Earth orbits the Sun with orbital radius 1.50 × 10¹¹ m and period 3.16 × 10⁷ s. Determine the mass of the Sun.", m: 3, a: "M = 4π²r³/(GT²) [1]; = 39.5 × (1.50 × 10¹¹)³ ÷ [6.67 × 10⁻¹¹ × (3.16 × 10⁷)²] [1]; = 2.0 × 10³⁰ kg [1]." },
      { q: "State Kepler's second law and use it to explain why a comet moves fastest when closest to the Sun.", m: 3, a: "The line joining a planet (comet) to the Sun sweeps out equal areas in equal times [1]; near the Sun the line is shorter [1], so the comet must move faster to sweep the same area [1]." }
    ],
  },

  "phys-17": {
    title: "Electric & Magnetic Fields · Coulomb · Field Patterns",
    intro: "D.2 = 一條 Coulomb 式、兩個 E 式、一堆 field pattern 同右手規則。圖畫得啱就有分。",
    parts: [
      {
        h: "Master idea 同 method chain",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "電荷產生場，場對電荷出力", "A charge creates an electric field; any other charge in that field feels a force F = qE. Electric fields start on + and end on −. Magnetic fields come from moving charges (currents) and act on moving charges."],
          ["flow", [["① 搵 source", "Which charge(s) make the field? Point charge → radial. Two plates → uniform."], ["② 揀式", "Two point charges → F = kq₁q₂/r². Field at a point → E = F/q. Plates → E = V/d."], ["③ SI units", "μC × 10⁻⁶, nC × 10⁻⁹, mm × 10⁻³ before substituting."], ["④ 方向", "Force on + charge along E; on − charge opposite. Draw an arrow."]]],
          ["note", "常考 note：(1) Coulomb calculation with μC conversion, (2) field-line sketch (arrows, no crossing, uniform in plates), (3) Millikan qE = mg → q = ne, (4) describe magnetic field of wire / solenoid. 繪圖題 + 簡短 explain 係 perennial favourites。"],
          ["note", "<b>If the question says…</b>: “force between two charges” → Coulomb.　“field strength / force per unit charge” → E = F/q.　“parallel plates, p.d. V, separation d” → E = V/d.　“oil drop stationary” → qE = mg.　“sketch the field” → arrows, no crossing, density = strength.　“current-carrying wire/solenoid field” → right-hand grip rule."],
        ],
      },
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["grid", [
            ["D.2", "同性相拒異性吸", "Like charges repel, unlike attract"],
            ["D.2", "距離三倍，力九分一", "F ∝ 1/r²"],
            ["D.2", "μC 乘 10⁻⁶，r 要平方", "Convert units; square r"],
            ["D.2", "E = F/q，每庫侖受幾多力", "N C⁻¹ = V m⁻¹"],
            ["D.2", "正出負入，線唔交叉", "Field line rules"],
            ["D.2", "平行板平行線，E = V/d", "Uniform field; d in metres"],
            ["D.2", "電荷守恆，e 嘅整數倍", "Quantised: q = ne"],
            ["D.2", "起電就係電子轉移", "Friction, contact, induction"],
            ["D.2", "右手握電線，拇指電流四指場", "Straight wire: concentric circles"],
            ["D.2", "Solenoid 入面均勻，外面似磁鐵", "Field of a solenoid"],
          ]],
          ["table", ["Constant / fact", "Value", "Use it when…"], [
            ["Elementary charge e", "1.60 × 10⁻¹⁹ C", "charge quantisation; electron/proton"],
            ["Coulomb constant k", "8.99 × 10⁹ N m² C⁻²", "k = 1/(4πε₀)"],
            ["Permittivity ε₀", "8.85 × 10⁻¹² C² N⁻¹ m⁻²", "if question uses ε₀"],
            ["Electron mass m<sub>e</sub>", "9.11 × 10⁻³¹ kg", "force → acceleration"],
            ["Proton mass m<sub>p</sub>", "1.67 × 10⁻²⁷ kg", "ditto"],
            ["Unit equivalents", "1 N C⁻¹ = 1 V m⁻¹", "E units"],
            ["Magnetic field strength B", "tesla (T) = N A⁻¹ m⁻¹", "D.3"],
          ]],
        ],
      },
      {
        h: "Definitions 一字不漏",
        min: 2,
        blocks: [
          ["note", "<b>Coulomb's law:</b> the electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.<br><b>Electric field:</b> a region of space in which a charge experiences a force.<br><b>Electric field strength E at a point:</b> the force per unit positive charge experienced by a small positive test charge placed at that point. E = F/q (N C⁻¹); vector, direction = direction of force on a positive charge.<br><b>Charge conservation:</b> the total charge of an isolated system stays constant.<br><b>Quantisation of charge:</b> charge exists only in integer multiples of the elementary charge e = 1.60 × 10⁻¹⁹ C.<br><b>Magnetic field:</b> a region of space in which a magnet, a current-carrying wire or a moving charge experiences a force.<br><b>Field line:</b> the path a free positive test charge (or an isolated north pole) would follow; the direction of the force on it."],
          ["key", "\\(F = k\\dfrac{q_1q_2}{r^2}\\)，\\(k = \\dfrac{1}{4\\pi\\varepsilon_0}\\)　　\\(E = \\dfrac{F}{q}\\)　　Parallel plates: \\(E = \\dfrac{V}{d}\\)　　Point charge: \\(E = k\\dfrac{Q}{r^2}\\)"],
        ],
      },
      {
        h: "Coulomb · E · plates 計算",
        min: 5,
        blocks: [
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Two point charges of +5.0 μC are 3.0 m apart. Calculate the force between them.", [
            "q = 5.0 × 10⁻⁶ C each",
            "F = kq₁q₂/r² = 8.99 × 10⁹ × (5.0 × 10⁻⁶)² ÷ 3.0² = 8.99 × 10⁹ × 2.5 × 10⁻¹¹ ÷ 9",
            "= 0.2248 ÷ 9 = <b>0.025 N (repulsive)</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　In a hydrogen atom the electron is 5.3 × 10⁻¹¹ m from the proton. Calculate the electric force.", [
            "F = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² ÷ (5.3 × 10⁻¹¹)²",
            "= 8.99 × 10⁹ × 2.56 × 10⁻³⁸ ÷ 2.81 × 10⁻²¹ = <b>8.2 × 10⁻⁸ N (attractive)</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Calculate the electric field strength 0.10 m from a point charge of +2.0 nC.", [
            "E = kQ/r² = 8.99 × 10⁹ × 2.0 × 10⁻⁹ ÷ 0.10²",
            "= 17.98 ÷ 0.01 = <b>1.8 × 10³ N C⁻¹, directed radially away from the charge</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　Plates 5.0 mm apart have a p.d. of 200 V. Find E and the force on an electron between them.", [
            "d = 5.0 × 10⁻³ m；E = V/d = 200 ÷ 5.0 × 10⁻³ = <b>4.0 × 10⁴ V m⁻¹</b>",
            "F = eE = 1.60 × 10⁻¹⁹ × 4.0 × 10⁴ = <b>6.4 × 10⁻¹⁵ N</b>（towards the + plate）",
            "a = F/m = 6.4 × 10⁻¹⁵ ÷ 9.11 × 10⁻³¹ = 7.0 × 10¹⁵ m s⁻² （gravity negligible）✅"
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b>　Charges +1.0 μC and +4.0 μC are 0.60 m apart. Find where the net electric field is zero.", [
            "Between them (fields opposite). Let x = distance from the +1.0 μC charge.",
            "kQ₁/x² = kQ₂/(0.60 − x)² → 1/x² = 4/(0.60 − x)²",
            "Square-root: 1/x = 2/(0.60 − x) → 0.60 − x = 2x → x = <b>0.20 m from the smaller charge</b> ✅"
          ]],
          ["eg", "<b>P1 MCQ / P2 · Calculate · 1-2 marks</b>　A rod carries a charge of −3.2 × 10⁻⁹ C. How many extra electrons does it have?", [
            "n = Q/e = 3.2 × 10⁻⁹ ÷ 1.60 × 10⁻¹⁹ = <b>2.0 × 10¹⁰ electrons</b> ✅"
          ]],
          ["table", ["Distance change", "Coulomb force F, point-charge E"], [
            ["r × 2", "÷ 4"],
            ["r × 3", "÷ 9"],
            ["r ÷ 2", "× 4"],
            ["One charge doubled", "F × 2"],
            ["Both charges doubled", "F × 4"],
          ]],
          ["trap", ["μC、nC 冇轉 C；mm 冇轉 m。", "r 唔使平方 / 平方咗但漏咗 k。", "Force between charges equal and opposite on both (Newton III), even if charges differ.", "E 方向：正電荷受力方向；負電荷受力同 E 相反。"]],
        ],
      },
      {
        h: "Charge · Millikan · charging",
        min: 3,
        blocks: [
          ["rhyme", "口訣", "電子轉移起電，電荷守恆，e 嘅整數倍", "Only electrons move (protons are fixed in nuclei). A body that gains electrons becomes negative; one that loses electrons becomes positive. Total charge is conserved."],
          ["table", ["Method", "How", "Result"], [
            ["Friction", "rub two insulators; electrons transferred from one to other", "equal and opposite charges"],
            ["Contact (conduction)", "touch a charged body to a conductor; charge shares", "same sign of charge on both"],
            ["Induction", "bring charged body near an isolated conductor, earth it briefly, remove earth then the charged body", "opposite sign of charge on the conductor"],
          ]],
          ["eg", "<b>P2 · Determine · 3 marks</b>　Millikan: a drop of mass 4.89 × 10⁻¹⁵ kg is held stationary between plates 5.0 mm apart with p.d. 500 V. Find its charge in terms of e.", [
            "E = V/d = 500 ÷ 5.0 × 10⁻³ = 1.0 × 10⁵ V m⁻¹",
            "Stationary → qE = mg → q = 4.89 × 10⁻¹⁵ × 9.81 ÷ 1.0 × 10⁵ = 4.8 × 10⁻¹⁹ C",
            "q/e = 4.8 × 10⁻¹⁹ ÷ 1.60 × 10⁻¹⁹ = <b>3</b> → charge = 3e ✅ (whole number → quantised)"
          ]],
          ["note", "<b>Millikan's conclusion (write it)</b>: measured charges on many drops were always whole-number multiples of 1.6 × 10⁻¹⁹ C → charge is quantised, e is the smallest unit of free charge. Since the drop is stationary the electric force is upward, balancing weight, so the drop must be negatively charged if the top plate is positive."],
        ],
      },
      {
        h: "Electric field patterns",
        min: 2.5,
        blocks: [
          ["table", ["Arrangement", "Field lines", "記法"], [
            ["Isolated +", "radial, straight lines pointing outwards", "正出"],
            ["Isolated −", "radial, straight lines pointing inwards", "負入"],
            ["+ and − (dipole)", "curves from + to −", "線唔交叉"],
            ["+ and + (same)", "lines push apart; neutral point midway (E = 0)", "同號互相頂開"],
            ["Parallel plates", "uniform, parallel, equally spaced from + plate to − plate; curve outward at edges", "E = V/d"],
            ["Charged sphere", "like a point charge outside the sphere", "treat as point"],
          ]],
          ["note", "<b>Marks for a field sketch</b>: (1) arrows pointing out of + / into −, (2) lines never cross, (3) lines perpendicular to a conducting surface, (4) line density shows strength (closer together = stronger), (5) plates: parallel, equal spacing in the middle."],
          ["trap", ["Field lines 相交；冇箭咀。", "Plates 中間線唔平行或者間距唔等。", "Lines 唔垂直於 conductor surface。"]],
        ],
      },
      {
        h: "Magnetic field patterns",
        min: 3,
        blocks: [
          ["table", ["Source", "Field", "方向規則"], [
            ["Straight wire", "concentric circles round the wire, getting further apart as you move away (weaker)", "right-hand grip: thumb = current, fingers = field direction"],
            ["Circular loop", "like a short bar magnet; strongest through the centre", "grip rule at each point"],
            ["Solenoid", "uniform and strong inside (parallel, equally spaced lines); outside looks like a bar magnet", "fingers curl with current → thumb points to N end"],
            ["Bar magnet", "from N out, round to S, closed loops through the magnet", "N 出 S 入"],
          ]],
          ["rhyme", "口訣", "右手握電線，拇指電流四指場；Solenoid 四指電流拇指 N", "Currents out of the page shown by a dot (•); into the page by a cross (×). A stronger field = more turns, bigger current, or an iron core."],
          ["eg", "<b>P2 · Describe · 2 marks</b>　A vertical wire carries a current upwards. Describe the field at a point to the east of the wire (viewed from above, north up).", [
            "Right-hand grip: thumb up, fingers curl anticlockwise when viewed from above.",
            "At the east side the fingers point towards the <b>north</b>. ✅"
          ]],
          ["note", "<b>Compare field types</b>: gravitational — only attracts, from mass; electric — attracts/repels, from charge, field lines start/end on charges; magnetic — field lines are continuous closed loops (no isolated poles), act only on moving charges/currents."],
          ["trap", ["Magnetic field lines 要閉合，唔會 start/end。", "Solenoid 裏面線唔平行 / 唔等距。", "Magnetic field 對靜止電荷冇力。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define E","Force per unit positive test charge."],["Sketch field lines","Direction (+ to −), density = strength, never cross, ⟂ to charged surface."],["Calculate","F = kq₁q₂/r², E = kQ/r², uniform E = V/d."],["Compare","Gravity attractive only; electric attractive or repulsive; both ∝ 1/r²."],["Determine direction","Right-hand rules for magnetic field of wire/solenoid."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Coulomb","F = kQq/r²; signs give direction"],["Two charges","vector sum of fields at a point"],["Parallel plates","uniform field, E = V/d, equipotential lines"],["Potential","V = kQ/r; work = qΔV"],["Magnetic field","dot / cross notation; solenoid like bar magnet"]]],
          ["trap", ["Field arrows pointing into positive charge","Distances not squared or not in metres","Field lines of different charges crossing"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: F = kq₁q₂/r², k = 8.99 × 10⁹ N m² C⁻², E = F/q, E = V/d, V = kQ/r. Draw vector arrows before adding fields."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 3,
        blocks: [
          ["trap", [
            "μC / nC / mm 單位冇轉 SI。",
            "Coulomb 式漏平方 r。",
            "當 force 係 scalar：要答吸引 / 排斥。",
            "電子方向反轉：F 同 E 相反。",
            "Field sketch 冇箭咀 / 線相交。",
            "Parallel plates edge 要彎；中間要直。",
            "Millikan 答案要寫 “whole-number multiples of e → quantised”。",
            "E 單位：N C⁻¹ = V m⁻¹。",
            "Grip rule 用咗左手。",
            "Solenoid 外面當成冇場（外面似 bar magnet）。",
            "Gravity vs electric：gravity 只吸。",
            "Charging by induction 忘記要 earth。"
          ]],
          ["check", ["背熟 Coulomb、E definition、charge quantisation", "識 sketch 6 種 electric patterns", "識 solenoid / wire 方向", "識做 Millikan qE = mg", "識搵 field = 0 點", "識解釋三種起電方法"]],
        ],
      },
    ],
    summary: [
      "同性相拒異性吸，F = kq₁q₂/r²",
      "r × 3 → F ÷ 9；r 要平方",
      "E = F/q = V/d (N C⁻¹ = V m⁻¹)",
      "正出負入，線唔交叉",
      "平行板 uniform，邊緣彎",
      "電荷守恆，q = ne (Millikan)",
      "起電 = 電子轉移",
      "右手握：拇指電流，四指場；Solenoid 內 uniform"
    ],
    practice: [
      { q: "The separation of two point charges is tripled. The force between them changes by a factor of:", o: ["A. 3", "B. 9", "C. 1/3", "D. 1/9"], m: 1, a: "<b>D</b>. F ∝ 1/r² → 1/9." },
      { q: "Which is a correct unit for electric field strength?", o: ["A. N C", "B. J C⁻¹", "C. V m⁻¹", "D. C V"], m: 1, a: "<b>C</b>. E = V/d → V m⁻¹ (also N C⁻¹). J C⁻¹ is the volt (p.d.), not field strength." },
      { q: "Two charges +Q and +4Q repel each other. The magnitudes of the forces on them are:", o: ["A. F on Q and 4F on 4Q", "B. 4F on Q and F on 4Q", "C. equal", "D. zero"], m: 1, a: "<b>C</b>. Newton's third law: equal magnitude, opposite direction." },
      { q: "Calculate the force on an electron in a uniform electric field of 1.2 × 10⁴ V m⁻¹.", m: 1, a: "F = eE = 1.60 × 10⁻¹⁹ × 1.2 × 10⁴ = 1.9 × 10⁻¹⁵ N [1]." },
      { q: "Two charges of +5.0 μC are 3.0 m apart. Calculate the force between them.", m: 2, a: "F = kq₁q₂/r² [1] = 8.99 × 10⁹ × (5.0 × 10⁻⁶)² ÷ 3.0² = 0.025 N [1]." },
      { q: "Define electric field strength.", m: 1, a: "The force per unit positive charge [1] (on a small positive test charge placed at that point)." },
      { q: "Calculate the field strength at 0.10 m from a +2.0 nC point charge and state its direction.", m: 2, a: "E = kQ/r² = 8.99 × 10⁹ × 2.0 × 10⁻⁹ ÷ 0.10² = 1.8 × 10³ N C⁻¹ [1]; radially outwards (away from the charge) [1]." },
      { q: "An oil drop of mass 4.89 × 10⁻¹⁵ kg is held stationary between plates 5.0 mm apart with a p.d. of 500 V. Determine the charge on the drop in terms of e.", m: 3, a: "E = 500/5.0 × 10⁻³ = 1.0 × 10⁵ V m⁻¹ [1]; q = mg/E = 4.8 × 10⁻¹⁹ C [1]; = 3e [1]." },
      { q: "Explain how Millikan's experiment supports the idea that charge is quantised.", m: 2, a: "Charges found on many oil drops were all whole-number multiples of the same value [1], 1.6 × 10⁻¹⁹ C, so charge exists in discrete units of e [1]." },
      { q: "Sketch the electric field between two oppositely charged parallel plates and describe it.", m: 3, a: "Parallel, equally spaced lines (uniform) between plates [1]; arrows from + plate to − plate [1]; lines curve outward at the edges (fringing) [1]." },
      { q: "Charges +1.0 μC and +4.0 μC are 0.60 m apart. Determine the point on the line between them where the resultant electric field is zero.", m: 3, a: "Fields equal and opposite: k(1.0)/x² = k(4.0)/(0.60 − x)² [1]; 0.60 − x = 2x [1]; x = 0.20 m from the +1.0 μC charge [1]." },
      { q: "Describe the magnetic field around a long straight wire carrying a current and how its direction is found.", m: 3, a: "Concentric circles centred on the wire [1]; field weaker (lines further apart) as distance increases [1]; right-hand grip rule: thumb along conventional current, curled fingers give field direction [1]." },
      { q: "Describe the magnetic field inside and outside a long solenoid carrying current.", m: 2, a: "Inside: uniform / strong, parallel equally spaced lines [1]; outside: weak field resembling that of a bar magnet, lines forming closed loops [1]." }
    ],
  },
});
IB.addFast({
  "phys-18": {
    title: "Charges in E & B Fields · F = BIL · Parallel Wires",
    intro: "D.3 核心：電場 = 拋物線，磁場 = 圓周。見到 charge 入場，先問「E 定 B？」再揀公式。",
    parts: [
      {
        h: "Master idea 同 method chain",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "E 場推直線拋物線，B 場打橫兜圈", "Electric force qE is along the field (changes speed). Magnetic force qvB is perpendicular to velocity (changes direction only, speed constant, no work)."],
          ["flow", [["① 邊種場？", "E only → qE. B only → qvB. Both → compare qE and qvB."], ["② 粒子速度同場方向", "Parallel to E: straight line. ⊥ to E: parabola. ⊥ to B: circle. Parallel to B: no force."], ["③ 揀式", "Speed from p.d.: qV = ½mv². Radius: r = mv/(qB). Wire: F = BIL sin θ."], ["④ 方向", "Fleming's left-hand rule (conventional current; reverse for electron)."]]],
          ["note", "常考 note：(1) r = mv/qB with units, (2) “explain why circular at constant speed” (3 marks: ⊥ force, no work, centripetal), (3) direction by Fleming's rule (name the rule!), (4) parallel wires F/L attract/repel, (5) velocity selector v = E/B。"],
          ["note", "<b>If the question says…</b>: “accelerated through a p.d. V” → qV = ½mv².　“moves in a circle in B” → qvB = mv²/r.　“passes undeflected” (crossed E and B) → qE = qvB, v = E/B.　“force on wire in magnetic field” → F = BIL sin θ.　“two parallel wires” → F/L = μ₀I₁I₂/(2πr).　“direction” → name the rule."],
        ],
      },
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["grid", [
            ["D.3", "電場似地心，粒子拋物線", "Uniform E ⊥ velocity → parabolic path"],
            ["D.3", "qV = ½mv²，1 eV = 1.60 × 10⁻¹⁹ J", "Acceleration through p.d."],
            ["D.3", "磁力打橫推，兜圈唔加速", "F ⊥ v → circular, constant speed, no work"],
            ["D.3", "r = mv/qB：重快大圈，電多場強細圈", "Radius dependence"],
            ["D.3", "週期同速度無關", "T = 2πm/qB"],
            ["D.3", "左手：場、電流、力 = 食、中、拇", "Fleming: First = Field, seCond = Current, thuMb = Motion/force"],
            ["D.3", "電子要反轉方向", "Negative charge: force opposite to +"],
            ["D.3", "平行 B 冇力", "sin 0° = 0"],
            ["D.3", "同向電流相吸，反向相拒", "Parallel wires"],
            ["D.3", "qE = qvB → v = E/B", "Velocity selector"],
          ]],
          ["table", ["Constant / formula", "Value", "Use it when…"], [
            ["Elementary charge e", "1.60 × 10⁻¹⁹ C", "all charge-in-field questions"],
            ["Electron mass", "9.11 × 10⁻³¹ kg", "electron questions"],
            ["Proton mass", "1.67 × 10⁻²⁷ kg", "proton questions"],
            ["Permeability μ₀", "4π × 10⁻⁷ T m A⁻¹", "parallel wires"],
            ["F = qvB sin θ", "θ = angle between v and B", "charge in B"],
            ["F = BIL sin θ", "θ = angle between I and B", "wire in B"],
            ["F/L = μ₀I₁I₂/(2πr)", "per metre of wire", "parallel wires"],
            ["Tesla", "1 T = 1 N A⁻¹ m⁻¹", "units of B"],
          ]],
        ],
      },
      {
        h: "Definitions 一字不漏",
        min: 1.5,
        blocks: [
          ["note", "<b>Magnetic field strength (flux density) B:</b> the force per unit current per unit length on a conductor perpendicular to the field. Unit tesla (T = N A⁻¹ m⁻¹).<br><b>Electron-volt:</b> the energy gained by an electron accelerated through a potential difference of 1 V; 1 eV = 1.60 × 10⁻¹⁹ J.<br><b>Ampere (SI definition, via parallel wires):</b> the constant current which, in two straight parallel infinitely long conductors of negligible cross-section placed 1 m apart in a vacuum, produces a force of 2 × 10⁻⁷ N per metre of length between them.<br><b>Velocity selector:</b> crossed E and B fields arranged so that only particles with speed v = E/B pass through undeflected."],
          ["key", "\\(F = qE\\)　　\\(qV = \\tfrac12 mv^2\\)　　\\(F = qvB\\sin\\theta\\)　　\\(r = \\dfrac{mv}{qB}\\)　　\\(F = BIL\\sin\\theta\\)　　\\(\\dfrac{F}{L} = \\dfrac{\\mu_0 I_1 I_2}{2\\pi r}\\)"],
        ],
      },
      {
        h: "Charge in electric field",
        min: 3,
        blocks: [
          ["eg", "<b>P2 · Calculate · 3 marks</b>　An electron is accelerated from rest through 200 V. Find its kinetic energy and speed.", [
            "KE = qV = 1.60 × 10⁻¹⁹ × 200 = <b>3.2 × 10⁻¹⁷ J</b> (= 200 eV)",
            "v = √(2KE/m) = √(2 × 3.2 × 10⁻¹⁷ ÷ 9.11 × 10⁻³¹) = √(7.03 × 10¹³) = <b>8.4 × 10⁶ m s⁻¹</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 4 marks</b>　An electron (v = 2.0 × 10⁷ m s⁻¹) enters, perpendicular to the field, a region of uniform E = 1.0 × 10⁴ V m⁻¹, length 0.040 m. Find the deflection on leaving. Ignore gravity.", [
            "a = eE/m = 1.60 × 10⁻¹⁹ × 1.0 × 10⁴ ÷ 9.11 × 10⁻³¹ = 1.76 × 10¹⁵ m s⁻²",
            "Time in field t = 0.040 ÷ 2.0 × 10⁷ = 2.0 × 10⁻⁹ s",
            "Horizontal speed is constant. Vertical: y = ½at² = 0.5 × 1.76 × 10¹⁵ × (2.0 × 10⁻⁹)² = <b>3.5 × 10⁻³ m</b>",
            "Path is a parabola, curving towards the + plate ✅"
          ]],
          ["note", "<b>Why a parabola?</b> Force is constant and perpendicular to initial velocity (same as a projectile): uniform velocity along the plates and uniform acceleration across them. Particle entering <b>parallel</b> to E moves in a straight line, speeding up or slowing down."],
          ["trap", ["電子受力方向同 E 相反（向 + 板）。", "Gravity 要 ignore 因為 eE ≫ mg（可以比較數量級）。", "Horizontal speed 唔變，所以 t = L/v。"]],
        ],
      },
      {
        h: "Charge in magnetic field",
        min: 5,
        blocks: [
          ["key", "Magnetic force ⊥ velocity → centripetal force: \\(qvB = \\dfrac{mv^2}{r}\\) → \\(r = \\dfrac{mv}{qB}\\) → period \\(T = \\dfrac{2\\pi r}{v} = \\dfrac{2\\pi m}{qB}\\) (independent of v)"],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　A proton (m = 1.67 × 10⁻²⁷ kg) moving at 3.0 × 10⁵ m s⁻¹ enters a 0.20 T field at right angles. Find r and T.", [
            "r = mv/qB = 1.67 × 10⁻²⁷ × 3.0 × 10⁵ ÷ (1.60 × 10⁻¹⁹ × 0.20) = 5.01 × 10⁻²² ÷ 3.2 × 10⁻²⁰ = <b>1.6 × 10⁻² m</b>",
            "T = 2πm/qB = 2π × 1.67 × 10⁻²⁷ ÷ 3.2 × 10⁻²⁰ = <b>3.3 × 10⁻⁷ s</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　An electron at 2.0 × 10⁶ m s⁻¹ enters a 0.010 T field at right angles. Find r.", [
            "r = 9.11 × 10⁻³¹ × 2.0 × 10⁶ ÷ (1.60 × 10⁻¹⁹ × 0.010) = 1.82 × 10⁻²⁴ ÷ 1.6 × 10⁻²¹ = <b>1.1 × 10⁻³ m</b> ✅"
          ]],
          ["eg", "<b>P2 · State · 2 marks</b>　Direction: field points into the page, a proton moves to the right. What is the direction of the force and how does it move?", [
            "Fleming's left-hand rule: first finger = field (into page), second finger = current (right) → thumb = force <b>upwards</b>",
            "Force always ⊥ velocity so the proton turns upwards and then goes <b>anticlockwise</b> in a circle.",
            "An electron under the same conditions: force <b>downwards</b>, clockwise circle."
          ]],
          ["eg", "<b>P1 MCQ · 1 mark</b>　Electron at 3.0 × 10⁶ m s⁻¹ perpendicular to a 0.50 T field. Find the magnetic force.", [
            "F = qvB = 1.60 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.50 = <b>2.4 × 10⁻¹³ N</b> ✅"
          ]],
          ["note", "<b>Explain circular motion (3 marks)</b>: Force is always perpendicular to the velocity [1]; so no work done / speed (kinetic energy) constant, only direction changes [1]; the force is constant in magnitude and always directed towards a fixed centre – it acts as centripetal force, so path is a circle [1].<br><b>Velocity ∥ B</b>: no force. <b>Velocity at an angle</b>: only the component ⊥ B circles, the parallel component is unchanged → helix."],
          ["table", ["If this increases…", "Radius r = mv/qB"], [
            ["speed v", "r increases (proportional)"],
            ["mass m", "r increases"],
            ["charge q", "r decreases"],
            ["B", "r decreases"],
          ]],
          ["trap", ["電子用左手定則冇反轉方向。", "寫磁場令粒子加速 / 增加 KE → 錯。", "T 同 v 無關，唔好話快粒子轉一圈用時短。"]],
        ],
      },
      {
        h: "Velocity selector · wires",
        min: 4,
        blocks: [
          ["eg", "<b>P2 · Calculate · 2 marks</b>　Crossed fields E = 2.0 × 10⁴ V m⁻¹ and B = 0.10 T let particles pass undeflected. Find their speed.", [
            "Forces balance: qE = qvB → v = E/B",
            "v = 2.0 × 10⁴ ÷ 0.10 = <b>2.0 × 10⁵ m s⁻¹</b> ✅ (independent of charge and mass)"
          ]],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　A 0.50 m wire carrying 3.0 A is perpendicular to a 0.20 T field. Find the force. What if the wire is at 30° to the field?", [
            "F = BIL = 0.20 × 3.0 × 0.50 = <b>0.30 N</b>",
            "At 30°: F = BIL sin 30° = 0.30 × 0.5 = <b>0.15 N</b>; parallel (0°) → <b>0 N</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　Two long parallel wires 0.10 m apart each carry 5.0 A in the same direction. Find the force per unit length and direction.", [
            "F/L = μ₀I₁I₂/(2πr) = 4π × 10⁻⁷ × 5.0 × 5.0 ÷ (2π × 0.10)",
            "= 3.14 × 10⁻⁵ ÷ 0.628 = <b>5.0 × 10⁻⁵ N m⁻¹, attractive</b> ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　Currents of 10 A and 20 A in opposite directions in wires 0.050 m apart. Find F/L and the force on 2.0 m.", [
            "F/L = 4π × 10⁻⁷ × 10 × 20 ÷ (2π × 0.050) = 2.51 × 10⁻⁴ ÷ 0.314 = <b>8.0 × 10⁻⁴ N m⁻¹, repulsive</b>",
            "F = 8.0 × 10⁻⁴ × 2.0 = <b>1.6 × 10⁻³ N</b> ✅. Same size force on each wire (Newton III)."
          ]],
          ["table", ["Situation", "Result"], [
            ["Currents same direction", "attract"],
            ["Currents opposite direction", "repel"],
            ["Double one current", "F × 2"],
            ["Double the separation", "F ÷ 2 (1/r, not 1/r²)"],
            ["Wire ∥ field", "F = 0"],
          ]],
          ["trap", ["Wire 同 B 平行 → sin 0° = 0 → 冇力。", "Parallel wires 係 1/r 唔係 1/r²。", "兩線力大小相等（Newton III），唔係大電流線受力大啲。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Describe the motion","Perpendicular B: circular path in plane ⟂ B, constant speed."],["Explain","Magnetic force ⟂ velocity → does no work → speed constant, only direction changes."],["Determine direction","Use right-hand rule for positive charge (reverse for negative / electron)."],["Calculate","F = qvB sinθ, r = mv/(qB); F = BIL sinθ."],["Compare parallel wires","Same direction currents attract."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Velocity selector","qE = qvB → v = E/B"],["Circular path","F = qvB = mv²/r"],["Current in B","F = BIL; direction by RH rule"],["Parallel wires","each wire in the field of the other"],["Charged particle in E","parabolic path like projectile"]]],
          ["trap", ["Using electron flow as conventional current","Saying magnetic force speeds the particle up","Forgetting sinθ"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: F = qvB sinθ, F = BIL sinθ, F = qE. Say which finger rule you use in the answer."],
        ],
      },
      {
        h: "Long question 拆解 + 失分位",
        min: 4,
        blocks: [
          ["eg", "<b>P2 · long question · 5 marks</b>　Protons are accelerated from rest through 2.0 kV, then enter a 0.50 T field at right angles. (a) Speed? (b) Radius? [5]", [
            "(a) qV = ½mv² → v = √(2qV/m) = √(2 × 1.60 × 10⁻¹⁹ × 2000 ÷ 1.67 × 10⁻²⁷) = √(3.83 × 10¹¹) = <b>6.2 × 10⁵ m s⁻¹</b> [2]",
            "(b) r = mv/qB = 1.67 × 10⁻²⁷ × 6.19 × 10⁵ ÷ (1.60 × 10⁻¹⁹ × 0.50) [1]",
            "= 1.03 × 10⁻²¹ ÷ 8.0 × 10⁻²⁰ = <b>1.3 × 10⁻² m</b> [2]"
          ]],
          ["trap", [
            "Mix up E and B motions: E → parabola, B → circle.",
            "Using 200 eV without converting to joules (× 1.60 × 10⁻¹⁹).",
            "忘記 cm / mm → m。",
            "Direction 唔講 rule 同方向（up/down/in/out）。",
            "電子同質子方向反轉。",
            "Said B-field does work.",
            "Used mass in kg for g mix: m(proton) = 1.67 × 10⁻²⁷ kg not 1.67 × 10⁻²⁷ g.",
            "Parallel wires: used r² in denominator.",
            "Wrong θ in sin θ: θ is angle between wire/velocity and B (not to the normal).",
            "Velocity selector speed depends on q or m: it does not.",
            "Circle vs spiral: constant B gives constant r only if v constant.",
            "忘記 centripetal force 係 qvB (not extra)."
          ]],
          ["check", ["識分 E (parabola) 同 B (circle)", "識推導 r = mv/qB 同解釋點解兜圈", "識用 left-hand rule 並反轉電子", "識 velocity selector v = E/B", "識算 F/L 並判斷吸引 / 排斥", "識 qV = ½mv² 轉 eV ↔ J"]],
        ],
      },
    ],
    summary: [
      "E 場：F = qE，拋物線",
      "qV = ½mv²，eV × 1.60 × 10⁻¹⁹ = J",
      "B 場：F ⊥ v，兜圈，no work",
      "r = mv/qB，T 同速度無關",
      "F = BIL sin θ，左手定則，電子反轉",
      "qE = qvB → v = E/B",
      "同向電流相吸，反向相拒",
      "F/L = μ₀I₁I₂/(2πr)"
    ],
    practice: [
      { q: "A charged particle moves in a circle at constant speed in a uniform magnetic field. The work done by the magnetic force in one revolution is:", o: ["A. positive", "B. negative", "C. zero", "D. qvB × 2πr"], m: 1, a: "<b>C</b>. Force is perpendicular to displacement at all times." },
      { q: "A proton and an electron enter the same uniform magnetic field with the same speed at right angles. Which statement is correct?", o: ["A. same radius", "B. proton radius larger", "C. electron radius larger", "D. neither moves in a circle"], m: 1, a: "<b>B</b>. r = mv/qB, same q and v, proton has much greater mass → larger r (and opposite sense)." },
      { q: "A wire of length L carries current I at angle 30° to a field B. The force is:", o: ["A. BIL", "B. 0.5 BIL", "C. 0.87 BIL", "D. 0"], m: 1, a: "<b>B</b>. F = BIL sin 30° = 0.5 BIL." },
      { q: "An electron is accelerated from rest through 200 V. Calculate its kinetic energy in J.", m: 1, a: "E = qV = 1.60 × 10⁻¹⁹ × 200 = 3.2 × 10⁻¹⁷ J [1]." },
      { q: "A proton moving at 3.0 × 10⁵ m s⁻¹ enters a 0.20 T field at right angles. Calculate the radius of its path.", m: 2, a: "qvB = mv²/r → r = mv/qB [1]; = 1.6 × 10⁻² m [1]." },
      { q: "Explain why a charged particle moving perpendicular to a uniform magnetic field moves in a circle at constant speed.", m: 3, a: "Magnetic force is always perpendicular to velocity [1]; so no work done / speed (KE) constant [1]; force constant in magnitude and towards a centre → centripetal → circle [1]." },
      { q: "Crossed fields E = 2.0 × 10⁴ V m⁻¹ and B = 0.10 T let particles pass undeflected. Calculate their speed.", m: 2, a: "qE = qvB [1]; v = E/B = 2.0 × 10⁵ m s⁻¹ [1]." },
      { q: "A proton moves to the right through a magnetic field directed into the page. State the direction of the initial force on the proton.", m: 1, a: "Upwards (towards top of page) [1]." },
      { q: "A 0.50 m wire carries 3.0 A perpendicular to a 0.20 T field. Calculate the force on the wire.", m: 2, a: "F = BIL [1] = 0.20 × 3.0 × 0.50 = 0.30 N [1]." },
      { q: "Two long parallel wires 0.10 m apart each carry 5.0 A in the same direction. Calculate the force per unit length and state the direction of the force.", m: 3, a: "F/L = μ₀I₁I₂/2πr [1] = 5.0 × 10⁻⁵ N m⁻¹ [1]; attractive [1]." },
      { q: "An electron (v = 2.0 × 10⁷ m s⁻¹) enters a 0.040 m long region of uniform field E = 1.0 × 10⁴ V m⁻¹ perpendicular to its velocity. Calculate the deflection when it leaves the field. Ignore gravity.", m: 4, a: "a = eE/m = 1.76 × 10¹⁵ m s⁻² [1]; t = 0.040/2.0 × 10⁷ = 2.0 × 10⁻⁹ s [1]; y = ½at² [1]; = 3.5 × 10⁻³ m [1]." },
      { q: "Protons are accelerated from rest through 2.0 kV and then enter a 0.50 T field at right angles. Calculate the radius of the path.", m: 4, a: "qV = ½mv² → v = 6.2 × 10⁵ m s⁻¹ [2]; r = mv/qB [1]; = 1.3 × 10⁻² m [1]." }
    ],
  },

  "phys-20": {
    title: "Atomic Structure · Rutherford · Spectra",
    intro: "E.1 三大塊：Rutherford 實驗（觀察 + 結論配對）、nuclear notation、energy levels → spectra。",
    parts: [
      {
        h: "Master idea 同 method chain",
        min: 2,
        blocks: [
          ["rhyme", "口訣", "核細而重帶正電；電子行能級，跳一跳就 hf", "The atom is mostly empty space with a tiny, dense, positive nucleus. Electrons exist only in discrete energy levels; a transition ΔE emits or absorbs ONE photon with E = hf = hc/λ = ΔE."],
          ["flow", [["① 識題型", "Experiment (observation → conclusion)? Notation (A, Z, N)? Energy level / spectrum?"], ["② eV → J", "ΔE (eV) × 1.60 × 10⁻¹⁹ = ΔE (J)"], ["③ 公式", "λ = hc/ΔE (h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹)"], ["④ 解釋", "Say: discrete levels, photon energy = level difference, absorbed/emitted."]]],
          ["note", "常考 note：(1) Rutherford “outline how results support nuclear model” (3 marks: observation + conclusion pairs), (2) neutrons/protons from nuclear notation, (3) photon wavelength from ΔE with eV → J, (4) “explain dark lines in a star's spectrum” (3 marks), (5) count transitions between levels."],
        ],
      },
      {
        h: "口訣 + 數據一頁",
        min: 1.5,
        blocks: [
          ["grid", [
            ["E.1", "大部份穿過係空，少數彈開有核心", "Most pass straight: empty space; few large angle: dense positive nucleus"],
            ["E.1", "上面總人數，下面質子數", "A = nucleon number, Z = proton number"],
            ["E.1", "中子 = A − Z", "N = A − Z"],
            ["E.1", "同位素：Z 同、N 唔同", "Isotopes"],
            ["E.1", "能級離散，所以線光譜", "Discrete levels → line spectra"],
            ["E.1", "跳落放光，吸光跳上", "Emission: fall; absorption: rise"],
            ["E.1", "ΔE = hf = hc/λ", "One photon per transition"],
            ["E.1", "eV 乘 1.60 × 10⁻¹⁹ 變 J", "Unit conversion"],
            ["E.1", "Absorption 黑線喺 emission 同位置", "Same λ"],
            ["E.1", "n 個能級最多 n(n−1)/2 條線", "Count lines"],
          ]],
          ["table", ["Constant / fact", "Value", "Use it when…"], [
            ["Planck constant h", "6.63 × 10⁻³⁴ J s", "E = hf"],
            ["Speed of light c", "3.00 × 10⁸ m s⁻¹", "λ = c/f"],
            ["Elementary charge e", "1.60 × 10⁻¹⁹ C", "1 eV = 1.60 × 10⁻¹⁹ J"],
            ["hc", "1.99 × 10⁻²⁵ J m", "λ = hc/ΔE"],
            ["Size of atom / nucleus", "≈ 10⁻¹⁰ m / ≈ 10⁻¹⁵ m", "Rutherford discussions (nucleus ≈ 10⁵ times smaller)"],
          ]],
        ],
      },
      {
        h: "Definitions 一字不漏",
        min: 2,
        blocks: [
          ["note", "<b>Nucleon:</b> a particle in the nucleus (proton or neutron).<br><b>Nucleon number A:</b> the total number of protons and neutrons in a nucleus.<br><b>Proton number Z:</b> the number of protons in the nucleus (atomic number).<br><b>Neutron number N:</b> N = A − Z.<br><b>Nuclide:</b> a nucleus with specific numbers of protons and neutrons.<br><b>Isotopes:</b> nuclides of the same element (same Z) with different numbers of neutrons (different A).<br><b>Energy level:</b> one of the discrete values of energy an electron in an atom can have.<br><b>Emission spectrum:</b> discrete (line) spectrum of wavelengths emitted by an excited gas as electrons fall to lower energy levels.<br><b>Absorption spectrum:</b> continuous spectrum crossed by dark lines at wavelengths absorbed by a cool gas as electrons rise to higher energy levels.<br><b>Electronvolt:</b> the energy gained by an electron accelerated through 1 V."],
          ["key", "\\({}^{A}_{Z}\\text{X}\\)　N = A − Z　　\\(E = hf = \\dfrac{hc}{\\lambda} = \\Delta E\\)　　number of lines from n levels = \\(\\dfrac{n(n-1)}{2}\\)"],
        ],
      },
      {
        h: "Rutherford scattering",
        min: 3,
        blocks: [
          ["table", ["Observation (α on thin gold foil)", "Conclusion (write both!)"], [
            ["Most α pass straight through", "atom is mostly empty space"],
            ["A few deflected through small/large angles", "positive charge concentrated in a small region (like charges repel)"],
            ["Very few (≈ 1 in 10⁴) reflected back (&gt; 90°)", "nucleus is very small, very dense, positively charged and has most of the mass"],
          ]],
          ["note", "<b>Set-up</b>: α source → collimated narrow beam → very thin gold foil in a <b>vacuum</b> (α would be absorbed/scattered by air) → movable detector (fluorescent screen). Thin foil: to avoid multiple scattering. Gold: very malleable thin foil, large nuclear charge.<br><b>Why not plum pudding?</b> A uniformly spread positive charge would give only small deflections, never reflection back. Electrons orbit/are outside the nucleus; they are too light to deflect α."],
          ["eg", "<b>P2 · Outline · 3 marks</b>　Outline how the results of the Rutherford–Geiger–Marsden experiment support the nuclear model of the atom.", [
            "Most alpha particles pass straight through → the atom is mostly empty space [1]",
            "A small number deflected through large angles / back → a small, dense nucleus [1]",
            "The nucleus is positively charged (repels the positive α) and contains most of the mass [1]"
          ]],
          ["trap", ["Observation 同 conclusion 要一一對應，兩個都寫先有分。", "唔好寫 “electrons deflect the alphas”。", "Vacuum 嘅原因係 α 會被空氣阻止。"]],
        ],
      },
      {
        h: "Nuclear notation + isotopes",
        min: 2.5,
        blocks: [
          ["eg", "<b>P1 MCQ · 1 mark</b>　State the number of neutrons in ²³⁵₉₂U.", ["N = A − Z = 235 − 92 = <b>143</b> ✅"]],
          ["eg", "<b>P2 · State · 2 marks</b>　Carbon-14 (¹⁴₆C): give the numbers of protons, neutrons, and electrons in a neutral atom.", ["Protons = 6; neutrons = 14 − 6 = 8; electrons = 6 (neutral) <b>✅</b>"]],
          ["eg", "<b>P1 MCQ · 1 mark</b>　How many electrons are in an Mg²⁺ ion (Z = 12)?", ["Neutral Mg has 12; losing 2 → <b>10 electrons</b> ✅"]],
          ["table", ["Species", "Same", "Different"], [
            ["Isotopes of an element", "Z (protons), chemical properties, electrons", "N, A, mass, nuclear stability"],
            ["¹²₆C and ¹⁴₆C", "6 protons", "6 vs 8 neutrons"],
            ["Ion vs atom", "Z, N", "number of electrons"],
          ]],
          ["trap", ["A 當成 proton number。", "Isotope 定義冇講 “same element / same Z”。", "Neutral atom electrons = Z；ion 要加減電荷。"]],
        ],
      },
      {
        h: "Spectra + energy levels",
        min: 5,
        blocks: [
          ["rhyme", "口訣", "跳落放一粒 photon，ΔE = hf；吸收就要啱啱好嗰份能量", "Only photons whose energy exactly equals the gap between two levels are absorbed. Different elements have different level spacings → unique spectra → identify elements."],
          ["eg", "<b>P2 · Calculate · 2 marks</b>　An electron falls between two levels separated by 3.0 eV. Calculate the wavelength of the emitted photon.", [
            "ΔE = 3.0 × 1.60 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J [1]",
            "λ = hc/ΔE = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ ÷ 4.8 × 10⁻¹⁹ = <b>4.1 × 10⁻⁷ m</b> (violet) [1] ✅"
          ]],
          ["eg", "<b>P2 · Calculate · 3 marks</b>　Hydrogen levels: −13.6 eV, −3.40 eV, −1.51 eV. Find the longest wavelength emitted in transitions between these three levels.", [
            "Longest λ = smallest ΔE = (−1.51) − (−3.40) = 1.89 eV [1]",
            "ΔE = 1.89 × 1.60 × 10⁻¹⁹ = 3.02 × 10⁻¹⁹ J [1]",
            "λ = 1.99 × 10⁻²⁵ ÷ 3.02 × 10⁻¹⁹ = <b>6.6 × 10⁻⁷ m = 658 nm</b> (red) [1] ✅"
          ]],
          ["eg", "<b>P2 · Determine · 2 marks</b>　Photon of wavelength 486 nm. Find its energy in eV.", [
            "E = hc/λ = 1.99 × 10⁻²⁵ ÷ 4.86 × 10⁻⁷ = 4.09 × 10⁻¹⁹ J [1]",
            "÷ 1.60 × 10⁻¹⁹ = <b>2.56 eV</b> [1] ✅"
          ]],
          ["eg", "<b>P1 MCQ · 1 mark</b>　Maximum number of different emission lines from four levels?", ["4 × 3 ÷ 2 = <b>6</b>（3 + 2 + 1）✅"]],
          ["eg", "<b>P2 · Explain · 3 marks</b>　Explain why the spectrum of light from a star contains dark lines.", [
            "Cooler gas in the star's outer layers absorbs photons whose energy equals differences between energy levels [1]",
            "Those photons are re-emitted in all directions [1]",
            "So fewer photons of those wavelengths reach the observer → dark lines at same λ as the element's emission lines [1]"
          ]],
          ["table", ["", "Emission spectrum", "Absorption spectrum"], [
            ["Looks like", "bright coloured lines on dark background", "dark lines on a continuous coloured background"],
            ["Cause", "electrons fall to lower levels, photon emitted", "electrons rise, photons absorbed from white light"],
            ["Source", "hot, low-pressure gas (excited by heating / discharge)", "white light through cooler gas"],
            ["Line positions", "same wavelengths for the same element", "same wavelengths"],
          ]],
          ["note", "Highest frequency line = largest ΔE (biggest jump, e.g. to the ground state). Lowest frequency = smallest ΔE. Energy values quoted negative means bound; zero energy = free electron (ionisation)."],
          ["trap", ["eV 冇轉 J。", "Dark lines 解釋冇講 re-emitted in all directions。", "Absorption 要啱啱好 ΔE，唔係任何能量都得。", "Line count 用 n² 或者 n − 1。", "Wavelength nm 單位 × 10⁻⁹。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Outline Rutherford","Alpha scattering on thin gold foil: most pass straight, few deflect strongly, very few rebound."],["Explain conclusions","Mostly empty space, small dense positive nucleus."],["Explain spectra","Electron transitions between discrete energy levels emit photons hf = E₂ − E₁."],["Calculate","E = hf = hc/λ, energy in eV (÷ 1.60 × 10⁻¹⁹)."],["Distinguish","Emission lines vs absorption dark lines."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Observation → inference","pair each observation with conclusion"],["Energy levels","transition arrows downwards = emission"],["Photon wavelength","λ = hc/ΔE"],["Ionisation","energy needed to reach 0 eV"],["Spectrum identification","match lines to element"]]],
          ["trap", ["Giving observations without the inference (or vice versa)","Wrong sign of energy levels (negative in bound states)","Forgetting eV → J conversion"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: E = hf, hc = 1.99 × 10⁻²⁵ J m (≈ 1240 eV nm), 1 eV = 1.60 × 10⁻¹⁹ J. 'Discrete lines' needs 'discrete energy levels' in the same sentence."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 3,
        blocks: [
          ["trap", [
            "Rutherford 只寫 observation 冇 conclusion。",
            "Nucleus “has most of the atom's mass and positive charge” 兩樣都要。",
            "A − Z 計錯 / 反轉 A 同 Z。",
            "Isotope 定義漏 “same number of protons”。",
            "eV 轉 J 忘記乘 1.60 × 10⁻¹⁹。",
            "用 λ = hc/ΔE 時 ΔE 單位未轉 J。",
            "Emission line 數目用錯公式。",
            "將最長 λ 當最大 ΔE（相反）。",
            "Dark line 原因寫成 “gas absorbs all light”。",
            "Energy levels 寫成連續。",
            "Photon energy ≠ electron kinetic energy.",
            "Line spectra = discrete levels，一定要寫呢句。"
          ]],
          ["check", ["講到 Rutherford 3 個 observation → conclusion", "識 N = A − Z 同 isotope definition", "識 eV ↔ J 同 λ = hc/ΔE", "識解釋 absorption dark lines 3 點", "識數 emission lines 同搵最長 / 最短 λ", "識描述實驗設置（vacuum、thin foil）"]],
        ],
      },
    ],
    summary: [
      "大部份穿過係空，少數彈開有核心",
      "核細、密、帶正電，有大部份質量",
      "A 上 Z 下，中子 = A − Z",
      "同位素：Z 同、N 唔同",
      "能級 discrete → line spectra",
      "ΔE = hf = hc/λ，eV × 1.60 × 10⁻¹⁹ = J",
      "Absorption 黑線喺 emission 同位置",
      "n 個能級最多 n(n−1)/2 條線"
    ],
    practice: [
      { q: "Which observation in the Rutherford scattering experiment shows that the nucleus has a positive charge?", o: ["A. most α pass undeflected", "B. some α are deflected, some by large angles", "C. α particles are absorbed by the foil", "D. electrons are emitted"], m: 1, a: "<b>B</b>. Positive α repelled → positively charged nucleus; large angles → small and dense." },
      { q: "Two nuclides have the same proton number but different nucleon numbers. They are:", o: ["A. isomers", "B. ions", "C. isotopes", "D. isobars"], m: 1, a: "<b>C</b>. Isotopes: same Z, different N." },
      { q: "The maximum number of different emission lines possible from four energy levels is:", o: ["A. 3", "B. 4", "C. 6", "D. 12"], m: 1, a: "<b>C</b>. 4 × 3 ÷ 2 = 6." },
      { q: "Outline how the results of the Rutherford–Geiger–Marsden experiment support the nuclear model of the atom.", m: 3, a: "Most alpha particles pass straight through → atom mostly empty space [1]; a few deflected through large angles [1] → small, dense, positively charged nucleus [1]." },
      { q: "State the number of neutrons in a nucleus of ²³⁵₉₂U.", m: 1, a: "143 [1]" },
      { q: "State what is meant by isotopes.", m: 1, a: "Nuclides with the same number of protons [1] but different numbers of neutrons." },
      { q: "An electron falls between two levels separated by 3.0 eV. Calculate the wavelength of the photon emitted.", m: 2, a: "ΔE = 4.8 × 10⁻¹⁹ J [1]; λ = hc/ΔE = 4.1 × 10⁻⁷ m [1]." },
      { q: "The hydrogen levels are −13.6 eV, −3.40 eV and −1.51 eV. Calculate the frequency of the photon emitted for the transition from −1.51 eV to −3.40 eV.", m: 3, a: "ΔE = 1.89 eV = 1.89 × 1.60 × 10⁻¹⁹ = 3.02 × 10⁻¹⁹ J [1]; f = ΔE/h [1]; = 3.02 × 10⁻¹⁹ ÷ 6.63 × 10⁻³⁴ = 4.6 × 10¹⁴ Hz [1]." },
      { q: "Explain why the spectrum of light from a star contains dark lines.", m: 3, a: "Cooler gas in the star's outer layers absorbs photons whose energy equals differences in energy levels [1]; absorbed photons are re-emitted in all directions [1]; so fewer photons of those wavelengths reach the observer [1]." },
      { q: "Explain how emission line spectra provide evidence for discrete energy levels in atoms.", m: 3, a: "Only certain wavelengths are emitted [1]; each photon has energy hf = difference between two levels [1]; so levels must be discrete (a continuous range of levels would give a continuous spectrum) [1]." },
      { q: "Describe the difference between an emission spectrum and an absorption spectrum.", m: 2, a: "Emission: bright lines on dark background [1]; absorption: dark lines at the same wavelengths on a continuous background [1]." },
      { q: "Calculate the energy in eV of a photon of wavelength 486 nm.", m: 2, a: "E = hc/λ = 4.09 × 10⁻¹⁹ J [1]; = 2.56 eV [1]." }
    ],
  },

  "phys-22": {
    title: "Radioactive decay · Half-life · Binding energy",
    intro: "E.3 成個 topic 圍住「nucleus 唔穩定 → 放射線 → 變返穩定」：揾出 decay 類型、平衡 A 同 Z、數 half-life、計 binding energy。",
    parts: [
      {
        h: "總覽 + 口訣一頁 overview",
        min: 2,
        blocks: [
          ["key", "<b>Master idea</b>：Unstable nucleus 隨機咁放出 α / β / γ 變成較穩定嘅 nucleus。<br>每條 decay equation 都要 <b>A（nucleon number，上面）同 Z（proton number，下面）兩邊相等</b>；能量來自 <b>mass defect → E = Δmc²</b>。"],
          ["flow", [["① 認類型", "α / β⁻ / β⁺ / γ（睇粒子或 A、Z 變化）"], ["② 平衡 A、Z", "上面加起來相等，下面加起來相等"], ["③ 計時間", "half-life：一半一半再一半，先扣 background"], ["④ 計能量", "Δm (u) × 931.5 = MeV"]]],
          ["grid", [
            ["E.3", "α 紙擋，β 鋁擋，γ 鉛減", "alpha: paper; beta: few mm Al; gamma: thick lead (reduced, never fully stopped)"],
            ["E.3", "α 電離最強、穿透最弱", "most ionising = least penetrating"],
            ["E.3", "β⁻ 配反中微子，β⁺ 配中微子", "beta-minus + antineutrino; beta-plus + neutrino"],
            ["E.3", "α 減 4 減 2，β⁻ Z 加 1，β⁺ Z 減 1", "alpha: A−4, Z−2; β⁻: A same, Z+1; β⁺: A same, Z−1"],
            ["E.3", "γ 淨係洩能量，A、Z 唔變", "gamma = de-excitation, no change in A or Z"],
            ["E.3", "隨機 + 自發", "random: cannot predict which nucleus/when; spontaneous: not affected by external conditions"],
            ["E.3", "一半一半再一半", "N = N₀ (½)ⁿ, n = t ÷ T½"],
            ["E.3", "先扣 background 先計", "corrected = measured − background"],
            ["E.3", "Strong force 吸引、超短程", "~10⁻¹⁵ m, acts between all nucleons"],
            ["E.3", "拆核要俾錢（BE）", "BE = energy needed to separate nucleus into nucleons"],
            ["E.3", "Fe-56 最穩，兩邊都向佢行", "fusion (light) and fission (heavy) both move toward the BE/nucleon peak"],
            ["E.3", "Δm 乘 931.5 就係 MeV", "1 u = 931.5 MeV c⁻²"],
          ]],
          ["note", "<b>常考 (perennial favourites)</b>：① 寫 decay equation（A、Z 平衡，漏 (anti)neutrino 即失分）② half-life + background 計算 ③ Explain α 電離強但穿透弱 ④ BE per nucleon 曲線解釋 fusion/fission ⑤ Mass defect → MeV，記得 sig figs 同單位。Command terms：<i>State</i> = 一句；<i>Explain</i> = 原因 + 連結（2 marks 通常兩個連貫要點）；<i>Calculate</i> = 要見式 + 數值 + 單位。"],
          ["rhyme", "解難口訣", "認粒子、平衡兩行數、扣背景、單位轉 MeV", "Identify radiation → balance A and Z → subtract background → convert u to MeV/J."],
        ],
      },
      {
        h: "α β γ 三種輻射 Radiation types",
        min: 3,
        blocks: [
          ["table", ["", "α alpha", "β⁻ beta-minus", "β⁺ beta-plus", "γ gamma"], [
            ["係乜", "helium nucleus \\({}^4_2\\)He（2p + 2n）", "high-speed electron（+ antineutrino）", "positron（+ neutrino）", "high-energy EM photon"],
            ["Charge", "+2e", "−e", "+e", "0"],
            ["Nuclear change", "A − 4，Z − 2", "n → p + e⁻ + \\(\\bar\\nu_e\\)：A 不變，Z + 1", "p → n + e⁺ + \\(\\nu_e\\)：A 不變，Z − 1", "A、Z 不變（excited nucleus 放能量）"],
            ["電離能力 Ionising", "最強", "中", "中（遇 electron 會 annihilate）", "最弱"],
            ["穿透 Penetration", "最弱：一張紙 / 幾 cm 空氣", "中：幾 mm aluminium / 空氣中幾 m", "好短（好快 annihilate）", "最強：需厚 lead 或 concrete 減弱"],
            ["喺 B 或 E field", "偏轉", "偏轉（方向同 α 相反）", "偏轉（同 β⁻ 相反）", "唔偏轉"],
          ]],
          ["rhyme", "口訣 1", "α 紙擋，β 鋁擋，γ 鉛都擋唔晒", "Ionisation and penetration are opposite: the more ionising, the less penetrating."],
          ["note", "<b>點解 α 電離最強但穿透最弱？</b>(exam phrase) α is heavy and carries charge +2e, so it interacts strongly with atoms along its path, causing many ionisations per unit length; it therefore loses its energy within a short distance.<br><b>γ</b> 係 photon，無 charge，同物質作用少 → 穿透強；intensity 只會隨厚度減少，永遠唔會完全 0。"],
          ["note", "<b>Beta decay 背後</b>：係 weak interaction 令 nucleon 變種（n ↔ p）。Beta 粒子能量係 <b>continuous spectrum</b>（由 0 到某 max），所以一定有第三粒粒子 (neutrino) 分走部份能量，否則每粒 β 應該有同一個 energy。"],
          ["trap", ["β⁻ 漏寫 antineutrino，β⁺ 漏寫 neutrino。", "分唔清 ν 同 \\(\\bar\\nu\\)：β⁻ ⇒ <b>anti</b>neutrino；β⁺ ⇒ neutrino。", "寫 γ 「stopped by lead」× — 要寫 <b>attenuated / intensity reduced</b>。", "Electron 係由 nucleus 入面 neutron 變 proton 時<b>產生</b>，唔係 nucleus 原本有 electron。"]],
        ],
      },
      {
        h: "Decay equations 平衡 A、Z",
        min: 3.5,
        blocks: [
          ["key", "<b>Nuclide notation</b> \\({}^{A}_{Z}\\)X：A = nucleon number（p + n），Z = proton number，neutrons N = A − Z。<br>Particles：α = \\({}^4_2\\)He ・ β⁻ = \\({}^{0}_{-1}\\)e ・ β⁺ = \\({}^{0}_{+1}\\)e ・ n = \\({}^1_0\\)n ・ p = \\({}^1_1\\)p"],
          ["table", ["Decay", "Parent \\({}^{A}_{Z}\\)X → daughter", "例"], [
            ["α", "\\({}^{A-4}_{Z-2}\\)Y + \\({}^4_2\\)α", "\\({}^{226}_{88}\\)Ra → \\({}^{222}_{86}\\)Rn + \\({}^4_2\\)α"],
            ["β⁻", "\\({}^{A}_{Z+1}\\)Y + \\({}^{0}_{-1}\\)e + \\(\\bar\\nu_e\\)", "\\({}^{14}_{6}\\)C → \\({}^{14}_{7}\\)N + \\({}^{0}_{-1}\\)e + \\(\\bar\\nu_e\\)"],
            ["β⁺", "\\({}^{A}_{Z-1}\\)Y + \\({}^{0}_{+1}\\)e + \\(\\nu_e\\)", "\\({}^{22}_{11}\\)Na → \\({}^{22}_{10}\\)Ne + \\({}^{0}_{+1}\\)e + \\(\\nu_e\\)"],
            ["γ", "same nuclide, lower energy", "\\({}^{A}_{Z}\\)X* → \\({}^{A}_{Z}\\)X + γ"],
          ]],
          ["eg", "<b>P2 · 2 marks · Write/State</b>　寫出 \\({}^{226}_{88}\\)Ra 嘅 α decay 方程式。", [
            "① α 帶走 A = 4、Z = 2",
            "② A：226 − 4 = 222；Z：88 − 2 = 86（Z = 86 係 Rn）",
            "③ \\({}^{226}_{88}\\)Ra → \\({}^{222}_{86}\\)Rn + \\({}^{4}_{2}\\)α ✅（上 226 = 222 + 4；下 88 = 86 + 2）",
          ]],
          ["eg", "<b>P2 · 2 marks · Write</b>　I-131（Z = 53）發生 β⁻ decay，寫方程式。", [
            "① β⁻：n → p，所以 Z + 1 = 54（Xe），A 不變 = 131",
            "② 加返 antineutrino",
            "③ \\({}^{131}_{53}\\)I → \\({}^{131}_{54}\\)Xe + \\({}^{0}_{-1}\\)e + \\(\\bar\\nu_e\\) ✅（電荷：53 = 54 − 1 ✓）",
          ]],
          ["eg", "<b>P1 MCQ · 1 mark · Determine</b>　\\({}^{238}_{92}\\)U 經過 3 次 α 同 2 次 β⁻ decay。最後係乜 nuclide？", [
            "A：238 − 3 × 4 = 238 − 12 = 226（β 唔改變 A）",
            "Z：92 − 3 × 2 + 2 × 1 = 92 − 6 + 2 = 88",
            "Z = 88 係 Ra → <b>\\({}^{226}_{88}\\)Ra</b> ✅",
          ]],
          ["eg", "<b>P1 MCQ · 1 mark · State</b>　數 neutrons：\\({}^{226}_{88}\\)Ra 有幾多 protons、neutrons、nucleons？", [
            "protons = Z = 88；nucleons = A = 226",
            "neutrons = A − Z = 226 − 88 = <b>138</b> ✅",
          ]],
          ["rhyme", "口訣 2", "α 減四減二，β⁻ Z 加一，β⁺ Z 減一", "Check twice: top row sums equal, bottom row sums equal (include the −1 or +1 of the electron/positron!)."],
          ["trap", ["β⁻ 嘅 electron 寫成 \\({}^{0}_{1}\\)e（要 −1）。", "α 之後 Z 減 2 但 A 減 4，唔好兩個都減 2。", "用 element symbol 要對返 Z（用 periodic table 對 Z）；題目只畀 symbol 時要自己查 Z。"]],
        ],
      },
      {
        h: "Half-life · random · background",
        min: 4,
        blocks: [
          ["key", "<b>Half-life T½</b>：the time taken for half of the radioactive nuclei in a sample to decay（同樣可講 activity / count rate 減半嘅時間）。<br><b>Random</b>：不能預測邊一粒 nucleus 幾時 decay，只可講每粒有固定 probability per unit time。<br><b>Spontaneous</b>：decay 唔受外在因素（temperature、pressure、chemical state）影響。<br><b>Activity</b>：number of decays per unit time（unit Bq = decays s⁻¹）。"],
          ["key", "<b>N = N₀ × (½)ⁿ</b>　其中 n = t ÷ T½　（N 可以係 nuclei 數、mass、activity 或 corrected count rate）"],
          ["table", ["Half-lives n", "0", "1", "2", "3", "4", "5", "6"], [
            ["Fraction remaining", "1", "½", "¼", "⅛", "1/16", "1/32", "1/64"],
            ["% remaining", "100", "50", "25", "12.5", "6.25", "3.125", "1.56"],
            ["% decayed", "0", "50", "75", "87.5", "93.75", "96.9", "98.4"],
          ]],
          ["rhyme", "口訣 3", "一半一半再一半；先扣 background 先計", "Subtract background first, halve, then add background back if asked for the recorded value."],
          ["table", ["Background radiation 來源", "例"], [
            ["Natural", "cosmic rays、radon gas from rocks (granite)、food/body (K-40, C-14)、soil"],
            ["Man-made", "medical X-rays、nuclear fallout、nuclear industry"],
            ["點處理", "測 source 前先量 background（無 source），之後 corrected rate = measured − background"],
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　800 Bq 嘅 sample 24 小時後得 100 Bq。求 half-life。", [
            "800 → 400 → 200 → 100：減咗 3 次一半 → n = 3",
            "T½ = 24 ÷ 3 = <b>8.0 h</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　8.0 g 嘅 nuclide，T½ = 6.0 h。24 h 後未 decay 嘅質量同已 decay 嘅質量？", [
            "n = 24 ÷ 6.0 = 4",
            "remaining = 8.0 × (½)⁴ = 8.0 ÷ 16 = <b>0.50 g</b>",
            "decayed = 8.0 − 0.50 = <b>7.5 g</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Determine</b>　Detector：source 嘅 count rate 初始 185 counts min⁻¹，background 25 counts min⁻¹。30 min 後讀到 65 counts min⁻¹。求 half-life。", [
            "① 扣 background：初始 185 − 25 = 160；之後 65 − 25 = 40",
            "② 160 → 80 → 40：2 個 half-lives",
            "③ T½ = 30 ÷ 2 = <b>15 min</b> ✅（冇扣 background 就會 185 → 65 錯算）",
          ]],
          ["eg", "<b>P2 · 2 marks · Determine</b>　量到 85 counts min⁻¹，background 25 counts min⁻¹。兩個 half-lives 後會量到幾多？", [
            "Corrected = 85 − 25 = 60 → 兩個 half-lives 後 60 × ¼ = 15",
            "Recorded = 15 + 25 = <b>40 counts min⁻¹</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　100 g sample，T½ = 5.0 days。2.0 days 後剩幾多？（非整數 half-lives）", [
            "n = 2.0 ÷ 5.0 = 0.40",
            "N = 100 × (½)^0.40 = 100 × 0.758 = <b>76 g</b>（calculator：0.5^0.4 = 0.7579）✅",
            "SL 通常考整數 half-lives；呢類題用計數機即可。",
          ]],
          ["eg", "<b>P2 · 2–3 marks · Determine (from graph)</b>　Graph：count rate 對 time。點讀 half-life？", [
            "① 揀 graph 上一點，記低 corrected rate R；揾 R/2 對應時間，兩個時間相減 = T½",
            "② 再由另一點重複一次，兩次相近就取平均（證明 exponential）",
            "③ Graph 如果冇扣 background，要先用 corrected 值（或者話 asymptote 係 background）",
          ]],
          ["trap", ["冇扣 background 就計 half-life。", "「Half-life 後全部 decay 曬」× — 係剩一半，下一個 half-life 再剩一半。", "話 half-life 受 temperature 影響 ×（spontaneous）。", "Half-life 係 sample 嘅統計特性，單一粒 nucleus 唔存在「半衰」。"]],
        ],
      },
      {
        h: "Nuclear stability + strong force",
        min: 2.5,
        blocks: [
          ["key", "<b>Strong nuclear force</b>：attractive、<b>short range（~10⁻¹⁵ m）</b>、acts between all nucleons（p–p、n–n、p–n），強過 proton 之間嘅 electrostatic repulsion，所以 nucleus 入面 protons 唔會彈開。<br>喺好近距離（&lt; ~0.5 fm）變排斥，防止 nucleons 塌埋一齊。"],
          ["table", ["Nuclide 狀況", "N : Z", "傾向"], [
            ["輕 stable nuclei", "N ≈ Z", "穩定"],
            ["重 stable nuclei", "N &gt; Z（要更多 neutrons 增加 strong force 而唔增 repulsion）", "穩定"],
            ["Too many neutrons（喺 stability band 上方）", "N 太多", "<b>β⁻</b>（n → p）"],
            ["Too many protons（喺 stability band 下方）", "Z 太多", "<b>β⁺</b>（p → n）"],
            ["好重 nuclei（Z ≥ 84 都無 stable isotope）", "整體太大", "<b>α</b>（減 A 同 Z）"],
          ]],
          ["rhyme", "口訣 4", "強力短程吸，電斥長程推", "Strong force wins at ~fm distances; electrostatic repulsion acts over longer range, so big nuclei need extra neutrons as 'glue'."],
          ["trap", ["寫 strong force 係 long range ×。", "話 strong force 淨係 protons 之間 × — 係<b>所有 nucleons</b>。"]],
        ],
      },
      {
        h: "Mass defect · binding energy 結合能",
        min: 4,
        blocks: [
          ["key", "<b>Mass defect Δm</b> = (總質量 of separate nucleons) − (質量 of nucleus)。<br><b>Binding energy</b>：the energy needed to separate a nucleus into its individual (free) nucleons；等於釋放嘅能量 when it forms。<br><b>E = Δmc²</b>（Data booklet）；<b>1 u = 931.5 MeV c⁻²</b> → 質量 Δm (u) × 931.5 = BE (MeV)。<br><b>BE per nucleon</b> = BE ÷ A（越大越穩定）。"],
          ["table", ["Constant / conversion", "值", "用喺"], [
            ["Unified atomic mass unit u", "1.66 × 10⁻²⁷ kg ≡ 931.5 MeV c⁻²", "Δm in u → MeV"],
            ["Elementary charge e", "1.60 × 10⁻¹⁹ C", "1 eV = 1.60 × 10⁻¹⁹ J；1 MeV = 1.60 × 10⁻¹³ J"],
            ["Speed of light c", "3.00 × 10⁸ m s⁻¹", "E = Δmc²（kg → J）"],
            ["Proton mass", "1.007276 u", "Δm calculations (booklet)"],
            ["Neutron mass", "1.008665 u", "Δm calculations (booklet)"],
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　He-4 nucleus 質量 4.001506 u。求 mass defect、binding energy、BE per nucleon。", [
            "① 分開 nucleons：2 × 1.007276 + 2 × 1.008665 = 2.014552 + 2.017330 = 4.031882 u",
            "② Δm = 4.031882 − 4.001506 = 0.030376 u ≈ 0.0304 u",
            "③ BE = 0.0304 × 931.5 = 28.3 MeV",
            "④ BE per nucleon = 28.3 ÷ 4 = <b>7.1 MeV</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　C-12 mass defect 0.0989 u。求 BE per nucleon 同 BE（以 J 表示）。", [
            "BE = 0.0989 × 931.5 = 92.1 MeV",
            "BE per nucleon = 92.1 ÷ 12 = <b>7.68 MeV</b>",
            "以 J：92.1 × 10⁶ × 1.60 × 10⁻¹⁹ = <b>1.47 × 10⁻¹¹ J</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　Ra-226 α decay：\\({}^{226}_{88}\\)Ra → \\({}^{222}_{86}\\)Rn + \\({}^4_2\\)He。原子質量 226.0254 u、222.0176 u、4.0026 u。求釋放能量。", [
            "Δm = 226.0254 − (222.0176 + 4.0026) = 226.0254 − 226.0202 = 0.0052 u",
            "E = 0.0052 × 931.5 = <b>4.8 MeV</b>（約 4.8–4.9 MeV，取決位數）✅",
            "呢啲能量主要變成 α 同 daughter 嘅 KE。",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　Mass defect 3.0 × 10⁻²⁹ kg，求釋放能量（J）。", [
            "E = Δmc² = 3.0 × 10⁻²⁹ × (3.00 × 10⁸)² = 3.0 × 10⁻²⁹ × 9.00 × 10¹⁶",
            "= <b>2.7 × 10⁻¹² J</b> ✅（÷1.60 × 10⁻¹³ = 16.9 MeV）",
          ]],
          ["note", "<b>BE per nucleon 曲線 (approx.)</b><br>H-2 ≈ 1.1 → He-4 ≈ 7.1（local peak）→ C-12 ≈ 7.7 → <b>Fe-56 ≈ 8.8（最高）</b> → U-238 ≈ 7.6 MeV"],
          ["table", ["過程", "喺曲線邊度", "點解放能量"], [
            ["Fusion（輕核合併）", "Fe 左邊，向 peak 行", "Products BE per nucleon 更大 → 總 BE 增加 → 差額以 KE / photon 釋放"],
            ["Fission（重核分裂）", "Fe 右邊，向 peak 行", "Products BE per nucleon 更大 → 同上"],
            ["Fe-56", "Peak", "最穩定，fusion 或 fission 都唔再放能量"],
          ]],
          ["rhyme", "口訣 3", "拆核要俾錢，Fe-56 最穩陣", "Greater binding energy per nucleon = more stable. Both processes release energy because the products are more tightly bound."],
          ["trap", ["Binding energy 唔係 nucleus 「擁有」嘅能量，係<b>拆開</b>所需嘅能量。", "BE per nucleon 同 BE 唔同：要 ÷ A。", "Δm 用 u 就 × 931.5 得 MeV；用 kg 就 × c² 得 J，唔好混。", "Mass defect 用 nucleon 質量加起來減 nucleus（唔係 atom 質量除非明確 cancel electrons）。", "「Energy released 因為 mass 消失」× — 要講 mass defect 對應 binding energy 變大。"]],
        ],
      },
      {
        h: "Long question 拆題法 + 例",
        min: 2,
        blocks: [
          ["flow", [["① 圈關鍵", "nuclide、A、Z、decay type、time、counts"], ["② 單位", "min / h / days 對齊；u → MeV → J"], ["③ 寫式", "equation / N₀(½)ⁿ / E = Δm × 931.5"], ["④ 逐步計", "每步寫 mark point"], ["⑤ 檢查", "上下數平衡？background 扣咗？sig fig？"]]],
          ["eg", "<b>P2 · 6 marks · Determine / State</b>　題：A source of Co-60 is detected with count rate 440 min⁻¹ when background is 40 min⁻¹. After 10.5 years the count rate is 140 min⁻¹. (a) State the corrected count rates. (b) Deduce the half-life. (c) State what is meant by random decay. [6]", [
            "<b>(a)</b> 440 − 40 = 400 min⁻¹ [1]；140 − 40 = 100 min⁻¹ [1]",
            "<b>(b)</b> 400 → 200 → 100 = 2 half-lives [1]；T½ = 10.5 ÷ 2 = 5.25 ≈ <b>5.3 years</b> [1]",
            "<b>(c)</b> Cannot predict which nucleus will decay or when [1]；each nucleus has the same probability of decaying per unit time [1]",
          ]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Define half-life","Time for the number of undecayed nuclei (or activity) to halve."],["Outline","α, β, γ: nature, ionising power, penetration."],["Explain (decay)","Random and spontaneous: cannot predict which nucleus, but probability fixed."],["Calculate","N = N₀(½)^(t/T); balance A and Z."],["Determine","Binding energy: Δm × 931.5 MeV; per nucleon."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Decay equation","A and Z balance [1]; correct particle [1]"],["Half-life","N₀(½)^n [1]; background subtracted [1]"],["Graph","read two successive half-lives [1]"],["Binding energy curve","Fe-56 peak; fusion light, fission heavy releases energy"],["Mass defect","Δm in u × 931.5 MeV"]]],
          ["trap", ["Forgetting the neutrino / antineutrino in β decay","Using total BE instead of BE per nucleon","Not subtracting background count rate"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: A = λN, N = N₀e^(−λt), λ = ln2/T½, E = mc², 1 u = 931.5 MeV c⁻². Check A and Z on both sides: it takes five seconds."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["trap", ["Equation 兩邊 A 或 Z 唔平衡（最常見失分）。", "β⁻ 漏 antineutrino / β⁺ 漏 neutrino。", "冇扣 background。", "α、β、γ 嘅 ionising 同 penetration 次序反轉。", "話 γ 「stopped」；要「absorbed/attenuated」。", "Half-life 當成 total decay 時間。", "BE 同 BE per nucleon 混淆。", "u 同 kg 單位亂用（Δm 用 u 配 931.5）。", "話 decay 受 temperature 影響。", "寫 strong force 長程或只作用於 protons。", "忘記 Fe-56 係 peak：fusion 同 fission 都向 peak 行。", "寫 neutrino 證據時冇講 continuous beta energy spectrum。"]],
          ["check", [
            "寫到 α、β⁻、β⁺、γ 嘅本質、電荷、A/Z 變化",
            "講到邊個最電離、最穿透，同埋原因",
            "寫 decay equation 而 A、Z 平衡",
            "背到 half-life、random、spontaneous、binding energy 定義",
            "用 (½)ⁿ 計 half-life 題，識扣 background",
            "識由 mass defect 計 MeV 同 J，再 ÷ A",
            "識畫 / 解釋 BE per nucleon 曲線同 fusion、fission 放能量",
            "識講 strong force 特性同 stability（N &gt; Z）",
          ]],
        ],
      },
    ],
    summary: [
      "α 紙、β 鋁、γ 鉛；α 最電離最唔穿透",
      "α：A−4，Z−2；β⁻：Z+1 加反中微子；β⁺：Z−1 加中微子",
      "上面數平衡、下面數平衡",
      "Random 唔預測個體，spontaneous 唔受外界影響",
      "一半一半再一半，先扣 background",
      "Strong force 吸引、約 10⁻¹⁵ m、所有 nucleons",
      "BE = Δmc²，1 u = 931.5 MeV；再 ÷ A",
      "Fe-56 最穩：fusion、fission 都向佢行放能量",
    ],
    practice: [
      { q: "A thorium nucleus ²³⁴₉₀Th undergoes beta-minus decay. The daughter nuclide is:", o: ["A. ²³⁴₈₉Ac", "B. ²³⁴₉₁Pa", "C. ²³⁰₈₈Ra", "D. ²³⁵₉₁Pa"], m: 1, a: "<b>B</b>. β⁻: Z + 1 = 91 (Pa), A unchanged at 234." },
      { q: "The half-life of a nuclide is 12 days. What fraction of the original nuclei remains after 36 days?", o: ["A. 1/3", "B. 1/6", "C. 1/8", "D. 1/9"], m: 1, a: "<b>C</b>. 36 ÷ 12 = 3 half-lives; (½)³ = 1/8." },
      { q: "Which radiation is not deflected by a magnetic field?", o: ["A. alpha", "B. beta-minus", "C. beta-plus", "D. gamma"], m: 1, a: "<b>D</b>. Gamma photons carry no charge." },
      { q: "Which nucleus has the greatest binding energy per nucleon?", o: ["A. ²H", "B. ⁴He", "C. ⁵⁶Fe", "D. ²³⁸U"], m: 1, a: "<b>C</b>. The BE per nucleon curve peaks near Fe-56 (about 8.8 MeV)." },
      { q: "How many neutrons are in a nucleus of ²²⁶₈₈Ra?", o: ["A. 88", "B. 138", "C. 226", "D. 314"], m: 1, a: "<b>B</b>. N = A − Z = 226 − 88 = 138." },
      { q: "Write the nuclear equation for the alpha decay of ²²⁶₈₈Ra (daughter is radon, Z = 86).", m: 2, a: "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (α) [1 for correct daughter A and Z, 1 for α particle shown with balanced A and Z]." },
      { q: "Iodine-131 (Z = 53) is a beta-minus emitter. Write the decay equation.", m: 2, a: "¹³¹₅₃I → ¹³¹₅₄Xe [1] + ⁰₋₁e + antineutrino ν̄ₑ [1]." },
      { q: "A source gives 185 counts per minute and the background is 25 counts per minute. After 30 minutes the count rate is 65 counts per minute. Determine the half-life of the source.", m: 3, a: "Corrected rates 160 and 40 counts min⁻¹ [1]; 160 → 80 → 40 is 2 half-lives [1]; T½ = 30 ÷ 2 = 15 min [1]." },
      { q: "Explain what is meant by the statement that radioactive decay is random and spontaneous.", m: 2, a: "Random: it is not possible to predict which nucleus will decay or when / constant probability of decay per unit time [1]. Spontaneous: not affected by external conditions such as temperature or pressure [1]." },
      { q: "Explain why alpha particles are highly ionising but have a short range in air.", m: 3, a: "Alpha particles are heavy and have charge +2e [1]; they cause many ionisations per unit distance [1]; so lose their kinetic energy over a short distance [1]." },
      { q: "The mass defect of a carbon-12 nucleus is 0.0989 u. Calculate the binding energy per nucleon in MeV. (1 u = 931.5 MeV c⁻²)", m: 3, a: "BE = 0.0989 × 931.5 = 92.1 MeV [M1, A1]; ÷ 12 = 7.68 MeV [A1]." },
      { q: "In the alpha decay of radium-226, the atomic mass of Ra-226 is 226.0254 u, Rn-222 is 222.0176 u and He-4 is 4.0026 u. Calculate the energy released in MeV.", m: 3, a: "Δm = 226.0254 − 222.0176 − 4.0026 = 0.0052 u [M1]; E = 0.0052 × 931.5 [M1] = 4.8 MeV [A1]." },
      { q: "Using the curve of binding energy per nucleon against nucleon number, explain why both the fusion of light nuclei and the fission of heavy nuclei release energy.", m: 3, a: "BE per nucleon peaks near Fe-56 [1]; for fusion of light and fission of heavy nuclei the products lie closer to the peak, i.e. have higher BE per nucleon [1]; the increase in total binding energy (decrease in mass, E = Δmc²) is released as energy [1]." },
    ],
  },

  "phys-23": {
    title: "Fission · Chain reaction · Nuclear reactor",
    intro: "E.4 一條線：慢中子撞 U-235 → 分裂 + 放更多中子 → chain reaction → reactor 用 moderator / control rods / coolant 控制同取熱。",
    parts: [
      {
        h: "總覽 + 口訣一頁 overview",
        min: 2,
        blocks: [
          ["key", "<b>Master idea</b>：Fission 產物嘅 <b>binding energy per nucleon 比 U-235 大</b>（更靠近 Fe-56 peak）→ 總 BE 增加 → mass defect 變成能量（≈ 200 MeV per fission）。放出嘅 neutrons 令反應自己持續。"],
          ["flow", [["① 吸收", "U-235 + slow neutron → U-236*（unstable）"], ["② 分裂", "兩個中等 nuclei + 2–3 neutrons + energy"], ["③ 連鎖", "neutrons 引發更多 fission（要 critical mass）"], ["④ 控制 + 取熱", "control rods 食中子；coolant 帶熱去 turbine"]]],
          ["grid", [
            ["E.4", "慢中子撞大核，一拆二出兩三", "slow neutron + U-235 → 2 daughters + 2–3 neutrons"],
            ["E.4", "兩邊 A、Z 都要平衡，入射中子都計", "left: 235 + 1 = 236"],
            ["E.4", "Products BE/nucleon 大 → 放能", "binding energy per nucleon increases"],
            ["E.4", "一次 fission 約 200 MeV = 3.2 × 10⁻¹¹ J", "200 × 1.60 × 10⁻¹³"],
            ["E.4", "Moderator 減速，control rods 食中子", "never swap the two roles"],
            ["E.4", "Coolant 帶熱、heat exchanger 生 steam", "thermal → steam → turbine → generator"],
            ["E.4", "Critical mass = 自己持續嘅最小質量", "average one neutron per fission causes another fission"],
            ["E.4", "效率 = 輸出電 ÷ 輸入熱", "typically ≈ 33–35 %"],
            ["E.4", "冇碳排但有長壽廢料", "pros/cons essay frame"],
            ["E.4", "功率 ÷ 每次能量 = fission 次數 per s", "P = rate × E per fission"],
          ]],
          ["rhyme", "解難口訣", "平衡方程、單位轉 J、功率除能量", "Balance equation (count the incoming neutron) → MeV → J → divide power by energy per fission."],
        ],
      },
      {
        h: "Fission 過程 + 方程式",
        min: 3.5,
        blocks: [
          ["key", "<b>Nuclear fission</b>：the splitting of a heavy nucleus into two (or more) lighter nuclei, usually with the release of neutrons and energy。<br><b>Spontaneous fission</b>：發生但好罕見，唔需要外來 neutron。<br><b>Induced fission</b>：nucleus 吸收 <b>slow (thermal) neutron</b>，變 unstable，分裂（reactor 用呢種）。<br><b>Fissile</b> nuclides：U-235、Pu-239（能被 slow neutron 引發 fission）。"],
          ["table", ["重點", "內容"], [
            ["典型方程", "\\({}^{235}_{92}\\)U + \\({}^1_0\\)n → \\({}^{141}_{56}\\)Ba + \\({}^{92}_{36}\\)Kr + 3\\({}^1_0\\)n + energy"],
            ["每次 fission 能量", "≈ 200 MeV，大部份係 fission fragments 嘅 KE，之後變成 thermal energy"],
            ["產物", "Fission products 多數 neutron-rich，係 radioactive（β⁻ emitters），同埋有好長壽命嘅 waste"],
            ["Natural uranium", "約 99.3 % U-238、0.7 % U-235；reactor 用 <b>enriched</b> uranium（U-235 約 3–5 %）"],
            ["Pu-239", "U-238 吸收 neutron → U-239 → 兩次 β⁻ → Pu-239（可作燃料；亦可造武器）"],
          ]],
          ["eg", "<b>P2 · 1–2 marks · Determine</b>　\\({}^{235}_{92}\\)U + \\({}^1_0\\)n → \\({}^{141}_{56}\\)Ba + \\({}^{92}_{36}\\)Kr + x\\({}^1_0\\)n。求 x。", [
            "Nucleons：235 + 1 = 236 = 141 + 92 + x → 233 + x = 236 → <b>x = 3</b> [1]",
            "Check protons：92 = 56 + 36 ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Determine</b>　\\({}^{235}_{92}\\)U + \\({}^1_0\\)n → \\({}^{A}_{54}\\)Xe + \\({}^{94}_{38}\\)Sr + 2\\({}^1_0\\)n。求 A 同 Xe 嘅 neutrons 數。", [
            "Nucleons：236 = A + 94 + 2 → <b>A = 140</b> [1]",
            "Protons check：92 = 54 + 38 ✅",
            "neutrons in Xe = 140 − 54 = <b>86</b> [1]",
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　質量（u）：U-235 235.0439、neutron 1.0087、Ba-141 140.9144、Kr-92 91.9262。計 \\({}^{235}_{92}\\)U + n → Ba + Kr + 3n 釋放嘅能量（MeV）。(1 u = 931.5 MeV c⁻²)", [
            "reactants：235.0439 + 1.0087 = 236.0526 u [1]",
            "products：140.9144 + 91.9262 + 3 × 1.0087 = 232.8406 + 3.0261 = 235.8667 u",
            "Δm = 236.0526 − 235.8667 = 0.1859 ≈ 0.186 u",
            "E = 0.186 × 931.5 = <b>173 MeV</b> [M1 + A1]（約 200 MeV 係典型平均值；唔同 channel 有差異）✅",
          ]],
          ["note", "<b>常考 (perennial favourites)</b>：① 平衡 fission equation（求 x 或 A、Z）② 解釋 energy 點樣由 BE per nucleon 嚟 ③ 由 power 計 fission rate / 燃料用量 ④ moderator vs control rods ⑤ pros/cons。<i>Explain why energy is released</i> 要連結：products BE per nucleon 大 → mass defect → 能量。"],
          ["rhyme", "口訣 1", "慢中子撞大核，一拆二再出兩三"],
          ["trap", ["左邊漏咗入射 neutron（235 + 1）。", "寫 fission 因為 products 「較輕所以放能」× — 要講 binding energy per nucleon 較大。", "Fast neutron 引發 U-235 fission ×（要 slow/thermal）。", "U-235 同 U-238 當同一種：只有 U-235 係 fissile。"]],
        ],
      },
      {
        h: "Chain reaction · critical mass",
        min: 2.5,
        blocks: [
          ["key", "<b>Chain reaction</b>：neutrons released in one fission cause further fissions, which release more neutrons, and so on。<br><b>Critical mass</b>：the minimum mass of fissile material needed to sustain a chain reaction（平均每次 fission 至少有一粒 neutron 引發下一次 fission）。"],
          ["table", ["情況", "每次 fission 平均引發下一次嘅 neutrons（k）", "結果"], [
            ["Subcritical", "k &lt; 1", "反應逐漸停（質量細 / neutron 漏出）"],
            ["Critical", "k = 1", "穩定速率 → <b>reactor 正常運作</b>"],
            ["Supercritical", "k &gt; 1", "速率指數增長（bomb / 失控）"],
          ]],
          ["note", "<b>點解有 critical mass？</b>Surface area 對 volume 比率：質量太細，neutrons 容易由表面漏走，唔夠引發下一次 fission。影響因素：fuel 純度（enrichment）、形狀、有冇 neutron reflector、有冇 moderator。<br>Reactor 用 control rods 令 k 保持 = 1。"],
          ["rhyme", "口訣 2", "中子引中子，k 等一就穩定"],
          ["trap", ["「Critical mass 係引發 fission 所需最少質量」× — 係<b>維持 chain reaction</b>。", "Chain reaction 同 fission 混淆：chain 係 neutrons 連續引發 fission。"]],
        ],
      },
      {
        h: "Reactor 組件 + 能量鏈",
        min: 3.5,
        blocks: [
          ["table", ["Component", "作用", "常用物料"], [
            ["Fuel rods", "含 enriched uranium（U-235）", "UO₂ pellets"],
            ["Moderator", "<b>透過 elastic collisions slow down fast neutrons</b> → thermal neutrons 更易被 U-235 吸收並引發 fission", "water、heavy water、graphite（需係低質量、少吸收 neutrons）"],
            ["Control rods", "<b>absorb neutrons</b> → 調節 k，控制 rate；插入多 = rate 低；可令 reactor shut down", "boron、cadmium"],
            ["Coolant", "流過 core 帶走 thermal energy，亦防止 overheat", "water、CO₂、liquid sodium"],
            ["Heat exchanger", "將 coolant 嘅熱傳去第二個 water circuit 生成 steam，同時隔開 radioactive coolant", "—"],
            ["Shielding / containment", "吸收 radiation (neutrons, γ)，保護工作人員同環境", "thick concrete、steel、lead"],
            ["Turbine + generator", "steam 推動 turbine → generator 發電", "—"],
          ]],
          ["flow", [["Nuclear PE", "fission → BE 變 KE of fragments"], ["Thermal", "fragments 碰撞 → fuel 變熱"], ["Steam KE", "coolant / heat exchanger → steam"], ["Turbine KE", "steam 推 turbine"], ["Electrical", "generator"]]],
          ["rhyme", "口訣 3", "減速靠緩和，食中子靠控制棒", "Moderator = slow neutrons (collisions); control rods = absorb neutrons."],
          ["eg", "<b>P2 · 2 marks · Explain</b>　Explain the role of the moderator in a thermal reactor.", [
            "Neutrons released from fission are fast; they collide with moderator nuclei and lose kinetic energy (slow down) [1]",
            "Slow (thermal) neutrons are much more likely to be absorbed by U-235 and cause fission → chain reaction continues [1]",
          ]],
          ["eg", "<b>P2 · 2 marks · Distinguish</b>　Distinguish between the roles of a moderator and control rods.", [
            "Moderator slows down neutrons (by collisions) so they are more likely to cause fission [1]",
            "Control rods absorb neutrons to control the rate of the reaction [1]（必須比較兩樣）",
          ]],
          ["eg", "<b>P2 · 3 marks · Outline</b>　Outline why the coolant is passed through a heat exchanger.", [
            "Coolant carries thermal energy away from the core [1]",
            "Energy transferred to a separate water circuit producing steam for the turbine [1]",
            "Keeps radioactive coolant separate from turbine / outside the containment [1]",
          ]],
          ["trap", ["Control rods slow neutrons → 錯，係 absorb；moderator 先 slow。", "寫 moderator absorb neutrons ×。", "Heat exchanger 同 coolant 混淆。"]],
        ],
      },
      {
        h: "計算：功率 · 燃料 · 效率",
        min: 4,
        blocks: [
          ["key", "<b>Rate of fission = Power ÷ energy per fission</b>　（E 必須轉做 J：1 MeV = 1.60 × 10⁻¹³ J）<br><b>Efficiency = useful output power ÷ input power</b>　（× 100 %）<br><b>Energy density</b> = energy released per kg of fuel（U-235 ≈ 8 × 10¹³ J kg⁻¹）"],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　1000 MW thermal power 嘅 station，每次 fission 200 MeV。每秒 fission 次數？", [
            "200 MeV = 200 × 1.60 × 10⁻¹³ = 3.2 × 10⁻¹¹ J [1]",
            "rate = 1.0 × 10⁹ ÷ 3.2 × 10⁻¹¹ = <b>3.1 × 10¹⁹ s⁻¹</b> [1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　上題 station 每日用多少 U-235（kg）？(M = 235 g mol⁻¹，N<sub>A</sub> = 6.02 × 10²³ mol⁻¹)", [
            "每日能量 = 1.0 × 10⁹ × 86 400 = 8.64 × 10¹³ J",
            "每個 U-235 atom 質量 = 0.235 ÷ 6.02 × 10²³ = 3.90 × 10⁻²⁵ kg",
            "fissions per day = 3.125 × 10¹⁹ × 86 400 = 2.70 × 10²⁴",
            "mass = 2.70 × 10²⁴ × 3.90 × 10⁻²⁵ = <b>1.05 kg</b> ✅（≈ 1 kg，對比煤要 ~3 × 10⁶ kg）",
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　Station 電力輸出 1000 MW，efficiency 35 %。Thermal power 同 fission rate？", [
            "P<sub>in</sub> = 1000 ÷ 0.35 = 2.86 × 10³ MW = 2.86 × 10⁹ W [1]",
            "rate = 2.86 × 10⁹ ÷ 3.2 × 10⁻¹¹ [1] = <b>8.9 × 10¹⁹ s⁻¹</b> [1] ✅",
            "waste heat = 2857 − 1000 = 1857 MW ≈ 1.9 × 10³ MW",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　Reactor 輸入 3000 MW thermal，輸出 1000 MW electrical，畫 Sankey 數字 + efficiency。", [
            "efficiency = 1000 ÷ 3000 = 0.33 = <b>33 %</b> [1]",
            "waste = 3000 − 1000 = 2000 MW (heat to surroundings / cooling water) [1] ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　1000 MW 嘅 station 每秒有幾多 mass 轉成能量？", [
            "Δm = E/c² = 1.0 × 10⁹ ÷ (3.00 × 10⁸)² [1]",
            "= <b>1.1 × 10⁻⁸ kg s⁻¹</b> [1] ✅",
          ]],
          ["rhyme", "口訣 4", "MeV 轉 J，功率除能量；效率用輸出除輸入", "Convert first, divide second, state units (s⁻¹, kg, W)."],
          ["trap", ["MeV 冇轉 J 就除 power（W）。", "Efficiency 用 output ÷ input，唔好反轉。", "Fission rate 單位係 s⁻¹，唔係 W。", "Sig figs：data 3 sf 就答 3 sf（3.1 × 10¹⁹）。"]],
        ],
      },
      {
        h: "利弊 · 廢料 · 安全",
        min: 3,
        blocks: [
          ["table", ["Advantages", "Disadvantages"], [
            ["Operation 無 CO₂ / greenhouse gas 排放", "Radioactive waste：長壽命（Pu-239 half-life ≈ 24 000 y），要 deep geological storage"],
            ["Energy density 極高（≈ 8 × 10¹³ J kg⁻¹）→ 少量燃料", "Accident risk（meltdown，例如 Chernobyl、Fukushima）"],
            ["可靠 base-load electricity，不受天氣影響", "Decommissioning 成本高；建造昂貴"],
            ["少量燃料運輸", "Nuclear proliferation（Pu-239 可造武器）；uranium mining 環境影響"],
          ]],
          ["note", "<b>Waste handling</b>：spent fuel 先放 cooling ponds（decay heat），之後 reprocess 或封入 glass/steel casks，深層 geological repository。<br><b>安全措施</b>：containment building、control rods 自動插入 (SCRAM)、多重冷卻系統、shielding。"],
          ["eg", "<b>P2 · 2 marks · State / Outline</b>　State one advantage and one disadvantage of nuclear fission power.", [
            "Advantage [1]：no greenhouse gas emissions during operation / high energy density",
            "Disadvantage [1]：long-lived radioactive waste / risk of accident / proliferation",
          ]],
          ["note", "<b>常考</b>：一定要 <i>one advantage + one disadvantage</i> 各自完整；唔好寫「pollution」之類含糊詞，要 greenhouse gas、radioactive waste。<i>Discuss</i>（4–6 marks）要正反兩面 + 判斷（e.g. 低碳但要長期廢料管理）。"],
          ["rhyme", "口訣 5", "冇碳排但有長壽廢料"],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Outline fission","Neutron absorbed by heavy nucleus → splits into two fragments + neutrons + energy."],["Explain chain reaction","Neutrons released cause further fission; critical mass needed."],["Describe components","Moderator slows neutrons; control rods absorb neutrons; coolant removes thermal energy."],["Discuss","Waste storage, safety, no CO₂ vs risks."],["Calculate","Energy from mass defect: Q = Δm c²."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Reactor part function","one part, one function sentence [1 each]"],["Energy release","BE after − BE before"],["Chain reaction","on average ≥ 1 neutron per fission causes another"],["Nuclear waste","long half-life, storage"],["Efficiency","thermal → electrical loss"]]],
          ["trap", ["Saying control rods 'slow down' neutrons","Mixing moderator and coolant roles","Writing fission releases energy because mass is 'destroyed'; it is converted"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: E = mc², 1 u = 931.5 MeV c⁻². For 'discuss' questions give at least one advantage and one disadvantage with reasons."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["trap", ["漏入射 neutron，導致 x 錯。", "Control rods 同 moderator 角色互換。", "唔講 slow neutron，只講 neutron。", "Energy 來源只講 mass 消失，冇講 BE per nucleon。", "MeV 冇轉 J。", "Critical mass 定義寫「引發 fission 最少質量」。", "話 fission products 係 stable。", "混淆 efficiency 同 power。", "寫「nuclear power has no pollution」（太籠統）。", "U-238 當 fissile。"]],
          ["check", [
            "背到 fission、chain reaction、critical mass、moderator、control rods 定義",
            "識平衡 fission equation 並求 x 或 A",
            "識解釋能量點解放出（BE per nucleon）",
            "識分 moderator vs control rods vs coolant",
            "識由 power 計 fission rate、燃料用量、efficiency",
            "識寫 1 個優點同 1 個缺點（具體）",
            "記得 1 MeV = 1.60 × 10⁻¹³ J",
          ]],
        ],
      },
    ],
    summary: [
      "慢中子撞 U-235，一拆二出兩三",
      "Products BE per nucleon 大 → 放能 ≈ 200 MeV",
      "平衡 A、Z，入射中子要計",
      "Chain reaction 要 critical mass（k = 1）",
      "Moderator 減速，control rods 食中子",
      "Coolant 帶熱，heat exchanger 生 steam",
      "功率 ÷ 3.2 × 10⁻¹¹ J = fission rate",
      "冇碳排但有長壽廢料同事故風險",
    ],
    practice: [
      { q: "In a nuclear reactor, the control rods are used to:", o: ["A. slow down neutrons", "B. absorb neutrons", "C. carry thermal energy away", "D. shield workers from gamma rays"], m: 1, a: "<b>B</b>. Control rods absorb neutrons to regulate the reaction rate." },
      { q: "A fissile material is one that:", o: ["A. emits alpha particles", "B. can be split by slow neutrons to sustain a chain reaction", "C. has the highest binding energy per nucleon", "D. cannot absorb neutrons"], m: 1, a: "<b>B</b>. U-235 and Pu-239 are fissile." },
      { q: "In ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + x ¹₀n, the value of x is:", o: ["A. 1", "B. 2", "C. 3", "D. 4"], m: 1, a: "<b>C</b>. 236 = 144 + 89 + x → x = 3." },
      { q: "One fission releases 200 MeV. Which expression gives the number of fissions per second for a 500 MW output (1 MeV = 1.60 × 10⁻¹³ J, 100 % efficient)?", o: ["A. 500 × 10⁶ ÷ (200 × 1.60 × 10⁻¹³)", "B. 500 ÷ (200 × 1.60 × 10⁻¹³)", "C. 500 × 10⁶ × 200 × 1.60 × 10⁻¹³", "D. 500 × 10⁶ ÷ 200"], m: 1, a: "<b>A</b>. Rate = P ÷ E per fission with both in SI (W and J)." },
      { q: "Determine the number of neutrons released in ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n.", m: 1, a: "236 = 141 + 92 + x [1] → x = 3." },
      { q: "State what is meant by a chain reaction.", m: 2, a: "Neutrons released in one fission [1]; go on to cause further fissions (which release more neutrons) [1]." },
      { q: "Explain why energy is released in nuclear fission.", m: 3, a: "Binding energy per nucleon of the products is greater than that of the uranium nucleus [1]; (total) binding energy increases / mass of products is less than reactants (mass defect) [1]; difference released as kinetic energy of fragments, E = Δmc² [1]." },
      { q: "Distinguish between the roles of the moderator and the control rods in a nuclear reactor.", m: 2, a: "Moderator slows down neutrons by collisions so they are more likely to cause fission [1]; control rods absorb neutrons to control the rate of reaction [1]." },
      { q: "A nuclear power station has a thermal output of 1000 MW. Each fission releases 200 MeV. Calculate the number of fissions per second. (1 MeV = 1.60 × 10⁻¹³ J)", m: 2, a: "200 MeV = 3.2 × 10⁻¹¹ J [1]; rate = 1.0 × 10⁹ ÷ 3.2 × 10⁻¹¹ = 3.1 × 10¹⁹ s⁻¹ [1]." },
      { q: "A reactor has an input thermal power of 3000 MW and an electrical output of 1000 MW. Calculate the efficiency and the power wasted.", m: 2, a: "Efficiency = 1000 ÷ 3000 = 33 % [1]; wasted = 2000 MW [1]." },
      { q: "Calculate the mass of U-235 undergoing fission each day in a 1000 MW (thermal) reactor, if each fission releases 200 MeV. (N<sub>A</sub> = 6.02 × 10²³ mol⁻¹, molar mass 235 g mol⁻¹)", m: 4, a: "Energy per day = 1.0 × 10⁹ × 86 400 = 8.64 × 10¹³ J [1]; per fission 3.2 × 10⁻¹¹ J, so 2.7 × 10²⁴ fissions [1]; moles = 2.7 × 10²⁴ ÷ 6.02 × 10²³ = 4.5 mol [1]; mass = 4.5 × 235 g ≈ 1.05 kg [1]." },
      { q: "Explain why fuel in a thermal reactor is surrounded by a moderator, and outline what happens if the control rods are fully withdrawn.", m: 4, a: "Fast neutrons are slowed by collisions with the moderator [1]; slow neutrons are more likely to be absorbed by U-235, causing fission [1]. With rods withdrawn fewer neutrons are absorbed [1]; rate of fission increases (k &gt; 1), risk of overheating / loss of control [1]." },
      { q: "Discuss the use of nuclear fission as an energy source for electricity generation.", m: 4, a: "Advantages: no greenhouse gas emissions in operation [1]; very high energy density / reliable base-load [1]. Disadvantages: long-lived radioactive waste needing storage [1]; risk of accidents / proliferation / decommissioning cost [1]." },
    ],
  },

  "phys-24": {
    title: "Fusion · Stellar equilibrium · HR diagram · Parallax",
    intro: "E.5 圍住星：核心 fusion 發光 → L、b、T、R 之間嘅比例 → HR diagram 睇星種類 → 按質量決定 evolution；距離靠 parallax。",
    parts: [
      {
        h: "總覽 + 口訣一頁 overview",
        min: 2,
        blocks: [
          ["key", "<b>Master idea</b>：Star 靠核心 <b>hydrogen → helium fusion</b> 發光。穩定時 <b>引力向內 = 輻射 + 氣體壓力向外</b>。Luminosity、temperature、radius 用 <b>L = σ4πR²T⁴</b> 連埋；質量決定星一生點行（HR diagram）。"],
          ["flow", [["① 認公式", "L = σ4πR²T⁴；b = L ÷ 4πd²；d = 1/p"], ["② 比例題", "寫 ratio，常數消去（L ∝ R²T⁴）"], ["③ 單位", "pc ↔ ly ↔ m；arcsec；K"], ["④ HR 位置", "邊個區 → 邊個 evolution stage"]]],
          ["grid", [
            ["E.5", "高溫高壓先撞得埋", "nuclei need high KE to overcome electrostatic repulsion"],
            ["E.5", "引力向內，輻射 + 氣壓向外", "stellar equilibrium"],
            ["E.5", "L = σ4πR²T⁴", "Stefan–Boltzmann, σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴"],
            ["E.5", "b = L ÷ 4πd²", "inverse-square law, unit W m⁻²"],
            ["E.5", "d(pc) = 1 ÷ p(arcsec)", "parallax; nearby stars only"],
            ["E.5", "λmax T = 2.90 × 10⁻³ m K", "Wien: hotter = bluer"],
            ["E.5", "HR 溫度軸向右跌", "hot on the left, cool on the right"],
            ["E.5", "左上熱光，右上紅巨，左下白矮", "main sequence runs top-left to bottom-right"],
            ["E.5", "細星白矮，大星超新星", "low mass: red giant → white dwarf; high mass: supergiant → supernova → neutron star/black hole"],
            ["E.5", "鐵 Fe-56 係終點", "fusion beyond iron absorbs energy"],
            ["E.5", "比例題：ratio，常數消去", "L ∝ R²T⁴, b ∝ L/d²"],
            ["E.5", "1 pc = 3.26 ly = 3.09 × 10¹⁶ m", "1 ly = 9.46 × 10¹⁵ m, 1 AU = 1.50 × 10¹¹ m"],
          ]],
          ["rhyme", "解難口訣", "認公式、寫比例、轉單位、對 HR 位置", "Identify the relation → write ratios so constants cancel → convert units → place the star on the HR diagram."],
        ],
      },
      {
        h: "Fusion + stellar equilibrium",
        min: 3.5,
        blocks: [
          ["key", "<b>Nuclear fusion</b>：light nuclei join to form a heavier nucleus, releasing energy (products have higher BE per nucleon)。<br><b>點解要極高 T 同 p</b>：nuclei 帶正電互相 <b>electrostatic repulsion</b>；要有足夠 KE 先可靠近到 <b>strong force</b> 範圍（~10⁻¹⁵ m）。High density/pressure 令碰撞頻率夠高。<br><b>Stellar equilibrium</b>：inward gravitational force = outward pressure (radiation + thermal/gas pressure from fusion)。"],
          ["table", ["Fusion 例子", "方程式 / 數據"], [
            ["Net (main sequence)", "4 \\({}^1_1\\)H → \\({}^4_2\\)He + 2 e⁺ + 2 ν（通過 p–p chain），釋放約 26.7 MeV（包括 positron annihilation）"],
            ["D–T", "\\({}^2_1\\)H + \\({}^3_1\\)H → \\({}^4_2\\)He + \\({}^1_0\\)n，釋放約 17.6 MeV"],
            ["Core 條件", "Sun core ≈ 1.5 × 10⁷ K；surface ≈ 5800 K"],
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　質量（u）：4 個 H atoms 共 4.0313；He-4 atom 4.0026。(a) 計 4H → He 釋放能量（MeV）。(b) 太陽 L = 3.83 × 10²⁶ W，估計每秒 fusion 次數。(1 u = 931.5 MeV c⁻²)", [
            "(a) Δm = 4.0313 − 4.0026 = 0.0287 u [1]；E = 0.0287 × 931.5 = <b>26.7 MeV</b> [1]",
            "(b) 26.7 MeV = 26.7 × 1.60 × 10⁻¹³ = 4.27 × 10⁻¹² J",
            "rate = 3.83 × 10²⁶ ÷ 4.27 × 10⁻¹² = <b>9.0 × 10³⁷ s⁻¹</b> [1] ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　D–T：²H 2.0141 u、³H 3.0160 u、⁴He 4.0026 u、n 1.0087 u。求釋放能量。", [
            "reactants 2.0141 + 3.0160 = 5.0301；products 4.0026 + 1.0087 = 5.0113 u",
            "Δm = 0.0188 u [1]；E = 0.0188 × 931.5 = <b>17.5 MeV</b> [1]（約 17.6 MeV，取決位數）✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Explain</b>　Explain why a main-sequence star does not collapse.", [
            "Gravity pulls matter inwards [1]",
            "Balanced by outward pressure (radiation and thermal/gas pressure) from fusion energy released in the core [1]",
          ]],
          ["eg", "<b>P2 · 2 marks · Explain</b>　Explain why very high temperatures are required for fusion in a star's core.", [
            "Nuclei are positively charged and repel electrostatically [1]",
            "High temperature → high KE, so nuclei can get close enough for the strong force to act and fuse [1]",
          ]],
          ["note", "<b>常考 (perennial favourites)</b>：「Explain why fusion needs high temperature」「Explain why the star is stable / what happens when fuel runs out」。2 marks 的答案固定兩點：<i>repulsion + KE/strong force</i>；<i>gravity inward + pressure outward</i>。"],
          ["rhyme", "口訣 1", "高溫高壓先撞得埋；引力向內，輻射向外"],
          ["trap", ["寫 \"overcome the strong force\" ×，係 overcome <b>electrostatic repulsion</b>。", "Equilibrium 只寫一種力。", "話 star 因為「fusion 令佢膨脹所以冇事」；要講 balance。", "Stars 冇 fusion 之後唔再有 outward pressure → collapse。"]],
        ],
      },
      {
        h: "Luminosity · brightness · Wien",
        min: 4,
        blocks: [
          ["key", "<b>Luminosity L</b>：total power radiated by a star（W）。<b>Apparent brightness b</b>：power received per unit area at Earth（W m⁻²）。<br><b>L = σ A T⁴ = σ4πR²T⁴</b>　<b>b = L ÷ 4πd²</b>　<b>λ<sub>max</sub>T = 2.90 × 10⁻³ m K</b><br>σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴；L☉ = 3.83 × 10²⁶ W；R☉ = 6.96 × 10⁸ m；T☉ ≈ 5800 K"],
          ["table", ["要比較", "用", "比例"], [
            ["Luminosity vs R, T", "L = σ4πR²T⁴", "L ∝ R²T⁴"],
            ["Brightness vs distance", "b = L/4πd²", "b ∝ L/d²（兩倍距離 → b ÷ 4）"],
            ["Peak wavelength", "λmaxT = const", "λmax ∝ 1/T；熱 = 藍，冷 = 紅"],
          ]],
          ["eg", "<b>P2 · 3 marks · Calculate</b>　Star: L = 3.83 × 10²⁹ W，surface T = 3500 K。求半徑（m 同 R☉）。", [
            "L = σ4πR²T⁴ → R² = L ÷ (4πσT⁴) [1]",
            "T⁴ = 3500⁴ = 1.50 × 10¹⁴；4πσ = 7.13 × 10⁻⁷",
            "R² = 3.83 × 10²⁹ ÷ (7.13 × 10⁻⁷ × 1.50 × 10¹⁴) = 3.58 × 10²¹ [1]",
            "R = <b>6.0 × 10¹⁰ m</b> = 6.0 × 10¹⁰ ÷ 6.96 × 10⁸ ≈ <b>86 R☉</b> [1] ✅（red giant 級）",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　Star L = 3.8 × 10²⁸ W，apparent brightness 1.0 × 10⁻⁹ W m⁻²。求距離（m、ly）。", [
            "d = √(L ÷ 4πb) = √(3.8 × 10²⁸ ÷ (4π × 1.0 × 10⁻⁹)) [1]",
            "= √(3.0 × 10³⁶) = <b>1.7 × 10¹⁸ m</b> [1]；÷ 9.46 × 10¹⁵ ≈ <b>1.8 × 10² ly</b> ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　驗證太陽常數：d = 1.50 × 10¹¹ m，L = 3.83 × 10²⁶ W。", [
            "b = 3.83 × 10²⁶ ÷ (4π × (1.50 × 10¹¹)²) [1]",
            "= 3.83 × 10²⁶ ÷ 2.83 × 10²³ = <b>1.35 × 10³ W m⁻²</b> [1] ✅（≈ 1.36 × 10³）",
          ]],
          ["eg", "<b>P2 · 3 marks · Determine</b>　Two stars have equal luminosity. Star X's surface temperature is half that of Y. Determine R<sub>X</sub> : R<sub>Y</sub>.", [
            "L ∝ R²T⁴ → equal L → R²T⁴ same [1]",
            "R ∝ 1/T² [1]",
            "T<sub>X</sub> = ½T<sub>Y</sub> → R<sub>X</sub>/R<sub>Y</sub> = 1/(½)² = <b>4</b> [1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Determine</b>　White dwarf: L = 0.010 L☉，T = 2.0 T☉。求 R 用 R☉。", [
            "R² ∝ L/T⁴ [1]",
            "(R/R☉)² = 0.010 ÷ 2⁴ = 0.010 ÷ 16 = 6.25 × 10⁻⁴ [1]",
            "R = <b>0.025 R☉</b> [1] ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Determine</b>　Star 半徑 2.0 R☉，luminosity 16 L☉。求溫度 (T☉ = 5780 K)。", [
            "L ∝ R²T⁴ → T⁴ ∝ L/R² = 16 ÷ 4 = 4 [1]",
            "T/T☉ = 4^{1/4} = 1.41 [1]",
            "T = 1.41 × 5780 ≈ <b>8.2 × 10³ K</b> [1] ✅",
          ]],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　Sun surface T = 5800 K。λmax = ?　Betelgeuse T = 3500 K，λmax = ?", [
            "Sun：2.90 × 10⁻³ ÷ 5800 = <b>5.0 × 10⁻⁷ m</b>（green/visible）[1]",
            "Betelgeuse：2.90 × 10⁻³ ÷ 3500 = <b>8.3 × 10⁻⁷ m</b>（near infrared，所以睇落紅）[1] ✅",
          ]],
          ["eg", "<b>P1 MCQ · 1 mark · Determine</b>　Two stars same L. X is twice as far as Y. b<sub>X</sub>/b<sub>Y</sub>?", [
            "b ∝ 1/d² → (1/2)² = <b>¼</b> ✅",
          ]],
          ["rhyme", "口訣 2", "L 睇 R² 同 T⁴，b 睇 L 除 d²", "Ratio questions: write the proportionality, plug ratios, constants cancel."],
          ["trap", ["T 冇轉 K 就 ⁴。", "R² 同 T⁴：開方時只 √ 一次；T 要 4th root。", "b 單位 W m⁻²，L 單位 W。", "距離公式漏咗 4π。", "Wien 公式用咗 °C。"]],
        ],
      },
      {
        h: "Parallax · 距離單位",
        min: 2.5,
        blocks: [
          ["key", "<b>Stellar parallax</b>：觀察一粒近星相對遠處背景星嘅<b>視位置移動</b>，兩次觀察相隔約 6 個月（地球軌道兩端）。<b>Parallax angle p</b> = 星位置相對 Sun–Earth 軸嘅偏角（即總移動角度嘅一半）。<br><b>d (pc) = 1 ÷ p (arcsec)</b>　<b>1 parsec</b>：the distance at which a star has a parallax angle of one arcsecond（1 AU 對正 1″）。<br>1 arcsec = 1/3600°；1 pc = 3.26 ly = 3.09 × 10¹⁶ m；1 ly = 9.46 × 10¹⁵ m；1 AU = 1.50 × 10¹¹ m"],
          ["eg", "<b>P2 · 2 marks · Calculate</b>　Star p = 0.10 arcsec。求距離（pc 同 ly）。", [
            "d = 1 ÷ 0.10 = <b>10 pc</b> [1]",
            "= 10 × 3.26 = <b>32.6 ly</b> [1] ✅",
          ]],
          ["eg", "<b>P1 MCQ/P2 · 1 mark · Calculate</b>　p = 0.25 arcsec。d？", [
            "d = 1 ÷ 0.25 = <b>4.0 pc</b> ✅",
          ]],
          ["eg", "<b>P2 · 3 marks · Determine</b>　六個月內，星相對背景星總共移動咗 0.80 arcsec。求距離（pc、m）。", [
            "p = 0.80 ÷ 2 = 0.40 arcsec [1]",
            "d = 1 ÷ 0.40 = <b>2.5 pc</b> [1]",
            "= 2.5 × 3.09 × 10¹⁶ = <b>7.7 × 10¹⁶ m</b> [1] ✅（唔好漏除 2）",
          ]],
          ["note", "<b>限制</b>：越遠 p 越細，角度細到量唔準 → 只適用附近星（地面約幾十到幾百 pc；太空望遠鏡更遠）。<b>常考</b>：「State why parallax only works for nearby stars」答案：parallax angle too small to measure accurately。「Outline how parallax is measured」：measure star position relative to background stars at two times 6 months apart；p = half the angular shift；d = 1/p。"],
          ["rhyme", "口訣 3", "p 細距離遠；總移動一半先係 p"],
          ["trap", ["Parallax angle 當成總移動角度（漏 ÷2）。", "pc、ly 轉換方向錯：1 pc = 3.26 ly（pc 較大）。", "Arcsec 同 degree 混淆。", "答 parallax 適用於所有星 ×。"]],
        ],
      },
      {
        h: "HR diagram",
        min: 3,
        blocks: [
          ["key", "<b>HR (Hertzsprung–Russell) diagram</b>：y 軸 <b>luminosity</b>（常以 L☉ 或 log 標度），x 軸 <b>surface temperature</b>（K，log）— <b>向右減少</b>（熱嘅喺左，冷嘅喺右）。亦可用 spectral class O B A F G K M（熱 → 冷）。"],
          ["table", ["Region", "位置", "特徵 (T, L, R)", "例"], [
            ["Main sequence", "左上 → 右下對角線", "核心 fusion H → He；穩定；大部份星（>~90%）", "Sun（1 L☉，5800 K）"],
            ["Red giants", "右上", "T 低 (cool, red) 但 R 大 → L 高", "Aldebaran"],
            ["Red supergiants", "最右上", "R 極大，L 極高", "Betelgeuse"],
            ["White dwarfs", "左下", "T 高、L 低 → R 好細（約 Earth 大）", "Sirius B"],
          ]],
          ["note", "<b>Main sequence 上</b>：質量越大 → L 越高、T 越高、壽命越短（燃料燒得快）；質量越細 → 越暗越冷、壽命長。<br><b>Colour</b>：hot = blue-white；cool = red（Wien）。"],
          ["eg", "<b>P2 · 3 marks · Sketch / Label</b>　Sketch an HR diagram. Label axes and positions of main sequence, red giants, white dwarfs.", [
            "Axes：vertical = luminosity (increasing upwards)；horizontal = surface temperature (decreasing to the right) [1]",
            "Main sequence = diagonal band from top-left to bottom-right [1]",
            "Red giants/supergiants = top-right；white dwarfs = bottom-left [1]",
          ]],
          ["eg", "<b>P2 · 2 marks · Explain</b>　Explain why a red giant has a high luminosity though its surface temperature is low.", [
            "L = σ4πR²T⁴ [1]；red giant has a very large radius (R²) which outweighs the low T⁴ → large surface area [1]",
          ]],
          ["eg", "<b>P2 · 2 marks · Explain</b>　White dwarf 又熱又暗，點解？", [
            "T high but radius very small (L ∝ R²T⁴) [1]；small surface area → low L [1]",
          ]],
          ["rhyme", "口訣 4", "左熱右冷，上光下暗；紅巨右上，白矮左下", "x-axis reversed: temperature decreases to the right."],
          ["trap", ["HR 溫度軸畫成向右增加。", "Main sequence 畫成水平線。", "紅巨放去左下 / 白矮放去右上。", "Axes 冇單位或冇方向箭頭。"]],
        ],
      },
      {
        h: "Stellar evolution",
        min: 3.5,
        blocks: [
          ["flow", [["Nebula", "gas + dust"], ["Protostar", "gravity collapses cloud, heats it"], ["Main sequence", "core H → He (長時間)"], ["Red giant / supergiant", "core H 用完，shell burning，外層膨脹變冷"]]],
          ["table", ["Initial mass", "Main sequence 之後", "Final remnant"], [
            ["低 / 中（例如 Sun）", "Red giant → 外層拋出成 planetary nebula", "<b>White dwarf</b>（remnant &lt; 1.4 M☉，Chandrasekhar limit；靠 electron degeneracy pressure 支撐）"],
            ["高（遠大於 Sun）", "Red supergiant → 核心逐級 fusion 至 Fe → core collapse → <b>supernova</b>", "<b>Neutron star</b>（remnant 較細）或 <b>black hole</b>（remnant 夠大）"],
          ]],
          ["note", "<b>為何 fusion 止於鐵</b>：Fe-56 BE per nucleon 最大；再 fuse 吸熱而唔係放熱，核心失去 outward pressure → collapse。比 Fe 重嘅元素主要喺 supernova 入面形成（neutron capture）。<br><b>Red giant 形成</b>：核心 H 用完，核心收縮變熱，shell 入面 H fusion，外層膨脹並冷卻。"],
          ["eg", "<b>P2 · 3 marks · Outline</b>　Outline the evolution of a star of about one solar mass after it leaves the main sequence.", [
            "Hydrogen in core used up → becomes red giant (shell fusion, core contracts, envelope expands) [1]",
            "Outer layers ejected as planetary nebula [1]",
            "Core remains as a white dwarf [1]",
          ]],
          ["eg", "<b>P2 · 3 marks · Outline</b>　Outline the evolution of a star of mass much greater than the Sun.", [
            "Leaves main sequence as red supergiant [1]；fuses heavier elements up to iron [1]",
            "Core collapses → supernova → neutron star or black hole [1]",
          ]],
          ["eg", "<b>P1 MCQ · 1 mark · State</b>　Star 喺 HR diagram 位於左下，A) red giant B) white dwarf C) main sequence D) supergiant。", [
            "左下 = hot but dim = small = <b>white dwarf</b> ✅",
          ]],
          ["note", "<b>常考 (perennial favourites)</b>：evolution 路徑（低質量 vs 高質量）；HR diagram 描述 / 位置；ratio 計算（R、T、L）；fusion 條件；parallax。<i>Describe</i> 要有依序階段；<i>Explain</i> 要連結因果（H 用完 → 核心收縮 → 外層膨脹）。"],
          ["rhyme", "口訣 5", "細星變紅巨，白矮收尾；大星超紅巨，爆完剩中子或黑洞"],
          ["trap", ["低質量星會 supernova ×（Sun 只會成為 white dwarf）。", "Main sequence 之後就直接 white dwarf（漏 red giant）。", "話 star 「燒」氧氣：星內係 nuclear fusion。", "Neutron star 同 black hole 判斷基準係 remnant mass，唔係 initial mass 直接。"]],
        ],
      },
      {
        h: "IB 考試位 · command terms + 常考題型",
        min: 2.5,
        blocks: [
          ["table", ["Command term", "全分要寫乜"], [["Explain equilibrium","Outward radiation + gas pressure balances inward gravity."],["Describe fusion conditions","Very high T and density to overcome Coulomb repulsion."],["Outline HR diagram","Luminosity vs temperature (T reversed); main sequence, giants, white dwarfs."],["Calculate","L = σAT⁴, b = L/4πd², d = 1/p (pc)."],["Describe evolution","Mass decides the final state."]]],
          ["table", ["常考題型", "Model answer 步驟 (每步 ≈ 1 mark)"], [["Luminosity","L = 4πR²σT⁴"],["Brightness","b ∝ 1/d²"],["Parallax","d(pc) = 1/p(arcsec)"],["HR position","hot + bright top left; cool + dim bottom right"],["Life cycle","main sequence → red giant → white dwarf (or supernova → NS/BH)"]]],
          ["trap", ["T axis increasing left to right on HR diagram","Using parallax angle in degrees with pc","Confusing luminosity and apparent brightness"]],
          ["note", "<b>Data booklet / 考試貼士</b>: Booklet: L = σAT⁴, b = L/4πd², d = 1/p, 1 pc = 3.26 ly. Place stars on HR with two properties (T and L), not one."],
        ],
      },
      {
        h: "失分位 + 自我檢查",
        min: 1.5,
        blocks: [
          ["trap", ["Fusion 要高溫係克服 strong force（應該係 electrostatic repulsion）。", "Equilibrium 漏 gravity 或 outward pressure 一邊。", "T 冇用 K。", "Parallax angle 冇 ÷ 2。", "d = 1/p 單位係 pc 同 arcsec。", "HR 軸方向錯。", "Ratio 題冇寫 L ∝ R²T⁴。", "b 公式漏 4π。", "Evolution 漏中間階段（red giant、planetary nebula）。", "將 Sun 寫成會 supernova。", "忘記 1 pc = 3.26 ly。"]],
          ["check", [
            "背到 fusion 條件（electrostatic repulsion + strong force）",
            "識解釋 stellar equilibrium",
            "識用 L = σ4πR²T⁴、b = L/4πd²、Wien 做比例同絕對值計算",
            "識用 d = 1/p，記得 p 係一半總移動",
            "識畫 HR diagram 並標出方向同區域",
            "識講低質量同高質量星嘅完整 evolution",
            "識轉 pc、ly、m",
          ]],
        ],
      },
    ],
    summary: [
      "H → He：高溫高壓克服電斥，strong force 結合",
      "引力向內 = 輻射 + 氣壓向外",
      "L = σ4πR²T⁴；比例題 L ∝ R²T⁴",
      "b = L ÷ 4πd²；兩倍遠 → 暗四倍",
      "d(pc) = 1 ÷ p(arcsec)；p 係總移動一半",
      "λmaxT = 2.90 × 10⁻³：熱藍冷紅",
      "HR 溫度向右跌；紅巨右上，白矮左下",
      "細星紅巨白矮，大星超紅巨超新星中子星或黑洞",
    ],
    practice: [
      { q: "A main-sequence star is mainly fusing:", o: ["A. helium into carbon", "B. hydrogen into helium", "C. iron into heavier elements", "D. carbon into oxygen"], m: 1, a: "<b>B</b>. Main-sequence stars fuse hydrogen to helium in the core." },
      { q: "A star has a parallax angle of 0.25 arcsec. Its distance is:", o: ["A. 0.25 pc", "B. 2.5 pc", "C. 4.0 pc", "D. 25 pc"], m: 1, a: "<b>C</b>. d = 1 ÷ 0.25 = 4.0 pc." },
      { q: "Two stars have the same luminosity. Star X is twice as far from Earth as star Y. The ratio of apparent brightness b<sub>X</sub> : b<sub>Y</sub> is:", o: ["A. 1 : 2", "B. 1 : 4", "C. 2 : 1", "D. 4 : 1"], m: 1, a: "<b>B</b>. b ∝ 1/d²; (1/2)² = 1/4." },
      { q: "On a Hertzsprung–Russell diagram a white dwarf is found at:", o: ["A. top left", "B. top right", "C. bottom left", "D. bottom right"], m: 1, a: "<b>C</b>. White dwarfs are hot (left) but dim (bottom)." },
      { q: "Explain why very high temperatures are needed for fusion in the core of a star.", m: 2, a: "Nuclei are positively charged and repel each other (electrostatic repulsion) [1]; high temperature gives high KE so nuclei approach close enough for the strong force to bind them [1]." },
      { q: "Explain why a main-sequence star does not collapse under gravity.", m: 2, a: "Gravity acts inwards [1]; balanced by outward pressure (radiation and gas pressure) from fusion in the core [1]." },
      { q: "A star has a parallax angle of 0.10 arcsec. Calculate its distance in light-years.", m: 2, a: "d = 1/0.10 = 10 pc [1]; 10 × 3.26 = 32.6 ly (≈ 33 ly) [1]." },
      { q: "The position of a star relative to background stars changes by a total of 0.80 arcsec over six months. Determine the distance to the star in parsecs.", m: 3, a: "Parallax angle p = 0.80 ÷ 2 = 0.40 arcsec [1]; d = 1/p [1]; d = 2.5 pc [1]." },
      { q: "A star has luminosity 3.8 × 10²⁸ W and apparent brightness 1.0 × 10⁻⁹ W m⁻². Calculate its distance from Earth.", m: 2, a: "d = √(L ÷ 4πb) [1] = 1.7 × 10¹⁸ m [1]." },
      { q: "A white dwarf has luminosity 0.010 L☉ and surface temperature 2.0 T☉. Determine its radius in terms of R☉.", m: 3, a: "R² ∝ L/T⁴ [1]; = 0.010 ÷ 16 = 6.25 × 10⁻⁴ [1]; R = 0.025 R☉ [1]." },
      { q: "Star X has radius three times that of star Y and a surface temperature half that of Y. Calculate L<sub>X</sub> : L<sub>Y</sub>.", m: 3, a: "L ∝ R²T⁴ [1]; L<sub>X</sub>/L<sub>Y</sub> = 3² × (½)⁴ [1] = 9/16 = 0.56 [1]." },
      { q: "Sketch an HR diagram and mark the main sequence, red giants and white dwarfs.", m: 3, a: "Axes: luminosity vertical (up), surface temperature horizontal, decreasing to the right [1]; main sequence diagonal band top-left to bottom-right [1]; red giants top-right and white dwarfs bottom-left [1]." },
      { q: "Outline the evolution of a star of about one solar mass after it leaves the main sequence.", m: 3, a: "Becomes a red giant (core hydrogen used up) [1]; outer layers ejected as a planetary nebula [1]; core remains as a white dwarf [1]." },
      { q: "Explain why a red giant has a much greater luminosity than the Sun although its surface temperature is lower.", m: 2, a: "L = σ4πR²T⁴ [1]; radius (surface area) is very much larger, outweighing the lower T [1]." },
    ],
  },
});
