//Formality import (unused yet required)
import * as objects from './three/objects'
import * as lights from './three/lights'

import { renderTick } from './three/renderer'
import resizeScreen from './three/resizeScreen'

resizeScreen();
//Render and animate
renderTick() 
