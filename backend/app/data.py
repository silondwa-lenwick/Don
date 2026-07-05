"""Seed training data for the crisis-message triage classifier.

This is a small, hand-curated dataset used to train a lightweight model at
startup. It is intentionally illustrative rather than exhaustive; in a real
deployment this would be replaced by a labelled corpus from prior relief
efforts. Each item maps a short help-request message to a need category.
"""

from __future__ import annotations

# Categories the model routes messages into.
CATEGORIES = ["Medical", "Food & Water", "Shelter", "Rescue", "Other"]

TRAINING_DATA: list[tuple[str, str]] = [
    # Medical
    ("my father is having chest pains and cannot breathe", "Medical"),
    ("we need insulin for a diabetic child urgently", "Medical"),
    ("someone here is bleeding badly and needs a doctor", "Medical"),
    ("there is an injured person with a broken leg", "Medical"),
    ("we require first aid supplies and bandages", "Medical"),
    ("an elderly woman collapsed and is unconscious", "Medical"),
    ("need ambulance for a pregnant woman in labour", "Medical"),
    ("high fever and no medicine available for the kids", "Medical"),
    ("my neighbour needs oxygen and his machine has no power", "Medical"),
    ("deep wound getting infected please send antibiotics", "Medical"),
    # Food & Water
    ("we have not eaten in two days and need food", "Food & Water"),
    ("there is no clean drinking water in our area", "Food & Water"),
    ("families here are running out of baby formula", "Food & Water"),
    ("please send bottled water we are very thirsty", "Food & Water"),
    ("we need rice and canned food for twenty people", "Food & Water"),
    ("the water supply is contaminated and unsafe to drink", "Food & Water"),
    ("hungry children at the shelter need meals", "Food & Water"),
    ("out of food supplies for the whole neighbourhood", "Food & Water"),
    ("need water purification tablets and drinking water", "Food & Water"),
    ("no groceries left and shops are all closed", "Food & Water"),
    # Shelter
    ("our house was destroyed and we have nowhere to sleep", "Shelter"),
    ("we need tents and blankets for the night", "Shelter"),
    ("the roof collapsed and it is raining on us", "Shelter"),
    ("families are sleeping outside and need shelter", "Shelter"),
    ("we need a safe place to stay away from the flood", "Shelter"),
    ("looking for temporary housing for displaced people", "Shelter"),
    ("cold weather and no warm clothing or blankets", "Shelter"),
    ("our home is unsafe we need somewhere to go", "Shelter"),
    ("need sleeping bags and a dry place tonight", "Shelter"),
    ("evacuated from our village and have no accommodation", "Shelter"),
    # Rescue
    ("people are trapped under the rubble please help", "Rescue"),
    ("we are stranded on the roof surrounded by water", "Rescue"),
    ("a child is stuck in a collapsed building", "Rescue"),
    ("boat capsized and someone is drowning", "Rescue"),
    ("we are trapped in the basement water is rising", "Rescue"),
    ("send a rescue team we cannot get out of the house", "Rescue"),
    ("landslide blocked the exit and we are trapped inside", "Rescue"),
    ("stuck in the car surrounded by floodwater", "Rescue"),
    ("need immediate evacuation from a burning building", "Rescue"),
    ("family trapped on second floor cannot escape flames", "Rescue"),
    # Other
    ("can you tell me where the nearest relief centre is", "Other"),
    ("i want to volunteer to help with the relief effort", "Other"),
    ("how can i donate supplies to the affected families", "Other"),
    ("is there any update on when the roads will reopen", "Other"),
    ("looking for information about missing persons", "Other"),
    ("the power has been out but everyone here is safe", "Other"),
    ("just checking what services are available nearby", "Other"),
    ("need help contacting relatives in another city", "Other"),
    ("where can i charge my phone in this area", "Other"),
    ("thank you for the help earlier everything is fine now", "Other"),
]
