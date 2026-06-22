// Real beginner rowing lesson content + quizzes.
// Each difficulty has 8 levels. Each level = a short lesson + a few quiz questions.

export const DIFFICULTIES = [
  { id: 'novice', name: 'NOVICE', locked: false },
  { id: 'mediocre', name: 'MEDIOCRE', locked: false },
  { id: 'advanced', name: 'ADVANCED', locked: false },
]

export const LESSONS = {
  novice: [
    {
      title: 'Parts of the Boat & Oar',
      summary:
        'Before you row, learn the gear. The boat is called a shell. The pointy front is the bow, the back is the stern. Heads up — rowers sit facing backwards, so the bow (the front) is actually behind you as you row, and you move toward it. You sit on a sliding seat and brace your feet against foot-stretchers. The oar has a handle, a shaft, and a blade (the flat end that catches the water). The point where the oar attaches to the boat is the rigger and gate.',
      quiz: [
        {
          q: 'What is the flat end of the oar that catches the water called?',
          options: ['The handle', 'The blade', 'The rigger', 'The bow'],
          answer: 1,
        },
        {
          q: 'What is the rowing boat itself called?',
          options: ['A shell', 'A canoe', 'A raft', 'A kayak'],
          answer: 0,
        },
        {
          q: 'What do you brace your feet against while rowing?',
          options: ['The bow', 'The gate', 'The foot-stretchers', 'The blade'],
          answer: 2,
        },
      ],
    },
    {
      title: 'Getting Into the Boat Safely',
      summary:
        'Always step into the centre of the boat, never on the thin sides (the bottom of the shell is fragile). Hold both oar handles together for stability as you sit down. Keep your weight low and centred. A shell is tippy, so move slowly and let the oars rest flat on the water to balance you.',
      quiz: [
        {
          q: 'Where should you place your foot when stepping into the shell?',
          options: ['On the thin side', 'In the centre of the boat', 'On the rigger', 'On the seat track'],
          answer: 1,
        },
        {
          q: 'What helps keep the boat stable as you get in?',
          options: [
            'Holding both oar handles together',
            'Standing up tall',
            'Letting go of the oars',
            'Leaning to one side',
          ],
          answer: 0,
        },
      ],
    },
    {
      title: 'Holding the Oar (Grip)',
      summary:
        'Hold the handle with a relaxed, loose grip — fingers hooked over the top, thumbs on the end of the handle. Do not squeeze hard; a tight grip tires your forearms and ruins your feel for the blade. Your wrists stay flat and your hands do the steering of the blade in and out of the water.',
      quiz: [
        {
          q: 'How tight should your grip on the oar handle be?',
          options: ['As tight as possible', 'Relaxed and loose', 'Only using your thumbs', 'You should not hold it'],
          answer: 1,
        },
        {
          q: 'What happens if you grip the oar too tightly?',
          options: [
            'You row faster',
            'Your forearms tire and you lose feel',
            'The boat goes straighter',
            'Nothing changes',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'The Catch',
      summary:
        'The catch is the start of the stroke. You are at the front of the slide, shins vertical, arms reached out long, body tipped slightly forward from the hips. You drop the blade into the water cleanly — like placing it, not slapping it. A good catch sets up the whole stroke.',
      quiz: [
        {
          q: 'At the catch, where are you on the slide?',
          options: ['At the very back', 'In the middle', 'At the front, shins vertical', 'Standing up'],
          answer: 2,
        },
        {
          q: 'How should the blade enter the water at the catch?',
          options: ['Slapped down hard', 'Placed in cleanly', 'Thrown sideways', 'It stays out of the water'],
          answer: 1,
        },
      ],
    },
    {
      title: 'The Drive (Leg Push)',
      summary:
        'The drive is the power phase. Most of your power comes from your LEGS, not your arms. Push hard with your legs first, then swing your back open, then finally pull with the arms — legs, body, arms in that order. The blade stays buried in the water through the whole drive.',
      quiz: [
        {
          q: 'Where does most of your rowing power come from?',
          options: ['The arms', 'The legs', 'The wrists', 'The neck'],
          answer: 1,
        },
        {
          q: 'What is the correct order of the drive?',
          options: ['Arms, body, legs', 'Body, arms, legs', 'Legs, body, arms', 'Legs, arms, body'],
          answer: 2,
        },
      ],
    },
    {
      title: 'The Finish',
      summary:
        'The finish is the end of the drive. Your legs are flat, your body leans slightly back, and you draw the handle into your lower ribs. Then you tap the blade out of the water by pushing the handle down lightly before the hands move away. Keep it smooth and controlled.',
      quiz: [
        {
          q: 'At the finish, where do you draw the handle to?',
          options: ['Your forehead', 'Your lower ribs', 'Above your head', 'Behind your back'],
          answer: 1,
        },
        {
          q: 'How do you get the blade out of the water at the finish?',
          options: [
            'Tap the handle down lightly',
            'Lift the whole oar up high',
            'Let it sink',
            'Pull it sideways',
          ],
          answer: 0,
        },
      ],
    },
    {
      title: 'The Recovery',
      summary:
        'The recovery is the return to the catch. The sequence reverses the drive: hands away first, then body tips forward from the hips, then the knees bend to slide you forward. Move slowly and controlled on the recovery — this is your rest, and rushing it upsets the balance.',
      quiz: [
        {
          q: 'What is the correct order on the recovery?',
          options: ['Knees, body, hands', 'Hands away, body, then knees', 'Body, knees, hands', 'All at once'],
          answer: 1,
        },
        {
          q: 'How fast should the recovery be?',
          options: ['As fast as possible', 'Slow and controlled', 'Faster than the drive', 'It does not matter'],
          answer: 1,
        },
      ],
    },
    {
      title: 'The Full Stroke',
      summary:
        'Now put it together: Catch → Drive (legs, body, arms) → Finish → Recovery (hands, body, knees) → back to the Catch. A strong drive and a slow, smooth recovery is the rhythm of good rowing. Congratulations — you have learned the complete rowing stroke!',
      quiz: [
        {
          q: 'What are the four phases of the rowing stroke in order?',
          options: [
            'Drive, Catch, Recovery, Finish',
            'Catch, Drive, Finish, Recovery',
            'Recovery, Finish, Drive, Catch',
            'Catch, Finish, Drive, Recovery',
          ],
          answer: 1,
        },
        {
          q: 'What is the ideal rhythm of a stroke?',
          options: [
            'Slow drive, fast recovery',
            'Fast drive, fast recovery',
            'Strong drive, slow smooth recovery',
            'No rhythm needed',
          ],
          answer: 2,
        },
      ],
    },
  ],

  mediocre: [
    {
      title: 'Squaring & Feathering',
      summary:
        'Feathering means rolling the blade flat (parallel to the water) during the recovery to cut wind resistance and clear the water. Squaring is rolling it back to vertical just before the catch. This is done with a smooth roll of the inside hand fingers, not a big wrist flick.',
      quiz: [
        {
          q: 'When is the blade feathered (turned flat)?',
          options: ['During the drive', 'During the recovery', 'At the catch', 'Never'],
          answer: 1,
        },
        {
          q: 'Why do rowers feather the blade?',
          options: [
            'To go slower',
            'To reduce wind resistance and clear the water',
            'To make noise',
            'To stop the boat',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Ratio & Rhythm',
      summary:
        'Ratio is the relationship between drive time and recovery time. Good rowing has a quick, powerful drive and a longer, relaxed recovery — roughly a 1:2 ratio. Keeping good ratio lets the boat run (glide) between strokes and conserves your energy.',
      quiz: [
        {
          q: 'A good drive-to-recovery ratio is roughly:',
          options: ['1:1', '1:2 (recovery longer)', '3:1 (drive longer)', '5:1'],
          answer: 1,
        },
        {
          q: 'What does good ratio let the boat do between strokes?',
          options: ['Stop', 'Run (glide)', 'Spin', 'Sink'],
          answer: 1,
        },
      ],
    },
    {
      title: 'Posture & Core',
      summary:
        'Sit tall with a strong, engaged core. Your back should be flat (not hunched) and you pivot from the hips, not the lower spine. A strong core transfers leg power to the handle and protects your back. Slouching leaks power and risks injury.',
      quiz: [
        {
          q: 'Where should you pivot your upper body from?',
          options: ['The hips', 'The lower spine', 'The shoulders', 'The neck'],
          answer: 0,
        },
        {
          q: 'What does a strong core do for your stroke?',
          options: [
            'Nothing',
            'Transfers leg power to the handle and protects your back',
            'Slows you down',
            'Makes you feather',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Steering & Steady State',
      summary:
        'In a single, you steer by applying slightly more pressure on one side. In crew boats, a designated rower or coxswain steers. Steady state is rowing at a sustainable, lower rate for long distances to build aerobic fitness — the foundation of rowing training.',
      quiz: [
        {
          q: 'How do you steer a single by yourself?',
          options: [
            'Lean over the side',
            'Apply more pressure on one side',
            'Stop rowing',
            'Feather both blades',
          ],
          answer: 1,
        },
        {
          q: 'What is "steady state" training for?',
          options: [
            'Sprinting',
            'Building aerobic fitness over long distances',
            'Steering only',
            'Getting into the boat',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Rowing in Sync',
      summary:
        'In a crew boat, everyone follows the stroke seat (the rower nearest the stern). You match their timing exactly — catch together, drive together, finish together. Watching the rower in front and feeling the boat keeps the crew in time. Timing matters more than raw individual strength.',
      quiz: [
        {
          q: 'In a crew boat, who sets the timing everyone follows?',
          options: ['The bow seat', 'The stroke seat', 'The coach on shore', 'Nobody'],
          answer: 1,
        },
        {
          q: 'For a crew, what is most important?',
          options: [
            'Each person rowing their own way',
            'Everyone timing together',
            'Rowing as hard as possible alone',
            'Feathering early',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Power & Stroke Rate',
      summary:
        'Stroke rate is how many strokes you take per minute (spm). You can go faster by increasing power per stroke OR by raising the rate — but raising the rate without keeping length and power just spins the wheels. Aim to keep the stroke long and powerful as the rate climbs.',
      quiz: [
        {
          q: 'What does "stroke rate" measure?',
          options: [
            'Strokes per minute',
            'Boat length',
            'Blade colour',
            'Water temperature',
          ],
          answer: 0,
        },
        {
          q: 'What happens if you raise the rate but lose length and power?',
          options: [
            'You go much faster',
            'You "spin the wheels" with little speed gain',
            'The boat stops',
            'Nothing',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Common Faults & Fixes',
      summary:
        'Common beginner faults: rushing the slide (recovery too fast), "washing out" (pulling the blade out early so it skims the surface), and digging too deep at the catch. Fixes: slow the hands away, keep the blade buried to the finish, and keep catch timing relaxed and clean.',
      quiz: [
        {
          q: 'What is "washing out"?',
          options: [
            'Falling in the water',
            'Pulling the blade out too early so it skims the surface',
            'Rowing in the rain',
            'A clean catch',
          ],
          answer: 1,
        },
        {
          q: 'What is the fix for rushing the slide?',
          options: [
            'Row even faster',
            'Slow the hands away and control the recovery',
            'Grip harder',
            'Skip the catch',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Race Starts & Power Tens',
      summary:
        'A racing start is a sequence of shorter, sharp strokes to get the boat moving from a standstill, building into full strokes. A "power ten" is ten extra-strong strokes called during a race to surge ahead or hold off a rival. Both rely on the clean technique you have already learned, applied with intensity.',
      quiz: [
        {
          q: 'What is a "power ten"?',
          options: [
            'Ten extra-strong strokes to surge in a race',
            'A ten minute rest',
            'Ten rowers in a boat',
            'A type of oar',
          ],
          answer: 0,
        },
        {
          q: 'A racing start begins with what kind of strokes?',
          options: [
            'Long slow strokes',
            'Shorter, sharp strokes building to full ones',
            'No strokes',
            'Only recovery',
          ],
          answer: 1,
        },
      ],
    },
  ],

  advanced: [
    {
      title: 'Boat Feel & Set',
      summary:
        '"Set" is the side-to-side balance of the boat. A well-set boat sits level so both blades clear the water cleanly. Set comes from steady hands at the same height, even pressure, and a stable core — not from leaning. Learning to feel and hold the set is the foundation of advanced rowing.',
      quiz: [
        {
          q: 'What does the "set" of a boat refer to?',
          options: ['Its speed', 'Its side-to-side balance', 'The seat height', 'The oar length'],
          answer: 1,
        },
        {
          q: 'Good set comes mainly from:',
          options: [
            'Leaning to one side',
            'Steady hands at even height and a stable core',
            'Rowing harder',
            'Feathering early',
          ],
          answer: 1,
        },
      ],
    },
    {
      title: 'Connection at the Catch',
      summary:
        'Advanced rowers "connect" the blade to the water at the very front of the stroke, before driving with the legs. The catch must be quick and direct so no length is wasted. A missed connection (driving before the blade is buried) is called "slipping" and loses boat speed.',
      quiz: [
        {
          q: 'When should the legs begin driving relative to the catch?',
          options: [
            'Before the blade is in the water',
            'Just after the blade connects with the water',
            'At the finish',
            'During the recovery',
          ],
          answer: 1,
        },
        {
          q: 'Driving before the blade is buried is called:',
          options: ['Slipping', 'Feathering', 'Washing in', 'Setting'],
          answer: 0,
        },
      ],
    },
    {
      title: 'Suspension & Leg Drive',
      summary:
        'Suspension is hanging your bodyweight off the handle so your legs press against the foot-stretcher with maximum force. Done well, you feel light on the seat as the legs drive. This transfers the most power to the boat and is what separates strong crews from average ones.',
      quiz: [
        {
          q: 'Suspension means:',
          options: [
            'Hanging your weight off the handle to load the legs',
            'Stopping mid-stroke',
            'Lifting the blade high',
            'Sitting heavily on the seat',
          ],
          answer: 0,
        },
        {
          q: 'When suspending well during the drive you should feel:',
          options: ['Heavy on the seat', 'Light on the seat', 'Off balance', 'Nothing'],
          answer: 1,
        },
      ],
    },
    {
      title: 'Length Through the Water',
      summary:
        'Length means moving the blade through as much water as possible each stroke — a long catch reach and a clean finish at the hip. More length per stroke moves the boat farther without raising the rate. Rushing the catch or finishing short throws away free distance.',
      quiz: [
        {
          q: 'Why is stroke length valuable?',
          options: [
            'It moves the boat farther per stroke',
            'It tires you out faster',
            'It is only for beginners',
            'It slows the boat',
          ],
          answer: 0,
        },
        {
          q: 'Finishing the stroke too early is called finishing:',
          options: ['Long', 'Short', 'Deep', 'Square'],
          answer: 1,
        },
      ],
    },
    {
      title: 'Rate Building & Shifting Gears',
      summary:
        'Advanced crews change stroke rate on command while holding length and power — "shifting gears." Raising the rate is done by quickening the hands and bodies on the recovery, NOT by rushing the slide with the legs. Smooth gear changes keep the boat running between strokes.',
      quiz: [
        {
          q: 'To raise the rate without losing the boat run, you quicken:',
          options: [
            'The hands and body on the recovery',
            'Only the legs on the recovery',
            'The drive only',
            'Nothing',
          ],
          answer: 0,
        },
        {
          q: '"Shifting gears" in rowing means:',
          options: [
            'Changing the stroke rate on command',
            'Steering',
            'Stopping the boat',
            'Switching seats',
          ],
          answer: 0,
        },
      ],
    },
    {
      title: 'Negative Splits & Pacing',
      summary:
        'A "split" is your time per 500m. Rowing a negative split means the second half of the race is faster than the first. Good pacing avoids going out too hard and dying — you hold a strong, controlled pace early and have power left to surge at the end.',
      quiz: [
        {
          q: 'A "split" measures:',
          options: ['Time per 500m', 'Stroke rate', 'Boat weight', 'Wind speed'],
          answer: 0,
        },
        {
          q: 'A negative split means:',
          options: [
            'The second half is faster than the first',
            'The first half is faster',
            'Both halves are equal',
            'You stop rowing',
          ],
          answer: 0,
        },
      ],
    },
    {
      title: 'Sprint Finish Technique',
      summary:
        'In the final sprint you raise the rate and intensity without losing form. Keep the catches sharp and the finishes clean even as you tire — form falls apart fastest when fatigued. A controlled sprint beats a frantic one that washes out and loses length.',
      quiz: [
        {
          q: 'During a sprint finish you should:',
          options: [
            'Keep catches sharp and form clean while raising intensity',
            'Let your technique fall apart',
            'Slow down',
            'Stop feathering',
          ],
          answer: 0,
        },
        {
          q: 'What tends to break down most when a rower is fatigued?',
          options: ['Technique and length', 'The oar', 'The seat', 'The boat set is automatic'],
          answer: 0,
        },
      ],
    },
    {
      title: 'Mental Race Strategy',
      summary:
        'Racing is as mental as physical. Have a race plan broken into chunks (start, settle, middle, sprint), focus on one technical cue at a time, and stay relaxed under pressure. Champions control what they can — their own rhythm and focus — rather than panicking about other crews.',
      quiz: [
        {
          q: 'A good race plan is usually broken into:',
          options: [
            'Chunks like start, settle, middle, and sprint',
            'One long effort with no plan',
            'Only the finish',
            'Random bursts',
          ],
          answer: 0,
        },
        {
          q: 'Under race pressure, you should focus on:',
          options: [
            'Your own rhythm and one cue at a time',
            'Watching every other crew',
            'Panicking',
            'Nothing at all',
          ],
          answer: 0,
        },
      ],
    },
  ],
}

export const NUM_LABELS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

// Real YouTube tutorials per level. `id` = a verified embeddable video;
// `search` = an exact topic query that opens relevant tutorials on YouTube.
export const VIDEOS = {
  novice: [
    { id: 'WBvHK0MpzL8' },   // Learn to Row intro / boat & stroke overview
    { id: 'Mr5XC-_b9G4' },   // Getting in and out of a single scull
    { id: 'Wdj_-fO5gdw' },   // Sculling grip, feathering & squaring
    { id: 'WBvHK0MpzL8' },   // Catch (full stroke breakdown)
    { id: 'WBvHK0MpzL8' },   // Drive
    { id: 'WBvHK0MpzL8' },   // Finish
    { id: 'WBvHK0MpzL8' },   // Recovery
    { id: 'WBvHK0MpzL8' },   // Full stroke
  ],
  mediocre: [
    { id: 'W-PmMDqtxOw' },   // Feathering and squaring properly
    { search: 'rowing ratio and rhythm drill' },
    { search: 'rowing posture core body position technique' },
    { search: 'sculling steering and steady state rowing' },
    { search: 'rowing in time crew timing together' },
    { search: 'rowing stroke rate and power application' },
    { search: 'common rowing technique faults and fixes' },
    { search: 'rowing racing start sequence tutorial' },
  ],
  advanced: [
    { search: 'rowing boat balance set drills' },
    { search: 'rowing catch connection front end technique' },
    { search: 'rowing suspension leg drive connection power' },
    { search: 'rowing stroke length through the water' },
    { search: 'rowing shifting gears stroke rate building' },
    { search: 'rowing splits pacing negative split' },
    { search: 'rowing sprint finish technique' },
    { search: 'rowing race strategy mental preparation' },
  ],
}

// Per-level mini-games (all tap-only, mobile friendly).
// types: connect (tap-to-pair) · spot (tap the mistakes) · order (tap in sequence)
//        timing (tap when the marker is in the zone) · mcq (scored multiple choice)
// Each difficulty follows the same 8-level pattern, with harder content.
export const GAMES = {
  novice: [
    { type: 'connect', prompt: 'Match each boat part (rowers face backwards!)', pairs: [
      ['Bow', 'The front end'], ['Stern', 'The back end'],
      ['Blade', 'Catches the water'], ['Seat', 'Slides as you row'] ] },
    { type: 'spot', prompt: 'Tap the posture MISTAKES', items: [
      { t: 'Sit tall', bad: false }, { t: 'Hunched shoulders', bad: true },
      { t: 'Flat back', bad: false }, { t: 'Slouching backwards', bad: true },
      { t: 'Pivot from the hips', bad: false }, { t: 'Rounded spine', bad: true } ] },
    { type: 'order', prompt: 'Sequence the catch (front of the stroke)', steps: [
      'Reach the arms out long', 'Tip the body forward', 'Slide to the front', 'Drop the blade in' ] },
    { type: 'timing', prompt: 'Tap when the marker is in the green zone — the legs push at the catch!', hits: 3 },
    { type: 'mcq', prompt: 'The Finish', questions: [
      { q: 'Where do you draw the handle at the finish?', options: ['Your forehead', 'Your lower ribs', 'Over your head'], answer: 1 },
      { q: 'How does the blade come out of the water?', options: ['Tap the handle down', 'Lift the oar high', 'Let it sink'], answer: 0 } ] },
    { type: 'order', prompt: 'Order the recovery movements', steps: [
      'Hands away', 'Body tips forward', 'Knees bend to slide' ] },
    { type: 'connect', prompt: 'Match each stroke phase to its description', pairs: [
      ['Catch', 'Blade enters the water'], ['Drive', 'The power phase'],
      ['Finish', 'Blade comes out'], ['Recovery', 'Return to the catch'] ] },
    { type: 'mcq', prompt: 'Beginner Challenge', questions: [
      { q: 'What is the rowing boat called?', options: ['A shell', 'A canoe', 'A raft'], answer: 0 },
      { q: 'Where does most power come from?', options: ['The arms', 'The legs', 'The wrists'], answer: 1 },
      { q: 'Correct order of the drive?', options: ['Arms, body, legs', 'Legs, body, arms', 'Body, legs, arms'], answer: 1 } ] },
  ],
  mediocre: [
    { type: 'connect', prompt: 'Match the blade term to its meaning', pairs: [
      ['Feather', 'Blade turned flat'], ['Square', 'Blade turned vertical'],
      ['Ratio', 'Drive vs recovery time'], ['Run', 'The boat gliding'] ] },
    { type: 'spot', prompt: 'Tap the faults to AVOID', items: [
      { t: 'Smooth recovery', bad: false }, { t: 'Rushing the slide', bad: true },
      { t: 'Strong, clean catch', bad: false }, { t: 'Washing out', bad: true },
      { t: 'Good length', bad: false }, { t: 'Digging too deep', bad: true } ] },
    { type: 'order', prompt: 'Order the blade actions (finish to next catch)', steps: [
      'Tap the blade out', 'Feather (turn it flat)', 'Carry it flat on recovery', 'Square it before the catch' ] },
    { type: 'timing', prompt: 'Keep the rhythm — tap on every catch', hits: 4 },
    { type: 'mcq', prompt: 'Steering & Steady State', questions: [
      { q: 'How do you steer a single?', options: ['Lean over the side', 'More pressure on one side', 'Stop rowing'], answer: 1 },
      { q: 'Steady state mainly builds…', options: ['Sprint speed', 'Aerobic fitness', 'Nothing'], answer: 1 } ] },
    { type: 'order', prompt: 'Order how to raise the rate cleanly', steps: [
      'Keep length and power', 'Quicken the hands away', 'Quicken the body', 'Lift the rate' ] },
    { type: 'connect', prompt: 'Match the crew-rowing idea', pairs: [
      ['Stroke seat', 'Sets the timing'], ['Crew', 'Follows the stroke'],
      ['Catch', 'Hit it together'], ['Steady state', 'Builds the base'] ] },
    { type: 'mcq', prompt: 'Intermediate Challenge', questions: [
      { q: 'A good drive:recovery ratio is…', options: ['1:1', '1:2', '3:1'], answer: 1 },
      { q: 'Stroke rate measures…', options: ['Strokes per minute', 'Boat length', 'Blade colour'], answer: 0 },
      { q: '"Washing out" means…', options: ['Falling in', 'Blade out too early', 'A clean catch'], answer: 1 } ] },
  ],
  advanced: [
    { type: 'connect', prompt: 'Match the term to its meaning', pairs: [
      ['Set', 'Side-to-side balance'], ['Suspension', 'Hang off the handle'],
      ['Length', 'Water moved per stroke'], ['Split', 'Time per 500m'] ] },
    { type: 'spot', prompt: 'Tap the MISTAKES', items: [
      { t: 'Steady hands, even height', bad: false }, { t: 'Leaning to one side', bad: true },
      { t: 'Hang weight off the handle', bad: false }, { t: 'Sitting heavy on the seat', bad: true },
      { t: 'Long reach at the catch', bad: false }, { t: 'Rushing the slide', bad: true } ] },
    { type: 'order', prompt: 'Order a clean front-end connection', steps: [
      'Reach to the catch', 'Drop the blade in', 'Connect to the water', 'Drive the legs' ] },
    { type: 'timing', prompt: 'Hold race rhythm — nail every catch', hits: 5 },
    { type: 'mcq', prompt: 'Pacing & Splits', questions: [
      { q: 'A "split" is…', options: ['Time per 500m', 'Stroke rate', 'Boat weight'], answer: 0 },
      { q: 'A negative split means…', options: ['Faster second half', 'Faster first half', 'Even halves'], answer: 0 } ] },
    { type: 'order', prompt: 'Order a race plan', steps: [
      'Start', 'Settle', 'Middle', 'Sprint' ] },
    { type: 'connect', prompt: 'Match the racing term', pairs: [
      ['Power 10', 'Ten strong strokes'], ['Sprint', 'Raise rate & intensity'],
      ['Suspension', 'Feel light on the seat'], ['Negative split', 'Faster second half'] ] },
    { type: 'mcq', prompt: 'Advanced Challenge', questions: [
      { q: 'Suspension means…', options: ['Hang off the handle', 'Sit heavy', 'Pull with arms only'], answer: 0 },
      { q: 'What is a "power ten"?', options: ['Ten strong strokes', 'A ten-minute rest', 'Ten rowers'], answer: 0 },
      { q: 'In a sprint you should…', options: ['Keep form sharp', 'Let form fall apart', 'Slow down'], answer: 0 } ] },
  ],
}
